// src/utils/storage.js

// SillyTavern 核心模块导入
// 注意：这些路径在打包时会被标记为 external，保持原样
// 开发时相对路径: src/utils -> src -> titania-theater -> third-party -> extensions -> scripts
// 打包后相对路径: dist -> titania-theater -> third-party -> extensions -> scripts
import { extension_settings } from "../../../extensions.js";
import { saveSettingsDebounced } from "../../../../script.js";
import { defaultSettings, extensionName } from "../config/defaults.js";

// 获取扩展数据，如果不存在则初始化默认值
export function getExtData() {
    if (!extension_settings[extensionName]) {
        extension_settings[extensionName] = JSON.parse(JSON.stringify(defaultSettings));
    }
    return extension_settings[extensionName];
}

// 保存扩展数据 (防抖)
export function saveExtData() {
    saveSettingsDebounced();
}