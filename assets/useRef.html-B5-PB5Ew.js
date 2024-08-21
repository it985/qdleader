import{_ as s,c as n,o as a,a as e}from"./app-90N25QkG.js";const t={},p=e(`<h1 id="useref" tabindex="-1"><a class="header-anchor" href="#useref"><span>useRef</span></a></h1><p>useRef 获取dom</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> testRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> h1Ref <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>testRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h1Ref<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>TestC ref<span class="token operator">=</span><span class="token punctuation">{</span>testRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span>h1 ref<span class="token operator">=</span><span class="token punctuation">{</span>h1Ref<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token keyword">this</span> is h1<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return a(),n("div",null,o)}const r=s(t,[["render",c],["__file","useRef.html.vue"]]),k=JSON.parse('{"path":"/react/hooks/%E5%9F%BA%E7%A1%80%E7%B1%BB/useRef.html","title":"useRef","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"react/hooks/基础类/useRef.md"}');export{r as comp,k as data};
