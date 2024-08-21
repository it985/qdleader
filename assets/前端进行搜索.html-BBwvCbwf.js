import{_ as s,c as n,o as e,a as i}from"./app-90N25QkG.js";const a={},l=i(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/**</span>
<span class="line"> * @param {string} queryString 输入框输入的内容</span>
<span class="line"> * @param {Array} lists 要筛选的数组</span>
<span class="line"> * @param {string} str 要筛选的数组中要搜的对应的name</span>
<span class="line"> * @return {Array} 筛选完的数组</span>
<span class="line"> */</span>
<span class="line">// 公用的搜索数组方法</span>
<span class="line">export function querySearchPublic(queryString, lists, str) {</span>
<span class="line">  let results = lists</span>
<span class="line">  if (queryString != &quot;&quot;) {</span>
<span class="line">    results = queryString</span>
<span class="line">      ? lists.filter(createFilter(queryString, str))</span>
<span class="line">      : lists;</span>
<span class="line">  }</span>
<span class="line">  return results;</span>
<span class="line">}</span>
<span class="line">function createFilter(queryString, str) {</span>
<span class="line">  let con = [&quot;&quot;, ...queryString, &quot;&quot;].join(&quot;.*&quot;); //转化成正则格式的字符串</span>
<span class="line">  let reg = new RegExp(con); //正则</span>
<span class="line">  return (lists) =&gt; {</span>
<span class="line">    return reg.test(lists[str]);</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function r(c,d){return e(),n("div",null,t)}const u=s(a,[["render",r],["__file","前端进行搜索.html.vue"]]),v=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%89%8D%E7%AB%AF%E8%BF%9B%E8%A1%8C%E6%90%9C%E7%B4%A2.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端小tip/前端进行搜索.md"}');export{u as comp,v as data};
