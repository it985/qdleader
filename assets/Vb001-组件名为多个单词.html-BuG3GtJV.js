import{_ as n,c as s,o as a,a as e}from"./app-90N25QkG.js";const l={},i=e(`<h1 id="vb001-组件名为多个单词" tabindex="-1"><a class="header-anchor" href="#vb001-组件名为多个单词"><span>Vb001-组件名为多个单词</span></a></h1><h3 id="组件的命名为多个单词" tabindex="-1"><a class="header-anchor" href="#组件的命名为多个单词"><span>组件的命名为多个单词</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">#组件名应该始终是多个单词的，根组件 App 以及 <span class="token operator">&lt;</span>transition<span class="token operator">&gt;</span>、<span class="token operator">&lt;</span>component<span class="token operator">&gt;</span> 之类的 Vue 内置组件除外。</span>
<span class="line">这样避免和html元素冲突。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">bad eg：</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;ToDo&#39;</span></span>
<span class="line">	<span class="token comment">//..</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">good eg<span class="token operator">:</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo-item&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//..</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;TodoItem&#39;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token comment">//..</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">我认为驼峰方式 效果最好，因为大多数<span class="token constant">IDE</span>自动完成功能都支持它。</span>
<span class="line"></span>
<span class="line">bad</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">mycomponent<span class="token punctuation">.</span>vue</span>
<span class="line">myComponent<span class="token punctuation">.</span>vue</span>
<span class="line">Mycomponent<span class="token punctuation">.</span>vue</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">good</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">MyComponent<span class="token punctuation">.</span>vue</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[i];function c(t,o){return a(),s("div",null,p)}const r=n(l,[["render",c],["__file","Vb001-组件名为多个单词.html.vue"]]),u=JSON.parse('{"path":"/vue/vue%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/Vb001-%E7%BB%84%E4%BB%B6%E5%90%8D%E4%B8%BA%E5%A4%9A%E4%B8%AA%E5%8D%95%E8%AF%8D.html","title":"Vb001-组件名为多个单词","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"组件的命名为多个单词","slug":"组件的命名为多个单词","link":"#组件的命名为多个单词","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue/vue最佳实践/Vb001-组件名为多个单词.md"}');export{r as comp,u as data};
