# Хлебные крошки

> Укажите местоположение текущей страницы в навигационной иерархии. Разделители автоматически добавляются в CSS через <code>::before</code> и <code>content</code>.

## Обзор

```html
<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Админ',
            href: '#'
          },
          {
            text: 'Управление',
            href: '#'
          },
          {
            text: 'Библиотека',
            active: true
          }
        ]
      }
    }
  }
</script>

<!-- b-breadcrumb.vue -->
```

## Элементы хлебных крошек

Элементы визуализируются с использованием свойства `:items`. Это может быть массив объектов для предоставления ссылки и активного состояния. Ссылки могут быть `href` для тегов привязки или `to` для ссылок маршрутизатора. Активное состояние последнего элемента устанавливается автоматически, если он не определен. `undefined`.

<!-- eslint-disable no-unused-vars -->

```js
const items = [
  {
    text: 'Главная',
    href: 'https://google.com'
  },
  {
    text: 'Посты',
    to: { name: 'home' }
  },
  {
    text: 'Другая история',
    active: true
  }
]
```

Смотрите справочную страницу [Поддержка маршрутизатора](/docs/reference/router-links) для получения информации о конкретных свойствах связи маршрутизатора.

## Элементы, размещенные вручную

Вы также можете вручную поместить отдельные дочерние компоненты `<b-breadcrumb-item>` в слот по умолчанию компонента `<b-breadcrumb>` в качестве альтернативы использованию свойства `items` для большего контроля над содержимым каждого элемента:

```html
<template>
  <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Главная
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Фуу</b-breadcrumb-item>
    <b-breadcrumb-item href="#bar">Бар</b-breadcrumb-item>
    <b-breadcrumb-item active>Баз</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<!-- b-breadcrumb-item.vue -->
```

Не забудьте установить свойство `active` для последнего элемента.

`<b-breadcrumb-item>` также поддерживает различные свойства `<router-link>`, такие как `to` и т. д.

<!-- Component reference added automatically from component package.json -->
