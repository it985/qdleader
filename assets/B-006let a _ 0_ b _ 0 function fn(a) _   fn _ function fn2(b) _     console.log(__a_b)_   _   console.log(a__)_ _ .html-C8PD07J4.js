import{_ as n,c as a,o as s,a as e}from"./app-90N25QkG.js";const l={},o=e(`<h1 id="b-006let-a-0-b-0-function-fn-a-fn-function-fn2-b-console-log-a-b-console-log-a" tabindex="-1"><a class="header-anchor" href="#b-006let-a-0-b-0-function-fn-a-fn-function-fn2-b-console-log-a-b-console-log-a"><span>B-006let a = 0, b = 0 function fn(a) { fn = function fn2(b) { console.log(++a+b); } console.log(a++); }</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  </span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><p>fn(1) //1 fn(2) // 5</p><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2><p>第一次调用A时，执行到console.log(a++)时，a已经完成自加，此时a的值为2，a++的值为1。</p><p>fn(1)=1</p><p>第二次调用A时，fn已经被重新赋值，指向了一个新的函数引用；</p><p>由于标识符A是在全局作用域定义的，所以在函数内部被重新赋值，在全局作用域也可以访问到重新赋值后的函数。</p><p>此时，也创建了一个闭包，该闭包保存了创建环境的活动对象。</p><p>此时活动对象：{ a: 2 }，同时， 根据传入的数值2,++a值为3，确定 b = 2。 执行到 console.log(++a + b)，故而输出5 fn(2)=5</p><h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考"><span>思考</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//此处说明 ++操作符的特性。</span>
<span class="line">var i = 0;</span>
<span class="line">var eg = i++;</span>
<span class="line">var eg1 = ++i;</span>
<span class="line">console.log(i, eg, eg1) // 2 0 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>&#39;+&#39; 在后面 后加</p><p>&#39;+&#39; 在前面 先加</p></blockquote>`,14),t=[o];function p(c,i){return s(),a("div",null,t)}const r=n(l,[["render",p],["__file","B-006let a _ 0_ b _ 0 function fn(a) _   fn _ function fn2(b) _     console.log(__a_b)_   _   console.log(a__)_ _ .html.vue"]]),_=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E9%97%AD%E5%8C%85%E7%B1%BB/B-006let%20a%20_%200_%20b%20_%200%20function%20fn(a)%20_%20%20%20fn%20_%20function%20fn2(b)%20_%20%20%20%20%20console.log(__a_b)_%20%20%20_%20%20%20console.log(a__)_%20_%20.html","title":"B-006let a = 0, b = 0 function fn(a) {   fn = function fn2(b) {     console.log(++a+b);   }   console.log(a++); }","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"解析","slug":"解析","link":"#解析","children":[]},{"level":2,"title":"思考","slug":"思考","link":"#思考","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/闭包类/B-006let a = 0, b = 0 function fn(a) {   fn = function fn2(b) {     console.log(++a+b);   }   console.log(a++); } .md"}');export{r as comp,_ as data};
