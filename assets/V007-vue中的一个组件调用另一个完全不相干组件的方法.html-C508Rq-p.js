import{_ as s,c as n,o as a,a as p}from"./app-90N25QkG.js";const e={},t=p(`<h1 id="一个组件调用你项目中任意一个组件的方法" tabindex="-1"><a class="header-anchor" href="#一个组件调用你项目中任意一个组件的方法"><span>一个组件调用你项目中任意一个组件的方法</span></a></h1><p>两个组件之间没有任何关系，没有相互引用。父子组件或兄弟组件的关系。</p><p>这个方法成了，可以实现组件的高度分离。</p><p>这里我提供给大家一个vue的一方法：</p><p>A 调用 B中的一个方法，A 与 B 没有任何关系。</p><p>思路是vuex中存一个属性，A 组件 调用commit方法改变这个属性， B 组件中获取这个属性，并监听，当监听到这个属性变化时候，即可调用要调的方法。</p><p>A 组件：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;doF&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">A</span>触发vuex属性的变化 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">     <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doF</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuex中：</p><p>mutations.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">DOF</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span></span>
<span class="line"><span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">&#39;./getters&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">commentDataShow</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//控制调用first-list中commentData方法</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//A触发dof后改变commentDataShow状态</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token constant">DOF</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        state<span class="token punctuation">.</span>commentDataShow <span class="token operator">=</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>commentDataShow</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	state<span class="token punctuation">,</span></span>
<span class="line">	mutations<span class="token punctuation">,</span></span>
<span class="line">	getters</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getters.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//调用第一层列表list</span></span>
<span class="line">    <span class="token function">commentDataShow</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> state<span class="token punctuation">.</span>commentDataShow</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> getters<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个展示的vuex中关键的代码，具体vuex使用可以看vuex那一篇文档。</p><p>B组件:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">           <span class="token literal-property property">commentDataShow</span><span class="token operator">:</span> <span class="token string">&quot;commentDataShow&quot;</span></span>
<span class="line">       <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">       <span class="token function">commentDataShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">           <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commentData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">       <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 要调用的方法 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">     <span class="token function">commentData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token comment">//doSomething</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样这个功能就实现了。</p><p>另外另一种情况，两个组件公用一个父组件，而两个子组件来回调方法呢？</p><p>除了上面这方法，我们也可以，在这个父组件中设置一个属性，一个组件改变这个属性，当父组件监听到属性变化了，就调用另一个子组件方法，也可以做到。</p>`,19),l=[t];function c(i,o){return a(),n("div",null,l)}const r=s(e,[["render",c],["__file","V007-vue中的一个组件调用另一个完全不相干组件的方法.html.vue"]]),d=JSON.parse('{"path":"/vue/V007-vue%E4%B8%AD%E7%9A%84%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E8%B0%83%E7%94%A8%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%AE%8C%E5%85%A8%E4%B8%8D%E7%9B%B8%E5%B9%B2%E7%BB%84%E4%BB%B6%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"一个组件调用你项目中任意一个组件的方法","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue/V007-vue中的一个组件调用另一个完全不相干组件的方法.md"}');export{r as comp,d as data};
