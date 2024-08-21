import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const t={},l=e(`<h1 id="es11-matchall" tabindex="-1"><a class="header-anchor" href="#es11-matchall"><span>ES11-matchAll</span></a></h1><p>matchAll</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[0-3]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">&#39;2020&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>data<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 0: [&quot;2&quot;, index: 0, input: &quot;2020&quot;, groups: undefined]</span>
<span class="line"> * 1: [&quot;0&quot;, index: 1, input: &quot;2020&quot;, groups: undefined]</span>
<span class="line"> * 2: [&quot;2&quot;, index: 2, input: &quot;2020&quot;, groups: undefined]</span>
<span class="line"> * 3: [&quot;0&quot;, index: 3, input: &quot;2020&quot;, groups: undefined]</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[l];function i(c,o){return a(),s("div",null,p)}const d=n(t,[["render",i],["__file","ES11-matchAll.html.vue"]]),r=JSON.parse('{"path":"/es6/%E8%BE%83%E5%86%B7%E9%97%A8/ES11-matchAll.html","title":"ES11-matchAll","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"es6/较冷门/ES11-matchAll.md"}');export{d as comp,r as data};
