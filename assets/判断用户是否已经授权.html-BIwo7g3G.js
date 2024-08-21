import{_ as n,c as s,o as a,a as p}from"./app-90N25QkG.js";const t={},e=p(`<h1 id="判断用户是否已经授权" tabindex="-1"><a class="header-anchor" href="#判断用户是否已经授权"><span>判断用户是否已经授权</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//查看是否授权</span></span>
<span class="line">         wx<span class="token punctuation">.</span><span class="token function">getSetting</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">           <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">             <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>authSetting<span class="token punctuation">[</span><span class="token string">&#39;scope.userInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">               console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;用户授权了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">               console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                     wx<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                         <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;用户授权信息&quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span></span>
<span class="line">                         app<span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> res<span class="token punctuation">.</span>userInfo</span>
<span class="line">                         <span class="token comment">//业务代码</span></span>
<span class="line">                         <span class="token punctuation">}</span></span>
<span class="line">                     <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">             <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token comment">//用户没有授权</span></span>
<span class="line">               console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;用户没有授权&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">             <span class="token punctuation">}</span></span>
<span class="line">             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;res.authSetting&quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">.</span>authSetting<span class="token punctuation">)</span></span>
<span class="line">             <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>authSetting<span class="token punctuation">[</span><span class="token string">&#39;scope.userLocation&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;用户已经授权地理位置&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">               <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;用户没有授权地理位置&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">             <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token comment">// 授权结束</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return a(),s("div",null,c)}const k=n(t,[["render",o],["__file","判断用户是否已经授权.html.vue"]]),r=JSON.parse('{"path":"/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%88%A4%E6%96%AD%E7%94%A8%E6%88%B7%E6%98%AF%E5%90%A6%E5%B7%B2%E7%BB%8F%E6%8E%88%E6%9D%83.html","title":"判断用户是否已经授权","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"微信小程序/判断用户是否已经授权.md"}');export{k as comp,r as data};
