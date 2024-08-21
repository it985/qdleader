import{_ as t,c as e,o as a,a as n}from"./app-90N25QkG.js";const s={},i=n(`<h1 id="nginx-常见问题配置" tabindex="-1"><a class="header-anchor" href="#nginx-常见问题配置"><span>Nginx 常见问题配置</span></a></h1><h2 id="https-请求-http-接口报错" tabindex="-1"><a class="header-anchor" href="#https-请求-http-接口报错"><span>https 请求 http 接口报错</span></a></h2><p>nginx 中添加</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">add_header Strict-Transport-Security <span class="token string">&quot;max-age=31536000&quot;</span> always<span class="token punctuation">;</span></span>
<span class="line">add_header Content-Security-Policy upgrade-insecure-requests<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[i];function l(c,p){return a(),e("div",null,r)}const h=t(s,[["render",l],["__file","Nginx 常见问题配置.html.vue"]]),o=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E5%89%8D%E7%AB%AF%E8%A6%81%E6%87%82%E5%BE%97%E9%83%A8%E5%88%86Nginx/Nginx%20%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E9%85%8D%E7%BD%AE.html","title":"Nginx 常见问题配置","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"https 请求 http 接口报错","slug":"https-请求-http-接口报错","link":"#https-请求-http-接口报错","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"服务端/前端要懂得部分Nginx/Nginx 常见问题配置.md"}');export{h as comp,o as data};
