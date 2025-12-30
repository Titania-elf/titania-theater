// src/utils/dom.js
import { extensionFolderPath } from "../config/defaults.js";

// 动态加载 CSS 列表
export function loadCssFiles() {
    const cssList = [
        "base.css",
        "floating.css",
        "main-window.css",
        "settings.css",
        "manager.css",
        "favs.css",
        "debug.css"
    ];

    cssList.forEach(file => {
        const id = `titania-css-${file.replace('.css', '')}`;
        if (document.getElementById(id)) return;

        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = `${extensionFolderPath}/css/${file}`;
        document.head.appendChild(link);
    });
}