import{_ as s,c as n,o as i,a as e}from"./app-90N25QkG.js";const a={},l=e(`<h1 id="git-用不同账号提交不同的仓库" tabindex="-1"><a class="header-anchor" href="#git-用不同账号提交不同的仓库"><span>git 用不同账号提交不同的仓库</span></a></h1><p>其实很简单，在每个仓库里面修改成局部的相应的username和email即可</p><p>git config user.name “Your_username”</p><p>git config user.email “Your_email”</p><p>这个是不会影响全局的，这样你就可以在这个仓库用这个账号直接提交，别的仓库用别的账号直接提交，不用来回登录换账号了，很好用</p><p>设置全局</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 1.查看git配置信息</span>
<span class="line">$ git config --list</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 2.查看git用户名、密码、邮箱的配置</span>
<span class="line">$ git config user.name</span>
<span class="line">$ git config user.password</span>
<span class="line">$ git config user.email</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 3.设置git用户名、密码、邮箱的配置</span>
<span class="line">$ git config user.name &quot;freedom&quot;</span>
<span class="line">$ git config user.password &quot;123456&quot;</span>
<span class="line">$ git config user.email &quot;1548429568@qq.com&quot;</span>
<span class="line"># 3.设置git用户名、密码、邮箱的配置（全局配置）</span>
<span class="line">$ git config --global user.name 用户命</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function c(r,d){return i(),n("div",null,t)}const m=s(a,[["render",c],["__file","git 用不同账号提交不同的仓库.html.vue"]]),o=JSON.parse('{"path":"/git/git%20%E7%94%A8%E4%B8%8D%E5%90%8C%E8%B4%A6%E5%8F%B7%E6%8F%90%E4%BA%A4%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BB%93%E5%BA%93.html","title":"git 用不同账号提交不同的仓库","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"git/git 用不同账号提交不同的仓库.md"}');export{m as comp,o as data};
