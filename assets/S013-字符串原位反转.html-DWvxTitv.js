import{_ as e,c as s,o as t,a as n}from"./app-90N25QkG.js";const a={},i=n(`<h1 id="s013-字符串原位反转" tabindex="-1"><a class="header-anchor" href="#s013-字符串原位反转"><span>S013-字符串原位反转</span></a></h1><p>将“I am the good boy”反转变为 “I ma eht doog yob”。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">	let str = &#39;I am the good boy&#39;</span>
<span class="line">	let arr1 = str.split(&#39; &#39;).reverse()</span>
<span class="line">	arr1</span>
<span class="line">	(5) [&quot;boy&quot;, &quot;good&quot;, &quot;the&quot;, &quot;am&quot;, &quot;I&quot;]</span>
<span class="line">	let arr2 = arr1.join(&#39; &#39;)</span>
<span class="line">	arr2</span>
<span class="line">	&quot;boy good the am I&quot;</span>
<span class="line">	let arr3 = arr2.split(&#39;&#39;).reverse()</span>
<span class="line">	arr3</span>
<span class="line">	(17) [&quot;I&quot;, &quot; &quot;, &quot;m&quot;, &quot;a&quot;, &quot; &quot;, &quot;e&quot;, &quot;h&quot;, &quot;t&quot;, &quot; &quot;, &quot;d&quot;, &quot;o&quot;, &quot;o&quot;, &quot;g&quot;, &quot; &quot;, &quot;y&quot;, &quot;o&quot;, &quot;b&quot;]</span>
<span class="line">	arr3.join(&#39;&#39;)</span>
<span class="line">	&quot;I ma eht doog yob&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function reverseInPlace(str) {</span>
<span class="line">	return str.split(&#39; &#39;).reverse().join(&#39; &#39;).split(&#39;&#39;).reverse().join(&#39;&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种问题你说你直接打印，面试时候没地方打印出来的，直接想很可能绕进去。 推荐直接记住 可以这样记：</p><p>一半一半 两个部分都是： split.reverse.join</p><p>然后前面都是&#39; &#39;;</p><p>后面两个都是&#39;&#39;</p>`,9),l=[i];function o(r,u){return t(),s("div",null,l)}const c=e(a,[["render",o],["__file","S013-字符串原位反转.html.vue"]]),p=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S013-%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8E%9F%E4%BD%8D%E5%8F%8D%E8%BD%AC.html","title":"S013-字符串原位反转","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"常见算法/S013-字符串原位反转.md"}');export{c as comp,p as data};
