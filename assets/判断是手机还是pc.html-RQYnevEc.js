import{_ as e,c as s,o as n,a}from"./app-90N25QkG.js";const i={},l=a(`<h1 id="判断是手机还是pc" tabindex="-1"><a class="header-anchor" href="#判断是手机还是pc"><span>判断是手机还是pc</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> //手机</span>
<span class="line">        _isMobile() {</span>
<span class="line">            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)</span>
<span class="line">            return flag;</span>
<span class="line">        }</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		if (this._isMobile()) {</span>
<span class="line">			// alert(&quot;手机端&quot;);</span>
<span class="line">		} else {</span>
<span class="line">			// alert(&quot;pc端&quot;);</span>
<span class="line">		}</span>
<span class="line">		\`\`\`</span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(r,d){return n(),s("div",null,t)}const o=e(i,[["render",c],["__file","判断是手机还是pc.html.vue"]]),m=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%88%A4%E6%96%AD%E6%98%AF%E6%89%8B%E6%9C%BA%E8%BF%98%E6%98%AFpc.html","title":"判断是手机还是pc","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端小tip/判断是手机还是pc.md"}');export{o as comp,m as data};
