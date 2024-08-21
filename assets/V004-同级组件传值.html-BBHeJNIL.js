import{_ as s,c as n,o as e,a as i}from"./app-90N25QkG.js";const l={},a=i(`<h1 id="v004-同级组件传值" tabindex="-1"><a class="header-anchor" href="#v004-同级组件传值"><span>V004-同级组件传值</span></a></h1><p>1.如果是兄弟组件，可通过父元素作为中间组件进行传值</p><p>1.2 $emit传值，props接收</p><p>使用$emit将child1.vue的值给父组件，父组件将值传给child2.vue,child2.vue使用props接收</p><p>parent.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">     &lt;h2&gt;我是父组件&lt;/h2&gt;</span>
<span class="line">     &lt;child1 @handleClickChange=&quot;handleClickChangeTitle&quot;&gt;&lt;/child1&gt;</span>
<span class="line">     &lt;child2 :ptitle=&quot;title&quot;&gt;&lt;/child2&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">import child1 from &quot;child1&quot;;//文件地址</span>
<span class="line">import child2 from &quot;child2&quot;;//文件地址</span>
<span class="line">export default {</span>
<span class="line">  data() {</span>
<span class="line">    return {</span>
<span class="line">      title: &quot;&quot;</span>
<span class="line">    };</span>
<span class="line">  },</span>
<span class="line">  components: {</span>
<span class="line">    child1,</span>
<span class="line">    child2</span>
<span class="line">  },</span>
<span class="line">  methods: {</span>
<span class="line">    handleClickChangeTitle(title){//将改方法传递给child1组件</span>
<span class="line">        this.title = title</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>child1.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">     &lt;h2&gt;我是child1组件&lt;/h2&gt;</span>
<span class="line">     &lt;div&gt;</span>
<span class="line">     &lt;input type=&quot;text&quot;v-model=&quot;title&quot;/&gt;</span>
<span class="line">      &lt;button type=&quot;button&quot; @click=&quot;handleClickChangeTitle(title)&quot;&gt;更改title的值&lt;/button&gt;</span>
<span class="line">    &lt;div&gt;{{title}}&lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  data() {</span>
<span class="line">    return {</span>
<span class="line">      title: &quot;&quot;</span>
<span class="line">    };</span>
<span class="line">  },</span>
<span class="line">  methods: {</span>
<span class="line">    handleClickChangeTitle(title){</span>
<span class="line">        this.$emit(&quot;handleClickChange&quot;,title)//连接父组件的handleClickChange方法，同时将值传递给父组件</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>child2.vue</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;{{ptitle}}&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">//接收父组件穿过来的值ptitle</span>
<span class="line"> props:{ptitle:{ type: String}}</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.通过创建一个bus，进行传值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 创建一个文件，定义bus中间件，并导出</span>
<span class="line">const bus = new Vue()</span>
<span class="line">// 在一个组件中发送事件</span>
<span class="line">bus.$emit(&#39;事件名称&#39;, 传递的参数)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 在另一个组件中监听事件</span>
<span class="line">bus.$on(&#39;事件名称&#39;, 得到传过来的参数)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体使用： 在main.js同级目录下新建bus.js文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import Vue from &#39;vue&#39;</span>
<span class="line">export default new Vue()</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在组件a中传出值</p><p>先引入bus.js文件，再通过$emit传值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">	&lt;div @click=&quot;onfocus&quot;&gt;&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">    import Bus from &#39;@/bus.js&#39;</span>
<span class="line">    </span>
<span class="line">	export default{</span>
<span class="line">		methods:{</span>
<span class="line">	    	onfocus:function(fromid){</span>
<span class="line">		    	Bus.$emit(&#39;getisshow&#39;,{</span>
<span class="line">		    		show:true</span>
<span class="line">		    	})</span>
<span class="line">		     }</span>
<span class="line">	    }</span>
<span class="line">	}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在同级b组件中通过$on接收</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;script&gt;</span>
<span class="line">    import Bus from &#39;@/bus.js&#39;</span>
<span class="line">    </span>
<span class="line">	export default{</span>
<span class="line">		created(){</span>
<span class="line">			Bus.$on(&#39;getisshow&#39;,data =&gt; {</span>
<span class="line">				console.log(data)   //{show:true}</span>
<span class="line">			})</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[a];function d(p,c){return e(),n("div",null,t)}const r=s(l,[["render",d],["__file","V004-同级组件传值.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/V004-%E5%90%8C%E7%BA%A7%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC.html","title":"V004-同级组件传值","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/vue篇/V004-同级组件传值.md"}');export{r as comp,u as data};
