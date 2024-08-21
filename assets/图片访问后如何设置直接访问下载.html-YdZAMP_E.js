import{_ as s,c as a,o as n,a as e}from"./app-90N25QkG.js";const t={},p=e(`<h1 id="图片访问后如何设置直接访问下载" tabindex="-1"><a class="header-anchor" href="#图片访问后如何设置直接访问下载"><span>图片访问后如何设置直接访问下载</span></a></h1><p>请求的返回头里面，用于浏览器解析的重要参数就是OSS的API文档里面的返回http头，决定用户下载行为的参数 下载的情况下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">  <span class="token number">1.</span> x<span class="token operator">-</span>oss<span class="token operator">-</span>object<span class="token operator">-</span>type<span class="token operator">:</span></span>
<span class="line">         Normal</span>
<span class="line">  <span class="token number">2.</span> x<span class="token operator">-</span>oss<span class="token operator">-</span>request<span class="token operator">-</span>id<span class="token operator">:</span></span>
<span class="line">         598D5ED34F29D01FE2925F41</span>
<span class="line">  <span class="token number">3.</span> x<span class="token operator">-</span>oss<span class="token operator">-</span>storage<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">:</span></span>
<span class="line">         Standard</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTTP 头，添加头名称<strong>Content-Disposition值attachment</strong>;filename=filename.jpg，其中filename.jpg为文件名，这样浏览器会自动下载文件，而不会打开。</p>`,4),o=[p];function r(l,i){return n(),a("div",null,o)}const d=s(t,[["render",r],["__file","图片访问后如何设置直接访问下载.html.vue"]]),E=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%85%B6%E4%BB%96%E7%B1%BB/%E5%9B%BE%E7%89%87%E7%B1%BB/%E5%9B%BE%E7%89%87%E8%AE%BF%E9%97%AE%E5%90%8E%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE%E4%B8%8B%E8%BD%BD.html","title":"图片访问后如何设置直接访问下载","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/其他类/图片类/图片访问后如何设置直接访问下载.md"}');export{d as comp,E as data};
