// src/config/defaults.js

export const extensionName = "Titania_Theater_Echo";
export const extensionFolderPath = `scripts/extensions/third-party/titania-theater`;

// 当前版本号 (每次更新时修改这里)
export const CURRENT_VERSION = "3.0.0";

// 更新日志 (HTML 格式)
export const CHANGELOG = `
<h3>v3.0.0 正式版 🎉</h3>
<p>本次为大版本更新，包含多项新功能与优化：</p>

<h4>✨ 新功能</h4>
<ul>
    <li>🔄 <b>主界面快捷切换 API 方案</b> - 快速在不同 API 配置间切换</li>
    <li>🎨 <b>悬浮球自定义浅色</b> - 支持自定义悬浮球的浅色主题</li>
    <li>🔔 <b>插件更新提醒</b> - 版本更新时自动提示</li>
    <li>⏱️ <b>生成计时统计</b> - 实时显示生成耗时</li>
    <li>📚 <b>世界书条目选择读取</b> - 手动选择读取哪些蓝灯条目</li>
    <li>📤 <b>导出剧本</b> - 支持导出剧本文件</li>
    <li>📁 <b>批量移动剧本到分类</b> - 批量管理剧本分类</li>
    <li>🔢 <b>自定义排序</b> - 灵活的剧本排序功能</li>
</ul>

<h4>🔧 优化改进</h4>
<ul>
    <li>📝 <b>聊天记录读取优化</b> - 优先提取 &lt;content&gt; 标签的内容</li>
    <li>🎭 <b>升级内置系统提示词</b> - 模型生成内容更加美观</li>
    <li>✏️ <b>优化底部按钮</b> - 新建剧本功能移至主界面，方便创作者快速新建、测试及修改提示词</li>
</ul>
`;

// 旧版 Key (用于迁移检测)
export const LEGACY_KEYS = {
    CFG: "Titania_Config_v3",
    SCRIPTS: "Titania_UserScripts_v3",
    FAVS: "Titania_Favs_v3"
};

export const defaultSettings = {
    enabled: true,
    config: {
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
        stream: true,
        auto_generate: false,
        auto_chance: 50,
        auto_mode: "follow",
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
        color_bg: "#2b2b2b",   // [新增] 球体背景色
        color_icon: "#ffffff", // [新增] 图标颜色
        color_notify_bg: "#2b2b2b", // [新增] 通知状态背景色
        size: 56
    },
    director: {
        length: "",
        perspective: "auto",
        style_ref: ""
    },
    // 世界书条目筛选配置
    worldinfo: {
        mode: "all",  // "all" = 读取全部蓝灯, "manual" = 手动选择
        char_selections: {}  // { "角色名": { "世界书名": [uid1, uid2, ...] } }
    }
};