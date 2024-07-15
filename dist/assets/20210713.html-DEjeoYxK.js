import{_ as n,o as s,c as a,e}from"./app-DaEfwsM-.js";const p={},t=e(`<h2 id="限制输入正整数或小数-可控制位数" tabindex="-1"><a class="header-anchor" href="#限制输入正整数或小数-可控制位数"><span>限制输入正整数或小数(可控制位数)</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">value</span> 输入的值</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">digitCount</span> 要限制输入的小数位数</span>
<span class="line"> * <span class="token keyword">@returns</span> 格式化之后的数字</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">formatPositiveNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> digitCount<span class="token operator">=</span><span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> digitCount <span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^(\\\\d+\\\\.?\\\\d{0,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>digitCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}).*$</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  value <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^\\d.]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> value<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> formatPositiveNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/inputFormat.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>el<span class="token operator">-</span>input </span>
<span class="line">    v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;number1&quot;</span> </span>
<span class="line">    clearable </span>
<span class="line">    size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> </span>
<span class="line">    maxlength<span class="token operator">=</span><span class="token string">&quot;5&quot;</span> </span>
<span class="line">    @input<span class="token operator">=</span><span class="token string">&quot;$event=formatPositiveNumber($event, 2)&quot;</span> </span>
<span class="line">    placeholder<span class="token operator">=</span><span class="token string">&quot;请输入&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>input<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function o(c,i){return s(),a("div",null,l)}const u=n(p,[["render",o],["__file","20210713.html.vue"]]),k=JSON.parse('{"path":"/blogs/Frontend/20210713.html","title":"Vue项目中el-input限制用户强制输入正整数或保留一定位数小数","lang":"en-US","frontmatter":{"title":"Vue项目中el-input限制用户强制输入正整数或保留一定位数小数","date":"2021-07-13T00:00:00.000Z","author":"angrybird233","tags":["Vue"],"categories":["Frontend"]},"headers":[{"level":2,"title":"限制输入正整数或小数(可控制位数)","slug":"限制输入正整数或小数-可控制位数","link":"#限制输入正整数或小数-可控制位数","children":[]},{"level":2,"title":"如何使用","slug":"如何使用","link":"#如何使用","children":[]}],"git":{"createdTime":1720607009000,"updatedTime":1720607009000,"contributors":[{"name":"wanggang","email":"wanggang@shouyinongye.com","commits":1}]},"filePathRelative":"blogs/Frontend/20210713.md"}');export{u as comp,k as data};