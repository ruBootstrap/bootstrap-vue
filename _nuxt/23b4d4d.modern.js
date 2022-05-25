(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{494:function(t,e){t.exports={baseTOC:{top:"#router-link-support",title:"Router link support",toc:[{href:"#common-router-link-props",label:"Common router link props",toc:[{href:"#to",label:"to"},{href:"#replace",label:"replace"},{href:"#append",label:"append"},{href:"#router-tag",label:"router-tag"},{href:"#active-class",label:"active-class"},{href:"#exact",label:"exact"},{href:"#exact-active-class",label:"exact-active-class"},{href:"#exact-path",label:"exact-path"},{href:"#exact-path-active-class",label:"exact-path-active-class"}]},{href:"#nuxtjs-specific-router-link-props",label:"Nuxt.js specific router link props",toc:[{href:"#prefetch",label:"prefetch"},{href:"#no-prefetch",label:"no-prefetch"}]},{href:"#third-party-router-link-support",label:"Third-party router link support",toc:[{href:"#router-component-name",label:"router-component-name"}]}]},titleLead:'<h1 id="router-link-support" class="bv-no-focus-ring"><span class="bd-content-title">Router link support</span></h1> <p class="bd-lead">Several BootstrapVue components support rendering <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> components compatible with <em>Vue Router</em> and <em>Nuxt.js</em>. For more information, see the <a href="https://router.vuejs.org/" target="_blank" rel="noopener">official Vue Router docs</a> and <a href="https://nuxtjs.org/" target="_blank" rel="noopener">official Nuxt.js docs</a>.</p>',body:'<h2 id="common-router-link-props" class="bv-no-focus-ring"><span class="bd-content-title">Common router link props<a class="anchorjs-link" href="#common-router-link-props" aria-labelledby="common-router-link-props"></a></span></h2> <p>In the following sections, we are using the <code class="text-nowrap" translate="no">&lt;b-link&gt;</code> component to render router links. <code class="text-nowrap" translate="no">&lt;b-link&gt;</code> is the building block of most of BootstrapVue&#39;s <em>actionable</em> components. You could use any other component that supports link generation such as <a href="/docs/components/link" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-link&gt;</code></a>, <a href="/docs/components/button" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-button&gt;</code></a>, <a href="/docs/components/avatar" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-avatar&gt;</code></a>, <a href="/docs/components/breadcrumb" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-breadcrumb-item&gt;</code></a>, <a href="/docs/components/list-group" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code></a>, <a href="/docs/components/nav" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-nav-item&gt;</code></a>, <a href="/docs/components/dropdown" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-dropdown-item&gt;</code></a>, and <a href="/docs/components/pagination-nav" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-pagination-nav&gt;</code></a>. Note that not all props are available on all components. Refer to the respective component documentation for details.</p> <h3 id="to" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">to</code><a class="anchorjs-link" href="#to" aria-labelledby="to"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">string | Location</code></li> <li>required to generate a <code class="text-nowrap" translate="no">&lt;router-link&gt;</code></li> </ul> <p>Denotes the target route of the link. When clicked, the value of the <code class="text-nowrap" translate="no">to</code> prop will be passed to <code class="text-nowrap" translate="no">router.push()</code> internally, so the value can be either a string or a location descriptor object.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Literal string --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Renders to --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- JavaScript expression using `v-bind` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">v-bind:to</span>=<span class="hljs-string">&quot;&#x27;home&#x27;&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Omitting `v-bind` is fine, just as binding any other prop --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;&#x27;home&#x27;&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Same as above --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &#x27;home&#x27; }&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Named route --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ name: &#x27;user&#x27;, params: { userId: 123 } }&quot;</span>&gt;</span>User<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- With query, resulting in `/register?plan=private` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &#x27;register&#x27;, query: { plan: &#x27;private&#x27; } }&quot;</span>&gt;</span>Register<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Render a non-router link by omitting `to` and specifying an `href` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/home&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h3 id="replace" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">replace</code><a class="anchorjs-link" href="#replace" aria-labelledby="replace"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">boolean</code></li> <li>default: <code class="text-nowrap" translate="no">false</code></li> </ul> <p>Setting <code class="text-nowrap" translate="no">replace</code> prop will call <code class="text-nowrap" translate="no">router.replace()</code> instead of <code class="text-nowrap" translate="no">router.push()</code> when clicked, so the navigation will not leave a history record.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &#x27;/abc&#x27;}&quot;</span> <span class="hljs-attr">replace</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h3 id="append" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">append</code><a class="anchorjs-link" href="#append" aria-labelledby="append"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">boolean</code></li> <li>default: <code class="text-nowrap" translate="no">false</code></li> </ul> <p>Setting <code class="text-nowrap" translate="no">append</code> prop always appends the relative path to the current path. For example, assuming we are navigating from <code class="text-nowrap" translate="no">/a</code> to a relative link <code class="text-nowrap" translate="no">b</code>, without <code class="text-nowrap" translate="no">append</code> we will end up at <code class="text-nowrap" translate="no">/b</code>, but with <code class="text-nowrap" translate="no">append</code> we will end up at <code class="text-nowrap" translate="no">/a/b</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &#x27;relative/path&#x27;}&quot;</span> <span class="hljs-attr">append</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h3 id="router-tag" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">router-tag</code><a class="anchorjs-link" href="#router-tag" aria-labelledby="router-tag"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">string</code></li> <li>default: <code class="text-nowrap" translate="no">&#39;a&#39;</code></li> </ul> <p>Sometimes we want <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> to render as another tag, e.g <code class="text-nowrap" translate="no">&lt;li&gt;</code>. Then we can use <code class="text-nowrap" translate="no">router-tag</code> prop to specify which tag to render to, and it will still listen to click events for navigation. <code class="text-nowrap" translate="no">router-tag</code> translates to the <code class="text-nowrap" translate="no">tag</code> prop on the final rendered <code class="text-nowrap" translate="no">&lt;router-link&gt;</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/foo&quot;</span> <span class="hljs-attr">router-tag</span>=<span class="hljs-string">&quot;li&quot;</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Renders as --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><p><strong>Note:</strong> Changing the tag from anything other than <code class="text-nowrap" translate="no">&lt;a&gt;</code> is discouraged, as it hinders accessibility of keyboard and/or screen-reader users, and is also not very SEO friendly.</p> <h3 id="active-class" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">active-class</code><a class="anchorjs-link" href="#active-class" aria-labelledby="active-class"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">string</code></li> <li>default: <code class="text-nowrap" translate="no">&#39;router-link-active&#39;</code> (<code class="text-nowrap" translate="no">&#39;nuxt-link-active&#39;</code> when using Nuxt.js)</li> </ul> <p>Configure the active CSS class applied when the link is active. Note the default value can also be configured globally via the <code class="text-nowrap" translate="no">linkActiveClass</code> <a href="https://router.vuejs.org/api/#linkactiveclass" target="_blank" rel="noopener">router constructor option</a>.</p> <p>With components that support router links (have a <code class="text-nowrap" translate="no">to</code> prop), you will want to set this to the class <code class="text-nowrap" translate="no">&#39;active&#39;</code> (or a space separated string that includes <code class="text-nowrap" translate="no">&#39;active&#39;</code>) to apply Bootstrap&#39;s active styling on the component when the current route matches the <code class="text-nowrap" translate="no">to</code> prop.</p> <h3 id="exact" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">exact</code><a class="anchorjs-link" href="#exact" aria-labelledby="exact"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">boolean</code></li> <li>default: <code class="text-nowrap" translate="no">false</code></li> </ul> <p>The default active class matching behavior is <strong>inclusive match</strong>. For example, <code class="text-nowrap" translate="no">&lt;b-link to=&quot;/a&quot;&gt;</code> will get this class applied as long as the current path starts with <code class="text-nowrap" translate="no">/a/</code> or is <code class="text-nowrap" translate="no">/a</code>.</p> <p>One consequence of this is that <code class="text-nowrap" translate="no">&lt;b-link to=&quot;/&quot;&gt;</code> will be active for every route! To force the link into &quot;exact match mode&quot;, use the <code class="text-nowrap" translate="no">exact</code> prop:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- This link will only be active at `/` --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span> <span class="hljs-attr">exact</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><p>Check out more examples explaining active link class <a href="https://jsfiddle.net/8xrk1n9f/" target="_blank" rel="noopener">live</a>.</p> <h3 id="exact-active-class" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">exact-active-class</code><a class="anchorjs-link" href="#exact-active-class" aria-labelledby="exact-active-class"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">string</code></li> <li>default: <code class="text-nowrap" translate="no">&#39;router-link-exact-active&#39;</code> (<code class="text-nowrap" translate="no">&#39;nuxt-link-exact-active&#39;</code> when using Nuxt.js)</li> <li>availability: Vue Router 2.5.0+</li> </ul> <p>Configure the active CSS class applied when the link is active with exact match. Note the default value can also be configured globally via the <code class="text-nowrap" translate="no">linkExactActiveClass</code> <a href="https://router.vuejs.org/api/#linkexactactiveclass" target="_blank" rel="noopener">router constructor option</a>.</p> <p>With components that support router links (have a <code class="text-nowrap" translate="no">to</code> prop), you will want to set this to the class <code class="text-nowrap" translate="no">&#39;active&#39;</code> (or a space separated string that includes <code class="text-nowrap" translate="no">&#39;active&#39;</code>) to apply Bootstrap&#39;s active styling on the component when the current route matches the <code class="text-nowrap" translate="no">to</code> prop.</p> <h3 id="exact-path" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">exact-path</code><a class="anchorjs-link" href="#exact-path" aria-labelledby="exact-path"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">boolean</code></li> <li>default: <code class="text-nowrap" translate="no">false</code></li> <li>availability: Vue Router 3.5.0+</li> </ul> <p>Allows matching only using the <code class="text-nowrap" translate="no">path</code> section of the url, effectively ignoring the <code class="text-nowrap" translate="no">query</code> and the <code class="text-nowrap" translate="no">hash</code> sections.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-comment">&lt;!-- this link will also be active at `/search?page=2` or `/search#filters` --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/search&quot;</span> <span class="hljs-attr">exact-path</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span></pre></div><h3 id="exact-path-active-class" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">exact-path-active-class</code><a class="anchorjs-link" href="#exact-path-active-class" aria-labelledby="exact-path-active-class"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">string</code></li> <li>default: <code class="text-nowrap" translate="no">&#39;router-link-exact-path-active&#39;</code></li> <li>availability: Vue Router 3.5.0+</li> </ul> <p>Configure the active CSS class applied when the link is active with exact path match. Note the default value can also be configured globally via the <code class="text-nowrap" translate="no">linkExactPathActiveClass</code> router constructor option.</p> <p>With components that support router links (have a <code class="text-nowrap" translate="no">to</code> prop), you will want to set this to the class <code class="text-nowrap" translate="no">&#39;active&#39;</code> (or a space separated string that includes <code class="text-nowrap" translate="no">&#39;active&#39;</code>) to apply Bootstrap&#39;s active styling on the component when the current route matches the <code class="text-nowrap" translate="no">to</code> prop.</p> <h2 id="nuxtjs-specific-router-link-props" class="bv-no-focus-ring"><span class="bd-content-title">Nuxt.js specific router link props<a class="anchorjs-link" href="#nuxtjs-specific-router-link-props" aria-labelledby="nuxtjs-specific-router-link-props"></a></span></h2> <p>When BootstrapVue detects that your app is running under <a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a>, it will render a <a href="https://nuxtjs.org/api/components-nuxt-link" target="_blank" rel="noopener"><code class="text-nowrap" translate="no">&lt;nuxt-link&gt;</code></a> sub component instead of a <code class="text-nowrap" translate="no">&lt;router-link&gt;</code>. <code class="text-nowrap" translate="no">&lt;nuxt-link&gt;</code> supports all of the above router link props, plus the following additional Nuxt.js specific props.</p> <h3 id="prefetch" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">prefetch</code><a class="anchorjs-link" href="#prefetch" aria-labelledby="prefetch"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">boolean</code></li> <li>default: <code class="text-nowrap" translate="no">null</code></li> <li>availability: Nuxt.js 2.10.0+ and BootstrapVue 2.15.0+</li> </ul> <p>To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting <code class="text-nowrap" translate="no">prefetch</code> to <code class="text-nowrap" translate="no">true</code> or <code class="text-nowrap" translate="no">false</code> will overwrite the default value of <code class="text-nowrap" translate="no">router.prefetchLinks</code> configured in the <code class="text-nowrap" translate="no">nuxt.config.js</code> configuration file.</p> <p><strong>Notes:</strong></p> <ul> <li>If you have are using a version of Nuxt.js <code class="text-nowrap" translate="no">&lt; 2.10.0</code>, then this prop will have no effect.</li> <li>Remember to <code class="text-nowrap" translate="no">v-bind</code> the prop value (e.g. <code class="text-nowrap" translate="no">:prefetch=&quot;true&quot;</code> or <code class="text-nowrap" translate="no">:prefetch=&quot;false&quot;</code>).</li> </ul> <p>Prefetching support requires <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener">IntersectionObserver</a> to be supported (see <a href="https://caniuse.com/intersectionobserver" target="_blank" rel="noopener">Can I use</a>). For browsers that do not support IntersectionObserver, you can use the following conditional polyfill in <code class="text-nowrap" translate="no">nuxt.config.js</code>:</p> <div class="bd-code"><pre class="hljs js p-2" translate="no"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">head</span>: {\n    <span class="hljs-attr">script</span>: [\n      {\n        <span class="hljs-attr">src</span>: <span class="hljs-string">&#x27;https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver&#x27;</span>,\n        <span class="hljs-attr">body</span>: <span class="hljs-literal">true</span>\n      }\n    ]\n  }\n}</pre></div><h3 id="no-prefetch" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">no-prefetch</code><a class="anchorjs-link" href="#no-prefetch" aria-labelledby="no-prefetch"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">boolean</code></li> <li>default: <code class="text-nowrap" translate="no">false</code></li> <li>availability: Nuxt.js 2.4.0+</li> </ul> <p>To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting <code class="text-nowrap" translate="no">no-prefetch</code> will disabled this feature for the specific link.</p> <p><strong>Note:</strong> If you have prefetching disabled in your <code class="text-nowrap" translate="no">nuxt.config.js</code> configuration (<code class="text-nowrap" translate="no">router: { prefetchLinks: false }</code>), or are using a version of Nuxt.js <code class="text-nowrap" translate="no">&lt; 2.4.0</code>, then this prop will have no effect.</p> <h2 id="third-party-router-link-support" class="bv-no-focus-ring"><span class="bd-content-title">Third-party router link support<a class="anchorjs-link" href="#third-party-router-link-support" aria-labelledby="third-party-router-link-support"></a></span></h2> <p><span class="badge badge-info small">v2.15.0+</span></p> <p>BootstrapVue auto detects using <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> and <code class="text-nowrap" translate="no">&lt;nuxt-link&gt;</code> link components. Some 3rd party frameworks also provide customized versions of <code class="text-nowrap" translate="no">&lt;router-link&gt;</code>, such as <a href="https://gridsome.org/docs/linking/" target="_blank" rel="noopener">Gridsome&#39;s <code class="text-nowrap" translate="no">&lt;g-link&gt;</code> component</a>. BootstrapVue can support these third party <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> compatible components via the use of the <code class="text-nowrap" translate="no">router-component-name</code> prop. All <code class="text-nowrap" translate="no">vue-router</code> props (excluding <code class="text-nowrap" translate="no">&lt;nuxt-link&gt;</code> specific props) will be passed to the specified router link component.</p> <p><strong>Notes:</strong></p> <ul> <li>The 3rd party component will only be used when the <code class="text-nowrap" translate="no">to</code> prop is set.</li> <li>Not all 3rd party components support all props supported by <code class="text-nowrap" translate="no">&lt;router-link&gt;</code>, nor do not support fully qualified domain name URLs, nor hash only URLs. Refer to the 3rd party component documentation for details.</li> </ul> <h3 id="router-component-name" class="bv-no-focus-ring"><span class="bd-content-title"><code class="text-nowrap" translate="no">router-component-name</code><a class="anchorjs-link" href="#router-component-name" aria-labelledby="router-component-name"></a></span></h3> <ul> <li>type: <code class="text-nowrap" translate="no">string</code></li> <li>default: <code class="text-nowrap" translate="no">undefined</code></li> <li>availability: BootstrapVue 2.15.0+</li> </ul> <p>Set this prop to the name of the <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> compatible component, e.g. <code class="text-nowrap" translate="no">&#39;g-link&#39;</code> for <a href="https://gridsome.org/" target="_blank" rel="noopener">Gridsome</a>.</p> <p>If left at the default, BootstrapVue will automatically select <code class="text-nowrap" translate="no">&lt;router-link&gt;</code> or <code class="text-nowrap" translate="no">&lt;nuxt-link&gt;</code>.</p>'}}}]);