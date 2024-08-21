import{_ as s,c as n,o as a,a as e}from"./app-90N25QkG.js";const p={},t=e(`<h1 id="vb003-v-for要加key" tabindex="-1"><a class="header-anchor" href="#vb003-v-for要加key"><span>Vb003-v-for要加key</span></a></h1><p>#为 v-for 设置key</p><p>以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为。</p><p>bad</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;todo in todos&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token punctuation">{</span> todo<span class="token punctuation">.</span>text <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>good</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>li</span>
<span class="line">    v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;todo in todos&quot;</span></span>
<span class="line">    <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;todo.id&quot;</span></span>
<span class="line">  <span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token punctuation">{</span> todo<span class="token punctuation">.</span>text <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line"><span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;学习使用 v-for&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;学习使用 key&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完待续。。</p>`,8),o=[t];function l(i,c){return a(),n("div",null,o)}const u=s(p,[["render",l],["__file","Vb003-v-for要加key.html.vue"]]),d=JSON.parse('{"path":"/vue/vue%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/Vb003-v-for%E8%A6%81%E5%8A%A0key.html","title":"Vb003-v-for要加key","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue/vue最佳实践/Vb003-v-for要加key.md"}');export{u as comp,d as data};
