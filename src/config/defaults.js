// src/config/defaults.js

export const extensionName = "Titania_Theater_Echo";
export const extensionFolderPath = `scripts/extensions/third-party/titania-theater`;

// 当前版本号 (每次更新时修改这里)
export const CURRENT_VERSION = "3.0.1";

// 更新日志 (HTML 格式)
export const CHANGELOG = `
<h3>v3.0.1 更新 🔄</h3>
<p>本次更新新增自动续写功能，解决部分 API 超时截断问题：</p>

<h4>✨ 新功能</h4>
<ul>
    <li>🔄 <b>自动续写功能</b> - 当 API 超时导致内容截断时，自动检测并发送续写请求</li>
    <li>🏷️ <b>智能截断检测</b> - 支持 HTML 标签闭合检测、句子完整性检测两种模式</li>
    <li>🔗 <b>内容无缝拼接</b> - 自动合并多次生成的内容，可选显示续写标记</li>
    <li>⚙️ <b>灵活配置</b> - 可设置最大续写次数、检测模式等参数</li>
</ul>

<h4>💡 使用说明</h4>
<ul>
    <li>在 <b>设置 → 自动化</b> 中开启"自动续写"</li>
    <li>推荐使用 <b>HTML 标签检测</b> 模式</li>
    <li>最大续写次数建议设为 <b>2 次</b></li>
</ul>

<hr style="border-color:#333; margin:15px 0;">

<details style="cursor:pointer;">
<summary style="color:#888; font-size:0.9em;">📜 查看 v3.0.0 更新日志</summary>
<div style="margin-top:10px; padding-left:10px; border-left:2px solid #444;">
<h4>✨ v3.0.0 新功能</h4>
<ul>
    <li>🔄 主界面快捷切换 API 方案</li>
    <li>🎨 悬浮球自定义浅色主题</li>
    <li>🔔 插件更新提醒</li>
    <li>⏱️ 生成计时统计</li>
    <li>📚 世界书条目选择读取</li>
    <li>📤 导出剧本</li>
    <li>📁 批量移动剧本到分类</li>
    <li>🔢 自定义排序</li>
</ul>
</div>
</details>
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
    },
    // 自动续写配置 (应对 API 超时截断)
    auto_continue: {
        enabled: false,           // 是否启用自动续写
        max_retries: 2,           // 最大续写次数
        detection_mode: "html",   // 检测模式: "html" | "sentence" | "both"
        show_indicator: true      // 是否在内容中显示续写标记
    }
};