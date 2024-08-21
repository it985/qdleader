import{_ as n,c as s,o as a,a as p}from"./app-90N25QkG.js";const e={},t=p(`<h1 id="arr009-foreach终止遍历方法" tabindex="-1"><a class="header-anchor" href="#arr009-foreach终止遍历方法"><span>Arr009-forEach终止遍历方法</span></a></h1><p>使用 Error 终止 forEach</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span>  </span>
<span class="line">  numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token parameter">number <span class="token operator">&gt;</span> <span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;循环停止&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token punctuation">}</span>  </span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;出现异常，循环已停止&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token comment">// 输出: 1, 2, 3, 出现异常，循环已停止</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for of 可以通过 break 终止</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line">  </span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token builtin">number</span> <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 成功终止循环  </span></span>
<span class="line">  <span class="token punctuation">}</span>  </span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3  </span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function o(l,i){return a(),s("div",null,c)}const r=n(e,[["render",o],["__file","Arr009-forEach终止遍历方法.html.vue"]]),k=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E6%95%B0%E7%BB%84%E7%B1%BB/Arr009-forEach%E7%BB%88%E6%AD%A2%E9%81%8D%E5%8E%86%E6%96%B9%E6%B3%95.html","title":"Arr009-forEach终止遍历方法","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/数组类/Arr009-forEach终止遍历方法.md"}');export{r as comp,k as data};
