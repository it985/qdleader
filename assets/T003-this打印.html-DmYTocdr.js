import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const p={},l=e(`<h1 id="t003-this打印" tabindex="-1"><a class="header-anchor" href="#t003-this打印"><span>T003-this打印</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token number">222</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> fun  <span class="token operator">=</span> a<span class="token punctuation">.</span>say</span>
<span class="line"><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">a<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">333</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fun</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">b<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>say<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">b<span class="token punctuation">.</span>say <span class="token operator">=</span> a<span class="token punctuation">.</span>say</span>
<span class="line">b<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">222</span>
<span class="line">111</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">222</span>
<span class="line">333</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2"><span>2.</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> fullname <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>  </span>
<span class="line">  </span>
<span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token literal-property property">fullname</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>  </span>
<span class="line">    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token punctuation">{</span>  </span>
<span class="line">        <span class="token literal-property property">fullname</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>  </span>
<span class="line">        <span class="token function-variable function">getFullname</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  </span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fullname<span class="token punctuation">;</span>  </span>
<span class="line">        <span class="token punctuation">}</span>  </span>
<span class="line">    <span class="token punctuation">}</span>  </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span>  </span>
<span class="line">  </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>prop<span class="token punctuation">.</span><span class="token function">getFullname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">  </span>
<span class="line"><span class="token keyword">var</span> test <span class="token operator">=</span> obj<span class="token punctuation">.</span>prop<span class="token punctuation">.</span>getFullname<span class="token punctuation">;</span>  </span>
<span class="line">  </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">a</span>
<span class="line"></span>
<span class="line">a</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2><p>obj.prop.getFullname 是一个箭头函数，箭头函数中的 this 指向定义时所在的上下文，而不是调用时所在的上下文。</p><p>obj.prop.getFullname 是在全局上下文中定义的，因此 this 指向全局对象 window。所以obj.prop.getFullname 返回的是 &#39;a&#39;。</p><p>test 是一个变量，其值为 obj.prop.getFullname 函数的引用。由于 test 是在全局上下文中定义的，因此 this 也指向全局对象 window。当调用 test() 时，实际上是在全局上下文中调用 obj.prop.getFullname 函数，因此返回的也是 &#39;a&#39;。</p>`,12),t=[l];function i(c,o){return a(),s("div",null,t)}const r=n(p,[["render",i],["__file","T003-this打印.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/this%E7%B1%BB/T003-this%E6%89%93%E5%8D%B0.html","title":"T003-this打印","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.","slug":"_2","link":"#_2","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"解析","slug":"解析","link":"#解析","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/this类/T003-this打印.md"}');export{r as comp,d as data};
