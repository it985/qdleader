import{_ as n,c as s,o as e,a}from"./app-90N25QkG.js";const i={},l=a(`<p>##S009-随机生成指定长度的字符串</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function randomString(n) {</span>
<span class="line">	let str = &#39;abcdefghijklmnopqrstuvwxyz9876543210&#39;</span>
<span class="line">	let tmp = &#39;&#39;,</span>
<span class="line">	i = 0,</span>
<span class="line">	l = str.length;</span>
<span class="line">	for(i = 0; i &lt; n; i ++) {</span>
<span class="line">		tmp += str.charAt(Math.floor(Math.random()* l));</span>
<span class="line">	}</span>
<span class="line">	return tmp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">module.exports = randomString;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function r(c,d){return e(),s("div",null,t)}const m=n(i,[["render",r],["__file","S009-随机生成指定长度的字符串.html.vue"]]),o=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S009-%E9%9A%8F%E6%9C%BA%E7%94%9F%E6%88%90%E6%8C%87%E5%AE%9A%E9%95%BF%E5%BA%A6%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"常见算法/S009-随机生成指定长度的字符串.md"}');export{m as comp,o as data};
