import{_ as e,c as t,o as a,a as r}from"./app-90N25QkG.js";const l={},c=r('<h1 id="刷新与缓存的关系" tabindex="-1"><a class="header-anchor" href="#刷新与缓存的关系"><span>刷新与缓存的关系</span></a></h1><h2 id="正常操作" tabindex="-1"><a class="header-anchor" href="#正常操作"><span>正常操作</span></a></h2><p>强制缓存有效，协商缓存有效</p><h2 id="手动刷新-f5-和-ctrl-r-都是普通刷新" tabindex="-1"><a class="header-anchor" href="#手动刷新-f5-和-ctrl-r-都是普通刷新"><span>手动刷新（F5 和 Ctrl+R 都是普通刷新）</span></a></h2><p>强制缓存失效，协商缓存有效 若页面之前访问过，就会发一个空请求到服务器，服务器返回 302 ，表示资源未更新，可以使用浏览器缓存。</p><h2 id="强制刷新-ctrl-f5" tabindex="-1"><a class="header-anchor" href="#强制刷新-ctrl-f5"><span>强制刷新 (ctrl+F5)</span></a></h2><p>强制缓存失效，协商缓存失效 则不管浏览器是否缓存，都要重新去源站服务器请求资源，成功则返回 200。可以使用 chrome 开发工具查看具体过程，大概是这样一个流程，实际讲起来更复杂。</p>',7),n=[c];function s(i,h){return a(),t("div",null,n)}const d=e(l,[["render",s],["__file","刷新与缓存的关系.html.vue"]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%88%B7%E6%96%B0%E4%B8%8E%E7%BC%93%E5%AD%98%E7%9A%84%E5%85%B3%E7%B3%BB.html","title":"刷新与缓存的关系","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"正常操作","slug":"正常操作","link":"#正常操作","children":[]},{"level":2,"title":"手动刷新（F5 和 Ctrl+R 都是普通刷新）","slug":"手动刷新-f5-和-ctrl-r-都是普通刷新","link":"#手动刷新-f5-和-ctrl-r-都是普通刷新","children":[]},{"level":2,"title":"强制刷新 (ctrl+F5)","slug":"强制刷新-ctrl-f5","link":"#强制刷新-ctrl-f5","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端小tip/刷新与缓存的关系.md"}');export{d as comp,p as data};
