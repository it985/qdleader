import{_ as s,c as n,o as e,a}from"./app-90N25QkG.js";const l={},i=a(`<p>嵌套方式写css，跟写html时候比较类似，减少了冲突的机会。eg：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ul{</span>
<span class="line">    background-color: #03A9F4;</span>
<span class="line">    padding: 10px;</span>
<span class="line">    list-style: none;</span>
<span class="line"></span>
<span class="line">    li{</span>
<span class="line">        background-color: #fff;</span>
<span class="line">        border-radius: 3px;</span>
<span class="line">        margin: 10px 0;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就像其他的高级语言，less的变量根据范围接受她们的值。如果在指定范围内没有关于变量值的声明，less会一直往上查找，直到找到离它最近的声明。</p><p>eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@text-color:#000;</span>
<span class="line"></span>
<span class="line">ul {</span>
<span class="line">	@text-color:#fff;</span>
<span class="line">	li {</span>
<span class="line">		color:@text-color;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">编译后的li的color为#fff</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[i];function d(t,r){return e(),n("div",null,c)}const v=s(l,[["render",d],["__file","L004-嵌套.html.vue"]]),m=JSON.parse('{"path":"/less_scss/L004-%E5%B5%8C%E5%A5%97.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"less&scss/L004-嵌套.md"}');export{v as comp,m as data};
