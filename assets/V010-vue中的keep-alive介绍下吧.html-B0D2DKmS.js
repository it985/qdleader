import{_ as e,c as a,o as n,a as s}from"./app-90N25QkG.js";const l={},i=s(`<h1 id="v010-vue中的keep-alive介绍下吧" tabindex="-1"><a class="header-anchor" href="#v010-vue中的keep-alive介绍下吧"><span>V010-vue中的keep-alive介绍下吧</span></a></h1><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景：</span></a></h2><blockquote><p>如果需要频繁切换路由，这个时候就可以考虑用keep-alive了，来达到避免数据的重复请求的目的</p></blockquote><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用：</span></a></h2><blockquote><p>keep-alive用来缓存组件,避免多次加载相应的组件,减少性能消耗。 简单一点来说就是从页面A链接到其他页面后回退到页面A不用在重新执行页面A的created生命周期的代码，只会从缓存中加载之前已经缓存的页面A</p></blockquote><h2 id="几个参数" tabindex="-1"><a class="header-anchor" href="#几个参数"><span>几个参数：</span></a></h2><blockquote><p>Props include - 字符串或正则表达式。只有名称匹配的组件会被缓存。 exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。 max - 数字。最多可以缓存多少组件实例。</p></blockquote><p>一、用法介绍 keep-alive是一个内置组件和类似 keep-alive组件提供了include与exclude两个属性来允许组件有条件地进行缓存，二者都可以用逗号分隔字符串、正则表达式或一个数组来表示 keep-alive提供了两个生命钩子，分别是activated与deactivated。因为keep-alive会将组件保存在内存中，并不会销毁以及重新创建，所以不会重新调用组件的created等方法，需要用activated与deactivated这两个生命钩子来得知当前组件是否处于活动状态。 第一次为调取缓存的加载顺序，开启了keep-alive后，当再次进入（前进或者后退）时，只触发activated，退出时触发deactivated。 beforeCreate-&gt;created-&gt;beforeMount-&gt; mounted-&gt; activated</p><h2 id="如何使用呢" tabindex="-1"><a class="header-anchor" href="#如何使用呢"><span>如何使用呢？</span></a></h2><p>使用router. meta属性</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//router.js文件路由设置</span>
<span class="line">{</span>
<span class="line">    path: &#39;/keep_alive_test&#39;,</span>
<span class="line">    component: () =&gt; import(&#39;@/views/keepAliveTest.vue&#39;),</span>
<span class="line">    meta: {</span>
<span class="line">        title: &#39;keepAlive测试&#39;,</span>
<span class="line">        keepAlive: true//使用（通过路由meta的keepAlive属性决定那个页面使用缓存）</span>
<span class="line">    }</span>
<span class="line">},</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//App.vue文件</span>
<span class="line">	&lt;keep-alive :include=&quot;&#39;componentA&#39;&quot;&gt;</span>
<span class="line">		&lt;router-view v-if=&quot;$route.meta.keepAlive&quot;/&gt;</span>
<span class="line">	&lt;/keep-alive&gt;</span>
<span class="line">	&lt;router-view v-if=&quot;!$route.meta.keepAlive&quot;/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用include，exclude属性（不需要设置路由，需要设置组件名字，这里组件名字非路由组件名而是定义组件的名称）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//App.vue文件</span>
<span class="line">&lt;keep-alive :include=&quot;pages&quot; exclude=&quot;componentB&quot;&gt;</span>
<span class="line">	&lt;router-view/&gt;</span>
<span class="line">&lt;/keep-alive&gt;</span>
<span class="line">data () {</span>
<span class="line">	return {</span>
<span class="line">		pages: [&#39;componentA&#39;, &#39;componentC&#39;]</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//这里的component组件内容就会被缓存,name为componentA\\componentC的组件将会被缓存。name为componentB的组件将不会被缓存。 //!!!!include和exclude的组件名字必须是组件定义的name</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><blockquote><p>keep-alive组件使用针对的是页面组件！！！！ 使用keep-alive 的组件不会再次触发created钩子函数 使用keep-alive，调用 $destory() 需要谨慎，否则页面不再被缓存 include 和exclude的组件名字必须是组件定义的name，而不是路由里面定义的名字</p></blockquote><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结：</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">用了这个组件后就没有组件就没有created生命周期了。</span>
<span class="line"></span>
<span class="line">vue可以使用keep-alive包裹一个动态路由组件，包裹之后，动态组件的状态会被缓存。如果使用动态组件渲染的某个组件使用了created生命周期请求数据，那么下次进入该组件不会再次请求数据。</span>
<span class="line"></span>
<span class="line">因为keep-alive之后，所有的动态组件都会被缓存，被缓存之后的组件再次进入就不会执行created，如果想要每次进入数据都有更新或是更新操作，就应该使用activated生命周期来代替created。</span>
<span class="line"></span>
<span class="line">router的生命周期不受keep-alive的影响。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[i];function d(c,p){return n(),a("div",null,t)}const v=e(l,[["render",d],["__file","V010-vue中的keep-alive介绍下吧.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V010-vue%E4%B8%AD%E7%9A%84keep-alive%E4%BB%8B%E7%BB%8D%E4%B8%8B%E5%90%A7.html","title":"V010-vue中的keep-alive介绍下吧","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用场景：","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"作用：","slug":"作用","link":"#作用","children":[]},{"level":2,"title":"几个参数：","slug":"几个参数","link":"#几个参数","children":[]},{"level":2,"title":"如何使用呢？","slug":"如何使用呢","link":"#如何使用呢","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/vue篇/V010-vue中的keep-alive介绍下吧.md"}');export{v as comp,u as data};
