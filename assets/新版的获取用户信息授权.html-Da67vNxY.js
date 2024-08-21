import{_ as s,c as n,o as e,a}from"./app-90N25QkG.js";const i={},l=a(`<h1 id="新版的获取用户信息授权" tabindex="-1"><a class="header-anchor" href="#新版的获取用户信息授权"><span>新版的获取用户信息授权</span></a></h1><p>包含用户昵称，头像等</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;button  bindtap=&quot;bindGetUserInfo&quot; class=&quot;btnPhone {{wechat_name !=&#39;&#39;?&#39;btnPhoneActive&#39;:&#39;&#39;}}&quot;&gt;授权登录&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 弹出授权 开始</span>
<span class="line">    bindGetUserInfo: function(res) {</span>
<span class="line">      var that = this</span>
<span class="line">      // getUserProfile</span>
<span class="line">      wx.getUserProfile({</span>
<span class="line">              desc: &#39;展示用户信息&#39;,    //不能为空</span>
<span class="line">                success(res){</span>
<span class="line">                  console.log(&quot;xinban获取用户信息&quot;,res)</span>
<span class="line">                  that.setData({</span>
<span class="line">                    wechat_name:res.userInfo.nickName,</span>
<span class="line">                    headimgurl:res.userInfo.avatarUrl,</span>
<span class="line">                    province:res.userInfo.province,</span>
<span class="line">                    country:res.userInfo.country,</span>
<span class="line">                    gender:res.userInfo.gender,</span>
<span class="line">                    city:res.userInfo.city,</span>
<span class="line">                })</span>
<span class="line">                that.postInfo()</span>
<span class="line">                wx.showToast({</span>
<span class="line">                  title: &#39;授权成功!&#39;, // 标题</span>
<span class="line">                  icon: &#39;success&#39;,  // 图标类型，默认success</span>
<span class="line">                  duration: 1500  // 提示窗停留时间，默认1500ms</span>
<span class="line">                })</span>
<span class="line">              }      </span>
<span class="line">      })</span>
<span class="line">        console.log(res);</span>
<span class="line">     },</span>
<span class="line">  // 弹出授权 结束</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(r,d){return e(),n("div",null,t)}const v=s(i,[["render",c],["__file","新版的获取用户信息授权.html.vue"]]),o=JSON.parse('{"path":"/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E6%96%B0%E7%89%88%E7%9A%84%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E6%8E%88%E6%9D%83.html","title":"新版的获取用户信息授权","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724247277000,"contributors":[{"name":"前端架构师","email":"62106726+qdleader@users.noreply.github.com","commits":1}]},"filePathRelative":"微信小程序/新版的获取用户信息授权.md"}');export{v as comp,o as data};
