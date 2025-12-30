/**
 * Titania Theater (回声小剧场)
 * Bundled with esbuild
 * 
 * 这是打包后的单文件版本。
 * 源代码请查看：https://github.com/Titania-elf/titania-theater
 */


// src/entry.js
import { extension_settings as extension_settings3 } from "../../../extensions.js";
import { saveSettingsDebounced as saveSettingsDebounced2, eventSource, event_types } from "../../../../script.js";

// src/config/defaults.js
var extensionName = "Titania_Theater_Echo";
var extensionFolderPath = `scripts/extensions/third-party/titania-theater`;
var CURRENT_VERSION = "3.0.2";
var GITHUB_REPO = "Titania-elf/titania-theater";
var GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/manifest.json`;
var CHANGELOG = `
<h3>v3.0.2 \u7A33\u5B9A\u6027\u4FEE\u590D \u{1F6E1}\uFE0F</h3>
<p>\u672C\u6B21\u66F4\u65B0\u91CD\u70B9\u4FEE\u590D\u4E86\u4E3B\u754C\u9762\u5361\u4F4F\u95EE\u9898\uFF0C\u5E76\u4F18\u5316\u4E86\u591A\u9879\u4F53\u9A8C\uFF1A</p>

<h4>\u{1F41B} \u95EE\u9898\u4FEE\u590D</h4>
<ul>
    <li>\u{1F527} <b>\u4E3B\u754C\u9762\u5361\u4F4F\u95EE\u9898</b> - \u4FEE\u590D\u90E8\u5206\u7528\u6237\u6253\u5F00\u4E3B\u754C\u9762\u540E\u65E0\u6CD5\u64CD\u4F5C\u3001\u5267\u672C\u5361\u7247\u663E\u793A"\u52A0\u8F7D\u4E2D"\u7684\u95EE\u9898</li>
    <li>\u{1F527} <b>\u6A21\u5F0F\u5207\u6362\u95EE\u9898</b> - \u4FEE\u590D\u624B\u52A8\u9009\u62E9\u5E73\u884C\u6A21\u5F0F\u751F\u6210\u540E\uFF0C\u91CD\u65B0\u6253\u5F00\u4E3B\u754C\u9762\u5374\u663E\u793A\u56DE\u58F0\u6A21\u5F0F\u7684\u95EE\u9898</li>
    <li>\u{1F527} <b>\u540E\u53F0\u751F\u6210\u5185\u5BB9\u4E0D\u5339\u914D</b> - \u4FEE\u590D\u540E\u53F0\u81EA\u52A8\u751F\u6210\u540E\uFF0C\u6253\u5F00\u4E3B\u754C\u9762\u663E\u793A\u7684\u5267\u672C\u4E0E\u5B9E\u9645\u751F\u6210\u5185\u5BB9\u4E0D\u5BF9\u5E94\u7684\u95EE\u9898</li>
    <li>\u{1F527} <b>\u81EA\u52A8\u7EED\u5199\u8FDE\u8D2F\u6027</b> - \u4F18\u5316\u7EED\u5199 Prompt\uFF0C\u786E\u4FDD\u7EED\u5199\u5185\u5BB9\u4E0E\u539F\u573A\u666F\u4FDD\u6301\u4E00\u81F4</li>
</ul>

<h4>\u2728 \u4F53\u9A8C\u4F18\u5316</h4>
<ul>
    <li>\u23F1\uFE0F <b>\u8D85\u65F6\u4FDD\u62A4\u673A\u5236</b> - \u4E16\u754C\u4E66\u52A0\u8F7D\u6DFB\u52A0 5 \u79D2\u8D85\u65F6\uFF0C\u907F\u514D\u7F51\u7EDC\u95EE\u9898\u5BFC\u81F4\u754C\u9762\u5361\u6B7B</li>
    <li>\u{1F4CA} <b>\u52A0\u8F7D\u72B6\u6001\u63D0\u793A</b> - \u4E16\u754C\u4E66\u9009\u62E9\u5668\u663E\u793A\u52A0\u8F7D\u52A8\u753B\uFF0C\u52A0\u8F7D\u5931\u8D25\u65F6\u663E\u793A\u9519\u8BEF\u4FE1\u606F</li>
    <li>\u{1F310} <b>\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009</b> - \u73B0\u5728\u53EF\u4EE5\u9009\u62E9\u6240\u6709\u542F\u7528\u7684\u6761\u76EE\uFF0C\u4E0D\u518D\u9650\u5236\u53EA\u6709\u84DD\u706F\u6761\u76EE</li>
    <li>\u{1F4BE} <b>\u9009\u62E9\u6301\u4E45\u5316</b> - \u4E16\u754C\u4E66\u6761\u76EE\u9009\u62E9\u6309\u89D2\u8272\u4FDD\u5B58\uFF0C\u5207\u6362\u89D2\u8272\u540E\u81EA\u52A8\u6062\u590D</li>
</ul>

<hr style="border-color:#333; margin:15px 0;">

<details style="cursor:pointer;">
<summary style="color:#888; font-size:0.9em;">\u{1F4DC} \u67E5\u770B v3.0.1 \u66F4\u65B0\u65E5\u5FD7</summary>
<div style="margin-top:10px; padding-left:10px; border-left:2px solid #444;">
<h4>\u2728 v3.0.1 \u65B0\u529F\u80FD</h4>
<ul>
    <li>\u{1F504} <b>\u81EA\u52A8\u7EED\u5199\u529F\u80FD</b> - \u5F53 API \u8D85\u65F6\u5BFC\u81F4\u5185\u5BB9\u622A\u65AD\u65F6\uFF0C\u81EA\u52A8\u68C0\u6D4B\u5E76\u53D1\u9001\u7EED\u5199\u8BF7\u6C42</li>
    <li>\u{1F3F7}\uFE0F <b>\u667A\u80FD\u622A\u65AD\u68C0\u6D4B</b> - \u652F\u6301 HTML \u6807\u7B7E\u95ED\u5408\u68C0\u6D4B\u3001\u53E5\u5B50\u5B8C\u6574\u6027\u68C0\u6D4B\u4E24\u79CD\u6A21\u5F0F</li>
    <li>\u{1F517} <b>\u5185\u5BB9\u65E0\u7F1D\u62FC\u63A5</b> - \u81EA\u52A8\u5408\u5E76\u591A\u6B21\u751F\u6210\u7684\u5185\u5BB9\uFF0C\u53EF\u9009\u663E\u793A\u7EED\u5199\u6807\u8BB0</li>
</ul>
</div>
</details>

<details style="cursor:pointer;">
<summary style="color:#888; font-size:0.9em;">\u{1F4DC} \u67E5\u770B v3.0.0 \u66F4\u65B0\u65E5\u5FD7</summary>
<div style="margin-top:10px; padding-left:10px; border-left:2px solid #444;">
<h4>\u2728 v3.0.0 \u65B0\u529F\u80FD</h4>
<ul>
    <li>\u{1F504} \u4E3B\u754C\u9762\u5FEB\u6377\u5207\u6362 API \u65B9\u6848</li>
    <li>\u{1F3A8} \u60AC\u6D6E\u7403\u81EA\u5B9A\u4E49\u6D45\u8272\u4E3B\u9898</li>
    <li>\u{1F514} \u63D2\u4EF6\u66F4\u65B0\u63D0\u9192</li>
    <li>\u23F1\uFE0F \u751F\u6210\u8BA1\u65F6\u7EDF\u8BA1</li>
    <li>\u{1F4DA} \u4E16\u754C\u4E66\u6761\u76EE\u9009\u62E9\u8BFB\u53D6</li>
    <li>\u{1F4E4} \u5BFC\u51FA\u5267\u672C</li>
    <li>\u{1F4C1} \u6279\u91CF\u79FB\u52A8\u5267\u672C\u5230\u5206\u7C7B</li>
    <li>\u{1F522} \u81EA\u5B9A\u4E49\u6392\u5E8F</li>
</ul>
</div>
</details>
`;
var LEGACY_KEYS = {
  CFG: "Titania_Config_v3",
  SCRIPTS: "Titania_UserScripts_v3",
  FAVS: "Titania_Favs_v3"
};
var defaultSettings = {
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
    // [新增] 球体背景色
    color_icon: "#ffffff",
    // [新增] 图标颜色
    color_notify_bg: "#2b2b2b",
    // [新增] 通知状态背景色
    size: 56,
    show_timer: true
    // 是否显示生成计时统计
  },
  director: {
    length: "",
    perspective: "auto",
    style_ref: ""
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
  }
};

// src/utils/storage.js
import { extension_settings as extension_settings2 } from "../../../extensions.js";
import { saveSettingsDebounced } from "../../../../script.js";
function getExtData() {
  if (!extension_settings2[extensionName]) {
    extension_settings2[extensionName] = JSON.parse(JSON.stringify(defaultSettings));
  }
  return extension_settings2[extensionName];
}
function saveExtData() {
  saveSettingsDebounced();
}

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
    --t-theme: #bfa15f;      /* \u4E3B\u9898\u8272 (\u91D1\u8272) */
    --t-notify: #55efc4;     /* \u901A\u77E5\u8272 (\u9752\u8272) */
    --t-bg-dark: #121212;    /* \u6DF1\u8272\u80CC\u666F */
    --t-bg-panel: #1e1e1e;   /* \u9762\u677F\u80CC\u666F */
    --t-border: #333;        /* \u8FB9\u6846\u8272 */
}

/* \u906E\u7F69\u5C42 */
.t-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.6); z-index: 20000;
    backdrop-filter: blur(2px);
    display: flex; align-items: center; justify-content: center;
    isolation: isolate;
}

/* \u901A\u7528\u7A97\u53E3\u5BB9\u5668 */
.t-box {
    position: relative;
    width: 95%; max-width: 650px;
    height: auto; max-height: 85vh;
    background: var(--t-bg-dark);
    border: 1px solid #555;
    border-radius: 12px;
    display: flex; flex-direction: column;
    box-shadow: 0 10px 40px rgba(0,0,0,0.8);
    color: #eee; font-family: sans-serif;
    overflow: hidden;
}

/* \u9876\u90E8\u6807\u9898\u680F */
.t-header {
    padding: 12px 15px; border-bottom: 1px solid #444;
    background: #242530; display: flex; justify-content: space-between; align-items: center;
    flex-shrink: 0;
}

.t-title-container { display: flex; flex-direction: column; justify-content: center; position: relative; padding-left: 12px; }
.t-title-container::before { content: ''; position: absolute; left: 0; top: 10%; height: 80%; width: 4px; background: linear-gradient(to bottom, #ff9a9e, #fad0c4); border-radius: 2px; box-shadow: 0 0 8px rgba(255, 154, 158, 0.6); }
.t-title-main { font-size: 1.4em; font-weight: 800; line-height: 1.1; background: linear-gradient(135deg, #e0c3fc 0%, #ff9a9e 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: 1px; }
.t-title-sub { font-size: 0.55em; color: #aaa; text-transform: uppercase; letter-spacing: 4px; margin-top: 2px; opacity: 0.7; font-weight: 300; background: linear-gradient(90deg, #ff9a9e, #e0c3fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

/* \u6309\u94AE */
.t-btn {
    background: #333; border: 1px solid #555; color: white;
    padding: 10px 15px; cursor: pointer; border-radius: 6px;
    font-weight: bold; text-align: center;
    display: flex; align-items: center; justify-content: center; gap: 5px;
    transition: 0.2s;
}
.t-btn:hover { background: #444; border-color: #666; }
.t-btn.primary { background: linear-gradient(90deg, #ff9a9e, #fecfef); color: #444; border: none; }
.t-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.t-tool-btn {
    font-size: 0.75em; padding: 4px 10px;
    background: rgba(0,0,0,0.6); border: 1px solid #666; color: #ccc;
    cursor: pointer; border-radius: 3px;
    display: flex; align-items: center; gap: 4px;
    transition: 0.2s;
}
.t-tool-btn:hover { background: #444; color: white; }
.t-icon-btn { cursor: pointer; font-size: 1.2em; color: #aaa; margin-left: 15px; transition: color 0.3s; }
.t-icon-btn:hover { color: #fff; }

.t-close { cursor: pointer; font-size: 1.8em; line-height: 1; color: #888; transition:0.2s; padding: 0 5px; margin-left: 15px; }
.t-close:hover { color: #fff; transform: rotate(90deg); }

/* \u8F93\u5165\u6846 (\u5F3A\u5236\u8986\u76D6\u4EAE\u8272\u4E3B\u9898) */
.t-box .t-input {
    background-color: #1a1a1a !important;
    color: #eeeeee !important;
    border: 1px solid #444 !important;
    border-radius: 4px; padding: 8px 10px; width: 100%; box-sizing: border-box; outline: none; transition: border 0.2s;
}
.t-box .t-input:focus { border-color: var(--t-theme) !important; background-color: #222 !important; }
.t-box .t-input:disabled { opacity: 0.6; cursor: not-allowed; background-color: #111 !important; }
textarea.t-input { font-family: 'Consolas', 'Monaco', monospace; line-height: 1.5; resize: vertical; }

/* \u6EDA\u52A8\u6761 */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }

/* \u52A8\u753B */
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

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
    /* [\u4FEE\u6539] \u652F\u6301\u81EA\u5B9A\u4E49\u80CC\u666F\u548C\u56FE\u6807\u8272 */
    background: var(--t-bg, #2b2b2b);
    color: var(--t-icon, #fff);

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    border: 2px solid #444;
    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    user-select: none;
    overflow: hidden;
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

/* \u52A0\u8F7D\u52A8\u753B */
@keyframes t-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

#titania-float-btn.t-loading {
    background: transparent !important;
    border-color: transparent !important;
    color: var(--t-theme) !important;
    pointer-events: none;
    box-shadow: 0 0 20px var(--t-theme);
}

#titania-float-btn.t-loading::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: conic-gradient(transparent 20%, transparent 40%, var(--t-theme));
    animation: t-spin 1.2s linear infinite;
    z-index: 0;
}

#titania-float-btn.t-loading::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: #2b2b2b;
    border-radius: 50%;
    z-index: 1;
}

/* \u901A\u77E5\u547C\u5438\u706F */
@keyframes t-glow {

    0%,
    100% {
        box-shadow: 0 0 5px var(--t-notify);
        border-color: var(--t-notify);
    }

    50% {
        box-shadow: 0 0 25px var(--t-notify);
        border-color: var(--t-notify);
    }
}

#titania-float-btn.t-notify {
    animation: t-glow 2s infinite ease-in-out;
    border-color: var(--t-notify);
    /* [\u65B0\u589E] \u901A\u77E5\u72B6\u6001\u5F3A\u5236\u4F7F\u7528\u4E13\u7528\u80CC\u666F\u8272 */
    background: var(--t-notify-bg, #2b2b2b) !important;
}

/* ===== \u8BA1\u65F6\u5668 (\u6781\u7B80\u7248) ===== */
#titania-timer {
    position: fixed;
    /* \u4F4D\u7F6E\u7531 JS \u52A8\u6001\u8BA1\u7B97\uFF0C\u663E\u793A\u5728\u60AC\u6D6E\u7403\u6B63\u4E0A\u65B9 */
    top: 80px;
    left: 20px;
    
    /* \u6781\u7B80\u6837\u5F0F\uFF1A\u53EA\u663E\u793A\u6570\u5B57 */
    background: rgba(0, 0, 0, 0.6);
    color: #00d9ff;
    font-family: monospace;
    font-size: 11px;
    
    padding: 2px 6px;
    border-radius: 6px;
    
    z-index: 9998;
    pointer-events: none;
    
    /* \u9ED8\u8BA4\u9690\u85CF */
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

/* === main-window.css === */
/* css/main-window.css - \u4E3B\u6F14\u7ECE\u7A97\u53E3 */

/*
 * ===== CSS \u9694\u79BB\u4FDD\u62A4\u5C42 =====
 * \u4F7F\u7528 all: initial \u91CD\u7F6E\u751F\u6210\u5185\u5BB9\u533A\u57DF\u7684\u6837\u5F0F\u7EE7\u627F
 * \u9632\u6B62\u6A21\u578B\u751F\u6210\u7684 CSS \u6C61\u67D3\u63D2\u4EF6\u4E3B\u754C\u9762\u5E03\u5C40
 */

/* \u4E3B\u5BB9\u5668\uFF1A\u5F3A\u5236\u56FA\u5B9A\u5E03\u5C40\uFF0C\u9632\u6B62\u88AB\u5B50\u5143\u7D20 CSS \u6C61\u67D3 */
#t-main-view {
    width: 950px !important;
    max-width: 95vw !important;
    height: 85vh !important;
    display: flex !important;
    flex-direction: column !important;
    background: #121212 !important;
    position: relative !important;
    /* \u786E\u4FDD\u4E3B\u7A97\u53E3\u5728\u906E\u7F69\u5C42\u4E4B\u4E0A */
    z-index: 20001 !important;
    /* \u9632\u6B62 flex \u88AB\u8986\u76D6 */
    flex-wrap: nowrap !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
    /* \u9632\u6B62 box-sizing \u88AB\u8986\u76D6 */
    box-sizing: border-box !important;
    /* \u9694\u79BB\u5B57\u4F53\u6837\u5F0F */
    font-family: sans-serif !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
    color: #eee !important;
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

/* \u5185\u5BB9\u5BB9\u5668 - \u5F3A\u5316\u9694\u79BB */
.t-content-wrapper {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    position: relative !important;
    overflow: hidden !important;
    background-color: #0b0b0b !important;
    background-image: linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px) !important;
    background-size: 20px 20px !important;
    transform: translateZ(0);
    min-height: 0 !important;
    /* \u9632\u6B62\u88AB\u63A8\u51FA\u89C6\u53E3 */
    max-height: 100% !important;
    /* \u5F3A\u5236 flex \u5C5E\u6027\u4E0D\u88AB\u8986\u76D6 */
    display: block !important;
}

.t-content-area {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    scroll-behavior: smooth;
    z-index: 1 !important;
    /* CSS \u9694\u79BB\uFF1A\u521B\u5EFA\u65B0\u7684\u5C42\u53E0\u4E0A\u4E0B\u6587 */
    isolation: isolate;
}

/*
 * ===== \u751F\u6210\u5185\u5BB9\u9694\u79BB\u5BB9\u5668 =====
 * \u8FD9\u4E2A\u5BB9\u5668\u5305\u542B\u6A21\u578B\u751F\u6210\u7684 HTML\uFF0C\u9700\u8981\u4E25\u683C\u9694\u79BB
 */
#t-output-content {
    width: 100% !important;
    min-height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    overflow-x: hidden !important;
    /* \u521B\u5EFA\u72EC\u7ACB\u7684\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF0C\u9632\u6B62 z-index \u6CC4\u6F0F */
    isolation: isolate !important;
    /* \u521B\u5EFA\u65B0\u7684 BFC (Block Formatting Context)\uFF0C\u9632\u6B62 margin \u584C\u9677\u7B49\u95EE\u9898 */
    contain: layout style !important;
}

/* \u751F\u6210\u5185\u5BB9\u7684\u76F4\u63A5\u5B50\u5143\u7D20\u7EA6\u675F */
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
    /* \u9650\u5236 position: fixed \u7B49\u9003\u9038\u884C\u4E3A */
    position: relative !important;
    /* \u9650\u5236 z-index\uFF0C\u9632\u6B62\u906E\u6321\u63D2\u4EF6 UI */
    z-index: auto !important;
}

/* \u751F\u6210\u5185\u5BB9\u4E2D\u7684\u56FE\u7247\u7EA6\u675F */
#t-output-content img {
    max-width: 100% !important;
    height: auto !important;
}

/*
 * ===== \u751F\u6210\u5185\u5BB9\u5185\u90E8\u6837\u5F0F\u91CD\u7F6E =====
 * \u9632\u6B62\u751F\u6210\u5185\u5BB9\u5F71\u54CD\u5916\u90E8\u5143\u7D20
 */
#t-output-content [style*="position: fixed"],
#t-output-content [style*="position:fixed"] {
    position: absolute !important;
}

#t-output-content [style*="z-index"] {
    z-index: auto !important;
}

/* \u9876\u90E8\u64CD\u4F5C\u533A - \u5F3A\u5316\u9632\u62A4 */
.t-top-bar {
    padding: 12px 20px !important;
    background: #1e1e1e !important;
    border-bottom: 1px solid #333 !important;
    display: flex !important;
    gap: 15px !important;
    align-items: stretch !important;
    height: 75px !important;
    box-sizing: border-box !important;
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
    z-index: 20 !important;
    /* \u9632\u6B62\u88AB\u8986\u76D6 */
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    position: relative !important;
    visibility: visible !important;
    opacity: 1 !important;
    order: 1 !important;
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

/* Tabs */
.t-tabs {
    display: flex;
    flex-direction: column;
    width: 140px;
    background: #111;
    border-radius: 6px;
    padding: 3px;
    border: 1px solid #333;
    flex-shrink: 0;
}

.t-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.2s;
    font-size: 0.85em;
    font-weight: bold;
    color: #666;
    margin-bottom: 2px;
    border: 1px solid transparent;
}

.t-tab:last-child {
    margin-bottom: 0;
}

.t-tab.active-echo {
    background: rgba(144, 205, 244, 0.15);
    color: #90cdf4;
    border: 1px solid rgba(144, 205, 244, 0.2);
}

.t-tab.active-parallel {
    background: rgba(191, 161, 95, 0.15);
    color: #bfa15f;
    border: 1px solid rgba(191, 161, 95, 0.2);
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

/* Zen Button */
.t-zen-btn {
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

.t-zen-btn:hover {
    opacity: 1;
    background: #bfa15f;
    color: #000;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(191, 161, 95, 0.4);
}

/* Bottom Bar */
/* \u5E95\u90E8\u680F\u5BB9\u5668\uFF1A\u5F3A\u5316\u9632\u62A4\uFF0C\u9632\u6B62\u88AB\u751F\u6210\u5185\u5BB9 CSS \u8986\u76D6 */
.t-bottom-bar {
    padding: 10px 15px !important;
    background: #1e1e1e !important;
    border-top: 1px solid #333 !important;
    display: flex !important;
    align-items: stretch !important;
    /* \u8BA9\u5DE6\u53F3\u4E24\u8FB9\u9AD8\u5EA6\u81EA\u52A8\u62C9\u4F38\u5BF9\u9F50 */
    gap: 15px !important;
    height: 90px !important;
    /* \u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u786E\u4FDD\u5BB9\u7EB3\u53CC\u5C42\u7ED3\u6784 */
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
    position: relative !important;
    z-index: 50 !important;
    box-sizing: border-box !important;
    /* \u9632\u6B62 flex \u65B9\u5411\u88AB\u8986\u76D6 */
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: flex-start !important;
    /* \u9632\u6B62\u88AB\u63A8\u5230\u9876\u90E8\u6216\u9690\u85CF */
    order: 999 !important;
    margin: 0 !important;
    /* \u5F3A\u5236\u53EF\u89C1\u6027 */
    visibility: visible !important;
    opacity: 1 !important;
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

    .t-tabs {
        width: 100%;
        flex-direction: row;
        height: 36px;
        margin-bottom: 0;
    }

    .t-tab {
        margin-bottom: 0;
        margin-right: 2px;
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
    margin-bottom: 15px;
}

.t-wi-book-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    background: #252525;
    border-radius: 6px;
    margin-bottom: 8px;
    font-weight: bold;
    color: #ddd;
}

.t-wi-entries {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-left: 10px;
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

/* === settings.css === */
/* css/settings.css - \u8BBE\u7F6E\u7A97\u53E3 */

#t-settings-view {
    width: 800px; height: 80vh; max-width: 95vw;
    display: flex; flex-direction: column; background: #121212; overflow: hidden;
}

.t-set-body { flex-grow: 1; display: flex; overflow: hidden; }

/* \u4FA7\u8FB9\u5BFC\u822A */
.t-set-nav {
    width: 160px; background: #181818; border-right: 1px solid #333;
    padding: 10px 0; display: flex; flex-direction: column; flex-shrink: 0;
}
.t-set-tab-btn {
    padding: 12px 20px; color: #888; cursor: pointer; transition: 0.2s;
    font-size: 0.95em; display: flex; align-items: center; gap: 10px;
}
.t-set-tab-btn:hover { background: #222; color: #ccc; }
.t-set-tab-btn.active {
    background: #2a2a2a; color: #bfa15f; border-left: 3px solid #bfa15f; font-weight: bold;
}

/* \u5185\u5BB9\u9875 */
.t-set-content { flex-grow: 1; padding: 20px; overflow-y: auto; background: #121212; }
.t-set-page { display: none; animation: fadeIn 0.3s; }
.t-set-page.active { display: block; }

/* \u8868\u5355\u5143\u7D20 */
.t-form-group { margin-bottom: 20px; }
.t-form-label { display: block; color: #aaa; margin-bottom: 8px; font-size: 0.9em; }
.t-form-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 15px; }

/* \u9884\u89C8\u7403 */
.t-preview-container {
    background: #1a1a1a; border-radius: 8px; padding: 20px;
    display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; border: 1px solid #333;
}
.t-preview-ball {
    /* [\u4FEE\u6539] \u9884\u89C8\u7403\u652F\u6301\u53D8\u91CF */
    border-radius: 50%; 
    background: var(--p-bg, #2b2b2b); 
    color: var(--p-icon, #fff);
    
    display: flex; align-items: center; justify-content: center;
    border: 2px solid transparent; transition: all 0.2s; position: relative; overflow: hidden;
    /* CSS\u53D8\u91CF\u9884\u89C8 */
    box-shadow: 0 0 10px var(--p-theme);
}
.t-preview-ball img { width: 100%; height: 100%; object-fit: cover; }

/* \u9884\u89C8\u52A8\u753B\u7C7B */
@keyframes p-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.p-loading { box-shadow: 0 0 15px var(--p-theme) !important; color: var(--p-theme) !important; background: transparent !important; }
.p-loading::before { content: ""; position: absolute; width: 200%; height: 200%; top: -50%; left: -50%; background: conic-gradient(transparent, transparent, transparent, var(--p-theme)); animation: p-spin 1.2s linear infinite; z-index: -2; }
.p-loading::after { content: ""; position: absolute; inset: 3px; background: #2b2b2b; border-radius: 50%; z-index: -1; }
@keyframes p-glow { 0%,100% { box-shadow: 0 0 5px var(--p-notify); } 50% { box-shadow: 0 0 20px var(--p-notify); } }
.p-notify { 
    border-color: var(--p-notify) !important; 
    animation: p-glow 1.5s infinite ease-in-out;
    /* [\u65B0\u589E] \u9884\u89C8\u901A\u77E5\u80CC\u666F */
    background: var(--p-notify-bg) !important;
}

/* \u4E0A\u4F20\u6846 */
.t-upload-card {
    width: 100px; height: 100px; border: 2px dashed #444; border-radius: 8px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    cursor: pointer; color: #666; transition: 0.2s; background-size: cover; background-position: center;
}
.t-upload-card:hover { border-color: #bfa15f; color: #bfa15f; background-color: rgba(191, 161, 95, 0.05); }

/* Profile \u7BA1\u7406 */
.t-prof-header { display: flex; gap: 10px; margin-bottom: 15px; align-items: center; }
.t-prof-select { flex-grow: 1; background: #222; color: #eee; border: 1px solid #444; padding: 8px; border-radius: 4px; }

/* \u8BCA\u65AD\u65E5\u5FD7 */
.t-log-box {
    background: #0f0f0f; color: #ccc;
    padding: 10px; border: 1px solid #333; border-radius: 4px;
    height: 250px; overflow-y: auto;
    font-family: 'Consolas', monospace; font-size: 0.8em;
    white-space: pre-wrap; word-break: break-all; margin-bottom: 10px;
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
}

.t-mgr-sb-group {
    padding: 10px 0;
    border-bottom: 1px solid #222;
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

@media screen and (max-width: 600px) {
    .t-mgr-body {
        flex-direction: column;
    }

    .t-mgr-sidebar {
        width: 100%;
        height: auto;
        flex-direction: row;
        overflow-x: auto;
        border-right: none;
        border-bottom: 1px solid #333;
        padding: 5px;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .t-mgr-sb-group {
        border: none;
        display: flex;
        padding: 0;
        gap: 5px;
    }

    .t-mgr-sb-title {
        display: none;
    }

    .t-mgr-sb-item {
        padding: 6px 12px;
        border: 1px solid #333;
        margin: 0;
    }

    .t-mgr-sb-item.active {
        background: #bfa15f;
        color: #000;
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
        height: 50px;
        flex-direction: row;
        overflow-x: auto;
        border-right: none;
        border-bottom: 1px solid #333;
        padding: 5px;
        gap: 8px;
        white-space: nowrap;
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

.t-fav-container { height: 90vh; width: 1100px; max-width: 95vw; display: flex; flex-direction: column; background: #121212; overflow: hidden; position: relative; isolation: isolate; }
.t-fav-toolbar { height: 60px; background: #1e1e1e; border-bottom: 1px solid #333; display: flex; align-items: center; padding: 0 20px; gap: 15px; flex-shrink: 0; }
.t-fav-filter-select, .t-fav-search { background: #2a2a2a; color: #eee; border: 1px solid #444; padding: 6px 10px; border-radius: 4px; outline: none; }
.t-fav-filter-select { min-width: 120px; cursor: pointer; }
.t-fav-search { width: 200px; }

/* \u7F51\u683C */
.t-fav-grid-area { flex-grow: 1; padding: 25px; overflow-y: auto; background: #121212; }
.t-fav-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.t-fav-empty { text-align: center; color: #555; margin-top: 50px; grid-column: 1/-1; }

/* \u5361\u7247 */
.t-fav-card { position: relative; overflow: hidden; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; height: 180px; cursor: pointer; transition: all 0.3s; display: flex; flex-direction: column; justify-content: flex-end; }
.t-fav-card-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: top center; opacity: 0.5; transition: all 0.5s ease; z-index: 0; }
.t-fav-card-bg.no-img { background: linear-gradient(135deg, #1f1f1f, #2a2a2a); opacity: 1; filter: none; }
.t-fav-card-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%); z-index: 1; pointer-events: none; }
.t-fav-card:hover { transform: translateY(-5px); border-color: #666; box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
.t-fav-card:hover .t-fav-card-bg { opacity: 0.6; transform: scale(1.05); }
.t-fav-card-content { position: relative; z-index: 2; padding: 15px; text-shadow: 0 2px 4px rgba(0,0,0,0.9); }
.t-fav-card-script { font-weight: bold; font-size: 1.1em; color: #fff; margin-bottom: 2px; }
.t-fav-card-char { font-size: 0.85em; color: #bfa15f; font-weight: 500; display:flex; align-items:center; gap:5px; }
.t-fav-card-snippet { font-size: 0.85em; color: rgba(255,255,255,0.8); line-height: 1.4; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 8px; font-style: italic; }
.t-fav-card-footer { font-size: 0.75em; color: rgba(255,255,255,0.5); display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px; }

/* \u9605\u8BFB\u5668 overlay */
.t-fav-reader {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #0b0b0b;
    z-index: 10; display: flex; flex-direction: column;
    transform: translateX(100%); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.t-fav-reader.show { transform: translateX(0); }
.t-read-header { height: 60px; padding: 0 20px; border-bottom: 1px solid #333; display: flex; align-items: center; justify-content: space-between; background: #181818; }
.t-read-body { flex-grow: 1; padding: 0; overflow-y: auto; color: #ccc; position: relative; background: #0b0b0b; }
#t-read-capture-zone { background: #0b0b0b; padding: 0; width: 100%; min-height: 100%; font-size: 1.05em; line-height: 1.6; text-align: justify; display: flex; flex-direction: column; }
#t-read-content { width: 100%; min-height: 100%; flex-grow: 1; display: flex; flex-direction: column; }
#t-read-content > div { flex-grow: 1; margin: 0 !important; width: 100% !important; max-width: none !important; border-radius: 0 !important; border: none !important; min-height: 100%; box-sizing: border-box; }

/* \u56FE\u9274\u7BA1\u7406 overlay */
.t-img-mgr-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 50; display: flex; justify-content: center; align-items: center; animation: fadeIn 0.2s; }
.t-img-mgr-box { width: 600px; max-width: 95%; height: 70vh; background: #1e1e1e; border: 1px solid #444; border-radius: 8px; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
.t-img-list { flex-grow: 1; overflow-y: auto; padding: 15px; }
.t-img-item { display: flex; align-items: center; background: #252525; padding: 10px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #333; gap: 15px; }
.t-img-preview { width: 60px; height: 60px; border-radius: 4px; background-color: #111; background-size: cover; background-position: center; border: 1px solid #444; flex-shrink: 0; position: relative; }
.t-img-preview.no-img::after { content: "\u65E0\u56FE"; position: absolute; top:0; left:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:#555; font-size:0.8em; }
.t-img-info { flex-grow: 1; min-width: 0; }
.t-img-name { font-weight: bold; color: #eee; font-size: 1.1em; margin-bottom: 5px; }
.t-img-path { font-size: 0.8em; color: #777; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.t-img-actions { display: flex; gap: 8px; flex-shrink: 0; }
.t-act-btn { padding: 6px 10px; border: 1px solid #444; background: #333; color: #ccc; border-radius: 4px; cursor: pointer; font-size: 0.85em; transition: 0.2s; }
.t-act-btn:hover { background: #444; color: #fff; border-color: #666; }
.t-act-btn.auto { color: #bfa15f; border-color: rgba(191, 161, 95, 0.3); }
.t-act-btn.auto:hover { background: rgba(191, 161, 95, 0.1); }

@media screen and (max-width: 600px) {
    .t-fav-toolbar { flex-direction: column; height: auto; padding: 10px; align-items: stretch; }
    .t-fav-search { width: 100%; }
    .t-read-meta-text { max-width: 120px; }
}

/* === debug.css === */
/* css/debug.css - \u6781\u7B80\u4EE3\u7801\u7F16\u8F91\u5668\u98CE\u683C (\u542B\u79FB\u52A8\u7AEF\u9002\u914D) */

/* === \u57FA\u7840\u6837\u5F0F (Desktop First) === */

.t-dbg-container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    background: #1e1e1e; /* VS Code \u6DF1\u8272\u80CC\u666F */
    color: #cccccc;
    font-family: 'Segoe UI', sans-serif;
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
    overflow-x: auto; /* \u9632\u6B62\u5C0F\u5C4F\u6587\u5B57\u6EA2\u51FA */
    scrollbar-width: none; /* \u9690\u85CF\u6EDA\u52A8\u6761 */
}
.t-dbg-header-bar::-webkit-scrollbar { display: none; }

.t-dbg-stat-item { display: flex; align-items: center; gap: 6px; }
.t-dbg-stat-item i { color: #bfa15f; }
.t-dbg-highlight { color: #eee; font-family: monospace; }

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
    gap: 10px; /* \u9632\u6B62\u6587\u5B57\u7C98\u8FDE */
}
.t-param-key { color: #999; white-space: nowrap; }
.t-param-val { color: #ddd; text-align: right; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.t-param-val.warn { color: #d7ba7d; } 
.t-param-val.error { color: #f48771; } 
.t-param-val.ok { color: #89d185; }

/* \u53F3\u4FA7\uFF1A\u6E90\u7801\u4E3B\u533A\u57DF */
.t-dbg-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    overflow: hidden;
    min-width: 0; /* \u9632\u6B62 Flex \u5B50\u9879\u6EA2\u51FA */
}

.t-editor-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #333;
    min-height: 0; 
}
.t-editor-section:last-child { border-bottom: none; }

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
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 13px;
    line-height: 1.5;
    outline: none;
    white-space: pre;
    overflow: auto;
}
.t-code-textarea.user-ctx { color: #ce9178; }

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
        height: 85px; /* \u56FA\u5B9A\u9AD8\u5EA6 */
        flex-direction: row; /* \u5185\u5BB9\u6A2A\u6392 */
        overflow-x: auto; /* \u5141\u8BB8\u6A2A\u5411\u6EDA\u52A8 */
        overflow-y: hidden;
        border-right: none;
        border-bottom: 1px solid #333;
        background: #222;
        padding: 0;
        /* \u9690\u85CF\u6EDA\u52A8\u6761\u4F46\u4FDD\u7559\u529F\u80FD */
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .t-dbg-sidebar::-webkit-scrollbar { display: none; }

    /* 3. \u53C2\u6570\u7EC4\u53D8\u4E3A\u5361\u7247\u6837\u5F0F */
    .t-param-group {
        min-width: 140px; /* \u6700\u5C0F\u5BBD\u5EA6\uFF0C\u9632\u6B62\u6324\u538B */
        border-bottom: none;
        border-right: 1px solid #333;
        padding: 5px 12px;
        flex-shrink: 0; /* \u9632\u6B62\u88AB\u6324\u5C0F */
    }
    
    /* \u8C03\u6574\u53C2\u6570\u6587\u5B57\u5927\u5C0F */
    .t-param-title { margin-bottom: 4px; font-size: 0.7em; }
    .t-param-row { margin-bottom: 2px; font-size: 0.8em; }

    /* 4. \u4EE3\u7801\u533A\u57DF\u81EA\u9002\u5E94 */
    .t-dbg-main {
        height: calc(100% - 85px); /* \u51CF\u53BB\u9876\u90E8\u6A2A\u6761\u9AD8\u5EA6 */
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
    color: #ce9178; /* User Context \u9ED8\u8BA4\u8272 */
    overflow-y: auto;
    font-family: 'Consolas', 'Monaco', monospace;
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
.t-fold-head:hover { background: #2d2d2d; }

/* \u6807\u9898\u91CC\u7684\u56FE\u6807 */
.t-fold-icon {
    width: 16px;
    font-size: 0.8em;
    color: #888;
    transition: transform 0.2s;
    margin-right: 5px;
}
/* \u5C55\u5F00\u72B6\u6001\u65CB\u8F6C\u56FE\u6807 */
.t-fold-row.open .t-fold-icon { transform: rotate(90deg); }

/* \u6807\u9898\u6587\u5B57 */
.t-fold-title { font-weight: bold; color: #9cdcfe; margin-right: 10px; }
.t-fold-meta { font-size: 0.85em; color: #666; font-style: italic; }

/* \u9690\u85CF\u7684\u5185\u5BB9\u4F53 */
.t-fold-body {
    display: none;
    padding: 10px 15px;
    background: #1e1e1e;
    white-space: pre-wrap; /* \u4FDD\u7559\u6362\u884C */
    line-height: 1.5;
    border-left: 3px solid #333; /* \u89C6\u89C9\u5F15\u5BFC\u7EBF */
    color: #d4d4d4;
}
/* \u6FC0\u6D3B\u65F6\u663E\u793A */
.t-fold-row.open .t-fold-body { display: block; }

/* System Prompt \u4FDD\u6301\u539F\u6765\u7684 Textarea \u6837\u5F0F\uFF0C\u4F46\u6539\u4E2A\u540D\u9632\u51B2\u7A81 */
.t-simple-editor {
    flex-grow: 1;
    background: #1e1e1e;
    color: #9cdcfe;
    border: none;
    resize: none;
    padding: 10px 15px;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 13px;
    outline: none;
    white-space: pre-wrap;
    overflow: auto;
}

`;
  document.head.appendChild(style);
}

// src/core/state.js
var GlobalState = {
  isGenerating: false,
  runtimeScripts: [],
  // 加载好的剧本列表 (预设 + 自定义)
  lastGeneratedContent: "",
  // 上一次生成的结果 HTML
  lastUsedScriptId: "",
  // 上一次用户手动选择的剧本 ID (用于 UI 显示)
  lastGeneratedScriptId: "",
  // 上一次生成内容对应的剧本 ID (可能是后台自动生成的)
  currentCategoryFilter: "ALL",
  // 当前的分类筛选器状态
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
    currentScopeId: "",
    // 当前使用的 scopeId
    accumulatedContent: "",
    // 累积的完整内容
    // 优化：保存原始请求上下文，确保续写连贯性
    originalPrompt: "",
    // 原始剧本的 prompt
    characterName: "",
    // 角色名
    userName: ""
    // 用户名
  }
};
function resetContinuationState() {
  GlobalState.continuation = {
    isActive: false,
    retryCount: 0,
    originalContent: "",
    currentScopeId: "",
    accumulatedContent: "",
    originalPrompt: "",
    characterName: "",
    userName: ""
  };
}

// src/config/presets.js
var DEFAULT_PRESETS = [
  // === 回声模式 (Echo) ===
  { id: "e_mind", mode: "echo", name: "\u{1F50D} \u6B64\u523B\u5FC3\u58F0", desc: "\u3010\u56DE\u58F0\u3011\u89E3\u6790\u89D2\u8272\u5728\u521A\u521A\u5BF9\u8BDD\u7ED3\u675F\u540E\u7684\u771F\u5B9E\u5FC3\u7406\u6D3B\u52A8\u3002", prompt: "\u8BF7\u6839\u636E\u4E0A\u6587\u7684\u5BF9\u8BDD\u8BB0\u5F55\uFF0C\u5206\u6790 {{char}} \u6B64\u523B\u672A\u8BF4\u51FA\u53E3\u7684\u771F\u5B9E\u60F3\u6CD5\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u84DD\u8272\u534A\u900F\u660E\u80CC\u666F\uFF0C\u767D\u8272\u5B57\u4F53\uFF0C\u6A21\u62DFHUD\u62AC\u5934\u663E\u793A\u5668\u6548\u679C\uFF0C\u5E26\u6709\u95EA\u70C1\u7684\u5149\u6807\u3002\u5185\u5BB9\u683C\u5F0F\uFF1A[\u8868\u9762\u6001\u5EA6] vs [\u5185\u5FC3\u72EC\u767D]\u3002" },
  { id: "e_diary", mode: "echo", name: "\u{1F4D4} \u79C1\u5BC6\u65E5\u8BB0", desc: "\u3010\u56DE\u58F0\u3011\u89D2\u8272\u5728\u4ECA\u5929\u7ED3\u675F\u540E\u5199\u4E0B\u7684\u4E00\u7BC7\u65E5\u8BB0\u3002", prompt: "\u57FA\u4E8E\u521A\u624D\u53D1\u751F\u7684\u4E8B\u4EF6\uFF0C\u5199\u4E00\u7BC7 {{char}} \u7684\u65E5\u8BB0\u3002CSS\u6837\u5F0F\uFF1A\u7F8A\u76AE\u7EB8\u7EB9\u7406\u80CC\u666F\uFF0C\u624B\u5199\u4F53\uFF0C\u6DF1\u8910\u8272\u58A8\u6C34\u6548\u679C\uFF0C\u7EB8\u5F20\u8FB9\u7F18\u5E26\u6709\u505A\u65E7\u611F\u3002\u5185\u5BB9\u91CD\u70B9\uFF1A\u89D2\u8272\u5982\u4F55\u770B\u5F85\u4E0E {{user}} \u7684\u6700\u65B0\u4E92\u52A8\uFF0C\u4EE5\u53CA\u60C5\u611F\u6CE2\u52A8\u3002" },
  { id: "e_qidian", mode: "echo", name: "\u{1F4D6} \u8D77\u70B9\u4E66\u8BC4", desc: "\u3010\u56DE\u58F0\u3011\u5982\u679C\u4F60\u4EEC\u7684\u6545\u4E8B\u662F\u4E00\u672C\u8FDE\u8F7D\u7F51\u6587\uFF0C\u8BFB\u8005\u7684\u7280\u5229\u70B9\u8BC4\u3002", prompt: "\u5047\u8BBE {{char}} \u548C {{user}} \u662F\u67D0\u672C\u70ED\u95E8\u8FDE\u8F7D\u7F51\u6587\u7684\u4E3B\u89D2\u3002\u8BF7\u751F\u6210\u4E00\u6BB5\u4E66\u8BC4\u533A\uFF08\u7AE0\u8BF4\uFF09\u7684\u5185\u5BB9\u3002\u5305\u62EC\uFF1A\u50AC\u66F4\u3001\u5BF9\u521A\u624D\u5267\u60C5\u7684\u5410\u69FD\u3001\u78D5CP\u7684\u8A00\u8BBA\u3001\u4EE5\u53CA\u5BF9\u89D2\u8272\u667A\u5546\u7684\u5206\u6790\u3002CSS\u6837\u5F0F\uFF1A\u6D45\u7070\u8272\u80CC\u666F\uFF0C\u6DF1\u8272\u6587\u5B57\uFF0C\u6A21\u4EFF\u624B\u673A\u9605\u8BFBAPP\u7684\u8BC4\u8BBA\u533A\u5E03\u5C40\uFF0C\u5E26\u6709'\u70ED\u8BC4'\u3001'\u70B9\u8D5E\u6570'\u7B49\u5143\u7D20\u3002" },
  { id: "e_danmu", mode: "echo", name: "\u{1F4FA} \u5410\u69FD\u5F39\u5E55", desc: "\u3010\u56DE\u58F0\u3011\u9AD8\u80FD\u9884\u8B66\uFF01\u521A\u624D\u7684\u5267\u60C5\u5982\u679C\u901A\u8FC7\u76F4\u64AD\u64AD\u51FA\u4F1A\u600E\u6837\uFF1F", prompt: "\u5C06\u521A\u624D\u7684\u4E92\u52A8\u89C6\u4E3A\u4E00\u573A\u76F4\u64AD\u6216\u756A\u5267\u66F4\u65B0\u3002\u8BF7\u751F\u6210\u98D8\u8FC7\u7684\u5F39\u5E55\u5185\u5BB9\u3002\u5185\u5BB9\u98CE\u683C\uFF1A\u73A9\u6897\u3001'\u524D\u65B9\u9AD8\u80FD'\u3001'AWSL'\u3001'\u6025\u6B7B\u6211\u4E86'\u3001\u5BF9 {{char}} \u7684\u5FAE\u8868\u60C5\u8FDB\u884C\u9010\u5E27\u5206\u6790\u3002CSS\u6837\u5F0F\uFF1A\u534A\u900F\u660E\u9ED1\u8272\u906E\u7F69\u80CC\u666F\uFF0C\u5F69\u8272\u6EDA\u52A8\u5B57\u4F53\uFF08\u6A21\u62DF\u89C6\u9891\u5F39\u5E55\u5C42\uFF09\uFF0C\u5B57\u4F53\u5927\u5C0F\u4E0D\u4E00\uFF0C\u8425\u9020\u70ED\u95F9\u611F\u3002" },
  { id: "e_forum", mode: "echo", name: "\u{1F4AC} \u533F\u540D\u6811\u6D1E", desc: "\u3010\u56DE\u58F0\u3011\u89D2\u8272\uFF08\u6216\u8DEF\u4EBA\uFF09\u5728\u533F\u540D\u8BBA\u575B\u53D1\u7684\u6C42\u52A9/\u5410\u69FD\u8D34\u3002", prompt: "\u8BF7\u6A21\u62DF {{char}} (\u6216\u8005\u88AB\u5377\u5165\u7684\u8DEF\u4EBA) \u5728\u533F\u540D\u8BBA\u575B(\u5982Reddit\u6216NGA)\u53D1\u5E03\u7684\u4E00\u4E2A\u5E16\u5B50\u3002\u6807\u9898\u8981\u9707\u60CA\uFF0C\u5185\u5BB9\u662F\u5173\u4E8E\u521A\u624D\u53D1\u751F\u7684\u4E8B\u4EF6\u3002CSS\u6837\u5F0F\uFF1A\u6A21\u4EFF\u8BBA\u575B\u7F51\u9875\u98CE\u683C\uFF0C\u5E26\u6709'\u697C\u4E3B'\u6807\u8BC6\uFF0C\u5F15\u7528\u56DE\u590D\u6846\uFF0C\u80CC\u666F\u8272\u4E3A\u62A4\u773C\u7C73\u8272\u6216\u6697\u8272\u6A21\u5F0F\u3002" },
  { id: "e_bloopers", mode: "echo", name: "\u{1F3AC} \u7535\u5F71\u82B1\u7D6E", desc: "\u3010\u56DE\u58F0\u3011'\u5361\uFF01' \u521A\u624D\u90A3\u6BB5\u5176\u5B9E\u662F\u62CD\u620F\uFF1F\u6765\u770B\u770BNG\u955C\u5934\u3002", prompt: "\u5047\u8BBE\u521A\u624D\u7684\u5267\u60C5\u662F\u5728\u62CD\u620F\u3002\u8BF7\u64B0\u5199\u4E00\u6BB5'\u5E55\u540E\u82B1\u7D6E'\u3002\u4F8B\u5982\uFF1A{{char}} \u5FD8\u8BCD\u4E86\u3001\u7B11\u573A\u4E86\u3001\u9053\u5177\u574F\u4E86\uFF0C\u6216\u8005\u5BFC\u6F14\u558A\u5361\u540E {{char}} \u77AC\u95F4\u51FA\u620F\u5BF9 {{user}} \u8BF4\u4E86\u4EC0\u4E48\u3002CSS\u6837\u5F0F\uFF1A\u80F6\u5377\u5E95\u7247\u98CE\u683C\u8FB9\u6846\uFF0C\u9ED1\u767D\u6216\u590D\u53E4\u6EE4\u955C\u80CC\u666F\uFF0C\u6253\u5B57\u673A\u5B57\u4F53\u3002" },
  { id: "e_system", mode: "echo", name: "\u{1F4DF} \u7CFB\u7EDF\u62A5\u544A", desc: "\u3010\u56DE\u58F0\u3011Galgame\u98CE\u683C\u7684\u597D\u611F\u5EA6\u4E0E\u72B6\u6001\u7ED3\u7B97\u3002", prompt: "\u8BF7\u4EE5\u604B\u7231\u517B\u6210\u6E38\u620F\uFF08\u6216RPG\u7CFB\u7EDF\uFF09\u7684\u89C6\u89D2\uFF0C\u751F\u6210\u4E00\u4EFD'\u4E8B\u4EF6\u7ED3\u7B97\u62A5\u544A'\u3002\u5185\u5BB9\u5305\u62EC\uFF1A{{char}} \u7684\u597D\u611F\u5EA6\u53D8\u5316\u6570\u503C\uFF08+/-\uFF09\u3001\u5FC3\u60C5\u6307\u6570\u3001San\u503C\u6CE2\u52A8\u3001\u4EE5\u53CA\u7CFB\u7EDF\u5BF9 {{user}} \u4E0B\u4E00\u6B65\u64CD\u4F5C\u7684\u63D0\u793A\u3002CSS\u6837\u5F0F\uFF1A\u8D5B\u535A\u79D1\u5E7B\u60AC\u6D6E\u7A97\uFF0C\u534A\u900F\u660E\u73BB\u7483\u62DF\u6001\uFF0C\u9713\u8679\u8272\u8FDB\u5EA6\u6761\u3002" },
  { id: "e_drunk", mode: "echo", name: "\u{1F37A} \u9152\u540E\u771F\u8A00", desc: "\u3010\u56DE\u58F0\u3011\u89D2\u8272\u559D\u9189\u540E\uFF0C\u8DDF\u9152\u4FDD\u5410\u69FD\u8FD9\u4E00\u8FDE\u4E32\u7684\u4E8B\u3002", prompt: "\u573A\u666F\uFF1A{{char}} \u6B63\u5728\u9152\u5427\u4E70\u9189\u3002\u8BF7\u64B0\u5199\u4E00\u6BB5\u4ED6/\u5979\u5BF9\u9152\u4FDD\u7684\u5410\u69FD\uFF0C\u5185\u5BB9\u5168\u662F\u5173\u4E8E {{user}} \u7684\uFF0C\u5145\u6EE1\u4E86\u6094\u6068\u3001\u8FF7\u604B\u6216\u62B1\u6028\u3002CSS\u6837\u5F0F\uFF1A\u660F\u6697\u7684\u9152\u5427\u6C1B\u56F4\uFF0C\u6587\u5B57\u5E26\u6709\u6A21\u7CCA\u91CD\u5F71\u6548\u679C\uFF08\u6A21\u62DF\u9189\u9152\u89C6\u89C9\uFF09\u3002" },
  { id: "e_wechat", mode: "echo", name: "\u{1F4F1} \u670B\u53CB\u5708/\u63A8\u7279", desc: "\u3010\u56DE\u58F0\u3011\u4EC5\u5BF9\u65B9\u53EF\u89C1\uFF08\u6216\u5FD8\u8BB0\u5C4F\u853D\uFF09\u7684\u793E\u4EA4\u52A8\u6001\u3002", prompt: "\u57FA\u4E8E\u521A\u624D\u7684\u5267\u60C5\uFF0C{{char}} \u53D1\u4E86\u4E00\u6761\u793E\u4EA4\u5A92\u4F53\u52A8\u6001\uFF08\u670B\u53CB\u5708/Twitter\uFF09\u3002\u5185\u5BB9\u53EF\u80FD\u662F\u4E00\u5F20\u914D\u56FE\u7684\u6587\u5B57\uFF08\u7528\u6587\u5B57\u63CF\u8FF0\u56FE\u7247\uFF09\uFF0C\u6216\u8005\u4E00\u53E5\u542B\u6C99\u5C04\u5F71\u7684\u8BDD\u3002CSS\u6837\u5F0F\uFF1A\u6A21\u4EFF\u624B\u673AAPP\u754C\u9762\uFF0C\u5E26\u6709\u5934\u50CF\u3001\u65F6\u95F4\u6233\u3001\u70B9\u8D5E\u548C\u8BC4\u8BBA\u6309\u94AE\u3002" },
  { id: "e_dream", mode: "echo", name: "\u{1F319} \u5348\u591C\u68A6\u56DE", desc: "\u3010\u56DE\u58F0\u3011\u5F53\u665A\u89D2\u8272\u505A\u7684\u68A6\uFF0C\u6620\u5C04\u4E86\u767D\u5929\u7684\u7ECF\u5386\u3002", prompt: "\u591C\u6DF1\u4E86\uFF0C{{char}} \u5165\u7761\u540E\u505A\u4E86\u4E00\u4E2A\u68A6\u3002\u68A6\u5883\u5185\u5BB9\u662F\u767D\u5929\u4E8B\u4EF6\u7684\u626D\u66F2\u3001\u5938\u5F20\u6216\u6F5C\u610F\u8BC6\u6298\u5C04\u3002\u98CE\u683C\u8981\u8FF7\u5E7B\u3001\u8C61\u5F81\u4E3B\u4E49\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u7D2B\u8272\u661F\u7A7A\u80CC\u666F\uFF0C\u6726\u80E7\u7684\u767D\u8272\u5149\u6655\u6587\u5B57\uFF0C\u8425\u9020\u68A6\u5E7B\u611F\u3002" },
  // === 平行世界 (Parallel) ===
  { id: "p_school", mode: "parallel", name: "\u{1F3EB} \u9752\u6625\u6821\u56ED", desc: "\u3010\u5E73\u884C\u3011\u73B0\u4EE3\u9AD8\u4E2DPA\u3002\u540C\u684C\u3001\u4F20\u7EB8\u6761\u3001\u5348\u540E\u7684\u64CD\u573A\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u73B0\u4EE3\u9AD8\u4E2D\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u73ED\u91CC\u7684\u4F18\u7B49\u751F\u6216\u4E0D\u826F\u5C11\u5E74\uFF0C{{user}} \u662F\u540C\u684C\u3002\u63CF\u5199\u4E00\u6BB5\u4E0A\u8BFE\u6084\u6084\u4E92\u52A8\u6216\u653E\u5B66\u540E\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u4F5C\u4E1A\u672C\u6A2A\u7EBF\u7EB8\u80CC\u666F\uFF0C\u5706\u73E0\u7B14\u624B\u5199\u5B57\uFF0C\u6E05\u65B0\u6821\u56ED\u98CE\u3002" },
  { id: "p_fantasy", mode: "parallel", name: "\u2694\uFE0F \u897F\u5E7B\u53F2\u8BD7", desc: "\u3010\u5E73\u884C\u3011\u5251\u4E0E\u9B54\u6CD5\u3002\u5192\u9669\u8005\u516C\u4F1A\u3001\u7BDD\u706B\u4E0E\u5730\u4E0B\u57CE\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1AD&D\u897F\u5E7B\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u7CBE\u7075/\u9A91\u58EB/\u6CD5\u5E08\uFF0C{{user}} \u662F\u961F\u53CB\u3002\u63CF\u5199\u4E00\u6BB5\u521A\u653B\u7565\u5B8C\u5730\u4E0B\u57CE\u540E\uFF0C\u5728\u7BDD\u706B\u65C1\u4F11\u606F\u64E6\u62ED\u6B66\u5668\u7684\u6E29\u99A8\uFF08\u6216\u66A7\u6627\uFF09\u7247\u6BB5\u3002CSS\u6837\u5F0F\uFF1A\u7C97\u7CD9\u77F3\u7816\u80CC\u666F\uFF0C\u706B\u5149\u8272\u6587\u5B57\uFF0C\u7F8A\u76AE\u5377\u8F74\u8FB9\u6846\u3002" },
  { id: "p_cyber", mode: "parallel", name: "\u{1F916} \u8D5B\u535A\u670B\u514B", desc: "\u3010\u5E73\u884C\u3011\u591C\u4E4B\u57CE\u3002\u4E49\u4F53\u533B\u751F\u3001\u9ED1\u5BA2\u4E0E\u9713\u8679\u96E8\u591C\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u8D5B\u535A\u670B\u514B2077\u98CE\u683C\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002\u573A\u666F\u662F\u4E0B\u7740\u9178\u96E8\u7684\u9713\u8679\u90FD\u5E02\u3002{{char}} \u6B63\u5728\u4E3A {{user}} \u7EF4\u4FEE\u6545\u969C\u7684\u4E49\u4F53\uFF0C\u6216\u8005\u8FDB\u884C\u975E\u6CD5\u7684\u82AF\u7247\u4EA4\u6613\u3002CSS\u6837\u5F0F\uFF1A\u6545\u969C\u827A\u672F(Glitch)\u98CE\u683C\uFF0C\u9ED1\u5E95\u7EFF\u5B57\uFF0C\u5E26\u6709\u968F\u673A\u7684\u6570\u636E\u4E71\u7801\u88C5\u9970\u3002" },
  { id: "p_xianxia", mode: "parallel", name: "\u{1F3D4}\uFE0F \u4ED9\u4FA0\u4FEE\u771F", desc: "\u3010\u5E73\u884C\u3011\u5E08\u5C0A\u4E0E\u5F92\u5F1F\uFF0C\u6216\u8005\u6B63\u90AA\u4E0D\u4E24\u7ACB\u7684\u4FEE\u4ED9\u754C\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u53E4\u98CE\u4FEE\u4ED9\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u9AD8\u51B7\u7684\u5E08\u5C0A\u6216\u9B54\u6559\u6559\u4E3B\uFF0C{{user}} \u662F\u5F1F\u5B50\u6216\u6B63\u9053\u5C11\u4FA0\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u6D1E\u5E9C\u4FEE\u70BC\u3001\u4F20\u529F\u6216\u5BF9\u5CD9\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u6C34\u58A8\u5C71\u6C34\u753B\u80CC\u666F\uFF0C\u5178\u96C5\u53E4\u98CE\u8FB9\u6846\u3002" },
  { id: "p_office", mode: "parallel", name: "\u{1F4BC} \u804C\u573A\u7CBE\u82F1", desc: "\u3010\u5E73\u884C\u3011\u9738\u603B\u3001\u79D8\u4E66\u6216\u52A0\u73ED\u7684\u540C\u4E8B\u3002\u8336\u6C34\u95F4\u7684\u6545\u4E8B\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u73B0\u4EE3\u804C\u573A\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u4E25\u5389\u7684\u4E0A\u53F8\u6216\u75B2\u60EB\u7684\u524D\u8F88\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u8336\u6C34\u95F4\u5076\u9047\uFF0C\u6216\u8005\u6DF1\u591C\u5728\u529E\u516C\u5BA4\u52A0\u73ED\u5403\u5916\u5356\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u7B80\u7EA6\u5546\u52A1\u98CE\uFF0C\u767D\u5E95\u9ED1\u5B57\uFF0C\u6A21\u4EFFEmail\u6216\u529E\u516C\u8F6F\u4EF6\u754C\u9762\u3002" },
  { id: "p_detective", mode: "parallel", name: "\u{1F575}\uFE0F \u9ED1\u8272\u4FA6\u63A2", desc: "\u3010\u5E73\u884C\u3011\u4E0A\u4E16\u7EAA40\u5E74\u4EE3\uFF0C\u7235\u58EB\u4E50\u3001\u96E8\u591C\u4E0E\u79C1\u5BB6\u4FA6\u63A2\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u9ED1\u8272\u7535\u5F71Noir\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u843D\u9B44\u4FA6\u63A2\u6216\u81F4\u547D\u4F34\u4FA3\u3002\u573A\u666F\u662F\u70DF\u96FE\u7F2D\u7ED5\u7684\u4E8B\u52A1\u6240\uFF0C\u7A97\u5916\u4E0B\u7740\u5927\u96E8\u3002\u7528\u7B2C\u4E00\u4EBA\u79F0\u72EC\u767D\u98CE\u683C\u63CF\u5199\u3002CSS\u6837\u5F0F\uFF1A\u9ED1\u767D\u7535\u5F71\u6EE4\u955C\uFF0C\u6253\u5B57\u673A\u5B57\u4F53\uFF0C\u8001\u7167\u7247\u8D28\u611F\u3002" },
  { id: "p_harry", mode: "parallel", name: "\u{1FA84} \u9B54\u6CD5\u5B66\u9662", desc: "\u3010\u5E73\u884C\u3011\u5206\u9662\u5E3D\u3001\u9B54\u836F\u8BFE\u4E0E\u9B41\u5730\u5947\u6BD4\u8D5B\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u9B54\u6CD5\u5B66\u9662\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u548C {{user}} \u7A7F\u7740\u4E0D\u540C\u5B66\u9662\u7684\u5DEB\u5E08\u888D\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u56FE\u4E66\u9986\u7981\u4E66\u533A\u591C\u6E38\uFF0C\u6216\u8005\u9B54\u836F\u8BFE\u70B8\u4E86\u5769\u57DA\u540E\u7684\u573A\u666F\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u7EA2\u8272\u6216\u6DF1\u7EFF\u8272\u5929\u9E45\u7ED2\u8D28\u611F\u80CC\u666F\uFF0C\u91D1\u8272\u886C\u7EBF\u5B57\u4F53\uFF0C\u9B54\u6CD5\u706B\u82B1\u88C5\u9970\u3002" },
  { id: "p_apocalypse", mode: "parallel", name: "\u{1F9DF} \u672B\u65E5\u751F\u5B58", desc: "\u3010\u5E73\u884C\u3011\u4E27\u5C38\u7206\u53D1\u6216\u5E9F\u571F\u4E16\u754C\u3002\u8D44\u6E90\u532E\u4E4F\u4E0B\u7684\u4FE1\u4EFB\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u672B\u65E5\u5E9F\u571F\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002\u4E16\u754C\u5DF2\u6BC1\u706D\uFF0C\u8D44\u6E90\u532E\u4E4F\u3002{{char}} \u548C {{user}} \u8EB2\u5728\u4E00\u5904\u5E9F\u589F\u4E2D\u907F\u96E8\u6216\u8EB2\u907F\u602A\u7269\u3002\u63CF\u5199\u5206\u4EAB\u4EC5\u5B58\u7684\u4E00\u7F50\u7F50\u5934\u65F6\u7684\u5BF9\u8BDD\u3002CSS\u6837\u5F0F\uFF1A\u751F\u9508\u91D1\u5C5E\u7EB9\u7406\u80CC\u666F\uFF0C\u88C2\u75D5\u6548\u679C\uFF0C\u6C61\u6E0D\u6591\u70B9\u3002" },
  { id: "p_royal", mode: "parallel", name: "\u{1F451} \u5BAB\u5EF7\u6743\u8C0B", desc: "\u3010\u5E73\u884C\u3011\u7687\u5E1D/\u5973\u738B\u4E0E\u6743\u81E3/\u523A\u5BA2\u3002\u534E\u4E3D\u7B3C\u5B50\u91CC\u7684\u535A\u5F08\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u4E2D\u4E16\u7EAA/\u53E4\u4EE3\u5BAB\u5EF7\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u3002{{char}} \u662F\u638C\u63E1\u6743\u529B\u7684\u7687\u5BA4\u6210\u5458\uFF0C{{user}} \u662F\u4F8D\u536B\u6216\u653F\u6CBB\u8054\u59FB\u5BF9\u8C61\u3002\u63CF\u5199\u4E00\u6BB5\u5728\u5BDD\u5BAB\u5185\u4F4E\u58F0\u5BC6\u8C0B\u6216\u5BF9\u5CD9\u7684\u573A\u666F\uFF0C\u5F20\u529B\u62C9\u6EE1\u3002CSS\u6837\u5F0F\uFF1A\u6DF1\u7D2B\u8272\u4E1D\u7EF8\u80CC\u666F\uFF0C\u91D1\u8272\u8FB9\u6846\uFF0C\u534E\u4E3D\u7684\u82B1\u7EB9\u88C5\u9970\u3002" },
  { id: "p_cthulhu", mode: "parallel", name: "\u{1F419} \u514B\u82CF\u9C81", desc: "\u3010\u5E73\u884C\u3011\u4E0D\u53EF\u540D\u72B6\u7684\u6050\u6016\uFF0C\u6389San\u503C\u7684\u8C03\u67E5\u5458\u6545\u4E8B\u3002", prompt: "\u3010\u5E73\u884C\u4E16\u754C\uFF1A\u514B\u82CF\u9C81\u795E\u8BDD\u3011\u5FFD\u7565\u5386\u53F2\u80CC\u666F\u30021920\u5E74\u4EE3\uFF0C{{char}} \u548C {{user}} \u662F\u8C03\u67E5\u5458\u3002\u4F60\u4EEC\u53D1\u73B0\u4E86\u4E00\u672C\u53E4\u602A\u7684\u4E66\u6216\u4E00\u4E2A\u8BE1\u5F02\u7684\u796D\u575B\u3002{{char}} \u7684\u7406\u667A\u503C\uFF08Sanity\uFF09\u5F00\u59CB\u4E0B\u964D\uFF0C\u8BF4\u8BDD\u53D8\u5F97\u766B\u72C2\u3002CSS\u6837\u5F0F\uFF1A\u6697\u7EFF\u8272\u7C98\u6DB2\u8D28\u611F\u80CC\u666F\uFF0C\u626D\u66F2\u7684\u5B57\u4F53\uFF0C\u6587\u5B57\u5468\u56F4\u5E26\u6709\u6A21\u7CCA\u7684\u9ED1\u96FE\u6548\u679C\u3002" }
];

// src/core/scriptData.js
function loadScripts() {
  const data = getExtData();
  const userScripts = data.user_scripts || [];
  const disabledIDs = data.disabled_presets || [];
  GlobalState.runtimeScripts = DEFAULT_PRESETS.filter((p) => !disabledIDs.includes(p.id)).map((p) => ({ ...p, _type: "preset" }));
  userScripts.forEach((s) => {
    let cleanMode = s.mode;
    if (!cleanMode || cleanMode === "all") {
      cleanMode = "parallel";
    }
    if (!GlobalState.runtimeScripts.find((r) => r.id === s.id)) {
      GlobalState.runtimeScripts.push({
        ...s,
        mode: cleanMode,
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

// src/core/logger.js
var TitaniaLogger = {
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

// src/core/context.js
var selected_world_info = [];
var world_info = null;
try {
  if (typeof window !== "undefined") {
    if (window.selected_world_info) selected_world_info = window.selected_world_info;
    if (window.world_info) world_info = window.world_info;
  }
} catch (e) {
  console.warn("Titania: \u65E0\u6CD5\u83B7\u53D6\u4E16\u754C\u4E66\u5168\u5C40\u53D8\u91CF", e);
}
function getWorldInfoVars() {
  try {
    return {
      selected_world_info: window.selected_world_info || [],
      world_info: window.world_info || null
    };
  } catch (e) {
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

// src/utils/helpers.js
function extractContent(text) {
  if (!text) return "";
  const contentMatch = text.match(/<content[^>]*>([\s\S]*?)<\/content>/i);
  if (contentMatch) {
    return extractContent(contentMatch[1]);
  }
  const tagsToRemove = [
    "thinking",
    // 思考过程
    "think",
    // 思考过程变体
    "status",
    // 状态栏
    "state",
    // 状态变体
    "mood",
    // 情绪标签
    "emotion",
    // 情绪变体
    "inner",
    // 内心独白
    "inner_thought",
    // 内心想法
    "monologue",
    // 独白
    "system",
    // 系统信息
    "ooc",
    // Out of Character
    "note",
    // 笔记
    "stat",
    // 属性栏
    "stats",
    // 属性栏变体
    "bar",
    // 状态条
    "statusbar",
    // 状态条
    "panel",
    // 面板
    "info",
    // 信息面板
    "debug"
    // 调试信息
  ];
  let cleaned = text;
  tagsToRemove.forEach((tag) => {
    const regex = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
    cleaned = cleaned.replace(regex, "");
  });
  cleaned = cleaned.replace(/<[^>]*>?/gm, "");
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n").trim();
  return cleaned;
}
function getChatHistory(limit) {
  if (typeof SillyTavern === "undefined" || !SillyTavern.getContext) return "";
  const ctx = SillyTavern.getContext();
  const history = ctx.chat || [];
  const safeLimit = parseInt(limit) || 10;
  const visibleHistory = history.filter((msg) => {
    if (msg.is_hidden) return false;
    if (msg.disabled) return false;
    return true;
  });
  const recent = visibleHistory.slice(-safeLimit);
  return recent.map((msg) => {
    let name = msg.name;
    if (msg.is_user) name = ctx.name1 || "User";
    if (name === "{{user}}") name = ctx.name1 || "User";
    if (name === "{{char}}") name = ctx.characters[ctx.characterId]?.name || "Char";
    let rawContent = msg.message || msg.mes || "";
    let cleanContent = extractContent(rawContent);
    if (!cleanContent.trim()) {
      cleanContent = rawContent.replace(/<[^>]*>?/gm, "").trim();
    }
    return `${name}: ${cleanContent}`;
  }).join("\n");
}
var fileToBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});
var parseMeta = (title) => {
  const parts = title.split(" - ");
  if (parts.length >= 2) {
    const char = parts.pop();
    const script = parts.join(" - ");
    return { script, char: char.trim() };
  }
  return { script: title, char: "\u672A\u77E5" };
};
var getSnippet = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  let text = tmp.textContent || tmp.innerText || "";
  text = text.replace(/\s+/g, " ").trim();
  return text.length > 60 ? text.substring(0, 60) + "..." : text;
};
function scopeAndSanitizeHTML(rawHtml, scopeId) {
  const styleMatches = rawHtml.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
  let allCssContent = "";
  styleMatches.forEach((styleBlock) => {
    const cssMatch = styleBlock.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    if (cssMatch) {
      allCssContent += cssMatch[1] + "\n";
    }
  });
  let bodyContent = rawHtml.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  if (!bodyContent.includes(`id="${scopeId}"`) && !bodyContent.includes(`id='${scopeId}'`)) {
    bodyContent = `<div id="${scopeId}">${bodyContent}</div>`;
  }
  let sanitizedCss = sanitizeCssForScope(allCssContent, scopeId);
  return `<style>
/* Scoped CSS for ${scopeId} - Auto-sanitized */
${sanitizedCss}
</style>
${bodyContent}`;
}
function sanitizeCssForScope(cssContent, scopeId) {
  if (!cssContent || !cssContent.trim()) return "";
  let css = cssContent.replace(/\/\*[\s\S]*?\*\//g, "");
  const dangerousSelectors = [
    // 全局元素选择器
    /^\s*\*\s*\{/gm,
    // * { }
    /^\s*body\s*\{/gim,
    // body { }
    /^\s*html\s*\{/gim,
    // html { }
    /^\s*:root\s*\{/gim,
    // :root { }
    // Flexbox/Grid 全局污染
    /^\s*\.t-[a-z-]+\s*\{/gim,
    // .t-xxx { } (可能与插件类名冲突)
    /^\s*#t-[a-z-]+\s*\{/gim,
    // #t-xxx { } (可能与插件 ID 冲突，但不含 scene)
    // 常见布局相关的危险选择器
    /^\s*div\s*\{/gim,
    // div { }
    /^\s*section\s*\{/gim,
    // section { }
    /^\s*main\s*\{/gim,
    // main { }
    /^\s*header\s*\{/gim,
    // header { }
    /^\s*footer\s*\{/gim,
    // footer { }
    /^\s*nav\s*\{/gim,
    // nav { }
    /^\s*aside\s*\{/gim,
    // aside { }
    /^\s*article\s*\{/gim
    // article { }
  ];
  const processedRules = [];
  const atRules = [];
  css = css.replace(/@(keyframes|media|supports|font-face)[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/gi, (match2) => {
    if (match2.toLowerCase().startsWith("@keyframes")) {
      match2 = match2.replace(/@keyframes\s+([a-zA-Z0-9_-]+)/i, `@keyframes ${scopeId}-$1`);
    }
    atRules.push(match2);
    return `/*__AT_RULE_${atRules.length - 1}__*/`;
  });
  const rulePattern = /([^{}]+)\{([^{}]*)\}/g;
  let match;
  while ((match = rulePattern.exec(css)) !== null) {
    let selector = match[1].trim();
    let properties = match[2].trim();
    if (selector.includes("__AT_RULE_")) {
      processedRules.push(match[0]);
      continue;
    }
    let isDangerous = false;
    for (const pattern of dangerousSelectors) {
      if (pattern.test(selector + " {")) {
        isDangerous = true;
        break;
      }
    }
    if (isDangerous) {
      selector = `#${scopeId} ${selector}`;
    } else if (!selector.includes(scopeId)) {
      const selectors = selector.split(",").map((s) => {
        s = s.trim();
        if (s.includes(scopeId)) return s;
        return `#${scopeId} ${s}`;
      });
      selector = selectors.join(", ");
    }
    properties = sanitizeCssProperties(properties, scopeId);
    processedRules.push(`${selector} { ${properties} }`);
  }
  let result = processedRules.join("\n");
  atRules.forEach((rule, index) => {
    let scopedRule = rule;
    if (rule.toLowerCase().startsWith("@media") || rule.toLowerCase().startsWith("@supports")) {
      scopedRule = rule.replace(/([^{}]+)\{([^{}]*)\}/g, (m, sel, props) => {
        if (sel.includes("@")) return m;
        if (!sel.includes(scopeId)) {
          sel = sel.split(",").map((s) => `#${scopeId} ${s.trim()}`).join(", ");
        }
        return `${sel} { ${props} }`;
      });
    }
    result = result.replace(`/*__AT_RULE_${index}__*/`, scopedRule);
  });
  return result;
}
function sanitizeCssProperties(properties, scopeId) {
  if (!properties) return "";
  properties = properties.replace(
    /animation(-name)?\s*:\s*([a-zA-Z0-9_-]+)/gi,
    (match, suffix, animName) => {
      const keywords = ["none", "initial", "inherit", "unset", "ease", "linear", "ease-in", "ease-out", "ease-in-out", "infinite", "forwards", "backwards", "both", "running", "paused", "alternate", "alternate-reverse", "normal", "reverse"];
      if (keywords.includes(animName.toLowerCase())) return match;
      return `animation${suffix || ""}: ${scopeId}-${animName}`;
    }
  );
  properties = properties.replace(/position\s*:\s*fixed/gi, "position: absolute");
  properties = properties.replace(/z-index\s*:\s*(\d+)/gi, (match, value) => {
    const maxZ = 1e3;
    const numValue = parseInt(value);
    if (numValue > maxZ) {
      return `z-index: ${maxZ}`;
    }
    return match;
  });
  properties = properties.replace(/!important/gi, "/* !important removed */");
  return properties;
}
function generateScopeId() {
  return "t-scene-" + Date.now().toString(36) + Math.floor(Math.random() * 1e3).toString();
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
function extractContinuationContext(content, contextLength = 800) {
  const scopeMatch = content.match(/id=["']?(t-scene-[a-z0-9]+)["']?/i);
  const scopeId = scopeMatch ? scopeMatch[1] : null;
  let bodyContent = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  let lastContent = bodyContent.slice(-contextLength);
  const firstTagEnd = lastContent.indexOf(">");
  const firstTagStart = lastContent.indexOf("<");
  if (firstTagEnd !== -1 && (firstTagStart === -1 || firstTagEnd < firstTagStart)) {
    const nextTagStart = lastContent.indexOf("<", firstTagEnd + 1);
    if (nextTagStart !== -1) {
      lastContent = lastContent.substring(nextTagStart);
    } else {
      lastContent = lastContent.substring(firstTagEnd + 1);
    }
  }
  return {
    lastContent,
    scopeId
  };
}
function extractTextSummary(htmlContent, maxLength = 500) {
  if (!htmlContent) return "";
  let text = htmlContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<[^>]*>/g, " ");
  text = text.replace(/\s+/g, " ").trim();
  if (text.length > maxLength) {
    const truncated = text.substring(0, maxLength);
    const lastPunctuationIndex = Math.max(
      truncated.lastIndexOf("\u3002"),
      truncated.lastIndexOf("\uFF01"),
      truncated.lastIndexOf("\uFF1F"),
      truncated.lastIndexOf("\u2026"),
      truncated.lastIndexOf("."),
      truncated.lastIndexOf("!"),
      truncated.lastIndexOf("?")
    );
    if (lastPunctuationIndex > maxLength * 0.5) {
      return truncated.substring(0, lastPunctuationIndex + 1);
    }
    return truncated + "...";
  }
  return text;
}
function mergeContinuationContent(originalContent, continuationContent, scopeId, showIndicator = true) {
  const originalStyleMatch = originalContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const originalStyle = originalStyleMatch ? originalStyleMatch[1] : "";
  const contStyleMatch = continuationContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const contStyle = contStyleMatch ? contStyleMatch[1] : "";
  let contBody = continuationContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  contBody = contBody.replace(new RegExp(`<div[^>]*id=["']?${scopeId}["']?[^>]*>`, "gi"), "");
  let originalBody = originalContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();
  let indicator = "";
  if (showIndicator) {
    indicator = `<div style="text-align:center; color:#bfa15f; font-size:0.8em; margin:15px 0; opacity:0.7;">
            <i class="fa-solid fa-link"></i> \u2500\u2500\u2500 \u7EED\u5199\u8FDE\u63A5 \u2500\u2500\u2500
        </div>`;
  }
  const mergedStyle = originalStyle + "\n/* Continuation CSS */\n" + contStyle;
  const mergedBody = originalBody + indicator + contBody;
  return `<style>
/* Scoped CSS for ${scopeId} */
${mergedStyle}
</style>
${mergedBody}`;
}

// src/ui/scriptManager.js
function openScriptManager() {
  let currentFilter = {
    mode: "all",
    category: "all",
    search: "",
    hidePresets: false
  };
  let isBatchMode = false;
  const getCategories = () => {
    const data = getExtData();
    const categoryOrder = data.category_order || [];
    const cats = new Set(GlobalState.runtimeScripts.map((s) => s.category).filter((c) => c));
    const sortedCats = [...cats].sort((a, b) => {
      const idxA = categoryOrder.indexOf(a);
      const idxB = categoryOrder.indexOf(b);
      if (idxA === -1 && idxB === -1) return a.localeCompare(b);
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });
    return ["\u5168\u90E8", ...sortedCats];
  };
  const html = `
    <div class="t-box" id="t-mgr-view">
        <div class="t-header"><span class="t-title-main">\u{1F4C2} \u5267\u672C\u8D44\u6E90\u7BA1\u7406</span><span class="t-close" id="t-mgr-close">&times;</span></div>
        <div class="t-mgr-body">
            <div class="t-mgr-sidebar">
                <div class="t-mgr-sb-group">
                    <div class="t-mgr-sb-title">\u6A21\u5F0F</div>
                    <div class="t-mgr-sb-item active" data-filter="mode" data-val="all">\u5168\u90E8</div>
                    <div class="t-mgr-sb-item" data-filter="mode" data-val="echo">Echo</div>
                    <div class="t-mgr-sb-item" data-filter="mode" data-val="parallel">Parallel</div>
                </div>
                <div class="t-mgr-sb-group">
                    <div class="t-mgr-sb-title" style="display:flex; justify-content:space-between; align-items:center;">
                        <span>\u5206\u7C7B</span>
                        <i class="fa-solid fa-arrows-up-down" id="t-cat-sort-btn" style="cursor:pointer; color:#666; font-size:0.9em;" title="\u5206\u7C7B\u6392\u5E8F"></i>
                    </div>
                    <div id="t-mgr-cat-list"></div>
                </div>
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
                    <span class="t-imp-label">\u5267\u672C\u6A21\u5F0F:</span>
                    <div style="background:#111; padding:5px; border-radius:4px; border:1px solid #333; display:flex; gap:15px;">
                        <label><input type="radio" name="imp-mode-m" value="echo"> \u56DE\u58F0 (Echo)</label>
                        <label><input type="radio" name="imp-mode-m" value="parallel" checked> \u5E73\u884C (Parallel)</label>
                    </div>
                </div>
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
        
        <div id="t-cat-sort-modal" class="t-imp-modal">
            <div class="t-imp-box" style="max-height: 70vh; display: flex; flex-direction: column;">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px; flex-shrink:0;">\u2195\uFE0F \u5206\u7C7B\u6392\u5E8F</h3>
                <div style="font-size:0.85em; color:#888; margin-bottom:10px; flex-shrink:0;">
                    \u62D6\u62FD\u8C03\u6574\u5206\u7C7B\u987A\u5E8F\uFF0C\u6392\u5728\u524D\u9762\u7684\u5206\u7C7B\u4F1A\u4F18\u5148\u663E\u793A
                </div>
                <div id="t-cat-sort-list" style="flex-grow:1; overflow-y:auto; max-height: 300px;"></div>
                <div style="display:flex; gap:10px; margin-top:20px; flex-shrink:0;">
                    <button id="t-cat-sort-cancel" class="t-btn" style="flex:1;">\u53D6\u6D88</button>
                    <button id="t-cat-sort-ok" class="t-btn primary" style="flex:1;">\u4FDD\u5B58\u987A\u5E8F</button>
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
      $item.find(".t-cat-name").on("click", function() {
        $(".t-mgr-sb-item[data-filter='category']").removeClass("active");
        $item.addClass("active");
        currentFilter.category = c;
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
  };
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
      if (currentFilter.mode !== "all" && s.mode !== currentFilter.mode) return false;
      if (currentFilter.category !== "all") {
        const sCat = s.category || "\u672A\u5206\u7C7B";
        if (currentFilter.category !== "\u5168\u90E8" && sCat !== currentFilter.category) return false;
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
      const modeIcon = s.mode === "echo" ? '<i class="fa-solid fa-water" style="color:#90cdf4;"></i>' : '<i class="fa-solid fa-globe" style="color:#bfa15f;"></i>';
      const catLabel = s.category ? `<span class="t-mgr-tag">${s.category}</span>` : "";
      const presetLabel = !isUser ? `<span class="t-mgr-tag" style="background:#444;">\u9884\u8BBE</span>` : "";
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
      content += `Mode: ${s.mode}
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
      mode: s.mode,
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
        if (currentFilter.mode !== "all" && s.mode !== currentFilter.mode) return false;
        if (currentFilter.category !== "all") {
          const sCat = s.category || "\u672A\u5206\u7C7B";
          if (currentFilter.category !== "\u5168\u90E8" && sCat !== currentFilter.category) return false;
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
      if (currentFilter.mode !== "all" && s.mode !== currentFilter.mode) return false;
      if (currentFilter.category !== "all") {
        const sCat = s.category || "\u672A\u5206\u7C7B";
        if (currentFilter.category !== "\u5168\u90E8" && sCat !== currentFilter.category) return false;
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
    const defaultMode = $("input[name='imp-mode-m']:checked").val();
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
          desc: "\u5BFC\u5165\u6570\u636E",
          prompt: rawBody,
          mode: defaultMode,
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
    let movedCount = 0;
    (data.user_scripts || []).forEach((s) => {
      if (selectedIds.includes(s.id)) {
        s.category = targetCat;
        movedCount++;
      }
    });
    saveExtData();
    loadScripts();
    refreshAll();
    $("#t-move-modal").hide();
    $(".t-mgr-check").prop("checked", false);
    updateBatchCount();
    if (window.toastr) toastr.success(`\u5DF2\u5C06 ${movedCount} \u4E2A\u5267\u672C\u79FB\u81F3 "${targetCat}"`);
  });
  $("#t-cat-sort-btn").on("click", () => {
    const cats = getCategories().filter((c) => c !== "\u5168\u90E8");
    const $list = $("#t-cat-sort-list");
    $list.empty();
    if (cats.length === 0) {
      $list.append('<div style="text-align:center; color:#666; padding:20px;">\u6682\u65E0\u5206\u7C7B</div>');
      return;
    }
    cats.forEach((cat, idx) => {
      const $item = $(`
                <div class="t-cat-sort-item" data-cat="${cat}" style="
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    background: #2a2a2a;
                    border: 1px solid #444;
                    border-radius: 4px;
                    margin-bottom: 5px;
                    cursor: move;
                ">
                    <i class="fa-solid fa-grip-vertical" style="color:#666; margin-right:15px;"></i>
                    <span style="flex-grow:1;">${cat}</span>
                    <span style="color:#666; font-size:0.8em;">#${idx + 1}</span>
                </div>
            `);
      $list.append($item);
    });
    if (typeof Sortable !== "undefined") {
      new Sortable($list[0], {
        animation: 150,
        ghostClass: "t-sort-ghost"
      });
    } else {
      let draggedItem = null;
      $list.find(".t-cat-sort-item").each(function() {
        $(this).attr("draggable", "true");
        $(this).on("dragstart", function(e) {
          draggedItem = this;
          $(this).css("opacity", "0.5");
        });
        $(this).on("dragend", function() {
          $(this).css("opacity", "1");
          draggedItem = null;
        });
        $(this).on("dragover", function(e) {
          e.preventDefault();
        });
        $(this).on("drop", function(e) {
          e.preventDefault();
          if (draggedItem && draggedItem !== this) {
            const items = $list.find(".t-cat-sort-item").toArray();
            const fromIdx = items.indexOf(draggedItem);
            const toIdx = items.indexOf(this);
            if (fromIdx < toIdx) {
              $(this).after(draggedItem);
            } else {
              $(this).before(draggedItem);
            }
          }
        });
      });
    }
    $("#t-cat-sort-modal").css("display", "flex");
  });
  $("#t-cat-sort-cancel").on("click", () => $("#t-cat-sort-modal").hide());
  $("#t-cat-sort-ok").on("click", () => {
    const newOrder = [];
    $("#t-cat-sort-list .t-cat-sort-item").each(function() {
      newOrder.push($(this).data("cat"));
    });
    const data = getExtData();
    data.category_order = newOrder;
    saveExtData();
    refreshAll();
    $("#t-cat-sort-modal").hide();
    if (window.toastr) toastr.success("\u5206\u7C7B\u987A\u5E8F\u5DF2\u4FDD\u5B58");
  });
  $("#t-mgr-close").on("click", () => {
    $("#t-mgr-view").remove();
    $("#t-main-view").show();
    refreshScriptList($("#t-tab-echo").hasClass("active-echo"));
  });
  $(".t-mgr-sb-item[data-filter='mode']").on("click", function() {
    $(".t-mgr-sb-item[data-filter='mode']").removeClass("active");
    $(this).addClass("active");
    currentFilter.mode = $(this).data("val");
    renderList();
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
  let data = { id: Date.now().toString(), name: "\u65B0\u5267\u672C", desc: "", prompt: "", mode: "parallel", category: "" };
  if (isEdit) data = GlobalState.runtimeScripts.find((s) => s.id === id);
  const isPreset = data._type === "preset";
  if (source === "manager") {
    $("#t-mgr-view").hide();
  } else {
    $("#t-main-view").hide();
  }
  const checkEcho = data.mode === "echo" ? "checked" : "";
  const checkParallel = data.mode === "parallel" || !data.mode ? "checked" : "";
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

            <label>\u6A21\u5F0F:</label>
            <div style="margin-bottom:10px; display:flex; gap:15px;">
                <label><input type="radio" name="ed-mode" value="echo" ${checkEcho} ${isPreset ? "disabled" : ""}> <span style="color:#90cdf4;">\u56DE\u58F0</span></label>
                <label><input type="radio" name="ed-mode" value="parallel" ${checkParallel} ${isPreset ? "disabled" : ""}> <span style="color:#bfa15f;">\u5E73\u884C</span></label>
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
    $("#t-editor-view").hide();
    $("#t-overlay").append(`<div class="t-box" id="t-large-edit-view" style="height:90vh; max-height:95vh; max-width:800px;"><div class="t-header"><span class="t-title-main">\u5927\u5C4F\u6A21\u5F0F</span></div><div class="t-body" style="height:100%;"><textarea id="ed-large-text" class="t-input" style="flex-grow:1; resize:none; font-family:monospace; line-height:1.5; font-size:14px; height:100%;">${$("#ed-prompt").val()}</textarea><div class="t-btn-row"><button id="ed-large-ok" class="t-btn primary" style="flex:1;">\u786E\u8BA4</button><button id="ed-large-cancel" class="t-btn" style="flex:1;">\u53D6\u6D88</button></div></div></div>`);
    $("#ed-large-cancel").on("click", () => {
      $("#t-large-edit-view").remove();
      $("#t-editor-view").show();
    });
    $("#ed-large-ok").on("click", () => {
      $("#ed-prompt").val($("#ed-large-text").val());
      $("#t-large-edit-view").remove();
      $("#t-editor-view").show();
    });
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
      if (source === "manager") {
        $("#t-mgr-view").remove();
        openScriptManager();
      } else {
        $("#t-main-view").show();
      }
    });
  }
}

// src/ui/settingsWindow.js
function openSettingsWindow() {
  const data = getExtData();
  const cfg = data.config || {};
  const app = data.appearance || {};
  if (!app.color_bg) app.color_bg = "#2b2b2b";
  if (!app.color_icon) app.color_icon = "#ffffff";
  if (!app.color_notify_bg) app.color_notify_bg = app.color_bg || "#2b2b2b";
  app.type = app.type || "emoji";
  app.content = app.content || "\u{1F3AD}";
  app.color_theme = app.color_theme || "#bfa15f";
  app.color_notify = app.color_notify || "#55efc4";
  app.size = app.size || 56;
  const dirCfg = data.director || { length: "", perspective: "auto", style_ref: "" };
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
  $("#t-main-view").hide();
  const html = `
    <div class="t-box" id="t-settings-view">
        <div class="t-header"><span class="t-title-main">\u2699\uFE0F \u8BBE\u7F6E</span><span class="t-close" id="t-set-close">&times;</span></div>
        <div class="t-set-body">
            <div class="t-set-nav">
                <div class="t-set-tab-btn active" data-tab="appearance">\u{1F3A8} \u5916\u89C2\u8BBE\u7F6E</div>
                <div class="t-set-tab-btn" data-tab="connection">\u{1F50C} API \u8FDE\u63A5</div>
                <div class="t-set-tab-btn" data-tab="director">\u{1F3AC} \u5BFC\u6F14\u6A21\u5F0F</div>
                <div class="t-set-tab-btn" data-tab="automation">\u{1F916} \u81EA\u52A8\u5316</div>
                <div class="t-set-tab-btn" data-tab="data">\u{1F5C2}\uFE0F \u6570\u636E\u7BA1\u7406</div>
                <div class="t-set-tab-btn" data-tab="diagnostics" style="color:#ff9f43;"><i class="fa-solid fa-stethoscope"></i> \u8BCA\u65AD</div>
            </div>

            <div class="t-set-content">
                <!-- Tab 1: \u5916\u89C2 -->
                <div id="page-appearance" class="t-set-page active">
                    <div class="t-preview-container">
                        <div style="font-size:0.8em; color:#666; margin-bottom:15px;">\u5B9E\u65F6\u9884\u89C8</div>
                        <div id="p-ball" class="t-preview-ball"></div>
                        <div style="display:flex; gap:10px; margin-top:20px;">
                            <button class="t-tool-btn" id="btn-test-spin">\u26A1 \u6D4B\u8BD5\u6D41\u5149</button>
                            <button class="t-tool-btn" id="btn-test-notify">\u{1F514} \u6D4B\u8BD5\u547C\u5438</button>
                        </div>
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
                    <div class="t-form-group" style="margin-top:20px;">
                        <!-- [\u65B0\u589E] \u57FA\u7840\u5916\u89C2\u989C\u8272 -->
                        <div class="t-form-row"><span>\u7403\u4F53\u80CC\u666F\u8272</span><input type="color" id="p-color-bg" value="${tempApp.color_bg}" style="background:none; border:none; width:40px; height:30px;"></div>
                        <div class="t-form-row"><span>\u56FE\u6807\u6587\u5B57\u8272</span><input type="color" id="p-color-icon" value="${tempApp.color_icon}" style="background:none; border:none; width:40px; height:30px;"></div>
                        
                        <!-- \u539F\u6709\u7279\u6548\u989C\u8272 -->
                        <div class="t-form-row"><span>\u6D41\u5149\u4E3B\u9898\u8272</span><input type="color" id="p-color-theme" value="${tempApp.color_theme}" style="background:none; border:none; width:40px; height:30px;"></div>
                        <!-- \u901A\u77E5\u989C\u8272\u7EC4 -->
                        <div class="t-form-row"><span>\u901A\u77E5\u547C\u5438\u8272 (\u5149\u6655)</span><input type="color" id="p-color-notify" value="${tempApp.color_notify}" style="background:none; border:none; width:40px; height:30px;"></div>
                        <div class="t-form-row"><span>\u901A\u77E5\u80CC\u666F\u8272 (\u7403\u4F53)</span><input type="color" id="p-color-notify-bg" value="${tempApp.color_notify_bg}" style="background:none; border:none; width:40px; height:30px;"></div>
                    </div>
                    <div class="t-form-group" style="margin-top:15px; padding-top:15px; border-top:1px solid #333;">
                        <label style="cursor:pointer; display:flex; align-items:center;">
                            <input type="checkbox" id="p-show-timer" ${tempApp.show_timer !== false ? "checked" : ""} style="margin-right:10px;">
                            <span style="color:#ccc;">\u23F1\uFE0F \u663E\u793A\u751F\u6210\u8BA1\u65F6\u7EDF\u8BA1</span>
                        </label>
                        <p style="font-size:0.75em; color:#666; margin-top:5px; margin-left:22px;">\u751F\u6210\u65F6\u5728\u60AC\u6D6E\u7403\u4E0A\u65B9\u663E\u793A\u8017\u65F6</p>
                    </div>
                </div>

                <!-- Tab 2: \u8FDE\u63A5 -->
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
                        <i class="fa-solid fa-circle-info"></i> \u8FD9\u91CC\u8BBE\u7F6E\u7684\u662F\u201C\u9ED8\u8BA4\u503C\u201D\u3002\u5728\u6F14\u7ECE\u4E3B\u754C\u9762\u70B9\u51FB\u201C\u5BFC\u6F14\u6307\u4EE4\u201D\u6309\u94AE\u53EF\u8FDB\u884C\u4E34\u65F6\u8C03\u6574\u3002
                    </div>
                    <div class="t-form-group"><label class="t-form-label">\u9ED8\u8BA4\u7BC7\u5E45\u5EFA\u8BAE</label><input id="set-dir-len" class="t-input" value="${dirCfg.length}" placeholder="\u4F8B\u5982: 300\u5B57, 2\u4E2A\u6BB5\u843D"></div>
                    <div class="t-form-group"><label class="t-form-label">\u9ED8\u8BA4\u53D9\u4E8B\u89C6\u89D2</label><select id="set-dir-pers" class="t-input"><option value="auto" ${dirCfg.perspective === "auto" ? "selected" : ""}>\u81EA\u52A8 (\u8DDF\u968F\u5267\u672C)</option><option value="1st" ${dirCfg.perspective === "1st" ? "selected" : ""}>\u5F3A\u5236\u7B2C\u4E00\u4EBA\u79F0 (\u6211)</option><option value="3rd" ${dirCfg.perspective === "3rd" ? "selected" : ""}>\u5F3A\u5236\u7B2C\u4E09\u4EBA\u79F0 (\u4ED6/\u5979)</option></select></div>
                    <div class="t-form-group"><label class="t-form-label">\u9ED8\u8BA4\u6587\u7B14\u53C2\u8003 (\u4E0D\u8D85\u8FC71000\u5B57)</label><textarea id="set-dir-style" class="t-input" rows="5" placeholder="\u7C98\u8D34\u4F60\u559C\u6B22\u7684\u6587\u7B14\u6BB5\u843D...">${dirCfg.style_ref}</textarea></div>
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
                                <option value="follow" ${(cfg.auto_mode || "follow") === "follow" ? "selected" : ""}>\u{1F6E1}\uFE0F \u8DDF\u968F\u4E3B\u754C\u9762\u6A21\u5F0F (\u9ED8\u8BA4)</option>
                                <option value="category" ${(cfg.auto_mode || "follow") === "category" ? "selected" : ""}>\u{1F3AF} \u6307\u5B9A\u5206\u7C7B\u767D\u540D\u5355 (\u81EA\u5B9A\u4E49)</option>
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
                        <label class="t-form-label">\u56DE\u58F0\u6A21\u5F0F - \u5386\u53F2\u8BFB\u53D6\u884C\u6570</label>
                        <input type="number" id="cfg-history" class="t-input" value="${cfg.history_limit || 10}">
                    </div>
                </div>

                <!-- Tab 5: \u6570\u636E\u7BA1\u7406 -->
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
                </div>
                
                <!-- Tab 6: \u8BCA\u65AD (\u65B0\u589E) -->
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
  const renderPreview = () => {
    const $ball = $("#p-ball");
    const theme = $("#p-color-theme").val();
    const notify = $("#p-color-notify").val();
    const notifyBg = $("#p-color-notify-bg").val();
    const bg = $("#p-color-bg").val();
    const icon = $("#p-color-icon").val();
    const size = parseInt(tempApp.size) || 56;
    $ball.css({ width: size + "px", height: size + "px", fontSize: Math.floor(size * 0.46) + "px", borderColor: "transparent", boxShadow: `0 0 10px ${theme}` });
    $ball[0].style.setProperty("--p-theme", theme);
    $ball[0].style.setProperty("--p-notify", notify);
    $ball[0].style.setProperty("--p-notify-bg", notifyBg);
    $ball[0].style.setProperty("--p-bg", bg);
    $ball[0].style.setProperty("--p-icon", icon);
    if (tempApp.type === "emoji") $ball.html(tempApp.content);
    else if (tempApp.type === "image") {
      if (tempApp.content && tempApp.content.startsWith("data:")) {
        $ball.html(`<img src="${tempApp.content}">`);
        $("#btn-upload-card").css("background-image", `url('${tempApp.content}')`).find("i, span").hide();
      } else {
        $ball.html('<i class="fa-solid fa-image"></i>');
        $("#btn-upload-card").css("background-image", "").find("i, span").show();
      }
    }
  };
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
  $("#p-color-theme, #p-color-notify, #p-color-notify-bg, #p-color-bg, #p-color-icon").on("input", renderPreview);
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
  $("#btn-test-spin").on("click", () => {
    $("#p-ball").removeClass("p-notify").addClass("p-loading");
    setTimeout(() => $("#p-ball").removeClass("p-loading"), 3e3);
  });
  $("#btn-test-notify").on("click", () => {
    $("#p-ball").removeClass("p-loading").addClass("p-notify");
    setTimeout(() => $("#p-ball").removeClass("p-notify"), 3e3);
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
  $("#btn-open-mgr").on("click", () => {
    $("#t-settings-view").remove();
    openScriptManager();
  });
  $("#t-set-close").on("click", () => {
    $("#t-settings-view").remove();
    $("#t-main-view").show();
  });
  $("#t-set-save").on("click", () => {
    saveCurrentProfileToMemory();
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
      color_theme: $("#p-color-theme").val(),
      color_notify: $("#p-color-notify").val(),
      color_notify_bg: $("#p-color-notify-bg").val(),
      color_bg: $("#p-color-bg").val(),
      color_icon: $("#p-color-icon").val(),
      size: tempApp.size || 56,
      show_timer: $("#p-show-timer").is(":checked")
    };
    d.director = { length: $("#set-dir-len").val().trim(), perspective: $("#set-dir-pers").val(), style_ref: $("#set-dir-style").val().trim() };
    d.auto_continue = {
      enabled: $("#cfg-auto-continue").is(":checked"),
      max_retries: parseInt($("#cfg-continue-retries").val()) || 2,
      detection_mode: $("#cfg-continue-mode").val() || "html",
      show_indicator: $("#cfg-continue-indicator").is(":checked")
    };
    saveExtData();
    $("#t-settings-view").remove();
    $("#t-main-view").show();
    createFloatingButton();
    if (window.toastr) toastr.success("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
  });
  renderPreview();
  renderProfileUI();
}

// src/ui/favsWindow.js
async function saveFavorite() {
  const content = $("#t-output-content").html();
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
    date: (/* @__PURE__ */ new Date()).toLocaleString(),
    html: content,
    avatar: avatarSrc
    // 恢复保存具体路径
  };
  const data = getExtData();
  if (!data.favs) data.favs = [];
  data.favs.unshift(entry);
  saveExtData();
  const btn = $("#t-btn-like");
  btn.html('<i class="fa-solid fa-heart" style="color:#ff6b6b;"></i>').prop("disabled", true);
  if (window.toastr) toastr.success("\u6536\u85CF\u6210\u529F\uFF01");
}
function openFavsWindow() {
  $("#t-main-view").hide();
  const data = getExtData();
  const favs = data.favs || [];
  let currentFilteredList = [];
  let currentIndex = -1;
  let currentFavId = null;
  const charIndex = /* @__PURE__ */ new Set();
  favs.forEach((f) => {
    const meta = parseMeta(f.title || "");
    f._meta = meta;
    charIndex.add(meta.char);
  });
  const charList = ["\u5168\u90E8\u89D2\u8272", ...[...charIndex].sort()];
  const html = `
    <div class="t-box t-fav-container" id="t-favs-view">
        <div class="t-header" style="flex-shrink:0;">
            <span class="t-title-main">\u{1F4D6} \u6536\u85CF\u753B\u5ECA</span>
            <span class="t-close" id="t-fav-close">&times;</span>
        </div>
        
        <div class="t-fav-toolbar">
            <div style="display:flex; align-items:center; gap:10px; flex-grow:1;">
                <i class="fa-solid fa-filter" style="color:#666;"></i>
                <select id="t-fav-filter-char" class="t-fav-filter-select">
                    ${charList.map((c) => `<option value="${c}">${c}</option>`).join("")}
                </select>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <input type="text" id="t-fav-search" class="t-fav-search" placeholder="\u641C\u7D22\u5173\u952E\u8BCD...">
                <button id="t-btn-img-mgr" class="t-tool-btn" title="\u7BA1\u7406\u89D2\u8272\u80CC\u666F\u56FE"><i class="fa-regular fa-image"></i> \u56FE\u9274</button>
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
                    <button class="t-tool-btn" id="t-read-img" title="\u5BFC\u51FA\u56FE\u7247"><i class="fa-solid fa-camera"></i></button>
                    <button class="t-tool-btn" id="t-read-code" title="\u590D\u5236HTML"><i class="fa-solid fa-code"></i></button>
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
                        <div class="t-fav-card-footer"><span>${item.date.split(" ")[0]}</span></div>
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
    const $content = $("#t-read-content");
    $content.empty();
    setTimeout(() => {
      $content.html(item.html);
      $content.find("*").each(function() {
        const el = this;
        const style = window.getComputedStyle(el);
        if (style.animationName && style.animationName !== "none") {
          const clone = el.cloneNode(true);
          el.parentNode.replaceChild(clone, el);
        }
      });
    }, 10);
    $("#t-fav-reader").addClass("show");
  };
  $("#t-fav-filter-char, #t-fav-search").on("input change", renderGrid);
  $("#t-btn-img-mgr").on("click", () => {
    openCharImageManager(() => {
      renderGrid();
    });
  });
  $("#t-read-back").on("click", () => $("#t-fav-reader").removeClass("show"));
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
    navigator.clipboard.writeText($("#t-read-content").html());
    if (window.toastr) toastr.success("\u6E90\u7801\u5DF2\u590D\u5236");
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
    const parts = (f.title || "").split(" - ");
    if (parts.length >= 2) charNames.add(parts[parts.length - 1].trim());
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

// src/ui/debugWindow.js
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
  const dirDefaults = data.director || { length: "", perspective: "auto", style_ref: "" };
  const dLen = dirDefaults.length ? "\u5DF2\u4ECB\u5165" : "\u9ED8\u8BA4";
  const dPers = dirDefaults.perspective === "auto" ? "\u81EA\u52A8" : dirDefaults.perspective === "1st" ? "\u7B2C\u4E00\u4EBA\u79F0" : "\u7B2C\u4E09\u4EBA\u79F0";
  let activeProfileId = cfg.active_profile_id || "default";
  let profiles = cfg.profiles || [];
  let currentProfile = profiles.find((p) => p.id === activeProfileId) || { name: "\u672A\u77E5", model: "unknown" };
  let displayModel = currentProfile.type === "internal" ? "(\u8DDF\u968F ST)" : currentProfile.model || "gpt-3.5-turbo";
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
  if (dirDefaults.perspective === "1st") sysPrompt += " Write in First Person (I/Me).";
  else if (dirDefaults.perspective === "3rd") sysPrompt += ` Write in Third Person (${d.charName}).`;
  const sysTokens = estimateTokens(sysPrompt);
  let contextBlocks = [];
  contextBlocks.push({
    title: "[Roleplay Context]",
    content: `Character: ${d.charName}
User: ${d.userName}`,
    detail: "\u89D2\u8272\u4E0E\u7528\u6237\u7ED1\u5B9A"
  });
  let dirContent = "";
  if (data.director.length) dirContent += `[Director] Length: ${data.director.length}
`;
  if (data.director.style_ref) dirContent += `[Director] Style Ref: (Provided)
`;
  if (dirContent) {
    contextBlocks.push({ title: "[Director]", content: dirContent.trim(), detail: "\u5BFC\u6F14\u989D\u5916\u6307\u4EE4" });
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
  if (script.mode === "echo") {
    const limit = cfg.history_limit || 10;
    const hist = getChatHistory(limit);
    const histLines = hist ? hist.split("\n").length : 0;
    contextBlocks.push({
      title: "[Conversation History]",
      content: hist && hist.trim() ? hist : "(\u65E0\u5386\u53F2\u8BB0\u5F55)",
      detail: `\u804A\u5929\u8BB0\u5F55 (${histLines} \u884C)`
    });
  } else {
    contextBlocks.push({
      title: "[Mode Info]",
      content: "Alternate Universe (Ignore chat history)",
      detail: "\u5E73\u884C\u4E16\u754C\u6A21\u5F0F"
    });
  }
  const finalScriptPrompt = script.prompt.replace(/{{char}}/g, d.charName).replace(/{{user}}/g, d.userName);
  contextBlocks.push({
    title: "[Scenario Request]",
    content: finalScriptPrompt,
    detail: "\u5267\u672C\u6838\u5FC3\u6307\u4EE4",
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
            <div class="t-dbg-stat-item"><i class="fa-solid fa-fingerprint"></i> Scope: <span class="t-dbg-highlight">${scopeId}</span></div>
            <div class="t-dbg-stat-item" style="margin-left:auto; color:#bfa15f;"><i class="fa-solid fa-coins"></i> Total Est: ${sysTokens + totalUserTokens} tokens</div>
        </div>

        <div class="t-dbg-body">
            <!-- \u5DE6\u4FA7\uFF1A\u53C2\u6570\u8868 -->
            <div class="t-dbg-sidebar">
                <div class="t-param-group">
                    <div class="t-param-title">\u57FA\u672C\u4FE1\u606F</div>
                    <div class="t-param-row"><span class="t-param-key">\u5267\u672C</span><span class="t-param-val" style="color:#bfa15f; max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${script.name}</span></div>
                    <div class="t-param-row"><span class="t-param-key">\u6A21\u5F0F</span><span class="t-param-val">${script.mode === "echo" ? "\u56DE\u58F0" : "\u5E73\u884C"}</span></div>
                </div>
                <div class="t-param-group">
                    <div class="t-param-title">\u5BFC\u6F14\u53C2\u6570</div>
                    <div class="t-param-row"><span class="t-param-key">\u89C6\u89D2</span><span class="t-param-val">${dPers}</span></div>
                    <div class="t-param-row"><span class="t-param-key">\u7BC7\u5E45</span><span class="t-param-val">${dLen}</span></div>
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
                        <span><i class="fa-solid fa-microchip"></i> System Instruction</span>
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

// src/ui/mainWindow.js
function refreshScriptList(isEchoMode) {
  const $sel = $("#t-sel-script");
  $sel.empty();
  const targetMode = isEchoMode ? "echo" : "parallel";
  const validScripts = GlobalState.runtimeScripts.filter((s) => s.mode === targetMode);
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
  const isEcho = s.mode === "echo";
  const modeName = isEcho ? "\u{1F30A} \u56DE\u58F0" : "\u{1FA90} \u5E73\u884C";
  const modeColor = isEcho ? "#90cdf4" : "#bfa15f";
  const bgColor = isEcho ? "rgba(144, 205, 244, 0.15)" : "rgba(191, 161, 95, 0.15)";
  const $catTag = $("#t-lbl-cat");
  $catTag.text(`${modeName} \xB7 ${s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")}`);
  $catTag.css({
    "color": modeColor,
    "background": bgColor,
    "border": `1px solid ${modeColor}33`
  });
  $("#t-lbl-desc-mini").text(s.desc || "\u65E0\u7B80\u4ECB");
  $("#t-txt-desc").val(s.desc);
}
async function openMainWindow() {
  if ($("#t-overlay").length) return;
  let ctx = { charName: "Char", userName: "User" };
  try {
    const ctxPromise = getContextData();
    const timeoutPromise = new Promise(
      (resolve) => setTimeout(() => {
        console.warn("Titania: getContextData \u8D85\u65F6\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C");
        resolve({ charName: "Char", userName: "User" });
      }, 3e3)
    );
    ctx = await Promise.race([ctxPromise, timeoutPromise]);
  } catch (e) {
    console.error("Titania: \u83B7\u53D6\u4E0A\u4E0B\u6587\u6570\u636E\u5931\u8D25\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C", e);
  }
  let data;
  try {
    data = getExtData();
  } catch (e) {
    console.error("Titania: \u83B7\u53D6\u6269\u5C55\u6570\u636E\u5931\u8D25", e);
    data = { ui_mode_echo: true };
  }
  let savedMode = data.ui_mode_echo !== false;
  const initialContent = GlobalState.lastGeneratedContent ? GlobalState.lastGeneratedContent : '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#555;"><i class="fa-solid fa-clapperboard" style="font-size:3em; margin-bottom:15px; opacity:0.5;"></i><div style="font-size:1.1em;">\u8BF7\u9009\u62E9\u5267\u672C\uFF0C\u5F00\u59CB\u6F14\u7ECE...</div></div>';
  const html = `
    <div id="t-overlay" class="t-overlay">
        <div class="t-box" id="t-main-view">
            
            <div class="t-header" style="flex-shrink:0;">
                <div class="t-title-container" style="display:flex; align-items:baseline; overflow:hidden;">
                    <div class="t-title-main" style="white-space:nowrap;">\u56DE\u58F0\u5C0F\u5267\u573A</div>
                    <div class="t-title-sub">
                        \u2728 \u4E3B\u6F14: ${ctx.charName}
                    </div>
                </div>
                <div style="display:flex; align-items:center; flex-shrink:0;">
                    <i class="fa-solid fa-book-bookmark t-icon-btn" id="t-btn-favs" title="\u56DE\u58F0\u6536\u85CF\u5939"></i>
                    <i class="fa-solid fa-book-atlas t-icon-btn" id="t-btn-worldinfo" title="\u4E16\u754C\u4E66\u6761\u76EE\u7B5B\u9009"></i>
                    <i class="fa-solid fa-network-wired t-icon-btn" id="t-btn-profiles" title="\u5FEB\u901F\u5207\u6362API\u65B9\u6848"></i>
                    <i class="fa-solid fa-gear t-icon-btn" id="t-btn-settings" title="\u8BBE\u7F6E"></i>
                    <span class="t-close" id="t-btn-close">&times;</span>
                </div>
            </div>

            <div class="t-top-bar">
                <div class="t-tabs">
                    <div class="t-tab ${savedMode ? "active-echo" : ""}" id="t-tab-echo">\u{1F30A} \u56DE\u58F0\u6A21\u5F0F</div>
                    <div class="t-tab ${!savedMode ? "active-parallel" : ""}" id="t-tab-parallel">\u{1FA90} \u5E73\u884C\u4E16\u754C</div>
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
                <div class="t-zen-btn" id="t-btn-zen" title="\u6C89\u6D78\u9605\u8BFB\u6A21\u5F0F"><i class="fa-solid fa-expand"></i></div>
                <div class="t-content-area">
                    <div id="t-output-content">${initialContent}</div>
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
  const switchMode = (isEcho, resetFilter = true) => {
    savedMode = isEcho;
    if (resetFilter) {
      GlobalState.currentCategoryFilter = "ALL";
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
  const handleRandom = () => {
    const targetModeStr = savedMode ? "echo" : "parallel";
    const allModeScripts = GlobalState.runtimeScripts.filter((s2) => s2.mode === targetModeStr);
    if (allModeScripts.length === 0) {
      if (window.toastr) toastr.warning(`[${targetModeStr}] \u6A21\u5F0F\u4E0B\u6682\u65E0\u53EF\u7528\u5267\u672C\u3002`, "Titania");
      $("#t-lbl-name").text("\u6682\u65E0\u5267\u672C");
      $("#t-lbl-cat").text(targetModeStr === "echo" ? "\u{1F30A} \u56DE\u58F0\u6A21\u5F0F" : "\u{1FA90} \u5E73\u884C\u4E16\u754C");
      $("#t-lbl-desc-mini").text("\u8BF7\u521B\u5EFA\u6216\u5BFC\u5165\u5267\u672C\uFF0C\u6216\u5207\u6362\u5230\u5176\u4ED6\u6A21\u5F0F");
      return;
    }
    let pool = allModeScripts;
    if (GlobalState.currentCategoryFilter !== "ALL") {
      pool = pool.filter((s2) => (s2.category || (s2._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")) === GlobalState.currentCategoryFilter);
    }
    if (pool.length === 0) {
      if (window.toastr) toastr.warning(`[${targetModeStr}] \u6A21\u5F0F\u4E0B\u6CA1\u627E\u5230 [${GlobalState.currentCategoryFilter}] \u5206\u7C7B\u7684\u5267\u672C\uFF0C\u5DF2\u5207\u6362\u5230\u5168\u90E8\u3002`, "Titania");
      GlobalState.currentCategoryFilter = "ALL";
      updateFilterUI();
      pool = allModeScripts;
    }
    const rnd = Math.floor(Math.random() * pool.length);
    const s = pool[rnd];
    applyScriptSelection(s.id);
    const dice = $("#t-btn-dice");
    dice.css("transform", `rotate(${Math.random() * 360}deg) scale(1.1)`);
    setTimeout(() => dice.css("transform", "rotate(0deg) scale(1)"), 300);
  };
  $("#t-tab-echo").on("click", () => switchMode(true, true));
  $("#t-tab-parallel").on("click", () => switchMode(false, true));
  $("#t-trigger-btn").on("click", () => showScriptSelector(savedMode, GlobalState.currentCategoryFilter));
  $("#t-btn-filter").on("click", function(e) {
    renderFilterMenu(savedMode, GlobalState.currentCategoryFilter, $(this), (newCat) => {
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
  $("#t-btn-zen").on("click", function() {
    const view = $("#t-main-view");
    view.toggleClass("t-zen-mode");
    const isZen = view.hasClass("t-zen-mode");
    $(this).html(isZen ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>');
    if (isZen) $(this).css("background", "transparent");
    else $(this).css("background", "rgba(30, 30, 30, 0.6)");
  });
  $(document).on("keydown.zenmode", function(e) {
    if (e.key === "Escape" && $("#t-main-view").hasClass("t-zen-mode")) $("#t-btn-zen").click();
  });
  $("#t-btn-close").on("click", () => {
    $("#t-overlay").remove();
    $(document).off("keydown.zenmode");
  });
  $("#t-overlay").on("click", (e) => {
    if (e.target === e.currentTarget) {
      $("#t-overlay").remove();
      $(document).off("keydown.zenmode");
    }
  });
  $("#t-btn-profile").on("click", function(e) {
    renderProfileMenu($(this));
    e.stopPropagation();
  });
  $("#t-btn-settings").on("click", openSettingsWindow);
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
  $("#t-btn-copy").on("click", () => {
    const htmlCode = $("#t-output-content").html();
    navigator.clipboard.writeText(htmlCode);
    const btn = $("#t-btn-copy");
    const h = btn.html();
    btn.html('<i class="fa-solid fa-check"></i> \u5DF2\u590D\u5236');
    setTimeout(() => btn.html(h), 1e3);
  });
  $("#t-btn-run").on("click", () => handleGenerate(null, false));
  $("#t-btn-like").on("click", saveFavorite);
  $("#t-btn-profiles").on("click", function(e) {
    renderProfileMenu($(this));
    e.stopPropagation();
  });
  $("#t-btn-favs").on("click", openFavsWindow);
  $("#t-btn-worldinfo").on("click", openWorldInfoSelector);
  $("#t-btn-debug").on("click", async () => await showDebugInfo());
  switchMode(savedMode, false);
  let initialScriptId = GlobalState.lastUsedScriptId;
  if (GlobalState.lastGeneratedContent && GlobalState.lastGeneratedScriptId) {
    initialScriptId = GlobalState.lastGeneratedScriptId;
  }
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
    entries.forEach((book) => {
      const bookSel = charSelections ? charSelections[book.bookName] || [] : [];
      const $bookSection = $(`
                <div class="t-wi-book">
                    <div class="t-wi-book-header">
                        <i class="fa-solid fa-book" style="color:#bfa15f;"></i>
                        <span>${book.bookName}</span>
                        <span style="color:#666; font-size:0.8em;">(${book.entries.length} \u6761\u76EE)</span>
                    </div>
                    <div class="t-wi-entries" data-book="${book.bookName}"></div>
                </div>
            `);
      const $entriesContainer = $bookSection.find(".t-wi-entries");
      book.entries.forEach((entry) => {
        const isSelected = isFirstTime ? true : bookSel.includes(entry.uid);
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
                    </div>
                `);
        $entry.find("input").on("change", function() {
          const checked = $(this).is(":checked");
          $entry.toggleClass("selected", checked);
          updateStat();
        });
        $entriesContainer.append($entry);
      });
      $body.append($bookSection);
    });
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
function renderFilterMenu(isEchoMode, currentFilter, $targetBtn, onSelect) {
  if ($("#t-filter-popover").length) {
    $("#t-filter-popover").remove();
    return;
  }
  const targetMode = isEchoMode ? "echo" : "parallel";
  const list = GlobalState.runtimeScripts.filter((s) => s.mode === targetMode);
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
function showScriptSelector(isEchoMode, initialFilter = "ALL") {
  if ($("#t-selector-panel").length) return;
  const targetMode = isEchoMode ? "echo" : "parallel";
  const list = GlobalState.runtimeScripts.filter((s) => s.mode === targetMode);
  let categories = ["\u5168\u90E8"];
  const scriptCats = [...new Set(list.map((s) => s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")))];
  categories = categories.concat(scriptCats.sort());
  const html = `
    <div id="t-selector-panel" class="t-selector-panel">
        <div class="t-sel-header">
            <div style="font-weight:bold; color:#ccc;">\u{1F4DA} \u9009\u62E9\u5267\u672C <span style="font-size:0.8em; color:#666; font-weight:normal; margin-left:10px;">(\u5171 ${list.length} \u4E2A)</span></div>
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
    const targetCat = filterCat === "ALL" ? "\u5168\u90E8" : filterCat;
    const filtered = targetCat === "\u5168\u90E8" ? list : list.filter((s) => (s.category || (s._type === "preset" ? "\u5B98\u65B9\u9884\u8BBE" : "\u672A\u5206\u7C7B")) === targetCat);
    if (filtered.length === 0) {
      $grid.append('<div style="grid-column:1/-1; text-align:center; color:#555; margin-top:50px;">\u6B64\u5206\u7C7B\u4E0B\u6682\u65E0\u5267\u672C</div>');
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
  const startCat = initialFilter === "ALL" ? "\u5168\u90E8" : initialFilter;
  categories.forEach((cat) => {
    const btn = $(`<div class="t-sel-cat-btn">${cat}</div>`);
    if (cat === startCat) btn.addClass("active");
    btn.on("click", function() {
      $(".t-sel-cat-btn").removeClass("active");
      $(this).addClass("active");
      renderGrid(cat);
    });
    $sidebar.append(btn);
  });
  renderGrid(startCat);
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

// src/ui/floatingBtn.js
function startTimer() {
  const settings2 = getExtData();
  const app = settings2.appearance || {};
  if (app.show_timer === false) return;
  GlobalState.timerStartTime = Date.now();
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
  const timerWidth = $timer.outerWidth() || 30;
  const left = btnRect.left + btnRect.width / 2 - timerWidth / 2;
  const top = btnRect.top - 24;
  $timer.css({
    left: Math.max(5, left) + "px",
    top: Math.max(5, top) + "px"
  });
}
function createFloatingButton() {
  $("#titania-float-btn").remove();
  $("#titania-timer").remove();
  $("#titania-float-style").remove();
  const settings2 = getExtData();
  if (typeof extension_settings !== "undefined" && extension_settings[extensionName] && !extension_settings[extensionName].enabled) {
    return;
  }
  const app = settings2.appearance || { type: "emoji", content: "\u{1F3AD}", color_theme: "#bfa15f", color_notify: "#55efc4", size: 56 };
  const size = parseInt(app.size) || 56;
  const btnContent = app.type === "image" && app.content.startsWith("data:") ? `<img src="${app.content}">` : `<span style="position:relative; z-index:2;">${app.content}</span>`;
  const btn = $(`<div id="titania-float-btn">${btnContent}</div>`);
  const timer = $(`<div id="titania-timer">0.0s</div>`);
  btn.css({
    "--t-size": `${size}px`,
    "--t-theme": app.color_theme,
    "--t-notify": app.color_notify,
    "--t-bg": app.color_bg || "#2b2b2b",
    "--t-icon": app.color_icon || "#ffffff",
    "--t-notify-bg": app.color_notify_bg || app.color_bg || "#2b2b2b"
    // [新增]
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
  $(document).on("touchend mouseup", function() {
    if (startX === void 0) return;
    startX = void 0;
    if (isDragging) {
      const rect = btn[0].getBoundingClientRect();
      const snapThreshold = window.innerWidth / 2;
      const targetLeft = rect.left + size / 2 < snapThreshold ? 0 : window.innerWidth - size;
      btn.css({ "transition": "all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)", "left": targetLeft + "px" });
      setTimeout(updateTimerPosition, 350);
    } else {
      if (GlobalState.isGenerating) {
        if (window.toastr) toastr.info("\u{1F3AD} \u5C0F\u5267\u573A\u6B63\u5728\u540E\u53F0\u6F14\u7ECE\u4E2D\uFF0C\u8BF7\u7A0D\u5019...", "Titania Echo");
        return;
      }
      btn.removeClass("t-notify");
      openMainWindow();
    }
  });
}

// src/core/api.js
async function handleGenerate(forceScriptId = null, silent = false) {
  const data = getExtData();
  const cfg = data.config || {};
  const dirDefaults = data.director || { length: "", perspective: "auto", style_ref: "" };
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
  let activeProfileId = cfg.active_profile_id || "default";
  let profiles = cfg.profiles || [
    { id: "st_sync", name: "\u{1F517} \u8DDF\u968F SillyTavern", type: "internal" },
    { id: "default", name: "\u9ED8\u8BA4\u81EA\u5B9A\u4E49", type: "custom", url: cfg.url || "", key: cfg.key || "", model: cfg.model || "gpt-3.5-turbo" }
  ];
  let currentProfile = profiles.find((p) => p.id === activeProfileId) || profiles[1];
  diagnostics.profile = currentProfile.name;
  let finalUrl = "", finalKey = "", finalModel = "";
  if (currentProfile.type === "internal") {
    if (typeof settings !== "undefined") {
      finalUrl = settings.api_url_openai || "";
      finalKey = settings.api_key_openai || "";
      finalModel = settings.api_model_openai || "gpt-3.5-turbo";
    } else {
      const errText = "\u9519\u8BEF\uFF1A\u65E0\u6CD5\u8BFB\u53D6 SillyTavern \u5168\u5C40\u8BBE\u7F6E";
      if (!silent) alert(errText);
      TitaniaLogger.error("\u914D\u7F6E\u9519\u8BEF", errText, diagnostics);
      return;
    }
  } else {
    finalUrl = currentProfile.url || "";
    finalKey = currentProfile.key || "";
    finalModel = currentProfile.model || "gpt-3.5-turbo";
  }
  diagnostics.model = finalModel;
  diagnostics.endpoint = finalUrl;
  if (!finalKey && currentProfile.type !== "internal") {
    alert("\u914D\u7F6E\u7F3A\u5931\uFF1A\u8BF7\u5148\u53BB\u8BBE\u7F6E\u586B API Key\uFF01");
    return;
  }
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
  if (!silent) $("#t-overlay").remove();
  GlobalState.isGenerating = true;
  $floatBtn.addClass("t-loading");
  $("#t-btn-like").html('<i class="fa-regular fa-heart"></i>').prop("disabled", false);
  startTimer();
  if (!silent && window.toastr) toastr.info(`\u{1F680} [${currentProfile.name}] \u6B63\u5728\u8FDE\u63A5\u6A21\u578B\u6F14\u7ECE...`, "Titania Echo");
  try {
    diagnostics.phase = "prepare_prompt";
    const scopeId = generateScopeId();
    const dLen = dirDefaults.length;
    const dPers = dirDefaults.perspective;
    const dStyle = dirDefaults.style_ref;
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
    if (dPers === "1st") sys += " Write strictly in First Person perspective (I/Me).";
    else if (dPers === "3rd") sys += ` Write strictly in Third Person perspective (${ctx.charName}/He/She).`;
    let user = `[Roleplay Context]
Character: ${ctx.charName}
User: ${ctx.userName}

`;
    let directorInstruction = "";
    if (dLen) directorInstruction += `1. Length: Keep response around ${dLen}.
`;
    if (dStyle) directorInstruction += `2. Style Reference: Mimic this vibe (do not copy text):
<style_ref>
${dStyle.substring(0, 1e3)}
</style_ref>
`;
    if (directorInstruction) user += `[Director Instructions]
${directorInstruction}
`;
    if (ctx.persona) user += `[Character Persona]
${ctx.persona}

`;
    if (ctx.worldInfo) user += `[World Info]
${ctx.worldInfo}

`;
    if (script.mode === "echo") {
      const limit = cfg.history_limit || 10;
      const history = getChatHistory(limit);
      user += history && history.trim().length > 0 ? `[Conversation History]
${history}

` : `[Conversation History]
(Empty)

`;
    } else {
      user += `[Mode]
Alternate Universe (Ignore chat history)

`;
    }
    user += `[Scenario Request]
${script.prompt.replace(/{{char}}/g, ctx.charName).replace(/{{user}}/g, ctx.userName)}`;
    diagnostics.input_stats.sys_len = sys.length;
    diagnostics.input_stats.user_len = user.length;
    TitaniaLogger.info(`\u5F00\u59CB\u751F\u6210: ${script.name}`, { profile: currentProfile.name, scopeId });
    diagnostics.phase = "fetch_start";
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
      })
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
    if (!rawContent || rawContent.trim().length === 0) throw new Error("ERR_EMPTY_CONTENT");
    diagnostics.phase = "validation";
    let cleanContent = rawContent.replace(/```html/gi, "").replace(/```/g, "").trim();
    let finalOutput = scopeAndSanitizeHTML(cleanContent, scopeId);
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
            GlobalState.continuation.currentScopeId = scopeId;
            GlobalState.continuation.accumulatedContent = finalOutput;
            GlobalState.continuation.originalPrompt = script.prompt.replace(/{{char}}/g, ctx.charName).replace(/{{user}}/g, ctx.userName);
            GlobalState.continuation.characterName = ctx.charName;
            GlobalState.continuation.userName = ctx.userName;
          } else {
            GlobalState.continuation.accumulatedContent = mergeContinuationContent(
              GlobalState.continuation.accumulatedContent,
              finalOutput,
              GlobalState.continuation.currentScopeId,
              autoContinueCfg.show_indicator !== false
            );
          }
          GlobalState.continuation.retryCount++;
          if (!silent && window.toastr) {
            toastr.info(`\u{1F504} \u68C0\u6D4B\u5230\u622A\u65AD\uFF0C\u6B63\u5728\u81EA\u52A8\u7EED\u5199 (${currentRetry + 1}/${maxRetries})...`, "Titania Echo");
          }
          await performContinuation(script, ctx, cfg, finalUrl, finalKey, finalModel, scopeId, autoContinueCfg, silent);
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
          GlobalState.continuation.currentScopeId,
          autoContinueCfg.show_indicator !== false
        );
        TitaniaLogger.info("\u81EA\u52A8\u7EED\u5199\u5B8C\u6210", { totalRetries: GlobalState.continuation.retryCount });
      }
    }
    resetContinuationState();
    GlobalState.lastGeneratedContent = finalOutput;
    GlobalState.lastGeneratedScriptId = script.id;
    diagnostics.phase = "complete";
    stopTimer();
    const elapsed = GlobalState.lastGenerationTime / 1e3;
    if (!silent && window.toastr) toastr.success(`\u2728 \u300A${script.name}\u300B\u6F14\u7ECE\u5B8C\u6210\uFF01(${elapsed.toFixed(1)}s)`, "Titania Echo");
    $floatBtn.addClass("t-notify");
  } catch (e) {
    console.error("Titania Generate Error:", e);
    stopTimer();
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
    $floatBtn.removeClass("t-loading");
  }
}
async function performContinuation(script, ctx, cfg, finalUrl, finalKey, finalModel, scopeId, autoContinueCfg, silent) {
  const $floatBtn = $("#titania-float-btn");
  const useStream = cfg.stream !== false;
  try {
    const { lastContent } = extractContinuationContext(
      GlobalState.continuation.accumulatedContent,
      800
      // 提取最后 800 个字符作为上下文
    );
    const textSummary = extractTextSummary(GlobalState.continuation.accumulatedContent, 500);
    const continuationSys = `You are continuing a Visual Scene that was interrupted.

[Original Scene Context]
Character: ${GlobalState.continuation.characterName}
User: ${GlobalState.continuation.userName}
Scene Request: ${GlobalState.continuation.originalPrompt}

[Your Task]
Continue the HTML/CSS scene from where it was cut off. You must maintain:
- The same visual style and CSS theme
- The same narrative tone and perspective
- Consistent character portrayal

[Technical Rules - STRICT]
1. **Container ID**: Continue using the SAME container ID: #${GlobalState.continuation.currentScopeId}
2. **Scoped CSS**: If adding new styles, ALL selectors MUST start with #${GlobalState.continuation.currentScopeId}
3. **No Repetition**: Do NOT repeat any content that already exists
4. **Complete First**: First complete any unfinished sentences or HTML tags
5. **Then Continue**: Then continue the narrative naturally until a proper conclusion
6. **Format**: Output raw HTML string. No markdown (\`\`\`).
7. **Language**: Continue in Chinese.`;
    const continuationUser = `[Content Summary - What has been written so far]
${textSummary || "(No text content extracted)"}

[HTML Ending - Where it was cut off]
---
${lastContent}
---

[Task]
1. First, complete any unfinished sentences, paragraphs, or HTML structures from the cut-off point
2. Then, continue the narrative naturally based on the original scene request
3. End the scene with a proper conclusion

Remember: Use the same CSS scope #${GlobalState.continuation.currentScopeId} for any new styles.`;
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
      })
    });
    if (!res.ok) {
      throw new Error(`Continuation HTTP Error ${res.status}: ${res.statusText}`);
    }
    let rawContent = "";
    if (useStream) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      while (true) {
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
    if (!rawContent || rawContent.trim().length === 0) {
      throw new Error("ERR_EMPTY_CONTINUATION");
    }
    let cleanContent = rawContent.replace(/```html/gi, "").replace(/```/g, "").trim();
    let continuationOutput = cleanContent;
    const truncationResult = detectTruncation(continuationOutput, autoContinueCfg.detection_mode || "html");
    const maxRetries = autoContinueCfg.max_retries || 2;
    if (truncationResult.isTruncated && GlobalState.continuation.retryCount < maxRetries) {
      GlobalState.continuation.accumulatedContent = mergeContinuationContent(
        GlobalState.continuation.accumulatedContent,
        continuationOutput,
        GlobalState.continuation.currentScopeId,
        autoContinueCfg.show_indicator !== false
      );
      GlobalState.continuation.retryCount++;
      if (!silent && window.toastr) {
        toastr.info(`\u{1F504} \u7EED\u5199\u5185\u5BB9\u4ECD\u88AB\u622A\u65AD\uFF0C\u7EE7\u7EED\u5C1D\u8BD5 (${GlobalState.continuation.retryCount}/${maxRetries})...`, "Titania Echo");
      }
      await performContinuation(script, ctx, cfg, finalUrl, finalKey, finalModel, scopeId, autoContinueCfg, silent);
    } else {
      const finalOutput = mergeContinuationContent(
        GlobalState.continuation.accumulatedContent,
        continuationOutput,
        GlobalState.continuation.currentScopeId,
        autoContinueCfg.show_indicator !== false
      );
      const totalRetries = GlobalState.continuation.retryCount;
      resetContinuationState();
      GlobalState.lastGeneratedContent = finalOutput;
      GlobalState.lastGeneratedScriptId = script.id;
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
    $floatBtn.removeClass("t-loading");
  }
}

// src/entry.js
async function onGenerationEnded() {
  const extData = getExtData();
  const cfg = extData.config || {};
  if (!extension_settings3[extensionName].enabled || !cfg.auto_generate) return;
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
  const autoMode = cfg.auto_mode || "follow";
  if (autoMode === "category") {
    const allowedCats = cfg.auto_categories || [];
    if (allowedCats.length === 0) {
      console.log("Titania Auto: Category mode selected but whitelist is empty.");
      return;
    }
    pool = GlobalState.runtimeScripts.filter((s) => allowedCats.includes(getCat(s)));
  } else {
    const isEcho = extData.ui_mode_echo !== false;
    const targetMode = isEcho ? "echo" : "parallel";
    pool = GlobalState.runtimeScripts.filter((s) => s.mode === targetMode);
  }
  if (pool.length === 0) return;
  const randomScript = pool[Math.floor(Math.random() * pool.length)];
  console.log(`Titania Auto: Triggered [${autoMode}] -> Use script: ${randomScript.name}`);
  setTimeout(() => {
    handleGenerate(randomScript.id, true);
  }, 500);
}
async function initEchoTheater() {
  console.log(`Titania Echo v${CURRENT_VERSION}: Enabled.`);
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
  createFloatingButton();
  eventSource.on(event_types.GENERATION_ENDED, onGenerationEnded);
}
function disableEchoTheater() {
  console.log(`Titania Echo v${CURRENT_VERSION}: Disabled.`);
  $("#titania-float-btn").remove();
  $("#titania-float-style").remove();
  $("#t-overlay").remove();
  eventSource.off(event_types.GENERATION_ENDED, onGenerationEnded);
}
async function loadExtensionSettings() {
  extension_settings3[extensionName] = extension_settings3[extensionName] || {};
  if (Object.keys(extension_settings3[extensionName]).length === 0) {
    Object.assign(extension_settings3[extensionName], defaultSettings);
  }
  $("#enable_echo_theater").prop("checked", extension_settings3[extensionName].enabled);
  $("#enable_echo_theater").on("input", function() {
    const isEnabled = $(this).prop("checked");
    extension_settings3[extensionName].enabled = isEnabled;
    saveSettingsDebounced2();
    if (isEnabled) initEchoTheater();
    else disableEchoTheater();
  });
  if (extension_settings3[extensionName].enabled) {
    initEchoTheater();
  }
  checkVersionUpdate();
}
async function checkVersionUpdate() {
  const extData = getExtData();
  const lastSeenVersion = extData.last_seen_version || "0.0.0";
  if (compareVersions(CURRENT_VERSION, lastSeenVersion) > 0) {
    $("#titania-new-badge").show().attr("title", "\u70B9\u51FB\u67E5\u770B\u66F4\u65B0\u65E5\u5FD7");
    $("#titania-new-badge").off("click").on("click", showChangelog);
    return;
  }
  try {
    const remoteVersion = await fetchRemoteVersion();
    const ignoredVersion = extData.ignored_version || "0.0.0";
    if (remoteVersion && remoteVersion === ignoredVersion) {
      $("#titania-new-badge").hide();
      return;
    }
    if (remoteVersion && compareVersions(remoteVersion, CURRENT_VERSION) > 0) {
      $("#titania-new-badge").show().addClass("update-available").attr("title", `\u53D1\u73B0\u65B0\u7248\u672C v${remoteVersion}\uFF0C\u70B9\u51FB\u67E5\u770B`).text("UPDATE");
      $("#titania-new-badge").off("click").on("click", () => {
        showUpdateNotice(remoteVersion);
      });
      console.log(`Titania: \u53D1\u73B0\u65B0\u7248\u672C v${remoteVersion}\uFF0C\u5F53\u524D\u7248\u672C v${CURRENT_VERSION}`);
    } else {
      $("#titania-new-badge").hide();
    }
  } catch (e) {
    console.warn("Titania: \u8FDC\u7A0B\u7248\u672C\u68C0\u6D4B\u5931\u8D25", e);
    $("#titania-new-badge").hide();
  }
}
async function fetchRemoteVersion() {
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
      const decodedContent = atob(data.content.replace(/\n/g, ""));
      const manifest = JSON.parse(decodedContent);
      return manifest.version || null;
    }
    return null;
  } catch (e) {
    console.warn("Titania: \u83B7\u53D6\u8FDC\u7A0B\u7248\u672C\u5931\u8D25", e);
    return null;
  }
}
function showUpdateNotice(remoteVersion) {
  if ($(".titania-update-overlay").length) return;
  const html = `
    <div class="titania-changelog-overlay titania-update-overlay">
        <div class="titania-changelog-box">
            <div class="titania-changelog-header" style="background: linear-gradient(135deg, #00b894, #00cec9);">
                <span>\u{1F680} \u53D1\u73B0\u65B0\u7248\u672C v${remoteVersion}</span>
                <span class="titania-changelog-close">&times;</span>
            </div>
            <div class="titania-changelog-body" style="text-align:center; padding:30px;">
                <div style="font-size:3em; margin-bottom:15px;">\u{1F4E6}</div>
                <div style="font-size:1.2em; margin-bottom:10px;">
                    \u56DE\u58F0\u5C0F\u5267\u573A\u6709\u65B0\u7248\u672C\u53EF\u7528\uFF01
                </div>
                <div style="color:#888; margin-bottom:20px;">
                    \u5F53\u524D\u7248\u672C: <b>v${CURRENT_VERSION}</b> \u2192 \u6700\u65B0\u7248\u672C: <b style="color:#00b894;">v${remoteVersion}</b>
                </div>
                <div style="font-size:0.9em; color:#666; margin-bottom:15px;">
                    \u8BF7\u524D\u5F80 SillyTavern \u7684 <b>\u6269\u5C55</b> \u2192 <b>\u7BA1\u7406\u6269\u5C55</b> \u8FDB\u884C\u66F4\u65B0
                </div>
            </div>
            <div class="titania-changelog-footer" style="display:flex; gap:10px; justify-content:center;">
                <button class="titania-changelog-btn" id="titania-update-later" style="background:#555; color:#fff;">\u7A0D\u540E\u63D0\u9192</button>
                <button class="titania-changelog-btn" id="titania-update-ignore" style="background:linear-gradient(90deg, #00b894, #00cec9);">\u77E5\u9053\u4E86</button>
            </div>
        </div>
    </div>`;
  $("body").append(html);
  $("#titania-update-later").on("click", () => {
    $(".titania-update-overlay").remove();
  });
  $("#titania-update-ignore").on("click", () => {
    const extData = getExtData();
    extData.ignored_version = remoteVersion;
    saveExtData();
    $(".titania-update-overlay").remove();
    $("#titania-new-badge").hide();
  });
  $(".titania-update-overlay .titania-changelog-close").on("click", () => {
    $(".titania-update-overlay").remove();
  });
  $(".titania-update-overlay").on("click", function(e) {
    if (e.target === this) {
      $(".titania-update-overlay").remove();
    }
  });
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
function showChangelog() {
  if ($(".titania-changelog-overlay").length) return;
  const html = `
    <div class="titania-changelog-overlay">
        <div class="titania-changelog-box">
            <div class="titania-changelog-header">
                <span>\u{1F389} \u56DE\u58F0\u5C0F\u5267\u573A v${CURRENT_VERSION} \u66F4\u65B0</span>
                <span class="titania-changelog-close">&times;</span>
            </div>
            <div class="titania-changelog-body">
                ${CHANGELOG}
            </div>
            <div class="titania-changelog-footer">
                <button class="titania-changelog-btn">\u6211\u77E5\u9053\u4E86</button>
            </div>
        </div>
    </div>`;
  $("body").append(html);
  $(".titania-changelog-close, .titania-changelog-btn").on("click", () => {
    const extData = getExtData();
    extData.last_seen_version = CURRENT_VERSION;
    saveExtData();
    $("#titania-new-badge").hide();
    $(".titania-changelog-overlay").remove();
  });
  $(".titania-changelog-overlay").on("click", function(e) {
    if (e.target === this) {
      $(".titania-changelog-close").click();
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
