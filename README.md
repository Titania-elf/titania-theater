# 🎭 Echo Theater (Titania's Little Theater)

![Version](https://img.shields.io/badge/Version-v3.0-pink?style=flat-square) ![SillyTavern](https://img.shields.io/badge/SillyTavern-Extension-blue?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> **A standalone, immersive side-story generator for SillyTavern.**  
> **专为 SillyTavern 打造的独立沉浸式番外/小剧场生成器。**

**Echo Theater** adds a draggable floating button to your SillyTavern interface. With a single click, you can generate stylized side stories, secret diaries, letters, or system reports based on your current roleplay context.

**回声小剧场** 会在你的酒馆界面添加一个可拖拽的悬浮球。点击即可基于当前的角色扮演上下文，生成带有精美 CSS 视觉特效的番外剧情、私密日记、信件或系统报告。

---

## 🖼️ Preview (预览)

<!-- Please upload screenshots to your repo and update these links -->
<!-- 请上传截图到仓库，并确保文件名一致，或者修改这里的链接 -->

| Floating Button (悬浮球) | Immersive Output (沉浸式输出) |
| :---: | :---: |
| ![Button Preview](preview_button.png) | ![Output Preview](preview_output.png) |

---

## ✨ Features (功能亮点)

*   **🎭 Immersive Visuals:** Generates content with inline CSS styles (e.g., parchment texture for diaries, neon terminal for sci-fi reports).  
    **沉浸视觉：** 生成的内容自带样式（如羊皮纸风格的日记、黑客终端风格的报告）。
*   **🖱️ Draggable Floating Button:** A mobile-friendly floating button that can be dragged anywhere and auto-snaps to screen edges.  
    **可拖拽悬浮球：** 专为移动端优化的悬浮入口，支持随意拖拽并自动吸附屏幕边缘，不遮挡主界面。
*   **⚙️ Independent Configuration:** Uses its own API Key/URL settings (stored in LocalStorage). Does not conflict with ST's main API.  
    **独立配置：** 拥有独立的 API Key/URL 设置，不干扰酒馆主连接。
*   **📝 Script Management:** Built-in editor to Create, Read, Update, and Delete (CRUD) your own custom scenarios.  
    **剧本管理：** 内置编辑器，支持增删改查自定义剧本。
*   **🎲 Context Awareness:** Automatically reads Character Name and Persona to prevent OOC.  
    **上下文感知：** 自动读取当前角色名和人设，防止 OOC。
*   **🚀 Zero Dependency:** Pure JS implementation. Works perfectly on Android (Termux) and PC.  
    **零依赖架构：** 完美支持安卓 Termux 和所有桌面浏览器，解决路径引用报错问题。

---

## 📥 Installation (安装方法)

### Method 1: Extension Manager (Recommended)
### 方法 1：通过扩展管理器安装（推荐）

1.  Open SillyTavern and go to the **Extensions** (Puzzle icon) menu.
    打开 SillyTavern，点击顶部的 **扩展 (Extensions)** 图标。
2.  Click **"Install Extension"**.
    点击 **"Install Extension" (安装扩展)** 按钮。
3.  Paste the repository URL:
    粘贴以下仓库地址：
    ```text
    https://github.com/Titania-elf/titania-theater
    ```
4.  Click **"Install"**.
    点击 **"Install"**。
5.  **Reload** SillyTavern page.
    **刷新** 网页。

### Method 2: Manual Install
### 方法 2：手动克隆

Navigate to your SillyTavern directory and run:
进入你的 SillyTavern 目录并运行：

```bash
cd public/scripts/extensions
git clone https://github.com/Titania-elf/titania-theater
