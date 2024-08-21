import{_ as s,c as n,o as a,a as e}from"./app-90N25QkG.js";const i={},t=e(`<h1 id="v006-watch和computed的区别" tabindex="-1"><a class="header-anchor" href="#v006-watch和computed的区别"><span>V006-watch和computed的区别</span></a></h1><p>#使用场景</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">computed 　　　　</span>
<span class="line">　　　　<span class="token function">当一个属性受多个属性影响的时候就需要用到computed</span><span class="token punctuation">(</span>当有一些数据需要随着另外一些数据变化时，建议使用computed<span class="token punctuation">)</span></span>
<span class="line">　　　　最典型的例子： 购物车商品结算的时候</span>
<span class="line">watch</span>
<span class="line">　　　　<span class="token function">当一条数据影响多条数据的时候就需要用watch</span><span class="token punctuation">(</span>当有一个通用的响应数据变化的时候，要执行一些业务逻辑或异步操作的时候建议使用watch<span class="token punctuation">)</span></span>
<span class="line">　　　　搜索数据</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#总结：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">watch顾名思义，用于监听数据变化，其中可以监听的数据来源有三部分：props、data、computed内的数据；</span>
<span class="line">watch提供两个参数（newValue，oldValue），第一个参数是新值，第二个参数保存旧值；</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">computed用于处理复杂的逻辑运算，主要和methods储存方法来进行区分；</span>
<span class="line">methods储存方法，，computed储存需要处理的数据值；methods每次都会调用，computed有缓存机制，只有改变时才执行，性能更佳；</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function l(d,p){return a(),n("div",null,c)}const r=s(i,[["render",l],["__file","V006-watch和computed的区别.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V006-watch%E5%92%8Ccomputed%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"V006-watch和computed的区别","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/vue篇/V006-watch和computed的区别.md"}');export{r as comp,u as data};
