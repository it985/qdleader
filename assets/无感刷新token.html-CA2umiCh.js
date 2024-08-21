import{_ as n,c as s,o as a,a as p}from"./app-90N25QkG.js";const t={},e=p(`<h1 id="无感刷新token" tabindex="-1"><a class="header-anchor" href="#无感刷新token"><span>无感刷新token</span></a></h1><p>对于需要前端实现无痛刷新Token，无非就两种：</p><blockquote><p>请求前判断Token是否过期，过期则刷新 请求后根据返回状态判断是否过期，过期则刷新</p></blockquote><h2 id="判断token是否过期" tabindex="-1"><a class="header-anchor" href="#判断token是否过期"><span>判断Token是否过期</span></a></h2><p>没过期则正常处理 过期则发起刷新Token的请求 拿到新的Token保存 重新发送Token过期这段时间内发起的请求</p><h4 id="重点" tabindex="-1"><a class="header-anchor" href="#重点"><span>重点：</span></a></h4><p>保持Token过期这段时间发起请求状态（不能进入失败回调） 把刷新Token后重新发送请求的响应数据返回到对应的调用者</p><h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h4><p>创建一个flag isRefreshing 来判断是否刷新中 创建一个数组队列retryRequests来保存需要重新发起的请求 判断到Token过期 isRefreshing = false 的情况下 发起刷新Token的请求 刷新Token后遍历执行队列retryRequests isRefreshing = true 表示正在刷新Token，返回一个Pending状态的Promise,并把请求信息保存到队列retryRequests中</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Store <span class="token keyword">from</span> <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&quot;@/router&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UserUtil <span class="token keyword">from</span> <span class="token string">&quot;@/utils/user&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建实例</span></span>
<span class="line"><span class="token keyword">const</span> Instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">Instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&quot;/api&quot;</span><span class="token punctuation">;</span></span>
<span class="line">Instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">;</span></span>
<span class="line">Instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义一个flag 判断是否刷新Token中</span></span>
<span class="line"><span class="token keyword">let</span> isRefreshing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 保存需要重新发起请求的队列</span></span>
<span class="line"><span class="token keyword">let</span> retryRequests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 请求拦截</span></span>
<span class="line">Instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  Store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;startLoading&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> userInfo <span class="token operator">=</span> UserUtil<span class="token punctuation">.</span><span class="token function">getLocalInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//业务需要把Token信息放在 params 里面，一般来说都是放在 headers里面</span></span>
<span class="line">    config<span class="token punctuation">.</span>params <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>params <span class="token operator">?</span> config<span class="token punctuation">.</span>params <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">token</span><span class="token operator">:</span> userInfo<span class="token punctuation">.</span>Token</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> config<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 响应拦截</span></span>
<span class="line">Instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    Store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;finishLoading&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">      res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">401</span></span>
<span class="line">    <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 需要刷新Token 的状态 401</span></span>
<span class="line">    <span class="token comment">// 拿到本次请求的配置</span></span>
<span class="line">      <span class="token keyword">let</span> config <span class="token operator">=</span> response<span class="token punctuation">.</span>config<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//   进入登录页面的不做刷新Token 处理</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>Router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRefreshing<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 改变flag状态，表示正在刷新Token中</span></span>
<span class="line">          isRefreshing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//   刷新Token</span></span>
<span class="line">          <span class="token keyword">return</span> Store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;user/refreshToken&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 设置刷新后的Token</span></span>
<span class="line">              config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>token <span class="token operator">=</span> res<span class="token punctuation">.</span>Token<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//   遍历执行需要重新发起请求的队列</span></span>
<span class="line">              retryRequests<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//   清空队列</span></span>
<span class="line">              retryRequests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token keyword">return</span> Instance<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">              retryRequests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">              Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;自动登录失败，请重新登录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> code <span class="token operator">=</span> Store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>info<span class="token punctuation">.</span>CustomerCode <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 刷新Token 失败 清空缓存的用户信息 并调整到登录页面</span></span>
<span class="line">                Store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&quot;user/logout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                Router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> Router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath<span class="token punctuation">,</span> <span class="token literal-property property">code</span><span class="token operator">:</span> code <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 请求完成后重置flag</span></span>
<span class="line">              isRefreshing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 正在刷新token，返回一个未执行resolve的promise</span></span>
<span class="line">          <span class="token comment">// 把promise 的resolve 保存到队列的回调里面，等待刷新Token后调用</span></span>
<span class="line">          <span class="token comment">// 原调用者会处于等待状态直到 队列重新发起请求，再把响应返回，以达到用户无感知的目的（无痛刷新）</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行</span></span>
<span class="line">            retryRequests<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">info</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 将新的Token重新赋值</span></span>
<span class="line">              config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>token <span class="token operator">=</span> info<span class="token punctuation">.</span>Token<span class="token punctuation">;</span></span>
<span class="line">              <span class="token function">resolve</span><span class="token punctuation">(</span>Instance<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> err <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      err<span class="token punctuation">.</span>code <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">;</span></span>
<span class="line">      err<span class="token punctuation">.</span>msg <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      err<span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">      err<span class="token punctuation">.</span>msg <span class="token operator">=</span> error<span class="token punctuation">.</span>message<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    Store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;finishLoading&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Instance<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(l,i){return a(),s("div",null,o)}const k=n(t,[["render",c],["__file","无感刷新token.html.vue"]]),r=JSON.parse('{"path":"/%E4%B8%8D%E5%8F%AF%E4%B8%8D%E7%9F%A5%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%86%B7%E7%9F%A5%E8%AF%86/%E6%97%A0%E6%84%9F%E5%88%B7%E6%96%B0token.html","title":"无感刷新token","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"判断Token是否过期","slug":"判断token是否过期","link":"#判断token是否过期","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"不可不知的项目冷知识/无感刷新token.md"}');export{k as comp,r as data};
