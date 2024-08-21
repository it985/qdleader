import{_ as s,c as n,o as a,a as t}from"./app-90N25QkG.js";const p={},e=t(`<h1 id="c006-css实现三角形★-html" tabindex="-1"><a class="header-anchor" href="#c006-css实现三角形★-html"><span>C006-css实现三角形★.html</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html<span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token punctuation">.</span>trangle<span class="token operator">-</span>top <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">border</span><span class="token operator">:</span>50px solid transparent<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>bottom<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">.</span>trangle<span class="token operator">-</span>bottom <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">border</span><span class="token operator">:</span>50px solid transparent<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>top<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">.</span>trangle<span class="token operator">-</span>left <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">border</span><span class="token operator">:</span>50px solid transparent<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>right<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">				<span class="token punctuation">.</span>trangle<span class="token operator">-</span>right <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">border</span><span class="token operator">:</span>50px solid transparent<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>left<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">/* 	.tra-top {</span>
<span class="line">			width: 0;</span>
<span class="line">			height: 0;</span>
<span class="line">			border-left:50px solid red;</span>
<span class="line">			border-right:50px solid #333;</span>
<span class="line">			border-bottom:50px solid green;</span>
<span class="line">		} */</span></span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		<span class="token punctuation">.</span>tra<span class="token operator">-</span>left<span class="token operator">-</span>top <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>left<span class="token operator">:</span>50px solid red<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>right<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>bottom<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">				<span class="token punctuation">.</span>tra<span class="token operator">-</span>right<span class="token operator">-</span>top <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>left<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>right<span class="token operator">:</span>50px solid red<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>bottom<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">.</span>tra<span class="token operator">-</span>left<span class="token operator">-</span>bottom <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>left<span class="token operator">:</span>50px solid red<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>right<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>top<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">.</span>tra<span class="token operator">-</span>right<span class="token operator">-</span>bottom <span class="token punctuation">{</span></span>
<span class="line">			<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>left<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>right<span class="token operator">:</span>50px solid red<span class="token punctuation">;</span></span>
<span class="line">			border<span class="token operator">-</span>top<span class="token operator">:</span>50px solid #fff<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line">	<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 向上的三角形 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;trangle-top&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">	</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 向左的三角形 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;trangle-left&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">					<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 向下的三角形 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;trangle-bottom&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		</span>
<span class="line">				<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 向右的三角形 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;trangle-right&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 直角三角形 直角在左上<span class="token operator">--</span><span class="token operator">&gt;</span> </span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tra-left-top&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">				<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 直角三角形 直角在右上<span class="token operator">--</span><span class="token operator">&gt;</span> </span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tra-right-top&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">				<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 直角三角形 直角在左下<span class="token operator">--</span><span class="token operator">&gt;</span> </span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tra-left-bottom&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">				<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 直角三角形 直角在右下<span class="token operator">--</span><span class="token operator">&gt;</span> </span>
<span class="line">		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tra-right-bottom&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">			</span>
<span class="line">		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">		</span>
<span class="line">	<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function l(r,c){return a(),n("div",null,o)}const d=s(p,[["render",l],["__file","C006-css实现三角形★.html.vue"]]),k=JSON.parse('{"path":"/css3/C006-css%E5%AE%9E%E7%8E%B0%E4%B8%89%E8%A7%92%E5%BD%A2%E2%98%85.html","title":"C006-css实现三角形★.html","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"css3/C006-css实现三角形★.md"}');export{d as comp,k as data};
