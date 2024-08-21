import{_ as n,c as s,o as a,a as i}from"./app-90N25QkG.js";const l={},e=i(`<p>斐波那契数列，又称黄金分割数列，指的是0 1 1 2 3 5 8 13 21</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">function getFibonacci(n) {</span>
<span class="line">	var fibarr = [];</span>
<span class="line">	var i = 0;</span>
<span class="line">	while(i &lt; n) {</span>
<span class="line">		if(i &lt;= 1) {</span>
<span class="line">			fibarr.push(i)</span>
<span class="line">		} else {</span>
<span class="line">			fibarr.push(fibarr[i-1] + fibarr[i-2])</span>
<span class="line">		}</span>
<span class="line">		i ++;</span>
<span class="line">	}</span>
<span class="line">	return fibarr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#具体实现：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">var canvas = document.querySelector(&#39;canvas&#39;);</span>
<span class="line"></span>
<span class="line">canvas.width = 600;</span>
<span class="line">canvas.height = 480;</span>
<span class="line"></span>
<span class="line">var coor = {</span>
<span class="line">  x: 300,</span>
<span class="line">  y: 240,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">var ctx = canvas.getContext(&#39;2d&#39;);</span>
<span class="line"></span>
<span class="line">function draw(r, n ,prevR) {</span>
<span class="line">   if(n&gt;2) {</span>
<span class="line">     switch(n%4) {</span>
<span class="line">      case 0 :</span>
<span class="line">        coor.y = coor.y - 5 * prevR;</span>
<span class="line">        coor.y = coor.y + 5 * r;</span>
<span class="line"></span>
<span class="line">        break;</span>
<span class="line">      case 1 :</span>
<span class="line">        coor.x = coor.x + 5 * prevR;</span>
<span class="line">        coor.x = coor.x - 5 * r;</span>
<span class="line">        break;</span>
<span class="line">      case 2 :</span>
<span class="line">        coor.y = coor.y + 5 * prevR;</span>
<span class="line">        coor.y = coor.y - 5 * r;</span>
<span class="line">        break;</span>
<span class="line">      case 3 :</span>
<span class="line">        coor.x = coor.x - 5 * prevR;</span>
<span class="line">        coor.x = coor.x + 5 * r;</span>
<span class="line">        break;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  ctx.beginPath();</span>
<span class="line">  ctx.arc(coor.x,coor.y,5*r,Math.PI*0.5*(n),Math.PI*0.5*(n-1),true);</span>
<span class="line">  if(n&gt;1) {</span>
<span class="line">     switch(n%4) {</span>
<span class="line">      case 0 :</span>
<span class="line">        ctx.moveTo(coor.x - 5*r,coor.y);</span>
<span class="line"></span>
<span class="line">        break;</span>
<span class="line">      case 1 :</span>
<span class="line">        ctx.moveTo(coor.x,coor.y + 5*r);</span>
<span class="line">        break;</span>
<span class="line">      case 2 :</span>
<span class="line">       ctx.moveTo(coor.x + 5*r,coor.y);</span>
<span class="line">        break;</span>
<span class="line">      case 3 :</span>
<span class="line">        ctx.moveTo(coor.x,coor.y-5*r);</span>
<span class="line">        break;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  ctx.lineWidth = 1;</span>
<span class="line">  ctx.strokeStyle = &#39;#fff&#39;;</span>
<span class="line">  ctx.stroke();</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">function getFibonacci(n) {</span>
<span class="line">  var fibarr = [];</span>
<span class="line">  var i = 0;</span>
<span class="line">  while(i&lt;n) {</span>
<span class="line">    if(i&lt;=1) {</span>
<span class="line">      fibarr.push(i);</span>
<span class="line">    }else{</span>
<span class="line">      fibarr.push(fibarr[i-1] + fibarr[i-2])</span>
<span class="line">    }</span>
<span class="line">    i++;</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  return fibarr;</span>
<span class="line">}</span>
<span class="line">var data = getFibonacci(10);</span>
<span class="line"></span>
<span class="line">for(var i = 0,l=data.length;i&lt;l;i++) {</span>
<span class="line">  if(data[i]!=0) {</span>
<span class="line">    draw(data[i],i,data[i-1]);</span>
<span class="line">    </span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function d(r,v){return a(),s("div",null,c)}const t=n(l,[["render",d],["__file","S007-使用canvas绘制一个有限度的斐波那契数列的曲线.html.vue"]]),b=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S007-%E4%BD%BF%E7%94%A8canvas%E7%BB%98%E5%88%B6%E4%B8%80%E4%B8%AA%E6%9C%89%E9%99%90%E5%BA%A6%E7%9A%84%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97%E7%9A%84%E6%9B%B2%E7%BA%BF.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"常见算法/S007-使用canvas绘制一个有限度的斐波那契数列的曲线.md"}');export{t as comp,b as data};
