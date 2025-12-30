// src/core/context.js

// 注意：这里需要向上多跳几级才能找到 scripts/extensions/world-info.js
// 路径: src/core/context.js -> src/core -> src -> titania -> third-party -> extensions -> [world-info.js]
import {
    selected_world_info,
    world_info
} from "../../../../../world-info.js";

import { getExtData } from "../utils/storage.js";

/**
 * 获取当前激活的世界书列表及其蓝灯条目（用于 UI 显示）
 * @returns {Promise<Array>} 世界书及条目数组
 */
export async function getActiveWorldInfoEntries() {
    if (typeof SillyTavern === 'undefined' || !SillyTavern.getContext) return [];
    const ctx = SillyTavern.getContext();

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
        try {
            const bookData = await ctx.loadWorldInfo(bookName);
            if (!bookData || !bookData.entries) continue;

            // 获取所有蓝灯条目
            const blueEntries = Object.values(bookData.entries).filter(entry =>
                (entry.disable === false || entry.enabled === true) && entry.constant === true
            );

            if (blueEntries.length > 0) {
                result.push({
                    bookName: bookName,
                    entries: blueEntries.map(e => ({
                        uid: e.uid,
                        comment: e.comment || `条目 ${e.uid}`,
                        content: e.content || "",
                        preview: (e.content || "").substring(0, 80).replace(/\n/g, " ")
                    }))
                });
            }
        } catch (err) {
            console.warn(`Titania: 无法加载世界书 [${bookName}]`, err);
        }
    }

    return result;
}

/**
 * 获取当前对话的上下文数据 (角色名、Persona、世界书等)
 */
export async function getContextData() {
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

    // 获取世界书筛选配置
    const extData = getExtData();
    const wiConfig = extData.worldinfo || { mode: "all", char_selections: {} };
    const charSelections = wiConfig.char_selections[data.charName] || null;

    for (const bookName of activeBooks) {
        try {
            const bookData = await ctx.loadWorldInfo(bookName);
            if (!bookData || !bookData.entries) continue;

            // 筛选：!disable (已开启) 且 constant (蓝灯)
            let blueEntries = Object.values(bookData.entries).filter(entry =>
                (entry.disable === false || entry.enabled === true) && entry.constant === true
            );

            // 如果是手动模式且有针对当前角色的选择配置
            if (wiConfig.mode === "manual" && charSelections && charSelections[bookName]) {
                const selectedUids = charSelections[bookName];
                blueEntries = blueEntries.filter(e => selectedUids.includes(e.uid));
            }

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