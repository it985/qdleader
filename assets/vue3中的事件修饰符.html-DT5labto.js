import{_ as l,c as i,b as a,d as p,a as t,o as c}from"./app-90N25QkG.js";const o={},r=t(`<h1 id="vue3-中常见的事件修饰符" tabindex="-1"><a class="header-anchor" href="#vue3-中常见的事件修饰符"><span>vue3 中常见的事件修饰符</span></a></h1><p>vue3中的事件修饰符跟vue2是一样的。。。我们在这再过一下常用的的吧</p><p>（１）. stop：阻止冒泡（通俗讲就是阻止事件向上级DOM元素传递）</p><p>.stop</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>div @click<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;doS&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`　</span>
<span class="line"></span>
<span class="line">（２）<span class="token punctuation">.</span> prevent：阻止默认事件的发生</span>
<span class="line"></span>
<span class="line">　　默认事件指对<span class="token constant">DOM</span>的操作会引起自动执行的动作，比如点击超链接的时候会进行页面的跳转，点击表单提交按钮时会重新加载页面等，使用<span class="token string">&quot;.prevent&quot;</span>修饰符可以阻止这些事件的发生。</span>
<span class="line"></span>
<span class="line">（３）<span class="token punctuation">.</span> capture：捕获冒泡，即有冒泡发生时，有该修饰符的dom元素会先执行，如果有多个，从外到内依次执行，然后再按自然顺序执行触发的事件。</span>
<span class="line"></span>
<span class="line">　　　</span>
<span class="line">（４）<span class="token punctuation">.</span> self：将事件绑定到自身，只有自身才能触发，通常用于避免冒泡事件的影响</span>
<span class="line"></span>
<span class="line">             </span>
<span class="line"></span>
<span class="line"></span>
<span class="line">（５）<span class="token punctuation">.</span> once：设置事件只能触发一次，比如按钮的点击等。</span>
<span class="line"></span>
<span class="line">（６）<span class="token punctuation">.</span> passive：该修饰符大概意思用于对<span class="token constant">DOM</span>的默认事件进行性能优化，根据官网的例子比如超出最大范围的滚动条滚动的。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=a("p",null,"（7）. native：在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的HTML标签，不加'. native'事件是无法触 发的。",-1);function u(s,n){return c(),i("div",null,[r,a("div",{onScrollPassive:n[0]||(n[0]=(...e)=>s.doS&&s.doS(...e))},null,32),p(" ``` "),d])}const m=l(o,[["render",u],["__file","vue3中的事件修饰符.html.vue"]]),b=JSON.parse('{"path":"/vue3/vue3%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6.html","title":"vue3 中常见的事件修饰符","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue3/vue3中的事件修饰符.md"}');export{m as comp,b as data};
