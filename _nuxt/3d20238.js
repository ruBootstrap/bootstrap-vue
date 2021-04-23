(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{523:function(n,t){n.exports={baseTOC:{top:"#панель-инструментов-кнопок",title:"Панель инструментов кнопок",toc:[{href:"#применение",label:"Применение"},{href:"#размеры",label:"Размеры"},{href:"#обоснование",label:"Обоснование"},{href:"#навигация-с-клавиатуры",label:"Навигация с клавиатуры"},{href:"#смотрите-также",label:"Смотрите также"}]},titleLead:'<h1 id="панель-инструментов-кнопок" class="bv-no-focus-ring"><span class="bd-content-title">Панель инструментов кнопок</span></h1> <p class="bd-lead">Сгруппируйте серию групп кнопок и/или групп ввода в одну строку с дополнительной навигацией с помощью клавиатуры</p>',body:'<p><strong>Пример 1:</strong> с группами кнопок и навигацией по клавиатуре</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-toolbar</span> <span class="hljs-attr">key-nav</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Панель инструментов с группами кнопок и навигацией по клавиатуре&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;laquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;lsaquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Редактировать<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Отменить<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Повторить<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;rsaquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;raquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-toolbar.vue --&gt;</span></pre></div><p><strong>Пример 2:</strong> со смесью небольшой группы кнопок и небольшой группы ввода</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-toolbar</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Панель инструментов со смесью небольшой группы кнопок и небольшой группы ввода&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Сохранить<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Отменить<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">&quot;$&quot;</span> <span class="hljs-attr">append</span>=<span class="hljs-string">&quot;.00&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-toolbar-input.vue --&gt;</span></pre></div><p><strong>Пример 3:</strong> с группами кнопок и раскрывающимся меню</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-toolbar</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Панель инструментов с группами кнопок и раскрывающимся меню&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Новый<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Редактировать<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Отменить<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-1&quot;</span> <span class="hljs-attr">right</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;menu&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Элемент 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mx-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Сохранить<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Отменить<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-toolbar-dropdown.vue --&gt;</span></pre></div><h2 id="применение" class="bv-no-focus-ring"><span class="bd-content-title">Применение<a class="anchorjs-link" href="#применение" aria-labelledby="применение"></a></span></h2> <p>Не стесняйтесь комбинировать группы ввода и раскрывающиеся списки с группами кнопок на панелях инструментов. Как и в приведенном выше примере, вам, вероятно, понадобятся некоторые классы утилиты, чтобы правильно расположить вещи.</p> <h2 id="размеры" class="bv-no-focus-ring"><span class="bd-content-title">Размеры<a class="anchorjs-link" href="#размеры" aria-labelledby="размеры"></a></span></h2> <p>Обратите внимание, если вам нужны кнопки или элементы управления меньшего или большего размера, установите свойство <code class="text-nowrap" translate="no">size</code> непосредственно в компонентах <code class="text-nowrap" translate="no">&lt;b-button-group&gt;</code>, <code class="text-nowrap" translate="no">&lt;b-input-group&gt;</code> и <code class="text-nowrap" translate="no">&lt;b-dropdown&gt;</code>.</p> <h2 id="обоснование" class="bv-no-focus-ring"><span class="bd-content-title">Обоснование<a class="anchorjs-link" href="#обоснование" aria-labelledby="обоснование"></a></span></h2> <p>Сделайте панель инструментов с максимально доступной шириной, увеличив интервал между группами кнопок, группами ввода и раскрывающимися списками, установив свойство <code class="text-nowrap" translate="no">justify</code>.</p> <h2 id="навигация-с-клавиатуры" class="bv-no-focus-ring"><span class="bd-content-title">Навигация с клавиатуры<a class="anchorjs-link" href="#навигация-с-клавиатуры" aria-labelledby="навигация-с-клавиатуры"></a></span></h2> <p>Включите необязательную навигацию с клавиатуры, установив свойство <code class="text-nowrap" translate="no">key-nav</code>.</p> <div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table"> <thead class="thead-default"> <tr> <th>Нажатие клавиши</th> <th>Действие</th> </tr> </thead> <tbody><tr> <td><kbd class="notranslate" translate="no">Left</kbd> или <kbd class="notranslate" translate="no">Up</kbd></td> <td>Перейти к предыдущему неотключенному элементу на панели инструментов</td> </tr> <tr> <td><kbd class="notranslate" translate="no">Right</kbd> или <kbd class="notranslate" translate="no">Down</kbd></td> <td>Перейти к следующему неотключенному элементу на панели инструментов</td> </tr> <tr> <td><kbd class="notranslate" translate="no">Shift</kbd>+<kbd class="notranslate" translate="no">Left</kbd> или <kbd class="notranslate" translate="no">Shift</kbd>+<kbd class="notranslate" translate="no">Up</kbd></td> <td>Перейти к первому неотключенному элементу на панели инструментов</td> </tr> <tr> <td><kbd class="notranslate" translate="no">Shift</kbd>+<kbd class="notranslate" translate="no">Right</kbd> или <kbd class="notranslate" translate="no">Shift</kbd>+<kbd class="notranslate" translate="no">Down</kbd></td> <td>Перейти к последнему неотключенному элементу на панели инструментов</td> </tr> <tr> <td><kbd class="notranslate" translate="no">Tab</kbd></td> <td>Перейти к следующему элементу управления на странице</td> </tr> <tr> <td><kbd class="notranslate" translate="no">Shift</kbd>+<kbd class="notranslate" translate="no">Tab</kbd></td> <td>Перейти к предыдущему элементу управления на странице</td> </tr> </tbody></table> </div><p><strong>Осторожно:</strong> Если у вас есть текст или текстовые поля ввода на панели инструментов, оставьте навигацию с клавиатуры отключенной, так как невозможно использовать нажатия клавиш для выхода из текстовых (или тестовых) полей ввода.</p> <h2 id="смотрите-также" class="bv-no-focus-ring"><span class="bd-content-title">Смотрите также<a class="anchorjs-link" href="#смотрите-также" aria-labelledby="смотрите-также"></a></span></h2> <ul> <li><a href="/docs/components/button-group" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-button-group&gt;</code></a></li> <li><a href="/docs/components/dropdown" class="font-weight-bold"><code class="text-nowrap" translate="no">&lt;b-dropdown&gt;</code></a></li> </ul>'}}}]);