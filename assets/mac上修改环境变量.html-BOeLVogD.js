import{_ as e,c as s,o as a,a as l}from"./app-90N25QkG.js";const t={},n=l(`<h1 id="mac上修改环境变量" tabindex="-1"><a class="header-anchor" href="#mac上修改环境变量"><span>mac上修改环境变量</span></a></h1><p>1、打开终端，输入</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">vim <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>bash_profile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、输入 i进入编辑模式，然后输入环境变量：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">export M2_HOME=&quot;/Users/during/Documents/Software/apache-maven-3.5.0&quot;</span>
<span class="line">export PATH=&quot;$M2_HOME/bin:$PATH&quot;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：有多个Path，就输入多个export PATH=&quot; &quot;</p><p>3、编辑完成后，按 Esc 退出编辑，输入 :wq! 保存并退出（:q! 不保存退出 ）</p><p>4、输入source .bash_profile 使环境变量生效</p><p>echo $PATH 查看当前环境变量</p><h2 id="mac默认是bash-shell-配置变量在跟目录中-编辑" tabindex="-1"><a class="header-anchor" href="#mac默认是bash-shell-配置变量在跟目录中-编辑"><span>Mac默认是bash shell 配置变量在跟目录中，编辑：</span></a></h2><p>vi ~/.bash_profile 通过export将变量导出去</p><p>export ANDROID_HOME=~/Library/Android/sdk export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools ⚠️ 注意： 变量与变量之间用:分割</p><h2 id="给zsh-shell-设置环境变量" tabindex="-1"><a class="header-anchor" href="#给zsh-shell-设置环境变量"><span>给zsh shell 设置环境变量</span></a></h2><p>vi ~/.zshrc // 如果跟目录没有.zshrc的话，执行下面的命令 cash ~/.zshrc vi ~/.zshrc 在最下面添加</p><p>export ANDROID_HOME=~/Library/Android/sdk export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools</p>`,15),r=[n];function i(c,o){return a(),s("div",null,r)}const h=e(t,[["render",i],["__file","mac上修改环境变量.html.vue"]]),d=JSON.parse('{"path":"/tool/mac%E5%B8%B8%E7%94%A8%E6%8A%80%E5%B7%A7/mac%E4%B8%8A%E4%BF%AE%E6%94%B9%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html","title":"mac上修改环境变量","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Mac默认是bash shell 配置变量在跟目录中，编辑：","slug":"mac默认是bash-shell-配置变量在跟目录中-编辑","link":"#mac默认是bash-shell-配置变量在跟目录中-编辑","children":[]},{"level":2,"title":"给zsh shell 设置环境变量","slug":"给zsh-shell-设置环境变量","link":"#给zsh-shell-设置环境变量","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"tool/mac常用技巧/mac上修改环境变量.md"}');export{h as comp,d as data};
