import{_ as s,c as n,o as a,a as e}from"./app-90N25QkG.js";const t={},p=e(`<h1 id="获取cascasder的选中值label" tabindex="-1"><a class="header-anchor" href="#获取cascasder的选中值label"><span>获取cascasder的选中值label</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>el<span class="token operator">-</span>cascader</span>
<span class="line">  ref<span class="token operator">=</span><span class="token string">&quot;refSubCat&quot;</span></span>
<span class="line">  v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;areas&quot;</span></span>
<span class="line">  placeholder<span class="token operator">=</span><span class="token string">&quot;选择地区筛选&quot;</span></span>
<span class="line">  <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;areaOpts&quot;</span></span>
<span class="line">  popper<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;select-pop&quot;</span></span>
<span class="line">  <span class="token operator">:</span>props<span class="token operator">=</span><span class="token string">&quot;{label: &#39;name&#39;, value: &#39;id&#39;}&quot;</span></span>
<span class="line">  change<span class="token operator">-</span>on<span class="token operator">-</span>select</span>
<span class="line">  @change<span class="token operator">=</span><span class="token string">&quot;areaChange&quot;</span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token function">areaChange</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;地区&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&quot;refSubCat&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getCheckedNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// this.$refs[&quot;refSubCat&quot;].getCheckedNodes() 里面可以找你需要的一切</p>`,3),l=[p];function o(c,i){return a(),n("div",null,l)}const u=s(t,[["render",o],["__file","获取cascasder的选中值label.html.vue"]]),d=JSON.parse('{"path":"/UI%E6%A1%86%E6%9E%B6/element/%E8%8E%B7%E5%8F%96cascasder%E7%9A%84%E9%80%89%E4%B8%AD%E5%80%BClabel.html","title":"获取cascasder的选中值label","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"UI框架/element/获取cascasder的选中值label.md"}');export{u as comp,d as data};
