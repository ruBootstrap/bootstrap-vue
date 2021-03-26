(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{530:function(e,t){e.exports={baseTOC:{top:"#embed",title:"Embed",toc:[{href:"#embed-types",label:"Embed types"},{href:"#aspect-ratios",label:"Aspect ratios"},{href:"#wrapper-element",label:"Wrapper element"},{href:"#attributes-and-child-elements",label:"Attributes and child elements"},{href:"#see-also",label:"See also"}]},titleLead:'<h1 id="embed" class="bv-no-focus-ring"><span class="bd-content-title">Embed</span></h1> <p class="bd-lead">Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.</p>',body:'<p>Rules are directly applied to <code class="text-nowrap" translate="no">&lt;iframe&gt;</code>, <code class="text-nowrap" translate="no">&lt;embed&gt;</code>, <code class="text-nowrap" translate="no">&lt;video&gt;</code>, and <code class="text-nowrap" translate="no">&lt;object&gt;</code> elements</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-embed</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;iframe&quot;</span>\n    <span class="hljs-attr">aspect</span>=<span class="hljs-string">&quot;16by9&quot;</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://www.youtube.com/embed/zpOULjyy-n8?rel=0&quot;</span>\n    <span class="hljs-attr">allowfullscreen</span>\n  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-embed</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-embed.vue --&gt;</span></pre></div><h2 id="embed-types" class="bv-no-focus-ring"><span class="bd-content-title">Embed types<a class="anchorjs-link" href="#embed-types" aria-labelledby="embed-types"></a></span></h2> <p>Supported embed types are <code class="text-nowrap" translate="no">iframe</code> (default), <code class="text-nowrap" translate="no">video</code>, <code class="text-nowrap" translate="no">embed</code> and <code class="text-nowrap" translate="no">object</code>, which translate to the standard HTML <code class="text-nowrap" translate="no">&lt;iframe&gt;</code>, <code class="text-nowrap" translate="no">&lt;video&gt;</code>, <code class="text-nowrap" translate="no">&lt;embed&gt;</code> and <code class="text-nowrap" translate="no">&lt;object&gt;</code> elements.</p> <p>Set the type of embed you would like via the <code class="text-nowrap" translate="no">type</code> prop.</p> <h2 id="aspect-ratios" class="bv-no-focus-ring"><span class="bd-content-title">Aspect ratios<a class="anchorjs-link" href="#aspect-ratios" aria-labelledby="aspect-ratios"></a></span></h2> <p>Aspect ratios can be set via the <code class="text-nowrap" translate="no">aspect</code> prop. Supported aspect ratios are: <code class="text-nowrap" translate="no">21by9</code> (21:9), <code class="text-nowrap" translate="no">16by9</code> (16:9), <code class="text-nowrap" translate="no">4by3</code> (4:3) and <code class="text-nowrap" translate="no">1by1</code> (1:1). The default aspect is <code class="text-nowrap" translate="no">16by9</code>. Aspect ratios are defined in Bootstrap&#39;s SCSS and translate to the classname <code class="text-nowrap" translate="no">embed-responsive-{aspect}</code> (i.e. <code class="text-nowrap" translate="no">embed-responsive-16by9</code>, <code class="text-nowrap" translate="no">embed-responsive-4by3</code>, etc.).</p> <h2 id="wrapper-element" class="bv-no-focus-ring"><span class="bd-content-title">Wrapper element<a class="anchorjs-link" href="#wrapper-element" aria-labelledby="wrapper-element"></a></span></h2> <p>The Responsive embed is wrapped in an outer element (default is <code class="text-nowrap" translate="no">div</code>) to enforce the responsive aspect ratio. You can change this tag via the <code class="text-nowrap" translate="no">tag</code> prop.</p> <h2 id="attributes-and-child-elements" class="bv-no-focus-ring"><span class="bd-content-title">Attributes and child elements<a class="anchorjs-link" href="#attributes-and-child-elements" aria-labelledby="attributes-and-child-elements"></a></span></h2> <p>Any additional attributes provided to <code class="text-nowrap" translate="no">&lt;b-embed&gt;</code> (other than the above <code class="text-nowrap" translate="no">type</code>, <code class="text-nowrap" translate="no">aspect</code> and <code class="text-nowrap" translate="no">tag</code> props) are applied to the inner embedded element (i.e. the <code class="text-nowrap" translate="no">iframe</code>, <code class="text-nowrap" translate="no">video</code>, <code class="text-nowrap" translate="no">embed</code> or <code class="text-nowrap" translate="no">object</code>).</p> <p>Any children elements between the opening and closing <code class="text-nowrap" translate="no">&lt;b-embed&gt;</code> will be placed inside the inner embedded element. Note that the type <code class="text-nowrap" translate="no">iframe</code> does not support any children.</p> <p><strong>Example: Responsive embedding of an HTML5 <code class="text-nowrap" translate="no">&lt;video&gt;</code></strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-embed</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;video&quot;</span> <span class="hljs-attr">aspect</span>=<span class="hljs-string">&quot;4by3&quot;</span> <span class="hljs-attr">controls</span> <span class="hljs-attr">poster</span>=<span class="hljs-string">&quot;poster.png&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;dev-stories.webm&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;video/webm&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;dev-stories.mp4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;video/mp4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-embed</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h2 id="see-also" class="bv-no-focus-ring"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-labelledby="see-also"></a></span></h2> <ul> <li><a href="/docs/components/aspect" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-aspect&gt;</code> component</a></li> </ul>'}}}]);