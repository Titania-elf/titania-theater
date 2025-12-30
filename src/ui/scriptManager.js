// src/ui/scriptManager.js

import { getExtData, saveExtData } from "../utils/storage.js";
import { GlobalState } from "../core/state.js";
import { saveUserScript, deleteUserScript, loadScripts } from "../core/scriptData.js";
import { refreshScriptList } from "./mainWindow.js";
import { openSettingsWindow } from "./settingsWindow.js";

/**
 * 剧本管理器
 */
export function openScriptManager() {
    // 内部状态
    let currentFilter = {
        mode: 'all', category: 'all', search: '', hidePresets: false
    };
    let isBatchMode = false;

    const getCategories = () => {
        const data = getExtData();
        const categoryOrder = data.category_order || [];
        const cats = new Set(GlobalState.runtimeScripts.map(s => s.category).filter(c => c));

        // 按自定义顺序排序，未在列表中的分类放到最后
        const sortedCats = [...cats].sort((a, b) => {
            const idxA = categoryOrder.indexOf(a);
            const idxB = categoryOrder.indexOf(b);
            if (idxA === -1 && idxB === -1) return a.localeCompare(b);
            if (idxA === -1) return 1;
            if (idxB === -1) return -1;
            return idxA - idxB;
        });

        return ["全部", ...sortedCats];
    };

    // HTML 结构 (样式见 css/manager.css)
    const html = `
    <div class="t-box" id="t-mgr-view">
        <div class="t-header"><span class="t-title-main">📂 剧本资源管理</span><span class="t-close" id="t-mgr-close">&times;</span></div>
        <div class="t-mgr-body">
            <div class="t-mgr-sidebar">
                <div class="t-mgr-sb-group">
                    <div class="t-mgr-sb-title">模式</div>
                    <div class="t-mgr-sb-item active" data-filter="mode" data-val="all">全部</div>
                    <div class="t-mgr-sb-item" data-filter="mode" data-val="echo">Echo</div>
                    <div class="t-mgr-sb-item" data-filter="mode" data-val="parallel">Parallel</div>
                </div>
                <div class="t-mgr-sb-group">
                    <div class="t-mgr-sb-title" style="display:flex; justify-content:space-between; align-items:center;">
                        <span>分类</span>
                        <i class="fa-solid fa-arrows-up-down" id="t-cat-sort-btn" style="cursor:pointer; color:#666; font-size:0.9em;" title="分类排序"></i>
                    </div>
                    <div id="t-mgr-cat-list"></div>
                </div>
            </div>
            <div class="t-mgr-main" id="t-mgr-main-area">
                <div class="t-mgr-toolbar">
                    <input type="text" id="t-mgr-search-inp" class="t-mgr-search" placeholder="🔍 搜索...">
                    <button id="t-mgr-import-btn" class="t-tool-btn" title="导入"><i class="fa-solid fa-file-import"></i></button>
                    <button id="t-mgr-export-btn" class="t-tool-btn" title="导出"><i class="fa-solid fa-file-export"></i></button>
                    <button id="t-mgr-batch-toggle" class="t-tool-btn" style="border:1px solid #444;" title="批量管理">
                        <i class="fa-solid fa-list-check"></i> 管理
                    </button>
                </div>
                <div class="t-mgr-header-row t-batch-elem" style="padding: 8px 15px; background: #2a2a2a; border-bottom: 1px solid #333; color: #ccc; font-size: 0.9em; flex-shrink:0;">
                    <label style="display:flex; align-items:center; cursor:pointer;">
                        <input type="checkbox" id="t-mgr-select-all" style="margin-right:10px;"> 全选当前列表
                    </label>
                </div>
                <div class="t-mgr-list" id="t-mgr-list-container"></div>
                <div class="t-mgr-footer-bar t-batch-elem">
                    <span id="t-batch-count-label">已选: 0</span>
                    <button id="t-mgr-move-to" class="t-tool-btn" style="color:#bfa15f; border-color:#bfa15f;">📁 移动到</button>
                    <button id="t-mgr-export-selected" class="t-tool-btn" style="color:#90cdf4; border-color:#90cdf4;">📤 导出</button>
                    <button id="t-mgr-del-confirm" class="t-tool-btn" style="color:#ff6b6b; border-color:#ff6b6b;">🗑️ 删除</button>
                </div>
            </div>
        </div>
        
        <div id="t-imp-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">📥 导入剧本</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">剧本模式:</span>
                    <div style="background:#111; padding:5px; border-radius:4px; border:1px solid #333; display:flex; gap:15px;">
                        <label><input type="radio" name="imp-mode-m" value="echo"> 回声 (Echo)</label>
                        <label><input type="radio" name="imp-mode-m" value="parallel" checked> 平行 (Parallel)</label>
                    </div>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">存入分类:</span>
                    <input id="t-imp-cat-m" list="t-cat-dl-m" class="t-input" placeholder="输入或选择分类 (可选)" style="width:100%;">
                    <datalist id="t-cat-dl-m"></datalist>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">选择文件 (.txt):</span>
                    <div style="display:flex; gap:10px; align-items:center; background:#111; padding:5px; border-radius:4px; border:1px solid #333;">
                        <input type="file" id="t-file-input-m" accept=".txt" style="display:none;">
                        <button id="t-btn-choose-file" class="t-btn" style="font-size:0.9em; padding:4px 10px;">📂 浏览文件...</button>
                        <span id="t-file-name-label" style="font-size:0.85em; color:#888; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width: 150px;">未选择文件</span>
                    </div>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-imp-cancel" class="t-btn" style="flex:1;">取消</button>
                    <button id="t-imp-ok" class="t-btn primary" style="flex:1;">开始导入</button>
                </div>
            </div>
        </div>
        
        <div id="t-export-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">📤 导出剧本</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">导出范围:</span>
                    <div style="background:#111; padding:10px; border-radius:4px; border:1px solid #333; display:flex; flex-direction:column; gap:8px;">
                        <label><input type="radio" name="exp-scope" value="all" checked> 导出全部用户剧本</label>
                        <label><input type="radio" name="exp-scope" value="category"> 导出指定分类</label>
                        <label><input type="radio" name="exp-scope" value="current"> 导出当前列表 (<span id="exp-current-count">0</span> 个)</label>
                    </div>
                </div>
                <div class="t-imp-row" id="exp-cat-row" style="display:none;">
                    <span class="t-imp-label">选择分类:</span>
                    <select id="t-exp-cat" class="t-input" style="width:100%;"></select>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">导出格式:</span>
                    <div style="background:#111; padding:5px; border-radius:4px; border:1px solid #333; display:flex; gap:15px;">
                        <label><input type="radio" name="exp-format" value="txt" checked> TXT (纯文本)</label>
                        <label><input type="radio" name="exp-format" value="json"> JSON (结构化)</label>
                    </div>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-exp-cancel" class="t-btn" style="flex:1;">取消</button>
                    <button id="t-exp-ok" class="t-btn primary" style="flex:1;">开始导出</button>
                </div>
            </div>
        </div>
        
        <div id="t-move-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">📁 移动到分类</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">目标分类:</span>
                    <input id="t-move-cat" list="t-move-cat-list" class="t-input" placeholder="输入或选择分类" style="width:100%;">
                    <datalist id="t-move-cat-list"></datalist>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-move-cancel" class="t-btn" style="flex:1;">取消</button>
                    <button id="t-move-ok" class="t-btn primary" style="flex:1;">确认移动</button>
                </div>
            </div>
        </div>
        
        <div id="t-cat-sort-modal" class="t-imp-modal">
            <div class="t-imp-box" style="max-height: 70vh; display: flex; flex-direction: column;">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px; flex-shrink:0;">↕️ 分类排序</h3>
                <div style="font-size:0.85em; color:#888; margin-bottom:10px; flex-shrink:0;">
                    拖拽调整分类顺序，排在前面的分类会优先显示
                </div>
                <div id="t-cat-sort-list" style="flex-grow:1; overflow-y:auto; max-height: 300px;"></div>
                <div style="display:flex; gap:10px; margin-top:20px; flex-shrink:0;">
                    <button id="t-cat-sort-cancel" class="t-btn" style="flex:1;">取消</button>
                    <button id="t-cat-sort-ok" class="t-btn primary" style="flex:1;">保存顺序</button>
                </div>
            </div>
        </div>
        
        <div id="t-cat-rename-modal" class="t-imp-modal">
            <div class="t-imp-box">
                <h3 style="margin-top:0; border-bottom:1px solid #333; padding-bottom:10px;">✏️ 重命名分类</h3>
                <div class="t-imp-row">
                    <span class="t-imp-label">当前分类: <span id="t-rename-old" style="color:#bfa15f;"></span></span>
                </div>
                <div class="t-imp-row">
                    <span class="t-imp-label">新名称:</span>
                    <input id="t-rename-new" class="t-input" placeholder="输入新的分类名称" style="width:100%;">
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button id="t-rename-cancel" class="t-btn" style="flex:1;">取消</button>
                    <button id="t-rename-ok" class="t-btn primary" style="flex:1;">确认重命名</button>
                </div>
            </div>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // --- 逻辑 ---
    const renderSidebarCats = () => {
        const cats = getCategories();
        $("#t-mgr-cat-list").empty();
        $("#t-cat-dl-m").empty().append(cats.map(c => `<option value="${c}">`));
        cats.forEach(c => {
            const isAll = c === "全部";
            const $item = $(`
                <div class="t-mgr-sb-item" data-filter="category" data-val="${c}">
                    <span class="t-cat-name">${c}</span>
                    ${!isAll ? '<i class="fa-solid fa-pen t-cat-edit" style="font-size:0.7em; opacity:0; margin-left:auto; padding:3px;" title="重命名"></i>' : ''}
                </div>
            `);
            if (currentFilter.category === c) $item.addClass("active");

            // 点击分类名筛选
            $item.find(".t-cat-name").on("click", function () {
                $(".t-mgr-sb-item[data-filter='category']").removeClass("active");
                $item.addClass("active");
                currentFilter.category = c;
                renderList();
            });

            // 点击编辑图标重命名
            $item.find(".t-cat-edit").on("click", function (e) {
                e.stopPropagation();
                openRenameCategoryModal(c);
            });

            // 悬停时显示编辑图标
            $item.on("mouseenter", function () {
                $(this).find(".t-cat-edit").css("opacity", "1");
            }).on("mouseleave", function () {
                $(this).find(".t-cat-edit").css("opacity", "0");
            });

            $("#t-mgr-cat-list").append($item);
        });
    };

    // 重命名分类弹窗
    const openRenameCategoryModal = (oldName) => {
        $("#t-rename-old").text(oldName);
        $("#t-rename-new").val(oldName);
        $("#t-cat-rename-modal").css("display", "flex");
        $("#t-rename-new").focus().select();
    };

    // 确认重命名分类
    $("#t-rename-cancel").on("click", () => $("#t-cat-rename-modal").hide());
    $("#t-rename-ok").on("click", () => {
        const oldName = $("#t-rename-old").text();
        const newName = $("#t-rename-new").val().trim();

        if (!newName) {
            alert("分类名称不能为空");
            return;
        }

        if (newName === oldName) {
            $("#t-cat-rename-modal").hide();
            return;
        }

        // 检查是否存在同名分类
        const existingCats = [...new Set(GlobalState.runtimeScripts.map(s => s.category).filter(c => c))];
        if (existingCats.includes(newName)) {
            if (!confirm(`分类 "${newName}" 已存在，是否合并？`)) {
                return;
            }
        }

        // 批量更新所有该分类下的剧本
        const data = getExtData();
        let updatedCount = 0;

        (data.user_scripts || []).forEach(s => {
            if (s.category === oldName) {
                s.category = newName;
                updatedCount++;
            }
        });

        // 更新分类排序列表中的名称
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
        if (window.toastr) toastr.success(`已将 ${updatedCount} 个剧本移至分类 "${newName}"`);
    });

    const updateBatchCount = () => {
        const n = $(".t-mgr-check:checked").length;
        $("#t-batch-count-label").text(`已选: ${n}`);
        $("#t-mgr-del-confirm").prop("disabled", n === 0).css("opacity", n === 0 ? 0.5 : 1);
    };

    const renderList = () => {
        const $list = $("#t-mgr-list-container");
        $list.empty();
        $("#t-mgr-select-all").prop("checked", false);
        updateBatchCount();

        let filtered = GlobalState.runtimeScripts.filter(s => {
            if (currentFilter.mode !== 'all' && s.mode !== currentFilter.mode) return false;
            if (currentFilter.category !== 'all') {
                const sCat = s.category || "未分类";
                if (currentFilter.category !== "全部" && sCat !== currentFilter.category) return false;
            }
            if (currentFilter.search) {
                const term = currentFilter.search.toLowerCase();
                if (!s.name.toLowerCase().includes(term)) return false;
            }
            return true;
        });

        if (filtered.length === 0) {
            $list.append(`<div style="text-align:center; color:#555; margin-top:50px;">无数据</div>`);
            return;
        }

        filtered.forEach(s => {
            const isUser = s._type === 'user';
            const modeIcon = s.mode === 'echo' ? '<i class="fa-solid fa-water" style="color:#90cdf4;"></i>' : '<i class="fa-solid fa-globe" style="color:#bfa15f;"></i>';
            const catLabel = s.category ? `<span class="t-mgr-tag">${s.category}</span>` : '';
            const presetLabel = !isUser ? `<span class="t-mgr-tag" style="background:#444;">预设</span>` : '';

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
                    openEditor(s.id, 'manager');
                } else {
                    const cb = $row.find(".t-mgr-check");
                    cb.prop("checked", !cb.prop("checked")).trigger("change");
                }
            });
            $row.find(".t-mgr-check").on("change", updateBatchCount);
            $list.append($row);
        });
    };

    const refreshAll = () => { renderSidebarCats(); renderList(); };

    // 事件绑定
    $("#t-mgr-batch-toggle").on("click", function () {
        isBatchMode = !isBatchMode;
        const main = $("#t-mgr-main-area");
        const btn = $(this);
        if (isBatchMode) {
            main.addClass("t-batch-active");
            btn.html('<i class="fa-solid fa-check"></i> 完成').css({ background: "#bfa15f", color: "#000", borderColor: "#bfa15f" });
        } else {
            main.removeClass("t-batch-active");
            btn.html('<i class="fa-solid fa-list-check"></i> 管理').css({ background: "", color: "", borderColor: "#444" });
            $(".t-mgr-check").prop("checked", false);
        }
    });

    // 导出功能
    const exportScriptsToTxt = (scripts) => {
        let content = "";
        scripts.forEach((s, idx) => {
            if (idx > 0) content += "\n\n";
            content += `### ${s.name}\n`;
            content += `Title: ${s.name}\n`;
            if (s.category) content += `Category: ${s.category}\n`;
            content += `Mode: ${s.mode}\n`;
            if (s.desc) content += `Desc: ${s.desc}\n`;
            content += `\n${s.prompt}`;
        });
        return content;
    };

    const exportScriptsToJson = (scripts) => {
        const exportData = scripts.map(s => ({
            name: s.name,
            desc: s.desc || "",
            prompt: s.prompt,
            mode: s.mode,
            category: s.category || ""
        }));
        return JSON.stringify(exportData, null, 2);
    };

    const downloadFile = (content, filename, type) => {
        const blob = new Blob([content], { type: type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const getExportScripts = (scope) => {
        const userScripts = GlobalState.runtimeScripts.filter(s => s._type === 'user');

        if (scope === 'all') {
            return userScripts;
        } else if (scope === 'category') {
            const cat = $("#t-exp-cat").val();
            return userScripts.filter(s => (s.category || "未分类") === cat);
        } else if (scope === 'current') {
            // 获取当前筛选条件下的剧本
            return GlobalState.runtimeScripts.filter(s => {
                if (s._type !== 'user') return false;
                if (currentFilter.mode !== 'all' && s.mode !== currentFilter.mode) return false;
                if (currentFilter.category !== 'all') {
                    const sCat = s.category || "未分类";
                    if (currentFilter.category !== "全部" && sCat !== currentFilter.category) return false;
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
        // 更新当前列表数量
        const currentListCount = GlobalState.runtimeScripts.filter(s => {
            if (s._type !== 'user') return false;
            if (currentFilter.mode !== 'all' && s.mode !== currentFilter.mode) return false;
            if (currentFilter.category !== 'all') {
                const sCat = s.category || "未分类";
                if (currentFilter.category !== "全部" && sCat !== currentFilter.category) return false;
            }
            if (currentFilter.search) {
                const term = currentFilter.search.toLowerCase();
                if (!s.name.toLowerCase().includes(term)) return false;
            }
            return true;
        }).length;
        $("#exp-current-count").text(currentListCount);

        // 填充分类下拉框
        const cats = getCategories().filter(c => c !== "全部");
        cats.unshift("未分类");
        $("#t-exp-cat").empty();
        [...new Set(cats)].forEach(c => {
            $("#t-exp-cat").append(`<option value="${c}">${c}</option>`);
        });

        $("#t-export-modal").css("display", "flex");
    });

    $("input[name='exp-scope']").on("change", function () {
        if ($(this).val() === 'category') {
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
            alert("没有可导出的剧本");
            return;
        }

        const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        let content, filename, mimeType;

        if (format === 'txt') {
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
        if (window.toastr) toastr.success(`已导出 ${scripts.length} 个剧本`);
    });

    // 批量导出选中的剧本
    $("#t-mgr-export-selected").on("click", () => {
        const selectedIds = [];
        $(".t-mgr-check:checked").each(function () {
            const type = $(this).data("type");
            if (type === 'user') {
                selectedIds.push($(this).data("id"));
            }
        });

        if (selectedIds.length === 0) {
            alert("请先选择要导出的用户剧本（预设剧本不支持导出）");
            return;
        }

        const scripts = GlobalState.runtimeScripts.filter(s => selectedIds.includes(s.id));
        const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const content = exportScriptsToTxt(scripts);
        downloadFile(content, `Titania_Selected_${timestamp}.txt`, "text/plain;charset=utf-8");

        if (window.toastr) toastr.success(`已导出 ${scripts.length} 个剧本`);
    });

    $("#t-mgr-import-btn").on("click", () => { $("#t-imp-modal").css("display", "flex"); $("#t-file-input-m").val(""); $("#t-file-name-label").text("未选择文件"); });
    $("#t-btn-choose-file").on("click", () => $("#t-file-input-m").click());
    $("#t-file-input-m").on("change", function () { $("#t-file-name-label").text(this.files[0] ? this.files[0].name : "未选择文件"); });
    $("#t-imp-cancel").on("click", () => $("#t-imp-modal").hide());

    // 智能导入解析逻辑
    $("#t-imp-ok").on("click", () => {
        const file = $("#t-file-input-m")[0].files[0];
        if (!file) return alert("请选择文件");
        const defaultMode = $("input[name='imp-mode-m']:checked").val();
        const defaultCat = $("#t-imp-cat-m").val().trim();

        const reader = new FileReader();
        reader.onload = function (evt) {
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
                        scriptTitle = `${fileName}_${String(index + 1).padStart(2, '0')}`;
                    }
                }

                if (!rawBody) return;

                saveUserScript({
                    id: "imp_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
                    name: scriptTitle,
                    desc: "导入数据",
                    prompt: rawBody,
                    mode: defaultMode,
                    category: scriptCat
                });
                importCount++;
            });

            alert(`成功导入 ${importCount} 个剧本`);
            $("#t-imp-modal").hide();
            refreshAll();
        };
        reader.readAsText(file);
    });

    $("#t-mgr-del-confirm").on("click", function () {
        const toDeleteUser = [];
        const toHidePreset = [];
        $(".t-mgr-check:checked").each(function () {
            const id = $(this).data("id");
            const type = $(this).data("type");
            if (type === 'user') toDeleteUser.push(id);
            else if (type === 'preset') toHidePreset.push(id);
        });

        const total = toDeleteUser.length + toHidePreset.length;
        if (total === 0) return;

        if (confirm(`⚠️ 确定删除选中的 ${total} 个剧本？\n(注：官方预设将变为隐藏状态，可去设置里恢复)`)) {
            if (toDeleteUser.length > 0) toDeleteUser.forEach(id => deleteUserScript(id));
            if (toHidePreset.length > 0) {
                const data = getExtData();
                if (!data.disabled_presets) data.disabled_presets = [];
                data.disabled_presets = [...new Set([...data.disabled_presets, ...toHidePreset])];
                saveExtData();
                loadScripts();
            }
            refreshAll();
            $("#t-mgr-select-all").prop("checked", false);
        }
    });

    // 批量移动到分类
    $("#t-mgr-move-to").on("click", () => {
        const selectedIds = [];
        $(".t-mgr-check:checked").each(function () {
            const type = $(this).data("type");
            if (type === 'user') {
                selectedIds.push($(this).data("id"));
            }
        });

        if (selectedIds.length === 0) {
            alert("请先选择要移动的用户剧本（预设剧本不支持移动）");
            return;
        }

        // 填充分类列表
        const cats = getCategories().filter(c => c !== "全部");
        $("#t-move-cat-list").empty();
        cats.forEach(c => {
            $("#t-move-cat-list").append(`<option value="${c}">`);
        });
        $("#t-move-cat").val("");

        $("#t-move-modal").css("display", "flex");
    });

    $("#t-move-cancel").on("click", () => $("#t-move-modal").hide());
    $("#t-move-ok").on("click", () => {
        const targetCat = $("#t-move-cat").val().trim();
        if (!targetCat) {
            alert("请输入或选择目标分类");
            return;
        }

        const selectedIds = [];
        $(".t-mgr-check:checked").each(function () {
            const type = $(this).data("type");
            if (type === 'user') {
                selectedIds.push($(this).data("id"));
            }
        });

        const data = getExtData();
        let movedCount = 0;

        (data.user_scripts || []).forEach(s => {
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

        if (window.toastr) toastr.success(`已将 ${movedCount} 个剧本移至 "${targetCat}"`);
    });

    // 分类排序
    $("#t-cat-sort-btn").on("click", () => {
        const cats = getCategories().filter(c => c !== "全部");
        const $list = $("#t-cat-sort-list");
        $list.empty();

        if (cats.length === 0) {
            $list.append('<div style="text-align:center; color:#666; padding:20px;">暂无分类</div>');
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

        // 初始化拖拽排序
        if (typeof Sortable !== 'undefined') {
            new Sortable($list[0], {
                animation: 150,
                ghostClass: 't-sort-ghost'
            });
        } else {
            // 简易拖拽实现（不依赖 Sortable.js）
            let draggedItem = null;
            $list.find(".t-cat-sort-item").each(function () {
                $(this).attr("draggable", "true");
                $(this).on("dragstart", function (e) {
                    draggedItem = this;
                    $(this).css("opacity", "0.5");
                });
                $(this).on("dragend", function () {
                    $(this).css("opacity", "1");
                    draggedItem = null;
                });
                $(this).on("dragover", function (e) {
                    e.preventDefault();
                });
                $(this).on("drop", function (e) {
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
        $("#t-cat-sort-list .t-cat-sort-item").each(function () {
            newOrder.push($(this).data("cat"));
        });

        const data = getExtData();
        data.category_order = newOrder;
        saveExtData();

        refreshAll();
        $("#t-cat-sort-modal").hide();
        if (window.toastr) toastr.success("分类顺序已保存");
    });

    $("#t-mgr-close").on("click", () => {
        $("#t-mgr-view").remove();
        $("#t-main-view").show();
        // 刷新主窗口的下拉列表
        refreshScriptList($("#t-tab-echo").hasClass("active-echo"));
    });

    $(".t-mgr-sb-item[data-filter='mode']").on("click", function () { $(".t-mgr-sb-item[data-filter='mode']").removeClass("active"); $(this).addClass("active"); currentFilter.mode = $(this).data("val"); renderList(); });
    $("#t-mgr-search-inp").on("input", function () { currentFilter.search = $(this).val(); renderList(); });
    $("#t-mgr-select-all").on("change", function () { $(".t-mgr-check:not(:disabled)").prop("checked", $(this).is(":checked")); updateBatchCount(); });

    refreshAll();
}

/**
 * 剧本编辑器
 * @param {string|null} id - 剧本 ID，null 表示新建
 * @param {string} source - 来源: 'manager' | 'main'
 */
export function openEditor(id, source = 'main') {
    const isEdit = !!id;
    let data = { id: Date.now().toString(), name: "新剧本", desc: "", prompt: "", mode: "parallel", category: "" };
    if (isEdit) data = GlobalState.runtimeScripts.find(s => s.id === id);
    const isPreset = data._type === 'preset';

    // 根据来源隐藏对应窗口
    if (source === 'manager') {
        $("#t-mgr-view").hide();
    } else {
        // 'main' - 从主窗口打开
        $("#t-main-view").hide();
    }

    const checkEcho = data.mode === 'echo' ? 'checked' : '';
    const checkParallel = (data.mode === 'parallel' || !data.mode) ? 'checked' : '';

    // 获取现有分类用于联想
    const existingCats = [...new Set(GlobalState.runtimeScripts.map(s => s.category).filter(c => c))].sort();
    const dataListOpts = existingCats.map(c => `<option value="${c}">`).join("");

    const html = `
    <div class="t-box" id="t-editor-view">
        <div class="t-header"><span class="t-title-main">${isPreset ? '查看' : (isEdit ? '编辑' : '新建')}</span></div>
        <div class="t-body">
            <div style="display:flex; gap:10px; margin-bottom:5px;">
                <div style="flex-grow:1;">
                    <label>标题:</label>
                    <input id="ed-name" class="t-input" value="${data.name}" ${isPreset ? 'disabled' : ''}>
                </div>
                <div style="width: 150px;">
                    <label>分类:</label>
                    <input id="ed-cat" list="ed-cat-list" class="t-input" value="${data.category || ''}" placeholder="默认" ${isPreset ? 'disabled' : ''}>
                    <datalist id="ed-cat-list">${dataListOpts}</datalist>
                </div>
            </div>

            <label>模式:</label>
            <div style="margin-bottom:10px; display:flex; gap:15px;">
                <label><input type="radio" name="ed-mode" value="echo" ${checkEcho} ${isPreset ? 'disabled' : ''}> <span style="color:#90cdf4;">回声</span></label>
                <label><input type="radio" name="ed-mode" value="parallel" ${checkParallel} ${isPreset ? 'disabled' : ''}> <span style="color:#bfa15f;">平行</span></label>
            </div>

            <label>简介:</label><input id="ed-desc" class="t-input" value="${data.desc}" ${isPreset ? 'disabled' : ''}>
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                <label>Prompt:</label>
                ${!isPreset ? `<div class="t-tool-btn" id="ed-btn-expand" style="cursor:pointer;"><i class="fa-solid fa-maximize"></i> 大屏</div>` : ''}
            </div>
            <textarea id="ed-prompt" class="t-input" rows="6" ${isPreset ? 'disabled' : ''}>${data.prompt}</textarea>
            
            <div class="t-btn-row">
                ${!isPreset ? '<button id="ed-save" class="t-btn primary" style="flex:1;">保存</button>' : ''}
                <button id="ed-cancel" class="t-btn" style="flex:1;">返回</button>
            </div>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // 事件绑定
    $("#ed-cancel").on("click", () => {
        $("#t-editor-view").remove();
        if (source === 'manager') {
            // 从管理器打开 -> 返回管理器
            $("#t-mgr-view").remove();
            openScriptManager();
        } else {
            // 从主窗口打开 -> 返回主窗口
            $("#t-main-view").show();
        }
    });

    $("#ed-btn-expand").on("click", () => {
        $("#t-editor-view").hide();
        $("#t-overlay").append(`<div class="t-box" id="t-large-edit-view" style="height:90vh; max-height:95vh; max-width:800px;"><div class="t-header"><span class="t-title-main">大屏模式</span></div><div class="t-body" style="height:100%;"><textarea id="ed-large-text" class="t-input" style="flex-grow:1; resize:none; font-family:monospace; line-height:1.5; font-size:14px; height:100%;">${$("#ed-prompt").val()}</textarea><div class="t-btn-row"><button id="ed-large-ok" class="t-btn primary" style="flex:1;">确认</button><button id="ed-large-cancel" class="t-btn" style="flex:1;">取消</button></div></div></div>`);
        $("#ed-large-cancel").on("click", () => { $("#t-large-edit-view").remove(); $("#t-editor-view").show(); });
        $("#ed-large-ok").on("click", () => { $("#ed-prompt").val($("#ed-large-text").val()); $("#t-large-edit-view").remove(); $("#t-editor-view").show(); });
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
            if (source === 'manager') {
                // 从管理器打开 -> 返回管理器
                $("#t-mgr-view").remove();
                openScriptManager();
            } else {
                // 从主窗口打开 -> 返回主窗口
                $("#t-main-view").show();
            }
        });
    }
}