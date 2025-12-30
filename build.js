/**
 * Titania Theater - esbuild 打包配置
 * 
 * 使用方法：
 * 1. 安装依赖：npm install
 * 2. 打包：npm run build
 * 3. 开发模式（监听文件变化）：npm run build:watch
 * 
 * 打包后会生成 dist/index.js，替换原有的 index.js 使用
 */

import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import path from 'path';

// 是否监听模式
const isWatch = process.argv.includes('--watch');

// 读取所有 CSS 文件并合并
function bundleCSS() {
    const cssDir = './css';
    const cssFiles = [
        'base.css',
        'floating.css',
        'main-window.css',
        'settings.css',
        'manager.css',
        'favs.css',
        'debug.css'
    ];

    let combinedCSS = '/* Titania Theater - Bundled CSS */\n\n';

    for (const file of cssFiles) {
        const filePath = path.join(cssDir, file);
        if (existsSync(filePath)) {
            const content = readFileSync(filePath, 'utf-8');
            combinedCSS += `/* === ${file} === */\n${content}\n\n`;
        }
    }

    return combinedCSS;
}

// esbuild 插件：注入 CSS
const injectCSSPlugin = {
    name: 'inject-css',
    setup(build) {
        // 拦截 dom.js 的导入，替换为内联 CSS 注入
        build.onLoad({ filter: /dom\.js$/ }, async (args) => {
            const css = bundleCSS();
            const escapedCSS = css.replace(/`/g, '\\`').replace(/\$/g, '\\$');

            return {
                contents: `
// 内联 CSS 注入（打包时自动合并）
export function loadCssFiles() {
    const styleId = 'titania-theater-bundled-css';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = \`${escapedCSS}\`;
    document.head.appendChild(style);
}
`,
                loader: 'js'
            };
        });
    }
};

// 构建配置
const buildOptions = {
    entryPoints: ['./src/entry.js'],  // 使用独立的入口文件
    bundle: true,
    format: 'esm',
    outfile: './index.js',  // 直接输出到根目录，替换原有的 index.js

    // 外部依赖（SillyTavern 核心模块，保持原样不打包）
    external: [
        '../../../extensions.js',
        '../../../../script.js'
    ],

    // 保留原始模块路径（相对于 dist 目录）
    alias: {
        // 这些是外部依赖，不需要别名
    },

    // 插件
    plugins: [injectCSSPlugin],

    // 不压缩，便于调试
    minify: false,

    // 生成 source map（开发时可用）
    sourcemap: isWatch ? 'inline' : false,

    // 目标环境
    target: ['es2020'],

    // banner 注释
    banner: {
        js: `/**
 * Titania Theater (回声小剧场)
 * Bundled with esbuild
 * 
 * 这是打包后的单文件版本。
 * 源代码请查看：https://github.com/Titania-elf/titania-theater
 */
`
    },

    // 日志级别
    logLevel: 'info'
};

async function build() {
    if (isWatch) {
        // 监听模式
        const ctx = await esbuild.context(buildOptions);
        await ctx.watch();
        console.log('👀 Watching for changes...');
    } else {
        // 单次构建
        const startTime = Date.now();

        try {
            await esbuild.build(buildOptions);

            const endTime = Date.now();
            console.log(`✅ Build completed in ${endTime - startTime}ms`);
            console.log('📦 Output: index.js (bundled)');
            console.log('');
            console.log('打包完成！index.js 已更新为单文件版本。');
            console.log('源代码保留在 src/ 目录中。');
        } catch (error) {
            console.error('❌ Build failed:', error);
            process.exit(1);
        }
    }
}

build();