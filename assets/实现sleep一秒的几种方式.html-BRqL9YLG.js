import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const p={},t=e(`<h1 id="实现sleep一秒的几种方式" tabindex="-1"><a class="header-anchor" href="#实现sleep一秒的几种方式"><span>实现sleep一秒的几种方式</span></a></h1><ol><li></li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span>wait<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> sleep <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">sleepInPromise</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> time<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">targetFn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>&#39;一秒后执行<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">sleep<span class="token punctuation">.</span><span class="token function">sleepInPromise</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>targetFn<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  const sleep = {</span>
<span class="line">        sleepInGenerator: function*(time) {</span>
<span class="line">            yield new Promise((resolve, reject) =&gt; {</span>
<span class="line">                setTimeout(resolve, time)</span>
<span class="line">            })</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    const targetFn = function () {</span>
<span class="line">        console.log(&#39;一秒后执行&#39;)</span>
<span class="line">    }</span>
<span class="line">    sleep.sleepInGenerator(1000).next().value.then(targetFn)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li></li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> sleep <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">sleepInPromise</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> time<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">targetFn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>&#39;一秒后执行<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">await</span> sleep<span class="token punctuation">.</span><span class="token function">sleepInPromise</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">targetFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[t];function i(c,o){return a(),s("div",null,l)}const r=n(p,[["render",i],["__file","实现sleep一秒的几种方式.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%BC%82%E6%AD%A5/%E5%AE%9E%E7%8E%B0sleep%E4%B8%80%E7%A7%92%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"实现sleep一秒的几种方式","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/异步/实现sleep一秒的几种方式.md"}');export{r as comp,d as data};
