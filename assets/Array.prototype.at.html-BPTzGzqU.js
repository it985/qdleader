import{_ as n,c as a,o as s,a as e}from"./app-90N25QkG.js";const l={},i=e(`<h1 id="array-prototype-at" tabindex="-1"><a class="header-anchor" href="#array-prototype-at"><span>Array.prototype.at</span></a></h1><h2 id="使用array-prototype-at-简化arr-length" tabindex="-1"><a class="header-anchor" href="#使用array-prototype-at-简化arr-length"><span>使用Array.prototype.at()简化arr.length</span></a></h2><p>Array.prototype.at()接收一个正整数或者负整数作为参数，表示获取指定位置的成员</p><p>参数正数就表示顺数第几个，负数表示倒数第几个，这可以很方便的某个数组末尾的元素</p><p>不存在-0，-0 = 0</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">var arr = [1, 2, 3, 4, 5]</span>
<span class="line">// 以前获取最后一位</span>
<span class="line">console.log(arr[arr.length-1]) //5</span>
<span class="line">// 简化后</span>
<span class="line">console.log(arr.at(-1)) // 5</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">ar arr = [1, 2, 5, 9, 78]</span>
<span class="line"></span>
<span class="line">// 第0个</span>
<span class="line">console.log(arr.at(0)) // 1</span>
<span class="line"></span>
<span class="line">// 正数第一个</span>
<span class="line">console.log(arr.at(1)) // 2</span>
<span class="line"></span>
<span class="line">// 倒数第一个</span>
<span class="line">console.log(arr.at(-1)) // 78</span>
<span class="line"></span>
<span class="line">// 倒数第二个</span>
<span class="line">console.log(arr.at(-2)) // 9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么让你实现下呢？</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function at(n) {</span>
<span class="line">  n = Math.trunc(n) || 0; // 去掉小数点</span>
<span class="line">  if (n &lt; 0) n += this.length;</span>
<span class="line">  if (n &lt; 0 || n &gt;= this.length) return undefined;</span>
<span class="line">  return this[n];</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[i];function t(p,c){return s(),a("div",null,r)}const o=n(l,[["render",t],["__file","Array.prototype.at.html.vue"]]),v=JSON.parse('{"path":"/es6/Array.prototype.at.html","title":"Array.prototype.at","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用Array.prototype.at()简化arr.length","slug":"使用array-prototype-at-简化arr-length","link":"#使用array-prototype-at-简化arr-length","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"es6/Array.prototype.at.md"}');export{o as comp,v as data};
