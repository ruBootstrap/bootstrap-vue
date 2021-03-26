(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{575:function(n,e){n.exports={baseTOC:{top:"#color-variants-and-css-class-mapping",title:"Color variants and CSS class mapping",toc:[{href:"#base-variants",label:"Base variants"},{href:"#background-and-border-variants",label:"Background and border variants"},{href:"#text-variants",label:"Text variants"},{href:"#component-specific-variants",label:"Component specific variants",toc:[{href:"#alert-variants",label:"Alert variants"},{href:"#badge-variants",label:"Badge variants"},{href:"#button-variants",label:"Button variants"},{href:"#table-variants",label:"Table variants"},{href:"#popover-variants",label:"Popover variants"},{href:"#tooltip-variants",label:"Tooltip variants"},{href:"#toast-variants",label:"Toast variants"}]},{href:"#using-variant-classes",label:"Using variant classes"},{href:"#creating-custom-variants",label:"Creating custom variants"}]},titleLead:'<h1 id="color-variants-and-css-class-mapping" class="bv-no-focus-ring"><span class="bd-content-title">Color variants and CSS class mapping</span></h1> <p class="bd-lead">Below are the variants available when using the default Bootstrap v4 CSS. When using BootstrapVue components, the variants are referred to by their variant name, rather than by the underlying CSS classname</p>',body:'<h2 id="base-variants" class="bv-no-focus-ring"><span class="bd-content-title">Base variants<a class="anchorjs-link" href="#base-variants" aria-labelledby="base-variants"></a></span></h2> <ul> <li><code class="text-nowrap" translate="no">primary</code> - <span class="text-primary">Primary</span></li> <li><code class="text-nowrap" translate="no">secondary</code> - <span class="text-secondary">Secondary</span></li> <li><code class="text-nowrap" translate="no">success</code> - <span class="text-success">Success</span></li> <li><code class="text-nowrap" translate="no">warning</code> - <span class="text-warning">Warning</span></li> <li><code class="text-nowrap" translate="no">danger</code> - <span class="text-danger">Danger</span></li> <li><code class="text-nowrap" translate="no">info</code> - <span class="text-info">Info</span></li> <li><code class="text-nowrap" translate="no">light</code> - <span class="text-light">Light</span></li> <li><code class="text-nowrap" translate="no">dark</code> - <span class="text-dark">Dark</span></li> </ul> <p>The base variants will translate to various Bootstrap v4 contextual class names based on the component (and variant purpose) where they are used. See the sections below for details.</p> <h2 id="background-and-border-variants" class="bv-no-focus-ring"><span class="bd-content-title">Background and border variants<a class="anchorjs-link" href="#background-and-border-variants" aria-labelledby="background-and-border-variants"></a></span></h2> <p>All the <strong>base variants</strong> plus:</p> <ul> <li><code class="text-nowrap" translate="no">white</code></li> <li><code class="text-nowrap" translate="no">transparent</code></li> </ul> <p>These translate to class names <code class="text-nowrap" translate="no">bg-{variant}</code> for backgrounds and <code class="text-nowrap" translate="no">border-{variant}</code> for borders.</p> <p>These variants are used by components (such as <code class="text-nowrap" translate="no">&lt;b-card&gt;</code>, <code class="text-nowrap" translate="no">&lt;b-jumbotron&gt;</code>, <code class="text-nowrap" translate="no">&lt;b-modal&gt;</code>, etc.) that provide <code class="text-nowrap" translate="no">bg-variant</code>, <code class="text-nowrap" translate="no">*-bg-variant</code>, <code class="text-nowrap" translate="no">border-variant</code> and <code class="text-nowrap" translate="no">*-border-variant</code> props.</p> <h2 id="text-variants" class="bv-no-focus-ring"><span class="bd-content-title">Text variants<a class="anchorjs-link" href="#text-variants" aria-labelledby="text-variants"></a></span></h2> <p>All the <strong>base variants</strong> plus:</p> <ul> <li><code class="text-nowrap" translate="no">muted</code></li> <li><code class="text-nowrap" translate="no">white</code></li> <li><code class="text-nowrap" translate="no">black</code></li> </ul> <p>These translate to class names <code class="text-nowrap" translate="no">text-{variant}</code></p> <p>These variants are used by components (such as <code class="text-nowrap" translate="no">&lt;b-card&gt;</code>, <code class="text-nowrap" translate="no">&lt;b-jumbotron&gt;</code>, <code class="text-nowrap" translate="no">&lt;b-modal&gt;</code>, etc.) that provide <code class="text-nowrap" translate="no">text-variant</code> and <code class="text-nowrap" translate="no">*-text-variant</code> props.</p> <h2 id="component-specific-variants" class="bv-no-focus-ring"><span class="bd-content-title">Component specific variants<a class="anchorjs-link" href="#component-specific-variants" aria-labelledby="component-specific-variants"></a></span></h2> <p>Some Bootstrap v4 components require additional CSS styling, or additional pseudo selector styling (i.e buttons), and hence have their own underlying variant CSS classes.</p> <h3 id="alert-variants" class="bv-no-focus-ring"><span class="bd-content-title">Alert variants<a class="anchorjs-link" href="#alert-variants" aria-labelledby="alert-variants"></a></span></h3> <p>All the <strong>base variants</strong></p> <p>These translate to class names <code class="text-nowrap" translate="no">alert-{variant}</code>.</p> <h3 id="badge-variants" class="bv-no-focus-ring"><span class="bd-content-title">Badge variants<a class="anchorjs-link" href="#badge-variants" aria-labelledby="badge-variants"></a></span></h3> <p>All the <strong>base variants</strong></p> <p>These translate to class names <code class="text-nowrap" translate="no">badge-{variant}</code>.</p> <h3 id="button-variants" class="bv-no-focus-ring"><span class="bd-content-title">Button variants<a class="anchorjs-link" href="#button-variants" aria-labelledby="button-variants"></a></span></h3> <p>All the <strong>base variants</strong> plus:</p> <ul> <li><code class="text-nowrap" translate="no">outline-{base variant}</code> which generates an outline button version of the base variant</li> <li><code class="text-nowrap" translate="no">link</code> which renders the button with the look of a link but retains button padding and margins</li> </ul> <p>These translate to class names <code class="text-nowrap" translate="no">btn-{variant}</code> and <code class="text-nowrap" translate="no">btn-outline-{variant}</code>.</p> <p>Note the <code class="text-nowrap" translate="no">link</code> variant does not have an outline version.</p> <h3 id="table-variants" class="bv-no-focus-ring"><span class="bd-content-title">Table variants<a class="anchorjs-link" href="#table-variants" aria-labelledby="table-variants"></a></span></h3> <p>All the <strong>base variants</strong> plus:</p> <ul> <li><code class="text-nowrap" translate="no">active</code></li> </ul> <p>These variants translate to class names <code class="text-nowrap" translate="no">table-{variant}</code>.</p> <p>When the table has the <code class="text-nowrap" translate="no">dark</code> prop set, the variants translate to the <code class="text-nowrap" translate="no">bg-{variant}</code> classes.</p> <p>Note that the <code class="text-nowrap" translate="no">active</code> variant is only applicable to <code class="text-nowrap" translate="no">&lt;tr&gt;</code> elements within the <code class="text-nowrap" translate="no">&lt;tbody&gt;</code>, and can not be applied to individual table cells or used as the <code class="text-nowrap" translate="no">table-variant</code>.</p> <h3 id="popover-variants" class="bv-no-focus-ring"><span class="bd-content-title">Popover variants<a class="anchorjs-link" href="#popover-variants" aria-labelledby="popover-variants"></a></span></h3> <p>All the <strong>base variants</strong></p> <p>These translate to BootstrapVue custom class names <code class="text-nowrap" translate="no">b-popover-{variant}</code>.</p> <h3 id="tooltip-variants" class="bv-no-focus-ring"><span class="bd-content-title">Tooltip variants<a class="anchorjs-link" href="#tooltip-variants" aria-labelledby="tooltip-variants"></a></span></h3> <p>All the <strong>base variants</strong></p> <p>These translate to BootstrapVue custom class names <code class="text-nowrap" translate="no">b-tooltip-{variant}</code>.</p> <h3 id="toast-variants" class="bv-no-focus-ring"><span class="bd-content-title">Toast variants<a class="anchorjs-link" href="#toast-variants" aria-labelledby="toast-variants"></a></span></h3> <p>All the <strong>base variants</strong></p> <p>These translate to BootstrapVue custom class names <code class="text-nowrap" translate="no">b-toast-{variant}</code>.</p> <h2 id="using-variant-classes" class="bv-no-focus-ring"><span class="bd-content-title">Using variant classes<a class="anchorjs-link" href="#using-variant-classes" aria-labelledby="using-variant-classes"></a></span></h2> <p>You may also use the underlying class names directly on elements (and some components) via the standard HTML <code class="text-nowrap" translate="no">class=&quot;...&quot;</code> attribute.</p> <h2 id="creating-custom-variants" class="bv-no-focus-ring"><span class="bd-content-title">Creating custom variants<a class="anchorjs-link" href="#creating-custom-variants" aria-labelledby="creating-custom-variants"></a></span></h2> <p>When creating custom variants, follow the Bootstrap v4 variant CSS class naming scheme and they will become available to the various components that use that scheme (i.e. create a custom CSS class <code class="text-nowrap" translate="no">btn-purple</code> and <code class="text-nowrap" translate="no">purple</code> becomes a valid variant to use on <code class="text-nowrap" translate="no">&lt;b-button&gt;</code>).</p> <p>Alternatively, you can create new variant theme colors by supplying custom Bootstrap SCSS theme color maps. The default theme color map is (from <code class="text-nowrap" translate="no">bootstrap/scss/_variables.scss</code>):</p> <div class="bd-code"><pre class="hljs scss p-2" translate="no"><span class="hljs-comment">// Base grayscale colors definitions</span>\n<span class="hljs-variable">$white</span>: <span class="hljs-number">#fff</span> !default;\n<span class="hljs-variable">$gray-100</span>: <span class="hljs-number">#f8f9fa</span> !default;\n<span class="hljs-variable">$gray-200</span>: <span class="hljs-number">#e9ecef</span> !default;\n<span class="hljs-variable">$gray-300</span>: <span class="hljs-number">#dee2e6</span> !default;\n<span class="hljs-variable">$gray-400</span>: <span class="hljs-number">#ced4da</span> !default;\n<span class="hljs-variable">$gray-500</span>: <span class="hljs-number">#adb5bd</span> !default;\n<span class="hljs-variable">$gray-600</span>: <span class="hljs-number">#6c757d</span> !default;\n<span class="hljs-variable">$gray-700</span>: <span class="hljs-number">#495057</span> !default;\n<span class="hljs-variable">$gray-800</span>: <span class="hljs-number">#343a40</span> !default;\n<span class="hljs-variable">$gray-900</span>: <span class="hljs-number">#212529</span> !default;\n<span class="hljs-variable">$black</span>: <span class="hljs-number">#000</span> !default;\n\n<span class="hljs-comment">// Base colors definitions</span>\n<span class="hljs-variable">$blue</span>: <span class="hljs-number">#007bff</span> !default;\n<span class="hljs-variable">$indigo</span>: <span class="hljs-number">#6610f2</span> !default;\n<span class="hljs-variable">$purple</span>: <span class="hljs-number">#6f42c1</span> !default;\n<span class="hljs-variable">$pink</span>: <span class="hljs-number">#e83e8c</span> !default;\n<span class="hljs-variable">$red</span>: <span class="hljs-number">#dc3545</span> !default;\n<span class="hljs-variable">$orange</span>: <span class="hljs-number">#fd7e14</span> !default;\n<span class="hljs-variable">$yellow</span>: <span class="hljs-number">#ffc107</span> !default;\n<span class="hljs-variable">$green</span>: <span class="hljs-number">#28a745</span> !default;\n<span class="hljs-variable">$teal</span>: <span class="hljs-number">#20c997</span> !default;\n<span class="hljs-variable">$cyan</span>: <span class="hljs-number">#17a2b8</span> !default;\n\n<span class="hljs-comment">// Theme color default definitions</span>\n<span class="hljs-variable">$primary</span>: <span class="hljs-variable">$blue</span> !default;\n<span class="hljs-variable">$secondary</span>: <span class="hljs-variable">$gray-600</span> !default;\n<span class="hljs-variable">$success</span>: <span class="hljs-variable">$green</span> !default;\n<span class="hljs-variable">$info</span>: <span class="hljs-variable">$cyan</span> !default;\n<span class="hljs-variable">$warning</span>: <span class="hljs-variable">$yellow</span> !default;\n<span class="hljs-variable">$danger</span>: <span class="hljs-variable">$red</span> !default;\n<span class="hljs-variable">$light</span>: <span class="hljs-variable">$gray-100</span> !default;\n<span class="hljs-variable">$dark</span>: <span class="hljs-variable">$gray-800</span> !default;\n\n<span class="hljs-comment">// This table defines the theme colors (variant names)</span>\n<span class="hljs-variable">$theme-colors</span>: () !default;\n<span class="hljs-variable">$theme-colors</span>: map-merge(\n  (\n    <span class="hljs-string">&#x27;primary&#x27;</span>: <span class="hljs-variable">$primary</span>,\n    <span class="hljs-string">&#x27;secondary&#x27;</span>: <span class="hljs-variable">$secondary</span>,\n    <span class="hljs-string">&#x27;success&#x27;</span>: <span class="hljs-variable">$success</span>,\n    <span class="hljs-string">&#x27;info&#x27;</span>: <span class="hljs-variable">$info</span>,\n    <span class="hljs-string">&#x27;warning&#x27;</span>: <span class="hljs-variable">$warning</span>,\n    <span class="hljs-string">&#x27;danger&#x27;</span>: <span class="hljs-variable">$danger</span>,\n    <span class="hljs-string">&#x27;light&#x27;</span>: <span class="hljs-variable">$light</span>,\n    <span class="hljs-string">&#x27;dark&#x27;</span>: <span class="hljs-variable">$dark</span>\n  ),\n  <span class="hljs-variable">$theme-colors</span>\n);</pre></div><p>Refer to the <a href="/docs/reference/theming" class="font-weight-bold">Theming section</a> for details on customizing Bootstrap and BootstrapVue styles.</p>'}}}]);