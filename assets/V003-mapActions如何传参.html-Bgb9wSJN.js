import{_ as s,c as n,o as a,a as e}from"./app-90N25QkG.js";const i={},l=e(`<h1 id="v003-mapactions如何传参" tabindex="-1"><a class="header-anchor" href="#v003-mapactions如何传参"><span>V003-mapActions如何传参</span></a></h1><p>mapActions如何传参</p><p>调用页面</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">methods:{</span>
<span class="line">  ...mapActions([</span>
<span class="line">        &#39;programPop&#39;</span>
<span class="line">    ]),</span>
<span class="line">    doSomething() {</span>
<span class="line">      this.programPop(true)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vuex中</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">actions.js</span>
<span class="line"></span>
<span class="line">// 展示节目单(...mapAction 传参写方法, str即为传入的参数)</span>
<span class="line">  programPop:({</span>
<span class="line">      commit</span>
<span class="line">  },str) =&gt; {</span>
<span class="line">      commit(types.PROGRAMPOP,str)</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">mutations.js</span>
<span class="line"></span>
<span class="line">//展示节目列表</span>
<span class="line">    [PROGRAMPOP](state,str) {</span>
<span class="line">        console.log(123,state,str)</span>
<span class="line">        state.programPopShow = str</span>
<span class="line">    },</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他均无变化，参照V001即可</p>`,7),c=[l];function t(p,d){return a(),n("div",null,c)}const m=s(i,[["render",t],["__file","V003-mapActions如何传参.html.vue"]]),v=JSON.parse('{"path":"/vue/vuex/V003-mapActions%E5%A6%82%E4%BD%95%E4%BC%A0%E5%8F%82.html","title":"V003-mapActions如何传参","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue/vuex/V003-mapActions如何传参.md"}');export{m as comp,v as data};
