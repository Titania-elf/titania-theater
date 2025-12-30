// src/ui/mainWindow.js

import { getExtData, saveExtData } from "../utils/storage.js";
import { GlobalState } from "../core/state.js";
import { getContextData, getActiveWorldInfoEntries } from "../core/context.js";
import { handleGenerate } from "../core/api.js";
import { openSettingsWindow } from "./settingsWindow.js";
import { openFavsWindow, saveFavorite } from "./favsWindow.js";
import { showDebugInfo } from "./debugWindow.js";
import { openScriptManager, openEditor } from "./scriptManager.js"; // [修改] 确保引入了 openEditor

/**
 * 刷新剧本列表下拉框 (辅助函数)
 */
export function refreshScriptList(isEchoMode) {
    const $sel = $("#t-sel-script");
    $sel.empty();

    // 只显示对应模式的剧本
    const targetMode = isEchoMode ? "echo" : "parallel";
    const validScripts = GlobalState.runtimeScripts.filter(s => s.mode === targetMode);

    validScripts.forEach(s => {
        $sel.append(`<option value="${s.id}">${s.name}</option>`);
    });

    if (GlobalState.lastUsedScriptId && validScripts.find(s => s.id === GlobalState.lastUsedScriptId)) {
        $sel.val(GlobalState.lastUsedScriptId);
    }
    updateDesc();
}

function updateDesc() {
    const s = GlobalState.runtimeScripts.find(x => x.id === $("#t-sel-script").val());
    if (s) $("#t-txt-desc").val(s.desc);
}

/**
 * 应用选中的剧本到触发器卡片 (供 api.js 和 内部 调用)
 * 注意：此函数只更新剧本卡片的显示，不影响模式Tab的状态
 * @param {string} id - 剧本ID
 */
export function applyScriptSelection(id) {
    const s = GlobalState.runtimeScripts.find(x => x.id === id);
    if (!s) return;

    GlobalState.lastUsedScriptId = s.id;

    // 1. 更新标题
    $("#t-lbl-name").text(s.name);

    // 2. 模式视觉标识 (仅更新卡片上的标签，不影响Tab)
    const isEcho = (s.mode === 'echo');
    const modeName = isEcho ? "🌊 回声" : "🪐 平行";
    const modeColor = isEcho ? "#90cdf4" : "#bfa15f";
    const bgColor = isEcho ? "rgba(144, 205, 244, 0.15)" : "rgba(191, 161, 95, 0.15)";

    const $catTag = $("#t-lbl-cat");
    $catTag.text(`${modeName} · ${s.category || (s._type === 'preset' ? "官方预设" : "未分类")}`);
    $catTag.css({
        "color": modeColor,
        "background": bgColor,
        "border": `1px solid ${modeColor}33`
    });

    // 3. 更新描述
    $("#t-lbl-desc-mini").text(s.desc || "无简介");

    // 兼容性：更新隐藏的文本框
    $("#t-txt-desc").val(s.desc);
}

/**
 * 主窗口逻辑
 * 添加错误边界，确保即使部分数据加载失败也能正常显示界面
 */
export async function openMainWindow() {
    if ($("#t-overlay").length) return;

    // 使用 try-catch 和超时包装上下文获取，确保不会阻塞 UI
    let ctx = { charName: "Char", userName: "User" };
    try {
        // 添加 3 秒超时保护
        const ctxPromise = getContextData();
        const timeoutPromise = new Promise((resolve) =>
            setTimeout(() => {
                console.warn("Titania: getContextData 超时，使用默认值");
                resolve({ charName: "Char", userName: "User" });
            }, 3000)
        );
        ctx = await Promise.race([ctxPromise, timeoutPromise]);
    } catch (e) {
        console.error("Titania: 获取上下文数据失败，使用默认值", e);
    }

    let data;
    try {
        data = getExtData();
    } catch (e) {
        console.error("Titania: 获取扩展数据失败", e);
        data = { ui_mode_echo: true };
    }

    // 1. 获取持久化的 Tab 模式偏好 (默认为 Echo)
    let savedMode = (data.ui_mode_echo !== false);

    // 2. 准备初始展示内容
    const initialContent = GlobalState.lastGeneratedContent ? GlobalState.lastGeneratedContent : '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#555;"><i class="fa-solid fa-clapperboard" style="font-size:3em; margin-bottom:15px; opacity:0.5;"></i><div style="font-size:1.1em;">请选择剧本，开始演绎...</div></div>';

    // HTML 结构 (样式已移至 css/main-window.css)
    const html = `
    <div id="t-overlay" class="t-overlay">
        <div class="t-box" id="t-main-view">
            
            <div class="t-header" style="flex-shrink:0;">
                <div class="t-title-container" style="display:flex; align-items:baseline; overflow:hidden;">
                    <div class="t-title-main" style="white-space:nowrap;">回声小剧场</div>
                    <div class="t-title-sub">
                        ✨ 主演: ${ctx.charName}
                    </div>
                </div>
                <div style="display:flex; align-items:center; flex-shrink:0;">
                    <i class="fa-solid fa-book-bookmark t-icon-btn" id="t-btn-favs" title="回声收藏夹"></i>
                    <i class="fa-solid fa-book-atlas t-icon-btn" id="t-btn-worldinfo" title="世界书条目筛选"></i>
                    <i class="fa-solid fa-network-wired t-icon-btn" id="t-btn-profiles" title="快速切换API方案"></i>
                    <i class="fa-solid fa-gear t-icon-btn" id="t-btn-settings" title="设置"></i>
                    <span class="t-close" id="t-btn-close">&times;</span>
                </div>
            </div>

            <div class="t-top-bar">
                <div class="t-tabs">
                    <div class="t-tab ${savedMode ? 'active-echo' : ''}" id="t-tab-echo">🌊 回声模式</div>
                    <div class="t-tab ${!savedMode ? 'active-parallel' : ''}" id="t-tab-parallel">🪐 平行世界</div>
                </div>
                <div class="t-mobile-row">
                    <div class="t-trigger-card" id="t-trigger-btn" title="点击切换剧本">
                        <div class="t-trigger-main">
                            <span id="t-lbl-name" style="overflow:hidden; text-overflow:ellipsis;">加载中...</span>
                        </div>
                        <div class="t-trigger-sub">
                            <span class="t-cat-tag" id="t-lbl-cat">分类</span>
                            <span id="t-lbl-desc-mini">...</span>
                        </div>
                        <i class="fa-solid fa-chevron-down t-chevron"></i>
                    </div>
                    
                    <div class="t-action-group">
                        <div class="t-filter-btn" id="t-btn-filter" title="筛选随机范围">
                            <i class="fa-solid fa-filter"></i>
                        </div>
                        <div class="t-dice-btn" id="t-btn-dice" title="随机剧本">🎲</div>
                    </div>
                </div>
            </div>

            <div class="t-content-wrapper">
                <div class="t-zen-btn" id="t-btn-zen" title="沉浸阅读模式"><i class="fa-solid fa-expand"></i></div>
                <div class="t-content-area">
                    <div id="t-output-content">${initialContent}</div>
                </div>
            </div>

            <div class="t-bottom-bar">
            <!-- 左侧：2x2 工具网格 -->
            <div class="t-bot-left">
                <button class="t-btn-grid" id="t-btn-debug" title="审查 Prompt"><i class="fa-solid fa-eye"></i></button>
                <button class="t-btn-grid" id="t-btn-copy" title="复制源码"><i class="fa-regular fa-copy"></i></button>
                <button class="t-btn-grid" id="t-btn-like" title="收藏结果"><i class="fa-regular fa-heart"></i></button>
                <button class="t-btn-grid" id="t-btn-new" title="新建剧本"><i class="fa-solid fa-plus"></i></button>
            </div>

            <!-- 右侧：上下堆叠操作区 -->
            <div class="t-bot-right">
                <button id="t-btn-run" class="t-btn-action">
                    <i class="fa-solid fa-clapperboard"></i> <span>开始演绎</span>
                </button>
                <button id="t-btn-edit" class="t-btn-action">
                    <i class="fa-solid fa-pen-to-square"></i> <span>重新编辑</span>
                </button>
            </div>
        </div>
    </div>`;

    $("body").append(html);

    // --- 内部逻辑控制 ---

    // 更新过滤按钮的 UI 状态
    const updateFilterUI = () => {
        const btn = $("#t-btn-filter");
        const dice = $("#t-btn-dice");

        if (GlobalState.currentCategoryFilter === "ALL") {
            btn.removeClass("active-filter");
            dice.removeClass("active-filter");
            btn.attr("title", "当前：全部分类");
        } else {
            btn.addClass("active-filter");
            dice.addClass("active-filter");
            btn.attr("title", `当前锁定：${GlobalState.currentCategoryFilter}`);
        }
    };

    // 切换模式
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

    // 随机抽取逻辑
    const handleRandom = () => {
        const targetModeStr = savedMode ? 'echo' : 'parallel';
        const allModeScripts = GlobalState.runtimeScripts.filter(s => s.mode === targetModeStr);

        // [修复] 如果该模式下根本没有任何剧本，直接返回，避免死循环
        if (allModeScripts.length === 0) {
            if (window.toastr) toastr.warning(`[${targetModeStr}] 模式下暂无可用剧本。`, "Titania");
            // 更新触发器卡片显示为空状态
            $("#t-lbl-name").text("暂无剧本");
            $("#t-lbl-cat").text(targetModeStr === 'echo' ? "🌊 回声模式" : "🪐 平行世界");
            $("#t-lbl-desc-mini").text("请创建或导入剧本，或切换到其他模式");
            return;
        }

        let pool = allModeScripts;

        if (GlobalState.currentCategoryFilter !== "ALL") {
            pool = pool.filter(s => (s.category || (s._type === 'preset' ? '官方预设' : '未分类')) === GlobalState.currentCategoryFilter);
        }

        // 如果当前分类下没有剧本，则重置为全部并重新选择（此时 allModeScripts 已确保非空）
        if (pool.length === 0) {
            if (window.toastr) toastr.warning(`[${targetModeStr}] 模式下没找到 [${GlobalState.currentCategoryFilter}] 分类的剧本，已切换到全部。`, "Titania");
            GlobalState.currentCategoryFilter = "ALL";
            updateFilterUI();
            pool = allModeScripts; // 直接使用已筛选的模式剧本，不再递归
        }

        const rnd = Math.floor(Math.random() * pool.length);
        const s = pool[rnd];
        applyScriptSelection(s.id);

        const dice = $("#t-btn-dice");
        dice.css("transform", `rotate(${Math.random() * 360}deg) scale(1.1)`);
        setTimeout(() => dice.css("transform", "rotate(0deg) scale(1)"), 300);
    };

    // --- 事件监听绑定 ---

    $("#t-tab-echo").on("click", () => switchMode(true, true));
    $("#t-tab-parallel").on("click", () => switchMode(false, true));
    $("#t-trigger-btn").on("click", () => showScriptSelector(savedMode, GlobalState.currentCategoryFilter));

    $("#t-btn-filter").on("click", function (e) {
        renderFilterMenu(savedMode, GlobalState.currentCategoryFilter, $(this), (newCat) => {
            GlobalState.currentCategoryFilter = newCat;
            updateFilterUI();
            const currentS = GlobalState.runtimeScripts.find(s => s.id === GlobalState.lastUsedScriptId);
            const sCat = currentS ? (currentS.category || (currentS._type === 'preset' ? '官方预设' : '未分类')) : '';
            if (newCat !== 'ALL' && sCat !== newCat) {
                handleRandom();
            }
        });
        e.stopPropagation();
    });

    $("#t-btn-dice").on("click", handleRandom);

    $("#t-btn-zen").on("click", function () {
        const view = $("#t-main-view");
        view.toggleClass("t-zen-mode");
        const isZen = view.hasClass("t-zen-mode");
        $(this).html(isZen ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>');
        if (isZen) $(this).css("background", "transparent"); else $(this).css("background", "rgba(30, 30, 30, 0.6)");
    });

    $(document).on("keydown.zenmode", function (e) {
        if (e.key === "Escape" && $("#t-main-view").hasClass("t-zen-mode")) $("#t-btn-zen").click();
    });

    $("#t-btn-close").on("click", () => { $("#t-overlay").remove(); $(document).off("keydown.zenmode"); });
    $("#t-overlay").on("click", (e) => { if (e.target === e.currentTarget) { $("#t-overlay").remove(); $(document).off("keydown.zenmode"); } });
    $("#t-btn-profile").on("click", function (e) {
        renderProfileMenu($(this));
        e.stopPropagation();
    });
    $("#t-btn-settings").on("click", openSettingsWindow);
    // 新建剧本 (点击后打开空编辑器)
    $("#t-btn-new").on("click", () => {
        // 传入 null 表示新建，第二个参数 'main' 表示从主窗口打开
        openEditor(null, 'main');
    });

    // 编辑当前剧本
    $("#t-btn-edit").on("click", () => {
        if (!GlobalState.lastUsedScriptId) {
            if (window.toastr) toastr.warning("当前没有选中的剧本");
            return;
        }
        // 传入当前 ID，'main' 表示从主窗口打开
        openEditor(GlobalState.lastUsedScriptId, 'main');
    });

    // 复制 HTML 源码
    $("#t-btn-copy").on("click", () => {
        const htmlCode = $("#t-output-content").html();
        navigator.clipboard.writeText(htmlCode);
        const btn = $("#t-btn-copy");
        const h = btn.html();
        btn.html('<i class="fa-solid fa-check"></i> 已复制');
        setTimeout(() => btn.html(h), 1000);
    });

    $("#t-btn-run").on("click", () => handleGenerate(null, false));
    $("#t-btn-like").on("click", saveFavorite);
    $("#t-btn-profiles").on("click", function (e) {
        renderProfileMenu($(this));
        e.stopPropagation();
    });

    $("#t-btn-favs").on("click", openFavsWindow);
    $("#t-btn-worldinfo").on("click", openWorldInfoSelector);
    $("#t-btn-debug").on("click", async () => await showDebugInfo());

    // --- [初始化阶段] ---
    // 1. 首先恢复用户保存的模式偏好（不重置分类筛选器）
    switchMode(savedMode, false);

    // 2. 确定要显示的剧本：优先使用 lastGeneratedScriptId（如果有内容的话）
    let initialScriptId = GlobalState.lastUsedScriptId;

    if (GlobalState.lastGeneratedContent && GlobalState.lastGeneratedScriptId) {
        // 有生成内容时，使用生成内容对应的剧本来显示
        initialScriptId = GlobalState.lastGeneratedScriptId;
    }

    // 检查是否有可用剧本
    if (GlobalState.runtimeScripts.length === 0) {
        // 没有加载到任何剧本，显示错误提示
        $("#t-lbl-name").text("无可用剧本");
        $("#t-lbl-cat").text("⚠️ 错误");
        $("#t-lbl-desc-mini").text("剧本数据未加载，请检查插件安装");
        console.error("Titania: runtimeScripts 为空，剧本未加载");
    } else if (initialScriptId) {
        const initialScript = GlobalState.runtimeScripts.find(s => s.id === initialScriptId);
        if (initialScript) {
            // 应用剧本显示（不影响模式Tab）
            applyScriptSelection(initialScriptId);
        } else {
            // 剧本不存在，从当前模式中随机选一个
            handleRandom();
        }
    } else {
        // 没有任何剧本ID，随机选一个
        handleRandom();
    }

    // 异步初始化世界书徽章（不阻塞主流程）
    updateWorldInfoBadge().catch(e => {
        console.warn("Titania: 更新世界书徽章失败", e);
    });
}

/**
 * 更新世界书图标颜色（有选中条目时变蓝色）
 * 添加超时保护，避免长时间阻塞
 */
async function updateWorldInfoBadge() {
    const BADGE_TIMEOUT = 8000; // 8秒超时

    try {
        // 使用 Promise.race 添加超时保护
        const entriesPromise = getActiveWorldInfoEntries();
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('世界书加载超时')), BADGE_TIMEOUT)
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

        entries.forEach(book => {
            book.entries.forEach(entry => {
                totalCount++;
                // 如果没有保存过选择，默认全选；否则按保存的选择计算
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
            // 有选中条目时：图标变蓝色
            $icon.css("color", "#90cdf4");
            $icon.attr("title", `世界书条目筛选 (已选 ${selectedCount}/${totalCount})`);
        } else if (totalCount > 0) {
            // 有条目但未选中：图标变橙色提醒
            $icon.css("color", "#bfa15f");
            $icon.attr("title", `世界书条目筛选 (未选择任何条目)`);
        } else {
            // 无条目时：恢复默认灰色
            $icon.css("color", "");
            $icon.attr("title", "世界书条目筛选");
        }
    } catch (e) {
        console.warn("Titania: 更新世界书图标状态失败", e);
        $("#t-btn-worldinfo").css("color", "");
    }
}

/**
 * 打开世界书条目选择器
 * 改进版：直接让用户选择条目，不再区分蓝灯/非蓝灯模式
 * 添加加载状态和错误处理
 */
async function openWorldInfoSelector() {
    if ($("#t-wi-selector").length) return;

    // 先显示加载状态
    const loadingHtml = `
    <div id="t-wi-selector" class="t-wi-selector">
        <div class="t-wi-header">
            <div style="display:flex; align-items:center; gap:10px;">
                <i class="fa-solid fa-book-atlas" style="color:#90cdf4;"></i>
                <span style="font-weight:bold;">世界书条目筛选</span>
            </div>
            <div class="t-close" id="t-wi-close">&times;</div>
        </div>
        <div class="t-wi-body" style="display:flex; align-items:center; justify-content:center; min-height:200px;">
            <div style="text-align:center; color:#888;">
                <i class="fa-solid fa-spinner fa-spin" style="font-size:2em; margin-bottom:10px;"></i>
                <div>正在加载世界书数据...</div>
            </div>
        </div>
    </div>`;

    $("#t-main-view").append(loadingHtml);
    $("#t-wi-close").on("click", () => $("#t-wi-selector").remove());

    // 异步加载数据
    let ctx, entries;
    try {
        const LOAD_TIMEOUT = 10000; // 10秒超时

        const loadPromise = Promise.all([
            getContextData(),
            getActiveWorldInfoEntries()
        ]);

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('加载超时')), LOAD_TIMEOUT)
        );

        [ctx, entries] = await Promise.race([loadPromise, timeoutPromise]);
    } catch (e) {
        console.error("Titania: 加载世界书数据失败", e);
        $("#t-wi-selector .t-wi-body").html(`
            <div style="text-align:center; color:#e74c3c; padding:20px;">
                <i class="fa-solid fa-exclamation-triangle" style="font-size:2em; margin-bottom:10px;"></i>
                <div style="margin-bottom:10px;">加载世界书数据失败</div>
                <div style="font-size:0.9em; color:#888;">${e.message}</div>
                <button class="t-btn" style="margin-top:15px;" onclick="$('#t-wi-selector').remove();">关闭</button>
            </div>
        `);
        return;
    }

    const data = getExtData();

    // 初始化世界书配置
    if (!data.worldinfo) {
        data.worldinfo = { char_selections: {} };
    }

    const charName = ctx.charName;
    // 获取当前角色的已保存选择
    const charSelections = data.worldinfo.char_selections[charName] || null;

    // 判断是否是首次使用（没有保存过选择）
    const isFirstTime = charSelections === null;

    // 计算总数
    let totalCount = 0;
    entries.forEach(book => {
        totalCount += book.entries.length;
    });

    // 移除加载状态，替换为实际内容
    $("#t-wi-selector").remove();

    const html = `
    <div id="t-wi-selector" class="t-wi-selector">
        <div class="t-wi-header">
            <div style="display:flex; align-items:center; gap:10px;">
                <i class="fa-solid fa-book-atlas" style="color:#90cdf4;"></i>
                <span style="font-weight:bold;">世界书条目筛选</span>
                <span style="font-size:0.8em; color:#666;">${ctx.charName}</span>
            </div>
            <div class="t-close" id="t-wi-close">&times;</div>
        </div>
        
        <div class="t-wi-action-bar" style="display:flex; gap:10px; padding:10px 15px; border-bottom:1px solid #333;">
            <button class="t-btn" id="t-wi-select-all" style="flex:1;">
                <i class="fa-solid fa-check-double"></i> 全选
            </button>
            <button class="t-btn" id="t-wi-select-none" style="flex:1;">
                <i class="fa-solid fa-square"></i> 取消全选
            </button>
        </div>
        
        <div class="t-wi-body" id="t-wi-body">
            ${entries.length === 0 ? '<div class="t-wi-empty">当前角色没有激活的世界书条目</div>' : ''}
        </div>
        
        <div class="t-wi-footer">
            <span id="t-wi-stat">已选: 0/${totalCount}</span>
            <button class="t-btn primary" id="t-wi-save">保存</button>
        </div>
    </div>`;

    $("#t-main-view").append(html);

    // 渲染条目列表
    const renderEntries = () => {
        const $body = $("#t-wi-body");
        $body.empty();

        if (entries.length === 0) {
            $body.append('<div class="t-wi-empty">当前角色没有激活的世界书条目</div>');
            return;
        }

        entries.forEach(book => {
            // 获取该世界书的已保存选择，如果是首次则为空数组
            const bookSel = charSelections ? (charSelections[book.bookName] || []) : [];

            const $bookSection = $(`
                <div class="t-wi-book">
                    <div class="t-wi-book-header">
                        <i class="fa-solid fa-book" style="color:#bfa15f;"></i>
                        <span>${book.bookName}</span>
                        <span style="color:#666; font-size:0.8em;">(${book.entries.length} 条目)</span>
                    </div>
                    <div class="t-wi-entries" data-book="${book.bookName}"></div>
                </div>
            `);

            const $entriesContainer = $bookSection.find(".t-wi-entries");

            book.entries.forEach(entry => {
                // 首次使用时默认全选，否则按保存的选择
                const isSelected = isFirstTime ? true : bookSel.includes(entry.uid);

                // 蓝灯条目标记
                const constantBadge = entry.isConstant
                    ? '<span style="background:#4a9eff33; color:#4a9eff; padding:1px 4px; border-radius:3px; font-size:0.7em; margin-left:5px;">蓝灯</span>'
                    : '';

                const $entry = $(`
                    <div class="t-wi-entry ${isSelected ? 'selected' : ''}" data-uid="${entry.uid}">
                        <div class="t-wi-entry-check">
                            <input type="checkbox" ${isSelected ? 'checked' : ''}>
                        </div>
                        <div class="t-wi-entry-content">
                            <div class="t-wi-entry-title">
                                <span class="t-wi-uid">[${entry.uid}]</span>
                                ${entry.comment}
                                ${constantBadge}
                            </div>
                            <div class="t-wi-entry-preview">${entry.preview}${entry.content.length > 80 ? '...' : ''}</div>
                        </div>
                    </div>
                `);

                $entry.find("input").on("change", function () {
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
        $(".t-wi-entry").each(function () {
            total++;
            if ($(this).find("input").is(":checked")) selected++;
        });
        $("#t-wi-stat").text(`已选: ${selected}/${total}`);
    };

    // 全选按钮
    $("#t-wi-select-all").on("click", () => {
        $(".t-wi-entry input[type='checkbox']").prop("checked", true);
        $(".t-wi-entry").addClass("selected");
        updateStat();
    });

    // 取消全选按钮
    $("#t-wi-select-none").on("click", () => {
        $(".t-wi-entry input[type='checkbox']").prop("checked", false);
        $(".t-wi-entry").removeClass("selected");
        updateStat();
    });

    // 保存
    $("#t-wi-save").on("click", () => {
        // 收集选中的 UID
        const selections = {};
        entries.forEach(book => {
            const selectedUids = [];
            $(`.t-wi-entries[data-book="${book.bookName}"] .t-wi-entry`).each(function () {
                if ($(this).find("input").is(":checked")) {
                    selectedUids.push(parseInt($(this).data("uid")));
                }
            });
            // 即使没有选中任何条目，也保存空数组，表示用户明确取消了选择
            selections[book.bookName] = selectedUids;
        });

        data.worldinfo.char_selections[charName] = selections;
        saveExtData();

        $("#t-wi-selector").remove();
        updateWorldInfoBadge();
        if (window.toastr) toastr.success("世界书设置已保存");
    });

    // 关闭
    $("#t-wi-close").on("click", () => $("#t-wi-selector").remove());

    renderEntries();
    updateStat();
}

/**
 * 渲染分类筛选菜单
 */
function renderFilterMenu(isEchoMode, currentFilter, $targetBtn, onSelect) {
    if ($("#t-filter-popover").length) { $("#t-filter-popover").remove(); return; }

    const targetMode = isEchoMode ? 'echo' : 'parallel';
    const list = GlobalState.runtimeScripts.filter(s => s.mode === targetMode);

    // 提取分类
    const cats = [...new Set(list.map(s => s.category || (s._type === 'preset' ? '官方预设' : '未分类')))].sort();

    // 样式见 css/main-window.css
    const html = `
    <div id="t-filter-popover" class="t-filter-popover">
        <div class="t-filter-item ${currentFilter === 'ALL' ? 'active' : ''}" data-val="ALL">
            <span>🔄 全部</span>
            <i class="fa-solid fa-check t-filter-check"></i>
        </div>
        <div style="height:1px; background:#333; margin:2px 0;"></div>
        ${cats.map(c => `
            <div class="t-filter-item ${currentFilter === c ? 'active' : ''}" data-val="${c}">
                <span>${c}</span>
                <i class="fa-solid fa-check t-filter-check"></i>
            </div>
        `).join('')}
    </div>`;

    $("body").append(html);
    const pop = $("#t-filter-popover");

    // 定位逻辑 (相对于按钮)
    const rect = $targetBtn[0].getBoundingClientRect();
    const left = (rect.left + 150 > window.innerWidth) ? (rect.right - 150) : rect.left;
    pop.css({ top: rect.bottom + 5, left: left });

    // 点击事件
    $(".t-filter-item").on("click", function () {
        const val = $(this).data("val");
        onSelect(val);
        pop.remove();
        $(document).off("click.closefilter");
    });

    // 点击外部关闭
    setTimeout(() => {
        $(document).on("click.closefilter", (e) => {
            if (!$(e.target).closest("#t-filter-popover, .t-filter-btn").length) {
                pop.remove();
                $(document).off("click.closefilter");
            }
        });
    }, 10);
}

/**
 * 显示剧本选择器 (纯净版)
 */
function showScriptSelector(isEchoMode, initialFilter = "ALL") {
    if ($("#t-selector-panel").length) return;

    const targetMode = isEchoMode ? 'echo' : 'parallel';
    const list = GlobalState.runtimeScripts.filter(s => s.mode === targetMode);
    let categories = ["全部"];
    const scriptCats = [...new Set(list.map(s => s.category || (s._type === 'preset' ? '官方预设' : '未分类')))];
    categories = categories.concat(scriptCats.sort());

    // 样式见 css/manager.css
    const html = `
    <div id="t-selector-panel" class="t-selector-panel">
        <div class="t-sel-header">
            <div style="font-weight:bold; color:#ccc;">📚 选择剧本 <span style="font-size:0.8em; color:#666; font-weight:normal; margin-left:10px;">(共 ${list.length} 个)</span></div>
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
        const targetCat = filterCat === "ALL" ? "全部" : filterCat;
        const filtered = targetCat === "全部"
            ? list
            : list.filter(s => (s.category || (s._type === 'preset' ? '官方预设' : '未分类')) === targetCat);

        if (filtered.length === 0) {
            $grid.append('<div style="grid-column:1/-1; text-align:center; color:#555; margin-top:50px;">此分类下暂无剧本</div>');
            return;
        }

        filtered.forEach(s => {
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
    const startCat = initialFilter === "ALL" ? "全部" : initialFilter;
    categories.forEach(cat => {
        const btn = $(`<div class="t-sel-cat-btn">${cat}</div>`);
        if (cat === startCat) btn.addClass("active");
        btn.on("click", function () {
            $(".t-sel-cat-btn").removeClass("active");
            $(this).addClass("active");
            renderGrid(cat);
        });
        $sidebar.append(btn);
    });

    renderGrid(startCat);
    $("#t-sel-close").on("click", () => $("#t-selector-panel").remove());
}

/**
 * 渲染 API 方案切换菜单
 */
function renderProfileMenu($targetBtn) {
    if ($("#t-profile-popover").length) { $("#t-profile-popover").remove(); return; }

    const data = getExtData();
    const cfg = data.config || {};
    const profiles = cfg.profiles || [];
    const activeId = cfg.active_profile_id;

    // 复用 t-filter-popover 的样式类，保持视觉一致
    const html = `
    <div id="t-profile-popover" class="t-filter-popover" style="width: 200px; z-index: 21000;">
        ${profiles.map(p => `
            <div class="t-filter-item ${p.id === activeId ? 'active' : ''}" data-id="${p.id}" data-name="${p.name}">
                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${p.name}</span>
                <i class="fa-solid fa-check t-filter-check"></i>
            </div>
        `).join('')}
    </div>`;

    $("body").append(html);
    const pop = $("#t-profile-popover");

    // 定位逻辑
    const rect = $targetBtn[0].getBoundingClientRect();
    const left = (rect.left + 200 > window.innerWidth) ? (rect.right - 200) : rect.left;
    pop.css({ top: rect.bottom + 10, left: left });

    // 点击事件
    $(".t-filter-item", pop).on("click", function () {
        const newId = $(this).data("id");
        const newName = $(this).data("name");

        // 1. 保存设置
        if (!data.config) data.config = {};
        data.config.active_profile_id = newId;
        saveExtData();

        // 2. 视觉反馈
        pop.remove();
        $(document).off("click.closeprofile");

        // 图标闪烁反馈
        $targetBtn.css({ "color": "#55efc4", "transform": "scale(1.2)" });
        setTimeout(() => $targetBtn.css({ "color": "", "transform": "" }), 500);

        if (window.toastr) toastr.success(`已切换至方案：${newName}`, "API Profile");
    });

    // 点击外部关闭
    setTimeout(() => {
        $(document).on("click.closeprofile", (e) => {
            if (!$(e.target).closest("#t-profile-popover, #t-btn-profile").length) {
                pop.remove();
                $(document).off("click.closeprofile");
            }
        });
    }, 10);
}