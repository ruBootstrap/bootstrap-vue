(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{487:function(n,l){n.exports={baseTOC:{top:"#hover",title:"Hover",toc:[{href:"#overview",label:"Overview"},{href:"#directive-syntax-and-usage",label:"Directive syntax and usage",toc:[{href:"#usage-example",label:"Usage example"}]},{href:"#live-example",label:"Live example"},{href:"#accessibility-concerns",label:"Accessibility concerns"}]},titleLead:'<h1 id="hover" class="bv-no-focus-ring"><span class="bd-content-title">Hover</span></h1> <p class="bd-lead"><code class="text-nowrap" translate="no">v-b-hover</code> is a lightweight directive that allows you to react when an element either becomes hovered or unhovered.</p>',body:'<h2 id="overview" class="bv-no-focus-ring"><span class="bd-content-title">Overview<a class="anchorjs-link" href="#overview" aria-labelledby="overview"></a></span></h2> <p>The <code class="text-nowrap" translate="no">v-b-hover</code> directive can be used as an alternative to using custom CSS to handle hover states.</p> <ul> <li><code class="text-nowrap" translate="no">v-b-hover</code> will call your callback method with a boolean value indicating if the element is hovered or not.</li> <li>The directive can be placed on almost any element or component.</li> <li>Internally, BootstrapVue uses this directive in several components.</li> </ul> <h2 id="directive-syntax-and-usage" class="bv-no-focus-ring"><span class="bd-content-title">Directive syntax and usage<a class="anchorjs-link" href="#directive-syntax-and-usage" aria-labelledby="directive-syntax-and-usage"></a></span></h2> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-b-hover</span>=<span class="hljs-string">&quot;callback&quot;</span>&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><p>Where callback is required:</p> <ul> <li>A function reference that will be called whenever hover state changes. The callback is passed a single boolean argument. <code class="text-nowrap" translate="no">true</code> indicates that the element (or component) is hovered by the users pointing device, or <code class="text-nowrap" translate="no">false</code> if the element is not hovered.</li> </ul> <p>The directive has no modifiers.</p> <h3 id="usage-example" class="bv-no-focus-ring"><span class="bd-content-title">Usage example<a class="anchorjs-link" href="#usage-example" aria-labelledby="usage-example"></a></span></h3> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-b-hover</span>=<span class="hljs-string">&quot;hoverHandler&quot;</span>&gt;</span> ... <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      <span class="hljs-function"><span class="hljs-title">hoverHandler</span>(<span class="hljs-params">isHovered</span>)</span> {\n        <span class="hljs-keyword">if</span> (isHovered) {\n          <span class="hljs-comment">// Do something</span>\n        } <span class="hljs-keyword">else</span> {\n          <span class="hljs-comment">// Do something else</span>\n        }\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></pre></div><h2 id="live-example" class="bv-no-focus-ring"><span class="bd-content-title">Live example<a class="anchorjs-link" href="#live-example" aria-labelledby="live-example"></a></span></h2> <p>In the following, we are swapping icons and text color depending on the hover state of the element:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-b-hover</span>=<span class="hljs-string">&quot;handleHover&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;border rounded py-3 px-4&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-icon</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;isHovered&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;battery-full&quot;</span> <span class="hljs-attr">scale</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-icon</span> <span class="hljs-attr">v-else</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;battery&quot;</span> <span class="hljs-attr">scale</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-2&quot;</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;isHovered ? &#x27;text-danger&#x27; : &#x27;&#x27;&quot;</span>&gt;</span>Hover this area<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">isHovered</span>: <span class="hljs-literal">false</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      <span class="hljs-function"><span class="hljs-title">handleHover</span>(<span class="hljs-params">hovered</span>)</span> {\n        <span class="hljs-built_in">this</span>.isHovered = hovered\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-v-hover-example.vue --&gt;</span></pre></div><h2 id="accessibility-concerns" class="bv-no-focus-ring"><span class="bd-content-title">Accessibility concerns<a class="anchorjs-link" href="#accessibility-concerns" aria-labelledby="accessibility-concerns"></a></span></h2> <p>Hover state should not be used to convey special meaning, as screen reader users and keyboard only users typically can not trigger hover state on elements.</p>'}}}]);