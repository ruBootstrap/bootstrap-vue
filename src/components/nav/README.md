# Навигация

> Навигация, доступная в Bootstrap, использует общую разметку и стили, от базового класса `<b-nav>`
> до состояний `active` и `disabled`. Меняйте свойства модификатора, чтобы переключаться между
> каждым стилем.

```html
<div>
  <b-nav>
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Другая ссылка</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav.vue -->
```

## Обзор

Базовый компонент `<b-nav>` создан с помощью flexbox и обеспечивает прочную основу для создания всех
типов компонентов навигации. Он включает в себя некоторые переопределения стилей (для работы со
списками), некоторые отступы ссылок для больших областей попадания и базовые отключенные стили. В
базовую навигацию не включены никакие активные состояния.

`<b-nav>` поддерживает следующие дочерние компоненты:

- `<b-nav-item>` для действенных ссылок (или ссылок-маршрутизаторов)
- `<b-nav-item-dropdown>` для раскрывающихся списков
- `<b-nav-text>` для обычного текстового содержимого
- `<b-nav-form>` для встроенных форм

## Внешний вид ссылки

Поддерживаются два варианта стиля: `tabs` и `pills`, которые поддерживают стили `active` состояния.
Эти варианты взаимоисключающие — используйте только тот или иной стиль.

### Стиль табов

Сделайте навигацию похожей на вкладки, установив свойство `tabs`.

```html
<div>
  <b-nav tabs>
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Другая ссылка</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav-tabs.vue -->
```

### Стиль таблетки

Используйте стиль таблеток, установив свойство `pills`.

```html
<div>
  <b-nav pills>
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Другая ссылка</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav-pills.vue -->
```

### Маленький

Сделайте навигацию меньше, установив свойство `small`.

```html
<div>
  <b-nav small>
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Другая ссылка</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav-small.vue -->
```

## Fill и justify

Принудительно расширяйте содержимое `<b-nav>` на всю доступную ширину.

### Fill

Чтобы пропорционально заполнить все доступное пространство вашими компонентами `<b-nav-item>`,
установите свойство `fill`. Обратите внимание, что все горизонтальное пространство занято, но не все
элементы навигации имеют одинаковую ширину.

```html
<div>
  <b-nav tabs fill>
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Ссылка с длинным именем</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav-fill.vue -->
```

### Justified

Для элементов одинаковой ширины вместо этого установите свойство `justified`. Все горизонтальное
пространство будет занято навигационными ссылками, но в отличие от `fill` выше, все `<b-nav-item>`
будут иметь одинаковую ширину.

```html
<div>
  <b-nav tabs justified>
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Ссылка с длинным именем</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav-justified.vue -->
```

## Выравнивание

Чтобы выровнять компоненты `<b-nav-item>`, используйте свойство `align`. Доступные значения: `left`,
`center` и `right`.

```html
<div>
  <b-nav tabs align="center">
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Ссылка с длинным именем</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav-alignment.vue -->
```

## Vertical variation

По умолчанию `<b-nav>` отображается на горизонтальной линии. Сложите свою навигацию, установив
свойство `vertical`.

```html
<div>
  <b-nav vertical class="w-25">
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item>Другая ссылка</b-nav-item>
    <b-nav-item disabled>Отключенная</b-nav-item>
  </b-nav>
</div>

<!-- b-nav-vertical.vue -->
```

## Поддержка раскрывающегося списка

Используйте `<b-nav-item-dropdown>`, чтобы разместить выпадающие элементы в вашей навигации.

```html
<div>
  <b-nav pills>
    <b-nav-item active>Активная</b-nav-item>
    <b-nav-item>Ссылка</b-nav-item>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Раскрывающийся список"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item>Один</b-dropdown-item>
      <b-dropdown-item>Два</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Три</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</div>

<!-- b-nav-item-dropdown.vue -->
```

Иногда вы хотите добавить свои собственные имена классов к сгенерированной выпадающей
кнопке-переключателю, которые по умолчанию имеют классы `nav-link` и `dropdown-toggle`. Используйте
свойство `toggle-class`, чтобы добавить их (как показано выше), которые будут отображать HTML,
похожий на:

```html
<li id="my-nav-dropdown" class="nav-item b-nav-dropdown dropdown">
  <a
    role="button"
    href="#my-nav-dropdown"
    id="my-nav-dropdown__BV_button_"
    aria-haspopup="true"
    aria-expanded="false"
    class="nav-link dropdown-toggle nav-link-custom"
  ></a>
  ...
</li>
```

Смотрите [`<b-dropdown>`](/docs/components/dropdown) для получения списка поддерживаемых
подкомпонентов.

### Слот по умолчанию с необязательной областью действия

Выпадающий слот по умолчанию опционально имеет следующую доступную область:

| Свойство или метод | Описание                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hide()`           | Может использоваться для закрытия выпадающего меню. Принимает необязательный логический аргумент, который, если он равен `true`, возвращает фокус на кнопку-переключатель |

### Отложенный раскрывающийся список

По умолчанию `<b-nav-item-dropdown>` отображает содержимое меню в DOM, даже если меню не
отображается. Когда на одной странице отображается большое количество раскрывающихся списков,
производительность может снизиться из-за большего общего использования памяти. Вы можете указать
`<b-nav-item-dropdown>` отображать содержимое меню только тогда, когда оно отображается, установив
для свойства `lazy` значение true.

### Размещение в раскрывающемся списке

Используйте свойства раскрывающегося списка `right`, `dropup`, `dropright`, `dropleft`, `no-flip` и
`offset`, чтобы управлять позиционированием `<b-nav-item-dropdown>`.

Обратитесь к [разделу позиционирования `<b-dropdown>`](/docs/components/dropdown#positioning) для
получения подробной информации об эффектах и использовании этих свойств.

### Примечание о реализации раскрывающегося списка

Обратите внимание, что кнопка-переключатель на самом деле отображается как тег ссылки `<a>` с
`role="button"` для целей стилизации, и обычно имеет `href`, установленный в `#`, если идентификатор
не указан через свойство `id`.

Переключатель предотвратит поведение прокрутки вверх (через JavaScript) при нажатии на ссылку
переключения. В некоторых случаях, когда используется SSR, и пользователь нажимает
кнопку-переключатель _до_ того, как Vue сможет гидратировать компонент, страница будет
прокручиваться вверх. В этих случаях простое предоставление уникального идентификатора с помощью
свойство `id` предотвратит нежелательное поведение прокрутки вверх.

## Текстовое содержимое навигации

Используйте дочерний компонент `<b-nav-text>`, чтобы поместить обычный текст в навигацию:

```html
<div>
  <b-nav >
    <b-nav-item href="#1">Ссылка 1</b-nav-item>
    <b-nav-item href="#2">Ссылка 2</b-nav-item>
    <b-nav-text>Простой текст</b-nav-text>
  </b-nav>
</div>

<!-- b-nav-text.vue -->
```

## Встроенные формы навигации

Используйте дочерний компонент `<b-nav-form>`, чтобы поместить _инлайн_ форму в навигацию:

```html
<div>
  <b-nav pills>
    <b-nav-item href="#1" active>Ссылка 1</b-nav-item>
    <b-nav-item href="#2">Ссылка 2</b-nav-item>
    <b-nav-form @submit.stop.prevent="alert('Форма отправлена')">
      <b-form-input aria-label="Ввод" class="mr-1"></b-form-input>
      <b-button type="submit">Хорошо</b-button>
    </b-nav-form>
  </b-nav>
</div>

<!-- b-nav-form.vue -->
```

Дополнительные сведения о размещении элементов управления формы смотрите в документации
[инлайн `<b-form>`](/docs/components/form#inline-form).

## Поддержка местного контента с вкладками

Смотрите компонент [`<b-tabs>`](/docs/components/tabs) для создания вкладок с локальным содержимым
(не подходит для навигации).

## Интеграция карточек

Используйте `<b-nav>` в заголовке [`<b-card>`](/docs/components/card), включив свойство
`card-header` в `<b-nav>` и установив либо свойство `pills` или `tabs`:

**Стиль вкладок:**

```html
<div>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Активная</b-nav-item>
        <b-nav-item>Неактивная</b-nav-item>
        <b-nav-item disabled>Отключенная</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-text>
        Со вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.
      </b-card-text>

      <b-button variant="primary">Иди куда-нибудь</b-button>
    </b-card-body>
  </b-card>
</div>

<!-- nav-card-tabs.vue -->
```

**Стиль таблеток:**

```html
<div>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills>
        <b-nav-item active>Активная</b-nav-item>
        <b-nav-item>Неактивная</b-nav-item>
        <b-nav-item disabled>Отключенная</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-text>
        Со вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.
      </b-card-text>

      <b-button variant="primary">Иди куда-нибудь</b-button>
    </b-card-body>
  </b-card>
</div>

<!-- nav-card-pills.vue -->
```

**Обычный стиль:**

Свойство `card-header` нужно только тогда, когда вы применяете стиль `tabs` или `pills`. Обратите
внимание, что Bootstrap v4 SCSS не имеет специального стиля для `active` элементов навигации в
обычном стиле.

```html
<div>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav>
        <b-nav-item active>Активная</b-nav-item>
        <b-nav-item>Неактивная</b-nav-item>
        <b-nav-item disabled>Отключенная</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-text>
        Со вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.
      </b-card-text>

      <b-button variant="primary">Иди куда-нибудь</b-button>
    </b-card-body>
  </b-card>
</div>

<!-- nav-card-plain.vue -->
```

Свойство `card-header` не имеет эффекта стиля, если `<b-nav>` находится в `vertical` режиме.

### Использование с маршрутизатором Vue

Пусть ваша карточка `<b-nav>` управляет вложенными маршрутами vue router через компоненты
`<router-view>` или `<nuxt-child>`, чтобы создавать содержимое вкладок, которое изменяется с
URL-адресом маршрута:

```html
// На странице с маршрутом `/some/route`
<div>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <!-- <b-nav-item> с дочерними маршрутами. Обратите внимание на косую черту в конце первого элемента <b-nav-item> -->
        <b-nav-item to="/some/route/" exact exact-active-class="active">Активная</b-nav-item>
        <b-nav-item to="/some/route/foo" exact exact-active-class="active">Фуу</b-nav-item>
        <b-nav-item to="/some/route/bar" exact exact-active-class="active">Бар</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
      <!-- Дочерний маршрут отображается в <router-view> или <nuxt-child> -->
      <router-view></router-view>
      <!-- Или при использовании Nuxt.js
      <nuxt-child></nuxt-child>
      -->
    </b-card-body>
  </b-card>
</div>
```

Примечание. Vue Router не поддерживает определение активных маршрутов с помощью хэшей (`#`), поэтому
вы должны определить содержимое «вкладки» как дочерние маршруты.

**Пример конфигурации маршрутизатора выше:**

<!-- eslint-disable no-unused-vars, no-undef -->

```js
const routes = [
  {
    path: '/some/route',
    // Мы не указываем имя для этого родительского маршрута,
    // а вместо имени устанавливаем имя для дочернего маршрута
    // по умолчанию: 'some-route',
    component: SomeRouteComponent,
    // "tabs" дочернего маршрута
    children: [
      // Обратите внимание, что указанное выше имя родительского маршрута
      // указано на маршруте дочерней вкладки по умолчанию, чтобы эта вкладка
      // отображалась по умолчанию при использовании именованных маршрутов
      { path: '', component: DefaultTabComponent, name: 'some-route' },
      { path: 'foo', component: FooTabComponent },
      { path: 'bar', component: BarTabComponent }
    ]
  }
]
```

Можно также использовать Vue Router
[именованные маршруты](https://router.vuejs.org/guide/essentials/named-routes.html#named-routes)
и/или параметры маршрута вместо маршрутов на основе пути.

Подробнее смотрите:

- [Vue Router `<router-view>`](https://router.vuejs.org/api/#router-view)
- [Nuxt.JS `<nuxt-child>`](https://nuxtjs.org/api/components-nuxt-child)

## Доступность

Если вы используете `<b-nav>` для предоставления панели навигации, обязательно добавьте
`role="navigation"` в наиболее логичный родительский контейнер `<b-nav>` или оберните `<nav>`
элемент вокруг `<b-nav>`. **Не** добавляйте роль в сам `<b-nav>`, так как это помешает
вспомогательным технологиям объявить ее как реальный список.

При использовании `<b-nav-item-dropdown>` в `<b-nav>` обязательно присвойте уникальное значение
свойства `id` `<b-nav-item-dropdown>`, чтобы соответствующие атрибуты `aria-*` могут быть
сгенерированы автоматически.

### Доступность интерфейса с вкладками

Обратите внимание, что панели навигации, даже если они визуально оформлены как вкладки, **не**
должны иметь атрибуты `role="tablist"`, `role="tab"` или `role="tabpanel"`. Они подходят только для
[интерфейсов с вкладками](/docs/components/tabs), которые не изменяют URL-адрес или `$route`, как
описано в [Практиках создания WAI ARIA](https://www.w3.org/TR/wai-aria-practices/#tabpanel).
Смотрите [`<b-tabs>`](/docs/components/tabs) для динамических интерфейсов с вкладками, совместимых с
WAI ARIA.

В интерфейсах с вкладками следует избегать использования раскрывающихся меню, так как это вызывает
проблемы как с удобством использования, так и с доступностью:

- С точки зрения удобства использования тот факт, что элемент триггера текущей отображаемой вкладки
  не виден сразу (поскольку он находится внутри закрытого раскрывающегося меню), может вызвать
  путаницу.
- С точки зрения доступности в настоящее время нет разумного способа сопоставления такого рода
  конструкции со стандартным шаблоном WAI ARIA, а это означает, что ее нелегко сделать понятной для
  пользователей вспомогательных технологий.

## Смотрите также

- [`<b-tabs>`](/docs/components/tabs) для создания вкладок с локальным контентом, даже через
  раскрывающиеся меню.
- [`<b-navbar>`](/docs/components/navbar) оболочка, которая размещает брендинг, навигацию и другие
  элементы в кратком заголовке.
- [`<b-dropdown>`](/docs/components/dropdown) для подкомпонентов, которые вы можете разместить
  внутри `<b-nav-item-dropdown>`.
- [Справочник по поддержке Router Link](/docs/reference/router-links) для получения информации о
  конкретных свойств `<b-nav-item>`

<!-- Component reference added automatically from component package.json -->
