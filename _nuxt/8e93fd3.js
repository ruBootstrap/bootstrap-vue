(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{594:function(n,l){n.exports={baseTOC:{top:"#spinner",title:"Spinner",toc:[{href:"#spinner-types",label:"Spinner types",toc:[{href:"#border-spinner",label:"Border spinner"},{href:"#grow-spinner",label:"Grow spinner"}]},{href:"#spinner-color-variants",label:"Spinner color variants"},{href:"#size",label:"Size"},{href:"#alignment",label:"Alignment",toc:[{href:"#margin",label:"Margin"}]},{href:"#размещение",label:"Размещение",toc:[{href:"#flex",label:"Flex"},{href:"#floats",label:"Floats"},{href:"#text-align",label:"Text align"}]},{href:"#spinners-in-buttons",label:"Spinners in buttons"},{href:"#spinner-accessibility",label:"Spinner accessibility"},{href:"#смотрите-также",label:"Смотрите также"}]},titleLead:'<h1 id="spinner" class="bv-no-focus-ring"><span class="bd-content-title">Spinner</span></h1> <p class="bd-lead">The <code class="text-nowrap" translate="no">&lt;b-spinner&gt;</code> component can be used to show the loading state in your projects. They&#39;re rendered only with basic HTML and CSS as a lightweight Vue functional component. Their appearance, alignment, and sizing can be easily customized with a few built-in props and/or Bootstrap v4 utility classes.</p>',body:'<p>Spinners can be placed just about anywhere, including inside buttons, alerts, and even <code class="text-nowrap" translate="no">&lt;b-table&gt;</code>&#39;s busy slot.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Spinning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Spinning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Spinning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Spinning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Spinning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Spinning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinners.vue --&gt;</span></pre></div><h2 id="spinner-types" class="bv-no-focus-ring"><span class="bd-content-title">Spinner types<a class="anchorjs-link" href="#spinner-types" aria-labelledby="spinner-types"></a></span></h2> <p>Bootstrap includes two types of spinners. The default spinner type is called <code class="text-nowrap" translate="no">border</code> (spinning circle border), and the optional type <code class="text-nowrap" translate="no">grow</code> (a throbber style indicator).</p> <h3 id="border-spinner" class="bv-no-focus-ring"><span class="bd-content-title">Border spinner<a class="anchorjs-link" href="#border-spinner" aria-labelledby="border-spinner"></a></span></h3> <p>Use the default <code class="text-nowrap" translate="no">border</code> type spinners for a lightweight loading indicator.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Loading...&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-border.vue --&gt;</span></pre></div><h3 id="grow-spinner" class="bv-no-focus-ring"><span class="bd-content-title">Grow spinner<a class="anchorjs-link" href="#grow-spinner" aria-labelledby="grow-spinner"></a></span></h3> <p>If you don&#39;t fancy a <code class="text-nowrap" translate="no">border</code> spinner, switch to the <code class="text-nowrap" translate="no">grow</code> spinner by setting the prop <code class="text-nowrap" translate="no">type</code> to <code class="text-nowrap" translate="no">&#39;grow&#39;</code>. While it doesn&#39;t technically spin, it does repeatedly grow!</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Loading...&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-grow.vue --&gt;</span></pre></div><h2 id="spinner-color-variants" class="bv-no-focus-ring"><span class="bd-content-title">Spinner color variants<a class="anchorjs-link" href="#spinner-color-variants" aria-labelledby="spinner-color-variants"></a></span></h2> <p>Spinners use <code class="text-nowrap" translate="no">currentColor</code> for their color, meaning it inherits the current font color. You can customize the color using the standard text color variants using the <code class="text-nowrap" translate="no">variant</code> prop, or place classes or styles on the component to change its color.</p> <p>The <code class="text-nowrap" translate="no">variant</code> prop translates the variant name to the Bootstrap v4 class <code class="text-nowrap" translate="no">.text-{variant}</code>, so if you have custom defined text color variants, feel free to use them via the <code class="text-nowrap" translate="no">variant</code> prop.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center mb-3 d-flex justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span>\n        <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;variant in variants&quot;</span>\n        <span class="hljs-attr">:variant</span>=<span class="hljs-string">&quot;variant&quot;</span>\n        <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;variant&quot;</span>\n      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center d-flex justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span>\n        <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;variant in variants&quot;</span>\n        <span class="hljs-attr">:variant</span>=<span class="hljs-string">&quot;variant&quot;</span>\n        <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;variant&quot;</span>\n        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span>\n      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">variants</span>: [<span class="hljs-string">&#x27;primary&#x27;</span>, <span class="hljs-string">&#x27;secondary&#x27;</span>, <span class="hljs-string">&#x27;danger&#x27;</span>, <span class="hljs-string">&#x27;warning&#x27;</span>, <span class="hljs-string">&#x27;success&#x27;</span>, <span class="hljs-string">&#x27;info&#x27;</span>, <span class="hljs-string">&#x27;light&#x27;</span>, <span class="hljs-string">&#x27;dark&#x27;</span>]\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-variants.vue --&gt;</span></pre></div><p><strong>Why not use <code class="text-nowrap" translate="no">border-color</code> utilities?</strong> Each <code class="text-nowrap" translate="no">border</code> spinner specifies a <code class="text-nowrap" translate="no">transparent</code> border for at least one side, so <code class="text-nowrap" translate="no">.border-{color}</code> utilities would override that.</p> <h2 id="size" class="bv-no-focus-ring"><span class="bd-content-title">Size<a class="anchorjs-link" href="#size" aria-labelledby="size"></a></span></h2> <p>Set the prop <code class="text-nowrap" translate="no">small</code> to <code class="text-nowrap" translate="no">true</code> to make a smaller spinner that can quickly be used within other components.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Small Spinner&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Small Spinner&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-sizes.vue --&gt;</span></pre></div><p>Or, use custom CSS or inline styles to change the dimensions as needed.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 3rem; height: 3rem;&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Large Spinner&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 3rem; height: 3rem;&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Large Spinner&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-sizes-custom.vue --&gt;</span></pre></div><h2 id="alignment" class="bv-no-focus-ring"><span class="bd-content-title">Alignment<a class="anchorjs-link" href="#alignment" aria-labelledby="alignment"></a></span></h2> <p>Spinners in Bootstrap are built with <code class="text-nowrap" translate="no">rem</code>s, <code class="text-nowrap" translate="no">currentColor</code>, and <code class="text-nowrap" translate="no">display: inline-flex</code>. This means they can easily be resized, recolored, and quickly aligned.</p> <h3 id="margin" class="bv-no-focus-ring"><span class="bd-content-title">Margin<a class="anchorjs-link" href="#margin" aria-labelledby="margin"></a></span></h3> <p>Use margin utilities like <code class="text-nowrap" translate="no">.m-5</code> for easy spacing.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-5&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Busy&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-margin.vue --&gt;</span></pre></div><h2 id="размещение" class="bv-no-focus-ring"><span class="bd-content-title">Размещение<a class="anchorjs-link" href="#размещение" aria-labelledby="размещение"></a></span></h2> <p>Use flexbox utilities, float utilities, or text alignment utility classes to place spinners exactly where you need them in any situation.</p> <h3 id="flex" class="bv-no-focus-ring"><span class="bd-content-title">Flex<a class="anchorjs-link" href="#flex" aria-labelledby="flex"></a></span></h3> <p>Using flex utility classes:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex justify-content-center mb-3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Loading...&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex align-items-center&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ml-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-flex.vue --&gt;</span></pre></div><h3 id="floats" class="bv-no-focus-ring"><span class="bd-content-title">Floats<a class="anchorjs-link" href="#floats" aria-labelledby="floats"></a></span></h3> <p>Using float utility classes:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;clearfix&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-right&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Floated Right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-floats.vue --&gt;</span></pre></div><h3 id="text-align" class="bv-no-focus-ring"><span class="bd-content-title">Text align<a class="anchorjs-link" href="#text-align" aria-labelledby="text-align"></a></span></h3> <p>Using text alignment utility classes:</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text Centered&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-text-align.vue --&gt;</span></pre></div><h2 id="spinners-in-buttons" class="bv-no-focus-ring"><span class="bd-content-title">Spinners in buttons<a class="anchorjs-link" href="#spinners-in-buttons" aria-labelledby="spinners-in-buttons"></a></span></h2> <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the label text out of the spinner element and utilize button text as needed.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sr-only&quot;</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    Loading...\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-buttons.vue --&gt;</span></pre></div><h2 id="spinner-accessibility" class="bv-no-focus-ring"><span class="bd-content-title">Spinner accessibility<a class="anchorjs-link" href="#spinner-accessibility" aria-labelledby="spinner-accessibility"></a></span></h2> <p>Place a hidden label text inside the spinner for screen reader users, via the <code class="text-nowrap" translate="no">label</code> prop or <code class="text-nowrap" translate="no">label</code> slot. The content will be placed <em>inside</em> the spinner wrapped in a <code class="text-nowrap" translate="no">&lt;span&gt;</code> element that has the class <code class="text-nowrap" translate="no">sr-only</code>, which will make the label available to screen reader users.</p> <p>For accessibility purposes, each spinner will automatically have a <code class="text-nowrap" translate="no">role=&quot;status&quot;</code> attribute when a label is provided. You can easily customize the role if required via prop <code class="text-nowrap" translate="no">role</code>. The specified <code class="text-nowrap" translate="no">role</code> will not be applied when no label is provided.</p> <p>As well, when no label is provided, the spinner will automatically have the attribute <code class="text-nowrap" translate="no">aria-hidden=&quot;true&quot;</code> to hide the spinner from screen reader users.</p> <h2 id="смотрите-также" class="bv-no-focus-ring"><span class="bd-content-title">Смотрите также<a class="anchorjs-link" href="#смотрите-также" aria-labelledby="смотрите-также"></a></span></h2> <p>An alternative to the <code class="text-nowrap" translate="no">&lt;b-spinner&gt;</code> component are <a href="/docs/icons/#animated-icons" class="font-weight-bold">animated icons</a>.</p>'}}}]);