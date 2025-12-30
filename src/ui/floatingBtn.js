// src/ui/floatingBtn.js

import { getExtData } from "../utils/storage.js";
import { GlobalState } from "../core/state.js";
import { extensionName } from "../config/defaults.js";
import { openMainWindow } from "./mainWindow.js";

/**
 * 启动悬浮球计时器
 */
export function startTimer() {
    // 检查是否启用计时器显示
    const settings = getExtData();
    const app = settings.appearance || {};
    if (app.show_timer === false) return; // 用户关闭了计时功能

    GlobalState.timerStartTime = Date.now();

    // 显示计时器元素并更新位置
    const $timer = $("#titania-timer");
    $timer.addClass("show").text("0.0");
    updateTimerPosition();

    // 清除可能存在的旧计时器
    if (GlobalState.timerInterval) {
        clearInterval(GlobalState.timerInterval);
    }

    // 启动新计时器，每 100ms 更新一次
    GlobalState.timerInterval = setInterval(() => {
        const elapsed = (Date.now() - GlobalState.timerStartTime) / 1000;
        $timer.text(elapsed.toFixed(1));
    }, 100);
}

/**
 * 停止悬浮球计时器
 */
export function stopTimer() {
    if (GlobalState.timerInterval) {
        clearInterval(GlobalState.timerInterval);
        GlobalState.timerInterval = null;
    }

    // 计算最终耗时
    const elapsed = Date.now() - GlobalState.timerStartTime;
    GlobalState.lastGenerationTime = elapsed;

    // 检查是否启用计时器显示
    const settings = getExtData();
    const app = settings.appearance || {};
    if (app.show_timer === false) return; // 用户关闭了计时功能

    // 显示最终结果，2秒后淡出
    const $timer = $("#titania-timer");
    $timer.text((elapsed / 1000).toFixed(1)).addClass("done");

    setTimeout(() => {
        $timer.removeClass("show done");
    }, 2000);
}

/**
 * 更新计时器位置（跟随悬浮球）
 */
function updateTimerPosition() {
    const $btn = $("#titania-float-btn");
    const $timer = $("#titania-timer");

    if (!$btn.length || !$timer.length) return;

    const btnRect = $btn[0].getBoundingClientRect();
    const timerWidth = $timer.outerWidth() || 30;

    // 计时器显示在悬浮球正上方
    const left = btnRect.left + (btnRect.width / 2) - (timerWidth / 2);
    const top = btnRect.top - 24; // 上方 24px

    $timer.css({
        left: Math.max(5, left) + "px",
        top: Math.max(5, top) + "px"
    });
}

/**
 * 创建/刷新悬浮球
 */
export function createFloatingButton() {
    $("#titania-float-btn").remove();
    $("#titania-timer").remove();
    // 移除旧版可能残留的 style 标签
    $("#titania-float-style").remove();

    // 检查开关
    // 注意：这里需要通过 extension_settings 全局变量检查，或者通过 getExtData()
    // 原代码逻辑是 extension_settings[extensionName].enabled
    const settings = getExtData();
    if (typeof extension_settings !== 'undefined' &&
        extension_settings[extensionName] &&
        !extension_settings[extensionName].enabled) {
        return;
    }

    const app = settings.appearance || { type: "emoji", content: "🎭", color_theme: "#bfa15f", color_notify: "#55efc4", size: 56 };
    const size = parseInt(app.size) || 56;

    // 1. 创建悬浮球元素
    const btnContent = (app.type === 'image' && app.content.startsWith("data:"))
        ? `<img src="${app.content}">`
        : `<span style="position:relative; z-index:2;">${app.content}</span>`;

    const btn = $(`<div id="titania-float-btn">${btnContent}</div>`);

    // 2. 创建计时器元素
    const timer = $(`<div id="titania-timer">0.0s</div>`);

    // 2. 应用动态样式 (CSS 变量)
    // 配合 css/floating.css 使用
    btn.css({
        "--t-size": `${size}px`,
        "--t-theme": app.color_theme,
        "--t-notify": app.color_notify,
        "--t-bg": app.color_bg || "#2b2b2b",
        "--t-icon": app.color_icon || "#ffffff",
        "--t-notify-bg": app.color_notify_bg || app.color_bg || "#2b2b2b" // [新增]
    });

    $("body").append(btn);
    $("body").append(timer);

    // 3. 拖拽逻辑 (修正边界计算)
    let isDragging = false, startX, startY, initialLeft, initialTop;

    btn.on("touchstart mousedown", function (e) {
        isDragging = false;
        const evt = e.type === 'touchstart' ? e.originalEvent.touches[0] : e;
        startX = evt.clientX; startY = evt.clientY;
        const rect = this.getBoundingClientRect(); initialLeft = rect.left; initialTop = rect.top;
        $(this).css({ "transition": "none", "transform": "none" });
    });

    $(document).on("touchmove mousemove", function (e) {
        if (startX === undefined) return;
        const evt = e.type === 'touchmove' ? e.originalEvent.touches[0] : e;
        if (Math.abs(evt.clientX - startX) > 5 || Math.abs(evt.clientY - startY) > 5) isDragging = true;
        let l = initialLeft + (evt.clientX - startX), t = initialTop + (evt.clientY - startY);
        // [修改] 使用动态 size 计算边界
        l = Math.max(0, Math.min(window.innerWidth - size, l));
        t = Math.max(0, Math.min(window.innerHeight - size, t));
        btn.css({ left: l + "px", top: t + "px", right: "auto" });

        // 拖动时同步更新计时器位置
        updateTimerPosition();
    });

    $(document).on("touchend mouseup", function () {
        if (startX === undefined) return; startX = undefined;
        if (isDragging) {
            const rect = btn[0].getBoundingClientRect();
            // [修改] 贴边计算也需要用 size
            const snapThreshold = window.innerWidth / 2;
            const targetLeft = (rect.left + (size / 2) < snapThreshold) ? 0 : window.innerWidth - size;

            btn.css({ "transition": "all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)", "left": targetLeft + "px" });

            // 贴边动画结束后更新计时器位置
            setTimeout(updateTimerPosition, 350);
        } else {
            if (GlobalState.isGenerating) {
                if (window.toastr) toastr.info("🎭 小剧场正在后台演绎中，请稍候...", "Titania Echo");
                return;
            }
            btn.removeClass("t-notify");
            openMainWindow();
        }
    });
}