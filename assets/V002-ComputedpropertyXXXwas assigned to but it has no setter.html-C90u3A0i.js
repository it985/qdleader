import{_ as e,c as s,o as t,a}from"./app-90N25QkG.js";const n={},i=a(`<h1 id="v002-computedpropertyxxxwas-assigned-to-but-it-has-no-setter" tabindex="-1"><a class="header-anchor" href="#v002-computedpropertyxxxwas-assigned-to-but-it-has-no-setter"><span>V002-ComputedpropertyXXXwas assigned to but it has no setter</span></a></h1><p>Computed property &quot;XXX&quot; was assigned to but it has no setter</p><blockquote><p>001 中留了个小坑，有同学问，按照你的方法后，问啥报错了？ -&gt; . -&gt; 虽然不影响使用，报错也不行呀。</p></blockquote><p>#分析原因： 1.组件中v-model=“XXX”，而XXX是vuex state中的某个变量 2.vuex中是单项流，v-model是vue中的双向绑定， 但是在computed中只通过get获取参数值，没有set无法改变参数值</p><p>#解决方法： ##方法1</p><blockquote><p>将v-model 改为 :value</p></blockquote><p>##方法2 在computed里面添加：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">computed:{</span>
<span class="line">    ...mapState({</span>
<span class="line">   	&lt;!-- cpShow:&#39;cpShow&#39; --&gt;</span>
<span class="line">    }),</span>
<span class="line">    &lt;!-- 上面这种获取只有get没有set，修改为下面方式 --&gt;</span>
<span class="line">    cpShow:{</span>
<span class="line">   	 get() {</span>
<span class="line">   		 return this.$store.state.cpShow;</span>
<span class="line">   	 },</span>
<span class="line">   	 set(val) {</span>
<span class="line">   		 this.$store.state.cpShow = val</span>
<span class="line">   	 }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[i];function p(o,d){return t(),s("div",null,l)}const c=e(n,[["render",p],["__file","V002-ComputedpropertyXXXwas assigned to but it has no setter.html.vue"]]),u=JSON.parse('{"path":"/vue/vuex/V002-ComputedpropertyXXXwas%20assigned%20to%20but%20it%20has%20no%20setter.html","title":"V002-ComputedpropertyXXXwas assigned to but it has no setter","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue/vuex/V002-ComputedpropertyXXXwas assigned to but it has no setter.md"}');export{c as comp,u as data};
