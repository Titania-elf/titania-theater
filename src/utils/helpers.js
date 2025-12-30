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
 * CSS 作用域净化与注入 (Safeguard B - 强化版)
 * 解决模型生成的 CSS 污染插件主界面的问题
 *
 * @param {string} rawHtml - AI 返回的原始 HTML (可能包含 style 标签)
 * @param {string} scopeId - 当前生成的唯一 ID (例如 "t-scene-123")
 * @returns {string} - 处理后的安全 HTML
 */
export function scopeAndSanitizeHTML(rawHtml, scopeId) {
    // 1. 提取所有 <style> 内容（可能有多个）
    const styleMatches = rawHtml.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
    let allCssContent = "";
    styleMatches.forEach(styleBlock => {
        const cssMatch = styleBlock.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
        if (cssMatch) {
            allCssContent += cssMatch[1] + "\n";
        }
    });

    // 移除所有 style 标签
    let bodyContent = rawHtml.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "").trim();

    // 2. 如果 AI 忘记了外层容器的 ID，手动加一层保险
    if (!bodyContent.includes(`id="${scopeId}"`) && !bodyContent.includes(`id='${scopeId}'`)) {
        bodyContent = `<div id="${scopeId}">${bodyContent}</div>`;
    }

    // 3. CSS 深度净化
    let sanitizedCss = sanitizeCssForScope(allCssContent, scopeId);

    // 4. 重新组装，确保 CSS 被严格限制在作用域内
    return `<style>\n/* Scoped CSS for ${scopeId} - Auto-sanitized */\n${sanitizedCss}\n</style>\n${bodyContent}`;
}

/**
 * 深度净化 CSS，确保所有选择器都被限制在指定作用域内
 * @param {string} cssContent - 原始 CSS 内容
 * @param {string} scopeId - 作用域 ID
 * @returns {string} - 净化后的 CSS
 */
function sanitizeCssForScope(cssContent, scopeId) {
    if (!cssContent || !cssContent.trim()) return "";

    // A. 移除注释
    let css = cssContent.replace(/\/\*[\s\S]*?\*\//g, "");

    // B. 危险选择器黑名单 - 这些可能影响插件布局
    const dangerousSelectors = [
        // 全局元素选择器
        /^\s*\*\s*\{/gm,                    // * { }
        /^\s*body\s*\{/gim,                 // body { }
        /^\s*html\s*\{/gim,                 // html { }
        /^\s*:root\s*\{/gim,                // :root { }

        // Flexbox/Grid 全局污染
        /^\s*\.t-[a-z-]+\s*\{/gim,          // .t-xxx { } (可能与插件类名冲突)
        /^\s*#t-[a-z-]+\s*\{/gim,           // #t-xxx { } (可能与插件 ID 冲突，但不含 scene)

        // 常见布局相关的危险选择器
        /^\s*div\s*\{/gim,                  // div { }
        /^\s*section\s*\{/gim,              // section { }
        /^\s*main\s*\{/gim,                 // main { }
        /^\s*header\s*\{/gim,               // header { }
        /^\s*footer\s*\{/gim,               // footer { }
        /^\s*nav\s*\{/gim,                  // nav { }
        /^\s*aside\s*\{/gim,                // aside { }
        /^\s*article\s*\{/gim,              // article { }
    ];

    // C. 处理每个 CSS 规则块
    // 分割成规则块（按 } 分割，但要保留 @keyframes 等块）
    const processedRules = [];

    // 先提取并保护 @keyframes 和 @media 块
    const atRules = [];
    css = css.replace(/@(keyframes|media|supports|font-face)[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/gi, (match) => {
        // 对 @keyframes 添加作用域前缀到动画名
        if (match.toLowerCase().startsWith('@keyframes')) {
            match = match.replace(/@keyframes\s+([a-zA-Z0-9_-]+)/i, `@keyframes ${scopeId}-$1`);
        }
        atRules.push(match);
        return `/*__AT_RULE_${atRules.length - 1}__*/`;
    });

    // 处理普通规则
    const rulePattern = /([^{}]+)\{([^{}]*)\}/g;
    let match;

    while ((match = rulePattern.exec(css)) !== null) {
        let selector = match[1].trim();
        let properties = match[2].trim();

        // 跳过占位符
        if (selector.includes('__AT_RULE_')) {
            processedRules.push(match[0]);
            continue;
        }

        // 检查是否为危险选择器
        let isDangerous = false;
        for (const pattern of dangerousSelectors) {
            if (pattern.test(selector + ' {')) {
                isDangerous = true;
                break;
            }
        }

        // 处理选择器
        if (isDangerous) {
            // 危险选择器：强制添加作用域前缀
            selector = `#${scopeId} ${selector}`;
        } else if (!selector.includes(scopeId)) {
            // 普通选择器：如果不包含作用域 ID，添加前缀
            // 处理多个选择器（逗号分隔）
            const selectors = selector.split(',').map(s => {
                s = s.trim();
                // 已经有作用域前缀的跳过
                if (s.includes(scopeId)) return s;
                // 给每个选择器添加作用域
                return `#${scopeId} ${s}`;
            });
            selector = selectors.join(', ');
        }

        // 净化属性值中的危险内容
        properties = sanitizeCssProperties(properties, scopeId);

        processedRules.push(`${selector} { ${properties} }`);
    }

    // 还原 @规则
    let result = processedRules.join('\n');
    atRules.forEach((rule, index) => {
        // 给 @规则中的选择器也添加作用域
        let scopedRule = rule;
        if (rule.toLowerCase().startsWith('@media') || rule.toLowerCase().startsWith('@supports')) {
            // 处理 @media 和 @supports 内部的选择器
            scopedRule = rule.replace(/([^{}]+)\{([^{}]*)\}/g, (m, sel, props) => {
                if (sel.includes('@')) return m; // 跳过 @规则声明本身
                if (!sel.includes(scopeId)) {
                    sel = sel.split(',').map(s => `#${scopeId} ${s.trim()}`).join(', ');
                }
                return `${sel} { ${props} }`;
            });
        }
        result = result.replace(`/*__AT_RULE_${index}__*/`, scopedRule);
    });

    return result;
}

/**
 * 净化 CSS 属性值，防止通过属性值进行攻击
 * @param {string} properties - CSS 属性字符串
 * @param {string} scopeId - 作用域 ID
 * @returns {string} - 净化后的属性
 */
function sanitizeCssProperties(properties, scopeId) {
    if (!properties) return "";

    // 1. 替换 animation-name 引用，添加作用域前缀
    properties = properties.replace(
        /animation(-name)?\s*:\s*([a-zA-Z0-9_-]+)/gi,
        (match, suffix, animName) => {
            // 跳过 CSS 关键字
            const keywords = ['none', 'initial', 'inherit', 'unset', 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'infinite', 'forwards', 'backwards', 'both', 'running', 'paused', 'alternate', 'alternate-reverse', 'normal', 'reverse'];
            if (keywords.includes(animName.toLowerCase())) return match;
            return `animation${suffix || ''}: ${scopeId}-${animName}`;
        }
    );

    // 2. 移除可能导致布局问题的危险属性值
    // position: fixed 可能让元素跳出容器
    properties = properties.replace(/position\s*:\s*fixed/gi, 'position: absolute');

    // 3. 限制 z-index 最大值，防止遮挡插件 UI
    properties = properties.replace(/z-index\s*:\s*(\d+)/gi, (match, value) => {
        const maxZ = 1000; // 限制最大 z-index
        const numValue = parseInt(value);
        if (numValue > maxZ) {
            return `z-index: ${maxZ}`;
        }
        return match;
    });

    // 4. 移除 !important 声明（可能覆盖插件样式）
    properties = properties.replace(/!important/gi, '/* !important removed */');

    return properties;
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

/**
 * 检测 HTML 内容是否被截断
 * @param {string} content - 要检测的 HTML 内容
 * @param {string} mode - 检测模式: "html" | "sentence" | "both"
 * @returns {{ isTruncated: boolean, reason: string, details: object }}
 */
export function detectTruncation(content, mode = "html") {
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

    // HTML 标签闭合检测
    if (mode === "html" || mode === "both") {
        const htmlResult = checkHtmlTags(content);
        result.details.htmlCheck = htmlResult;
        if (htmlResult.isTruncated) {
            result.isTruncated = true;
            result.reason = htmlResult.reason;
        }
    }

    // 句子完整性检测
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

/**
 * 检测 HTML 标签是否正确闭合
 * @param {string} html - HTML 内容
 * @returns {{ isTruncated: boolean, reason: string, unclosedTags: string[] }}
 */
function checkHtmlTags(html) {
    const result = {
        isTruncated: false,
        reason: "",
        unclosedTags: []
    };

    // 自闭合标签列表
    const selfClosingTags = ['br', 'hr', 'img', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'param', 'source', 'track', 'wbr'];

    // 提取所有标签
    const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)[^>]*\/?>/g;
    const stack = [];
    let match;

    while ((match = tagPattern.exec(html)) !== null) {
        const fullTag = match[0];
        const tagName = match[1].toLowerCase();

        // 跳过自闭合标签
        if (selfClosingTags.includes(tagName) || fullTag.endsWith('/>')) {
            continue;
        }

        // 检查是闭合标签还是开放标签
        if (fullTag.startsWith('</')) {
            // 闭合标签
            if (stack.length > 0 && stack[stack.length - 1] === tagName) {
                stack.pop();
            }
            // 如果栈顶不匹配，可能是嵌套问题，暂时忽略
        } else {
            // 开放标签
            stack.push(tagName);
        }
    }

    // 检查是否有未闭合的重要标签
    const importantTags = ['div', 'style', 'span', 'p', 'section', 'article', 'main', 'header', 'footer'];
    const unclosedImportant = stack.filter(tag => importantTags.includes(tag));

    if (unclosedImportant.length > 0) {
        result.isTruncated = true;
        result.reason = `HTML 标签未闭合: <${unclosedImportant.join('>, <')}>`;
        result.unclosedTags = unclosedImportant;
    }

    // 检查 style 标签是否完整
    const styleOpenCount = (html.match(/<style[^>]*>/gi) || []).length;
    const styleCloseCount = (html.match(/<\/style>/gi) || []).length;
    if (styleOpenCount > styleCloseCount) {
        result.isTruncated = true;
        result.reason = "<style> 标签未闭合";
        result.unclosedTags.push('style');
    }

    // 检查 CSS 花括号是否匹配 (在 style 标签内)
    const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (styleMatch) {
        for (const styleBlock of styleMatch) {
            const cssContent = styleBlock.replace(/<\/?style[^>]*>/gi, '');
            const openBraces = (cssContent.match(/{/g) || []).length;
            const closeBraces = (cssContent.match(/}/g) || []).length;
            if (openBraces > closeBraces) {
                result.isTruncated = true;
                result.reason = "CSS 花括号不匹配";
                break;
            }
        }
    }

    return result;
}

/**
 * 检测句子是否完整
 * @param {string} content - 内容
 * @returns {{ isTruncated: boolean, reason: string, lastChars: string }}
 */
function checkSentenceCompletion(content) {
    const result = {
        isTruncated: false,
        reason: "",
        lastChars: ""
    };

    // 移除 HTML 标签，获取纯文本
    const textContent = content.replace(/<[^>]*>/g, '').trim();
    if (textContent.length === 0) {
        return result;
    }

    // 获取最后 50 个字符用于分析
    const lastChars = textContent.slice(-50);
    result.lastChars = lastChars;

    // 中文句子结束标点
    const chineseEndPunctuation = ['。', '！', '？', '…', '"', '"', '』', '」'];
    // 英文句子结束标点
    const englishEndPunctuation = ['.', '!', '?', '"', "'"];
    // 所有有效的结束标点
    const allEndPunctuation = [...chineseEndPunctuation, ...englishEndPunctuation];

    // 获取最后一个非空白字符
    const lastChar = textContent.trim().slice(-1);

    // 检查是否以有效标点结束
    const endsWithPunctuation = allEndPunctuation.includes(lastChar);

    // 检查是否在单词中间截断（英文）
    const endsWithLetter = /[a-zA-Z]$/.test(textContent.trim());
    const previousChars = textContent.trim().slice(-10);
    const hasIncompleteWord = endsWithLetter && !/[.!?,;:\s]/.test(previousChars.slice(-2, -1));

    // 检查是否在中文句子中间截断
    const lastCJK = /[\u4e00-\u9fa5]$/.test(textContent.trim());
    const hasCJKContent = /[\u4e00-\u9fa5]/.test(textContent);

    if (hasCJKContent && lastCJK && !chineseEndPunctuation.includes(lastChar)) {
        // 中文内容但不以中文标点结束
        // 进一步检查：如果最后是引号内的内容，可能是正常的
        if (!endsWithPunctuation) {
            result.isTruncated = true;
            result.reason = "中文句子似乎未完成";
        }
    } else if (hasIncompleteWord) {
        result.isTruncated = true;
        result.reason = "英文单词似乎被截断";
    }

    return result;
}

/**
 * 从截断的内容中提取续写上下文
 * @param {string} content - 截断的内容
 * @param {number} contextLength - 上下文长度（字符数）
 * @returns {{ lastContent: string, scopeId: string | null }}
 */
export function extractContinuationContext(content, contextLength = 800) {
    // 提取 scopeId
    const scopeMatch = content.match(/id=["']?(t-scene-[a-z0-9]+)["']?/i);
    const scopeId = scopeMatch ? scopeMatch[1] : null;

    // 移除 style 标签获取主体内容
    let bodyContent = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();

    // 获取最后 N 个字符作为上下文
    let lastContent = bodyContent.slice(-contextLength);

    // 优化：确保不在 HTML 标签中间开始
    // 检查开头是否有未闭合的标签（即先遇到 > 再遇到 <）
    const firstTagEnd = lastContent.indexOf('>');
    const firstTagStart = lastContent.indexOf('<');

    if (firstTagEnd !== -1 && (firstTagStart === -1 || firstTagEnd < firstTagStart)) {
        // 开头有未闭合的标签，从第一个完整标签开始
        const nextTagStart = lastContent.indexOf('<', firstTagEnd + 1);
        if (nextTagStart !== -1) {
            lastContent = lastContent.substring(nextTagStart);
        } else {
            // 没有找到下一个标签，从 > 之后开始
            lastContent = lastContent.substring(firstTagEnd + 1);
        }
    }

    return {
        lastContent,
        scopeId
    };
}

/**
 * 从 HTML 内容中提取纯文本摘要
 * 用于续写时帮助 AI 理解已生成内容的叙事脉络
 * @param {string} htmlContent - HTML 内容
 * @param {number} maxLength - 最大长度（字符数）
 * @returns {string} 纯文本摘要
 */
export function extractTextSummary(htmlContent, maxLength = 500) {
    if (!htmlContent) return "";

    // 1. 移除 style 标签及其内容
    let text = htmlContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

    // 2. 移除所有 HTML 标签
    text = text.replace(/<[^>]*>/g, ' ');

    // 3. 清理多余空白和换行
    text = text.replace(/\s+/g, ' ').trim();

    // 4. 如果内容过长，智能截取
    if (text.length > maxLength) {
        const truncated = text.substring(0, maxLength);

        // 找到最后一个完整句子的位置（中文或英文标点）
        const lastPunctuationIndex = Math.max(
            truncated.lastIndexOf('。'),
            truncated.lastIndexOf('！'),
            truncated.lastIndexOf('？'),
            truncated.lastIndexOf('…'),
            truncated.lastIndexOf('.'),
            truncated.lastIndexOf('!'),
            truncated.lastIndexOf('?')
        );

        // 如果找到了合适的截断点（在后半部分），使用它
        if (lastPunctuationIndex > maxLength * 0.5) {
            return truncated.substring(0, lastPunctuationIndex + 1);
        }

        // 否则直接截断并添加省略号
        return truncated + '...';
    }

    return text;
}

/**
 * 合并原始内容和续写内容
 * @param {string} originalContent - 原始内容
 * @param {string} continuationContent - 续写内容
 * @param {string} scopeId - 共享的 scopeId
 * @param {boolean} showIndicator - 是否显示续写标记
 * @returns {string} - 合并后的内容
 */
export function mergeContinuationContent(originalContent, continuationContent, scopeId, showIndicator = true) {
    // 提取原始内容的 style
    const originalStyleMatch = originalContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    const originalStyle = originalStyleMatch ? originalStyleMatch[1] : "";

    // 提取续写内容的 style（如果有）
    const contStyleMatch = continuationContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    const contStyle = contStyleMatch ? contStyleMatch[1] : "";

    // 移除续写内容中的 style 标签
    let contBody = continuationContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();

    // 移除续写内容开头可能重复的容器 ID
    contBody = contBody.replace(new RegExp(`<div[^>]*id=["']?${scopeId}["']?[^>]*>`, 'gi'), '');
    // 如果最后有多余的 </div>，也需要处理
    // 这里简化处理：假设续写内容是纯 HTML 片段

    // 移除原始内容末尾可能未闭合的标签
    let originalBody = originalContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').trim();

    // 添加续写标记（可选）
    let indicator = "";
    if (showIndicator) {
        indicator = `<div style="text-align:center; color:#bfa15f; font-size:0.8em; margin:15px 0; opacity:0.7;">
            <i class="fa-solid fa-link"></i> ─── 续写连接 ───
        </div>`;
    }

    // 合并 CSS
    const mergedStyle = originalStyle + "\n/* Continuation CSS */\n" + contStyle;

    // 合并 HTML
    const mergedBody = originalBody + indicator + contBody;

    // 重新组装
    return `<style>\n/* Scoped CSS for ${scopeId} */\n${mergedStyle}\n</style>\n${mergedBody}`;
}