// 【Titania's 小剧场 - 最终回声版】
// Part 1/2

const PLUGIN_NAME = "Titania_Theater_Echo";
const STORAGE_KEY_CFG = "Titania_Config_v3";
const STORAGE_KEY_SCRIPTS = "Titania_UserScripts_v3";

const DEFAULT_PRESETS = [
    { id: "diary", name: "私密日记", desc: "以日记形式记录角色此刻的心情。", prompt: "请撰写一篇 {{char}} 的私密日记。CSS样式要求：背景使用做旧羊皮纸色(#fdfbf7)，字体使用手写体风格，深褐色字体，内边距20px，带有边框阴影。内容要体现角色对 {{user}} 的真实想法。" },
    { id: "terminal", name: "系统终端", desc: "科幻风格的角色状态分析报告。", prompt: "请生成一份 {{char}} 的系统终端报告。CSS样式要求：黑色背景，绿色等宽字体(Courier New)，荧光效果，无需边框。内容包含：当前心情同步率、对 {{user}} 的好感度评估、以及一段加密的内心独白。" },
    { id: "letter", name: "皱巴巴的信", desc: "角色写给用户的一封可能永远不会寄出的信。", prompt: "请撰写一封 {{char}} 写给 {{user}} 的信。CSS样式要求：淡粉色或淡蓝色背景，优雅的衬线字体，信纸带有信纸线（使用CSS渐变实现），整体风格温柔伤感。" }
];

let runtimeScripts = []; 

$(document).ready(function() {
    console.log("Titania Echo: Part 1 Loaded...");
    injectStyles();
    loadScripts(); 
    createFloatingButton();
});

function injectStyles() {
    const css = `
    <style>
        .t-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.6); z-index: 20000; backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; }
        .t-box { position: relative; width: 95%; max-width: 650px; height: auto; max-height: 85vh; background: #1a1b26; border: 1px solid #555; border-radius: 12px; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.8); color: #eee; font-family: sans-serif; overflow: hidden; }
        
        /* 顶部栏布局修正：左右对齐 */
        .t-header { padding: 12px 15px; border-bottom: 1px solid #444; background: #242530; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; }
        
        /* --- 赛博霓虹标题样式 Start --- */
        .t-title-container { display: flex; flex-direction: column; justify-content: center; position: relative; padding-left: 12px; }
        .t-title-container::before { content: ''; position: absolute; left: 0; top: 10%; height: 80%; width: 4px; background: linear-gradient(to bottom, #ff9a9e, #fad0c4); border-radius: 2px; box-shadow: 0 0 8px rgba(255, 154, 158, 0.6); }
        .t-title-main { font-size: 1.4em; font-weight: 800; line-height: 1.1; background: linear-gradient(135deg, #e0c3fc 0%, #ff9a9e 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(255, 154, 158, 0.3)); letter-spacing: 1px; }
        .t-title-sub { font-size: 0.55em; color: #aaa; text-transform: uppercase; letter-spacing: 4px; margin-top: 2px; opacity: 0.7; font-weight: 300; background: linear-gradient(90deg, #ff9a9e, #e0c3fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        /* --- 赛博霓虹标题样式 End --- */

        .t-close { cursor: pointer; font-size: 1.8em; line-height: 1; color: #888; transition:0.2s; padding: 0 5px; }
        .t-close:hover { color: #fff; transform: rotate(90deg); }
        .t-gear { cursor: pointer; font-size: 1.2em; color: #aaa; margin-right: 15px; transition: color 0.3s; }
        .t-gear:hover { color: #fff; animation: spin 2s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        
        .t-body { padding: 15px; flex-grow: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
        .t-controls { display: flex; gap: 10px; align-items: center; }
        .t-select { flex-grow: 1; background: #0f0f14; border: 1px solid #555; color: white; padding: 8px; border-radius: 6px; outline: none; }
        .t-dice { font-size: 1.5em; cursor: pointer; transition: transform 0.5s ease; user-select: none; }
        .t-dice:active { transform: rotate(360deg) scale(1.2); }
        .t-desc { background: transparent; border: none; color: #888; font-style: italic; font-size: 0.9em; resize: none; width: 100%; outline: none; }
        .t-render { position: relative; flex-grow: 1; background: rgba(0,0,0,0.2); border: 1px solid #444; border-radius: 6px; min-height: 200px; padding: 10px; overflow-y: auto; }
        .t-tools { position: absolute; top: 5px; right: 5px; display: flex; gap: 5px; z-index: 10; }
        .t-tool-btn { font-size: 0.75em; padding: 2px 8px; background: rgba(0,0,0,0.6); border: 1px solid #666; color: #ccc; cursor: pointer; border-radius: 3px; }
        .t-btn-row { display: flex; gap: 10px; margin-top: auto; }
        .t-btn { background: #333; border: 1px solid #555; color: white; padding: 10px 15px; cursor: pointer; border-radius: 6px; font-weight: bold; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px; }
        .t-btn.primary { background: linear-gradient(90deg, #ff9a9e, #fecfef); color: #444; border: none; }
        .t-list-item { display: flex; justify-content: space-between; align-items: center; padding: 8px; border-bottom: 1px solid #333; }
        .t-badge { font-size: 0.7em; padding: 2px 6px; border-radius: 4px; color: white; margin-left: 5px; }
        .badge-preset { background: #7b1fa2; }
        .badge-user { background: #2e7d32; }
        .t-input { width: 100%; background: #0f0f14; border: 1px solid #555; color: white; padding: 8px; border-radius: 4px; box-sizing: border-box; margin-bottom: 10px; }
    </style>`;
    $("head").append(css);
}

function createFloatingButton() {
    $("#titania-float-btn").remove();
    const btn = $(`<div id="titania-float-btn">🎭</div>`);
    btn.css({
        position: "fixed", top: "50%", right: "0px", width: "50px", height: "50px",
        background: "rgba(0,0,0,0.6)", color: "#ff9a9e", border: "2px solid #ff9a9e", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", cursor: "pointer",
        zIndex: "2147483647", userSelect: "none", boxShadow: "0 0 10px rgba(0,0,0,0.5)", backdropFilter: "blur(2px)",
        transform: "translateY(-50%)", touchAction: "none"
    });
    $("body").append(btn);

    let isDragging = false, startX, startY, initialLeft, initialTop;
    btn.on("touchstart mousedown", function(e) {
        isDragging = false;
        const evt = e.type === 'touchstart' ? e.originalEvent.touches[0] : e;
        startX = evt.clientX; startY = evt.clientY;
        const rect = this.getBoundingClientRect(); initialLeft = rect.left; initialTop = rect.top;
        $(this).css({ "transition": "none", "transform": "none" }); 
    });
    $(document).on("touchmove mousemove", function(e) {
        if (startX === undefined) return;
        const evt = e.type === 'touchmove' ? e.originalEvent.touches[0] : e;
        if (Math.abs(evt.clientX - startX) > 5 || Math.abs(evt.clientY - startY) > 5) isDragging = true;
        let l = initialLeft + (evt.clientX - startX), t = initialTop + (evt.clientY - startY);
        l = Math.max(0, Math.min(window.innerWidth - 50, l)); t = Math.max(0, Math.min(window.innerHeight - 50, t));
        btn.css({ left: l + "px", top: t + "px", right: "auto" });
    });
    $(document).on("touchend mouseup", function() {
        if (startX === undefined) return; startX = undefined;
        if (isDragging) {
            const rect = btn[0].getBoundingClientRect();
            btn.css({ "transition": "all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)", "left": (rect.left + 25 < window.innerWidth / 2 ? 0 : window.innerWidth - 50) + "px" });
        } else openMainWindow();
    });
}

function loadScripts() {
    const userScripts = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS) || '[]');
    runtimeScripts = DEFAULT_PRESETS.map(p => ({ ...p, _type: 'preset' }));
    userScripts.forEach(s => { if (!runtimeScripts.find(r => r.id === s.id)) runtimeScripts.push({ ...s, _type: 'user' }); });
}
function saveUserScript(s) { let u = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS)||'[]'); u = u.filter(x=>x.id!==s.id); u.push(s); localStorage.setItem(STORAGE_KEY_SCRIPTS, JSON.stringify(u)); loadScripts(); }
function deleteUserScript(id) { let u = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS)||'[]'); u = u.filter(x=>x.id!==id); localStorage.setItem(STORAGE_KEY_SCRIPTS, JSON.stringify(u)); loadScripts(); }

// Part 1 End
// Part 2/2 Start

function getContextData() {
    if (window.SillyTavern && window.SillyTavern.getContext) {
        const ctx = window.SillyTavern.getContext();
        if (ctx) return { charName: ctx.characters[ctx.characterId]?.name || "Unknown", persona: ctx.characters[ctx.characterId]?.description || "", userName: ctx.name1 || "User" };
    }
    return { charName: $(".character_name").first().text() || "Char", persona: "Unknown", userName: "User" };
}

function openMainWindow() {
    if ($("#t-overlay").length) return;
    const ctx = getContextData();

    // 修复了这里：现在标题在左，图标在右，没有重复！
    const html = `
    <div id="t-overlay" class="t-overlay">
        <div class="t-box" id="t-main-view">
            <div class="t-header">
                <!-- 左侧：新设计的标题 -->
                <div class="t-title-container">
                    <div class="t-title-main">回声小剧场</div>
                    <div class="t-title-sub">ECHO THEATER</div>
                </div>
                <!-- 右侧：控制按钮 -->
                <div>
                    <i class="fa-solid fa-gear t-gear" id="t-btn-settings" title="设置"></i>
                    <span class="t-close" id="t-btn-close">&times;</span>
                </div>
            </div>
            <div class="t-body">
                <div style="text-align:center; color:#888; font-size:0.9em;">✨ 当前主演: ${ctx.charName}</div>
                <div class="t-controls">
                    <select id="t-sel-script" class="t-select">${runtimeScripts.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
                    <div class="t-dice" id="t-btn-dice" title="随机剧本">🎲</div>
                </div>
                <textarea id="t-txt-desc" class="t-desc" readonly rows="2"></textarea>
                <div class="t-render">
                    <div class="t-tools">
                        <button class="t-tool-btn" id="t-btn-copy">复制</button>
                        <button class="t-tool-btn" id="t-btn-clear">清空</button>
                    </div>
                    <div id="t-output-content" style="margin-top:20px;"><div style="text-align:center; color:#666; margin-top:40px;">请选择剧本并点击生成...</div></div>
                </div>
                <button id="t-btn-run" class="t-btn primary" style="height:45px;"><span>🎬 开始演绎</span></button>
            </div>
        </div>
    </div>`;

    $("body").append(html);
    updateDesc();

    $("#t-btn-close").on("click", () => $("#t-overlay").remove());
    $("#t-overlay").on("click", (e) => { if(e.target === e.currentTarget) $("#t-overlay").remove(); });
    $("#t-btn-settings").on("click", openSettingsWindow);
    $("#t-sel-script").on("change", updateDesc);
    $("#t-btn-dice").on("click", function() {
        const opts = $("#t-sel-script option");
        const rnd = Math.floor(Math.random() * opts.length);
        $("#t-sel-script").prop('selectedIndex', rnd).trigger('change');
        $(this).css("transform", `rotate(${Math.random() * 360}deg)`);
    });
    $("#t-btn-copy").on("click", () => {
        navigator.clipboard.writeText($("#t-output-content").text());
        const btn = $("#t-btn-copy"); btn.text("已复制"); setTimeout(() => btn.text("复制"), 1000);
    });
    $("#t-btn-clear").on("click", () => $("#t-output-content").html(""));
    $("#t-btn-run").on("click", handleGenerate);
}

function updateDesc() {
    const id = $("#t-sel-script").val();
    const s = runtimeScripts.find(x => x.id === id);
    if(s) $("#t-txt-desc").val(s.desc);
}

function openSettingsWindow() {
    const cfg = JSON.parse(localStorage.getItem(STORAGE_KEY_CFG) || '{}');
    $("#t-main-view").hide();

    const settingsHtml = `
        <div class="t-box" id="t-settings-view">
            <div class="t-header"><span class="t-title-main" style="font-size:1.2em;">⚙️ 设置 & 管理</span><span class="t-close" id="t-set-close">&times;</span></div>
            <div class="t-body">
                <h4 style="margin:0; border-bottom:1px solid #444; padding-bottom:5px;">🔌 API 连接</h4>
                <div><label>API URL:</label><input id="cfg-url" class="t-input" value="${cfg.url || ''}" placeholder="http://.../v1"></div>
                <div><label>API Key:</label><input id="cfg-key" type="password" class="t-input" value="${cfg.key || ''}"></div>
                <div style="display:flex; gap:10px;">
                    <div style="flex-grow:1;"><label>Model:</label><select id="cfg-model-list" class="t-input"><option value="${cfg.model || 'gpt-3.5-turbo'}">${cfg.model || 'gpt-3.5-turbo'}</option></select></div>
                    <button id="t-btn-fetch" class="t-btn" style="margin-top:24px; padding:0 10px;">🔄 获取</button>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; border-bottom:1px solid #444; padding-bottom:5px;">
                    <h4 style="margin:0;">📜 剧本管理</h4><button id="t-btn-new" class="t-tool-btn">+ 新建</button>
                </div>
                <div id="t-script-list" style="flex-grow:1; overflow-y:auto; border:1px solid #444; padding:5px; max-height:200px;"></div>
                <div class="t-btn-row"><button id="t-set-save" class="t-btn primary" style="flex:1;">保存配置并返回</button></div>
            </div>
        </div>`;

    if ($("#t-settings-view").length) $("#t-settings-view").remove();
    $("#t-overlay").append(settingsHtml);
    renderScriptList();

    $("#t-set-close, #t-set-save").on("click", () => {
        const newCfg = { url: $("#cfg-url").val().trim(), key: $("#cfg-key").val().trim(), model: $("#cfg-model-list").val() || $("#cfg-model-list").text() };
        localStorage.setItem(STORAGE_KEY_CFG, JSON.stringify(newCfg));
        $("#t-settings-view").remove(); $("#t-main-view").show(); loadScripts();
        const $sel = $("#t-sel-script"); if($sel.length) { $sel.html(runtimeScripts.map(s => `<option value="${s.id}">${s.name}</option>`).join('')); updateDesc(); }
    });

    $("#t-btn-fetch").on("click", async () => {
        const url = $("#cfg-url").val().replace(/\/+$/, "").replace(/\/chat\/completions$/, ""); const key = $("#cfg-key").val();
        if(!url) return alert("请先填写 URL");
        $("#t-btn-fetch").text("...").prop("disabled",true);
        try {
            const target = url.endsWith("/v1") ? `${url}/models` : `${url}/v1/models`;
            const res = await fetch(target, { headers: { Authorization: `Bearer ${key}` }});
            const data = await res.json();
            const list = Array.isArray(data) ? data : (data.data || []);
            const $sel = $("#cfg-model-list"); $sel.empty(); list.forEach(m => $sel.append(`<option value="${m.id}">${m.id}</option>`));
            alert(`成功获取 ${list.length} 个模型`);
        } catch(e) { alert("获取失败: " + e.message); } finally { $("#t-btn-fetch").text("🔄 获取").prop("disabled",false); }
    });
    $("#t-btn-new").on("click", () => openEditor(null));
}

function renderScriptList() {
    const list = $("#t-script-list"); list.empty();
    runtimeScripts.forEach(s => {
        const badge = s._type === 'preset' ? '<span class="t-badge badge-preset">预设</span>' : '<span class="t-badge badge-user">自定义</span>';
        let btns = s._type === 'user' ? `<i class="fa-solid fa-pen" style="cursor:pointer; margin-right:8px;" onclick="window.t_edit('${s.id}')"></i><i class="fa-solid fa-trash" style="cursor:pointer; color:#ff6b6b;" onclick="window.t_del('${s.id}')"></i>` : `<i class="fa-solid fa-eye" style="cursor:pointer; opacity:0.5;" onclick="window.t_edit('${s.id}')"></i>`;
        list.append(`<div class="t-list-item"><div>${s.name} ${badge}</div><div>${btns}</div></div>`);
    });
}
window.t_edit = (id) => openEditor(id);
window.t_del = (id) => { if(confirm("删除？")) { deleteUserScript(id); renderScriptList(); }};

function openEditor(id) {
    const isEdit = !!id;
    let data = { id: Date.now().toString(), name: "新剧本", desc: "", prompt: "" };
    if (isEdit) data = runtimeScripts.find(s => s.id === id);
    const isPreset = data._type === 'preset';
    $("#t-settings-view").hide();
    const html = `
    <div class="t-box" id="t-editor-view">
        <div class="t-header"><span class="t-title-main">${isPreset ? '查看' : (isEdit ? '编辑' : '新建')}</span></div>
        <div class="t-body">
            <label>标题:</label><input id="ed-name" class="t-input" value="${data.name}" ${isPreset ? 'disabled' : ''}>
            <label>简介:</label><input id="ed-desc" class="t-input" value="${data.desc}" ${isPreset ? 'disabled' : ''}>
            <label>Prompt (支持 {{char}}, {{user}}):</label><textarea id="ed-prompt" class="t-input" rows="8" ${isPreset ? 'disabled' : ''}>${data.prompt}</textarea>
            <div class="t-btn-row">${!isPreset ? '<button id="ed-save" class="t-btn primary" style="flex:1;">保存</button>' : ''}<button id="ed-cancel" class="t-btn" style="flex:1;">返回</button></div>
        </div>
    </div>`;
    $("#t-overlay").append(html);
    $("#ed-cancel").on("click", () => { $("#t-editor-view").remove(); $("#t-settings-view").show(); });
    if(!isPreset) {
        $("#ed-save").on("click", () => {
            saveUserScript({ id: isEdit ? data.id : "user_" + Date.now(), name: $("#ed-name").val(), desc: $("#ed-desc").val(), prompt: $("#ed-prompt").val() });
            $("#t-editor-view").remove(); $("#t-settings-view").show(); renderScriptList();
        });
    }
}

async function handleGenerate() {
    const cfg = JSON.parse(localStorage.getItem(STORAGE_KEY_CFG) || '{}');
    if (!cfg.key) return alert("请先填 API Key！");
    const script = runtimeScripts.find(s => s.id === $("#t-sel-script").val());
    const ctx = getContextData();
    const $out = $("#t-output-content"); const $btn = $("#t-btn-run");
    $out.html('<div style="text-align:center; padding-top:20px;">⏳ 正在构思剧情...</div>');
    $btn.prop("disabled", true).css("opacity", 0.6);

    try {
        let sys = "You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks.";
        let user = `[Roleplay Setup]\nCharacter: ${ctx.charName}\nUser: ${ctx.userName}\nPersona: ${ctx.persona}\n\n[Scenario Request]\n${script.prompt.replace(/{{char}}/g, ctx.charName).replace(/{{user}}/g, ctx.userName)}`;
        let endpoint = cfg.url.replace(/\/+$/, "");
        if (!endpoint.endsWith("/chat/completions")) endpoint += "/chat/completions";

        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${cfg.key}` },
            body: JSON.stringify({ model: cfg.model, messages: [{ role: "system", content: sys }, { role: "user", content: user }], stream: false })
        });
        const rawText = await res.text();
        if (rawText.includes('"error"')) {
            const match = rawText.match(/"message":\s*"(.*?)"/);
            if (match) throw new Error("API报错: " + JSON.parse(`"${match[1]}"`));
        }
        if (!res.ok) throw new Error("HTTP " + res.status);

        let finalContent = "";
        try {
            finalContent = JSON.parse(rawText).choices[0].message.content;
        } catch (e) {
            const lines = rawText.split(/\r?\n/);
            for (const line of lines) {
                if (line.includes('"content":')) {
                    try { finalContent += JSON.parse(line.substring(line.indexOf('{'))).choices[0].delta.content || ""; } catch(err){}
                }
            }
        }
        if (!finalContent) throw new Error("解析失败，无内容");
        $out.html(finalContent.replace(/^```html/i, "").replace(/```$/i, ""));
    } catch (e) { $out.html(`<div style="color:#ff6b6b; text-align:center; padding:10px; border:1px solid #ff6b6b; border-radius:5px;">❌ ${e.message}</div>`); } 
    finally { $btn.prop("disabled", false).css("opacity", 1); }
}