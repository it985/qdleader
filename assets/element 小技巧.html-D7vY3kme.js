import{_ as e,c as n,o as s,a as l}from"./app-90N25QkG.js";const a={},i=l(`<h1 id="element-小技巧" tabindex="-1"><a class="header-anchor" href="#element-小技巧"><span>element 小技巧</span></a></h1><h3 id="_1-el-table-表格内容超出省略" tabindex="-1"><a class="header-anchor" href="#_1-el-table-表格内容超出省略"><span>1.el-table 表格内容超出省略</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">当表格内容过长时，手动添加样式比较麻烦，偷偷告诉你，只需要添加一个 show-overflow-tooltip 就可以搞定。</span>
<span class="line">&lt;el-table-column</span>
<span class="line">  prop=&quot;address&quot;</span>
<span class="line">  label=&quot;地址&quot;</span>
<span class="line">  width=&quot;180&quot;</span>
<span class="line">  show-overflow-tooltip</span>
<span class="line">&gt;</span>
<span class="line">&lt;/el-table-column&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-el-form-只校验表单其中一个字段" tabindex="-1"><a class="header-anchor" href="#_2-el-form-只校验表单其中一个字段"><span>2.el-form 只校验表单其中一个字段</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">有时候我们需要单独校验一些字段，比如发送验证码，单独对手机号进行校验，可以这样做：</span>
<span class="line">this.$refs.form.validateField(&#39;name&#39;, valid =&gt; {</span>
<span class="line">    if (valid) {</span>
<span class="line">        console.log(&#39;send!&#39;);</span>
<span class="line">    } else {</span>
<span class="line">        console.log(&#39;error send!&#39;);</span>
<span class="line">        return false;</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-el-input-type-number-输入中文-焦点上移" tabindex="-1"><a class="header-anchor" href="#_3-el-input-type-number-输入中文-焦点上移"><span>3.el-input type=number 输入中文，焦点上移</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;style scoped&gt;</span>
<span class="line">::v-deep .el-input__inner {</span>
<span class="line">    line-height: 1px !important;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-el-input-type-number-去除聚焦时的上下箭头" tabindex="-1"><a class="header-anchor" href="#_4-el-input-type-number-去除聚焦时的上下箭头"><span>4.el-input type=number 去除聚焦时的上下箭头</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;el-input class=&quot;clear-number-input&quot; type=&quot;number&quot;&gt;&lt;/el-input&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.clear-number-input ::v-deep input[type=&quot;number&quot;]::-webkit-outer-spin-button,</span>
<span class="line">.clear-number-input ::v-deep input[type=&quot;number&quot;]::-webkit-inner-spin-button {</span>
<span class="line">    -webkit-appearance: none !important;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[i];function r(d,p){return s(),n("div",null,t)}const u=e(a,[["render",r],["__file","element 小技巧.html.vue"]]),m=JSON.parse('{"path":"/UI%E6%A1%86%E6%9E%B6/element/element%20%E5%B0%8F%E6%8A%80%E5%B7%A7.html","title":"element 小技巧","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"1.el-table 表格内容超出省略","slug":"_1-el-table-表格内容超出省略","link":"#_1-el-table-表格内容超出省略","children":[]},{"level":3,"title":"2.el-form 只校验表单其中一个字段","slug":"_2-el-form-只校验表单其中一个字段","link":"#_2-el-form-只校验表单其中一个字段","children":[]},{"level":3,"title":"3.el-input type=number 输入中文，焦点上移","slug":"_3-el-input-type-number-输入中文-焦点上移","link":"#_3-el-input-type-number-输入中文-焦点上移","children":[]},{"level":3,"title":"4.el-input type=number 去除聚焦时的上下箭头","slug":"_4-el-input-type-number-去除聚焦时的上下箭头","link":"#_4-el-input-type-number-去除聚焦时的上下箭头","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"UI框架/element/element 小技巧.md"}');export{u as comp,m as data};
