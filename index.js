// --- START OF FILE ---回声小剧场v4.6.1

// 【Part 1: 头部引用、配置与数据辅助函数】
import { extension_settings, getContext } from "../../../extensions.js";
import { saveSettingsDebounced, eventSource, event_types } from "../../../../script.js";
import { 
    selected_world_info, 
    world_info 
} from "../../../world-info.js";

const extensionName = "Titania_Theater_Echo";
const extensionFolderPath = `scripts/extensions/third-party/titania-theater`;

// [修改] 默认设置结构 (新增 profiles 支持多API，以及自动化分类白名单)
const defaultSettings = {
    enabled: true,
    config: {
        // [新增] 多配置方案支持
        active_profile_id: "default",
        profiles: [
            {
                id: "st_sync",
                name: "🔗 跟随 SillyTavern (主连接)",
                type: "internal",
                readonly: true
            },
            {
                id: "default",
                name: "默认自定义",
                type: "custom",
                url: "",
                key: "",
                model: "gpt-3.5-turbo"
            }
        ],
        // 全局通用设置
        stream: true,
        auto_generate: false,
        auto_chance: 50,

        // [修改] 自动化策略: 'follow'(跟随模式) 或 'category'(指定分类)
        auto_mode: "follow",

        // [新增] 自动化分类白名单 (仅在 auto_mode 为 'category' 时生效)
        auto_categories: [],

        history_limit: 10
    },
    user_scripts: [],
    favs: [],
    character_map: {},
    disabled_presets: [],
    appearance: {
        type: "emoji",
        content: "🎭",
        color_theme: "#bfa15f",
        color_notify: "#55efc4",
        size: 56
    },
    director: {
        length: "",
        perspective: "auto",
        style_ref: ""
    }
};


// 旧版 Key (用于迁移)
const LEGACY_KEY_CFG = "Titania_Config_v3";
const LEGACY_KEY_SCRIPTS = "Titania_UserScripts_v3";
const LEGACY_KEY_FAVS = "Titania_Favs_v3";

let isGenerating = false;
let runtimeScripts = [];
let lastGeneratedContent = "";
let lastUsedScriptId = "";

// [新增] 将筛选状态提升为全局变量，使其在窗口关闭后也能保持
let currentCategoryFilter = "ALL";

// --- [新增] Titania 日志系统 (用于错误捕获与诊断) ---
const TitaniaLogger = {
    logs: [],
    maxLogs: 50, // 内存中最多保留50条，刷新即清空

    add: function (type, message, details = null) {
        const entry = {
            timestamp: new Date().toLocaleString(),
            type: type, // 'INFO', 'WARN', 'ERROR'
            message: message,
            details: details,
            // 记录基础环境上下文
            context: {
                scriptId: lastUsedScriptId || "none",
                isGenerating: isGenerating
            }
        };

        this.logs.unshift(entry);
        if (this.logs.length > this.maxLogs) this.logs.pop();

        // ERROR 级别同步输出到控制台，方便 F12 查看
        if (type === 'ERROR') console.error('[Titania Debug]', message, details);
    },

    info: function (msg, details) { this.add('INFO', msg, details); },
    warn: function (msg, details) { this.add('WARN', msg, details); },

    // 专门用于记录报错，支持传入上下文对象（如包含 Prompt 或 Diagnostics）
    error: function (msg, errObj, contextData = {}) {
        let stack = "Unknown";
        let errMsg = "Unknown Error";

        if (errObj) {
            if (typeof errObj === 'string') {
                errMsg = errObj;
            } else {
                errMsg = errObj.message || "Error Object";
                stack = errObj.stack || JSON.stringify(errObj);
            }
        }
        
        // 自动提取 fetch 相关的关键信息放到 message 里，方便一眼看到
        if (contextData && contextData.network && contextData.network.status) {
            msg += ` [HTTP ${contextData.network.status}]`;
        }

        this.add('ERROR', msg, {
            error_message: errMsg,
            stack_trace: stack,
            diagnostics: contextData // 这里存放完整的诊断数据
        });
    },

    // 导出并下载日志 (增强版：增加 ST 环境探针)
    downloadReport: function () {
        const data = getExtData();

        // 1. 创建配置快照 (深拷贝)
        const configSnapshot = JSON.parse(JSON.stringify(data.config || {}));

        // 2. 隐私脱敏处理 (移除 API Key)
        if (configSnapshot.profiles && Array.isArray(configSnapshot.profiles)) {
            configSnapshot.profiles.forEach(p => {
                if (p.key && p.key.length > 5) {
                    p.key = p.key.substring(0, 3) + "***(HIDDEN)";
                } else if (p.key) {
                    p.key = "***(HIDDEN)";
                }
            });
        }
        if (configSnapshot.key) configSnapshot.key = "***(HIDDEN)";

        // 3. 收集宿主环境信息 (新增部分)
        let stVersion = "Unknown";
        try {
            if (typeof SillyTavern !== 'undefined' && SillyTavern.version) stVersion = SillyTavern.version;
            // 兼容旧版 ST 全局变量写法
            else if (typeof extension_settings !== 'undefined' && window.SillyTavernVersion) stVersion = window.SillyTavernVersion;
        } catch (e) {}

        // 4. 组装报告
        const reportObj = {
            meta: {
                extension: extensionName,
                extension_version: "v4.6.1",
                st_version: stVersion, // ST 版本号
                userAgent: navigator.userAgent, // 浏览器指纹
                screen_res: `${window.screen.width}x${window.screen.height}`, // 屏幕分辨率 (排查 UI 挤压问题)
                viewport: `${window.innerWidth}x${window.innerHeight}`, // 视口大小
                time: new Date().toLocaleString(),
                timestamp: Date.now()
            },
            config: configSnapshot,
            logs: this.logs
        };

        // 5. 触发下载
        const content = JSON.stringify(reportObj, null, 2);
        const blob = new Blob([content], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Titania_Debug_${new Date().toISOString().slice(0,10).replace(/-/g,"")}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// --- 数据存取辅助函数 ---
function getExtData() {
    if (!extension_settings[extensionName]) {
        extension_settings[extensionName] = JSON.parse(JSON.stringify(defaultSettings));
    }
    return extension_settings[extensionName];
}

function saveExtData() {
    saveSettingsDebounced(); // 保存到 public/settings.json
}

// [修改] 脚本加载逻辑
function loadScripts() {
    const data = getExtData();
    const userScripts = data.user_scripts || [];
    const disabledIDs = data.disabled_presets || [];

    // 加载预设 (过滤掉在黑名单里的)
    runtimeScripts = DEFAULT_PRESETS
        .filter(p => !disabledIDs.includes(p.id))
        .map(p => ({ ...p, _type: 'preset' }));

    // 合并自定义剧本 (含数据清洗)
    userScripts.forEach(s => {
        let cleanMode = s.mode;
        if (!cleanMode || cleanMode === 'all') {
            cleanMode = 'parallel';
        }

        if (!runtimeScripts.find(r => r.id === s.id)) {
            runtimeScripts.push({
                ...s,
                mode: cleanMode,
                _type: 'user'
            });
        }
    });
}

function saveUserScript(s) {
    const data = getExtData();
    let u = data.user_scripts || [];
    u = u.filter(x => x.id !== s.id); // 移除旧的
    u.push(s); // 加入新的
    data.user_scripts = u;
    saveExtData();
    loadScripts();
}

function deleteUserScript(id) {
    const data = getExtData();
    let u = data.user_scripts || [];
    u = u.filter(x => x.id !== id);
    data.user_scripts = u;
    saveExtData();
    loadScripts();
}

// 【Part 2: 预设库定义】

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
    { id: "p_xianxia", mode: "parallel", name: "🏔️ 仙侠修真", desc: "【平行】师尊与徒弟，或者正邪不两立的修仙界。", prompt: "【平行世界：古风修仙】忽略历史背景。{{char}} 是高冷的师尊或魔教教主，{{user}} 是弟子或正道少侠。描写一段在洞府修炼、传功或对峙的场景。CSS样式：水墨山水画背景，典雅古风边框。" },
    { id: "p_office", mode: "parallel", name: "💼 职场精英", desc: "【平行】霸总、秘书或加班的同事。茶水间的故事。", prompt: "【平行世界：现代职场】忽略历史背景。{{char}} 是严厉的上司或疲惫的前辈。描写一段在茶水间偶遇，或者深夜在办公室加班吃外卖的场景。CSS样式：简约商务风，白底黑字，模仿Email或办公软件界面。" },
    { id: "p_detective", mode: "parallel", name: "🕵️ 黑色侦探", desc: "【平行】上世纪40年代，爵士乐、雨夜与私家侦探。", prompt: "【平行世界：黑色电影Noir】忽略历史背景。{{char}} 是落魄侦探或致命伴侣。场景是烟雾缭绕的事务所，窗外下着大雨。用第一人称独白风格描写。CSS样式：黑白电影滤镜，打字机字体，老照片质感。" },
    { id: "p_harry", mode: "parallel", name: "🪄 魔法学院", desc: "【平行】分院帽、魔药课与魁地奇比赛。", prompt: "【平行世界：魔法学院】忽略历史背景。{{char}} 和 {{user}} 穿着不同学院的巫师袍。描写一段在图书馆禁书区夜游，或者魔药课炸了坩埚后的场景。CSS样式：深红色或深绿色天鹅绒质感背景，金色衬线字体，魔法火花装饰。" },
    { id: "p_apocalypse", mode: "parallel", name: "🧟 末日生存", desc: "【平行】丧尸爆发或废土世界。资源匮乏下的信任。", prompt: "【平行世界：末日废土】忽略历史背景。世界已毁灭，资源匮乏。{{char}} 和 {{user}} 躲在一处废墟中避雨或躲避怪物。描写分享仅存的一罐罐头时的对话。CSS样式：生锈金属纹理背景，裂痕效果，污渍斑点。" },
    { id: "p_royal", mode: "parallel", name: "👑 宫廷权谋", desc: "【平行】皇帝/女王与权臣/刺客。华丽笼子里的博弈。", prompt: "【平行世界：中世纪/古代宫廷】忽略历史背景。{{char}} 是掌握权力的皇室成员，{{user}} 是侍卫或政治联姻对象。描写一段在寝宫内低声密谋或对峙的场景，张力拉满。CSS样式：深紫色丝绸背景，金色边框，华丽的花纹装饰。" },
    { id: "p_cthulhu", mode: "parallel", name: "🐙 克苏鲁", desc: "【平行】不可名状的恐怖，掉San值的调查员故事。", prompt: "【平行世界：克苏鲁神话】忽略历史背景。1920年代，{{char}} 和 {{user}} 是调查员。你们发现了一本古怪的书或一个诡异的祭坛。{{char}} 的理智值（Sanity）开始下降，说话变得癫狂。CSS样式：暗绿色粘液质感背景，扭曲的字体，文字周围带有模糊的黑雾效果。" }
];

// 【Part 3: 悬浮球、上下文与主窗口】
function createFloatingButton() {
    $("#titania-float-btn").remove();
    $("#titania-float-style").remove();

    if (!extension_settings[extensionName].enabled) return;

    const data = getExtData();
    // [修改] 获取尺寸，默认为 56
    const app = data.appearance || { type: "emoji", content: "🎭", color_theme: "#bfa15f", color_notify: "#55efc4", size: 56 };
    const size = parseInt(app.size) || 56;
    const fontSize = Math.floor(size * 0.46); // 字体大小约为球体的 46%

    // 1. 动态 CSS
    const css = `
    <style id="titania-float-style">
        :root {
            --t-theme: ${app.color_theme};
            --t-notify: ${app.color_notify};
        }
        
        #titania-float-btn {
            position: fixed; top: 100px; left: 20px;
            /* [修改] 动态宽高 */
            width: ${size}px; height: ${size}px; 
            padding: 3px; 
            
            border-radius: 50%;
            background: #2b2b2b;
            color: #fff;
            
            display: flex; align-items: center; justify-content: center;
            /* [修改] 动态字体大小 */
            font-size: ${fontSize}px; 
            
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.6);
            border: 2px solid #444; 
            
            transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
            user-select: none;
            overflow: hidden; 
            box-sizing: border-box; 
        }
        
        #titania-float-btn img {
            width: 100%; height: 100%; 
            object-fit: cover; 
            border-radius: 50%; 
            pointer-events: none;
            position: relative;
            z-index: 2; 
        }

        @keyframes t-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
        #titania-float-btn.t-loading {
            background: transparent !important; 
            border-color: transparent !important; 
            color: var(--t-theme) !important;
            pointer-events: none;
            box-shadow: 0 0 20px var(--t-theme); 
        }
        
        #titania-float-btn.t-loading::before {
            content: ""; position: absolute;
            width: 200%; height: 200%; 
            top: -50%; left: -50%;
            background: conic-gradient(transparent 20%, transparent 40%, var(--t-theme));
            animation: t-spin 1.2s linear infinite;
            z-index: 0; 
        }
        
        #titania-float-btn.t-loading::after {
            content: ""; position: absolute; 
            inset: 3px; 
            background: #2b2b2b; 
            border-radius: 50%; 
            z-index: 1; 
        }

        @keyframes t-glow {
            0%, 100% { box-shadow: 0 0 5px var(--t-notify); border-color: var(--t-notify); }
            50% { box-shadow: 0 0 25px var(--t-notify); border-color: var(--t-notify); }
        }

        #titania-float-btn.t-notify {
            animation: t-glow 2s infinite ease-in-out;
            border-color: var(--t-notify); 
        }
    </style>`;
    $("body").append(css);

    // 2. 创建元素
    const btnContent = (app.type === 'image' && app.content.startsWith("data:"))
        ? `<img src="${app.content}">`
        : `<span style="position:relative; z-index:2;">${app.content}</span>`;

    const btn = $(`<div id="titania-float-btn">${btnContent}</div>`);
    $("body").append(btn);

    // 3. 拖拽逻辑 (修正边界计算)
    let isDragging = false, startX, startY, initialLeft, initialTop;
    btn.on("touchstart mousedown", function (e) {
        isDragging = false;
        const evt = e.type === 'touchstart' ? e.originalEvent.touches[0] : e;
        startX = evt.clientX; startY = evt.clientY;
        const rect = this.getBoundingClientRect(); initialLeft = rect.left; initialTop = rect.top;
        $(this).css({ "transition": "none", "transform": "none" });
    });
    $(document).on("touchmove mousemove", function (e) {
        if (startX === undefined) return;
        const evt = e.type === 'touchmove' ? e.originalEvent.touches[0] : e;
        if (Math.abs(evt.clientX - startX) > 5 || Math.abs(evt.clientY - startY) > 5) isDragging = true;
        let l = initialLeft + (evt.clientX - startX), t = initialTop + (evt.clientY - startY);
        // [修改] 使用动态 size 计算边界
        l = Math.max(0, Math.min(window.innerWidth - size, l));
        t = Math.max(0, Math.min(window.innerHeight - size, t));
        btn.css({ left: l + "px", top: t + "px", right: "auto" });
    });
    $(document).on("touchend mouseup", function () {
        if (startX === undefined) return; startX = undefined;
        if (isDragging) {
            const rect = btn[0].getBoundingClientRect();
            // [修改] 贴边计算也需要用 size
            const snapThreshold = window.innerWidth / 2;
            const targetLeft = (rect.left + (size / 2) < snapThreshold) ? 0 : window.innerWidth - size;

            btn.css({ "transition": "all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)", "left": targetLeft + "px" });
        } else {
            if (isGenerating) {
                if (window.toastr) toastr.info("🎭 小剧场正在后台演绎中，请稍候...", "Titania Echo");
                return;
            }
            btn.removeClass("t-notify");
            openMainWindow();
        }
    });
}

// [修改] 改为异步函数，以支持 loadWorldInfo
async function getContextData() {
    let data = { charName: "Char", persona: "", userName: "User", userDesc: "", worldInfo: "" };
    
    if (typeof SillyTavern === 'undefined' || !SillyTavern.getContext) return data;
    const ctx = SillyTavern.getContext();

    try {
        data.userName = ctx.substituteParams("{{user}}") || "User";
        data.charName = ctx.substituteParams("{{char}}") || "Char";
        data.userDesc = ctx.substituteParams("{{persona}}") || "";
        data.persona = ctx.substituteParams("{{description}}") || "";
    } catch (e) { console.error("Titania: 宏解析失败", e); }

    const charId = ctx.characterId;
    const activeBooks = new Set();

    // --- 1. 收集所有相关的世界书名称 ---
    
    // A. 全局开启的世界书 (从 ST 核心变量读取)
    if (typeof selected_world_info !== 'undefined' && Array.isArray(selected_world_info)) {
        selected_world_info.forEach(name => activeBooks.add(name));
    }

    // B. 角色绑定的世界书
    if (charId !== undefined && ctx.characters && ctx.characters[charId]) {
        const charObj = ctx.characters[charId];
        
        // 主要世界书 (Primary)
        const primary = charObj.data?.extensions?.world;
        if (primary) activeBooks.add(primary);

        // 附加世界书 (Auxiliary/Additional)
        // 逻辑：匹配头像文件名。注意：world_info 变量通常在 ST 全局作用域可用
        const fileName = (charObj.avatar || "").replace(/\.[^/.]+$/, "");
        if (typeof world_info !== 'undefined' && world_info.charLore) {
            const loreEntry = world_info.charLore.find(e => e.name === fileName);
            if (loreEntry && Array.isArray(loreEntry.extraBooks)) {
                loreEntry.extraBooks.forEach(name => activeBooks.add(name));
            }
        }
    }

    // --- 2. 加载并筛选蓝灯条目 ---
    const blueContentParts = [];

    for (const bookName of activeBooks) {
        try {
            const bookData = await ctx.loadWorldInfo(bookName);
            if (!bookData || !bookData.entries) continue;

            // 筛选：!disable (已开启) 且 constant (蓝灯)
            const blueEntries = Object.values(bookData.entries).filter(entry => 
                (entry.disable === false || entry.enabled === true) && entry.constant === true
            );

            blueEntries.forEach(e => {
                if (e.content && e.content.trim()) {
                    // 解析内容中的宏并存入数组
                    blueContentParts.push(ctx.substituteParams(e.content.trim()));
                }
            });
        } catch (err) {
            console.warn(`Titania: 无法加载世界书 [${bookName}]`, err);
        }
    }

    if (blueContentParts.length > 0) {
        data.worldInfo = "[World Info / Lore]\n" + blueContentParts.join("\n\n") + "\n\n";
    }

    return data;
}

function refreshScriptList(isEchoMode) {
    const $sel = $("#t-sel-script");
    $sel.empty();

    // 只显示对应模式的剧本
    const targetMode = isEchoMode ? "echo" : "parallel";
    const validScripts = runtimeScripts.filter(s => s.mode === targetMode);

    validScripts.forEach(s => {
        $sel.append(`<option value="${s.id}">${s.name}</option>`);
    });

    if (lastUsedScriptId && validScripts.find(s => s.id === lastUsedScriptId)) {
        $sel.val(lastUsedScriptId);
    }
    updateDesc();
}

function updateDesc() { const s = runtimeScripts.find(x => x.id === $("#t-sel-script").val()); if (s) $("#t-txt-desc").val(s.desc); }

// 主窗口逻辑 - 实现了 Tab 模式与剧本内容的逻辑解耦，CSS强力约束，防止生成的宽卡片撑爆移动端界面)
async function openMainWindow() {
    if ($("#t-overlay").length) return;

    const ctx = await getContextData();
    const data = getExtData();

    // 1. 获取持久化的 Tab 模式偏好 (默认为 Echo)
    let savedMode = (data.ui_mode_echo !== false);

    // 2. 准备初始展示内容
    const initialContent = lastGeneratedContent ? lastGeneratedContent : '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#555;"><i class="fa-solid fa-clapperboard" style="font-size:3em; margin-bottom:15px; opacity:0.5;"></i><div style="font-size:1.1em;">请选择剧本，开始演绎...</div></div>';

    const style = `
    <style>
        .t-overlay { z-index: 2000; }
        
        #t-main-view { 
            width: 950px; max-width: 95vw; height: 85vh; 
            display: flex; flex-direction: column; 
            background: #121212; 
            overflow: hidden; 
            border-radius: 8px; 
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
            position: relative; 
            isolation: isolate; 
        }
        
        /* Zen Mode */
        #t-main-view.t-zen-mode .t-header, 
        #t-main-view.t-zen-mode .t-top-bar, 
        #t-main-view.t-zen-mode .t-bottom-bar { 
            display: none !important; 
        }
        
        #t-main-view.t-zen-mode .t-content-wrapper { 
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;
            background-color: #0b0b0b; 
            background-image: none; 
        }
        
        .t-content-wrapper { 
            flex-grow: 1; 
            position: relative; 
            overflow: hidden; 
            background-color: #0b0b0b; 
            background-image: linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px); 
            background-size: 20px 20px;
            transform: translateZ(0); 
            contain: size layout style;
            /* [修复] 确保容器本身也是弹性盒子的子元素，正确缩放 */
            min-height: 0; 
        }
        
        .t-content-area { 
            position: absolute; top: 0; left: 0; 
            width: 100%; height: 100%; 
            padding: 0; 
            overflow-y: auto; 
            box-sizing: border-box; 
            scroll-behavior: smooth; 
            z-index: 1;
        }
        
        #t-output-content { 
            width: 100%; 
            min-height: 100%; 
            display: flex; 
            flex-direction: column;
            overflow-x: hidden; /* [修复] 禁止横向滚动条撑开布局 */
        }

        /* [关键修复] 强制限制生成内容的样式 */
        #t-output-content > div {
            flex-grow: 1;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important; /* [修复] 强制最大宽度不超过容器 */
            border-radius: 0 !important;
            border: none !important;
            min-height: 100%;
            box-sizing: border-box !important;
            overflow-x: hidden !important; /* [修复] 内部溢出隐藏 */
        }

        /* [新增] 防止生成的图片撑爆 */
        #t-output-content img {
            max-width: 100% !important;
            height: auto !important;
        }

        .t-content-area::-webkit-scrollbar { width: 6px; }
        .t-content-area::-webkit-scrollbar-track { background: transparent; }
        .t-content-area::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 3px; }
        .t-content-area::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }

        /* [关键修复] flex-shrink: 0 防止这些栏目被挤压或移动 */
        .t-header { flex-shrink: 0; } 
        .t-top-bar { padding: 12px 20px; background: #1e1e1e; border-bottom: 1px solid #333; display: flex; gap: 15px; align-items: stretch; height: 75px; box-sizing: border-box; flex-shrink: 0; z-index: 20; }
        
        .t-tabs { display: flex; flex-direction: column; width: 140px; background: #111; border-radius: 6px; padding: 3px; border: 1px solid #333; flex-shrink: 0; }
        .t-tab { flex: 1; display: flex; align-items: center; justify-content: center; cursor: pointer; border-radius: 4px; transition: 0.2s; font-size: 0.85em; font-weight: bold; color: #666; margin-bottom: 2px; border: 1px solid transparent; }
        .t-tab:last-child { margin-bottom: 0; }
        
        /* Tab 激活状态颜色区分 */
        .t-tab.active-echo { background: rgba(144, 205, 244, 0.15); color: #90cdf4; border: 1px solid rgba(144, 205, 244, 0.2); }
        .t-tab.active-parallel { background: rgba(191, 161, 95, 0.15); color: #bfa15f; border: 1px solid rgba(191, 161, 95, 0.2); }
        
        .t-trigger-card { flex-grow: 1; background: #222; border: 1px solid #333; border-radius: 6px; padding: 0 15px; cursor: pointer; display: flex; flex-direction: column; justify-content: center; transition: 0.2s; position: relative; min-width: 0; }
        .t-trigger-card:hover { background: #2a2a2a; border-color: #555; }
        .t-trigger-main { font-size: 1.1em; font-weight: bold; color: #eee; margin-bottom: 3px; display:flex; align-items:center; gap:8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .t-trigger-sub { font-size: 0.8em; color: #888; display: flex; align-items: center; gap: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        
        /* 剧本分类标签 */
        .t-cat-tag { background: #333; padding: 1px 6px; border-radius: 3px; color: #aaa; font-size: 0.9em; flex-shrink: 0; border: 1px solid transparent; transition: all 0.2s; }
        
        .t-chevron { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); color: #555; font-size: 1.2em; }
        
        .t-action-group { display: flex; gap: 5px; flex-shrink: 0; }
        .t-filter-btn { width: 40px; display: flex; align-items: center; justify-content: center; font-size: 1.1em; cursor: pointer; background: #222; border: 1px solid #333; border-radius: 6px; color: #666; transition: 0.2s; }
        .t-filter-btn:hover { background: #2a2a2a; color: #aaa; }
        .t-filter-btn.active-filter { color: #bfa15f; border-color: rgba(191, 161, 95, 0.3); background: rgba(191, 161, 95, 0.1); }
        
        .t-dice-btn { width: 50px; display: flex; align-items: center; justify-content: center; font-size: 1.5em; cursor: pointer; background: #222; border: 1px solid #333; border-radius: 6px; transition: 0.2s; color: #888; }
        .t-dice-btn:hover { background: #2a2a2a; color: #fff; }
        .t-dice-btn.active-filter { color: #bfa15f; }

        .t-zen-btn { position: absolute; top: 20px; right: 25px; width: 40px; height: 40px; border-radius: 50%; background: rgba(30, 30, 30, 0.6); backdrop-filter: blur(4px); color: #777; border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 100; transition: all 0.2s; opacity: 0.6; }
        .t-zen-btn:hover { opacity: 1; background: #bfa15f; color: #000; transform: scale(1.1); box-shadow: 0 0 15px rgba(191, 161, 95, 0.4); }

        /* [关键修复] flex-shrink: 0 */
        .t-bottom-bar { padding: 10px 15px; background: #1e1e1e; border-top: 1px solid #333; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-shrink: 0; position: relative; z-index: 50; }

        @media screen and (max-width: 600px) {
            #t-main-view { width: 100%; height: 95vh; max-width: 100vw; border-radius: 10px 10px 0 0; }
            .t-header { padding: 10px; }
            .t-title-main { font-size: 1em; }
            .t-top-bar { height: auto; flex-direction: column; padding: 10px; gap: 8px; }
            .t-tabs { width: 100%; flex-direction: row; height: 36px; margin-bottom: 0; }
            .t-tab { margin-bottom: 0; margin-right: 2px; }
            .t-mobile-row { display: flex; gap: 8px; width: 100%; height: 50px; }
            .t-trigger-card { height: 100%; }
            .t-action-group { height: 100%; }
            .t-dice-btn { height: 100%; width: 50px; }
            .t-filter-btn { height: 100%; width: 40px; }
            .t-content-area { padding: 15px; }
            .t-bottom-bar { flex-direction: column-reverse; gap: 10px; padding: 10px; }
            .t-bottom-bar > div { width: 100%; display: flex; justify-content: space-between; }
            .t-tool-btn { flex: 1; justify-content: center; }
            #t-btn-run { width: 100%; height: 45px; }
        }
    </style>`;

    const html = `
    ${style}
    <div id="t-overlay" class="t-overlay">
        <div class="t-box" id="t-main-view">
            
            <div class="t-header" style="flex-shrink:0;">
                <div class="t-title-container" style="display:flex; align-items:baseline; overflow:hidden;">
                    <div class="t-title-main" style="white-space:nowrap;">回声小剧场</div>
                    <div class="t-title-sub">
                        ✨ 主演: ${ctx.charName}
                    </div>
                </div>
                <div style="display:flex; align-items:center; flex-shrink:0;">
                    <i class="fa-solid fa-book-bookmark t-icon-btn" id="t-btn-favs" title="回声收藏夹"></i>
                    <i class="fa-solid fa-gear t-icon-btn" id="t-btn-settings" title="设置"></i>
                    <span class="t-close" id="t-btn-close">&times;</span>
                </div>
            </div>

            <div class="t-top-bar">
                <div class="t-tabs">
                    <div class="t-tab ${savedMode ? 'active-echo' : ''}" id="t-tab-echo">🌊 回声模式</div>
                    <div class="t-tab ${!savedMode ? 'active-parallel' : ''}" id="t-tab-parallel">🪐 平行世界</div>
                </div>
                <div class="t-mobile-row">
                    <div class="t-trigger-card" id="t-trigger-btn" title="点击切换剧本">
                        <div class="t-trigger-main">
                            <span id="t-lbl-name" style="overflow:hidden; text-overflow:ellipsis;">加载中...</span>
                        </div>
                        <div class="t-trigger-sub">
                            <span class="t-cat-tag" id="t-lbl-cat">分类</span>
                            <span id="t-lbl-desc-mini">...</span>
                        </div>
                        <i class="fa-solid fa-chevron-down t-chevron"></i>
                    </div>
                    
                    <div class="t-action-group">
                        <div class="t-filter-btn" id="t-btn-filter" title="筛选随机范围">
                            <i class="fa-solid fa-filter"></i>
                        </div>
                        <div class="t-dice-btn" id="t-btn-dice" title="随机剧本">🎲</div>
                    </div>
                </div>
            </div>

            <div class="t-content-wrapper">
                <div class="t-zen-btn" id="t-btn-zen" title="沉浸阅读模式"><i class="fa-solid fa-expand"></i></div>
                <div class="t-content-area">
                    <div id="t-output-content">${initialContent}</div>
                </div>
            </div>

            <div class="t-bottom-bar">
                <div style="display:flex; gap:8px;">
                    <button class="t-tool-btn" id="t-btn-debug" title="审查Prompt"><i class="fa-solid fa-eye"></i> 审查</button>
                    <button class="t-tool-btn" id="t-btn-like" title="收藏"><i class="fa-regular fa-heart"></i> 收藏</button>
                    <button class="t-tool-btn" id="t-btn-copy"><i class="fa-regular fa-copy"></i> 复制源码</button>
                </div>
                <button id="t-btn-run" class="t-btn primary" style="font-size:1em;">
                    <span>🎬 开始演绎</span>
                </button>
            </div>
        </div>
    </div>`;

    $("body").append(html);

    // --- 内部逻辑控制 ---

    // 更新过滤按钮的 UI 状态
    const updateFilterUI = () => {
        const btn = $("#t-btn-filter");
        const dice = $("#t-btn-dice");

        if (currentCategoryFilter === "ALL") {
            btn.removeClass("active-filter");
            dice.removeClass("active-filter");
            btn.attr("title", "当前：全部分类");
        } else {
            btn.addClass("active-filter");
            dice.addClass("active-filter");
            btn.attr("title", `当前锁定：${currentCategoryFilter}`);
        }
    };

    // 切换模式
    const switchMode = (isEcho, resetFilter = true) => {
        savedMode = isEcho;

        if (resetFilter) {
            currentCategoryFilter = "ALL";
        }
        updateFilterUI();

        if (isEcho) {
            $("#t-tab-echo").addClass("active-echo");
            $("#t-tab-parallel").removeClass("active-parallel");
        } else {
            $("#t-tab-echo").removeClass("active-echo");
            $("#t-tab-parallel").addClass("active-parallel");
        }

        const d = getExtData();
        d.ui_mode_echo = isEcho;
        saveExtData();
    };

    // 随机抽取逻辑
    const handleRandom = () => {
        const targetModeStr = savedMode ? 'echo' : 'parallel';
        let pool = runtimeScripts.filter(s => s.mode === targetModeStr);

        if (currentCategoryFilter !== "ALL") {
            pool = pool.filter(s => (s.category || (s._type === 'preset' ? '官方预设' : '未分类')) === currentCategoryFilter);
        }

        if (pool.length === 0) {
            if (window.toastr) toastr.warning(`[${targetModeStr}] 模式下没找到 [${currentCategoryFilter}] 分类的剧本。`, "Titania");
            currentCategoryFilter = "ALL";
            updateFilterUI();
            return handleRandom();
        }

        const rnd = Math.floor(Math.random() * pool.length);
        const s = pool[rnd];
        applyScriptSelection(s.id);

        const dice = $("#t-btn-dice");
        dice.css("transform", `rotate(${Math.random() * 360}deg) scale(1.1)`);
        setTimeout(() => dice.css("transform", "rotate(0deg) scale(1)"), 300);
    };

    // --- 事件监听绑定 ---

    $("#t-tab-echo").on("click", () => switchMode(true, true));
    $("#t-tab-parallel").on("click", () => switchMode(false, true));
    $("#t-trigger-btn").on("click", () => showScriptSelector(savedMode, currentCategoryFilter));

    $("#t-btn-filter").on("click", function (e) {
        renderFilterMenu(savedMode, currentCategoryFilter, $(this), (newCat) => {
            currentCategoryFilter = newCat;
            updateFilterUI();
            const currentS = runtimeScripts.find(s => s.id === lastUsedScriptId);
            const sCat = currentS ? (currentS.category || (currentS._type === 'preset' ? '官方预设' : '未分类')) : '';
            if (newCat !== 'ALL' && sCat !== newCat) {
                handleRandom();
            }
        });
        e.stopPropagation();
    });

    $("#t-btn-dice").on("click", handleRandom);

    $("#t-btn-zen").on("click", function () {
        const view = $("#t-main-view");
        view.toggleClass("t-zen-mode");
        const isZen = view.hasClass("t-zen-mode");
        $(this).html(isZen ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>');
        if (isZen) $(this).css("background", "transparent"); else $(this).css("background", "rgba(30, 30, 30, 0.6)");
    });

    $(document).on("keydown.zenmode", function (e) {
        if (e.key === "Escape" && $("#t-main-view").hasClass("t-zen-mode")) $("#t-btn-zen").click();
    });

    $("#t-btn-close").on("click", () => { $("#t-overlay").remove(); $(document).off("keydown.zenmode"); });
    $("#t-overlay").on("click", (e) => { if (e.target === e.currentTarget) { $("#t-overlay").remove(); $(document).off("keydown.zenmode"); } });
    $("#t-btn-settings").on("click", openSettingsWindow);

    // 复制 HTML 源码
    $("#t-btn-copy").on("click", () => {
        const htmlCode = $("#t-output-content").html();
        navigator.clipboard.writeText(htmlCode);
        const btn = $("#t-btn-copy");
        const h = btn.html();
        btn.html('<i class="fa-solid fa-check"></i> 已复制');
        setTimeout(() => btn.html(h), 1000);
    });

    $("#t-btn-run").on("click", () => handleGenerate(null, false));
    $("#t-btn-like").on("click", saveFavorite);
    $("#t-btn-favs").on("click", openFavsWindow);
    $("#t-btn-debug").on("click", async () => await showDebugInfo());

    // --- [初始化阶段] ---
    switchMode(savedMode, false);
    if (lastUsedScriptId) {
        applyScriptSelection(lastUsedScriptId);
    } else {
        handleRandom();
    }
}

// 新增渲染分类筛选菜单
function renderFilterMenu(isEchoMode, currentFilter, $targetBtn, onSelect) {
    if ($("#t-filter-popover").length) { $("#t-filter-popover").remove(); return; }

    const targetMode = isEchoMode ? 'echo' : 'parallel';
    const list = runtimeScripts.filter(s => s.mode === targetMode);

    // 提取分类
    const cats = [...new Set(list.map(s => s.category || (s._type === 'preset' ? '官方预设' : '未分类')))].sort();

    const style = `
    <style>
        .t-filter-popover {
            position: absolute; z-index: 2500;
            background: #1e1e1e; border: 1px solid #444; border-radius: 6px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.5);
            padding: 5px; width: 150px;
            display: flex; flex-direction: column; gap: 2px;
            animation: fadeIn 0.15s;
        }
        .t-filter-item {
            padding: 8px 12px; cursor: pointer; color: #aaa; border-radius: 4px; font-size: 0.9em;
            display: flex; justify-content: space-between; align-items: center;
        }
        .t-filter-item:hover { background: #2a2a2a; color: #fff; }
        .t-filter-item.active { background: #bfa15f; color: #000; font-weight: bold; }
        .t-filter-check { opacity: 0; font-size: 0.8em; }
        .t-filter-item.active .t-filter-check { opacity: 1; }
    </style>`;

    const html = `
    ${style}
    <div id="t-filter-popover" class="t-filter-popover">
        <div class="t-filter-item ${currentFilter === 'ALL' ? 'active' : ''}" data-val="ALL">
            <span>🔄 全部</span>
            <i class="fa-solid fa-check t-filter-check"></i>
        </div>
        <div style="height:1px; background:#333; margin:2px 0;"></div>
        ${cats.map(c => `
            <div class="t-filter-item ${currentFilter === c ? 'active' : ''}" data-val="${c}">
                <span>${c}</span>
                <i class="fa-solid fa-check t-filter-check"></i>
            </div>
        `).join('')}
    </div>`;

    $("body").append(html);
    const pop = $("#t-filter-popover");

    // 定位逻辑 (相对于按钮)
    const rect = $targetBtn[0].getBoundingClientRect();
    // 简单判断一下是否靠近右边缘，避免溢出
    const left = (rect.left + 150 > window.innerWidth) ? (rect.right - 150) : rect.left;
    pop.css({ top: rect.bottom + 5, left: left });

    // 点击事件
    $(".t-filter-item").on("click", function () {
        const val = $(this).data("val");
        onSelect(val);
        pop.remove();
        $(document).off("click.closefilter");
    });

    // 点击外部关闭
    setTimeout(() => {
        $(document).on("click.closefilter", (e) => {
            if (!$(e.target).closest("#t-filter-popover, .t-filter-btn").length) {
                pop.remove();
                $(document).off("click.closefilter");
            }
        });
    }, 10);
}

// 应用选中的剧本到触发器卡片 (重构版：强化模式视觉标识)
function applyScriptSelection(id) {
    const s = runtimeScripts.find(x => x.id === id);
    if (!s) return;

    lastUsedScriptId = s.id;

    // 1. 更新标题
    $("#t-lbl-name").text(s.name);

    // 2. 模式视觉标识：根据剧本模式确定标签颜色
    const isEcho = (s.mode === 'echo');
    const modeName = isEcho ? "🌊 回声" : "🪐 平行";
    const modeColor = isEcho ? "#90cdf4" : "#bfa15f"; // 回声蓝 vs 平行金
    const bgColor = isEcho ? "rgba(144, 205, 244, 0.15)" : "rgba(191, 161, 95, 0.15)";

    const $catTag = $("#t-lbl-cat");
    $catTag.text(`${modeName} · ${s.category || (s._type === 'preset' ? "官方预设" : "未分类")}`);
    $catTag.css({
        "color": modeColor,
        "background": bgColor,
        "border": `1px solid ${modeColor}33` // 增加 20% 透明度的边框
    });

    // 3. 更新描述
    $("#t-lbl-desc-mini").text(s.desc || "无简介");

    // 兼容性：更新隐藏的文本框
    $("#t-txt-desc").val(s.desc);
}

// [还原] 显示剧本选择器 (纯净版)
function showScriptSelector(isEchoMode, initialFilter = "ALL") {
    if ($("#t-selector-panel").length) return;

    const targetMode = isEchoMode ? 'echo' : 'parallel';
    const list = runtimeScripts.filter(s => s.mode === targetMode);
    let categories = ["全部"];
    const scriptCats = [...new Set(list.map(s => s.category || (s._type === 'preset' ? '官方预设' : '未分类')))];
    categories = categories.concat(scriptCats.sort());

    const style = `
    <style>
        .t-selector-panel { position: absolute; top: 80px; left: 20px; right: 20px; bottom: 20px; background: rgba(18, 18, 18, 0.98); backdrop-filter: blur(10px); z-index: 2001; border-radius: 8px; border: 1px solid #444; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.8); animation: t-fade-in 0.2s ease-out; }
        .t-sel-header { padding: 10px 15px; border-bottom: 1px solid #333; display: flex; align-items: center; justify-content: space-between; background: #1e1e1e; border-radius: 8px 8px 0 0; }
        .t-sel-body { display: flex; flex-grow: 1; overflow: hidden; }
        .t-sel-sidebar { width: 160px; background: #181818; border-right: 1px solid #333; padding: 10px; overflow-y: auto; display: flex; flex-direction: column; gap: 5px; flex-shrink: 0; }
        .t-sel-grid { flex-grow: 1; padding: 15px; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; align-content: start; }
        .t-sel-cat-btn { padding: 8px 12px; cursor: pointer; color: #888; border-radius: 4px; font-size: 0.9em; transition: 0.2s; text-align: left; }
        .t-sel-cat-btn:hover { background: #252525; color: #ddd; }
        .t-sel-cat-btn.active { background: #333; color: #fff; font-weight: bold; border-left: 3px solid #bfa15f; }
        .t-script-card { background: #252525; border: 1px solid #333; border-radius: 6px; padding: 12px; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; gap: 5px; }
        .t-script-card:hover { transform: translateY(-2px); border-color: #555; background: #2a2a2a; }
        .t-card-title { font-weight: bold; color: #eee; font-size: 1em; }
        .t-card-desc { font-size: 0.8em; color: #777; line-height: 1.3; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }

        @media screen and (max-width: 600px) {
            .t-selector-panel { top: 10px; left: 10px; right: 10px; bottom: 10px; }
            .t-sel-body { flex-direction: column; }
            .t-sel-sidebar { width: 100%; height: 50px; flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid #333; padding: 5px; gap: 8px; white-space: nowrap; }
            .t-sel-cat-btn { text-align: center; border-left: none; padding: 6px 12px; height: 32px; display: flex; align-items: center; background: #222; border: 1px solid #333; }
            .t-sel-cat-btn.active { background: #bfa15f; color: #000; border: 1px solid #bfa15f; border-left: 1px solid #bfa15f; }
            .t-sel-grid { grid-template-columns: 1fr; padding: 10px; }
        }
    </style>`;

    const html = `
    ${style}
    <div id="t-selector-panel" class="t-selector-panel">
        <div class="t-sel-header">
            <div style="font-weight:bold; color:#ccc;">📚 选择剧本 <span style="font-size:0.8em; color:#666; font-weight:normal; margin-left:10px;">(共 ${list.length} 个)</span></div>
            <div style="cursor:pointer; padding:5px 10px;" id="t-sel-close"><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="t-sel-body">
            <div class="t-sel-sidebar" id="t-sel-sidebar"></div>
            <div class="t-sel-grid" id="t-sel-grid"></div>
        </div>
    </div>`;

    $("#t-main-view").append(html);

    const renderGrid = (filterCat) => {
        const $grid = $("#t-sel-grid");
        $grid.empty();
        const targetCat = filterCat === "ALL" ? "全部" : filterCat;
        const filtered = targetCat === "全部"
            ? list
            : list.filter(s => (s.category || (s._type === 'preset' ? '官方预设' : '未分类')) === targetCat);

        if (filtered.length === 0) {
            $grid.append('<div style="grid-column:1/-1; text-align:center; color:#555; margin-top:50px;">此分类下暂无剧本</div>');
            return;
        }

        filtered.forEach(s => {
            const card = $(`
                <div class="t-script-card">
                    <div class="t-card-title">${s.name}</div>
                    <div class="t-card-desc">${s.desc || "..."}</div>
                </div>
            `);
            card.on("click", () => {
                applyScriptSelection(s.id);
                $("#t-selector-panel").remove();
            });
            $grid.append(card);
        });
    };

    const $sidebar = $("#t-sel-sidebar");
    const startCat = initialFilter === "ALL" ? "全部" : initialFilter;
    categories.forEach(cat => {
        const btn = $(`<div class="t-sel-cat-btn">${cat}</div>`);
        if (cat === startCat) btn.addClass("active");
        btn.on("click", function () {
            $(".t-sel-cat-btn").removeClass("active");
            $(this).addClass("active");
            renderGrid(cat);
        });
        $sidebar.append(btn);
    });

    renderGrid(startCat);
    $("#t-sel-close").on("click", () => $("#t-selector-panel").remove());
}

// 【Part 4: 生成核心逻辑】
// 获取聊天历史，过滤掉隐藏的
function getChatHistory(limit) {
    if (!SillyTavern || !SillyTavern.getContext) return "";
    const ctx = SillyTavern.getContext();
    const history = ctx.chat || [];
    const safeLimit = parseInt(limit) || 10;

    // 【修复逻辑】先过滤掉被隐藏或禁用的消息，再进行截取
    const visibleHistory = history.filter(msg => {
        // 过滤掉点了“眼睛”图标隐藏的消息
        if (msg.is_hidden) return false;
        // 过滤掉被禁用的消息
        if (msg.disabled) return false;
        // (可选) 如果你也不想让系统指令进入回声分析，可以把下面这行注释取消
        // if (msg.is_system) return false;
        return true;
    });

    // 从过滤后的列表中截取最后 N 条
    const recent = visibleHistory.slice(-safeLimit);

    return recent.map(msg => {
        let name = msg.name;
        if (msg.is_user) name = ctx.name1 || "User";
        if (name === "{{user}}") name = ctx.name1 || "User";
        if (name === "{{char}}") name = ctx.characters[ctx.characterId]?.name || "Char";

        let rawContent = msg.message || msg.mes || "";
        // 简单的 HTML 标签清洗
        let cleanContent = rawContent.replace(/<[^>]*>?/gm, '');
        return `${name}: ${cleanContent}`;
    }).join("\n");
}

// 处理生成请求 (集成 增强版诊断系统)
async function handleGenerate(forceScriptId = null, silent = false) {
    const data = getExtData();
    const cfg = data.config || {};
    const dirDefaults = data.director || { length: "", perspective: "auto", style_ref: "" };

    // --- 0. 诊断数据初始化 (全生命周期跟踪) ---
    const startTime = Date.now();
    let diagnostics = {
        phase: 'init',         // 当前阶段: init, fetch, stream, parsing, complete
        profile: '',           // 使用的配置名
        model: '',             // 请求的模型
        endpoint: '',          // 请求地址
        input_stats: { sys_len: 0, user_len: 0 }, // 输入长度统计
        network: {             // 网络层诊断
            status: 0,         // HTTP状态码
            statusText: '',    
            contentType: '',   // 返回头类型 (关键: 区分 JSON 还是 Cloudflare HTML)
            latency: 0         // 耗时
        },
        stream_stats: {        // 流式传输统计
            chunks: 0,         // 收到多少个包
            ttft: 0            // 首字时间 (Time To First Token)
        },
        raw_response_snippet: '' // 原始返回内容快照 (用于分析非JSON报错)
    };

    // --- 凭证解析器 ---
    let activeProfileId = cfg.active_profile_id || "default";
    let profiles = cfg.profiles || [
        { id: "st_sync", name: "🔗 跟随 SillyTavern", type: "internal" },
        { id: "default", name: "默认自定义", type: "custom", url: cfg.url || "", key: cfg.key || "", model: cfg.model || "gpt-3.5-turbo" }
    ];
    let currentProfile = profiles.find(p => p.id === activeProfileId) || profiles[1];

    // 记录诊断基本信息
    diagnostics.profile = currentProfile.name;
    diagnostics.phase = 'prepare_config';

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

    // 记录诊断模型信息
    diagnostics.model = finalModel;
    diagnostics.endpoint = finalUrl;

    if (!finalKey && currentProfile.type !== 'internal') {
        alert("配置缺失：请先去设置填 API Key！");
        TitaniaLogger.warn("尝试生成但在自定义模式下未检测到 Key", diagnostics);
        return;
    }

    const scriptId = forceScriptId || lastUsedScriptId || $("#t-sel-script").val();
    const script = runtimeScripts.find(s => s.id === scriptId);

    if (!script) {
        if (!silent) alert("请选择剧本");
        return;
    }

    // 更新最后使用的 ID
    lastUsedScriptId = script.id;

    if (!silent && $("#t-main-view").length > 0) {
        applyScriptSelection(script.id);
    }

    const ctx = await getContextData();
    const $floatBtn = $("#titania-float-btn");
    const useStream = cfg.stream !== false;

    if (!silent) $("#t-overlay").remove();

    isGenerating = true;
    $floatBtn.addClass("t-loading");
    $("#t-btn-like").html('<i class="fa-regular fa-heart"></i> 收藏').prop("disabled", false);

    if (!silent && window.toastr) {
        toastr.info(`🚀 [${currentProfile.name}] 正在连接模型演绎...`, "Titania Echo");
    }

    try {
        // --- 1. 准备 Prompt ---
        diagnostics.phase = 'prepare_prompt';
        
        const dLen = dirDefaults.length;
        const dPers = dirDefaults.perspective;
        const dStyle = dirDefaults.style_ref;

        let sys = "You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks. Please answer all other content in Chinese.";
        if (dPers === '1st') sys += " Write strictly in First Person perspective (I/Me).";
        else if (dPers === '3rd') sys += ` Write strictly in Third Person perspective (${ctx.charName}/He/She).`;

        let user = `[Roleplay Setup]\nCharacter: ${ctx.charName}\nUser: ${ctx.userName}\n\n`;

        let directorInstruction = "";
        if (dLen) directorInstruction += `1. Length Constraint: Keep the response approximately ${dLen}.\n`;
        if (dStyle) {
            const safeStyle = dStyle.substring(0, 1000);
            directorInstruction += `2. Style Mimicry: Analyze and strictly mimic the writing style, tone, and descriptive granularity of the example below. DO NOT copy the content, only the vibe.\n<style_reference>\n${safeStyle}\n</style_reference>\n`;
        }
        if (directorInstruction) user += `[Director's Instructions]\n${directorInstruction}\n`;

        if (ctx.persona) user += `[Character Persona]\n${ctx.persona}\n\n`;
        if (ctx.userDesc) user += `[User Persona]\n${ctx.userDesc}\n\n`;
        if (ctx.worldInfo) user += `[World Info / Lore]\n${ctx.worldInfo}\n\n`;

        if (script.mode === 'echo') {
            const limit = cfg.history_limit || 10;
            const history = getChatHistory(limit);
            if (history && history.trim().length > 0) user += `[Recent Conversation History (Last ${limit} messages)]\n${history}\n\n`;
            else user += `[Recent Conversation History]\n(History is empty)\n\n`;
        } else {
            user += `[Mode Info]\n(Alternate Universe / Ignore previous chat history context)\n\n`;
        }

        user += `[Scenario Request]\n${script.prompt.replace(/{{char}}/g, ctx.charName).replace(/{{user}}/g, ctx.userName)}`;

        // 更新输入统计 (用于排查 Context Length Exceeded)
        diagnostics.input_stats.sys_len = sys.length;
        diagnostics.input_stats.user_len = user.length;

        TitaniaLogger.info(`开始生成: ${script.name}`, { profile: currentProfile.name, model: finalModel });

        // --- 2. 发起请求 ---
        diagnostics.phase = 'fetch_start';
        let endpoint = finalUrl.trim().replace(/\/+$/, "");
        if (!endpoint) throw new Error("ERR_CONFIG: API URL 未设置");
        if (!endpoint.endsWith("/chat/completions")) {
            if (endpoint.endsWith("/v1")) endpoint += "/chat/completions";
            else endpoint += "/v1/chat/completions";
        }
        diagnostics.endpoint = endpoint; // 更新为最终计算出的 endpoint

        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${finalKey}` },
            body: JSON.stringify({
                model: finalModel,
                messages: [{ role: "system", content: sys }, { role: "user", content: user }],
                stream: useStream
            })
        });

        // 记录网络握手信息
        diagnostics.network.status = res.status;
        diagnostics.network.statusText = res.statusText;
        diagnostics.network.contentType = res.headers.get("Content-Type") || "unknown";
        diagnostics.network.latency = Date.now() - startTime;

        if (!res.ok) {
            // [关键] 强行读取错误内容快照
            try {
                const errText = await res.text();
                diagnostics.raw_response_snippet = errText.substring(0, 500); // 只取前500字避免日志爆炸
            } catch (readErr) {
                diagnostics.raw_response_snippet = "[无法读取响应体]";
            }
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
                    
                    // 记录首字时间
                    if (chunkCount === 0) {
                        diagnostics.stream_stats.ttft = Date.now() - startTime;
                    }
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
                        } catch (e) { 
                            // 流式解析容错，不抛出
                        }
                    }
                }
            } catch (streamErr) {
                // 如果是流中断，这里会被捕获
                throw new Error(`Stream Interrupted: ${streamErr.message}`);
            }

            // 检查流是否为空
            if (chunkCount === 0) {
                throw new Error("Stream Empty: 连接成功但未收到任何数据包 (Chunks=0)");
            }

        } else {
            // 非流式
            const jsonText = await res.text();
            // 保存原始响应以便调试
            diagnostics.raw_response_snippet = jsonText.substring(0, 200) + "..."; 
            try {
                const json = JSON.parse(jsonText);
                rawContent = json.choices?.[0]?.message?.content || "";
            } catch (jsonErr) {
                throw new Error("Invalid JSON: API返回了非JSON格式数据 (可能是HTML报错页)");
            }
        }

        if (!rawContent || rawContent.trim().length === 0) {
            throw new Error("ERR_EMPTY_CONTENT: 模型返回内容为空 (可能是被安全策略过滤)");
        }

        // --- 4. 容错清洗 ---
        diagnostics.phase = 'validation';
        let cleanContent = rawContent.replace(/```html/gi, "").replace(/```/g, "").trim();
        const hasDiv = /<div[\s\S]*?>/i.test(cleanContent);
        const hasCloseDiv = /<\/div>/i.test(cleanContent);
        let finalOutput = "";

        if (hasDiv && hasCloseDiv) {
            finalOutput = cleanContent;
        } else {
            // 软失败记录
            TitaniaLogger.warn("内容格式不完整 (Missing <div>)", { preview: cleanContent.substring(0, 50) });
            finalOutput = `<div style="padding: 20px; background: #1a1a1a; color: #ccc; border-left: 3px solid #bfa15f; line-height: 1.6;">${cleanContent.replace(/\n/g, "<br>")}</div>`;
        }

        lastGeneratedContent = finalOutput;
        diagnostics.phase = 'complete';
        
        if (!silent && window.toastr) toastr.success(`✨ 《${script.name}》演绎完成！`, "Titania Echo");
        $floatBtn.addClass("t-notify");

    } catch (e) {
        // 【核心修改】错误捕获与日志记录
        console.error("Titania Generate Error:", e);
        
        // 最终更新耗时
        diagnostics.network.latency = Date.now() - startTime;
        diagnostics.phase = diagnostics.phase + "_failed";

        // 记录极其详细的错误日志
        TitaniaLogger.error("生成过程发生异常", e, diagnostics);

        // 构造友好的错误提示 HTML
        let tips = "未知错误";
        if(e.message.includes("401")) tips = "API Key 无效或已过期";
        else if(e.message.includes("404")) tips = "接口地址错误 (404 Not Found)";
        else if(e.message.includes("429")) tips = "API 调用超频或额度不足";
        else if(e.message.includes("500") || e.message.includes("502")) tips = "API 服务端或代理服务器崩溃";
        else if(e.message.includes("Stream Empty")) tips = "连接建立但无数据返回 (可能不支持流式)";
        else if(e.message.includes("Invalid JSON")) tips = "API 返回了非JSON数据 (通常是代理的报错网页)";

        const errHtml = `
        <div style="color:#ff6b6b; text-align:center; padding:20px; border:1px dashed #ff6b6b; background: rgba(255,107,107,0.1); border-radius:8px;">
            <div style="font-size:3em; margin-bottom:10px;"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <div style="font-weight:bold; margin-bottom:5px;">演绎出错了</div>
            <div style="font-size:0.9em; margin-bottom:15px; color:#faa;">${e.message || "未知错误"}</div>
            <div style="font-size:0.8em; color:#ccc; background:#222; padding:10px; border-radius:4px; text-align:left;">
                🔍 诊断提示：<br>
                <b>${tips}</b><br><br>
                详细日志已生成，请去 [设置-诊断] 中导出报告给开发者。
            </div>
        </div>`;

        lastGeneratedContent = errHtml;
        $floatBtn.addClass("t-notify");

        // 弹窗引导
        if (!silent && window.toastr) {
            toastr.error("生成失败，请去[设置-诊断]中查看详细日志", "Titania Error");
        }
    } finally {
        isGenerating = false;
        $floatBtn.removeClass("t-loading");
    }
}

// 显示 Prompt 审查窗口 (已更新支持导演模式)
async function showDebugInfo() {
    const script = runtimeScripts.find(s => s.id === lastUsedScriptId);
    if (!script) {
        if (window.toastr) toastr.warning("请先选择一个剧本"); else alert("请先选择一个剧本");
        return;
    }

    const data = getExtData();
    const cfg = data.config || {};
    const d = await getContextData();

    // 导演设置
    const dirDefaults = data.director || { length: "", perspective: "auto", style_ref: "" };
    const dLen = dirDefaults.length;
    const dPers = dirDefaults.perspective;
    const dStyle = dirDefaults.style_ref;

    // --- [新增] 解析当前 Profile 信息用于展示 ---
    let activeProfileId = cfg.active_profile_id || "default";
    let profiles = cfg.profiles || [
        { id: "st_sync", name: "🔗 跟随 SillyTavern", type: "internal" },
        { id: "default", name: "默认自定义", type: "custom", model: cfg.model }
    ];
    let currentProfile = profiles.find(p => p.id === activeProfileId) || profiles[1];
    let displayModel = currentProfile.model;
    if (currentProfile.type === 'internal' && typeof settings !== 'undefined') {
        displayModel = (settings.api_model_openai || "gpt-3.5-turbo") + " (ST Sync)";
    }

    // --- 1. 数据深度分析 ---
    let historyStatus = { count: 0, text: "未启用 (平行模式)" };
    let finalHistoryText = "";
    if (script.mode === 'echo') {
        const limit = cfg.history_limit || 10;
        const hist = getChatHistory(limit);
        const count = hist ? hist.split('\n').length : 0;
        historyStatus = { count: count, text: `${count} 条记录` };
        finalHistoryText = hist || "(无历史记录)";
    }

    const wiText = d.worldInfo || "";
    const charBookMatch = wiText.match(/\[Character Lore\/World Info\]/);
    const globalWiMatch = wiText.match(/\[Global World Info\]/);
    const hasCharBook = !!charBookMatch;
    const hasGlobalWI = !!globalWiMatch;
    const wiLength = wiText.length;

    // --- 2. Prompt ---
    let sysPrompt = `You are a high-level creative engine and an expert CSS artist.
Your goal is to generate an immersive roleplay snippet wrapped in a visually stunning HTML container using sophisticated Inline CSS.

[Visual Directives]
1. **Thematic Styling**: The CSS design MUST strictly reflect the scenario's mood (e.g., Cyberpunk = Neon/Glitch/Dark; Ancient = Parchment/Ink/Texture; Modern = Clean/Glassmorphism; Horror = Grimy/Blood/Darkness).
2. **Advanced CSS**: DO NOT use simple solid colors. You MUST use CSS gradients (linear/radial), complex box-shadows, text-shadows, borders, and variable opacity to create depth.
3. **Layout**: Treat the output as a UI Card, a Page from a book, or a Movie Subtitle screen. Make it visually unique.

[Constraints]
- Output ONLY the HTML <div> string.
- NO markdown code blocks (\`\`\`).
- Narrative content MUST be in Chinese.`;
    if (dPers === '1st') sysPrompt += " Write strictly in First Person perspective (I/Me).";
    else if (dPers === '3rd') sysPrompt += ` Write strictly in Third Person perspective (${d.charName}/He/She).`;

    let userPrompt = `[Roleplay Setup]\nCharacter: ${d.charName}\nUser: ${d.userName}\n\n`;
    let directorInstruction = "";
    if (dLen) directorInstruction += `1. Length Constraint: Keep the response approximately ${dLen}.\n`;
    if (dStyle) {
        const safeStyle = dStyle.substring(0, 1000);
        directorInstruction += `2. Style Mimicry: Analyze and strictly mimic the writing style, tone, and descriptive granularity of the example below. DO NOT copy the content, only the vibe.\n<style_reference>\n${safeStyle}\n</style_reference>\n`;
    }
    if (directorInstruction) userPrompt += `[Director's Instructions]\n${directorInstruction}\n`;

    if (d.persona) userPrompt += `[Character Persona]\n(Length: ${d.persona.length} chars)\n${d.persona}\n\n`;
    if (d.worldInfo) userPrompt += `[World Info / Lore]\n(Length: ${d.worldInfo.length} chars)\n${d.worldInfo}\n\n`;
    if (script.mode === 'echo') userPrompt += `[Recent Conversation History]\n${finalHistoryText}\n\n`;
    else userPrompt += `[Mode Info]\n(Alternate Universe / Ignore previous chat history context)\n\n`;

    const finalScriptPrompt = script.prompt.replace(/{{char}}/g, d.charName).replace(/{{user}}/g, d.userName);
    userPrompt += `[Scenario Request]\n${finalScriptPrompt}`;

    // --- 3. UI ---
    $("#t-main-view").hide();

    const style = `
    <style>
        .t-dbg-container { height: 90vh; display: flex; flex-direction: column; background: #121212; color: #ccc; font-family: sans-serif; }
        .t-dbg-tabs { display: flex; background: #181818; border-bottom: 1px solid #333; padding: 0 10px; }
        .t-dbg-tab { padding: 12px 20px; cursor: pointer; color: #666; font-size: 0.9em; border-bottom: 2px solid transparent; transition: 0.2s; }
        .t-dbg-tab:hover { color: #aaa; }
        .t-dbg-tab.active { color: #bfa15f; border-bottom-color: #bfa15f; font-weight: bold; }
        .t-dbg-content { flex-grow: 1; padding: 20px; overflow-y: auto; display: none; }
        .t-dbg-content.active { display: block; }
        .t-stat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; }
        .t-stat-card { background: #1a1a1a; border: 1px solid #333; border-radius: 6px; padding: 15px; }
        .t-stat-title { font-size: 0.8em; color: #888; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
        .t-stat-val { font-size: 1.1em; color: #eee; font-weight: 500; display: flex; align-items: center; gap: 8px; }
        .t-stat-sub { font-size: 0.85em; color: #555; margin-top: 5px; }
        .t-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .t-dot.ok { background: #55efc4; box-shadow: 0 0 5px rgba(85, 239, 196, 0.4); }
        .t-dot.warn { background: #fab1a0; }
        .t-dot.gray { background: #444; }
        .t-dot.blue { background: #74b9ff; box-shadow: 0 0 5px rgba(116, 185, 255, 0.4); }
        .t-code-box { background: #0f0f0f; border: 1px solid #222; border-radius: 4px; padding: 15px; font-family: 'Consolas', monospace; font-size: 0.85em; color: #a8a8a8; white-space: pre-wrap; word-break: break-all; line-height: 1.5; max-height: 400px; overflow-y: auto; margin-bottom: 20px; }
        .t-code-label { font-size: 0.8em; color: #666; margin-bottom: 5px; font-weight: bold; }
    </style>`;

    const persText = dPers === 'auto' ? '自动 (Auto)' : (dPers === '1st' ? '第一人称 (I/Me)' : '第三人称 (He/She)');
    const styleText = dStyle ? `已启用 (${dStyle.length} 字符)` : '未启用';
    const lenText = dLen || '默认';

    const html = `
    ${style}
    <div class="t-box t-dbg-container" id="t-debug-view">
        <div class="t-header" style="flex-shrink:0;">
            <span class="t-title-main">📊 审查报告</span>
            <span class="t-close" id="t-debug-close">&times;</span>
        </div>
        
        <div class="t-dbg-tabs">
            <div class="t-dbg-tab active" data-tab="overview">概览 (Overview)</div>
            <div class="t-dbg-tab" data-tab="payload">原文 (Payload)</div>
        </div>

        <div id="tab-overview" class="t-dbg-content active">
            <div class="t-stat-grid">
                
                <div class="t-stat-card">
                    <div class="t-stat-title">基本信息</div>
                    <div class="t-stat-val"><i class="fa-solid fa-film"></i> ${script.name}</div>
                    <div class="t-stat-sub">
                        模式: ${script.mode === 'echo' ? 'Echo' : 'Parallel'} <br>
                        方案: ${currentProfile.name} <br>
                        模型: ${displayModel}
                    </div>
                </div>

                <div class="t-stat-card">
                    <div class="t-stat-title">导演指令 (Director Mode)</div>
                    <div class="t-stat-val">
                        <span class="t-dot ${dLen || dStyle || dPers !== 'auto' ? 'blue' : 'gray'}"></span>
                        ${dLen || dStyle || dPers !== 'auto' ? '介入中' : '默认'}
                    </div>
                    <div class="t-stat-sub" style="display:flex; flex-direction:column; gap:2px; margin-top:8px;">
                        <span>• 视角: ${persText}</span>
                        <span>• 篇幅: ${lenText}</span>
                        <span>• 仿写: ${styleText}</span>
                    </div>
                </div>

                <div class="t-stat-card">
                    <div class="t-stat-title">角色绑定</div>
                    <div class="t-stat-val">
                        <span class="t-dot ${d.charName !== 'Char' ? 'ok' : 'warn'}"></span>
                        ${d.charName} <span style="font-size:0.8em; color:#666;">&</span> ${d.userName}
                    </div>
                    <div class="t-stat-sub">Persona 长度: ${d.persona ? d.persona.length : 0} 字符</div>
                </div>

                <div class="t-stat-card">
                    <div class="t-stat-title">聊天历史</div>
                    <div class="t-stat-val">
                        <span class="t-dot ${script.mode === 'echo' ? (historyStatus.count > 0 ? 'ok' : 'warn') : 'gray'}"></span>
                        ${historyStatus.text}
                    </div>
                    <div class="t-stat-sub">${script.mode === 'echo' ? '已读取上下文' : '平行模式下不读取历史'}</div>
                </div>

                <div class="t-stat-card">
                    <div class="t-stat-title">世界书 (World Info)</div>
                    <div class="t-stat-val">
                        <span class="t-dot ${wiLength > 0 ? 'ok' : 'gray'}"></span>
                        ${wiLength > 0 ? '已注入上下文' : '未检测到内容'}
                    </div>
                    <div class="t-stat-sub" style="display:flex; flex-direction:column; gap:2px; margin-top:8px;">
                        <span style="color:${hasCharBook ? '#ddd' : '#444'}">• 角色常驻条目: ${hasCharBook ? '✅' : '❌'}</span>
                        <span style="color:${hasGlobalWI ? '#ddd' : '#444'}">• 全局关键词触发: ${hasGlobalWI ? '✅' : '❌'}</span>
                    </div>
                </div>

            </div>
        </div>

        <div id="tab-payload" class="t-dbg-content">
            <div class="t-code-label">SYSTEM PROMPT</div>
            <div class="t-code-box">${sysPrompt}</div>
            <div class="t-code-label">USER CONTEXT</div>
            <div class="t-code-box" style="color:#d4d4d4;">${userPrompt}</div>
        </div>

        <div style="padding:15px; border-top:1px solid #333; background:#1e1e1e;">
            <button id="t-debug-back" class="t-btn primary" style="width:100%;">关闭并返回</button>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    const close = () => {
        $("#t-debug-view").remove();
        $("#t-main-view").css("display", "flex");
    };

    $("#t-debug-close, #t-debug-back").on("click", close);

    $(".t-dbg-tab").on("click", function () {
        $(".t-dbg-tab").removeClass("active");
        $(this).addClass("active");
        $(".t-dbg-content").removeClass("active");
        $(`#tab-${$(this).data("tab")}`).addClass("active");
    });
}

// 【Part 5: 设置、剧本管理器与编辑器】
// 设置窗口（更新：包含诊断与日志导出功能）
function openSettingsWindow() {
    const data = getExtData();
    const cfg = data.config || {};
    const app = data.appearance || { type: "emoji", content: "🎭", color_theme: "#bfa15f", color_notify: "#55efc4", size: 56 };
    const dirCfg = data.director || { length: "", perspective: "auto", style_ref: "" };

    // 数据迁移兼容
    if (!cfg.profiles || !Array.isArray(cfg.profiles)) {
        cfg.profiles = [
            { id: "st_sync", name: "🔗 跟随 SillyTavern (主连接)", type: "internal", readonly: true },
            { id: "default", name: "默认自定义", type: "custom", url: cfg.url || "", key: cfg.key || "", model: cfg.model || "gpt-3.5-turbo" }
        ];
        cfg.active_profile_id = "default";
    }

    // 深度拷贝临时数据
    let tempProfiles = JSON.parse(JSON.stringify(cfg.profiles));
    let tempActiveId = cfg.active_profile_id;
    let tempApp = JSON.parse(JSON.stringify(app));
    if (!tempApp.size) tempApp.size = 56;

    $("#t-main-view").hide();
    const fileToBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const style = `
    <style>
        #t-settings-view { width: 800px; height: 80vh; max-width: 95vw; display: flex; flex-direction: column; background: #121212; overflow: hidden; }
        .t-set-body { flex-grow: 1; display: flex; overflow: hidden; }
        .t-set-nav { width: 160px; background: #181818; border-right: 1px solid #333; padding: 10px 0; display: flex; flex-direction: column; flex-shrink: 0; }
        .t-set-tab-btn { padding: 12px 20px; color: #888; cursor: pointer; transition: 0.2s; font-size: 0.95em; display: flex; align-items: center; gap: 10px; }
        .t-set-tab-btn:hover { background: #222; color: #ccc; }
        .t-set-tab-btn.active { background: #2a2a2a; color: #bfa15f; border-left: 3px solid #bfa15f; font-weight: bold; }
        .t-set-content { flex-grow: 1; padding: 20px; overflow-y: auto; background: #121212; }
        .t-set-page { display: none; animation: fadeIn 0.3s; }
        .t-set-page.active { display: block; }
        .t-form-group { margin-bottom: 20px; }
        .t-form-label { display: block; color: #aaa; margin-bottom: 8px; font-size: 0.9em; }
        .t-form-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 15px; }
        .t-preview-container { background: #1a1a1a; border-radius: 8px; padding: 20px; display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; border: 1px solid #333; }
        .t-preview-ball { border-radius: 50%; background: #2b2b2b; display: flex; align-items: center; justify-content: center; border: 2px solid transparent; transition: all 0.2s; position: relative; overflow: hidden; }
        .t-preview-ball img { width: 100%; height: 100%; object-fit: cover; }
        .t-upload-card { width: 100px; height: 100px; border: 2px dashed #444; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; color: #666; transition: 0.2s; background-size: cover; background-position: center; position: relative; }
        .t-upload-card:hover { border-color: #bfa15f; color: #bfa15f; background-color: rgba(191, 161, 95, 0.05); }
        .t-prof-header { display: flex; gap: 10px; margin-bottom: 15px; align-items: center; }
        .t-prof-select { flex-grow: 1; background: #222; color: #eee; border: 1px solid #444; padding: 8px; border-radius: 4px; }
        @keyframes p-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .p-loading { box-shadow: 0 0 15px var(--p-theme) !important; color: var(--p-theme) !important; background: transparent !important; }
        .p-loading::before { content: ""; position: absolute; width: 200%; height: 200%; top: -50%; left: -50%; background: conic-gradient(transparent, transparent, transparent, var(--p-theme)); animation: p-spin 1.2s linear infinite; z-index: -2; }
        .p-loading::after { content: ""; position: absolute; inset: 3px; background: #2b2b2b; border-radius: 50%; z-index: -1; }
        @keyframes p-glow { 0%,100% { box-shadow: 0 0 5px var(--p-notify); } 50% { box-shadow: 0 0 20px var(--p-notify); } }
        .p-notify { border-color: var(--p-notify) !important; animation: p-glow 1.5s infinite ease-in-out; }
        
        /* 诊断日志专用样式 */
        .t-log-box { 
            background: #0f0f0f; color: #ccc; 
            padding: 10px; border: 1px solid #333; border-radius: 4px;
            height: 250px; overflow-y: auto; 
            font-family: 'Consolas', monospace; font-size: 0.8em; 
            white-space: pre-wrap; word-break: break-all;
            margin-bottom: 10px;
        }
        .t-log-entry-error { color: #ff6b6b; border-bottom: 1px solid #333; padding: 2px 0; }
        .t-log-entry-info { color: #90cdf4; border-bottom: 1px solid #333; padding: 2px 0; }
        .t-log-entry-warn { color: #f1c40f; border-bottom: 1px solid #333; padding: 2px 0; }
        
        @media screen and (max-width: 600px) {
            .t-set-body { flex-direction: column; }
            .t-set-nav { width: 100%; height: 50px; flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid #333; }
            .t-set-tab-btn { padding: 0 15px; border-left: none; border-bottom: 3px solid transparent; white-space: nowrap; }
            .t-set-tab-btn.active { border-left: none; border-bottom-color: #bfa15f; background: transparent; }
        }
    </style>`;

    const disabledCount = (data.disabled_presets || []).length;
    const userScriptCount = (data.user_scripts || []).length;

    const html = `
    ${style}
    <div class="t-box" id="t-settings-view">
        <div class="t-header"><span class="t-title-main">⚙️ 设置</span><span class="t-close" id="t-set-close">&times;</span></div>
        <div class="t-set-body">
            <div class="t-set-nav">
                <div class="t-set-tab-btn active" data-tab="appearance">🎨 外观设置</div>
                <div class="t-set-tab-btn" data-tab="connection">🔌 API 连接</div>
                <div class="t-set-tab-btn" data-tab="director">🎬 导演模式</div>
                <div class="t-set-tab-btn" data-tab="automation">🤖 自动化</div>
                <div class="t-set-tab-btn" data-tab="data">🗂️ 数据管理</div>
                <div class="t-set-tab-btn" data-tab="diagnostics" style="color:#ff9f43;"><i class="fa-solid fa-stethoscope"></i> 诊断</div>
            </div>

            <div class="t-set-content">
                <!-- Tab 1: 外观 -->
                <div id="page-appearance" class="t-set-page active">
                    <div class="t-preview-container">
                        <div style="font-size:0.8em; color:#666; margin-bottom:15px;">实时预览</div>
                        <div id="p-ball" class="t-preview-ball"></div>
                        <div style="display:flex; gap:10px; margin-top:20px;">
                            <button class="t-tool-btn" id="btn-test-spin">⚡ 测试流光</button>
                            <button class="t-tool-btn" id="btn-test-notify">🔔 测试呼吸</button>
                        </div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label" style="display:flex; justify-content:space-between;"><span>悬浮球尺寸</span><span id="p-size-val" style="color:#bfa15f;">${tempApp.size}px</span></div>
                        <input type="range" id="p-size-input" min="40" max="100" step="2" value="${tempApp.size}" style="width:100%;">
                    </div>
                    <div class="t-form-group">
                        <label class="t-form-label">图标类型</label>
                        <div style="display:flex; gap:20px; margin-bottom:15px;">
                            <label><input type="radio" name="p-type" value="emoji" ${tempApp.type === 'emoji' ? 'checked' : ''}> Emoji 表情</label>
                            <label><input type="radio" name="p-type" value="image" ${tempApp.type === 'image' ? 'checked' : ''}> 自定义图片</label>
                        </div>
                        <div id="box-emoji" style="display:${tempApp.type === 'emoji' ? 'block' : 'none'}">
                            <input id="p-emoji-input" class="t-input" value="${tempApp.type === 'emoji' ? tempApp.content : '🎭'}" style="width:100px; text-align:center; font-size:1.5em;">
                        </div>
                        <div id="box-image" style="display:${tempApp.type === 'image' ? 'block' : 'none'}">
                            <input type="file" id="p-file-input" accept="image/*" style="display:none;">
                            <div class="t-upload-card" id="btn-upload-card" title="点击更换图片"><i class="fa-solid fa-camera fa-2x"></i><span>点击上传</span></div>
                        </div>
                    </div>
                    <div class="t-form-group" style="margin-top:20px;">
                        <div class="t-form-row"><span>流光主题色</span><input type="color" id="p-color-theme" value="${tempApp.color_theme}" style="background:none; border:none; width:40px; height:30px;"></div>
                        <div class="t-form-row" style="border:none;"><span>通知呼吸色</span><input type="color" id="p-color-notify" value="${tempApp.color_notify}" style="background:none; border:none; width:40px; height:30px;"></div>
                    </div>
                </div>

                <!-- Tab 2: 连接 -->
                <div id="page-connection" class="t-set-page">
                    <div class="t-form-group">
                        <label class="t-form-label">切换配置方案 (Profile)</label>
                        <div class="t-prof-header">
                            <select id="cfg-prof-select" class="t-prof-select"></select>
                            <button id="cfg-prof-add" class="t-tool-btn" title="新建方案"><i class="fa-solid fa-plus"></i></button>
                            <button id="cfg-prof-del" class="t-tool-btn" title="删除当前方案" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <div id="cfg-prof-meta"><label class="t-form-label">方案名称</label><input id="cfg-prof-name" class="t-input" value=""></div>
                    </div>
                    <div style="height:1px; background:#333; margin:20px 0;"></div>
                    <div id="cfg-conn-fields">
                        <div class="t-form-group">
                            <label class="t-form-label">API Endpoint URL</label>
                            <input id="cfg-url" class="t-input" placeholder="例如: http://127.0.0.1:5000/v1">
                            <div id="cfg-url-hint" style="font-size:0.8em; color:#666; margin-top:5px; display:none;"><i class="fa-solid fa-link"></i> 正在读取 ST 全局设置：<span id="st-url-display"></span></div>
                        </div>
                        <div class="t-form-group"><label class="t-form-label">API Key</label><input id="cfg-key" type="password" class="t-input" placeholder="sk-..."></div>
                        <div class="t-form-group">
                            <label class="t-form-label">Model Name</label>
                            <div style="display:flex; gap:10px;"><select id="cfg-model" class="t-input" style="cursor:pointer;"></select><button id="t-btn-fetch" class="t-tool-btn" title="获取模型列表">🔄 获取列表</button></div>
                        </div>
                    </div>
                    <div class="t-form-group"><label style="cursor:pointer; display:flex; align-items:center;"><input type="checkbox" id="cfg-stream" ${cfg.stream !== false ? 'checked' : ''} style="margin-right:10px;"> 开启流式传输 (Streaming)</label></div>
                </div>

                <!-- Tab 3: 导演模式 -->
                <div id="page-director" class="t-set-page">
                    <div style="background:#181818; padding:15px; border-radius:6px; border:1px solid #333; margin-bottom:20px; color:#888; font-size:0.9em;">
                        <i class="fa-solid fa-circle-info"></i> 这里设置的是“默认值”。在演绎主界面点击“导演指令”按钮可进行临时调整。
                    </div>
                    <div class="t-form-group"><label class="t-form-label">默认篇幅建议</label><input id="set-dir-len" class="t-input" value="${dirCfg.length}" placeholder="例如: 300字, 2个段落"></div>
                    <div class="t-form-group"><label class="t-form-label">默认叙事视角</label><select id="set-dir-pers" class="t-input"><option value="auto" ${dirCfg.perspective === 'auto' ? 'selected' : ''}>自动 (跟随剧本)</option><option value="1st" ${dirCfg.perspective === '1st' ? 'selected' : ''}>强制第一人称 (我)</option><option value="3rd" ${dirCfg.perspective === '3rd' ? 'selected' : ''}>强制第三人称 (他/她)</option></select></div>
                    <div class="t-form-group"><label class="t-form-label">默认文笔参考 (不超过1000字)</label><textarea id="set-dir-style" class="t-input" rows="5" placeholder="粘贴你喜欢的文笔段落...">${dirCfg.style_ref}</textarea></div>
                </div>
                <!-- Tab 4: 自动化 -->
                <div id="page-automation" class="t-set-page">
                    <div class="t-form-group">
                        <label style="cursor:pointer; display:flex; align-items:center; color:#bfa15f; font-weight:bold;">
                            <input type="checkbox" id="cfg-auto" ${cfg.auto_generate ? 'checked' : ''} style="margin-right:10px;">
                            开启后台自动演绎
                        </label>
                        <p style="font-size:0.8em; color:#666; margin-top:5px; margin-left:22px;">当检测到群聊消息且不是用户发送时，有概率自动触发。</p>
                    </div>
                    <div id="auto-settings-panel" style="display:${cfg.auto_generate ? 'block' : 'none'}; padding-left:22px;">
                        <div class="t-form-group">
                            <label class="t-form-label">触发概率: <span id="cfg-chance-val">${cfg.auto_chance || 50}%</span></label>
                            <input type="range" id="cfg-chance" min="10" max="100" step="10" value="${cfg.auto_chance || 50}" style="width:100%;">
                        </div>
                        <div class="t-form-group">
                            <label class="t-form-label">抽取策略</label>
                            <select id="cfg-auto-mode" class="t-input">
                                <option value="follow" ${(cfg.auto_mode || 'follow') === 'follow' ? 'selected' : ''}>🛡️ 跟随主界面模式 (默认)</option>
                                <option value="category" ${(cfg.auto_mode || 'follow') === 'category' ? 'selected' : ''}>🎯 指定分类白名单 (自定义)</option>
                            </select>
                        </div>
                        <div id="auto-cat-container" style="display:none; background:#181818; padding:10px; border:1px solid #333; border-radius:6px; margin-top:10px;">
                            <div style="font-size:0.8em; color:#888; margin-bottom:8px;">请勾选允许随机抽取的分类 (多选):</div>
                            <div id="auto-cat-list" style="max-height:150px; overflow-y:auto; display:flex; flex-direction:column; gap:5px;"></div>
                        </div>
                    </div>
                    <div class="t-form-group" style="margin-top:20px; border-top:1px solid #333; padding-top:15px;">
                        <label class="t-form-label">回声模式 - 历史读取行数</label>
                        <input type="number" id="cfg-history" class="t-input" value="${cfg.history_limit || 10}">
                    </div>
                </div>

                <!-- Tab 5: 数据管理 -->
                <div id="page-data" class="t-set-page">
                    <div class="t-form-group">
                        <div class="t-form-label">自定义剧本库</div>
                        <div style="background:#181818; border:1px solid #333; padding:20px; border-radius:6px; display:flex; align-items:center; justify-content:space-between;">
                            <div>
                                <div style="font-size:1.1em; color:#eee; font-weight:bold;"><i class="fa-solid fa-scroll" style="color:#bfa15f; margin-right:8px;"></i>剧本管理器</div>
                                <div style="font-size:0.85em; color:#777; margin-top:5px;">当前拥有自定义剧本: ${userScriptCount} 个</div>
                            </div>
                            <button id="btn-open-mgr" class="t-btn primary" style="padding: 8px 20px;"><i class="fa-solid fa-list-check"></i> 打开管理</button>
                        </div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label">已隐藏的官方预设剧本</div>
                        <div style="background:#181818; border:1px solid #333; padding:15px; border-radius:6px; display:flex; align-items:center; justify-content:space-between;">
                            <div><div style="font-size:1.1em; color:#eee;">共 ${disabledCount} 个</div><div style="font-size:0.8em; color:#666;">这些预设在列表中已被隐藏</div></div>
                            <button id="btn-restore-presets" class="t-btn" style="border:1px solid #555;" ${disabledCount === 0 ? 'disabled' : ''}>♻️ 恢复所有</button>
                        </div>
                    </div>
                </div>
                
                <!-- Tab 6: 诊断 (新增) -->
                <div id="page-diagnostics" class="t-set-page">
                    <div style="margin-bottom:15px; background: rgba(255, 159, 67, 0.1); border:1px solid rgba(255, 159, 67, 0.3); padding:10px; border-radius:6px;">
                        <div style="font-weight:bold; color:#feca57; font-size:0.9em; margin-bottom:5px;"><i class="fa-solid fa-triangle-exclamation"></i> 报错排查指南</div>
                        <div style="font-size:0.85em; color:#ccc;">如果您遇到生成失败或内容被截断的情况，请点击下方“导出完整报告”按钮，将生成的 JSON 文件发送给开发者。报告中包含您的 Prompt（用于排查安全审查），但 <b>API Key 已自动脱敏</b>。</div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label">实时日志 (内存缓存 50 条)</div>
                        <div class="t-log-box" id="t-log-viewer"></div>
                    </div>
                    <div style="display:flex; gap:10px;">
                        <button id="btn-refresh-log" class="t-btn">🔄 刷新显示</button>
                        <button id="btn-export-log" class="t-btn primary"><i class="fa-solid fa-download"></i> 导出完整报告 (.json)</button>
                    </div>
                </div>

            </div>
        </div>
        <div style="padding:15px; background:#181818; border-top:1px solid #333; display:flex; justify-content:flex-end;">
            <button id="t-set-save" class="t-btn primary" style="padding:0 30px;">💾 保存所有配置</button>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // --- Tab 切换 ---
    $(".t-set-tab-btn").on("click", function () {
        $(".t-set-tab-btn").removeClass("active"); $(this).addClass("active");
        $(".t-set-page").removeClass("active"); $(`#page-${$(this).data("tab")}`).addClass("active");
    });

    // --- Profile 逻辑 ---
    const saveCurrentProfileToMemory = () => {
        const pIndex = tempProfiles.findIndex(p => p.id === tempActiveId);
        if (pIndex !== -1 && tempProfiles[pIndex].type !== 'internal') {
            const p = tempProfiles[pIndex]; p.name = $("#cfg-prof-name").val(); p.url = $("#cfg-url").val(); p.key = $("#cfg-key").val(); p.model = $("#cfg-model").val();
        }
    };
    const renderProfileUI = () => {
        const pIndex = tempProfiles.findIndex(p => p.id === tempActiveId);
        if (pIndex === -1) { tempActiveId = tempProfiles[0].id; return renderProfileUI(); }
        const p = tempProfiles[pIndex];
        const isInternal = p.type === 'internal';
        const $sel = $("#cfg-prof-select"); $sel.empty();
        tempProfiles.forEach(prof => $sel.append(`<option value="${prof.id}" ${prof.id === tempActiveId ? 'selected' : ''}>${prof.name}</option>`));
        $("#cfg-prof-name").val(p.name).prop("disabled", isInternal);
        $("#cfg-prof-del").prop("disabled", isInternal).css("opacity", isInternal ? 0.5 : 1);
        if (isInternal) {
            $("#cfg-url").val("").prop("disabled", true).prop("placeholder", "(由 ST 托管)");
            $("#cfg-key").val("").prop("disabled", true).prop("placeholder", "(由 ST 托管)");
            $("#cfg-model").empty().append('<option selected>(ST 设置)</option>').prop("disabled", true);
            $("#st-url-display").text(typeof settings !== 'undefined' ? (settings.api_url_openai || "未知") : "未知"); $("#cfg-url-hint").show();
        } else {
            $("#cfg-url").val(p.url || "").prop("disabled", false).prop("placeholder", "http://...");
            $("#cfg-key").val(p.key || "").prop("disabled", false).prop("placeholder", "sk-...");
            $("#cfg-model").prop("disabled", false); $("#cfg-url-hint").hide();
            const $mSel = $("#cfg-model"); $mSel.empty(); const currentM = p.model || "gpt-3.5-turbo"; $mSel.append(`<option value="${currentM}" selected>${currentM}</option>`);
        }
    };
    $("#cfg-prof-select").on("change", function () { saveCurrentProfileToMemory(); tempActiveId = $(this).val(); renderProfileUI(); });
    $("#cfg-prof-add").on("click", function () { saveCurrentProfileToMemory(); const newId = "custom_" + Date.now(); tempProfiles.push({ id: newId, name: "新方案 " + tempProfiles.length, type: "custom", url: "", key: "", model: "gpt-3.5-turbo" }); tempActiveId = newId; renderProfileUI(); });
    $("#cfg-prof-del").on("click", function () { if (confirm("删除方案？")) { tempProfiles = tempProfiles.filter(p => p.id !== tempActiveId); tempActiveId = tempProfiles[0].id; renderProfileUI(); } });
    // --- 预览与外观 ---
    const renderPreview = () => {
        const $ball = $("#p-ball"); const theme = $("#p-color-theme").val(); const notify = $("#p-color-notify").val(); const size = parseInt(tempApp.size) || 56;
        $ball.css({ width: size + "px", height: size + "px", fontSize: Math.floor(size * 0.46) + "px", borderColor: "transparent", boxShadow: `0 0 10px ${theme}` });
        $ball[0].style.setProperty('--p-theme', theme); $ball[0].style.setProperty('--p-notify', notify);
        if (tempApp.type === 'emoji') $ball.html(tempApp.content);
        else if (tempApp.type === 'image') {
            if (tempApp.content && tempApp.content.startsWith("data:")) { $ball.html(`<img src="${tempApp.content}">`); $("#btn-upload-card").css("background-image", `url('${tempApp.content}')`).find("i, span").hide(); }
            else { $ball.html('<i class="fa-solid fa-image"></i>'); $("#btn-upload-card").css("background-image", "").find("i, span").show(); }
        }
    };
    $("input[name='p-type']").on("change", function () { tempApp.type = $(this).val(); $("#box-emoji").toggle(tempApp.type === 'emoji'); $("#box-image").toggle(tempApp.type === 'image'); renderPreview(); });
    $("#p-size-input").on("input", function () { tempApp.size = $(this).val(); $("#p-size-val").text(tempApp.size + "px"); renderPreview(); });
    $("#p-emoji-input").on("input", function () { tempApp.content = $(this).val(); renderPreview(); });
    $("#p-color-theme, #p-color-notify").on("input", renderPreview);
    $("#btn-upload-card").on("click", () => $("#p-file-input").click());
    $("#p-file-input").on("change", async function () { const file = this.files[0]; if (!file) return; try { tempApp.content = await fileToBase64(file); renderPreview(); } catch (e) { alert("Fail"); } });
    $("#btn-test-spin").on("click", () => { $("#p-ball").removeClass("p-notify").addClass("p-loading"); setTimeout(() => $("#p-ball").removeClass("p-loading"), 3000); });
    $("#btn-test-notify").on("click", () => { $("#p-ball").removeClass("p-loading").addClass("p-notify"); setTimeout(() => $("#p-ball").removeClass("p-notify"), 3000); });

    // --- 自动化设置逻辑 ---
    const savedCats = cfg.auto_categories || [];
    const renderAutoCatList = () => {
        const $list = $("#auto-cat-list"); $list.empty();
        const allCats = new Set(runtimeScripts.map(s => s.category || (s._type === 'preset' ? '官方预设' : '未分类')));
        const sortedCats = [...allCats].sort();
        if (sortedCats.length === 0) { $list.html('<div style="color:#666;">暂无剧本</div>'); return; }
        sortedCats.forEach(cat => {
            const isChecked = savedCats.includes(cat) ? 'checked' : '';
            $list.append(`<label style="display:flex; align-items:center; cursor:pointer; padding:2px 0;"><input type="checkbox" class="auto-cat-chk" value="${cat}" ${isChecked} style="margin-right:8px;"><span style="color:#ccc; font-size:0.9em;">${cat}</span></label>`);
        });
    };
    const updateAutoModeUI = () => {
        const mode = $("#cfg-auto-mode").val();
        if (mode === 'category') { $("#auto-cat-container").show(); renderAutoCatList(); }
        else { $("#auto-cat-container").hide(); }
    };
    $("#cfg-auto-mode").on("change", updateAutoModeUI);
    updateAutoModeUI();
    $("#cfg-auto").on("change", function () { $("#auto-settings-panel").toggle($(this).is(":checked")); });
    $("#cfg-chance").on("input", function () { $("#cfg-chance-val").text($(this).val() + "%"); });

    // --- 诊断与日志逻辑 ---
    const renderLogView = () => {
        const logs = TitaniaLogger.logs;
        if (!logs || logs.length === 0) {
            $("#t-log-viewer").html('<div style="text-align:center; margin-top:100px; color:#555;">暂无日志</div>');
            return;
        }
        let html = "";
        logs.forEach(l => {
            let colorClass = "t-log-entry-info";
            if (l.type === 'ERROR') colorClass = "t-log-entry-error";
            if (l.type === 'WARN') colorClass = "t-log-entry-warn";

            // 优化诊断信息的显示
            let detailStr = "";
            if (l.details) {
                // 如果是诊断对象，尝试提取关键信息显示，而不是全部 dump
                if (l.details.diagnostics) {
                    const d = l.details.diagnostics;
                    const net = d.network || {};
                    // 构造一个精简版的摘要
                    const summary = {
                        phase: d.phase,
                        status: net.status,
                        latency: net.latency + 'ms',
                        input: d.input_stats
                    };
                    // 如果有原始报错片段，也展示出来
                    if (d.raw_response_snippet) {
                        summary.raw_snippet = d.raw_response_snippet.substring(0, 100) + (d.raw_response_snippet.length>100 ? '...' : '');
                    }
                    detailStr = `\n[Diagnostics]: ${JSON.stringify(summary, null, 2)}`;
                } else {
                    // 旧逻辑
                    try {
                        detailStr = `\n${JSON.stringify(l.details, null, 2)}`;
                    } catch (e) { detailStr = "\n[Complex Data]"; }
                }
            }

            html += `<div class="${colorClass}">[${l.timestamp}] [${l.type}] ${l.message}${detailStr}</div>`;
        });
        $("#t-log-viewer").html(html);
    };

    // 初始渲染日志
    renderLogView();
    $("#btn-refresh-log").on("click", renderLogView);
    $("#btn-export-log").on("click", () => TitaniaLogger.downloadReport());

    // --- API & 数据 ---
    $("#t-btn-fetch").on("click", async function () {
        const btn = $(this); const p = tempProfiles.find(x => x.id === tempActiveId);
        if (p.type === 'internal') { alert("ST托管模式下，请在 SillyTavern 主设置中切换模型"); return; }
        const urlInput = ($("#cfg-url").val() || "").trim().replace(/\/+$/, "").replace(/\/chat\/completions$/, "");
        const key = ($("#cfg-key").val() || "").trim();
        if (!urlInput) return alert("URL Empty");
        try {
            btn.prop("disabled", true).text("..."); const res = await fetch(`${urlInput}/models`, { method: "GET", headers: { "Authorization": `Bearer ${key}` } });
            if (!res.ok) throw new Error("Status: " + res.status);
            const data = await res.json(); const models = data.data || data.models || [];
            const $sel = $("#cfg-model"); $sel.empty(); models.forEach(m => $sel.append(`<option value="${m.id || m}">${m.id || m}</option>`));
            if (window.toastr) toastr.success(`获取成功: ${models.length} 个`);
        } catch (e) { alert("Fail: " + e.message); TitaniaLogger.error("获取模型列表失败", e); } finally { btn.prop("disabled", false).text("🔄 获取列表"); }
    });
    $("#btn-restore-presets").on("click", function () {
        if (confirm("恢复所有预设？")) { const d = getExtData(); d.disabled_presets = []; saveExtData(); loadScripts(); $(this).prop("disabled", true).text("已恢复"); }
    });
    $("#btn-open-mgr").on("click", () => { $("#t-settings-view").remove(); openScriptManager(); });
    $("#t-set-close").on("click", () => { $("#t-settings-view").remove(); $("#t-main-view").show(); });

    // --- 保存逻辑 ---
    $("#t-set-save").on("click", () => {
        saveCurrentProfileToMemory();
        const selectedCats = []; $(".auto-cat-chk:checked").each(function () { selectedCats.push($(this).val()); });

        const finalCfg = {
            active_profile_id: tempActiveId, profiles: tempProfiles,
            history_limit: parseInt($("#cfg-history").val()) || 10,
            stream: $("#cfg-stream").is(":checked"),
            auto_generate: $("#cfg-auto").is(":checked"),
            auto_chance: parseInt($("#cfg-chance").val()),
            auto_mode: $("#cfg-auto-mode").val(),
            auto_categories: selectedCats
        };
        const d = getExtData();
        d.config = finalCfg;
        d.appearance = { type: tempApp.type, content: tempApp.content, color_theme: $("#p-color-theme").val(), color_notify: $("#p-color-notify").val(), size: tempApp.size || 56 };
        d.director = { length: $("#set-dir-len").val().trim(), perspective: $("#set-dir-pers").val(), style_ref: $("#set-dir-style").val().trim() };

        saveExtData();
        $("#t-settings-view").remove(); $("#t-main-view").show(); createFloatingButton();
        if (window.toastr) toastr.success("设置已保存");
    });

    renderPreview(); renderProfileUI();
}

// 剧本管理器
function openScriptManager() {
    // 内部状态
    let currentFilter = {
        mode: 'all', category: 'all', search: '', hidePresets: false
    };
    let isBatchMode = false;

    const getCategories = () => {
        const cats = new Set(runtimeScripts.map(s => s.category).filter(c => c));
        return ["全部", ...[...cats].sort()];
    };

    const style = `
    <style>
        #t-mgr-view { height: 85vh; width: 900px; max-width: 95vw; display: flex; flex-direction: column; overflow: hidden; background: #121212; position: relative; }
        .t-mgr-body { display: flex; flex-grow: 1; overflow: hidden; position: relative; }
        
        /* 侧边栏 */
        .t-mgr-sidebar { width: 180px; background: #181818; border-right: 1px solid #333; display: flex; flex-direction: column; flex-shrink: 0; }
        .t-mgr-sb-group { padding: 10px 0; border-bottom: 1px solid #222; }
        .t-mgr-sb-title { font-size: 0.8em; color: #666; padding: 0 15px 5px; font-weight: bold; text-transform: uppercase; }
        .t-mgr-sb-item { padding: 8px 15px; cursor: pointer; color: #aaa; font-size: 0.9em; transition: 0.2s; display: flex; justify-content: space-between; align-items: center; }
        .t-mgr-sb-item:hover { background: #222; color: #eee; }
        .t-mgr-sb-item.active { background: #2a2a2a; color: #bfa15f; border-left: 3px solid #bfa15f; font-weight: bold; }
        
        /* Main Area (Fixed overflow issue) */
        .t-mgr-main { 
            flex-grow: 1; display: flex; flex-direction: column; background: #121212; min-width: 0; position: relative;
            overflow: hidden; 
        }
        
        .t-mgr-toolbar { padding: 10px 15px; background: #1e1e1e; border-bottom: 1px solid #333; display: flex; gap: 10px; align-items: center; flex-shrink: 0; }
        .t-mgr-search { flex-grow: 1; background: #2a2a2a; border: 1px solid #444; color: #eee; padding: 6px 10px; border-radius: 4px; font-size: 0.9em; min-width: 50px; }
        
        .t-batch-elem { display: none; }
        .t-batch-active .t-batch-elem { display: block; }
        
        /* 列表区域 */
        .t-mgr-list { flex-grow: 1; overflow-y: auto; padding: 0; scroll-behavior: smooth; -webkit-overflow-scrolling: touch; }
        .t-mgr-item { display: flex; align-items: center; padding: 10px 15px; border-bottom: 1px solid #222; transition: 0.2s; min-height: 50px; }
        .t-mgr-item:hover { background: #1a1a1a; }
        .t-mgr-item-check-col { display: none; padding-right: 15px; } 
        .t-batch-active .t-mgr-item-check-col { display: block; } 
        
        .t-mgr-item-meta { flex-grow: 1; overflow: hidden; }
        .t-mgr-item-title { font-size: 0.95em; color: #eee; font-weight: 500; display: flex; align-items: center; gap: 8px; }
        .t-mgr-item-desc { font-size: 0.8em; color: #666; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 2px; }
        .t-mgr-tag { font-size: 0.75em; padding: 1px 5px; border-radius: 3px; background: #333; color: #aaa; }
        
        /* 底部操作栏 (Fixed position for Mobile) */
        .t-mgr-footer-bar { 
            height: 50px; background: #2a1a1a; border-top: 1px solid #522; 
            display: none; align-items: center; justify-content: space-between; 
            padding: 0 15px; color: #ff6b6b; flex-shrink: 0;
            z-index: 10;
        }
        .t-batch-active .t-mgr-footer-bar { display: flex; animation: slideUp 0.2s; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }

        .t-imp-modal { position: absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index: 2000; display:none; justify-content:center; align-items:center; }
        .t-imp-box { width: 400px; max-width:90%; background: #1e1e1e; border: 1px solid #444; border-radius: 8px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .t-imp-row { margin-bottom: 15px; }
        .t-imp-label { display: block; color: #aaa; margin-bottom: 5px; font-size: 0.9em; }

        @media screen and (max-width: 600px) {
            .t-mgr-body { flex-direction: column; }
            .t-mgr-sidebar { width: 100%; height: auto; flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid #333; padding: 5px; white-space: nowrap; flex-shrink:0; }
            .t-mgr-sb-group { border: none; display: flex; padding: 0; gap: 5px; }
            .t-mgr-sb-title { display: none; }
            .t-mgr-sb-item { padding: 6px 12px; border: 1px solid #333; margin: 0; }
            .t-mgr-sb-item.active { background: #bfa15f; color: #000; }
            .t-mgr-footer-bar { position: absolute; bottom: 0; left: 0; right: 0; width: 100%; box-shadow: 0 -5px 15px rgba(0,0,0,0.6); }
            .t-batch-active .t-mgr-list { padding-bottom: 60px !important; }
            #t-mgr-view { height: 80vh; max-height: 85vh; }
        }
    </style>`;

    const html = `
    ${style}
    <div class="t-box" id="t-mgr-view">
        <div class="t-header"><span class="t-title-main">📂 剧本资源管理</span><span class="t-close" id="t-mgr-close">&times;</span></div>
        <div class="t-mgr-body">
            <div class="t-mgr-sidebar">
                <div class="t-mgr-sb-group">
                    <div class="t-mgr-sb-title">模式</div>
                    <div class="t-mgr-sb-item active" data-filter="mode" data-val="all">全部</div>
                    <div class="t-mgr-sb-item" data-filter="mode" data-val="echo">Echo</div>
                    <div class="t-mgr-sb-item" data-filter="mode" data-val="parallel">Parallel</div>
                </div>
                <div class="t-mgr-sb-group">
                    <div class="t-mgr-sb-title">分类</div>
                    <div id="t-mgr-cat-list"></div>
                </div>
            </div>
            <div class="t-mgr-main" id="t-mgr-main-area">
                <div class="t-mgr-toolbar">
                    <input type="text" id="t-mgr-search-inp" class="t-mgr-search" placeholder="🔍 搜索...">
                    <button id="t-mgr-import-btn" class="t-tool-btn" title="导入"><i class="fa-solid fa-file-import"></i></button>
                    <button id="t-mgr-new" class="t-tool-btn" title="新建"><i class="fa-solid fa-plus"></i></button>
                    <button id="t-mgr-batch-toggle" class="t-tool-btn" style="border:1px solid #444;" title="批量管理">
                        <i class="fa-solid fa-list-check"></i> 管理
                    </button>
                </div>
                <div class="t-mgr-header-row t-batch-elem" style="padding: 8px 15px; background: #2a2a2a; border-bottom: 1px solid #333; color: #ccc; font-size: 0.9em; flex-shrink:0;">
                    <label style="display:flex; align-items:center; cursor:pointer;">
                        <input type="checkbox" id="t-mgr-select-all" style="margin-right:10px;"> 全选当前列表
                    </label>
                </div>
                <div class="t-mgr-list" id="t-mgr-list-container"></div>
                <div class="t-mgr-footer-bar t-batch-elem">
                    <span id="t-batch-count-label">已选: 0</span>
                    <button id="t-mgr-del-confirm" class="t-tool-btn" style="color:#ff6b6b; border-color:#ff6b6b;">🗑️ 确认删除</button>
                </div>
            </div>
        </div>
        
        <div id="t-imp-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">📥 导入剧本</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">剧本模式:</span>
                    <div style="background:#111; padding:5px; border-radius:4px; border:1px solid #333; display:flex; gap:15px;">
                        <label><input type="radio" name="imp-mode-m" value="echo"> 回声 (Echo)</label>
                        <label><input type="radio" name="imp-mode-m" value="parallel" checked> 平行 (Parallel)</label>
                    </div>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">存入分类:</span>
                    <input id="t-imp-cat-m" list="t-cat-dl-m" class="t-input" placeholder="输入或选择分类 (可选)" style="width:100%;">
                    <datalist id="t-cat-dl-m"></datalist>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">选择文件 (.txt):</span>
                    <div style="display:flex; gap:10px; align-items:center; background:#111; padding:5px; border-radius:4px; border:1px solid #333;">
                        <input type="file" id="t-file-input-m" accept=".txt" style="display:none;">
                        <button id="t-btn-choose-file" class="t-btn" style="font-size:0.9em; padding:4px 10px;">📂 浏览文件...</button>
                        <span id="t-file-name-label" style="font-size:0.85em; color:#888; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width: 150px;">未选择文件</span>
                    </div>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-imp-cancel" class="t-btn" style="flex:1;">取消</button>
                    <button id="t-imp-ok" class="t-btn primary" style="flex:1;">开始导入</button>
                </div>
            </div>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // --- 逻辑 ---
    const renderSidebarCats = () => {
        const cats = getCategories();
        $("#t-mgr-cat-list").empty();
        $("#t-cat-dl-m").empty().append(cats.map(c => `<option value="${c}">`));
        cats.forEach(c => {
            const $item = $(`<div class="t-mgr-sb-item" data-filter="category" data-val="${c}">${c}</div>`);
            if (currentFilter.category === c) $item.addClass("active");
            $item.on("click", function () {
                $(".t-mgr-sb-item[data-filter='category']").removeClass("active");
                $(this).addClass("active");
                currentFilter.category = c;
                renderList();
            });
            $("#t-mgr-cat-list").append($item);
        });
    };

    const renderList = () => {
        const $list = $("#t-mgr-list-container");
        $list.empty();
        $("#t-mgr-select-all").prop("checked", false);
        updateBatchCount();

        let filtered = runtimeScripts.filter(s => {
            if (currentFilter.mode !== 'all' && s.mode !== currentFilter.mode) return false;
            if (currentFilter.category !== 'all') {
                const sCat = s.category || "未分类";
                if (currentFilter.category !== "全部" && sCat !== currentFilter.category) return false;
            }
            if (currentFilter.search) {
                const term = currentFilter.search.toLowerCase();
                if (!s.name.toLowerCase().includes(term)) return false;
            }
            return true;
        });

        if (filtered.length === 0) {
            $list.append(`<div style="text-align:center; color:#555; margin-top:50px;">无数据</div>`);
            return;
        }

        filtered.forEach(s => {
            const isUser = s._type === 'user';
            const modeIcon = s.mode === 'echo' ? '<i class="fa-solid fa-water" style="color:#90cdf4;"></i>' : '<i class="fa-solid fa-globe" style="color:#bfa15f;"></i>';
            const catLabel = s.category ? `<span class="t-mgr-tag">${s.category}</span>` : '';
            const presetLabel = !isUser ? `<span class="t-mgr-tag" style="background:#444;">预设</span>` : '';

            const $row = $(`
                <div class="t-mgr-item">
                    <div class="t-mgr-item-check-col">
                        <input type="checkbox" class="t-mgr-check" data-id="${s.id}" data-type="${s._type}">
                    </div>
                    <div class="t-mgr-item-meta" style="cursor:pointer;">
                        <div class="t-mgr-item-title">${modeIcon} ${s.name} ${presetLabel} ${catLabel}</div>
                        <div class="t-mgr-item-desc">${s.desc || "..."}</div>
                    </div>
                    <div style="padding-left:10px;">
                        <i class="fa-solid fa-pen" style="color:#666; cursor:pointer;"></i>
                    </div>
                </div>
            `);

            $row.find(".t-mgr-item-meta, .fa-pen").on("click", () => {
                if (!isBatchMode) { $("#t-mgr-view").hide(); openEditor(s.id, true); }
                else {
                    const cb = $row.find(".t-mgr-check");
                    cb.prop("checked", !cb.prop("checked")).trigger("change");
                }
            });
            $row.find(".t-mgr-check").on("change", updateBatchCount);
            $list.append($row);
        });
    };

    const updateBatchCount = () => {
        const n = $(".t-mgr-check:checked").length;
        $("#t-batch-count-label").text(`已选: ${n}`);
        $("#t-mgr-del-confirm").prop("disabled", n === 0).css("opacity", n === 0 ? 0.5 : 1);
    };

    const refreshAll = () => { renderSidebarCats(); renderList(); };

    // 事件绑定
    $("#t-mgr-batch-toggle").on("click", function () {
        isBatchMode = !isBatchMode;
        const main = $("#t-mgr-main-area");
        const btn = $(this);
        if (isBatchMode) {
            main.addClass("t-batch-active");
            btn.html('<i class="fa-solid fa-check"></i> 完成').css({ background: "#bfa15f", color: "#000", borderColor: "#bfa15f" });
        } else {
            main.removeClass("t-batch-active");
            btn.html('<i class="fa-solid fa-list-check"></i> 管理').css({ background: "", color: "", borderColor: "#444" });
            $(".t-mgr-check").prop("checked", false);
        }
    });

    $("#t-mgr-import-btn").on("click", () => { $("#t-imp-modal").css("display", "flex"); $("#t-file-input-m").val(""); $("#t-file-name-label").text("未选择文件"); });
    $("#t-btn-choose-file").on("click", () => $("#t-file-input-m").click());
    $("#t-file-input-m").on("change", function () { $("#t-file-name-label").text(this.files[0] ? this.files[0].name : "未选择文件"); });
    $("#t-imp-cancel").on("click", () => $("#t-imp-modal").hide());

    // [核心] 智能导入解析逻辑
    $("#t-imp-ok").on("click", () => {
        const file = $("#t-file-input-m")[0].files[0];
        if (!file) return alert("请选择文件");
        const defaultMode = $("input[name='imp-mode-m']:checked").val();
        const defaultCat = $("#t-imp-cat-m").val().trim();

        const reader = new FileReader();
        reader.onload = function (evt) {
            const content = evt.target.result;
            const fileName = file.name.replace(/\.[^/.]+$/, "");

            // 按 ### 切割，保留分隔符后的可能文字
            // split 的正则技巧：不吞掉内容。不过这里最简单的方法是 Split 后手动处理首行
            const blocks = content.split(/(?:^|\r?\n)\s*###/);

            let importCount = 0;
            blocks.forEach((block, index) => {
                if (!block || !block.trim()) return;

                // 1. 拆分行
                let lines = block.split(/\r?\n/);

                // 检查第一行是否是 "### 标题" 遗留下来的标题文字
                // (因为 split 把 ### 吃掉了，剩下的就是后面的文字)
                let potentialInlineTitle = lines[0].trim();
                let bodyLines = lines; // 默认全是正文

                let scriptTitle = "";
                let scriptCat = defaultCat;

                // 策略2: 如果分隔符后有文字，且较短，视为标题
                if (potentialInlineTitle.length > 0 && potentialInlineTitle.length < 50) {
                    scriptTitle = potentialInlineTitle;
                    bodyLines = lines.slice(1); // 剔除第一行标题
                }

                let rawBody = bodyLines.join("\n").trim();

                // 策略1 (优先级最高): 扫描 Title: 和 Category: 标签
                // 提取并从正文中删除该行
                const titleMatch = rawBody.match(/^(?:Title|标题)[:：]\s*(.+)$/im);
                if (titleMatch) {
                    scriptTitle = titleMatch[1].trim();
                    rawBody = rawBody.replace(titleMatch[0], "").trim();
                }

                const catMatch = rawBody.match(/^(?:Category|分类)[:：]\s*(.+)$/im);
                if (catMatch) {
                    scriptCat = catMatch[1].trim();
                    rawBody = rawBody.replace(catMatch[0], "").trim();
                }

                // 策略3 (保底): 截取前20字
                if (!scriptTitle) {
                    // 去除换行符，取前20字
                    const cleanStart = rawBody.replace(/\s+/g, " ").substring(0, 20);
                    if (cleanStart) {
                        scriptTitle = cleanStart + "...";
                    } else {
                        scriptTitle = `${fileName}_${String(index + 1).padStart(2, '0')}`;
                    }
                }

                if (!rawBody) return; // 空内容不导入

                saveUserScript({
                    id: "imp_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
                    name: scriptTitle,
                    desc: "导入数据",
                    prompt: rawBody,
                    mode: defaultMode,
                    category: scriptCat
                });
                importCount++;
            });

            alert(`成功导入 ${importCount} 个剧本`);
            $("#t-imp-modal").hide();
            refreshAll();
        };
        reader.readAsText(file);
    });

    $("#t-mgr-del-confirm").on("click", function () {
        const toDeleteUser = [];
        const toHidePreset = [];
        $(".t-mgr-check:checked").each(function () {
            const id = $(this).data("id");
            const type = $(this).data("type");
            if (type === 'user') toDeleteUser.push(id);
            else if (type === 'preset') toHidePreset.push(id);
        });

        const total = toDeleteUser.length + toHidePreset.length;
        if (total === 0) return;

        if (confirm(`⚠️ 确定删除选中的 ${total} 个剧本？\n(注：官方预设将变为隐藏状态，可去设置里恢复)`)) {
            if (toDeleteUser.length > 0) toDeleteUser.forEach(id => deleteUserScript(id));
            if (toHidePreset.length > 0) {
                const data = getExtData();
                if (!data.disabled_presets) data.disabled_presets = [];
                data.disabled_presets = [...new Set([...data.disabled_presets, ...toHidePreset])];
                saveExtData();
                loadScripts();
            }
            refreshAll();
            $("#t-mgr-select-all").prop("checked", false);
        }
    });

    $("#t-mgr-close").on("click", () => { $("#t-mgr-view").remove(); $("#t-main-view").show(); refreshScriptList($("#t-mode-toggle").is(":checked")); });
    $(".t-mgr-sb-item[data-filter='mode']").on("click", function () { $(".t-mgr-sb-item[data-filter='mode']").removeClass("active"); $(this).addClass("active"); currentFilter.mode = $(this).data("val"); renderList(); });
    $("#t-mgr-search-inp").on("input", function () { currentFilter.search = $(this).val(); renderList(); });
    $("#t-mgr-new").on("click", () => { $("#t-mgr-view").hide(); openEditor(null, true); });
    $("#t-mgr-select-all").on("change", function () { $(".t-mgr-check:not(:disabled)").prop("checked", $(this).is(":checked")); updateBatchCount(); });

    refreshAll();
}

function updateBatchBtn() { const count = $(".t-mgr-check:checked").length; const btn = $("#t-mgr-del-batch"); if (count > 0) { btn.css({ "color": "#ff6b6b", "pointer-events": "auto", "border-color": "#ff6b6b" }); btn.text(`🗑️ 删除 (${count})`); } else { btn.css({ "color": "#aaa", "pointer-events": "none", "border-color": "#555" }); btn.text(`🗑️ 删除`); } }

// 打开剧本编辑器
// [修复] 打开剧本编辑器 (修复亮色主题下输入框看不清的问题)
function openEditor(id, fromMgr = false) {
    const isEdit = !!id;
    let data = { id: Date.now().toString(), name: "新剧本", desc: "", prompt: "", mode: "parallel", category: "" };
    if (isEdit) data = runtimeScripts.find(s => s.id === id);
    const isPreset = data._type === 'preset';

    if (fromMgr) $("#t-mgr-view").hide(); else $("#t-settings-view").hide();

    const checkEcho = data.mode === 'echo' ? 'checked' : '';
    const checkParallel = (data.mode === 'parallel' || !data.mode) ? 'checked' : '';

    // 获取现有分类用于联想
    const existingCats = [...new Set(runtimeScripts.map(s => s.category).filter(c => c))].sort();
    const dataListOpts = existingCats.map(c => `<option value="${c}">`).join("");

    // [核心修复] 强制定义 .t-input 的样式，防止被 ST 主题(亮色)覆盖
    const style = `
    <style>
        /* 强制锁定输入框为暗色风格 */
        .t-box .t-input {
            background-color: #1a1a1a !important; /* 强制深灰背景 */
            color: #eeeeee !important;            /* 强制浅色文字 */
            border: 1px solid #444 !important;    /* 强制深色边框 */
            
            border-radius: 4px;
            padding: 8px 10px;
            width: 100%;
            box-sizing: border-box;
            outline: none;
            transition: border 0.2s;
        }
        
        /* 聚焦时的高亮 */
        .t-box .t-input:focus {
            border-color: #bfa15f !important;
            background-color: #222 !important;
        }

        /* 禁用状态 */
        .t-box .t-input:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background-color: #111 !important;
        }

        /* 针对大文本域优化字体 */
        textarea.t-input {
            font-family: 'Consolas', 'Monaco', monospace; /* 等宽字体方便编辑 */
            line-height: 1.5;
            resize: vertical;
        }
    </style>`;

    const html = `
    ${style}
    <div class="t-box" id="t-editor-view">
        <div class="t-header"><span class="t-title-main">${isPreset ? '查看' : (isEdit ? '编辑' : '新建')}</span></div>
        <div class="t-body">
            
            <!-- 第一行：标题 + 分类 -->
            <div style="display:flex; gap:10px; margin-bottom:5px;">
                <div style="flex-grow:1;">
                    <label>标题:</label>
                    <input id="ed-name" class="t-input" value="${data.name}" ${isPreset ? 'disabled' : ''}>
                </div>
                <div style="width: 150px;">
                    <label>分类:</label>
                    <input id="ed-cat" list="ed-cat-list" class="t-input" value="${data.category || ''}" placeholder="默认" ${isPreset ? 'disabled' : ''}>
                    <datalist id="ed-cat-list">${dataListOpts}</datalist>
                </div>
            </div>

            <label>模式:</label>
            <div style="margin-bottom:10px; display:flex; gap:15px;">
                <label><input type="radio" name="ed-mode" value="echo" ${checkEcho} ${isPreset ? 'disabled' : ''}> <span style="color:#90cdf4;">回声</span></label>
                <label><input type="radio" name="ed-mode" value="parallel" ${checkParallel} ${isPreset ? 'disabled' : ''}> <span style="color:#bfa15f;">平行</span></label>
            </div>

            <label>简介:</label><input id="ed-desc" class="t-input" value="${data.desc}" ${isPreset ? 'disabled' : ''}>
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                <label>Prompt:</label>
                ${!isPreset ? `<div class="t-tool-btn" id="ed-btn-expand" style="cursor:pointer;"><i class="fa-solid fa-maximize"></i> 大屏</div>` : ''}
            </div>
            <textarea id="ed-prompt" class="t-input" rows="6" ${isPreset ? 'disabled' : ''}>${data.prompt}</textarea>
            
            <div class="t-btn-row">
                ${!isPreset ? '<button id="ed-save" class="t-btn primary" style="flex:1;">保存</button>' : ''}
                <button id="ed-cancel" class="t-btn" style="flex:1;">返回</button>
            </div>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // 事件绑定
    $("#ed-cancel").on("click", () => {
        $("#t-editor-view").remove();
        if (fromMgr) { $("#t-mgr-view").show(); renderManagerList(); } else $("#t-settings-view").show();
    });

    $("#ed-btn-expand").on("click", () => {
        $("#t-editor-view").hide();
        // 大屏模式同样复用了 .t-input 类，所以上面的 style 也会生效
        $("#t-overlay").append(`<div class="t-box" id="t-large-edit-view" style="height:90vh; max-height:95vh; max-width:800px;"><div class="t-header"><span class="t-title-main">大屏模式</span></div><div class="t-body" style="height:100%;"><textarea id="ed-large-text" class="t-input" style="flex-grow:1; resize:none; font-family:monospace; line-height:1.5; font-size:14px; height:100%;">${$("#ed-prompt").val()}</textarea><div class="t-btn-row"><button id="ed-large-ok" class="t-btn primary" style="flex:1;">确认</button><button id="ed-large-cancel" class="t-btn" style="flex:1;">取消</button></div></div></div>`);
        $("#ed-large-cancel").on("click", () => { $("#t-large-edit-view").remove(); $("#t-editor-view").show(); });
        $("#ed-large-ok").on("click", () => { $("#ed-prompt").val($("#ed-large-text").val()); $("#t-large-edit-view").remove(); $("#t-editor-view").show(); });
    });

    if (!isPreset) {
        $("#ed-save").on("click", () => {
            saveUserScript({
                id: isEdit ? data.id : "user_" + Date.now(),
                name: $("#ed-name").val(),
                desc: $("#ed-desc").val(),
                prompt: $("#ed-prompt").val(),
                mode: $("input[name='ed-mode']:checked").val(),
                category: $("#ed-cat").val().trim()
            });
            $("#t-editor-view").remove();
            // 注意：这里需要重新调用一下 openScriptManager 里的刷新逻辑，但因为 fromMgr 只是个标记
            // 简单处理是如果来自 Mgr，则刷新整个 Mgr 界面
            if (fromMgr) {
                $("#t-mgr-view").remove();
                openScriptManager();
            } else {
                $("#t-settings-view").show();
            }
        });
    }
}

window.t_edit = (id, fromMgr) => openEditor(id, fromMgr);

// 【Part 6: 收藏夹、监听逻辑与初始化】
// 保存收藏功能 (已放宽校验规则)
async function saveFavorite() {
    const content = $("#t-output-content").html();

    // 【修改】仅校验是否为空或长度过短，不再拦截包含特定关键词的内容
    if (!content || content.trim().length < 10) {
        if (window.toastr) toastr.warning("内容为空或过短，无法收藏"); else alert("内容无效");
        return;
    }

    const script = runtimeScripts.find(s => s.id === lastUsedScriptId);
    const scriptName = script ? script.name : "未知剧本";
    const ctx = await getContextData();

    // === 恢复原样：DOM 屏幕抓取法 ===
    // 这种方式将图片路径直接保存在这一条收藏记录里
    let avatarSrc = null;

    // 尝试1：抓取聊天流中，最后一条属于角色的消息头像
    const lastCharImg = $(".mes[is_user='false'] .message_avatar_img").last();
    if (lastCharImg.length > 0) {
        avatarSrc = lastCharImg.attr("src");
    }

    // 尝试2：如果聊天里没图，尝试抓取主界面的大图
    if (!avatarSrc) {
        const mainImg = $("#character_image_div img");
        if (mainImg.length > 0 && mainImg.is(":visible")) {
            avatarSrc = mainImg.attr("src");
        }
    }

    // 尝试3：尝试抓取右侧设置栏的小头像
    if (!avatarSrc) {
        const navImg = $("#right-nav-panel .character-avatar");
        if (navImg.length > 0) {
            avatarSrc = navImg.attr("src");
        }
    }

    console.log("Titania: Captured Avatar Path ->", avatarSrc);

    const entry = {
        id: Date.now(), // 建议：如果需要更高安全性，可改为 `${Date.now()}_${Math.floor(Math.random()*1000)}`
        title: `${scriptName} - ${ctx.charName}`,
        date: new Date().toLocaleString(),
        html: content,
        avatar: avatarSrc // 恢复保存具体路径
    };

    const data = getExtData();
    if (!data.favs) data.favs = [];
    data.favs.unshift(entry);
    saveExtData();

    const btn = $("#t-btn-like");
    // [修改] 保持已收藏状态，不设置 setTimeout 还原，并禁用按钮防止重复保存
    btn.html('<i class="fa-solid fa-heart" style="color:#ff6b6b;"></i> 已收藏').prop("disabled", true);

    if (window.toastr) toastr.success("收藏成功！");
}

// [修改] 收藏夹窗口 (更换核心：使用 html-to-image 库 + 原地展开截图法)
function openFavsWindow() {
    $("#t-main-view").hide();
    const data = getExtData();
    const favs = data.favs || [];

    let currentFilteredList = [];
    let currentIndex = -1;
    let currentFavId = null;

    const parseMeta = (title) => {
        const parts = title.split(' - ');
        if (parts.length >= 2) {
            const char = parts.pop();
            const script = parts.join(' - ');
            return { script, char: char.trim() };
        }
        return { script: title, char: "未知" };
    };

    const getSnippet = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        let text = tmp.textContent || tmp.innerText || "";
        text = text.replace(/\s+/g, " ").trim();
        return text.length > 60 ? text.substring(0, 60) + "..." : text;
    };

    const charIndex = new Set();
    favs.forEach(f => {
        const meta = parseMeta(f.title || "");
        f._meta = meta;
        charIndex.add(meta.char);
    });
    const charList = ["全部角色", ...[...charIndex].sort()];

    const style = `
    <style>
        .t-fav-container { height: 90vh; width: 1100px; max-width: 95vw; display: flex; flex-direction: column; background: #121212; overflow: hidden; position: relative; isolation: isolate; }
        .t-fav-toolbar { height: 60px; background: #1e1e1e; border-bottom: 1px solid #333; display: flex; align-items: center; padding: 0 20px; gap: 15px; flex-shrink: 0; }
        .t-fav-filter-select { background: #2a2a2a; color: #eee; border: 1px solid #444; padding: 6px 10px; border-radius: 4px; outline: none; min-width: 120px; cursor: pointer; }
        .t-fav-search { background: #2a2a2a; color: #eee; border: 1px solid #444; padding: 6px 10px; border-radius: 4px; outline: none; width: 200px; }
        .t-fav-grid-area { flex-grow: 1; padding: 25px; overflow-y: auto; background: #121212; }
        .t-fav-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        
        .t-fav-card { position: relative; overflow: hidden; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; height: 180px; cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); display: flex; flex-direction: column; justify-content: flex-end; }
        .t-fav-card-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: top center; opacity: 0.5; transition: all 0.5s ease; z-index: 0; }
        .t-fav-card-bg.no-img { background: linear-gradient(135deg, #1f1f1f, #2a2a2a); opacity: 1; filter: none; }
        .t-fav-card-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%); z-index: 1; pointer-events: none; }
        .t-fav-card:hover { transform: translateY(-5px); border-color: #666; box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
        .t-fav-card:hover .t-fav-card-bg { opacity: 0.6; transform: scale(1.05); }
        .t-fav-card-content { position: relative; z-index: 2; padding: 15px; text-shadow: 0 2px 4px rgba(0,0,0,0.9); }
        .t-fav-card-header { margin-bottom: 6px; }
        .t-fav-card-script { font-weight: bold; font-size: 1.1em; color: #fff; margin-bottom: 2px; }
        .t-fav-card-char { font-size: 0.85em; color: #bfa15f; font-weight: 500; display:flex; align-items:center; gap:5px; }
        .t-fav-card-snippet { font-size: 0.85em; color: rgba(255,255,255,0.8); line-height: 1.4; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 8px; font-style: italic; }
        .t-fav-card-footer { font-size: 0.75em; color: rgba(255,255,255,0.5); display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px; }

        .t-fav-reader { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #0b0b0b; z-index: 10; display: flex; flex-direction: column; transform: translateX(100%); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .t-fav-reader.show { transform: translateX(0); }
        .t-read-header { height: 60px; padding: 0 20px; border-bottom: 1px solid #333; display: flex; align-items: center; justify-content: space-between; background: #181818; }
        
        .t-read-body { flex-grow: 1; padding: 0; overflow-y: auto; color: #ccc; position: relative; background: #0b0b0b; }
        
        #t-read-capture-zone { 
            background: #0b0b0b; /* 导出时必须有背景色 */
            padding: 0; 
            width: 100%; 
            min-height: 100%; 
            font-size: 1.05em; 
            line-height: 1.6; 
            text-align: justify; 
            display: flex; 
            flex-direction: column; 
        }

        #t-read-content { width: 100%; min-height: 100%; flex-grow: 1; display: flex; flex-direction: column; }
        #t-read-content > div { flex-grow: 1; margin: 0 !important; width: 100% !important; max-width: none !important; border-radius: 0 !important; border: none !important; min-height: 100%; box-sizing: border-box; }
        
        .t-fav-empty { text-align: center; color: #555; margin-top: 50px; grid-column: 1/-1; }

        @media screen and (max-width: 600px) {
            .t-fav-toolbar { flex-direction: column; height: auto; padding: 10px; align-items: stretch; }
            .t-fav-search { width: 100%; }
            .t-read-meta-text { max-width: 120px; }
        }
    </style>`;

    const html = `
    ${style}
    <div class="t-box t-fav-container" id="t-favs-view">
        <div class="t-header" style="flex-shrink:0;">
            <span class="t-title-main">📖 收藏画廊</span>
            <span class="t-close" id="t-fav-close">&times;</span>
        </div>
        
        <div class="t-fav-toolbar">
            <div style="display:flex; align-items:center; gap:10px; flex-grow:1;">
                <i class="fa-solid fa-filter" style="color:#666;"></i>
                <select id="t-fav-filter-char" class="t-fav-filter-select">
                    ${charList.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <input type="text" id="t-fav-search" class="t-fav-search" placeholder="搜索关键词...">
                <button id="t-btn-img-mgr" class="t-tool-btn" title="管理角色背景图"><i class="fa-regular fa-image"></i> 图鉴</button>
            </div>
        </div>
        
        <div class="t-fav-grid-area">
            <div class="t-fav-grid" id="t-fav-grid"></div>
        </div>

        <div class="t-fav-reader" id="t-fav-reader">
            <div class="t-read-header">
                <div style="display:flex; align-items:center; gap:15px; overflow:hidden; flex-grow:1;">
                    <i class="fa-solid fa-chevron-left" id="t-read-back" style="cursor:pointer; font-size:1.2em; padding:5px; color:#aaa;"></i>
                    <div style="display:flex; flex-direction:column; justify-content:center; overflow:hidden;">
                        <div id="t-read-meta" class="t-read-meta-text" style="font-weight:bold; color:#ccc; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"></div>
                        <div id="t-read-index" style="font-size:0.75em; color:#666;">0 / 0</div>
                    </div>
                </div>
                <div style="display:flex; gap:10px; flex-shrink:0;">
                    <button class="t-tool-btn" id="t-read-img" title="导出图片"><i class="fa-solid fa-camera"></i></button>
                    <button class="t-tool-btn" id="t-read-code" title="复制HTML"><i class="fa-solid fa-code"></i></button>
                    <button class="t-tool-btn" id="t-read-del-one" title="删除" style="color:#ff6b6b; border-color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <div class="t-read-body">
                <div id="t-read-capture-zone">
                    <div id="t-read-content"></div>
                </div>
            </div>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // --- 核心逻辑 ---

    const renderGrid = () => {
        const grid = $("#t-fav-grid");
        grid.empty();
        const currentMap = getExtData().character_map || {};
        const targetChar = $("#t-fav-filter-char").val();
        const search = $("#t-fav-search").val().toLowerCase();

        currentFilteredList = favs.filter(f => {
            if (targetChar !== "全部角色" && f._meta.char !== targetChar) return false;
            if (search && !f.title.toLowerCase().includes(search) && !f.html.toLowerCase().includes(search)) return false;
            return true;
        });

        if (currentFilteredList.length === 0) {
            grid.append('<div class="t-fav-empty">没有找到相关收藏</div>');
            return;
        }

        currentFilteredList.forEach((item, idx) => {
            const snippet = getSnippet(item.html);
            const charName = item._meta.char;
            let bgUrl = currentMap[charName];
            if (!bgUrl) bgUrl = item.avatar;
            const bgClass = bgUrl ? '' : 'no-img';
            const bgStyle = bgUrl ? `background-image: url('${bgUrl}')` : '';

            const card = $(`
                <div class="t-fav-card">
                    <div class="t-fav-card-bg ${bgClass}" style="${bgStyle}"></div>
                    <div class="t-fav-card-overlay"></div>
                    <div class="t-fav-card-content">
                        <div class="t-fav-card-header">
                            <div class="t-fav-card-script">${item._meta.script}</div>
                            <div class="t-fav-card-char"><i class="fa-solid fa-user-tag" style="font-size:0.8em"></i> ${charName}</div>
                        </div>
                        <div class="t-fav-card-snippet">${snippet}</div>
                        <div class="t-fav-card-footer"><span>${item.date.split(' ')[0]}</span></div>
                    </div>
                </div>
            `);
            card.on("click", () => loadReaderItem(idx));
            grid.append(card);
        });
    };

    const loadReaderItem = (index) => {
        if (index < 0 || index >= currentFilteredList.length) return;
        currentIndex = index;
        const item = currentFilteredList[index];
        currentFavId = item.id;
        $("#t-read-meta").text(item.title);
        $("#t-read-index").text(`${index + 1} / ${currentFilteredList.length}`);
        $("#t-read-content").html(item.html);
        $("#t-fav-reader").addClass("show");
    };

    // --- 事件绑定 ---
    $("#t-fav-filter-char, #t-fav-search").on("input change", renderGrid);
    $("#t-btn-img-mgr").on("click", () => { openCharImageManager(() => { renderGrid(); }); });
    $("#t-read-back").on("click", () => $("#t-fav-reader").removeClass("show"));

    let touchStartX = 0; let touchStartY = 0;
    const readerBody = $(".t-read-body");
    readerBody.on("touchstart", (e) => { touchStartX = e.originalEvent.touches[0].clientX; touchStartY = e.originalEvent.touches[0].clientY; });
    readerBody.on("touchend", (e) => {
        const touchEndX = e.originalEvent.changedTouches[0].clientX; const touchEndY = e.originalEvent.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX; const diffY = touchEndY - touchStartY;
        if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 2) {
            if (diffX > 0) { if (currentIndex > 0) loadReaderItem(currentIndex - 1); }
            else { if (currentIndex < currentFilteredList.length - 1) loadReaderItem(currentIndex + 1); }
        }
    });

    $("#t-read-code").on("click", () => {
        navigator.clipboard.writeText($("#t-read-content").html());
        if (window.toastr) toastr.success("源码已复制");
    });

    // [核心修复] 使用 html-to-image 库 + 原地展开截图法
    $("#t-read-img").on("click", async function () {
        const btn = $(this);
        const originalHtml = btn.html();

        try {
            btn.prop("disabled", true).html('<i class="fa-solid fa-spinner fa-spin"></i>');

            // 1. 加载 html-to-image (更现代、更稳定的库)
            if (typeof htmlToImage === 'undefined') {
                if (window.toastr) toastr.info("正在加载组件...", "Titania");
                // 注意：这里使用 unpkg 或 cdnjs 加载
                await $.getScript("https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js");
            }

            const element = document.getElementById("t-read-capture-zone");

            // 2. 准备：原地展开 (Expand)
            // 保存原始样式以便恢复
            const originalHeight = element.style.height;
            const originalOverflow = element.style.overflow;

            // 强制展开，以便截取全部内容
            // 注意：我们要操作的是父容器 .t-read-body 还是 zone？
            // 实际上 html-to-image 只要目标节点够大就行

            // 我们直接对 zone 进行操作，确保它显示完全
            // 如果内容很长，我们可能需要临时调整父容器的 overflow
            const parent = element.parentElement; // .t-read-body
            const originalParentOverflow = parent.style.overflow;

            parent.style.overflow = "visible"; // 允许溢出显示
            element.style.height = "auto";     // 自动高度

            // 3. 生成图片
            // html-to-image 的 toPng 方法
            const dataUrl = await htmlToImage.toPng(element, {
                backgroundColor: '#0b0b0b', // 强制背景色
                pixelRatio: 2,              // 2倍高清
                skipAutoScale: true
            });

            // 4. 恢复样式 (Restore)
            parent.style.overflow = originalParentOverflow;
            element.style.height = originalHeight;

            // 5. 下载
            const link = document.createElement('a');
            link.download = `Titania_${new Date().getTime()}.png`;
            link.href = dataUrl;
            link.click();

            if (window.toastr) toastr.success("图片导出成功");

        } catch (e) {
            console.error(e);
            alert("导出失败: " + e.message + "\n可能是浏览器不支持 SVG 转换或内存不足。");
            // 发生错误也要尝试恢复样式
            const element = document.getElementById("t-read-capture-zone");
            if (element) {
                element.parentElement.style.overflow = "";
                element.style.height = "";
            }
        } finally {
            btn.prop("disabled", false).html(originalHtml);
        }
    });

    $("#t-read-del-one").on("click", () => {
        if (confirm("确定删除此条收藏？")) {
            const d = getExtData();
            d.favs = d.favs.filter(x => x.id !== currentFavId);
            saveExtData();
            favs.splice(0, favs.length, ...d.favs);
            renderGrid();
            if (currentFilteredList.length === 0) {
                $("#t-fav-reader").removeClass("show");
            } else {
                let newIdx = currentIndex;
                if (newIdx >= currentFilteredList.length) newIdx = currentFilteredList.length - 1;
                loadReaderItem(newIdx);
            }
        }
    });

    const closeWindow = () => {
        $("#t-favs-view").remove();
        $("#t-main-view").css("display", "flex");
    };

    $("#t-fav-close").on("click", closeWindow);

    renderGrid();
}

// [新增] 角色图鉴管理器
function openCharImageManager(onCloseCallback) {
    const data = getExtData();
    // 确保 map 存在
    if (!data.character_map) data.character_map = {};

    // 1. 提取所有收藏中出现过的角色名
    const favs = data.favs || [];
    const charNames = new Set();
    favs.forEach(f => {
        // 简单的解析逻辑，假设 title 格式为 "剧本名 - 角色名"
        const parts = (f.title || "").split(' - ');
        if (parts.length >= 2) charNames.add(parts[parts.length - 1].trim());
    });
    const sortedChars = [...charNames].sort();

    // 2. 辅助函数：尝试从 SillyTavern 系统中查找角色头像
    const tryFindSystemAvatar = (charName) => {
        // 尝试多种来源查找
        let foundAvatar = null;
        try {
            // 来源 A: SillyTavern 上下文
            if (SillyTavern && SillyTavern.getContext) {
                const ctx = SillyTavern.getContext();
                if (ctx.characters) {
                    // ctx.characters 是个对象，key 是 ID
                    Object.values(ctx.characters).forEach(c => {
                        if (c.name === charName && c.avatar) foundAvatar = c.avatar;
                    });
                }
            }
            // 来源 B: window.characters (ST 全局变量，通常是数组或对象)
            if (!foundAvatar && typeof window.characters !== 'undefined') {
                const chars = Array.isArray(window.characters) ? window.characters : Object.values(window.characters);
                const match = chars.find(c => c.name === charName || (c.data && c.data.name === charName));
                if (match) foundAvatar = match.avatar;
            }
        } catch (e) { console.error("Titania: Auto-find avatar failed", e); }

        // 如果找到了，通常 ST 返回的是文件名（如 "Alice.png"），我们需要补全路径
        // ST 的标准头像路径通常是 'characters/' + filename
        if (foundAvatar && !foundAvatar.startsWith("http") && !foundAvatar.startsWith("data:")) {
            // 简单的防重复处理
            if (!foundAvatar.includes("/")) foundAvatar = `characters/${foundAvatar}`;
        }
        return foundAvatar;
    };

    const style = `
    <style>
        .t-img-mgr-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 50; display: flex; justify-content: center; align-items: center; animation: fadeIn 0.2s; }
        .t-img-mgr-box { width: 600px; max-width: 95%; height: 70vh; background: #1e1e1e; border: 1px solid #444; border-radius: 8px; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
        .t-img-list { flex-grow: 1; overflow-y: auto; padding: 15px; }
        .t-img-item { display: flex; align-items: center; background: #252525; padding: 10px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #333; gap: 15px; }
        .t-img-preview { width: 60px; height: 60px; border-radius: 4px; background-color: #111; background-size: cover; background-position: center; border: 1px solid #444; flex-shrink: 0; position: relative; }
        .t-img-preview.no-img::after { content: "无图"; position: absolute; top:0; left:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:#555; font-size:0.8em; }
        
        .t-img-info { flex-grow: 1; min-width: 0; }
        .t-img-name { font-weight: bold; color: #eee; font-size: 1.1em; margin-bottom: 5px; }
        .t-img-path { font-size: 0.8em; color: #777; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        
        .t-img-actions { display: flex; gap: 8px; flex-shrink: 0; }
        .t-act-btn { padding: 6px 10px; border: 1px solid #444; background: #333; color: #ccc; border-radius: 4px; cursor: pointer; font-size: 0.85em; transition: 0.2s; }
        .t-act-btn:hover { background: #444; color: #fff; border-color: #666; }
        .t-act-btn.auto { color: #bfa15f; border-color: rgba(191, 161, 95, 0.3); }
        .t-act-btn.auto:hover { background: rgba(191, 161, 95, 0.1); }
    </style>`;

    const html = `
    ${style}
    <div class="t-img-mgr-overlay" id="t-img-mgr">
        <div class="t-img-mgr-box">
            <div class="t-header">
                <span class="t-title-main">🖼️ 角色图鉴管理</span>
                <span class="t-close" id="t-img-close">&times;</span>
            </div>
            <div style="padding:10px 15px; background:#2a2a2a; color:#888; font-size:0.85em; border-bottom:1px solid #333;">
                <i class="fa-solid fa-circle-info"></i> 设置图片后，该角色所有收藏卡片将自动使用此背景。优先读取“图鉴设置”，其次读取“单卡数据”。
            </div>
            <div class="t-img-list" id="t-img-list-container"></div>
            <div style="padding:15px; border-top:1px solid #333; text-align:right;">
                <button class="t-btn primary" id="t-img-save">💾 保存并应用</button>
            </div>
        </div>
        <!-- 隐藏的文件上传 input -->
        <input type="file" id="t-img-upload-input" accept="image/*" style="display:none;">
    </div>`;

    $("#t-favs-view").append(html);

    // 临时存储编辑状态
    const tempMap = JSON.parse(JSON.stringify(data.character_map));
    let currentEditChar = null; // 用于记录当前正在给谁上传图片

    const renderList = () => {
        const $list = $("#t-img-list-container");
        $list.empty();

        if (sortedChars.length === 0) {
            $list.append('<div style="text-align:center; padding:30px; color:#555;">暂无角色数据，请先去收藏一些剧本吧~</div>');
            return;
        }

        sortedChars.forEach(char => {
            const currentImg = tempMap[char] || "";
            const hasImg = !!currentImg;
            const bgStyle = hasImg ? `background-image: url('${currentImg}')` : '';

            const $row = $(`
                <div class="t-img-item">
                    <div class="t-img-preview ${hasImg ? '' : 'no-img'}" style="${bgStyle}"></div>
                    <div class="t-img-info">
                        <div class="t-img-name">${char}</div>
                        <div class="t-img-path">${hasImg ? (currentImg.startsWith('data:') ? 'Base64 Image' : currentImg) : '未设置背景'}</div>
                    </div>
                    <div class="t-img-actions">
                        <button class="t-act-btn auto btn-auto-find" title="尝试从系统角色列表抓取头像" data-char="${char}"><i class="fa-solid fa-wand-magic-sparkles"></i> 自动</button>
                        <button class="t-act-btn btn-upload" title="上传本地图片" data-char="${char}"><i class="fa-solid fa-upload"></i></button>
                        <button class="t-act-btn btn-url" title="输入图片 URL" data-char="${char}"><i class="fa-solid fa-link"></i></button>
                        ${hasImg ? `<button class="t-act-btn btn-clear" title="清除" data-char="${char}" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>` : ''}
                    </div>
                </div>
            `);
            $list.append($row);
        });

        // 绑定事件
        // 1. 自动抓取
        $(".btn-auto-find").on("click", function () {
            const char = $(this).data("char");
            const avatar = tryFindSystemAvatar(char);
            if (avatar) {
                tempMap[char] = avatar;
                if (window.toastr) toastr.success(`已抓取到 ${char} 的头像`, "成功");
                renderList();
            } else {
                alert(`未在当前加载的系统中找到角色 [${char}] 的信息。\n请确保该角色已在 SillyTavern 角色列表中。`);
            }
        });

        // 2. 上传
        $(".btn-upload").on("click", function () {
            currentEditChar = $(this).data("char");
            $("#t-img-upload-input").click();
        });

        // 3. URL
        $(".btn-url").on("click", function () {
            const char = $(this).data("char");
            const oldVal = tempMap[char] || "";
            const newVal = prompt(`请输入 [${char}] 的图片链接 (URL):`, oldVal);
            if (newVal !== null) {
                tempMap[char] = newVal.trim();
                renderList();
            }
        });

        // 4. 清除
        $(".btn-clear").on("click", function () {
            const char = $(this).data("char");
            delete tempMap[char];
            renderList();
        });
    };

    // 文件上传处理
    $("#t-img-upload-input").on("change", function () {
        const file = this.files[0];
        if (!file || !currentEditChar) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            tempMap[currentEditChar] = e.target.result; // Base64
            renderList();
            $("#t-img-upload-input").val(""); // 重置
        };
        reader.readAsDataURL(file);
    });

    // 保存逻辑
    $("#t-img-save").on("click", () => {
        data.character_map = tempMap;
        saveExtData();
        $("#t-img-mgr").remove();
        if (onCloseCallback) onCloseCallback(); // 回调刷新主界面
        if (window.toastr) toastr.success("角色图鉴已更新");
    });

    $("#t-img-close").on("click", () => $("#t-img-mgr").remove());

    renderList();
}

// --- 自动化与初始化 ---
// [替换] 监听生成结束事件，根据策略触发自动演绎
async function onGenerationEnded() {
    const extData = getExtData();
    const cfg = extData.config || {};

    // 1. 基础开关检查
    if (!extension_settings[extensionName].enabled || !cfg.auto_generate) return;

    // 2. 状态检查：如果正在通过本插件生成，则忽略（防止死循环）
    if (isGenerating || $("#t-overlay").length > 0) return;

    // 3. 获取当前聊天上下文的最后一条消息
    if (!SillyTavern || !SillyTavern.getContext) return;
    const context = SillyTavern.getContext();
    const chat = context.chat;

    if (!chat || chat.length === 0) return;
    const lastMsg = chat[chat.length - 1];

    // 4. 严格过滤：不是用户发的、不是系统指令、不是隐藏消息
    if (lastMsg.is_user) return;
    if (lastMsg.is_system) return;
    if (lastMsg.is_hidden) return;

    // 5. 概率检查
    const chance = cfg.auto_chance || 50;
    if (Math.random() * 100 > chance) return;

    // --- 核心修改：新的策略池构建逻辑 ---

    // 辅助：获取剧本的统一分类名
    const getCat = (s) => s.category || (s._type === 'preset' ? '官方预设' : '未分类');

    let pool = [];
    const autoMode = cfg.auto_mode || "follow"; // 'follow' 或 'category'

    if (autoMode === 'category') {
        // 【策略B：指定分类白名单】
        // 获取用户勾选的分类列表 (数组)
        const allowedCats = cfg.auto_categories || [];

        if (allowedCats.length === 0) {
            console.log("Titania Auto: Category mode selected but whitelist is empty.");
            return;
        }

        // 筛选出属于白名单分类的剧本
        pool = runtimeScripts.filter(s => allowedCats.includes(getCat(s)));

    } else {
        // 【策略A：默认跟随主界面】
        // 读取当前 UI 的模式（Echo 或 Parallel）
        // ui_mode_echo 默认为 true (即 Echo)
        const isEcho = (extData.ui_mode_echo !== false);
        const targetMode = isEcho ? 'echo' : 'parallel';

        pool = runtimeScripts.filter(s => s.mode === targetMode);
    }

    // 6. 执行抽取
    if (pool.length === 0) return;
    const randomScript = pool[Math.floor(Math.random() * pool.length)];

    console.log(`Titania Auto: Triggered [${autoMode}] -> Use script: ${randomScript.name}`);

    // 延迟执行
    setTimeout(() => {
        handleGenerate(randomScript.id, true);
    }, 500);
}

async function initEchoTheater() {
    console.log("Titania Echo v4.0: Enabled.");

    // 自动迁移逻辑 (保持不变)
    const extData = getExtData();
    if ((!extData.config || Object.keys(extData.config).length === 0) && localStorage.getItem(LEGACY_KEY_CFG)) {
        try {
            console.log("Titania: Migrating legacy data...");
            const oldCfg = JSON.parse(localStorage.getItem(LEGACY_KEY_CFG));
            const oldScripts = JSON.parse(localStorage.getItem(LEGACY_KEY_SCRIPTS));
            const oldFavs = JSON.parse(localStorage.getItem(LEGACY_KEY_FAVS));
            let migrated = false;
            if (oldCfg) { extData.config = oldCfg; migrated = true; }
            if (oldScripts) { extData.user_scripts = oldScripts; migrated = true; }
            if (oldFavs) { extData.favs = oldFavs; migrated = true; }
            if (migrated) { saveExtData(); if (window.toastr) toastr.success("数据已迁移至服务端", "Titania Echo"); }
        } catch (e) { console.error("Titania: Migration failed", e); }
    }

    loadScripts();
    createFloatingButton();

    // [修改] 监听 GENERATION_ENDED 而非 MESSAGE_RECEIVED
    eventSource.on(event_types.GENERATION_ENDED, onGenerationEnded);
}


function disableEchoTheater() {
    console.log("Titania Echo v4.0: Disabled.");
    $("#titania-float-btn").remove();
    $("#t-overlay").remove();

    // [修改] 移除监听
    eventSource.off(event_types.GENERATION_ENDED, onGenerationEnded);
}

async function loadExtensionSettings() {
    extension_settings[extensionName] = extension_settings[extensionName] || {};
    if (Object.keys(extension_settings[extensionName]).length === 0) {
        Object.assign(extension_settings[extensionName], defaultSettings);
    }
    $("#enable_echo_theater").prop("checked", extension_settings[extensionName].enabled);
    $("#enable_echo_theater").on("input", function () {
        const isEnabled = $(this).prop("checked");
        extension_settings[extensionName].enabled = isEnabled;
        saveSettingsDebounced();
        if (isEnabled) initEchoTheater(); else disableEchoTheater();
    });
    if (extension_settings[extensionName].enabled) {
        initEchoTheater();
    }
}

jQuery(async () => {
    const settingsHtml = await $.get(`${extensionFolderPath}/settings.html`);
    $("#extensions_settings2").append(settingsHtml);
    loadExtensionSettings();
});