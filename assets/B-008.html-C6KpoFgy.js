import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const p={},c=e(`<h1 id="b-008" tabindex="-1"><a class="header-anchor" href="#b-008"><span>B-008</span></a></h1><h2 id="_1、范围" tabindex="-1"><a class="header-anchor" href="#_1、范围"><span>1、范围</span></a></h2><p>在说闭包之前，我们必须了解作用域的概念，它是理解闭包的基石。</p><p>此代码段的输出是什么？</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这很简单，相信所有人都知道输出结果是10。 默认情况下，有一个全局范围。 本地作用域由函数或代码块创建。</p><p>当执行 console.log(a) 时，JavaScript 引擎将首先在函数 foo 创建的本地范围内查找 a。当 JavaScript 引擎找不到 a 时，它会尝试在其外部作用域（即全局作用域）中查找 a。然后事实证明a的值为10。</p><h3 id="_2、-局部作用域" tabindex="-1"><a class="header-anchor" href="#_2、-局部作用域"><span>2、 局部作用域</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  a <span class="token operator">=</span> <span class="token number">30</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，变量 a 也存在于 foo 的范围内。所以当执行 console.log(a) 时，JavaScript 引擎可以直接从本地作用域获取 a 的值。</p><p>所以输出是 20 。</p><p>记住：当 JavaScript 引擎需要查询一个变量的值时，它会首先在本地范围内查找，如果没有找到该变量，它会继续在上层范围内查找。</p><h3 id="_3、词法作用域" tabindex="-1"><a class="header-anchor" href="#_3、词法作用域"><span>3、词法作用域</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">      <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个问题容易出错，也是面试中经常出现的问题，你可以考虑一下。</p><p>简单地说，JavaScript 实现了一种名为词法作用域（或静态作用域）的作用域机制。它被称为词法（或静态），因为引擎仅通过查看 JavaScript 源代码来确定范围的嵌套，无论它在哪里调用。</p><p>所以输出是 10 ：</p><h3 id="_4、修改词法作用域" tabindex="-1"><a class="header-anchor" href="#_4、修改词法作用域"><span>4、修改词法作用域</span></a></h3><p>如果我们将代码片段更改为：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line"><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出是什么？</p><p>foo 范围成为 bar 范围的子范围： 当 JavaScript 引擎在 Foo 作用域中没有找到 a 时，它会首先从 Foo 作用域的父作用域，也就是 Bar 作用域中寻找 a，它确实找到了 a。</p><p>所以输出是 20：</p><p>好了，以上就是关于范围的一些基本挑战，相信你能顺利通过。现在我们开始进入闭包的部分。</p><h2 id="_5、-闭包" tabindex="-1"><a class="header-anchor" href="#_5、-闭包"><span>5、 闭包</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> innerFunc<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">let</span> innerFunc <span class="token operator">=</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出是什么？这段代码会抛出异常吗？</p><p>在词法范围内，innerFunc 仍然可以访问 a，即使在其词法范围之外执行。 换句话说，innerFunc 从其词法范围中记住（或关闭）变量 a。 换句话说，innerFunc 是一个闭包，因为它在变量 a 的词法范围内关闭。</p><p>因此，这段代码不会抛出异常，而是输出 10。</p><p>6、 IIFE</p><p>(function(a) { return (function(b) { console.log(a); })(1); })(0); 此代码片段使用 JavaScript 立即调用函数表达式 (IIFE)。</p><p>我们可以简单地将这段代码翻译成这样：</p><p>function foo(a){ function bar(b){ console.log(a) } return bar(1) }</p><p>foo(0) 所以输出是 0 。</p><p>闭包的一个经典应用是隐藏变量。</p><p>比如现在要写一个计数器，基本的写法是这样的：</p><p>let i = 0 function increase(){ i++ console.log(<code>courrent counter is \${i}</code>) return i }</p><p>increase() increase() increase() 可以这样写，但是在全局范围内会多出一个变量i，这样就不好了。</p><p>这时候，我们可以使用闭包来隐藏这个变量。</p><p>let increase = (function(){ let i = 0 return function(){ i++ console.log(<code>courrent counter is \${i}</code>) return i } })()</p><p>increase() increase() increase() 这样，变量 i 就隐藏在局部范围内，不会污染全局环境。</p><p>7、多重声明和使用</p><p>let count = 0;</p><p>(function() { if (count === 0) { let count = 1; console.log(count); } console.log(count); })(); 在这个代码片段中，有两个 count 的声明和三个 count 的用法。这是一个难题，你应该仔细考虑。</p><p>首先，我们要知道if代码块也创建了一个局部作用域，上面的作用域大致是这样的。</p><p>a193002f5a324172980f7932315184b9.png</p><p>Function Scope 没有声明自己的计数，所以我们在这个作用域中使用的计数是全局作用域的计数。</p><p>If Scope 声明了自己的计数，所以我们在这个作用域中使用的计数就是当前作用域的计数。</p><p>f1e0df730d12e86fb848a6db338b5043.png</p><p>或在此图中：</p><p>a1f2b4941625a3943567ce172fc8bfca.png</p><p>所以输出是 1 ， 0 ：</p><p>8、调用多个闭包</p><p>function cr eateCounter(){ let i = 0 return function(){ i++ return i } } let increase1 = createCounter() let increase2 = createCounter() console.log(increase1()) console.log(increase1()) console.log(increase2()) console.log(increase2()) 这里需要注意的是，increase1和increase2是通过不同的函数调用createCounter创建的，它们不共享内存，它们的i是独立的，不同的。</p><p>所以输出是 1 , 2 , 1 , 2 。</p><p>9、返回函数</p><p>function createCounter() { let count = 0; function increase() { count++; } let message = <code>Count is \${count}</code>;</p><p>function log() { console.log(message); }</p><p>return [increase, log]; } const [increase, log] = createCounter(); increase(); increase(); increase(); log();</p><p>这段代码很容易理解，但是有个陷阱：message其实是一个静态字符串，它的值固定为Count为0，当我们调用increase或者log时不会改变。</p><p>所以每次调用 log 函数，输出结果总是 Count is 0 。</p><p>如果您希望 log 函数及时检查 count 的值，请将 message 移入 log ：</p><p>function createCounter() { let count = 0; function increase() { count++; }</p><ul><li>let message = <code>Count is \${count}</code>;</li></ul><p>function log() {</p><ul><li>let message = <code>Count is \${count}</code>; console.log(message); }</li></ul><p>return [increase, log]; } const [increase, log] = createCounter(); increase(); increase(); increase(); log();</p><p>10、异步闭包</p><p>for (var i = 0; i &lt; 5; i++) { setTimeout(function () { console.log(i); }, 0) } 输出是什么？</p><p>上面的代码等价于：</p><p>var i = 0; setTimeout(function(){ console.log(i); },0) i = 1; setTimeout(function(){ console.log(i); },0) i = 2; setTimeout(function(){ console.log(i); },0) i = 3; setTimeout(function(){ console.log(i); },0) i = 4; setTimeout(function(){ console.log(i); },0) i = 5</p><p>而且我们知道JavaScript会先执行同步代码，然后再执行异步代码。所以每次执行console.log(i)时，i的值已经变成了5。</p><p>所以输出是 5 , 5 , 5 , 5 , 5 。</p><p>如果我们想要代码输出 0 , 1 , 2 , 3 , 4 ，需要怎么操作？</p><p>使用闭包的解决方案是：</p><p>for ( var i = 0 ; i &lt; 5 ; ++i ) { (function(cacheI){ setTimeout(function(){ console.log(cacheI); },0) })(i) } ; 上面的代码等价于：</p><p>var i = 0; (function(cacheI){setTimeout(function(){ console.log(cacheI); },0)})(i)</p><p>i = 1; (function(cacheI){setTimeout(function(){ console.log(cacheI); },0)})(i)</p><p>i = 2; (function(cacheI){setTimeout(function(){ console.log(cacheI); },0)})(i)</p><p>i = 3; (function(cacheI){setTimeout(function(){ console.log(cacheI); },0)})(i)</p><p>i = 4; (function(cacheI){setTimeout(function(){ console.log(cacheI); },0)})(i) 我们通过 JavaScript 立即调用的函数表达式创建函数范围。i 的值是通过闭包保存的。</p>`,81),i=[c];function t(o,l){return a(),s("div",null,i)}const r=n(p,[["render",t],["__file","B-008.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E9%97%AD%E5%8C%85%E7%B1%BB/B-008.html","title":"B-008","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、范围","slug":"_1、范围","link":"#_1、范围","children":[{"level":3,"title":"2、 局部作用域","slug":"_2、-局部作用域","link":"#_2、-局部作用域","children":[]},{"level":3,"title":"3、词法作用域","slug":"_3、词法作用域","link":"#_3、词法作用域","children":[]},{"level":3,"title":"4、修改词法作用域","slug":"_4、修改词法作用域","link":"#_4、修改词法作用域","children":[]}]},{"level":2,"title":"5、 闭包","slug":"_5、-闭包","link":"#_5、-闭包","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/js类/闭包类/B-008.md"}');export{r as comp,d as data};
