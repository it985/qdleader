import{_ as e,c as n,o as s,a}from"./app-90N25QkG.js";const i={},l=a(`<h2 id="_1-单文件组件文件的大小写" tabindex="-1"><a class="header-anchor" href="#_1-单文件组件文件的大小写"><span>1.单文件组件文件的大小写</span></a></h2><blockquote><p>单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。我们推荐大写开头</p></blockquote><h3 id="bad" tabindex="-1"><a class="header-anchor" href="#bad"><span>bad:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-mycomponent.vue </span>
<span class="line"></span>
<span class="line">components/</span>
<span class="line">|-myComponent.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good" tabindex="-1"><a class="header-anchor" href="#good"><span>good:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-MyComponent.vue </span>
<span class="line"></span>
<span class="line">components/</span>
<span class="line">|-my-component.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基础组件命名" tabindex="-1"><a class="header-anchor" href="#_2-基础组件命名"><span>2.基础组件命名</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="bad-1" tabindex="-1"><a class="header-anchor" href="#bad-1"><span>bad:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-MyButton.vue </span>
<span class="line">|-VueTable.vue </span>
<span class="line">|-Icon.vue </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-1" tabindex="-1"><a class="header-anchor" href="#good-1"><span>good:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-BaseButton.vue </span>
<span class="line">|-BaseTable.vue </span>
<span class="line">|-BaseIcon.vue </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">components/</span>
<span class="line">|-AppButton.vue </span>
<span class="line">|-AppTable.vue </span>
<span class="line">|-AppIcon.vue </span>
<span class="line"></span>
<span class="line">components/</span>
<span class="line">|-VButton.vue </span>
<span class="line">|-VTable.vue </span>
<span class="line">|-VIcon.vue </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-单例组件名" tabindex="-1"><a class="header-anchor" href="#_3-单例组件名"><span>3.单例组件名</span></a></h2><p>只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。</p><h3 id="bad-2" tabindex="-1"><a class="header-anchor" href="#bad-2"><span>bad:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-Heading.vue </span>
<span class="line">|-MySidebar.vue </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-2" tabindex="-1"><a class="header-anchor" href="#good-2"><span>good:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-TheHeading.vue </span>
<span class="line">|-TheSidebar.vue </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="紧密耦合的组件名强烈推荐" tabindex="-1"><a class="header-anchor" href="#紧密耦合的组件名强烈推荐"><span>紧密耦合的组件名强烈推荐</span></a></h2><p>和父组件紧密耦合的子组件应该以父组件名作为前缀命名。</p><p>如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起</p><h3 id="bad-3" tabindex="-1"><a class="header-anchor" href="#bad-3"><span>bad:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-ShopList.vue </span>
<span class="line">|-ShopItem.vue </span>
<span class="line">|-ShopButton.vue </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">components/</span>
<span class="line">|-SearchSidebar.vue </span>
<span class="line">|-NavigationForSearchSidebar.vue </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-3" tabindex="-1"><a class="header-anchor" href="#good-3"><span>good:</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">components/</span>
<span class="line">|-ShopList.vue </span>
<span class="line">|-ShopListItem.vue </span>
<span class="line">|-ShopListItemButton.vue </span>
<span class="line"></span>
<span class="line">components/</span>
<span class="line">|-SearchSidebar.vue </span>
<span class="line">|-SearchSidebarNavigation.vue </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="模板中的组件名大小写" tabindex="-1"><a class="header-anchor" href="#模板中的组件名大小写"><span>模板中的组件名大小写</span></a></h1><h2 id="good-4" tabindex="-1"><a class="header-anchor" href="#good-4"><span>good</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Vue.component(&#39;MyComponent&#39;, {</span>
<span class="line">  // ...</span>
<span class="line">})</span>
<span class="line">import MyComponent from &#39;./MyComponent.vue&#39;</span>
<span class="line">export default {</span>
<span class="line">  name: &#39;MyComponent&#39;,</span>
<span class="line">  // ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在template 中可以</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">好例子</span>
<span class="line">&lt;MyComponent/&gt;</span>
<span class="line"></span>
<span class="line">&lt;my-component&gt;&lt;/my-component&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prop-名大小写强烈推荐" tabindex="-1"><a class="header-anchor" href="#prop-名大小写强烈推荐"><span>Prop 名大小写强烈推荐</span></a></h2><p>在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。</p><p>我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。</p><h3 id="bad-4" tabindex="-1"><a class="header-anchor" href="#bad-4"><span>bad</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">props: {</span>
<span class="line">  &#39;greeting-text&#39;: String</span>
<span class="line">}</span>
<span class="line">&lt;WelcomeMessage greetingText=&quot;hi&quot;/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="good-5" tabindex="-1"><a class="header-anchor" href="#good-5"><span>good</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">props: {</span>
<span class="line">  greetingText: String</span>
<span class="line">}</span>
<span class="line">&lt;WelcomeMessage greeting-text=&quot;hi&quot;/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),d=[l];function t(c,r){return s(),n("div",null,d)}const v=e(i,[["render",t],["__file","vue规范之组件命名篇.html.vue"]]),o=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E8%A7%84%E8%8C%83/vue%E8%A7%84%E8%8C%83%E4%B9%8B%E7%BB%84%E4%BB%B6%E5%91%BD%E5%90%8D%E7%AF%87.html","title":"模板中的组件名大小写","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.单文件组件文件的大小写","slug":"_1-单文件组件文件的大小写","link":"#_1-单文件组件文件的大小写","children":[{"level":3,"title":"bad:","slug":"bad","link":"#bad","children":[]},{"level":3,"title":"good:","slug":"good","link":"#good","children":[]}]},{"level":2,"title":"2.基础组件命名","slug":"_2-基础组件命名","link":"#_2-基础组件命名","children":[{"level":3,"title":"bad:","slug":"bad-1","link":"#bad-1","children":[]},{"level":3,"title":"good:","slug":"good-1","link":"#good-1","children":[]}]},{"level":2,"title":"3.单例组件名","slug":"_3-单例组件名","link":"#_3-单例组件名","children":[{"level":3,"title":"bad:","slug":"bad-2","link":"#bad-2","children":[]},{"level":3,"title":"good:","slug":"good-2","link":"#good-2","children":[]}]},{"level":2,"title":"紧密耦合的组件名强烈推荐","slug":"紧密耦合的组件名强烈推荐","link":"#紧密耦合的组件名强烈推荐","children":[{"level":3,"title":"bad:","slug":"bad-3","link":"#bad-3","children":[]},{"level":3,"title":"good:","slug":"good-3","link":"#good-3","children":[]}]},{"level":2,"title":"good","slug":"good-4","link":"#good-4","children":[]},{"level":2,"title":"Prop 名大小写强烈推荐","slug":"prop-名大小写强烈推荐","link":"#prop-名大小写强烈推荐","children":[{"level":3,"title":"bad","slug":"bad-4","link":"#bad-4","children":[]},{"level":3,"title":"good","slug":"good-5","link":"#good-5","children":[]}]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端规范/vue规范之组件命名篇.md"}');export{v as comp,o as data};
