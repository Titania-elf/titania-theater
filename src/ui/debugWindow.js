// src/ui/debugWindow.js

import { getExtData } from "../utils/storage.js";
import { GlobalState } from "../core/state.js";
import { getContextData } from "../core/context.js";
import { getChatHistory, generateScopeId, estimateTokens } from "../utils/helpers.js";

/**
 * 显示 Prompt 审查窗口 (IDE 风格 + 可折叠 Context)
 */
export async function showDebugInfo() {
    // 1. 基础检查
    const script = GlobalState.runtimeScripts.find(s => s.id === GlobalState.lastUsedScriptId);
    if (!script) {
        if (window.toastr) toastr.warning("请先选择一个剧本"); else alert("请先选择一个剧本");
        return;
    }

    const data = getExtData();
    const cfg = data.config || {};
    const d = await getContextData();

    // 2. 导演参数
    const dirDefaults = data.director || { length: "", perspective: "auto", style_ref: "" };
    const dLen = dirDefaults.length ? "已介入" : "默认";
    const dPers = dirDefaults.perspective === 'auto' ? "自动" : (dirDefaults.perspective === '1st' ? "第一人称" : "第三人称");
    
    // 3. Profile
    let activeProfileId = cfg.active_profile_id || "default";
    let profiles = cfg.profiles || [];
    let currentProfile = profiles.find(p => p.id === activeProfileId) || { name: "未知", model: "unknown" };
    let displayModel = currentProfile.type === 'internal' ? "(跟随 ST)" : (currentProfile.model || "gpt-3.5-turbo");

    // 4. 数据准备
    // System Prompt (还是保持长文本，因为它通常是一体的)
    const scopeId = generateScopeId(); 
    let sysPrompt = `You are a Visual Director and CSS Artist.
Your task is to generate an immersive HTML scene based on the user's scenario.

[Process]
1. **Atmosphere Analysis**: Analyze the mood/emotion.
2. **Visual Metaphor**: Choose CSS effects.
3. **Coding**: Generate HTML and CSS.

[Technical Constraints - STRICT]
1. **Container ID**: Wrap content in <div id="${scopeId}">.
2. **Scoped CSS**: ALL selectors MUST start with #${scopeId}.
3. **Format**: Raw HTML string.
4. **Language**: Chinese.`;

    if (dirDefaults.perspective === '1st') sysPrompt += " Write in First Person (I/Me).";
    else if (dirDefaults.perspective === '3rd') sysPrompt += ` Write in Third Person (${d.charName}).`;

    const sysTokens = estimateTokens(sysPrompt);

    // --- User Context 构建 (改为结构化数组) ---
    // 每个元素包含: { title: string, content: string, detail: string }
    let contextBlocks = [];

    // Block 1: 基础设置
    contextBlocks.push({
        title: "[Roleplay Context]",
        content: `Character: ${d.charName}\nUser: ${d.userName}`,
        detail: "角色与用户绑定"
    });

    // Block 2: 导演指令
    let dirContent = "";
    if (data.director.length) dirContent += `[Director] Length: ${data.director.length}\n`;
    if (data.director.style_ref) dirContent += `[Director] Style Ref: (Provided)\n`;
    if (dirContent) {
        contextBlocks.push({ title: "[Director]", content: dirContent.trim(), detail: "导演额外指令" });
    }

    // Block 3: Persona
    if (d.persona) {
        contextBlocks.push({
            title: "[Character Persona]",
            content: d.persona,
            detail: "角色人设"
        });
    }
    
    // Block 3.5: User Persona (补漏)
    if (d.userDesc) {
        contextBlocks.push({
            title: "[User Persona]",
            content: d.userDesc,
            detail: "用户设定"
        });
    }

    // Block 4: World Info
    if (d.worldInfo) {
        contextBlocks.push({
            title: "[World Info]",
            content: d.worldInfo,
            detail: "世界书/Lore"
        });
    }

    // Block 5: History / Mode
    if (script.mode === 'echo') {
        const limit = cfg.history_limit || 10;
        const hist = getChatHistory(limit);
        const histLines = hist ? hist.split('\n').length : 0;
        contextBlocks.push({
            title: "[Conversation History]",
            content: hist && hist.trim() ? hist : "(无历史记录)",
            detail: `聊天记录 (${histLines} 行)`
        });
    } else {
        contextBlocks.push({
            title: "[Mode Info]",
            content: "Alternate Universe (Ignore chat history)",
            detail: "平行世界模式"
        });
    }

    // Block 6: Request (Prompt)
    const finalScriptPrompt = script.prompt.replace(/{{char}}/g, d.charName).replace(/{{user}}/g, d.userName);
    contextBlocks.push({
        title: "[Scenario Request]",
        content: finalScriptPrompt,
        detail: "剧本核心指令",
        isOpen: true // 默认展开这个
    });

    // 计算 User 总 Token
    let totalUserTokens = 0;
    contextBlocks.forEach(b => totalUserTokens += estimateTokens(b.content));

    // --- UI 渲染 ---
    $("#t-main-view").hide();

    // 构建上下文列表的 HTML
    const contextHtml = contextBlocks.map((b, idx) => {
        const t = estimateTokens(b.content);
        const openClass = b.isOpen ? 'open' : '';
        return `
        <div class="t-fold-row ${openClass}" data-idx="${idx}">
            <div class="t-fold-head">
                <i class="fa-solid fa-caret-right t-fold-icon"></i>
                <span class="t-fold-title">${b.title}</span>
                <span class="t-fold-meta">${b.detail} · ${t} tokens</span>
            </div>
            <div class="t-fold-body">${b.content}</div>
        </div>`;
    }).join('');

    const html = `
    <div class="t-box t-dbg-container" id="t-debug-view">
        <div class="t-header" style="flex-shrink:0;">
            <span class="t-title-main">📊 调试控制台</span>
            <span class="t-close" id="t-debug-close">&times;</span>
        </div>
        
        <div class="t-dbg-header-bar">
            <div class="t-dbg-stat-item"><i class="fa-solid fa-server"></i> <span class="t-dbg-highlight">${displayModel}</span></div>
            <div class="t-dbg-stat-item"><i class="fa-solid fa-fingerprint"></i> Scope: <span class="t-dbg-highlight">${scopeId}</span></div>
            <div class="t-dbg-stat-item" style="margin-left:auto; color:#bfa15f;"><i class="fa-solid fa-coins"></i> Total Est: ${sysTokens + totalUserTokens} tokens</div>
        </div>

        <div class="t-dbg-body">
            <!-- 左侧：参数表 -->
            <div class="t-dbg-sidebar">
                <div class="t-param-group">
                    <div class="t-param-title">基本信息</div>
                    <div class="t-param-row"><span class="t-param-key">剧本</span><span class="t-param-val" style="color:#bfa15f; max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${script.name}</span></div>
                    <div class="t-param-row"><span class="t-param-key">模式</span><span class="t-param-val">${script.mode === 'echo' ? '回声' : '平行'}</span></div>
                </div>
                <div class="t-param-group">
                    <div class="t-param-title">导演参数</div>
                    <div class="t-param-row"><span class="t-param-key">视角</span><span class="t-param-val">${dPers}</span></div>
                    <div class="t-param-row"><span class="t-param-key">篇幅</span><span class="t-param-val">${dLen}</span></div>
                </div>
                <div style="padding:15px; font-size:0.8em; color:#666; line-height:1.5;">
                    <i class="fa-solid fa-circle-info"></i> 右侧为实际发送给模型的完整 Payload。点击标题可折叠/展开查看详情。
                </div>
            </div>

            <!-- 右侧：分栏编辑器 -->
            <div class="t-dbg-main">
                <!-- System -->
                <div class="t-editor-section" style="flex: 3;">
                    <div class="t-section-label">
                        <span><i class="fa-solid fa-microchip"></i> System Instruction</span>
                        <span style="font-size:0.8em; opacity:0.5;">${sysTokens} tokens</span>
                    </div>
                    <textarea class="t-simple-editor" readonly>${sysPrompt}</textarea>
                </div>
                
                <!-- User Context (可折叠) -->
                <div class="t-editor-section" style="flex: 7; overflow:hidden;">
                    <div class="t-section-label">
                        <span><i class="fa-solid fa-user"></i> User Context Chain</span>
                        <span style="font-size:0.8em; opacity:0.5;">${totalUserTokens} tokens</span>
                    </div>
                    <div class="t-code-viewer">
                        ${contextHtml}
                    </div>
                </div>
            </div>
        </div>

        <div class="t-dbg-footer">
            <button id="t-debug-back" class="t-btn primary" style="padding: 6px 20px;">关闭控制台</button>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // 交互逻辑
    
    // 1. 关闭
    const close = () => {
        $("#t-debug-view").remove();
        $("#t-main-view").css("display", "flex");
    };
    $("#t-debug-close, #t-debug-back").on("click", close);

    // 2. 折叠/展开
    $(".t-fold-head").on("click", function() {
        const row = $(this).parent(".t-fold-row");
        row.toggleClass("open");
    });
}