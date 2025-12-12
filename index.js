import {
    saveSettingsDebounced,
    extension_settings,
    getContext,
    popup,
} from "../../../script.js";

// ==========================================
// 0. 全局常量与默认数据
// ==========================================
const PLUGIN_NAME = "Titania's Little Theater";
const SETTINGS_KEY = "titania_theater";

// 默认预设剧本
const DEFAULT_PRESETS = [
    {
        id: "diary",
        name: "私密日记",
        desc: "以日记形式记录角色此刻的心情。",
        prompt: "请撰写一篇 {{char}} 的私密日记。CSS样式要求：背景使用做旧羊皮纸色(#fdfbf7)，字体使用手写体风格，深褐色字体，内边距20px，带有边框阴影。内容要体现角色对 {{user}} 的真实想法。"
    },
    {
        id: "terminal",
        name: "系统终端",
        desc: "科幻风格的角色状态分析报告。",
        prompt: "请生成一份 {{char}} 的系统终端报告。CSS样式要求：黑色背景，绿色等宽字体(Courier New)，荧光效果，无需边框。内容包含：当前心情同步率、对 {{user}} 的好感度评估、以及一段加密的内心独白。"
    },
    {
        id: "letter",
        name: "皱巴巴的信",
        desc: "角色写给用户的一封可能永远不会寄出的信。",
        prompt: "请撰写一封 {{char}} 写给 {{user}} 的信。CSS样式要求：淡粉色或淡蓝色背景，优雅的衬线字体，信纸带有信纸线（使用CSS渐变实现），整体风格温柔伤感。"
    }
];

// 默认设置
const DEFAULT_SETTINGS = {
    apiUrl: "",
    apiKey: "",
    model: "gpt-3.5-turbo",
    userScripts: [] // 存储自定义或覆盖的剧本
};

// 当前状态
let currentSettings = {};
let currentScripts = []; // 运行时合并后的列表

// ==========================================
// 1. 初始化与设置加载
// ==========================================
async function init() {
    // 加载设置
    const stored = extension_settings[SETTINGS_KEY];
    currentSettings = { ...DEFAULT_SETTINGS, ...stored };
    
    // 合并剧本列表 (CRUD 逻辑 - 读取合并)
    rebuildScriptList();

    // 注册 QR 栏按钮
    const buttonHtml = `
        <div id="titania-theater-btn" class="list-group-item flex-container flex-gap-10" title="Titania's 小剧场">
            <div class="fa-solid fa-masks-theater fa-lg" style="margin: 0 auto;"></div>
        </div>
    `;
    $("#quick-reply-container").append(buttonHtml);
    $("#titania-theater-btn").on("click", openMainModal);
}

function rebuildScriptList() {
    const userMap = new Map(currentSettings.userScripts.map(s => [s.id, s]));
    const presets = DEFAULT_PRESETS.map(p => {
        // 如果用户修改过预设，使用用户版本并标记为 modified
        if (userMap.has(p.id)) {
            const modified = userMap.get(p.id);
            userMap.delete(p.id); // 从map中移除，剩下的是纯自定义的
            return { ...modified, _type: 'modified' };
        }
        return { ...p, _type: 'preset' };
    });

    const customs = Array.from(userMap.values()).map(c => ({ ...c, _type: 'custom' }));
    currentScripts = [...presets, ...customs];
}

function saveExtensionSettings() {
    extension_settings[SETTINGS_KEY] = currentSettings;
    saveSettingsDebounced();
}

// ==========================================
// 2. UI 渲染逻辑 (View)
// ==========================================

// 2.2 主窗口
function openMainModal() {
    // 3.2 上下文读取
    const context = getContext();
    const charName = context.characters[context.characterId]?.name || "未知角色";
    
    // 生成选项 HTML
    let optionsHtml = currentScripts.map(s => `<option value="${s.id}">${s.name}</option>`).join('');

    const modalContent = `
        <div class="titania-modal">
            <div class="titania-title">
                <span>Titania's 小剧场</span>
                <i class="fa-solid fa-gear titania-settings-icon" id="titania-go-settings" title="设置"></i>
            </div>
            
            <div class="titania-context-hint">
                ✨ 当前主演：${charName}
            </div>

            <div class="titania-controls">
                <select id="titania-script-select" class="text_pole titania-select">
                    ${optionsHtml}
                </select>
                <div id="titania-dice-btn" class="titania-dice" title="随机剧本">🎲</div>
            </div>

            <textarea id="titania-desc-display" class="text_pole" readonly rows="2" style="resize:none; font-size:0.9em;"></textarea>

            <div class="titania-render-area" id="titania-output">
                <div class="titania-render-tools">
                    <button class="titania-tool-btn" id="titania-copy-btn">复制</button>
                    <button class="titania-tool-btn" id="titania-clear-btn">清空</button>
                </div>
                <div id="titania-content-inner" style="padding-top: 25px;">
                    <!-- LLM 内容渲染在此 -->
                    <div style="text-align:center; color:#aaa; margin-top:20px;">请选择剧本并点击生成...</div>
                </div>
            </div>

            <button id="titania-gen-btn" class="menu_button">🎬 开始演绎</button>
        </div>
    `;

    // 弹出窗口
    const dialog = new popup({
        type: 'custom',
        content: modalContent,
        width: 800,
        large: true
    });
    dialog.show();

    // 绑定事件
    bindMainEvents();
    updateDesc();
}

function bindMainEvents() {
    const $select = $("#titania-script-select");
    
    // 切换下拉列表更新简介
    $select.on("change", updateDesc);

    // 随机按钮
    $("#titania-dice-btn").on("click", () => {
        const options = $select.find("option");
        const random = Math.floor(Math.random() * options.length);
        $select.prop('selectedIndex', random).trigger('change');
        $("#titania-dice-btn").css("transform", `rotate(${Math.random() * 360}deg)`);
    });

    // 跳转设置
    $("#titania-go-settings").on("click", () => {
        $(".titania-modal").closest(".popup").remove(); // 关闭当前
        openSettingsModal();
    });

    // 生成
    $("#titania-gen-btn").on("click", handleGenerate);

    // 工具按钮
    $("#titania-copy-btn").on("click", () => {
        const text = $("#titania-content-inner").text();
        navigator.clipboard.writeText(text);
        toastr.success("文本已复制");
    });
    $("#titania-clear-btn").on("click", () => {
        $("#titania-content-inner").html("");
    });
}

function updateDesc() {
    const id = $("#titania-script-select").val();
    const script = currentScripts.find(s => s.id === id);
    if (script) {
        $("#titania-desc-display").val(script.desc);
    }
}

// 2.3 设置页面
function openSettingsModal() {
    const listHtml = currentScripts.map(s => {
        let badgeClass = s._type === 'preset' ? 'badge-preset' : (s._type === 'modified' ? 'badge-modified' : 'badge-custom');
        let badgeText = s._type === 'preset' ? '预设' : (s._type === 'modified' ? '已覆盖' : '自定义');
        
        // 操作按钮逻辑
        let btns = `<div class="fa-solid fa-pen-to-square" style="cursor:pointer; margin-right:10px;" onclick="titaniaEditScript('${s.id}')" title="编辑"></div>`;
        if (s._type === 'modified') {
            btns += `<div class="fa-solid fa-rotate-left" style="cursor:pointer;" onclick="titaniaRestoreScript('${s.id}')" title="恢复默认"></div>`;
        } else if (s._type === 'custom') {
            btns += `<div class="fa-solid fa-trash" style="cursor:pointer; color:red;" onclick="titaniaDeleteScript('${s.id}')" title="删除"></div>`;
        }

        return `
            <div class="titania-script-item">
                <div>
                    <strong>${s.name}</strong> 
                    <span class="titania-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div style="display:flex;">${btns}</div>
            </div>
        `;
    }).join('');

    const content = `
        <div class="titania-settings-container">
            <h2 style="text-align:center;">Titania's 设置中心</h2>
            
            <!-- API 配置 -->
            <div class="titania-settings-group">
                <h3>🔌 API 连接</h3>
                <div class="titania-api-row">
                    <label style="width:80px;">API URL:</label>
                    <input type="text" id="titania-api-url" class="text_pole" style="flex:1;" placeholder="http://.../v1" value="${currentSettings.apiUrl}">
                </div>
                <div class="titania-api-row">
                    <label style="width:80px;">API Key:</label>
                    <input type="password" id="titania-api-key" class="text_pole" style="flex:1;" value="${currentSettings.apiKey}">
                </div>
                <div class="titania-api-row">
                    <label style="width:80px;">模型:</label>
                    <select id="titania-model-select" class="text_pole" style="flex:1;">
                        <option value="${currentSettings.model}">${currentSettings.model}</option>
                    </select>
                    <button id="titania-fetch-models" class="menu_button" style="width:auto;">🔄 刷新列表</button>
                </div>
                <button id="titania-save-api" class="menu_button" style="width:100%;">保存配置</button>
            </div>

            <!-- 剧本列表 -->
            <div class="titania-settings-group" style="flex-grow:1; display:flex; flex-direction:column;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <h3>📜 剧本管理</h3>
                    <button id="titania-new-script" class="menu_button" style="width:auto; padding: 5px 10px;">+ 新建</button>
                </div>
                <div style="flex-grow:1; overflow-y:auto; border:1px solid var(--smart-border-color); padding:5px;">
                    ${listHtml}
                </div>
            </div>
        </div>
    `;

    const dialog = new popup({
        type: 'custom',
        content: content,
        width: 600,
        height: 700
    });
    dialog.show();

    // 绑定设置页事件
    $("#titania-save-api").on("click", () => {
        currentSettings.apiUrl = $("#titania-api-url").val().trim();
        currentSettings.apiKey = $("#titania-api-key").val().trim();
        currentSettings.model = $("#titania-model-select").val();
        saveExtensionSettings();
        toastr.success("配置已保存");
    });

    $("#titania-fetch-models").on("click", fetchModels);
    
    $("#titania-new-script").on("click", () => {
        dialog.hide(); // 暂时隐藏列表窗口
        openEditorModal(null); // null 表示新建
    });

    // 将全局函数暴露给 window 以便 HTML onclick 调用
    window.titaniaEditScript = (id) => {
        dialog.hide();
        openEditorModal(id);
    };
    window.titaniaRestoreScript = (id) => {
        currentSettings.userScripts = currentSettings.userScripts.filter(s => s.id !== id);
        saveExtensionSettings();
        rebuildScriptList();
        dialog.hide();
        openSettingsModal(); // 刷新
        toastr.info("已恢复默认设置");
    };
    window.titaniaDeleteScript = (id) => {
        if(!confirm("确定删除此剧本吗？")) return;
        currentSettings.userScripts = currentSettings.userScripts.filter(s => s.id !== id);
        saveExtensionSettings();
        rebuildScriptList();
        dialog.hide();
        openSettingsModal();
    };
}

// 编辑器视图
function openEditorModal(scriptId) {
    const isEdit = !!scriptId;
    let data = { id: "", name: "", desc: "", prompt: "" };

    if (isEdit) {
        data = currentScripts.find(s => s.id === scriptId) || data;
    }

    const content = `
        <div style="display:flex; flex-direction:column; gap:10px; height:600px;">
            <h3>${isEdit ? '编辑剧本' : '新建剧本'}</h3>
            <label>ID (唯一标识):</label>
            <input type="text" id="t-edit-id" class="text_pole" value="${data.id}" ${isEdit ? 'disabled' : ''}>
            
            <label>标题:</label>
            <input type="text" id="t-edit-name" class="text_pole" value="${data.name}">
            
            <label>简介:</label>
            <input type="text" id="t-edit-desc" class="text_pole" value="${data.desc}">
            
            <label>Prompt (支持 {{char}}, {{user}}):</label>
            <textarea id="t-edit-prompt" class="text_pole" style="flex-grow:1; resize:none;">${data.prompt}</textarea>
            
            <div style="display:flex; gap:10px; margin-top:10px;">
                <button id="t-edit-save" class="menu_button">保存</button>
                <button id="t-edit-cancel" class="menu_button">取消</button>
            </div>
        </div>
    `;

    const dialog = new popup({ type: 'custom', content: content, width: 600 });
    dialog.show();

    $("#t-edit-cancel").on("click", () => {
        dialog.hide();
        openSettingsModal(); // 返回列表
    });

    $("#t-edit-save").on("click", () => {
        const newId = $("#t-edit-id").val().trim();
        if (!newId) return toastr.warning("ID 不能为空");

        const newScript = {
            id: newId,
            name: $("#t-edit-name").val().trim(),
            desc: $("#t-edit-desc").val().trim(),
            prompt: $("#t-edit-prompt").val()
        };

        // 保存逻辑：更新 userScripts
        // 先删除旧的同名条目（如果有）
        currentSettings.userScripts = currentSettings.userScripts.filter(s => s.id !== newId);
        currentSettings.userScripts.push(newScript);

        saveExtensionSettings();
        rebuildScriptList();
        
        dialog.hide();
        openSettingsModal();
        toastr.success("保存成功");
    });
}

// ==========================================
// 3. 业务功能逻辑
// ==========================================

// 3.1 自动模型获取
async function fetchModels() {
    let url = $("#titania-api-url").val().trim();
    let key = $("#titania-api-key").val().trim();

    if (!url) return toastr.warning("请先填写 API URL");

    // URL 处理：移除 /chat/completions 等后缀，确保是 base
    url = url.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "");
    
    // 构造 /models 请求
    const targetUrl = url.endsWith("/v1") ? `${url}/models` : `${url}/v1/models`;

    const btn = $("#titania-fetch-models");
    btn.prop("disabled", true).text("获取中...");

    try {
        const response = await fetch(targetUrl, {
            method: "GET",
            headers: { "Authorization": `Bearer ${key}` }
        });

        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        let models = [];
        
        // 3.1 数据解析
        if (Array.isArray(data)) {
            models = data;
        } else if (data.data && Array.isArray(data.data)) {
            models = data.data;
        }

        const $select = $("#titania-model-select");
        $select.empty();
        
        models.forEach(m => {
            const mId = m.id || m;
            $select.append(`<option value="${mId}">${mId}</option>`);
        });

        // 回填逻辑
        if (currentSettings.model && models.some(m => (m.id || m) === currentSettings.model)) {
            $select.val(currentSettings.model);
        } else if (models.length > 0) {
            $select.prop("selectedIndex", 0);
        }

        toastr.success(`成功获取 ${models.length} 个模型`);

    } catch (e) {
        console.error(e);
        toastr.error("获取模型列表失败: " + e.message);
    } finally {
        btn.prop("disabled", false).text("🔄 刷新列表");
    }
}

// 3.3 生成逻辑
async function handleGenerate() {
    // 3.2 上下文读取
    const context = getContext();
    if (!context.characterId) return toastr.error("未选择角色！");
    
    const charName = context.characters[context.characterId].name;
    const userName = context.name1 || "User";
    const charPersona = context.characters[context.characterId].description || "";
    
    const scriptId = $("#titania-script-select").val();
    const script = currentScripts.find(s => s.id === scriptId);

    if (!script) return toastr.error("剧本无效");

    const $btn = $("#titania-gen-btn");
    const $output = $("#titania-content-inner");
    
    $btn.prop("disabled", true).html('<i class="fa-solid fa-spinner fa-spin"></i> 正在演绎中...');
    $output.html('<div style="text-align:center; padding:20px;">正在撰写剧本...</div>');

    // 3.3 Prompt 组装
    // Layer 1: Visual Protocol
    const sysPrompt = `
You are a creative engine for a roleplay game.
IMPORTANT: You must output ONLY Raw HTML string.
IMPORTANT: Do NOT use markdown blocks (no \`\`\`html).
IMPORTANT: Wrap your entire content in a main <div> container.
IMPORTANT: Use Inline CSS for ALL styling (background-color, font-family, padding, border-radius, box-shadow). Make it visually match the requested scenario atmosphere.
    `;

    // Layer 3: Scenario Instruction (Replace placeholders)
    let scenarioPrompt = script.prompt
        .replace(/{{char}}/g, charName)
        .replace(/{{user}}/g, userName);

    // Layer 2: Character Definition (Combined into User Prompt)
    const userPrompt = `
[Character: ${charName}]
[Personality: ${charPersona}]
[User: ${userName}]

[Request]
${scenarioPrompt}
    `;

    // 3.4 API Request
    try {
        let url = currentSettings.apiUrl.replace(/\/+$/, "");
        if (!url.endsWith("/chat/completions")) {
            url = url.endsWith("/v1") ? `${url}/chat/completions` : `${url}/v1/chat/completions`;
        }

        const body = {
            model: currentSettings.model,
            messages: [
                { role: "system", content: sysPrompt },
                { role: "user", content: userPrompt }
            ],
            temperature: 0.7
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${currentSettings.apiKey}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error("API Request Failed");

        const data = await response.json();
        let content = data.choices[0].message.content;

        // 清洗 Markdown 标记 (以防万一模型不听话)
        content = content.replace(/^```html/i, "").replace(/```$/i, "").trim();

        $output.html(content);

    } catch (e) {
        console.error(e);
        toastr.error("生成失败: " + e.message);
        $output.text("生成出错，请检查 API 设置。");
    } finally {
        $btn.prop("disabled", false).text("🎬 开始演绎");
    }
}

// 启动插件
$(document).ready(init);
