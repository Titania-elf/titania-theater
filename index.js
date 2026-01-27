/**
 * Titania Theater (回声小剧场)
 * Bundled with esbuild
 * 
 * 这是打包后的单文件版本。
 * 源代码请查看：https://github.com/Titania-elf/titania-theater
 */

var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/config/defaults.js
var extensionName, extensionFolderPath, CURRENT_VERSION, GITHUB_REPO, GITHUB_API_URL, GITHUB_CHANGELOG_API_URL, CHANGELOG, LEGACY_KEYS, defaultSettings;
var init_defaults = __esm({
  "src/config/defaults.js"() {
    extensionName = "Titania_Theater_Echo";
    extensionFolderPath = `scripts/extensions/third-party/titania-theater`;
    CURRENT_VERSION = "3.2.3";
    GITHUB_REPO = "Titania-elf/titania-theater";
    GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/manifest.json`;
    GITHUB_CHANGELOG_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/changelog.json`;
    CHANGELOG = {
      "3.2.3": "\u{1F9E0} \u667A\u80FD\u8BBE\u5B9A\u63D0\u53D6\uFF1AAI \u5206\u6790\u5BF9\u8BDD\u5185\u5BB9\u81EA\u52A8\u63D0\u53D6\u4E16\u754C\u89C2\u8BBE\u5B9A\uFF0C\u5BA1\u6838\u540E\u5BFC\u5165\u4E16\u754C\u4E66<br>\u2B50 \u6536\u85CF\u5939\u589E\u5F3A\uFF1A\u652F\u6301\u6279\u91CF\u5220\u9664\u3001\u91CD\u547D\u540D\u6536\u85CF\u6761\u76EE<br>\u{1F3AF} \u60AC\u6D6E\u83DC\u5355\u91CD\u8BBE\u8BA1\uFF1A\u6C34\u5E73\u56FE\u6807\u680F\u5E03\u5C40\uFF0C\u65B0\u589E\u8BBE\u7F6E\u5FEB\u6377\u5165\u53E3<br>\u{1F4DC} \u573A\u666F\u5386\u53F2\u961F\u5217\uFF1A\u4FDD\u5B58\u6700\u8FD1\u4F7F\u7528\u7684\u573A\u666F\uFF0C\u5FEB\u901F\u5207\u6362",
      "3.2.2": "\u{1F3A8} CSS \u4E3B\u9898\u65B9\u6848\u7BA1\u7406\uFF1A\u652F\u6301\u4FDD\u5B58\u591A\u4E2A\u81EA\u5B9A\u4E49 CSS \u4E3B\u9898\uFF0C\u968F\u65F6\u5207\u6362<br>\u{1F4CA} \u5BA1\u67E5\u7A97\u53E3\u5B9E\u65F6\u663E\u793A\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD<br>\u{1F527} \u4FEE\u590D\u5267\u672C\u7BA1\u7406\u5668\u5206\u7C7B\u6EDA\u52A8\u548C\u7B5B\u9009\u95EE\u9898<br>\u{1F4DD} \u5927\u5C4F\u7F16\u8F91\u6A21\u5F0F\u4F18\u5316\uFF1A\u9632\u6B62\u8BEF\u89E6\u5173\u95ED\u4E22\u5931\u5185\u5BB9\uFF0C\u624B\u673A\u7AEF\u5C45\u4E2D\u663E\u793A<br>\u{1F4E5} CSS \u5BFC\u5165\u4F18\u5148\u4F7F\u7528\u6587\u4EF6\u540D\u4F5C\u4E3A\u4E3B\u9898\u540D\u79F0",
      "3.2.1": "\u{1F512} \u5BFC\u5165\u524D\u81EA\u52A8\u5907\u4EFD\uFF1A\u5BFC\u5165\u5907\u4EFD\u65F6\u81EA\u52A8\u4E0B\u8F7D\u5F53\u524D\u6570\u636E\uFF0C\u9632\u6B62\u8BEF\u64CD\u4F5C\u8986\u76D6<br>\u{1F4DA} \u65B0\u589E User Persona \u4E16\u754C\u4E66\u652F\u6301\uFF1A\u83B7\u53D6\u7528\u6237\u89D2\u8272\u7ED1\u5B9A\u7684\u4E16\u754C\u4E66\u6761\u76EE<br>\u{1F4BE} \u4FEE\u590D\u6570\u636E\u5907\u4EFD\u529F\u80FD\uFF1A\u4F7F\u7528\u7ACB\u5373\u4FDD\u5B58\u786E\u4FDD\u6570\u636E\u6301\u4E45\u5316<br>\u{1F527} \u60AC\u6D6E\u7403\u79FB\u9664\u5F3A\u5236\u8D34\u8FB9\u5438\u9644\uFF1A\u53EF\u81EA\u7531\u62D6\u52A8\u5230\u4EFB\u610F\u4F4D\u7F6E"
    };
    LEGACY_KEYS = {
      CFG: "Titania_Config_v3",
      SCRIPTS: "Titania_UserScripts_v3",
      FAVS: "Titania_Favs_v3"
    };
    defaultSettings = {
      enabled: true,
      config: {
        active_profile_id: "default",
        profiles: [
          {
            id: "st_sync",
            name: "\u{1F517} \u8DDF\u968F SillyTavern (\u4E3B\u8FDE\u63A5)",
            type: "internal",
            readonly: true
          },
          {
            id: "default",
            name: "\u9ED8\u8BA4\u81EA\u5B9A\u4E49",
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
        content: "\u{1F3AD}",
        color_theme: "#bfa15f",
        color_notify: "#55efc4",
        color_bg: "#2b2b2b",
        // 球体背景色
        color_icon: "#ffffff",
        // 图标颜色
        color_notify_bg: "#2b2b2b",
        // 通知状态背景色
        border_color: "#90cdf4",
        // 球体边框颜色
        animation: "ripple",
        // 动画类型: ripple(脉冲波纹) | arc(电磁闪烁)
        size: 56,
        show_timer: true
        // 是否显示生成计时统计
      },
      director: {
        instruction: ""
        // 自由编辑的导演指令
      },
      // 世界书条目筛选配置
      worldinfo: {
        char_selections: {}
        // { "角色名": { "世界书名": [uid1, uid2, ...] } }
        // 用户选择的条目会被保存在这里，首次使用时默认全选
      },
      // 自动续写配置 (应对 API 超时截断)
      auto_continue: {
        enabled: false,
        // 是否启用自动续写
        max_retries: 2,
        // 最大续写次数
        detection_mode: "html",
        // 检测模式: "html" | "sentence" | "both"
        show_indicator: true
        // 是否在内容中显示续写标记
      },
      // 自定义系统提示词配置
      custom_prompts: {
        override_enabled: false,
        // 是否启用覆盖
        content_mode: "",
        // 内容优先模式的自定义系统提示词
        visual_mode: ""
        // 氛围美化模式的自定义系统提示词
      },
      // CSS 主题方案配置
      css_themes: {
        profiles: [
          { id: "default", name: "\u9ED8\u8BA4\u4E3B\u9898", css: "" }
        ],
        active_profile_id: "default"
      }
    };
  }
});

// src/utils/storage.js
import { extension_settings as extension_settings2 } from "../../../extensions.js";
import { saveSettingsDebounced, saveSettings } from "../../../../script.js";
function getExtData() {
  if (!extension_settings2[extensionName]) {
    extension_settings2[extensionName] = JSON.parse(JSON.stringify(defaultSettings));
  }
  return extension_settings2[extensionName];
}
function saveExtData() {
  saveSettingsDebounced();
}
async function saveExtDataImmediate() {
  try {
    await saveSettings();
    return true;
  } catch (e) {
    console.error("Titania: \u7ACB\u5373\u4FDD\u5B58\u5931\u8D25", e);
    return false;
  }
}
var init_storage = __esm({
  "src/utils/storage.js"() {
    init_defaults();
  }
});

// src/utils/dom.js
function loadCssFiles() {
  const styleId = "titania-theater-bundled-css";
  if (document.getElementById(styleId)) return;
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `/* Titania Theater - Bundled CSS */

/* === base.css === */
/* css/base.css - \u57FA\u7840\u7EC4\u4EF6\u4E0E\u5DE5\u5177\u7C7B */

:root {
    /* \u989C\u8272\u53D8\u91CF */
    --t-theme: #bfa15f;
    /* \u4E3B\u9898\u8272 (\u91D1\u8272) */
    --t-notify: #55efc4;
    /* \u901A\u77E5\u8272 (\u9752\u8272) */
    --t-bg-dark: #121212;
    /* \u6DF1\u8272\u80CC\u666F */
    --t-bg-panel: #1e1e1e;
    /* \u9762\u677F\u80CC\u666F */
    --t-border: #333;
    /* \u8FB9\u6846\u8272 */

    /* \u5B57\u4F53\u53D8\u91CF */
    /* \u5168\u5C40\u5B57\u4F53 - \u7528\u6237\u53EF\u81EA\u5B9A\u4E49\uFF0C\u5E94\u7528\u4E8E UI \u548C\u5185\u5BB9\u533A\u57DF */
    --t-font-global: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    /* \u7B49\u5BBD\u5B57\u4F53 - \u56FA\u5B9A\u7528\u4E8E\u4EE3\u7801\u7F16\u8F91\u5668\u548C\u65E5\u5FD7\uFF0C\u4E0D\u53D7\u7528\u6237\u8BBE\u7F6E\u5F71\u54CD */
    --t-font-mono: "Consolas", "Monaco", "Courier New", monospace;
}

/* \u906E\u7F69\u5C42 */
.t-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 20000;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
    /* \u5F3A\u5236\u56FA\u5B9A\u57FA\u51C6\u5B57\u53F7\uFF0C\u907F\u514D\u53D7 ST \u5168\u5C40\u5B57\u4F53\u5927\u5C0F\u8BBE\u7F6E\u5F71\u54CD */
    font-size: 12px !important;
}

/* \u901A\u7528\u7A97\u53E3\u5BB9\u5668 */
.t-box {
    position: relative;
    width: 95%;
    max-width: 650px;
    height: auto;
    max-height: 85vh;
    background: var(--t-bg-dark);
    border: 1px solid #555;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    color: #eee;
    font-family: var(--t-font-global);
    overflow: hidden;
}

/* \u9876\u90E8\u6807\u9898\u680F */
.t-header {
    padding: 12px 15px;
    border-bottom: 1px solid #444;
    background: #242530;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
}

.t-title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-left: 12px;
}

.t-title-container::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 4px;
    background: linear-gradient(to bottom, #ff9a9e, #fad0c4);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(255, 154, 158, 0.6);
}

.t-title-main {
    font-size: 1.4em;
    font-weight: 800;
    line-height: 1.1;
    background: linear-gradient(135deg, #e0c3fc 0%, #ff9a9e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
}

.t-title-sub {
    font-size: 0.55em;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-top: 2px;
    opacity: 0.7;
    font-weight: 300;
    background: linear-gradient(90deg, #ff9a9e, #e0c3fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* \u6309\u94AE */
.t-btn {
    background: #333;
    border: 1px solid #555;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: 0.2s;
}

.t-btn:hover {
    background: #444;
    border-color: #666;
}

.t-btn.primary {
    background: linear-gradient(90deg, #ff9a9e, #fecfef);
    color: #444;
    border: none;
}

.t-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.t-tool-btn {
    font-size: 0.75em;
    padding: 4px 10px;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #666;
    color: #ccc;
    cursor: pointer;
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: 0.2s;
}

.t-tool-btn:hover {
    background: #444;
    color: white;
}

.t-icon-btn {
    cursor: pointer;
    font-size: 1.2em;
    color: #aaa;
    margin-left: 15px;
    transition: color 0.3s;
}

.t-icon-btn:hover {
    color: #fff;
}

.t-close {
    cursor: pointer;
    font-size: 1.8em;
    line-height: 1;
    color: #888;
    transition: 0.2s;
    padding: 0 5px;
    margin-left: 15px;
}

.t-close:hover {
    color: #fff;
    transform: rotate(90deg);
}

/* \u8F93\u5165\u6846 (\u5F3A\u5236\u8986\u76D6\u4EAE\u8272\u4E3B\u9898) */
.t-box .t-input {
    background-color: #1a1a1a !important;
    color: #eeeeee !important;
    border: 1px solid #444 !important;
    border-radius: 4px;
    padding: 8px 10px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    transition: border 0.2s;
}

.t-box .t-input:focus {
    border-color: var(--t-theme) !important;
    background-color: #222 !important;
}

.t-box .t-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #111 !important;
}

textarea.t-input {
    font-family: var(--t-font-mono);
    line-height: 1.5;
    resize: vertical;
}

/* \u6EDA\u52A8\u6761 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
}

/* \u52A8\u753B */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* === floating.css === */
/* css/floating.css - \u60AC\u6D6E\u7403 */

#titania-float-btn {
    position: fixed;
    top: 100px;
    left: 20px;
    /* \u4F7F\u7528 CSS \u53D8\u91CF\u63A7\u5236\u5C3A\u5BF8 */
    width: var(--t-size, 56px);
    height: var(--t-size, 56px);
    font-size: calc(var(--t-size, 56px) * 0.46);

    padding: 3px;
    border-radius: 50%;
    /* \u4F7F\u7528 CSS \u53D8\u91CF\u63A7\u5236\u80CC\u666F\u989C\u8272\uFF08\u652F\u6301\u900F\u660E\u5EA6\uFF09 */
    background: var(--t-bg-color, #2b2b2b);
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
    /* \u4F7F\u7528 CSS \u53D8\u91CF\u63A7\u5236\u8FB9\u6846\u989C\u8272\uFF08\u652F\u6301\u900F\u660E\u5EA6\uFF09 */
    border: 2px solid var(--t-border-color-rgba, var(--t-border-color, #444));
    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    user-select: none;
    overflow: visible;
    box-sizing: border-box;
}

#titania-float-btn img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    pointer-events: none;
    position: relative;
    z-index: 2;
}

/* ===== \u52A0\u8F7D\u52A8\u753B\u6548\u679C ===== */

/* \u901A\u7528\u52A0\u8F7D\u72B6\u6001 - \u4FDD\u6301\u53EF\u4EA4\u4E92\u4EE5\u652F\u6301\u4FA7\u8FB9\u83DC\u5355 */
#titania-float-btn.t-loading {
    /* pointer-events: none; \u79FB\u9664\uFF0C\u6539\u4E3A\u5141\u8BB8\u70B9\u51FB\u5C55\u5F00\u4FA7\u8FB9\u83DC\u5355 */
}

/* ===== \u52A8\u753B 1: \u8109\u51B2\u6CE2\u7EB9 (Pulse Ripple) ===== */
@keyframes t-ripple-1 {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}

@keyframes t-ripple-2 {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    100% {
        transform: scale(2.2);
        opacity: 0;
    }
}

@keyframes t-ripple-3 {
    0% {
        transform: scale(1);
        opacity: 0.4;
    }

    100% {
        transform: scale(1.9);
        opacity: 0;
    }
}

#titania-float-btn.t-loading.t-anim-ripple {
    border-color: var(--t-border-color-rgba, var(--t-border-color, #90cdf4));
}

#titania-float-btn.t-loading.t-anim-ripple::before,
#titania-float-btn.t-loading.t-anim-ripple::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /* \u52A8\u753B\u6CE2\u7EB9\u4F7F\u7528\u4E0D\u900F\u660E\u7684\u8FB9\u6846\u989C\u8272\u4EE5\u4FDD\u6301\u53EF\u89C1\u6027 */
    border: 2px solid var(--t-border-color, #90cdf4);
    animation: t-ripple-1 1.5s ease-out infinite;
}

#titania-float-btn.t-loading.t-anim-ripple::after {
    animation: t-ripple-2 1.5s ease-out 0.5s infinite;
}

/* \u7B2C\u4E09\u5C42\u6CE2\u7EB9\u901A\u8FC7\u989D\u5916\u5143\u7D20\u5B9E\u73B0 */
#titania-float-btn.t-loading.t-anim-ripple .t-ripple-extra {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid var(--t-border-color, #90cdf4);
    animation: t-ripple-3 1.5s ease-out 1s infinite;
    pointer-events: none;
}

/* ===== \u52A8\u753B 2: \u7535\u78C1\u95EA\u70C1 (Arc Flash) ===== */
@keyframes t-arc-flash-1 {

    0%,
    90%,
    100% {
        opacity: 0;
    }

    92%,
    95% {
        opacity: 1;
    }
}

@keyframes t-arc-flash-2 {

    0%,
    80%,
    100% {
        opacity: 0;
    }

    82%,
    88% {
        opacity: 1;
    }
}

@keyframes t-arc-rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

#titania-float-btn.t-loading.t-anim-arc {
    border-color: var(--t-border-color-rgba, var(--t-border-color, #a29bfe));
}

#titania-float-btn.t-loading.t-anim-arc::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    border-radius: 50%;
    background:
        radial-gradient(circle at 20% 0%, var(--t-border-color, #a29bfe) 0%, transparent 30%),
        radial-gradient(circle at 80% 100%, var(--t-border-color, #a29bfe) 0%, transparent 30%);
    animation: t-arc-rotate 1s linear infinite, t-arc-flash-1 0.3s ease infinite;
    opacity: 0.8;
}

#titania-float-btn.t-loading.t-anim-arc::after {
    content: "";
    position: absolute;
    width: 130%;
    height: 130%;
    border-radius: 50%;
    background:
        radial-gradient(circle at 50% 0%, var(--t-border-color, #74b9ff) 0%, transparent 25%),
        radial-gradient(circle at 50% 100%, var(--t-border-color, #74b9ff) 0%, transparent 25%);
    animation: t-arc-rotate 1.5s linear infinite reverse, t-arc-flash-2 0.5s ease infinite;
    opacity: 0.6;
}

/* ===== \u901A\u77E5\u547C\u5438\u706F ===== */
@keyframes t-notify-glow {

    0%,
    100% {
        box-shadow: 0 0 5px var(--t-border-color, #55efc4);
        border-color: var(--t-border-color, #55efc4);
    }

    50% {
        box-shadow: 0 0 25px var(--t-border-color, #55efc4);
        border-color: var(--t-border-color, #55efc4);
    }
}

#titania-float-btn.t-notify {
    animation: t-notify-glow 2s infinite ease-in-out;
    border-color: var(--t-border-color-rgba, var(--t-border-color, #55efc4));
}

/* ===== \u8BA1\u65F6\u5668 ===== */
#titania-timer {
    position: fixed;
    top: 80px;
    left: 20px;

    /* \u6BDB\u73BB\u7483\u6548\u679C */
    background: rgba(30, 30, 30, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    color: #00d9ff;
    font-family: var(--t-font-mono);
    font-size: 11px;

    padding: 3px 10px;
    border-radius: 12px;
    min-width: 36px;
    text-align: center;

    z-index: 9998;
    pointer-events: none;

    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.2s, transform 0.2s;
}

#titania-timer.show {
    opacity: 1;
    transform: translateY(0);
}

#titania-timer.done {
    color: #55efc4;
}

/* ===== \u6A2A\u5411\u56FE\u6807\u83DC\u5355\u5BB9\u5668 ===== */
#titania-slide-menu {
    position: fixed;
    display: flex;
    flex-direction: row;
    gap: 6px;
    z-index: 10000;
    pointer-events: none;

    /* \u6BDB\u73BB\u7483\u80CC\u666F\u5BB9\u5668 */
    background: rgba(20, 20, 20, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    padding: 6px 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

    opacity: 0;
    transform: scale(0.8);
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

#titania-slide-menu.t-horizontal {
    flex-direction: row;
}

#titania-slide-menu.show {
    pointer-events: auto;
    opacity: 1;
    transform: scale(1) translateY(-50%);
}

/* ===== \u6A2A\u5411\u56FE\u6807\u6309\u94AE ===== */
.t-menu-icon-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;

    opacity: 0;
    transform: scale(0.5);

    /* \u9ED8\u8BA4\u65E0\u80CC\u666F\uFF0Chover \u65F6\u663E\u793A */
    background: transparent;
    border: 2px solid transparent;
}

.t-menu-icon-btn.show {
    opacity: 1;
    transform: scale(1);
}

.t-menu-icon-btn:hover {
    transform: scale(1.15);
}

.t-menu-icon-btn:active {
    transform: scale(0.95);
}

/* \u5267\u573A\u6309\u94AE */
.t-menu-icon-btn.main {
    color: #74b9ff;
}

.t-menu-icon-btn.main:hover {
    background: rgba(74, 158, 255, 0.2);
    border-color: rgba(74, 158, 255, 0.4);
    box-shadow: 0 0 12px rgba(74, 158, 255, 0.3);
}

/* \u8BBE\u5B9A\u63D0\u53D6\u6309\u94AE */
.t-menu-icon-btn.lore {
    color: #a29bfe;
}

.t-menu-icon-btn.lore:hover {
    background: rgba(162, 155, 254, 0.2);
    border-color: rgba(162, 155, 254, 0.4);
    box-shadow: 0 0 12px rgba(162, 155, 254, 0.3);
}

/* \u8BBE\u7F6E\u6309\u94AE */
.t-menu-icon-btn.settings {
    color: #aaa;
}

.t-menu-icon-btn.settings:hover {
    background: rgba(170, 170, 170, 0.2);
    border-color: rgba(170, 170, 170, 0.4);
    box-shadow: 0 0 12px rgba(170, 170, 170, 0.3);
    color: #fff;
}

/* \u4E2D\u6B62\u6309\u94AE */
.t-menu-icon-btn.cancel {
    color: #ff6b6b;
    animation: t-cancel-pulse-icon 1.5s ease-in-out infinite;
}

.t-menu-icon-btn.cancel:hover {
    background: rgba(255, 107, 107, 0.2);
    border-color: rgba(255, 107, 107, 0.4);
    box-shadow: 0 0 12px rgba(255, 107, 107, 0.4);
}

@keyframes t-cancel-pulse-icon {

    0%,
    100% {
        text-shadow: 0 0 5px rgba(255, 107, 107, 0.5);
    }

    50% {
        text-shadow: 0 0 15px rgba(255, 107, 107, 0.8);
    }
}

/* ===== \u65E7\u7248\u83DC\u5355\u9879\u6837\u5F0F\uFF08\u4FDD\u7559\u517C\u5BB9\u6027\uFF09===== */
.t-menu-item {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0;
    transform: scale(0.8) translateY(10px);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer;
}

.t-menu-item.show {
    opacity: 1;
    transform: scale(1) translateY(0);
}

.t-menu-item:hover .t-menu-icon {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.t-menu-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.t-menu-icon.main {
    background: linear-gradient(135deg, #4a9eff, #2d7fd3);
    border: 2px solid #74b9ff;
}

.t-menu-icon.lore {
    background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    border: 2px solid #a29bfe;
}

.t-menu-icon.cancel {
    background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
    border: 2px solid #ff4757;
    animation: t-cancel-pulse 1.5s ease-in-out infinite;
}

.t-menu-label {
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    backdrop-filter: blur(4px);
}

@keyframes t-cancel-pulse {

    0%,
    100% {
        box-shadow: 0 0 5px rgba(255, 71, 87, 0.5);
    }

    50% {
        box-shadow: 0 0 15px rgba(255, 71, 87, 0.8);
    }
}

/* ===== \u70B9\u51FB\u5916\u90E8\u533A\u57DF\u5173\u95ED\u83DC\u5355\u7684\u906E\u7F69 ===== */
#titania-menu-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9998;
    background: transparent;
    display: none;
}

#titania-menu-backdrop.show {
    display: block;
}

/* === main-window.css === */
/* css/main-window.css - \u4E3B\u6F14\u7ECE\u7A97\u53E3 */

#t-main-view {
    width: 950px;
    max-width: 95vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    background: #121212;
    position: relative;
    /* \u786E\u4FDD\u4E3B\u7A97\u53E3\u5728\u906E\u7F69\u5C42\u4E4B\u4E0A */
    z-index: 20001;
}

/* Zen Mode (\u6C89\u6D78\u6A21\u5F0F) */
#t-main-view.t-zen-mode .t-header,
#t-main-view.t-zen-mode .t-top-bar,
#t-main-view.t-zen-mode .t-bottom-bar {
    display: none !important;
}

#t-main-view.t-zen-mode .t-content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #0b0b0b;
    background-image: none;
}

/* \u5185\u5BB9\u5BB9\u5668 */
.t-content-wrapper {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    background-color: #0b0b0b;
    background-image: linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px);
    background-size: 20px 20px;
    transform: translateZ(0);
    min-height: 0;
}

.t-content-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow-y: auto;
    scroll-behavior: smooth;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

/* \u751F\u6210\u5185\u5BB9\u7EA6\u675F */
#t-output-content {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

#t-output-content>div {
    flex-grow: 1;
    margin: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 0 !important;
    border: none !important;
    min-height: 100%;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
}

#t-output-content img {
    max-width: 100% !important;
    height: auto !important;
}

/* iframe \u5185\u5BB9\u6837\u5F0F - \u79FB\u9664\u591A\u4F59\u6EDA\u52A8\u6761 */
#t-output-content .t-content-iframe {
    width: 100%;
    border: none;
    background: transparent;
    display: block;
    /* \u9AD8\u5EA6\u7531 JS \u52A8\u6001\u8BBE\u7F6E */
}

/* \u9876\u90E8\u64CD\u4F5C\u533A */
.t-top-bar {
    padding: 12px 20px;
    background: #1e1e1e;
    border-bottom: 1px solid #333;
    display: flex;
    gap: 15px;
    align-items: stretch;
    height: 75px;
    box-sizing: border-box;
    flex-shrink: 0;
    z-index: 20;
}

/* === [\u4FEE\u590D] PC\u7AEF\u5E03\u5C40\u6838\u5FC3 === */
.t-mobile-row {
    display: flex;
    flex-grow: 1;
    /* \u586B\u6EE1\u5269\u4F59\u7A7A\u95F4 */
    gap: 15px;
    /* \u5143\u7D20\u95F4\u8DDD */
    height: 100%;
    min-width: 0;
    /* \u9632\u6B62 flex \u5B50\u9879\u6EA2\u51FA */
}

/* \u5386\u53F2\u5F00\u5173 */
.t-history-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    background: #1a1a1a;
    border-radius: 6px;
    padding: 0 12px;
    border: 1px solid #333;
    flex-shrink: 0;
    transition: all 0.3s;
    cursor: pointer;
}

.t-history-toggle:hover {
    background: #222;
    border-color: #444;
}

.t-history-toggle.active {
    background: rgba(144, 205, 244, 0.1);
    border-color: rgba(144, 205, 244, 0.3);
}

.t-toggle-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
}

.t-toggle-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #90cdf4;
    cursor: pointer;
}

.t-toggle-text {
    font-size: 0.9em;
    font-weight: bold;
    color: #888;
    transition: color 0.2s;
    white-space: nowrap;
}

.t-history-toggle.active .t-toggle-text {
    color: #90cdf4;
}

.t-history-toggle:hover .t-toggle-text {
    color: #bbb;
}

.t-history-toggle.active:hover .t-toggle-text {
    color: #a8d8f8;
}

/* \u751F\u6210\u6A21\u5F0F\u5207\u6362 */
.t-mode-toggle {
    display: flex;
    align-items: center;
    background: #1a1a1a;
    border-radius: 6px;
    border: 1px solid #333;
    overflow: hidden;
    flex-shrink: 0;
}

.t-mode-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 14px;
    height: 100%;
    cursor: pointer;
    color: #666;
    font-size: 0.85em;
    font-weight: bold;
    transition: all 0.2s;
    white-space: nowrap;
    border-right: 1px solid #333;
}

.t-mode-btn:last-child {
    border-right: none;
}

.t-mode-btn:hover {
    background: #222;
    color: #aaa;
}

.t-mode-btn.active {
    background: rgba(191, 161, 95, 0.15);
    color: #bfa15f;
}

.t-mode-btn.active:hover {
    background: rgba(191, 161, 95, 0.2);
}

/* Trigger Card */
.t-trigger-card {
    flex-grow: 1;
    background: #222;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 0 15px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.2s;
    position: relative;
    min-width: 0;
}

.t-trigger-card:hover {
    background: #2a2a2a;
    border-color: #555;
}

.t-trigger-main {
    font-size: 1.1em;
    font-weight: bold;
    color: #eee;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.t-trigger-sub {
    font-size: 0.8em;
    color: #888;
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.t-cat-tag {
    background: #333;
    padding: 1px 6px;
    border-radius: 3px;
    color: #aaa;
    font-size: 0.9em;
    flex-shrink: 0;
    border: 1px solid transparent;
    transition: all 0.2s;
}

.t-chevron {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #555;
    font-size: 1.2em;
}

/* Filter & Dice */
.t-action-group {
    display: flex;
    gap: 5px;
    flex-shrink: 0;
}

.t-filter-btn,
.t-dice-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #222;
    border: 1px solid #333;
    border-radius: 6px;
    transition: 0.2s;
}

.t-filter-btn {
    width: 40px;
    font-size: 1.1em;
    color: #666;
}

.t-filter-btn:hover {
    background: #2a2a2a;
    color: #aaa;
}

.t-filter-btn.active-filter {
    color: #bfa15f;
    border-color: rgba(191, 161, 95, 0.3);
    background: rgba(191, 161, 95, 0.1);
}

.t-dice-btn {
    width: 50px;
    font-size: 1.5em;
    color: #888;
}

.t-dice-btn:hover {
    background: #2a2a2a;
    color: #fff;
}

/* Tools Button (\u66FF\u4EE3\u539F Zen Button) */
.t-tools-btn {
    position: absolute;
    top: 20px;
    right: 25px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(30, 30, 30, 0.6);
    backdrop-filter: blur(4px);
    color: #777;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 100;
    transition: all 0.2s;
    opacity: 0.6;
}

.t-tools-btn:hover {
    opacity: 1;
    background: #333;
    color: #fff;
    transform: scale(1.05);
}

.t-tools-btn.active {
    opacity: 1;
    background: #bfa15f;
    color: #000;
}

.t-tools-btn.zen-active {
    opacity: 1;
    background: transparent;
    color: #bfa15f;
}

/* Tools Panel (\u5F39\u51FA\u83DC\u5355) */
.t-tools-panel {
    position: absolute;
    top: 65px;
    right: 25px;
    background: #1e1e1e;
    border: 1px solid #444;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    z-index: 101;
    min-width: 140px;
    padding: 5px;
    animation: fadeIn 0.15s ease;
}

.t-tools-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 6px;
    cursor: pointer;
    color: #ccc;
    font-size: 0.9em;
    transition: all 0.2s;
}

.t-tools-item:hover {
    background: #2a2a2a;
    color: #fff;
}

.t-tools-item i {
    width: 18px;
    text-align: center;
    color: #888;
}

.t-tools-item:hover i {
    color: #bfa15f;
}

/* Bottom Bar */
/* \u5E95\u90E8\u680F\u5BB9\u5668\uFF1A\u9AD8\u5EA6\u589E\u52A0\u4EE5\u5BB9\u7EB3\u4E24\u884C\u6309\u94AE */
.t-bottom-bar {
    padding: 10px 15px;
    background: #1e1e1e;
    border-top: 1px solid #333;
    display: flex;
    align-items: stretch;
    /* \u8BA9\u5DE6\u53F3\u4E24\u8FB9\u9AD8\u5EA6\u81EA\u52A8\u62C9\u4F38\u5BF9\u9F50 */
    gap: 15px;
    height: 90px;
    /* \u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u786E\u4FDD\u5BB9\u7EB3\u53CC\u5C42\u7ED3\u6784 */
    flex-shrink: 0;
    position: relative;
    z-index: 50;
    box-sizing: border-box;
}

/* \u5DE6\u4FA7\uFF1A\u5DE5\u5177\u533A (2x2 \u7F51\u683C) */
.t-bot-left {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* \u4E24\u5217 */
    grid-template-rows: 1fr 1fr;
    /* \u4E24\u884C */
    gap: 6px;
    width: 100px;
    /* \u56FA\u5B9A\u5BBD\u5EA6\uFF0C\u9632\u6B62\u88AB\u6324\u538B */
    flex-shrink: 0;
}

/* \u5DE6\u4FA7\u5C0F\u5DE5\u5177\u6309\u94AE\u6837\u5F0F */
.t-btn-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2b2b2b;
    border: 1px solid #444;
    border-radius: 6px;
    color: #aaa;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.2s;
}

.t-btn-grid:hover {
    background: #383838;
    color: #fff;
    border-color: #666;
}

.t-btn-grid:active {
    transform: scale(0.95);
}

/* \u53F3\u4FA7\uFF1A\u64CD\u4F5C\u533A (\u4E0A\u4E0B\u5782\u76F4\u6392\u5217) */
.t-bot-right {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* \u53F3\u4FA7\u6309\u94AE\u901A\u7528\u6837\u5F0F */
.t-btn-action {
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
    border: 1px solid transparent;
}

/* \u4E0A\u65B9\uFF1A\u5F00\u59CB\u6F14\u7ECE (\u4E3B\u6309\u94AE) */
#t-btn-run {
    flex: 3;
    /* \u5360\u636E\u66F4\u591A\u9AD8\u5EA6 (60%) */
    background: linear-gradient(90deg, #bfa15f, #d4c08b);
    color: #1a1a1a;
    font-size: 1.1em;
    box-shadow: 0 2px 10px rgba(191, 161, 95, 0.2);
}

#t-btn-run:hover {
    filter: brightness(1.1);
    box-shadow: 0 4px 15px rgba(191, 161, 95, 0.4);
}

#t-btn-run:active {
    transform: translateY(1px);
}

/* \u4E0B\u65B9\uFF1A\u91CD\u65B0\u7F16\u8F91 (\u6B21\u6309\u94AE) */
#t-btn-edit {
    flex: 2;
    /* \u5360\u636E\u8F83\u5C11\u9AD8\u5EA6 (40%) */
    background: #252525;
    border-color: #444;
    color: #ccc;
    font-size: 0.9em;
}

#t-btn-edit:hover {
    background: #333;
    color: #fff;
    border-color: #666;
}

/* ... (\u4FDD\u7559 Media Query \u9002\u914D) ... */

/* \u7B5B\u9009\u5F39\u51FA\u83DC\u5355 */
.t-filter-popover {
    position: absolute;
    z-index: 20001;
    background: #1e1e1e;
    border: 1px solid #444;
    border-radius: 6px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 5px;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    animation: fadeIn 0.15s;
    /* \u56FA\u5B9A\u6700\u5927\u9AD8\u5EA6\uFF1A\u7EA6\u5BB9\u7EB35\u4E2A\u5206\u7C7B\u9879\uFF0C\u8D85\u51FA\u65F6\u663E\u793A\u6EDA\u52A8\u6761 */
    max-height: 200px;
    overflow-y: auto;
}

/* \u7B5B\u9009\u5F39\u51FA\u83DC\u5355\u6EDA\u52A8\u6761\u7F8E\u5316 */
.t-filter-popover::-webkit-scrollbar {
    width: 6px;
}

.t-filter-popover::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 3px;
}

.t-filter-popover::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
}

.t-filter-popover::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.t-filter-item {
    padding: 8px 12px;
    cursor: pointer;
    color: #aaa;
    border-radius: 4px;
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.t-filter-item:hover {
    background: #2a2a2a;
    color: #fff;
}

.t-filter-item.active {
    background: #bfa15f;
    color: #000;
    font-weight: bold;
}

.t-filter-check {
    opacity: 0;
    font-size: 0.8em;
}

.t-filter-item.active .t-filter-check {
    opacity: 1;
}

/* 
   === \u79FB\u52A8\u7AEF\u9002\u914D ===
   \u6CE8\u610F\uFF1A\u53EA\u6709\u5C4F\u5E55\u5BBD\u5EA6\u5C0F\u4E8E 600px \u65F6\uFF0C\u8FD9\u4E9B\u6837\u5F0F\u624D\u4F1A\u751F\u6548\u3002
   \u5728\u201C\u684C\u9762\u7248\u7F51\u7AD9\u201D\u6A21\u5F0F\u4E0B\uFF0C\u5C4F\u5E55\u5BBD\u5EA6\u901A\u5E38\u88AB\u6A21\u62DF\u4E3A 980px \u6216\u66F4\u9AD8\uFF0C
   \u6240\u4EE5\u4E0B\u9762\u7684\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C\uFF0C\u4F1A\u4F7F\u7528\u4E0A\u9762\u7684 PC \u5E03\u5C40\u3002
*/
/* css/main-window.css - \u79FB\u52A8\u7AEF\u9002\u914D\u90E8\u5206 */

@media screen and (max-width: 600px) {
    #t-main-view {
        width: 100%;
        height: 95vh;
        max-width: 100vw;
        border-radius: 10px 10px 0 0;
    }

    /* \u9876\u90E8\u680F\u7D27\u51D1\u5316 */
    .t-header {
        padding: 10px;
    }

    .t-top-bar {
        height: auto;
        flex-direction: column;
        padding: 10px;
        gap: 8px;
    }

    .t-history-toggle {
        width: 100%;
        height: 40px;
        min-width: unset;
        justify-content: center;
    }

    .t-mode-toggle {
        width: 100%;
        height: 40px;
    }

    .t-mode-btn {
        flex: 1;
        font-size: 0.8em;
        padding: 0 10px;
    }

    .t-mobile-row {
        display: flex;
        gap: 8px;
        width: 100%;
        height: 50px;
    }

    .t-trigger-card {
        height: 100%;
    }

    .t-action-group {
        height: 100%;
    }

    .t-dice-btn {
        height: 100%;
        width: 50px;
    }

    .t-filter-btn {
        height: 100%;
        width: 40px;
    }

    .t-content-area {
        padding: 15px;
    }

    /* --- [\u91CD\u70B9\u4FEE\u6539] \u5E95\u90E8\u64CD\u4F5C\u680F\u9002\u914D --- */
    .t-bottom-bar {
        /* \u4FDD\u6301\u6A2A\u5411\u6392\u5217\uFF0C\u4E0D\u6298\u53E0 */
        flex-direction: row;
        height: 85px;
        /* \u7A0D\u5FAE\u964D\u4F4E\u9AD8\u5EA6\u9002\u914D\u624B\u673A */
        padding: 8px 10px;
        /* \u51CF\u5C11\u5185\u8FB9\u8DDD */
        gap: 8px;
        /* \u51CF\u5C11\u5DE6\u53F3\u533A\u57DF\u95F4\u8DDD */
    }

    /* \u5DE6\u4FA7\u7F51\u683C\uFF1A\u7A0D\u5FAE\u7F29\u5C0F */
    .t-bot-left {
        width: 90px;
        /* \u5BBD\u5EA6\u5FAE\u8C03 */
        gap: 4px;
        /* \u7F51\u683C\u95F4\u9699\u5FAE\u8C03 */
    }

    .t-btn-grid {
        font-size: 1em;
        /* \u56FE\u6807\u7A0D\u5FAE\u8C03\u5C0F */
    }

    /* \u53F3\u4FA7\u64CD\u4F5C\u533A\uFF1A\u5360\u6EE1\u5269\u4F59\u7A7A\u95F4 */
    .t-bot-right {
        gap: 4px;
    }

    /* \u53F3\u4FA7\u6309\u94AE\u6587\u5B57\u9002\u914D */
    #t-btn-run {
        font-size: 1em;
    }

    #t-btn-edit {
        font-size: 0.85em;
    }
}

/* ===== \u4E16\u754C\u4E66\u6761\u76EE\u9009\u62E9\u5668 ===== */

/* \u9009\u62E9\u5668\u9762\u677F */
.t-wi-selector {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    max-height: 70vh;
    background: #1a1a1a;
    border: 1px solid #444;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    z-index: 3000;
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.2s;
}

.t-wi-header {
    padding: 12px 15px;
    background: #242424;
    border-bottom: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
    flex-shrink: 0;
}

/* \u7248\u672C\u53F7\u5FBD\u7AE0 */
.t-version-badge {
    font-size: 0.65em;
    color: #666;
    background: #252525;
    padding: 2px 8px;
    border-radius: 4px;
    margin-left: 8px;
    border: 1px solid #333;
    font-weight: normal;
    white-space: nowrap;
    flex-shrink: 0;
}

.t-wi-mode-bar {
    padding: 10px 15px;
    background: #1e1e1e;
    border-bottom: 1px solid #333;
    display: flex;
    gap: 20px;
    flex-shrink: 0;
}

.t-wi-mode-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #aaa;
    font-size: 0.9em;
}

.t-wi-mode-label input:checked+span {
    color: #90cdf4;
    font-weight: bold;
}

.t-wi-body {
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
    min-height: 150px;
    max-height: 400px;
}

.t-wi-empty {
    text-align: center;
    color: #666;
    padding: 40px;
    font-size: 0.9em;
}

.t-wi-book {
    margin-bottom: 10px;
}

.t-wi-book-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: #252525;
    border-radius: 6px;
    font-weight: bold;
    color: #ddd;
}

/* \u53EF\u6298\u53E0\u7684\u4E16\u754C\u4E66\u6807\u9898 */
.t-wi-book-header.t-wi-collapsible {
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
}

.t-wi-book-header.t-wi-collapsible:hover {
    background: #2a2a2a;
}

/* \u6298\u53E0\u7BAD\u5934\u56FE\u6807 */
.t-wi-collapse-icon {
    color: #666;
    font-size: 0.9em;
    transition: transform 0.2s;
    width: 12px;
}

.t-wi-collapse-icon.t-wi-expanded {
    transform: rotate(90deg);
}

.t-wi-book-name {
    flex-grow: 1;
}

.t-wi-book-stat {
    color: #888;
    font-size: 0.8em;
    font-weight: normal;
}

/* \u4E16\u754C\u4E66\u5206\u7EC4\u5168\u9009\u6309\u94AE */
.t-wi-book-toggle {
    margin-left: auto;
    padding: 2px 8px;
    font-size: 0.75em;
    font-weight: normal;
    color: #90cdf4;
    background: rgba(144, 205, 244, 0.1);
    border: 1px solid rgba(144, 205, 244, 0.3);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.t-wi-book-toggle:hover {
    background: rgba(144, 205, 244, 0.2);
    color: #fff;
}

.t-wi-entries {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px 0 0 20px;
    /* \u5C55\u5F00\u65F6\u4E0D\u9650\u5236\u9AD8\u5EA6\uFF0C\u8BA9\u7236\u5BB9\u5668 .t-wi-body \u8D1F\u8D23\u6EDA\u52A8 */
    max-height: none;
    overflow: visible;
    transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
}

/* \u6298\u53E0\u72B6\u6001 */
.t-wi-entries.t-wi-collapsed {
    max-height: 0 !important;
    padding-top: 0;
    opacity: 0;
    overflow: hidden;
}

.t-wi-entry {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    background: #222;
    border: 1px solid #333;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.t-wi-entry:hover {
    background: #2a2a2a;
    border-color: #444;
}

.t-wi-entry.selected {
    background: rgba(144, 205, 244, 0.1);
    border-color: rgba(144, 205, 244, 0.3);
}

.t-wi-entry-check {
    padding-top: 2px;
    flex-shrink: 0;
}

.t-wi-entry-content {
    flex-grow: 1;
    min-width: 0;
}

.t-wi-entry-title {
    font-weight: bold;
    color: #eee;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
}

.t-wi-uid {
    font-size: 0.75em;
    color: #666;
    font-weight: normal;
}

.t-wi-entry-preview {
    font-size: 0.8em;
    color: #888;
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

/* \u6761\u76EE\u64CD\u4F5C\u6309\u94AE\u533A */
.t-wi-entry-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    padding-top: 2px;
}

/* \u773C\u775B\u9884\u89C8\u6309\u94AE */
.t-wi-preview-btn {
    color: #666;
    font-size: 1em;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 4px;
    transition: all 0.2s;
}

.t-wi-preview-btn:hover {
    color: #90cdf4;
    background: rgba(144, 205, 244, 0.1);
}

/* \u9884\u89C8\u5F39\u7A97 */
.t-wi-preview-modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3100;
    animation: fadeIn 0.15s;
}

.t-wi-preview-box {
    width: 90%;
    max-width: 550px;
    max-height: 70%;
    background: #1e1e1e;
    border: 1px solid #444;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.t-wi-preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background: #252525;
    border-bottom: 1px solid #333;
    border-radius: 8px 8px 0 0;
}

.t-wi-preview-title {
    font-weight: bold;
    color: #eee;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.t-wi-preview-close {
    font-size: 1.5em;
    color: #888;
    cursor: pointer;
    padding: 0 5px;
    line-height: 1;
}

.t-wi-preview-close:hover {
    color: #fff;
}

.t-wi-preview-content {
    padding: 15px;
    overflow-y: auto;
    color: #ccc;
    font-size: 0.9em;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
}

.t-wi-footer {
    padding: 12px 15px;
    background: #1e1e1e;
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 10px 10px;
    flex-shrink: 0;
}

#t-wi-stat {
    color: #888;
    font-size: 0.9em;
}

/* \u79FB\u52A8\u7AEF\u9002\u914D */
@media screen and (max-width: 600px) {
    .t-wi-selector {
        width: 95%;
        top: 50px;
        max-height: 75vh;
    }

    .t-wi-mode-bar {
        flex-direction: column;
        gap: 10px;
    }
}

/* ===== \u4E92\u52A8\u5185\u5BB9\u63D0\u793A\u680F ===== */

.t-interactive-hint {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(25, 25, 35, 0.98), rgba(25, 25, 35, 0.92));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    border-top: 1px solid rgba(144, 205, 244, 0.3);
    z-index: 100;
    animation: t-slideUp 0.3s ease;
    margin-top: auto;
    flex-shrink: 0;
}

@keyframes t-slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.t-hint-icon {
    font-size: 1.5em;
    flex-shrink: 0;
}

.t-hint-text {
    flex: 1;
    color: #90cdf4;
    font-size: 0.95em;
    line-height: 1.4;
}

.t-hint-actions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
}

.t-hint-btn {
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #444;
    background: #2a2a2a;
    color: #ccc;
    cursor: pointer;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
    white-space: nowrap;
}

.t-hint-btn:hover {
    background: #3a3a3a;
    border-color: #666;
    color: #fff;
}

.t-hint-btn.primary {
    background: linear-gradient(90deg, #4a9eff, #6ab0ff);
    border-color: transparent;
    color: #fff;
    font-weight: bold;
}

.t-hint-btn.primary:hover {
    filter: brightness(1.1);
    box-shadow: 0 2px 10px rgba(74, 158, 255, 0.3);
}

.t-hint-btn.dismiss {
    padding: 8px 12px;
    background: transparent;
    border: none;
    color: #666;
    font-size: 1.1em;
}

.t-hint-btn.dismiss:hover {
    color: #fff;
}

/* \u79FB\u52A8\u7AEF\u9002\u914D */
@media screen and (max-width: 600px) {
    .t-interactive-hint {
        flex-direction: column;
        padding: 12px 15px;
        gap: 10px;
    }

    .t-hint-icon {
        display: none;
    }

    .t-hint-text {
        text-align: center;
        font-size: 0.9em;
    }

    .t-hint-actions {
        width: 100%;
        justify-content: center;
    }

    .t-hint-btn {
        padding: 10px 14px;
        font-size: 0.85em;
    }

    .t-hint-btn.dismiss {
        position: absolute;
        top: 8px;
        right: 8px;
    }
}

/* Shadow DOM \u5BBF\u4E3B\u6837\u5F0F */
.t-shadow-host {
    display: block;
    width: 100%;
    min-height: 100%;
}

/* ===== \u5267\u573A\u5386\u53F2\u5BFC\u822A ===== */

.t-scene-nav {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 150;
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(30, 30, 30, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    padding: 6px 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    animation: t-nav-fadeIn 0.3s ease;
}

@keyframes t-nav-fadeIn {
    from {
        opacity: 0;
        transform: translateX(-50%) translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}

.t-nav-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: #aaa;
    font-size: 0.9em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.t-nav-btn:hover:not(:disabled) {
    background: rgba(191, 161, 95, 0.2);
    color: #bfa15f;
}

.t-nav-btn:active:not(:disabled) {
    transform: scale(0.95);
}

.t-nav-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.t-nav-info {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 8px;
}

.t-nav-indicator {
    font-size: 0.85em;
    color: #ccc;
    font-weight: bold;
    min-width: 30px;
    text-align: center;
}

.t-nav-unread {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
    color: #fff;
    font-size: 0.7em;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(255, 107, 107, 0.4);
    animation: t-unread-pulse 2s infinite;
}

@keyframes t-unread-pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

/* Zen \u6A21\u5F0F\u4E0B\u9690\u85CF\u5BFC\u822A */
#t-main-view.t-zen-mode .t-scene-nav {
    display: none !important;
}

/* \u79FB\u52A8\u7AEF\u9002\u914D */
@media screen and (max-width: 600px) {
    .t-scene-nav {
        bottom: 15px;
        padding: 5px 10px;
        gap: 5px;
    }
    
    .t-nav-btn {
        width: 28px;
        height: 28px;
        font-size: 0.85em;
    }
    
    .t-nav-indicator {
        font-size: 0.8em;
    }
    
    .t-nav-unread {
        min-width: 16px;
        height: 16px;
        font-size: 0.65em;
    }
}

/* ===== \u5185\u5BB9\u7F16\u8F91\u5668 ===== */

.t-content-editor {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    max-width: 800px;
    height: calc(100% - 80px);
    max-height: 600px;
    background: #1a1a1a;
    border: 1px solid #444;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    z-index: 3000;
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.2s;
}

.t-ce-header {
    padding: 12px 15px;
    background: #242424;
    border-bottom: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
    flex-shrink: 0;
}

.t-ce-body {
    flex-grow: 1;
    padding: 10px;
    overflow: hidden;
    display: flex;
    min-height: 0;
}

.t-ce-textarea {
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    border: 1px solid #333;
    border-radius: 6px;
    color: #e0e0e0;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.5;
    padding: 12px;
    resize: none;
    outline: none;
    overflow-y: auto;
}

.t-ce-textarea:focus {
    border-color: #bfa15f;
}

/* \u7F16\u8F91\u5668\u6EDA\u52A8\u6761\u7F8E\u5316 */
.t-ce-textarea::-webkit-scrollbar {
    width: 8px;
}

.t-ce-textarea::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 4px;
}

.t-ce-textarea::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
}

.t-ce-textarea::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.t-ce-footer {
    padding: 12px 15px;
    background: #1e1e1e;
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 10px 10px;
    flex-shrink: 0;
}

.t-ce-stats {
    color: #666;
    font-size: 0.85em;
}

.t-ce-actions {
    display: flex;
    gap: 10px;
}

/* \u79FB\u52A8\u7AEF\u9002\u914D */
@media screen and (max-width: 600px) {
    .t-content-editor {
        width: 98%;
        top: 50px;
        max-height: none;
        height: calc(100% - 60px);
    }

    .t-ce-textarea {
        font-size: 12px;
    }

    .t-ce-actions {
        gap: 6px;
    }

    .t-ce-actions .t-btn {
        padding: 8px 12px;
        font-size: 0.85em;
    }
}

/* === settings.css === */
/* css/settings.css - \u8BBE\u7F6E\u7A97\u53E3 */

#t-settings-view {
    width: 800px;
    height: 80vh;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    background: #121212;
    overflow: hidden;
}

.t-set-body {
    flex-grow: 1;
    display: flex;
    overflow: hidden;
}

/* \u4FA7\u8FB9\u5BFC\u822A */
.t-set-nav {
    width: 160px;
    background: #181818;
    border-right: 1px solid #333;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.t-set-tab-btn {
    padding: 12px 20px;
    color: #888;
    cursor: pointer;
    transition: 0.2s;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    gap: 10px;
}

.t-set-tab-btn:hover {
    background: #222;
    color: #ccc;
}

.t-set-tab-btn.active {
    background: #2a2a2a;
    color: #bfa15f;
    border-left: 3px solid #bfa15f;
    font-weight: bold;
}

/* \u5185\u5BB9\u9875 */
.t-set-content {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    background: #121212;
}

.t-set-page {
    display: none;
}

.t-set-page.active {
    display: block;
}

/* \u8868\u5355\u5143\u7D20 */
.t-form-group {
    margin-bottom: 20px;
}

.t-form-label {
    display: block;
    color: #aaa;
    margin-bottom: 8px;
    font-size: 0.9em;
}

.t-form-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom: 1px solid #222;
    padding-bottom: 15px;
}

/* \u9884\u89C8\u533A\u5BB9\u5668 */
.t-preview-container {
    background: #1a1a1a;
    border-radius: 8px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #333;
}

/* \u9884\u89C8\u7403\u57FA\u7840\u6837\u5F0F */
.t-preview-ball {
    border-radius: 50%;
    background: #2b2b2b;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #444;
    transition: all 0.2s;
    position: relative;
    overflow: visible;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.t-preview-ball img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

/* ===== \u9884\u89C8\u52A8\u753B\u6548\u679C ===== */

/* \u52A8\u753B 1: \u8109\u51B2\u6CE2\u7EB9 */
@keyframes p-ripple-1 {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}

@keyframes p-ripple-2 {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    100% {
        transform: scale(2.2);
        opacity: 0;
    }
}

.t-preview-ball.p-anim-ripple {
    border-color: #90cdf4;
}

.t-preview-ball.p-anim-ripple::before,
.t-preview-ball.p-anim-ripple::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #90cdf4;
    animation: p-ripple-1 1.5s ease-out infinite;
}

.t-preview-ball.p-anim-ripple::after {
    animation: p-ripple-2 1.5s ease-out 0.5s infinite;
}

/* \u52A8\u753B 2: \u7535\u78C1\u95EA\u70C1 */
@keyframes p-arc-rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-arc-flash {

    0%,
    90%,
    100% {
        opacity: 0;
    }

    92%,
    95% {
        opacity: 1;
    }
}

.t-preview-ball.p-anim-arc {
    border-color: #a29bfe;
}

.t-preview-ball.p-anim-arc::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    border-radius: 50%;
    background:
        radial-gradient(circle at 20% 0%, #a29bfe 0%, transparent 30%),
        radial-gradient(circle at 80% 100%, #a29bfe 0%, transparent 30%);
    animation: p-arc-rotate 1s linear infinite, p-arc-flash 0.3s ease infinite;
    opacity: 0.8;
}

.t-preview-ball.p-anim-arc::after {
    content: "";
    position: absolute;
    width: 130%;
    height: 130%;
    border-radius: 50%;
    background:
        radial-gradient(circle at 50% 0%, #74b9ff 0%, transparent 25%),
        radial-gradient(circle at 50% 100%, #74b9ff 0%, transparent 25%);
    animation: p-arc-rotate 1.5s linear infinite reverse;
    opacity: 0.6;
}

/* \u901A\u77E5\u547C\u5438\u706F\u9884\u89C8 */
@keyframes p-notify-glow {

    0%,
    100% {
        box-shadow: 0 0 5px #55efc4;
    }

    50% {
        box-shadow: 0 0 20px #55efc4;
    }
}

.t-preview-ball.p-notify {
    border-color: #55efc4 !important;
    animation: p-notify-glow 1.5s infinite ease-in-out;
}

/* \u52A8\u753B\u9009\u62E9\u7F51\u683C */
.t-anim-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
    margin-top: 15px;
}

.t-anim-option {
    background: #222;
    border: 2px solid #333;
    border-radius: 8px;
    padding: 15px 10px;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s;
}

.t-anim-option:hover {
    background: #2a2a2a;
    border-color: #555;
}

.t-anim-option.active {
    border-color: #bfa15f;
    background: rgba(191, 161, 95, 0.1);
}

.t-anim-option .t-anim-name {
    font-size: 0.9em;
    color: #ccc;
    margin-top: 8px;
}

.t-anim-option .t-anim-icon {
    font-size: 1.5em;
}

/* \u4E0A\u4F20\u6846 */
.t-upload-card {
    width: 100px;
    height: 100px;
    border: 2px dashed #444;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    transition: 0.2s;
    background-size: cover;
    background-position: center;
}

.t-upload-card:hover {
    border-color: #bfa15f;
    color: #bfa15f;
    background-color: rgba(191, 161, 95, 0.05);
}

/* Profile \u7BA1\u7406 */
.t-prof-header {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    align-items: center;
}

.t-prof-select {
    flex-grow: 1;
    background: #222;
    color: #eee;
    border: 1px solid #444;
    padding: 8px;
    border-radius: 4px;
}

/* \u8BCA\u65AD\u65E5\u5FD7 */
.t-log-box {
    background: #0f0f0f;
    color: #ccc;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 4px;
    height: 250px;
    overflow-y: auto;
    font-family: var(--t-font-mono);
    font-size: 0.8em;
    white-space: pre-wrap;
    word-break: break-all;
    margin-bottom: 10px;
}

.t-log-entry-error {
    color: #ff6b6b;
    border-bottom: 1px solid #333;
    padding: 2px 0;
}

.t-log-entry-info {
    color: #90cdf4;
    border-bottom: 1px solid #333;
    padding: 2px 0;
}

.t-log-entry-warn {
    color: #f1c40f;
    border-bottom: 1px solid #333;
    padding: 2px 0;
}

/* ===== \u4E3B\u9898\u6837\u5F0F Tab ===== */

/* CSS \u4EE3\u7801\u7F16\u8F91\u5668 */
.t-code-editor {
    font-family: var(--t-font-mono);
    font-size: 0.9em;
    line-height: 1.5;
    tab-size: 4;
    resize: vertical;
    min-height: 200px;
    background: #0f0f0f;
    border-color: #333;
    color: #ccc;
}

.t-code-editor::placeholder {
    color: #555;
}

/* CSS \u9009\u62E9\u5668\u63D0\u793A\u5217\u8868 */
.t-css-hints {
    background: #181818;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 15px;
    max-height: 200px;
    overflow-y: auto;
}

.t-css-hint-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 8px 0;
    border-bottom: 1px solid #222;
    font-size: 0.85em;
}

.t-css-hint-item:last-child {
    border-bottom: none;
}

.t-css-hint-item code {
    background: #2a2a2a;
    color: #90cdf4;
    padding: 3px 8px;
    border-radius: 4px;
    font-family: var(--t-font-mono);
    font-size: 0.95em;
    min-width: 180px;
    display: inline-block;
}

.t-css-hint-item span {
    color: #888;
}

@media screen and (max-width: 600px) {
    .t-set-body {
        flex-direction: column;
    }

    .t-set-nav {
        width: 100%;
        height: 50px;
        flex-direction: row;
        overflow-x: auto;
        border-right: none;
        border-bottom: 1px solid #333;
    }

    .t-set-tab-btn {
        padding: 0 15px;
        border-left: none;
        border-bottom: 3px solid transparent;
        white-space: nowrap;
    }

    .t-set-tab-btn.active {
        border-left: none;
        border-bottom-color: #bfa15f;
        background: transparent;
    }

    .t-anim-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* === manager.css === */
/* css/manager.css - \u5267\u672C\u7BA1\u7406 */

/* \u7BA1\u7406\u5668\u4E3B\u7A97 */
#t-mgr-view {
    height: 85vh;
    width: 900px;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    background: #121212;
    position: relative;
}

.t-mgr-body {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
}

/* \u4FA7\u8FB9 */
.t-mgr-sidebar {
    width: 180px;
    background: #181818;
    border-right: 1px solid #333;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    overflow-y: auto;
}

.t-mgr-sb-group {
    padding: 10px 0;
    border-bottom: 1px solid #222;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

#t-mgr-cat-list {
    overflow-y: auto;
    flex-grow: 1;
    min-height: 0;
}

.t-mgr-sb-title {
    font-size: 0.8em;
    color: #666;
    padding: 0 15px 5px;
    font-weight: bold;
    text-transform: uppercase;
}

.t-mgr-sb-item {
    padding: 8px 15px;
    cursor: pointer;
    color: #aaa;
    font-size: 0.9em;
    transition: 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.t-mgr-sb-item:hover {
    background: #222;
    color: #eee;
}

.t-mgr-sb-item.active {
    background: #2a2a2a;
    color: #bfa15f;
    border-left: 3px solid #bfa15f;
    font-weight: bold;
}

/* \u4E3B\u533A\u57DF */
.t-mgr-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: #121212;
    min-width: 0;
    position: relative;
    overflow: hidden;
}

.t-mgr-toolbar {
    padding: 10px 15px;
    background: #1e1e1e;
    border-bottom: 1px solid #333;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-shrink: 0;
}

.t-mgr-search {
    flex-grow: 1;
    background: #2a2a2a;
    border: 1px solid #444;
    color: #eee;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 0.9em;
    min-width: 50px;
}

/* \u5217\u8868 */
.t-mgr-list {
    flex-grow: 1;
    overflow-y: auto;
    padding: 0;
}

.t-mgr-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid #222;
    transition: 0.2s;
    min-height: 50px;
}

.t-mgr-item:hover {
    background: #1a1a1a;
}

.t-mgr-item-meta {
    flex-grow: 1;
    overflow: hidden;
    cursor: pointer;
}

.t-mgr-item-title {
    font-size: 0.95em;
    color: #eee;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
}

.t-mgr-item-desc {
    font-size: 0.8em;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 2px;
}

.t-mgr-tag {
    font-size: 0.75em;
    padding: 1px 5px;
    border-radius: 3px;
    background: #333;
    color: #aaa;
}

/* \u6279\u91CF\u7BA1\u7406 */
.t-batch-elem {
    display: none;
}

.t-batch-active .t-batch-elem {
    display: block;
}

.t-mgr-item-check-col {
    display: none;
    padding-right: 15px;
}

.t-batch-active .t-mgr-item-check-col {
    display: block;
}

.t-mgr-footer-bar {
    height: 50px;
    background: #2a1a1a;
    border-top: 1px solid #522;
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    color: #ff6b6b;
    flex-shrink: 0;
    z-index: 10;
}

.t-batch-active .t-mgr-footer-bar {
    display: flex;
    animation: slideUp 0.2s;
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}

/* \u5267\u672C\u9009\u62E9\u5668\u9762\u677F */
.t-selector-panel {
    position: absolute;
    top: 80px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: rgba(18, 18, 18, 0.98);
    backdrop-filter: blur(10px);
    z-index: 2001;
    border-radius: 8px;
    border: 1px solid #444;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.2s;
}

.t-sel-header {
    padding: 10px 15px;
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1e1e1e;
    border-radius: 8px 8px 0 0;
    flex-wrap: wrap;
    gap: 10px;
}

/* \u5267\u672C\u9009\u62E9\u5668\u641C\u7D22\u6846 */
.t-sel-search-input {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #eee;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.85em;
    width: 150px;
    transition: 0.2s;
}

.t-sel-search-input:focus {
    outline: none;
    border-color: #bfa15f;
    width: 180px;
}

.t-sel-search-input::placeholder {
    color: #666;
}

.t-sel-body {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
}

.t-sel-sidebar {
    width: 160px;
    background: #181818;
    border-right: 1px solid #333;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-shrink: 0;
}

.t-sel-grid {
    flex-grow: 1;
    padding: 15px;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
    align-content: start;
}

.t-sel-cat-btn {
    padding: 8px 12px;
    cursor: pointer;
    color: #888;
    border-radius: 4px;
    font-size: 0.9em;
    transition: 0.2s;
    text-align: left;
}

.t-sel-cat-btn:hover {
    background: #252525;
    color: #ddd;
}

.t-sel-cat-btn.active {
    background: #333;
    color: #fff;
    font-weight: bold;
    border-left: 3px solid #bfa15f;
}

.t-script-card {
    background: #252525;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 12px;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.t-script-card:hover {
    transform: translateY(-2px);
    border-color: #555;
    background: #2a2a2a;
}

.t-card-title {
    font-weight: bold;
    color: #eee;
    font-size: 1em;
}

.t-card-desc {
    font-size: 0.8em;
    color: #777;
    line-height: 1.3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

/* \u5BFC\u5165 Modal */
.t-imp-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    display: none;
    justify-content: center;
    align-items: center;
}

.t-imp-box {
    width: 400px;
    max-width: 90%;
    background: #1e1e1e;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.t-imp-row {
    margin-bottom: 15px;
}

.t-imp-label {
    display: block;
    color: #aaa;
    margin-bottom: 5px;
    font-size: 0.9em;
}

/* ===== \u5267\u672C\u7F16\u8F91\u5668 ===== */
#t-editor-view {
    width: 550px;
    max-width: 95vw;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    background: #121212;
}

#t-editor-view .t-body {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#t-editor-view .t-body label {
    display: block;
    color: #aaa;
    font-size: 0.9em;
    margin-bottom: 3px;
}

#t-editor-view .t-body textarea#ed-prompt {
    flex-grow: 1;
    min-height: 150px;
    resize: none;
}

#t-editor-view .t-btn-row {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #333;
    flex-shrink: 0;
}

/* \u5927\u5C4F\u7F16\u8F91\u5668 */
#t-large-edit-view {
    width: 800px;
    max-width: 95vw;
}

#t-large-edit-view .t-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
}

#t-large-edit-view .t-btn-row {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    flex-shrink: 0;
}

/* \u79FB\u52A8\u7AEF\u5206\u7C7B\u4E0B\u62C9\u9009\u62E9\u5668 - \u9ED8\u8BA4\u9690\u85CF */
.t-mgr-mobile-cat {
    display: none;
    position: relative;
}

/* \u79FB\u52A8\u7AEF\u5206\u7C7B\u7F16\u8F91\u6309\u94AE */
.t-mgr-cat-edit-btn {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: #888;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 0.9em;
    transition: 0.2s;
    z-index: 1;
}

.t-mgr-cat-edit-btn:hover {
    color: #bfa15f;
}

.t-mgr-cat-edit-btn:active {
    color: #fff;
}

.t-mgr-cat-dropdown {
    width: 100%;
    padding: 10px 15px;
    background: #1e1e1e;
    border: none;
    border-bottom: 1px solid #333;
    color: #eee;
    font-size: 1em;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
}

.t-mgr-cat-dropdown:focus {
    outline: none;
    background-color: #252525;
}

.t-mgr-cat-dropdown option {
    background: #1e1e1e;
    color: #eee;
    padding: 10px;
}

@media screen and (max-width: 600px) {
    .t-mgr-body {
        flex-direction: column;
    }

    /* \u79FB\u52A8\u7AEF\u9690\u85CF\u684C\u9762\u4FA7\u8FB9\u680F\uFF0C\u663E\u793A\u4E0B\u62C9\u9009\u62E9\u5668 */
    .t-mgr-sidebar {
        display: none !important;
    }

    .t-mgr-mobile-cat {
        display: block;
        flex-shrink: 0;
    }

    .t-mgr-footer-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.6);
    }

    .t-batch-active .t-mgr-list {
        padding-bottom: 60px !important;
    }

    #t-mgr-view {
        height: 80vh;
        max-height: 85vh;
    }

    .t-selector-panel {
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
    }

    .t-sel-body {
        flex-direction: column;
    }

    .t-sel-sidebar {
        width: 100%;
        max-height: 50px;
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        border-right: none;
        border-bottom: 1px solid #333;
        padding: 5px;
        gap: 8px;
        white-space: nowrap;
        flex-shrink: 0;
    }

    /* \u79FB\u52A8\u7AEF\u641C\u7D22\u6846\u9002\u914D */
    .t-sel-search-input {
        width: 120px;
    }

    .t-sel-search-input:focus {
        width: 140px;
    }

    .t-sel-cat-btn {
        text-align: center;
        border-left: none;
        padding: 6px 12px;
        height: 32px;
        display: flex;
        align-items: center;
        background: #222;
        border: 1px solid #333;
    }

    .t-sel-cat-btn.active {
        background: #bfa15f;
        color: #000;
        border: 1px solid #bfa15f;
        border-left: 1px solid #bfa15f;
    }

    .t-sel-grid {
        grid-template-columns: 1fr;
        padding: 10px;
    }
}

/* === favs.css === */
/* css/favs.css - \u6536\u85CF\u4E0E\u56FE\u9274 */

.t-fav-container {
    height: 90vh;
    width: 1100px;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    background: #121212;
    overflow: hidden;
    position: relative;
    isolation: isolate;
}

.t-fav-toolbar {
    height: 60px;
    background: #1e1e1e;
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 15px;
    flex-shrink: 0;
}

.t-fav-filter-select,
.t-fav-search {
    background: #2a2a2a;
    color: #eee;
    border: 1px solid #444;
    padding: 6px 10px;
    border-radius: 4px;
    outline: none;
}

.t-fav-filter-select {
    min-width: 120px;
    cursor: pointer;
}

.t-fav-search {
    width: 200px;
}

/* \u7F51\u683C */
.t-fav-grid-area {
    flex-grow: 1;
    padding: 25px;
    overflow-y: auto;
    background: #121212;
}

.t-fav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.t-fav-empty {
    text-align: center;
    color: #555;
    margin-top: 50px;
    grid-column: 1/-1;
}

/* \u5361\u7247 */
.t-fav-card {
    position: relative;
    overflow: hidden;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 12px;
    height: 180px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.t-fav-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top center;
    opacity: 0.5;
    transition: all 0.5s ease;
    z-index: 0;
}

.t-fav-card-bg.no-img {
    background: linear-gradient(135deg, #1f1f1f, #2a2a2a);
    opacity: 1;
    filter: none;
}

.t-fav-card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%);
    z-index: 1;
    pointer-events: none;
}

.t-fav-card:hover {
    transform: translateY(-5px);
    border-color: #666;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.t-fav-card:hover .t-fav-card-bg {
    opacity: 0.6;
    transform: scale(1.05);
}

.t-fav-card-content {
    position: relative;
    z-index: 2;
    padding: 15px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
}

.t-fav-card-script {
    font-weight: bold;
    font-size: 1.1em;
    color: #fff;
    margin-bottom: 2px;
}

.t-fav-card-char {
    font-size: 0.85em;
    color: #bfa15f;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
}

.t-fav-card-snippet {
    font-size: 0.85em;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 8px;
    font-style: italic;
}

.t-fav-card-footer {
    font-size: 0.75em;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 8px;
}

/* \u9605\u8BFB\u5668 overlay */
.t-fav-reader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0b0b0b;
    z-index: 10;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.t-fav-reader.show {
    transform: translateX(0);
}

.t-read-header {
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #181818;
}

.t-read-body {
    flex-grow: 1;
    padding: 0;
    overflow-y: auto;
    color: #ccc;
    position: relative;
    background: #0b0b0b;
}

#t-read-capture-zone {
    background: #0b0b0b;
    padding: 0;
    width: 100%;
    min-height: 100%;
    font-size: 1.05em;
    line-height: 1.6;
    text-align: justify;
    display: flex;
    flex-direction: column;
}

#t-read-content {
    width: 100%;
    min-height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

#t-read-content>div {
    flex-grow: 1;
    margin: 0 !important;
    width: 100% !important;
    max-width: none !important;
    border-radius: 0 !important;
    border: none !important;
    min-height: 100%;
    box-sizing: border-box;
}

/* \u56FE\u9274\u7BA1\u7406 overlay */
.t-img-mgr-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.2s;
}

.t-img-mgr-box {
    width: 600px;
    max-width: 95%;
    height: 70vh;
    background: #1e1e1e;
    border: 1px solid #444;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
}

.t-img-list {
    flex-grow: 1;
    overflow-y: auto;
    padding: 15px;
}

.t-img-item {
    display: flex;
    align-items: center;
    background: #252525;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    border: 1px solid #333;
    gap: 15px;
}

.t-img-preview {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-color: #111;
    background-size: cover;
    background-position: center;
    border: 1px solid #444;
    flex-shrink: 0;
    position: relative;
}

.t-img-preview.no-img::after {
    content: "\u65E0\u56FE";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    font-size: 0.8em;
}

.t-img-info {
    flex-grow: 1;
    min-width: 0;
}

.t-img-name {
    font-weight: bold;
    color: #eee;
    font-size: 1.1em;
    margin-bottom: 5px;
}

.t-img-path {
    font-size: 0.8em;
    color: #777;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.t-img-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
}

.t-act-btn {
    padding: 6px 10px;
    border: 1px solid #444;
    background: #333;
    color: #ccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85em;
    transition: 0.2s;
}

.t-act-btn:hover {
    background: #444;
    color: #fff;
    border-color: #666;
}

.t-act-btn.auto {
    color: #bfa15f;
    border-color: rgba(191, 161, 95, 0.3);
}

.t-act-btn.auto:hover {
    background: rgba(191, 161, 95, 0.1);
}

/* \u65B0\u7A97\u53E3\u6253\u5F00\u6309\u94AE - \u4E92\u52A8\u5185\u5BB9\u9AD8\u4EAE */
#t-read-open-window.has-interactive {
    color: #4ade80;
    border-color: rgba(74, 222, 128, 0.4);
    background: rgba(74, 222, 128, 0.1);
    animation: pulse-green 2s infinite;
}

#t-read-open-window.has-interactive:hover {
    background: rgba(74, 222, 128, 0.2);
    border-color: rgba(74, 222, 128, 0.6);
}

@keyframes pulse-green {

    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.3);
    }

    50% {
        box-shadow: 0 0 8px 2px rgba(74, 222, 128, 0.2);
    }
}

/* ========== \u6279\u91CF\u7F16\u8F91\u6A21\u5F0F\u6837\u5F0F ========== */

/* \u7F16\u8F91\u6A21\u5F0F\u5DE5\u5177\u680F */
.t-fav-toolbar-edit {
    background: linear-gradient(135deg, #1a2a1a 0%, #1e1e1e 100%);
    border-bottom: 1px solid #3a5a3a;
}

/* \u5371\u9669\u6309\u94AE\uFF08\u5220\u9664\uFF09 */
.t-tool-btn.t-btn-danger {
    color: #ff6b6b;
    border-color: rgba(255, 107, 107, 0.3);
}

.t-tool-btn.t-btn-danger:hover:not(:disabled) {
    background: rgba(255, 107, 107, 0.15);
    border-color: rgba(255, 107, 107, 0.5);
}

.t-tool-btn.t-btn-danger:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

/* \u5361\u7247\u590D\u9009\u6846\uFF08\u9ED8\u8BA4\u9690\u85CF\uFF09 */
.t-fav-card-checkbox {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 28px;
    height: 28px;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 5;
    color: #fff;
    font-size: 1.1em;
    transition: all 0.2s ease;
    backdrop-filter: blur(4px);
}

/* \u7F16\u8F91\u6A21\u5F0F\u4E0B\u663E\u793A\u590D\u9009\u6846 */
.t-fav-grid.edit-mode .t-fav-card-checkbox {
    display: flex;
}

/* \u590D\u9009\u6846\u60AC\u505C\u6548\u679C */
.t-fav-card:hover .t-fav-card-checkbox {
    background: rgba(0, 0, 0, 0.85);
    border-color: rgba(255, 255, 255, 0.5);
}

/* \u9009\u4E2D\u72B6\u6001\u7684\u5361\u7247 */
.t-fav-card.selected {
    border-color: #4ade80;
    box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.3), 0 8px 20px rgba(0, 0, 0, 0.4);
}

.t-fav-card.selected .t-fav-card-checkbox {
    background: rgba(74, 222, 128, 0.9);
    border-color: #4ade80;
    color: #000;
}

.t-fav-card.selected .t-fav-card-overlay {
    background: linear-gradient(to bottom,
            rgba(74, 222, 128, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0.9) 100%);
}

/* \u7F16\u8F91\u6A21\u5F0F\u4E0B\u5361\u7247\u60AC\u505C\u6548\u679C\u8C03\u6574 */
.t-fav-grid.edit-mode .t-fav-card:hover {
    transform: translateY(-3px);
    cursor: pointer;
}

.t-fav-grid.edit-mode .t-fav-card:active {
    transform: translateY(-1px);
}

/* ========== \u54CD\u5E94\u5F0F\u5E03\u5C40 ========== */

@media screen and (max-width: 600px) {
    .t-fav-toolbar {
        flex-direction: column;
        height: auto;
        padding: 10px;
        align-items: stretch;
    }

    .t-fav-search {
        width: 100%;
    }

    .t-read-meta-text {
        max-width: 120px;
    }

    /* \u79FB\u52A8\u7AEF\u7F16\u8F91\u5DE5\u5177\u680F */
    .t-fav-toolbar-edit {
        flex-direction: column;
        gap: 10px;
    }

    .t-fav-toolbar-edit>div {
        justify-content: center;
        flex-wrap: wrap;
    }

    /* \u79FB\u52A8\u7AEF\u590D\u9009\u6846\u66F4\u5927\u66F4\u6613\u70B9\u51FB */
    .t-fav-card-checkbox {
        width: 32px;
        height: 32px;
        font-size: 1.2em;
    }
}

/* === debug.css === */
/* css/debug.css - \u6781\u7B80\u4EE3\u7801\u7F16\u8F91\u5668\u98CE\u683C (\u542B\u79FB\u52A8\u7AEF\u9002\u914D) */

/* === \u57FA\u7840\u6837\u5F0F (Desktop First) === */

.t-dbg-container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    /* VS Code \u6DF1\u8272\u80CC\u666F */
    color: #cccccc;
    font-family: var(--t-font-global);
    overflow: hidden;
    /* \u79FB\u52A8\u7AEF\u9632\u6296\u52A8 */
    max-width: 100vw;
}

/* \u9876\u90E8\u72B6\u6001\u680F */
.t-dbg-header-bar {
    height: 32px;
    background: #252526;
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 0.85em;
    color: #888;
    gap: 20px;
    flex-shrink: 0;
    white-space: nowrap;
    overflow-x: auto;
    /* \u9632\u6B62\u5C0F\u5C4F\u6587\u5B57\u6EA2\u51FA */
    scrollbar-width: none;
    /* \u9690\u85CF\u6EDA\u52A8\u6761 */
}

.t-dbg-header-bar::-webkit-scrollbar {
    display: none;
}

.t-dbg-stat-item {
    display: flex;
    align-items: center;
    gap: 6px;
}

.t-dbg-stat-item i {
    color: #bfa15f;
}

.t-dbg-highlight {
    color: #eee;
    font-family: var(--t-font-mono);
}

/* \u4E3B\u4F53\u5E03\u5C40\uFF1A\u5DE6\u53F3\u5206\u680F */
.t-dbg-body {
    flex-grow: 1;
    display: flex;
    overflow: hidden;
}

/* \u5DE6\u4FA7\uFF1A\u53C2\u6570\u4FA7\u8FB9\u680F */
.t-dbg-sidebar {
    width: 220px;
    background: #252526;
    border-right: 1px solid #333;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    flex-shrink: 0;
    overflow-y: auto;
}

.t-param-group {
    padding: 10px 15px;
    border-bottom: 1px solid #2d2d2d;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.t-param-title {
    font-size: 0.75em;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 8px;
    font-weight: bold;
    letter-spacing: 0.5px;
}

.t-param-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 0.9em;
    gap: 10px;
    /* \u9632\u6B62\u6587\u5B57\u7C98\u8FDE */
}

.t-param-key {
    color: #999;
    white-space: nowrap;
}

.t-param-val {
    color: #ddd;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.t-param-val.warn {
    color: #d7ba7d;
}

.t-param-val.error {
    color: #f48771;
}

.t-param-val.ok {
    color: #89d185;
}

/* \u53F3\u4FA7\uFF1A\u6E90\u7801\u4E3B\u533A\u57DF */
.t-dbg-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    overflow: hidden;
    min-width: 0;
    /* \u9632\u6B62 Flex \u5B50\u9879\u6EA2\u51FA */
}

.t-editor-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #333;
    min-height: 0;
}

.t-editor-section:last-child {
    border-bottom: none;
}

.t-section-label {
    background: #2d2d2d;
    padding: 4px 15px;
    font-size: 0.8em;
    color: #aaa;
    border-bottom: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
}

.t-code-textarea {
    flex-grow: 1;
    background: #1e1e1e;
    color: #9cdcfe;
    border: none;
    resize: none;
    padding: 10px 15px;
    font-family: var(--t-font-mono);
    font-size: 13px;
    line-height: 1.5;
    outline: none;
    white-space: pre;
    overflow: auto;
}

.t-code-textarea.user-ctx {
    color: #ce9178;
}

/* \u5E95\u90E8\u64CD\u4F5C\u680F */
.t-dbg-footer {
    padding: 10px 15px;
    background: #252526;
    border-top: 1px solid #333;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
}

/* === \u{1F4F1} \u79FB\u52A8\u7AEF\u9002\u914D (Media Queries) === */
@media screen and (max-width: 700px) {

    /* 1. \u4E3B\u4F53\u6D41\u5411\u6539\u4E3A\u5782\u76F4 */
    .t-dbg-body {
        flex-direction: column;
    }

    /* 2. \u4FA7\u8FB9\u680F\u53D8\u8EAB\u4E3A\u9876\u90E8\u6A2A\u5411\u6EDA\u52A8\u6761 */
    .t-dbg-sidebar {
        width: 100%;
        height: 85px;
        /* \u56FA\u5B9A\u9AD8\u5EA6 */
        flex-direction: row;
        /* \u5185\u5BB9\u6A2A\u6392 */
        overflow-x: auto;
        /* \u5141\u8BB8\u6A2A\u5411\u6EDA\u52A8 */
        overflow-y: hidden;
        border-right: none;
        border-bottom: 1px solid #333;
        background: #222;
        padding: 0;
        /* \u9690\u85CF\u6EDA\u52A8\u6761\u4F46\u4FDD\u7559\u529F\u80FD */
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .t-dbg-sidebar::-webkit-scrollbar {
        display: none;
    }

    /* 3. \u53C2\u6570\u7EC4\u53D8\u4E3A\u5361\u7247\u6837\u5F0F */
    .t-param-group {
        min-width: 140px;
        /* \u6700\u5C0F\u5BBD\u5EA6\uFF0C\u9632\u6B62\u6324\u538B */
        border-bottom: none;
        border-right: 1px solid #333;
        padding: 5px 12px;
        flex-shrink: 0;
        /* \u9632\u6B62\u88AB\u6324\u5C0F */
    }

    /* \u8C03\u6574\u53C2\u6570\u6587\u5B57\u5927\u5C0F */
    .t-param-title {
        margin-bottom: 4px;
        font-size: 0.7em;
    }

    .t-param-row {
        margin-bottom: 2px;
        font-size: 0.8em;
    }

    /* 4. \u4EE3\u7801\u533A\u57DF\u81EA\u9002\u5E94 */
    .t-dbg-main {
        height: calc(100% - 85px);
        /* \u51CF\u53BB\u9876\u90E8\u6A2A\u6761\u9AD8\u5EA6 */
    }

    /* 5. \u5934\u90E8\u72B6\u6001\u680F\u7CBE\u7B80 */
    .t-dbg-header-bar {
        font-size: 0.75em;
        padding: 0 10px;
        gap: 12px;
    }
}

/* --- \u4EE3\u7801\u6298\u53E0\u5217\u8868\u6837\u5F0F (\u65B0\u589E) --- */

/* \u66FF\u6362\u539F\u6765\u7684 textarea\uFF0C\u6539\u4E3A div \u5BB9\u5668 */
.t-code-viewer {
    flex-grow: 1;
    background: #1e1e1e;
    color: #ce9178;
    /* User Context \u9ED8\u8BA4\u8272 */
    overflow-y: auto;
    font-family: var(--t-font-mono);
    font-size: 13px;
    padding: 0;
}

/* \u6BCF\u4E00\u884C\u7684\u5BB9\u5668 */
.t-fold-row {
    border-bottom: 1px solid #2a2a2a;
}

/* \u53EF\u70B9\u51FB\u7684\u6807\u9898\u884C */
.t-fold-head {
    padding: 6px 15px;
    background: #252526;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #cccccc;
    user-select: none;
    transition: background 0.2s;
}

.t-fold-head:hover {
    background: #2d2d2d;
}

/* \u6807\u9898\u91CC\u7684\u56FE\u6807 */
.t-fold-icon {
    width: 16px;
    font-size: 0.8em;
    color: #888;
    transition: transform 0.2s;
    margin-right: 5px;
}

/* \u5C55\u5F00\u72B6\u6001\u65CB\u8F6C\u56FE\u6807 */
.t-fold-row.open .t-fold-icon {
    transform: rotate(90deg);
}

/* \u6807\u9898\u6587\u5B57 */
.t-fold-title {
    font-weight: bold;
    color: #9cdcfe;
    margin-right: 10px;
}

.t-fold-meta {
    font-size: 0.85em;
    color: #666;
    font-style: italic;
}

/* \u9690\u85CF\u7684\u5185\u5BB9\u4F53 */
.t-fold-body {
    display: none;
    padding: 10px 15px;
    background: #1e1e1e;
    white-space: pre-wrap;
    /* \u4FDD\u7559\u6362\u884C */
    line-height: 1.5;
    border-left: 3px solid #333;
    /* \u89C6\u89C9\u5F15\u5BFC\u7EBF */
    color: #d4d4d4;
}

/* \u6FC0\u6D3B\u65F6\u663E\u793A */
.t-fold-row.open .t-fold-body {
    display: block;
}

/* System Prompt \u4FDD\u6301\u539F\u6765\u7684 Textarea \u6837\u5F0F\uFF0C\u4F46\u6539\u4E2A\u540D\u9632\u51B2\u7A81 */
.t-simple-editor {
    flex-grow: 1;
    background: #1e1e1e;
    color: #9cdcfe;
    border: none;
    resize: none;
    padding: 10px 15px;
    font-family: var(--t-font-mono);
    font-size: 13px;
    outline: none;
    white-space: pre-wrap;
    overflow: auto;
}

/* === lore-review.css === */
/* css/lore-review.css */

/* \u7A97\u53E3\u5BB9\u5668 */
.t-lore-review-window {
    width: 950px;
    height: 750px;
    max-width: 95vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    background: rgba(30, 30, 35, 0.95);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    color: #e2e8f0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    /* \u4E3A\u4E0B\u62C9\u83DC\u5355\u63D0\u4F9B\u5B9A\u4F4D\u4E0A\u4E0B\u6587 */
}

.t-window-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* \u5173\u952E\uFF1A\u9632\u6B62 body \u6EA2\u51FA */
}

/* \u7A97\u53E3\u5934\u90E8 */
.t-window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.t-window-title {
    font-size: 1.2em;
    font-weight: 700;
    background: linear-gradient(90deg, #90cdf4, #bfa15f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    gap: 10px;
    text-shadow: 0 0 20px rgba(144, 205, 244, 0.3);
}

.t-window-title i {
    -webkit-text-fill-color: initial;
    color: #90cdf4;
}

.t-window-controls {
    margin-left: auto;
    display: flex;
    align-items: center;
}

.t-window-close {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.2s;
    color: #a0aec0;
}

.t-window-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}

/* \u9876\u90E8\u63A7\u5236\u680F */
.t-lore-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.t-control-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.t-control-group label {
    color: #a0aec0;
    font-size: 0.9em;
}

.t-control-group select,
.t-control-group input[type="number"],
.t-control-group input[type="text"] {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
}

.t-control-group select:focus,
.t-control-group input[type="number"]:focus,
.t-control-group input[type="text"]:focus {
    border-color: #90cdf4;
}

/* \u9488\u5BF9 datalist \u7684\u8F93\u5165\u6846\u6837\u5F0F\u5FAE\u8C03 */
input[list]::-webkit-calendar-picker-indicator {
    opacity: 0.6;
    filter: invert(1);
    cursor: pointer;
}

input[list]:hover::-webkit-calendar-picker-indicator {
    opacity: 1;
}

/* \u4E3B\u5185\u5BB9\u533A */
.t-lore-content {
    flex: 1;
    display: flex;
    overflow: hidden;
}

/* \u5DE6\u4FA7\u5217\u8868\u5BB9\u5668 */
.t-lore-list-container {
    width: 380px;
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.1);
}

.t-list-header {
    padding: 12px 15px;
    background: rgba(255, 255, 255, 0.03);
    font-weight: 600;
    font-size: 0.9em;
    color: #cbd5e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.t-list-actions .t-btn {
    padding: 2px 8px;
    font-size: 0.8em;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #a0aec0;
}

.t-list-actions .t-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
}

.t-lore-list {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
}

/* \u5217\u8868\u9879\u5361\u7247 */
.t-lore-entry-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
}

.t-lore-entry-item:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.t-lore-entry-item.active {
    background: rgba(144, 205, 244, 0.1);
    border-color: rgba(144, 205, 244, 0.4);
}

/* \u5DE6\u4FA7\u6307\u793A\u6761 */
.t-lore-entry-item::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #718096;
    /* \u9ED8\u8BA4\u989C\u8272 */
    opacity: 0.5;
    transition: opacity 0.2s;
}

.t-lore-entry-item.active::before {
    opacity: 1;
    background: #90cdf4;
}

/* \u5206\u7C7B\u989C\u8272\u6307\u793A */
.t-lore-entry-item[data-cat="Location"]::before {
    background: #48bb78;
}

.t-lore-entry-item[data-cat="Character"]::before {
    background: #f6ad55;
}

.t-lore-entry-item[data-cat="Item"]::before {
    background: #9f7aea;
}

.t-lore-entry-item[data-cat="Event"]::before {
    background: #f56565;
}

/* \u66F4\u65B0\u72B6\u6001\u6837\u5F0F */
.t-lore-entry-item.t-is-update {
    border-left: 1px solid #ecc94b;
}

.t-lore-entry-item.t-is-update::before {
    background: #ecc94b !important;
}

.t-lore-entry-item.t-is-update .t-entry-keys i {
    color: #ecc94b;
    animation: t-spin 2s linear infinite;
    animation-play-state: paused;
}

.t-lore-entry-item.t-is-update:hover .t-entry-keys i {
    animation-play-state: running;
}

@keyframes t-spin {
    100% {
        transform: rotate(360deg);
    }
}

.t-entry-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
}

.t-entry-keys {
    font-weight: 600;
    color: #e2e8f0;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.95em;
}

.t-entry-tag {
    font-size: 0.7em;
    padding: 2px 6px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    color: #a0aec0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.t-entry-preview {
    font-size: 0.85em;
    color: #a0aec0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* \u53F3\u4FA7\u7F16\u8F91\u5668 */
.t-lore-editor-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 25px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.05);
}

.t-editor-header {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 25px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #90cdf4;
    display: flex;
    align-items: center;
    gap: 10px;
}

.t-lore-editor .t-form-group {
    margin-bottom: 25px;
}

.t-lore-editor label {
    display: block;
    margin-bottom: 8px;
    color: #cbd5e0;
    font-weight: 500;
    font-size: 0.9em;
}

.t-lore-editor input[type="text"],
.t-lore-editor select,
.t-lore-editor textarea {
    width: 100%;
    padding: 12px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    font-size: 0.95em;
    transition: all 0.2s;
}

.t-lore-editor input[type="text"]:focus,
.t-lore-editor select:focus,
.t-lore-editor textarea:focus {
    border-color: #90cdf4;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0 3px rgba(144, 205, 244, 0.1);
    outline: none;
}

.t-lore-editor textarea {
    line-height: 1.6;
    resize: vertical;
}

.t-static-text {
    padding: 12px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    color: #a0aec0;
    font-size: 0.9em;
    border: 1px dashed rgba(255, 255, 255, 0.1);
}

.t-update-info-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: rgba(236, 201, 75, 0.1);
    border: 1px solid rgba(236, 201, 75, 0.3);
    border-radius: 8px;
    color: #ecc94b;
    font-size: 0.9em;
}

.t-btn-xs {
    padding: 2px 8px;
    font-size: 0.8em;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #a0aec0;
    border-radius: 4px;
    cursor: pointer;
}

.t-btn-xs:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
}

/* \u5E95\u90E8\u64CD\u4F5C\u680F */
.t-window-footer {
    padding: 15px 25px;
    background: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.t-target-select {
    display: flex;
    align-items: center;
    gap: 12px;
}

.t-target-select select {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    min-width: 220px;
}

.t-btn-success {
    background: linear-gradient(135deg, #48bb78, #38a169);
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
    transition: all 0.2s;
}

.t-btn-success:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(72, 187, 120, 0.4);
}

.t-btn-success:disabled {
    background: #4a5568;
    color: #a0aec0;
    cursor: not-allowed;
    box-shadow: none;
}

.t-btn-primary {
    background: linear-gradient(135deg, #4299e1, #3182ce);
    border: none;
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
    transition: all 0.2s;
}

.t-btn-primary:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(66, 153, 225, 0.4);
}

/* \u72B6\u6001\u63D0\u793A */
.t-loading-state,
.t-empty-state,
.t-error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #718096;
    text-align: center;
    padding: 40px;
}

.t-loading-state i,
.t-empty-state i,
.t-error-state i {
    font-size: 3em;
    margin-bottom: 20px;
    opacity: 0.3;
}

.t-error-state {
    color: #fc8181;
}

/* \u6A21\u578B\u4E0B\u62C9\u83DC\u5355\u6837\u5F0F */
.t-window-icon {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.2s;
    color: #a0aec0;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.t-window-icon:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}

.t-model-dropdown {
    position: absolute;
    top: 55px;
    /* \u7A0D\u5FAE\u4F4E\u4E8E\u6807\u9898\u680F\u5E95\u90E8 */
    right: 20px;
    width: 300px;
    background: rgba(30, 30, 35, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    padding: 12px;
    z-index: 10000;
    /* \u63D0\u9AD8 z-index \u786E\u4FDD\u5728\u6700\u4E0A\u5C42 */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.t-dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 0.9em;
    color: #cbd5e0;
}

.t-dropdown-header button {
    padding: 4px 8px;
    font-size: 0.8em;
}

.t-model-dropdown select {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    padding: 8px;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.2s;
}

.t-model-dropdown select:focus {
    border-color: #90cdf4;
}

/* \u79FB\u52A8\u7AEF\u9002\u914D */
@media (max-width: 768px) {
    .t-lore-review-window {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0;
        border: none;
        position: fixed;
        /* \u5F3A\u5236\u56FA\u5B9A */
        top: 0;
        left: 0;
    }

    .t-lore-content {
        flex-direction: column;
        overflow: hidden;
        /* \u786E\u4FDD\u5185\u5BB9\u533A\u4E0D\u6EA2\u51FA */
    }

    .t-lore-list-container {
        width: 100%;
        height: 35%;
        /* \u5217\u8868\u5360 35% */
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        flex-shrink: 0;
        /* \u9632\u6B62\u88AB\u538B\u7F29 */
        overflow-y: auto;
        /* \u786E\u4FDD\u5217\u8868\u53EF\u6EDA\u52A8 */
    }

    .t-lore-editor-container {
        height: 65%;
        /* \u8BE6\u60C5\u5360 65% */
        padding: 15px;
        overflow-y: auto;
        /* \u786E\u4FDD\u8BE6\u60C5\u53EF\u6EDA\u52A8 */
    }

    .t-window-footer {
        flex-direction: column;
        gap: 10px;
        padding: 10px 15px;
    }

    .t-target-select {
        width: 100%;
    }

    .t-target-select select {
        flex: 1;
        min-width: 0;
    }

    .t-footer-actions {
        width: 100%;
    }

    .t-footer-actions button {
        width: 100%;
    }

    .t-lore-controls {
        padding: 10px 15px;
    }

    .t-model-dropdown {
        width: calc(100% - 40px);
        right: 20px;
        left: 20px;
    }
}

`;
  document.head.appendChild(style);
}
function ensureOverlay() {
  if ($("#t-overlay").length === 0) {
    const overlayHtml = '<div id="t-overlay" class="t-overlay"></div>';
    $("body").append(overlayHtml);
  }
  return $("#t-overlay");
}
var init_dom = __esm({
  "src/utils/dom.js"() {
  }
});

// src/core/state.js
function resetContinuationState() {
  GlobalState.continuation = {
    isActive: false,
    retryCount: 0,
    originalContent: "",
    accumulatedContent: "",
    originalPrompt: "",
    characterName: "",
    userName: ""
  };
}
function pushSceneToHistory(content, scriptId, scriptName) {
  const history = GlobalState.sceneHistory;
  const newItem = {
    content,
    scriptId,
    scriptName: scriptName || "\u672A\u77E5\u5267\u672C",
    timestamp: Date.now(),
    isRead: false
    // 新生成的默认未读
  };
  history.items.unshift(newItem);
  while (history.items.length > history.maxItems) {
    history.items.pop();
  }
  history.currentIndex = 0;
  GlobalState.lastGeneratedContent = content;
  GlobalState.lastGeneratedScriptId = scriptId;
  GlobalState.lastFavId = null;
  console.log(`[Titania] \u5267\u573A\u5386\u53F2\u5DF2\u66F4\u65B0: ${history.items.length} \u6761\u8BB0\u5F55`);
}
function getCurrentHistoryItem() {
  const history = GlobalState.sceneHistory;
  if (history.currentIndex < 0 || history.currentIndex >= history.items.length) {
    return null;
  }
  return history.items[history.currentIndex];
}
function navigateToPrevHistory() {
  const history = GlobalState.sceneHistory;
  if (history.currentIndex < history.items.length - 1) {
    history.currentIndex++;
    syncCurrentHistoryToState();
    return true;
  }
  return false;
}
function navigateToNextHistory() {
  const history = GlobalState.sceneHistory;
  if (history.currentIndex > 0) {
    history.currentIndex--;
    syncCurrentHistoryToState();
    return true;
  }
  return false;
}
function syncCurrentHistoryToState() {
  const item = getCurrentHistoryItem();
  if (item) {
    GlobalState.lastGeneratedContent = item.content;
    GlobalState.lastGeneratedScriptId = item.scriptId;
    GlobalState.lastFavId = null;
    item.isRead = true;
  }
}
function markCurrentAsRead() {
  const item = getCurrentHistoryItem();
  if (item) {
    item.isRead = true;
  }
}
function getUnreadCount() {
  return GlobalState.sceneHistory.items.filter((item) => !item.isRead).length;
}
function getHistoryNavState() {
  const history = GlobalState.sceneHistory;
  return {
    hasPrev: history.currentIndex < history.items.length - 1,
    hasNext: history.currentIndex > 0,
    current: history.items.length > 0 ? history.currentIndex + 1 : 0,
    total: history.items.length
  };
}
var GlobalState;
var init_state = __esm({
  "src/core/state.js"() {
    GlobalState = {
      isGenerating: false,
      abortController: null,
      // 中断控制器 (AbortController 实例)
      runtimeScripts: [],
      // 加载好的剧本列表 (预设 + 自定义)
      lastGeneratedContent: "",
      // 上一次生成的结果 HTML
      lastUsedScriptId: "",
      // 上一次用户手动选择的剧本 ID (用于 UI 显示)
      lastGeneratedScriptId: "",
      // 上一次生成内容对应的剧本 ID (可能是后台自动生成的)
      lastFavId: null,
      // 当前内容对应的收藏 ID（null 表示未收藏）
      currentCategoryFilter: "ALL",
      // 当前的分类筛选器状态
      generationMode: "narrative",
      // 生成模式: "narrative"(内容优先) | "visual"(氛围美化)
      useHistoryAnalysis: false,
      // 是否读取聊天历史（默认关闭）
      skipWorldBookCheck: false,
      // 跳过世界书空检查（本次会话内有效）
      skipInteractiveHint: false,
      // 跳过互动内容提示弹窗（本次会话内有效）
      // 计时器相关
      timerStartTime: 0,
      // 计时开始时间戳
      timerInterval: null,
      // 计时器 interval ID
      lastGenerationTime: 0,
      // 上次生成耗时 (毫秒)
      // 自动续写相关
      continuation: {
        isActive: false,
        // 是否正在进行续写
        retryCount: 0,
        // 当前续写次数
        originalContent: "",
        // 原始内容（未被截断前）
        accumulatedContent: "",
        // 累积的完整内容
        // 优化：保存原始请求上下文，确保续写连贯性
        originalPrompt: "",
        // 原始剧本的 prompt
        characterName: "",
        // 角色名
        userName: ""
        // 用户名
      },
      // 剧场历史记录队列
      sceneHistory: {
        items: [],
        // 历史记录数组，每项 { content, scriptId, scriptName, timestamp, isRead }
        currentIndex: -1,
        // 当前查看的索引 (-1 表示没有历史)
        maxItems: 5
        // 最多保留的历史记录数量
      }
    };
  }
});

// src/config/presets.js
var DEFAULT_PRESETS;
var init_presets = __esm({
  "src/config/presets.js"() {
    DEFAULT_PRESETS = [
      // === 建议开启「读取聊天历史」的剧本 ===
      { id: "e_mind", name: "\u{1F50D} \u6B64\u523B\u5FC3\u58F0", category: "\u5FC3\u7406\u5206\u6790", desc: "\u89E3\u6790\u89D2\u8272\u5728\u521A\u521A\u5BF9\u8BDD\u7ED3\u675F\u540E\u7684\u771F\u5B9E\u5FC3\u7406\u6D3B\u52A8\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u8BF7\u6839\u636E\u4E0A\u6587\u7684\u5BF9\u8BDD\u8BB0\u5F55\uFF0C\u5206\u6790 {{char}} \u6B64\u523B\u672A\u8BF4\u51FA\u53E3\u7684\u771F\u5B9E\u60F3\u6CD5\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u84DD\u8272\u534A\u900F\u660E\u80CC\u666F\uFF0C\u767D\u8272\u5B57\u4F53\uFF0C\u6A21\u62DFHUD\u62AC\u5934\u663E\u793A\u5668\u6548\u679C\uFF0C\u5E26\u6709\u95EA\u70C1\u7684\u5149\u6807\u3002\u5185\u5BB9\u683C\u5F0F\uFF1A[\u8868\u9762\u6001\u5EA6] vs [\u5185\u5FC3\u72EC\u767D]\u3002" },
      { id: "e_diary", name: "\u{1F4D4} \u79C1\u5BC6\u65E5\u8BB0", category: "\u5FC3\u7406\u5206\u6790", desc: "\u89D2\u8272\u5728\u4ECA\u5929\u7ED3\u675F\u540E\u5199\u4E0B\u7684\u4E00\u7BC7\u65E5\u8BB0\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u57FA\u4E8E\u521A\u624D\u53D1\u751F\u7684\u4E8B\u4EF6\uFF0C\u5199\u4E00\u7BC7 {{char}} \u7684\u65E5\u8BB0\u3002CSS\u6837\u5F0F\uFF1A\u7F8A\u76AE\u7EB8\u7EB9\u7406\u80CC\u666F\uFF0C\u624B\u5199\u4F53\uFF0C\u6DF1\u8910\u8272\u58A8\u6C34\u6548\u679C\uFF0C\u7EB8\u5F20\u8FB9\u7F18\u5E26\u6709\u505A\u65E7\u611F\u3002\u5185\u5BB9\u91CD\u70B9\uFF1A\u89D2\u8272\u5982\u4F55\u770B\u5F85\u4E0E {{user}} \u7684\u6700\u65B0\u4E92\u52A8\uFF0C\u4EE5\u53CA\u60C5\u611F\u6CE2\u52A8\u3002" },
      { id: "e_qidian", name: "\u{1F4D6} \u8D77\u70B9\u4E66\u8BC4", category: "\u8DA3\u5473\u5410\u69FD", desc: "\u5982\u679C\u4F60\u4EEC\u7684\u6545\u4E8B\u662F\u4E00\u672C\u8FDE\u8F7D\u7F51\u6587\uFF0C\u8BFB\u8005\u7684\u7280\u5229\u70B9\u8BC4\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u5047\u8BBE {{char}} \u548C {{user}} \u662F\u67D0\u672C\u70ED\u95E8\u8FDE\u8F7D\u7F51\u6587\u7684\u4E3B\u89D2\u3002\u8BF7\u751F\u6210\u4E00\u6BB5\u4E66\u8BC4\u533A\uFF08\u7AE0\u8BF4\uFF09\u7684\u5185\u5BB9\u3002\u5305\u62EC\uFF1A\u50AC\u66F4\u3001\u5BF9\u521A\u624D\u5267\u60C5\u7684\u5410\u69FD\u3001\u78D5CP\u7684\u8A00\u8BBA\u3001\u4EE5\u53CA\u5BF9\u89D2\u8272\u667A\u5546\u7684\u5206\u6790\u3002CSS\u6837\u5F0F\uFF1A\u6D45\u7070\u8272\u80CC\u666F\uFF0C\u6DF1\u8272\u6587\u5B57\uFF0C\u6A21\u4EFF\u624B\u673A\u9605\u8BFBAPP\u7684\u8BC4\u8BBA\u533A\u5E03\u5C40\uFF0C\u5E26\u6709'\u70ED\u8BC4'\u3001'\u70B9\u8D5E\u6570'\u7B49\u5143\u7D20\u3002" },
      { id: "e_danmu", name: "\u{1F4FA} \u5410\u69FD\u5F39\u5E55", category: "\u8DA3\u5473\u5410\u69FD", desc: "\u9AD8\u80FD\u9884\u8B66\uFF01\u521A\u624D\u7684\u5267\u60C5\u5982\u679C\u901A\u8FC7\u76F4\u64AD\u64AD\u51FA\u4F1A\u600E\u6837\uFF1F(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u5C06\u521A\u624D\u7684\u4E92\u52A8\u89C6\u4E3A\u4E00\u573A\u76F4\u64AD\u6216\u756A\u5267\u66F4\u65B0\u3002\u8BF7\u751F\u6210\u98D8\u8FC7\u7684\u5F39\u5E55\u5185\u5BB9\u3002\u5185\u5BB9\u98CE\u683C\uFF1A\u73A9\u6897\u3001'\u524D\u65B9\u9AD8\u80FD'\u3001'AWSL'\u3001'\u6025\u6B7B\u6211\u4E86'\u3001\u5BF9 {{char}} \u7684\u5FAE\u8868\u60C5\u8FDB\u884C\u9010\u5E27\u5206\u6790\u3002CSS\u6837\u5F0F\uFF1A\u534A\u900F\u660E\u9ED1\u8272\u906E\u7F69\u80CC\u666F\uFF0C\u5F69\u8272\u6EDA\u52A8\u5B57\u4F53\uFF08\u6A21\u62DF\u89C6\u9891\u5F39\u5E55\u5C42\uFF09\uFF0C\u5B57\u4F53\u5927\u5C0F\u4E0D\u4E00\uFF0C\u8425\u9020\u70ED\u95D8\u611F\u3002" },
      { id: "e_forum", name: "\u{1F4AC} \u533F\u540D\u6811\u6D1E", category: "\u8DA3\u5473\u5410\u69FD", desc: "\u89D2\u8272\uFF08\u6216\u8DEF\u4EBA\uFF09\u5728\u533F\u540D\u8BBA\u575B\u53D1\u7684\u6C42\u52A9/\u5410\u69FD\u8D34\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u8BF7\u6A21\u62DF {{char}} (\u6216\u8005\u88AB\u5377\u5165\u7684\u8DEF\u4EBA) \u5728\u533F\u540D\u8BBA\u575B(\u5982Reddit\u6216NGA)\u53D1\u5E03\u7684\u4E00\u4E2A\u5E16\u5B50\u3002\u6807\u9898\u8981\u9707\u60CA\uFF0C\u5185\u5BB9\u662F\u5173\u4E8E\u521A\u624D\u53D1\u751F\u7684\u4E8B\u4EF6\u3002CSS\u6837\u5F0F\uFF1A\u6A21\u4EFF\u8BBA\u575B\u7F51\u9875\u98CE\u683C\uFF0C\u5E26\u6709'\u697C\u4E3B'\u6807\u8BC6\uFF0C\u5F15\u7528\u56DE\u590D\u6846\uFF0C\u80CC\u666F\u8272\u4E3A\u62A4\u773C\u7C73\u8272\u6216\u6697\u8272\u6A21\u5F0F\u3002" },
      { id: "e_bloopers", name: "\u{1F3AC} \u7535\u5F71\u82B1\u7D6E", category: "\u8DA3\u5473\u5410\u69FD", desc: "'\u5361\uFF01' \u521A\u624D\u90A3\u6BB5\u5176\u5B9E\u662F\u62CD\u620F\uFF1F\u6765\u770B\u770BNG\u955C\u5934\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u5047\u8BBE\u521A\u624D\u7684\u5267\u60C5\u662F\u5728\u62CD\u620F\u3002\u8BF7\u64B0\u5199\u4E00\u6BB5'\u5E55\u540E\u82B1\u7D6E'\u3002\u4F8B\u5982\uFF1A{{char}} \u5FD8\u8BCD\u4E86\u3001\u7B11\u573A\u4E86\u3001\u9053\u5177\u574F\u4E86\uFF0C\u6216\u8005\u5BFC\u6F14\u558A\u5361\u540E {{char}} \u77AC\u95F4\u51FA\u620F\u5BF9 {{user}} \u8BF4\u4E86\u4EC0\u4E48\u3002CSS\u6837\u5F0F\uFF1A\u80F6\u5377\u5E95\u7247\u98CE\u683C\u8FB9\u6846\uFF0C\u9ED1\u767D\u6216\u590D\u53E4\u6EE4\u955C\u80CC\u666F\uFF0C\u6253\u5B57\u673A\u5B57\u4F53\u3002" },
      { id: "e_system", name: "\u{1F4DF} \u7CFB\u7EDF\u62A5\u544A", category: "\u5FC3\u7406\u5206\u6790", desc: "Galgame\u98CE\u683C\u7684\u597D\u611F\u5EA6\u4E0E\u72B6\u6001\u7ED3\u7B97\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u8BF7\u4EE5\u604B\u7231\u517B\u6210\u6E38\u620F\uFF08\u6216RPG\u7CFB\u7EDF\uFF09\u7684\u89C6\u89D2\uFF0C\u751F\u6210\u4E00\u4EFD'\u4E8B\u4EF6\u7ED3\u7B97\u62A5\u544A'\u3002\u5185\u5BB9\u5305\u62EC\uFF1A{{char}} \u7684\u597D\u611F\u5EA6\u53D8\u5316\u6570\u503C\uFF08+/-\uFF09\u3001\u5FC3\u60C5\u6307\u6570\u3001San\u503C\u6CE2\u52A8\u3001\u4EE5\u53CA\u7CFB\u7EDF\u5BF9 {{user}} \u4E0B\u4E00\u6B65\u64CD\u4F5C\u7684\u63D0\u793A\u3002CSS\u6837\u5F0F\uFF1A\u8D5B\u535A\u79D1\u5E7B\u60AC\u6D6E\u7A97\uFF0C\u534A\u900F\u660E\u73BB\u7483\u62DF\u6001\uFF0C\u9713\u8679\u8272\u8FDB\u5EA6\u6761\u3002" },
      { id: "e_drunk", name: "\u{1F37A} \u9152\u540E\u771F\u8A00", category: "\u5FC3\u7406\u5206\u6790", desc: "\u89D2\u8272\u559D\u9189\u540E\uFF0C\u8DDF\u9152\u4FDD\u5410\u69FD\u8FD9\u4E00\u8FDE\u4E32\u7684\u4E8B\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u573A\u666F\uFF1A{{char}} \u6B63\u5728\u9152\u5427\u4E70\u9189\u3002\u8BF7\u64B0\u5199\u4E00\u6BB5\u4ED6/\u5979\u5BF9\u9152\u4FDD\u7684\u5410\u69FD\uFF0C\u5185\u5BB9\u5168\u662F\u5173\u4E8E {{user}} \u7684\uFF0C\u5145\u6EE1\u4E86\u6094\u6068\u3001\u8FF7\u604B\u6216\u62B1\u6028\u3002CSS\u6837\u5F0F\uFF1A\u660F\u6697\u7684\u9152\u5427\u6C1B\u56F4\uFF0C\u6587\u5B57\u5E26\u6709\u6A21\u7CCA\u91CD\u5F71\u6548\u679C\uFF08\u6A21\u62DF\u9189\u9152\u89C6\u89C9\uFF09\u3002" },
      { id: "e_wechat", name: "\u{1F4F1} \u670B\u53CB\u5708/\u63A8\u7279", category: "\u8DA3\u5473\u5410\u69FD", desc: "\u4EC5\u5BF9\u65B9\u53EF\u89C1\uFF08\u6216\u5FD8\u8BB0\u5C4F\u853D\uFF09\u7684\u793E\u4EA4\u52A8\u6001\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u57FA\u4E8E\u521A\u624D\u7684\u5267\u60C5\uFF0C{{char}} \u53D1\u4E86\u4E00\u6761\u793E\u4EA4\u5A92\u4F53\u52A8\u6001\uFF08\u670B\u53CB\u5708/Twitter\uFF09\u3002\u5185\u5BB9\u53EF\u80FD\u662F\u4E00\u5F20\u914D\u56FE\u7684\u6587\u5B57\uFF08\u7528\u6587\u5B57\u63CF\u8FF0\u56FE\u7247\uFF09\uFF0C\u6216\u8005\u4E00\u53E5\u542B\u6C99\u5C04\u5F71\u7684\u8BDD\u3002CSS\u6837\u5F0F\uFF1A\u6A21\u4EFF\u624B\u673AAPP\u754C\u9762\uFF0C\u5E26\u6709\u5934\u50CF\u3001\u65F6\u95F4\u6233\u3001\u70B9\u8D5E\u548C\u8BC4\u8BBA\u6309\u94AE\u3002" },
      { id: "e_dream", name: "\u{1F319} \u5348\u591C\u68A6\u56DE", category: "\u5FC3\u7406\u5206\u6790", desc: "\u5F53\u665A\u89D2\u8272\u505A\u7684\u68A6\uFF0C\u6620\u5C04\u4E86\u767D\u5929\u7684\u7ECF\u5386\u3002(\u5EFA\u8BAE\u5F00\u542F\u5386\u53F2)", prompt: "\u591C\u6DF1\u4E86\uFF0C{{char}} \u5165\u7761\u540E\u505A\u4E86\u4E00\u4E2A\u68A6\u3002\u68A6\u5883\u5185\u5BB9\u662F\u767D\u5929\u4E8B\u4EF6\u7684\u626D\u66F2\u3001\u5938\u5F20\u6216\u6F5C\u610F\u8BC6\u6298\u5C04\u3002\u98CE\u683C\u8981\u8FF7\u5E7B\u3001\u8C61\u5F81\u4E3B\u4E49\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u7D2B\u8272\u661F\u7A7A\u80CC\u666F\uFF0C\u6726\u80E7\u7684\u767D\u8272\u5149\u6655\u6587\u5B57\uFF0C\u8425\u9020\u68A6\u5E7B\u611F\u3002" },
      // === 平行世界风格剧本（无需聊天历史） ===
      { id: "p_school", name: "\u{1F3EB} \u9752\u6625\u6821\u56ED", category: "\u5E73\u884C\u4E16\u754C", desc: "\u73B0\u4EE3\u9AD8\u4E2DPA\u3002\u540C\u684C\u3001\u4F20\u7EB8\u6761\u3001\u5348\u540E\u7684\u64CD\u573A\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u73B0\u4EE3\u9AD8\u4E2D\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u73ED\u91CC\u7684\u4F18\u7B49\u751F\u6216\u4E0D\u826F\u5C11\u5E74\uFF0C{{user}} \u662F\u540C\u684C\u3002\u63CF\u5199\u4E00\u6BB5\u4E0A\u8BFE\u6084\u6084\u4E92\u52A8\u6216\u653E\u5B66\u540E\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u4F5C\u4E1A\u672C\u6A2A\u7EBF\u7EB8\u80CC\u666F\uFF0C\u5706\u73E0\u7B14\u624B\u5199\u5B57\uFF0C\u6E05\u65B0\u6821\u56ED\u98CE\u3002" },
      { id: "p_fantasy", name: "\u2694\uFE0F \u897F\u5E7B\u53F2\u8BD7", category: "\u5E73\u884C\u4E16\u754C", desc: "\u5251\u4E0E\u9B54\u6CD5\u3002\u5192\u9669\u8005\u516C\u4F1A\u3001\u7BDD\u706B\u4E0E\u5730\u4E0B\u57CE\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1AD&D\u897F\u5E7B\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u7CBE\u7075/\u9A91\u58EB/\u6CD5\u5E08\uFF0C{{user}} \u662F\u961F\u53CB\u3002\u63CF\u5199\u4E00\u6BB5\u521A\u653B\u7565\u5B8C\u5730\u4E0B\u57CE\u540E\uFF0C\u5728\u7BDD\u706B\u65C1\u4F11\u606F\u64E6\u62ED\u6B66\u5668\u7684\u6E29\u99A8\uFF08\u6216\u66A7\u6627\uFF09\u7247\u6BB5\u3002CSS\u6837\u5F0F\uFF1A\u7C97\u7CD9\u77F3\u7816\u80CC\u666F\uFF0C\u706B\u5149\u8272\u6587\u5B57\uFF0C\u7F8A\u76AE\u5377\u8F74\u8FB9\u6846\u3002" },
      { id: "p_cyber", name: "\u{1F916} \u8D5B\u535A\u670B\u514B", category: "\u5E73\u884C\u4E16\u754C", desc: "\u591C\u4E4B\u57CE\u3002\u4E49\u4F53\u533B\u751F\u3001\u9ED1\u5BA2\u4E0E\u9713\u8679\u96E8\u591C\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u8D5B\u535A\u670B\u514B2077\u98CE\u683C\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002\u573A\u666F\u662F\u4E0B\u7740\u9178\u96E8\u7684\u9713\u8679\u90FD\u5E02\u3002{{char}} \u6B63\u5728\u4E3A {{user}} \u7EF4\u4FEE\u6545\u969C\u7684\u4E49\u4F53\uFF0C\u6216\u8005\u8FDB\u884C\u975E\u6CD5\u7684\u82AF\u7247\u4EA4\u6613\u3002CSS\u6837\u5F0F\uFF1A\u6545\u969C\u827A\u672F(Glitch)\u98CE\u683C\uFF0C\u9ED1\u5E95\u7EFF\u5B57\uFF0C\u5E26\u6709\u968F\u673A\u7684\u6570\u636E\u4E71\u7801\u88C5\u9970\u3002" },
      { id: "p_xianxia", name: "\u{1F3D4}\uFE0F \u4ED9\u4FA0\u4FEE\u771F", category: "\u5E73\u884C\u4E16\u754C", desc: "\u5E08\u5C0A\u4E0E\u5F92\u5F1F\uFF0C\u6216\u8005\u6B63\u90AA\u4E0D\u4E24\u7ACB\u7684\u4FEE\u4ED9\u754C\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u53E4\u98CE\u4FEE\u4ED9\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u9AD8\u51B7\u7684\u5E08\u5C0A\u6216\u9B54\u6559\u6559\u4E3B\uFF0C{{user}} \u662F\u5F1F\u5B50\u6216\u6B63\u9053\u5C11\u4FA0\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u6D1E\u5E9C\u4FEE\u70BC\u3001\u4F20\u529F\u6216\u5BF9\u5CD9\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u6C34\u58A8\u5C71\u6C34\u753B\u80CC\u666F\uFF0C\u5178\u96C5\u53E4\u98CE\u8FB9\u6846\u3002" },
      { id: "p_office", name: "\u{1F4BC} \u804C\u573A\u7CBE\u82F1", category: "\u5E73\u884C\u4E16\u754C", desc: "\u9738\u603B\u3001\u79D8\u4E66\u6216\u52A0\u73ED\u7684\u540C\u4E8B\u3002\u8336\u6C34\u95F4\u7684\u6545\u4E8B\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u73B0\u4EE3\u804C\u573A\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u4E25\u5389\u7684\u4E0A\u53F8\u6216\u75B2\u60EB\u7684\u524D\u8F88\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u8336\u6C34\u95F4\u5076\u9047\uFF0C\u6216\u8005\u6DF1\u591C\u5728\u529E\u516C\u5BA4\u52A0\u73ED\u5403\u5916\u5356\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u7B80\u7EA6\u5546\u52A1\u98CE\uFF0C\u767D\u5E95\u9ED1\u5B57\uFF0C\u6A21\u4EFFEmail\u6216\u529E\u516C\u8F6F\u4EF6\u754C\u9762\u3002" },
      { id: "p_detective", name: "\u{1F575}\uFE0F \u9ED1\u8272\u4FA6\u63A2", category: "\u5E73\u884C\u4E16\u754C", desc: "\u4E0A\u4E16\u7EAA40\u5E74\u4EE3\uFF0C\u7235\u58EB\u4E50\u3001\u96E8\u591C\u4E0E\u79C1\u5BB6\u4FA6\u63A2\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u9ED1\u8272\u7535\u5F71Noir\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u843D\u9B44\u4FA6\u63A2\u6216\u81F4\u547D\u4F34\u4FA3\u3002\u573A\u666F\u662F\u70DF\u96FE\u7F2D\u7ED5\u7684\u4E8B\u52A1\u6240\uFF0C\u7A97\u5916\u4E0B\u7740\u5927\u96E8\u3002\u7528\u7B2C\u4E00\u4EBA\u79F0\u72EC\u767D\u98CE\u683C\u63CF\u5199\u3002CSS\u6837\u5F0F\uFF1A\u9ED1\u767D\u7535\u5F71\u6EE4\u955C\uFF0C\u6253\u5B57\u673A\u5B57\u4F53\uFF0C\u8001\u7167\u7247\u8D28\u611F\u3002" },
      { id: "p_harry", name: "\u{1FA84} \u9B54\u6CD5\u5B66\u9662", category: "\u5E73\u884C\u4E16\u754C", desc: "\u5206\u9662\u5E3D\u3001\u9B54\u836F\u8BFE\u4E0E\u9B41\u5730\u5947\u6BD4\u8D5B\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u9B54\u6CD5\u5B66\u9662\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u548C {{user}} \u7A7F\u7740\u4E0D\u540C\u5B66\u9662\u7684\u5DEB\u5E08\u888D\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u56FE\u4E66\u9986\u7981\u4E66\u533A\u591C\u6E38\uFF0C\u6216\u8005\u9B54\u836F\u8BFE\u70B8\u4E86\u5769\u57DA\u540E\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u7EA2\u8272\u6216\u6DF1\u7EFF\u8272\u5929\u9E45\u7ED2\u8D28\u611F\u80CC\u666F\uFF0C\u91D1\u8272\u886C\u7EBF\u5B57\u4F53\uFF0C\u9B54\u6CD5\u706B\u82B1\u88C5\u9970\u3002" },
      { id: "p_apocalypse", name: "\u{1F9DF} \u672B\u65E5\u751F\u5B58", category: "\u5E73\u884C\u4E16\u754C", desc: "\u4E27\u5C38\u7206\u53D1\u6216\u5E9F\u571F\u4E16\u754C\u3002\u8D44\u6E90\u532E\u4E4F\u4E0B\u7684\u4FE1\u4EFB\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u672B\u65E5\u5E9F\u571F\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002\u4E16\u754C\u5DF2\u6BC1\u706D\uFF0C\u8D44\u6E90\u532E\u4E4F\u3002{{char}} \u548C {{user}} \u8EB2\u5728\u4E00\u5904\u5E9F\u589F\u4E2D\u907F\u96E8\u6216\u8EB2\u907F\u602A\u7269\u3002\u63CF\u5199\u5206\u4EAB\u4EC5\u5B58\u7684\u4E00\u7F50\u7F50\u5934\u65F6\u7684\u5BF9\u8BDD\u3002CSS\u6837\u5F0F\uFF1A\u751F\u9508\u91D1\u5C5E\u7EB9\u7406\u80CC\u666F\uFF0C\u88C2\u75D5\u6548\u679C\uFF0C\u6C61\u6E0D\u6591\u70B9\u3002" },
      { id: "p_royal", name: "\u{1F451} \u5BAB\u5EF7\u6743\u8C0B", category: "\u5E73\u884C\u4E16\u754C", desc: "\u7687\u5E1D/\u5973\u738B\u4E0E\u6743\u81E3/\u523A\u5BA2\u3002\u534E\u4E3D\u7B3C\u5B50\u91CC\u7684\u535A\u5F08\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u4E2D\u4E16\u7EAA/\u53E4\u4EE3\u5BAB\u5EF7\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u638C\u63E1\u6743\u529B\u7684\u7687\u5BA4\u6210\u5458\uFF0C{{user}} \u662F\u4F8D\u536B\u6216\u653F\u6CBB\u8054\u59FB\u5BF9\u8C61\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u5BDD\u5BAB\u5185\u4F4E\u58F0\u5BC6\u8C0B\u6216\u5BF9\u5CD9\u7684\u573A\u666F\uFF0C\u5F20\u529B\u62C9\u6EE1\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u7D2B\u8272\u4E1D\u7EF8\u80CC\u666F\uFF0C\u91D1\u8272\u8FB9\u6846\uFF0C\u534E\u4E3D\u7684\u82B1\u7EB9\u88C5\u9970\u3002" },
      { id: "p_cthulhu", name: "\u{1F419} \u514B\u82CF\u9C81", category: "\u5E73\u884C\u4E16\u754C", desc: "\u4E0D\u53EF\u540D\u72B6\u7684\u6050\u6016\uFF0C\u6389San\u503C\u7684\u8C03\u67E5\u5458\u6545\u4E8B\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u514B\u82CF\u9C81\u795E\u8BDD\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u30021920\u5E74\u4EE3\uFF0C{{char}} \u548C {{user}} \u662F\u8C03\u67E5\u5458\u3002\u4F60\u4EEC\u53D1\u73B0\u4E86\u4E00\u672C\u53E4\u602A\u7684\u4E66\u6216\u4E00\u4E2A\u8BE1\u5F02\u7684\u796D\u575B\u3002{{char}} \u7684\u7406\u667A\u503C\uFF08Sanity\uFF09\u5F00\u59CB\u4E0B\u964D\uFF0C\u8BF4\u8BDD\u53D8\u5F97\u766B\u72C2\u3002CSS\u6837\u5F0F\uFF1A\u6697\u7EFF\u8272\u7C98\u6DB2\u8D28\u611F\u80CC\u666F\uFF0C\u626D\u66F2\u7684\u5B57\u4F53\uFF0C\u6587\u5B57\u5468\u56F4\u5E26\u6709\u6A21\u7CCA\u7684\u9ED1\u96FE\u6548\u679C\u3002" }
    ];
  }
});

// src/core/scriptData.js
function loadScripts() {
  const data = getExtData();
  const userScripts = data.user_scripts || [];
  const disabledIDs = data.disabled_presets || [];
  GlobalState.runtimeScripts = DEFAULT_PRESETS.filter((p) => !disabledIDs.includes(p.id)).map((p) => ({ ...p, _type: "preset" }));
  userScripts.forEach((s) => {
    if (!GlobalState.runtimeScripts.find((r) => r.id === s.id)) {
      GlobalState.runtimeScripts.push({
        ...s,
        _type: "user"
      });
    }
  });
}
function saveUserScript(s) {
  const data = getExtData();
  let u = data.user_scripts || [];
  u = u.filter((x) => x.id !== s.id);
  u.push(s);
  data.user_scripts = u;
  saveExtData();
  loadScripts();
}
function deleteUserScript(id) {
  const data = getExtData();
  let u = data.user_scripts || [];
  u = u.filter((x) => x.id !== id);
  data.user_scripts = u;
  saveExtData();
  loadScripts();
}
var init_scriptData = __esm({
  "src/core/scriptData.js"() {
    init_storage();
    init_state();
    init_presets();
  }
});

// src/core/logger.js
var TitaniaLogger;
var init_logger = __esm({
  "src/core/logger.js"() {
    init_storage();
    init_defaults();
    init_state();
    TitaniaLogger = {
      logs: [],
      maxLogs: 50,
      // 内存中最多保留50条，刷新即清空
      add: function(type, message, details = null) {
        const entry = {
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
          type,
          // 'INFO', 'WARN', 'ERROR'
          message,
          details,
          // 记录基础环境上下文，从 GlobalState 获取
          context: {
            scriptId: GlobalState.lastUsedScriptId || "none",
            isGenerating: GlobalState.isGenerating
          }
        };
        this.logs.unshift(entry);
        if (this.logs.length > this.maxLogs) this.logs.pop();
        if (type === "ERROR") console.error("[Titania Debug]", message, details);
      },
      info: function(msg, details) {
        this.add("INFO", msg, details);
      },
      warn: function(msg, details) {
        this.add("WARN", msg, details);
      },
      // 专门用于记录报错，支持传入上下文对象
      error: function(msg, errObj, contextData = {}) {
        let stack = "Unknown";
        let errMsg = "Unknown Error";
        if (errObj) {
          if (typeof errObj === "string") {
            errMsg = errObj;
          } else {
            errMsg = errObj.message || "Error Object";
            stack = errObj.stack || JSON.stringify(errObj);
          }
        }
        if (contextData && contextData.network && contextData.network.status) {
          msg += ` [HTTP ${contextData.network.status}]`;
        }
        this.add("ERROR", msg, {
          error_message: errMsg,
          stack_trace: stack,
          diagnostics: contextData
        });
      },
      // 导出并下载日志
      downloadReport: function() {
        const data = getExtData();
        const configSnapshot = JSON.parse(JSON.stringify(data.config || {}));
        if (configSnapshot.profiles && Array.isArray(configSnapshot.profiles)) {
          configSnapshot.profiles.forEach((p) => {
            if (p.key && p.key.length > 5) {
              p.key = p.key.substring(0, 3) + "***(HIDDEN)";
            } else if (p.key) {
              p.key = "***(HIDDEN)";
            }
          });
        }
        if (configSnapshot.key) configSnapshot.key = "***(HIDDEN)";
        let stVersion = "Unknown";
        try {
          if (typeof SillyTavern !== "undefined" && SillyTavern.version) stVersion = SillyTavern.version;
          else if (typeof extension_settings !== "undefined" && window.SillyTavernVersion) stVersion = window.SillyTavernVersion;
        } catch (e) {
        }
        const reportObj = {
          meta: {
            extension: extensionName,
            extension_version: `v${CURRENT_VERSION}`,
            st_version: stVersion,
            userAgent: navigator.userAgent,
            screen_res: `${window.screen.width}x${window.screen.height}`,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            time: (/* @__PURE__ */ new Date()).toLocaleString(),
            timestamp: Date.now()
          },
          config: configSnapshot,
          logs: this.logs
        };
        const content = JSON.stringify(reportObj, null, 2);
        const blob = new Blob([content], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Titania_Debug_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };
  }
});

// src/core/context.js
import { world_info, selected_world_info } from "../../../world-info.js";
import { power_user } from "../../../power-user.js";
function getWorldInfoVars() {
  try {
    return {
      selected_world_info: selected_world_info || [],
      world_info: world_info || null
    };
  } catch (e) {
    console.warn("Titania: \u83B7\u53D6\u4E16\u754C\u4E66\u53D8\u91CF\u5931\u8D25", e);
    return { selected_world_info: [], world_info: null };
  }
}
function withTimeout(promise, timeout = 5e3, errorMsg = "Operation timed out") {
  return Promise.race([
    promise,
    new Promise(
      (_, reject) => setTimeout(() => reject(new Error(errorMsg)), timeout)
    )
  ]);
}
async function safeLoadWorldInfo(ctx, bookName, timeout = 5e3) {
  try {
    if (!ctx.loadWorldInfo || typeof ctx.loadWorldInfo !== "function") {
      console.warn(`Titania: loadWorldInfo \u51FD\u6570\u4E0D\u53EF\u7528`);
      return null;
    }
    const result = await withTimeout(
      ctx.loadWorldInfo(bookName),
      timeout,
      `\u52A0\u8F7D\u4E16\u754C\u4E66 [${bookName}] \u8D85\u65F6`
    );
    return result;
  } catch (err) {
    console.warn(`Titania: \u65E0\u6CD5\u52A0\u8F7D\u4E16\u754C\u4E66 [${bookName}]`, err.message);
    return null;
  }
}
async function getActiveWorldInfoEntries() {
  if (typeof SillyTavern === "undefined" || !SillyTavern.getContext) return [];
  let ctx;
  try {
    ctx = SillyTavern.getContext();
    if (!ctx) return [];
  } catch (e) {
    console.warn("Titania: \u65E0\u6CD5\u83B7\u53D6 SillyTavern context", e);
    return [];
  }
  const charId = ctx.characterId;
  const activeBooks = /* @__PURE__ */ new Set();
  const wiVars = getWorldInfoVars();
  if (wiVars.selected_world_info && Array.isArray(wiVars.selected_world_info)) {
    wiVars.selected_world_info.forEach((name) => activeBooks.add(name));
  }
  if (charId !== void 0 && ctx.characters && ctx.characters[charId]) {
    const charObj = ctx.characters[charId];
    const primary = charObj.data?.extensions?.world;
    if (primary) activeBooks.add(primary);
    const fileName = (charObj.avatar || "").replace(/\.[^/.]+$/, "");
    if (wiVars.world_info && wiVars.world_info.charLore) {
      const loreEntry = wiVars.world_info.charLore.find((e) => e.name === fileName);
      if (loreEntry && Array.isArray(loreEntry.extraBooks)) {
        loreEntry.extraBooks.forEach((name) => activeBooks.add(name));
      }
    }
  }
  if (ctx.chatMetadata && ctx.chatMetadata.world_info) {
    activeBooks.add(ctx.chatMetadata.world_info);
  }
  try {
    const personaWorld = power_user?.persona_description_lorebook;
    if (personaWorld) {
      activeBooks.add(personaWorld);
    }
  } catch (e) {
    console.warn("Titania: \u83B7\u53D6 Persona \u4E16\u754C\u4E66\u5931\u8D25", e);
  }
  const result = [];
  for (const bookName of activeBooks) {
    const bookData = await safeLoadWorldInfo(ctx, bookName);
    if (!bookData || !bookData.entries) continue;
    const enabledEntries = Object.values(bookData.entries).filter(
      (entry) => entry.disable === false || entry.enabled === true
    );
    if (enabledEntries.length > 0) {
      result.push({
        bookName,
        entries: enabledEntries.map((e) => ({
          uid: e.uid,
          comment: e.comment || `\u6761\u76EE ${e.uid}`,
          content: e.content || "",
          preview: (e.content || "").substring(0, 80).replace(/\n/g, " "),
          isConstant: e.constant === true
          // 标记是否为蓝灯条目，便于UI显示
        }))
      });
    }
  }
  return result;
}
async function getContextData() {
  let data = { charName: "Char", persona: "", userName: "User", userDesc: "", worldInfo: "" };
  if (typeof SillyTavern === "undefined" || !SillyTavern.getContext) return data;
  let ctx;
  try {
    ctx = SillyTavern.getContext();
    if (!ctx) return data;
  } catch (e) {
    console.warn("Titania: \u65E0\u6CD5\u83B7\u53D6 SillyTavern context", e);
    return data;
  }
  try {
    data.userName = ctx.substituteParams("{{user}}") || "User";
    data.charName = ctx.substituteParams("{{char}}") || "Char";
    data.userDesc = ctx.substituteParams("{{persona}}") || "";
    data.persona = ctx.substituteParams("{{description}}") || "";
  } catch (e) {
    console.error("Titania: \u5B8F\u89E3\u6790\u5931\u8D25", e);
  }
  const charId = ctx.characterId;
  const activeBooks = /* @__PURE__ */ new Set();
  const wiVars = getWorldInfoVars();
  if (wiVars.selected_world_info && Array.isArray(wiVars.selected_world_info)) {
    wiVars.selected_world_info.forEach((name) => activeBooks.add(name));
  }
  if (charId !== void 0 && ctx.characters && ctx.characters[charId]) {
    const charObj = ctx.characters[charId];
    const primary = charObj.data?.extensions?.world;
    if (primary) activeBooks.add(primary);
    const fileName = (charObj.avatar || "").replace(/\.[^/.]+$/, "");
    if (wiVars.world_info && wiVars.world_info.charLore) {
      const loreEntry = wiVars.world_info.charLore.find((e) => e.name === fileName);
      if (loreEntry && Array.isArray(loreEntry.extraBooks)) {
        loreEntry.extraBooks.forEach((name) => activeBooks.add(name));
      }
    }
  }
  if (ctx.chatMetadata && ctx.chatMetadata.world_info) {
    activeBooks.add(ctx.chatMetadata.world_info);
  }
  try {
    const personaWorld = power_user?.persona_description_lorebook;
    if (personaWorld) {
      activeBooks.add(personaWorld);
    }
  } catch (e) {
    console.warn("Titania: \u83B7\u53D6 Persona \u4E16\u754C\u4E66\u5931\u8D25", e);
  }
  const contentParts = [];
  const extData = getExtData();
  const wiConfig = extData.worldinfo || { char_selections: {} };
  const charSelections = wiConfig.char_selections[data.charName] || null;
  for (const bookName of activeBooks) {
    const bookData = await safeLoadWorldInfo(ctx, bookName);
    if (!bookData || !bookData.entries) continue;
    let enabledEntries = Object.values(bookData.entries).filter(
      (entry) => entry.disable === false || entry.enabled === true
    );
    if (charSelections && charSelections[bookName]) {
      const selectedUids = charSelections[bookName];
      enabledEntries = enabledEntries.filter((e) => selectedUids.includes(e.uid));
    } else if (charSelections === null) {
      enabledEntries = [];
    } else if (!charSelections[bookName]) {
      enabledEntries = [];
    }
    enabledEntries.forEach((e) => {
      if (e.content && e.content.trim()) {
        try {
          contentParts.push(ctx.substituteParams(e.content.trim()));
        } catch (subErr) {
          contentParts.push(e.content.trim());
        }
      }
    });
  }
  if (contentParts.length > 0) {
    data.worldInfo = "[World Info / Lore]\n" + contentParts.join("\n\n") + "\n\n";
  }
  return data;
}
var init_context = __esm({
  "src/core/context.js"() {
    init_storage();
  }
});

// src/utils/helpers.js
function detectInteractiveContent(html) {
  if (!html) return { isInteractive: false, reasons: [] };
  const reasons = [];
  if (/<script[\s>]/i.test(html)) {
    reasons.push("\u5305\u542B <script> \u6807\u7B7E");
  }
  const eventHandlers = [
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmouseout",
    "onmousemove",
    "onmouseenter",
    "onmouseleave",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onchange",
    "oninput",
    "onsubmit",
    "onreset",
    "onfocus",
    "onblur",
    "onload",
    "onerror",
    "onscroll",
    "onresize",
    "ontouchstart",
    "ontouchmove",
    "ontouchend",
    "ontouchcancel"
  ];
  const eventPattern = new RegExp(`\\s(${eventHandlers.join("|")})\\s*=`, "i");
  if (eventPattern.test(html)) {
    reasons.push("\u5305\u542B\u4E8B\u4EF6\u5904\u7406\u5668\u5C5E\u6027");
  }
  if (/<button[^>]*onclick/i.test(html) || /<input[^>]*type\s*=\s*["']?(button|submit)/i.test(html)) {
    reasons.push("\u5305\u542B\u4EA4\u4E92\u5F0F\u6309\u94AE");
  }
  if (/javascript:/i.test(html)) {
    reasons.push("\u5305\u542B javascript: \u534F\u8BAE");
  }
  if (/<form[\s>]/i.test(html) && /<input[\s>]/i.test(html)) {
    reasons.push("\u5305\u542B\u8868\u5355\u5143\u7D20");
  }
  return {
    isInteractive: reasons.length > 0,
    reasons
  };
}
function buildFullHtmlDocument(content, title = "Titania Echo - \u4E92\u52A8\u573A\u666F") {
  const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  const styles = styleMatch ? styleMatch.join("\n") : "";
  const bodyContent = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
    <style>
        /* \u57FA\u7840\u6837\u5F0F */
        * { box-sizing: border-box; }
        html, body {
            margin: 0;
            padding: 0;
            background: #0a0a0a;
            color: #e0e0e0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            min-height: 100vh;
        }
        body {
            padding: 20px;
        }
        a { color: #90cdf4; }
        img, video { max-width: 100%; height: auto; }
        
        /* \u7528\u6237\u81EA\u5B9A\u4E49\u6837\u5F0F */
    </style>
    ${styles}
</head>
<body>
${bodyContent}
</body>
</html>`;
}
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function openInNewWindow(html, scriptName = "\u4E92\u52A8\u573A\u666F") {
  console.log("[Titania] openInNewWindow \u88AB\u8C03\u7528\uFF0C\u539F\u59CBHTML\u957F\u5EA6:", html?.length || 0);
  const fullHtml = buildFullHtmlDocument(html, `${scriptName} - Titania Echo`);
  console.log("[Titania] \u6784\u5EFA\u540E\u5B8C\u6574HTML\u957F\u5EA6:", fullHtml?.length || 0);
  console.log("[Titania] \u5B8C\u6574HTML\u524D500\u5B57\u7B26:", fullHtml?.substring(0, 500));
  const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const newWindow = window.open(
    url,
    "_blank",
    "width=900,height=700,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes"
  );
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1e3);
  } else {
    console.warn("Titania: \u5F39\u7A97\u88AB\u62E6\u622A\uFF0C\u5C1D\u8BD5\u65B0\u6807\u7B7E\u9875");
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  return newWindow;
}
function exportAsHtmlFile(html, scriptName = "\u573A\u666F") {
  console.log("[Titania] exportAsHtmlFile \u88AB\u8C03\u7528\uFF0C\u539F\u59CBHTML\u957F\u5EA6:", html?.length || 0);
  const fullHtml = buildFullHtmlDocument(html, `${scriptName} - Titania Echo`);
  console.log("[Titania] \u6784\u5EFA\u540E\u5B8C\u6574HTML\u957F\u5EA6:", fullHtml?.length || 0);
  const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const safeFileName = scriptName.replace(/[<>:"/\\|?*]/g, "_").replace(/\s+/g, "_").substring(0, 50);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeFileName}_\u4E92\u52A8\u573A\u666F.html`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 100);
}
function buildFontStylesForShadowDOM() {
  try {
    const extData = getExtData();
    const fontSettings = extData.font_settings;
    if (!fontSettings || fontSettings.source === "default" || !fontSettings.source) {
      return { fontImport: "", forceOverride: false, fontFamily: "" };
    }
    const forceOverride = fontSettings.force_override === true;
    if (fontSettings.source === "online" && fontSettings.import_url && fontSettings.font_name) {
      return {
        fontImport: `@import url('${fontSettings.import_url}');`,
        forceOverride,
        fontFamily: `'${fontSettings.font_name}'`
      };
    }
    if (fontSettings.source === "upload" && fontSettings.font_data) {
      const fontName = fontSettings.font_name || "TitaniaCustomFont";
      return {
        fontImport: `
                    @font-face {
                        font-family: '${fontName}';
                        src: url('${fontSettings.font_data}') format('woff2');
                        font-weight: normal;
                        font-style: normal;
                        font-display: swap;
                    }
                `,
        forceOverride,
        fontFamily: `'${fontName}'`
      };
    }
    return { fontImport: "", forceOverride: false, fontFamily: "" };
  } catch (e) {
    console.warn("Titania: \u6784\u5EFA Shadow DOM \u5B57\u4F53\u6837\u5F0F\u5931\u8D25", e);
    return { fontImport: "", forceOverride: false, fontFamily: "" };
  }
}
function renderToShadowDOMReal(container, html) {
  container.innerHTML = "";
  const host = document.createElement("div");
  host.className = "t-shadow-host";
  host.style.cssText = "width:100%; min-height:100%;";
  const shadow = host.attachShadow({ mode: "open" });
  const fontInfo = buildFontStylesForShadowDOM();
  const forceOverrideStyles = fontInfo.forceOverride && fontInfo.fontFamily ? `
            /* \u5F3A\u5236\u8986\u76D6\u5185\u8054\u5B57\u4F53\u6837\u5F0F */
            .t-shadow-content * {
                font-family: ${fontInfo.fontFamily}, var(--t-font-global, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif) !important;
            }
            /* \u4FDD\u7559\u7B49\u5BBD\u5B57\u4F53\u5143\u7D20 */
            .t-shadow-content code,
            .t-shadow-content pre,
            .t-shadow-content kbd,
            .t-shadow-content samp {
                font-family: 'Consolas', 'Monaco', 'Courier New', monospace !important;
            }
        ` : "";
  const baseStyles = `
        <style>
            ${fontInfo.fontImport}
            :host {
                display: block;
                width: 100%;
                min-height: 100%;
            }
            * { box-sizing: border-box; }
            :host, .t-shadow-content {
                background: transparent;
                color: #e0e0e0;
                font-family: var(--t-font-global, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
                font-size: 14px;
                line-height: 1.6;
            }
            .t-shadow-content {
                padding: 0;
                min-height: 100%;
            }
            img, video { max-width: 100%; height: auto; }
            a { color: #90cdf4; }
            ${forceOverrideStyles}
        </style>
    `;
  shadow.innerHTML = baseStyles + `<div class="t-shadow-content">${html}</div>`;
  container.appendChild(host);
  return shadow;
}
function parseWhitelistInput(input) {
  if (!input || !input.trim()) return [];
  return input.split(/[,，\n]/).map((tag) => tag.trim()).map((tag) => tag.replace(/^<|>$/g, "")).filter((tag) => tag.length > 0 && /^[a-zA-Z_][a-zA-Z0-9_-]*$/.test(tag));
}
function extractContent(text, whitelist = []) {
  if (!text) return "";
  if (whitelist && whitelist.length > 0) {
    const extracted = [];
    for (const tag of whitelist) {
      const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
      let match;
      while ((match = regex.exec(text)) !== null) {
        const innerContent = match[1].trim();
        if (innerContent) {
          extracted.push(innerContent);
        }
      }
    }
    if (extracted.length > 0) {
      let result = extracted.join("\n");
      result = result.replace(/<[^>]*>?/gm, "");
      result = result.replace(/\n{3,}/g, "\n\n").trim();
      return result;
    }
  }
  let cleaned = text;
  cleaned = cleaned.replace(/<[^>]*>?/gm, "");
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n").trim();
  return cleaned;
}
function getChatHistory(limit, whitelist = []) {
  if (typeof SillyTavern === "undefined" || !SillyTavern.getContext) return "";
  const ctx = SillyTavern.getContext();
  const history = ctx.chat || [];
  const safeLimit = parseInt(limit) || 10;
  const domMessages = document.querySelectorAll("#chat .mes");
  const useDomCheck = domMessages.length === history.length;
  if (!useDomCheck) {
    console.warn(`Titania: DOM messages count (${domMessages.length}) != History count (${history.length}). Fallback to property check.`);
  }
  const visibleHistory = history.filter((msg, index) => {
    let isHidden = !!(msg.is_hidden || msg.isHidden || msg.is_system || // ST 使用 is_system 来标记隐藏的消息
    msg.extra && msg.extra.is_hidden);
    if (!isHidden && useDomCheck) {
      const el = domMessages[index];
      if (el) {
        if (el.hasAttribute("hidden") || el.style.display === "none" || el.classList.contains("hidden") || el.getAttribute("is_system") === "true") {
          isHidden = true;
        }
      }
    }
    const isDisabled = !!msg.disabled;
    if (isHidden) {
      return false;
    }
    if (isDisabled) {
      return false;
    }
    return true;
  });
  console.log(`Titania: History Analysis - Total: ${history.length}, Visible: ${visibleHistory.length}, Filtered: ${history.length - visibleHistory.length}`);
  const recent = visibleHistory.slice(-safeLimit);
  return recent.map((msg) => {
    let name = msg.name;
    if (msg.is_user) name = ctx.name1 || "User";
    if (name === "{{user}}") name = ctx.name1 || "User";
    if (name === "{{char}}") name = ctx.characters[ctx.characterId]?.name || "Char";
    let rawContent = msg.message || msg.mes || "";
    let cleanContent = extractContent(rawContent, whitelist);
    if (!cleanContent.trim()) {
      cleanContent = rawContent.replace(/<[^>]*>?/gm, "").trim();
    }
    return `${name}: ${cleanContent}`;
  }).join("\n");
}
function sanitizeAIOutput(rawContent) {
  if (!rawContent || typeof rawContent !== "string") return "";
  let content = rawContent;
  const originalContent = rawContent;
  const tagsToRemove = [
    "thinking",
    "think",
    // 思考过程
    "system",
    "note",
    "notes",
    // 系统/笔记
    "ooc",
    "OOC",
    // Out of Character
    "debug",
    "meta",
    // 调试/元信息
    "comment",
    "aside",
    // 注释/旁白
    "reflection",
    "planning",
    // 反思/规划
    "internal",
    "analysis"
    // 内部思考/分析
  ];
  tagsToRemove.forEach((tag) => {
    const regex = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
    content = content.replace(regex, "");
  });
  content = content.replace(/```html\s*/gi, "");
  content = content.replace(/```\s*/g, "");
  const htmlStartPatterns = [
    /<!DOCTYPE\s+html/i,
    // DOCTYPE 声明
    /<html[\s>]/i,
    // <html> 标签
    /<head[\s>]/i,
    // <head> 标签
    /<body[\s>]/i,
    // <body> 标签
    /<style[\s>]/i,
    // <style> 标签（很多 AI 会以此开头）
    /<div[\s>]/i,
    // <div> 标签
    /<section[\s>]/i,
    // <section> 标签
    /<article[\s>]/i,
    // <article> 标签
    /<main[\s>]/i,
    // <main> 标签
    /<header[\s>]/i,
    // <header> 标签
    /<p[\s>]/i,
    // <p> 标签
    /<span[\s>]/i,
    // <span> 标签
    /<h[1-6][\s>]/i
    // 标题标签
  ];
  let firstHtmlIndex = -1;
  for (const pattern of htmlStartPatterns) {
    const match = content.search(pattern);
    if (match !== -1) {
      if (firstHtmlIndex === -1 || match < firstHtmlIndex) {
        firstHtmlIndex = match;
      }
    }
  }
  if (firstHtmlIndex > 0) {
    content = content.substring(firstHtmlIndex);
  }
  const htmlEndPatterns = [
    /<\/html>\s*$/i,
    /<\/body>\s*$/i,
    /<\/div>\s*$/i,
    /<\/section>\s*$/i,
    /<\/article>\s*$/i,
    /<\/main>\s*$/i,
    /<\/style>\s*$/i,
    /<\/p>\s*$/i,
    /<\/span>\s*$/i,
    /<\/h[1-6]>\s*$/i
  ];
  let lastHtmlEndIndex = -1;
  for (const pattern of htmlEndPatterns) {
    const match = content.match(pattern);
    if (match) {
      const endIndex = content.lastIndexOf(match[0]) + match[0].length;
      if (endIndex > lastHtmlEndIndex) {
        lastHtmlEndIndex = endIndex;
      }
    }
  }
  if (lastHtmlEndIndex === -1) {
    const allClosingTags = content.match(/<\/[a-zA-Z][a-zA-Z0-9]*>\s*$/);
    if (allClosingTags) {
      lastHtmlEndIndex = content.lastIndexOf(allClosingTags[0]) + allClosingTags[0].length;
    }
  }
  if (lastHtmlEndIndex > 0 && lastHtmlEndIndex < content.length) {
    content = content.substring(0, lastHtmlEndIndex);
  }
  content = content.replace(/(\s|>)\*\*([^*<>]+)\*\*(\s|<)/g, "$1$2$3");
  content = content.replace(/(\s|>)__([^_<>]+)__(\s|<)/g, "$1$2$3");
  content = content.replace(/(\s|>)\*([^*<>\n]+)\*(\s|<)/g, "$1$2$3");
  content = content.replace(/^\s*#{1,6}\s+/gm, "");
  content = content.replace(/^\s*[-*+]\s+(?=[^\s<])/gm, "");
  content = content.replace(/^\s*\d+\.\s+(?=[^\s<])/gm, "");
  content = content.replace(/\n{3,}/g, "\n\n");
  content = content.trim();
  if (!content || content.length < 10) {
    console.warn("Titania: \u6E05\u6D17\u540E\u5185\u5BB9\u4E3A\u7A7A\uFF0C\u56DE\u9000\u5230\u539F\u59CB\u5185\u5BB9");
    return originalContent.replace(/```html\s*/gi, "").replace(/```\s*/g, "").trim();
  }
  return content;
}
function extractFromShadowDOM(container) {
  const shadowHost = container.querySelector(".t-shadow-host");
  if (shadowHost && shadowHost.shadowRoot) {
    try {
      const shadow = shadowHost.shadowRoot;
      const contentDiv = shadow.querySelector(".t-shadow-content");
      if (contentDiv) {
        let userStyles = "";
        shadow.querySelectorAll("style").forEach((style) => {
          const text = style.textContent || "";
          if (!text.includes(":host")) {
            userStyles += `<style>${text}</style>
`;
          }
        });
        return userStyles + contentDiv.innerHTML;
      }
    } catch (e) {
      console.warn("Titania: \u65E0\u6CD5\u4ECE Shadow DOM \u63D0\u53D6\u5185\u5BB9", e);
    }
  }
  const iframe = container.querySelector(".t-content-iframe");
  if (iframe) {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc && doc.body) {
        const bodyClone = doc.body.cloneNode(true);
        bodyClone.querySelectorAll("script").forEach((s) => s.remove());
        let userStyles = "";
        doc.querySelectorAll("head style").forEach((style) => {
          const text = style.textContent || "";
          if (!text.includes("box-sizing: border-box") || text.length > 500) {
            userStyles += `<style>${text}</style>
`;
          }
        });
        return userStyles + bodyClone.innerHTML;
      }
    } catch (e) {
      console.warn("Titania: \u65E0\u6CD5\u4ECE iframe \u63D0\u53D6\u5185\u5BB9", e);
    }
  }
  return container.innerHTML;
}
function estimateTokens(text) {
  if (!text) return 0;
  const clean = text.trim();
  if (clean.length === 0) return 0;
  const cjkCount = (clean.match(/[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/g) || []).length;
  const nonCjkStr = clean.replace(/[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/g, " ");
  const wordCount = nonCjkStr.split(/\s+/).filter((w) => w.length > 0).length;
  return Math.floor(cjkCount + wordCount * 1.3);
}
function detectTruncation(content, mode = "html") {
  if (!content || content.trim().length === 0) {
    return { isTruncated: false, reason: "empty", details: {} };
  }
  const result = {
    isTruncated: false,
    reason: "",
    details: {
      htmlCheck: null,
      sentenceCheck: null
    }
  };
  if (mode === "html" || mode === "both") {
    const htmlResult = checkHtmlTags(content);
    result.details.htmlCheck = htmlResult;
    if (htmlResult.isTruncated) {
      result.isTruncated = true;
      result.reason = htmlResult.reason;
    }
  }
  if (mode === "sentence" || mode === "both") {
    const sentenceResult = checkSentenceCompletion(content);
    result.details.sentenceCheck = sentenceResult;
    if (sentenceResult.isTruncated && !result.isTruncated) {
      result.isTruncated = true;
      result.reason = sentenceResult.reason;
    }
  }
  return result;
}
function checkHtmlTags(html) {
  const result = {
    isTruncated: false,
    reason: "",
    unclosedTags: []
  };
  const selfClosingTags = ["br", "hr", "img", "input", "meta", "link", "area", "base", "col", "embed", "param", "source", "track", "wbr"];
  const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)[^>]*\/?>/g;
  const stack = [];
  let match;
  while ((match = tagPattern.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();
    if (selfClosingTags.includes(tagName) || fullTag.endsWith("/>")) {
      continue;
    }
    if (fullTag.startsWith("</")) {
      if (stack.length > 0 && stack[stack.length - 1] === tagName) {
        stack.pop();
      }
    } else {
      stack.push(tagName);
    }
  }
  const importantTags = ["div", "style", "span", "p", "section", "article", "main", "header", "footer"];
  const unclosedImportant = stack.filter((tag) => importantTags.includes(tag));
  if (unclosedImportant.length > 0) {
    result.isTruncated = true;
    result.reason = `HTML \u6807\u7B7E\u672A\u95ED\u5408: <${unclosedImportant.join(">, <")}>`;
    result.unclosedTags = unclosedImportant;
  }
  const styleOpenCount = (html.match(/<style[^>]*>/gi) || []).length;
  const styleCloseCount = (html.match(/<\/style>/gi) || []).length;
  if (styleOpenCount > styleCloseCount) {
    result.isTruncated = true;
    result.reason = "<style> \u6807\u7B7E\u672A\u95ED\u5408";
    result.unclosedTags.push("style");
  }
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  if (styleMatch) {
    for (const styleBlock of styleMatch) {
      const cssContent = styleBlock.replace(/<\/?style[^>]*>/gi, "");
      const openBraces = (cssContent.match(/{/g) || []).length;
      const closeBraces = (cssContent.match(/}/g) || []).length;
      if (openBraces > closeBraces) {
        result.isTruncated = true;
        result.reason = "CSS \u82B1\u62EC\u53F7\u4E0D\u5339\u914D";
        break;
      }
    }
  }
  return result;
}
function checkSentenceCompletion(content) {
  const result = {
    isTruncated: false,
    reason: "",
    lastChars: ""
  };
  const textContent = content.replace(/<[^>]*>/g, "").trim();
  if (textContent.length === 0) {
    return result;
  }
  const lastChars = textContent.slice(-50);
  result.lastChars = lastChars;
  const chineseEndPunctuation = ["\u3002", "\uFF01", "\uFF1F", "\u2026", '"', '"', "\u300F", "\u300D"];
  const englishEndPunctuation = [".", "!", "?", '"', "'"];
  const allEndPunctuation = [...chineseEndPunctuation, ...englishEndPunctuation];
  const lastChar = textContent.trim().slice(-1);
  const endsWithPunctuation = allEndPunctuation.includes(lastChar);
  const endsWithLetter = /[a-zA-Z]$/.test(textContent.trim());
  const previousChars = textContent.trim().slice(-10);
  const hasIncompleteWord = endsWithLetter && !/[.!?,;:\s]/.test(previousChars.slice(-2, -1));
  const lastCJK = /[\u4e00-\u9fa5]$/.test(textContent.trim());
  const hasCJKContent = /[\u4e00-\u9fa5]/.test(textContent);
  if (hasCJKContent && lastCJK && !chineseEndPunctuation.includes(lastChar)) {
    if (!endsWithPunctuation) {
      result.isTruncated = true;
      result.reason = "\u4E2D\u6587\u53E5\u5B50\u4F3C\u4E4E\u672A\u5B8C\u6210";
    }
  } else if (hasIncompleteWord) {
    result.isTruncated = true;
    result.reason = "\u82F1\u6587\u5355\u8BCD\u4F3C\u4E4E\u88AB\u622A\u65AD";
  }
  return result;
}
function buildContinuationContext(accumulatedContent, originalPrompt = "") {
  const bodyContent = accumulatedContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  const plainText = bodyContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const paragraphs = plainText.split(/\n\n+|。(?=[^。]*$)/);
  const plotPoints = paragraphs.map((p) => {
    const firstSentence = p.trim().split(/[。！？]/)[0];
    return firstSentence && firstSentence.length > 5 ? firstSentence.trim() : null;
  }).filter(Boolean).slice(-5).join(" \u2192 ");
  const htmlBlocks = bodyContent.split(/(<\/p>|<\/div>)/i);
  let recentHtml = "";
  let blockCount = 0;
  for (let i = htmlBlocks.length - 1; i >= 0 && blockCount < 4; i--) {
    recentHtml = htmlBlocks[i] + recentHtml;
    if (htmlBlocks[i].match(/<\/p>|<\/div>/i)) {
      blockCount++;
    }
  }
  recentHtml = recentHtml.trim().slice(-1e3);
  const sentences = plainText.match(/[^。！？]*[。！？]/g) || [];
  const lastCompleteSentence = sentences.length > 0 ? sentences[sentences.length - 1].trim() : "";
  const lastPart = plainText.slice(-100);
  const endsWithPunctuation = /[。！？"」』]$/.test(lastPart.trim());
  const incompleteText = endsWithPunctuation ? "" : lastPart.split(/[。！？]/).pop()?.trim() || "";
  const unclosedTags = detectUnclosedTags(bodyContent);
  return {
    plotSummary: plotPoints || "(\u65E0\u60C5\u8282\u6458\u8981)",
    // 情节进展摘要
    recentHtml,
    // 最后2段完整HTML
    lastCompleteSentence,
    // 最后完整句子
    incompleteText,
    // 未完成的句子片段
    unclosedTags,
    // 未闭合标签列表
    totalLength: plainText.length,
    // 已生成总字数
    endsWithPunctuation,
    // 是否以标点结束
    originalPrompt: (originalPrompt || "").slice(0, 300)
    // 原始请求摘要
  };
}
function detectUnclosedTags(html) {
  const selfClosingTags = ["br", "hr", "img", "input", "meta", "link", "area", "base", "col", "embed", "param", "source", "track", "wbr"];
  const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)[^>]*\/?>/g;
  const stack = [];
  let match;
  while ((match = tagPattern.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();
    if (selfClosingTags.includes(tagName) || fullTag.endsWith("/>")) {
      continue;
    }
    if (fullTag.startsWith("</")) {
      if (stack.length > 0 && stack[stack.length - 1] === tagName) {
        stack.pop();
      }
    } else {
      stack.push(tagName);
    }
  }
  const importantTags = ["div", "p", "span", "section", "article", "blockquote"];
  return stack.filter((tag) => importantTags.includes(tag));
}
function smartMergeContinuation(originalContent, continuationContent, showIndicator = false) {
  const originalStyleMatch = originalContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const originalStyle = originalStyleMatch ? originalStyleMatch[1] : "";
  const contStyleMatch = continuationContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const contStyle = contStyleMatch ? contStyleMatch[1] : "";
  let contBody = continuationContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  let originalBody = originalContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  contBody = removeOverlap(originalBody, contBody);
  let indicator = "";
  if (showIndicator) {
    indicator = `<!-- continuation-point -->`;
  }
  const mergedStyle = originalStyle + (contStyle ? "\n/* Continuation CSS */\n" + contStyle : "");
  const mergedBody = originalBody + indicator + contBody;
  if (mergedStyle.trim()) {
    return `<style>
${mergedStyle}
</style>
${mergedBody}`;
  }
  return mergedBody;
}
function removeOverlap(original, continuation) {
  if (!original || !continuation) return continuation;
  const originalText = original.replace(/<[^>]*>/g, "").trim();
  const contText = continuation.replace(/<[^>]*>/g, "").trim();
  const originalEnd = originalText.slice(-100);
  let maxOverlap = 0;
  const minOverlapLength = 10;
  const maxCheckLength = Math.min(80, contText.length, originalEnd.length);
  for (let len = maxCheckLength; len >= minOverlapLength; len--) {
    const originalSuffix = originalEnd.slice(-len);
    const contPrefix = contText.slice(0, len);
    const normalizedSuffix = originalSuffix.replace(/[，。！？、\s]/g, "");
    const normalizedPrefix = contPrefix.replace(/[，。！？、\s]/g, "");
    if (normalizedSuffix === normalizedPrefix) {
      maxOverlap = len;
      break;
    }
  }
  if (maxOverlap >= minOverlapLength) {
    const overlapText = contText.slice(0, maxOverlap);
    const overlapIndex = continuation.indexOf(overlapText.slice(-20));
    if (overlapIndex !== -1) {
      const afterOverlap = continuation.slice(overlapIndex + 20);
      const nextStart = afterOverlap.search(/[。！？]|<[a-z]/i);
      if (nextStart !== -1) {
        return afterOverlap.slice(nextStart).replace(/^[。！？]/, "");
      }
    }
  }
  return continuation;
}
function mergeContinuationContent(originalContent, continuationContent, showIndicator = true) {
  const originalStyleMatch = originalContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const originalStyle = originalStyleMatch ? originalStyleMatch[1] : "";
  const contStyleMatch = continuationContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const contStyle = contStyleMatch ? contStyleMatch[1] : "";
  let contBody = continuationContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  let originalBody = originalContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  let indicator = "";
  if (showIndicator) {
    indicator = `<div style="text-align:center; color:#bfa15f; font-size:0.8em; margin:15px 0; opacity:0.7;">
            <i class="fa-solid fa-link"></i> \u2500\u2500\u2500 \u7EED\u5199\u8FDE\u63A5 \u2500\u2500\u2500
        </div>`;
  }
  const mergedStyle = originalStyle + (contStyle ? "\n/* Continuation CSS */\n" + contStyle : "");
  const mergedBody = originalBody + indicator + contBody;
  if (mergedStyle.trim()) {
    return `<style>
${mergedStyle}
</style>
${mergedBody}`;
  }
  return mergedBody;
}
var fileToBase64, parseMeta, getSnippet;
var init_helpers = __esm({
  "src/utils/helpers.js"() {
    init_storage();
    fileToBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
    parseMeta = (title) => {
      const parts = title.split(" - ");
      if (parts.length >= 2) {
        const char = parts.pop();
        const script = parts.join(" - ");
        return { script, char: char.trim() };
      }
      return { script: title, char: "\u672A\u77E5" };
    };
    getSnippet = (html) => {
      const tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      let text = tmp.textContent || tmp.innerText || "";
      text = text.replace(/\s+/g, " ").trim();
      return text.length > 60 ? text.substring(0, 60) + "..." : text;
    };
  }
});

// src/ui/favsWindow.js
async function saveFavorite() {
  const container = document.getElementById("t-output-content");
  const content = extractFromShadowDOM(container);
  if (!content || content.trim().length < 10) {
    if (window.toastr) toastr.warning("\u5185\u5BB9\u4E3A\u7A7A\u6216\u8FC7\u77ED\uFF0C\u65E0\u6CD5\u6536\u85CF");
    else alert("\u5185\u5BB9\u65E0\u6548");
    return;
  }
  const script = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastUsedScriptId);
  const scriptName = script ? script.name : "\u672A\u77E5\u5267\u672C";
  const ctx = await getContextData();
  let avatarSrc = null;
  const lastCharImg = $(".mes[is_user='false'] .message_avatar_img").last();
  if (lastCharImg.length > 0) {
    avatarSrc = lastCharImg.attr("src");
  }
  if (!avatarSrc) {
    const mainImg = $("#character_image_div img");
    if (mainImg.length > 0 && mainImg.is(":visible")) {
      avatarSrc = mainImg.attr("src");
    }
  }
  if (!avatarSrc) {
    const navImg = $("#right-nav-panel .character-avatar");
    if (navImg.length > 0) {
      avatarSrc = navImg.attr("src");
    }
  }
  console.log("Titania: Captured Avatar Path ->", avatarSrc);
  const entry = {
    id: Date.now(),
    title: `${scriptName} - ${ctx.charName}`,
    charName: ctx.charName,
    // 独立存储角色名，用于筛选
    scriptName,
    // 独立存储剧本名，用于显示
    date: (/* @__PURE__ */ new Date()).toLocaleString(),
    html: content,
    avatar: avatarSrc
    // 恢复保存具体路径
  };
  const data = getExtData();
  if (!data.favs) data.favs = [];
  data.favs.unshift(entry);
  saveExtData();
  GlobalState.lastFavId = entry.id;
  const btn = $("#t-btn-like");
  btn.html('<i class="fa-solid fa-heart" style="color:#ff6b6b;"></i>').prop("disabled", false);
  if (window.toastr) toastr.success("\u6536\u85CF\u6210\u529F\uFF01");
}
function unsaveFavorite() {
  if (!GlobalState.lastFavId) {
    if (window.toastr) toastr.warning("\u5F53\u524D\u5185\u5BB9\u672A\u6536\u85CF");
    return false;
  }
  const data = getExtData();
  if (!data.favs) {
    GlobalState.lastFavId = null;
    return false;
  }
  const originalLength = data.favs.length;
  data.favs = data.favs.filter((f) => f.id !== GlobalState.lastFavId);
  if (data.favs.length < originalLength) {
    saveExtData();
    GlobalState.lastFavId = null;
    const btn = $("#t-btn-like");
    btn.html('<i class="fa-regular fa-heart"></i>').prop("disabled", false);
    if (window.toastr) toastr.info("\u5DF2\u53D6\u6D88\u6536\u85CF");
    return true;
  }
  return false;
}
function openFavsWindow() {
  $("#t-main-view").hide();
  const data = getExtData();
  const favs = data.favs || [];
  let currentFilteredList = [];
  let currentIndex = -1;
  let currentFavId = null;
  let isEditMode = false;
  let selectedIds = /* @__PURE__ */ new Set();
  const charIndex = /* @__PURE__ */ new Set();
  favs.forEach((f) => {
    if (f.charName) {
      f._meta = {
        char: f.charName,
        script: f.scriptName || f.title.split(" - ")[0] || f.title
      };
    } else {
      f._meta = parseMeta(f.title || "");
    }
    charIndex.add(f._meta.char);
  });
  const charList = ["\u5168\u90E8\u89D2\u8272", ...[...charIndex].sort()];
  const html = `
    <div class="t-box t-fav-container" id="t-favs-view">
        <div class="t-header" style="flex-shrink:0;">
            <span class="t-title-main">\u{1F4D6} \u6536\u85CF\u753B\u5ECA</span>
            <span class="t-close" id="t-fav-close">&times;</span>
        </div>
        
        <!-- \u666E\u901A\u5DE5\u5177\u680F -->
        <div class="t-fav-toolbar" id="t-fav-toolbar-normal">
            <div style="display:flex; align-items:center; gap:10px; flex-grow:1;">
                <i class="fa-solid fa-filter" style="color:#666;"></i>
                <select id="t-fav-filter-char" class="t-fav-filter-select">
                    ${charList.map((c) => `<option value="${c}">${c}</option>`).join("")}
                </select>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <input type="text" id="t-fav-search" class="t-fav-search" placeholder="\u641C\u7D22\u5173\u952E\u8BCD...">
                <button id="t-btn-img-mgr" class="t-tool-btn" title="\u7BA1\u7406\u89D2\u8272\u80CC\u666F\u56FE"><i class="fa-regular fa-image"></i> \u56FE\u9274</button>
                <button id="t-btn-edit-mode" class="t-tool-btn" title="\u6279\u91CF\u7BA1\u7406"><i class="fa-solid fa-pen-to-square"></i> \u7F16\u8F91</button>
            </div>
        </div>
        
        <!-- \u7F16\u8F91\u6A21\u5F0F\u5DE5\u5177\u680F -->
        <div class="t-fav-toolbar t-fav-toolbar-edit" id="t-fav-toolbar-edit" style="display:none;">
            <div style="display:flex; align-items:center; gap:10px; flex-grow:1;">
                <button id="t-btn-select-all" class="t-tool-btn"><i class="fa-regular fa-square-check"></i> \u5168\u9009</button>
                <button id="t-btn-deselect-all" class="t-tool-btn"><i class="fa-regular fa-square"></i> \u53D6\u6D88\u5168\u9009</button>
                <span id="t-edit-count" style="color:#888; font-size:0.9em;">\u5DF2\u9009\u62E9 0 \u9879</span>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <button id="t-btn-delete-selected" class="t-tool-btn t-btn-danger" title="\u5220\u9664\u9009\u4E2D\u9879" disabled><i class="fa-solid fa-trash"></i> \u5220\u9664\u9009\u4E2D</button>
                <button id="t-btn-exit-edit" class="t-tool-btn"><i class="fa-solid fa-xmark"></i> \u9000\u51FA\u7F16\u8F91</button>
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
                    <button class="t-tool-btn" id="t-read-rename" title="\u91CD\u547D\u540D"><i class="fa-solid fa-pen"></i></button>
                    <button class="t-tool-btn" id="t-read-img" title="\u5BFC\u51FA\u56FE\u7247"><i class="fa-solid fa-camera"></i></button>
                    <button class="t-tool-btn" id="t-read-code" title="\u590D\u5236HTML"><i class="fa-solid fa-code"></i></button>
                    <button class="t-tool-btn" id="t-read-open-window" title="\u65B0\u7A97\u53E3\u6253\u5F00(\u4E92\u52A8\u6A21\u5F0F)"><i class="fa-solid fa-up-right-from-square"></i></button>
                    <button class="t-tool-btn" id="t-read-del-one" title="\u5220\u9664" style="color:#ff6b6b; border-color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
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
  const updateSelectionCount = () => {
    const count = selectedIds.size;
    $("#t-edit-count").text(`\u5DF2\u9009\u62E9 ${count} \u9879`);
    $("#t-btn-delete-selected").prop("disabled", count === 0);
    if (count > 0) {
      $("#t-btn-delete-selected").html(`<i class="fa-solid fa-trash"></i> \u5220\u9664\u9009\u4E2D (${count})`);
    } else {
      $("#t-btn-delete-selected").html(`<i class="fa-solid fa-trash"></i> \u5220\u9664\u9009\u4E2D`);
    }
  };
  const toggleEditMode = (enable) => {
    isEditMode = enable;
    if (enable) {
      $("#t-fav-toolbar-normal").hide();
      $("#t-fav-toolbar-edit").show();
      $("#t-fav-grid").addClass("edit-mode");
      selectedIds.clear();
      updateSelectionCount();
    } else {
      $("#t-fav-toolbar-normal").show();
      $("#t-fav-toolbar-edit").hide();
      $("#t-fav-grid").removeClass("edit-mode");
      selectedIds.clear();
      $(".t-fav-card").removeClass("selected");
    }
  };
  const renderGrid = () => {
    const grid = $("#t-fav-grid");
    grid.empty();
    const currentMap = getExtData().character_map || {};
    const targetChar = $("#t-fav-filter-char").val();
    const search = $("#t-fav-search").val().toLowerCase();
    currentFilteredList = favs.filter((f) => {
      if (targetChar !== "\u5168\u90E8\u89D2\u8272" && f._meta.char !== targetChar) return false;
      if (search && !f.title.toLowerCase().includes(search) && !f.html.toLowerCase().includes(search)) return false;
      return true;
    });
    if (currentFilteredList.length === 0) {
      grid.append('<div class="t-fav-empty">\u6CA1\u6709\u627E\u5230\u76F8\u5173\u6536\u85CF</div>');
      return;
    }
    currentFilteredList.forEach((item, idx) => {
      const snippet = getSnippet(item.html);
      const charName = item._meta.char;
      let bgUrl = currentMap[charName];
      if (!bgUrl) bgUrl = item.avatar;
      const bgClass = bgUrl ? "" : "no-img";
      const bgStyle = bgUrl ? `background-image: url('${bgUrl}')` : "";
      const isSelected = selectedIds.has(item.id);
      const card = $(`
                <div class="t-fav-card ${isSelected ? "selected" : ""}" data-fav-id="${item.id}">
                    <div class="t-fav-card-checkbox">
                        <i class="fa-${isSelected ? "solid fa-square-check" : "regular fa-square"}"></i>
                    </div>
                    <div class="t-fav-card-bg ${bgClass}" style="${bgStyle}"></div>
                    <div class="t-fav-card-overlay"></div>
                    <div class="t-fav-card-content">
                        <div class="t-fav-card-header">
                            <div class="t-fav-card-script">${item._meta.script}</div>
                            <div class="t-fav-card-char"><i class="fa-solid fa-user-tag" style="font-size:0.8em"></i> ${charName}</div>
                        </div>
                        <div class="t-fav-card-snippet">${snippet}</div>
                        <div class="t-fav-card-footer"><span>${item.date.split(" ")[0]}</span></div>
                    </div>
                </div>
            `);
      card.on("click", function() {
        if (isEditMode) {
          const favId = item.id;
          if (selectedIds.has(favId)) {
            selectedIds.delete(favId);
            $(this).removeClass("selected");
            $(this).find(".t-fav-card-checkbox i").removeClass("fa-solid fa-square-check").addClass("fa-regular fa-square");
          } else {
            selectedIds.add(favId);
            $(this).addClass("selected");
            $(this).find(".t-fav-card-checkbox i").removeClass("fa-regular fa-square").addClass("fa-solid fa-square-check");
          }
          updateSelectionCount();
        } else {
          loadReaderItem(idx);
        }
      });
      grid.append(card);
    });
    if (isEditMode) {
      grid.addClass("edit-mode");
    }
  };
  let currentViewingHtml = "";
  let currentViewingTitle = "";
  const loadReaderItem = (index) => {
    if (index < 0 || index >= currentFilteredList.length) return;
    currentIndex = index;
    const item = currentFilteredList[index];
    currentFavId = item.id;
    currentViewingHtml = item.html;
    currentViewingTitle = item.title;
    $("#t-read-meta").text(item.title);
    $("#t-read-index").text(`${index + 1} / ${currentFilteredList.length}`);
    const container = document.getElementById("t-read-content");
    const { isInteractive, reasons } = detectInteractiveContent(item.html);
    const openWindowBtn = $("#t-read-open-window");
    if (isInteractive) {
      openWindowBtn.addClass("has-interactive").attr("title", `\u65B0\u7A97\u53E3\u6253\u5F00(${reasons.join(", ")})`);
    } else {
      openWindowBtn.removeClass("has-interactive").attr("title", "\u65B0\u7A97\u53E3\u6253\u5F00");
    }
    try {
      const shadow = renderToShadowDOMReal(container, item.html);
      setTimeout(() => {
        shadow.querySelectorAll("*").forEach((el) => {
          const style = window.getComputedStyle(el);
          if (style.animationName && style.animationName !== "none") {
            const clone = el.cloneNode(true);
            el.parentNode.replaceChild(clone, el);
          }
        });
      }, 10);
    } catch (e) {
      console.warn("Titania: Shadow DOM \u6E32\u67D3\u5931\u8D25\uFF0C\u964D\u7EA7\u5230 innerHTML", e);
      container.innerHTML = "";
      setTimeout(() => {
        container.innerHTML = item.html;
      }, 10);
    }
    $("#t-fav-reader").addClass("show");
  };
  $("#t-fav-filter-char, #t-fav-search").on("input change", renderGrid);
  $("#t-btn-img-mgr").on("click", () => {
    openCharImageManager(() => {
      renderGrid();
    });
  });
  $("#t-read-back").on("click", () => $("#t-fav-reader").removeClass("show"));
  $("#t-btn-edit-mode").on("click", () => toggleEditMode(true));
  $("#t-btn-exit-edit").on("click", () => toggleEditMode(false));
  $("#t-btn-select-all").on("click", () => {
    currentFilteredList.forEach((item) => selectedIds.add(item.id));
    $(".t-fav-card").addClass("selected");
    $(".t-fav-card-checkbox i").removeClass("fa-regular fa-square").addClass("fa-solid fa-square-check");
    updateSelectionCount();
  });
  $("#t-btn-deselect-all").on("click", () => {
    selectedIds.clear();
    $(".t-fav-card").removeClass("selected");
    $(".t-fav-card-checkbox i").removeClass("fa-solid fa-square-check").addClass("fa-regular fa-square");
    updateSelectionCount();
  });
  $("#t-btn-delete-selected").on("click", () => {
    const count = selectedIds.size;
    if (count === 0) return;
    if (confirm(`\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684 ${count} \u6761\u6536\u85CF\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002`)) {
      const d = getExtData();
      d.favs = d.favs.filter((x) => !selectedIds.has(x.id));
      saveExtData();
      favs.splice(0, favs.length, ...d.favs);
      charIndex.clear();
      favs.forEach((f) => {
        if (f.charName) {
          f._meta = {
            char: f.charName,
            script: f.scriptName || f.title.split(" - ")[0] || f.title
          };
        } else {
          f._meta = parseMeta(f.title || "");
        }
        charIndex.add(f._meta.char);
      });
      selectedIds.clear();
      updateSelectionCount();
      renderGrid();
      if (window.toastr) toastr.success(`\u5DF2\u5220\u9664 ${count} \u6761\u6536\u85CF`);
      if (favs.length === 0) {
        toggleEditMode(false);
      }
    }
  });
  let touchStartX = 0;
  let touchStartY = 0;
  const readerBody = $(".t-read-body");
  readerBody.on("touchstart", (e) => {
    touchStartX = e.originalEvent.touches[0].clientX;
    touchStartY = e.originalEvent.touches[0].clientY;
  });
  readerBody.on("touchend", (e) => {
    const touchEndX = e.originalEvent.changedTouches[0].clientX;
    const touchEndY = e.originalEvent.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 2) {
      if (diffX > 0) {
        if (currentIndex > 0) loadReaderItem(currentIndex - 1);
      } else {
        if (currentIndex < currentFilteredList.length - 1) loadReaderItem(currentIndex + 1);
      }
    }
  });
  $("#t-read-code").on("click", () => {
    if (currentViewingHtml) {
      navigator.clipboard.writeText(currentViewingHtml);
      if (window.toastr) toastr.success("\u6E90\u7801\u5DF2\u590D\u5236");
    } else {
      const container = document.getElementById("t-read-content");
      const htmlCode = extractFromShadowDOM(container);
      navigator.clipboard.writeText(htmlCode);
      if (window.toastr) toastr.success("\u6E90\u7801\u5DF2\u590D\u5236");
    }
  });
  $("#t-read-open-window").on("click", () => {
    if (currentViewingHtml) {
      openInNewWindow(currentViewingHtml, currentViewingTitle);
      if (window.toastr) toastr.success("\u5DF2\u5728\u65B0\u7A97\u53E3\u6253\u5F00");
    } else {
      if (window.toastr) toastr.warning("\u5F53\u524D\u65E0\u5185\u5BB9");
    }
  });
  $("#t-read-img").on("click", async function() {
    const btn = $(this);
    const originalHtml = btn.html();
    try {
      btn.prop("disabled", true).html('<i class="fa-solid fa-spinner fa-spin"></i>');
      if (typeof htmlToImage === "undefined") {
        if (window.toastr) toastr.info("\u6B63\u5728\u52A0\u8F7D\u7EC4\u4EF6...", "Titania");
        await $.getScript("https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js");
      }
      const element = document.getElementById("t-read-capture-zone");
      const originalHeight = element.style.height;
      const parent = element.parentElement;
      const originalParentOverflow = parent.style.overflow;
      parent.style.overflow = "visible";
      element.style.height = "auto";
      const dataUrl = await htmlToImage.toPng(element, {
        backgroundColor: "#0b0b0b",
        // 强制背景色
        pixelRatio: 2,
        // 2倍高清
        skipAutoScale: true
      });
      parent.style.overflow = originalParentOverflow;
      element.style.height = originalHeight;
      const link = document.createElement("a");
      link.download = `Titania_${(/* @__PURE__ */ new Date()).getTime()}.png`;
      link.href = dataUrl;
      link.click();
      if (window.toastr) toastr.success("\u56FE\u7247\u5BFC\u51FA\u6210\u529F");
    } catch (e) {
      console.error(e);
      alert("\u5BFC\u51FA\u5931\u8D25: " + e.message + "\n\u53EF\u80FD\u662F\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 SVG \u8F6C\u6362\u6216\u5185\u5B58\u4E0D\u8DB3\u3002");
      const element = document.getElementById("t-read-capture-zone");
      if (element) {
        element.parentElement.style.overflow = "";
        element.style.height = "";
      }
    } finally {
      btn.prop("disabled", false).html(originalHtml);
    }
  });
  $("#t-read-rename").on("click", () => {
    if (!currentFavId) return;
    const currentItem = currentFilteredList[currentIndex];
    if (!currentItem) return;
    const newTitle = prompt("\u8BF7\u8F93\u5165\u65B0\u6807\u9898\uFF1A", currentItem.title);
    if (newTitle === null || newTitle.trim() === "") return;
    const trimmedTitle = newTitle.trim();
    const d = getExtData();
    const targetFav = d.favs.find((x) => x.id === currentFavId);
    if (targetFav) {
      targetFav.title = trimmedTitle;
      saveExtData();
      const localFav = favs.find((x) => x.id === currentFavId);
      if (localFav) {
        localFav.title = trimmedTitle;
        localFav._meta.script = trimmedTitle;
      }
      currentViewingTitle = trimmedTitle;
      $("#t-read-meta").text(trimmedTitle);
      renderGrid();
      if (window.toastr) toastr.success("\u6807\u9898\u5DF2\u66F4\u65B0");
    }
  });
  $("#t-read-del-one").on("click", () => {
    if (confirm("\u786E\u5B9A\u5220\u9664\u6B64\u6761\u6536\u85CF\uFF1F")) {
      const d = getExtData();
      d.favs = d.favs.filter((x) => x.id !== currentFavId);
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
function openCharImageManager(onCloseCallback) {
  const data = getExtData();
  if (!data.character_map) data.character_map = {};
  const favs = data.favs || [];
  const charNames = /* @__PURE__ */ new Set();
  favs.forEach((f) => {
    if (f.charName) {
      charNames.add(f.charName);
    } else {
      const parts = (f.title || "").split(" - ");
      if (parts.length >= 2) charNames.add(parts[parts.length - 1].trim());
    }
  });
  const sortedChars = [...charNames].sort();
  const tryFindSystemAvatar = (charName) => {
    let foundAvatar = null;
    try {
      if (SillyTavern && SillyTavern.getContext) {
        const ctx = SillyTavern.getContext();
        if (ctx.characters) {
          Object.values(ctx.characters).forEach((c) => {
            if (c.name === charName && c.avatar) foundAvatar = c.avatar;
          });
        }
      }
      if (!foundAvatar && typeof window.characters !== "undefined") {
        const chars = Array.isArray(window.characters) ? window.characters : Object.values(window.characters);
        const match = chars.find((c) => c.name === charName || c.data && c.data.name === charName);
        if (match) foundAvatar = match.avatar;
      }
    } catch (e) {
      console.error("Titania: Auto-find avatar failed", e);
    }
    if (foundAvatar && !foundAvatar.startsWith("http") && !foundAvatar.startsWith("data:")) {
      if (!foundAvatar.includes("/")) foundAvatar = `characters/${foundAvatar}`;
    }
    return foundAvatar;
  };
  const html = `
    <div class="t-img-mgr-overlay" id="t-img-mgr">
        <div class="t-img-mgr-box">
            <div class="t-header">
                <span class="t-title-main">\u{1F5BC}\uFE0F \u89D2\u8272\u56FE\u9274\u7BA1\u7406</span>
                <span class="t-close" id="t-img-close">&times;</span>
            </div>
            <div style="padding:10px 15px; background:#2a2a2a; color:#888; font-size:0.85em; border-bottom:1px solid #333;">
                <i class="fa-solid fa-circle-info"></i> \u8BBE\u7F6E\u56FE\u7247\u540E\uFF0C\u8BE5\u89D2\u8272\u6240\u6709\u6536\u85CF\u5361\u7247\u5C06\u81EA\u52A8\u4F7F\u7528\u6B64\u80CC\u666F\u3002\u4F18\u5148\u8BFB\u53D6\u201C\u56FE\u9274\u8BBE\u7F6E\u201D\uFF0C\u5176\u6B21\u8BFB\u53D6\u201C\u5355\u5361\u6570\u636E\u201D\u3002
            </div>
            <div class="t-img-list" id="t-img-list-container"></div>
            <div style="padding:15px; border-top:1px solid #333; text-align:right;">
                <button class="t-btn primary" id="t-img-save">\u{1F4BE} \u4FDD\u5B58\u5E76\u5E94\u7528</button>
            </div>
        </div>
        <!-- \u9690\u85CF\u7684\u6587\u4EF6\u4E0A\u4F20 input -->
        <input type="file" id="t-img-upload-input" accept="image/*" style="display:none;">
    </div>`;
  $("#t-favs-view").append(html);
  const tempMap = JSON.parse(JSON.stringify(data.character_map));
  let currentEditChar = null;
  const renderList = () => {
    const $list = $("#t-img-list-container");
    $list.empty();
    if (sortedChars.length === 0) {
      $list.append('<div style="text-align:center; padding:30px; color:#555;">\u6682\u65E0\u89D2\u8272\u6570\u636E\uFF0C\u8BF7\u5148\u53BB\u6536\u85CF\u4E00\u4E9B\u5267\u672C\u5427~</div>');
      return;
    }
    sortedChars.forEach((char) => {
      const currentImg = tempMap[char] || "";
      const hasImg = !!currentImg;
      const bgStyle = hasImg ? `background-image: url('${currentImg}')` : "";
      const $row = $(`
                <div class="t-img-item">
                    <div class="t-img-preview ${hasImg ? "" : "no-img"}" style="${bgStyle}"></div>
                    <div class="t-img-info">
                        <div class="t-img-name">${char}</div>
                        <div class="t-img-path">${hasImg ? currentImg.startsWith("data:") ? "Base64 Image" : currentImg : "\u672A\u8BBE\u7F6E\u80CC\u666F"}</div>
                    </div>
                    <div class="t-img-actions">
                        <button class="t-act-btn auto btn-auto-find" title="\u5C1D\u8BD5\u4ECE\u7CFB\u7EDF\u89D2\u8272\u5217\u8868\u6293\u53D6\u5934\u50CF" data-char="${char}"><i class="fa-solid fa-wand-magic-sparkles"></i> \u81EA\u52A8</button>
                        <button class="t-act-btn btn-upload" title="\u4E0A\u4F20\u672C\u5730\u56FE\u7247" data-char="${char}"><i class="fa-solid fa-upload"></i></button>
                        <button class="t-act-btn btn-url" title="\u8F93\u5165\u56FE\u7247 URL" data-char="${char}"><i class="fa-solid fa-link"></i></button>
                        ${hasImg ? `<button class="t-act-btn btn-clear" title="\u6E05\u9664" data-char="${char}" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>` : ""}
                    </div>
                </div>
            `);
      $list.append($row);
    });
    $(".btn-auto-find").on("click", function() {
      const char = $(this).data("char");
      const avatar = tryFindSystemAvatar(char);
      if (avatar) {
        tempMap[char] = avatar;
        if (window.toastr) toastr.success(`\u5DF2\u6293\u53D6\u5230 ${char} \u7684\u5934\u50CF`, "\u6210\u529F");
        renderList();
      } else {
        alert(`\u672A\u5728\u5F53\u524D\u52A0\u8F7D\u7684\u7CFB\u7EDF\u4E2D\u627E\u5230\u89D2\u8272 [${char}] \u7684\u4FE1\u606F\u3002
\u8BF7\u786E\u4FDD\u8BE5\u89D2\u8272\u5DF2\u5728 SillyTavern \u89D2\u8272\u5217\u8868\u4E2D\u3002`);
      }
    });
    $(".btn-upload").on("click", function() {
      currentEditChar = $(this).data("char");
      $("#t-img-upload-input").click();
    });
    $(".btn-url").on("click", function() {
      const char = $(this).data("char");
      const oldVal = tempMap[char] || "";
      const newVal = prompt(`\u8BF7\u8F93\u5165 [${char}] \u7684\u56FE\u7247\u94FE\u63A5 (URL):`, oldVal);
      if (newVal !== null) {
        tempMap[char] = newVal.trim();
        renderList();
      }
    });
    $(".btn-clear").on("click", function() {
      const char = $(this).data("char");
      delete tempMap[char];
      renderList();
    });
  };
  $("#t-img-upload-input").on("change", function() {
    const file = this.files[0];
    if (!file || !currentEditChar) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      tempMap[currentEditChar] = e.target.result;
      renderList();
      $("#t-img-upload-input").val("");
    };
    reader.readAsDataURL(file);
  });
  $("#t-img-save").on("click", () => {
    data.character_map = tempMap;
    saveExtData();
    $("#t-img-mgr").remove();
    if (onCloseCallback) onCloseCallback();
    if (window.toastr) toastr.success("\u89D2\u8272\u56FE\u9274\u5DF2\u66F4\u65B0");
  });
  $("#t-img-close").on("click", () => $("#t-img-mgr").remove());
  renderList();
}
var init_favsWindow = __esm({
  "src/ui/favsWindow.js"() {
    init_storage();
    init_state();
    init_context();
    init_helpers();
  }
});

// src/ui/debugWindow.js
import { evaluateMacros } from "../../../macros.js";
async function showDebugInfo() {
  const script = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastUsedScriptId);
  if (!script) {
    if (window.toastr) toastr.warning("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u5267\u672C");
    else alert("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u5267\u672C");
    return;
  }
  const data = getExtData();
  const cfg = data.config || {};
  const d = await getContextData();
  const dirDefaults = data.director || { instruction: "" };
  const dirInstruction = dirDefaults.instruction || "";
  const hasDirector = dirInstruction.trim().length > 0;
  let activeProfileId = cfg.active_profile_id || "default";
  let profiles = cfg.profiles || [];
  let currentProfile = profiles.find((p) => p.id === activeProfileId) || { name: "\u672A\u77E5", model: "unknown" };
  let displayModel = currentProfile.type === "internal" ? "(\u8DDF\u968F ST)" : currentProfile.model || "gpt-3.5-turbo";
  const currentMode = GlobalState.generationMode || "narrative";
  const modeDisplay = currentMode === "visual" ? "\u{1F3A8} \u6C1B\u56F4\u7F8E\u5316" : "\u{1F4D6} \u5185\u5BB9\u4F18\u5148";
  const DEFAULT_CONTENT_PROMPT = `You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks. Language: Chinese.`;
  const DEFAULT_VISUAL_PROMPT = `You are a Visual Director creating an immersive HTML scene.

[Process]
1. Analyze the mood/emotion of the scenario
2. Choose visual effects that represent the mood
3. Generate HTML with embedded <style>

[Technical Rules]
1. Output HTML with <style> block
2. Use CSS animations, gradients, shadows freely
3. No markdown code blocks
4. Language: Chinese`;
  const customPrompts = data.custom_prompts || {};
  const useCustomPrompts = customPrompts.override_enabled === true;
  let sysPrompt;
  let isUsingCustomPrompt = false;
  if (currentMode === "visual") {
    if (useCustomPrompts && customPrompts.visual_mode && customPrompts.visual_mode.trim()) {
      sysPrompt = customPrompts.visual_mode;
      isUsingCustomPrompt = true;
    } else {
      sysPrompt = DEFAULT_VISUAL_PROMPT;
    }
  } else {
    if (useCustomPrompts && customPrompts.content_mode && customPrompts.content_mode.trim()) {
      sysPrompt = customPrompts.content_mode;
      isUsingCustomPrompt = true;
    } else {
      sysPrompt = DEFAULT_CONTENT_PROMPT;
    }
  }
  const sysTokens = estimateTokens(sysPrompt);
  let contextBlocks = [];
  contextBlocks.push({
    title: "[Roleplay Context]",
    content: `Character: ${d.charName}
User: ${d.userName}`,
    detail: "\u89D2\u8272\u4E0E\u7528\u6237\u7ED1\u5B9A"
  });
  if (dirInstruction.trim()) {
    contextBlocks.push({
      title: "[Director Instructions]",
      content: dirInstruction,
      detail: "\u81EA\u5B9A\u4E49\u5BFC\u6F14\u6307\u4EE4"
    });
  }
  const styleProfiles = data.style_profiles || [];
  const activeStyleId = data.active_style_id || "default";
  const activeStyleProfile = styleProfiles.find((p) => p.id === activeStyleId);
  if (activeStyleProfile && activeStyleProfile.content && activeStyleProfile.content.trim()) {
    contextBlocks.push({
      title: "[Style Reference]",
      content: `\u65B9\u6848: ${activeStyleProfile.name}
---
${activeStyleProfile.content.substring(0, 200)}${activeStyleProfile.content.length > 200 ? "..." : ""}`,
      detail: "\u6587\u7B14\u53C2\u8003"
    });
  }
  if (d.persona) {
    contextBlocks.push({
      title: "[Character Persona]",
      content: d.persona,
      detail: "\u89D2\u8272\u4EBA\u8BBE"
    });
  }
  if (d.userDesc) {
    contextBlocks.push({
      title: "[User Persona]",
      content: d.userDesc,
      detail: "\u7528\u6237\u8BBE\u5B9A"
    });
  }
  if (d.worldInfo) {
    contextBlocks.push({
      title: "[World Info]",
      content: d.worldInfo,
      detail: "\u4E16\u754C\u4E66/Lore"
    });
  }
  if (GlobalState.useHistoryAnalysis) {
    const limit = cfg.history_limit || 10;
    const historyWhitelistStr = data.history_extraction?.whitelist || "";
    const historyWhitelist = parseWhitelistInput(historyWhitelistStr);
    const hist = getChatHistory(limit, historyWhitelist);
    const histLines = hist ? hist.split("\n").length : 0;
    contextBlocks.push({
      title: "[Conversation History]",
      content: hist && hist.trim() ? hist : "(\u65E0\u5386\u53F2\u8BB0\u5F55)",
      detail: `\u804A\u5929\u8BB0\u5F55 (${histLines} \u884C)${historyWhitelist.length > 0 ? ` [\u767D\u540D\u5355: ${historyWhitelist.join(", ")}]` : ""}`
    });
  }
  let finalScriptPrompt;
  try {
    const macroEnv = {
      char: d.charName,
      user: d.userName
    };
    finalScriptPrompt = evaluateMacros(script.prompt, macroEnv);
  } catch (e) {
    console.warn("Titania Debug: \u5B8F\u5904\u7406\u5931\u8D25\uFF0C\u4F7F\u7528\u7B80\u5355\u66FF\u6362", e);
    finalScriptPrompt = script.prompt.replace(/{{char}}/g, d.charName).replace(/{{user}}/g, d.userName);
  }
  contextBlocks.push({
    title: "[Scenario Request]",
    content: finalScriptPrompt,
    detail: "\u5267\u672C\u6838\u5FC3\u6307\u4EE4 (\u5B8F\u5DF2\u5C55\u5F00)",
    isOpen: true
    // 默认展开这个
  });
  let totalUserTokens = 0;
  contextBlocks.forEach((b) => totalUserTokens += estimateTokens(b.content));
  $("#t-main-view").hide();
  const contextHtml = contextBlocks.map((b, idx) => {
    const t = estimateTokens(b.content);
    const openClass = b.isOpen ? "open" : "";
    return `
        <div class="t-fold-row ${openClass}" data-idx="${idx}">
            <div class="t-fold-head">
                <i class="fa-solid fa-caret-right t-fold-icon"></i>
                <span class="t-fold-title">${b.title}</span>
                <span class="t-fold-meta">${b.detail} \xB7 ${t} tokens</span>
            </div>
            <div class="t-fold-body">${b.content}</div>
        </div>`;
  }).join("");
  const html = `
    <div class="t-box t-dbg-container" id="t-debug-view">
        <div class="t-header" style="flex-shrink:0;">
            <span class="t-title-main">\u{1F4CA} \u8C03\u8BD5\u63A7\u5236\u53F0</span>
            <span class="t-close" id="t-debug-close">&times;</span>
        </div>
        
        <div class="t-dbg-header-bar">
            <div class="t-dbg-stat-item"><i class="fa-solid fa-server"></i> <span class="t-dbg-highlight">${displayModel}</span></div>
            <div class="t-dbg-stat-item"><i class="fa-solid fa-wand-magic-sparkles"></i> \u6A21\u5F0F: <span class="t-dbg-highlight">${modeDisplay}</span></div>
            <div class="t-dbg-stat-item" style="margin-left:auto; color:#bfa15f;"><i class="fa-solid fa-coins"></i> Total Est: ${sysTokens + totalUserTokens} tokens</div>
        </div>

        <div class="t-dbg-body">
            <!-- \u5DE6\u4FA7\uFF1A\u53C2\u6570\u8868 -->
            <div class="t-dbg-sidebar">
                <div class="t-param-group">
                    <div class="t-param-title">\u57FA\u672C\u4FE1\u606F</div>
                    <div class="t-param-row"><span class="t-param-key">\u5267\u672C</span><span class="t-param-val" style="color:#bfa15f; max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${script.name}</span></div>
                    <div class="t-param-row"><span class="t-param-key">\u6A21\u5F0F</span><span class="t-param-val" style="color:${currentMode === "visual" ? "#90cdf4" : "#bfa15f"};">${modeDisplay}</span></div>
                </div>
                <div class="t-param-group">
                    <div class="t-param-title">\u5BFC\u6F14\u53C2\u6570</div>
                    <div class="t-param-row"><span class="t-param-key">\u81EA\u5B9A\u4E49\u6307\u4EE4</span><span class="t-param-val">${hasDirector ? "\u5DF2\u8BBE\u7F6E" : "\u65E0"}</span></div>
                    <div class="t-param-row"><span class="t-param-key">\u6587\u7B14\u65B9\u6848</span><span class="t-param-val">${activeStyleProfile ? activeStyleProfile.name : "\u9ED8\u8BA4"}</span></div>
                </div>
                <div style="padding:15px; font-size:0.8em; color:#666; line-height:1.5;">
                    <i class="fa-solid fa-circle-info"></i> \u53F3\u4FA7\u4E3A\u5B9E\u9645\u53D1\u9001\u7ED9\u6A21\u578B\u7684\u5B8C\u6574 Payload\u3002\u70B9\u51FB\u6807\u9898\u53EF\u6298\u53E0/\u5C55\u5F00\u67E5\u770B\u8BE6\u60C5\u3002
                </div>
            </div>

            <!-- \u53F3\u4FA7\uFF1A\u5206\u680F\u7F16\u8F91\u5668 -->
            <div class="t-dbg-main">
                <!-- System -->
                <div class="t-editor-section" style="flex: 3;">
                    <div class="t-section-label">
                        <span><i class="fa-solid fa-microchip"></i> System Instruction ${isUsingCustomPrompt ? '<span style="color:#55efc4; font-size:0.8em;">(\u81EA\u5B9A\u4E49)</span>' : ""}</span>
                        <span style="font-size:0.8em; opacity:0.5;">${sysTokens} tokens</span>
                    </div>
                    <textarea class="t-simple-editor" readonly>${sysPrompt}</textarea>
                </div>
                
                <!-- User Context (\u53EF\u6298\u53E0) -->
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
            <button id="t-debug-back" class="t-btn primary" style="padding: 6px 20px;">\u5173\u95ED\u63A7\u5236\u53F0</button>
        </div>
    </div>`;
  $("#t-overlay").append(html);
  const close = () => {
    $("#t-debug-view").remove();
    $("#t-main-view").css("display", "flex");
  };
  $("#t-debug-close, #t-debug-back").on("click", close);
  $(".t-fold-head").on("click", function() {
    const row = $(this).parent(".t-fold-row");
    row.toggleClass("open");
  });
}
var init_debugWindow = __esm({
  "src/ui/debugWindow.js"() {
    init_storage();
    init_state();
    init_context();
    init_helpers();
  }
});

// src/ui/settingsWindow.js
function applyCustomCSS(cssText) {
  let styleEl = document.getElementById("t-custom-style");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "t-custom-style";
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = cssText || "";
}
function applyFontSettings(fontSettings) {
  if (!fontSettings) return;
  const root = document.documentElement;
  const oldFontStyle = document.getElementById("t-custom-font-style");
  if (oldFontStyle) oldFontStyle.remove();
  if (fontSettings.source === "default" || !fontSettings.source) {
    root.style.removeProperty("--t-font-global");
    return;
  }
  if (fontSettings.source === "online") {
    if (fontSettings.import_url && fontSettings.font_name) {
      const styleEl = document.createElement("style");
      styleEl.id = "t-custom-font-style";
      styleEl.textContent = `@import url('${fontSettings.import_url}');`;
      document.head.appendChild(styleEl);
      root.style.setProperty("--t-font-global", `'${fontSettings.font_name}', -apple-system, BlinkMacSystemFont, sans-serif`);
    }
    return;
  }
  if (fontSettings.source === "upload") {
    if (fontSettings.font_data) {
      const fontName = fontSettings.font_name || "TitaniaCustomFont";
      const styleEl = document.createElement("style");
      styleEl.id = "t-custom-font-style";
      styleEl.textContent = `
                @font-face {
                    font-family: '${fontName}';
                    src: url('${fontSettings.font_data}') format('woff2');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }
            `;
      document.head.appendChild(styleEl);
      root.style.setProperty("--t-font-global", `'${fontName}', -apple-system, BlinkMacSystemFont, sans-serif`);
    }
    return;
  }
}
function openSettingsWindow() {
  const data = getExtData();
  const cfg = data.config || {};
  const app = data.appearance || {};
  const customCSS = data.custom_css || "";
  const cssThemes = data.css_themes || {
    profiles: [{ id: "default", name: "\u9ED8\u8BA4\u4E3B\u9898", css: customCSS }],
    active_profile_id: "default"
  };
  if (customCSS && cssThemes.profiles.length === 1 && !cssThemes.profiles[0].css) {
    cssThemes.profiles[0].css = customCSS;
  }
  const fontSettings = data.font_settings || {
    source: "default",
    // "default" | "online" | "upload"
    import_url: "",
    font_name: "",
    font_data: "",
    // base64 字体数据 (上传时使用)
    force_override: false
    // 是否强制覆盖内联样式
  };
  app.type = app.type || "emoji";
  app.content = app.content || "\u{1F3AD}";
  app.size = app.size || 56;
  app.animation = app.animation || "rainbow";
  const dirCfg = data.director || { length: "", perspective: "auto", style_ref: "" };
  const styleProfiles = data.style_profiles || [
    { id: "default", name: "\u9ED8\u8BA4 (\u65E0)", content: "" }
  ];
  const activeStyleId = data.active_style_id || "default";
  if (!app.border_color) app.border_color = "#90cdf4";
  if (!app.bg_color) app.bg_color = "#2b2b2b";
  if (app.border_opacity === void 0) app.border_opacity = 100;
  if (app.bg_opacity === void 0) app.bg_opacity = 100;
  if (!cfg.profiles || !Array.isArray(cfg.profiles)) {
    cfg.profiles = [
      { id: "st_sync", name: "\u{1F517} \u8DDF\u968F SillyTavern (\u4E3B\u8FDE\u63A5)", type: "internal", readonly: true },
      { id: "default", name: "\u9ED8\u8BA4\u81EA\u5B9A\u4E49", type: "custom", url: cfg.url || "", key: cfg.key || "", model: cfg.model || "gpt-3.5-turbo" }
    ];
    cfg.active_profile_id = "default";
  }
  let tempProfiles = JSON.parse(JSON.stringify(cfg.profiles));
  let tempActiveId = cfg.active_profile_id;
  let tempApp = JSON.parse(JSON.stringify(app));
  if (!tempApp.size) tempApp.size = 56;
  if (!tempApp.border_color) tempApp.border_color = "#90cdf4";
  if (!tempApp.bg_color) tempApp.bg_color = "#2b2b2b";
  if (tempApp.border_opacity === void 0) tempApp.border_opacity = 100;
  if (tempApp.bg_opacity === void 0) tempApp.bg_opacity = 100;
  let tempStyleProfiles = JSON.parse(JSON.stringify(styleProfiles));
  let tempActiveStyleId = activeStyleId;
  let styleContentModified = false;
  let tempCssThemes = JSON.parse(JSON.stringify(cssThemes.profiles));
  let tempActiveCssThemeId = cssThemes.active_profile_id || "default";
  let cssThemeModified = false;
  ensureOverlay();
  const $mainView = $("#t-main-view");
  const hasMainView = $mainView.length > 0;
  if (hasMainView) {
    $mainView.hide();
  }
  const html = `
    <div class="t-box" id="t-settings-view">
        <div class="t-header"><span class="t-title-main">\u2699\uFE0F \u8BBE\u7F6E</span><span class="t-close" id="t-set-close">&times;</span></div>
        <div class="t-set-body">
            <div class="t-set-nav">
                <div class="t-set-tab-btn active" data-tab="appearance">\u{1F3A8} \u5916\u89C2\u8BBE\u7F6E</div>
                <div class="t-set-tab-btn" data-tab="theme">\u{1F58C}\uFE0F \u4E3B\u9898\u6837\u5F0F</div>
                <div class="t-set-tab-btn" data-tab="connection">\u{1F50C} API \u8FDE\u63A5</div>
                <div class="t-set-tab-btn" data-tab="director">\u{1F3AC} \u5BFC\u6F14\u6A21\u5F0F</div>
                <div class="t-set-tab-btn" data-tab="automation">\u{1F916} \u81EA\u52A8\u5316</div>
                <div class="t-set-tab-btn" data-tab="prompts">\u{1F4DC} \u7CFB\u7EDF\u63D0\u793A\u8BCD</div>
                <div class="t-set-tab-btn" data-tab="data">\u{1F5C2}\uFE0F \u6570\u636E\u7BA1\u7406</div>
                <div class="t-set-tab-btn" data-tab="diagnostics" style="color:#ff9f43;"><i class="fa-solid fa-stethoscope"></i> \u8BCA\u65AD</div>
            </div>

            <div class="t-set-content">
                <!-- Tab 1: \u5916\u89C2 -->
                <div id="page-appearance" class="t-set-page active">
                    <div class="t-preview-container">
                        <div style="font-size:0.8em; color:#666; margin-bottom:15px;">\u52A8\u753B\u6548\u679C\u9884\u89C8</div>
                        <div id="p-ball" class="t-preview-ball"></div>
                        <div style="display:flex; gap:10px; margin-top:20px;">
                            <button class="t-tool-btn" id="btn-test-anim">\u25B6\uFE0F \u64AD\u653E\u52A8\u753B</button>
                            <button class="t-tool-btn" id="btn-test-notify">\u{1F514} \u901A\u77E5\u6548\u679C</button>
                        </div>
                    </div>
                    
                    <div class="t-form-group">
                        <label class="t-form-label">\u{1F3AC} \u52A0\u8F7D\u52A8\u753B\u6548\u679C</label>
                        <div class="t-anim-grid" id="p-anim-grid">
                            <div class="t-anim-option ${tempApp.animation === "ripple" ? "active" : ""}" data-anim="ripple">
                                <div class="t-anim-icon">\u{1F30A}</div>
                                <div class="t-anim-name">\u8109\u51B2\u6CE2\u7EB9</div>
                            </div>
                            <div class="t-anim-option ${tempApp.animation === "arc" ? "active" : ""}" data-anim="arc">
                                <div class="t-anim-icon">\u26A1</div>
                                <div class="t-anim-name">\u7535\u78C1\u95EA\u70C1</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="t-form-group">
                        <label class="t-form-label">\u{1F3A8} \u7403\u4F53\u8FB9\u6846\u989C\u8272</label>
                        <div style="display:flex; align-items:center; gap:15px;">
                            <input type="color" id="p-border-color" value="${tempApp.border_color}" style="width:50px; height:35px; border:none; cursor:pointer; background:transparent;">
                            <input type="text" id="p-border-color-text" class="t-input" value="${tempApp.border_color}" style="width:100px; font-family:monospace;">
                            <div style="display:flex; gap:8px;">
                                <span class="t-color-preset" data-color="#90cdf4" style="width:24px; height:24px; border-radius:50%; background:#90cdf4; cursor:pointer; border:2px solid transparent;" title="\u5929\u84DD"></span>
                                <span class="t-color-preset" data-color="#a29bfe" style="width:24px; height:24px; border-radius:50%; background:#a29bfe; cursor:pointer; border:2px solid transparent;" title="\u7D2B\u7F57\u5170"></span>
                                <span class="t-color-preset" data-color="#55efc4" style="width:24px; height:24px; border-radius:50%; background:#55efc4; cursor:pointer; border:2px solid transparent;" title="\u8584\u8377\u7EFF"></span>
                                <span class="t-color-preset" data-color="#ffd93d" style="width:24px; height:24px; border-radius:50%; background:#ffd93d; cursor:pointer; border:2px solid transparent;" title="\u91D1\u9EC4"></span>
                                <span class="t-color-preset" data-color="#ff6b6b" style="width:24px; height:24px; border-radius:50%; background:#ff6b6b; cursor:pointer; border:2px solid transparent;" title="\u73CA\u745A\u7EA2"></span>
                                <span class="t-color-preset" data-color="#fd79a8" style="width:24px; height:24px; border-radius:50%; background:#fd79a8; cursor:pointer; border:2px solid transparent;" title="\u7C89\u7EA2"></span>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px; margin-top:10px;">
                            <span style="font-size:0.85em; color:#888; min-width:60px;">\u900F\u660E\u5EA6:</span>
                            <input type="range" id="p-border-opacity" min="0" max="100" step="5" value="${tempApp.border_opacity}" style="flex:1;">
                            <span id="p-border-opacity-val" style="font-size:0.85em; color:#bfa15f; min-width:40px;">${tempApp.border_opacity}%</span>
                        </div>
                        <p style="font-size:0.75em; color:#666; margin-top:8px;">\u6B64\u989C\u8272\u5C06\u5E94\u7528\u4E8E\u60AC\u6D6E\u7403\u8FB9\u6846\u53CA\u52A8\u753B\u6548\u679C</p>
                    </div>
                    
                    <div class="t-form-group">
                        <label class="t-form-label">\u{1F58C}\uFE0F \u7403\u4F53\u80CC\u666F\u989C\u8272</label>
                        <div style="display:flex; align-items:center; gap:15px;">
                            <input type="color" id="p-bg-color" value="${tempApp.bg_color}" style="width:50px; height:35px; border:none; cursor:pointer; background:transparent;">
                            <input type="text" id="p-bg-color-text" class="t-input" value="${tempApp.bg_color}" style="width:100px; font-family:monospace;">
                            <div style="display:flex; gap:8px;">
                                <span class="t-bg-preset" data-color="#2b2b2b" style="width:24px; height:24px; border-radius:50%; background:#2b2b2b; cursor:pointer; border:2px solid transparent;" title="\u6DF1\u7070 (\u9ED8\u8BA4)"></span>
                                <span class="t-bg-preset" data-color="#1a1a2e" style="width:24px; height:24px; border-radius:50%; background:#1a1a2e; cursor:pointer; border:2px solid transparent;" title="\u6DF1\u84DD"></span>
                                <span class="t-bg-preset" data-color="#16213e" style="width:24px; height:24px; border-radius:50%; background:#16213e; cursor:pointer; border:2px solid transparent;" title="\u85CF\u9752"></span>
                                <span class="t-bg-preset" data-color="#1e272e" style="width:24px; height:24px; border-radius:50%; background:#1e272e; cursor:pointer; border:2px solid transparent;" title="\u70AD\u9ED1"></span>
                                <span class="t-bg-preset" data-color="#2d132c" style="width:24px; height:24px; border-radius:50%; background:#2d132c; cursor:pointer; border:2px solid transparent;" title="\u6DF1\u7D2B"></span>
                                <span class="t-bg-preset" data-color="#0a3d62" style="width:24px; height:24px; border-radius:50%; background:#0a3d62; cursor:pointer; border:2px solid transparent;" title="\u6D77\u84DD"></span>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px; margin-top:10px;">
                            <span style="font-size:0.85em; color:#888; min-width:60px;">\u900F\u660E\u5EA6:</span>
                            <input type="range" id="p-bg-opacity" min="0" max="100" step="5" value="${tempApp.bg_opacity}" style="flex:1;">
                            <span id="p-bg-opacity-val" style="font-size:0.85em; color:#bfa15f; min-width:40px;">${tempApp.bg_opacity}%</span>
                        </div>
                        <p style="font-size:0.75em; color:#666; margin-top:8px;">\u7403\u4F53\u7684\u80CC\u666F\u586B\u5145\u989C\u8272\uFF08\u900F\u660E\u5EA6\u4E3A0\u65F6\u5B8C\u5168\u900F\u660E\uFF09</p>
                    </div>
                    
                    <div class="t-form-group">
                        <div class="t-form-label" style="display:flex; justify-content:space-between;"><span>\u60AC\u6D6E\u7403\u5C3A\u5BF8</span><span id="p-size-val" style="color:#bfa15f;">${tempApp.size}px</span></div>
                        <input type="range" id="p-size-input" min="40" max="100" step="2" value="${tempApp.size}" style="width:100%;">
                    </div>
                    
                    <div class="t-form-group">
                        <label class="t-form-label">\u56FE\u6807\u7C7B\u578B</label>
                        <div style="display:flex; gap:20px; margin-bottom:15px;">
                            <label><input type="radio" name="p-type" value="emoji" ${tempApp.type === "emoji" ? "checked" : ""}> Emoji \u8868\u60C5</label>
                            <label><input type="radio" name="p-type" value="image" ${tempApp.type === "image" ? "checked" : ""}> \u81EA\u5B9A\u4E49\u56FE\u7247</label>
                        </div>
                        <div id="box-emoji" style="display:${tempApp.type === "emoji" ? "block" : "none"}">
                            <input id="p-emoji-input" class="t-input" value="${tempApp.type === "emoji" ? tempApp.content : "\u{1F3AD}"}" style="width:100px; text-align:center; font-size:1.5em;">
                        </div>
                        <div id="box-image" style="display:${tempApp.type === "image" ? "block" : "none"}">
                            <input type="file" id="p-file-input" accept="image/*" style="display:none;">
                            <div class="t-upload-card" id="btn-upload-card" title="\u70B9\u51FB\u66F4\u6362\u56FE\u7247"><i class="fa-solid fa-camera fa-2x"></i><span>\u70B9\u51FB\u4E0A\u4F20</span></div>
                        </div>
                    </div>
                    
                    <div class="t-form-group" style="margin-top:15px; padding-top:15px; border-top:1px solid #333;">
                        <label style="cursor:pointer; display:flex; align-items:center;">
                            <input type="checkbox" id="p-show-timer" ${tempApp.show_timer !== false ? "checked" : ""} style="margin-right:10px;">
                            <span style="color:#ccc;">\u23F1\uFE0F \u663E\u793A\u751F\u6210\u8BA1\u65F6\u7EDF\u8BA1</span>
                        </label>
                        <p style="font-size:0.75em; color:#666; margin-top:5px; margin-left:22px;">\u751F\u6210\u65F6\u5728\u60AC\u6D6E\u7403\u4E0A\u65B9\u663E\u793A\u8017\u65F6</p>
                    </div>
                </div>

                <!-- Tab 2: \u4E3B\u9898\u6837\u5F0F -->
                <div id="page-theme" class="t-set-page">
                    <!-- \u5B57\u4F53\u8BBE\u7F6E\u533A\u57DF -->
                    <div style="background:#181818; padding:15px; border-radius:6px; border:1px solid #333; margin-bottom:20px;">
                        <div style="font-weight:bold; color:#90cdf4; margin-bottom:15px;"><i class="fa-solid fa-font"></i> \u5168\u5C40\u5B57\u4F53\u8BBE\u7F6E</div>
                        <p style="font-size:0.85em; color:#888; margin-bottom:15px;">
                            \u81EA\u5B9A\u4E49\u63D2\u4EF6 UI \u548C\u6E32\u67D3\u5185\u5BB9\u7684\u5B57\u4F53\u3002<br>
                            <span style="color:#666;">\u6CE8\uFF1A\u4EE3\u7801\u7F16\u8F91\u5668\u548C\u65E5\u5FD7\u4FDD\u6301\u7B49\u5BBD\u5B57\u4F53\u4E0D\u53D7\u5F71\u54CD\u3002</span>
                        </p>
                        
                        <div class="t-form-group" style="margin-bottom:15px;">
                            <label class="t-form-label">\u5B57\u4F53\u6765\u6E90</label>
                            <div style="display:flex; flex-direction:column; gap:10px;">
                                <label style="cursor:pointer; display:flex; align-items:center; padding:10px; background:#222; border-radius:6px; border:2px solid ${fontSettings.source === "default" || !fontSettings.source ? "#bfa15f" : "#333"};" data-font-source="default">
                                    <input type="radio" name="t-font-source" value="default" ${fontSettings.source === "default" || !fontSettings.source ? "checked" : ""} style="margin-right:12px;">
                                    <div>
                                        <div style="color:#eee; font-weight:bold;">\u{1F5A5}\uFE0F \u7CFB\u7EDF\u9ED8\u8BA4</div>
                                        <div style="font-size:0.8em; color:#888;">\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u5B57\u4F53\u6808</div>
                                    </div>
                                </label>
                                <label style="cursor:pointer; display:flex; align-items:center; padding:10px; background:#222; border-radius:6px; border:2px solid ${fontSettings.source === "online" ? "#bfa15f" : "#333"};" data-font-source="online">
                                    <input type="radio" name="t-font-source" value="online" ${fontSettings.source === "online" ? "checked" : ""} style="margin-right:12px;">
                                    <div>
                                        <div style="color:#eee; font-weight:bold;">\u{1F310} \u5728\u7EBF\u5B57\u4F53</div>
                                        <div style="font-size:0.8em; color:#888;">\u4F7F\u7528 Google Fonts \u7B49\u5728\u7EBF\u670D\u52A1</div>
                                    </div>
                                </label>
                                <label style="cursor:pointer; display:flex; align-items:center; padding:10px; background:#222; border-radius:6px; border:2px solid ${fontSettings.source === "upload" ? "#bfa15f" : "#333"};" data-font-source="upload">
                                    <input type="radio" name="t-font-source" value="upload" ${fontSettings.source === "upload" ? "checked" : ""} style="margin-right:12px;">
                                    <div>
                                        <div style="color:#eee; font-weight:bold;">\u{1F4C1} \u4E0A\u4F20\u5B57\u4F53</div>
                                        <div style="font-size:0.8em; color:#888;">\u4E0A\u4F20\u672C\u5730\u5B57\u4F53\u6587\u4EF6 (.woff2, .ttf)</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        
                        <!-- \u5728\u7EBF\u5B57\u4F53\u9009\u9879 -->
                        <div id="t-font-online-options" style="display:${fontSettings.source === "online" ? "block" : "none"}; background:#1a1a1a; padding:15px; border-radius:6px; margin-top:15px; border:1px solid #333;">
                            <div class="t-form-group" style="margin-bottom:15px;">
                                <label class="t-form-label">@import URL</label>
                                <input id="t-font-import-url" class="t-input" value="${fontSettings.import_url || ""}" placeholder="https://fonts.googleapis.com/css2?family=Noto+Sans+SC">
                                <p style="font-size:0.75em; color:#666; margin-top:5px;">
                                    \u4ECE <a href="https://fonts.google.com/" target="_blank" style="color:#90cdf4;">Google Fonts</a> \u590D\u5236 @import \u4E2D\u7684 URL
                                </p>
                            </div>
                            <div class="t-form-group" style="margin-bottom:0;">
                                <label class="t-form-label">\u5B57\u4F53\u540D\u79F0</label>
                                <input id="t-font-name-online" class="t-input" value="${fontSettings.source === "online" ? fontSettings.font_name || "" : ""}" placeholder="Noto Sans SC">
                                <p style="font-size:0.75em; color:#666; margin-top:5px;">
                                    \u5B57\u4F53\u7684 font-family \u540D\u79F0\uFF0C\u4F8B\u5982\uFF1ANoto Sans SC, LXGW WenKai
                                </p>
                            </div>
                        </div>
                        
                        <!-- \u4E0A\u4F20\u5B57\u4F53\u9009\u9879 -->
                        <div id="t-font-upload-options" style="display:${fontSettings.source === "upload" ? "block" : "none"}; background:#1a1a1a; padding:15px; border-radius:6px; margin-top:15px; border:1px solid #333;">
                            <div class="t-form-group" style="margin-bottom:15px;">
                                <label class="t-form-label">\u9009\u62E9\u5B57\u4F53\u6587\u4EF6</label>
                                <input type="file" id="t-font-file-input" accept=".woff2,.woff,.ttf,.otf" style="display:none;">
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <button id="btn-font-upload" class="t-tool-btn" style="padding:8px 15px;"><i class="fa-solid fa-upload"></i> \u9009\u62E9\u6587\u4EF6</button>
                                    <span id="t-font-file-name" style="color:#888; font-size:0.9em;">${fontSettings.font_data ? "\u5DF2\u4E0A\u4F20\u5B57\u4F53\u6587\u4EF6" : "\u672A\u9009\u62E9\u6587\u4EF6"}</span>
                                </div>
                                <p style="font-size:0.75em; color:#666; margin-top:8px;">
                                    \u652F\u6301 .woff2 (\u63A8\u8350)\u3001.woff\u3001.ttf\u3001.otf \u683C\u5F0F<br>
                                    <span style="color:#f1c40f;">\u26A0\uFE0F \u5B57\u4F53\u6587\u4EF6\u5C06\u4EE5 Base64 \u5B58\u50A8\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7 2MB</span>
                                </p>
                            </div>
                            <div class="t-form-group" style="margin-bottom:0;">
                                <label class="t-form-label">\u5B57\u4F53\u540D\u79F0\uFF08\u53EF\u9009\uFF09</label>
                                <input id="t-font-name-upload" class="t-input" value="${fontSettings.source === "upload" ? fontSettings.font_name || "" : ""}" placeholder="\u7559\u7A7A\u5219\u81EA\u52A8\u547D\u540D\u4E3A TitaniaCustomFont">
                            </div>
                        </div>
                        
                        <!-- \u5F3A\u5236\u8986\u76D6\u9009\u9879 -->
                        <div id="t-font-force-section" style="display:${fontSettings.source !== "default" ? "block" : "none"}; margin-top:15px; padding-top:15px; border-top:1px solid #333;">
                            <label style="cursor:pointer; display:flex; align-items:flex-start; gap:12px;">
                                <input type="checkbox" id="t-font-force-override" ${fontSettings.force_override ? "checked" : ""} style="margin-top:3px;">
                                <div>
                                    <div style="color:#feca57; font-weight:bold;">\u26A1 \u5F3A\u5236\u8986\u76D6\u5185\u8054\u5B57\u4F53</div>
                                    <div style="font-size:0.8em; color:#888; margin-top:3px;">
                                        \u5F00\u542F\u540E\uFF0C\u81EA\u5B9A\u4E49\u5B57\u4F53\u5C06\u4F7F\u7528 !important \u8986\u76D6\u6A21\u578B\u751F\u6210\u7684\u5185\u8054 font-family \u6837\u5F0F\u3002<br>
                                        <span style="color:#ff6b6b;">\u6CE8\u610F\uFF1A\u8FD9\u53EF\u80FD\u7834\u574F\u6A21\u578B\u523B\u610F\u8BBE\u8BA1\u7684\u7279\u6B8A\u5B57\u4F53\u6548\u679C\u3002</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        
                        <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:15px; padding-top:10px; border-top:1px solid #333;">
                            <button id="btn-font-reset" class="t-tool-btn" style="color:#ff6b6b;"><i class="fa-solid fa-rotate-left"></i> \u6062\u590D\u9ED8\u8BA4</button>
                        </div>
                    </div>
                    
                    <div style="background:#181818; padding:15px; border-radius:6px; border:1px solid #333; margin-bottom:20px;">
                        <div style="font-weight:bold; color:#bfa15f; margin-bottom:10px;"><i class="fa-solid fa-palette"></i> \u81EA\u5B9A\u4E49 CSS \u6837\u5F0F</div>
                        <div style="font-size:0.85em; color:#888; line-height:1.6;">
                            \u5728\u6B64\u8F93\u5165\u81EA\u5B9A\u4E49 CSS \u4EE3\u7801\uFF0C\u53EF\u4EE5\u8986\u76D6\u63D2\u4EF6\u9ED8\u8BA4\u6837\u5F0F\u3002<br>
                            \u4F5C\u7528\u8303\u56F4\uFF1A\u63D2\u4EF6 UI\uFF08\u7A97\u53E3\u3001\u6309\u94AE\u7B49\uFF09\u548C\u5267\u672C\u6E32\u67D3\u533A\u57DF\u3002<br>
                            <span style="color:#55efc4;">\u2728 \u652F\u6301\u4FDD\u5B58\u591A\u4E2A\u4E3B\u9898\u65B9\u6848\uFF0C\u968F\u65F6\u5207\u6362\uFF01</span>
                        </div>
                    </div>
                    
                    <!-- CSS \u4E3B\u9898\u65B9\u6848\u7BA1\u7406 -->
                    <div class="t-form-group">
                        <label class="t-form-label">\u{1F3A8} CSS \u4E3B\u9898\u65B9\u6848</label>
                        <div style="display:flex; gap:8px; margin-bottom:10px;">
                            <select id="t-css-theme-select" class="t-input" style="flex:1;"></select>
                            <button id="btn-css-theme-add" class="t-tool-btn" title="\u4FDD\u5B58\u4E3A\u65B0\u65B9\u6848"><i class="fa-solid fa-plus"></i></button>
                            <button id="btn-css-theme-rename" class="t-tool-btn" title="\u91CD\u547D\u540D\u5F53\u524D\u65B9\u6848"><i class="fa-solid fa-pen"></i></button>
                            <button id="btn-css-theme-del" class="t-tool-btn" title="\u5220\u9664\u5F53\u524D\u65B9\u6848" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <div id="css-theme-unsaved-hint" style="display:none; color:#feca57; font-size:0.8em; margin-bottom:8px;">
                            <i class="fa-solid fa-circle-exclamation"></i> \u5F53\u524D\u5185\u5BB9\u6709\u4FEE\u6539\uFF0C\u5207\u6362\u65B9\u6848\u524D\u8BF7\u5148\u4FDD\u5B58
                        </div>
                    </div>
                    
                    <div class="t-form-group">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                            <label class="t-form-label" style="margin:0;">CSS \u4EE3\u7801</label>
                            <div style="display:flex; gap:8px;">
                                <button id="btn-css-import" class="t-tool-btn" title="\u5BFC\u5165\u65B9\u6848"><i class="fa-solid fa-file-import"></i> \u5BFC\u5165</button>
                                <button id="btn-css-export" class="t-tool-btn" title="\u5BFC\u51FA\u65B9\u6848"><i class="fa-solid fa-file-export"></i> \u5BFC\u51FA</button>
                                <button id="btn-css-reset" class="t-tool-btn" title="\u6E05\u7A7A\u5185\u5BB9" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i> \u6E05\u7A7A</button>
                            </div>
                        </div>
                        <textarea id="t-custom-css-input" class="t-input t-code-editor" rows="12" placeholder="/* \u5728\u6B64\u8F93\u5165\u81EA\u5B9A\u4E49 CSS */&#10;&#10;/* \u4F8B\u5982\uFF1A\u4FEE\u6539\u4E3B\u7A97\u53E3\u80CC\u666F\u8272 */&#10;.t-box {&#10;    background: #1a1a2e;&#10;}&#10;&#10;/* \u4FEE\u6539\u6807\u9898\u989C\u8272 */&#10;.t-title-main {&#10;    color: #ff6b6b;&#10;}"></textarea>
                        <div style="display:flex; justify-content:space-between; margin-top:8px;">
                            <span style="font-size:0.75em; color:#666;">\u65B9\u6848\u6570\u91CF: <span id="css-theme-count">0</span>/10</span>
                            <span id="css-char-count" style="font-size:0.75em; color:#666;">0 \u5B57\u7B26</span>
                        </div>
                    </div>
                    
                    <div class="t-form-group">
                        <div style="font-weight:bold; color:#90cdf4; margin-bottom:10px;"><i class="fa-solid fa-lightbulb"></i> \u5E38\u7528\u9009\u62E9\u5668\u53C2\u8003</div>
                        <div class="t-css-hints">
                            <div class="t-css-hint-item">
                                <code>.t-box</code>
                                <span>\u6240\u6709\u5F39\u7A97\u5BB9\u5668\uFF08\u4E3B\u7A97\u53E3\u3001\u8BBE\u7F6E\u3001\u7BA1\u7406\u5668\u7B49\uFF09</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>.t-header</code>
                                <span>\u5F39\u7A97\u6807\u9898\u680F</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>.t-title-main</code>
                                <span>\u6807\u9898\u6587\u5B57</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>.t-btn</code>
                                <span>\u6309\u94AE\u57FA\u7840\u6837\u5F0F</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>.t-btn.primary</code>
                                <span>\u4E3B\u8981\u6309\u94AE\uFF08\u91D1\u8272\uFF09</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>.t-input</code>
                                <span>\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u6846\u3001\u6587\u672C\u57DF</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>#t-output-content</code>
                                <span>\u5267\u672C\u6E32\u67D3\u533A\u57DF\u5BB9\u5668</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>#titania-float-btn</code>
                                <span>\u60AC\u6D6E\u7403</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>.t-mgr-item</code>
                                <span>\u5267\u672C\u7BA1\u7406\u5668\u5217\u8868\u9879</span>
                            </div>
                            <div class="t-css-hint-item">
                                <code>.t-fav-item</code>
                                <span>\u6536\u85CF\u5217\u8868\u9879</span>
                            </div>
                        </div>
                    </div>
                    
                    <input type="file" id="t-css-file-input" accept=".json" style="display:none;">
                </div>

                <!-- Tab 3: \u8FDE\u63A5 -->
                <div id="page-connection" class="t-set-page">
                    <div class="t-form-group">
                        <label class="t-form-label">\u5207\u6362\u914D\u7F6E\u65B9\u6848 (Profile)</label>
                        <div class="t-prof-header">
                            <select id="cfg-prof-select" class="t-prof-select"></select>
                            <button id="cfg-prof-add" class="t-tool-btn" title="\u65B0\u5EFA\u65B9\u6848"><i class="fa-solid fa-plus"></i></button>
                            <button id="cfg-prof-del" class="t-tool-btn" title="\u5220\u9664\u5F53\u524D\u65B9\u6848" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <div id="cfg-prof-meta"><label class="t-form-label">\u65B9\u6848\u540D\u79F0</label><input id="cfg-prof-name" class="t-input" value=""></div>
                    </div>
                    <div style="height:1px; background:#333; margin:20px 0;"></div>
                    <div id="cfg-conn-fields">
                        <div class="t-form-group">
                            <label class="t-form-label">API Endpoint URL</label>
                            <input id="cfg-url" class="t-input" placeholder="\u4F8B\u5982: http://127.0.0.1:5000/v1">
                            <div id="cfg-url-hint" style="font-size:0.8em; color:#666; margin-top:5px; display:none;"><i class="fa-solid fa-link"></i> \u6B63\u5728\u8BFB\u53D6 ST \u5168\u5C40\u8BBE\u7F6E\uFF1A<span id="st-url-display"></span></div>
                        </div>
                        <div class="t-form-group"><label class="t-form-label">API Key</label><input id="cfg-key" type="password" class="t-input" placeholder="sk-..."></div>
                        <div class="t-form-group">
                            <label class="t-form-label">Model Name</label>
                            <div style="display:flex; gap:10px;"><select id="cfg-model" class="t-input" style="cursor:pointer;"></select><button id="t-btn-fetch" class="t-tool-btn" title="\u83B7\u53D6\u6A21\u578B\u5217\u8868">\u{1F504} \u83B7\u53D6\u5217\u8868</button></div>
                        </div>
                    </div>
                    <div class="t-form-group"><label style="cursor:pointer; display:flex; align-items:center;"><input type="checkbox" id="cfg-stream" ${cfg.stream !== false ? "checked" : ""} style="margin-right:10px;"> \u5F00\u542F\u6D41\u5F0F\u4F20\u8F93 (Streaming)</label></div>
                </div>

                <!-- Tab 3: \u5BFC\u6F14\u6A21\u5F0F -->
                <div id="page-director" class="t-set-page">
                    <div style="background:#181818; padding:15px; border-radius:6px; border:1px solid #333; margin-bottom:20px; color:#888; font-size:0.9em;">
                        <i class="fa-solid fa-circle-info"></i> \u81EA\u5B9A\u4E49\u5BFC\u6F14\u6307\u4EE4\uFF0C\u7528\u4E8E\u63A7\u5236\u751F\u6210\u5185\u5BB9\u7684\u98CE\u683C\u3001\u7BC7\u5E45\u3001\u89C6\u89D2\u7B49\u3002\u652F\u6301\u53D8\u91CF\uFF1A<code style="background:#333; padding:2px 5px; border-radius:3px;">{{char}}</code> \u89D2\u8272\u540D\u3001<code style="background:#333; padding:2px 5px; border-radius:3px;">{{user}}</code> \u7528\u6237\u540D
                    </div>
                    
                    <div class="t-form-group">
                        <label class="t-form-label">\u{1F3AC} \u5BFC\u6F14\u6307\u4EE4 (\u81EA\u7531\u7F16\u8F91)</label>
                        <textarea id="set-dir-instruction" class="t-input" rows="5" placeholder="\u4F8B\u5982\uFF1A&#10;- \u7BC7\u5E45\u63A7\u5236\u5728300\u5B57\u5DE6\u53F3&#10;- \u4F7F\u7528\u7B2C\u4E00\u4EBA\u79F0\u53D9\u4E8B&#10;- \u591A\u63CF\u5199\u5185\u5FC3\u6D3B\u52A8\u548C\u73AF\u5883\u6C1B\u56F4&#10;- \u8BED\u8A00\u98CE\u683C\u504F\u5411\u8BD7\u610F\u6587\u827A">${dirCfg.instruction || ""}</textarea>
                        <div style="display:flex; justify-content:space-between; margin-top:5px;">
                            <span style="font-size:0.75em; color:#666;">\u6B64\u6307\u4EE4\u5C06\u4F5C\u4E3A [Director Instructions] \u6DFB\u52A0\u5230 Prompt \u4E2D</span>
                            <span id="dir-char-count" style="font-size:0.75em; color:#666;">0/500</span>
                        </div>
                    </div>
                    
                    <!-- \u6587\u7B14\u53C2\u8003\u65B9\u6848\u7BA1\u7406 -->
                    <div class="t-form-group">
                        <label class="t-form-label">\u{1F4DD} \u6587\u7B14\u53C2\u8003\u65B9\u6848</label>
                        <div style="display:flex; gap:8px; margin-bottom:10px;">
                            <select id="set-style-select" class="t-input" style="flex:1;"></select>
                            <button id="btn-style-add" class="t-tool-btn" title="\u4FDD\u5B58\u4E3A\u65B0\u65B9\u6848"><i class="fa-solid fa-plus"></i></button>
                            <button id="btn-style-rename" class="t-tool-btn" title="\u91CD\u547D\u540D\u5F53\u524D\u65B9\u6848"><i class="fa-solid fa-pen"></i></button>
                            <button id="btn-style-del" class="t-tool-btn" title="\u5220\u9664\u5F53\u524D\u65B9\u6848" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <div id="style-unsaved-hint" style="display:none; color:#feca57; font-size:0.8em; margin-bottom:8px;">
                            <i class="fa-solid fa-circle-exclamation"></i> \u5F53\u524D\u5185\u5BB9\u6709\u4FEE\u6539\uFF0C\u5207\u6362\u65B9\u6848\u524D\u8BF7\u5148\u4FDD\u5B58
                        </div>
                        <textarea id="set-dir-style" class="t-input" rows="6" placeholder="\u7C98\u8D34\u4F60\u559C\u6B22\u7684\u6587\u7B14\u6BB5\u843D...\uFF08\u6700\u591A1000\u5B57\uFF09" maxlength="1000"></textarea>
                        <div style="display:flex; justify-content:space-between; margin-top:5px;">
                            <span style="font-size:0.75em; color:#666;">\u65B9\u6848\u6570\u91CF: <span id="style-count">0</span>/10</span>
                            <span id="style-char-count" style="font-size:0.75em; color:#666;">0/1000</span>
                        </div>
                    </div>
                </div>

                <!-- Tab 4: \u81EA\u52A8\u5316 -->
                <div id="page-automation" class="t-set-page">
                    <div class="t-form-group">
                        <label style="cursor:pointer; display:flex; align-items:center; color:#bfa15f; font-weight:bold;">
                            <input type="checkbox" id="cfg-auto" ${cfg.auto_generate ? "checked" : ""} style="margin-right:10px;">
                            \u5F00\u542F\u540E\u53F0\u81EA\u52A8\u6F14\u7ECE
                        </label>
                        <p style="font-size:0.8em; color:#666; margin-top:5px; margin-left:22px;">\u5F53\u68C0\u6D4B\u5230\u7FA4\u804A\u6D88\u606F\u4E14\u4E0D\u662F\u7528\u6237\u53D1\u9001\u65F6\uFF0C\u6709\u6982\u7387\u81EA\u52A8\u89E6\u53D1\u3002</p>
                    </div>
                    <div id="auto-settings-panel" style="display:${cfg.auto_generate ? "block" : "none"}; padding-left:22px;">
                        <div class="t-form-group">
                            <label class="t-form-label">\u89E6\u53D1\u6982\u7387: <span id="cfg-chance-val">${cfg.auto_chance || 50}%</span></label>
                            <input type="range" id="cfg-chance" min="10" max="100" step="10" value="${cfg.auto_chance || 50}" style="width:100%;">
                        </div>
                        <div class="t-form-group">
                            <label class="t-form-label">\u62BD\u53D6\u7B56\u7565</label>
                            <select id="cfg-auto-mode" class="t-input">
                                <option value="random" ${(cfg.auto_mode || "random") === "random" ? "selected" : ""}>\u{1F3B2} \u968F\u673A\u62BD\u53D6\u5168\u90E8\u5267\u672C (\u9ED8\u8BA4)</option>
                                <option value="category" ${(cfg.auto_mode || "random") === "category" ? "selected" : ""}>\u{1F3AF} \u6307\u5B9A\u5206\u7C7B\u767D\u540D\u5355 (\u81EA\u5B9A\u4E49)</option>
                            </select>
                        </div>
                        <div id="auto-cat-container" style="display:none; background:#181818; padding:10px; border:1px solid #333; border-radius:6px; margin-top:10px;">
                            <div style="font-size:0.8em; color:#888; margin-bottom:8px;">\u8BF7\u52FE\u9009\u5141\u8BB8\u968F\u673A\u62BD\u53D6\u7684\u5206\u7C7B (\u591A\u9009):</div>
                            <div id="auto-cat-list" style="max-height:150px; overflow-y:auto; display:flex; flex-direction:column; gap:5px;"></div>
                        </div>
                    </div>
                    
                    <!-- \u81EA\u52A8\u7EED\u5199\u529F\u80FD -->
                    <div style="margin-top:25px; border-top:1px solid #333; padding-top:20px;">
                        <div class="t-form-group">
                            <label style="cursor:pointer; display:flex; align-items:center; color:#90cdf4; font-weight:bold;">
                                <input type="checkbox" id="cfg-auto-continue" ${data.auto_continue?.enabled ? "checked" : ""} style="margin-right:10px;">
                                \u{1F504} \u5F00\u542F\u81EA\u52A8\u7EED\u5199 (\u5E94\u5BF9 API \u8D85\u65F6\u622A\u65AD)
                            </label>
                            <p style="font-size:0.8em; color:#666; margin-top:5px; margin-left:22px;">
                                \u5F53\u68C0\u6D4B\u5230\u751F\u6210\u5185\u5BB9\u88AB\u622A\u65AD\u65F6\uFF0C\u81EA\u52A8\u53D1\u9001\u7EED\u5199\u8BF7\u6C42\u62FC\u63A5\u5B8C\u6574\u5185\u5BB9\u3002
                            </p>
                        </div>
                        <div id="auto-continue-panel" style="display:${data.auto_continue?.enabled ? "block" : "none"}; padding-left:22px; background:#181818; border:1px solid #333; border-radius:6px; padding:15px; margin-top:10px;">
                            <div class="t-form-group">
                                <label class="t-form-label">\u6700\u5927\u7EED\u5199\u6B21\u6570</label>
                                <select id="cfg-continue-retries" class="t-input" style="width:120px;">
                                    <option value="1" ${(data.auto_continue?.max_retries || 2) === 1 ? "selected" : ""}>1 \u6B21</option>
                                    <option value="2" ${(data.auto_continue?.max_retries || 2) === 2 ? "selected" : ""}>2 \u6B21 (\u63A8\u8350)</option>
                                    <option value="3" ${(data.auto_continue?.max_retries || 2) === 3 ? "selected" : ""}>3 \u6B21</option>
                                    <option value="5" ${(data.auto_continue?.max_retries || 2) === 5 ? "selected" : ""}>5 \u6B21</option>
                                </select>
                                <p style="font-size:0.75em; color:#555; margin-top:5px;">\u8D85\u8FC7\u6B64\u6B21\u6570\u540E\u5C06\u505C\u6B62\u7EED\u5199\uFF0C\u663E\u793A\u5DF2\u83B7\u53D6\u7684\u5185\u5BB9\u3002</p>
                            </div>
                            <div class="t-form-group">
                                <label class="t-form-label">\u622A\u65AD\u68C0\u6D4B\u6A21\u5F0F</label>
                                <select id="cfg-continue-mode" class="t-input">
                                    <option value="html" ${(data.auto_continue?.detection_mode || "html") === "html" ? "selected" : ""}>\u{1F3F7}\uFE0F HTML \u6807\u7B7E\u68C0\u6D4B (\u63A8\u8350)</option>
                                    <option value="sentence" ${(data.auto_continue?.detection_mode || "html") === "sentence" ? "selected" : ""}>\u{1F4DD} \u53E5\u5B50\u5B8C\u6574\u6027\u68C0\u6D4B</option>
                                    <option value="both" ${(data.auto_continue?.detection_mode || "html") === "both" ? "selected" : ""}>\u{1F50D} \u53CC\u91CD\u68C0\u6D4B (\u66F4\u4E25\u683C)</option>
                                </select>
                                <p style="font-size:0.75em; color:#555; margin-top:5px;">
                                    HTML \u68C0\u6D4B\uFF1A\u68C0\u67E5\u6807\u7B7E\u662F\u5426\u95ED\u5408<br>
                                    \u53E5\u5B50\u68C0\u6D4B\uFF1A\u68C0\u67E5\u662F\u5426\u4EE5\u5B8C\u6574\u53E5\u5B50\u7ED3\u675F
                                </p>
                            </div>
                            <div class="t-form-group" style="margin-bottom:0;">
                                <label style="cursor:pointer; display:flex; align-items:center;">
                                    <input type="checkbox" id="cfg-continue-indicator" ${data.auto_continue?.show_indicator !== false ? "checked" : ""} style="margin-right:10px;">
                                    <span style="color:#ccc;">\u5728\u5185\u5BB9\u4E2D\u663E\u793A\u7EED\u5199\u8FDE\u63A5\u6807\u8BB0</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="t-form-group" style="margin-top:20px; border-top:1px solid #333; padding-top:15px;">
                        <label class="t-form-label">\u5386\u53F2\u8BFB\u53D6\u884C\u6570 (\u5F00\u542F\u300C\u8BFB\u53D6\u804A\u5929\u5386\u53F2\u300D\u65F6\u751F\u6548)</label>
                        <input type="number" id="cfg-history" class="t-input" value="${cfg.history_limit || 10}">
                    </div>
                    
                    <!-- \u804A\u5929\u5386\u53F2\u63D0\u53D6\u767D\u540D\u5355 -->
                    <div class="t-form-group" style="margin-top:15px;">
                        <label class="t-form-label">\u{1F4DD} \u804A\u5929\u5386\u53F2\u63D0\u53D6\u6807\u7B7E (\u767D\u540D\u5355)</label>
                        <input type="text" id="cfg-history-whitelist" class="t-input" value="${data.history_extraction?.whitelist || ""}" placeholder="\u4F8B\u5982: content, dialogue, narration">
                        <p style="font-size:0.75em; color:#666; margin-top:5px; line-height:1.5;">
                            \u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u6807\u7B7E\u540D\u3002\u53EA\u63D0\u53D6\u8FD9\u4E9B\u6807\u7B7E\u5185\u7684\u6587\u672C\u4F5C\u4E3A\u5386\u53F2\u4E0A\u4E0B\u6587\u3002<br>
                            <span style="color:#888;">\u7559\u7A7A\u5219\u5168\u6587\u63D0\u53D6\uFF08\u79FB\u9664\u6240\u6709 HTML \u6807\u7B7E\u540E\u7684\u7EAF\u6587\u672C\uFF09</span><br>
                            <span style="color:#55efc4;">\u793A\u4F8B\uFF1A\u586B\u5199 <code style="background:#333; padding:1px 4px; border-radius:2px;">content</code> \u5219\u53EA\u63D0\u53D6 <code style="background:#333; padding:1px 4px; border-radius:2px;">&lt;content&gt;...&lt;/content&gt;</code> \u4E2D\u7684\u5185\u5BB9</span>
                        </p>
                    </div>
                </div>

                <!-- Tab 5: \u7CFB\u7EDF\u63D0\u793A\u8BCD -->
                <div id="page-prompts" class="t-set-page">
                    <div style="background:#181818; padding:15px; border-radius:6px; border:1px solid #333; margin-bottom:20px;">
                        <div style="font-weight:bold; color:#90cdf4; margin-bottom:10px;"><i class="fa-solid fa-wand-magic-sparkles"></i> \u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD</div>
                        <div style="font-size:0.85em; color:#888; line-height:1.6;">
                            \u8986\u76D6\u63D2\u4EF6\u5185\u7F6E\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u81EA\u5B9A\u4E49 AI \u7684\u884C\u4E3A\u65B9\u5F0F\u548C\u8F93\u51FA\u683C\u5F0F\u3002<br>
                            <span style="color:#feca57;">\u26A0\uFE0F \u9AD8\u7EA7\u529F\u80FD\uFF1A\u4FEE\u6539\u4E0D\u5F53\u53EF\u80FD\u5BFC\u81F4\u751F\u6210\u5931\u8D25\u6216\u683C\u5F0F\u9519\u4E71\u3002</span>
                        </div>
                    </div>
                    
                    <div class="t-form-group">
                        <label style="cursor:pointer; display:flex; align-items:center; color:#55efc4; font-weight:bold;">
                            <input type="checkbox" id="cfg-prompt-override" ${data.custom_prompts?.override_enabled ? "checked" : ""} style="margin-right:10px;">
                            \u542F\u7528\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD
                        </label>
                        <p style="font-size:0.8em; color:#666; margin-top:5px; margin-left:22px;">\u542F\u7528\u540E\u5C06\u4F7F\u7528\u4E0B\u65B9\u7684\u81EA\u5B9A\u4E49\u63D0\u793A\u8BCD\u66FF\u4EE3\u5185\u7F6E\u63D0\u793A\u8BCD\u3002</p>
                    </div>
                    
                    <div id="custom-prompts-panel" style="display:${data.custom_prompts?.override_enabled ? "block" : "none"};">
                        <!-- \u5185\u5BB9\u4F18\u5148\u6A21\u5F0F\u63D0\u793A\u8BCD -->
                        <div class="t-form-group" style="background:#1a1a2e; padding:15px; border-radius:6px; border:1px solid #333; margin-bottom:15px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                                <label class="t-form-label" style="margin:0; color:#90cdf4;">\u{1F4DD} \u5185\u5BB9\u4F18\u5148\u6A21\u5F0F (Content Mode)</label>
                                <button id="btn-prompt-content-reset" class="t-tool-btn" title="\u6062\u590D\u9ED8\u8BA4" style="font-size:0.8em; padding:4px 8px;"><i class="fa-solid fa-rotate-left"></i> \u9ED8\u8BA4</button>
                            </div>
                            <textarea id="cfg-prompt-content" class="t-input t-code-editor" rows="6" placeholder="You are a creative engine...">${data.custom_prompts?.content_mode || ""}</textarea>
                            <div style="display:flex; justify-content:space-between; margin-top:5px;">
                                <span style="font-size:0.75em; color:#666;">\u9ED8\u8BA4\u7528\u4E8E\u5927\u591A\u6570\u5267\u672C\u751F\u6210</span>
                                <span id="prompt-content-count" style="font-size:0.75em; color:#666;">0 \u5B57\u7B26</span>
                            </div>
                        </div>
                        
                        <!-- \u6C1B\u56F4\u7F8E\u5316\u6A21\u5F0F\u63D0\u793A\u8BCD -->
                        <div class="t-form-group" style="background:#2e1a2e; padding:15px; border-radius:6px; border:1px solid #333;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                                <label class="t-form-label" style="margin:0; color:#ff79c6;">\u{1F3A8} \u6C1B\u56F4\u7F8E\u5316\u6A21\u5F0F (Visual Mode)</label>
                                <button id="btn-prompt-visual-reset" class="t-tool-btn" title="\u6062\u590D\u9ED8\u8BA4" style="font-size:0.8em; padding:4px 8px;"><i class="fa-solid fa-rotate-left"></i> \u9ED8\u8BA4</button>
                            </div>
                            <textarea id="cfg-prompt-visual" class="t-input t-code-editor" rows="8" placeholder="You are a Visual Director...">${data.custom_prompts?.visual_mode || ""}</textarea>
                            <div style="display:flex; justify-content:space-between; margin-top:5px;">
                                <span style="font-size:0.75em; color:#666;">\u7528\u4E8E\u89C6\u89C9\u6548\u679C\u4F18\u5148\u7684\u573A\u666F</span>
                                <span id="prompt-visual-count" style="font-size:0.75em; color:#666;">0 \u5B57\u7B26</span>
                            </div>
                        </div>
                        
                        <!-- \u63D0\u793A\u4FE1\u606F -->
                        <div style="background:rgba(255,159,67,0.1); border:1px solid rgba(255,159,67,0.3); padding:12px; border-radius:6px; margin-top:15px;">
                            <div style="font-size:0.85em; color:#feca57; margin-bottom:8px;"><i class="fa-solid fa-lightbulb"></i> \u7F16\u5199\u63D0\u793A\u8BCD\u7684\u5EFA\u8BAE</div>
                            <ul style="font-size:0.8em; color:#888; margin:0; padding-left:18px; line-height:1.7;">
                                <li>\u660E\u786E\u6307\u5B9A\u8F93\u51FA\u683C\u5F0F\uFF08\u5982\uFF1AHTML\u3001\u4F7F\u7528\u5185\u8054CSS\u7B49\uFF09</li>
                                <li>\u6307\u5B9A\u8BED\u8A00\uFF08\u5982\uFF1ALanguage: Chinese\uFF09</li>
                                <li>\u7981\u6B62 Markdown \u4EE3\u7801\u5757\uFF08No markdown code blocks\uFF09</li>
                                <li>\u7559\u7A7A\u5219\u4F7F\u7528\u5185\u7F6E\u9ED8\u8BA4\u63D0\u793A\u8BCD</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Tab 6: \u6570\u636E\u7BA1\u7406 -->
                <div id="page-data" class="t-set-page">
                    <div class="t-form-group">
                        <div class="t-form-label">\u81EA\u5B9A\u4E49\u5267\u672C\u5E93</div>
                        <div style="background:#181818; border:1px solid #333; padding:20px; border-radius:6px; display:flex; align-items:center; justify-content:space-between;">
                            <div>
                                <div style="font-size:1.1em; color:#eee; font-weight:bold;"><i class="fa-solid fa-scroll" style="color:#bfa15f; margin-right:8px;"></i>\u5267\u672C\u7BA1\u7406\u5668</div>
                                <div style="font-size:0.85em; color:#777; margin-top:5px;">\u5F53\u524D\u62E5\u6709\u81EA\u5B9A\u4E49\u5267\u672C: ${(data.user_scripts || []).length} \u4E2A</div>
                            </div>
                            <button id="btn-open-mgr" class="t-btn primary" style="padding: 8px 20px;"><i class="fa-solid fa-list-check"></i> \u6253\u5F00\u7BA1\u7406</button>
                        </div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label">\u5DF2\u9690\u85CF\u7684\u5B98\u65B9\u9884\u8BBE\u5267\u672C</div>
                        <div style="background:#181818; border:1px solid #333; padding:15px; border-radius:6px; display:flex; align-items:center; justify-content:space-between;">
                            <div><div style="font-size:1.1em; color:#eee;">\u5171 ${(data.disabled_presets || []).length} \u4E2A</div><div style="font-size:0.8em; color:#666;">\u8FD9\u4E9B\u9884\u8BBE\u5728\u5217\u8868\u4E2D\u5DF2\u88AB\u9690\u85CF</div></div>
                            <button id="btn-restore-presets" class="t-btn" style="border:1px solid #555;" ${(data.disabled_presets || []).length === 0 ? "disabled" : ""}>\u267B\uFE0F \u6062\u590D\u6240\u6709</button>
                        </div>
                    </div>
                    
                    <!-- \u6570\u636E\u5907\u4EFD\u533A\u57DF -->
                    <div class="t-form-group" style="margin-top:25px; border-top:1px solid #333; padding-top:20px;">
                        <div class="t-form-label">\u{1F4E6} \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D</div>
                        <div style="background: linear-gradient(135deg, rgba(90, 200, 170, 0.08), rgba(100, 180, 255, 0.08)); border:1px solid rgba(90, 200, 170, 0.3); padding:20px; border-radius:8px;">
                            <div style="margin-bottom:15px;">
                                <div style="font-size:0.95em; color:#eee; font-weight:bold; margin-bottom:8px;">
                                    <i class="fa-solid fa-database" style="color:#55efc4; margin-right:8px;"></i>\u5B8C\u6574\u6570\u636E\u5BFC\u51FA/\u5BFC\u5165
                                </div>
                                <div style="font-size:0.8em; color:#888; line-height:1.5;">
                                    \u5BFC\u51FA\u5305\u542B\uFF1AAPI \u914D\u7F6E\u3001\u7528\u6237\u811A\u672C\u3001\u6536\u85CF\u5185\u5BB9\u3001\u5916\u89C2\u8BBE\u7F6E\u3001\u5BFC\u6F14\u6307\u4EE4\u3001\u4E16\u754C\u4E66\u7B5B\u9009\u7B49\u6240\u6709\u63D2\u4EF6\u6570\u636E\u3002<br>
                                    <span style="color:#feca57;">\u26A0\uFE0F \u5BFC\u51FA\u6587\u4EF6\u5305\u542B API \u5BC6\u94A5\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\uFF01</span>
                                </div>
                            </div>
                            <div style="display:flex; gap:15px; flex-wrap:wrap;">
                                <button id="btn-backup-export" class="t-btn" style="border:1px solid #55efc4; color:#55efc4;">
                                    <i class="fa-solid fa-download"></i> \u5BFC\u51FA\u5907\u4EFD
                                </button>
                                <button id="btn-backup-import" class="t-btn" style="border:1px solid #90cdf4; color:#90cdf4;">
                                    <i class="fa-solid fa-upload"></i> \u5BFC\u5165\u5907\u4EFD
                                </button>
                                <input type="file" id="t-backup-file-input" accept=".json" style="display:none;">
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Tab 7: \u8BCA\u65AD -->
                <div id="page-diagnostics" class="t-set-page">
                    <div style="margin-bottom:15px; background: rgba(255, 159, 67, 0.1); border:1px solid rgba(255, 159, 67, 0.3); padding:10px; border-radius:6px;">
                        <div style="font-weight:bold; color:#feca57; font-size:0.9em; margin-bottom:5px;"><i class="fa-solid fa-triangle-exclamation"></i> \u62A5\u9519\u6392\u67E5\u6307\u5357</div>
                        <div style="font-size:0.85em; color:#ccc;">\u5982\u679C\u60A8\u9047\u5230\u751F\u6210\u5931\u8D25\u6216\u5185\u5BB9\u88AB\u622A\u65AD\u7684\u60C5\u51B5\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u65B9\u201C\u5BFC\u51FA\u5B8C\u6574\u62A5\u544A\u201D\u6309\u94AE\uFF0C\u5C06\u751F\u6210\u7684 JSON \u6587\u4EF6\u53D1\u9001\u7ED9\u5F00\u53D1\u8005\u3002\u62A5\u544A\u4E2D\u5305\u542B\u60A8\u7684 Prompt\uFF08\u7528\u4E8E\u6392\u67E5\u5B89\u5168\u5BA1\u67E5\uFF09\uFF0C\u4F46 <b>API Key \u5DF2\u81EA\u52A8\u8131\u654F</b>\u3002</div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label">\u5B9E\u65F6\u65E5\u5FD7 (\u5185\u5B58\u7F13\u5B58 50 \u6761)</div>
                        <div class="t-log-box" id="t-log-viewer"></div>
                    </div>
                    <div style="display:flex; gap:10px;">
                        <button id="btn-refresh-log" class="t-btn">\u{1F504} \u5237\u65B0\u663E\u793A</button>
                        <button id="btn-export-log" class="t-btn primary"><i class="fa-solid fa-download"></i> \u5BFC\u51FA\u5B8C\u6574\u62A5\u544A (.json)</button>
                    </div>
                </div>

            </div>
        </div>
        <div style="padding:15px; background:#181818; border-top:1px solid #333; display:flex; justify-content:flex-end;">
            <button id="t-set-save" class="t-btn primary" style="padding:0 30px;">\u{1F4BE} \u4FDD\u5B58\u6240\u6709\u914D\u7F6E</button>
        </div>
    </div>`;
  $("#t-overlay").append(html);
  $(".t-set-tab-btn").on("click", function() {
    $(".t-set-tab-btn").removeClass("active");
    $(this).addClass("active");
    $(".t-set-page").removeClass("active");
    $(`#page-${$(this).data("tab")}`).addClass("active");
  });
  const saveCurrentProfileToMemory = () => {
    const pIndex = tempProfiles.findIndex((p) => p.id === tempActiveId);
    if (pIndex !== -1 && tempProfiles[pIndex].type !== "internal") {
      const p = tempProfiles[pIndex];
      p.name = $("#cfg-prof-name").val();
      p.url = $("#cfg-url").val();
      p.key = $("#cfg-key").val();
      p.model = $("#cfg-model").val();
    }
  };
  const renderProfileUI = () => {
    const pIndex = tempProfiles.findIndex((p2) => p2.id === tempActiveId);
    if (pIndex === -1) {
      tempActiveId = tempProfiles[0].id;
      return renderProfileUI();
    }
    const p = tempProfiles[pIndex];
    const isInternal = p.type === "internal";
    const $sel = $("#cfg-prof-select");
    $sel.empty();
    tempProfiles.forEach((prof) => $sel.append(`<option value="${prof.id}" ${prof.id === tempActiveId ? "selected" : ""}>${prof.name}</option>`));
    $("#cfg-prof-name").val(p.name).prop("disabled", isInternal);
    $("#cfg-prof-del").prop("disabled", isInternal).css("opacity", isInternal ? 0.5 : 1);
    if (isInternal) {
      $("#cfg-url").val("").prop("disabled", true).prop("placeholder", "(\u7531 ST \u6258\u7BA1)");
      $("#cfg-key").val("").prop("disabled", true).prop("placeholder", "(\u7531 ST \u6258\u7BA1)");
      $("#cfg-model").empty().append("<option selected>(ST \u8BBE\u7F6E)</option>").prop("disabled", true);
      $("#st-url-display").text(typeof settings !== "undefined" ? settings.api_url_openai || "\u672A\u77E5" : "\u672A\u77E5");
      $("#cfg-url-hint").show();
    } else {
      $("#cfg-url").val(p.url || "").prop("disabled", false).prop("placeholder", "http://...");
      $("#cfg-key").val(p.key || "").prop("disabled", false).prop("placeholder", "sk-...");
      $("#cfg-model").prop("disabled", false);
      $("#cfg-url-hint").hide();
      const $mSel = $("#cfg-model");
      $mSel.empty();
      const currentM = p.model || "gpt-3.5-turbo";
      $mSel.append(`<option value="${currentM}" selected>${currentM}</option>`);
    }
  };
  $("#cfg-prof-select").on("change", function() {
    saveCurrentProfileToMemory();
    tempActiveId = $(this).val();
    renderProfileUI();
  });
  $("#cfg-prof-add").on("click", function() {
    saveCurrentProfileToMemory();
    const newId = "custom_" + Date.now();
    tempProfiles.push({ id: newId, name: "\u65B0\u65B9\u6848 " + tempProfiles.length, type: "custom", url: "", key: "", model: "gpt-3.5-turbo" });
    tempActiveId = newId;
    renderProfileUI();
  });
  $("#cfg-prof-del").on("click", function() {
    if (confirm("\u5220\u9664\u65B9\u6848\uFF1F")) {
      tempProfiles = tempProfiles.filter((p) => p.id !== tempActiveId);
      tempActiveId = tempProfiles[0].id;
      renderProfileUI();
    }
  });
  const PREVIEW_ANIM_CLASSES = {
    ripple: "p-anim-ripple",
    arc: "p-anim-arc"
  };
  const hexToRgba = (hex, opacity) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return hex;
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };
  const renderPreview = () => {
    const $ball = $("#p-ball");
    const size = parseInt(tempApp.size) || 56;
    const bgOpacity = tempApp.bg_opacity !== void 0 ? tempApp.bg_opacity : 100;
    const borderOpacity = tempApp.border_opacity !== void 0 ? tempApp.border_opacity : 100;
    const bgColor = hexToRgba(tempApp.bg_color || "#2b2b2b", bgOpacity);
    const borderColor = hexToRgba(tempApp.border_color || "#90cdf4", borderOpacity);
    $ball.css({
      width: size + "px",
      height: size + "px",
      fontSize: Math.floor(size * 0.46) + "px",
      background: bgColor,
      borderColor
    });
    if (tempApp.type === "emoji") {
      $ball.html(tempApp.content);
    } else if (tempApp.type === "image") {
      if (tempApp.content && tempApp.content.startsWith("data:")) {
        $ball.html(`<img src="${tempApp.content}">`);
        $("#btn-upload-card").css("background-image", `url('${tempApp.content}')`).find("i, span").hide();
      } else {
        $ball.html('<i class="fa-solid fa-image"></i>');
        $("#btn-upload-card").css("background-image", "").find("i, span").show();
      }
    }
  };
  const playAnimationPreview = () => {
    const $ball = $("#p-ball");
    $ball.removeClass("p-notify p-anim-ripple p-anim-arc");
    const animClass = PREVIEW_ANIM_CLASSES[tempApp.animation] || PREVIEW_ANIM_CLASSES.ripple;
    $ball.addClass(animClass);
    setTimeout(() => {
      $ball.removeClass(animClass);
    }, 3e3);
  };
  $(".t-anim-option").on("click", function() {
    const anim = $(this).data("anim");
    tempApp.animation = anim;
    $(".t-anim-option").removeClass("active");
    $(this).addClass("active");
    playAnimationPreview();
  });
  $("input[name='p-type']").on("change", function() {
    tempApp.type = $(this).val();
    $("#box-emoji").toggle(tempApp.type === "emoji");
    $("#box-image").toggle(tempApp.type === "image");
    renderPreview();
  });
  $("#p-size-input").on("input", function() {
    tempApp.size = $(this).val();
    $("#p-size-val").text(tempApp.size + "px");
    renderPreview();
  });
  $("#p-emoji-input").on("input", function() {
    tempApp.content = $(this).val();
    renderPreview();
  });
  $("#btn-upload-card").on("click", () => $("#p-file-input").click());
  $("#p-file-input").on("change", async function() {
    const file = this.files[0];
    if (!file) return;
    try {
      tempApp.content = await fileToBase64(file);
      renderPreview();
    } catch (e) {
      alert("Fail");
    }
  });
  $("#btn-test-anim").on("click", () => playAnimationPreview());
  $("#btn-test-notify").on("click", () => {
    const $ball = $("#p-ball");
    $ball.removeClass("p-anim-ripple p-anim-arc");
    $ball.addClass("p-notify");
    setTimeout(() => $ball.removeClass("p-notify"), 3e3);
  });
  const updateBorderColorUI = (color) => {
    tempApp.border_color = color;
    $("#p-border-color").val(color);
    $("#p-border-color-text").val(color);
    $("#p-ball").css("border-color", color);
    $(".t-color-preset").css("border-color", "transparent");
    $(`.t-color-preset[data-color="${color}"]`).css("border-color", "#fff");
  };
  $("#p-border-color").on("input", function() {
    updateBorderColorUI($(this).val());
  });
  $("#p-border-color-text").on("change", function() {
    const val = $(this).val().trim();
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      updateBorderColorUI(val);
    }
  });
  $(".t-color-preset").on("click", function() {
    updateBorderColorUI($(this).data("color"));
  });
  $(`.t-color-preset[data-color="${tempApp.border_color}"]`).css("border-color", "#fff");
  const updateBgColorUI = (color) => {
    tempApp.bg_color = color;
    $("#p-bg-color").val(color);
    $("#p-bg-color-text").val(color);
    $("#p-ball").css("background", color);
    $(".t-bg-preset").css("border-color", "transparent");
    $(`.t-bg-preset[data-color="${color}"]`).css("border-color", "#fff");
  };
  $("#p-bg-color").on("input", function() {
    updateBgColorUI($(this).val());
  });
  $("#p-bg-color-text").on("change", function() {
    const val = $(this).val().trim();
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      updateBgColorUI(val);
    }
  });
  $(".t-bg-preset").on("click", function() {
    updateBgColorUI($(this).data("color"));
  });
  $(`.t-bg-preset[data-color="${tempApp.bg_color}"]`).css("border-color", "#fff");
  $("#p-border-opacity").on("input", function() {
    tempApp.border_opacity = parseInt($(this).val());
    $("#p-border-opacity-val").text(tempApp.border_opacity + "%");
    renderPreview();
  });
  $("#p-bg-opacity").on("input", function() {
    tempApp.bg_opacity = parseInt($(this).val());
    $("#p-bg-opacity-val").text(tempApp.bg_opacity + "%");
    renderPreview();
  });
  const updateDirCharCount = () => {
    const len = ($("#set-dir-instruction").val() || "").length;
    $("#dir-char-count").text(`${len}/500`);
    if (len > 450) {
      $("#dir-char-count").css("color", "#ff6b6b");
    } else {
      $("#dir-char-count").css("color", "#666");
    }
  };
  $("#set-dir-instruction").on("input", updateDirCharCount);
  updateDirCharCount();
  const MAX_STYLE_PROFILES = 10;
  const renderStyleProfileUI = () => {
    const $sel = $("#set-style-select");
    $sel.empty();
    tempStyleProfiles.forEach((p) => {
      $sel.append(`<option value="${p.id}" ${p.id === tempActiveStyleId ? "selected" : ""}>${p.name}</option>`);
    });
    const currentProfile = tempStyleProfiles.find((p) => p.id === tempActiveStyleId);
    if (currentProfile) {
      $("#set-dir-style").val(currentProfile.content);
    }
    updateStyleCharCount();
    $("#style-count").text(tempStyleProfiles.length);
    const isDefault = tempActiveStyleId === "default";
    $("#btn-style-del").prop("disabled", isDefault).css("opacity", isDefault ? 0.5 : 1);
    $("#btn-style-rename").prop("disabled", isDefault).css("opacity", isDefault ? 0.5 : 1);
    styleContentModified = false;
    $("#style-unsaved-hint").hide();
  };
  const updateStyleCharCount = () => {
    const len = ($("#set-dir-style").val() || "").length;
    $("#style-char-count").text(`${len}/1000`);
    if (len > 900) {
      $("#style-char-count").css("color", "#ff6b6b");
    } else {
      $("#style-char-count").css("color", "#666");
    }
  };
  const saveCurrentStyleToMemory = () => {
    const pIndex = tempStyleProfiles.findIndex((p) => p.id === tempActiveStyleId);
    if (pIndex !== -1) {
      tempStyleProfiles[pIndex].content = $("#set-dir-style").val() || "";
    }
    styleContentModified = false;
    $("#style-unsaved-hint").hide();
  };
  const checkUnsavedStyleChanges = () => {
    const currentProfile = tempStyleProfiles.find((p) => p.id === tempActiveStyleId);
    if (!currentProfile) return false;
    const currentContent = $("#set-dir-style").val() || "";
    return currentContent !== currentProfile.content;
  };
  $("#set-dir-style").on("input", function() {
    updateStyleCharCount();
    const hasChanges = checkUnsavedStyleChanges();
    styleContentModified = hasChanges;
    $("#style-unsaved-hint").toggle(hasChanges);
  });
  $("#set-style-select").on("change", function() {
    if (styleContentModified) {
      const confirmSwitch = confirm("\u5F53\u524D\u5185\u5BB9\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u662F\u5426\u653E\u5F03\u4FEE\u6539\u5E76\u5207\u6362\u65B9\u6848\uFF1F");
      if (!confirmSwitch) {
        $(this).val(tempActiveStyleId);
        return;
      }
    }
    tempActiveStyleId = $(this).val();
    renderStyleProfileUI();
  });
  $("#btn-style-add").on("click", function() {
    if (tempStyleProfiles.length >= MAX_STYLE_PROFILES) {
      if (window.toastr) toastr.warning(`\u6700\u591A\u53EA\u80FD\u4FDD\u5B58 ${MAX_STYLE_PROFILES} \u4E2A\u65B9\u6848`);
      return;
    }
    const currentContent = $("#set-dir-style").val() || "";
    if (!currentContent.trim()) {
      if (window.toastr) toastr.warning("\u8BF7\u5148\u8F93\u5165\u6587\u7B14\u53C2\u8003\u5185\u5BB9");
      return;
    }
    const newName = prompt("\u8BF7\u8F93\u5165\u65B0\u65B9\u6848\u7684\u540D\u79F0\uFF1A", `\u65B9\u6848 ${tempStyleProfiles.length}`);
    if (!newName || !newName.trim()) return;
    const newId = "style_" + Date.now();
    tempStyleProfiles.push({
      id: newId,
      name: newName.trim(),
      content: currentContent
    });
    tempActiveStyleId = newId;
    styleContentModified = false;
    renderStyleProfileUI();
    if (window.toastr) toastr.success(`\u5DF2\u4FDD\u5B58\u4E3A\u65B0\u65B9\u6848: ${newName.trim()}`);
  });
  $("#btn-style-rename").on("click", function() {
    if (tempActiveStyleId === "default") {
      if (window.toastr) toastr.warning("\u9ED8\u8BA4\u65B9\u6848\u4E0D\u53EF\u91CD\u547D\u540D");
      return;
    }
    const currentProfile = tempStyleProfiles.find((p) => p.id === tempActiveStyleId);
    if (!currentProfile) return;
    const newName = prompt("\u8BF7\u8F93\u5165\u65B0\u7684\u65B9\u6848\u540D\u79F0\uFF1A", currentProfile.name);
    if (!newName || !newName.trim()) return;
    currentProfile.name = newName.trim();
    renderStyleProfileUI();
    if (window.toastr) toastr.success(`\u65B9\u6848\u5DF2\u91CD\u547D\u540D\u4E3A: ${newName.trim()}`);
  });
  $("#btn-style-del").on("click", function() {
    if (tempActiveStyleId === "default") {
      if (window.toastr) toastr.warning("\u9ED8\u8BA4\u65B9\u6848\u4E0D\u53EF\u5220\u9664");
      return;
    }
    const currentProfile = tempStyleProfiles.find((p) => p.id === tempActiveStyleId);
    if (!currentProfile) return;
    if (!confirm(`\u786E\u5B9A\u8981\u5220\u9664\u65B9\u6848 "${currentProfile.name}" \u5417\uFF1F`)) return;
    tempStyleProfiles = tempStyleProfiles.filter((p) => p.id !== tempActiveStyleId);
    tempActiveStyleId = "default";
    styleContentModified = false;
    renderStyleProfileUI();
    if (window.toastr) toastr.success("\u65B9\u6848\u5DF2\u5220\u9664");
  });
  renderStyleProfileUI();
  let tempFontData = fontSettings.font_data || "";
  $("input[name='t-font-source']").on("change", function() {
    const source = $(this).val();
    $("[data-font-source]").css("border-color", "#333");
    $(`[data-font-source="${source}"]`).css("border-color", "#bfa15f");
    $("#t-font-online-options").toggle(source === "online");
    $("#t-font-upload-options").toggle(source === "upload");
    $("#t-font-force-section").toggle(source !== "default");
  });
  $("#btn-font-upload").on("click", () => $("#t-font-file-input").click());
  $("#t-font-file-input").on("change", async function() {
    const file = this.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      if (window.toastr) toastr.error("\u5B57\u4F53\u6587\u4EF6\u8FC7\u5927\uFF0C\u8BF7\u9009\u62E9\u5C0F\u4E8E 5MB \u7684\u6587\u4EF6");
      return;
    }
    try {
      tempFontData = await fileToBase64(file);
      $("#t-font-file-name").text(file.name).css("color", "#55efc4");
      if (window.toastr) toastr.success(`\u5DF2\u52A0\u8F7D\u5B57\u4F53: ${file.name}`);
    } catch (e) {
      console.error("Titania: \u5B57\u4F53\u52A0\u8F7D\u5931\u8D25", e);
      if (window.toastr) toastr.error("\u5B57\u4F53\u52A0\u8F7D\u5931\u8D25");
    }
  });
  $("#btn-font-reset").on("click", () => {
    if (!confirm("\u786E\u5B9A\u8981\u6062\u590D\u9ED8\u8BA4\u5B57\u4F53\u8BBE\u7F6E\u5417\uFF1F")) return;
    $("input[name='t-font-source'][value='default']").prop("checked", true).trigger("change");
    $("#t-font-import-url").val("");
    $("#t-font-name-online").val("");
    $("#t-font-name-upload").val("");
    tempFontData = "";
    $("#t-font-file-name").text("\u672A\u9009\u62E9\u6587\u4EF6").css("color", "#888");
    if (window.toastr) toastr.info("\u5DF2\u6062\u590D\u9ED8\u8BA4\u5B57\u4F53\uFF0C\u8BF7\u70B9\u51FB\u300C\u4FDD\u5B58\u6240\u6709\u914D\u7F6E\u300D\u751F\u6548");
  });
  const MAX_CSS_THEMES = 10;
  const renderCssThemeUI = () => {
    const $sel = $("#t-css-theme-select");
    $sel.empty();
    tempCssThemes.forEach((p) => {
      $sel.append(`<option value="${p.id}" ${p.id === tempActiveCssThemeId ? "selected" : ""}>${p.name}</option>`);
    });
    const currentTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    if (currentTheme) {
      $("#t-custom-css-input").val(currentTheme.css || "");
    }
    updateCSSCharCount();
    $("#css-theme-count").text(tempCssThemes.length);
    const isDefault = tempActiveCssThemeId === "default";
    const isOnlyOne = tempCssThemes.length <= 1;
    $("#btn-css-theme-del").prop("disabled", isDefault || isOnlyOne).css("opacity", isDefault || isOnlyOne ? 0.5 : 1);
    cssThemeModified = false;
    $("#css-theme-unsaved-hint").hide();
  };
  const updateCSSCharCount = () => {
    const len = ($("#t-custom-css-input").val() || "").length;
    $("#css-char-count").text(`${len} \u5B57\u7B26`);
  };
  const saveCurrentCssThemeToMemory = () => {
    const pIndex = tempCssThemes.findIndex((p) => p.id === tempActiveCssThemeId);
    if (pIndex !== -1) {
      tempCssThemes[pIndex].css = $("#t-custom-css-input").val() || "";
    }
    cssThemeModified = false;
    $("#css-theme-unsaved-hint").hide();
  };
  const checkUnsavedCssChanges = () => {
    const currentTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    if (!currentTheme) return false;
    const currentContent = $("#t-custom-css-input").val() || "";
    return currentContent !== (currentTheme.css || "");
  };
  $("#t-custom-css-input").on("input", function() {
    updateCSSCharCount();
    const hasChanges = checkUnsavedCssChanges();
    cssThemeModified = hasChanges;
    $("#css-theme-unsaved-hint").toggle(hasChanges);
  });
  $("#t-css-theme-select").on("change", function() {
    if (cssThemeModified) {
      const confirmSwitch = confirm("\u5F53\u524D\u5185\u5BB9\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u662F\u5426\u4FDD\u5B58\u540E\u518D\u5207\u6362\uFF1F\n\n\u70B9\u51FB\u300C\u786E\u5B9A\u300D\u4FDD\u5B58\u5E76\u5207\u6362\n\u70B9\u51FB\u300C\u53D6\u6D88\u300D\u653E\u5F03\u4FEE\u6539\u5E76\u5207\u6362");
      if (confirmSwitch) {
        saveCurrentCssThemeToMemory();
      }
    }
    tempActiveCssThemeId = $(this).val();
    renderCssThemeUI();
    const currentTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    if (currentTheme) {
      applyCustomCSS(currentTheme.css || "");
    }
  });
  $("#btn-css-theme-add").on("click", function() {
    if (tempCssThemes.length >= MAX_CSS_THEMES) {
      if (window.toastr) toastr.warning(`\u6700\u591A\u53EA\u80FD\u4FDD\u5B58 ${MAX_CSS_THEMES} \u4E2A\u4E3B\u9898\u65B9\u6848`);
      return;
    }
    const currentContent = $("#t-custom-css-input").val() || "";
    const newName = prompt("\u8BF7\u8F93\u5165\u65B0\u4E3B\u9898\u65B9\u6848\u7684\u540D\u79F0\uFF1A", `\u4E3B\u9898 ${tempCssThemes.length + 1}`);
    if (!newName || !newName.trim()) return;
    const newId = "css_theme_" + Date.now();
    tempCssThemes.push({
      id: newId,
      name: newName.trim(),
      css: currentContent
    });
    tempActiveCssThemeId = newId;
    cssThemeModified = false;
    renderCssThemeUI();
    if (window.toastr) toastr.success(`\u5DF2\u4FDD\u5B58\u4E3A\u65B0\u4E3B\u9898: ${newName.trim()}`);
  });
  $("#btn-css-theme-rename").on("click", function() {
    const currentTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    if (!currentTheme) return;
    const newName = prompt("\u8BF7\u8F93\u5165\u65B0\u7684\u4E3B\u9898\u540D\u79F0\uFF1A", currentTheme.name);
    if (!newName || !newName.trim()) return;
    currentTheme.name = newName.trim();
    renderCssThemeUI();
    if (window.toastr) toastr.success(`\u4E3B\u9898\u5DF2\u91CD\u547D\u540D\u4E3A: ${newName.trim()}`);
  });
  $("#btn-css-theme-del").on("click", function() {
    if (tempActiveCssThemeId === "default") {
      if (window.toastr) toastr.warning("\u9ED8\u8BA4\u4E3B\u9898\u4E0D\u53EF\u5220\u9664");
      return;
    }
    if (tempCssThemes.length <= 1) {
      if (window.toastr) toastr.warning("\u81F3\u5C11\u9700\u8981\u4FDD\u7559\u4E00\u4E2A\u4E3B\u9898\u65B9\u6848");
      return;
    }
    const currentTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    if (!currentTheme) return;
    if (!confirm(`\u786E\u5B9A\u8981\u5220\u9664\u4E3B\u9898 "${currentTheme.name}" \u5417\uFF1F`)) return;
    tempCssThemes = tempCssThemes.filter((p) => p.id !== tempActiveCssThemeId);
    tempActiveCssThemeId = tempCssThemes[0]?.id || "default";
    cssThemeModified = false;
    renderCssThemeUI();
    const newTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    if (newTheme) {
      applyCustomCSS(newTheme.css || "");
    }
    if (window.toastr) toastr.success("\u4E3B\u9898\u5DF2\u5220\u9664");
  });
  renderCssThemeUI();
  $("#btn-css-export").on("click", () => {
    const currentTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    const cssContent = $("#t-custom-css-input").val() || "";
    const themeName = currentTheme?.name || "\u672A\u547D\u540D\u4E3B\u9898";
    const exportData = {
      type: "titania_custom_css",
      version: "1.1",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      theme_name: themeName,
      css: cssContent
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const safeFileName = themeName.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, "_");
    a.download = `titania_theme_${safeFileName}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if (window.toastr) toastr.success(`\u4E3B\u9898\u300C${themeName}\u300D\u5DF2\u5BFC\u51FA`);
  });
  $("#btn-css-import").on("click", () => {
    $("#t-css-file-input").click();
  });
  $("#t-css-file-input").on("change", function() {
    const file = this.files[0];
    if (!file) return;
    let fileBaseName = file.name.replace(/\.json$/i, "");
    fileBaseName = fileBaseName.replace(/^titania_theme_/i, "").replace(/_\d{8}$/, "");
    fileBaseName = fileBaseName.replace(/_/g, " ").trim();
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const importData = JSON.parse(e.target.result);
        if (importData.type !== "titania_custom_css") {
          throw new Error("\u65E0\u6548\u7684\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F");
        }
        const importedCSS = importData.css || "";
        const importedName = fileBaseName || importData.theme_name || "\u5BFC\u5165\u7684\u4E3B\u9898";
        const action = confirm(`\u5BFC\u5165\u4E3B\u9898\u300C${importedName}\u300D

\u70B9\u51FB\u300C\u786E\u5B9A\u300D\u521B\u5EFA\u4E3A\u65B0\u4E3B\u9898
\u70B9\u51FB\u300C\u53D6\u6D88\u300D\u8986\u76D6\u5F53\u524D\u4E3B\u9898`);
        if (action) {
          if (tempCssThemes.length >= MAX_CSS_THEMES) {
            if (window.toastr) toastr.warning(`\u5DF2\u8FBE\u5230\u6700\u5927\u4E3B\u9898\u6570\u91CF (${MAX_CSS_THEMES})\uFF0C\u5C06\u8986\u76D6\u5F53\u524D\u4E3B\u9898`);
            $("#t-custom-css-input").val(importedCSS);
            updateCSSCharCount();
            cssThemeModified = true;
            $("#css-theme-unsaved-hint").show();
          } else {
            const newId = "css_theme_" + Date.now();
            tempCssThemes.push({
              id: newId,
              name: importedName,
              css: importedCSS
            });
            tempActiveCssThemeId = newId;
            cssThemeModified = false;
            renderCssThemeUI();
            applyCustomCSS(importedCSS);
            if (window.toastr) toastr.success(`\u5DF2\u521B\u5EFA\u65B0\u4E3B\u9898\u300C${importedName}\u300D`);
          }
        } else {
          $("#t-custom-css-input").val(importedCSS);
          updateCSSCharCount();
          cssThemeModified = true;
          $("#css-theme-unsaved-hint").show();
          applyCustomCSS(importedCSS);
          if (window.toastr) toastr.success("\u5DF2\u5BFC\u5165\u5E76\u8986\u76D6\u5F53\u524D\u4E3B\u9898\u5185\u5BB9");
        }
      } catch (err) {
        console.error("Titania: CSS \u5BFC\u5165\u5931\u8D25", err);
        if (window.toastr) toastr.error("\u5BFC\u5165\u5931\u8D25\uFF1A" + err.message);
      }
    };
    reader.readAsText(file);
    $(this).val("");
  });
  $("#btn-css-reset").on("click", () => {
    if (!confirm("\u786E\u5B9A\u8981\u6E05\u7A7A\u5F53\u524D\u4E3B\u9898\u7684 CSS \u5185\u5BB9\u5417\uFF1F")) return;
    $("#t-custom-css-input").val("");
    updateCSSCharCount();
    cssThemeModified = true;
    $("#css-theme-unsaved-hint").show();
    if (window.toastr) toastr.info("\u5DF2\u6E05\u7A7A\uFF0C\u8BF7\u70B9\u51FB\u300C\u4FDD\u5B58\u6240\u6709\u914D\u7F6E\u300D\u751F\u6548");
  });
  const savedCats = cfg.auto_categories || [];
  const renderAutoCatList = () => {
    const $list = $("#auto-cat-list");
    $list.empty();
    const allCats = new Set(GlobalState.runtimeScripts.map((s) => s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")));
    const sortedCats = [...allCats].sort();
    if (sortedCats.length === 0) {
      $list.html('<div style="color:#666;">\u6682\u65E0\u5267\u672C</div>');
      return;
    }
    sortedCats.forEach((cat) => {
      const isChecked = savedCats.includes(cat) ? "checked" : "";
      $list.append(`<label style="display:flex; align-items:center; cursor:pointer; padding:2px 0;"><input type="checkbox" class="auto-cat-chk" value="${cat}" ${isChecked} style="margin-right:8px;"><span style="color:#ccc; font-size:0.9em;">${cat}</span></label>`);
    });
  };
  const updateAutoModeUI = () => {
    const mode = $("#cfg-auto-mode").val();
    if (mode === "category") {
      $("#auto-cat-container").show();
      renderAutoCatList();
    } else {
      $("#auto-cat-container").hide();
    }
  };
  $("#cfg-auto-mode").on("change", updateAutoModeUI);
  updateAutoModeUI();
  $("#cfg-auto").on("change", function() {
    $("#auto-settings-panel").toggle($(this).is(":checked"));
  });
  $("#cfg-chance").on("input", function() {
    $("#cfg-chance-val").text($(this).val() + "%");
  });
  $("#cfg-auto-continue").on("change", function() {
    $("#auto-continue-panel").toggle($(this).is(":checked"));
  });
  const DEFAULT_CONTENT_PROMPT = `You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks. Language: Chinese.`;
  const DEFAULT_VISUAL_PROMPT = `You are a Visual Director creating an immersive HTML scene.

[Process]
1. Analyze the mood/emotion of the scenario
2. Choose visual effects that represent the mood
3. Generate HTML with embedded <style>

[Technical Rules]
1. Output HTML with <style> block
2. Use CSS animations, gradients, shadows freely
3. No markdown code blocks
4. Language: Chinese`;
  const updatePromptContentCount = () => {
    const len = ($("#cfg-prompt-content").val() || "").length;
    $("#prompt-content-count").text(`${len} \u5B57\u7B26`);
  };
  const updatePromptVisualCount = () => {
    const len = ($("#cfg-prompt-visual").val() || "").length;
    $("#prompt-visual-count").text(`${len} \u5B57\u7B26`);
  };
  $("#cfg-prompt-content").on("input", updatePromptContentCount);
  $("#cfg-prompt-visual").on("input", updatePromptVisualCount);
  updatePromptContentCount();
  updatePromptVisualCount();
  $("#cfg-prompt-override").on("change", function() {
    $("#custom-prompts-panel").toggle($(this).is(":checked"));
  });
  $("#btn-prompt-content-reset").on("click", function() {
    $("#cfg-prompt-content").val(DEFAULT_CONTENT_PROMPT);
    updatePromptContentCount();
    if (window.toastr) toastr.info("\u5DF2\u6062\u590D\u5185\u5BB9\u6A21\u5F0F\u9ED8\u8BA4\u63D0\u793A\u8BCD");
  });
  $("#btn-prompt-visual-reset").on("click", function() {
    $("#cfg-prompt-visual").val(DEFAULT_VISUAL_PROMPT);
    updatePromptVisualCount();
    if (window.toastr) toastr.info("\u5DF2\u6062\u590D\u6C1B\u56F4\u6A21\u5F0F\u9ED8\u8BA4\u63D0\u793A\u8BCD");
  });
  const renderLogView = () => {
    const logs = TitaniaLogger.logs;
    if (!logs || logs.length === 0) {
      $("#t-log-viewer").html('<div style="text-align:center; margin-top:100px; color:#555;">\u6682\u65E0\u65E5\u5FD7</div>');
      return;
    }
    let html2 = "";
    logs.forEach((l) => {
      let colorClass = "t-log-entry-info";
      if (l.type === "ERROR") colorClass = "t-log-entry-error";
      if (l.type === "WARN") colorClass = "t-log-entry-warn";
      let detailStr = "";
      if (l.details) {
        if (l.details.diagnostics) {
          const d = l.details.diagnostics;
          const net = d.network || {};
          const summary = {
            phase: d.phase,
            status: net.status,
            latency: net.latency + "ms",
            input: d.input_stats
          };
          if (d.raw_response_snippet) {
            summary.raw_snippet = d.raw_response_snippet.substring(0, 100) + (d.raw_response_snippet.length > 100 ? "..." : "");
          }
          detailStr = `
[Diagnostics]: ${JSON.stringify(summary, null, 2)}`;
        } else {
          try {
            detailStr = `
${JSON.stringify(l.details, null, 2)}`;
          } catch (e) {
            detailStr = "\n[Complex Data]";
          }
        }
      }
      html2 += `<div class="${colorClass}">[${l.timestamp}] [${l.type}] ${l.message}${detailStr}</div>`;
    });
    $("#t-log-viewer").html(html2);
  };
  renderLogView();
  $("#btn-refresh-log").on("click", renderLogView);
  $("#btn-export-log").on("click", () => TitaniaLogger.downloadReport());
  $("#t-btn-fetch").on("click", async function() {
    const btn = $(this);
    const p = tempProfiles.find((x) => x.id === tempActiveId);
    if (p.type === "internal") {
      alert("ST\u6258\u7BA1\u6A21\u5F0F\u4E0B\uFF0C\u8BF7\u5728 SillyTavern \u4E3B\u8BBE\u7F6E\u4E2D\u5207\u6362\u6A21\u578B");
      return;
    }
    const urlInput = ($("#cfg-url").val() || "").trim().replace(/\/+$/, "").replace(/\/chat\/completions$/, "");
    const key = ($("#cfg-key").val() || "").trim();
    if (!urlInput) return alert("URL Empty");
    try {
      btn.prop("disabled", true).text("...");
      const res = await fetch(`${urlInput}/models`, { method: "GET", headers: { "Authorization": `Bearer ${key}` } });
      if (!res.ok) throw new Error("Status: " + res.status);
      const data2 = await res.json();
      const models = data2.data || data2.models || [];
      const $sel = $("#cfg-model");
      $sel.empty();
      models.forEach((m) => $sel.append(`<option value="${m.id || m}">${m.id || m}</option>`));
      if (window.toastr) toastr.success(`\u83B7\u53D6\u6210\u529F: ${models.length} \u4E2A`);
    } catch (e) {
      alert("Fail: " + e.message);
      TitaniaLogger.error("\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25", e);
    } finally {
      btn.prop("disabled", false).text("\u{1F504} \u83B7\u53D6\u5217\u8868");
    }
  });
  $("#btn-restore-presets").on("click", function() {
    if (confirm("\u6062\u590D\u6240\u6709\u9884\u8BBE\uFF1F")) {
      const d = getExtData();
      d.disabled_presets = [];
      saveExtData();
      loadScripts();
      $(this).prop("disabled", true).text("\u5DF2\u6062\u590D");
    }
  });
  $("#btn-backup-export").on("click", () => {
    const data2 = getExtData();
    const exportData = {
      type: "titania_theater_backup",
      version: "1.0",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      data: data2
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `titania_backup_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if (window.toastr) toastr.success("\u5907\u4EFD\u5DF2\u5BFC\u51FA\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u6587\u4EF6\uFF08\u542BAPI\u5BC6\u94A5\uFF09");
    TitaniaLogger.info("\u6570\u636E\u5907\u4EFD\u5DF2\u5BFC\u51FA");
  });
  $("#btn-backup-import").on("click", () => {
    $("#t-backup-file-input").click();
  });
  const downloadAutoBackup = (dataToBackup) => {
    const backupData = {
      type: "titania_theater_backup",
      version: "1.0",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      auto_backup: true,
      // 标记为自动备份
      data: dataToBackup
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `titania_auto_backup_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "_")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  $("#t-backup-file-input").on("change", function() {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async function(e) {
      try {
        const importData = JSON.parse(e.target.result);
        if (importData.type !== "titania_theater_backup") {
          throw new Error("\u65E0\u6548\u7684\u5907\u4EFD\u6587\u4EF6\u683C\u5F0F");
        }
        if (!importData.data || typeof importData.data !== "object") {
          throw new Error("\u5907\u4EFD\u6570\u636E\u65E0\u6548");
        }
        const currentDataSnapshot = JSON.parse(JSON.stringify(getExtData()));
        const confirmMsg = `\u786E\u5B9A\u8981\u5BFC\u5165\u6B64\u5907\u4EFD\u5417\uFF1F

\u5907\u4EFD\u65F6\u95F4: ${importData.timestamp || "\u672A\u77E5"}
\u7528\u6237\u811A\u672C: ${(importData.data.user_scripts || []).length} \u4E2A
\u6536\u85CF\u5185\u5BB9: ${(importData.data.favs || []).length} \u4E2A

\u2705 \u5BFC\u5165\u524D\u5C06\u81EA\u52A8\u4E0B\u8F7D\u5F53\u524D\u6570\u636E\u5907\u4EFD
\u26A0\uFE0F \u5BFC\u5165\u5C06\u8986\u76D6\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\uFF01`;
        if (!confirm(confirmMsg)) return;
        try {
          downloadAutoBackup(currentDataSnapshot);
          TitaniaLogger.info("\u5DF2\u81EA\u52A8\u5907\u4EFD\u5F53\u524D\u6570\u636E");
          if (window.toastr) toastr.info("\u5DF2\u81EA\u52A8\u5907\u4EFD\u5F53\u524D\u6570\u636E\uFF0C\u8BF7\u4FDD\u5B58\u4E0B\u8F7D\u7684\u6587\u4EF6");
        } catch (backupErr) {
          console.warn("Titania: \u81EA\u52A8\u5907\u4EFD\u5931\u8D25", backupErr);
          if (!confirm("\u26A0\uFE0F \u81EA\u52A8\u5907\u4EFD\u5931\u8D25\uFF01\u662F\u5426\u4ECD\u8981\u7EE7\u7EED\u5BFC\u5165\uFF1F\n\n\u5982\u679C\u7EE7\u7EED\uFF0C\u5F53\u524D\u6570\u636E\u53EF\u80FD\u65E0\u6CD5\u6062\u590D\u3002")) {
            return;
          }
        }
        const currentData = getExtData();
        Object.assign(currentData, importData.data);
        const saveSuccess = await saveExtDataImmediate();
        if (saveSuccess) {
          if (window.toastr) toastr.success("\u5907\u4EFD\u5DF2\u6062\u590D\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u4EE5\u5E94\u7528\u66F4\u6539");
          TitaniaLogger.info("\u6570\u636E\u5907\u4EFD\u5DF2\u6062\u590D", { timestamp: importData.timestamp });
          setTimeout(() => {
            if (confirm("\u5907\u4EFD\u5DF2\u6062\u590D\u6210\u529F\uFF01\u662F\u5426\u7ACB\u5373\u5237\u65B0\u9875\u9762\uFF1F")) {
              location.reload();
            }
          }, 500);
        } else {
          throw new Error("\u4FDD\u5B58\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        }
      } catch (err) {
        console.error("Titania: \u5907\u4EFD\u5BFC\u5165\u5931\u8D25", err);
        if (window.toastr) toastr.error("\u5BFC\u5165\u5931\u8D25\uFF1A" + err.message);
        TitaniaLogger.error("\u5907\u4EFD\u5BFC\u5165\u5931\u8D25", err);
      }
    };
    reader.readAsText(file);
    $(this).val("");
  });
  $("#btn-open-mgr").on("click", () => {
    $("#t-settings-view").remove();
    openScriptManager();
  });
  $("#t-set-close").on("click", () => {
    $("#t-settings-view").remove();
    const $mainView2 = $("#t-main-view");
    if ($mainView2.length > 0) {
      $mainView2.show();
    } else {
      $("#t-overlay").remove();
    }
  });
  $("#t-set-save").on("click", () => {
    saveCurrentProfileToMemory();
    saveCurrentStyleToMemory();
    const selectedCats = [];
    $(".auto-cat-chk:checked").each(function() {
      selectedCats.push($(this).val());
    });
    const finalCfg = {
      active_profile_id: tempActiveId,
      profiles: tempProfiles,
      history_limit: parseInt($("#cfg-history").val()) || 10,
      stream: $("#cfg-stream").is(":checked"),
      auto_generate: $("#cfg-auto").is(":checked"),
      auto_chance: parseInt($("#cfg-chance").val()),
      auto_mode: $("#cfg-auto-mode").val(),
      auto_categories: selectedCats
    };
    const d = getExtData();
    d.config = finalCfg;
    d.appearance = {
      type: tempApp.type,
      content: tempApp.content,
      animation: tempApp.animation || "ripple",
      size: tempApp.size || 56,
      border_color: tempApp.border_color || "#90cdf4",
      bg_color: tempApp.bg_color || "#2b2b2b",
      border_opacity: tempApp.border_opacity !== void 0 ? tempApp.border_opacity : 100,
      bg_opacity: tempApp.bg_opacity !== void 0 ? tempApp.bg_opacity : 100,
      show_timer: $("#p-show-timer").is(":checked")
    };
    d.director = { instruction: $("#set-dir-instruction").val().trim() };
    saveCurrentCssThemeToMemory();
    d.css_themes = {
      profiles: tempCssThemes,
      active_profile_id: tempActiveCssThemeId
    };
    const activeTheme = tempCssThemes.find((p) => p.id === tempActiveCssThemeId);
    d.custom_css = activeTheme?.css || "";
    const fontSource = $("input[name='t-font-source']:checked").val() || "default";
    d.font_settings = {
      source: fontSource,
      import_url: fontSource === "online" ? $("#t-font-import-url").val().trim() : "",
      font_name: fontSource === "online" ? $("#t-font-name-online").val().trim() : fontSource === "upload" ? $("#t-font-name-upload").val().trim() : "",
      font_data: fontSource === "upload" ? tempFontData : "",
      force_override: fontSource !== "default" && $("#t-font-force-override").is(":checked")
    };
    d.style_profiles = tempStyleProfiles;
    d.active_style_id = tempActiveStyleId;
    d.auto_continue = {
      enabled: $("#cfg-auto-continue").is(":checked"),
      max_retries: parseInt($("#cfg-continue-retries").val()) || 2,
      detection_mode: $("#cfg-continue-mode").val() || "html",
      show_indicator: $("#cfg-continue-indicator").is(":checked")
    };
    d.history_extraction = {
      whitelist: $("#cfg-history-whitelist").val().trim()
    };
    d.custom_prompts = {
      override_enabled: $("#cfg-prompt-override").is(":checked"),
      content_mode: $("#cfg-prompt-content").val().trim(),
      visual_mode: $("#cfg-prompt-visual").val().trim()
    };
    saveExtData();
    $("#t-settings-view").remove();
    const $mainViewOnSave = $("#t-main-view");
    if ($mainViewOnSave.length > 0) {
      $mainViewOnSave.show();
    } else {
      $("#t-overlay").remove();
    }
    createFloatingButton();
    applyCustomCSS(d.custom_css);
    applyFontSettings(d.font_settings);
    if (window.toastr) toastr.success("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
  });
  renderPreview();
  renderProfileUI();
}
var init_settingsWindow = __esm({
  "src/ui/settingsWindow.js"() {
    init_storage();
    init_state();
    init_logger();
    init_helpers();
    init_floatingBtn();
    init_scriptData();
    init_scriptManager();
    init_dom();
  }
});

// src/ui/scriptManager.js
function openScriptManager() {
  let currentFilter = {
    category: "\u5168\u90E8",
    search: "",
    hidePresets: false
  };
  let isBatchMode = false;
  const getCategories = () => {
    const cats = new Set(GlobalState.runtimeScripts.map((s) => s.category).filter((c) => c));
    const sortedCats = [...cats].sort((a, b) => a.localeCompare(b, "zh-CN"));
    return ["\u5168\u90E8", ...sortedCats];
  };
  const html = `
    <div class="t-box" id="t-mgr-view">
        <div class="t-header"><span class="t-title-main">\u{1F4C2} \u5267\u672C\u8D44\u6E90\u7BA1\u7406</span><span class="t-close" id="t-mgr-close">&times;</span></div>
        <div class="t-mgr-body">
            <div class="t-mgr-sidebar" id="t-mgr-sidebar-desktop">
                <div class="t-mgr-sb-group">
                    <div class="t-mgr-sb-title">
                        <span>\u5206\u7C7B</span>
                    </div>
                    <div id="t-mgr-cat-list"></div>
                </div>
            </div>
            <!-- \u79FB\u52A8\u7AEF\u5206\u7C7B\u4E0B\u62C9\u9009\u62E9\u5668 -->
            <div class="t-mgr-mobile-cat" id="t-mgr-sidebar-mobile">
                <select id="t-mgr-cat-select" class="t-mgr-cat-dropdown"></select>
                <button id="t-mgr-cat-edit-mobile" class="t-mgr-cat-edit-btn" title="\u91CD\u547D\u540D\u5206\u7C7B" style="display:none;">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
            <div class="t-mgr-main" id="t-mgr-main-area">
                <div class="t-mgr-toolbar">
                    <input type="text" id="t-mgr-search-inp" class="t-mgr-search" placeholder="\u{1F50D} \u641C\u7D22...">
                    <button id="t-mgr-import-btn" class="t-tool-btn" title="\u5BFC\u5165"><i class="fa-solid fa-file-import"></i></button>
                    <button id="t-mgr-export-btn" class="t-tool-btn" title="\u5BFC\u51FA"><i class="fa-solid fa-file-export"></i></button>
                    <button id="t-mgr-batch-toggle" class="t-tool-btn" style="border:1px solid #444;" title="\u6279\u91CF\u7BA1\u7406">
                        <i class="fa-solid fa-list-check"></i> \u7BA1\u7406
                    </button>
                </div>
                <div class="t-mgr-header-row t-batch-elem" style="padding: 8px 15px; background: #2a2a2a; border-bottom: 1px solid #333; color: #ccc; font-size: 0.9em; flex-shrink:0;">
                    <label style="display:flex; align-items:center; cursor:pointer;">
                        <input type="checkbox" id="t-mgr-select-all" style="margin-right:10px;"> \u5168\u9009\u5F53\u524D\u5217\u8868
                    </label>
                </div>
                <div class="t-mgr-list" id="t-mgr-list-container"></div>
                <div class="t-mgr-footer-bar t-batch-elem">
                    <span id="t-batch-count-label">\u5DF2\u9009: 0</span>
                    <button id="t-mgr-move-to" class="t-tool-btn" style="color:#bfa15f; border-color:#bfa15f;">\u{1F4C1} \u79FB\u52A8\u5230</button>
                    <button id="t-mgr-export-selected" class="t-tool-btn" style="color:#90cdf4; border-color:#90cdf4;">\u{1F4E4} \u5BFC\u51FA</button>
                    <button id="t-mgr-del-confirm" class="t-tool-btn" style="color:#ff6b6b; border-color:#ff6b6b;">\u{1F5D1}\uFE0F \u5220\u9664</button>
                </div>
            </div>
        </div>
        
        <div id="t-imp-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">\u{1F4E5} \u5BFC\u5165\u5267\u672C</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">\u5B58\u5165\u5206\u7C7B:</span>
                    <input id="t-imp-cat-m" list="t-cat-dl-m" class="t-input" placeholder="\u8F93\u5165\u6216\u9009\u62E9\u5206\u7C7B (\u53EF\u9009)" style="width:100%;">
                    <datalist id="t-cat-dl-m"></datalist>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">\u9009\u62E9\u6587\u4EF6 (.txt):</span>
                    <div style="display:flex; gap:10px; align-items:center; background:#111; padding:5px; border-radius:4px; border:1px solid #333;">
                        <input type="file" id="t-file-input-m" accept=".txt" style="display:none;">
                        <button id="t-btn-choose-file" class="t-btn" style="font-size:0.9em; padding:4px 10px;">\u{1F4C2} \u6D4F\u89C8\u6587\u4EF6...</button>
                        <span id="t-file-name-label" style="font-size:0.85em; color:#888; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width: 150px;">\u672A\u9009\u62E9\u6587\u4EF6</span>
                    </div>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-imp-cancel" class="t-btn" style="flex:1;">\u53D6\u6D88</button>
                    <button id="t-imp-ok" class="t-btn primary" style="flex:1;">\u5F00\u59CB\u5BFC\u5165</button>
                </div>
            </div>
        </div>
        
        <div id="t-export-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">\u{1F4E4} \u5BFC\u51FA\u5267\u672C</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">\u5BFC\u51FA\u8303\u56F4:</span>
                    <div style="background:#111; padding:10px; border-radius:4px; border:1px solid #333; display:flex; flex-direction:column; gap:8px;">
                        <label><input type="radio" name="exp-scope" value="all" checked> \u5BFC\u51FA\u5168\u90E8\u7528\u6237\u5267\u672C</label>
                        <label><input type="radio" name="exp-scope" value="category"> \u5BFC\u51FA\u6307\u5B9A\u5206\u7C7B</label>
                        <label><input type="radio" name="exp-scope" value="current"> \u5BFC\u51FA\u5F53\u524D\u5217\u8868 (<span id="exp-current-count">0</span> \u4E2A)</label>
                    </div>
                </div>
                <div class="t-imp-row" id="exp-cat-row" style="display:none;">
                    <span class="t-imp-label">\u9009\u62E9\u5206\u7C7B:</span>
                    <select id="t-exp-cat" class="t-input" style="width:100%;"></select>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">\u5BFC\u51FA\u683C\u5F0F:</span>
                    <div style="background:#111; padding:5px; border-radius:4px; border:1px solid #333; display:flex; gap:15px;">
                        <label><input type="radio" name="exp-format" value="txt" checked> TXT (\u7EAF\u6587\u672C)</label>
                        <label><input type="radio" name="exp-format" value="json"> JSON (\u7ED3\u6784\u5316)</label>
                    </div>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-exp-cancel" class="t-btn" style="flex:1;">\u53D6\u6D88</button>
                    <button id="t-exp-ok" class="t-btn primary" style="flex:1;">\u5F00\u59CB\u5BFC\u51FA</button>
                </div>
            </div>
        </div>
        
        <div id="t-move-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">\u{1F4C1} \u79FB\u52A8\u5230\u5206\u7C7B</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">\u76EE\u6807\u5206\u7C7B:</span>
                    <input id="t-move-cat" list="t-move-cat-list" class="t-input" placeholder="\u8F93\u5165\u6216\u9009\u62E9\u5206\u7C7B" style="width:100%;">
                    <datalist id="t-move-cat-list"></datalist>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-move-cancel" class="t-btn" style="flex:1;">\u53D6\u6D88</button>
                    <button id="t-move-ok" class="t-btn primary" style="flex:1;">\u786E\u8BA4\u79FB\u52A8</button>
                </div>
            </div>
        </div>
        
        <div id="t-cat-rename-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">\u270F\uFE0F \u91CD\u547D\u540D\u5206\u7C7B</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">\u5F53\u524D\u5206\u7C7B: <span id="t-rename-old" style="color:#bfa15f;"></span></span>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">\u65B0\u540D\u79F0:</span>
                    <input id="t-rename-new" class="t-input" placeholder="\u8F93\u5165\u65B0\u7684\u5206\u7C7B\u540D\u79F0" style="width:100%;">
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-rename-cancel" class="t-btn" style="flex:1;">\u53D6\u6D88</button>
                    <button id="t-rename-ok" class="t-btn primary" style="flex:1;">\u786E\u8BA4\u91CD\u547D\u540D</button>
                </div>
            </div>
        </div>
    </div>`;
  $("#t-overlay").append(html);
  const renderSidebarCats = () => {
    const cats = getCategories();
    $("#t-mgr-cat-list").empty();
    $("#t-cat-dl-m").empty().append(cats.map((c) => `<option value="${c}">`));
    cats.forEach((c) => {
      const isAll = c === "\u5168\u90E8";
      const $item = $(`
                <div class="t-mgr-sb-item" data-filter="category" data-val="${c}">
                    <span class="t-cat-name">${c}</span>
                    ${!isAll ? '<i class="fa-solid fa-pen t-cat-edit" style="font-size:0.7em; opacity:0; margin-left:auto; padding:3px;" title="\u91CD\u547D\u540D"></i>' : ""}
                </div>
            `);
      if (currentFilter.category === c) $item.addClass("active");
      $item.on("click", function(e) {
        if ($(e.target).hasClass("t-cat-edit")) return;
        $(".t-mgr-sb-item[data-filter='category']").removeClass("active");
        $item.addClass("active");
        currentFilter.category = c;
        $("#t-mgr-cat-select").val(c);
        renderList();
      });
      $item.find(".t-cat-edit").on("click", function(e) {
        e.stopPropagation();
        openRenameCategoryModal(c);
      });
      $item.on("mouseenter", function() {
        $(this).find(".t-cat-edit").css("opacity", "1");
      }).on("mouseleave", function() {
        $(this).find(".t-cat-edit").css("opacity", "0");
      });
      $("#t-mgr-cat-list").append($item);
    });
    const $select = $("#t-mgr-cat-select");
    $select.empty();
    cats.forEach((c) => {
      const selected = currentFilter.category === c ? "selected" : "";
      $select.append(`<option value="${c}" ${selected}>${c}</option>`);
    });
    if (currentFilter.category === "\u5168\u90E8" || currentFilter.category === "all") {
      $("#t-mgr-cat-edit-mobile").hide();
    } else {
      $("#t-mgr-cat-edit-mobile").show();
    }
  };
  $("#t-mgr-cat-select").on("change", function() {
    const selectedCat = $(this).val();
    currentFilter.category = selectedCat;
    $(".t-mgr-sb-item[data-filter='category']").removeClass("active");
    $(`.t-mgr-sb-item[data-val="${selectedCat}"]`).addClass("active");
    if (selectedCat === "\u5168\u90E8") {
      $("#t-mgr-cat-edit-mobile").hide();
    } else {
      $("#t-mgr-cat-edit-mobile").show();
    }
    renderList();
  });
  $("#t-mgr-cat-edit-mobile").on("click", function() {
    const selectedCat = $("#t-mgr-cat-select").val();
    if (selectedCat && selectedCat !== "\u5168\u90E8") {
      openRenameCategoryModal(selectedCat);
    }
  });
  const openRenameCategoryModal = (oldName) => {
    $("#t-rename-old").text(oldName);
    $("#t-rename-new").val(oldName);
    $("#t-cat-rename-modal").css("display", "flex");
    $("#t-rename-new").focus().select();
  };
  $("#t-rename-cancel").on("click", () => $("#t-cat-rename-modal").hide());
  $("#t-rename-ok").on("click", () => {
    const oldName = $("#t-rename-old").text();
    const newName = $("#t-rename-new").val().trim();
    if (!newName) {
      alert("\u5206\u7C7B\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    if (newName === oldName) {
      $("#t-cat-rename-modal").hide();
      return;
    }
    const existingCats = [...new Set(GlobalState.runtimeScripts.map((s) => s.category).filter((c) => c))];
    if (existingCats.includes(newName)) {
      if (!confirm(`\u5206\u7C7B "${newName}" \u5DF2\u5B58\u5728\uFF0C\u662F\u5426\u5408\u5E76\uFF1F`)) {
        return;
      }
    }
    const data = getExtData();
    let updatedCount = 0;
    (data.user_scripts || []).forEach((s) => {
      if (s.category === oldName) {
        s.category = newName;
        updatedCount++;
      }
    });
    if (data.category_order) {
      const idx = data.category_order.indexOf(oldName);
      if (idx !== -1) {
        data.category_order[idx] = newName;
      }
    }
    saveExtData();
    loadScripts();
    refreshAll();
    $("#t-cat-rename-modal").hide();
    if (window.toastr) toastr.success(`\u5DF2\u5C06 ${updatedCount} \u4E2A\u5267\u672C\u79FB\u81F3\u5206\u7C7B "${newName}"`);
  });
  const updateBatchCount = () => {
    const n = $(".t-mgr-check:checked").length;
    $("#t-batch-count-label").text(`\u5DF2\u9009: ${n}`);
    $("#t-mgr-del-confirm").prop("disabled", n === 0).css("opacity", n === 0 ? 0.5 : 1);
  };
  const renderList = () => {
    const $list = $("#t-mgr-list-container");
    $list.empty();
    $("#t-mgr-select-all").prop("checked", false);
    updateBatchCount();
    let filtered = GlobalState.runtimeScripts.filter((s) => {
      if (currentFilter.category && currentFilter.category !== "\u5168\u90E8") {
        const sCat = s.category || "\u672A\u5206\u7C7B";
        if (sCat !== currentFilter.category) return false;
      }
      if (currentFilter.search) {
        const term = currentFilter.search.toLowerCase();
        if (!s.name.toLowerCase().includes(term)) return false;
      }
      return true;
    });
    if (filtered.length === 0) {
      $list.append(`<div style="text-align:center; color:#555; margin-top:50px;">\u65E0\u6570\u636E</div>`);
      return;
    }
    filtered.forEach((s) => {
      const isUser = s._type === "user";
      const catLabel = s.category ? `<span class="t-mgr-tag">${s.category}</span>` : "";
      const presetLabel = !isUser ? `<span class="t-mgr-tag" style="background:#444;">\u9884\u8BBE</span>` : "";
      const $row = $(`
                <div class="t-mgr-item">
                    <div class="t-mgr-item-check-col">
                        <input type="checkbox" class="t-mgr-check" data-id="${s.id}" data-type="${s._type}">
                    </div>
                    <div class="t-mgr-item-meta" style="cursor:pointer;">
                        <div class="t-mgr-item-title">${s.name} ${presetLabel} ${catLabel}</div>
                        <div class="t-mgr-item-desc">${s.desc || "..."}</div>
                    </div>
                    <div style="padding-left:10px;">
                        <i class="fa-solid fa-pen" style="color:#666; cursor:pointer;"></i>
                    </div>
                </div>
            `);
      $row.find(".t-mgr-item-meta, .fa-pen").on("click", () => {
        if (!isBatchMode) {
          $("#t-mgr-view").hide();
          openEditor(s.id, "manager");
        } else {
          const cb = $row.find(".t-mgr-check");
          cb.prop("checked", !cb.prop("checked")).trigger("change");
        }
      });
      $row.find(".t-mgr-check").on("change", updateBatchCount);
      $list.append($row);
    });
  };
  const refreshAll = () => {
    renderSidebarCats();
    renderList();
  };
  $("#t-mgr-batch-toggle").on("click", function() {
    isBatchMode = !isBatchMode;
    const main = $("#t-mgr-main-area");
    const btn = $(this);
    if (isBatchMode) {
      main.addClass("t-batch-active");
      btn.html('<i class="fa-solid fa-check"></i> \u5B8C\u6210').css({ background: "#bfa15f", color: "#000", borderColor: "#bfa15f" });
    } else {
      main.removeClass("t-batch-active");
      btn.html('<i class="fa-solid fa-list-check"></i> \u7BA1\u7406').css({ background: "", color: "", borderColor: "#444" });
      $(".t-mgr-check").prop("checked", false);
    }
  });
  const exportScriptsToTxt = (scripts) => {
    let content = "";
    scripts.forEach((s, idx) => {
      if (idx > 0) content += "\n\n";
      content += `### ${s.name}
`;
      content += `Title: ${s.name}
`;
      if (s.category) content += `Category: ${s.category}
`;
      if (s.desc) content += `Desc: ${s.desc}
`;
      content += `
${s.prompt}`;
    });
    return content;
  };
  const exportScriptsToJson = (scripts) => {
    const exportData = scripts.map((s) => ({
      name: s.name,
      desc: s.desc || "",
      prompt: s.prompt,
      category: s.category || ""
    }));
    return JSON.stringify(exportData, null, 2);
  };
  const downloadFile = (content, filename, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const getExportScripts = (scope) => {
    const userScripts = GlobalState.runtimeScripts.filter((s) => s._type === "user");
    if (scope === "all") {
      return userScripts;
    } else if (scope === "category") {
      const cat = $("#t-exp-cat").val();
      return userScripts.filter((s) => (s.category || "\u672A\u5206\u7C7B") === cat);
    } else if (scope === "current") {
      return GlobalState.runtimeScripts.filter((s) => {
        if (s._type !== "user") return false;
        if (currentFilter.category && currentFilter.category !== "\u5168\u90E8") {
          const sCat = s.category || "\u672A\u5206\u7C7B";
          if (sCat !== currentFilter.category) return false;
        }
        if (currentFilter.search) {
          const term = currentFilter.search.toLowerCase();
          if (!s.name.toLowerCase().includes(term)) return false;
        }
        return true;
      });
    }
    return [];
  };
  $("#t-mgr-export-btn").on("click", () => {
    const currentListCount = GlobalState.runtimeScripts.filter((s) => {
      if (s._type !== "user") return false;
      if (currentFilter.category && currentFilter.category !== "\u5168\u90E8") {
        const sCat = s.category || "\u672A\u5206\u7C7B";
        if (sCat !== currentFilter.category) return false;
      }
      if (currentFilter.search) {
        const term = currentFilter.search.toLowerCase();
        if (!s.name.toLowerCase().includes(term)) return false;
      }
      return true;
    }).length;
    $("#exp-current-count").text(currentListCount);
    const cats = getCategories().filter((c) => c !== "\u5168\u90E8");
    cats.unshift("\u672A\u5206\u7C7B");
    $("#t-exp-cat").empty();
    [...new Set(cats)].forEach((c) => {
      $("#t-exp-cat").append(`<option value="${c}">${c}</option>`);
    });
    $("#t-export-modal").css("display", "flex");
  });
  $("input[name='exp-scope']").on("change", function() {
    if ($(this).val() === "category") {
      $("#exp-cat-row").show();
    } else {
      $("#exp-cat-row").hide();
    }
  });
  $("#t-exp-cancel").on("click", () => $("#t-export-modal").hide());
  $("#t-exp-ok").on("click", () => {
    const scope = $("input[name='exp-scope']:checked").val();
    const format = $("input[name='exp-format']:checked").val();
    const scripts = getExportScripts(scope);
    if (scripts.length === 0) {
      alert("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5267\u672C");
      return;
    }
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
    let content, filename, mimeType;
    if (format === "txt") {
      content = exportScriptsToTxt(scripts);
      filename = `Titania_Scripts_${timestamp}.txt`;
      mimeType = "text/plain;charset=utf-8";
    } else {
      content = exportScriptsToJson(scripts);
      filename = `Titania_Scripts_${timestamp}.json`;
      mimeType = "application/json;charset=utf-8";
    }
    downloadFile(content, filename, mimeType);
    $("#t-export-modal").hide();
    if (window.toastr) toastr.success(`\u5DF2\u5BFC\u51FA ${scripts.length} \u4E2A\u5267\u672C`);
  });
  $("#t-mgr-export-selected").on("click", () => {
    const selectedIds = [];
    $(".t-mgr-check:checked").each(function() {
      const type = $(this).data("type");
      if (type === "user") {
        selectedIds.push($(this).data("id"));
      }
    });
    if (selectedIds.length === 0) {
      alert("\u8BF7\u5148\u9009\u62E9\u8981\u5BFC\u51FA\u7684\u7528\u6237\u5267\u672C\uFF08\u9884\u8BBE\u5267\u672C\u4E0D\u652F\u6301\u5BFC\u51FA\uFF09");
      return;
    }
    const scripts = GlobalState.runtimeScripts.filter((s) => selectedIds.includes(s.id));
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
    const content = exportScriptsToTxt(scripts);
    downloadFile(content, `Titania_Selected_${timestamp}.txt`, "text/plain;charset=utf-8");
    if (window.toastr) toastr.success(`\u5DF2\u5BFC\u51FA ${scripts.length} \u4E2A\u5267\u672C`);
  });
  $("#t-mgr-import-btn").on("click", () => {
    $("#t-imp-modal").css("display", "flex");
    $("#t-file-input-m").val("");
    $("#t-file-name-label").text("\u672A\u9009\u62E9\u6587\u4EF6");
  });
  $("#t-btn-choose-file").on("click", () => $("#t-file-input-m").click());
  $("#t-file-input-m").on("change", function() {
    $("#t-file-name-label").text(this.files[0] ? this.files[0].name : "\u672A\u9009\u62E9\u6587\u4EF6");
  });
  $("#t-imp-cancel").on("click", () => $("#t-imp-modal").hide());
  $("#t-imp-ok").on("click", () => {
    const file = $("#t-file-input-m")[0].files[0];
    if (!file) return alert("\u8BF7\u9009\u62E9\u6587\u4EF6");
    const defaultCat = $("#t-imp-cat-m").val().trim();
    const reader = new FileReader();
    reader.onload = function(evt) {
      const content = evt.target.result;
      const fileName = file.name.replace(/\.[^/.]+$/, "");
      const blocks = content.split(/(?:^|\r?\n)\s*###/);
      let importCount = 0;
      blocks.forEach((block, index) => {
        if (!block || !block.trim()) return;
        let lines = block.split(/\r?\n/);
        let potentialInlineTitle = lines[0].trim();
        let bodyLines = lines;
        let scriptTitle = "";
        let scriptCat = defaultCat;
        if (potentialInlineTitle.length > 0 && potentialInlineTitle.length < 50) {
          scriptTitle = potentialInlineTitle;
          bodyLines = lines.slice(1);
        }
        let rawBody = bodyLines.join("\n").trim();
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
        let scriptDesc = "";
        const descMatch = rawBody.match(/^(?:Desc|简介|描述)[:：]\s*(.+)$/im);
        if (descMatch) {
          scriptDesc = descMatch[1].trim();
          rawBody = rawBody.replace(descMatch[0], "").trim();
        }
        if (!scriptTitle) {
          const cleanStart = rawBody.replace(/\s+/g, " ").substring(0, 20);
          if (cleanStart) {
            scriptTitle = cleanStart + "...";
          } else {
            scriptTitle = `${fileName}_${String(index + 1).padStart(2, "0")}`;
          }
        }
        if (!rawBody) return;
        saveUserScript({
          id: "imp_" + Date.now() + "_" + Math.floor(Math.random() * 1e4),
          name: scriptTitle,
          desc: scriptDesc || "\u5BFC\u5165\u6570\u636E",
          prompt: rawBody,
          category: scriptCat
        });
        importCount++;
      });
      alert(`\u6210\u529F\u5BFC\u5165 ${importCount} \u4E2A\u5267\u672C`);
      $("#t-imp-modal").hide();
      refreshAll();
    };
    reader.readAsText(file);
  });
  $("#t-mgr-del-confirm").on("click", function() {
    const toDeleteUser = [];
    const toHidePreset = [];
    $(".t-mgr-check:checked").each(function() {
      const id = $(this).data("id");
      const type = $(this).data("type");
      if (type === "user") toDeleteUser.push(id);
      else if (type === "preset") toHidePreset.push(id);
    });
    const total = toDeleteUser.length + toHidePreset.length;
    if (total === 0) return;
    if (confirm(`\u26A0\uFE0F \u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684 ${total} \u4E2A\u5267\u672C\uFF1F
(\u6CE8\uFF1A\u5B98\u65B9\u9884\u8BBE\u5C06\u53D8\u4E3A\u9690\u85CF\u72B6\u6001\uFF0C\u53EF\u53BB\u8BBE\u7F6E\u91CC\u6062\u590D)`)) {
      if (toDeleteUser.length > 0) toDeleteUser.forEach((id) => deleteUserScript(id));
      if (toHidePreset.length > 0) {
        const data = getExtData();
        if (!data.disabled_presets) data.disabled_presets = [];
        data.disabled_presets = [.../* @__PURE__ */ new Set([...data.disabled_presets, ...toHidePreset])];
        saveExtData();
        loadScripts();
      }
      refreshAll();
      $("#t-mgr-select-all").prop("checked", false);
    }
  });
  $("#t-mgr-move-to").on("click", () => {
    const selectedIds = [];
    $(".t-mgr-check:checked").each(function() {
      const type = $(this).data("type");
      if (type === "user") {
        selectedIds.push($(this).data("id"));
      }
    });
    if (selectedIds.length === 0) {
      alert("\u8BF7\u5148\u9009\u62E9\u8981\u79FB\u52A8\u7684\u7528\u6237\u5267\u672C\uFF08\u9884\u8BBE\u5267\u672C\u4E0D\u652F\u6301\u79FB\u52A8\uFF09");
      return;
    }
    const cats = getCategories().filter((c) => c !== "\u5168\u90E8");
    $("#t-move-cat-list").empty();
    cats.forEach((c) => {
      $("#t-move-cat-list").append(`<option value="${c}">`);
    });
    $("#t-move-cat").val("");
    $("#t-move-modal").css("display", "flex");
  });
  $("#t-move-cancel").on("click", () => $("#t-move-modal").hide());
  $("#t-move-ok").on("click", () => {
    const targetCat = $("#t-move-cat").val().trim();
    if (!targetCat) {
      alert("\u8BF7\u8F93\u5165\u6216\u9009\u62E9\u76EE\u6807\u5206\u7C7B");
      return;
    }
    const selectedIds = [];
    $(".t-mgr-check:checked").each(function() {
      const type = $(this).data("type");
      if (type === "user") {
        selectedIds.push($(this).data("id"));
      }
    });
    const data = getExtData();
    const scriptsToMove = (data.user_scripts || []).filter((s) => selectedIds.includes(s.id));
    scriptsToMove.forEach((s) => {
      saveUserScript({ ...s, category: targetCat });
    });
    refreshAll();
    $("#t-move-modal").hide();
    $(".t-mgr-check").prop("checked", false);
    updateBatchCount();
    if (window.toastr) toastr.success(`\u5DF2\u5C06 ${scriptsToMove.length} \u4E2A\u5267\u672C\u79FB\u81F3 "${targetCat}"`);
  });
  $("#t-mgr-close").on("click", () => {
    $("#t-mgr-view").remove();
    $("#t-main-view").show();
    refreshScriptList();
  });
  $("#t-mgr-search-inp").on("input", function() {
    currentFilter.search = $(this).val();
    renderList();
  });
  $("#t-mgr-select-all").on("change", function() {
    $(".t-mgr-check:not(:disabled)").prop("checked", $(this).is(":checked"));
    updateBatchCount();
  });
  refreshAll();
}
function openEditor(id, source = "main") {
  const isEdit = !!id;
  let data = { id: Date.now().toString(), name: "\u65B0\u5267\u672C", desc: "", prompt: "", category: "" };
  if (isEdit) data = GlobalState.runtimeScripts.find((s) => s.id === id);
  const isPreset = data._type === "preset";
  if (source === "manager") {
    $("#t-mgr-view").hide();
  } else {
    $("#t-main-view").hide();
  }
  const existingCats = [...new Set(GlobalState.runtimeScripts.map((s) => s.category).filter((c) => c))].sort();
  const dataListOpts = existingCats.map((c) => `<option value="${c}">`).join("");
  const html = `
    <div class="t-box" id="t-editor-view">
        <div class="t-header"><span class="t-title-main">${isPreset ? "\u67E5\u770B" : isEdit ? "\u7F16\u8F91" : "\u65B0\u5EFA"}</span></div>
        <div class="t-body">
            <div style="display:flex; gap:10px; margin-bottom:5px;">
                <div style="flex-grow:1;">
                    <label>\u6807\u9898:</label>
                    <input id="ed-name" class="t-input" value="${data.name}" ${isPreset ? "disabled" : ""}>
                </div>
                <div style="width: 150px;">
                    <label>\u5206\u7C7B:</label>
                    <input id="ed-cat" list="ed-cat-list" class="t-input" value="${data.category || ""}" placeholder="\u9ED8\u8BA4" ${isPreset ? "disabled" : ""}>
                    <datalist id="ed-cat-list">${dataListOpts}</datalist>
                </div>
            </div>

            <label>\u7B80\u4ECB:</label><input id="ed-desc" class="t-input" value="${data.desc}" ${isPreset ? "disabled" : ""}>
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                <label>Prompt:</label>
                ${!isPreset ? `<div class="t-tool-btn" id="ed-btn-expand" style="cursor:pointer;"><i class="fa-solid fa-maximize"></i> \u5927\u5C4F</div>` : ""}
            </div>
            <textarea id="ed-prompt" class="t-input" rows="6" ${isPreset ? "disabled" : ""}>${data.prompt}</textarea>
            
            <div class="t-btn-row">
                ${!isPreset ? '<button id="ed-save" class="t-btn primary" style="flex:1;">\u4FDD\u5B58</button>' : ""}
                <button id="ed-cancel" class="t-btn" style="flex:1;">\u8FD4\u56DE</button>
            </div>
        </div>
    </div>`;
  $("#t-overlay").append(html);
  $("#ed-cancel").on("click", () => {
    $("#t-editor-view").remove();
    if (source === "manager") {
      $("#t-mgr-view").remove();
      openScriptManager();
    } else {
      $("#t-main-view").show();
    }
  });
  $("#ed-btn-expand").on("click", () => {
    const originalContent = $("#ed-prompt").val();
    $("#t-editor-view").hide();
    const largeEditHtml = `
        <div id="t-large-edit-overlay" style="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.7); z-index:20000; display:flex; align-items:center; justify-content:center; padding:10px; box-sizing:border-box;">
            <div class="t-box" id="t-large-edit-view" style="width:100%; max-width:800px; height:90vh; max-height:90vh; margin:auto; display:flex; flex-direction:column;">
                <div class="t-header" style="flex-shrink:0;">
                    <span class="t-title-main">\u5927\u5C4F\u7F16\u8F91\u6A21\u5F0F</span>
                    <span class="t-close" id="ed-large-close">&times;</span>
                </div>
                <div class="t-body" style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
                    <textarea id="ed-large-text" class="t-input" style="flex:1; resize:none; font-family:monospace; line-height:1.5; font-size:14px; min-height:0;">${originalContent}</textarea>
                    <div class="t-btn-row" style="flex-shrink:0; margin-top:10px;">
                        <button id="ed-large-ok" class="t-btn primary" style="flex:1;">\u786E\u8BA4\u4FDD\u5B58</button>
                        <button id="ed-large-cancel" class="t-btn" style="flex:1;">\u53D6\u6D88</button>
                    </div>
                </div>
            </div>
        </div>`;
    $("body").append(largeEditHtml);
    const checkUnsavedChanges = () => {
      const currentContent = $("#ed-large-text").val();
      return currentContent !== originalContent;
    };
    const closeLargeEdit = (saveChanges = false) => {
      if (saveChanges) {
        $("#ed-prompt").val($("#ed-large-text").val());
      }
      $("#t-large-edit-overlay").remove();
      $("#t-editor-view").show();
    };
    const confirmClose = () => {
      if (checkUnsavedChanges()) {
        if (confirm("\u60A8\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u8981\u653E\u5F03\u5417\uFF1F")) {
          closeLargeEdit(false);
        }
      } else {
        closeLargeEdit(false);
      }
    };
    $("#t-large-edit-overlay").on("click", function(e) {
      if (e.target === this) {
        confirmClose();
      }
    });
    $("#ed-large-close").on("click", confirmClose);
    $("#ed-large-cancel").on("click", confirmClose);
    $("#ed-large-ok").on("click", () => closeLargeEdit(true));
    $(document).on("keydown.largeedit", function(e) {
      if (e.key === "Escape") {
        confirmClose();
        e.preventDefault();
      }
    });
    $("#t-large-edit-overlay").on("remove", function() {
      $(document).off("keydown.largeedit");
    });
  });
  if (!isPreset) {
    $("#ed-save").on("click", () => {
      saveUserScript({
        id: isEdit ? data.id : "user_" + Date.now(),
        name: $("#ed-name").val(),
        desc: $("#ed-desc").val(),
        prompt: $("#ed-prompt").val(),
        category: $("#ed-cat").val().trim()
      });
      $("#t-editor-view").remove();
      if (source === "manager") {
        $("#t-mgr-view").remove();
        openScriptManager();
      } else {
        $("#t-main-view").show();
      }
    });
  }
}
var init_scriptManager = __esm({
  "src/ui/scriptManager.js"() {
    init_storage();
    init_state();
    init_scriptData();
    init_mainWindow();
    init_settingsWindow();
  }
});

// src/core/connection.js
import { ChatCompletionService } from "../../../custom-request.js";
import { oai_settings, getChatCompletionModel } from "../../../openai.js";
function getActiveConnection() {
  const data = getExtData();
  const cfg = data.config || {};
  const activeProfileId = cfg.active_profile_id || "default";
  const profiles = cfg.profiles || DEFAULT_PROFILES;
  const currentProfile = profiles.find((p) => p.id === activeProfileId) || profiles[1] || DEFAULT_PROFILES[1];
  const useSTConnection = currentProfile.type === "internal";
  const stream = cfg.stream !== false;
  let url = "";
  let key = "";
  let model = "";
  if (useSTConnection) {
    try {
      model = getChatCompletionModel() || "gpt-3.5-turbo";
      url = oai_settings.custom_url || oai_settings.reverse_proxy || `[${oai_settings.chat_completion_source}]`;
      key = "[\u7531 ST \u540E\u7AEF\u7BA1\u7406]";
    } catch (e) {
      TitaniaLogger.warn("\u65E0\u6CD5\u8BFB\u53D6 ST API \u914D\u7F6E", e);
      model = "gpt-3.5-turbo";
    }
  } else {
    url = currentProfile.url || "";
    key = currentProfile.key || "";
    model = currentProfile.model || "gpt-3.5-turbo";
  }
  return {
    useSTConnection,
    profileName: currentProfile.name,
    url,
    key,
    model,
    stream,
    rawProfile: currentProfile
  };
}
function getCurrentModel() {
  const conn = getActiveConnection();
  return conn.model;
}
async function getAvailableModels() {
  const conn = getActiveConnection();
  if (conn.useSTConnection) {
    try {
      const selectors = [
        "#model_openai_select",
        "#model_claude_select",
        "#model_openrouter_select",
        "#model_mistral_select",
        "#api_button_text_generation_webui_model",
        ".model_select",
        "select[id*='model']"
      ];
      let models = [];
      for (const sel of selectors) {
        const $sel = $(sel);
        if ($sel.length > 0 && $sel.is("select")) {
          $sel.find("option").each(function() {
            const val = $(this).val();
            if (val && val !== "null" && typeof val === "string" && val.trim() !== "") {
              models.push(val);
            }
          });
        }
      }
      if (models.length > 0) {
        const uniqueModels = [...new Set(models)].sort();
        const current2 = getChatCompletionModel();
        if (current2 && !uniqueModels.includes(current2)) {
          uniqueModels.unshift(current2);
        }
        return uniqueModels;
      }
    } catch (e) {
      TitaniaLogger.warn("\u4ECE ST DOM \u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25", e);
    }
    const current = getChatCompletionModel();
    return current ? [current] : ["gpt-3.5-turbo"];
  } else {
    if (!conn.url) return [conn.model || "gpt-3.5-turbo"];
    try {
      let endpoint = conn.url.trim().replace(/\/+$/, "");
      if (!endpoint.endsWith("/models")) {
        if (endpoint.endsWith("/v1")) endpoint += "/models";
        else endpoint += "/v1/models";
      }
      const res = await fetch(endpoint, {
        method: "GET",
        headers: { "Authorization": `Bearer ${conn.key}` }
      });
      if (!res.ok) return [conn.model || "gpt-3.5-turbo"];
      const json = await res.json();
      if (Array.isArray(json.data)) {
        return json.data.map((m) => m.id).sort();
      } else if (Array.isArray(json)) {
        return json.map((m) => m.id || m).sort();
      }
      return [conn.model || "gpt-3.5-turbo"];
    } catch (e) {
      TitaniaLogger.warn("\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25", e);
      return [conn.model || "gpt-3.5-turbo"];
    }
  }
}
function normalizeEndpoint(url, suffix = "/chat/completions") {
  if (!url) return "";
  let endpoint = url.trim().replace(/\/+$/, "");
  if (!endpoint.endsWith(suffix)) {
    if (endpoint.endsWith("/v1")) {
      endpoint += suffix;
    } else {
      endpoint += "/v1" + suffix;
    }
  }
  return endpoint;
}
async function sendChatRequest(messages, options = {}) {
  const conn = getActiveConnection();
  const data = getExtData();
  const model = options.model || conn.model;
  const useStream = options.stream !== void 0 ? options.stream : conn.stream;
  const maxTokens = options.maxTokens || 2048;
  const temperature = options.temperature || 0.7;
  const signal = options.signal;
  let rawContent = "";
  if (conn.useSTConnection) {
    const requestData = ChatCompletionService.createRequestData({
      stream: useStream,
      messages,
      chat_completion_source: oai_settings.chat_completion_source,
      model,
      max_tokens: oai_settings.openai_max_tokens || maxTokens,
      temperature: oai_settings.temp_openai || temperature,
      custom_url: oai_settings.custom_url,
      reverse_proxy: oai_settings.reverse_proxy,
      proxy_password: oai_settings.proxy_password,
      custom_prompt_post_processing: oai_settings.custom_prompt_post_processing
    });
    if (useStream) {
      const streamGenerator = await ChatCompletionService.sendRequest(requestData, false, null);
      if (typeof streamGenerator === "function") {
        for await (const chunk of streamGenerator()) {
          rawContent = chunk.text || "";
        }
      } else {
        rawContent = streamGenerator?.content || "";
      }
    } else {
      const result = await ChatCompletionService.sendRequest(requestData, true, null);
      rawContent = result?.content || "";
    }
  } else {
    if (!conn.key) {
      throw new Error("\u914D\u7F6E\u7F3A\u5931\uFF1A\u8BF7\u5148\u53BB\u8BBE\u7F6E\u586B API Key\uFF01");
    }
    const endpoint = normalizeEndpoint(conn.url, "/chat/completions");
    if (!endpoint) {
      throw new Error("ERR_CONFIG: API URL \u672A\u8BBE\u7F6E");
    }
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${conn.key}`
      },
      body: JSON.stringify({
        model,
        messages,
        stream: useStream,
        max_tokens: maxTokens,
        temperature
      })
    };
    if (signal) {
      fetchOptions.signal = signal;
    }
    const res = await fetch(endpoint, fetchOptions);
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`HTTP Error ${res.status}: ${res.statusText} - ${errText.substring(0, 100)}`);
    }
    if (useStream) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      try {
        while (true) {
          if (signal?.aborted) {
            await reader.cancel();
            throw new DOMException("Request aborted", "AbortError");
          }
          const { done, value } = await reader.read();
          if (done) break;
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
            }
          }
        }
      } catch (streamErr) {
        if (streamErr.name === "AbortError") throw streamErr;
        throw new Error(`Stream Interrupted: ${streamErr.message}`);
      }
    } else {
      const jsonText = await res.text();
      try {
        const json = JSON.parse(jsonText);
        rawContent = json.choices?.[0]?.message?.content || "";
      } catch (jsonErr) {
        throw new Error("Invalid JSON response");
      }
    }
  }
  return rawContent;
}
function validateConnection() {
  const conn = getActiveConnection();
  if (conn.useSTConnection) {
    return { valid: true };
  }
  if (!conn.url) {
    return { valid: false, error: "API URL \u672A\u8BBE\u7F6E" };
  }
  if (!conn.key) {
    return { valid: false, error: "API Key \u672A\u8BBE\u7F6E" };
  }
  return { valid: true };
}
var DEFAULT_PROFILES;
var init_connection = __esm({
  "src/core/connection.js"() {
    init_storage();
    init_logger();
    DEFAULT_PROFILES = [
      { id: "st_sync", name: "\u{1F517} \u8DDF\u968F SillyTavern", type: "internal", readonly: true },
      { id: "default", name: "\u9ED8\u8BA4\u81EA\u5B9A\u4E49", type: "custom", url: "", key: "", model: "gpt-3.5-turbo" }
    ];
  }
});

// src/core/loreExtractor.js
function extractJSONFromAIOutput(rawContent) {
  if (!rawContent || typeof rawContent !== "string") {
    return "";
  }
  let content = rawContent;
  const thinkingTags = [
    /<thinking[\s\S]*?<\/thinking>/gi,
    /<think[\s\S]*?<\/think>/gi,
    /<reasoning[\s\S]*?<\/reasoning>/gi,
    /<reflection[\s\S]*?<\/reflection>/gi,
    /<analysis[\s\S]*?<\/analysis>/gi,
    /<internal[\s\S]*?<\/internal>/gi
  ];
  for (const pattern of thinkingTags) {
    content = content.replace(pattern, "");
  }
  const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlockMatch && codeBlockMatch[1]) {
    content = codeBlockMatch[1];
  }
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    content = jsonMatch[0];
  }
  content = content.replace(/,\s*([}\]])/g, "$1");
  return content.trim();
}
function parseAIJSON(rawContent) {
  const strategies = [
    // 策略 1：使用 extractJSONFromAIOutput 提取后解析
    {
      name: "extractJSON",
      fn: (c) => {
        const extracted = extractJSONFromAIOutput(c);
        if (!extracted) throw new Error("\u63D0\u53D6\u7ED3\u679C\u4E3A\u7A7A");
        return JSON.parse(extracted);
      }
    },
    // 策略 2：直接解析（适用于纯 JSON 输出）
    {
      name: "direct",
      fn: (c) => JSON.parse(c.trim())
    },
    // 策略 3：提取代码块后解析
    {
      name: "codeBlock",
      fn: (c) => {
        const match = c.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (!match) throw new Error("\u672A\u627E\u5230\u4EE3\u7801\u5757");
        return JSON.parse(match[1].trim());
      }
    },
    // 策略 4：宽松提取 JSON 对象
    {
      name: "looseExtract",
      fn: (c) => {
        const match = c.match(/\{[\s\S]*\}/);
        if (!match) throw new Error("\u672A\u627E\u5230 JSON \u5BF9\u8C61");
        return JSON.parse(match[0]);
      }
    },
    // 策略 5：移除尾随逗号后解析
    {
      name: "removeTrailingCommas",
      fn: (c) => {
        const cleaned = c.replace(/,\s*([}\]])/g, "$1");
        const match = cleaned.match(/\{[\s\S]*\}/);
        if (!match) throw new Error("\u672A\u627E\u5230 JSON \u5BF9\u8C61");
        return JSON.parse(match[0]);
      }
    },
    // 策略 6：修复常见 JSON 错误后解析
    {
      name: "fixCommonErrors",
      fn: (c) => {
        let fixed = c;
        fixed = fixed.replace(/<thinking[\s\S]*?<\/thinking>/gi, "");
        fixed = fixed.replace(/<think[\s\S]*?<\/think>/gi, "");
        fixed = fixed.replace(/```json\s*/gi, "").replace(/```\s*/g, "");
        const match = fixed.match(/\{[\s\S]*\}/);
        if (!match) throw new Error("\u672A\u627E\u5230 JSON \u5BF9\u8C61");
        let jsonStr = match[0].replace(/,\s*([}\]])/g, "$1");
        try {
          return JSON.parse(jsonStr);
        } catch {
          jsonStr = jsonStr.replace(/'([^']+)':/g, '"$1":');
          return JSON.parse(jsonStr);
        }
      }
    }
  ];
  const errors = [];
  for (const strategy of strategies) {
    try {
      const result = strategy.fn(rawContent);
      TitaniaLogger.debug(`JSON \u89E3\u6790\u6210\u529F\uFF0C\u4F7F\u7528\u7B56\u7565: ${strategy.name}`);
      return result;
    } catch (e) {
      errors.push({ strategy: strategy.name, error: e.message });
    }
  }
  TitaniaLogger.error("\u6240\u6709 JSON \u89E3\u6790\u7B56\u7565\u5747\u5931\u8D25", {
    rawContentPreview: rawContent.substring(0, 500),
    errors
  });
  throw new Error(`\u65E0\u6CD5\u89E3\u6790 AI \u8FD4\u56DE\u7684 JSON \u6570\u636E\u3002\u5C1D\u8BD5\u4E86 ${strategies.length} \u79CD\u7B56\u7565\u5747\u5931\u8D25\u3002`);
}
async function extractLoreFromHistory(historyLimit = 20, modelOverride = null) {
  TitaniaLogger.info("\u5F00\u59CB\u63D0\u53D6\u8BBE\u5B9A...", { historyLimit, modelOverride });
  const ctx = await getContextData();
  const history = getChatHistory(historyLimit);
  if (!history || history.trim().length === 0) {
    throw new Error("\u804A\u5929\u8BB0\u5F55\u4E3A\u7A7A\uFF0C\u65E0\u6CD5\u63D0\u53D6\u8BBE\u5B9A");
  }
  let existingLoreSummary = "";
  try {
    const activeEntries = await getActiveWorldInfoEntries();
    const summaryList = [];
    activeEntries.forEach((book) => {
      book.entries.forEach((e) => {
        const keys = Array.isArray(e.keys) ? e.keys.join(", ") : e.keys;
        summaryList.push(`UID: ${e.uid} | Keys: ${keys} | Book: ${book.bookName}`);
      });
    });
    if (summaryList.length > 0) {
      existingLoreSummary = summaryList.join("\n");
    }
  } catch (e) {
    TitaniaLogger.warn("\u83B7\u53D6\u73B0\u6709\u4E16\u754C\u4E66\u5931\u8D25\uFF0C\u5C06\u8DF3\u8FC7\u81EA\u52A8\u5339\u914D", e);
  }
  const sysPrompt = `You are an expert Lorekeeper and World Builder. Your task is to analyze the provided roleplay chat history and extract key information into a structured JSON format for a World Info (Lorebook) database.

[Target Information]
Identify and extract:
1. **Locations**: New places visited or mentioned (Name, Description, Atmosphere).
2. **Characters**: New NPCs or significant character developments (Name, Appearance, Personality, Role).
3. **Items/Artifacts**: Important objects (Name, Function, Origin).
4. **Events/Lore**: Historical events, rules of the world, or plot-critical facts.

[Existing Lorebook Entries]
The following entries already exist in the database. Check if the extracted information updates any of them:
${existingLoreSummary || "(None)"}

[Output Format]
Return ONLY a valid JSON object with the following structure:
{
  "entries": [
    {
      "keys": ["Primary Keyword", "Alias 1", "Alias 2"],
      "category": "Location" | "Character" | "Item" | "Event" | "Other",
      "content": "Comprehensive description suitable for a lorebook entry. Write in the same language as the chat history (Chinese).",
      "reason": "Brief explanation of why this was extracted.",
      "confidence": "High" | "Medium" | "Low",
      "action": "new" | "update",
      "matched_uid": 12345 (Only if action is "update", provide the UID from Existing Lorebook Entries),
      "matched_book": "Book Name" (Only if action is "update")
    }
  ]
}

[Rules]
1. **Update vs New**: If the extracted entity matches an existing entry (by Keys or context), set "action" to "update" and provide the "matched_uid". The "content" should be the NEW updated version (merging old knowledge with new facts).
2. **Ignore Trivial Details**: Only extract information that is likely to be relevant for future context.
3. **Consolidate**: If an entity is mentioned multiple times, combine the information into a single entry.
4. **Language**: The 'content' field MUST be in Chinese (if the chat is in Chinese).
5. **JSON Only**: Do not output any markdown formatting, explanations, or code blocks outside the JSON.

[CRITICAL OUTPUT REQUIREMENTS]
- Your response MUST start with { and end with }
- Do NOT include \`\`\`json or \`\`\` markers
- Do NOT add any explanation, greeting, or commentary before or after the JSON
- Do NOT include trailing commas in arrays or objects
- If no entries are found, return: {"entries": []}`;
  const userPrompt = `[Context]
Character: ${ctx.charName}
User: ${ctx.userName}

[Chat History to Analyze]
${history}

[Task]
Extract new lore entries from the above history. Return JSON only.`;
  const conn = getActiveConnection();
  const finalModel = modelOverride || conn.model;
  TitaniaLogger.info("\u63D0\u53D6\u8BBE\u5B9A\u4F7F\u7528\u8FDE\u63A5", {
    profile: conn.profileName,
    model: finalModel,
    useSTConnection: conn.useSTConnection
  });
  let rawContent = "";
  try {
    rawContent = await sendChatRequest(
      [
        { role: "system", content: sysPrompt },
        { role: "user", content: userPrompt }
      ],
      {
        model: finalModel,
        stream: false,
        // 设定提取不使用流式
        maxTokens: 2e3,
        temperature: 0.3
      }
    );
  } catch (e) {
    TitaniaLogger.error("API \u8BF7\u6C42\u5931\u8D25", e);
    throw new Error("API \u8BF7\u6C42\u5931\u8D25: " + (e.message || "\u672A\u77E5\u9519\u8BEF"));
  }
  if (!rawContent) {
    throw new Error("API \u8FD4\u56DE\u5185\u5BB9\u4E3A\u7A7A");
  }
  try {
    TitaniaLogger.debug("\u5F00\u59CB\u89E3\u6790 AI \u8FD4\u56DE\u5185\u5BB9", {
      contentLength: rawContent.length,
      contentPreview: rawContent.substring(0, 200)
    });
    const data = parseAIJSON(rawContent);
    if (!data || !Array.isArray(data.entries)) {
      throw new Error("\u8FD4\u56DE\u7684 JSON \u683C\u5F0F\u4E0D\u6B63\u786E (\u7F3A\u5C11 entries \u6570\u7EC4)");
    }
    TitaniaLogger.info(`\u63D0\u53D6\u5B8C\u6210\uFF0C\u5171\u627E\u5230 ${data.entries.length} \u4E2A\u6761\u76EE`);
    return data;
  } catch (e) {
    TitaniaLogger.error("JSON \u89E3\u6790\u5931\u8D25", {
      rawContentFull: rawContent,
      rawContentLength: rawContent.length,
      error: e.message
    });
    throw new Error(`\u65E0\u6CD5\u89E3\u6790 AI \u8FD4\u56DE\u7684\u6570\u636E: ${e.message}`);
  }
}
var init_loreExtractor = __esm({
  "src/core/loreExtractor.js"() {
    init_helpers();
    init_context();
    init_logger();
    init_connection();
  }
});

// src/core/worldInfoManager.js
import { world_info as world_info2, selected_world_info as selected_world_info2, saveWorldInfo } from "../../../world-info.js";
import { eventSource, event_types } from "../../../../script.js";
function getAvailableWorldBooks() {
  try {
    if (Array.isArray(world_info2.loreBookNames)) {
      return world_info2.loreBookNames;
    }
    return selected_world_info2 || [];
  } catch (e) {
    TitaniaLogger.error("\u83B7\u53D6\u4E16\u754C\u4E66\u5217\u8868\u5931\u8D25", e);
    return [];
  }
}
async function getCharacterWorldBook() {
  const ctx = await getContextData();
  if (typeof SillyTavern !== "undefined" && SillyTavern.getContext) {
    const stCtx = SillyTavern.getContext();
    const charId = stCtx.characterId;
    if (charId !== void 0 && stCtx.characters && stCtx.characters[charId]) {
      return stCtx.characters[charId].data?.extensions?.world || null;
    }
  }
  return null;
}
async function getWorldInfoEntries(bookName) {
  try {
    if (!bookName) throw new Error("\u672A\u6307\u5B9A\u4E16\u754C\u4E66\u540D\u79F0");
    if (typeof SillyTavern === "undefined" || !SillyTavern.getContext) {
      throw new Error("SillyTavern Context \u4E0D\u53EF\u7528");
    }
    const ctx = SillyTavern.getContext();
    let book = null;
    if (ctx.loadWorldInfo && typeof ctx.loadWorldInfo === "function") {
      book = await ctx.loadWorldInfo(bookName);
    }
    if (!book && world_info2.loadedWorldInfo && world_info2.loadedWorldInfo.name === bookName) {
      book = world_info2.loadedWorldInfo;
    }
    if (!book) {
      return [];
    }
    SYNC_STATE.currentBookName = bookName;
    const safeEntries = book.entries ? structuredClone(book.entries) : {};
    const entriesArray = Object.values(safeEntries).sort((a, b) => {
      return (a.order || 100) - (b.order || 100);
    });
    SYNC_STATE.localEntries = entriesArray;
    return entriesArray;
  } catch (e) {
    TitaniaLogger.error("\u83B7\u53D6\u4E16\u754C\u4E66\u6761\u76EE\u5931\u8D25", e);
    throw e;
  }
}
function triggerSave() {
  if (SYNC_STATE.debouncer) clearTimeout(SYNC_STATE.debouncer);
  SYNC_STATE.debouncer = setTimeout(async () => {
    const name = SYNC_STATE.currentBookName;
    const entries = SYNC_STATE.localEntries;
    if (!name || !entries) return;
    try {
      const ctx = SillyTavern.getContext();
      SYNC_STATE.isSelfSaving = true;
      const entriesObj = {};
      entries.forEach((e) => {
        if (e.uid !== void 0) entriesObj[e.uid] = e;
      });
      if (ctx.saveWorldInfo) {
        await ctx.saveWorldInfo(name, { entries: entriesObj }, false);
      } else if (typeof saveWorldInfo === "function") {
        await saveWorldInfo(name, { entries: entriesObj }, false);
      }
      console.log(`[Titania] Auto-saved: ${name}`);
    } catch (e) {
      console.error("[Titania] Save failed:", e);
    } finally {
      setTimeout(() => {
        SYNC_STATE.isSelfSaving = false;
      }, 500);
    }
  }, SYNC_STATE.saveDelay);
}
function initSyncListener() {
  eventSource.on(event_types.WORLDINFO_UPDATED, (name, data) => {
    if (SYNC_STATE.currentBookName !== name) return;
    if (SYNC_STATE.isSelfSaving) {
      return;
    }
    console.log(`[Titania] External change detected, reloading: ${name}`);
    getWorldInfoEntries(name).then(() => {
      const event2 = new CustomEvent("titania-worldbook-updated", { detail: { name } });
      document.dispatchEvent(event2);
    });
  });
  console.log("[Titania] Sync listener registered.");
}
async function saveLoreEntry(bookName, entryData, isFullUpdate = false) {
  try {
    if (!bookName) throw new Error("\u672A\u6307\u5B9A\u4E16\u754C\u4E66\u540D\u79F0");
    if (SYNC_STATE.currentBookName !== bookName) {
      await getWorldInfoEntries(bookName);
    }
    const uid = entryData.uid || Date.now();
    let entry = SYNC_STATE.localEntries.find((e) => e.uid == uid);
    if (isFullUpdate && entry) {
      Object.assign(entry, entryData);
    } else {
      const newEntryData = {
        uid,
        key: Array.isArray(entryData.keys) ? entryData.keys : entryData.keys ? [entryData.keys] : [],
        keysecondary: entryData.keysecondary || [],
        comment: entryData.comment || entryData.keys && entryData.keys[0] || "New Entry",
        content: entryData.content || "",
        constant: entryData.constant || false,
        selective: entryData.selective !== void 0 ? entryData.selective : true,
        order: entryData.order || 100,
        position: entryData.position !== void 0 ? entryData.position : 1,
        disable: entryData.disable || false,
        excludeRecursion: false,
        probability: 100,
        useProbability: true,
        depth: 4,
        group: ""
      };
      if (entry) {
        Object.assign(entry, newEntryData);
      } else {
        entry = newEntryData;
        SYNC_STATE.localEntries.push(entry);
      }
    }
    triggerSave();
    TitaniaLogger.info(`\u4E16\u754C\u4E66\u6761\u76EE\u5DF2\u66F4\u65B0(\u672C\u5730): ${bookName} / UID:${uid}`);
    return true;
  } catch (e) {
    TitaniaLogger.error("\u4FDD\u5B58\u4E16\u754C\u4E66\u6761\u76EE\u5931\u8D25", e);
    return false;
  }
}
var SYNC_STATE;
var init_worldInfoManager = __esm({
  "src/core/worldInfoManager.js"() {
    init_context();
    init_logger();
    SYNC_STATE = {
      currentBookName: null,
      // 当前选中的世界书名称
      localEntries: [],
      // 插件持有的数据副本（数组格式）
      isSelfSaving: false,
      // 【核心锁】标记是否正在执行插件自身的保存操作
      debouncer: null,
      // 防抖计时器句柄
      saveDelay: 500
      // 自动保存延迟 (ms)
    };
  }
});

// src/ui/loreReviewWindow.js
function ensureCssLoaded() {
  const id = "titania-css-lore-review";
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `${extensionFolderPath}/css/lore-review.css`;
    document.head.appendChild(link);
  }
}
async function showLoreReviewWindow() {
  ensureCssLoaded();
  $("#t-lore-review-overlay").remove();
  const html = `
    <div id="t-lore-review-overlay" class="t-overlay">
        <div class="t-window t-lore-review-window">
            <div class="t-window-header">
                <div class="t-window-title">
                    <i class="fa-solid fa-brain"></i> \u667A\u80FD\u8BBE\u5B9A\u63D0\u53D6
                </div>
                <div class="t-window-controls">
                    <div class="t-window-icon" id="t-model-dropdown-toggle" title="\u9009\u62E9\u6A21\u578B">
                        <i class="fa-solid fa-microchip"></i>
                    </div>
                    <div class="t-window-close" id="t-lore-review-close"><i class="fa-solid fa-times"></i></div>
                </div>
            </div>
            
            <!-- \u6A21\u578B\u4E0B\u62C9\u83DC\u5355 (\u9690\u85CF) -->
            <div id="t-model-dropdown" class="t-model-dropdown" style="display: none;">
                <div class="t-dropdown-header">
                    <span><i class="fa-solid fa-microchip"></i> \u9009\u62E9\u6A21\u578B</span>
                    <button id="t-btn-refresh-models" class="t-btn t-btn-xs" title="\u5237\u65B0\u6A21\u578B\u5217\u8868">
                        <i class="fa-solid fa-sync"></i> \u5237\u65B0
                    </button>
                </div>
                <select id="t-lore-model" size="8" style="width: 100%; margin-top: 8px; font-family: monospace;">
                    <option value="" selected>Auto (Default)</option>
                </select>
            </div>

            <div class="t-window-body">
                <!-- \u9876\u90E8\u63A7\u5236\u680F -->
                <div class="t-lore-controls">
                    <div class="t-control-group">
                        <label>\u5206\u6790\u8303\u56F4 (\u6761):</label>
                        <input type="number" id="t-lore-history-limit" value="2" min="1" max="100" style="width: 60px;">
                    </div>
                    <button id="t-btn-start-extract" class="t-btn t-btn-primary">
                        <i class="fa-solid fa-search"></i> \u5F00\u59CB\u5206\u6790
                    </button>
                </div>

                <!-- \u4E3B\u5185\u5BB9\u533A -->
                <div class="t-lore-content">
                    <!-- \u5DE6\u4FA7\uFF1A\u6761\u76EE\u5217\u8868 -->
                    <div class="t-lore-list-container">
                        <div class="t-list-header">
                            <span>\u63D0\u53D6\u7ED3\u679C</span>
                            <div class="t-list-actions">
                                <button id="t-btn-select-all" class="t-btn t-btn-xs">\u5168\u9009</button>
                                <button id="t-btn-deselect-all" class="t-btn t-btn-xs">\u5168\u4E0D\u9009</button>
                            </div>
                        </div>
                        <div id="t-lore-entries-list" class="t-lore-list">
                            <div class="t-empty-state">
                                <i class="fa-solid fa-robot"></i>
                                <p>\u70B9\u51FB\u201C\u5F00\u59CB\u5206\u6790\u201D\u4EE5\u63D0\u53D6\u8BBE\u5B9A</p>
                            </div>
                        </div>
                    </div>

                    <!-- \u53F3\u4FA7\uFF1A\u8BE6\u60C5\u7F16\u8F91 -->
                    <div class="t-lore-editor-container">
                        <div class="t-editor-header">
                            <span>\u6761\u76EE\u8BE6\u60C5</span>
                        </div>
                        <div id="t-lore-editor" class="t-lore-editor" style="display:none;">
                            <div class="t-form-group">
                                <label>\u5173\u952E\u8BCD (Keys)</label>
                                <input type="text" id="t-edit-keys" placeholder="Key1, Key2, ...">
                                <small>\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD</small>
                            </div>
                            <div class="t-form-group">
                                <label>\u5206\u7C7B (Category)</label>
                                <select id="t-edit-category">
                                    <option value="Location">\u5730\u70B9 (Location)</option>
                                    <option value="Character">\u4EBA\u7269 (Character)</option>
                                    <option value="Item">\u7269\u54C1 (Item)</option>
                                    <option value="Event">\u4E8B\u4EF6 (Event)</option>
                                    <option value="Other">\u5176\u4ED6 (Other)</option>
                                </select>
                            </div>
                            <div class="t-form-group">
                                <label>\u5185\u5BB9 (Content)</label>
                                <textarea id="t-edit-content" rows="8"></textarea>
                            </div>
                            <div class="t-form-group">
                                <label>\u63D0\u53D6\u7406\u7531 (Reason)</label>
                                <div id="t-edit-reason" class="t-static-text"></div>
                            </div>
                            <div class="t-form-group" id="t-update-info-group" style="display:none;">
                                <label>\u5173\u8054\u66F4\u65B0 (Matched Entry)</label>
                                <div class="t-update-info-box">
                                    <div id="t-matched-entry-info"></div>
                                    <button id="t-btn-change-match" class="t-btn t-btn-xs">\u66F4\u6539\u5173\u8054</button>
                                </div>
                            </div>
                        </div>
                        <div id="t-editor-placeholder" class="t-empty-state">
                            <p>\u8BF7\u5728\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u6761\u76EE\u8FDB\u884C\u7F16\u8F91</p>
                        </div>
                    </div>
                </div>

                <!-- \u5E95\u90E8\u64CD\u4F5C\u680F -->
                <div class="t-window-footer">
                    <div class="t-target-select">
                        <label>\u4FDD\u5B58\u5230:</label>
                        <select id="t-target-book">
                            <option value="" disabled selected>\u52A0\u8F7D\u4E2D...</option>
                        </select>
                    </div>
                    <div class="t-footer-actions">
                        <button id="t-btn-save-selected" class="t-btn t-btn-success" disabled>
                            <i class="fa-solid fa-save"></i> \u4FDD\u5B58\u9009\u4E2D\u6761\u76EE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  $("body").append(html);
  await initWorldBookSelect();
  const currentModel = getCurrentModel();
  await loadModelList(currentModel);
  if (currentModel) {
    const $select = $("#t-lore-model");
    if ($select.find(`option[value="${currentModel}"]`).length > 0) {
      $select.val(currentModel);
    } else {
      $select.append(`<option value="${currentModel}">${currentModel}</option>`);
      $select.val(currentModel);
    }
  }
  bindEvents();
}
async function loadModelList(currentModel) {
  const $btn = $("#t-btn-refresh-models");
  const $icon = $btn.find("i");
  const $select = $("#t-lore-model");
  try {
    $icon.addClass("fa-spin");
    $btn.prop("disabled", true);
    const currentVal = $select.val() || currentModel;
    const models = await getAvailableModels();
    $select.empty();
    $select.append('<option value="">Auto (Default)</option>');
    const uniqueModels = [...new Set(models)].sort();
    uniqueModels.forEach((model) => {
      $select.append(`<option value="${model}">${model}</option>`);
    });
    if (currentVal && uniqueModels.includes(currentVal)) {
      $select.val(currentVal);
    } else if (currentVal && currentVal !== "gpt-3.5-turbo") {
      $select.append(`<option value="${currentVal}">${currentVal}</option>`);
      $select.val(currentVal);
    }
    if (window.toastr && models.length > 0) {
      if (event && event.type === "click") {
        toastr.success(`\u5DF2\u5237\u65B0\u6A21\u578B\u5217\u8868\uFF0C\u5171\u627E\u5230 ${models.length} \u4E2A\u6A21\u578B`, "Titania");
      }
    }
  } catch (e) {
    console.warn("Titania: Failed to load model list", e);
    if (window.toastr) toastr.error("\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25: " + e.message, "Titania");
  } finally {
    $icon.removeClass("fa-spin");
    $btn.prop("disabled", false);
  }
}
async function initWorldBookSelect() {
  const books = getAvailableWorldBooks();
  const charBook = await getCharacterWorldBook();
  const $select = $("#t-target-book");
  $select.empty();
  if (charBook) {
    $select.append(`<option value="${charBook}">[\u5F53\u524D\u89D2\u8272] ${charBook}</option>`);
  }
  books.forEach((book) => {
    if (book !== charBook) {
      $select.append(`<option value="${book}">${book}</option>`);
    }
  });
  if (books.length === 0 && !charBook) {
    $select.append(`<option value="" disabled>\u672A\u627E\u5230\u4E16\u754C\u4E66</option>`);
  }
}
function bindEvents() {
  $("#t-lore-review-close").on("click", () => {
    $("#t-lore-review-overlay").remove();
  });
  function toggleModelDropdown(show) {
    dropdownVisible = show !== void 0 ? show : !dropdownVisible;
    if (dropdownVisible) {
      $("#t-model-dropdown").show();
    } else {
      $("#t-model-dropdown").hide();
    }
  }
  $("#t-model-dropdown-toggle").on("click", function(e) {
    e.stopPropagation();
    toggleModelDropdown();
  });
  $(document).on("click", function(e) {
    if (dropdownVisible && !$(e.target).closest("#t-model-dropdown, #t-model-dropdown-toggle").length) {
      toggleModelDropdown(false);
    }
  });
  $("#t-btn-refresh-models").on("click", function(e) {
    e.stopPropagation();
    const current = $("#t-lore-model").val();
    loadModelList(current);
  });
  $("#t-btn-start-extract").on("click", async function() {
    let limit = parseInt($("#t-lore-history-limit").val());
    if (isNaN(limit) || limit < 1) limit = 2;
    const model = $("#t-lore-model").val().trim() || null;
    toggleModelDropdown(false);
    const $btn = $(this);
    $btn.prop("disabled", true).html('<i class="fa-solid fa-spinner fa-spin"></i> \u5206\u6790\u4E2D...');
    $("#t-lore-entries-list").html('<div class="t-loading-state"><i class="fa-solid fa-spinner fa-spin"></i> \u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u5E76\u63D0\u53D6\u8BBE\u5B9A...</div>');
    try {
      const result = await extractLoreFromHistory(limit, model);
      currentEntries = result.entries || [];
      renderEntriesList();
      if (currentEntries.length > 0) {
        $("#t-btn-save-selected").prop("disabled", false);
        if (window.toastr) toastr.success(`\u6210\u529F\u63D0\u53D6 ${currentEntries.length} \u4E2A\u6761\u76EE`, "Titania");
      } else {
        $("#t-lore-entries-list").html('<div class="t-empty-state"><p>\u672A\u63D0\u53D6\u5230\u65B0\u7684\u8BBE\u5B9A\u4FE1\u606F</p></div>');
      }
    } catch (e) {
      TitaniaLogger.error("\u63D0\u53D6\u5931\u8D25", e);
      $("#t-lore-entries-list").html(`<div class="t-error-state"><i class="fa-solid fa-exclamation-triangle"></i> \u63D0\u53D6\u5931\u8D25: ${e.message}</div>`);
      if (window.toastr) toastr.error(e.message, "\u63D0\u53D6\u5931\u8D25");
    } finally {
      $btn.prop("disabled", false).html('<i class="fa-solid fa-search"></i> \u5F00\u59CB\u5206\u6790');
    }
  });
  $("#t-btn-select-all").on("click", () => {
    $(".t-lore-entry-checkbox").prop("checked", true);
  });
  $("#t-btn-deselect-all").on("click", () => {
    $(".t-lore-entry-checkbox").prop("checked", false);
  });
  $("#t-btn-save-selected").on("click", async function() {
    const targetBook = $("#t-target-book").val();
    if (!targetBook) {
      alert("\u8BF7\u9009\u62E9\u76EE\u6807\u4E16\u754C\u4E66");
      return;
    }
    const selectedIndices = [];
    $(".t-lore-entry-checkbox:checked").each(function() {
      selectedIndices.push($(this).data("index"));
    });
    if (selectedIndices.length === 0) {
      alert("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6761\u76EE");
      return;
    }
    const $btn = $(this);
    $btn.prop("disabled", true).html('<i class="fa-solid fa-spinner fa-spin"></i> \u4FDD\u5B58\u4E2D...');
    let successCount = 0;
    for (const index of selectedIndices) {
      const entry = currentEntries[index];
      if (entry) {
        const entryToSave = { ...entry };
        if (entry.action === "update" && entry.matched_uid) {
          entryToSave.uid = entry.matched_uid;
        }
        const success = await saveLoreEntry(targetBook, entryToSave);
        if (success) successCount++;
      }
    }
    $btn.prop("disabled", false).html('<i class="fa-solid fa-save"></i> \u4FDD\u5B58\u9009\u4E2D\u6761\u76EE');
    if (window.toastr) toastr.success(`\u6210\u529F\u4FDD\u5B58 ${successCount} \u4E2A\u6761\u76EE\u5230 [${targetBook}]`, "Titania");
  });
  $(document).on("click", ".t-lore-entry-item", function(e) {
    if ($(e.target).is("input[type='checkbox']")) return;
    $(".t-lore-entry-item").removeClass("active");
    $(this).addClass("active");
    const index = $(this).data("index");
    showEntryDetail(index);
  });
  $("#t-edit-keys").on("input", function() {
    const index = $(".t-lore-entry-item.active").data("index");
    if (index !== void 0 && currentEntries[index]) {
      const val = $(this).val();
      currentEntries[index].keys = val.split(/,|，/).map((s) => s.trim()).filter((s) => s);
      $(`.t-lore-entry-item[data-index="${index}"] .t-entry-keys`).text(currentEntries[index].keys.join(", "));
    }
  });
  $("#t-edit-content").on("input", function() {
    const index = $(".t-lore-entry-item.active").data("index");
    if (index !== void 0 && currentEntries[index]) {
      currentEntries[index].content = $(this).val();
      $(`.t-lore-entry-item[data-index="${index}"] .t-entry-preview`).text(currentEntries[index].content);
    }
  });
  $("#t-edit-category").on("change", function() {
    const index = $(".t-lore-entry-item.active").data("index");
    if (index !== void 0 && currentEntries[index]) {
      const newCat = $(this).val();
      currentEntries[index].category = newCat;
      const $item = $(`.t-lore-entry-item[data-index="${index}"]`);
      $item.find(".t-entry-tag").text(newCat);
      $item.attr("data-cat", newCat);
    }
  });
}
function renderEntriesList() {
  const $list = $("#t-lore-entries-list");
  $list.empty();
  currentEntries.forEach((entry, index) => {
    const keysStr = Array.isArray(entry.keys) ? entry.keys.join(", ") : entry.keys;
    const category = entry.category || "Other";
    const isUpdate = entry.action === "update";
    const html = `
        <div class="t-lore-entry-item ${isUpdate ? "t-is-update" : ""}" data-index="${index}" data-cat="${category}">
            <div class="t-entry-header">
                <input type="checkbox" class="t-lore-entry-checkbox" data-index="${index}" checked>
                <span class="t-entry-keys" title="${keysStr}">
                    ${isUpdate ? '<i class="fa-solid fa-rotate" title="\u66F4\u65B0\u73B0\u6709\u6761\u76EE"></i> ' : ""}${keysStr}
                </span>
                <span class="t-entry-tag">${category}</span>
            </div>
            <div class="t-entry-preview">${entry.content || ""}</div>
        </div>
        `;
    $list.append(html);
  });
  if (currentEntries.length > 0) {
    showEntryDetail(0);
    $(".t-lore-entry-item").first().addClass("active");
  } else {
    $("#t-lore-editor").hide();
    $("#t-editor-placeholder").show();
  }
}
function showEntryDetail(index) {
  const entry = currentEntries[index];
  if (!entry) return;
  $("#t-editor-placeholder").hide();
  $("#t-lore-editor").show();
  $("#t-edit-keys").val(Array.isArray(entry.keys) ? entry.keys.join(", ") : entry.keys);
  $("#t-edit-category").val(entry.category || "Other");
  $("#t-edit-content").val(entry.content || "");
  $("#t-edit-reason").text(entry.reason || "\u65E0");
  if (entry.action === "update" && entry.matched_uid) {
    $("#t-update-info-group").show();
    $("#t-matched-entry-info").html(`
            <i class="fa-solid fa-link"></i>
            UID: ${entry.matched_uid}
            ${entry.matched_book ? `(${entry.matched_book})` : ""}
        `);
  } else {
    $("#t-update-info-group").hide();
  }
}
var currentEntries, dropdownVisible;
var init_loreReviewWindow = __esm({
  "src/ui/loreReviewWindow.js"() {
    init_loreExtractor();
    init_worldInfoManager();
    init_logger();
    init_defaults();
    currentEntries = [];
    dropdownVisible = false;
  }
});

// src/ui/mainWindow.js
function refreshScriptList() {
  const $sel = $("#t-sel-script");
  $sel.empty();
  const validScripts = GlobalState.runtimeScripts;
  validScripts.forEach((s) => {
    $sel.append(`<option value="${s.id}">${s.name}</option>`);
  });
  if (GlobalState.lastUsedScriptId && validScripts.find((s) => s.id === GlobalState.lastUsedScriptId)) {
    $sel.val(GlobalState.lastUsedScriptId);
  }
  updateDesc();
}
function updateDesc() {
  const s = GlobalState.runtimeScripts.find((x) => x.id === $("#t-sel-script").val());
  if (s) $("#t-txt-desc").val(s.desc);
}
function applyScriptSelection(id) {
  const s = GlobalState.runtimeScripts.find((x) => x.id === id);
  if (!s) return;
  GlobalState.lastUsedScriptId = s.id;
  $("#t-lbl-name").text(s.name);
  const $catTag = $("#t-lbl-cat");
  const category = s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B");
  $catTag.text(category);
  $catTag.css({
    "color": "#bfa15f",
    "background": "rgba(191, 161, 95, 0.15)",
    "border": "1px solid rgba(191, 161, 95, 0.33)"
  });
  $("#t-lbl-desc-mini").text(s.desc || "\u65E0\u7B80\u4ECB");
  $("#t-txt-desc").val(s.desc);
}
async function openMainWindow() {
  if ($("#t-overlay").length) return;
  const defaultCtx = { charName: "\u52A0\u8F7D\u4E2D...", userName: "\u7528\u6237" };
  let data;
  try {
    data = getExtData();
  } catch (e) {
    console.error("Titania: \u83B7\u53D6\u6269\u5C55\u6570\u636E\u5931\u8D25", e);
    data = { ui_mode_echo: true };
  }
  GlobalState.useHistoryAnalysis = data.use_history_analysis === true;
  GlobalState.generationMode = data.config?.generation_mode || "narrative";
  const placeholderContent = '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#555;"><i class="fa-solid fa-clapperboard" style="font-size:3em; margin-bottom:15px; opacity:0.5;"></i><div style="font-size:1.1em;">\u8BF7\u9009\u62E9\u5267\u672C\uFF0C\u5F00\u59CB\u6F14\u7ECE...</div></div>';
  const html = `
    <div id="t-overlay" class="t-overlay">
        <div class="t-box" id="t-main-view">
            
            <div class="t-header" style="flex-shrink:0;">
                <div class="t-title-container" style="display:flex; flex-direction:column; overflow:hidden;">
                    <div class="t-title-main" style="white-space:nowrap;">\u56DE\u58F0\u5C0F\u5267\u573A</div>
                    <div class="t-title-sub" id="t-title-sub">
                        \u2728 \u4E3B\u6F14: <span id="t-char-name">${defaultCtx.charName}</span>
                    </div>
                </div>
                <div style="display:flex; align-items:center; flex-shrink:0;">
                    <i class="fa-solid fa-book-bookmark t-icon-btn" id="t-btn-favs" title="\u56DE\u58F0\u6536\u85CF\u5939"></i>
                    <i class="fa-solid fa-book-atlas t-icon-btn" id="t-btn-worldinfo" title="\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009"></i>
                    <i class="fa-solid fa-network-wired t-icon-btn" id="t-btn-profiles" title="\u5FEB\u901F\u5207\u6362API\u65B9\u6848"></i>
                    <span class="t-close" id="t-btn-close">&times;</span>
                </div>
            </div>

            <div class="t-top-bar">
                <div class="t-history-toggle" id="t-history-toggle">
                    <label class="t-toggle-label">
                        <input type="checkbox" id="t-use-history" ${GlobalState.useHistoryAnalysis ? "checked" : ""}>
                        <span class="t-toggle-text">\u{1F4DC} \u8BFB\u53D6\u804A\u5929\u5386\u53F2</span>
                    </label>
                </div>
                <div class="t-mode-toggle" id="t-mode-toggle">
                    <div class="t-mode-btn ${GlobalState.generationMode === "narrative" ? "active" : ""}" data-mode="narrative">
                        <span>\u{1F4D6} \u5185\u5BB9\u4F18\u5148</span>
                    </div>
                    <div class="t-mode-btn ${GlobalState.generationMode === "visual" ? "active" : ""}" data-mode="visual">
                        <span>\u{1F3A8} \u6C1B\u56F4\u7F8E\u5316</span>
                    </div>
                </div>
                <div class="t-mobile-row">
                    <div class="t-trigger-card" id="t-trigger-btn" title="\u70B9\u51FB\u5207\u6362\u5267\u672C">
                        <div class="t-trigger-main">
                            <span id="t-lbl-name" style="overflow:hidden; text-overflow:ellipsis;">\u52A0\u8F7D\u4E2D...</span>
                        </div>
                        <div class="t-trigger-sub">
                            <span class="t-cat-tag" id="t-lbl-cat">\u5206\u7C7B</span>
                            <span id="t-lbl-desc-mini">...</span>
                        </div>
                        <i class="fa-solid fa-chevron-down t-chevron"></i>
                    </div>
                    
                    <div class="t-action-group">
                        <div class="t-filter-btn" id="t-btn-filter" title="\u7B5B\u9009\u968F\u673A\u8303\u56F4">
                            <i class="fa-solid fa-filter"></i>
                        </div>
                        <div class="t-dice-btn" id="t-btn-dice" title="\u968F\u673A\u5267\u672C">\u{1F3B2}</div>
                    </div>
                </div>
            </div>

            <div class="t-content-wrapper">
                <div class="t-tools-btn" id="t-btn-tools" title="\u5185\u5BB9\u5DE5\u5177"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                <div class="t-tools-panel" id="t-tools-panel" style="display:none;">
                    <div class="t-tools-item" id="t-tool-zen">
                        <i class="fa-solid fa-expand"></i>
                        <span>\u6C89\u6D78\u9605\u8BFB</span>
                    </div>
                    <div class="t-tools-item" id="t-tool-edit-content">
                        <i class="fa-solid fa-pen-nib"></i>
                        <span>\u7F16\u8F91\u5185\u5BB9</span>
                    </div>
                </div>
                <div class="t-scene-nav" id="t-scene-nav" style="display:none;">
                    <button class="t-nav-btn t-nav-prev" id="t-nav-prev" title="\u4E0A\u4E00\u4E2A\u5267\u573A\uFF08\u66F4\u65E7\uFF09" disabled>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <div class="t-nav-info">
                        <span class="t-nav-indicator" id="t-nav-indicator">1/1</span>
                        <span class="t-nav-unread" id="t-nav-unread" style="display:none;"></span>
                    </div>
                    <button class="t-nav-btn t-nav-next" id="t-nav-next" title="\u4E0B\u4E00\u4E2A\u5267\u573A\uFF08\u66F4\u65B0\uFF09" disabled>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div class="t-content-area">
                    <div id="t-output-content"></div>
                </div>
            </div>

            <div class="t-bottom-bar">
            <!-- \u5DE6\u4FA7\uFF1A2x2 \u5DE5\u5177\u7F51\u683C -->
            <div class="t-bot-left">
                <button class="t-btn-grid" id="t-btn-debug" title="\u5BA1\u67E5 Prompt"><i class="fa-solid fa-eye"></i></button>
                <button class="t-btn-grid" id="t-btn-copy" title="\u590D\u5236\u6E90\u7801"><i class="fa-regular fa-copy"></i></button>
                <button class="t-btn-grid" id="t-btn-like" title="\u6536\u85CF\u7ED3\u679C"><i class="fa-regular fa-heart"></i></button>
                <button class="t-btn-grid" id="t-btn-new" title="\u65B0\u5EFA\u5267\u672C"><i class="fa-solid fa-plus"></i></button>
            </div>

            <!-- \u53F3\u4FA7\uFF1A\u4E0A\u4E0B\u5806\u53E0\u64CD\u4F5C\u533A -->
            <div class="t-bot-right">
                <button id="t-btn-run" class="t-btn-action">
                    <i class="fa-solid fa-clapperboard"></i> <span>\u5F00\u59CB\u6F14\u7ECE</span>
                </button>
                <button id="t-btn-edit" class="t-btn-action">
                    <i class="fa-solid fa-pen-to-square"></i> <span>\u91CD\u65B0\u7F16\u8F91</span>
                </button>
            </div>
        </div>
    </div>`;
  $("body").append(html);
  const outputContainer = document.getElementById("t-output-content");
  if (GlobalState.lastGeneratedContent) {
    const currentScript = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastGeneratedScriptId);
    const scriptName = currentScript ? currentScript.name : "\u573A\u666F";
    renderGeneratedContent(GlobalState.lastGeneratedContent, scriptName);
  } else {
    outputContainer.innerHTML = placeholderContent;
  }
  const updateFilterUI = () => {
    const btn = $("#t-btn-filter");
    const dice = $("#t-btn-dice");
    if (GlobalState.currentCategoryFilter === "ALL") {
      btn.removeClass("active-filter");
      dice.removeClass("active-filter");
      btn.attr("title", "\u5F53\u524D\uFF1A\u5168\u90E8\u5206\u7C7B");
    } else {
      btn.addClass("active-filter");
      dice.addClass("active-filter");
      btn.attr("title", `\u5F53\u524D\u9501\u5B9A\uFF1A${GlobalState.currentCategoryFilter}`);
    }
  };
  const updateHistoryToggleUI = () => {
    const $toggle = $("#t-history-toggle");
    const $checkbox = $("#t-use-history");
    if (GlobalState.useHistoryAnalysis) {
      $toggle.addClass("active");
    } else {
      $toggle.removeClass("active");
    }
    $checkbox.prop("checked", GlobalState.useHistoryAnalysis);
  };
  const updateModeToggleUI = () => {
    $(".t-mode-btn").removeClass("active");
    $(`.t-mode-btn[data-mode="${GlobalState.generationMode}"]`).addClass("active");
  };
  const handleRandom = () => {
    const allScripts = GlobalState.runtimeScripts;
    if (allScripts.length === 0) {
      if (window.toastr) toastr.warning("\u6682\u65E0\u53EF\u7528\u5267\u672C\u3002", "Titania");
      $("#t-lbl-name").text("\u6682\u65E0\u5267\u672C");
      $("#t-lbl-cat").text("\u65E0\u5206\u7C7B");
      $("#t-lbl-desc-mini").text("\u8BF7\u521B\u5EFA\u6216\u5BFC\u5165\u5267\u672C");
      return;
    }
    let pool = allScripts;
    if (GlobalState.currentCategoryFilter !== "ALL") {
      pool = pool.filter((s2) => (s2.category || (s2._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")) === GlobalState.currentCategoryFilter);
    }
    if (pool.length === 0) {
      if (window.toastr) toastr.warning(`\u6CA1\u627E\u5230 [${GlobalState.currentCategoryFilter}] \u5206\u7C7B\u7684\u5267\u672C\uFF0C\u5DF2\u5207\u6362\u5230\u5168\u90E8\u3002`, "Titania");
      GlobalState.currentCategoryFilter = "ALL";
      updateFilterUI();
      pool = allScripts;
    }
    const rnd = Math.floor(Math.random() * pool.length);
    const s = pool[rnd];
    applyScriptSelection(s.id);
    const dice = $("#t-btn-dice");
    dice.css("transform", `rotate(${Math.random() * 360}deg) scale(1.1)`);
    setTimeout(() => dice.css("transform", "rotate(0deg) scale(1)"), 300);
  };
  $("#t-use-history").on("change", function() {
    GlobalState.useHistoryAnalysis = $(this).is(":checked");
    updateHistoryToggleUI();
    const d = getExtData();
    d.use_history_analysis = GlobalState.useHistoryAnalysis;
    saveExtData();
    if (window.toastr) {
      if (GlobalState.useHistoryAnalysis) {
        toastr.info("\u{1F4DC} \u5DF2\u5F00\u542F\uFF1A\u5C06\u5206\u6790\u804A\u5929\u5386\u53F2", "Titania");
      } else {
        toastr.info("\u{1F4DC} \u5DF2\u5173\u95ED\uFF1A\u4E0D\u8BFB\u53D6\u804A\u5929\u5386\u53F2", "Titania");
      }
    }
  });
  $(".t-mode-btn").on("click", function() {
    const newMode = $(this).data("mode");
    if (newMode === GlobalState.generationMode) return;
    GlobalState.generationMode = newMode;
    updateModeToggleUI();
    const d = getExtData();
    if (!d.config) d.config = {};
    d.config.generation_mode = newMode;
    saveExtData();
    if (window.toastr) {
      if (newMode === "narrative") {
        toastr.info("\u{1F4D6} \u5DF2\u5207\u6362\u81F3\u5185\u5BB9\u4F18\u5148\u6A21\u5F0F", "Titania");
      } else {
        toastr.info("\u{1F3A8} \u5DF2\u5207\u6362\u81F3\u6C1B\u56F4\u7F8E\u5316\u6A21\u5F0F", "Titania");
      }
    }
  });
  $("#t-trigger-btn").on("click", () => showScriptSelector(GlobalState.currentCategoryFilter));
  $("#t-btn-filter").on("click", function(e) {
    renderFilterMenu(GlobalState.currentCategoryFilter, $(this), (newCat) => {
      GlobalState.currentCategoryFilter = newCat;
      updateFilterUI();
      const currentS = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastUsedScriptId);
      const sCat = currentS ? currentS.category || (currentS._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B") : "";
      if (newCat !== "ALL" && sCat !== newCat) {
        handleRandom();
      }
    });
    e.stopPropagation();
  });
  $("#t-btn-dice").on("click", handleRandom);
  const $toolsPanel = $("#t-tools-panel");
  const $toolsBtn = $("#t-btn-tools");
  $toolsBtn.on("click", function(e) {
    e.stopPropagation();
    const isVisible = $toolsPanel.is(":visible");
    $toolsPanel.toggle(!isVisible);
    $(this).toggleClass("active", !isVisible);
  });
  $(document).on("click.toolspanel", function(e) {
    if (!$(e.target).closest("#t-tools-panel, #t-btn-tools").length) {
      $toolsPanel.hide();
      $toolsBtn.removeClass("active");
    }
  });
  $("#t-tool-zen").on("click", function() {
    $toolsPanel.hide();
    $toolsBtn.removeClass("active");
    const view = $("#t-main-view");
    view.toggleClass("t-zen-mode");
    const isZen = view.hasClass("t-zen-mode");
    if (isZen) {
      $toolsBtn.addClass("zen-active");
    } else {
      $toolsBtn.removeClass("zen-active");
    }
  });
  $("#t-tool-edit-content").on("click", function() {
    $toolsPanel.hide();
    $toolsBtn.removeClass("active");
    if (!GlobalState.lastGeneratedContent) {
      if (window.toastr) toastr.warning("\u6CA1\u6709\u53EF\u7F16\u8F91\u7684\u5185\u5BB9\uFF0C\u8BF7\u5148\u751F\u6210\u573A\u666F");
      return;
    }
    openContentEditor();
  });
  $(document).on("keydown.zenmode", function(e) {
    if (e.key === "Escape" && $("#t-main-view").hasClass("t-zen-mode")) {
      $("#t-tool-zen").click();
    }
  });
  const closeWindow = () => {
    $("#t-overlay").remove();
    $(document).off("keydown.zenmode");
  };
  $("#t-btn-close").on("click", closeWindow);
  $("#t-overlay").on("click", (e) => {
    if (e.target === e.currentTarget) closeWindow();
  });
  $("#t-btn-profile").on("click", function(e) {
    renderProfileMenu($(this));
    e.stopPropagation();
  });
  $("#t-btn-new").on("click", () => {
    openEditor(null, "main");
  });
  $("#t-btn-edit").on("click", () => {
    if (!GlobalState.lastUsedScriptId) {
      if (window.toastr) toastr.warning("\u5F53\u524D\u6CA1\u6709\u9009\u4E2D\u7684\u5267\u672C");
      return;
    }
    openEditor(GlobalState.lastUsedScriptId, "main");
  });
  $("#t-btn-copy").on("click", async () => {
    const container = document.getElementById("t-output-content");
    const btn = $("#t-btn-copy");
    const originalHtml = btn.html();
    try {
      let htmlCode = "";
      if (GlobalState.lastGeneratedContent) {
        htmlCode = GlobalState.lastGeneratedContent;
      } else {
        const shadowHost = container.querySelector(".t-shadow-host");
        if (shadowHost && shadowHost.shadowRoot) {
          const shadowContent = shadowHost.shadowRoot.querySelector(".t-shadow-content");
          if (shadowContent) {
            htmlCode = shadowContent.innerHTML;
          }
        }
        if (!htmlCode) {
          htmlCode = container.innerHTML;
        }
      }
      if (!htmlCode || htmlCode.trim().length === 0) {
        throw new Error("\u6CA1\u6709\u53EF\u590D\u5236\u7684\u5185\u5BB9");
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(htmlCode);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = htmlCode;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (!successful) {
          throw new Error("\u590D\u5236\u547D\u4EE4\u6267\u884C\u5931\u8D25");
        }
      }
      btn.html('<i class="fa-solid fa-check" style="color:#55efc4;"></i>');
      setTimeout(() => btn.html(originalHtml), 1e3);
    } catch (err) {
      console.error("Titania: \u590D\u5236\u5931\u8D25", err);
      btn.html('<i class="fa-solid fa-xmark" style="color:#ff6b6b;"></i>');
      setTimeout(() => btn.html(originalHtml), 1500);
      if (window.toastr) {
        toastr.error("\u590D\u5236\u5931\u8D25\uFF1A" + (err.message || "\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u6743\u9650"), "Titania");
      }
    }
  });
  $("#t-btn-run").on("click", () => handleGenerate(null, false));
  $("#t-btn-like").on("click", () => {
    if (GlobalState.lastFavId) {
      unsaveFavorite();
    } else {
      saveFavorite();
    }
  });
  $("#t-btn-profiles").on("click", function(e) {
    renderProfileMenu($(this));
    e.stopPropagation();
  });
  $("#t-btn-favs").on("click", openFavsWindow);
  $("#t-btn-worldinfo").on("click", openWorldInfoSelector);
  $("#t-btn-debug").on("click", async () => await showDebugInfo());
  $("#t-nav-prev").on("click", function() {
    if ($(this).prop("disabled")) return;
    if (navigateToPrevHistory()) {
      const currentScript = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastGeneratedScriptId);
      const scriptName = currentScript ? currentScript.name : "\u573A\u666F";
      renderGeneratedContent(GlobalState.lastGeneratedContent, scriptName);
      updateSceneHistoryNav();
    }
  });
  $("#t-nav-next").on("click", function() {
    if ($(this).prop("disabled")) return;
    if (navigateToNextHistory()) {
      const currentScript = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastGeneratedScriptId);
      const scriptName = currentScript ? currentScript.name : "\u573A\u666F";
      renderGeneratedContent(GlobalState.lastGeneratedContent, scriptName);
      updateSceneHistoryNav();
    }
  });
  window.updateSceneHistoryNav = updateSceneHistoryNav;
  let initialScriptId = GlobalState.lastUsedScriptId;
  if (GlobalState.lastGeneratedContent && GlobalState.lastGeneratedScriptId) {
    initialScriptId = GlobalState.lastGeneratedScriptId;
  }
  updateHistoryToggleUI();
  updateModeToggleUI();
  updateFilterUI();
  if (GlobalState.runtimeScripts.length === 0) {
    $("#t-lbl-name").text("\u65E0\u53EF\u7528\u5267\u672C");
    $("#t-lbl-cat").text("\u26A0\uFE0F \u9519\u8BEF");
    $("#t-lbl-desc-mini").text("\u5267\u672C\u6570\u636E\u672A\u52A0\u8F7D\uFF0C\u8BF7\u68C0\u67E5\u63D2\u4EF6\u5B89\u88C5");
    console.error("Titania: runtimeScripts \u4E3A\u7A7A\uFF0C\u5267\u672C\u672A\u52A0\u8F7D");
  } else if (initialScriptId) {
    const initialScript = GlobalState.runtimeScripts.find((s) => s.id === initialScriptId);
    if (initialScript) {
      applyScriptSelection(initialScriptId);
    } else {
      handleRandom();
    }
  } else {
    handleRandom();
  }
  loadContextDataAsync();
  updateSceneHistoryNav();
}
function updateSceneHistoryNav() {
  const navState = getHistoryNavState();
  const $nav = $("#t-scene-nav");
  const $prevBtn = $("#t-nav-prev");
  const $nextBtn = $("#t-nav-next");
  const $indicator = $("#t-nav-indicator");
  const $unread = $("#t-nav-unread");
  if (navState.total > 0) {
    $nav.show();
    $prevBtn.prop("disabled", !navState.hasPrev);
    $nextBtn.prop("disabled", !navState.hasNext);
    $indicator.text(`${navState.current}/${navState.total}`);
    const unreadCount = getUnreadCount();
    if (unreadCount > 0) {
      $unread.text(unreadCount).show();
    } else {
      $unread.hide();
    }
    markCurrentAsRead();
  } else {
    $nav.hide();
  }
}
function loadContextDataAsync() {
  getContextData().then((ctx) => {
    const $charName = $("#t-char-name");
    if ($charName.length) {
      $charName.text(ctx.charName || "\u672A\u77E5\u89D2\u8272");
    }
  }).catch((e) => {
    console.warn("Titania: \u5F02\u6B65\u52A0\u8F7D\u4E0A\u4E0B\u6587\u5931\u8D25", e);
    $("#t-char-name").text("\u672A\u77E5\u89D2\u8272");
  });
  updateWorldInfoBadge().catch((e) => {
    console.warn("Titania: \u66F4\u65B0\u4E16\u754C\u4E66\u5FBD\u7AE0\u5931\u8D25", e);
  });
}
async function updateWorldInfoBadge() {
  const BADGE_TIMEOUT = 8e3;
  try {
    const entriesPromise = getActiveWorldInfoEntries();
    const timeoutPromise = new Promise(
      (_, reject) => setTimeout(() => reject(new Error("\u4E16\u754C\u4E66\u52A0\u8F7D\u8D85\u65F6")), BADGE_TIMEOUT)
    );
    const entries = await Promise.race([entriesPromise, timeoutPromise]);
    let ctx;
    try {
      ctx = await getContextData();
    } catch (e) {
      ctx = { charName: "Char" };
    }
    const data = getExtData();
    let totalCount = 0;
    let selectedCount = 0;
    const charSelections = data.worldinfo?.char_selections?.[ctx.charName] || null;
    entries.forEach((book) => {
      book.entries.forEach((entry) => {
        totalCount++;
        if (charSelections === null) {
          selectedCount++;
        } else {
          const bookSel = charSelections[book.bookName] || [];
          if (bookSel.includes(entry.uid)) {
            selectedCount++;
          }
        }
      });
    });
    const $icon = $("#t-btn-worldinfo");
    if (selectedCount > 0) {
      $icon.css("color", "#90cdf4");
      $icon.attr("title", `\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009 (\u5DF2\u9009 ${selectedCount}/${totalCount})`);
    } else if (totalCount > 0) {
      $icon.css("color", "#bfa15f");
      $icon.attr("title", `\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009 (\u672A\u9009\u62E9\u4EFB\u4F55\u6761\u76EE)`);
    } else {
      $icon.css("color", "");
      $icon.attr("title", "\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009");
    }
  } catch (e) {
    console.warn("Titania: \u66F4\u65B0\u4E16\u754C\u4E66\u56FE\u6807\u72B6\u6001\u5931\u8D25", e);
    $("#t-btn-worldinfo").css("color", "");
  }
}
async function openWorldInfoSelector() {
  if ($("#t-wi-selector").length) return;
  const loadingHtml = `
    <div id="t-wi-selector" class="t-wi-selector">
        <div class="t-wi-header">
            <div style="display:flex; align-items:center; gap:10px;">
                <i class="fa-solid fa-book-atlas" style="color:#90cdf4;"></i>
                <span style="font-weight:bold;">\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009</span>
            </div>
            <div class="t-close" id="t-wi-close">&times;</div>
        </div>
        <div class="t-wi-body" style="display:flex; align-items:center; justify-content:center; min-height:200px;">
            <div style="text-align:center; color:#888;">
                <i class="fa-solid fa-spinner fa-spin" style="font-size:2em; margin-bottom:10px;"></i>
                <div>\u6B63\u5728\u52A0\u8F7D\u4E16\u754C\u4E66\u6570\u636E...</div>
            </div>
        </div>
    </div>`;
  $("#t-main-view").append(loadingHtml);
  $("#t-wi-close").on("click", () => $("#t-wi-selector").remove());
  let ctx, entries;
  try {
    const LOAD_TIMEOUT = 1e4;
    const loadPromise = Promise.all([
      getContextData(),
      getActiveWorldInfoEntries()
    ]);
    const timeoutPromise = new Promise(
      (_, reject) => setTimeout(() => reject(new Error("\u52A0\u8F7D\u8D85\u65F6")), LOAD_TIMEOUT)
    );
    [ctx, entries] = await Promise.race([loadPromise, timeoutPromise]);
  } catch (e) {
    console.error("Titania: \u52A0\u8F7D\u4E16\u754C\u4E66\u6570\u636E\u5931\u8D25", e);
    $("#t-wi-selector .t-wi-body").html(`
            <div style="text-align:center; color:#e74c3c; padding:20px;">
                <i class="fa-solid fa-exclamation-triangle" style="font-size:2em; margin-bottom:10px;"></i>
                <div style="margin-bottom:10px;">\u52A0\u8F7D\u4E16\u754C\u4E66\u6570\u636E\u5931\u8D25</div>
                <div style="font-size:0.9em; color:#888;">${e.message}</div>
                <button class="t-btn" style="margin-top:15px;" onclick="$('#t-wi-selector').remove();">\u5173\u95ED</button>
            </div>
        `);
    return;
  }
  const data = getExtData();
  if (!data.worldinfo) {
    data.worldinfo = { char_selections: {} };
  }
  const charName = ctx.charName;
  const charSelections = data.worldinfo.char_selections[charName] || null;
  const isFirstTime = charSelections === null;
  let totalCount = 0;
  entries.forEach((book) => {
    totalCount += book.entries.length;
  });
  $("#t-wi-selector").remove();
  const html = `
    <div id="t-wi-selector" class="t-wi-selector">
        <div class="t-wi-header">
            <div style="display:flex; align-items:center; gap:10px;">
                <i class="fa-solid fa-book-atlas" style="color:#90cdf4;"></i>
                <span style="font-weight:bold;">\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009</span>
                <span style="font-size:0.8em; color:#666;">${ctx.charName}</span>
            </div>
            <div class="t-close" id="t-wi-close">&times;</div>
        </div>
        
        <div class="t-wi-action-bar" style="display:flex; gap:10px; padding:10px 15px; border-bottom:1px solid #333;">
            <button class="t-btn" id="t-wi-select-all" style="flex:1;">
                <i class="fa-solid fa-check-double"></i> \u5168\u9009
            </button>
            <button class="t-btn" id="t-wi-select-none" style="flex:1;">
                <i class="fa-solid fa-square"></i> \u53D6\u6D88\u5168\u9009
            </button>
        </div>
        
        <div class="t-wi-body" id="t-wi-body">
            ${entries.length === 0 ? '<div class="t-wi-empty">\u5F53\u524D\u89D2\u8272\u6CA1\u6709\u6FC0\u6D3B\u7684\u4E16\u754C\u4E66\u6761\u76EE</div>' : ""}
        </div>
        
        <div class="t-wi-footer">
            <span id="t-wi-stat">\u5DF2\u9009: 0/${totalCount}</span>
            <button class="t-btn primary" id="t-wi-save">\u4FDD\u5B58</button>
        </div>
    </div>`;
  $("#t-main-view").append(html);
  const renderEntries = () => {
    const $body = $("#t-wi-body");
    $body.empty();
    if (entries.length === 0) {
      $body.append('<div class="t-wi-empty">\u5F53\u524D\u89D2\u8272\u6CA1\u6709\u6FC0\u6D3B\u7684\u4E16\u754C\u4E66\u6761\u76EE</div>');
      return;
    }
    entries.forEach((book, bookIdx) => {
      const bookSel = charSelections ? charSelections[book.bookName] || [] : [];
      const selectedInBook = isFirstTime ? 0 : book.entries.filter((e) => bookSel.includes(e.uid)).length;
      const $bookSection = $(`
                <div class="t-wi-book" data-book-idx="${bookIdx}">
                    <div class="t-wi-book-header t-wi-collapsible" title="\u70B9\u51FB\u5C55\u5F00/\u6536\u8D77">
                        <i class="fa-solid fa-caret-right t-wi-collapse-icon"></i>
                        <i class="fa-solid fa-book" style="color:#bfa15f;"></i>
                        <span class="t-wi-book-name">${book.bookName}</span>
                        <span class="t-wi-book-stat">(${selectedInBook}/${book.entries.length})</span>
                        <span class="t-wi-book-toggle" title="\u5168\u9009/\u53D6\u6D88">\u5168\u9009</span>
                    </div>
                    <div class="t-wi-entries t-wi-collapsed" data-book="${book.bookName}"></div>
                </div>
            `);
      const $entriesContainer = $bookSection.find(".t-wi-entries");
      book.entries.forEach((entry) => {
        const isSelected = isFirstTime ? false : bookSel.includes(entry.uid);
        const constantBadge = entry.isConstant ? '<span style="background:#4a9eff33; color:#4a9eff; padding:1px 4px; border-radius:3px; font-size:0.7em; margin-left:5px;">\u84DD\u706F</span>' : "";
        const $entry = $(`
                    <div class="t-wi-entry ${isSelected ? "selected" : ""}" data-uid="${entry.uid}">
                        <div class="t-wi-entry-check">
                            <input type="checkbox" ${isSelected ? "checked" : ""}>
                        </div>
                        <div class="t-wi-entry-content">
                            <div class="t-wi-entry-title">
                                <span class="t-wi-uid">[${entry.uid}]</span>
                                ${entry.comment}
                                ${constantBadge}
                            </div>
                            <div class="t-wi-entry-preview">${entry.preview}${entry.content.length > 80 ? "..." : ""}</div>
                        </div>
                        <div class="t-wi-entry-actions">
                            <i class="fa-solid fa-eye t-wi-preview-btn" title="\u9884\u89C8\u5B8C\u6574\u5185\u5BB9"></i>
                        </div>
                    </div>
                `);
        $entry.find("input").on("change", function(e) {
          e.stopPropagation();
          const checked = $(this).is(":checked");
          $entry.toggleClass("selected", checked);
          updateStat();
          updateBookStat(book.bookName);
        });
        $entry.find(".t-wi-preview-btn").on("click", function(e) {
          e.stopPropagation();
          showEntryPreview(entry.comment, entry.content);
        });
        $entriesContainer.append($entry);
      });
      $bookSection.find(".t-wi-book-header").on("click", function(e) {
        if ($(e.target).hasClass("t-wi-book-toggle")) return;
        const $entries = $bookSection.find(".t-wi-entries");
        const $icon = $bookSection.find(".t-wi-collapse-icon");
        $entries.toggleClass("t-wi-collapsed");
        $icon.toggleClass("t-wi-expanded");
      });
      $bookSection.find(".t-wi-book-toggle").on("click", function(e) {
        e.stopPropagation();
        const $entries = $bookSection.find(".t-wi-entry");
        const allChecked = $entries.length === $entries.find("input:checked").length;
        $entries.find("input").prop("checked", !allChecked);
        $entries.toggleClass("selected", !allChecked);
        $(this).text(allChecked ? "\u5168\u9009" : "\u53D6\u6D88");
        updateStat();
        updateBookStat(book.bookName);
      });
      $body.append($bookSection);
    });
  };
  const updateBookStat = (bookName) => {
    const $book = $(`.t-wi-entries[data-book="${bookName}"]`).closest(".t-wi-book");
    const total = $book.find(".t-wi-entry").length;
    const selected = $book.find(".t-wi-entry input:checked").length;
    $book.find(".t-wi-book-stat").text(`(${selected}/${total})`);
  };
  const showEntryPreview = (title, content) => {
    $(".t-wi-preview-modal").remove();
    const $modal = $(`
            <div class="t-wi-preview-modal">
                <div class="t-wi-preview-box">
                    <div class="t-wi-preview-header">
                        <span class="t-wi-preview-title">${title}</span>
                        <span class="t-wi-preview-close">&times;</span>
                    </div>
                    <div class="t-wi-preview-content">${content.replace(/\n/g, "<br>")}</div>
                </div>
            </div>
        `);
    $modal.on("click", function(e) {
      if (e.target === this) $modal.remove();
    });
    $modal.find(".t-wi-preview-close").on("click", function() {
      $modal.remove();
    });
    $("#t-wi-selector").append($modal);
  };
  const updateStat = () => {
    let total = 0;
    let selected = 0;
    $(".t-wi-entry").each(function() {
      total++;
      if ($(this).find("input").is(":checked")) selected++;
    });
    $("#t-wi-stat").text(`\u5DF2\u9009: ${selected}/${total}`);
  };
  $("#t-wi-select-all").on("click", () => {
    $(".t-wi-entry input[type='checkbox']").prop("checked", true);
    $(".t-wi-entry").addClass("selected");
    updateStat();
  });
  $("#t-wi-select-none").on("click", () => {
    $(".t-wi-entry input[type='checkbox']").prop("checked", false);
    $(".t-wi-entry").removeClass("selected");
    updateStat();
  });
  $("#t-wi-save").on("click", () => {
    const selections = {};
    entries.forEach((book) => {
      const selectedUids = [];
      $(`.t-wi-entries[data-book="${book.bookName}"] .t-wi-entry`).each(function() {
        if ($(this).find("input").is(":checked")) {
          selectedUids.push(parseInt($(this).data("uid")));
        }
      });
      selections[book.bookName] = selectedUids;
    });
    data.worldinfo.char_selections[charName] = selections;
    saveExtData();
    $("#t-wi-selector").remove();
    updateWorldInfoBadge();
    if (window.toastr) toastr.success("\u4E16\u754C\u4E66\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
  });
  $("#t-wi-close").on("click", () => $("#t-wi-selector").remove());
  renderEntries();
  updateStat();
}
function renderFilterMenu(currentFilter, $targetBtn, onSelect) {
  if ($("#t-filter-popover").length) {
    $("#t-filter-popover").remove();
    return;
  }
  const list = GlobalState.runtimeScripts;
  const cats = [...new Set(list.map((s) => s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")))].sort();
  const html = `
    <div id="t-filter-popover" class="t-filter-popover">
        <div class="t-filter-item ${currentFilter === "ALL" ? "active" : ""}" data-val="ALL">
            <span>\u{1F504} \u5168\u90E8</span>
            <i class="fa-solid fa-check t-filter-check"></i>
        </div>
        <div style="height:1px; background:#333; margin:2px 0;"></div>
        ${cats.map((c) => `
            <div class="t-filter-item ${currentFilter === c ? "active" : ""}" data-val="${c}">
                <span>${c}</span>
                <i class="fa-solid fa-check t-filter-check"></i>
            </div>
        `).join("")}
    </div>`;
  $("body").append(html);
  const pop = $("#t-filter-popover");
  const rect = $targetBtn[0].getBoundingClientRect();
  const left = rect.left + 150 > window.innerWidth ? rect.right - 150 : rect.left;
  pop.css({ top: rect.bottom + 5, left });
  $(".t-filter-item").on("click", function() {
    const val = $(this).data("val");
    onSelect(val);
    pop.remove();
    $(document).off("click.closefilter");
  });
  setTimeout(() => {
    $(document).on("click.closefilter", (e) => {
      if (!$(e.target).closest("#t-filter-popover, .t-filter-btn").length) {
        pop.remove();
        $(document).off("click.closefilter");
      }
    });
  }, 10);
}
function showScriptSelector(initialFilter = "ALL") {
  if ($("#t-selector-panel").length) return;
  const list = GlobalState.runtimeScripts;
  let categories = ["\u5168\u90E8"];
  const scriptCats = [...new Set(list.map((s) => s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")))];
  categories = categories.concat(scriptCats.sort());
  let currentSearch = "";
  const html = `
    <div id="t-selector-panel" class="t-selector-panel">
        <div class="t-sel-header">
            <div style="font-weight:bold; color:#ccc;">\u{1F4DA} \u9009\u62E9\u5267\u672C <span style="font-size:0.8em; color:#666; font-weight:normal; margin-left:10px;">(\u5171 ${list.length} \u4E2A)</span></div>
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="text" id="t-sel-search" class="t-sel-search-input" placeholder="\u{1F50D} \u641C\u7D22\u5267\u672C...">
                <div style="cursor:pointer; padding:5px 10px;" id="t-sel-close"><i class="fa-solid fa-xmark"></i></div>
            </div>
        </div>
        <div class="t-sel-body">
            <div class="t-sel-sidebar" id="t-sel-sidebar"></div>
            <div class="t-sel-grid" id="t-sel-grid"></div>
        </div>
    </div>`;
  $("#t-main-view").append(html);
  let currentCat = initialFilter === "ALL" ? "\u5168\u90E8" : initialFilter;
  const renderGrid = () => {
    const $grid = $("#t-sel-grid");
    $grid.empty();
    let filtered = list;
    if (currentCat !== "\u5168\u90E8") {
      filtered = filtered.filter((s) => (s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")) === currentCat);
    }
    if (currentSearch.trim()) {
      const term = currentSearch.toLowerCase();
      filtered = filtered.filter(
        (s) => s.name.toLowerCase().includes(term) || s.desc && s.desc.toLowerCase().includes(term)
      );
    }
    if (filtered.length === 0) {
      const msg = currentSearch.trim() ? `\u672A\u627E\u5230\u5305\u542B "${currentSearch}" \u7684\u5267\u672C` : "\u6B64\u5206\u7C7B\u4E0B\u6682\u65E0\u5267\u672C";
      $grid.append(`<div style="grid-column:1/-1; text-align:center; color:#555; margin-top:50px;">${msg}</div>`);
      return;
    }
    filtered.forEach((s) => {
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
  categories.forEach((cat) => {
    const btn = $(`<div class="t-sel-cat-btn">${cat}</div>`);
    if (cat === currentCat) btn.addClass("active");
    btn.on("click", function() {
      $(".t-sel-cat-btn").removeClass("active");
      $(this).addClass("active");
      currentCat = cat;
      renderGrid();
    });
    $sidebar.append(btn);
  });
  $("#t-sel-search").on("input", function() {
    currentSearch = $(this).val();
    renderGrid();
  });
  renderGrid();
  $("#t-sel-close").on("click", () => $("#t-selector-panel").remove());
}
function renderProfileMenu($targetBtn) {
  if ($("#t-profile-popover").length) {
    $("#t-profile-popover").remove();
    return;
  }
  const data = getExtData();
  const cfg = data.config || {};
  const profiles = cfg.profiles || [];
  const activeId = cfg.active_profile_id;
  const html = `
    <div id="t-profile-popover" class="t-filter-popover" style="width: 200px; z-index: 21000;">
        ${profiles.map((p) => `
            <div class="t-filter-item ${p.id === activeId ? "active" : ""}" data-id="${p.id}" data-name="${p.name}">
                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${p.name}</span>
                <i class="fa-solid fa-check t-filter-check"></i>
            </div>
        `).join("")}
    </div>`;
  $("body").append(html);
  const pop = $("#t-profile-popover");
  const rect = $targetBtn[0].getBoundingClientRect();
  const left = rect.left + 200 > window.innerWidth ? rect.right - 200 : rect.left;
  pop.css({ top: rect.bottom + 10, left });
  $(".t-filter-item", pop).on("click", function() {
    const newId = $(this).data("id");
    const newName = $(this).data("name");
    if (!data.config) data.config = {};
    data.config.active_profile_id = newId;
    saveExtData();
    pop.remove();
    $(document).off("click.closeprofile");
    $targetBtn.css({ "color": "#55efc4", "transform": "scale(1.2)" });
    setTimeout(() => $targetBtn.css({ "color": "", "transform": "" }), 500);
    if (window.toastr) toastr.success(`\u5DF2\u5207\u6362\u81F3\u65B9\u6848\uFF1A${newName}`, "API Profile");
  });
  setTimeout(() => {
    $(document).on("click.closeprofile", (e) => {
      if (!$(e.target).closest("#t-profile-popover, #t-btn-profile").length) {
        pop.remove();
        $(document).off("click.closeprofile");
      }
    });
  }, 10);
}
function openContentEditor() {
  if ($("#t-content-editor").length) return;
  const currentContent = GlobalState.lastGeneratedContent || "";
  const html = `
    <div id="t-content-editor" class="t-content-editor">
        <div class="t-ce-header">
            <div style="display:flex; align-items:center; gap:10px;">
                <i class="fa-solid fa-pen-nib" style="color:#bfa15f;"></i>
                <span style="font-weight:bold;">\u7F16\u8F91\u5185\u5BB9</span>
                <span style="font-size:0.8em; color:#666;">\u76F4\u63A5\u7F16\u8F91 HTML \u6E90\u7801</span>
            </div>
            <div class="t-close" id="t-ce-close">&times;</div>
        </div>
        <div class="t-ce-body">
            <textarea id="t-ce-textarea" class="t-ce-textarea" spellcheck="false"></textarea>
        </div>
        <div class="t-ce-footer">
            <div class="t-ce-stats">
                <span id="t-ce-char-count">\u5B57\u7B26: ${currentContent.length}</span>
            </div>
            <div class="t-ce-actions">
                <button class="t-btn" id="t-ce-cancel">\u53D6\u6D88</button>
                <button class="t-btn" id="t-ce-preview">\u9884\u89C8</button>
                <button class="t-btn primary" id="t-ce-save">\u4FDD\u5B58</button>
            </div>
        </div>
    </div>`;
  $("#t-main-view").append(html);
  const $textarea = $("#t-ce-textarea");
  $textarea.val(currentContent);
  $textarea.on("input", function() {
    const len = $(this).val().length;
    $("#t-ce-char-count").text(`\u5B57\u7B26: ${len}`);
  });
  $("#t-ce-cancel, #t-ce-close").on("click", () => {
    $("#t-content-editor").remove();
  });
  $("#t-ce-preview").on("click", () => {
    const newContent = $textarea.val();
    const currentScript = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastGeneratedScriptId);
    const scriptName = currentScript ? currentScript.name : "\u573A\u666F";
    renderGeneratedContent(newContent, scriptName);
    if (window.toastr) toastr.info("\u9884\u89C8\u5DF2\u66F4\u65B0\uFF0C\u70B9\u51FB\u4FDD\u5B58\u786E\u8BA4\u4FEE\u6539");
  });
  $("#t-ce-save").on("click", () => {
    const newContent = $textarea.val();
    GlobalState.lastGeneratedContent = newContent;
    const currentScript = GlobalState.runtimeScripts.find((s) => s.id === GlobalState.lastGeneratedScriptId);
    const scriptName = currentScript ? currentScript.name : "\u573A\u666F";
    renderGeneratedContent(newContent, scriptName);
    $("#t-content-editor").remove();
    if (window.toastr) toastr.success("\u5185\u5BB9\u5DF2\u66F4\u65B0");
  });
  setTimeout(() => $textarea.focus(), 100);
}
var init_mainWindow = __esm({
  "src/ui/mainWindow.js"() {
    init_storage();
    init_state();
    init_context();
    init_api();
    init_favsWindow();
    init_debugWindow();
    init_scriptManager();
    init_loreReviewWindow();
  }
});

// src/ui/floatingBtn.js
function showSlideMenu() {
  if (slideMenuVisible) return;
  const $btn = $("#titania-float-btn");
  if (!$btn.length) return;
  const btnRect = $btn[0].getBoundingClientRect();
  const btnSize = $btn.outerWidth() || 56;
  const isOnLeft = btnRect.left < window.innerWidth / 2;
  const backdrop = $(`<div id="titania-menu-backdrop"></div>`);
  let menuContent = "";
  if (GlobalState.isGenerating) {
    menuContent = `
            <div class="t-menu-icon-btn cancel" id="titania-cancel-btn" title="\u4E2D\u6B62\u6F14\u7ECE">
                <i class="fa-solid fa-stop"></i>
            </div>
        `;
  } else {
    menuContent = `
            <div class="t-menu-icon-btn main" id="titania-open-main" title="\u6253\u5F00\u5267\u573A">
                <i class="fa-solid fa-masks-theater"></i>
            </div>
            <div class="t-menu-icon-btn lore" id="titania-open-lore" title="\u63D0\u53D6\u8BBE\u5B9A">
                <i class="fa-solid fa-brain"></i>
            </div>
            <div class="t-menu-icon-btn settings" id="titania-open-settings" title="\u8BBE\u7F6E">
                <i class="fa-solid fa-gear"></i>
            </div>
        `;
  }
  const slideMenu = $(`
        <div id="titania-slide-menu" class="t-horizontal">
            ${menuContent}
        </div>
    `);
  const gap = 10;
  const menuTop = btnRect.top + btnSize / 2;
  if (isOnLeft) {
    slideMenu.css({
      left: btnRect.right + gap + "px",
      top: menuTop + "px",
      transform: "translateY(-50%)"
    });
  } else {
    slideMenu.css({
      right: window.innerWidth - btnRect.left + gap + "px",
      top: menuTop + "px",
      transform: "translateY(-50%)"
    });
  }
  $("body").append(backdrop);
  $("body").append(slideMenu);
  requestAnimationFrame(() => {
    backdrop.addClass("show");
    slideMenu.addClass("show");
    slideMenu.find(".t-menu-icon-btn").each(function(index) {
      setTimeout(() => $(this).addClass("show"), index * 40);
    });
  });
  slideMenuVisible = true;
  const bindClick = ($el, handler) => {
    $el.on("click touchend", function(e) {
      e.preventDefault();
      e.stopPropagation();
      handler(e);
    });
  };
  bindClick(slideMenu.find("#titania-cancel-btn"), async () => {
    const { cancelGeneration: cancelGeneration2 } = await Promise.resolve().then(() => (init_api(), api_exports));
    cancelGeneration2();
    hideSlideMenu();
  });
  bindClick(slideMenu.find("#titania-open-main"), () => {
    openMainWindow();
    hideSlideMenu();
  });
  bindClick(slideMenu.find("#titania-open-lore"), () => {
    showLoreReviewWindow();
    hideSlideMenu();
  });
  bindClick(slideMenu.find("#titania-open-settings"), () => {
    openSettingsWindow();
    hideSlideMenu();
  });
  bindClick(backdrop, () => {
    hideSlideMenu();
  });
}
function hideSlideMenu() {
  const $menu = $("#titania-slide-menu");
  const $backdrop = $("#titania-menu-backdrop");
  $menu.removeClass("show");
  $backdrop.removeClass("show");
  setTimeout(() => {
    $menu.remove();
    $backdrop.remove();
  }, 300);
  slideMenuVisible = false;
}
function toggleSlideMenu() {
  if (slideMenuVisible) {
    hideSlideMenu();
  } else {
    showSlideMenu();
  }
}
function showCancelButton() {
}
function hideCancelButton() {
  hideSlideMenu();
}
function startTimer() {
  const settings2 = getExtData();
  const app = settings2.appearance || {};
  GlobalState.timerStartTime = Date.now();
  const $btn = $("#titania-float-btn");
  const animClass = getCurrentAnimationClass();
  $btn.addClass("t-loading " + animClass);
  if (app.show_timer === false) return;
  const $timer = $("#titania-timer");
  $timer.addClass("show").text("0.0");
  updateTimerPosition();
  if (GlobalState.timerInterval) {
    clearInterval(GlobalState.timerInterval);
  }
  GlobalState.timerInterval = setInterval(() => {
    const elapsed = (Date.now() - GlobalState.timerStartTime) / 1e3;
    $timer.text(elapsed.toFixed(1));
  }, 100);
}
function stopTimer() {
  if (GlobalState.timerInterval) {
    clearInterval(GlobalState.timerInterval);
    GlobalState.timerInterval = null;
  }
  const elapsed = Date.now() - GlobalState.timerStartTime;
  GlobalState.lastGenerationTime = elapsed;
  const $btn = $("#titania-float-btn");
  $btn.removeClass("t-loading t-anim-ripple t-anim-arc");
  const settings2 = getExtData();
  const app = settings2.appearance || {};
  if (app.show_timer === false) return;
  const $timer = $("#titania-timer");
  $timer.text((elapsed / 1e3).toFixed(1)).addClass("done");
  setTimeout(() => {
    $timer.removeClass("show done");
  }, 2e3);
}
function updateTimerPosition() {
  const $btn = $("#titania-float-btn");
  const $timer = $("#titania-timer");
  if (!$btn.length || !$timer.length) return;
  const btnRect = $btn[0].getBoundingClientRect();
  const timerWidth = $timer.outerWidth() || 40;
  const timerHeight = $timer.outerHeight() || 20;
  const gap = 6;
  const left = btnRect.left + btnRect.width / 2 - timerWidth / 2;
  const top = btnRect.top - timerHeight - gap;
  $timer.css({
    left: Math.max(5, left) + "px",
    top: Math.max(5, top) + "px"
  });
}
function getCurrentAnimationClass() {
  const settings2 = getExtData();
  const app = settings2.appearance || {};
  const animationType = app.animation || "ripple";
  return ANIMATION_CLASSES[animationType] || ANIMATION_CLASSES.ripple;
}
function createFloatingButton() {
  $("#titania-float-btn").remove();
  $("#titania-timer").remove();
  $("#titania-float-style").remove();
  const settings2 = getExtData();
  if (typeof extension_settings !== "undefined" && extension_settings[extensionName] && !extension_settings[extensionName].enabled) {
    return;
  }
  const app = settings2.appearance || { type: "emoji", content: "\u{1F3AD}", size: 56, animation: "ripple", border_color: "#90cdf4", bg_color: "#2b2b2b", border_opacity: 100, bg_opacity: 100 };
  const size = parseInt(app.size) || 56;
  const animationType = app.animation || "ripple";
  const borderColor = app.border_color || "#90cdf4";
  const bgColor = app.bg_color || "#2b2b2b";
  const borderOpacity = app.border_opacity !== void 0 ? app.border_opacity : 100;
  const bgOpacity = app.bg_opacity !== void 0 ? app.bg_opacity : 100;
  const hexToRgba = (hex, opacity) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return hex;
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };
  const borderColorRgba = hexToRgba(borderColor, borderOpacity);
  const bgColorRgba = hexToRgba(bgColor, bgOpacity);
  const btnContent = app.type === "image" && app.content.startsWith("data:") ? `<img src="${app.content}">` : `<span style="position:relative; z-index:2;">${app.content}</span>`;
  const btn = $(`<div id="titania-float-btn" data-animation="${animationType}">${btnContent}</div>`);
  const timer = $(`<div id="titania-timer">0.0s</div>`);
  btn.css({
    "--t-size": `${size}px`,
    "--t-border-color": borderColor,
    "--t-border-color-rgba": borderColorRgba,
    "--t-bg-color": bgColorRgba,
    "--t-border-opacity": borderOpacity / 100,
    "--t-bg-opacity": bgOpacity / 100
  });
  $("body").append(btn);
  $("body").append(timer);
  let isDragging = false, startX, startY, initialLeft, initialTop;
  btn.on("touchstart mousedown", function(e) {
    isDragging = false;
    const evt = e.type === "touchstart" ? e.originalEvent.touches[0] : e;
    startX = evt.clientX;
    startY = evt.clientY;
    const rect = this.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;
    $(this).css({ "transition": "none", "transform": "none" });
  });
  $(document).on("touchmove mousemove", function(e) {
    if (startX === void 0) return;
    const evt = e.type === "touchmove" ? e.originalEvent.touches[0] : e;
    if (Math.abs(evt.clientX - startX) > 5 || Math.abs(evt.clientY - startY) > 5) isDragging = true;
    let l = initialLeft + (evt.clientX - startX), t = initialTop + (evt.clientY - startY);
    l = Math.max(0, Math.min(window.innerWidth - size, l));
    t = Math.max(0, Math.min(window.innerHeight - size, t));
    btn.css({ left: l + "px", top: t + "px", right: "auto" });
    updateTimerPosition();
  });
  btn.on("touchend mouseup", function(e) {
    if (startX === void 0) return;
    if (isDragging) {
      isDragging = false;
      startX = void 0;
      btn.css({ "transition": "none" });
      updateTimerPosition();
      hideSlideMenu();
      return;
    }
    startX = void 0;
    e.stopPropagation();
    if (e.type === "touchend") e.preventDefault();
    btn.removeClass("t-notify");
    toggleSlideMenu();
  });
  $(document).on("touchend mouseup", function(e) {
    if (startX !== void 0 && isDragging) {
      startX = void 0;
      isDragging = false;
      btn.css({ "transition": "none" });
      updateTimerPosition();
      hideSlideMenu();
    }
  });
}
var slideMenuVisible, ANIMATION_CLASSES;
var init_floatingBtn = __esm({
  "src/ui/floatingBtn.js"() {
    init_storage();
    init_state();
    init_defaults();
    init_mainWindow();
    init_loreReviewWindow();
    init_settingsWindow();
    slideMenuVisible = false;
    ANIMATION_CLASSES = {
      ripple: "t-anim-ripple",
      arc: "t-anim-arc"
    };
  }
});

// src/core/api.js
var api_exports = {};
__export(api_exports, {
  cancelGeneration: () => cancelGeneration,
  handleGenerate: () => handleGenerate,
  renderGeneratedContent: () => renderGeneratedContent
});
import { ChatCompletionService as ChatCompletionService2 } from "../../../custom-request.js";
import { oai_settings as oai_settings2, getChatCompletionModel as getChatCompletionModel2 } from "../../../openai.js";
import { evaluateMacros as evaluateMacros2 } from "../../../macros.js";
function renderGeneratedContent(content, scriptName = "\u573A\u666F") {
  const container = document.getElementById("t-output-content");
  if (!container) {
    TitaniaLogger.warn("renderGeneratedContent: \u5BB9\u5668\u4E0D\u5B58\u5728");
    return;
  }
  TitaniaLogger.info("renderGeneratedContent \u5F00\u59CB", {
    contentLength: content?.length || 0,
    scriptName
  });
  $("#t-interactive-fab").remove();
  try {
    renderToShadowDOMReal(container, content);
    TitaniaLogger.info("Shadow DOM \u6E32\u67D3\u5B8C\u6210");
  } catch (e) {
    TitaniaLogger.error("Shadow DOM \u6E32\u67D3\u5931\u8D25", e);
    container.innerHTML = content;
  }
  const interactiveResult = detectInteractiveContent(content);
  TitaniaLogger.info("\u4E92\u52A8\u68C0\u6D4B\u7ED3\u679C", interactiveResult);
  if (interactiveResult.isInteractive) {
    showInteractiveFAB(scriptName, content, interactiveResult.reasons);
  }
}
function showInteractiveFAB(scriptName, html, reasons) {
  $("#t-interactive-fab").remove();
  const reasonText = reasons.slice(0, 2).join("\u3001");
  const fabHtml = `
    <div id="t-interactive-fab" style="
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 200;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
    ">
        <div id="t-fab-menu" style="
            display: none;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 8px;
        ">
            <div id="t-fab-open" style="
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 14px;
                background: linear-gradient(90deg, #4a9eff, #6ab0ff);
                border-radius: 20px;
                color: #fff;
                font-size: 0.9em;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 3px 12px rgba(74, 158, 255, 0.4);
                white-space: nowrap;
                transition: transform 0.2s, box-shadow 0.2s;
            " title="\u5728\u65B0\u7A97\u53E3\u4E2D\u4F53\u9A8C\u5B8C\u6574\u4EA4\u4E92">
                <i class="fa-solid fa-up-right-from-square"></i>
                <span>\u65B0\u7A97\u53E3\u4F53\u9A8C</span>
            </div>
            <div id="t-fab-export" style="
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 14px;
                background: #2a2a2a;
                border: 1px solid #444;
                border-radius: 20px;
                color: #ccc;
                font-size: 0.9em;
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                white-space: nowrap;
                transition: transform 0.2s, background 0.2s;
            " title="\u5BFC\u51FA\u4E3AHTML\u6587\u4EF6">
                <i class="fa-solid fa-download"></i>
                <span>\u5BFC\u51FAHTML</span>
            </div>
        </div>
        <div id="t-fab-main" style="
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4a9eff, #2d7fd3);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(74, 158, 255, 0.5);
            transition: transform 0.3s, box-shadow 0.3s;
            font-size: 1.5em;
        " title="\u68C0\u6D4B\u5230\u4E92\u52A8\u5185\u5BB9\uFF08${reasonText}\uFF09">
            <span>\u{1F3AE}</span>
        </div>
    </div>`;
  const contentWrapper = document.querySelector(".t-content-wrapper");
  if (contentWrapper) {
    $(contentWrapper).append(fabHtml);
  } else {
    $("#t-main-view").append(fabHtml);
  }
  let isExpanded = false;
  $("#t-fab-main").on("click", function(e) {
    e.stopPropagation();
    isExpanded = !isExpanded;
    if (isExpanded) {
      $("#t-fab-menu").css("display", "flex");
      $(this).css({ "transform": "rotate(45deg)", "background": "#ff6b6b" });
    } else {
      $("#t-fab-menu").css("display", "none");
      $(this).css({ "transform": "rotate(0deg)", "background": "linear-gradient(135deg, #4a9eff, #2d7fd3)" });
    }
  });
  $("#t-fab-main").hover(
    function() {
      if (!isExpanded) $(this).css({ "transform": "scale(1.1)", "box-shadow": "0 6px 20px rgba(74, 158, 255, 0.6)" });
    },
    function() {
      if (!isExpanded) $(this).css({ "transform": "scale(1)", "box-shadow": "0 4px 15px rgba(74, 158, 255, 0.5)" });
    }
  );
  $("#t-fab-open").on("click", function(e) {
    e.stopPropagation();
    openInNewWindow(html, scriptName);
    if (window.toastr) toastr.info("\u5DF2\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00", "Titania");
  }).hover(
    function() {
      $(this).css({ "transform": "scale(1.05)" });
    },
    function() {
      $(this).css({ "transform": "scale(1)" });
    }
  );
  $("#t-fab-export").on("click", function(e) {
    e.stopPropagation();
    exportAsHtmlFile(html, scriptName);
    if (window.toastr) toastr.success("HTML \u5DF2\u4E0B\u8F7D", "Titania");
  }).hover(
    function() {
      $(this).css({ "background": "#383838" });
    },
    function() {
      $(this).css({ "background": "#2a2a2a" });
    }
  );
  $(document).on("click.fabclose", function(e) {
    if (!$(e.target).closest("#t-interactive-fab").length && isExpanded) {
      isExpanded = false;
      $("#t-fab-menu").css("display", "none");
      $("#t-fab-main").css({ "transform": "rotate(0deg)", "background": "linear-gradient(135deg, #4a9eff, #2d7fd3)" });
    }
  });
  TitaniaLogger.info("\u4E92\u52A8\u5185\u5BB9FAB\u5DF2\u663E\u793A", { reasons });
}
function cancelGeneration() {
  if (GlobalState.abortController) {
    GlobalState.abortController.abort();
    GlobalState.abortController = null;
  }
  GlobalState.isGenerating = false;
  stopTimer();
  resetContinuationState();
  hideCancelButton();
  const $floatBtn = $("#titania-float-btn");
  $floatBtn.removeClass("t-loading t-anim-ripple t-anim-arc");
  TitaniaLogger.info("\u7528\u6237\u53D6\u6D88\u4E86\u751F\u6210");
  if (window.toastr) toastr.info("\u23F9\uFE0F \u6F14\u7ECE\u5DF2\u4E2D\u65AD", "Titania");
}
async function handleGenerate(forceScriptId = null, silent = false) {
  const data = getExtData();
  const cfg = data.config || {};
  const dirDefaults = data.director || { instruction: "" };
  const startTime = Date.now();
  let diagnostics = {
    phase: "init",
    profile: "",
    model: "",
    endpoint: "",
    input_stats: { sys_len: 0, user_len: 0 },
    network: { status: 0, statusText: "", contentType: "", latency: 0 },
    stream_stats: { chunks: 0, ttft: 0 },
    raw_response_snippet: ""
  };
  const conn = getActiveConnection();
  diagnostics.profile = conn.profileName;
  diagnostics.model = conn.model;
  diagnostics.endpoint = conn.url;
  const validation = validateConnection();
  if (!validation.valid) {
    const errText = `\u914D\u7F6E\u7F3A\u5931\uFF1A${validation.error}`;
    if (!silent) alert(errText);
    TitaniaLogger.error("\u914D\u7F6E\u9519\u8BEF", errText, diagnostics);
    return;
  }
  TitaniaLogger.info("\u4F7F\u7528\u8FDE\u63A5\u914D\u7F6E", {
    profile: conn.profileName,
    model: conn.model,
    useSTConnection: conn.useSTConnection
  });
  const useSTConnection = conn.useSTConnection;
  const finalUrl = conn.url;
  const finalKey = conn.key;
  const finalModel = conn.model;
  const scriptId = forceScriptId || GlobalState.lastUsedScriptId || $("#t-sel-script").val();
  const script = GlobalState.runtimeScripts.find((s) => s.id === scriptId);
  if (!script) {
    if (!silent) alert("\u8BF7\u9009\u62E9\u5267\u672C");
    return;
  }
  if (!silent) {
    GlobalState.lastUsedScriptId = script.id;
    if ($("#t-main-view").length > 0) applyScriptSelection(script.id);
  }
  const ctx = await getContextData();
  const $floatBtn = $("#titania-float-btn");
  const useStream = cfg.stream !== false;
  if (!GlobalState.skipWorldBookCheck) {
    if (!ctx.worldInfo || ctx.worldInfo.trim() === "" || ctx.worldInfo.trim() === "[World Info / Lore]\n\n") {
      const confirmMsg = "\u4E16\u754C\u4E66\u5DF2\u9009\u4E2D\u7684\u6761\u76EE\u4E3A 0\uFF0C\u662F\u5426\u7EE7\u7EED\u751F\u6210\uFF1F";
      const userConfirmed = await new Promise((resolve) => {
        const confirmHtml = `
                <div id="t-confirm-overlay" style="position:fixed; inset:0; width:100vw; height:100vh; background:rgba(0,0,0,0.7); z-index:99999; display:flex; align-items:center; justify-content:center;">
                    <div style="background:#1e1e1e; border:1px solid #444; border-radius:10px; padding:25px; max-width:400px; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,0.5); margin:auto;">
                        <div style="font-size:2em; margin-bottom:15px;">\u{1F4DA}</div>
                        <div style="color:#fff; margin-bottom:20px; font-size:1.1em;">${confirmMsg}</div>
                        <label style="display:flex; align-items:center; justify-content:center; gap:8px; color:#aaa; font-size:0.9em; margin-bottom:20px; cursor:pointer;">
                            <input type="checkbox" id="t-confirm-skip" style="width:16px; height:16px; cursor:pointer;">
                            <span>\u672C\u6B21\u4F1A\u8BDD\u5185\u4E0D\u518D\u63D0\u793A</span>
                        </label>
                        <div style="display:flex; gap:15px; justify-content:center;">
                            <button id="t-confirm-yes" style="padding:10px 30px; background:#4a9eff; color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:1em;">\u662F</button>
                            <button id="t-confirm-no" style="padding:10px 30px; background:#555; color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:1em;">\u5426</button>
                        </div>
                    </div>
                </div>`;
        $("body").append(confirmHtml);
        $("#t-confirm-yes").on("click", () => {
          if ($("#t-confirm-skip").is(":checked")) {
            GlobalState.skipWorldBookCheck = true;
          }
          $("#t-confirm-overlay").remove();
          resolve(true);
        });
        $("#t-confirm-no").on("click", () => {
          $("#t-confirm-overlay").remove();
          resolve(false);
        });
        $("#t-confirm-overlay").on("click", (e) => {
          if (e.target === e.currentTarget) {
            $("#t-confirm-overlay").remove();
            resolve(false);
          }
        });
      });
      if (!userConfirmed) {
        TitaniaLogger.info("\u7528\u6237\u53D6\u6D88\u751F\u6210\uFF08\u4E16\u754C\u4E66\u6761\u76EE\u4E3A\u7A7A\uFF09");
        return;
      }
    }
  }
  if (!silent) $("#t-overlay").remove();
  GlobalState.abortController = new AbortController();
  const signal = GlobalState.abortController.signal;
  GlobalState.isGenerating = true;
  $floatBtn.addClass("t-loading");
  GlobalState.lastFavId = null;
  $("#t-btn-like").html('<i class="fa-regular fa-heart"></i>').prop("disabled", false);
  showCancelButton();
  startTimer();
  if (!silent && window.toastr) toastr.info(`\u{1F680} [${conn.profileName}] \u6B63\u5728\u8FDE\u63A5\u6A21\u578B\u6F14\u7ECE...`, "Titania Echo");
  try {
    diagnostics.phase = "prepare_prompt";
    const dirInstruction = dirDefaults.instruction || "";
    const styleProfiles = data.style_profiles || [{ id: "default", name: "\u9ED8\u8BA4 (\u65E0)", content: "" }];
    const activeStyleId = data.active_style_id || "default";
    const activeStyleProfile = styleProfiles.find((p) => p.id === activeStyleId) || styleProfiles[0];
    const dStyle = activeStyleProfile ? activeStyleProfile.content : "";
    let sys;
    const customPrompts = data.custom_prompts || {};
    const useCustomPrompts = customPrompts.override_enabled === true;
    const DEFAULT_CONTENT_PROMPT = `You are a creative engine. Output ONLY valid HTML content inside a <div> with Inline CSS. Do NOT use markdown code blocks. Language: Chinese.`;
    const DEFAULT_VISUAL_PROMPT = `You are a Visual Director creating an immersive HTML scene.

[Process]
1. Analyze the mood/emotion of the scenario
2. Choose visual effects that represent the mood
3. Generate HTML with embedded <style>

[Technical Rules]
1. Output HTML with <style> block
2. Use CSS animations, gradients, shadows freely
3. No markdown code blocks
4. Language: Chinese`;
    if (GlobalState.generationMode === "visual") {
      sys = useCustomPrompts && customPrompts.visual_mode?.trim() ? customPrompts.visual_mode.trim() : DEFAULT_VISUAL_PROMPT;
    } else {
      sys = useCustomPrompts && customPrompts.content_mode?.trim() ? customPrompts.content_mode.trim() : DEFAULT_CONTENT_PROMPT;
    }
    let user = `[Roleplay Context]
Character: ${ctx.charName}
User: ${ctx.userName}

`;
    let directorSection = "";
    if (dirInstruction.trim()) {
      directorSection += dirInstruction.trim() + "\n";
    }
    if (dStyle) {
      directorSection += `Style Reference: Mimic this vibe (do not copy text):
<style_ref>
${dStyle.substring(0, 1e3)}
</style_ref>
`;
    }
    if (directorSection) {
      user += `[Director Instructions]
${directorSection}
`;
    }
    if (ctx.persona) user += `[Character Persona]
${ctx.persona}

`;
    if (ctx.userDesc) user += `[User Persona]
${ctx.userDesc}

`;
    if (ctx.worldInfo) user += `[World Info]
${ctx.worldInfo}

`;
    if (GlobalState.useHistoryAnalysis) {
      const limit = cfg.history_limit || 10;
      const historyWhitelistStr = data.history_extraction?.whitelist || "";
      const historyWhitelist = parseWhitelistInput(historyWhitelistStr);
      const history = getChatHistory(limit, historyWhitelist);
      user += history && history.trim().length > 0 ? `[Conversation History]
${history}

` : `[Conversation History]
(Empty)

`;
    }
    let processedPrompt = script.prompt;
    try {
      const macroEnv = {
        char: ctx.charName,
        user: ctx.userName
        // 可以根据需要添加更多环境变量
      };
      processedPrompt = evaluateMacros2(script.prompt, macroEnv);
      TitaniaLogger.info("\u5B8F\u5904\u7406\u5B8C\u6210", {
        original: script.prompt.substring(0, 100),
        processed: processedPrompt.substring(0, 100)
      });
    } catch (e) {
      TitaniaLogger.warn("ST \u5B8F\u5904\u7406\u5931\u8D25\uFF0C\u4F7F\u7528\u7B80\u5355\u66FF\u6362", e);
      processedPrompt = script.prompt.replace(/{{char}}/gi, ctx.charName).replace(/{{user}}/gi, ctx.userName);
    }
    user += `[Scenario Request]
${processedPrompt}`;
    diagnostics.input_stats.sys_len = sys.length;
    diagnostics.input_stats.user_len = user.length;
    TitaniaLogger.info(`\u5F00\u59CB\u751F\u6210: ${script.name}`, { profile: conn.profileName });
    diagnostics.phase = "fetch_start";
    let rawContent = "";
    if (useSTConnection) {
      diagnostics.endpoint = `[ST Backend: ${oai_settings2.chat_completion_source}]`;
      const requestData = ChatCompletionService2.createRequestData({
        stream: useStream,
        messages: [{ role: "system", content: sys }, { role: "user", content: user }],
        chat_completion_source: oai_settings2.chat_completion_source,
        model: finalModel,
        max_tokens: oai_settings2.openai_max_tokens || 2048,
        temperature: oai_settings2.temp_openai || 0.7,
        // 传递反代/自定义配置
        custom_url: oai_settings2.custom_url,
        reverse_proxy: oai_settings2.reverse_proxy,
        proxy_password: oai_settings2.proxy_password,
        custom_prompt_post_processing: oai_settings2.custom_prompt_post_processing
      });
      diagnostics.phase = useStream ? "streaming" : "parsing_json";
      if (useStream) {
        const streamGenerator = await ChatCompletionService2.sendRequest(requestData, false, null);
        if (typeof streamGenerator === "function") {
          let chunkCount = 0;
          for await (const chunk of streamGenerator()) {
            if (chunkCount === 0) diagnostics.stream_stats.ttft = Date.now() - startTime;
            chunkCount++;
            diagnostics.stream_stats.chunks = chunkCount;
            rawContent = chunk.text || "";
          }
          if (chunkCount === 0) throw new Error("Stream Empty");
        } else {
          rawContent = streamGenerator?.content || "";
        }
      } else {
        const result = await ChatCompletionService2.sendRequest(requestData, true, null);
        rawContent = result?.content || "";
      }
      diagnostics.network.latency = Date.now() - startTime;
      diagnostics.network.status = 200;
    } else {
      let endpoint = finalUrl.trim().replace(/\/+$/, "");
      if (!endpoint) throw new Error("ERR_CONFIG: API URL \u672A\u8BBE\u7F6E");
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
        }),
        signal
      });
      diagnostics.network.status = res.status;
      diagnostics.network.latency = Date.now() - startTime;
      if (!res.ok) {
        try {
          diagnostics.raw_response_snippet = (await res.text()).substring(0, 500);
        } catch (e) {
        }
        throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
      }
      diagnostics.phase = useStream ? "streaming" : "parsing_json";
      if (useStream) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";
        let chunkCount = 0;
        try {
          while (true) {
            if (signal.aborted) {
              await reader.cancel();
              throw new DOMException("Generation aborted", "AbortError");
            }
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
              } catch (e) {
              }
            }
          }
        } catch (streamErr) {
          throw new Error(`Stream Interrupted: ${streamErr.message}`);
        }
        if (chunkCount === 0) throw new Error("Stream Empty");
      } else {
        const jsonText = await res.text();
        try {
          const json = JSON.parse(jsonText);
          rawContent = json.choices?.[0]?.message?.content || "";
        } catch (jsonErr) {
          throw new Error("Invalid JSON");
        }
      }
    }
    if (!rawContent || rawContent.trim().length === 0) throw new Error("ERR_EMPTY_CONTENT");
    diagnostics.phase = "validation";
    let cleanContent = sanitizeAIOutput(rawContent);
    let finalOutput = cleanContent;
    const autoContinueCfg = data.auto_continue || {};
    if (autoContinueCfg.enabled) {
      const truncationResult = detectTruncation(finalOutput, autoContinueCfg.detection_mode || "html");
      if (truncationResult.isTruncated) {
        const maxRetries = autoContinueCfg.max_retries || 2;
        const currentRetry = GlobalState.continuation.retryCount;
        if (currentRetry < maxRetries) {
          TitaniaLogger.warn("\u68C0\u6D4B\u5230\u5185\u5BB9\u622A\u65AD\uFF0C\u51C6\u5907\u81EA\u52A8\u7EED\u5199", {
            reason: truncationResult.reason,
            retryCount: currentRetry + 1,
            maxRetries
          });
          if (!GlobalState.continuation.isActive) {
            GlobalState.continuation.isActive = true;
            GlobalState.continuation.originalContent = finalOutput;
            GlobalState.continuation.accumulatedContent = finalOutput;
            GlobalState.continuation.originalPrompt = script.prompt.replace(/{{char}}/g, ctx.charName).replace(/{{user}}/g, ctx.userName);
            GlobalState.continuation.characterName = ctx.charName;
            GlobalState.continuation.userName = ctx.userName;
          } else {
            GlobalState.continuation.accumulatedContent = mergeContinuationContent(
              GlobalState.continuation.accumulatedContent,
              finalOutput,
              autoContinueCfg.show_indicator !== false
            );
          }
          GlobalState.continuation.retryCount++;
          if (!silent && window.toastr) {
            toastr.info(`\u{1F504} \u68C0\u6D4B\u5230\u622A\u65AD\uFF0C\u6B63\u5728\u81EA\u52A8\u7EED\u5199 (${currentRetry + 1}/${maxRetries})...`, "Titania Echo");
          }
          await performContinuation(script, ctx, cfg, finalUrl, finalKey, finalModel, autoContinueCfg, silent, useSTConnection);
          return;
        } else {
          TitaniaLogger.warn("\u5DF2\u8FBE\u5230\u6700\u5927\u7EED\u5199\u6B21\u6570", { maxRetries });
          if (!silent && window.toastr) {
            toastr.warning(`\u26A0\uFE0F \u5DF2\u5C1D\u8BD5\u7EED\u5199 ${maxRetries} \u6B21\uFF0C\u5185\u5BB9\u53EF\u80FD\u4ECD\u4E0D\u5B8C\u6574`, "Titania Echo");
          }
          if (GlobalState.continuation.accumulatedContent) {
            finalOutput = GlobalState.continuation.accumulatedContent;
          }
        }
      } else if (GlobalState.continuation.isActive) {
        finalOutput = mergeContinuationContent(
          GlobalState.continuation.accumulatedContent,
          finalOutput,
          autoContinueCfg.show_indicator !== false
        );
        TitaniaLogger.info("\u81EA\u52A8\u7EED\u5199\u5B8C\u6210", { totalRetries: GlobalState.continuation.retryCount });
      }
    }
    resetContinuationState();
    pushSceneToHistory(finalOutput, script.id, script.name);
    diagnostics.phase = "complete";
    if ($("#t-output-content").length > 0) {
      renderGeneratedContent(finalOutput, script.name);
      if (typeof window.updateSceneHistoryNav === "function") {
        window.updateSceneHistoryNav();
      }
    }
    stopTimer();
    const elapsed = GlobalState.lastGenerationTime / 1e3;
    if (!silent && window.toastr) toastr.success(`\u2728 \u300A${script.name}\u300B\u6F14\u7ECE\u5B8C\u6210\uFF01(${elapsed.toFixed(1)}s)`, "Titania Echo");
    $floatBtn.addClass("t-notify");
  } catch (e) {
    if (e.name === "AbortError") {
      return;
    }
    console.error("Titania Generate Error:", e);
    stopTimer();
    hideCancelButton();
    resetContinuationState();
    diagnostics.network.latency = Date.now() - startTime;
    diagnostics.phase += "_failed";
    TitaniaLogger.error("\u751F\u6210\u8FC7\u7A0B\u53D1\u751F\u5F02\u5E38", e, diagnostics);
    const errHtml = `<div style="color:#ff6b6b; text-align:center; padding:20px; border:1px dashed #ff6b6b; background: rgba(255,107,107,0.1); border-radius:8px;">
            <div style="font-size:3em; margin-bottom:10px;"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <div style="font-weight:bold; margin-bottom:5px;">\u6F14\u7ECE\u51FA\u9519\u4E86</div>
            <div style="font-size:0.9em; margin-bottom:15px; color:#faa;">${e.message || "\u672A\u77E5\u9519\u8BEF"}</div>
            <div style="font-size:0.8em; color:#ccc; background:#222; padding:10px; border-radius:4px; text-align:left;">
                \u8BCA\u65AD\u63D0\u793A\uFF1AAPI\u8C03\u7528\u5931\u8D25\u6216\u5185\u5BB9\u89E3\u6790\u9519\u8BEF\u3002<br>\u8BF7\u68C0\u67E5 Key \u4F59\u989D\u6216\u7F51\u7EDC\u8FDE\u63A5\u3002
            </div>
        </div>`;
    GlobalState.lastGeneratedContent = errHtml;
    GlobalState.lastGeneratedScriptId = script.id;
    $floatBtn.addClass("t-notify");
    if (!silent && window.toastr) toastr.error("\u751F\u6210\u5931\u8D25", "Titania Error");
  } finally {
    GlobalState.isGenerating = false;
    GlobalState.abortController = null;
    $floatBtn.removeClass("t-loading");
    hideCancelButton();
  }
}
async function performContinuation(script, ctx, cfg, finalUrl, finalKey, finalModel, autoContinueCfg, silent, useSTConnection = false) {
  const $floatBtn = $("#titania-float-btn");
  const useStream = cfg.stream !== false;
  const signal = GlobalState.abortController?.signal;
  try {
    const context = buildContinuationContext(
      GlobalState.continuation.accumulatedContent,
      GlobalState.continuation.originalPrompt
    );
    const continuationSys = `You are seamlessly continuing an interrupted HTML scene.

[Story Context]
Character: ${GlobalState.continuation.characterName}
User: ${GlobalState.continuation.userName}
Original Request: ${context.originalPrompt}

[Story Progress]
Plot so far: ${context.plotSummary}
Total written: ~${context.totalLength} characters

[Technical State]
Unclosed HTML tags: ${context.unclosedTags.length > 0 ? context.unclosedTags.join(", ") : "None"}
Ends with punctuation: ${context.endsWithPunctuation ? "Yes" : "No"}
${context.incompleteText ? `Incomplete sentence fragment: "${context.incompleteText}"` : ""}

[Critical Rules]
1. **SEAMLESS JOIN**: Your output will be DIRECTLY APPENDED. Do NOT repeat any existing content.
2. **COMPLETE FIRST**: ${context.unclosedTags.length > 0 ? `Close these tags first: </${context.unclosedTags.join(">, </")}>` : context.incompleteText ? "Complete the unfinished sentence first." : "Start with new content."}
3. **CONTINUE NATURALLY**: Write 300-500 more characters to reach a natural conclusion.
4. **FORMAT**: Output raw HTML only. No markdown code blocks. Language: Chinese.

[IMPORTANT - DO NOT REPEAT]
The last complete sentence was: "${context.lastCompleteSentence}"
Do NOT write this sentence again. Start from what comes AFTER it.`;
    const continuationUser = `[Recent HTML - For Style Matching]
${context.recentHtml}

[Continue from here]
${context.incompleteText ? `Complete this first: "...${context.incompleteText}"` : `Start after: "${context.lastCompleteSentence.slice(-30)}"`}

Generate ONLY the continuation (no repetition):`;
    let rawContent = "";
    if (useSTConnection) {
      const requestData = ChatCompletionService2.createRequestData({
        stream: useStream,
        messages: [
          { role: "system", content: continuationSys },
          { role: "user", content: continuationUser }
        ],
        chat_completion_source: oai_settings2.chat_completion_source,
        model: finalModel,
        max_tokens: oai_settings2.openai_max_tokens || 2048,
        temperature: oai_settings2.temp_openai || 0.7,
        custom_url: oai_settings2.custom_url,
        reverse_proxy: oai_settings2.reverse_proxy,
        proxy_password: oai_settings2.proxy_password,
        custom_prompt_post_processing: oai_settings2.custom_prompt_post_processing
      });
      if (useStream) {
        const streamGenerator = await ChatCompletionService2.sendRequest(requestData, false, null);
        if (typeof streamGenerator === "function") {
          for await (const chunk of streamGenerator()) {
            rawContent = chunk.text || "";
          }
        } else {
          rawContent = streamGenerator?.content || "";
        }
      } else {
        const result = await ChatCompletionService2.sendRequest(requestData, true, null);
        rawContent = result?.content || "";
      }
    } else {
      let endpoint = finalUrl.trim().replace(/\/+$/, "");
      if (!endpoint.endsWith("/chat/completions")) {
        if (endpoint.endsWith("/v1")) endpoint += "/chat/completions";
        else endpoint += "/v1/chat/completions";
      }
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${finalKey}` },
        body: JSON.stringify({
          model: finalModel,
          messages: [
            { role: "system", content: continuationSys },
            { role: "user", content: continuationUser }
          ],
          stream: useStream
        }),
        signal
      });
      if (!res.ok) {
        throw new Error(`Continuation HTTP Error ${res.status}: ${res.statusText}`);
      }
      if (useStream) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";
        while (true) {
          if (signal?.aborted) {
            await reader.cancel();
            throw new DOMException("Continuation aborted", "AbortError");
          }
          const { done, value } = await reader.read();
          if (done) break;
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
            }
          }
        }
      } else {
        const jsonText = await res.text();
        try {
          const json = JSON.parse(jsonText);
          rawContent = json.choices?.[0]?.message?.content || "";
        } catch (jsonErr) {
          throw new Error("Continuation Invalid JSON");
        }
      }
    }
    if (!rawContent || rawContent.trim().length === 0) {
      throw new Error("ERR_EMPTY_CONTINUATION");
    }
    let cleanContent = sanitizeAIOutput(rawContent);
    let continuationOutput = cleanContent;
    const truncationResult = detectTruncation(continuationOutput, autoContinueCfg.detection_mode || "html");
    const maxRetries = autoContinueCfg.max_retries || 2;
    if (truncationResult.isTruncated && GlobalState.continuation.retryCount < maxRetries) {
      GlobalState.continuation.accumulatedContent = smartMergeContinuation(
        GlobalState.continuation.accumulatedContent,
        continuationOutput,
        false
        // 内部合并不显示标记
      );
      GlobalState.continuation.retryCount++;
      if (!silent && window.toastr) {
        toastr.info(`\u{1F504} \u7EED\u5199\u5185\u5BB9\u4ECD\u88AB\u622A\u65AD\uFF0C\u7EE7\u7EED\u5C1D\u8BD5 (${GlobalState.continuation.retryCount}/${maxRetries})...`, "Titania Echo");
      }
      await performContinuation(script, ctx, cfg, finalUrl, finalKey, finalModel, autoContinueCfg, silent, useSTConnection);
    } else {
      const finalOutput = smartMergeContinuation(
        GlobalState.continuation.accumulatedContent,
        continuationOutput,
        autoContinueCfg.show_indicator === true
        // 只有明确开启时才显示标记
      );
      const totalRetries = GlobalState.continuation.retryCount;
      resetContinuationState();
      pushSceneToHistory(finalOutput, script.id, script.name);
      if ($("#t-output-content").length > 0) {
        renderGeneratedContent(finalOutput, script.name);
        if (typeof window.updateSceneHistoryNav === "function") {
          window.updateSceneHistoryNav();
        }
      }
      stopTimer();
      const elapsed = GlobalState.lastGenerationTime / 1e3;
      if (!silent && window.toastr) {
        toastr.success(`\u2728 \u300A${script.name}\u300B\u6F14\u7ECE\u5B8C\u6210\uFF01(\u542B${totalRetries}\u6B21\u7EED\u5199, ${elapsed.toFixed(1)}s)`, "Titania Echo");
      }
      $floatBtn.addClass("t-notify");
      TitaniaLogger.info("\u81EA\u52A8\u7EED\u5199\u5B8C\u6210", {
        scriptName: script.name,
        totalRetries,
        elapsed: elapsed.toFixed(1) + "s"
      });
    }
  } catch (e) {
    if (e.name === "AbortError") {
      return;
    }
    console.error("Titania Continuation Error:", e);
    TitaniaLogger.error("\u7EED\u5199\u8FC7\u7A0B\u53D1\u751F\u5F02\u5E38", e);
    if (GlobalState.continuation.accumulatedContent) {
      GlobalState.lastGeneratedContent = GlobalState.continuation.accumulatedContent;
      GlobalState.lastGeneratedScriptId = script.id;
      if (!silent && window.toastr) {
        toastr.warning("\u26A0\uFE0F \u7EED\u5199\u5931\u8D25\uFF0C\u663E\u793A\u5DF2\u83B7\u53D6\u7684\u5185\u5BB9", "Titania Echo");
      }
    }
    resetContinuationState();
    stopTimer();
    $floatBtn.addClass("t-notify");
  } finally {
    GlobalState.isGenerating = false;
    GlobalState.abortController = null;
    $floatBtn.removeClass("t-loading");
    hideCancelButton();
  }
}
var init_api = __esm({
  "src/core/api.js"() {
    init_storage();
    init_state();
    init_logger();
    init_context();
    init_helpers();
    init_floatingBtn();
    init_mainWindow();
    init_connection();
  }
});

// src/entry.js
init_defaults();
init_storage();
init_dom();
init_state();
init_scriptData();
init_api();
init_worldInfoManager();
init_floatingBtn();
init_settingsWindow();
init_mainWindow();
import { extension_settings as extension_settings3 } from "../../../extensions.js";
import { saveSettingsDebounced as saveSettingsDebounced2, eventSource as eventSource2, event_types as event_types2 } from "../../../../script.js";
async function onGenerationEnded() {
  const extData = getExtData();
  const cfg = extData.config || {};
  if (!cfg.auto_generate) return;
  if (GlobalState.isGenerating || $("#t-overlay").length > 0) return;
  if (!SillyTavern || !SillyTavern.getContext) return;
  const context = SillyTavern.getContext();
  const chat = context.chat;
  if (!chat || chat.length === 0) return;
  const lastMsg = chat[chat.length - 1];
  if (lastMsg.is_user) return;
  if (lastMsg.is_system) return;
  if (lastMsg.is_hidden) return;
  const chance = cfg.auto_chance || 50;
  if (Math.random() * 100 > chance) return;
  const getCat = (s) => s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B");
  let pool = [];
  const autoMode = cfg.auto_mode || "random";
  if (autoMode === "category") {
    const allowedCats = cfg.auto_categories || [];
    if (allowedCats.length === 0) {
      console.log("Titania Auto: Category mode selected but whitelist is empty.");
      return;
    }
    pool = GlobalState.runtimeScripts.filter((s) => allowedCats.includes(getCat(s)));
  } else {
    pool = GlobalState.runtimeScripts;
  }
  if (pool.length === 0) return;
  const randomScript = pool[Math.floor(Math.random() * pool.length)];
  console.log(`Titania Auto: Triggered [${autoMode}] -> Use script: ${randomScript.name}`);
  setTimeout(() => {
    handleGenerate(randomScript.id, true);
  }, 500);
}
function injectOptionsMenuItem() {
  if ($("#option_titania_theater").length > 0) return;
  const menuItem = `
        <hr class="titania-divider">
        <a id="option_titania_theater" title="\u6253\u5F00\u56DE\u58F0\u5C0F\u5267\u573A">
            <i class="fa-lg fa-solid fa-masks-theater"></i>
            <span>\u56DE\u58F0\u5C0F\u5267\u573A</span>
        </a>
    `;
  $("#options .options-content").append(menuItem);
  $("#option_titania_theater").on("click", function() {
    if (GlobalState.isGenerating) {
      if (window.toastr) toastr.info("\u{1F3AD} \u5C0F\u5267\u573A\u6B63\u5728\u540E\u53F0\u6F14\u7ECE\u4E2D\uFF0C\u8BF7\u7A0D\u5019...", "Titania Echo");
      return;
    }
    openMainWindow();
  });
  console.log("Titania: \u83DC\u5355\u5165\u53E3\u5DF2\u6CE8\u5165");
}
function initCoreFeatures() {
  console.log(`Titania Echo v${CURRENT_VERSION}: Core initialized.`);
  const extData = getExtData();
  if ((!extData.config || Object.keys(extData.config).length === 0) && localStorage.getItem(LEGACY_KEYS.CFG)) {
    try {
      console.log("Titania: Migrating legacy data...");
      const oldCfg = JSON.parse(localStorage.getItem(LEGACY_KEYS.CFG));
      const oldScripts = JSON.parse(localStorage.getItem(LEGACY_KEYS.SCRIPTS));
      const oldFavs = JSON.parse(localStorage.getItem(LEGACY_KEYS.FAVS));
      let migrated = false;
      if (oldCfg) {
        extData.config = oldCfg;
        migrated = true;
      }
      if (oldScripts) {
        extData.user_scripts = oldScripts;
        migrated = true;
      }
      if (oldFavs) {
        extData.favs = oldFavs;
        migrated = true;
      }
      if (migrated) {
        saveExtData();
        if (window.toastr) toastr.success("\u6570\u636E\u5DF2\u8FC1\u79FB\u81F3\u670D\u52A1\u7AEF", "Titania Echo");
      }
    } catch (e) {
      console.error("Titania: Migration failed", e);
    }
  }
  loadScripts();
  injectOptionsMenuItem();
  if (extData.custom_css) {
    applyCustomCSS(extData.custom_css);
  }
  if (extData.font_settings) {
    applyFontSettings(extData.font_settings);
  }
  eventSource2.on(event_types2.GENERATION_ENDED, onGenerationEnded);
  initSyncListener();
}
function showFloatingButton() {
  createFloatingButton();
  console.log("Titania: \u60AC\u6D6E\u7403\u5DF2\u663E\u793A");
}
function hideFloatingButton() {
  $("#titania-float-btn").remove();
  $("#titania-timer").remove();
  console.log("Titania: \u60AC\u6D6E\u7403\u5DF2\u9690\u85CF");
}
async function loadExtensionSettings() {
  extension_settings3[extensionName] = extension_settings3[extensionName] || {};
  if (Object.keys(extension_settings3[extensionName]).length === 0) {
    Object.assign(extension_settings3[extensionName], defaultSettings);
  }
  $("#titania-version-badge").text(`v${CURRENT_VERSION}`);
  initCoreFeatures();
  $("#enable_echo_theater").prop("checked", extension_settings3[extensionName].enabled);
  $("#enable_echo_theater").on("input", function() {
    const showFloatBtn = $(this).prop("checked");
    extension_settings3[extensionName].enabled = showFloatBtn;
    saveSettingsDebounced2();
    if (showFloatBtn) {
      showFloatingButton();
    } else {
      hideFloatingButton();
    }
  });
  if (extension_settings3[extensionName].enabled) {
    showFloatingButton();
  }
  checkVersionUpdate();
}
var remoteVersionCache = null;
async function checkVersionUpdate() {
  try {
    const remoteVersion = await fetchRemoteVersion();
    if (!remoteVersion) {
      $("#titania-new-badge").hide();
      $("#titania-update-section").hide();
      return;
    }
    if (compareVersions(remoteVersion, CURRENT_VERSION) > 0) {
      $("#titania-new-badge").show().addClass("update-available").attr("title", `\u53D1\u73B0\u65B0\u7248\u672C v${remoteVersion}`).text("NEW");
      $("#titania-update-section").show();
      $("#titania-remote-version").text(`v${remoteVersion}`);
      $("#titania-new-badge").off("click").on("click", (e) => {
        e.stopPropagation();
        const drawer = $("#titania-settings-drawer");
        if (!drawer.hasClass("open")) {
          drawer.find(".inline-drawer-toggle").click();
        }
      });
      $("#titania-update-btn").off("click").on("click", () => {
        showUpdateConfirmDialog(remoteVersion);
      });
      console.log(`Titania: \u53D1\u73B0\u66F4\u65B0 v${remoteVersion}\uFF0C\u5F53\u524D\u7248\u672C v${CURRENT_VERSION}`);
    } else {
      $("#titania-new-badge").hide();
      $("#titania-update-section").hide();
    }
  } catch (e) {
    console.warn("Titania: \u8FDC\u7A0B\u7248\u672C\u68C0\u6D4B\u5931\u8D25", e);
    $("#titania-new-badge").hide();
    $("#titania-update-section").hide();
  }
}
async function fetchRemoteVersion() {
  if (remoteVersionCache) return remoteVersionCache;
  try {
    const url = `${GITHUB_API_URL}?t=${Date.now()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/vnd.github.v3+json"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    if (data.content) {
      const base64 = data.content.replace(/\n/g, "");
      const binaryString = atob(base64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const decodedContent = new TextDecoder("utf-8").decode(bytes);
      const manifest = JSON.parse(decodedContent);
      remoteVersionCache = manifest.version;
      return manifest.version;
    }
    return null;
  } catch (e) {
    console.warn("Titania: \u83B7\u53D6\u8FDC\u7A0B\u7248\u672C\u5931\u8D25", e);
    return null;
  }
}
function compareVersions(v1, v2) {
  const parts1 = v1.split(".").map(Number);
  const parts2 = v2.split(".").map(Number);
  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const p1 = parts1[i] || 0;
    const p2 = parts2[i] || 0;
    if (p1 > p2) return 1;
    if (p1 < p2) return -1;
  }
  return 0;
}
var remoteChangelogCache = null;
async function fetchRemoteChangelog() {
  if (remoteChangelogCache) return remoteChangelogCache;
  try {
    const url = `${GITHUB_CHANGELOG_API_URL}?t=${Date.now()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/vnd.github.v3+json"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    if (data.content) {
      const base64 = data.content.replace(/\n/g, "");
      const binaryString = atob(base64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const decodedContent = new TextDecoder("utf-8").decode(bytes);
      const changelog = JSON.parse(decodedContent);
      remoteChangelogCache = changelog;
      return changelog;
    }
    return null;
  } catch (e) {
    console.warn("Titania: \u83B7\u53D6\u8FDC\u7A0B changelog \u5931\u8D25", e);
    return null;
  }
}
function getChangelogSinceVersion(currentVersion, remoteVersion, changelog) {
  const updates = [];
  const versions = Object.keys(changelog).sort((a, b) => compareVersions(b, a));
  for (const ver of versions) {
    if (compareVersions(ver, currentVersion) > 0 && compareVersions(ver, remoteVersion) <= 0) {
      updates.push({
        version: ver,
        content: changelog[ver]
      });
    }
  }
  return updates;
}
async function showUpdateConfirmDialog(remoteVersion) {
  if ($(".titania-update-overlay").length) return;
  const loadingHtml = `
    <div class="titania-update-overlay">
        <div class="titania-update-dialog">
            <div class="titania-update-header">
                <span><i class="fa-solid fa-arrow-up-right-from-square"></i> \u53D1\u73B0\u65B0\u7248\u672C</span>
                <span class="titania-update-close">&times;</span>
            </div>
            <div class="titania-update-body" style="text-align: center; padding: 40px;">
                <i class="fa-solid fa-spinner fa-spin" style="font-size: 24px; color: #90cdf4;"></i>
                <p style="margin-top: 15px; color: #a0aec0;">\u6B63\u5728\u83B7\u53D6\u66F4\u65B0\u65E5\u5FD7...</p>
            </div>
        </div>
    </div>`;
  $("body").append(loadingHtml);
  $(".titania-update-close").on("click", () => {
    $(".titania-update-overlay").remove();
  });
  let changelog = await fetchRemoteChangelog();
  if (!changelog) {
    changelog = CHANGELOG;
  }
  const updates = getChangelogSinceVersion(CURRENT_VERSION, remoteVersion, changelog);
  let changelogContent = "";
  if (updates.length > 0) {
    updates.forEach((item) => {
      changelogContent += `<div class="titania-changelog-version">v${item.version}</div>`;
      changelogContent += `<div class="titania-changelog-content">${item.content}</div>`;
    });
  } else {
    changelogContent = `<p>v${remoteVersion} \u5DF2\u53D1\u5E03</p>`;
  }
  $(".titania-update-overlay").remove();
  const html = `
    <div class="titania-update-overlay">
        <div class="titania-update-dialog">
            <div class="titania-update-header">
                <span><i class="fa-solid fa-arrow-up-right-from-square"></i> \u53D1\u73B0\u65B0\u7248\u672C</span>
                <span class="titania-update-close">&times;</span>
            </div>
            <div class="titania-update-body">
                <div class="titania-version-compare">
                    <div class="titania-version-box">
                        <div class="titania-version-label">\u5F53\u524D\u7248\u672C</div>
                        <div class="titania-version-num old">v${CURRENT_VERSION}</div>
                    </div>
                    <div class="titania-version-arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div class="titania-version-box">
                        <div class="titania-version-label">\u6700\u65B0\u7248\u672C</div>
                        <div class="titania-version-num new">v${remoteVersion}</div>
                    </div>
                </div>
                <div class="titania-changelog-title">\u{1F4CB} \u66F4\u65B0\u5185\u5BB9\uFF1A</div>
                <div class="titania-changelog-list">
                    ${changelogContent}
                </div>
            </div>
            <div class="titania-update-footer">
                <button class="titania-btn-cancel" id="titania-update-cancel">\u7A0D\u540E\u518D\u8BF4</button>
                <button class="titania-btn-confirm" id="titania-update-confirm">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> \u524D\u5F80\u66F4\u65B0
                </button>
            </div>
        </div>
    </div>`;
  $("body").append(html);
  $("#titania-update-cancel, .titania-update-close").on("click", () => {
    $(".titania-update-overlay").remove();
  });
  $("#titania-update-confirm").on("click", function() {
    $(".titania-update-overlay").remove();
    $("#extensions_details").click();
    if (window.toastr) {
      toastr.info("\u8BF7\u5728\u6269\u5C55\u7BA1\u7406\u5668\u4E2D\u627E\u5230\u300C\u56DE\u58F0\u5C0F\u5267\u573A\u300D\u5E76\u70B9\u51FB\u66F4\u65B0\u6309\u94AE", "Titania Echo");
    }
  });
  $(".titania-update-overlay").on("click", function(e) {
    if (e.target === this) {
      $(".titania-update-overlay").remove();
    }
  });
}
jQuery(async () => {
  loadCssFiles();
  try {
    const settingsHtml = await $.get(`${extensionFolderPath}/settings.html`);
    $("#extensions_settings2").append(settingsHtml);
    loadExtensionSettings();
  } catch (e) {
    console.error("Titania Echo: Failed to load settings.html", e);
  }
});
