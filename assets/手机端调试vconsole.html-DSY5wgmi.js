import{_ as s,c as n,o as e,a}from"./app-90N25QkG.js";const l={},i=a(`<h1 id="手机端调试vconsole" tabindex="-1"><a class="header-anchor" href="#手机端调试vconsole"><span>手机端调试vconsole</span></a></h1><h2 id="为什么使用vconsole呢" tabindex="-1"><a class="header-anchor" href="#为什么使用vconsole呢"><span>为什么使用vconsole呢？</span></a></h2><blockquote><p>因为手机或者平板之类的客户端软件并没有控制台，前端开发想看log日志比较麻烦，如果一直弹窗alert方法实在太挫了。所以腾讯开发了这个 js 插件。</p></blockquote><p>#使用方法</p><h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1"><span>方法1：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;script src=&quot;https://qdleader.github.io/qdleader/h5/vconsole.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">//或使用cdn链接 &lt;script src=&quot;https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">    // init vConsole</span>
<span class="line">    var vConsole = new VConsole();</span>
<span class="line">    console.log(&#39;Hello world&#39;);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2"><span>方法2：</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">npm install vconsole</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> VConsole <span class="token keyword">from</span> <span class="token string">&#39;vconsole&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> isDebug <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 本地开发调试注入vConsole</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>isDebug<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他类似工具Eruda</p>`,12),t=[i];function c(o,p){return e(),n("div",null,t)}const d=s(l,[["render",c],["__file","手机端调试vconsole.html.vue"]]),v=JSON.parse('{"path":"/h5/%E6%89%8B%E6%9C%BA%E7%AB%AF%E8%B0%83%E8%AF%95vconsole.html","title":"手机端调试vconsole","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"为什么使用vconsole呢？","slug":"为什么使用vconsole呢","link":"#为什么使用vconsole呢","children":[]},{"level":2,"title":"方法1：","slug":"方法1","link":"#方法1","children":[]},{"level":2,"title":"方法2：","slug":"方法2","link":"#方法2","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"引入","slug":"引入","link":"#引入","children":[]}]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"h5/手机端调试vconsole.md"}');export{d as comp,v as data};
