import{_ as n,c as s,o as e,a}from"./app-90N25QkG.js";const i={},l=a(`<h1 id="_011-vue生命周期的钩子如何实现的" tabindex="-1"><a class="header-anchor" href="#_011-vue生命周期的钩子如何实现的"><span>011-vue生命周期的钩子如何实现的</span></a></h1><h2 id="生命周期钩子是如何实现的" tabindex="-1"><a class="header-anchor" href="#生命周期钩子是如何实现的"><span>生命周期钩子是如何实现的</span></a></h2><p>Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的的生命周期钩子订阅好（内部采用数组的方式存储）然后在创建组件实例的过程中会一次执行对应的钩子方法（发布） 相关代码如下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export function callHook(vm, hook) {</span>
<span class="line">  // 依次执行生命周期对应的方法</span>
<span class="line">  const handlers = vm.$options[hook];</span>
<span class="line">  if (handlers) {</span>
<span class="line">    for (let i = 0; i &lt; handlers.length; i++) {</span>
<span class="line">      handlers[i].call(vm); //生命周期里面的this指向当前实例</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 调用的时候</span>
<span class="line">Vue.prototype._init = function (options) {</span>
<span class="line">  const vm = this;</span>
<span class="line">  vm.$options = mergeOptions(vm.constructor.options, options);</span>
<span class="line">  callHook(vm, &quot;beforeCreate&quot;); //初始化数据之前</span>
<span class="line">  // 初始化状态</span>
<span class="line">  initState(vm);</span>
<span class="line">  callHook(vm, &quot;created&quot;); //初始化数据之后</span>
<span class="line">  if (vm.$options.el) {</span>
<span class="line">    vm.$mount(vm.$options.el);</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(d,p){return e(),s("div",null,t)}const v=n(i,[["render",c],["__file","011-vue生命周期的钩子如何实现的.html.vue"]]),o=JSON.parse('{"path":"/vue/011-vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E9%92%A9%E5%AD%90%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%9A%84.html","title":"011-vue生命周期的钩子如何实现的","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"生命周期钩子是如何实现的","slug":"生命周期钩子是如何实现的","link":"#生命周期钩子是如何实现的","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue/011-vue生命周期的钩子如何实现的.md"}');export{v as comp,o as data};
