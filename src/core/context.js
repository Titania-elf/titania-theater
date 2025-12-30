// src/core/context.js

// 注意：这里需要向上多跳几级才能找到 scripts/extensions/world-info.js
// 路径: src/core/context.js -> src/core -> src -> titania -> third-party -> extensions -> [world-info.js]
import {
    selected_world_info,
    world_info
} from "../../../../../world-info.js";

import { getExtData } from "../utils/storage.js";

/**
 * 带超时的 Promise 包装器
 * @param {Promise} promise - 原始 Promise
 * @param {number} timeout - 超时时间（毫秒）
 * @param {string} errorMsg - 超时错误信息
 * @returns {Promise}
 */
function withTimeout(promise, timeout = 5000, errorMsg = 'Operation timed out') {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error(errorMsg)), timeout)
        )
    ]);
}

/**
 * 安全地加载世界书数据
 * @param {object} ctx - SillyTavern context
 * @param {string} bookName - 世界书名称
 * @param {number} timeout - 超时时间（毫秒）
 * @returns {Promise<object|null>} 世界书数据或 null
 */
async function safeLoadWorldInfo(ctx, bookName, timeout = 5000) {
    try {
        if (!ctx.loadWorldInfo || typeof ctx.loadWorldInfo !== 'function') {
            console.warn(`Titania: loadWorldInfo 函数不可用`);
            return null;
        }
        const result = await withTimeout(
            ctx.loadWorldInfo(bookName),
            timeout,
            `加载世界书 [${bookName}] 超时`
        );
        return result;
    } catch (err) {
        console.warn(`Titania: 无法加载世界书 [${bookName}]`, err.message);
        return null;
    }
}

/**
 * 获取当前激活的世界书列表及其所有启用条目（用于 UI 显示）
 * 改进：不再限制只读取蓝灯条目，而是读取所有启用的条目
 * @returns {Promise<Array>} 世界书及条目数组
 */
export async function getActiveWorldInfoEntries() {
    if (typeof SillyTavern === 'undefined' || !SillyTavern.getContext) return [];

    let ctx;
    try {
        ctx = SillyTavern.getContext();
        if (!ctx) return [];
    } catch (e) {
        console.warn("Titania: 无法获取 SillyTavern context", e);
        return [];
    }

    const charId = ctx.characterId;
    const activeBooks = new Set();

    // 收集所有相关的世界书名称
    if (typeof selected_world_info !== 'undefined' && Array.isArray(selected_world_info)) {
        selected_world_info.forEach(name => activeBooks.add(name));
    }

    if (charId !== undefined && ctx.characters && ctx.characters[charId]) {
        const charObj = ctx.characters[charId];
        const primary = charObj.data?.extensions?.world;
        if (primary) activeBooks.add(primary);

        const fileName = (charObj.avatar || "").replace(/\.[^/.]+$/, "");
        if (typeof world_info !== 'undefined' && world_info.charLore) {
            const loreEntry = world_info.charLore.find(e => e.name === fileName);
            if (loreEntry && Array.isArray(loreEntry.extraBooks)) {
                loreEntry.extraBooks.forEach(name => activeBooks.add(name));
            }
        }
    }

    const result = [];

    for (const bookName of activeBooks) {
        const bookData = await safeLoadWorldInfo(ctx, bookName);
        if (!bookData || !bookData.entries) continue;

        // 获取所有启用的条目（不再限制蓝灯）
        const enabledEntries = Object.values(bookData.entries).filter(entry =>
            entry.disable === false || entry.enabled === true
        );

        if (enabledEntries.length > 0) {
            result.push({
                bookName: bookName,
                entries: enabledEntries.map(e => ({
                    uid: e.uid,
                    comment: e.comment || `条目 ${e.uid}`,
                    content: e.content || "",
                    preview: (e.content || "").substring(0, 80).replace(/\n/g, " "),
                    isConstant: e.constant === true  // 标记是否为蓝灯条目，便于UI显示
                }))
            });
        }
    }

    return result;
}

/**
 * 获取当前对话的上下文数据 (角色名、Persona、世界书等)
 * 添加错误边界，确保即使部分数据获取失败也能返回基础数据
 */
export async function getContextData() {
    let data = { charName: "Char", persona: "", userName: "User", userDesc: "", worldInfo: "" };

    if (typeof SillyTavern === 'undefined' || !SillyTavern.getContext) return data;

    let ctx;
    try {
        ctx = SillyTavern.getContext();
        if (!ctx) return data;
    } catch (e) {
        console.warn("Titania: 无法获取 SillyTavern context", e);
        return data;
    }

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

    // --- 2. 加载并筛选世界书条目 ---
    const contentParts = [];

    // 获取世界书筛选配置
    const extData = getExtData();
    const wiConfig = extData.worldinfo || { char_selections: {} };
    const charSelections = wiConfig.char_selections[data.charName] || null;

    for (const bookName of activeBooks) {
        const bookData = await safeLoadWorldInfo(ctx, bookName);
        if (!bookData || !bookData.entries) continue;

        // 筛选：!disable (已开启) 的条目
        let enabledEntries = Object.values(bookData.entries).filter(entry =>
            entry.disable === false || entry.enabled === true
        );

        // 如果有针对当前角色的选择配置，按用户选择筛选
        if (charSelections && charSelections[bookName]) {
            const selectedUids = charSelections[bookName];
            enabledEntries = enabledEntries.filter(e => selectedUids.includes(e.uid));
        }
        // 如果没有选择配置，默认使用所有启用的条目（首次使用时的默认行为）

        enabledEntries.forEach(e => {
            if (e.content && e.content.trim()) {
                // 解析内容中的宏并存入数组
                try {
                    contentParts.push(ctx.substituteParams(e.content.trim()));
                } catch (subErr) {
                    // 如果宏解析失败，使用原始内容
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