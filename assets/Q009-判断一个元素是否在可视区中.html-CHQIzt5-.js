import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const p={},t=e(`<h1 id="q009-判断一个元素是否在可视区中" tabindex="-1"><a class="header-anchor" href="#q009-判断一个元素是否在可视区中"><span>Q009-判断一个元素是否在可视区中</span></a></h1><h2 id="如何判断一个元素是否在可视区域中" tabindex="-1"><a class="header-anchor" href="#如何判断一个元素是否在可视区域中"><span>如何判断一个元素是否在可视区域中？</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"></span>
<span class="line"><span class="token comment">// 核心思想：</span></span>
<span class="line"></span>
<span class="line">el<span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">&lt;=</span> viewPortHeight</span>
<span class="line">代码实现：</span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">isInViewPortOfOne</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// viewPortHeight 兼容所有浏览器写法</span></span>
<span class="line">    <span class="token keyword">const</span> viewPortHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight </span>
<span class="line">    <span class="token keyword">const</span> offsetTop <span class="token operator">=</span> el<span class="token punctuation">.</span>offsetTop</span>
<span class="line">    <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop</span>
<span class="line">    <span class="token keyword">const</span> top <span class="token operator">=</span> offsetTop <span class="token operator">-</span> scrollTop</span>
<span class="line">    <span class="token keyword">return</span> top <span class="token operator">&lt;=</span> viewPortHeight</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二-getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#方法二-getboundingclientrect"><span>方法二 -- getBoundingClientRect</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isInViewPort</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> viewWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> viewHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">    top<span class="token punctuation">,</span></span>
<span class="line">    right<span class="token punctuation">,</span></span>
<span class="line">    bottom<span class="token punctuation">,</span></span>
<span class="line">    left<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    top <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span></span>
<span class="line">    left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span></span>
<span class="line">    right <span class="token operator">&lt;=</span> viewWidth <span class="token operator">&amp;&amp;</span></span>
<span class="line">    bottom <span class="token operator">&lt;=</span> viewHeight</span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三"><span>方法三</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// Intersection Observer</span></span>
<span class="line"><span class="token comment">// Intersection Observer 即重叠观察者，从这个命名就可以看出它用于判断两个元素是否重叠，因为不用进行事件的监听，性能方面相比getBoundingClientRect 会好很多</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用步骤主要分为两步：创建观察者和传入被观察者</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// **创建观察者**</span></span>
<span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 表示重叠面积占被观察者的比例，从 0 - 1 取值，</span></span>
<span class="line">  <span class="token comment">// 1 表示完全被包含</span></span>
<span class="line">  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token literal-property property">root</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#scrollArea&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 必须是目标元素的父级元素</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 通过new IntersectionObserver创建了观察者 observer，传入的参数 callback 在重叠比例超过 threshold 时会被执行\`</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 关于callback回调函数常用属性如下：</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 上段代码中被省略的 callback</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        entry<span class="token punctuation">.</span>time<span class="token punctuation">;</span>               <span class="token comment">// 触发的时间</span></span>
<span class="line">        entry<span class="token punctuation">.</span>rootBounds<span class="token punctuation">;</span>         <span class="token comment">// 根元素的位置矩形，这种情况下为视窗位置</span></span>
<span class="line">        entry<span class="token punctuation">.</span>boundingClientRect<span class="token punctuation">;</span> <span class="token comment">// 被观察者的位置举行</span></span>
<span class="line">        entry<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span>   <span class="token comment">// 重叠区域的位置矩形</span></span>
<span class="line">        entry<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span>  <span class="token comment">// 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）</span></span>
<span class="line">        entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span>             <span class="token comment">// 被观察者</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 传入被观察者</span></span>
<span class="line"><span class="token comment">// 通过 observer.observe(target) 这一行代码即可简单的注册被观察者</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.target&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eg" tabindex="-1"><a class="header-anchor" href="#eg"><span>eg：</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>getYellow<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">getYellow回调函数实现对背景颜色改变，如下：</span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getYellow</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">$</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">最后传入观察者，即<span class="token punctuation">.</span>target元素</span>
<span class="line"></span>
<span class="line"> observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// $targets.each((index, element) =&gt; {</span></span>
<span class="line"><span class="token comment">//     observer.observe(element);</span></span>
<span class="line"><span class="token comment">// });</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[t];function c(o,i){return a(),s("div",null,l)}const r=n(p,[["render",c],["__file","Q009-判断一个元素是否在可视区中.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%85%B6%E4%BB%96%E7%B1%BB/Q009-%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E6%98%AF%E5%90%A6%E5%9C%A8%E5%8F%AF%E8%A7%86%E5%8C%BA%E4%B8%AD.html","title":"Q009-判断一个元素是否在可视区中","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"如何判断一个元素是否在可视区域中？","slug":"如何判断一个元素是否在可视区域中","link":"#如何判断一个元素是否在可视区域中","children":[]},{"level":2,"title":"方法二 -- getBoundingClientRect","slug":"方法二-getboundingclientrect","link":"#方法二-getboundingclientrect","children":[]},{"level":2,"title":"方法三","slug":"方法三","link":"#方法三","children":[]},{"level":2,"title":"eg：","slug":"eg","link":"#eg","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/其他类/Q009-判断一个元素是否在可视区中.md"}');export{r as comp,d as data};
