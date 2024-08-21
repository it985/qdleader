import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const t={},l=e(`<h1 id="禁止打开控制台" tabindex="-1"><a class="header-anchor" href="#禁止打开控制台"><span>禁止打开控制台</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//禁止F12键盘事件</span></span>
<span class="line">   document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">return</span> <span class="token number">123</span> <span class="token operator">!=</span> event<span class="token punctuation">.</span>keyCode <span class="token operator">||</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token comment">//禁止右键、选择、复制</span></span>
<span class="line">   document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">return</span> event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    function consoleOpenCallback2 () {</span>
<span class="line">      document.body.innerHTML = &#39;年轻人，不要太好奇&#39;;</span>
<span class="line">      window.close();</span>
<span class="line">      window.location = &quot;about:blank&quot;;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    setInterval(function () {</span>
<span class="line">      const before = new Date();</span>
<span class="line">      (function () { }).constructor(&quot;debugger&quot;)();</span>
<span class="line">      // debugger;</span>
<span class="line">      const after = new Date();</span>
<span class="line">      const cost = after.getTime() - before.getTime();</span>
<span class="line">      if (cost &gt; 100) {</span>
<span class="line">        consoleOpenCallback2();</span>
<span class="line">      }</span>
<span class="line">    }, 1000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[l];function p(c,o){return a(),s("div",null,i)}const r=n(t,[["render",p],["__file","禁止打开控制台.html.vue"]]),d=JSON.parse('{"path":"/tool/%E7%A6%81%E6%AD%A2%E6%89%93%E5%BC%80%E6%8E%A7%E5%88%B6%E5%8F%B0.html","title":"禁止打开控制台","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"tool/禁止打开控制台.md"}');export{r as comp,d as data};
