import{_ as e,c as o,o as r,b as t}from"./app-90N25QkG.js";const s={},n=t("p",null,"CryptoJS.js，js中直接引用，小程序也一样可以使用",-1),p=t("p",null,"具体使用方法和vue中的CryptoJS.js一样",-1),c=t("p",null,"使用方法：",-1),a=t("p",null,"复制代码 import CryptoJS from 'CryptoJS.js';",-1),d=t("p",null,"//aes加密 var aseKey ='你的key' function Encrypt(message) { var encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(); return encrypt }",-1),_=t("p",null,"//aes解密 function aesDecypt(encrypt){ console.log(CryptoJS) var decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8); return decrypt } 复制代码",-1),l=t("p",null,"DES加密解密只需把AES改为DES就行了，CBC等模式直接把mode改为：CryptoJS.mode.CBC就行了 MD5加密只要用 CryptoJS.MD5()函数就行了 同时还有很多加密方式，可以打印CryptoJS看下",-1),y=[n,p,c,a,d,_,l];function i(m,S){return r(),o("div",null,y)}const u=e(s,[["render",i],["__file","单文件加密.html.vue"]]),J=JSON.parse('{"path":"/%E5%8A%A0%E5%AF%86/%E5%8D%95%E6%96%87%E4%BB%B6%E5%8A%A0%E5%AF%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"加密/单文件加密.md"}');export{u as comp,J as data};
