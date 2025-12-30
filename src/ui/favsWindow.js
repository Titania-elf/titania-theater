// src/ui/favsWindow.js

import { getExtData, saveExtData } from "../utils/storage.js";
import { GlobalState } from "../core/state.js";
import { getContextData } from "../core/context.js";
import { parseMeta, getSnippet } from "../utils/helpers.js";

/**
 * 保存收藏功能 (DOM 屏幕抓取法)
 */
export async function saveFavorite() {
    const content = $("#t-output-content").html();

    // 仅校验是否为空或长度过短
    if (!content || content.trim().length < 10) {
        if (window.toastr) toastr.warning("内容为空或过短，无法收藏"); else alert("内容无效");
        return;
    }

    const script = GlobalState.runtimeScripts.find(s => s.id === GlobalState.lastUsedScriptId);
    const scriptName = script ? script.name : "未知剧本";
    const ctx = await getContextData();

    // === 恢复原样：DOM 屏幕抓取法 ===
    // 这种方式将图片路径直接保存在这一条收藏记录里
    let avatarSrc = null;

    // 尝试1：抓取聊天流中，最后一条属于角色的消息头像
    const lastCharImg = $(".mes[is_user='false'] .message_avatar_img").last();
    if (lastCharImg.length > 0) {
        avatarSrc = lastCharImg.attr("src");
    }

    // 尝试2：如果聊天里没图，尝试抓取主界面的大图
    if (!avatarSrc) {
        const mainImg = $("#character_image_div img");
        if (mainImg.length > 0 && mainImg.is(":visible")) {
            avatarSrc = mainImg.attr("src");
        }
    }

    // 尝试3：尝试抓取右侧设置栏的小头像
    if (!avatarSrc) {
        const navImg = $("#right-nav-panel .character-avatar");
        if (navImg.length > 0) {
            avatarSrc = navImg.attr("src");
        }
    }

    console.log("Titania: Captured Avatar Path ->", avatarSrc);

    const entry = {
        id: Date.now(),
        title: `${scriptName} - ${ctx.charName}`,
        date: new Date().toLocaleString(),
        html: content,
        avatar: avatarSrc // 恢复保存具体路径
    };

    const data = getExtData();
    if (!data.favs) data.favs = [];
    data.favs.unshift(entry);
    saveExtData();

    const btn = $("#t-btn-like");
    // [修改] 保持已收藏状态，只让红心变色，不显示文字，禁用按钮防止重复保存
    btn.html('<i class="fa-solid fa-heart" style="color:#ff6b6b;"></i>').prop("disabled", true);

    if (window.toastr) toastr.success("收藏成功！");
}

/**
 * 收藏夹窗口
 */
export function openFavsWindow() {
    $("#t-main-view").hide();
    const data = getExtData();
    const favs = data.favs || [];

    let currentFilteredList = [];
    let currentIndex = -1;
    let currentFavId = null;

    const charIndex = new Set();
    favs.forEach(f => {
        const meta = parseMeta(f.title || "");
        f._meta = meta;
        charIndex.add(meta.char);
    });
    const charList = ["全部角色", ...[...charIndex].sort()];

    // HTML 结构 (样式见 css/favs.css)
    const html = `
    <div class="t-box t-fav-container" id="t-favs-view">
        <div class="t-header" style="flex-shrink:0;">
            <span class="t-title-main">📖 收藏画廊</span>
            <span class="t-close" id="t-fav-close">&times;</span>
        </div>
        
        <div class="t-fav-toolbar">
            <div style="display:flex; align-items:center; gap:10px; flex-grow:1;">
                <i class="fa-solid fa-filter" style="color:#666;"></i>
                <select id="t-fav-filter-char" class="t-fav-filter-select">
                    ${charList.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
                <input type="text" id="t-fav-search" class="t-fav-search" placeholder="搜索关键词...">
                <button id="t-btn-img-mgr" class="t-tool-btn" title="管理角色背景图"><i class="fa-regular fa-image"></i> 图鉴</button>
            </div>
        </div>
        
        <div class="t-fav-grid-area">
            <div class="t-fav-grid" id="t-fav-grid"></div>
        </div>

        <div class="t-fav-reader" id="t-fav-reader">
            <div class="t-read-header">
                <div style="display:flex; align-items:center; gap:15px; overflow:hidden; flex-grow:1;">
                    <i class="fa-solid fa-chevron-left" id="t-read-back" style="cursor:pointer; font-size:1.2em; padding:5px; color:#aaa;"></i>
                    <div style="display:flex; flex-direction:column; justify-content:center; overflow:hidden;">
                        <div id="t-read-meta" class="t-read-meta-text" style="font-weight:bold; color:#ccc; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"></div>
                        <div id="t-read-index" style="font-size:0.75em; color:#666;">0 / 0</div>
                    </div>
                </div>
                <div style="display:flex; gap:10px; flex-shrink:0;">
                    <button class="t-tool-btn" id="t-read-img" title="导出图片"><i class="fa-solid fa-camera"></i></button>
                    <button class="t-tool-btn" id="t-read-code" title="复制HTML"><i class="fa-solid fa-code"></i></button>
                    <button class="t-tool-btn" id="t-read-del-one" title="删除" style="color:#ff6b6b; border-color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <div class="t-read-body">
                <div id="t-read-capture-zone">
                    <div id="t-read-content"></div>
                </div>
            </div>
        </div>
    </div>`;

    $("#t-overlay").append(html);

    // --- 核心逻辑 ---

    const renderGrid = () => {
        const grid = $("#t-fav-grid");
        grid.empty();
        const currentMap = getExtData().character_map || {};
        const targetChar = $("#t-fav-filter-char").val();
        const search = $("#t-fav-search").val().toLowerCase();

        currentFilteredList = favs.filter(f => {
            if (targetChar !== "全部角色" && f._meta.char !== targetChar) return false;
            if (search && !f.title.toLowerCase().includes(search) && !f.html.toLowerCase().includes(search)) return false;
            return true;
        });

        if (currentFilteredList.length === 0) {
            grid.append('<div class="t-fav-empty">没有找到相关收藏</div>');
            return;
        }

        currentFilteredList.forEach((item, idx) => {
            const snippet = getSnippet(item.html);
            const charName = item._meta.char;
            let bgUrl = currentMap[charName];
            if (!bgUrl) bgUrl = item.avatar;
            const bgClass = bgUrl ? '' : 'no-img';
            const bgStyle = bgUrl ? `background-image: url('${bgUrl}')` : '';

            const card = $(`
                <div class="t-fav-card">
                    <div class="t-fav-card-bg ${bgClass}" style="${bgStyle}"></div>
                    <div class="t-fav-card-overlay"></div>
                    <div class="t-fav-card-content">
                        <div class="t-fav-card-header">
                            <div class="t-fav-card-script">${item._meta.script}</div>
                            <div class="t-fav-card-char"><i class="fa-solid fa-user-tag" style="font-size:0.8em"></i> ${charName}</div>
                        </div>
                        <div class="t-fav-card-snippet">${snippet}</div>
                        <div class="t-fav-card-footer"><span>${item.date.split(' ')[0]}</span></div>
                    </div>
                </div>
            `);
            card.on("click", () => loadReaderItem(idx));
            grid.append(card);
        });
    };

    const loadReaderItem = (index) => {
        if (index < 0 || index >= currentFilteredList.length) return;
        currentIndex = index;
        const item = currentFilteredList[index];
        currentFavId = item.id;
        $("#t-read-meta").text(item.title);
        $("#t-read-index").text(`${index + 1} / ${currentFilteredList.length}`);

        // [改进] 强制触发 CSS 动画重播
        const $content = $("#t-read-content");
        $content.empty(); // 先清空

        // 使用 setTimeout 确保 DOM 更新后再插入新内容，触发动画重新开始
        setTimeout(() => {
            $content.html(item.html);

            // 额外的动画重播技巧：强制重绘
            // 查找所有带有 animation 的元素，通过克隆替换来重启动画
            $content.find('*').each(function () {
                const el = this;
                const style = window.getComputedStyle(el);
                if (style.animationName && style.animationName !== 'none') {
                    // 克隆并替换以重启动画
                    const clone = el.cloneNode(true);
                    el.parentNode.replaceChild(clone, el);
                }
            });
        }, 10);

        $("#t-fav-reader").addClass("show");
    };

    // --- 事件绑定 ---
    $("#t-fav-filter-char, #t-fav-search").on("input change", renderGrid);
    $("#t-btn-img-mgr").on("click", () => { openCharImageManager(() => { renderGrid(); }); });
    $("#t-read-back").on("click", () => $("#t-fav-reader").removeClass("show"));

    let touchStartX = 0; let touchStartY = 0;
    const readerBody = $(".t-read-body");
    readerBody.on("touchstart", (e) => { touchStartX = e.originalEvent.touches[0].clientX; touchStartY = e.originalEvent.touches[0].clientY; });
    readerBody.on("touchend", (e) => {
        const touchEndX = e.originalEvent.changedTouches[0].clientX; const touchEndY = e.originalEvent.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX; const diffY = touchEndY - touchStartY;
        if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 2) {
            if (diffX > 0) { if (currentIndex > 0) loadReaderItem(currentIndex - 1); }
            else { if (currentIndex < currentFilteredList.length - 1) loadReaderItem(currentIndex + 1); }
        }
    });

    $("#t-read-code").on("click", () => {
        navigator.clipboard.writeText($("#t-read-content").html());
        if (window.toastr) toastr.success("源码已复制");
    });

    // [核心修复] 使用 html-to-image 库 + 原地展开截图法
    $("#t-read-img").on("click", async function () {
        const btn = $(this);
        const originalHtml = btn.html();

        try {
            btn.prop("disabled", true).html('<i class="fa-solid fa-spinner fa-spin"></i>');

            // 1. 加载 html-to-image (更现代、更稳定的库)
            if (typeof htmlToImage === 'undefined') {
                if (window.toastr) toastr.info("正在加载组件...", "Titania");
                // 注意：这里使用 unpkg 或 cdnjs 加载
                await $.getScript("https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js");
            }

            const element = document.getElementById("t-read-capture-zone");

            // 2. 准备：原地展开 (Expand)
            const originalHeight = element.style.height;
            // 我们直接对 zone 进行操作，确保它显示完全
            const parent = element.parentElement; // .t-read-body
            const originalParentOverflow = parent.style.overflow;

            parent.style.overflow = "visible"; // 允许溢出显示
            element.style.height = "auto";     // 自动高度

            // 3. 生成图片
            const dataUrl = await htmlToImage.toPng(element, {
                backgroundColor: '#0b0b0b', // 强制背景色
                pixelRatio: 2,              // 2倍高清
                skipAutoScale: true
            });

            // 4. 恢复样式 (Restore)
            parent.style.overflow = originalParentOverflow;
            element.style.height = originalHeight;

            // 5. 下载
            const link = document.createElement('a');
            link.download = `Titania_${new Date().getTime()}.png`;
            link.href = dataUrl;
            link.click();

            if (window.toastr) toastr.success("图片导出成功");

        } catch (e) {
            console.error(e);
            alert("导出失败: " + e.message + "\n可能是浏览器不支持 SVG 转换或内存不足。");
            // 发生错误也要尝试恢复样式
            const element = document.getElementById("t-read-capture-zone");
            if (element) {
                element.parentElement.style.overflow = "";
                element.style.height = "";
            }
        } finally {
            btn.prop("disabled", false).html(originalHtml);
        }
    });

    $("#t-read-del-one").on("click", () => {
        if (confirm("确定删除此条收藏？")) {
            const d = getExtData();
            d.favs = d.favs.filter(x => x.id !== currentFavId);
            saveExtData();
            favs.splice(0, favs.length, ...d.favs);
            renderGrid();
            if (currentFilteredList.length === 0) {
                $("#t-fav-reader").removeClass("show");
            } else {
                let newIdx = currentIndex;
                if (newIdx >= currentFilteredList.length) newIdx = currentFilteredList.length - 1;
                loadReaderItem(newIdx);
            }
        }
    });

    const closeWindow = () => {
        $("#t-favs-view").remove();
        $("#t-main-view").css("display", "flex");
    };

    $("#t-fav-close").on("click", closeWindow);

    renderGrid();
}

/**
 * 角色图鉴管理器
 */
export function openCharImageManager(onCloseCallback) {
    const data = getExtData();
    if (!data.character_map) data.character_map = {};

    // 1. 提取所有收藏中出现过的角色名
    const favs = data.favs || [];
    const charNames = new Set();
    favs.forEach(f => {
        const parts = (f.title || "").split(' - ');
        if (parts.length >= 2) charNames.add(parts[parts.length - 1].trim());
    });
    const sortedChars = [...charNames].sort();

    // 2. 辅助函数：尝试从 SillyTavern 系统中查找角色头像
    const tryFindSystemAvatar = (charName) => {
        let foundAvatar = null;
        try {
            if (SillyTavern && SillyTavern.getContext) {
                const ctx = SillyTavern.getContext();
                if (ctx.characters) {
                    Object.values(ctx.characters).forEach(c => {
                        if (c.name === charName && c.avatar) foundAvatar = c.avatar;
                    });
                }
            }
            if (!foundAvatar && typeof window.characters !== 'undefined') {
                const chars = Array.isArray(window.characters) ? window.characters : Object.values(window.characters);
                const match = chars.find(c => c.name === charName || (c.data && c.data.name === charName));
                if (match) foundAvatar = match.avatar;
            }
        } catch (e) { console.error("Titania: Auto-find avatar failed", e); }

        if (foundAvatar && !foundAvatar.startsWith("http") && !foundAvatar.startsWith("data:")) {
            if (!foundAvatar.includes("/")) foundAvatar = `characters/${foundAvatar}`;
        }
        return foundAvatar;
    };

    // HTML 结构 (样式见 css/favs.css)
    const html = `
    <div class="t-img-mgr-overlay" id="t-img-mgr">
        <div class="t-img-mgr-box">
            <div class="t-header">
                <span class="t-title-main">🖼️ 角色图鉴管理</span>
                <span class="t-close" id="t-img-close">&times;</span>
            </div>
            <div style="padding:10px 15px; background:#2a2a2a; color:#888; font-size:0.85em; border-bottom:1px solid #333;">
                <i class="fa-solid fa-circle-info"></i> 设置图片后，该角色所有收藏卡片将自动使用此背景。优先读取“图鉴设置”，其次读取“单卡数据”。
            </div>
            <div class="t-img-list" id="t-img-list-container"></div>
            <div style="padding:15px; border-top:1px solid #333; text-align:right;">
                <button class="t-btn primary" id="t-img-save">💾 保存并应用</button>
            </div>
        </div>
        <!-- 隐藏的文件上传 input -->
        <input type="file" id="t-img-upload-input" accept="image/*" style="display:none;">
    </div>`;

    $("#t-favs-view").append(html);

    // 临时存储编辑状态
    const tempMap = JSON.parse(JSON.stringify(data.character_map));
    let currentEditChar = null;

    const renderList = () => {
        const $list = $("#t-img-list-container");
        $list.empty();

        if (sortedChars.length === 0) {
            $list.append('<div style="text-align:center; padding:30px; color:#555;">暂无角色数据，请先去收藏一些剧本吧~</div>');
            return;
        }

        sortedChars.forEach(char => {
            const currentImg = tempMap[char] || "";
            const hasImg = !!currentImg;
            const bgStyle = hasImg ? `background-image: url('${currentImg}')` : '';

            const $row = $(`
                <div class="t-img-item">
                    <div class="t-img-preview ${hasImg ? '' : 'no-img'}" style="${bgStyle}"></div>
                    <div class="t-img-info">
                        <div class="t-img-name">${char}</div>
                        <div class="t-img-path">${hasImg ? (currentImg.startsWith('data:') ? 'Base64 Image' : currentImg) : '未设置背景'}</div>
                    </div>
                    <div class="t-img-actions">
                        <button class="t-act-btn auto btn-auto-find" title="尝试从系统角色列表抓取头像" data-char="${char}"><i class="fa-solid fa-wand-magic-sparkles"></i> 自动</button>
                        <button class="t-act-btn btn-upload" title="上传本地图片" data-char="${char}"><i class="fa-solid fa-upload"></i></button>
                        <button class="t-act-btn btn-url" title="输入图片 URL" data-char="${char}"><i class="fa-solid fa-link"></i></button>
                        ${hasImg ? `<button class="t-act-btn btn-clear" title="清除" data-char="${char}" style="color:#ff6b6b;"><i class="fa-solid fa-trash"></i></button>` : ''}
                    </div>
                </div>
            `);
            $list.append($row);
        });

        $(".btn-auto-find").on("click", function () {
            const char = $(this).data("char");
            const avatar = tryFindSystemAvatar(char);
            if (avatar) {
                tempMap[char] = avatar;
                if (window.toastr) toastr.success(`已抓取到 ${char} 的头像`, "成功");
                renderList();
            } else {
                alert(`未在当前加载的系统中找到角色 [${char}] 的信息。\n请确保该角色已在 SillyTavern 角色列表中。`);
            }
        });

        $(".btn-upload").on("click", function () {
            currentEditChar = $(this).data("char");
            $("#t-img-upload-input").click();
        });

        $(".btn-url").on("click", function () {
            const char = $(this).data("char");
            const oldVal = tempMap[char] || "";
            const newVal = prompt(`请输入 [${char}] 的图片链接 (URL):`, oldVal);
            if (newVal !== null) {
                tempMap[char] = newVal.trim();
                renderList();
            }
        });

        $(".btn-clear").on("click", function () {
            const char = $(this).data("char");
            delete tempMap[char];
            renderList();
        });
    };

    $("#t-img-upload-input").on("change", function () {
        const file = this.files[0];
        if (!file || !currentEditChar) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            tempMap[currentEditChar] = e.target.result; // Base64
            renderList();
            $("#t-img-upload-input").val("");
        };
        reader.readAsDataURL(file);
    });

    $("#t-img-save").on("click", () => {
        data.character_map = tempMap;
        saveExtData();
        $("#t-img-mgr").remove();
        if (onCloseCallback) onCloseCallback();
        if (window.toastr) toastr.success("角色图鉴已更新");
    });

    $("#t-img-close").on("click", () => $("#t-img-mgr").remove());

    renderList();
}