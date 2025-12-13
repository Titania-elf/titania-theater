// 【Echo Theater v3.4 - 增强审查版】
// Part 1/2

const PLUGIN_NAME = "Titania_Theater_Echo";
const STORAGE_KEY_CFG = "Titania_Config_v3";
const STORAGE_KEY_SCRIPTS = "Titania_UserScripts_v3";
const STORAGE_KEY_FAVS = "Titania_Favs_v3";

const DEFAULT_PRESETS = [
    { id: "diary", name: "私密日记", desc: "以日记形式记录角色此刻的心情。", prompt: "请撰写一篇 {{char}} 的私密日记。CSS样式要求：背景使用做旧羊皮纸色(#fdfbf7)，字体使用手写体风格，深褐色字体，内边距20px，带有边框阴影。内容要体现角色对 {{user}} 的真实想法。" },
    { id: "terminal", name: "系统终端", desc: "科幻风格的角色状态分析报告。", prompt: "请生成一份 {{char}} 的系统终端报告。CSS样式要求：黑色背景，绿色等宽字体(Courier New)，荧光效果，无需边框。内容包含：当前心情同步率、对 {{user}} 的好感度评估、以及一段加密的内心独白。" },
    { id: "letter", name: "皱巴巴的信", desc: "角色写给用户的一封可能永远不会寄出的信。", prompt: "请撰写一封 {{char}} 写给 {{user}} 的信。CSS样式要求：淡粉色或淡蓝色背景，优雅的衬线字体，信纸带有信纸线（使用CSS渐变实现），整体风格温柔伤感。" }
];

let runtimeScripts = []; 
let lastGeneratedContent = "";

$(document).ready(function() {
    console.log("Titania Echo v3.4: Loaded.");
    loadScripts(); 
    createFloatingButton();
});

// 悬浮球
function createFloatingButton() {
    $("#titania-float-btn").remove();
    const btn = $(`<div id="titania-float-btn">🎭</div>`);
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

// 数据管理
function loadScripts() {
    const userScripts = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS) || '[]');
    runtimeScripts = DEFAULT_PRESETS.map(p => ({ ...p, _type: 'preset' }));
    userScripts.forEach(s => { if (!runtimeScripts.find(r => r.id === s.id)) runtimeScripts.push({ ...s, _type: 'user' }); });
}
function saveUserScript(s) { let u = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS)||'[]'); u = u.filter(x=>x.id!==s.id); u.push(s); localStorage.setItem(STORAGE_KEY_SCRIPTS, JSON.stringify(u)); loadScripts(); }
function deleteUserScript(id) { let u = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS)||'[]'); u = u.filter(x=>x.id!==id); localStorage.setItem(STORAGE_KEY_SCRIPTS, JSON.stringify(u)); loadScripts(); }

// part1 end
// Part 2/2 Start (上下文增强 & 独立审查窗口)

// 【增强版】上下文获取：User设定 + 世界书
function getContextData() {
    let data = { charName: "Char", persona: "", userName: "User", userDesc: "", worldInfo: "" };
    
    // 尝试从 DOM 获取基础信息 (保底)
    data.charName = $(".character_name").first().text() || "Char";
    
    if (window.SillyTavern && window.SillyTavern.getContext) {
        const ctx = window.SillyTavern.getContext();
        
        // 1. 获取 ID 和名称
        data.userName = ctx.name1 || "User";
        if(ctx.characterId) {
            data.charName = ctx.characters[ctx.characterId]?.name || data.charName;
            data.persona = ctx.characters[ctx.characterId]?.description || "";
        }
        
        // 2. 获取 User 设定 (尝试多种路径)
        // SillyTavern 不同版本存储位置不同，这里做兼容尝试
        if(ctx.userDescription) data.userDesc = ctx.userDescription; 
        else if (window.SillyTavern.power_user?.user_description) data.userDesc = window.SillyTavern.power_user.user_description;
        
        // 3. 获取世界书 (简单关键词匹配)
        // 注意：这是简化的前端匹配，不是ST后端的完整逻辑
        const wiList = ctx.worldInfo || [];
        if (Array.isArray(wiList) && wiList.length > 0) {
            // 将 Prompt 和最近聊天记录作为扫描对象
            const scanText = (data.persona + data.userDesc).toLowerCase(); 
            const activeEntries = wiList.filter(book => {
                const keys = (book.keys || "").split(",").map(k => k.trim().toLowerCase()).filter(k=>k);
                // 只要有一个 Key 出现在文本中，就激活
                return keys.some(k => scanText.includes(k));
            });
            // 拼接世界书内容
            data.worldInfo = activeEntries.map(e => e.content).join("\n");
        }
    }
    return data;
}

function openMainWindow() {
    if ($("#t-overlay").length) return;
    const ctx = getContextData();
    const initialContent = lastGeneratedContent ? lastGeneratedContent : '<div style="text-align:center; color:#666; margin-top:40px;">请选择剧本并点击生成...</div>';

    const html = `
    <div id="t-overlay" class="t-overlay">
        <div class="t-box" id="t-main-view">
            <div class="t-header">
                <div class="t-title-container"><div class="t-title-main">回声小剧场</div><div class="t-title-sub">ECHO THEATER</div></div>
                <div style="display:flex; align-items:center;">
                    <i class="fa-solid fa-book-bookmark t-icon-btn" id="t-btn-favs" title="回声收藏夹"></i>
                    <i class="fa-solid fa-gear t-icon-btn" id="t-btn-settings" title="设置"></i>
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
                        <button class="t-tool-btn" id="t-btn-debug" title="审查Prompt"><i class="fa-solid fa-eye"></i> 审查</button>
                        <button class="t-tool-btn" id="t-btn-like" title="收藏"><i class="fa-regular fa-heart"></i> 收藏</button>
                        <button class="t-tool-btn" id="t-btn-copy">复制</button>
                        <!-- 清空按钮已移除 -->
                    </div>
                    <div id="t-output-content" style="margin-top:20px;">${initialContent}</div>
                </div>
                <button id="t-btn-run" class="t-btn primary" style="height:45px;"><span>🎬 开始演绎</span></button>
            </div>
        </div>
    </div>`;

    $("body").append(html);
    updateDesc();

    // 事件绑定
    $("#t-btn-close").on("click", () => $("#t-overlay").remove());
    $("#t-overlay").on("click", (e) => { 
        if(e.target === e.currentTarget) {
            if($("#t-btn-run").prop("disabled")) { // 防误触
                $("#t-main-view").css("transform", "scale(1.02)"); setTimeout(() => $("#t-main-view").css("transform", "scale(1)"), 100); return;
            }
            $("#t-overlay").remove(); 
        }
    });

    $("#t-btn-settings").on("click", openSettingsWindow);
    $("#t-sel-script").on("change", updateDesc);
    $("#t-btn-dice").on("click", function() {
        const opts = $("#t-sel-script option"); const rnd = Math.floor(Math.random() * opts.length);
        $("#t-sel-script").prop('selectedIndex', rnd).trigger('change');
        $(this).css("transform", `rotate(${Math.random() * 360}deg)`);
    });
    $("#t-btn-copy").on("click", () => { navigator.clipboard.writeText($("#t-output-content").text()); const btn = $("#t-btn-copy"); btn.text("已复制"); setTimeout(() => btn.text("复制"), 1000); });
    $("#t-btn-run").on("click", handleGenerate);
    $("#t-btn-like").on("click", saveFavorite);
    $("#t-btn-favs").on("click", openFavsWindow);

    // 【新增】打开独立审查窗口
    $("#t-btn-debug").on("click", () => {
        const promptData = buildPrompt(); // 获取构建好的数据
        openDebugModal(promptData);
    });
}

// 【新增】构建 Prompt 数据的辅助函数（供生成和审查共用）
function buildPrompt() {
    const script = runtimeScripts.find(s => s.id === $("#t-sel-script").val());
    const d = getContextData();
    
    const sys = "You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks.";
    
    // 组装 User Prompt，加入 User Persona 和 World Info
    let user = `[Roleplay Setup]\nCharacter: ${d.charName}\nUser: ${d.userName}\n\n`;
    
    if (d.persona) user += `[Character Persona]\n${d.persona}\n\n`;
    if (d.userDesc) user += `[User Persona]\n${d.userDesc}\n\n`; // 新增
    if (d.worldInfo) user += `[World Info / Lore]\n${d.worldInfo}\n\n`; // 新增
    
    user += `[Scenario Request]\n${script.prompt.replace(/{{char}}/g, d.charName).replace(/{{user}}/g, d.userName)}`;

    return { 
        model: $("#cfg-model-list").val() || "gpt-3.5-turbo", 
        messages: [{ role: "system", content: sys }, { role: "user", content: user }] 
    };
}

// 【新增】独立审查窗口
function openDebugModal(jsonData) {
    $("#t-main-view").hide(); // 隐藏主窗口
    
    const html = `
    <div class="t-box" id="t-debug-view" style="height:90vh;">
        <div class="t-header">
            <span class="t-title-main" style="font-size:1.2em;">👁️ 提示词审查</span>
            <span class="t-close" id="t-debug-close">&times;</span>
        </div>
        <div class="t-body" style="padding:0;">
            <!-- 使用 pre 保持格式，样式在 css 中定义 -->
            <pre class="t-code-block">${JSON.stringify(jsonData, null, 2)}</pre>
        </div>
        <div style="padding:10px; border-top:1px solid #444;">
             <button id="t-debug-back" class="t-btn primary" style="width:100%;">返回主窗口</button>
        </div>
    </div>`;
    
    $("#t-overlay").append(html);
    
    const closeDebug = () => {
        $("#t-debug-view").remove();
        $("#t-main-view").show(); // 恢复主窗口
    };
    
    $("#t-debug-close, #t-debug-back").on("click", closeDebug);
}

function updateDesc() { const s = runtimeScripts.find(x => x.id === $("#t-sel-script").val()); if(s) $("#t-txt-desc").val(s.desc); }
function resetLikeBtn() { $("#t-btn-like").html('<i class="fa-regular fa-heart"></i> 收藏').removeClass("t-liked"); }

// 收藏夹
function saveFavorite() {
    const content = $("#t-output-content").html();
    if (!content || content.includes("请选择剧本")) return alert("无法收藏");
    const scriptName = $("#t-sel-script option:selected").text();
    const entry = { id: Date.now(), title: `${scriptName} - ${getContextData().charName}`, date: new Date().toLocaleString(), html: content };
    const favs = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS) || '[]');
    favs.unshift(entry); localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(favs));
    $("#t-btn-like").html('<i class="fa-solid fa-heart"></i> 已收藏').addClass("t-liked");
}
function openFavsWindow() {
    $("#t-main-view").hide();
    const favs = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS) || '[]');
    const html = `<div class="t-box" id="t-favs-view"><div class="t-header"><span class="t-title-main">📖 回声收藏夹</span><span class="t-close" id="t-fav-close">&times;</span></div><div class="t-body" id="t-fav-list">${favs.length === 0 ? '<div style="text-align:center; color:#666; margin-top:50px;">暂无收藏，快去生成并点击❤️保存吧~</div>' : ''}</div></div>`;
    $("#t-overlay").append(html);
    favs.forEach(item => {
        const el = $(`<div class="t-list-item" style="cursor:pointer;"><div style="flex-grow:1;"><div style="font-weight:bold;">${item.title||'未命名'}</div><div class="t-fav-meta">${item.date}</div></div><div><i class="fa-solid fa-trash" style="color:#ff6b6b; padding:5px;"></i></div></div>`);
        el.find("div:first").on("click", () => { $("#t-favs-view").hide(); $("#t-overlay").append(`<div class="t-box" id="t-reader-view"><div class="t-header"><span class="t-title-main" style="font-size:1em;">${item.title}</span><span class="t-close" id="t-read-close">&times;</span></div><div class="t-body" style="padding:0;"><div class="t-render" style="border:none; border-radius:0; height:100%;">${item.html}</div></div></div>`); $("#t-read-close").on("click", () => { $("#t-reader-view").remove(); $("#t-favs-view").show(); }); });
        el.find(".fa-trash").on("click", (e) => { e.stopPropagation(); if(confirm("删除？")) { const newFavs = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS)||'[]').filter(x=>x.id!==item.id); localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(newFavs)); $("#t-favs-view").remove(); openFavsWindow(); }});
        $("#t-fav-list").append(el);
    });
    $("#t-fav-close").on("click", () => { $("#t-favs-view").remove(); $("#t-main-view").show(); });
}

// 设置与编辑
function openSettingsWindow() {
    const cfg = JSON.parse(localStorage.getItem(STORAGE_KEY_CFG) || '{}');
    $("#t-main-view").hide();
    const html = `<div class="t-box" id="t-settings-view"><div class="t-header"><span class="t-title-main" style="font-size:1.2em;">⚙️ 设置 & 管理</span><span class="t-close" id="t-set-close">&times;</span></div><div class="t-body"><h4 style="margin:0; border-bottom:1px solid #444; padding-bottom:5px;">🔌 API 连接</h4><div><label>API URL:</label><input id="cfg-url" class="t-input" value="${cfg.url || ''}" placeholder="http://.../v1"></div><div><label>API Key:</label><input id="cfg-key" type="password" class="t-input" value="${cfg.key || ''}"></div><div style="display:flex; gap:10px;"><div style="flex-grow:1;"><label>Model:</label><select id="cfg-model-list" class="t-input"><option value="${cfg.model || 'gpt-3.5-turbo'}">${cfg.model || 'gpt-3.5-turbo'}</option></select></div><button id="t-btn-fetch" class="t-btn" style="margin-top:24px; padding:0 10px;">🔄 获取</button></div><div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; border-bottom:1px solid #444; padding-bottom:5px;"><h4 style="margin:0;">📜 剧本管理</h4><button id="t-btn-new" class="t-tool-btn">+ 新建</button></div><div id="t-script-list" style="flex-grow:1; overflow-y:auto; border:1px solid #444; padding:5px; max-height:200px;"></div><div class="t-btn-row"><button id="t-set-save" class="t-btn primary" style="flex:1;">保存配置并返回</button></div></div></div>`;
    $("#t-overlay").append(html);
    renderScriptList();
    $("#t-set-close, #t-set-save").on("click", () => { const newCfg = { url: $("#cfg-url").val().trim(), key: $("#cfg-key").val().trim(), model: $("#cfg-model-list").val() || $("#cfg-model-list").text() }; localStorage.setItem(STORAGE_KEY_CFG, JSON.stringify(newCfg)); $("#t-settings-view").remove(); $("#t-main-view").show(); loadScripts(); $("#t-sel-script").html(runtimeScripts.map(s => `<option value="${s.id}">${s.name}</option>`).join('')); updateDesc(); });
    $("#t-btn-fetch").on("click", async () => { const url = $("#cfg-url").val().replace(/\/+$/, "").replace(/\/chat\/completions$/, ""); const key = $("#cfg-key").val(); if(!url) return alert("请先填写 URL"); $("#t-btn-fetch").text("...").prop("disabled",true); try { const target = url.endsWith("/v1") ? `${url}/models` : `${url}/v1/models`; const res = await fetch(target, { headers: { Authorization: `Bearer ${key}` }}); const data = await res.json(); const list = Array.isArray(data) ? data : (data.data || []); const $sel = $("#cfg-model-list"); $sel.empty(); list.forEach(m => $sel.append(`<option value="${m.id}">${m.id}</option>`)); alert(`成功获取 ${list.length} 个模型`); } catch(e) { alert("获取失败: " + e.message); } finally { $("#t-btn-fetch").text("🔄 获取").prop("disabled",false); }});
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
    const html = `<div class="t-box" id="t-editor-view"><div class="t-header"><span class="t-title-main">${isPreset ? '查看' : (isEdit ? '编辑' : '新建')}</span></div><div class="t-body"><label>标题:</label><input id="ed-name" class="t-input" value="${data.name}" ${isPreset ? 'disabled' : ''}><label>简介:</label><input id="ed-desc" class="t-input" value="${data.desc}" ${isPreset ? 'disabled' : ''}><div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;"><label>Prompt (支持 {{char}}, {{user}}):</label>${!isPreset ? `<div class="t-tool-btn" id="ed-btn-expand" style="cursor:pointer;"><i class="fa-solid fa-maximize"></i> 大屏编辑</div>` : ''}</div><textarea id="ed-prompt" class="t-input" rows="8" ${isPreset ? 'disabled' : ''}>${data.prompt}</textarea><div class="t-btn-row">${!isPreset ? '<button id="ed-save" class="t-btn primary" style="flex:1;">保存</button>' : ''}<button id="ed-cancel" class="t-btn" style="flex:1;">返回</button></div></div></div>`;
    $("#t-overlay").append(html);
    $("#ed-cancel").on("click", () => { $("#t-editor-view").remove(); $("#t-settings-view").show(); });
    $("#ed-btn-expand").on("click", () => openLargeEditor($("#ed-prompt").val(), (v) => $("#ed-prompt").val(v)));
    if(!isPreset) { $("#ed-save").on("click", () => { saveUserScript({ id: isEdit ? data.id : "user_" + Date.now(), name: $("#ed-name").val(), desc: $("#ed-desc").val(), prompt: $("#ed-prompt").val() }); $("#t-editor-view").remove(); $("#t-settings-view").show(); renderScriptList(); }); }
}

function openLargeEditor(text, onSave) {
    $("#t-editor-view").hide();
    const html = `<div class="t-box" id="t-large-edit-view" style="height:90vh; max-height:95vh; max-width:800px;"><div class="t-header"><span class="t-title-main">大屏模式</span></div><div class="t-body" style="height:100%;"><textarea id="ed-large-text" class="t-input" style="flex-grow:1; resize:none; font-family:monospace; line-height:1.5; font-size:14px;">${text}</textarea><div class="t-btn-row"><button id="ed-large-ok" class="t-btn primary" style="flex:1;">确认修改</button><button id="ed-large-cancel" class="t-btn" style="flex:1;">取消</button></div></div></div>`;
    $("#t-overlay").append(html);
    $("#ed-large-cancel").on("click", () => { $("#t-large-edit-view").remove(); $("#t-editor-view").show(); });
    $("#ed-large-ok").on("click", () => { const newVal = $("#ed-large-text").val(); $("#t-large-edit-view").remove(); $("#t-editor-view").show(); if(onSave) onSave(newVal); });
}

async function handleGenerate() {
    const cfg = JSON.parse(localStorage.getItem(STORAGE_KEY_CFG) || '{}');
    if (!cfg.key) return alert("请先填 API Key！");
    
    const $out = $("#t-output-content"); 
    const $btn = $("#t-btn-run");
    
    resetLikeBtn();
    $out.html('<div style="text-align:center; padding-top:20px;">⏳ 正在构思剧情...</div>');
    $btn.prop("disabled", true).css("opacity", 0.6);

    try {
        const requestData = buildPrompt(); 
        
        // --- 修复 URL 处理逻辑 Start ---
        // 1. 移除末尾所有斜杠
        let baseUrl = cfg.url.trim().replace(/\/+$/, "");
        
        // 2. 智能判断是否需要拼接
        // 如果用户已经填了完整路径 (包含 chat/completions)，就直接用
        let endpoint = baseUrl;
        if (!baseUrl.endsWith("/chat/completions")) {
            // 如果没填，再拼接
            endpoint += "/chat/completions";
        }
        // --- 修复 URL 处理逻辑 End ---

        const res = await fetch(endpoint, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${cfg.key}` 
            },
            body: JSON.stringify({ ...requestData, stream: false })
        });

        const rawText = await res.text();
        
        // 专门处理 404/405/500 等 HTTP 错误
        if (!res.ok) {
            let errMsg = `HTTP ${res.status} (${res.statusText})`;
            // 尝试解析错误体
            try {
                const errJson = JSON.parse(rawText);
                if (errJson.error && errJson.error.message) {
                    errMsg += `: ${errJson.error.message}`;
                }
            } catch (e) {
                // 如果不是 JSON，截取前 50 个字符
                errMsg += `: ${rawText.slice(0, 50)}`;
            }
            throw new Error(errMsg);
        }

        if (rawText.includes('"error"')) { 
            const match = rawText.match(/"message":\s*"(.*?)"/); 
            if (match) throw new Error("API报错: " + JSON.parse(`"${match[1]}"`)); 
        }

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
        
        finalContent = finalContent.replace(/^```html/i, "").replace(/```$/i, "");
        lastGeneratedContent = finalContent;
        $out.html(finalContent);

    } catch (e) { 
        $out.html(`<div style="color:#ff6b6b; text-align:center; padding:10px; border:1px solid #ff6b6b; border-radius:5px;">❌ ${e.message}</div>`); 
    } finally { 
        $btn.prop("disabled", false).css("opacity", 1); 
    }
}
