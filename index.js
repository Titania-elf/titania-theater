// 新建的 index.js - 仅用于服务端代理转发
// 这个文件运行在 Node.js 环境，千万不要放任何 UI 代码

const fetch = global.fetch || require('node-fetch');

function init(params) {
    // 注册转发接口
    params.app.post('/api/titania/proxy', async (req, res) => {
        try {
            const { target_url, api_key, model_payload } = req.body;
            if (!target_url) return res.status(400).send("Missing target_url");

            // 服务端发起请求 (绕过 CORS)
            const response = await fetch(target_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${api_key}`
                },
                body: JSON.stringify(model_payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                return res.status(response.status).send(errorText);
            }

            // 建立流式管道
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            if (response.body && response.body.pipe) {
                response.body.pipe(res);
            } else {
                const data = await response.json();
                res.json(data);
            }

        } catch (error) {
            console.error("[Titania Proxy Error]", error);
            res.status(500).send(error.message);
        }
    });
    console.log("[Titania] Proxy Backend Loaded.");
}

module.exports = { init };
