import{_ as s,c as n,o as a,a as l}from"./app-90N25QkG.js";const e={},i=l(`<h1 id="css-module的global用法" tabindex="-1"><a class="header-anchor" href="#css-module的global用法"><span>css Module的global用法</span></a></h1><p>css Module的global用法</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"></span>
<span class="line">&lt;div className=<span class="token string">&quot;noDisplay&quot;</span>&gt;1111&lt;/div&gt;</span>
<span class="line"><span class="token comment">/* .playing 会被提升为全局样式 */</span></span>
<span class="line">  <span class="token selector">:global(.noDisplay)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  </span>
<span class="line"><span class="token selector">&lt;div className=</span><span class="token punctuation">{</span>styles.noDisplay<span class="token punctuation">}</span>&gt;1111&lt;/div&gt;</span>
<span class="line">  <span class="token comment">/* .playing仍未局部样式，rotate确不会被加上hash */</span></span>
<span class="line">  <span class="token selector">.noDisplay :global</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[i];function t(p,o){return a(),n("div",null,c)}const r=s(e,[["render",t],["__file","css Module的global用法.html.vue"]]),u=JSON.parse('{"path":"/react/css%20Module%E7%9A%84global%E7%94%A8%E6%B3%95.html","title":"css Module的global用法","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"react/css Module的global用法.md"}');export{r as comp,u as data};
