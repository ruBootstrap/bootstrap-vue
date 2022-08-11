# Отслеживание прокрутки

> Автоматически обновляйте компоненты навигации или группы списка Bootstrap в зависимости от
> положения прокрутки, чтобы указать, какая ссылка в настоящее время активна в области просмотра.

## Как это работает

Директива `v-b-scrollspy` имеет несколько требований для правильной работы:

- Он должен применяться к элементу/компоненту, содержащему компонент(ы) `<b-nav>` или
  `<b-list-group>`где вы хотите указать, какая ссылка активна в данный момент.
- Отслеживание прокрутки требует `position: relative;` для элемента, за которым вы следите, обычно
  это `<body>`.
- При отслеживании элементов, отличных от `<body>`, обязательно установите `height` и примените
  `overflow-y: scroll;`.
- Якоря (`<a>`, `<b-nav-item>`, `<b-dropdown-item>`, `<b-list-group-item>`) обязательны и должны
  иметь `href` (через свойства `href` или `to`), который указывает на элемент с этим `id` в
  контейнере, за которым вы следите. При использовании свойства `to` либо установите `path`,
  заканчивающийся на `#id-of-element`, либо установите свойство `hash` на `#id-of-element`.

При успешном внедрении ваша группа навигации или списка будет соответствующим образом обновляться,
перемещая `active` состояние от одного элемента к другому в зависимости от связанных с ними целей.

### Пример использования навигации

Использование `v-b-scrollspy` в компоненте `<b-nav>` для отслеживания прокрутки на `<b-card-body>`.
Прокрутите область под панелью навигации и посмотрите, как меняется активный класс. Выпадающие
элементы также будут выделены.

```html
<template>
  <div>
    <b-card no-body>
      <b-nav pills card-header slot="header" v-b-scrollspy:nav-scroller>
        <b-nav-item href="#fat" @click="scrollIntoView">@fat</b-nav-item>
        <b-nav-item href="#mdo" @click="scrollIntoView">@mdo</b-nav-item>
        <b-nav-item-dropdown text="Dropdown 1,2,3" right-alignment>
          <b-dropdown-item href="#one" @click="scrollIntoView">one</b-dropdown-item>
          <b-dropdown-item href="#two" @click="scrollIntoView">two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#three" @click="scrollIntoView">three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#pi0" @click="scrollIntoView">@pi0</b-nav-item>
      </b-nav>

      <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:300px; overflow-y:scroll;"
      >
        <p>{{ text }}</p>
        <h4 id="fat">@fat</h4>
        <p v-for="i in 3">{{ text }}</p>
        <h4 id="mdo">@mdo</h4>
        <p v-for="i in 3">{{ text }}</p>
        <h4 id="one">one</h4>
        <p v-for="i in 2">{{ text }}</p>
        <h4 id="two">two</h4>
        <p>{{ text }}</p>
        <h4 id="three">three</h4>
        <p v-for="i in 2">{{ text }}</p>
        <h4 id="pi0">@pi0</h4>
        <p v-for="i in 3">{{ text }}</p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    methods: {
      // Convenience method to scroll a heading into view.
      // Not required for scrollspy to work
      scrollIntoView(event) {
        event.preventDefault()
        const href = event.target.getAttribute('href')
        const el = href ? document.querySelector(href) : null
        if (el) {
          this.$refs.content.scrollTop = el.offsetTop
        }
      }
    },
    data() {
      return {
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
      }
    }
  }
</script>

<!-- b-scrollspy-nav.vue -->
```

### Пример использования вложенных навигаций

Отслеживание прокрутки также работает с вложенными `<b-nav>`. Если вложенный `<b-nav-item>` активен,
его родител(ь)(и) также будут активны. Прокрутите область рядом с панелью навигации и посмотрите,
как меняется активный класс.

```html
<template>
  <b-container fluid>
    <b-row>
      <b-col cols="4">
        <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column">
          <b-navbar-brand href="#">Навбар</b-navbar-brand>
          <b-nav pills vertical>
            <b-nav-item href="#item-1">Элемент 1</b-nav-item>
            <b-nav pills vertical>
              <b-nav-item class="ml-3 my-1" href="#item-1-1">Элемент 1-1</b-nav-item>
              <b-nav-item class="ml-3 my-1" href="#item-1-2">Элемент 1-2</b-nav-item>
            </b-nav>
            <b-nav-item href="#item-2">Элемент 2</b-nav-item>
            <b-nav-item href="#item-3">Элемент 3</b-nav-item>
            <b-nav pills vertical>
              <b-nav-item class="ml-3 my-1" href="#item-3-1">Элемент 3-1</b-nav-item>
              <b-nav-item class="ml-3 my-1" href="#item-3-2">Элемент 3-2</b-nav-item>
            </b-nav>
          </b-nav>
        </b-navbar>
      </b-col>

      <b-col cols="8">
        <div id="scrollspy-nested" style="position:relative; height:350px; overflow-y:auto">
          <h4 id="item-1" style="">Элемент 1</h4>
          <p>{{ text }}</p>
          <h5 id="item-1-1" style="">Элемент 1-1</h5>
          <p>{{ text }}</p>
          <h5 id="item-1-2" style="">Элемент 2-2</h5>
          <p>{{ text }}</p>
          <h4 id="item-2" style="">Элемент 2</h4>
          <p>{{ text }}</p>
          <h4 id="item-3" style="">Элемент 3</h4>
          <p>{{ text }}</p>
          <h5 id="item-3-1" style="">Элемент 3-1</h5>
          <p>{{ text }}</p>
          <h5 id="item-3-2" style="">Элемент 3-2</h5>
          <p>{{ text }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
      }
    }
  }
</script>

<!-- b-scrollspy-nested.vue -->
```

### Пример использования группы списка

Scrollspy также работает с `<b-list-group>`, когда он содержит `<b-list-group-item>`, которые имеют
_локальный_ `href` или `to`. Прокрутите область рядом с группой списка и наблюдайте за изменением
активного состояния.

```html
<template>
  <b-container fluid>
    <b-row>
      <b-col cols="4">
        <b-list-group v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-1">Элемент 1</b-list-group-item>
          <b-list-group-item href="#list-item-2">Элемент 2</b-list-group-item>
          <b-list-group-item href="#list-item-3">Элемент 3</b-list-group-item>
          <b-list-group-item href="#list-item-4">Элемент 4</b-list-group-item>
          <b-list-group-item href="#list-item-5">Элемент 5</b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col cols="8">
        <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:300px">
          <h4 id="list-item-1">Элемент 1</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-2">Элемент 2</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-3">Элемент 3</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-4">Элемент 4</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-5">Элемент 5</h4>
          <p>{{ text }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
      }
    }
  }
</script>

<!-- b-scrollspy-listgroup.vue -->
```

## Использование scrollspy для компонентов со свойством `to`

Когда используется Vue Router (или Nuxt.js) и вы создаете свои ссылки со свойством `to`, используйте
один из следующих методов для создания соответствующего `href` для отображаемой ссылки:

```html
<!-- using a string path -->
<b-nav-item to="#id-of-element">ссылка-текст</b-nav-item>

<!-- using a router `to` location object -->
<b-nav-item :to="{ hash: '#id-of-element' }">ссылка-текст</b-nav-item>
```

Scrollspy работает с режимами маршрутизации как `history`, так и `hash`, если сгенерированный
URL-адрес заканчивается на `#id-of-element`.

## Синтаксис и использование директив

```
v-b-scrollspy:arg.mod1.mod2="option"
```

Где:

- `arg` - это идентификатор (минус `#`) элемента для отслеживания прокрутки. Необязательный (по
  умолчанию `body`. Может быть переопределен `option`)
- `mod1` и `mod2` могут быть числом `offset` или строковым `method` (смотрите объект конфигурации
  ниже). Порядок модификаторов не важен. Оба являются необязательными
- `option` может быть строкой, идентифицирующей `element` для отслеживания прокрутки, числовое
  `offset` или объект конфигурации (смотрите ниже). По желанию

**Примечание:** Директива применяется в обратном порядке по сравнению с собственным Bootstrap v4. В
**BootstrapVue** директива `v-b-scrollspy` применяется к целевому элементу, у которого есть
активируемые ссылки, а аргумент или опция указывает, какой элемент отслеживать (шпионить) за
прокруткой.

Директива может быть применена к любому содержащему элементу или компоненту, который имеет теги
`<nav-item>`, `<b-dropdown-item>`, `<b-list-group-item>` (или `<a>` с соответствующими классами),
если они отображают атрибуты `href`, указывающие на элементы с соответствующими идентификаторами
`id` в элементе прокрутки.

### Свойства объекта конфигурации

<!-- eslint-disable no-unused-vars -->

```js
const config = {
  element: 'body',
  offset: 10,
  method: 'auto',
  throttle: 100
}
```

| Свойство   | Тип                  | По умолчанию | Описание                                                                                                                                                                                                                                                                         |
| ---------- | -------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `element`  | String или Reference | `'body'`     | Элемент для отслеживания прокрутки. Может быть идентификатором (`#foo`), селектором css (`#foo div`), или ссылкой на узел элемента/компонента. Если это строка CSS, то используется первый соответствующий элемент. Если используется идентификатор, он должен начинаться с `#`. |
| `offset`   | Number               | `10`         | смещение (в пикселях) от верхней части области просмотра прокрутки перед запуском активного состояния.                                                                                                                                                                           |
| `method`   | String               | `'auto'`     | `position` будет вычислять целевые смещения относительно контейнера прокрутки. `offset` будет вычислять целевые смещения относительно верхней части окна/окна просмотра. `auto` выберет `offset`, если элементом прокрутки является `body`, иначе метод будет `position`.        |
| `throttle` | Number               | `100`        | Тайм-аут в `ms` для прекращения запуска событий изменения размера перед пересчетом смещений.                                                                                                                                                                                     |

Если передаются аргументы/модификаторы и значение (объект или число), значение имеет приоритет над
аргументом и модификаторами.

Если какой-либо из параметров имеет недопустимый тип, то в консоль записывается ошибка.

### Примечания к конфигурации

- Если элемент прокрутки отсутствует, то предполагается прокрутка на `<body>`
- Если элемент прокрутки является селектором CSS, выбирается первый найденный элемент
- Если элемент прокрутки не найден, то Scrollspy молча ничего не делает

**Важно! Требуется относительное позиционирование** Независимо от метода реализации, scrollspy
требует использования `position: relative;` для элемента, который вы прокручиваете. В большинстве
случаев это `<body>`. При просмотре элементов, отличных от `<body>`, убедитесь, что установлена
высота CSS `height` и применено `overflow-y: scroll;`.

### Примеры использования директив

Предположим, что `<body>` является элементом прокрутки и использует смещение по умолчанию 10
пикселей

```html
<div>
  <b-nav v-b-scrollspy>
    <b-nav-item href="#bar">Foo</b-nav-item>
    <b-nav-item href="#baz">Bar</b-nav-item>
  </b-nav>
</div>
```

Предположим, что `<body>` является элементом прокрутки и использует смещение 20 пикселей

```html
<div>
  <b-nav v-b-scrollspy="20">
    <b-nav-item href="#bar">Foo</b-nav-item>
    <b-nav-item href="#baz">Bar</b-nav-item>
  </b-nav>
</div>
```

Элемент с идентификатором `#foo` является элементом прокрутки и использует смещение по умолчанию 10
пикселей

```html
<div>
  <b-nav v-b-scrollspy:foo>
    <b-nav-item href="#bar">Foo</b-nav-item>
    <b-nav-item href="#baz">Bar</b-nav-item>
  </b-nav>
</div>
```

Элемент с идентификатором `#foo` является элементом прокрутки и использует смещение 20 пикселей

```html
<div>
  <b-nav v-b-scrollspy:foo="20">
    <b-nav-item href="#bar">Foo</b-nav-item>
    <b-nav-item href="#baz">Bar</b-nav-item>
  </b-nav>
</div>
```

Элемент `#foo` является элементом прокрутки и использует смещение 25 пикселей.

```html
<div>
  <b-nav v-b-scrollspy:foo.25>
    <b-nav-item href="#bar">Foo</b-nav-item>
    <b-nav-item href="#baz">Bar</b-nav-item>
  </b-nav>
</div>
```

Элемент `#foo` является элементом прокрутки и использует смещение по умолчанию 10 пикселей (обратите
внимание на одинарные кавычки вокруг значения)

```html
<div>
  <b-nav v-b-scrollspy="'#foo'">
    <b-nav-item href="#bar">Foo</b-nav-item>
    <b-nav-item href="#baz">Bar</b-nav-item>
  </b-nav>
</div>
```

Передать объект как конфиг. `element` может быть идентификатором CSS (например, `#foo`), селектором
CSS (например, `body`), или ссылкой на узел

```html
<div>
  <b-nav v-b-scrollspy="{element: '#id', offset: 50}">
    <b-nav-item href="#bar">Foo</b-nav-item>
    <b-nav-item href="#baz">Bar</b-nav-item>
  </b-nav>
</div>
```

## События

Всякий раз, когда цель активируется, событие `bv:scrollspy::activate` генерируется для `$root` с
идентификатором цели в качестве аргумента (например, `#bar`)

<!-- eslint-disable no-unused-vars -->

```js
const app = new Vue({
  el: '#app',
  created() {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
  },
  methods: {
    onActivate(target) {
      console.log('Received event: "bv::scrollspy::activate" for target ', target)
    }
  }
})
```

<!-- Directive reference section auto generated from directive package.json -->
