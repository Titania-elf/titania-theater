// src/utils/helpers.js

/**
 * 从消息文本中提取正文内容
 * 优先提取 <content> 标签，否则过滤掉非正文标签
 * @param {string} text - 原始消息文本
 * @returns {string} - 清洗后的正文内容
 */
function extractContent(text) {
    if (!text) return "";

    // 1. 优先检查是否有 <content> 标签，提取其中内容
    const contentMatch = text.match(/<content[^>]*>([\s\S]*?)<\/content>/i);
    if (contentMatch) {
        // 递归处理，因为 content 内部可能还有嵌套标签
        return extractContent(contentMatch[1]);
    }

    // 2. 移除常见非正文标签及其内容
    const tagsToRemove = [
        'thinking',      // 思考过程
        'think',         // 思考过程变体
        'status',        // 状态栏
        'state',         // 状态变体
        'mood',          // 情绪标签
        'emotion',       // 情绪变体
        'inner',         // 内心独白
        'inner_thought', // 内心想法
        'monologue',     // 独白
        'system',        // 系统信息
        'ooc',           // Out of Character
        'note',          // 笔记
        'stat',          // 属性栏
        'stats',         // 属性栏变体
        'bar',           // 状态条
        'statusbar',     // 状态条
        'panel',         // 面板
        'info',          // 信息面板
        'debug'          // 调试信息
    ];

    let cleaned = text;

    // 构建正则移除这些标签及内容
    tagsToRemove.forEach(tag => {
        // 匹配开闭标签形式: <tag>...</tag>
        const regex = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi');
        cleaned = cleaned.replace(regex, '');
    });

    // 3. 移除剩余的 HTML 标签（保留纯文本）
    cleaned = cleaned.replace(/<[^>]*>?/gm, '');

    // 4. 清理多余空白
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim();

    return cleaned;
}

/**
 * 获取聊天历史，过滤掉隐藏的并提取正文内容
 * @param {number} limit - 获取的行数限制
 */
export function getChatHistory(limit) {
    if (typeof SillyTavern === 'undefined' || !SillyTavern.getContext) return "";
    const ctx = SillyTavern.getContext();
    const history = ctx.chat || [];
    const safeLimit = parseInt(limit) || 10;

    // 【修复逻辑】先过滤掉被隐藏或禁用的消息，再进行截取
    const visibleHistory = history.filter(msg => {
        // 过滤掉点了"眼睛"图标隐藏的消息
        if (msg.is_hidden) return false;
        // 过滤掉被禁用的消息
        if (msg.disabled) return false;
        // (可选) 如果你也不想让系统指令进入回声分析，可以把下面这行注释取消
        // if (msg.is_system) return false;
        return true;
    });

    // 从过滤后的列表中截取最后 N 条
    const recent = visibleHistory.slice(-safeLimit);

    return recent.map(msg => {
        let name = msg.name;
        if (msg.is_user) name = ctx.name1 || "User";
        if (name === "{{user}}") name = ctx.name1 || "User";
        if (name === "{{char}}") name = ctx.characters[ctx.characterId]?.name || "Char";

        let rawContent = msg.message || msg.mes || "";
        // 【优化】使用智能内容提取，过滤非正文标签
        let cleanContent = extractContent(rawContent);

        // 如果提取后为空，回退到原始内容的简单清洗
        if (!cleanContent.trim()) {
            cleanContent = rawContent.replace(/<[^>]*>?/gm, '').trim();
        }

        return `${name}: ${cleanContent}`;
    }).join("\n");
}

/**
 * 文件转 Base64 (用于设置页图片上传)
 */
export const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

/**
 * 解析收藏标题元数据 (用于收藏夹)
 */
export const parseMeta = (title) => {
    const parts = title.split(' - ');
    if (parts.length >= 2) {
        const char = parts.pop();
        const script = parts.join(' - ');
        return { script, char: char.trim() };
    }
    return { script: title, char: "未知" };
};

/**
 * 获取 HTML 片段的纯文本摘要 (用于收藏夹)
 */
export const getSnippet = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    let text = tmp.textContent || tmp.innerText || "";
    text = text.replace(/\s+/g, " ").trim();
    return text.length > 60 ? text.substring(0, 60) + "..." : text;
};

/**
 * CSS 作用域净化与注入 (Safeguard B)
 * @param {string} rawHtml - AI 返回的原始 HTML (可能包含 style 标签)
 * @param {string} scopeId - 当前生成的唯一 ID (例如 "t-scene-123")
 * @returns {string} - 处理后的安全 HTML
 */
export function scopeAndSanitizeHTML(rawHtml, scopeId) {
    // 1. 提取 <style> 内容
    const styleMatch = rawHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    let cssContent = styleMatch ? styleMatch[1] : "";
    let bodyContent = rawHtml.replace(/<style[^>]*>[\s\S]*?<\/style>/i, "").trim();

    // 2. 如果 AI 忘记了外层容器的 ID，手动加一层保险
    // 检查开头是否包含该 ID，如果没有，强行包裹
    if (!bodyContent.includes(`id="${scopeId}"`) && !bodyContent.includes(`id='${scopeId}'`)) {
        bodyContent = `<div id="${scopeId}">${bodyContent}</div>`;
    }

    // 3. CSS 净化与作用域强制 (正则魔法)
    if (cssContent) {
        // A. 移除注释，避免干扰正则
        cssContent = cssContent.replace(/\/\*[\s\S]*?\*\//g, "");

        // B. 保护全局标签：将 body/html 选择器强制替换为宿主 ID
        // 例如: body { background: black } -> #t-scene-123 { background: black }
        cssContent = cssContent.replace(/(^|\})[\s]*\b(body|html)\b/gi, "$1 #" + scopeId);

        // C. 简单粗暴的作用域检查 (可选增强)
        // 如果选择器不包含 @ (媒体查询/关键帧) 且不包含 ID，尝试前缀 (这步比较激进，先只做上面的全局保护)

        // D. 确保关键帧动画名不冲突 (给动画名加后缀)
        // 这一步比较复杂，暂且信任 AI 会使用 scoped ID 内部的动画，
        // 或者我们假设 AI 足够聪明。为了保险，我们只做基础清洗。
    }

    // 4. 重新组装
    // 注意：将 Style 放在 Div 内部在 HTML5 是合法的 (scoped)，但在 ST 里我们通常只要拼在一起就行
    return `<style>\n/* Scoped CSS for ${scopeId} */\n${cssContent}\n</style>\n${bodyContent}`;
}

/**
 * 生成唯一 ID
 */
export function generateScopeId() {
    return "t-scene-" + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString();
}

/**
 * 简易 Token 估算 (混合语言优化版)
 * 逻辑：汉字/标点算 1，英文单词算 1.3，其他符号算 0.5
 */
export function estimateTokens(text) {
    if (!text) return 0;
    // 移除多余空格
    const clean = text.trim();
    if (clean.length === 0) return 0;

    // 1. 匹配中日韩字符 (CJK)
    const cjkCount = (clean.match(/[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/g) || []).length;

    // 2. 匹配非 CJK 的部分，按空格拆分计算单词数
    const nonCjkStr = clean.replace(/[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/g, " ");
    const wordCount = nonCjkStr.split(/\s+/).filter(w => w.length > 0).length;

    // 估算公式
    return Math.floor(cjkCount + (wordCount * 1.3));
}