(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{449:function(t,n){t.exports={baseTOC:{top:"#встраивание",title:"Встраивание",toc:[{href:"#типы-встраивания",label:"Типы встраивания"},{href:"#соотношения-сторон",label:"Соотношения сторон"},{href:"#элемент-оболочки",label:"Элемент оболочки"},{href:"#атрибуты-и-дочерние-элементы",label:"Атрибуты и дочерние элементы"},{href:"#смотрите-также",label:"Смотрите также"}]},titleLead:'<h1 id="встраивание" class="bv-no-focus-ring"><span class="bd-content-title">Встраивание</span></h1> <p class="bd-lead">Создавайте адаптивные встраивания видео или слайд-шоу на основе ширины родительского элемента, создавая внутреннее соотношение, которое масштабируется на любом устройстве.</p>',body:'<p>Правила напрямую применяются к элементам <code class="text-nowrap" translate="no">&lt;iframe&gt;</code>, <code class="text-nowrap" translate="no">&lt;embed&gt;</code>, <code class="text-nowrap" translate="no">&lt;video&gt;</code> и <code class="text-nowrap" translate="no">&lt;object&gt;</code></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-embed</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;iframe&quot;</span>\n    <span class="hljs-attr">aspect</span>=<span class="hljs-string">&quot;16by9&quot;</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://www.youtube.com/embed/zpOULjyy-n8?rel=0&quot;</span>\n    <span class="hljs-attr">allowfullscreen</span>\n  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-embed</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-embed.vue --&gt;</span></pre></div><h2 id="типы-встраивания" class="bv-no-focus-ring"><span class="bd-content-title">Типы встраивания<a class="anchorjs-link" href="#типы-встраивания" aria-labelledby="типы-встраивания"></a></span></h2> <p>Поддерживаемые типы встраивания: <code class="text-nowrap" translate="no">iframe</code> (по умолчанию), <code class="text-nowrap" translate="no">video</code>, <code class="text-nowrap" translate="no">embed</code> и <code class="text-nowrap" translate="no">object</code>, которые переводятся в стандартные HTML-элементы: <code class="text-nowrap" translate="no">&lt;iframe&gt;</code>, <code class="text-nowrap" translate="no">&lt;video&gt;</code>, <code class="text-nowrap" translate="no">&lt;embed&gt;</code> и <code class="text-nowrap" translate="no">&lt;object&gt;</code>.</p> <p>Установите желаемый тип встраивания с помощью свойства <code class="text-nowrap" translate="no">type</code>.</p> <h2 id="соотношения-сторон" class="bv-no-focus-ring"><span class="bd-content-title">Соотношения сторон<a class="anchorjs-link" href="#соотношения-сторон" aria-labelledby="соотношения-сторон"></a></span></h2> <p>Соотношение сторон может быть установлено с помощью свойства <code class="text-nowrap" translate="no">aspect</code>. Поддерживаемые соотношения сторон: <code class="text-nowrap" translate="no">21by9</code> (21:9), <code class="text-nowrap" translate="no">16by9</code> (16:9), <code class="text-nowrap" translate="no">4by3</code> (4:3) и <code class="text-nowrap" translate="no">1by1</code> (1:1). Формат по умолчанию <code class="text-nowrap" translate="no">16by9</code>. Соотношения сторон определены в SCSS Bootstrap и преобразуются в имя класса <code class="text-nowrap" translate="no">embed-responsive-{aspect}</code> (то есть <code class="text-nowrap" translate="no">embed-responsive-16by9</code>, <code class="text-nowrap" translate="no">embed-responsive-4by3</code>, etc.).</p> <h2 id="элемент-оболочки" class="bv-no-focus-ring"><span class="bd-content-title">Элемент оболочки<a class="anchorjs-link" href="#элемент-оболочки" aria-labelledby="элемент-оболочки"></a></span></h2> <p>Адаптивное встраивание обернуто во внешний элемент (по умолчанию - <code class="text-nowrap" translate="no">div</code>), чтобы обеспечить адаптивное соотношение сторон. Вы можете изменить этот тег с помощью свойства <code class="text-nowrap" translate="no">tag</code>.</p> <h2 id="атрибуты-и-дочерние-элементы" class="bv-no-focus-ring"><span class="bd-content-title">Атрибуты и дочерние элементы<a class="anchorjs-link" href="#атрибуты-и-дочерние-элементы" aria-labelledby="атрибуты-и-дочерние-элементы"></a></span></h2> <p>Любые дополнительные атрибуты, предоставленные для <code class="text-nowrap" translate="no">&lt;b-embed&gt;</code> (кроме указанных выше свойств <code class="text-nowrap" translate="no">type</code>, <code class="text-nowrap" translate="no">aspect</code> и <code class="text-nowrap" translate="no">tag</code>) применяются к внутреннему встроенному элементу (например, <code class="text-nowrap" translate="no">iframe</code>, <code class="text-nowrap" translate="no">video</code>, <code class="text-nowrap" translate="no">embed</code> или <code class="text-nowrap" translate="no">object</code>).</p> <p>Любые дочерние элементы между открывающим и закрывающим <code class="text-nowrap" translate="no">&lt;b-embed&gt;</code> будут помещены внутри внутреннего встроенного элемента. Обратите внимание, что тип iframe не поддерживает дочерние элементы.</p> <p><strong>Пример: отзывчивое встраивание HTML5 <code class="text-nowrap" translate="no">&lt;video&gt;</code></strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-embed</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;video&quot;</span> <span class="hljs-attr">aspect</span>=<span class="hljs-string">&quot;4by3&quot;</span> <span class="hljs-attr">controls</span> <span class="hljs-attr">poster</span>=<span class="hljs-string">&quot;poster.png&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;dev-stories.webm&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;video/webm&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;dev-stories.mp4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;video/mp4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-embed</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre></div><h2 id="смотрите-также" class="bv-no-focus-ring"><span class="bd-content-title">Смотрите также<a class="anchorjs-link" href="#смотрите-также" aria-labelledby="смотрите-также"></a></span></h2> <ul> <li><a href="/docs/components/aspect" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-aspect&gt;</code> component</a></li> </ul>'}}}]);