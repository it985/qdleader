import{_ as e,c as n,o as s,a}from"./app-90N25QkG.js";const t={},i=a(`<p>S005-冒泡排序</p><p>冒泡排序就是依次比较大小，小的大的进行位置上的交换。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function bubbleSort(arr) {</span>
<span class="line">	for(let i = 0; i &lt; arr.length - 1; i ++) {</span>
<span class="line">		for(let j = i + 1; j &lt; arr.length; j ++) {</span>
<span class="line">			if(arr[i] &gt; arr[j]) {</span>
<span class="line">				let tem = arr[i];</span>
<span class="line">				arr[i] = arr[j];</span>
<span class="line">				arr[j] = tem;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>module.exports = bubbleSort;</p>`,4),l=[i];function r(c,d){return s(),n("div",null,l)}const m=e(t,[["render",r],["__file","S005-冒泡排序.html.vue"]]),o=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S005-%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"常见算法/S005-冒泡排序.md"}');export{m as comp,o as data};
