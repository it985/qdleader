import{_ as n,c as s,o as a,a as p}from"./app-90N25QkG.js";const t={},e=p(`<h1 id="rollup中的tree-shaking" tabindex="-1"><a class="header-anchor" href="#rollup中的tree-shaking"><span>rollup中的tree-shaking</span></a></h1><h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking"><span>tree-shaking</span></a></h2><p>在rollup中, tree-shaking的本质是通过代码的静态分析, 分析模块代码中的导入(import), 变量声明(definition), 导出(export) 并在其模块的导入导出上下文中逐层查找, 如果有依赖关系, 则移除export声明(bundle的时候), 如果没有, 则移除掉此语句块. 以此来达到tree-shaking的目的 那么相应的, 我们也需要优化丰富我们之前的代码内容 首先, 我们需要在模块中对模块的导入导出和变量声明进行收集</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 在constructor中预先定义这三个对象</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>imports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 导入的变量</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 导出的变量</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>definitions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 变量定义的语句</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在analyze 中通过ast的遍历进行收集</span></span>
<span class="line"><span class="token function">analyse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 收集导入和导出变量</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>ast<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;ImportDeclaration&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> source <span class="token operator">=</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value</span>
<span class="line">        node<span class="token punctuation">.</span>specifiers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">specifier</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> localName<span class="token punctuation">}</span> <span class="token operator">=</span> specifier<span class="token punctuation">.</span>local</span>
<span class="line">          <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> specifier<span class="token punctuation">.</span>imported</span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>imports<span class="token punctuation">[</span>localName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            source<span class="token punctuation">,</span></span>
<span class="line">            name<span class="token punctuation">,</span></span>
<span class="line">            localName<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;ExportNamedDeclaration&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> declaration <span class="token punctuation">}</span> <span class="token operator">=</span> node</span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>declaration<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;VariableDeclaration&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> declaration<span class="token punctuation">.</span>declarations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id</span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>exports<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            node<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">localName</span><span class="token operator">:</span> name<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">expression</span><span class="token operator">:</span> declaration<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">analyse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ast<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>code<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 收集所有语句定义的变量，建立变量和声明语句之间的对应关系</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>ast<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span>_defines<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>definitions<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> statement</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次, 我们需要在expandAllStatements调用的时候, 同步将其模块依赖进行递归处理, 以使其生成树状的依赖关系 其中expandAllStatement遍历调用了expandStatement, 用于处理每个ast节点 在expandStatement中遍历了_dependsOn(也就是其依赖的变量列表), 遍历变量列表 如果依赖的变量在导入变量中, 则根据变量内容来查找import语句中的导入变量, 然后根据import语句的导入源找到源模块, 通过源模块找到了其导出的变量, 否则从当前作用域中的definitions中找到这个声明, 如果声明之前没有_included(已经包含在输出语句中), 则将继续调用expandStatement</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"> <span class="token function">expandStatement</span><span class="token punctuation">(</span><span class="token parameter">statement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   statement<span class="token punctuation">.</span>_included <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">   <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">   <span class="token keyword">const</span> dependencies <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span>_dependsOn<span class="token punctuation">)</span></span>
<span class="line">   dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">     result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>definition<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">   result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>statement<span class="token punctuation">)</span></span>
<span class="line">   <span class="token keyword">return</span> result</span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>imports<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> importDeclaration <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imports<span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bundle<span class="token punctuation">.</span><span class="token function">fetchModule</span><span class="token punctuation">(</span>importDeclaration<span class="token punctuation">.</span>source<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> exportDeclaration <span class="token operator">=</span> mod<span class="token punctuation">.</span>exports<span class="token punctuation">[</span>importDeclaration<span class="token punctuation">.</span>name<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>exportDeclaration<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Module </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mod<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> does not export </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>importDeclaration<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> (imported by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> mod<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>exportDeclaration<span class="token punctuation">.</span>localName<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> statement <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>definitions<span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>statement <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>statement<span class="token punctuation">.</span>_included<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">expandStatement</span><span class="token punctuation">(</span>statement<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些下划线的变量其实是在analyse步骤中进行处理和分析的 analyse定义了四个内置下划线变量 _source: 代表当前区块的源代码 _defines: 代表当前模块定义的变量 _dependsOn: 代表当前模块没有定义的变量(外部依赖的变量) _included: 是否已经包含在输出语句中, 包含在其中的才会被输出</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> Scope <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./scope&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> walk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./walk&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">analyse</span><span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> scope <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scope</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 创建作用域链、</span></span>
<span class="line">  ast<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">addToScope</span><span class="token punctuation">(</span><span class="token parameter">declarator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> declarator<span class="token punctuation">.</span>id</span>
<span class="line">      scope<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>scope<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果没有上层作用域，说明是模块内的定级作用域</span></span>
<span class="line">        statement<span class="token punctuation">.</span>_defines<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>statement<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 源代码</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> ms<span class="token punctuation">.</span><span class="token function">snip</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span>start<span class="token punctuation">,</span> statement<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">_defines</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 当前模块定义的变量</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">_dependsOn</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 当前模块没有定义的变量，即外部依赖的变量</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">_included</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 是否已经包含在输出语句中</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 收集每个语句上定义的变量，创建作用域链</span></span>
<span class="line">    <span class="token function">walk</span><span class="token punctuation">(</span>statement<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> newScope</span>
<span class="line">        <span class="token keyword">switch</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token string">&#39;FunctionDeclaration&#39;</span><span class="token operator">:</span></span>
<span class="line">            <span class="token keyword">const</span> params <span class="token operator">=</span> node<span class="token punctuation">.</span>params<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">            <span class="token function">addToScope</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span></span>
<span class="line">            newScope <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scope</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">parent</span><span class="token operator">:</span> scope<span class="token punctuation">,</span></span>
<span class="line">              params<span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token string">&#39;VariableDeclaration&#39;</span><span class="token operator">:</span></span>
<span class="line">            node<span class="token punctuation">.</span>declarations<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>addToScope<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>newScope<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token string">&#39;_scope&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span> newScope<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          scope <span class="token operator">=</span> newScope</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">leave</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>_scope<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          scope <span class="token operator">=</span> scope<span class="token punctuation">.</span>parent</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  ast<span class="token punctuation">.</span>_scope <span class="token operator">=</span> scope</span>
<span class="line">  <span class="token comment">// 收集外部依赖的变量</span></span>
<span class="line">  ast<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">walk</span><span class="token punctuation">(</span>statement<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;Identifier&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> node</span>
<span class="line">          <span class="token keyword">const</span> definingScope <span class="token operator">=</span> scope<span class="token punctuation">.</span><span class="token function">findDefiningScope</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">          <span class="token comment">// 作用域链中找不到 则说明为外部依赖</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>definingScope<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            statement<span class="token punctuation">.</span>_dependsOn<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> analyse</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自此, 我们就能够成功实现: 对模块逐一进行分析, 获知到模块的import进来的内容, export出去的内容, 在当前模块上下文中定义了的变量, 当前模块中使用了的变量, 在当前模块中修改了的变量, 等 根据scope进行逐层查找, 以此来获知当前模块中使用的变量在import语句中是否已经存在, 存在则将该语句标记为_dependsOn, 也就是已经被依赖的内容 分析完成依赖关系之后, 会进行打包操作, 将import语句中的内容直接注入替换掉该import语句, 同时移除掉export语句 如果上层变量与下层变量有所冲突, 则需要在后续合并的时候进行重命名 这样就完成了rollup的基础打包工作</p><h3 id="rollup与webpack不同" tabindex="-1"><a class="header-anchor" href="#rollup与webpack不同"><span>rollup与webpack不同</span></a></h3><h4 id="处理维度不同" tabindex="-1"><a class="header-anchor" href="#处理维度不同"><span>处理维度不同</span></a></h4><p>webpack的核心在于将模块塞到模块数组中用于进行调度, webpack处理的核心维度是&quot;模块&quot; rollup核心处理的是&quot;语句&quot;, rollup会将模块的上下文语句进行逐一分析处理, 将会从入口开始, 打包所有的模块, 并清除掉输入输出语句</p><h4 id="流程设计不同" tabindex="-1"><a class="header-anchor" href="#流程设计不同"><span>流程设计不同</span></a></h4><p>rollup的核心在执行流上, 只提供了有限的hooks流程来支持扩展 webpack则是完全设计在可扩展性上的架构, 以至于核心的compile和compilation都是继承自Tapable的, 但这样也会造成代码可读性极差, 阅读源码中的一大堆的回调与tap流程让人摸不着头脑</p>`,14),o=[e];function c(l,i){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","rollup中的tree-shaking.html.vue"]]),k=JSON.parse('{"path":"/rollup/rollup%E4%B8%AD%E7%9A%84tree-shaking.html","title":"rollup中的tree-shaking","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"tree-shaking","slug":"tree-shaking","link":"#tree-shaking","children":[{"level":3,"title":"rollup与webpack不同","slug":"rollup与webpack不同","link":"#rollup与webpack不同","children":[]}]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"rollup/rollup中的tree-shaking.md"}');export{r as comp,k as data};
