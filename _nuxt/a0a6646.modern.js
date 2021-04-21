(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{442:function(n,l){n.exports={baseTOC:{top:"#группа-кнопок",title:"Группа кнопок",toc:[{href:"#обзор",label:"Обзор"},{href:"#размеры",label:"Размеры"},{href:"#вертикальная-вариация",label:"Вертикальная вариация"},{href:"#поддержка-выпадающего-меню",label:"Поддержка выпадающего меню"},{href:"#смотрите-также",label:"Смотрите также"}]},titleLead:'<h1 id="группа-кнопок" class="bv-no-focus-ring"><span class="bd-content-title">Группа кнопок</span></h1> <p class="bd-lead">Сгруппируйте несколько кнопок в одну строку с помощью <code class="text-nowrap" translate="no">&lt;b-button-group&gt;</code>.</p>',body:'<h2 id="обзор" class="bv-no-focus-ring"><span class="bd-content-title">Обзор<a class="anchorjs-link" href="#обзор" aria-labelledby="обзор"></a></span></h2> <p>Группы кнопок - это простой способ сгруппировать серии кнопок вместе.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Кнопка 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Кнопка 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Кнопка 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Успешно<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Инфо<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Внимание<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group.vue --&gt;</span></pre></div><h2 id="размеры" class="bv-no-focus-ring"><span class="bd-content-title">Размеры<a class="anchorjs-link" href="#размеры" aria-labelledby="размеры"></a></span></h2> <p>Установите для свойства <code class="text-nowrap" translate="no">size</code> значение <code class="text-nowrap" translate="no">lg</code> или <code class="text-nowrap" translate="no">sm</code>, чтобы отображать кнопки большего или меньшего размера соответственно. Нет необходимости указывать размер на отдельных кнопках.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Кнопка 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Кнопка 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Кнопка 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Лево<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Середина<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Право<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Лево<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Середина<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Право<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group-sizes.vue --&gt;</span></pre></div><h2 id="вертикальная-вариация" class="bv-no-focus-ring"><span class="bd-content-title">Вертикальная вариация<a class="anchorjs-link" href="#вертикальная-вариация" aria-labelledby="вертикальная-вариация"></a></span></h2> <p>Сделайте так, чтобы набор кнопок выглядел вертикально сложенными, а не горизонтально, установив свойство <code class="text-nowrap" translate="no">vertical</code>. Выпадающие меню с разделенными кнопками здесь не поддерживаются.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">vertical</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Верх<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Середина<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>низ<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group-vertical.vue --&gt;</span></pre></div><h2 id="поддержка-выпадающего-меню" class="bv-no-focus-ring"><span class="bd-content-title">Поддержка выпадающего меню<a class="anchorjs-link" href="#поддержка-выпадающего-меню" aria-labelledby="поддержка-выпадающего-меню"></a></span></h2> <p>Добавьте <a href="/docs/components/dropdown" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-dropdown&gt;</code></a> меню прямо внутри вашей <code class="text-nowrap" translate="no">&lt;b-button-group&gt;</code>. Обратите внимание, что разделенные раскрывающиеся меню не поддерживаются, если задано свойство <code class="text-nowrap" translate="no">vertical</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Кнопка<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">right</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Меню&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-divider</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">right</span> <span class="hljs-attr">split</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Раздельное меню&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-divider</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-group-menu.vue --&gt;</span></pre></div><h2 id="смотрите-также" class="bv-no-focus-ring"><span class="bd-content-title">Смотрите также<a class="anchorjs-link" href="#смотрите-также" aria-labelledby="смотрите-также"></a></span></h2> <p>Также обратите внимание на компонент <a href="/docs/components/button-toolbar" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-button-toolbar&gt;</code></a> для создания панелей инструментов, содержащих группы кнопок и группы ввода.</p>'}}}]);