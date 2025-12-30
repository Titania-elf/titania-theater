// index.js

// --- ST 核心模块引用 ---
import { extension_settings } from "../../../extensions.js";
import { saveSettingsDebounced, eventSource, event_types } from "../../../../script.js";

// --- 内部模块引用 ---
import { extensionName, defaultSettings, extensionFolderPath, LEGACY_KEYS, CURRENT_VERSION, CHANGELOG } from "./src/config/defaults.js";
import { getExtData, saveExtData } from "./src/utils/storage.js";
import { loadCssFiles } from "./src/utils/dom.js";
import { GlobalState } from "./src/core/state.js";
import { loadScripts } from "./src/core/scriptData.js";
import { handleGenerate } from "./src/core/api.js";
import { createFloatingButton } from "./src/ui/floatingBtn.js";

// --- 自动化监听逻辑 ---

/**
 * 监听生成结束事件，根据策略触发自动演绎
 */
async function onGenerationEnded() {
    const extData = getExtData();
    const cfg = extData.config || {};

    // 1. 基础开关检查
    if (!extension_settings[extensionName].enabled || !cfg.auto_generate) return;

    // 2. 状态检查：如果正在通过本插件生成，则忽略（防止死循环）
    if (GlobalState.isGenerating || $("#t-overlay").length > 0) return;

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
        pool = GlobalState.runtimeScripts.filter(s => allowedCats.includes(getCat(s)));

    } else {
        // 【策略A：默认跟随主界面】
        // 读取当前 UI 的模式（Echo 或 Parallel）
        // ui_mode_echo 默认为 true (即 Echo)
        const isEcho = (extData.ui_mode_echo !== false);
        const targetMode = isEcho ? 'echo' : 'parallel';

        pool = GlobalState.runtimeScripts.filter(s => s.mode === targetMode);
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

// --- 初始化与销毁 ---

async function initEchoTheater() {
    console.log(`Titania Echo v${CURRENT_VERSION}: Enabled.`);

    // 自动迁移逻辑 (从 v3 迁移到 v4)
    const extData = getExtData();
    // 检查是否有配置，如果没有且本地存储有旧版 Key，则尝试迁移
    if ((!extData.config || Object.keys(extData.config).length === 0) && localStorage.getItem(LEGACY_KEYS.CFG)) {
        try {
            console.log("Titania: Migrating legacy data...");
            const oldCfg = JSON.parse(localStorage.getItem(LEGACY_KEYS.CFG));
            const oldScripts = JSON.parse(localStorage.getItem(LEGACY_KEYS.SCRIPTS));
            const oldFavs = JSON.parse(localStorage.getItem(LEGACY_KEYS.FAVS));

            let migrated = false;
            if (oldCfg) { extData.config = oldCfg; migrated = true; }
            if (oldScripts) { extData.user_scripts = oldScripts; migrated = true; }
            if (oldFavs) { extData.favs = oldFavs; migrated = true; }

            if (migrated) {
                saveExtData();
                if (window.toastr) toastr.success("数据已迁移至服务端", "Titania Echo");
            }
        } catch (e) { console.error("Titania: Migration failed", e); }
    }

    // 加载剧本数据
    loadScripts();

    // 创建悬浮球
    createFloatingButton();

    // 监听生成结束事件
    eventSource.on(event_types.GENERATION_ENDED, onGenerationEnded);
}

function disableEchoTheater() {
    console.log(`Titania Echo v${CURRENT_VERSION}: Disabled.`);

    // 移除 UI
    $("#titania-float-btn").remove();
    $("#titania-float-style").remove(); // 虽然用了CSS文件，但 floatingBtn.js 里还是保留了清除逻辑以防万一
    $("#t-overlay").remove();

    // 移除监听
    eventSource.off(event_types.GENERATION_ENDED, onGenerationEnded);
}

async function loadExtensionSettings() {
    // 确保配置对象存在
    extension_settings[extensionName] = extension_settings[extensionName] || {};
    if (Object.keys(extension_settings[extensionName]).length === 0) {
        Object.assign(extension_settings[extensionName], defaultSettings);
    }

    // 绑定设置面板的开关 (settings.html 中的 checkbox)
    $("#enable_echo_theater").prop("checked", extension_settings[extensionName].enabled);
    $("#enable_echo_theater").on("input", function () {
        const isEnabled = $(this).prop("checked");
        extension_settings[extensionName].enabled = isEnabled;
        saveSettingsDebounced();
        if (isEnabled) initEchoTheater(); else disableEchoTheater();
    });

    // 如果已启用，则初始化
    if (extension_settings[extensionName].enabled) {
        initEchoTheater();
    }

    // 版本更新检测
    checkVersionUpdate();
}

/**
 * 检测版本更新并显示 NEW 徽章
 */
function checkVersionUpdate() {
    const extData = getExtData();
    const lastSeenVersion = extData.last_seen_version || "0.0.0";

    // 比较版本号
    if (compareVersions(CURRENT_VERSION, lastSeenVersion) > 0) {
        // 有新版本，显示 NEW 徽章
        $("#titania-new-badge").show();

        // 点击徽章显示更新日志
        $("#titania-new-badge").off("click").on("click", showChangelog);
    } else {
        $("#titania-new-badge").hide();
    }
}

/**
 * 比较版本号
 * @returns 1 if v1 > v2, -1 if v1 < v2, 0 if equal
 */
function compareVersions(v1, v2) {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
        const p1 = parts1[i] || 0;
        const p2 = parts2[i] || 0;
        if (p1 > p2) return 1;
        if (p1 < p2) return -1;
    }
    return 0;
}

/**
 * 显示更新日志弹窗
 */
function showChangelog() {
    if ($(".titania-changelog-overlay").length) return;

    const html = `
    <div class="titania-changelog-overlay">
        <div class="titania-changelog-box">
            <div class="titania-changelog-header">
                <span>🎉 回声小剧场 v${CURRENT_VERSION} 更新</span>
                <span class="titania-changelog-close">&times;</span>
            </div>
            <div class="titania-changelog-body">
                ${CHANGELOG}
            </div>
            <div class="titania-changelog-footer">
                <button class="titania-changelog-btn">我知道了</button>
            </div>
        </div>
    </div>`;

    $("body").append(html);

    // 关闭事件
    $(".titania-changelog-close, .titania-changelog-btn").on("click", () => {
        // 记录已读版本
        const extData = getExtData();
        extData.last_seen_version = CURRENT_VERSION;
        saveExtData();

        // 隐藏徽章
        $("#titania-new-badge").hide();

        // 关闭弹窗
        $(".titania-changelog-overlay").remove();
    });

    // 点击遮罩关闭
    $(".titania-changelog-overlay").on("click", function (e) {
        if (e.target === this) {
            $(".titania-changelog-close").click();
        }
    });
}

// --- 入口 ---
jQuery(async () => {
    // 1. 加载 CSS
    loadCssFiles();

    // 2. 加载设置面板 HTML
    // 注意：这里我们只加载 settings.html，其他的 UI 都在各自的 JS 中动态生成
    try {
        const settingsHtml = await $.get(`${extensionFolderPath}/settings.html`);
        $("#extensions_settings2").append(settingsHtml);

        // 3. 加载扩展设置并启动
        loadExtensionSettings();
    } catch (e) {
        console.error("Titania Echo: Failed to load settings.html", e);
    }
});