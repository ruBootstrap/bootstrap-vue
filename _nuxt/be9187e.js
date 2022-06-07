(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{616:function(e,t){e.exports={baseTOC:{top:"#theming-bootstrap--bootstrapvue",title:"Theming Bootstrap &amp; BootstrapVue",toc:[{href:"#sass-variable-defaults",label:"SASS variable defaults"},{href:"#default-theme-colors",label:"Default theme colors"},{href:"#sass-options",label:"SASS options",toc:[{href:"#bootstrap-sass-variables",label:"Bootstrap SASS variables"},{href:"#bootstrapvue-sass-variables",label:"BootstrapVue SASS variables"}]},{href:"#generating-custom-themes",label:"Generating custom themes"},{href:"#css-variables",label:"CSS variables",toc:[{href:"#available-bootstrap-css-variables",label:"Available Bootstrap CSS variables"},{href:"#example",label:"Example"}]},{href:"#смотрите-также",label:"Смотрите также"}]},titleLead:'<h1 id="theming-bootstrap--bootstrapvue" class="bv-no-focus-ring"><span class="bd-content-title">Theming Bootstrap &amp; BootstrapVue</span></h1> <p class="bd-lead">Theming is accomplished by Sass variables, Sass maps, and custom CSS. There&#39;s no dedicated theme stylesheet; instead, you can enable the built-in theme to add gradients, shadows, and more.</p>',body:'<p>While BootstrapVue uses Bootstrap&#39;s CSS, certain features of BootstrapVue use custom CSS (i.e. stacked tables, etc.). Our custom CSS relies on variables defined the Bootstrap v4.x SCSS. The <code class="text-nowrap" translate="no">bootstrap-vue/dist/bootstrap-vue.css</code> is compiled using the default Bootstrap v4.x variables. By using the BootstrapVue source SCSS, you can have your variable overrides (such as breakpoints, theme colors, etc.) adjust the custom BootstrapVue css generation.</p> <p>For premium dashboards and themes, please refer to the <a href="/themes" class="font-weight-bold"><code class="text-nowrap" translate="no">Themes section</code></a> of the documentation.</p> <h2 id="sass-variable-defaults" class="bv-no-focus-ring"><span class="bd-content-title">SASS variable defaults<a class="anchorjs-link" href="#sass-variable-defaults" aria-labelledby="sass-variable-defaults"></a></span></h2> <p>Every Sass variable in Bootstrap v4 and BootstrapVue includes the <code class="text-nowrap" translate="no">!default</code> flag allowing you to override the variable’s default value in your own Sass without modifying Bootstrap and BootstrapVue&#39;s source SCSS code. Copy and paste variables as needed, modify their values, and remove the <code class="text-nowrap" translate="no">!default</code> flag. If a variable has already been assigned, then it won’t be re-assigned by the default values in Bootstrap and BootstrapVue.</p> <p>You will find the complete list of Bootstrap’s variables in <code class="text-nowrap" translate="no">bootstrap/scss/_variables.scss</code>. Some variables are set to <code class="text-nowrap" translate="no">null</code>, these variables don’t output the property unless they are overridden in your configuration.</p> <p>Variable overrides within the same Sass file can come before or after the default variables. However, when overriding across Sass files, your overrides must come <em>before</em> you import Bootstrap and BootstrapVue&#39;s Sass (SCSS) files.</p> <p>Here’s an example that changes the <code class="text-nowrap" translate="no">background-color</code> and <code class="text-nowrap" translate="no">color</code> for the <code class="text-nowrap" translate="no">&lt;body&gt;</code> when importing and compiling Bootstrap and BootstrapVue SCSS:</p> <div class="bd-code"><pre class="hljs scss p-2" translate="no"><span class="hljs-comment">// Your variable overrides</span>\n<span class="hljs-variable">$body-bg</span>: <span class="hljs-number">#000</span>;\n<span class="hljs-variable">$body-color</span>: <span class="hljs-number">#111</span>;\n\n<span class="hljs-comment">// Bootstrap and its default variables</span>\n<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;../node_modules/bootstrap/scss/bootstrap&#x27;</span>;\n<span class="hljs-comment">// BootstrapVue and its default variables</span>\n<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;../node_modules/bootstrap-vue/src/index.scss&#x27;</span>;</pre></div><h2 id="default-theme-colors" class="bv-no-focus-ring"><span class="bd-content-title">Default theme colors<a class="anchorjs-link" href="#default-theme-colors" aria-labelledby="default-theme-colors"></a></span></h2> <p>The default theme colors defined in the Bootstrap v4.4 SCSS are as follows:</p> <div class="row"> <div class="col-md-4"> <div class="p-3 mb-3 bg-primary text-light">Primary</div> </div> <div class="col-md-4"> <div class="p-3 mb-3 bg-secondary text-light">Secondary</div> </div> <div class="col-md-4"> <div class="p-3 mb-3 bg-success text-light">Success</div> </div> <div class="col-md-4"> <div class="p-3 mb-3 bg-danger text-light">Danger</div> </div> <div class="col-md-4"> <div class="p-3 mb-3 bg-warning text-dark">Warning</div> </div> <div class="col-md-4"> <div class="p-3 mb-3 bg-info text-light">Info</div> </div> <div class="col-md-4"> <div class="p-3 mb-3 bg-light text-dark">Light</div> </div> <div class="col-md-4"> <div class="p-3 mb-3 bg-dark text-light">Dark</div> </div> </div> <p>BootstrapVue components use variations (intensities) of these default theme colors.</p> <p>You can alter these theme colors and create additional theme colors as needed via SASS variables and maps. Refer to the <a href="https://getbootstrap.com/docs/4.5/getting-started/theming/" target="_blank" rel="noopener">Bootstrap theming</a> docs for more details. All theme colors automatically become available as <a href="/docs/reference/color-variants" class="font-weight-bold">color variants</a> to all BootstrapVue components.</p> <h2 id="sass-options" class="bv-no-focus-ring"><span class="bd-content-title">SASS options<a class="anchorjs-link" href="#sass-options" aria-labelledby="sass-options"></a></span></h2> <p>Customize Bootstrap 4 with the built-in custom variables file and easily toggle global CSS preferences with Bootstrap&#39;s <code class="text-nowrap" translate="no">$enable-*</code> Sass variables.</p> <h3 id="bootstrap-sass-variables" class="bv-no-focus-ring"><span class="bd-content-title">Bootstrap SASS variables<a class="anchorjs-link" href="#bootstrap-sass-variables" aria-labelledby="bootstrap-sass-variables"></a></span></h3> <p>Some commonly used Bootstrap v4 variables are:</p> <div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table"> <thead class="thead-default"> <tr> <th>Variable</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> </thead> <tbody><tr> <td><code class="text-nowrap" translate="no">$enable-rounded</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">true</code></td> <td>Enables predefined <code class="text-nowrap" translate="no">border-radius</code> styles on various components</td> </tr> <tr> <td><code class="text-nowrap" translate="no">$enable-shadows</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">false</code></td> <td>Enables predefined <code class="text-nowrap" translate="no">box-shadow</code> styles on various components</td> </tr> <tr> <td><code class="text-nowrap" translate="no">$enable-gradients</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">false</code></td> <td>Enables predefined gradients via <code class="text-nowrap" translate="no">background-image</code> styles on various components</td> </tr> <tr> <td><code class="text-nowrap" translate="no">$enable-transitions</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">true</code></td> <td>Enables predefined <code class="text-nowrap" translate="no">transition</code>s on various components</td> </tr> <tr> <td><code class="text-nowrap" translate="no">$enable-responsive-font-sizes</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">false</code></td> <td>Enables <a href="https://getbootstrap.com/docs/4.5/content/typography/#responsive-font-sizes" target="_blank" rel="noopener">responsive font sizes</a></td> </tr> <tr> <td><code class="text-nowrap" translate="no">$enable-validation-icons</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">true</code></td> <td>Enables <code class="text-nowrap" translate="no">background-image</code> icons within textual inputs and some custom forms for validation states</td> </tr> </tbody></table> </div><p>Refer to <a href="https://getbootstrap.com/docs/4.5/getting-started/theming/" target="_blank" rel="noopener">Bootstrap&#39;s theming</a> docs for additional Bootstrap v4 variable information.</p> <h3 id="bootstrapvue-sass-variables" class="bv-no-focus-ring"><span class="bd-content-title">BootstrapVue SASS variables<a class="anchorjs-link" href="#bootstrapvue-sass-variables" aria-labelledby="bootstrapvue-sass-variables"></a></span></h3> <p>BootstrapVue also defines several Sass variables for controlling BootstrapVue&#39;s custom CSS generation. If you are not using these features in your project, you can disable the feature&#39;s CSS generation to reduce the size of BootstrapVue&#39;s custom CSS bundle:</p> <div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table"> <thead class="thead-default"> <tr> <th>Variable</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> </thead> <tbody><tr> <td><code class="text-nowrap" translate="no">$bv-enable-table-stacked</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">true</code></td> <td>Enables stacked table CSS generation</td> </tr> <tr> <td><code class="text-nowrap" translate="no">$bv-enable-table-sticky</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">true</code></td> <td>Enables sticky table header and column CSS generation</td> </tr> <tr> <td><code class="text-nowrap" translate="no">$bv-enable-tooltip-variants</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">true</code></td> <td>Enables tooltip variant CSS generation</td> </tr> <tr> <td><code class="text-nowrap" translate="no">$bv-enable-popover-variants</code></td> <td>Boolean</td> <td><code class="text-nowrap" translate="no">true</code></td> <td>Enables popover variant CSS generation</td> </tr> </tbody></table> </div><p>You can find additional variables that control various aspects of BootstrapVue&#39;s custom CSS at <a href="https://github.com/bootstrap-vue/bootstrap-vue/blob/master/src/_variables.scss" target="_blank" rel="noopener"><code class="text-nowrap" translate="no">bootstrap-vue/src/_variables.scss</code></a>. Note that BootstrapVue&#39;s custom SCSS relies on Bootstrap&#39;s SASS variables, functions, and mixins.</p> <h2 id="generating-custom-themes" class="bv-no-focus-ring"><span class="bd-content-title">Generating custom themes<a class="anchorjs-link" href="#generating-custom-themes" aria-labelledby="generating-custom-themes"></a></span></h2> <p>To use your own theme and colors in BootstrapVue, you will need to create a <code class="text-nowrap" translate="no">custom.scss</code> file in your project, which you can include in your main app <code class="text-nowrap" translate="no">app.vue</code> file:</p> <p><strong>Via template:</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">\n  // Import custom SASS variable overrides, or alternatively\n  // define your variable overrides here instead\n  <span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;assets/custom-vars.scss&#x27;</span>;\n\n  // Import Bootstrap and BootstrapVue source SCSS files\n  <span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~bootstrap/scss/bootstrap.scss&#x27;</span>;\n  <span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~bootstrap-vue/src/index.scss&#x27;</span>;\n\n  // General style overrides and custom classes\n  <span class="hljs-selector-tag">body</span> {\n    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;\n  }\n\n  <span class="hljs-selector-class">.my-widget</span> {\n    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--danger);\n  }\n  // ...\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></pre></div><p>The <code class="text-nowrap" translate="no">custom-vars.scss</code> file, which needs to be loaded before Bootstrap&#39;s SCSS and BootstrapVue&#39;s SCSS, will include your Bootstrap v4 variable overrides (i.e. colors, shadows, font sizes, breakpoints, etc.).</p> <p><strong>Via app main entry point:</strong></p> <p>Create an SCSS file with your custom theme variables which also imports Bootstrap and BootstrapVue&#39;s SCSS:</p> <div class="bd-code"><pre class="hljs scss p-2" translate="no"><span class="hljs-comment">// File: custom.scss</span>\n\n<span class="hljs-comment">// Define your variable overrides here</span>\n<span class="hljs-variable">$enable-shadows</span>: true;\n<span class="hljs-variable">$enable-gradients</span>: true;\n<span class="hljs-variable">$grid-breakpoints</span>: (\n  xs: <span class="hljs-number">0</span>,\n  sm: <span class="hljs-number">456px</span>,\n  md: <span class="hljs-number">789px</span>,\n  lg: <span class="hljs-number">999px</span>,\n  xl: <span class="hljs-number">1234px</span>\n);\n<span class="hljs-variable">$bv-enable-table-stacked</span>: false;\n\n<span class="hljs-comment">// Include Bootstrap and BootstrapVue SCSS files</span>\n<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~bootstrap/scss/bootstrap.scss&#x27;</span>;\n<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~bootstrap-vue/src/index.scss&#x27;</span>;\n\n<span class="hljs-comment">// General style overrides and custom classes</span>\n<span class="hljs-selector-tag">body</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.my-widget</span> {\n  <span class="hljs-attribute">color</span>: var(--danger);\n}\n<span class="hljs-comment">// ...</span></pre></div><p>Then import that single SCSS file into your main app code entry point:</p> <div class="bd-code"><pre class="hljs js p-2" translate="no" data-filename="app.js"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;custom.scss&#x27;</span></pre></div><p>You can find all of the possible variables in <code class="text-nowrap" translate="no">node_modules/bootstrap/scss/_variables.scss</code>.</p> <p>Do not forget to include <code class="text-nowrap" translate="no">sass</code> and <code class="text-nowrap" translate="no">sass-loader</code> to use <code class="text-nowrap" translate="no">scss</code> in Vue:</p> <div class="bd-code"><pre class="hljs sh p-2" translate="no">npm install --save-dev sass sass-loader</pre></div><p><strong>Note:</strong> You may need to adjust the SCSS import paths based on your build environment.</p> <p>For an example of creating custom theme colors, see the <a href="/docs/reference/color-variants#creating-custom-variants" class="font-weight-bold">Creating custom variants</a> section in the <a href="/docs/reference/color-variants" class="font-weight-bold">Color variants</a> reference page.</p> <h2 id="css-variables" class="bv-no-focus-ring"><span class="bd-content-title">CSS variables<a class="anchorjs-link" href="#css-variables" aria-labelledby="css-variables"></a></span></h2> <p>Bootstrap&#39;s SCSS generates around two dozen <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener">CSS custom properties (variables)</a> in the compiled CSS. These provide easy access to commonly used values like theme colors, breakpoints, and primary font stacks when working in your browser’s Inspector, a code sandbox, or general prototyping.</p> <h3 id="available-bootstrap-css-variables" class="bv-no-focus-ring"><span class="bd-content-title">Available Bootstrap CSS variables<a class="anchorjs-link" href="#available-bootstrap-css-variables" aria-labelledby="available-bootstrap-css-variables"></a></span></h3> <p>Here are the CSS variables that are generated. The values shown are based on the Bootstrap v4 <em>defaults</em>:</p> <div class="bd-code"><pre class="hljs scss p-2" translate="no"><span class="hljs-selector-pseudo">:root</span> {\n  --blue: <span class="hljs-number">#007bff</span>;\n  --indigo: <span class="hljs-number">#6610f2</span>;\n  --purple: <span class="hljs-number">#6f42c1</span>;\n  --pink: <span class="hljs-number">#e83e8c</span>;\n  --red: <span class="hljs-number">#dc3545</span>;\n  --orange: <span class="hljs-number">#fd7e14</span>;\n  --yellow: <span class="hljs-number">#ffc107</span>;\n  --green: <span class="hljs-number">#28a745</span>;\n  --teal: <span class="hljs-number">#20c997</span>;\n  --cyan: <span class="hljs-number">#17a2b8</span>;\n  --white: <span class="hljs-number">#fff</span>;\n  --gray: <span class="hljs-number">#6c757d</span>;\n  --gray-dark: <span class="hljs-number">#343a40</span>;\n  --primary: <span class="hljs-number">#007bff</span>;\n  --secondary: <span class="hljs-number">#6c757d</span>;\n  --success: <span class="hljs-number">#28a745</span>;\n  --info: <span class="hljs-number">#17a2b8</span>;\n  --warning: <span class="hljs-number">#ffc107</span>;\n  --danger: <span class="hljs-number">#dc3545</span>;\n  --light: <span class="hljs-number">#f8f9fa</span>;\n  --dark: <span class="hljs-number">#343a40</span>;\n  --breakpoint-xs: <span class="hljs-number">0</span>;\n  --breakpoint-sm: <span class="hljs-number">576px</span>;\n  --breakpoint-md: <span class="hljs-number">768px</span>;\n  --breakpoint-lg: <span class="hljs-number">992px</span>;\n  --breakpoint-xl: <span class="hljs-number">1200px</span>;\n  --<span class="hljs-attribute">font-family</span>-sans-serif: -apple-system, BlinkMacSystemFont, <span class="hljs-string">&#x27;Segoe UI&#x27;</span>, Roboto, <span class="hljs-string">&#x27;Helvetica Neue&#x27;</span>,\n    Arial, sans-serif, <span class="hljs-string">&#x27;Apple Color Emoji&#x27;</span>, <span class="hljs-string">&#x27;Segoe UI Emoji&#x27;</span>, <span class="hljs-string">&#x27;Segoe UI Symbol&#x27;</span>;\n  --<span class="hljs-attribute">font-family</span>-monospace: SFMono-Regular, Menlo, Monaco, Consolas, <span class="hljs-string">&#x27;Liberation Mono&#x27;</span>,\n    <span class="hljs-string">&#x27;Courier New&#x27;</span>, monospace;\n}</pre></div><p>By setting SASS variables and maps, and recompiling the SCSS, the above generated SCSS variables will also be updated.</p> <h3 id="example" class="bv-no-focus-ring"><span class="bd-content-title">Example<a class="anchorjs-link" href="#example" aria-labelledby="example"></a></span></h3> <p>CSS variables offer similar flexibility to SASS’s variables, but without the need for compilation before being served to the browser. For example, here we are resetting our page’s font and link styles, as well as creating a custom class that uses theme colors, via the use of CSS variables.</p> <div class="bd-code"><pre class="hljs scss p-2" translate="no"><span class="hljs-selector-tag">body</span> {\n  <span class="hljs-attribute">font</span>: <span class="hljs-number">1rem</span>/<span class="hljs-number">1.5</span> var(--font-family-sans-serif);\n}\n\n<span class="hljs-selector-tag">a</span> {\n  <span class="hljs-attribute">color</span>: var(--blue);\n}\n\n<span class="hljs-selector-class">.custom-class</span> {\n  <span class="hljs-attribute">color</span>: var(--primary);\n  <span class="hljs-attribute">background-color</span>: var(--dark);\n}</pre></div><h2 id="смотрите-также" class="bv-no-focus-ring"><span class="bd-content-title">Смотрите также<a class="anchorjs-link" href="#смотрите-также" aria-labelledby="смотрите-также"></a></span></h2> <ul> <li><p>For premium dashboards and themes, please refer to the <a href="/themes" class="font-weight-bold"><code class="text-nowrap" translate="no">Themes section</code></a> of the documentation.</p> </li> <li><p>If you are defining custom breakpoint names, please see the <a href="/docs/reference/settings" class="font-weight-bold">BootstrapVue settings</a> page on how to update BootstrapVue <code class="text-nowrap" translate="no">&lt;b-col&gt;</code> and <code class="text-nowrap" translate="no">&lt;b-form-group&gt;</code> breakpoint specific props.</p> </li> <li><p>For more details on theming Bootstrap&#39;s SCSS/CSS, refer to the <a href="https://getbootstrap.com/docs/4.5/getting-started/theming/" target="_blank" rel="noopener"><strong>Official Bootstrap v4 Theming Documentation</strong></a>.</p> </li> </ul>'}}}]);