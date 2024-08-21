import{_ as s,c as n,o as a,a as p}from"./app-90N25QkG.js";const e={},t=p(`<h1 id="小tips之js标签label" tabindex="-1"><a class="header-anchor" href="#小tips之js标签label"><span>小tips之js标签label</span></a></h1><p>JavaScript语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。</p><p>label: statement 标签可以是任意的标识符，但是不能是保留字，语句部分可以是任意语句。</p><p>标签通常与break语句和continue语句配合使用，跳出特定的循环。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">top</span><span class="token operator">:</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">break</span> top<span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;i=&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;, j=&#39;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// i=0, j=0</span></span>
<span class="line"><span class="token comment">// i=0, j=1</span></span>
<span class="line"><span class="token comment">// i=0, j=2</span></span>
<span class="line"><span class="token comment">// i=1, j=0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码为一个双重循环区块，break命令后面加上了top标签（注意，top不用加引号），满足条件时，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。</p><p>continue语句也可以与标签配合使用。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">top</span><span class="token operator">:</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span> top<span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;i=&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;, j=&#39;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// i=0, j=0</span></span>
<span class="line"><span class="token comment">// i=0, j=1</span></span>
<span class="line"><span class="token comment">// i=0, j=2</span></span>
<span class="line"><span class="token comment">// i=1, j=0</span></span>
<span class="line"><span class="token comment">// i=2, j=0</span></span>
<span class="line"><span class="token comment">// i=2, j=1</span></span>
<span class="line"><span class="token comment">// i=2, j=2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，continue命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果continue语句后面不使用标签，则只能进入下一轮的内层循环。</p><p>说明：</p><p>break语句和continue语句都具有跳转作用，可以让代码不按既有的顺序执行。</p><p>break语句用于跳出代码块或循环。</p><p>continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。</p>`,13),o=[t];function l(c,i){return a(),n("div",null,o)}const u=s(e,[["render",l],["__file","小tips之js标签label.html.vue"]]),k=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%B0%8Ftips%E4%B9%8Bjs%E6%A0%87%E7%AD%BElabel.html","title":"小tips之js标签label","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端小tip/小tips之js标签label.md"}');export{u as comp,k as data};
