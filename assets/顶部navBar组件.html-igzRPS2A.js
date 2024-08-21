import{_ as n,c as s,o as a,a as p}from"./app-90N25QkG.js";const t={},e=p(`<h1 id="顶部navbar组件" tabindex="-1"><a class="header-anchor" href="#顶部navbar组件"><span>顶部navbar组件</span></a></h1><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">BACK_IMG_BLACK</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/constants&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    type<span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// title</span></span>
<span class="line">  background<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    type<span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 背景色</span></span>
<span class="line">  imgIcon<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    type<span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token constant">BACK_IMG_BLACK</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 返回图标</span></span>
<span class="line">  isSelfBack<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 是否是自定义返回，（自定义返回的话，传入 clickBack）</span></span>
<span class="line">  isPageCanTop<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 页面是否到顶</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineEmits</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token string">&#39;clickBack&#39;</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取屏幕边界到安全区域距离</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> safeAreaInsets <span class="token punctuation">}</span> <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// console.log(11, uni.getSystemInfoSync());</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">goBack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>isSelfBack<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;clickBack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>view</span>
<span class="line">    <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pub-nav-safe-area&quot;</span></span>
<span class="line">    <span class="token operator">:</span>style<span class="token operator">=</span>&quot;<span class="token punctuation">{</span></span>
<span class="line">      paddingTop<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>safeAreaInsets<span class="token operator">?.</span>top<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">      display<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>isPageCanTop <span class="token operator">?</span> <span class="token string">&#39;none&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;block&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span>&quot;</span>
<span class="line">  <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>view</span>
<span class="line">    <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pub-nav&quot;</span></span>
<span class="line">    <span class="token operator">:</span>style<span class="token operator">=</span>&quot;<span class="token punctuation">{</span></span>
<span class="line">      paddingTop<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>safeAreaInsets<span class="token operator">?.</span>top<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">      background<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>background<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span>&quot;</span>
<span class="line">  <span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>image</span>
<span class="line">      <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pub-nav-img&quot;</span></span>
<span class="line">      <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;props.imgIcon&quot;</span></span>
<span class="line">      mode<span class="token operator">=</span><span class="token string">&quot;scaleToFill&quot;</span></span>
<span class="line">      <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;goBack&quot;</span></span>
<span class="line">    <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pub-nav-tittle&quot;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">.</span>pub<span class="token operator">-</span>nav <span class="token punctuation">{</span></span>
<span class="line">  position<span class="token operator">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">  left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">  width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">  height<span class="token operator">:</span> 88rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>pub<span class="token operator">-</span>nav<span class="token operator">-</span>img <span class="token punctuation">{</span></span>
<span class="line">  position<span class="token operator">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  left<span class="token operator">:</span> 8rpx<span class="token punctuation">;</span></span>
<span class="line">  bottom<span class="token operator">:</span> 0rpx<span class="token punctuation">;</span></span>
<span class="line">  padding<span class="token operator">:</span> 24rpx<span class="token punctuation">;</span></span>
<span class="line">  width<span class="token operator">:</span> 40rpx<span class="token punctuation">;</span></span>
<span class="line">  height<span class="token operator">:</span> 40rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>pub<span class="token operator">-</span>nav<span class="token operator">-</span>tittle <span class="token punctuation">{</span></span>
<span class="line">  width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">  line<span class="token operator">-</span>height<span class="token operator">:</span> 88rpx<span class="token punctuation">;</span></span>
<span class="line">  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>style<span class="token operator">:</span> normal<span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 32rpx<span class="token punctuation">;</span></span>
<span class="line">  color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span>pub<span class="token operator">-</span>nav<span class="token operator">-</span>safe<span class="token operator">-</span>area <span class="token punctuation">{</span></span>
<span class="line">  height<span class="token operator">:</span> 88rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function l(c,i){return a(),s("div",null,o)}const u=n(t,[["render",l],["__file","顶部navBar组件.html.vue"]]),k=JSON.parse('{"path":"/uniapp/%E7%BB%84%E4%BB%B6/%E9%A1%B6%E9%83%A8navBar%E7%BB%84%E4%BB%B6.html","title":"顶部navbar组件","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"uniapp/组件/顶部navBar组件.md"}');export{u as comp,k as data};
