import{_ as n,c as e,o as a,b as t}from"./app-90N25QkG.js";const E={},s=t("h1",{id:"http三次握手示意图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#http三次握手示意图"},[t("span",null,"http三次握手示意图")])],-1),h=t("pre",null,[t("code",null,`               客户端                     服务端
           CLOSED|                         | LISTEN 
                 |                         |
                 |      SYN=1，seq=x       |        
         SYN_SENT|  ---------------------->|SYN_RCVD
                 |                         |
                 |                         |
                 |                         |
                 |                         |
                 | SYN=1，ACK=1,ack=x+1,seq=y,|        
    ESTABLISHED  |  <----------------------|SYN_RCVD
                 |                         |
                 |                         |
                 |                         |
                 |                         |
                 | ACK=1,ack=y+1,seq=x+1,|        
     ESTABLISHED | ----------------------> |ESTABLISHED
                 |                         |
                 |                         |
                 |                         |
                 |                         |
                 |         数据传输          |        
      ESTABLISHED| <---------------------->|ESTABLISHED
                 |                         |
                 |                         |
                 |                         |
                 |                         |    
`)],-1),o=[s,h];function _(c,r){return a(),e("div",null,o)}const p=n(E,[["render",_],["__file","http三次握手示意图.html.vue"]]),B=JSON.parse('{"path":"/http/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%B1%BB/http%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%A4%BA%E6%84%8F%E5%9B%BE.html","title":"http三次握手示意图","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"http/http三次握手四次挥手类/http三次握手示意图.md"}');export{p as comp,B as data};
