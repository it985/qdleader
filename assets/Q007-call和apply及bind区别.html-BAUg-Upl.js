import{_ as n,c as s,o as a,a as p}from"./app-90N25QkG.js";const l={},e=p(`<h1 id="q007-call和apply及bind区别" tabindex="-1"><a class="header-anchor" href="#q007-call和apply及bind区别"><span>Q007-call和apply及bind区别</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;王&#39;</span><span class="token punctuation">,</span>age<span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;校长&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">objAge</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">myFun</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fm<span class="token punctuation">,</span>t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span> <span class="token string">&quot;年龄&quot;</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token string">&quot;来自&quot;</span> <span class="token operator">+</span> fm <span class="token operator">+</span> <span class="token string">&quot;去往&quot;</span> <span class="token operator">+</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">var</span> db <span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;德玛&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">99</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">obj1<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span><span class="token string">&#39;成都&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;上海&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>　　　　 <span class="token comment">// 德玛 年龄 99  来自 成都去往上海</span></span>
<span class="line">obj1<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;成都&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;上海&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 德玛 年龄 99  来自 成都去往上海</span></span>
<span class="line">obj1<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span><span class="token string">&#39;成都&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;上海&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 德玛 年龄 99  来自 成都去往上海</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，传null或undefined 默认指向 window ，第二个参数差别就来了：</p></blockquote><blockquote><p>call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,&#39;成都&#39;, ... ,&#39;string&#39; )。</p></blockquote><blockquote><p>apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,[&#39;成都&#39;, ..., &#39;string&#39; ])。</p></blockquote><blockquote><p>bind 除了返回是函数以外，它 的参数和 call 一样。 当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！</p></blockquote><p>下面输出什么？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">&lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">  function fn(a,b) {</span>
<span class="line">    this.xxx = 3</span>
<span class="line">    console.log(a,b,this)</span>
<span class="line">  }</span>
<span class="line">  fn(1,2)</span>
<span class="line">  console.log(xxx)</span>
<span class="line"></span>
<span class="line">  const obj = {m:0}</span>
<span class="line">  fn.call(obj,1,2)</span>
<span class="line"></span>
<span class="line">  fn.apply(obj,[1,2])</span>
<span class="line">  fn.apply(null,[1,2])</span>
<span class="line">  fn.apply(undefined,[1,2])</span>
<span class="line">  fn.apply(&#39;12&#39;,[1,2])</span>
<span class="line">  fn.apply(&#39;&#39;,[1,2])</span>
<span class="line">  fn.apply(12,[1,2])</span>
<span class="line">  fn.apply([1,2])</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  // 结果</span>
<span class="line">  // 1 2 Window </span>
<span class="line">  //  3</span>
<span class="line">  //  1 2 {m: 0, xxx: 3}</span>
<span class="line">  // 1 2 {m: 0, xxx: 3}</span>
<span class="line">  1 2 Window </span>
<span class="line">  1 2 Window </span>
<span class="line">  1 2 String {&quot;12&quot;, xxx: 3}</span>
<span class="line">  1 2 String {&quot;&quot;, xxx: 3}</span>
<span class="line">  1 2 Number {12, xxx: 3}</span>
<span class="line"></span>
<span class="line">  undefined undefined (2) [1, 2, xxx: 3]</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[e];function t(c,o){return a(),s("div",null,i)}const d=n(l,[["render",t],["__file","Q007-call和apply及bind区别.html.vue"]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%85%B6%E4%BB%96%E7%B1%BB/Q007-call%E5%92%8Capply%E5%8F%8Abind%E5%8C%BA%E5%88%AB.html","title":"Q007-call和apply及bind区别","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/其他类/Q007-call和apply及bind区别.md"}');export{d as comp,r as data};
