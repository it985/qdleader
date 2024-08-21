import{_ as e,c as a,o as n,a as s}from"./app-90N25QkG.js";const l={},i=s(`<h1 id="d006-作用域和作用域链★★★" tabindex="-1"><a class="header-anchor" href="#d006-作用域和作用域链★★★"><span>D006-作用域和作用域链★★★</span></a></h1><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h2><blockquote><p>局部变量的优先级高于全局变量，</p></blockquote><blockquote><p>作用域就是一个独立的地盘，让变量不会外泄、暴露出去。也就是说作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。 ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域。ES6的到来，为我们提供了‘块级作用域</p></blockquote><h2 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域"><span>全局作用域</span></a></h2><blockquote><p>最外层函数 和在最外层函数外面定义的变量拥有全局作用域 所有末定义直接赋值的变量自动声明为拥有全局作用域 所有window对象的属性拥有全局作用域</p></blockquote><blockquote><p>全局作用域弊端 污染全局命名空间, 容易引起命名冲突。</p></blockquote><h2 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域"><span>函数作用域</span></a></h2><blockquote><p>是指声明在函数内部的变量，和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到 eg1:</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function doSomething(){</span>
<span class="line">    var myName=&quot;qdleader&quot;;</span>
<span class="line">    console.log(&quot;inner&quot;,myName);</span>
<span class="line">}</span>
<span class="line">doSomething()</span>
<span class="line">console.log(myName);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果打印</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">inner qdleader</span>
<span class="line">报错：myName is not defined</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>因为myName是在函数里面定义的，函数外面访问不到，所以会报myName is not defined</p></blockquote><p>值得注意的是：块语句（大括号“｛｝”中间的语句），如 if 和 switch 条件语句或 for 和 while 循环语句，不像函数，它们不会创建一个新的作用域。在块语句中定义的变量将保留在它们已经存在的作用域中。</p><p>if (true) { // &#39;if&#39; 条件语句块不会创建一个新的作用域 var name = &#39;qdleader&#39;; // name 依然在全局作用域中 } console.log(name); // logs &#39;qdleader&#39;</p><h3 id="延伸-块级作用域" tabindex="-1"><a class="header-anchor" href="#延伸-块级作用域"><span>延伸 块级作用域</span></a></h3><p>块级作用域可通过新增命令let和const声明，所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在一个函数内部</span>
<span class="line">在一个代码块（由一对花括号包裹）内部</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>1.声明变量不会提升到代码块顶部 (如果变量在声明前被调用，就出出现tdz现象暂存死区) 2.禁止重复声明</p><h1 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链"><span>作用域链</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在javascript中，每个函数都有自己的执行上下文环境，当代码在这个环境中执行时，会创建变量对象的作用域链，作用域链是一个对象列表或对象链，它保证了变量对象的有序访问。</span>
<span class="line">作用域链的前端是当前代码执行环境的变量对象，常被称之为“活跃对象”，变量的查找会从第一个链的对象开始，如果对象中包含变量属性，那么就停止查找，如果没有就会继续向上级作用域链查找，直到找到全局对象中：</span>
<span class="line"></span>
<span class="line">作用域链的逐级查找，也会影响到程序的性能，变量作用域链越长对性能影响越大，这也是我们尽量避免使用全局变量的一个主要原因。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[i];function d(r,c){return n(),a("div",null,t)}const o=e(l,[["render",d],["__file","D006-作用域和作用域链★★★.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E7%B2%BE%E9%80%89%E6%B1%87%E6%80%BB/D006-%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E2%98%85%E2%98%85%E2%98%85.html","title":"D006-作用域和作用域链★★★","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"作用域","slug":"作用域","link":"#作用域","children":[]},{"level":2,"title":"全局作用域","slug":"全局作用域","link":"#全局作用域","children":[]},{"level":2,"title":"函数作用域","slug":"函数作用域","link":"#函数作用域","children":[{"level":3,"title":"延伸 块级作用域","slug":"延伸-块级作用域","link":"#延伸-块级作用域","children":[]}]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/常见面试题精选汇总/D006-作用域和作用域链★★★.md"}');export{o as comp,u as data};
