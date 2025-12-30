// src/utils/storage.js

// 路径解释：
// src/utils/storage.js -> src/utils -> src -> titania-theater -> third-party -> extensions -> scripts -> [extensions.js]
import { extension_settings } from "../../../../../extensions.js";
import { saveSettingsDebounced } from "../../../../../../script.js";
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