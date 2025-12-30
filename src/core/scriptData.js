// src/core/scriptData.js

import { getExtData, saveExtData } from "../utils/storage.js";
import { GlobalState } from "./state.js";
import { DEFAULT_PRESETS } from "../config/presets.js";

/**
 * 加载脚本 (合并官方预设和用户自定义)
 */
export function loadScripts() {
    const data = getExtData();
    const userScripts = data.user_scripts || [];
    const disabledIDs = data.disabled_presets || [];

    // 加载预设 (过滤掉在黑名单里的)
    GlobalState.runtimeScripts = DEFAULT_PRESETS
        .filter(p => !disabledIDs.includes(p.id))
        .map(p => ({ ...p, _type: 'preset' }));

    // 合并自定义剧本 (含数据清洗)
    userScripts.forEach(s => {
        let cleanMode = s.mode;
        if (!cleanMode || cleanMode === 'all') {
            cleanMode = 'parallel';
        }

        // 避免 ID 冲突，如果预设里有同名 ID，优先保留预设（或者这里逻辑是防止重复添加）
        // 原逻辑：if (!runtimeScripts.find(r => r.id === s.id))
        if (!GlobalState.runtimeScripts.find(r => r.id === s.id)) {
            GlobalState.runtimeScripts.push({
                ...s,
                mode: cleanMode,
                _type: 'user'
            });
        }
    });
}

/**
 * 保存/更新用户剧本
 */
export function saveUserScript(s) {
    const data = getExtData();
    let u = data.user_scripts || [];
    u = u.filter(x => x.id !== s.id); // 移除旧的
    u.push(s); // 加入新的
    data.user_scripts = u;
    saveExtData();
    loadScripts(); // 重新加载到运行时
}

/**
 * 删除用户剧本
 */
export function deleteUserScript(id) {
    const data = getExtData();
    let u = data.user_scripts || [];
    u = u.filter(x => x.id !== id);
    data.user_scripts = u;
    saveExtData();
    loadScripts(); // 重新加载到运行时
}