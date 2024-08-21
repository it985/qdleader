import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const i={},l=e(`<h1 id="去掉一组整型数组的重复值" tabindex="-1"><a class="header-anchor" href="#去掉一组整型数组的重复值"><span>去掉一组整型数组的重复值</span></a></h1><p>输入： [1,2,3,12,1,14,3]</p><p>输出： [1,2,3,12,14]</p><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1"><span>方法1：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">let unique = function(arr) {</span>
<span class="line">	let hashTable = {};</span>
<span class="line">	let data = [];</span>
<span class="line">	for(let i = 0 ; i &lt; arr.length; i ++) {</span>
<span class="line">		if(!hashTable[arr[i]]) {</span>
<span class="line">			hashTable[arr[i]] = true;</span>
<span class="line">			data.push(arr[i]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return data;</span>
<span class="line">}</span>
<span class="line">module.exports = unique;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function unique (arr) {</span>
<span class="line">  return Array.from(new Set(arr))</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">或简写为：</span>
<span class="line">[...new Set(arr)] </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法3" tabindex="-1"><a class="header-anchor" href="#方法3"><span>方法3</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function unique(arr){            </span>
<span class="line">        for(var i=0; i&lt;arr.length; i++){</span>
<span class="line">            for(var j=i+1; j&lt;arr.length; j++){</span>
<span class="line">                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个</span>
<span class="line">                    arr.splice(j,1);</span>
<span class="line">                    j--;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法4" tabindex="-1"><a class="header-anchor" href="#方法4"><span>方法4：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function unique(arr) {</span>
<span class="line">    if (!Array.isArray(arr)) {</span>
<span class="line">        console.log(&#39;type error!&#39;)</span>
<span class="line">        return</span>
<span class="line">    }</span>
<span class="line">    var array = [];</span>
<span class="line">    for (var i = 0; i &lt; arr.length; i++) {</span>
<span class="line">        if (array .indexOf(arr[i]) === -1) {</span>
<span class="line">            array .push(arr[i])</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return array;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[l];function d(t,c){return a(),s("div",null,r)}const v=n(i,[["render",d],["__file","S002-去掉一组整型数组的重复值.html.vue"]]),u=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S002-%E5%8E%BB%E6%8E%89%E4%B8%80%E7%BB%84%E6%95%B4%E5%9E%8B%E6%95%B0%E7%BB%84%E7%9A%84%E9%87%8D%E5%A4%8D%E5%80%BC.html","title":"去掉一组整型数组的重复值","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"方法1：","slug":"方法1","link":"#方法1","children":[]},{"level":2,"title":"方法二：","slug":"方法二","link":"#方法二","children":[]},{"level":2,"title":"方法3","slug":"方法3","link":"#方法3","children":[]},{"level":2,"title":"方法4：","slug":"方法4","link":"#方法4","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"常见算法/S002-去掉一组整型数组的重复值.md"}');export{v as comp,u as data};
