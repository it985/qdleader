import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const p={},t=e(`<h1 id="vue3中的生命周期" tabindex="-1"><a class="header-anchor" href="#vue3中的生命周期"><span>vue3中的生命周期</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1-开始创建组件&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2.组件挂载页面之前执行------onBeforeMount&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;3.组件挂载到页面之后执行----onMounted&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;4.组件更新之前------onBeforeUpdate&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;5.组件更新之后 --------onUpdated&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onBeforeUunmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;组件卸载之前执行&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;组件卸载之后执行&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onActivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;活跃组件onActivated在keep-alive中使用&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onDeactivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;离开活跃页面onDeactivated 在keep-alive组件中使用&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onErrorCaptured</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;当捕获一个来自子孙组件异常时候激活的钩子函数&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2与vue3生命周期对比" tabindex="-1"><a class="header-anchor" href="#vue2与vue3生命周期对比"><span>vue2与vue3生命周期对比</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// beforeCreate -&gt; use setup()</span>
<span class="line"> // created -&gt; use setup()</span>
<span class="line"> // beforeMount -&gt; onBeforeMount</span>
<span class="line"> // mounted -&gt; onMounted</span>
<span class="line"> // beforeUpdate -&gt; onBeforeUpdate</span>
<span class="line"> // updated -&gt; onUpdated</span>
<span class="line"> // beforeDestroy -&gt; onBeforeUnmount</span>
<span class="line"> // destroyed -&gt; onUnmounted</span>
<span class="line"> // errorCaptured -&gt; onErrorCaptured</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3新增的两个函数" tabindex="-1"><a class="header-anchor" href="#vue3新增的两个函数"><span>vue3新增的两个函数</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">onRenderTracked((event) =&gt; {</span>
<span class="line">    console.log(&quot;状态跟踪&quot;,onRenderTracked)</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">onRenderTriggered((event) =&gt; {</span>
<span class="line">  console.log(&quot;状态跟踪钩子函数&quot;,onRenderTriggered)</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function i(c,o){return a(),s("div",null,l)}const d=n(p,[["render",i],["__file","vue3中的生命周期.html.vue"]]),r=JSON.parse('{"path":"/vue3/vue3%E4%B8%AD%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html","title":"vue3中的生命周期","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"vue2与vue3生命周期对比","slug":"vue2与vue3生命周期对比","link":"#vue2与vue3生命周期对比","children":[]},{"level":2,"title":"vue3新增的两个函数","slug":"vue3新增的两个函数","link":"#vue3新增的两个函数","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue3/vue3中的生命周期.md"}');export{d as comp,r as data};
