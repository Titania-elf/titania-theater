// src/core/logger.js

import { getExtData } from "../utils/storage.js";
import { extensionName, CURRENT_VERSION } from "../config/defaults.js";
import { GlobalState } from "./state.js";

export const TitaniaLogger = {
    logs: [],
    maxLogs: 50, // 内存中最多保留50条，刷新即清空

    add: function (type, message, details = null) {
        const entry = {
            timestamp: new Date().toLocaleString(),
            type: type, // 'INFO', 'WARN', 'ERROR'
            message: message,
            details: details,
            // 记录基础环境上下文，从 GlobalState 获取
            context: {
                scriptId: GlobalState.lastUsedScriptId || "none",
                isGenerating: GlobalState.isGenerating
            }
        };

        this.logs.unshift(entry);
        if (this.logs.length > this.maxLogs) this.logs.pop();

        // ERROR 级别同步输出到控制台，方便 F12 查看
        if (type === 'ERROR') console.error('[Titania Debug]', message, details);
    },

    info: function (msg, details) { this.add('INFO', msg, details); },
    warn: function (msg, details) { this.add('WARN', msg, details); },

    // 专门用于记录报错，支持传入上下文对象
    error: function (msg, errObj, contextData = {}) {
        let stack = "Unknown";
        let errMsg = "Unknown Error";

        if (errObj) {
            if (typeof errObj === 'string') {
                errMsg = errObj;
            } else {
                errMsg = errObj.message || "Error Object";
                stack = errObj.stack || JSON.stringify(errObj);
            }
        }

        // 自动提取 fetch 相关的关键信息放到 message 里
        if (contextData && contextData.network && contextData.network.status) {
            msg += ` [HTTP ${contextData.network.status}]`;
        }

        this.add('ERROR', msg, {
            error_message: errMsg,
            stack_trace: stack,
            diagnostics: contextData
        });
    },

    // 导出并下载日志
    downloadReport: function () {
        const data = getExtData();

        // 1. 创建配置快照 (深拷贝)
        const configSnapshot = JSON.parse(JSON.stringify(data.config || {}));

        // 2. 隐私脱敏处理 (移除 API Key)
        if (configSnapshot.profiles && Array.isArray(configSnapshot.profiles)) {
            configSnapshot.profiles.forEach(p => {
                if (p.key && p.key.length > 5) {
                    p.key = p.key.substring(0, 3) + "***(HIDDEN)";
                } else if (p.key) {
                    p.key = "***(HIDDEN)";
                }
            });
        }
        if (configSnapshot.key) configSnapshot.key = "***(HIDDEN)";

        // 3. 收集宿主环境信息
        let stVersion = "Unknown";
        try {
            if (typeof SillyTavern !== 'undefined' && SillyTavern.version) stVersion = SillyTavern.version;
            else if (typeof extension_settings !== 'undefined' && window.SillyTavernVersion) stVersion = window.SillyTavernVersion;
        } catch (e) { }

        // 4. 组装报告
        const reportObj = {
            meta: {
                extension: extensionName,
                extension_version: `v${CURRENT_VERSION}`,
                st_version: stVersion,
                userAgent: navigator.userAgent,
                screen_res: `${window.screen.width}x${window.screen.height}`,
                viewport: `${window.innerWidth}x${window.innerHeight}`,
                time: new Date().toLocaleString(),
                timestamp: Date.now()
            },
            config: configSnapshot,
            logs: this.logs
        };

        // 5. 触发下载
        const content = JSON.stringify(reportObj, null, 2);
        const blob = new Blob([content], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Titania_Debug_${new Date().toISOString().slice(0, 10).replace(/-/g, "")}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};