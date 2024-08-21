import{_ as e,c as n,o as s,a as i}from"./app-90N25QkG.js";const a={},l=i(`<h1 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令"><span>linux常用命令</span></a></h1><h2 id="进入文件" tabindex="-1"><a class="header-anchor" href="#进入文件"><span>进入文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd /home 进入 &#39;/ home&#39; 目录&#39;</span>
<span class="line">cd .. 返回上一级目录</span>
<span class="line">cd ../.. 返回上两级目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看文件夹中的文件" tabindex="-1"><a class="header-anchor" href="#查看文件夹中的文件"><span>查看文件夹中的文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ls 查看目录中的文件</span>
<span class="line">ll 查看目录中的文件</span>
<span class="line">ls -l 显示文件和目录的详细资料</span>
<span class="line">ls -a 显示隐藏文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建文件夹" tabindex="-1"><a class="header-anchor" href="#创建文件夹"><span>创建文件夹</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkdir dir1 创建一个叫做 &#39;dir1&#39; 的目录&#39;</span>
<span class="line">mkdir dir1 dir2 同时创建两个目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件"><span>删除文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">rm -f file1 删除一个叫做 &#39;file1&#39; 的文件&#39;</span>
<span class="line">rmdir dir1 删除一个叫做 &#39;dir1&#39; 的目录&#39;</span>
<span class="line">rm -rf dir1 删除一个叫做 &#39;dir1&#39; 的目录并同时删除其内容</span>
<span class="line">rm -rf dir1 dir2 同时删除两个目录及它们的内容</span>
<span class="line">mv dir1 new_dir 重命名/移动 一个目录</span>
<span class="line"></span>
<span class="line">cp file1 file2 复制一个文件</span>
<span class="line">cp -a dir1 dir2 复制一个目录</span>
<span class="line">cp -r dir1 dir2 复制一个目录及子目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑一个文件" tabindex="-1"><a class="header-anchor" href="#编辑一个文件"><span>编辑一个文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vim a.js</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">当编辑完退出时候</span>
<span class="line"></span>
<span class="line">esc</span>
<span class="line">:w + enter 保存</span>
<span class="line">:q + enter 退出vim模式</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vim-编辑手册" tabindex="-1"><a class="header-anchor" href="#vim-编辑手册"><span>vim 编辑手册</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vimtutor</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,13),d=[l];function r(t,c){return s(),n("div",null,d)}const v=e(a,[["render",r],["__file","linux最常用命令.html.vue"]]),m=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/Linux/linux%E6%9C%80%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"linux常用命令","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"进入文件","slug":"进入文件","link":"#进入文件","children":[]},{"level":2,"title":"查看文件夹中的文件","slug":"查看文件夹中的文件","link":"#查看文件夹中的文件","children":[]},{"level":2,"title":"创建文件夹","slug":"创建文件夹","link":"#创建文件夹","children":[]},{"level":2,"title":"删除文件","slug":"删除文件","link":"#删除文件","children":[]},{"level":2,"title":"编辑一个文件","slug":"编辑一个文件","link":"#编辑一个文件","children":[]},{"level":2,"title":"vim 编辑手册","slug":"vim-编辑手册","link":"#vim-编辑手册","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"服务端/Linux/linux最常用命令.md"}');export{v as comp,m as data};
