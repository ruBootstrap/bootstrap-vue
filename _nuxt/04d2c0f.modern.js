(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{490:function(t,e){t.exports={baseTOC:{top:"#toggle",title:"Toggle",toc:[{href:"#overview",label:"Overview"},{href:"#directive-syntax-and-usage",label:"Directive syntax and usage"},{href:"#usage-on-links",label:"Usage on links"},{href:"#hiding-and-showing-content-in-the-toggle-trigger-element",label:"Hiding and showing content in the toggle trigger element"},{href:"#preventing-the-target-from-opening-or-closing",label:"Preventing the target from opening or closing"},{href:"#accessibility",label:"Accessibility",toc:[{href:"#caveats-with-multiple-targets",label:"Caveats with multiple targets"}]},{href:"#see-also",label:"See also"}]},titleLead:'<h1 id="toggle" class="bv-no-focus-ring"><span class="bd-content-title">Toggle</span></h1> <p class="bd-lead"><code class="text-nowrap" translate="no">v-b-toggle</code> is a light-weight directive for toggling the visibility of collapses and sidebars, and includes automated <a href="/docs/reference/accessibility" class="font-weight-bold">WAI-ARIA accessibility</a> attribute handling.</p>',body:'<h2 id="overview" class="bv-no-focus-ring"><span class="bd-content-title">Overview<a class="anchorjs-link" href="#overview" aria-labelledby="overview"></a></span></h2> <p>The <code class="text-nowrap" translate="no">v-b-toggle</code> directive can be used on interactive elements, such as buttons, to toggle the visibility state of the <a href="/docs/components/collapse" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-collapse&gt;</code></a> and <a href="/docs/components/sidebar" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-sidebar&gt;</code></a> components.</p> <p>Besides toggling the visibility of the target component, the directive automatically updates ARIA accessibility attributes on the element it is applied to so that they reflect the visibility state of the target component. Refer to the <a href="#accessibility" class="font-weight-bold">Accessibility section</a> below for additional details and caveats.</p> <h2 id="directive-syntax-and-usage" class="bv-no-focus-ring"><span class="bd-content-title">Directive syntax and usage<a class="anchorjs-link" href="#directive-syntax-and-usage" aria-labelledby="directive-syntax-and-usage"></a></span></h2> <p>The directive is applied to the element or component that triggers the visibility of the target. The target component can be specified (via its ID) as either a directive modifier(s), the directive argument, or as a string/array passed to as the directive value:</p> <ul> <li><code class="text-nowrap" translate="no">v-b-toggle.my-collapse</code> - the directive modifier (multiple targets allowed, each modifier is a target ID)</li> <li><code class="text-nowrap" translate="no">v-b-toggle:my-collapse</code> - the directive argument (<a href="https://vuejs.org/v2/guide/syntax.html#Dynamic-Arguments" target="_blank" rel="noopener">Vue dynamic argument</a> is supported) <span class="badge badge-info small" aria-label="Available in BootstrapVue v2.14.0+">v2.14.0+</span></li> <li><code class="text-nowrap" translate="no">v-b-toggle=&quot;&#39;my-collapse&#39;&quot;</code> - the directive value as a string ID</li> <li><code class="text-nowrap" translate="no">v-b-toggle=&quot;&#39;my-collapse1 my-collapse2&#39;&quot;</code> - the directive value as a space separated string of IDs <span class="badge badge-info small" aria-label="Available in BootstrapVue v2.14.0+">v2.14.0+</span></li> <li><code class="text-nowrap" translate="no">v-b-toggle=&quot;[&#39;my-collapse1&#39;, &#39;my-collapse2&#39;]&quot;</code> - the directive value as an array of string IDs <span class="badge badge-info small" aria-label="Available in BootstrapVue v2.14.0+">v2.14.0+</span></li> </ul> <p>Modifiers, argument, and the value can be used at the same time when targeting multiple components.</p> <p><strong>Example usage:</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.my-collapse</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle.my-sidebar</span>&gt;</span>Toggle Sidebar<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;my-collapse&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Collapsible card&quot;</span>&gt;</span>\n        Hello world!\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-sidebar</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;my-sidebar&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Sidebar&quot;</span> <span class="hljs-attr">shadow</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-3 py-2&quot;</span>&gt;</span>\n        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis\n        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-sidebar</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- v-b-toggle-directive.vue --&gt;</span></pre></div><h2 id="usage-on-links" class="bv-no-focus-ring"><span class="bd-content-title">Usage on links<a class="anchorjs-link" href="#usage-on-links" aria-labelledby="usage-on-links"></a></span></h2> <p><span class="badge badge-info small">2.15.0+</span></p> <p>If placing the directive on a link (or a component that renders a link), the target ID can alternatively be specified via the <code class="text-nowrap" translate="no">href</code> attribute.</p> <p>Note that the browser URL will change and the page may scroll the target into view. To prevent the URL from changing and the page from scrolling, add <code class="text-nowrap" translate="no">@click.prevent</code> to the link.</p> <p><strong>Example usage:</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">v-b-toggle</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#example-collapse&quot;</span> @<span class="hljs-attr">click.prevent</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#example-sidebar&quot;</span> @<span class="hljs-attr">click.prevent</span>&gt;</span>Toggle Sidebar<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-collapse&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Collapsible card&quot;</span>&gt;</span>\n        Hello world!\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-sidebar</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;example-sidebar&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Sidebar&quot;</span> <span class="hljs-attr">shadow</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;px-3 py-2&quot;</span>&gt;</span>\n        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis\n        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-sidebar</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- v-b-toggle-links.vue --&gt;</span></pre></div><h2 id="hiding-and-showing-content-in-the-toggle-trigger-element" class="bv-no-focus-ring"><span class="bd-content-title">Hiding and showing content in the toggle trigger element<a class="anchorjs-link" href="#hiding-and-showing-content-in-the-toggle-trigger-element" aria-labelledby="hiding-and-showing-content-in-the-toggle-trigger-element"></a></span></h2> <p>When using the <code class="text-nowrap" translate="no">v-b-toggle</code> directive, the class <code class="text-nowrap" translate="no">collapsed</code> will automatically be placed on the trigger element when the target component is closed, and removed when open. As of BootstrapVue <code class="text-nowrap" translate="no">2.14.0</code>, the class <code class="text-nowrap" translate="no">not-collapsed</code> will be applied when the target is <em>not</em> closed.</p> <p><strong>Example HTML markup:</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-toggle:my-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;when-open&quot;</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;when-closed&quot;</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> My Collapse\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;my-collapse&quot;</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- Content here --&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><p><strong>Example Custom CSS:</strong></p> <div class="bd-code"><pre class="hljs css p-2" translate="no"><span class="hljs-selector-class">.collapsed</span> &gt; <span class="hljs-selector-class">.when-open</span>,\n<span class="hljs-selector-class">.not-collapsed</span> &gt; <span class="hljs-selector-class">.when-closed</span> {\n  <span class="hljs-attribute">display</span>: none;\n}</pre></div><h2 id="preventing-the-target-from-opening-or-closing" class="bv-no-focus-ring"><span class="bd-content-title">Preventing the target from opening or closing<a class="anchorjs-link" href="#preventing-the-target-from-opening-or-closing" aria-labelledby="preventing-the-target-from-opening-or-closing"></a></span></h2> <p>To prevent the trigger element from toggling the target, set the <code class="text-nowrap" translate="no">disabled</code> prop on <code class="text-nowrap" translate="no">&lt;button&gt;</code>, <code class="text-nowrap" translate="no">&lt;b-button&gt;</code>, or <code class="text-nowrap" translate="no">&lt;b-link&gt;</code> (or components based on from <code class="text-nowrap" translate="no">&lt;b-link&gt;</code>) and the toggle event will <em>not</em> dispatched to the target(s).</p> <h2 id="accessibility" class="bv-no-focus-ring"><span class="bd-content-title">Accessibility<a class="anchorjs-link" href="#accessibility" aria-labelledby="accessibility"></a></span></h2> <p>The directive, for accessibility reasons, should be placed on an clickable interactive element such as a <code class="text-nowrap" translate="no">&lt;button&gt;</code> or <code class="text-nowrap" translate="no">&lt;b-button&gt;</code>, which can easily be accessed by keyboard-only users and screen reader users. Elements that do not natively have an accessibility role of <code class="text-nowrap" translate="no">button</code> (or <code class="text-nowrap" translate="no">link</code>) will have the attributes <code class="text-nowrap" translate="no">role=&quot;button&quot;</code> and <code class="text-nowrap" translate="no">tabindex=&quot;0&quot;</code> applied, and will have the appropriate click handler instantiated. Therefore it is <em>highly recommended</em> to <em>not</em> place the directive on form controls other than buttons.</p> <p>The directive applies, and dynamically updates, the following ARIA attributes on the trigger element:</p> <ul> <li><code class="text-nowrap" translate="no">aria-controls</code> - the ID(s) of the collapse or sidebar component(s) being toggled</li> <li><code class="text-nowrap" translate="no">aria-expanded</code> - the visibility state of the collapse or sidebar (see the <a href="#caveats-with-multiple-targets" class="font-weight-bold">caveats section</a> below)</li> </ul> <h3 id="caveats-with-multiple-targets" class="bv-no-focus-ring"><span class="bd-content-title">Caveats with multiple targets<a class="anchorjs-link" href="#caveats-with-multiple-targets" aria-labelledby="caveats-with-multiple-targets"></a></span></h3> <p>When multiple targets are specified, the value of the <code class="text-nowrap" translate="no">aria-expanded</code> attribute may not be correct if the individual target components can have their collapsed state controlled independently (either via <code class="text-nowrap" translate="no">v-model</code>, other controls with <code class="text-nowrap" translate="no">v-b-toggle</code> directive, or CSS visibility).</p> <h2 id="see-also" class="bv-no-focus-ring"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-labelledby="see-also"></a></span></h2> <ul> <li><a href="/docs/components/collapse" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-collapse&gt;</code></a> Collapsible content with accordion support</li> <li><a href="/docs/components/sidebar" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-sidebar&gt;</code></a> Off-canvas sidebar</li> <li><a href="/docs/components/navbar#b-navbar-toggle-and-b-collapse-is-nav" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-navbar-toggle&gt;</code></a> Navbar hamburger toggle button (based on <code class="text-nowrap" translate="no">v-b-toggle</code> directive)</li> </ul>'}}}]);