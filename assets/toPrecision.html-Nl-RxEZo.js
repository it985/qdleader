import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const p={},t=e(`<h1 id="toprecision" tabindex="-1"><a class="header-anchor" href="#toprecision"><span>toPrecision</span></a></h1><p>把数字格式化为指定的长度:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">13.3714</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> n<span class="token operator">=</span>num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">n 输出结果<span class="token operator">:</span></span>
<span class="line"></span>
<span class="line"><span class="token number">13</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义和用法 toPrecision() 方法返回指定长度的数值字符串。</p><p>toPrecision() 方法以指定的精度返回该数值对象的字符串表示，四舍五入到 precision 参数指定的显示数字位数。</p><p>使用不同进制把数字格式化为指定的长度:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">13.3714</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> d <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">a、b、c 和 d 输出结果<span class="token operator">:</span></span>
<span class="line"></span>
<span class="line"><span class="token number">13.3714</span></span>
<span class="line"><span class="token number">13</span></span>
<span class="line"><span class="token number">13.4</span></span>
<span class="line"><span class="token number">13.37140000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function o(i,l){return a(),s("div",null,c)}const u=n(p,[["render",o],["__file","toPrecision.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E8%BF%90%E7%AE%97%E7%B1%BB/toPrecision.html","title":"toPrecision","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/运算类/toPrecision.md"}');export{u as comp,d as data};
