// src/core/state.js

// 统一管理运行时的全局变量
export const GlobalState = {
    isGenerating: false,
    runtimeScripts: [],        // 加载好的剧本列表 (预设 + 自定义)
    lastGeneratedContent: "",  // 上一次生成的结果 HTML
    lastUsedScriptId: "",      // 上一次使用的剧本 ID
    currentCategoryFilter: "ALL", // 当前的分类筛选器状态

    // 计时器相关
    timerStartTime: 0,         // 计时开始时间戳
    timerInterval: null,       // 计时器 interval ID
    lastGenerationTime: 0,     // 上次生成耗时 (毫秒)

    // 自动续写相关
    continuation: {
        isActive: false,       // 是否正在进行续写
        retryCount: 0,         // 当前续写次数
        originalContent: "",   // 原始内容（未被截断前）
        currentScopeId: "",    // 当前使用的 scopeId
        accumulatedContent: "" // 累积的完整内容
    }
};

/**
 * 重置续写状态
 */
export function resetContinuationState() {
    GlobalState.continuation = {
        isActive: false,
        retryCount: 0,
        originalContent: "",
        currentScopeId: "",
        accumulatedContent: ""
    };
}