// src/core/api.js

import { getExtData } from "../utils/storage.js";
import { GlobalState } from "./state.js";
import { TitaniaLogger } from "./logger.js";
import { getContextData } from "./context.js";
import { getChatHistory, scopeAndSanitizeHTML, generateScopeId } from "../utils/helpers.js";
import { startTimer, stopTimer } from "../ui/floatingBtn.js";

import { applyScriptSelection } from "../ui/mainWindow.js";

// 处理生成请求 (集成 增强版诊断系统 + 氛围驱动设计)
export async function handleGenerate(forceScriptId = null, silent = false) {
    const data = getExtData();
    const cfg = data.config || {};
    const dirDefaults = data.director || { length: "", perspective: "auto", style_ref: "" };

    // --- 0. 诊断数据初始化 ---
    const startTime = Date.now();
    let diagnostics = {
        phase: 'init',
        profile: '',
        model: '',
        endpoint: '',
        input_stats: { sys_len: 0, user_len: 0 },
        network: { status: 0, statusText: '', contentType: '', latency: 0 },
        stream_stats: { chunks: 0, ttft: 0 },
        raw_response_snippet: ''
    };

    // --- 凭证解析器 ---
    let activeProfileId = cfg.active_profile_id || "default";
    let profiles = cfg.profiles || [
        { id: "st_sync", name: "🔗 跟随 SillyTavern", type: "internal" },
        { id: "default", name: "默认自定义", type: "custom", url: cfg.url || "", key: cfg.key || "", model: cfg.model || "gpt-3.5-turbo" }
    ];
    let currentProfile = profiles.find(p => p.id === activeProfileId) || profiles[1];
    diagnostics.profile = currentProfile.name;

    let finalUrl = "", finalKey = "", finalModel = "";
    if (currentProfile.type === 'internal') {
        if (typeof settings !== 'undefined') {
            finalUrl = settings.api_url_openai || "";
            finalKey = settings.api_key_openai || "";
            finalModel = settings.api_model_openai || "gpt-3.5-turbo";
        } else {
            const errText = "错误：无法读取 SillyTavern 全局设置";
            if (!silent) alert(errText);
            TitaniaLogger.error("配置错误", errText, diagnostics);
            return;
        }
    } else {
        finalUrl = currentProfile.url || "";
        finalKey = currentProfile.key || "";
        finalModel = currentProfile.model || "gpt-3.5-turbo";
    }

    diagnostics.model = finalModel;
    diagnostics.endpoint = finalUrl;

    if (!finalKey && currentProfile.type !== 'internal') {
        alert("配置缺失：请先去设置填 API Key！");
        return;
    }

    const scriptId = forceScriptId || GlobalState.lastUsedScriptId || $("#t-sel-script").val();
    const script = GlobalState.runtimeScripts.find(s => s.id === scriptId);
    if (!script) {
        if (!silent) alert("请选择剧本");
        return;
    }
    // [修复] 只有非静默模式（用户手动触发）才更新 lastUsedScriptId
    // 后台自动生成不应影响用户的剧本选择状态
    if (!silent) {
        GlobalState.lastUsedScriptId = script.id;
        if ($("#t-main-view").length > 0) applyScriptSelection(script.id);
    }

    const ctx = await getContextData();
    const $floatBtn = $("#titania-float-btn");
    const useStream = cfg.stream !== false;

    if (!silent) $("#t-overlay").remove();

    GlobalState.isGenerating = true;
    $floatBtn.addClass("t-loading");
    $("#t-btn-like").html('<i class="fa-regular fa-heart"></i>').prop("disabled", false);

    // 启动计时器
    startTimer();

    if (!silent && window.toastr) toastr.info(`🚀 [${currentProfile.name}] 正在连接模型演绎...`, "Titania Echo");

    try {
        // --- 1. 准备 Prompt (核心优化：氛围驱动 + 外联样式) ---
        diagnostics.phase = 'prepare_prompt';

        // 生成唯一 ID
        const scopeId = generateScopeId();

        const dLen = dirDefaults.length;
        const dPers = dirDefaults.perspective;
        const dStyle = dirDefaults.style_ref;

        // 【重写 System Prompt】
        let sys = `You are a Visual Director and CSS Artist.
Your task is to generate an immersive HTML scene based on the user's scenario.

[Process]
1. **Atmosphere Analysis**: Analyze the mood/emotion of the scenario. (e.g., Sadness -> Cold colors, blur; Joy -> Warm colors, bounce).
2. **Visual Metaphor**: Choose CSS effects that represent the mood (e.g., gradients, shadows, borders, transparency).
3. **Coding**: Generate the HTML and CSS.

[Technical Constraints - STRICT]
1. **Container ID**: You MUST wrap your entire HTML content inside <div id="${scopeId}">...</div>.
2. **Scoped CSS**: Output a <style> block. ALL CSS selectors MUST start with #${scopeId} to prevent global pollution.
   - CORRECT: #${scopeId} .text { color: red; }
   - WRONG: .text { color: red; } / body { background: black; }
3. **Advanced Styling**: Use @keyframes for subtle animations (fade-in, floating, glow). Use pseudo-elements (::before/::after) for decorations.
4. **Format**: Output raw HTML string. No markdown (\`\`\`).
5. **Language**: Narrative content MUST be in Chinese.`;

        if (dPers === '1st') sys += " Write strictly in First Person perspective (I/Me).";
        else if (dPers === '3rd') sys += ` Write strictly in Third Person perspective (${ctx.charName}/He/She).`;

        let user = `[Roleplay Context]\nCharacter: ${ctx.charName}\nUser: ${ctx.userName}\n\n`;

        let directorInstruction = "";
        if (dLen) directorInstruction += `1. Length: Keep response around ${dLen}.\n`;
        if (dStyle) directorInstruction += `2. Style Reference: Mimic this vibe (do not copy text):\n<style_ref>\n${dStyle.substring(0, 1000)}\n</style_ref>\n`;
        if (directorInstruction) user += `[Director Instructions]\n${directorInstruction}\n`;

        if (ctx.persona) user += `[Character Persona]\n${ctx.persona}\n\n`;
        if (ctx.worldInfo) user += `[World Info]\n${ctx.worldInfo}\n\n`;

        if (script.mode === 'echo') {
            const limit = cfg.history_limit || 10;
            const history = getChatHistory(limit);
            user += history && history.trim().length > 0
                ? `[Conversation History]\n${history}\n\n`
                : `[Conversation History]\n(Empty)\n\n`;
        } else {
            user += `[Mode]\nAlternate Universe (Ignore chat history)\n\n`;
        }

        user += `[Scenario Request]\n${script.prompt.replace(/{{char}}/g, ctx.charName).replace(/{{user}}/g, ctx.userName)}`;

        diagnostics.input_stats.sys_len = sys.length;
        diagnostics.input_stats.user_len = user.length;

        TitaniaLogger.info(`开始生成: ${script.name}`, { profile: currentProfile.name, scopeId: scopeId });

        // --- 2. 发起请求 ---
        diagnostics.phase = 'fetch_start';
        let endpoint = finalUrl.trim().replace(/\/+$/, "");
        if (!endpoint) throw new Error("ERR_CONFIG: API URL 未设置");
        if (!endpoint.endsWith("/chat/completions")) {
            if (endpoint.endsWith("/v1")) endpoint += "/chat/completions";
            else endpoint += "/v1/chat/completions";
        }
        diagnostics.endpoint = endpoint;

        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${finalKey}` },
            body: JSON.stringify({
                model: finalModel,
                messages: [{ role: "system", content: sys }, { role: "user", content: user }],
                stream: useStream
            })
        });

        diagnostics.network.status = res.status;
        diagnostics.network.latency = Date.now() - startTime;

        if (!res.ok) {
            try { diagnostics.raw_response_snippet = (await res.text()).substring(0, 500); } catch (e) { }
            throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
        }

        // --- 3. 接收内容 ---
        diagnostics.phase = useStream ? 'streaming' : 'parsing_json';
        let rawContent = "";

        if (useStream) {
            const reader = res.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = "";
            let chunkCount = 0;
            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    if (chunkCount === 0) diagnostics.stream_stats.ttft = Date.now() - startTime;
                    chunkCount++;
                    diagnostics.stream_stats.chunks = chunkCount;
                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split("\n");
                    buffer = lines.pop();
                    for (const line of lines) {
                        const trimmed = line.trim();
                        if (!trimmed || !trimmed.startsWith("data: ")) continue;
                        const jsonStr = trimmed.replace(/^data: /, "").trim();
                        if (jsonStr === "[DONE]") continue;
                        try {
                            const json = JSON.parse(jsonStr);
                            const chunk = json.choices?.[0]?.delta?.content || "";
                            if (chunk) rawContent += chunk;
                        } catch (e) { }
                    }
                }
            } catch (streamErr) { throw new Error(`Stream Interrupted: ${streamErr.message}`); }
            if (chunkCount === 0) throw new Error("Stream Empty");
        } else {
            const jsonText = await res.text();
            try {
                const json = JSON.parse(jsonText);
                rawContent = json.choices?.[0]?.message?.content || "";
            } catch (jsonErr) { throw new Error("Invalid JSON"); }
        }

        if (!rawContent || rawContent.trim().length === 0) throw new Error("ERR_EMPTY_CONTENT");

        // --- 4. 清洗与注入 (Safeguard B 应用) ---
        diagnostics.phase = 'validation';

        // 简单清洗 Markdown 标记
        let cleanContent = rawContent.replace(/```html/gi, "").replace(/```/g, "").trim();

        // [新增] 调用 helpers 中的清洗函数，传入生成的 scopeId
        let finalOutput = scopeAndSanitizeHTML(cleanContent, scopeId);

        GlobalState.lastGeneratedContent = finalOutput;
        diagnostics.phase = 'complete';

        // 停止计时器
        stopTimer();

        const elapsed = GlobalState.lastGenerationTime / 1000;
        if (!silent && window.toastr) toastr.success(`✨ 《${script.name}》演绎完成！(${elapsed.toFixed(1)}s)`, "Titania Echo");
        $floatBtn.addClass("t-notify");

    } catch (e) {
        console.error("Titania Generate Error:", e);

        // 出错时也停止计时器
        stopTimer();

        diagnostics.network.latency = Date.now() - startTime;
        diagnostics.phase += "_failed";
        TitaniaLogger.error("生成过程发生异常", e, diagnostics);

        const errHtml = `<div style="color:#ff6b6b; text-align:center; padding:20px; border:1px dashed #ff6b6b; background: rgba(255,107,107,0.1); border-radius:8px;">
            <div style="font-size:3em; margin-bottom:10px;"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <div style="font-weight:bold; margin-bottom:5px;">演绎出错了</div>
            <div style="font-size:0.9em; margin-bottom:15px; color:#faa;">${e.message || "未知错误"}</div>
            <div style="font-size:0.8em; color:#ccc; background:#222; padding:10px; border-radius:4px; text-align:left;">
                诊断提示：API调用失败或内容解析错误。<br>请检查 Key 余额或网络连接。
            </div>
        </div>`;

        GlobalState.lastGeneratedContent = errHtml;
        $floatBtn.addClass("t-notify");
        if (!silent && window.toastr) toastr.error("生成失败", "Titania Error");
    } finally {
        GlobalState.isGenerating = false;
        $floatBtn.removeClass("t-loading");
    }
}