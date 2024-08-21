import{_ as s,c as n,o as a,a as e}from"./app-90N25QkG.js";const p={},t=e(`<h1 id="vb004-v-for与v-if不要用在一个标签上" tabindex="-1"><a class="header-anchor" href="#vb004-v-for与v-if不要用在一个标签上"><span>Vb004-v-for与v-if不要用在一个标签上</span></a></h1><p>vue-best</p><blockquote><p>为了过滤一个列表中的项目 (比如 v-for=&quot;user in users&quot; v-if=&quot;user.isActive&quot;)。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。</p></blockquote><blockquote><p>为了避免渲染本应该被隐藏的列表 (比如 v-for=&quot;user in users&quot; v-if=&quot;shouldShowUsers&quot;)。这种情形下，请将 v-if 移动至容器元素上 (比如 ul、ol)。</p></blockquote><p>当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，所以这个模板：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>li</span>
<span class="line">    v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;user in users&quot;</span></span>
<span class="line">    v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;user.isActive&quot;</span></span>
<span class="line">    <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;user.id&quot;</span></span>
<span class="line">  <span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token punctuation">{</span> user<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。</p><p>而我们处理后</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">activeUsers</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> user<span class="token punctuation">.</span>isActive</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>li</span>
<span class="line">    v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;user in activeUsers&quot;</span></span>
<span class="line">    <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;user.id&quot;</span></span>
<span class="line">  <span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token punctuation">{</span> user<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将会获得如下好处：</p><p>过滤后的列表只会在 users 数组发生相关变化时才被重新运算，过滤更高效。 使用 v-for=&quot;user in activeUsers&quot; 之后，我们在渲染的时候只遍历活跃用户，渲染更高效。 解耦渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。</p><p>另外</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>ul v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;shouldShowUsers&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>li</span>
<span class="line">    v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;user in users&quot;</span></span>
<span class="line">    <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;user.id&quot;</span></span>
<span class="line">  <span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token punctuation">{</span> user<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将 v-if 移动到容器元素，我们不会再对列表中的每个用户检查 shouldShowUsers。取而代之的是，我们只检查它一次， 且不会在 shouldShowUsers 为否的时候运算 v-for。</p>`,14),o=[t];function l(i,r){return a(),n("div",null,o)}const u=s(p,[["render",l],["__file","Vb004-v-for与v-if不要用在一个标签上.html.vue"]]),d=JSON.parse('{"path":"/vue/vue%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/Vb004-v-for%E4%B8%8Ev-if%E4%B8%8D%E8%A6%81%E7%94%A8%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%A0%87%E7%AD%BE%E4%B8%8A.html","title":"Vb004-v-for与v-if不要用在一个标签上","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue/vue最佳实践/Vb004-v-for与v-if不要用在一个标签上.md"}');export{u as comp,d as data};
