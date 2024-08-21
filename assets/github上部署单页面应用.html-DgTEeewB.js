import{_ as s,c as n,o as a,a as e}from"./app-90N25QkG.js";const l={},i=e(`<h1 id="github上部署单页面应用" tabindex="-1"><a class="header-anchor" href="#github上部署单页面应用"><span>github上部署单页面应用</span></a></h1><p>我们打包时候执行完npm run build 之后 会生成一个dist</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">  然后新建一个 分支 git checkout <span class="token operator">-</span>b feature<span class="token operator">-</span>outPage</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  在新分支下删除除了dist 外的所有文件</span>
<span class="line"></span>
<span class="line">  然后吧dist中的文件都复制出来到根目录下，把dist删除掉即可</span>
<span class="line"></span>
<span class="line">  把index文件中的路径 加上<span class="token punctuation">.</span><span class="token operator">/</span></span>
<span class="line"></span>
<span class="line">   <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> crossorigin src<span class="token operator">=</span><span class="token string">&quot;/assets/index.7de06274.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;/assets/index.f3a4dcb2.css&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">  改为</span>
<span class="line"></span>
<span class="line">   <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> crossorigin src<span class="token operator">=</span><span class="token string">&quot;./assets/index.7de06274.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;./assets/index.f3a4dcb2.css&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  然后把 assets文件夹复制一份到assets里面</span>
<span class="line"></span>
<span class="line">  然后把这个分支 push 上去</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  在github 中 找到 settings <span class="token operator">-</span>》 pages</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">在 GitHub Pages 下面找到</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">找到 Build and deployment</span>
<span class="line"></span>
<span class="line">Source 选择 Deploy from a branch</span>
<span class="line"></span>
<span class="line">Branch 选择 我们的 feature<span class="token operator">-</span>outPage   然后保存</span>
<span class="line"></span>
<span class="line">等一会就可以看到我们的站点了</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[i];function t(c,r){return a(),n("div",null,p)}const d=s(l,[["render",t],["__file","github上部署单页面应用.html.vue"]]),u=JSON.parse('{"path":"/github/github%E4%B8%8A%E9%83%A8%E7%BD%B2%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8.html","title":"github上部署单页面应用","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"github/github上部署单页面应用.md"}');export{d as comp,u as data};
