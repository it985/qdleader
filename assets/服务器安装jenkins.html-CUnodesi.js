import{_ as n,c as e,o as s,a as i}from"./app-90N25QkG.js";const a={},t=i(`<p>我们先进入到jenkins官网(https://www.jenkins.io/download/)选择对应的版本进行下载</p><h2 id="下载-jenkins" tabindex="-1"><a class="header-anchor" href="#下载-jenkins"><span>下载 jenkins</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key</p><p>2、安装完成后，使用我们yum工具分别输入以下命令进行安装jenkins（其中需要输入Y继续安装）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">yum install fontconfig java<span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span>openjdk</span>
<span class="line">yum install jenkins</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、查看是否安装成功</p><p>通过输入命令： rpm -qa | grep jenkins 查看是否输入命令</p><p>[root@anjing ~]# rpm -qa | grep jenkins jenkins-2.318-1.1.noarch</p><h2 id="_4、启动jenkins" tabindex="-1"><a class="header-anchor" href="#_4、启动jenkins"><span>4、启动jenkins</span></a></h2><p>输入命令启动jenkins： sudo service jenkins start</p><p>[root@anjing ~]# sudo service jenkins start</p><p>此时，输入你的ip：8080 就可以访问了</p><h2 id="jenkins常用命令" tabindex="-1"><a class="header-anchor" href="#jenkins常用命令"><span>Jenkins常用命令</span></a></h2><p>a、启动Jenkins命令</p><h1 id="重启-jenkins" tabindex="-1"><a class="header-anchor" href="#重启-jenkins"><span>重启 Jenkins</span></a></h1><p>service jenkins restart</p><h1 id="停止-jenkins" tabindex="-1"><a class="header-anchor" href="#停止-jenkins"><span>停止 Jenkins</span></a></h1><p>service jenkins stop</p><p>b、修改jenkins端口号</p><p>通过vi命令读取jenkins的配置文件： vi /etc/sysconfig/jenkins</p><p>找到“JENKINS_PORT”的文字，将后面的端口号进行修改。修改完成后进行保存，端口号修改后，也需要到云端服务器管理开放对应的端口。</p><h2 id="_4、根据界面提示信息去查看密码" tabindex="-1"><a class="header-anchor" href="#_4、根据界面提示信息去查看密码"><span>4、根据界面提示信息去查看密码</span></a></h2><p>$ cat /var/lib/jenkins/secrets/initialAdminPassword</p><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载"><span>卸载</span></a></h2><p>第一种： 卸载yum方式安装的jenkins</p><p>service jenkins stop</p><p>yum -y remove jenkins</p>`,28),p=[t];function r(l,d){return s(),e("div",null,p)}const o=n(a,[["render",r],["__file","服务器安装jenkins.html.vue"]]),k=JSON.parse('{"path":"/%E6%9C%8D%E5%8A%A1%E7%AB%AF/%E9%83%A8%E7%BD%B2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85jenkins.html","title":"重启 Jenkins","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"下载 jenkins","slug":"下载-jenkins","link":"#下载-jenkins","children":[]},{"level":2,"title":"4、启动jenkins","slug":"_4、启动jenkins","link":"#_4、启动jenkins","children":[]},{"level":2,"title":"Jenkins常用命令","slug":"jenkins常用命令","link":"#jenkins常用命令","children":[]},{"level":2,"title":"4、根据界面提示信息去查看密码","slug":"_4、根据界面提示信息去查看密码","link":"#_4、根据界面提示信息去查看密码","children":[]},{"level":2,"title":"卸载","slug":"卸载","link":"#卸载","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"服务端/部署/服务器安装jenkins.md"}');export{o as comp,k as data};
