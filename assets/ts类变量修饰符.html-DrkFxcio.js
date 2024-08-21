import{_ as s,c as n,o as e,a}from"./app-90N25QkG.js";const l={},i=a(`<p>TS提供给了我们三个修饰符</p><p>public 共有属性 都可以访问到 protected 保护属性 只有这个类的内部和子类中可以访问到 private 私有属性 只有这个类中可以访问到，子类都访问不到</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">class Parent {</span>
<span class="line">    public name = &#39;qdleader&#39;</span>
<span class="line">    age = 18</span>
<span class="line">    say() {</span>
<span class="line">        console.log(this.name)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class child extends Parent {</span>
<span class="line">    callParent() {</span>
<span class="line">        super.say()</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let p = new Person()</span>
<span class="line">p.say()  // qdleader</span>
<span class="line">console.log(p.name) // qdleader</span>
<span class="line">let c = new child()</span>
<span class="line">console.log(c.name)  // qdleader</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="private" tabindex="-1"><a class="header-anchor" href="#private"><span>private</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">class Parent {</span>
<span class="line">    private name = &#39;qdleader&#39;</span>
<span class="line">    age = 18</span>
<span class="line">    say() {</span>
<span class="line">        console.log(this.name)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class child extends Parent {</span>
<span class="line">    callParent() {</span>
<span class="line">        super.name // 获取不到</span>
<span class="line">        super.say()</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let p = new Person()</span>
<span class="line">p.say()  // qdleader</span>
<span class="line">console.log(p.name) // 报错 获取不到</span>
<span class="line">let c = new child()</span>
<span class="line">console.log(c.name)  // 报错 获取不到</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="protected" tabindex="-1"><a class="header-anchor" href="#protected"><span>protected</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">class Parent {</span>
<span class="line">    protected name = &#39;qdleader&#39;</span>
<span class="line">    age = 18</span>
<span class="line">    say() {</span>
<span class="line">        console.log(this.name)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class child extends Parent {</span>
<span class="line">    callParent() {</span>
<span class="line">        super.name // 可以获取到</span>
<span class="line">        super.say()</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let p = new Person()</span>
<span class="line">p.say()  // qdleader</span>
<span class="line">console.log(p.name) // 报错 获取不到</span>
<span class="line">let c = new child()</span>
<span class="line">console.log(c.name)  // 报错 获取不到</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static"><span>static</span></a></h2><p>class Person { name: string; static age: number = 20; //定义静态属性 //构造函数 constructor(name: string) { this.name = name; } //静态方法 无返回值 static run(): void { console.log(<code>\${Person.age}静态属性</code>); //获取静态属性，结果是20静态属性 //不能直接获取内部的属性 比如this.name } work(): string { return <code>我是\${this.name}</code>; } } let p = new Person(&quot;张三&quot;); //实例化 Person.run(); //结果是20静态属性 调用静态方法 console.log(p.work()); console.log(Person.age); //调用静态属性</p>`,9),c=[i];function d(p,r){return e(),n("div",null,c)}const v=s(l,[["render",d],["__file","ts类变量修饰符.html.vue"]]),m=JSON.parse('{"path":"/Typescript/ts%E7%B1%BB%E5%8F%98%E9%87%8F%E4%BF%AE%E9%A5%B0%E7%AC%A6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"private","slug":"private","link":"#private","children":[]},{"level":2,"title":"protected","slug":"protected","link":"#protected","children":[]},{"level":2,"title":"static","slug":"static","link":"#static","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"Typescript/ts类变量修饰符.md"}');export{v as comp,m as data};
