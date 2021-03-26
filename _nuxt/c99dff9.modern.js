(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{497:function(n,l){n.exports={baseTOC:{top:"#component-img-src-resolving",title:"Component img src resolving",toc:[{href:"#using-project-relative-image-urls-for-bootstrapvue-custom-components",label:"Using project relative image URLs for BootstrapVue custom components"},{href:"#vue-loader-transformasseturls-to-resolve-img-paths",label:"Vue Loader transformAssetUrls to resolve img paths",toc:[{href:"#vue-cli-3-support",label:"Vue CLI 3 Support"},{href:"#configuring-transformasseturls-in-nuxtjs",label:"Configuring transformAssetUrls in Nuxt.js"}]},{href:"#using-require-to-resolve-image-paths",label:"Using require to resolve image paths"}]},titleLead:'<h1 id="component-img-src-resolving" class="bv-no-focus-ring"><span class="bd-content-title">Component img src resolving</span></h1>',body:'<h2 id="using-project-relative-image-urls-for-bootstrapvue-custom-components" class="bv-no-focus-ring"><span class="bd-content-title">Using project relative image URLs for BootstrapVue custom components<a class="anchorjs-link" href="#using-project-relative-image-urls-for-bootstrapvue-custom-components" aria-labelledby="using-project-relative-image-urls-for-bootstrapvue-custom-components"></a></span></h2> <p>vue-loader automatically converts project relative <code class="text-nowrap" translate="no">src</code> attributes on <code class="text-nowrap" translate="no">&lt;img&gt;</code> tags, but doesn&#39;t automatically for BootstrapVue custom components that accept image src url tags.</p> <h2 id="vue-loader-transformasseturls-to-resolve-img-paths" class="bv-no-focus-ring"><span class="bd-content-title">Vue Loader <code class="text-nowrap" translate="no">transformAssetUrls</code> to resolve img paths<a class="anchorjs-link" href="#vue-loader-transformasseturls-to-resolve-img-paths" aria-labelledby="vue-loader-transformasseturls-to-resolve-img-paths"></a></span></h2> <p>To have your project convert these custom component image URLs for you, you will need to customize the <a href="https://vue-loader.vuejs.org/options.html#transformasseturls" target="_blank" rel="noopener"><code class="text-nowrap" translate="no">transformAssetUrls</code></a> <code class="text-nowrap" translate="no">option</code> for <code class="text-nowrap" translate="no">vue-loader</code> in your webpack config.</p> <p>The default value for <code class="text-nowrap" translate="no">transformAssetUrls</code> is:</p> <div class="bd-code"><pre class="hljs js p-2" translate="no"><span class="hljs-keyword">const</span> options = {\n  <span class="hljs-attr">transformAssetUrls</span>: {\n    <span class="hljs-attr">video</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;poster&#x27;</span>],\n    <span class="hljs-attr">source</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n    <span class="hljs-attr">img</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n    <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;xlink:href&#x27;</span>\n  }\n}</pre></div><p>To allow BootstrapVue components to use project relative URLs, use the following configuration:</p> <div class="bd-code"><pre class="hljs js p-2" translate="no"><span class="hljs-keyword">const</span> options = {\n  <span class="hljs-attr">transformAssetUrls</span>: {\n    <span class="hljs-attr">video</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;poster&#x27;</span>],\n    <span class="hljs-attr">source</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n    <span class="hljs-attr">img</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n    <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;xlink:href&#x27;</span>,\n    <span class="hljs-string">&#x27;b-avatar&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n    <span class="hljs-string">&#x27;b-img&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n    <span class="hljs-string">&#x27;b-img-lazy&#x27;</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;blank-src&#x27;</span>],\n    <span class="hljs-string">&#x27;b-card&#x27;</span>: <span class="hljs-string">&#x27;img-src&#x27;</span>,\n    <span class="hljs-string">&#x27;b-card-img&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n    <span class="hljs-string">&#x27;b-card-img-lazy&#x27;</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;blank-src&#x27;</span>],\n    <span class="hljs-string">&#x27;b-carousel-slide&#x27;</span>: <span class="hljs-string">&#x27;img-src&#x27;</span>,\n    <span class="hljs-string">&#x27;b-embed&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>\n  }\n}</pre></div><p>This will allow you to use the following format in your <code class="text-nowrap" translate="no">.vue</code> files:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;~/static/picture.jpg&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">b-card-img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;~/static/picture.jpg&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-card-img</span>&gt;</span></pre></div><h3 id="vue-cli-3-support" class="bv-no-focus-ring"><span class="bd-content-title">Vue CLI 3 Support<a class="anchorjs-link" href="#vue-cli-3-support" aria-labelledby="vue-cli-3-support"></a></span></h3> <p>Vue CLI 3 changed the way that webpack compiles a Vue app, in order to make BootstrapVue work again, you need to do the following steps:</p> <ol> <li> Create <code class="text-nowrap" translate="no">vue.config.js</code> in the root directory (next to <code class="text-nowrap" translate="no">package.json</code>).</li> <li> Put the following code</li> </ol> <div class="bd-code"><pre class="hljs js p-2" translate="no"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">chainWebpack</span>: <span class="hljs-function"><span class="hljs-params">config</span> =&gt;</span> {\n    config.module\n      .rule(<span class="hljs-string">&#x27;vue&#x27;</span>)\n      .use(<span class="hljs-string">&#x27;vue-loader&#x27;</span>)\n      .loader(<span class="hljs-string">&#x27;vue-loader&#x27;</span>)\n      .tap(<span class="hljs-function"><span class="hljs-params">options</span> =&gt;</span> {\n        options.transformAssetUrls = {\n          <span class="hljs-attr">img</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n          <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;xlink:href&#x27;</span>,\n          <span class="hljs-string">&#x27;b-avatar&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n          <span class="hljs-string">&#x27;b-img&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n          <span class="hljs-string">&#x27;b-img-lazy&#x27;</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;blank-src&#x27;</span>],\n          <span class="hljs-string">&#x27;b-card&#x27;</span>: <span class="hljs-string">&#x27;img-src&#x27;</span>,\n          <span class="hljs-string">&#x27;b-card-img&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n          <span class="hljs-string">&#x27;b-card-img-lazy&#x27;</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;blank-src&#x27;</span>],\n          <span class="hljs-string">&#x27;b-carousel-slide&#x27;</span>: <span class="hljs-string">&#x27;img-src&#x27;</span>,\n          <span class="hljs-string">&#x27;b-embed&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>\n        }\n\n        <span class="hljs-keyword">return</span> options\n      })\n  }\n}</pre></div><h3 id="configuring-transformasseturls-in-nuxtjs" class="bv-no-focus-ring"><span class="bd-content-title">Configuring <code class="text-nowrap" translate="no">transformAssetUrls</code> in Nuxt.js<a class="anchorjs-link" href="#configuring-transformasseturls-in-nuxtjs" aria-labelledby="configuring-transformasseturls-in-nuxtjs"></a></span></h3> <p>In your <code class="text-nowrap" translate="no">nuxt.config.js</code> file, add the following to your build section:</p> <div class="bd-code"><pre class="hljs js p-2" translate="no"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">build</span>: {\n    <span class="hljs-function"><span class="hljs-title">extend</span>(<span class="hljs-params">config</span>)</span> {\n      <span class="hljs-keyword">const</span> vueLoader = config.module.rules.find(<span class="hljs-function"><span class="hljs-params">rule</span> =&gt;</span> rule.loader === <span class="hljs-string">&#x27;vue-loader&#x27;</span>)\n      vueLoader.options.transformAssetUrls = {\n        <span class="hljs-attr">video</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;poster&#x27;</span>],\n        <span class="hljs-attr">source</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n        <span class="hljs-attr">img</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n        <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;xlink:href&#x27;</span>,\n        <span class="hljs-string">&#x27;b-avatar&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n        <span class="hljs-string">&#x27;b-img&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n        <span class="hljs-string">&#x27;b-img-lazy&#x27;</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;blank-src&#x27;</span>],\n        <span class="hljs-string">&#x27;b-card&#x27;</span>: <span class="hljs-string">&#x27;img-src&#x27;</span>,\n        <span class="hljs-string">&#x27;b-card-img&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>,\n        <span class="hljs-string">&#x27;b-card-img-lazy&#x27;</span>: [<span class="hljs-string">&#x27;src&#x27;</span>, <span class="hljs-string">&#x27;blank-src&#x27;</span>],\n        <span class="hljs-string">&#x27;b-carousel-slide&#x27;</span>: <span class="hljs-string">&#x27;img-src&#x27;</span>,\n        <span class="hljs-string">&#x27;b-embed&#x27;</span>: <span class="hljs-string">&#x27;src&#x27;</span>\n      }\n    }\n  }\n}</pre></div><p>If using the <a href="/docs#nuxtjs-module" class="font-weight-bold">BootstrapVue Nuxt</a> module with Nuxt.js, the plugin module will automatically add in the BootstrapVue specific <code class="text-nowrap" translate="no">transformAssetUrls</code> configuration for you.</p> <h2 id="using-require-to-resolve-image-paths" class="bv-no-focus-ring"><span class="bd-content-title">Using <code class="text-nowrap" translate="no">require</code> to resolve image paths<a class="anchorjs-link" href="#using-require-to-resolve-image-paths" aria-labelledby="using-require-to-resolve-image-paths"></a></span></h2> <p>If you cannot set the <code class="text-nowrap" translate="no">transformAssetUrls</code> in your view-loader config, you can alternatively use the <code class="text-nowrap" translate="no">require</code> method:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#x27;../static/picture.jpg&#x27;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-img</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">b-card-img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#x27;../static/picture.jpg&#x27;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-card-img</span>&gt;</span></pre></div>'}}}]);