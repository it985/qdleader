import{_ as n,c as s,o as a,a as t}from"./app-90N25QkG.js";const p={},e=t(`<h1 id="空合并运算符" tabindex="-1"><a class="header-anchor" href="#空合并运算符"><span>空合并运算符 ??</span></a></h1><p>空合并运算符 ?? (Nullish coalescing operator) 是一个逻辑运算符，<strong>当其左侧操作数为 null 或 undefined 时，它返回其右侧操作数，否则返回其左侧操作数</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">??</span> <span class="token string">&#39;default string&#39;</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//output: &quot;default string&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">??</span> <span class="token string">&#39;default string&#39;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//output: 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这有啥值得提的？||不就行了 ？因为很多人在初学JS可能会困扰的一个问题是 假 (false) 和 假值(falsy) 的区别， 而 ?? 和 || 主要区别在于</p><p>?? 仅当左操作数为 null 或 undefined 时， ?? 运算符才会将结果作为右操作数。 ||运算符会将左操作数的所有假值(falsy) 的结果作为右操作数</p><p>举个例子：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 1. 使用 0 作为输入 </span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a || 10 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">||</span> <span class="token number">10</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a || 10 = 10</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a ?? 10 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">??</span> <span class="token number">10</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a ?? 10 = 0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 空字符串 &#39;&#39; 作为输入</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a || &quot;ABC&quot; = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">||</span> <span class="token string">&quot;ABC&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a || &quot;ABC&quot; = ABC</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a ?? &quot;ABC&quot; = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">??</span> <span class="token string">&quot;ABC&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a ?? &quot;ABC&quot; = </span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 使用 null 作为输入</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a || 10 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">||</span> <span class="token number">10</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a || 10 = 10v</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a ?? 10 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">??</span> <span class="token number">10</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a ?? 10 = 10</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 使用 undefined 作为输入</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a.name ?? &#39;varun 1&#39; = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token punctuation">.</span>name <span class="token operator">??</span> <span class="token string">&#39;varun 1&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a.name || &#39;varun 2&#39; = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;varun 2&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// a.name ?? &#39;varun 1&#39; = </span></span>
<span class="line"><span class="token comment">// a.name || &#39;varun 2&#39; = varun 2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. 使用 false 作为输入</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a || 10 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">||</span> <span class="token number">10</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a || 10 = 10</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a ?? 10 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">??</span> <span class="token number">10</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a ?? 10 = false</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function l(c,i){return a(),s("div",null,o)}const r=n(p,[["render",l],["__file","空合并运算符.html.vue"]]),k=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/interestringTip/%E7%A9%BA%E5%90%88%E5%B9%B6%E8%BF%90%E7%AE%97%E7%AC%A6.html","title":"空合并运算符 ??","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端小tip/interestringTip/空合并运算符.md"}');export{r as comp,k as data};
