import{_ as e,c as a,o as s,a as n}from"./app-90N25QkG.js";const t={},r=n(`<h1 id="syn-攻击是什么" tabindex="-1"><a class="header-anchor" href="#syn-攻击是什么"><span>SYN 攻击是什么？</span></a></h1><p>服务器端的资源分配是在二次握手时分配的，而客户端的资源是在完成三次握手时分配的，所以服务器容易受到SYN洪泛攻击。SYN攻击就是Client在短时间内伪造大量不存在的IP地址，并向Server不断地发送SYN包，Server则回复确认包，并等待Client确认，由于源地址不存在，因此Server需要不断重发直至超时，这些伪造的SYN包将长时间占用未连接队列，导致正常的SYN请求因为队列满而被丢弃，从而引起网络拥塞甚至系统瘫痪。SYN 攻击是一种典型的 DoS/DDoS 攻击。</p><p>检测 SYN 攻击非常的方便，当你在服务器上看到大量的半连接状态时，特别是源IP地址是随机的，基本上可以断定这是一次SYN攻击。在 Linux/Unix 上可以使用系统自带的 netstats 命令来检测 SYN 攻击。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-p</span> TCP <span class="token operator">|</span> <span class="token function">grep</span> SYN_RECV</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="syn-攻击的危害" tabindex="-1"><a class="header-anchor" href="#syn-攻击的危害"><span>SYN 攻击的危害：</span></a></h2><p>SYN 攻击会让你的服务器资源耗尽，严重情况下甚至会导致你的服务器宕机。 SYN 攻击会让你的网络流量暴增，严重情况下甚至会导致你的网络带宽暴涨。 SYN 攻击会让你的网络带宽利用率下降，严重情况下甚至会导致你的网络拥塞。</p><h2 id="常见的防御-syn-攻击的方法有如下几种" tabindex="-1"><a class="header-anchor" href="#常见的防御-syn-攻击的方法有如下几种"><span>常见的防御 SYN 攻击的方法有如下几种：</span></a></h2><p>缩短超时（SYN Timeout）时间 增加最大半连接数 过滤网关防护 SYN cookies技术</p>`,8),i=[r];function l(p,c){return s(),a("div",null,i)}const h=e(t,[["render",l],["__file","SYN攻击是什么_.html.vue"]]),d=JSON.parse('{"path":"/http/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%B1%BB/SYN%E6%94%BB%E5%87%BB%E6%98%AF%E4%BB%80%E4%B9%88_.html","title":"SYN 攻击是什么？","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"SYN 攻击的危害：","slug":"syn-攻击的危害","link":"#syn-攻击的危害","children":[]},{"level":2,"title":"常见的防御 SYN 攻击的方法有如下几种：","slug":"常见的防御-syn-攻击的方法有如下几种","link":"#常见的防御-syn-攻击的方法有如下几种","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"http/http三次握手四次挥手类/SYN攻击是什么?.md"}');export{h as comp,d as data};
