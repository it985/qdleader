import{_ as e,c as l,o as t,a}from"./app-90N25QkG.js";const h={},s=a('<h1 id="vc001-v-html有哪些问题" tabindex="-1"><a class="header-anchor" href="#vc001-v-html有哪些问题"><span>VC001-v-html有哪些问题</span></a></h1><p>安全问题,性能问题,无法使用指令,无法使用过滤器</p><h2 id="安全性问题" tabindex="-1"><a class="header-anchor" href="#安全性问题"><span>安全性问题：</span></a></h2><p>v-html指令最终调用的是innerHTML方法将指令的value插入到对应的元素里，这就是容易造成xss攻击漏洞的原因,特别是当插入的 HTML 内容来自用户输入或未经可靠验证的来源时。恶意用户可能会注入恶意代码或引发跨站脚本攻击（XSS）等攻击，从而危害到用户的浏览器和数据安全。因此，应该避免直接将不受信任的内容通过 v-html 渲染到模板中。</p><h2 id="可读性降低" tabindex="-1"><a class="header-anchor" href="#可读性降低"><span>可读性降低：</span></a></h2><p>使用 v-html 会导致模板的可读性下降，因为模板中的逻辑和结构被部分放在了字符串中，难以直观地理解和维护。特别是当 HTML 内容比较复杂或包含大量动态代码时，代码的可读性将进一步降低。</p><h2 id="性能问题" tabindex="-1"><a class="header-anchor" href="#性能问题"><span>性能问题：</span></a></h2><p>由于 v-html 会动态生成 HTML 内容，浏览器需要对该内容进行解析和渲染，这可能会导致性能问题。相比于直接使用 Vue 的模板语法和组件来渲染内容，使用 v-html 可能会引起不必要的重渲染、布局回流等性能损耗。</p><h2 id="不作为模板编译" tabindex="-1"><a class="header-anchor" href="#不作为模板编译"><span>不作为模板编译</span></a></h2><p>v-html更新的是直接使用元素的innerHTML方法，内容按普通HTML插入，不会作为Vue模板进行编译，如果试图使用v-html组合模板，可以重新考虑是否通过使用组件来替代。另外后端返回;script标签中的代码是不会直接执行的，这是浏览器的策略，如果需要的话可以在$nextTick回调中动态创建;script标签然后src引入代码url即可。</p><h2 id="scoped样式不能应用" tabindex="-1"><a class="header-anchor" href="#scoped样式不能应用"><span>scoped样式不能应用</span></a></h2><p>在单文件组件里，scoped的样式不会应用在v-html内部，因为那部分HTML没有被Vue的模板编译器处理，如果你希望针对v-html的内容设置带作用域的CSS，你可以替换为CSS Modules或用一个额外的全局;style元素手动设置类似BEM的作用域策略。此外提一下关于样式隔离的话，Shadow DOM也是个不错的解决方案</p><p>综上所述，尽管 v-html 提供了方便的功能，但在使用时需要注意安全性和潜在的性能问题。应该尽量减少使用 v-html，并避免将不受信任的内容直接渲染到模板中，以确保代码的安全和可维护性。</p>',13),n=[s];function c(r,i){return t(),l("div",null,n)}const p=e(h,[["render",c],["__file","VC001-v-html有哪些问题.html.vue"]]),o=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/vue%E7%AF%87/%E8%BE%83%E5%86%B7%E7%B1%BB/VC001-v-html%E6%9C%89%E5%93%AA%E4%BA%9B%E9%97%AE%E9%A2%98.html","title":"VC001-v-html有哪些问题","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安全性问题：","slug":"安全性问题","link":"#安全性问题","children":[]},{"level":2,"title":"可读性降低：","slug":"可读性降低","link":"#可读性降低","children":[]},{"level":2,"title":"性能问题：","slug":"性能问题","link":"#性能问题","children":[]},{"level":2,"title":"不作为模板编译","slug":"不作为模板编译","link":"#不作为模板编译","children":[]},{"level":2,"title":"scoped样式不能应用","slug":"scoped样式不能应用","link":"#scoped样式不能应用","children":[]}],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"前端面试/vue篇/较冷类/VC001-v-html有哪些问题.md"}');export{p as comp,o as data};
