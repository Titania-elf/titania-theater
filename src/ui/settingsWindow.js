// src/ui/settingsWindow.js (Part 1/2)

import { getExtData, saveExtData } from "../utils/storage.js";
import { GlobalState } from "../core/state.js";
import { TitaniaLogger } from "../core/logger.js";
import { fileToBase64 } from "../utils/helpers.js";
import { createFloatingButton } from "./floatingBtn.js";
import { loadScripts } from "../core/scriptData.js";
import { openScriptManager } from "./scriptManager.js";

export function openSettingsWindow() {
    const data = getExtData();
    const cfg = data.config || {};
    // 默认外观配置防空 (增加新字段默认值)
    const app = data.appearance || {};
    if (!app.color_bg) app.color_bg = "#2b2b2b";
    if (!app.color_icon) app.color_icon = "#ffffff";
    if (!app.color_notify_bg) app.color_notify_bg = app.color_bg || "#2b2b2b";
    // 补全其他默认值...
    app.type = app.type || "emoji";
    app.content = app.content || "🎭";
    app.color_theme = app.color_theme || "#bfa15f";
    app.color_notify = app.color_notify || "#55efc4";
    app.size = app.size || 56;
    const dirCfg = data.director || { length: "", perspective: "auto", style_ref: "" };

    // 数据迁移兼容
    if (!cfg.profiles || !Array.isArray(cfg.profiles)) {
        cfg.profiles = [
            { id: "st_sync", name: "🔗 跟随 SillyTavern (主连接)", type: "internal", readonly: true },
            { id: "default", name: "默认自定义", type: "custom", url: cfg.url || "", key: cfg.key || "", model: cfg.model || "gpt-3.5-turbo" }
        ];
        cfg.active_profile_id = "default";
    }

    // 深度拷贝临时数据 (用于编辑，不直接修改原始数据)
    let tempProfiles = JSON.parse(JSON.stringify(cfg.profiles));
    let tempActiveId = cfg.active_profile_id;
    let tempApp = JSON.parse(JSON.stringify(app));
    if (!tempApp.size) tempApp.size = 56;

    $("#t-main-view").hide();

    // HTML 结构 (样式见 css/settings.css)
    const html = `
    <div class="t-box" id="t-settings-view">
        <div class="t-header"><span class="t-title-main">⚙️ 设置</span><span class="t-close" id="t-set-close">&times;</span></div>
        <div class="t-set-body">
            <div class="t-set-nav">
                <div class="t-set-tab-btn active" data-tab="appearance">🎨 外观设置</div>
                <div class="t-set-tab-btn" data-tab="connection">🔌 API 连接</div>
                <div class="t-set-tab-btn" data-tab="director">🎬 导演模式</div>
                <div class="t-set-tab-btn" data-tab="automation">🤖 自动化</div>
                <div class="t-set-tab-btn" data-tab="data">🗂️ 数据管理</div>
                <div class="t-set-tab-btn" data-tab="diagnostics" style="color:#ff9f43;"><i class="fa-solid fa-stethoscope"></i> 诊断</div>
            </div>

            <div class="t-set-content">
                <!-- Tab 1: 外观 -->
                <div id="page-appearance" class="t-set-page active">
                    <div class="t-preview-container">
                        <div style="font-size:0.8em; color:#666; margin-bottom:15px;">实时预览</div>
                        <div id="p-ball" class="t-preview-ball"></div>
                        <div style="display:flex; gap:10px; margin-top:20px;">
                            <button class="t-tool-btn" id="btn-test-spin">⚡ 测试流光</button>
                            <button class="t-tool-btn" id="btn-test-notify">🔔 测试呼吸</button>
                        </div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label" style="display:flex; justify-content:space-between;"><span>悬浮球尺寸</span><span id="p-size-val" style="color:#bfa15f;">${tempApp.size}px</span></div>
                        <input type="range" id="p-size-input" min="40" max="100" step="2" value="${tempApp.size}" style="width:100%;">
                    </div>
                    <div class="t-form-group">
                        <label class="t-form-label">图标类型</label>
                        <div style="display:flex; gap:20px; margin-bottom:15px;">
                            <label><input type="radio" name="p-type" value="emoji" ${tempApp.type === 'emoji' ? 'checked' : ''}> Emoji 表情</label>
                            <label><input type="radio" name="p-type" value="image" ${tempApp.type === 'image' ? 'checked' : ''}> 自定义图片</label>
                        </div>
                        <div id="box-emoji" style="display:${tempApp.type === 'emoji' ? 'block' : 'none'}">
                            <input id="p-emoji-input" class="t-input" value="${tempApp.type === 'emoji' ? tempApp.content : '🎭'}" style="width:100px; text-align:center; font-size:1.5em;">
                        </div>
                        <div id="box-image" style="display:${tempApp.type === 'image' ? 'block' : 'none'}">
                            <input type="file" id="p-file-input" accept="image/*" style="display:none;">
                            <div class="t-upload-card" id="btn-upload-card" title="点击更换图片"><i class="fa-solid fa-camera fa-2x"></i><span>点击上传</span></div>
                        </div>
                    </div>
                    <div class="t-form-group" style="margin-top:20px;">
                        <!-- [新增] 基础外观颜色 -->
                        <div class="t-form-row"><span>球体背景色</span><input type="color" id="p-color-bg" value="${tempApp.color_bg}" style="background:none; border:none; width:40px; height:30px;"></div>
                        <div class="t-form-row"><span>图标文字色</span><input type="color" id="p-color-icon" value="${tempApp.color_icon}" style="background:none; border:none; width:40px; height:30px;"></div>
                        
                        <!-- 原有特效颜色 -->
                        <div class="t-form-row"><span>流光主题色</span><input type="color" id="p-color-theme" value="${tempApp.color_theme}" style="background:none; border:none; width:40px; height:30px;"></div>
                        <!-- 通知颜色组 -->
                        <div class="t-form-row"><span>通知呼吸色 (光晕)</span><input type="color" id="p-color-notify" value="${tempApp.color_notify}" style="background:none; border:none; width:40px; height:30px;"></div>
                        <div class="t-form-row" style="border:none;"><span>通知背景色 (球体)</span><input type="color" id="p-color-notify-bg" value="${tempApp.color_notify_bg}" style="background:none; border:none; width:40px; height:30px;"></div>
                    </div>
                </div>

                <!-- Tab 2: 连接 -->
                <div id="page-connection" class="t-set-page">
                    <div class="t-form-group">
                        <label class="t-form-label">切换配置方案 (Profile)</label>
                        <div class="t-prof-header">
                            <select id="cfg-prof-select" class="t-prof-select"></select>
                            <button id="cfg-prof-add" class="t-tool-btn" title="新建方案"><i class="fa-solid fa-plus"></i></button>
                            <button id="cfg-prof-del" class="t-tool-btn" title="删除当前方案" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <div id="cfg-prof-meta"><label class="t-form-label">方案名称</label><input id="cfg-prof-name" class="t-input" value=""></div>
                    </div>
                    <div style="height:1px; background:#333; margin:20px 0;"></div>
                    <div id="cfg-conn-fields">
                        <div class="t-form-group">
                            <label class="t-form-label">API Endpoint URL</label>
                            <input id="cfg-url" class="t-input" placeholder="例如: http://127.0.0.1:5000/v1">
                            <div id="cfg-url-hint" style="font-size:0.8em; color:#666; margin-top:5px; display:none;"><i class="fa-solid fa-link"></i> 正在读取 ST 全局设置：<span id="st-url-display"></span></div>
                        </div>
                        <div class="t-form-group"><label class="t-form-label">API Key</label><input id="cfg-key" type="password" class="t-input" placeholder="sk-..."></div>
                        <div class="t-form-group">
                            <label class="t-form-label">Model Name</label>
                            <div style="display:flex; gap:10px;"><select id="cfg-model" class="t-input" style="cursor:pointer;"></select><button id="t-btn-fetch" class="t-tool-btn" title="获取模型列表">🔄 获取列表</button></div>
                        </div>
                    </div>
                    <div class="t-form-group"><label style="cursor:pointer; display:flex; align-items:center;"><input type="checkbox" id="cfg-stream" ${cfg.stream !== false ? 'checked' : ''} style="margin-right:10px;"> 开启流式传输 (Streaming)</label></div>
                </div>

                <!-- Tab 3: 导演模式 -->
                <div id="page-director" class="t-set-page">
                    <div style="background:#181818; padding:15px; border-radius:6px; border:1px solid #333; margin-bottom:20px; color:#888; font-size:0.9em;">
                        <i class="fa-solid fa-circle-info"></i> 这里设置的是“默认值”。在演绎主界面点击“导演指令”按钮可进行临时调整。
                    </div>
                    <div class="t-form-group"><label class="t-form-label">默认篇幅建议</label><input id="set-dir-len" class="t-input" value="${dirCfg.length}" placeholder="例如: 300字, 2个段落"></div>
                    <div class="t-form-group"><label class="t-form-label">默认叙事视角</label><select id="set-dir-pers" class="t-input"><option value="auto" ${dirCfg.perspective === 'auto' ? 'selected' : ''}>自动 (跟随剧本)</option><option value="1st" ${dirCfg.perspective === '1st' ? 'selected' : ''}>强制第一人称 (我)</option><option value="3rd" ${dirCfg.perspective === '3rd' ? 'selected' : ''}>强制第三人称 (他/她)</option></select></div>
                    <div class="t-form-group"><label class="t-form-label">默认文笔参考 (不超过1000字)</label><textarea id="set-dir-style" class="t-input" rows="5" placeholder="粘贴你喜欢的文笔段落...">${dirCfg.style_ref}</textarea></div>
                </div>

                <!-- Tab 4: 自动化 -->
                <div id="page-automation" class="t-set-page">
                    <div class="t-form-group">
                        <label style="cursor:pointer; display:flex; align-items:center; color:#bfa15f; font-weight:bold;">
                            <input type="checkbox" id="cfg-auto" ${cfg.auto_generate ? 'checked' : ''} style="margin-right:10px;">
                            开启后台自动演绎
                        </label>
                        <p style="font-size:0.8em; color:#666; margin-top:5px; margin-left:22px;">当检测到群聊消息且不是用户发送时，有概率自动触发。</p>
                    </div>
                    <div id="auto-settings-panel" style="display:${cfg.auto_generate ? 'block' : 'none'}; padding-left:22px;">
                        <div class="t-form-group">
                            <label class="t-form-label">触发概率: <span id="cfg-chance-val">${cfg.auto_chance || 50}%</span></label>
                            <input type="range" id="cfg-chance" min="10" max="100" step="10" value="${cfg.auto_chance || 50}" style="width:100%;">
                        </div>
                        <div class="t-form-group">
                            <label class="t-form-label">抽取策略</label>
                            <select id="cfg-auto-mode" class="t-input">
                                <option value="follow" ${(cfg.auto_mode || 'follow') === 'follow' ? 'selected' : ''}>🛡️ 跟随主界面模式 (默认)</option>
                                <option value="category" ${(cfg.auto_mode || 'follow') === 'category' ? 'selected' : ''}>🎯 指定分类白名单 (自定义)</option>
                            </select>
                        </div>
                        <div id="auto-cat-container" style="display:none; background:#181818; padding:10px; border:1px solid #333; border-radius:6px; margin-top:10px;">
                            <div style="font-size:0.8em; color:#888; margin-bottom:8px;">请勾选允许随机抽取的分类 (多选):</div>
                            <div id="auto-cat-list" style="max-height:150px; overflow-y:auto; display:flex; flex-direction:column; gap:5px;"></div>
                        </div>
                    </div>
                    <div class="t-form-group" style="margin-top:20px; border-top:1px solid #333; padding-top:15px;">
                        <label class="t-form-label">回声模式 - 历史读取行数</label>
                        <input type="number" id="cfg-history" class="t-input" value="${cfg.history_limit || 10}">
                    </div>
                </div>

                <!-- Tab 5: 数据管理 -->
                <div id="page-data" class="t-set-page">
                    <div class="t-form-group">
                        <div class="t-form-label">自定义剧本库</div>
                        <div style="background:#181818; border:1px solid #333; padding:20px; border-radius:6px; display:flex; align-items:center; justify-content:space-between;">
                            <div>
                                <div style="font-size:1.1em; color:#eee; font-weight:bold;"><i class="fa-solid fa-scroll" style="color:#bfa15f; margin-right:8px;"></i>剧本管理器</div>
                                <div style="font-size:0.85em; color:#777; margin-top:5px;">当前拥有自定义剧本: ${(data.user_scripts || []).length} 个</div>
                            </div>
                            <button id="btn-open-mgr" class="t-btn primary" style="padding: 8px 20px;"><i class="fa-solid fa-list-check"></i> 打开管理</button>
                        </div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label">已隐藏的官方预设剧本</div>
                        <div style="background:#181818; border:1px solid #333; padding:15px; border-radius:6px; display:flex; align-items:center; justify-content:space-between;">
                            <div><div style="font-size:1.1em; color:#eee;">共 ${(data.disabled_presets || []).length} 个</div><div style="font-size:0.8em; color:#666;">这些预设在列表中已被隐藏</div></div>
                            <button id="btn-restore-presets" class="t-btn" style="border:1px solid #555;" ${(data.disabled_presets || []).length === 0 ? 'disabled' : ''}>♻️ 恢复所有</button>
                        </div>
                    </div>
                </div>
                
                <!-- Tab 6: 诊断 (新增) -->
                <div id="page-diagnostics" class="t-set-page">
                    <div style="margin-bottom:15px; background: rgba(255, 159, 67, 0.1); border:1px solid rgba(255, 159, 67, 0.3); padding:10px; border-radius:6px;">
                        <div style="font-weight:bold; color:#feca57; font-size:0.9em; margin-bottom:5px;"><i class="fa-solid fa-triangle-exclamation"></i> 报错排查指南</div>
                        <div style="font-size:0.85em; color:#ccc;">如果您遇到生成失败或内容被截断的情况，请点击下方“导出完整报告”按钮，将生成的 JSON 文件发送给开发者。报告中包含您的 Prompt（用于排查安全审查），但 <b>API Key 已自动脱敏</b>。</div>
                    </div>
                    <div class="t-form-group">
                        <div class="t-form-label">实时日志 (内存缓存 50 条)</div>
                        <div class="t-log-box" id="t-log-viewer"></div>
                    </div>
                    <div style="display:flex; gap:10px;">
                        <button id="btn-refresh-log" class="t-btn">🔄 刷新显示</button>
                        <button id="btn-export-log" class="t-btn primary"><i class="fa-solid fa-download"></i> 导出完整报告 (.json)</button>
                    </div>
                </div>

            </div>
        </div>
        <div style="padding:15px; background:#181818; border-top:1px solid #333; display:flex; justify-content:flex-end;">
            <button id="t-set-save" class="t-btn primary" style="padding:0 30px;">💾 保存所有配置</button>
        </div>
    </div>`;

    $("#t-overlay").append(html);
    // src/ui/settingsWindow.js (Part 2/2)

    // --- Tab 切换 ---
    $(".t-set-tab-btn").on("click", function () {
        $(".t-set-tab-btn").removeClass("active"); $(this).addClass("active");
        $(".t-set-page").removeClass("active"); $(`#page-${$(this).data("tab")}`).addClass("active");
    });

    // --- Profile 逻辑 ---
    const saveCurrentProfileToMemory = () => {
        const pIndex = tempProfiles.findIndex(p => p.id === tempActiveId);
        if (pIndex !== -1 && tempProfiles[pIndex].type !== 'internal') {
            const p = tempProfiles[pIndex]; 
            p.name = $("#cfg-prof-name").val(); 
            p.url = $("#cfg-url").val(); 
            p.key = $("#cfg-key").val(); 
            p.model = $("#cfg-model").val();
        }
    };
    const renderProfileUI = () => {
        const pIndex = tempProfiles.findIndex(p => p.id === tempActiveId);
        if (pIndex === -1) { tempActiveId = tempProfiles[0].id; return renderProfileUI(); }
        const p = tempProfiles[pIndex];
        const isInternal = p.type === 'internal';
        const $sel = $("#cfg-prof-select"); $sel.empty();
        tempProfiles.forEach(prof => $sel.append(`<option value="${prof.id}" ${prof.id === tempActiveId ? 'selected' : ''}>${prof.name}</option>`));
        $("#cfg-prof-name").val(p.name).prop("disabled", isInternal);
        $("#cfg-prof-del").prop("disabled", isInternal).css("opacity", isInternal ? 0.5 : 1);
        if (isInternal) {
            $("#cfg-url").val("").prop("disabled", true).prop("placeholder", "(由 ST 托管)");
            $("#cfg-key").val("").prop("disabled", true).prop("placeholder", "(由 ST 托管)");
            $("#cfg-model").empty().append('<option selected>(ST 设置)</option>').prop("disabled", true);
            $("#st-url-display").text(typeof settings !== 'undefined' ? (settings.api_url_openai || "未知") : "未知"); $("#cfg-url-hint").show();
        } else {
            $("#cfg-url").val(p.url || "").prop("disabled", false).prop("placeholder", "http://...");
            $("#cfg-key").val(p.key || "").prop("disabled", false).prop("placeholder", "sk-...");
            $("#cfg-model").prop("disabled", false); $("#cfg-url-hint").hide();
            const $mSel = $("#cfg-model"); $mSel.empty(); const currentM = p.model || "gpt-3.5-turbo"; $mSel.append(`<option value="${currentM}" selected>${currentM}</option>`);
        }
    };
    $("#cfg-prof-select").on("change", function () { saveCurrentProfileToMemory(); tempActiveId = $(this).val(); renderProfileUI(); });
    $("#cfg-prof-add").on("click", function () { saveCurrentProfileToMemory(); const newId = "custom_" + Date.now(); tempProfiles.push({ id: newId, name: "新方案 " + tempProfiles.length, type: "custom", url: "", key: "", model: "gpt-3.5-turbo" }); tempActiveId = newId; renderProfileUI(); });
    $("#cfg-prof-del").on("click", function () { if (confirm("删除方案？")) { tempProfiles = tempProfiles.filter(p => p.id !== tempActiveId); tempActiveId = tempProfiles[0].id; renderProfileUI(); } });
    
    // --- 预览与外观 ---
    const renderPreview = () => {
        const $ball = $("#p-ball"); 
        const theme = $("#p-color-theme").val(); 
        const notify = $("#p-color-notify").val(); 
        const notifyBg = $("#p-color-notify-bg").val(); // [新增]
        const bg = $("#p-color-bg").val();
        const icon = $("#p-color-icon").val();
        const size = parseInt(tempApp.size) || 56;
        
        $ball.css({ width: size + "px", height: size + "px", fontSize: Math.floor(size * 0.46) + "px", borderColor: "transparent", boxShadow: `0 0 10px ${theme}` });
        
        $ball[0].style.setProperty('--p-theme', theme); 
        $ball[0].style.setProperty('--p-notify', notify);
        $ball[0].style.setProperty('--p-notify-bg', notifyBg); // [新增]
        $ball[0].style.setProperty('--p-bg', bg);
        $ball[0].style.setProperty('--p-icon', icon);

        if (tempApp.type === 'emoji') $ball.html(tempApp.content);
        else if (tempApp.type === 'image') {
            if (tempApp.content && tempApp.content.startsWith("data:")) { $ball.html(`<img src="${tempApp.content}">`); $("#btn-upload-card").css("background-image", `url('${tempApp.content}')`).find("i, span").hide(); }
            else { $ball.html('<i class="fa-solid fa-image"></i>'); $("#btn-upload-card").css("background-image", "").find("i, span").show(); }
        }
    };
    $("input[name='p-type']").on("change", function () { tempApp.type = $(this).val(); $("#box-emoji").toggle(tempApp.type === 'emoji'); $("#box-image").toggle(tempApp.type === 'image'); renderPreview(); });
    $("#p-size-input").on("input", function () { tempApp.size = $(this).val(); $("#p-size-val").text(tempApp.size + "px"); renderPreview(); });
    $("#p-emoji-input").on("input", function () { tempApp.content = $(this).val(); renderPreview(); });
    $("#p-color-theme, #p-color-notify, #p-color-notify-bg, #p-color-bg, #p-color-icon").on("input", renderPreview);
    $("#btn-upload-card").on("click", () => $("#p-file-input").click());
    $("#p-file-input").on("change", async function () { const file = this.files[0]; if (!file) return; try { tempApp.content = await fileToBase64(file); renderPreview(); } catch (e) { alert("Fail"); } });
    $("#btn-test-spin").on("click", () => { $("#p-ball").removeClass("p-notify").addClass("p-loading"); setTimeout(() => $("#p-ball").removeClass("p-loading"), 3000); });
    $("#btn-test-notify").on("click", () => { $("#p-ball").removeClass("p-loading").addClass("p-notify"); setTimeout(() => $("#p-ball").removeClass("p-notify"), 3000); });

    // --- 自动化设置逻辑 ---
    const savedCats = cfg.auto_categories || [];
    const renderAutoCatList = () => {
        const $list = $("#auto-cat-list"); $list.empty();
        const allCats = new Set(GlobalState.runtimeScripts.map(s => s.category || (s._type === 'preset' ? '官方预设' : '未分类')));
        const sortedCats = [...allCats].sort();
        if (sortedCats.length === 0) { $list.html('<div style="color:#666;">暂无剧本</div>'); return; }
        sortedCats.forEach(cat => {
            const isChecked = savedCats.includes(cat) ? 'checked' : '';
            $list.append(`<label style="display:flex; align-items:center; cursor:pointer; padding:2px 0;"><input type="checkbox" class="auto-cat-chk" value="${cat}" ${isChecked} style="margin-right:8px;"><span style="color:#ccc; font-size:0.9em;">${cat}</span></label>`);
        });
    };
    const updateAutoModeUI = () => {
        const mode = $("#cfg-auto-mode").val();
        if (mode === 'category') { $("#auto-cat-container").show(); renderAutoCatList(); }
        else { $("#auto-cat-container").hide(); }
    };
    $("#cfg-auto-mode").on("change", updateAutoModeUI);
    updateAutoModeUI();
    $("#cfg-auto").on("change", function () { $("#auto-settings-panel").toggle($(this).is(":checked")); });
    $("#cfg-chance").on("input", function () { $("#cfg-chance-val").text($(this).val() + "%"); });

    // --- 诊断与日志逻辑 ---
    const renderLogView = () => {
        const logs = TitaniaLogger.logs;
        if (!logs || logs.length === 0) {
            $("#t-log-viewer").html('<div style="text-align:center; margin-top:100px; color:#555;">暂无日志</div>');
            return;
        }
        let html = "";
        logs.forEach(l => {
            let colorClass = "t-log-entry-info";
            if (l.type === 'ERROR') colorClass = "t-log-entry-error";
            if (l.type === 'WARN') colorClass = "t-log-entry-warn";

            let detailStr = "";
            if (l.details) {
                if (l.details.diagnostics) {
                    const d = l.details.diagnostics;
                    const net = d.network || {};
                    const summary = {
                        phase: d.phase,
                        status: net.status,
                        latency: net.latency + 'ms',
                        input: d.input_stats
                    };
                    if (d.raw_response_snippet) {
                        summary.raw_snippet = d.raw_response_snippet.substring(0, 100) + (d.raw_response_snippet.length>100 ? '...' : '');
                    }
                    detailStr = `\n[Diagnostics]: ${JSON.stringify(summary, null, 2)}`;
                } else {
                    try {
                        detailStr = `\n${JSON.stringify(l.details, null, 2)}`;
                    } catch (e) { detailStr = "\n[Complex Data]"; }
                }
            }
            html += `<div class="${colorClass}">[${l.timestamp}] [${l.type}] ${l.message}${detailStr}</div>`;
        });
        $("#t-log-viewer").html(html);
    };

    renderLogView();
    $("#btn-refresh-log").on("click", renderLogView);
    $("#btn-export-log").on("click", () => TitaniaLogger.downloadReport());

    // --- API & 数据 ---
    $("#t-btn-fetch").on("click", async function () {
        const btn = $(this); const p = tempProfiles.find(x => x.id === tempActiveId);
        if (p.type === 'internal') { alert("ST托管模式下，请在 SillyTavern 主设置中切换模型"); return; }
        const urlInput = ($("#cfg-url").val() || "").trim().replace(/\/+$/, "").replace(/\/chat\/completions$/, "");
        const key = ($("#cfg-key").val() || "").trim();
        if (!urlInput) return alert("URL Empty");
        try {
            btn.prop("disabled", true).text("..."); const res = await fetch(`${urlInput}/models`, { method: "GET", headers: { "Authorization": `Bearer ${key}` } });
            if (!res.ok) throw new Error("Status: " + res.status);
            const data = await res.json(); const models = data.data || data.models || [];
            const $sel = $("#cfg-model"); $sel.empty(); models.forEach(m => $sel.append(`<option value="${m.id || m}">${m.id || m}</option>`));
            if (window.toastr) toastr.success(`获取成功: ${models.length} 个`);
        } catch (e) { alert("Fail: " + e.message); TitaniaLogger.error("获取模型列表失败", e); } finally { btn.prop("disabled", false).text("🔄 获取列表"); }
    });
    
    $("#btn-restore-presets").on("click", function () {
        if (confirm("恢复所有预设？")) { 
            const d = getExtData(); 
            d.disabled_presets = []; 
            saveExtData(); 
            loadScripts(); 
            $(this).prop("disabled", true).text("已恢复"); 
        }
    });

    $("#btn-open-mgr").on("click", () => { $("#t-settings-view").remove(); openScriptManager(); });
    $("#t-set-close").on("click", () => { $("#t-settings-view").remove(); $("#t-main-view").show(); });

    // --- 保存逻辑 ---
    $("#t-set-save").on("click", () => {
        saveCurrentProfileToMemory();
        const selectedCats = []; $(".auto-cat-chk:checked").each(function () { selectedCats.push($(this).val()); });

        const finalCfg = {
            active_profile_id: tempActiveId, profiles: tempProfiles,
            history_limit: parseInt($("#cfg-history").val()) || 10,
            stream: $("#cfg-stream").is(":checked"),
            auto_generate: $("#cfg-auto").is(":checked"),
            auto_chance: parseInt($("#cfg-chance").val()),
            auto_mode: $("#cfg-auto-mode").val(),
            auto_categories: selectedCats
        };
        const d = getExtData();
        d.config = finalCfg;
        d.appearance = { 
            type: tempApp.type, 
            content: tempApp.content, 
            color_theme: $("#p-color-theme").val(), 
            color_notify: $("#p-color-notify").val(), 
            color_notify_bg: $("#p-color-notify-bg").val(), // [新增]
            color_bg: $("#p-color-bg").val(),
            color_icon: $("#p-color-icon").val(),
            size: tempApp.size || 56 
        };
        d.director = { length: $("#set-dir-len").val().trim(), perspective: $("#set-dir-pers").val(), style_ref: $("#set-dir-style").val().trim() };

        saveExtData();
        $("#t-settings-view").remove(); $("#t-main-view").show(); 
        createFloatingButton(); // 刷新悬浮球外观
        if (window.toastr) toastr.success("设置已保存");
    });

    renderPreview(); renderProfileUI();
}