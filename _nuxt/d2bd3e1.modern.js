(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{465:function(n,l){n.exports={baseTOC:{top:"#группа-списка",title:"Группа списка",toc:[{href:"#активные-элементы",label:"Активные элементы"},{href:"#disabled-items",label:"Disabled items"},{href:"#элементы-группы-списка-действий",label:"Элементы группы списка действий"},{href:"#контекстные-варианты",label:"Контекстные варианты",toc:[{href:"#передача-смысла-вспомогательным-технологиям",label:"Передача смысла вспомогательным технологиям"}]},{href:"#со-значками",label:"Со значками"},{href:"#список-групп-внутри-карточек",label:"Список групп внутри карточек"},{href:"#горизонтальные-группы-списка",label:"Горизонтальные группы списка"},{href:"#пользовательский-контент",label:"Пользовательский контент"}]},titleLead:'<h1 id="группа-списка" class="bv-no-focus-ring"><span class="bd-content-title">Группа списка</span></h1> <p class="bd-lead">Группы списков — это гибкий и мощный компонент для отображения серии содержимого. Элементы группы списка могут быть изменены для поддержки практически любого содержимого внутри. Их также можно использовать в качестве навигации с помощью различных свойств.</p>',body:'<div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group.vue --&gt;</span></pre></div><h2 id="активные-элементы" class="bv-no-focus-ring"><span class="bd-content-title">Активные элементы<a class="anchorjs-link" href="#активные-элементы" aria-labelledby="активные-элементы"></a></span></h2> <p>Установите свойство <code class="text-nowrap" translate="no">active</code> в <code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code>, чтобы указать текущий активный выбор.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">active</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-active.vue --&gt;</span></pre></div><h2 id="disabled-items" class="bv-no-focus-ring"><span class="bd-content-title">Disabled items<a class="anchorjs-link" href="#disabled-items" aria-labelledby="disabled-items"></a></span></h2> <p>Установите свойство <code class="text-nowrap" translate="no">disabled</code> в <code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code>, чтобы оно отображалось отключенным (также работает с активными элементами, смотрите ниже).</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Porta ac consectetur ac<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-disabled.vue --&gt;</span></pre></div><h2 id="элементы-группы-списка-действий" class="bv-no-focus-ring"><span class="bd-content-title">Элементы группы списка действий<a class="anchorjs-link" href="#элементы-группы-списка-действий" aria-labelledby="элементы-группы-списка-действий"></a></span></h2> <p>Превратите <code class="text-nowrap" translate="no">&lt;b-list-group-item&gt;</code> в действенную <em>ссылку</em> (<code class="text-nowrap" translate="no">&lt;a href=&quot;...&quot;&gt;</code>), указав либо свойство <code class="text-nowrap" translate="no">href</code>, либо свойство <a href="/docs/reference/router-links" class="font-weight-bold">router-link</a> <code class="text-nowrap" translate="no">to</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#some-link&quot;</span>&gt;</span>Отличная ссылка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">active</span>&gt;</span>Ссылка с активным состоянием<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Ссылки на действия легко<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#foobar&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Отключенная ссылка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-link.vue --&gt;</span></pre></div><p>Или, если вы предпочитаете элементы <code class="text-nowrap" translate="no">&lt;button&gt;</code> ссылкам, установите свойство <code class="text-nowrap" translate="no">button</code> в значение <code class="text-nowrap" translate="no">true</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>Элемент кнопки<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>Я кнопка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span> <span class="hljs-attr">disabled</span>&gt;</span>Отключенная кнопка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">button</span>&gt;</span>Это тоже кнопка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-button.vue --&gt;</span></pre></div><p><strong>Примечания:</strong></p> <ul> <li>Когда свойство <code class="text-nowrap" translate="no">button</code> имеет значение <code class="text-nowrap" translate="no">true</code>, все <a href="/docs/components/link" class="font-weight-bold">свойства, связанные со ссылкой</a> (кроме <code class="text-nowrap" translate="no">active</code>) и свойство <code class="text-nowrap" translate="no">tag</code> не будут иметь никакого эффекта.</li> <li>Когда установлены <code class="text-nowrap" translate="no">href</code> или <code class="text-nowrap" translate="no">to</code>, свойство <code class="text-nowrap" translate="no">tag</code> не действует.</li> </ul> <p>Обратитесь к справочной странице <a href="/docs/reference/router-links" class="font-weight-bold">Поддержка маршрутизатора</a> для конкретных свойств маршрутизатора.</p> <h2 id="контекстные-варианты" class="bv-no-focus-ring"><span class="bd-content-title">Контекстные варианты<a class="anchorjs-link" href="#контекстные-варианты" aria-labelledby="контекстные-варианты"></a></span></h2> <p>Используйте контекстные варианты, чтобы стилизовать элементы списка с фоном и цветом с отслеживанием состояния с помощью параметра <code class="text-nowrap" translate="no">variant</code>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Элемент группы списка по умолчанию<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Элемент группы основного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Элемент группы вторичного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Элемент группы списка успехов<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Элемент группы списка опасностей<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Элемент группы списка предупреждений<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Элемент группы информационного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span>Элемент группы светлого списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>Элемент группы темного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-variant.vue --&gt;</span></pre></div><p>Контекстные варианты также работают с элементами действий. Обратите внимание на добавление стиля при наведении, которого нет в предыдущем примере. Также поддерживается состояние <code class="text-nowrap" translate="no">active</code>; установите его, чтобы указать активный выбор в элементе группы контекстного списка.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Элемент группы списка по умолчанию<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Элемент группы основного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Элемент группы вторичного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Элемент группы списка успехов<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Элемент группы списка опасностей<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Элемент группы списка предупреждений<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Элемент группы информационного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span>Элемент группы светлого списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>Элемент группы темного списка<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-variant-action.vue --&gt;</span></pre></div><h3 id="передача-смысла-вспомогательным-технологиям" class="bv-no-focus-ring"><span class="bd-content-title">Передача смысла вспомогательным технологиям<a class="anchorjs-link" href="#передача-смысла-вспомогательным-технологиям" aria-labelledby="передача-смысла-вспомогательным-технологиям"></a></span></h3> <p>Использование цвета для добавления значения обеспечивает только визуальную индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана. Убедитесь, что информация, обозначенная цветом, либо очевидна из самого содержимого (например, видимый текст), либо включена с помощью альтернативных средств, таких как дополнительный текст, скрытый с помощью класса <code class="text-nowrap" translate="no">.sr-only</code>.</p> <h2 id="со-значками" class="bv-no-focus-ring"><span class="bd-content-title">Со значками<a class="anchorjs-link" href="#со-значками" aria-labelledby="со-значками"></a></span></h2> <p>Добавьте <a href="/docs/components/badge" class="font-weight-bold">значки</a>в любой элемент группы списка, чтобы показать количество непрочитанных сообщений, активность и многое другое с помощью некоторых <a href="/docs/reference/utility-classes" class="font-weight-bold">классов флекс-утилит</a>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex justify-content-between align-items-center&quot;</span>&gt;</span>\n    Cras justo odio\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">pill</span>&gt;</span>14<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex justify-content-between align-items-center&quot;</span>&gt;</span>\n    Dapibus ac facilisis in\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">pill</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex justify-content-between align-items-center&quot;</span>&gt;</span>\n    Morbi leo risus\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-badge</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">pill</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">b-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-badges.vue --&gt;</span></pre></div><h2 id="список-групп-внутри-карточек" class="bv-no-focus-ring"><span class="bd-content-title">Список групп внутри карточек<a class="anchorjs-link" href="#список-групп-внутри-карточек" aria-labelledby="список-групп-внутри-карточек"></a></span></h2> <p>Включите группы списков в <a href="/docs/components/card" class="font-weight-bold">карточки</a>. Используйте свойство <code class="text-nowrap" translate="no">flush</code> элемента <code class="text-nowrap" translate="no">&lt;b-list-group&gt;</code> при использовании карточек с <code class="text-nowrap" translate="no">no-body</code>, чтобы стороны группы списка были на одном уровне с карточкой.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-card-group</span> <span class="hljs-attr">deck</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">header</span>=<span class="hljs-string">&quot;Карточка с группой списка&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-text mt-2&quot;</span>&gt;</span>\n      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum\n      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur\n      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">header</span>=<span class="hljs-string">&quot;Карта с группой флеш-списков&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span> <span class="hljs-attr">flush</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Vestibulum at eros<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum\n      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur\n      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-card-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-card.vue --&gt;</span></pre></div><h2 id="горизонтальные-группы-списка" class="bv-no-focus-ring"><span class="bd-content-title">Горизонтальные группы списка<a class="anchorjs-link" href="#горизонтальные-группы-списка" aria-labelledby="горизонтальные-группы-списка"></a></span></h2> <p>Установите для параметра <code class="text-nowrap" translate="no">horizontal</code> значение <code class="text-nowrap" translate="no">true</code>, чтобы изменить расположение элементов группы списка с вертикального на горизонтальное во всех контрольных точках. В качестве альтернативы, установите <code class="text-nowrap" translate="no">horizontal</code> на отзывчивую контрольную точку (<code class="text-nowrap" translate="no">sm</code>, <code class="text-nowrap" translate="no">md</code>, <code class="text-nowrap" translate="no">lg</code> или <code class="text-nowrap" translate="no">xl</code>), чтобы сделать группу списка горизонтальной, начиная с минимальной ширины этой контрольной точки. В настоящее время группы горизонтальных списков нельзя комбинировать с группами списков <code class="text-nowrap" translate="no">flush</code>.</p> <p><strong>Совет:</strong> Хотите, чтобы элементы списка были одинаковой ширины в горизонтальном положении? Добавьте класс <code class="text-nowrap" translate="no">flex-fill</code> к каждому элементу группы списка.</p> <p><strong>Всегда горизонтально:</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span> <span class="hljs-attr">horizontal</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-horizontal.vue --&gt;</span></pre></div><p><strong>Горизонтально в контрольной точке <code class="text-nowrap" translate="no">md</code> и выше:</strong></p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span> <span class="hljs-attr">horizontal</span>=<span class="hljs-string">&quot;md&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Cras justo odio<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Dapibus ac facilisis in<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span>&gt;</span>Morbi leo risus<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-horizontal-md.vue --&gt;</span></pre></div><h2 id="пользовательский-контент" class="bv-no-focus-ring"><span class="bd-content-title">Пользовательский контент<a class="anchorjs-link" href="#пользовательский-контент" aria-labelledby="пользовательский-контент"></a></span></h2> <p>Добавьте практически любой HTML или компонент внутри, даже для групп связанных списков, таких как приведенный ниже, с помощью <a href="/docs/reference/utility-classes" class="font-weight-bold">классов-утилит flexbox</a>.</p> <div class="bd-code"><pre class="hljs html p-2" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">b-list-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">active</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-column align-items-start&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex w-100 justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Заголовок элемента группы списка<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>3 дня назад<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-column align-items-start&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex w-100 justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Заголовок элемента группы списка<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>3 дня назад<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-list-group-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-column align-items-start&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex w-100 justify-content-between&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Отключенный элемент группы списка<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>3 дня назад<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-muted&quot;</span>&gt;</span>Donec id elit non mi porta.<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-list-group</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-list-group-content.vue --&gt;</span></pre></div>'}}}]);