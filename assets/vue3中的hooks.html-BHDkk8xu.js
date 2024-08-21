import{_ as n,c as s,o as e,a}from"./app-90N25QkG.js";const l={},i=a(`<h1 id="vue3中的hooks" tabindex="-1"><a class="header-anchor" href="#vue3中的hooks"><span>vue3中的hooks</span></a></h1><blockquote><p>将可复用功能抽离为外部JS文件</p></blockquote><blockquote><p>函数名/文件名以use开头，形如：useXX</p></blockquote><blockquote><p>引用时将响应式变量或者方法显式解构暴露出来如：const {nameRef，Fn} = useXX() （在setup函数解构出自定义hooks的变量和方法）</p></blockquote><h2 id="加法-hook" tabindex="-1"><a class="header-anchor" href="#加法-hook"><span>加法 hook</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import { ref, watch } from &#39;vue&#39;;</span>
<span class="line">const useAdd= ({ num1, num2 })  =&gt;{</span>
<span class="line">    const addNum = ref(0)</span>
<span class="line">    watch([num1, num2], ([num1, num2]) =&gt; {</span>
<span class="line">        addFn(num1, num2)</span>
<span class="line">    })</span>
<span class="line">    const addFn = (num1, num2) =&gt; {</span>
<span class="line">        addNum.value = num1 + num2</span>
<span class="line">    }</span>
<span class="line">    return {</span>
<span class="line">        addNum,</span>
<span class="line">        addFn</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export default useAdd</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="减法-hook" tabindex="-1"><a class="header-anchor" href="#减法-hook"><span>减法 hook</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//减法功能-Hook</span>
<span class="line">import { ref, watch } from &#39;vue&#39;;</span>
<span class="line">export function useSub  ({ num1, num2 }){</span>
<span class="line">    const subNum = ref(0)</span>
<span class="line">    watch([num1, num2], ([num1, num2]) =&gt; {</span>
<span class="line">        subFn(num1, num2)</span>
<span class="line">    })</span>
<span class="line">    const subFn = (num1, num2) =&gt; {</span>
<span class="line">        subNum.value = num1 - num2</span>
<span class="line">    }</span>
<span class="line">    return {</span>
<span class="line">        subNum,</span>
<span class="line">        subFn</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组建中使用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        num1:&lt;input v-model.number=&quot;num1&quot; style=&quot;width:100px&quot; /&gt;</span>
<span class="line">        &lt;br /&gt;</span>
<span class="line">        num2:&lt;input v-model.number=&quot;num2&quot; style=&quot;width:100px&quot; /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;span&gt;加法等于:{{ addNum }}&lt;/span&gt;</span>
<span class="line">    &lt;br /&gt;</span>
<span class="line">    &lt;span&gt;减法等于:{{ subNum }}&lt;/span&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">​</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { ref } from &#39;vue&#39;</span>
<span class="line">import useAdd from &#39;./useAdd.js&#39;     //引入自动hook </span>
<span class="line">import { useSub } from &#39;./useSub.js&#39; //引入自动hook </span>
<span class="line">​</span>
<span class="line">const num1 = ref(2)</span>
<span class="line">const num2 = ref(1)</span>
<span class="line">//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）</span>
<span class="line">const { addNum, addFn } = useAdd({ num1, num2 })</span>
<span class="line">addFn(num1.value, num2.value)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)</span>
<span class="line">const { subNum, subFn } = useSub({ num1, num2 })</span>
<span class="line">subFn(num1.value, num2.value)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">​</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量" tabindex="-1"><a class="header-anchor" href="#vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量"><span>Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量</span></a></h2><p>算平均的Hook</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//平均功能-Hook</span>
<span class="line">import { ref, watch } from &quot;vue&quot;;</span>
<span class="line">export function useAverage(addNum) {</span>
<span class="line">  const averageNum = ref(0);</span>
<span class="line">  watch(addNum, (addNum) =&gt; {</span>
<span class="line">    averageFn(addNum);</span>
<span class="line">  });</span>
<span class="line">  const averageFn = (addNum) =&gt; {</span>
<span class="line">    averageNum.value = addNum / 2;</span>
<span class="line">  };</span>
<span class="line">  return {</span>
<span class="line">    averageNum,</span>
<span class="line">    averageFn,</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">//组件内</span>
<span class="line">//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）</span>
<span class="line">const { addNum, addFn } = useAdd({ num1, num2 })</span>
<span class="line">addFn(num1.value, num2.value)//主动调用，返回最新addNum</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">//平均功能-自定义Hook- hook传入参数值来其他hook暴露出来的变量</span>
<span class="line">const { averageNum, averageFn} = useAverage(addNum)</span>
<span class="line">averageFn(addNum.value)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量，这提高了Vue3在抽象逻辑方面的灵活性。</p><h3 id="_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名" tabindex="-1"><a class="header-anchor" href="#_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名"><span>3、Mixin同名变量会被覆盖，Vue3自定义Hook可以在引入的时候对同名变量重命名</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Vue3自定义Hooks</span>
<span class="line">//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）</span>
<span class="line">const { totalNum:addNum, addFn } = useAdd({ num1, num2 })</span>
<span class="line">addFn(num1.value, num2.value)</span>
<span class="line"></span>
<span class="line">//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)</span>
<span class="line">const { totalNum:subNum, subFn } = useSub({ num1, num2 })</span>
<span class="line">subFn(num1.value, num2.value)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在Vue3自定义Hooks中，虽然加法和减法Hooks都返回了totalNum，但是利用ES6对象解构很轻松给变量重命名</p></blockquote>`,19),d=[i];function u(c,p){return e(),s("div",null,d)}const t=n(l,[["render",u],["__file","vue3中的hooks.html.vue"]]),r=JSON.parse('{"path":"/vue3/vue3%E4%B8%AD%E7%9A%84hooks.html","title":"vue3中的hooks","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"加法 hook","slug":"加法-hook","link":"#加法-hook","children":[]},{"level":2,"title":"减法 hook","slug":"减法-hook","link":"#减法-hook","children":[]},{"level":2,"title":"Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量","slug":"vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量","link":"#vue3自定义hooks可以灵活传递任何参数来改变它的逻辑-参数不限于其他hook的暴露出来的变量","children":[{"level":3,"title":"3、Mixin同名变量会被覆盖，Vue3自定义Hook可以在引入的时候对同名变量重命名","slug":"_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名","link":"#_3、mixin同名变量会被覆盖-vue3自定义hook可以在引入的时候对同名变量重命名","children":[]}]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"vue3/vue3中的hooks.md"}');export{t as comp,r as data};
