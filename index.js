// 【Echo Theater v3.8 - Part 1/3】
// 包含：预设库、悬浮球(含加载拦截)、数据存取

const PLUGIN_NAME = "Titania_Theater_Echo";
const STORAGE_KEY_CFG = "Titania_Config_v3";
const STORAGE_KEY_SCRIPTS = "Titania_UserScripts_v3";
const STORAGE_KEY_FAVS = "Titania_Favs_v3";

let isGenerating = false;

// mode: 'echo', 'parallel', 'all'
const DEFAULT_PRESETS = [
    // === 回声模式 (Echo) ===
    { id: "e_mind", mode: "echo", name: "🔍 此刻心声", desc: "【回声】解析角色在刚刚对话结束后的真实心理活动。", prompt: "请根据上文的对话记录，分析 {{char}} 此刻未说出口的真实想法。CSS样式：深蓝色半透明背景，白色字体，模拟HUD抬头显示器效果，带有闪烁的光标。内容格式：[表面态度] vs [内心独白]。" },
    { id: "e_diary", mode: "echo", name: "📔 私密日记", desc: "【回声】角色在今天结束后写下的一篇日记。", prompt: "基于刚才发生的事件，写一篇 {{char}} 的日记。CSS样式：羊皮纸纹理背景，手写体，深褐色墨水效果，纸张边缘带有做旧感。内容重点：角色如何看待与 {{user}} 的最新互动，以及情感波动。" },
    { id: "e_qidian", mode: "echo", name: "📖 起点书评", desc: "【回声】如果你们的故事是一本连载网文，读者的犀利点评。", prompt: "假设 {{char}} 和 {{user}} 是某本热门连载网文的主角。请生成一段书评区（章说）的内容。包括：催更、对刚才剧情的吐槽、磕CP的言论、以及对角色智商的分析。CSS样式：浅灰色背景，深色文字，模仿手机阅读APP的评论区布局，带有'热评'、'点赞数'等元素。" },
    { id: "e_danmu", mode: "echo", name: "📺 吐槽弹幕", desc: "【回声】高能预警！刚才的剧情如果通过直播播出会怎样？", prompt: "将刚才的互动视为一场直播或番剧更新。请生成飘过的弹幕内容。内容风格：玩梗、'前方高能'、'AWSL'、'急死我了'、对 {{char}} 的微表情进行逐帧分析。CSS样式：半透明黑色遮罩背景，彩色滚动字体（模拟视频弹幕层），字体大小不一，营造热闹感。" },
    { id: "e_forum", mode: "echo", name: "💬 匿名树洞", desc: "【回声】角色（或路人）在匿名论坛发的求助/吐槽贴。", prompt: "请模拟 {{char}} (或者被卷入的路人) 在匿名论坛(如Reddit或NGA)发布的一个帖子。标题要震惊，内容是关于刚才发生的事件。CSS样式：模仿论坛网页风格，带有'楼主'标识，引用回复框，背景色为护眼米色或暗色模式。" },
    { id: "e_bloopers", mode: "echo", name: "🎬 电影花絮", desc: "【回声】'卡！' 刚才那段其实是拍戏？来看看NG镜头。", prompt: "假设刚才的剧情是在拍戏。请撰写一段'幕后花絮'。例如：{{char}} 忘词了、笑场了、道具坏了，或者导演喊卡后 {{char}} 瞬间出戏对 {{user}} 说了什么。CSS样式：胶卷底片风格边框，黑白或复古滤镜背景，打字机字体。" },
    { id: "e_system", mode: "echo", name: "📟 系统报告", desc: "【回声】Galgame风格的好感度与状态结算。", prompt: "请以恋爱养成游戏（或RPG系统）的视角，生成一份'事件结算报告'。内容包括：{{char}} 的好感度变化数值（+/-）、心情指数、San值波动、以及系统对 {{user}} 下一步操作的提示。CSS样式：赛博科幻悬浮窗，半透明玻璃拟态，霓虹色进度条。" },
    { id: "e_drunk", mode: "echo", name: "🍺 酒后真言", desc: "【回声】角色喝醉后，跟酒保吐槽这一连串的事。", prompt: "场景：{{char}} 正在酒吧买醉。请撰写一段他/她对酒保的吐槽，内容全是关于 {{user}} 的，充满了悔恨、迷恋或抱怨。CSS样式：昏暗的酒吧氛围，文字带有模糊重影效果（模拟醉酒视觉）。" },
    { id: "e_wechat", mode: "echo", name: "📱 朋友圈/推特", desc: "【回声】仅对方可见（或忘记屏蔽）的社交动态。", prompt: "基于刚才的剧情，{{char}} 发了一条社交媒体动态（朋友圈/Twitter）。内容可能是一张配图的文字（用文字描述图片），或者一句含沙射影的话。CSS样式：模仿手机APP界面，带有头像、时间戳、点赞和评论按钮。" },
    { id: "e_dream", mode: "echo", name: "🌙 午夜梦回", desc: "【回声】当晚角色做的梦，映射了白天的经历。", prompt: "夜深了，{{char}} 入睡后做了一个梦。梦境内容是白天事件的扭曲、夸张或潜意识折射。风格要迷幻、象征主义。CSS样式：深紫色星空背景，朦胧的白色光晕文字，营造梦幻感。" },

    // === 平行世界 (Parallel) ===
    { id: "p_school", mode: "parallel", name: "🏫 青春校园", desc: "【平行】现代高中PA。同桌、传纸条、午后的操场。", prompt: "【平行世界：现代高中】忽略历史背景。{{char}} 是班里的优等生或不良少年，{{user}} 是同桌。描写一段上课悄悄互动或放学后的场景。CSS样式：作业本横线纸背景，圆珠笔手写字，清新校园风。" },
    { id: "p_fantasy", mode: "parallel", name: "⚔️ 西幻史诗", desc: "【平行】剑与魔法。冒险者公会、篝火与地下城。", prompt: "【平行世界：D&D西幻】忽略历史背景。{{char}} 是精灵/骑士/法师，{{user}} 是队友。描写一段刚攻略完地下城后，在篝火旁休息擦拭武器的温馨（或暧昧）片段。CSS样式：粗糙石砖背景，火光色文字，羊皮卷轴边框。" },
    { id: "p_cyber", mode: "parallel", name: "🤖 赛博朋克", desc: "【平行】夜之城。义体医生、黑客与霓虹雨夜。", prompt: "【平行世界：赛博朋克2077风格】忽略历史背景。场景是下着酸雨的霓虹都市。{{char}} 正在为 {{user}} 维修故障的义体，或者进行非法的芯片交易。CSS样式：故障艺术(Glitch)风格，黑底绿字，带有随机的数据乱码装饰。" },
    { id: "p_xianxia", mode: "parallel", name: "🏔️ 仙侠修真", desc: "【平行】师尊与徒弟，或者正邪不两立的修仙界。", prompt: "【平行世界：古风修仙】忽略历史背景。{{char}} 是高冷的师尊或魔教教主，{{user}} 是弟子或正道少侠。描写一段在洞府修炼、传功或对峙的场景。CSS样式：水墨山水画背景，竖排繁体字（如果可能），典雅古风边框。" },
    { id: "p_office", mode: "parallel", name: "💼 职场精英", desc: "【平行】霸总、秘书或加班的同事。茶水间的故事。", prompt: "【平行世界：现代职场】忽略历史背景。{{char}} 是严厉的上司或疲惫的前辈。描写一段在茶水间偶遇，或者深夜在办公室加班吃外卖的场景。CSS样式：简约商务风，白底黑字，模仿Email或办公软件界面。" },
    { id: "p_detective", mode: "parallel", name: "🕵️ 黑色侦探", desc: "【平行】上世纪40年代，爵士乐、雨夜与私家侦探。", prompt: "【平行世界：黑色电影Noir】忽略历史背景。{{char}} 是落魄侦探或致命伴侣。场景是烟雾缭绕的事务所，窗外下着大雨。用第一人称独白风格描写。CSS样式：黑白电影滤镜，打字机字体，老照片质感。" },
    { id: "p_harry", mode: "parallel", name: "🪄 魔法学院", desc: "【平行】分院帽、魔药课与魁地奇比赛。", prompt: "【平行世界：魔法学院】忽略历史背景。{{char}} 和 {{user}} 穿着不同学院的巫师袍。描写一段在图书馆禁书区夜游，或者魔药课炸了坩埚后的场景。CSS样式：深红色或深绿色天鹅绒质感背景，金色衬线字体，魔法火花装饰。" },
    { id: "p_apocalypse", mode: "parallel", name: "🧟 末日生存", desc: "【平行】丧尸爆发或废土世界。资源匮乏下的信任。", prompt: "【平行世界：末日废土】忽略历史背景。世界已毁灭，资源匮乏。{{char}} 和 {{user}} 躲在一处废墟中避雨或躲避怪物。描写分享仅存的一罐罐头时的对话。CSS样式：生锈金属纹理背景，裂痕效果，污渍斑点。" },
    { id: "p_royal", mode: "parallel", name: "👑 宫廷权谋", desc: "【平行】皇帝/女王与权臣/刺客。华丽笼子里的博弈。", prompt: "【平行世界：中世纪/古代宫廷】忽略历史背景。{{char}} 是掌握权力的皇室成员，{{user}} 是侍卫或政治联姻对象。描写一段在寝宫内低声密谋或对峙的场景，张力拉满。CSS样式：深紫色丝绸背景，金色边框，华丽的花纹装饰。" },
    { id: "p_cthulhu", mode: "parallel", name: "🐙 克苏鲁", desc: "【平行】不可名状的恐怖，掉San值的调查员故事。", prompt: "【平行世界：克苏鲁神话】忽略历史背景。1920年代，{{char}} 和 {{user}} 是调查员。你们发现了一本古怪的书或一个诡异的祭坛。{{char}} 的理智值（Sanity）开始下降，说话变得癫狂。CSS样式：暗绿色粘液质感背景，扭曲的字体，文字周围带有模糊的黑雾效果。" }
];

let runtimeScripts = []; 
let lastGeneratedContent = "";

$(document).ready(function() {
    console.log("Titania Echo v3.8: Loaded.");
    loadScripts(); 
    createFloatingButton();
});

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
        } else {
            if (isGenerating) {
                if(window.toastr) toastr.info("🎭 小剧场正在后台演绎中，请稍候...", "Titania Echo");
                else alert("小剧场正在后台演绎中...");
                return; 
            }
            btn.removeClass("t-notify");
            openMainWindow();
        }
    });
}

function loadScripts() {
    const userScripts = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS) || '[]');
    runtimeScripts = DEFAULT_PRESETS.map(p => ({ ...p, _type: 'preset' }));
    userScripts.forEach(s => { if (!runtimeScripts.find(r => r.id === s.id)) runtimeScripts.push({ ...s, _type: 'user' }); });
}
function saveUserScript(s) { let u = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS)||'[]'); u = u.filter(x=>x.id!==s.id); u.push(s); localStorage.setItem(STORAGE_KEY_SCRIPTS, JSON.stringify(u)); loadScripts(); }
function deleteUserScript(id) { let u = JSON.parse(localStorage.getItem(STORAGE_KEY_SCRIPTS)||'[]'); u = u.filter(x=>x.id!==id); localStorage.setItem(STORAGE_KEY_SCRIPTS, JSON.stringify(u)); loadScripts(); }

// 【Echo Theater v3.8 - Part 2/3】
// 包含：Context获取、主界面、模式开关

// 上下文获取
function getContextData() {
    let data = { charName: "Char", persona: "", userName: "User", userDesc: "", worldInfo: "" };
    if (typeof SillyTavern === 'undefined' || !SillyTavern.getContext) {
        data.charName = $(".character_name").first().text() || "Char";
        return data;
    }
    const ctx = SillyTavern.getContext();
    try {
        data.userName = ctx.substituteParams("{{user}}") || "User";
        data.charName = ctx.substituteParams("{{char}}") || "Char";
        data.userDesc = ctx.substituteParams("{{persona}}") || "";
        data.persona  = ctx.substituteParams("{{description}}") || "";
    } catch (e) { console.error("Titania: 宏解析失败", e); }

    let charObj = null;
    if (typeof window.characters !== 'undefined' && typeof window.this_chid !== 'undefined') {
        charObj = window.characters[window.this_chid];
    } else if (ctx.characterId) {
        charObj = ctx.characters[ctx.characterId];
    }
    if (charObj) {
        const charBook = charObj.data?.character_book || charObj.character_book;
        if (charBook && Array.isArray(charBook.entries)) {
            const constantEntries = charBook.entries.filter(entry => {
                return entry.constant === true && entry.enabled === true;
            });
            if (constantEntries.length > 0) {
                const bookContent = constantEntries.map(e => ctx.substituteParams(e.content)).join("\n");
                data.worldInfo += "[Character Lore/World Info]\n" + bookContent + "\n\n";
            }
        }
    }
    const globalWI = ctx.worldInfo || [];
    if (Array.isArray(globalWI) && globalWI.length > 0) {
        const scanText = (data.persona + data.userDesc).toLowerCase(); 
        const activeEntries = globalWI.filter(entry => {
            if (entry.enabled === false) return false;
            const keys = (entry.keys || "").split(",").map(k => k.trim().toLowerCase()).filter(k=>k);
            return keys.some(k => scanText.includes(k));
        });
        if(activeEntries.length > 0) {
            data.worldInfo += "[Global World Info]\n" + activeEntries.map(e => ctx.substituteParams(e.content)).join("\n") + "\n\n";
        }
    }
    return data;
}

function refreshScriptList(isEchoMode) {
    const $sel = $("#t-sel-script");
    $sel.empty();
    const currentMode = isEchoMode ? "echo" : "parallel";
    const validScripts = runtimeScripts.filter(s => {
        if (s._type === 'user') return true; 
        if (!s.mode || s.mode === 'all') return true; 
        return s.mode === currentMode;
    });
    validScripts.forEach(s => {
        $sel.append(`<option value="${s.id}">${s.name}</option>`);
    });
    updateDesc(); 
}

function openMainWindow() {
    if ($("#t-overlay").length) return;
    const ctx = getContextData();
    const initialContent = lastGeneratedContent ? lastGeneratedContent : '<div style="text-align:center; color:#666; margin-top:40px;">请选择剧本并点击生成...</div>';
    const style = `<style>.t-mode-box { display:flex; align-items:center; justify-content:flex-end; gap:10px; margin-bottom:10px; font-size:0.9em; color:#ccc; } .t-switch { position: relative; display: inline-block; width: 40px; height: 20px; } .t-switch input { opacity: 0; width: 0; height: 0; } .t-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #4a4a4a; transition: .4s; border-radius: 34px; } .t-slider:before { position: absolute; content: ""; height: 14px; width: 14px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; } input:checked + .t-slider { background-color: #bfa15f; } input:checked + .t-slider:before { transform: translateX(20px); } .t-mode-label { font-weight:bold; transition:color 0.3s; } .mode-active { color: #bfa15f; }</style>`;
    const html = `${style}<div id="t-overlay" class="t-overlay"><div class="t-box" id="t-main-view"><div class="t-header"><div class="t-title-container"><div class="t-title-main">回声小剧场</div><div class="t-title-sub">ECHO THEATER</div></div><div style="display:flex; align-items:center;"><i class="fa-solid fa-book-bookmark t-icon-btn" id="t-btn-favs" title="回声收藏夹"></i><i class="fa-solid fa-gear t-icon-btn" id="t-btn-settings" title="设置"></i><span class="t-close" id="t-btn-close">&times;</span></div></div><div class="t-body"><div style="text-align:center; color:#888; font-size:0.9em; margin-bottom:5px;">✨ 当前主演: ${ctx.charName}</div><div class="t-mode-box"><span id="t-mode-text-p" class="t-mode-label mode-active">平行世界</span><label class="t-switch"><input type="checkbox" id="t-mode-toggle"><span class="t-slider"></span></label><span id="t-mode-text-e" class="t-mode-label">回声模式</span></div><div class="t-controls"><select id="t-sel-script" class="t-select"></select><div class="t-dice" id="t-btn-dice" title="随机剧本">🎲</div></div><textarea id="t-txt-desc" class="t-desc" readonly rows="2"></textarea><div class="t-render"><div class="t-tools"><button class="t-tool-btn" id="t-btn-debug" title="审查Prompt"><i class="fa-solid fa-eye"></i> 审查</button><button class="t-tool-btn" id="t-btn-like" title="收藏"><i class="fa-regular fa-heart"></i> 收藏</button><button class="t-tool-btn" id="t-btn-copy">复制</button></div><div id="t-output-content" style="margin-top:20px;">${initialContent}</div></div><button id="t-btn-run" class="t-btn primary" style="height:45px;"><span>🎬 开始演绎</span></button></div></div></div>`;

    $("body").append(html);
    refreshScriptList(false);
    updateDesc();
    $("#t-mode-toggle").on("change", function() {
        const isEcho = $(this).is(":checked");
        if(isEcho) { $("#t-mode-text-e").addClass("mode-active"); $("#t-mode-text-p").removeClass("mode-active"); } else { $("#t-mode-text-p").addClass("mode-active"); $("#t-mode-text-e").removeClass("mode-active"); }
        refreshScriptList(isEcho);
    });
    $("#t-btn-close").on("click", () => $("#t-overlay").remove());
    $("#t-overlay").on("click", (e) => { if(e.target === e.currentTarget) { if($("#t-btn-run").prop("disabled")) { $("#t-main-view").css("transform", "scale(1.02)"); setTimeout(() => $("#t-main-view").css("transform", "scale(1)"), 100); return; } $("#t-overlay").remove(); } });
    $("#t-btn-settings").on("click", openSettingsWindow);
    $("#t-sel-script").on("change", updateDesc);
    $("#t-btn-dice").on("click", function() { const opts = $("#t-sel-script option"); const rnd = Math.floor(Math.random() * opts.length); $("#t-sel-script").prop('selectedIndex', rnd).trigger('change'); $(this).css("transform", `rotate(${Math.random() * 360}deg)`); });
    $("#t-btn-copy").on("click", () => { navigator.clipboard.writeText($("#t-output-content").text()); const btn = $("#t-btn-copy"); btn.text("已复制"); setTimeout(() => btn.text("复制"), 1000); });
    $("#t-btn-run").on("click", handleGenerate);
    $("#t-btn-like").on("click", saveFavorite);
    $("#t-btn-favs").on("click", openFavsWindow);
    $("#t-btn-debug").on("click", showDebugInfo);
}

// 【Echo Theater v3.8 - Part 3A】
// 包含：API生成、历史记录、审查功能

function updateDesc() { const s = runtimeScripts.find(x => x.id === $("#t-sel-script").val()); if(s) $("#t-txt-desc").val(s.desc); }
function resetLikeBtn() { $("#t-btn-like").html('<i class="fa-regular fa-heart"></i> 收藏').removeClass("t-liked"); }

// 获取最近聊天记录 (防崩版)
function getChatHistory(limit) {
    if (!SillyTavern || !SillyTavern.getContext) return "";
    const ctx = SillyTavern.getContext();
    const history = ctx.chat || [];
    const safeLimit = parseInt(limit) || 10;
    const recent = history.slice(-safeLimit);
    
    return recent.map(msg => {
        let name = msg.name;
        if (msg.is_user) name = ctx.name1 || "User";
        if (name === "{{user}}") name = ctx.name1 || "User";
        if (name === "{{char}}") name = ctx.characters[ctx.characterId]?.name || "Char";
        let rawContent = msg.message || msg.mes || "";
        let cleanContent = rawContent.replace(/<[^>]*>?/gm, ''); 
        return `${name}: ${cleanContent}`;
    }).join("\n");
}

// 核心：后台生成逻辑
async function handleGenerate() {
    const cfg = JSON.parse(localStorage.getItem(STORAGE_KEY_CFG) || '{}');
    if (!cfg.key) return alert("请先去设置填 API Key！");

    const script = runtimeScripts.find(s => s.id === $("#t-sel-script").val());
    if(!script) return alert("请选择剧本");

    const ctx = getContextData();
    const isEchoMode = $("#t-mode-toggle").is(":checked");
    const $floatBtn = $("#titania-float-btn");

    $("#t-overlay").remove(); // 关闭主窗口
    isGenerating = true;      // 标记全局状态
    $floatBtn.addClass("t-loading"); // 悬浮球特效
    
    if(window.toastr) toastr.info("🚀 剧本已加入后台队列，演绎中...", "Titania Echo");

    try {
        let sys = "You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks.";
        let user = `[Roleplay Setup]\nCharacter: ${ctx.charName}\nUser: ${ctx.userName}\n\n`;
        
        if (ctx.persona) user += `[Character Persona]\n${ctx.persona}\n\n`;
        if (ctx.userDesc) user += `[User Persona]\n${ctx.userDesc}\n\n`;
        if (ctx.worldInfo) user += `[World Info / Lore]\n${ctx.worldInfo}\n\n`;
        
        if (isEchoMode) {
            const limit = cfg.history_limit || 10;
            const history = getChatHistory(limit);
            if (history && history.trim().length > 0) user += `[Recent Conversation History (Last ${limit} messages)]\n${history}\n\n`;
            else user += `[Recent Conversation History]\n(History is empty)\n\n`;
        } else {
            user += `[Mode Info]\n(Alternate Universe / Ignore previous chat history context)\n\n`;
        }
        
        user += `[Scenario Request]\n${script.prompt.replace(/{{char}}/g, ctx.charName).replace(/{{user}}/g, ctx.userName)}`;

        let endpoint = (cfg.url || "").trim().replace(/\/+$/, "");
        if (!endpoint) throw new Error("API URL 未设置");
        if (!endpoint.endsWith("/chat/completions")) endpoint += "/chat/completions";

        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${cfg.key}` },
            body: JSON.stringify({ 
                model: cfg.model || "gpt-3.5-turbo",
                messages: [{ role: "system", content: sys }, { role: "user", content: user }], 
                stream: false 
            })
        });

        const rawText = await res.text();
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${rawText.slice(0, 100)}`);
        
        let finalContent = "";
        try { finalContent = JSON.parse(rawText).choices[0].message.content; } 
        catch (e) { const lines = rawText.split(/\r?\n/); for (const line of lines) { if (line.includes('"content":')) { try { finalContent += JSON.parse(line.substring(line.indexOf('{'))).choices[0].delta.content || ""; } catch(err){} } } }
        
        if (!finalContent) throw new Error("无内容生成");
        finalContent = finalContent.replace(/^```html/i, "").replace(/```$/i, "");
        
        lastGeneratedContent = finalContent; // 更新全局存储
        if(window.toastr) toastr.success(`✨ 《${script.name}》演绎完成！点击悬浮球查看。`, "Titania Echo");
        $floatBtn.addClass("t-notify"); // 亮红点

    } catch (e) { 
        lastGeneratedContent = `<div style="color:#ff6b6b; text-align:center; padding:10px; border:1px solid #ff6b6b; border-radius:5px;">❌ 演绎失败: ${e.message}</div>`;
        if(window.toastr) toastr.error("❌ 小剧场演绎发生错误", "Titania Echo");
        $floatBtn.addClass("t-notify");
    } finally { 
        isGenerating = false;
        $floatBtn.removeClass("t-loading");
    }
}

// 审查 (完整显示)
function showDebugInfo() {
    const cfg = JSON.parse(localStorage.getItem(STORAGE_KEY_CFG) || '{}');
    const script = runtimeScripts.find(s => s.id === $("#t-sel-script").val());
    if (!script) return alert("请先选择一个剧本");

    const d = getContextData();
    const isEchoMode = $("#t-mode-toggle").is(":checked");
    
    const sysPrompt = "You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks.";
    let userPrompt = `[Roleplay Setup]\nCharacter: ${d.charName}\nUser: ${d.userName}\n\n`;
    
    if (d.persona) userPrompt += `[Character Persona]\n${d.persona}\n\n`;
    if (d.userDesc) userPrompt += `[User Persona]\n${d.userDesc}\n\n`;
    if (d.worldInfo) userPrompt += `[World Info / Lore]\n${d.worldInfo}\n\n`;

    if (isEchoMode) {
        const limit = cfg.history_limit || 10;
        const hist = getChatHistory(limit);
        userPrompt += `[History (${limit})]\n${hist || "(Empty)"}\n\n`;
    } else {
        userPrompt += `[Mode Info]\n(Parallel World / AU)\n\n`;
    }
    userPrompt += `[Scenario Request]\n${script.prompt.replace(/{{char}}/g, d.charName).replace(/{{user}}/g, d.userName)}`;

    $("#t-main-view").hide();
    const debugHtml = `<div class="t-box" id="t-debug-view" style="height:95vh; display:flex; flex-direction:column;"><div class="t-header"><span class="t-title-main">👁️ Prompt 审查</span><span class="t-close" id="t-debug-close">&times;</span></div><div class="t-body" style="padding:10px; overflow-y:auto; flex-grow:1; font-family:monospace; font-size:12px;"><div style="margin-bottom:10px; padding:5px; background:#222; border:1px solid #444;"><strong style="color:#bfa15f;">[Configuration]</strong><br>Model: ${cfg.model || "Default"}<br>Mode: ${isEchoMode ? "Echo" : "Parallel"}</div><div style="margin-bottom:10px;"><strong style="color:#ff6b6b;">[System Message]</strong><pre style="white-space:pre-wrap; color:#aaa; margin:5px 0; background:#111; padding:5px;">${sysPrompt}</pre></div><div><strong style="color:#90cdf4;">[User Message]</strong><pre style="white-space:pre-wrap; color:#ddd; margin:5px 0; background:#111; padding:5px; border-left:3px solid #90cdf4;">${userPrompt}</pre></div></div><div style="padding:10px; border-top:1px solid #444;"><button id="t-debug-back" class="t-btn primary" style="width:100%;">返回主窗口</button></div></div>`;
    $("#t-overlay").append(debugHtml);
    const close = () => { $("#t-debug-view").remove(); $("#t-main-view").show(); };
    $("#t-debug-close, #t-debug-back").on("click", close);
}

// 【Echo Theater v3.8 - Part 3B-1】
// 包含：简化版设置界面 (剥离了剧本管理功能)

// 简化版设置界面
function openSettingsWindow() {
    const cfg = JSON.parse(localStorage.getItem(STORAGE_KEY_CFG) || '{}');
    $("#t-main-view").hide();
    
    // UI：仅保留核心配置 + 一个大按钮入口
    const html = `
    <div class="t-box" id="t-settings-view">
        <div class="t-header"><span class="t-title-main">⚙️ 设置</span><span class="t-close" id="t-set-close">&times;</span></div>
        <div class="t-body">
            <h4 style="margin:0; border-bottom:1px solid #444; padding-bottom:5px;">🔌 API 连接</h4>
            <div><label>API URL:</label><input id="cfg-url" class="t-input" value="${cfg.url || ''}" placeholder="http://.../v1"></div>
            <div><label>API Key:</label><input id="cfg-key" type="password" class="t-input" value="${cfg.key || ''}"></div>
            <div style="display:flex; gap:10px;">
                <div style="flex-grow:1;"><label>Model:</label><select id="cfg-model-list" class="t-input"><option value="${cfg.model || 'gpt-3.5-turbo'}">${cfg.model || 'gpt-3.5-turbo'}</option></select></div>
                <button id="t-btn-fetch" class="t-btn" style="margin-top:24px; padding:0 10px;">🔄 获取</button>
            </div>
            
            <h4 style="margin:15px 0 5px 0; border-bottom:1px solid #444; padding-bottom:5px;">🧬 模式配置</h4>
            <div><label>回声模式-历史记录条数:</label><input id="cfg-history" type="number" class="t-input" value="${cfg.history_limit || 10}"></div>

            <!-- 关键入口 -->
            <div style="margin-top:20px; border-top:1px solid #444; padding-top:15px;">
                <button id="t-btn-open-mgr" class="t-btn" style="width:100%; height:45px; background:#444;">📂 打开剧本管理器</button>
            </div>
            
            <div class="t-btn-row" style="margin-top:20px;">
                <button id="t-set-save" class="t-btn primary" style="flex:1;">保存配置并返回</button>
            </div>
        </div>
    </div>`;
    
    $("#t-overlay").append(html);

    // 绑定：打开剧本管理器
    $("#t-btn-open-mgr").on("click", () => {
        $("#t-settings-view").remove(); // 关闭设置
        openScriptManager(); // 打开高级管理器
    });

    // 保存配置
    $("#t-set-close, #t-set-save").on("click", () => { 
        const newCfg = { 
            url: $("#cfg-url").val().trim(), 
            key: $("#cfg-key").val().trim(), 
            model: $("#cfg-model-list").val() || $("#cfg-model-list").text(),
            history_limit: parseInt($("#cfg-history").val()) || 10 
        }; 
        localStorage.setItem(STORAGE_KEY_CFG, JSON.stringify(newCfg)); 
        $("#t-settings-view").remove(); 
        $("#t-main-view").show(); 
        loadScripts(); 
        refreshScriptList($("#t-mode-toggle").is(":checked"));
    });
    
    // 获取模型列表
    $("#t-btn-fetch").on("click", async () => { const url = $("#cfg-url").val().replace(/\/+$/, "").replace(/\/chat\/completions$/, ""); const key = $("#cfg-key").val(); if(!url) return alert("请先填写 URL"); $("#t-btn-fetch").text("...").prop("disabled",true); try { const target = url.endsWith("/v1") ? `${url}/models` : `${url}/v1/models`; const res = await fetch(target, { headers: { Authorization: `Bearer ${key}` }}); const data = await res.json(); const list = Array.isArray(data) ? data : (data.data || []); const $sel = $("#cfg-model-list"); $sel.empty(); list.forEach(m => $sel.append(`<option value="${m.id}">${m.id}</option>`)); alert(`成功获取 ${list.length} 个模型`); } catch(e) { alert("获取失败: " + e.message); } finally { $("#t-btn-fetch").text("🔄 获取").prop("disabled",false); }});
}

// 【Echo Theater v3.8 - Part 3B-2】
// 包含：高级剧本管理器、编辑器、收藏夹

// 🌟 全新：独立剧本管理器
function openScriptManager() {
    const html = `
    <div class="t-box" id="t-mgr-view" style="height:90vh;">
        <div class="t-header">
            <span class="t-title-main">📜 剧本管理器</span>
            <span class="t-close" id="t-mgr-close">&times;</span>
        </div>
        <div class="t-body" style="padding:0; display:flex; flex-direction:column; height:100%;">
            <!-- 工具栏 -->
            <div style="padding:10px; background:#222; border-bottom:1px solid #444; display:flex; gap:10px;">
                <input type="file" id="t-file-import" accept=".txt" style="display:none;" />
                <button id="t-mgr-import" class="t-tool-btn" style="flex:1;">📥 导入</button>
                <button id="t-mgr-new" class="t-tool-btn" style="flex:1;">+ 新建</button>
                <button id="t-mgr-del-batch" class="t-tool-btn" style="flex:1; color:#aaa; pointer-events:none; border-color:#555;">🗑️ 删除选中</button>
            </div>
            
            <!-- 全选行 -->
            <div style="padding:5px 10px; background:#1a1a1a; font-size:0.85em; display:flex; align-items:center; border-bottom:1px solid #333;">
                <input type="checkbox" id="t-mgr-select-all" style="margin-right:8px;">
                <label for="t-mgr-select-all">全选 (仅自定义剧本)</label>
            </div>

            <!-- 列表区域 -->
            <div id="t-mgr-list" style="flex-grow:1; overflow-y:auto; padding:5px;"></div>
        </div>
    </div>`;

    $("#t-overlay").append(html);
    renderManagerList();

    // 关闭逻辑：返回主界面并刷新
    $("#t-mgr-close").on("click", () => { $("#t-mgr-view").remove(); $("#t-main-view").show(); refreshScriptList($("#t-mode-toggle").is(":checked")); });
    
    // 全选逻辑
    $("#t-mgr-select-all").on("change", function() {
        const checked = $(this).is(":checked");
        $(".t-mgr-check:not(:disabled)").prop("checked", checked);
        updateBatchBtn();
    });

    // 导入逻辑
    $("#t-mgr-import").on("click", () => $("#t-file-import").click());
    $("#t-file-import").on("change", function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            const content = evt.target.result;
            const fileName = file.name.replace(/\.[^/.]+$/, "");
            const blocks = content.split(/\r?\n\s*###\s*\r?\n/).filter(b => b.trim().length > 0);
            let count = 0;
            blocks.forEach((block, index) => {
                let scriptName = (blocks.length > 1) ? `${fileName}_${String(index+1).padStart(2, '0')}` : fileName;
                saveUserScript({
                    id: "imp_" + Date.now() + "_" + Math.floor(Math.random()*1000),
                    name: scriptName,
                    desc: "从TXT导入",
                    prompt: block.trim(),
                    mode: "all"
                });
                count++;
            });
            alert(`成功导入 ${count} 个剧本！`);
            $("#t-file-import").val("");
            renderManagerList(); // 刷新列表
        };
        reader.readAsText(file);
    });

    // 新建
    $("#t-mgr-new").on("click", () => { $("#t-mgr-view").hide(); openEditor(null, true); });

    // 批量删除
    $("#t-mgr-del-batch").on("click", function() {
        const ids = [];
        $(".t-mgr-check:checked").each(function() { ids.push($(this).data("id")); });
        if(ids.length === 0) return;
        if(confirm(`确定要删除选中的 ${ids.length} 个剧本吗？`)) {
            ids.forEach(id => deleteUserScript(id)); 
            renderManagerList();
            $("#t-mgr-select-all").prop("checked", false);
        }
    });
}

function renderManagerList() {
    const list = $("#t-mgr-list");
    list.empty();
    
    runtimeScripts.forEach(s => {
        const isUser = s._type === 'user';
        const badge = isUser ? '<span class="t-badge badge-user">自定义</span>' : '<span class="t-badge badge-preset">预设</span>';
        const modeLabel = s.mode === 'echo' ? '[回声]' : (s.mode === 'parallel' ? '[平行]' : '[通用]');
        
        // 只有 user 可以勾选
        const checkbox = isUser 
            ? `<input type="checkbox" class="t-mgr-check" data-id="${s.id}" style="margin-right:10px;">`
            : `<input type="checkbox" disabled style="margin-right:10px; opacity:0.3;">`;

        const btns = isUser 
            ? `<i class="fa-solid fa-pen" style="cursor:pointer; padding:5px;" onclick="window.t_edit('${s.id}', true)"></i>`
            : `<i class="fa-solid fa-eye" style="cursor:pointer; opacity:0.5; padding:5px;" onclick="window.t_edit('${s.id}', true)"></i>`;

        const item = $(`
        <div class="t-list-item" style="display:flex; align-items:center;">
            <div>${checkbox}</div>
            <div style="flex-grow:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                <span style="color:#888; font-size:0.8em; margin-right:5px;">${modeLabel}</span>
                ${s.name} ${badge}
            </div>
            <div>${btns}</div>
        </div>`);

        list.append(item);
    });

    $(".t-mgr-check").on("change", updateBatchBtn);
    updateBatchBtn();
}

function updateBatchBtn() {
    const count = $(".t-mgr-check:checked").length;
    const btn = $("#t-mgr-del-batch");
    if (count > 0) {
        btn.css({ "color": "#ff6b6b", "pointer-events": "auto", "border-color": "#ff6b6b" });
        btn.text(`🗑️ 删除 (${count})`);
    } else {
        btn.css({ "color": "#aaa", "pointer-events": "none", "border-color": "#555" });
        btn.text(`🗑️ 删除选中`);
    }
}

// 编辑器 (适配返回路径)
function openEditor(id, fromMgr = false) { 
    const isEdit = !!id; 
    let data = { id: Date.now().toString(), name: "新剧本", desc: "", prompt: "" }; 
    if (isEdit) data = runtimeScripts.find(s => s.id === id); 
    const isPreset = data._type === 'preset'; 
    
    if(fromMgr) $("#t-mgr-view").hide(); else $("#t-settings-view").hide();
    
    const html = `<div class="t-box" id="t-editor-view"><div class="t-header"><span class="t-title-main">${isPreset ? '查看' : (isEdit ? '编辑' : '新建')}</span></div><div class="t-body"><label>标题:</label><input id="ed-name" class="t-input" value="${data.name}" ${isPreset ? 'disabled' : ''}><label>简介:</label><input id="ed-desc" class="t-input" value="${data.desc}" ${isPreset ? 'disabled' : ''}><div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;"><label>Prompt (支持 {{char}}, {{user}}):</label>${!isPreset ? `<div class="t-tool-btn" id="ed-btn-expand" style="cursor:pointer;"><i class="fa-solid fa-maximize"></i> 大屏编辑</div>` : ''}</div><textarea id="ed-prompt" class="t-input" rows="8" ${isPreset ? 'disabled' : ''}>${data.prompt}</textarea><div class="t-btn-row">${!isPreset ? '<button id="ed-save" class="t-btn primary" style="flex:1;">保存</button>' : ''}<button id="ed-cancel" class="t-btn" style="flex:1;">返回</button></div></div></div>`; 
    $("#t-overlay").append(html); 
    
    $("#ed-cancel").on("click", () => { 
        $("#t-editor-view").remove(); 
        if(fromMgr) $("#t-mgr-view").show(); else $("#t-settings-view").show(); 
    }); 

    // 大屏逻辑
    $("#ed-btn-expand").on("click", () => {
        $("#t-editor-view").hide();
        $("#t-overlay").append(`
        <div class="t-box" id="t-large-edit-view" style="height:90vh; max-height:95vh; max-width:800px;">
            <div class="t-header"><span class="t-title-main">大屏模式</span></div>
            <div class="t-body" style="height:100%;">
                <textarea id="ed-large-text" class="t-input" style="flex-grow:1; resize:none; font-family:monospace; line-height:1.5; font-size:14px;">${$("#ed-prompt").val()}</textarea>
                <div class="t-btn-row">
                    <button id="ed-large-ok" class="t-btn primary" style="flex:1;">确认修改</button>
                    <button id="ed-large-cancel" class="t-btn" style="flex:1;">取消</button>
                </div>
            </div>
        </div>`);
        $("#ed-large-cancel").on("click", () => { $("#t-large-edit-view").remove(); $("#t-editor-view").show(); });
        $("#ed-large-ok").on("click", () => { $("#ed-prompt").val($("#ed-large-text").val()); $("#t-large-edit-view").remove(); $("#t-editor-view").show(); });
    });

    if(!isPreset) { 
        $("#ed-save").on("click", () => { 
            saveUserScript({ 
                id: isEdit ? data.id : "user_" + Date.now(), 
                name: $("#ed-name").val(), 
                desc: $("#ed-desc").val(), 
                prompt: $("#ed-prompt").val() 
            }); 
            $("#t-editor-view").remove(); 
            if(fromMgr) { $("#t-mgr-view").show(); renderManagerList(); }
        }); 
    } 
}
window.t_edit = (id, fromMgr) => openEditor(id, fromMgr);

// 收藏夹
function saveFavorite() { const content = $("#t-output-content").html(); if (!content || content.includes("请选择剧本") || content.includes("<pre")) return alert("内容无效"); const scriptName = $("#t-sel-script option:selected").text(); const entry = { id: Date.now(), title: `${scriptName} - ${getContextData().charName}`, date: new Date().toLocaleString(), html: content }; const favs = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS) || '[]'); favs.unshift(entry); localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(favs)); $("#t-btn-like").html('<i class="fa-solid fa-heart"></i> 已收藏').addClass("t-liked"); }
function openFavsWindow() { $("#t-main-view").hide(); const favs = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS) || '[]'); const html = `<div class="t-box" id="t-favs-view"><div class="t-header"><span class="t-title-main">📖 回声收藏夹</span><span class="t-close" id="t-fav-close">&times;</span></div><div class="t-body" id="t-fav-list">${favs.length === 0 ? '<div style="text-align:center; color:#666; margin-top:50px;">暂无收藏~</div>' : ''}</div></div>`; $("#t-overlay").append(html); favs.forEach(item => { const el = $(`<div class="t-list-item" style="cursor:pointer;"><div style="flex-grow:1;"><div style="font-weight:bold;">${item.title||'未命名'}</div><div class="t-fav-meta">${item.date}</div></div><div><i class="fa-solid fa-trash" style="color:#ff6b6b; padding:5px;"></i></div></div>`); el.find("div:first").on("click", () => { $("#t-favs-view").hide(); $("#t-overlay").append(`<div class="t-box" id="t-reader-view"><div class="t-header"><span class="t-title-main" style="font-size:1em;">${item.title}</span><span class="t-close" id="t-read-close">&times;</span></div><div class="t-body" style="padding:0;"><div class="t-render" style="border:none; border-radius:0; height:100%;">${item.html}</div></div></div>`); $("#t-read-close").on("click", () => { $("#t-reader-view").remove(); $("#t-favs-view").show(); }); }); el.find(".fa-trash").on("click", (e) => { e.stopPropagation(); if(confirm("删除？")) { const newFavs = JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS)||'[]').filter(x=>x.id!==item.id); localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(newFavs)); $("#t-favs-view").remove(); openFavsWindow(); }}); $("#t-fav-list").append(el); }); $("#t-fav-close").on("click", () => { $("#t-favs-view").remove(); $("#t-main-view").show(); }); }
