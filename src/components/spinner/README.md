# Спиннер

> Компонент `<b-spinner>` можно использовать для отображения состояния загрузки в ваших проектах.
> Они отображаются только с помощью базовых HTML и CSS в качестве облегченного функционального
> компонента Vue. Их внешний вид, выравнивание и размер можно легко настроить с помощью нескольких
> встроенных свойств и/или служебных классов Bootstrap v4.

Спиннеры можно размещать где угодно, включая внутренние кнопки, оповещения и даже занятый слот
`<b-table>`.

```html
<div class="text-center">
  <b-spinner label="Spinning"></b-spinner>
  <b-spinner type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="primary" label="Spinning"></b-spinner>
  <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="success" label="Spinning"></b-spinner>
  <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
</div>

<!-- b-spinners.vue -->
```

## Типы спиннеров

Bootstrap включает в себя два типа спиннеров. Тип спиннера по умолчанию называется `border` (граница
вращающегося круга), а необязательный тип `grow` (индикатор в стиле пульсатора).

### Спиннер Border

Используйте спиннер типа `border` по умолчанию для легкого индикатора загрузки.

```html
<div>
  <b-spinner label="Загрузка..."></b-spinner>
</div>

<!-- b-spinner-border.vue -->
```

### Спиннер Grow

Если вам не нравится спиннер `border`, переключитесь на спиннер `grow`, установив свойство`type` на
`'grow'`. Хотя технически он не вращается, он постоянно растет!

```html
<div>
  <b-spinner type="grow" label="Загрузка..."></b-spinner>
</div>

<!-- b-spinner-grow.vue -->
```

## Цветовые варианты спиннера

Спиннеры используют `currentColor` для своего цвета, что означает, что он наследует текущий цвет
шрифта. Вы можете настроить цвет, используя стандартные варианты цвета текста, используя свойство
`variant`, или поместить классы или стили в компонент, чтобы изменить его цвет.

Свойство `variant` переводит имя варианта в класс Bootstrap v4 `.text-{variant}`, поэтому, если у
вас есть настраиваемые варианты цвета текста, не стесняйтесь использовать их через свойство
`variant`.

```html
<template>
  <div>
    <div class="text-center mb-3 d-flex justify-content-between">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
      ></b-spinner>
    </div>

    <div class="text-center d-flex justify-content-between">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
        type="grow"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
      }
    }
  }
</script>

<!-- b-spinner-variants.vue -->
```

**Почему бы не использовать утилиты `border-color`?** Каждый спиннер `border` указывает
`transparent` рамку по крайней мере для одной стороны, поэтому утилиты `.border-{color}`
переопределяют это.

## Размер

Установите для свойства `small` значение `true`, чтобы сделать спиннер меньшего размера, который
можно будет быстро использовать в других компонентах.

```html
<div>
  <b-spinner small label="Маленький спиннер"></b-spinner>
  <b-spinner small label="Маленький спиннер" type="grow"></b-spinner>
</div>

<!-- b-spinner-sizes.vue -->
```

Или используйте собственные стили CSS или встроенные стили, чтобы изменить размеры по мере
необходимости.

```html
<div>
  <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
  <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
</div>

<!-- b-spinner-sizes-custom.vue -->
```

## Выравнивание

Спиннеры в Bootstrap создаются с помощью `rem`, `currentColor` и `display: inline-flex`. Это
означает, что их можно легко изменить в размере, перекрасить и быстро выровнять.

### Margin

Используйте утилиты для отступов, такие как `.m-5`, чтобы упростить интервалы.

```html
<div>
  <b-spinner class="m-5" label="Занятой"></b-spinner>
</div>

<!-- b-spinner-margin.vue -->
```

## Размещение

Используйте утилиты flexbox, утилиты float или классы утилит выравнивания текста, чтобы размещать
спиннеры именно там, где они вам нужны в любой ситуации.

### Flex

Использование флекс классов утилит:

```html
<div>
  <div class="d-flex justify-content-center mb-3">
    <b-spinner label="Загрузка..."></b-spinner>
  </div>

  <div class="d-flex align-items-center">
    <strong>Загрузка...</strong>
    <b-spinner class="ml-auto"></b-spinner>
  </div>
</div>

<!-- b-spinner-flex.vue -->
```

### Floats

Использование флоат классов утилит:

```html
<div class="clearfix">
  <b-spinner class="float-right" label="Floated Right"></b-spinner>
</div>

<!-- b-spinner-floats.vue -->
```

### Выравнивание текста

Использование классов утилит выравнивания текста:

```html
<div class="text-center">
  <b-spinner variant="primary" label="Text Centered"></b-spinner>
</div>

<!-- b-spinner-text-align.vue -->
```

## Спиннеры в кнопках

Используйте спиннеры внутри кнопок, чтобы указать, что действие в настоящее время обрабатывается или
происходит. Вы также можете заменить текст метки из элемента счетчика и использовать текст кнопки по
мере необходимости.

```html
<div>
  <b-button variant="primary" disabled>
    <b-spinner small></b-spinner>
    <span class="sr-only">Загрузка...</span>
  </b-button>

  <b-button variant="primary" disabled>
    <b-spinner small type="grow"></b-spinner>
    Загрузка...
  </b-button>
</div>

<!-- b-spinner-buttons.vue -->
```

## Доступность спиннера

Поместите скрытый текст метки внутрь спиннера для пользователей программ чтения с экрана через
свойство `label` или слот `label`. Содержимое будет помещено внутри спиннера, заключенного в элемент
`<span>` с классом `sr-only`, что сделает метку доступной для пользователей программ чтения с
экрана.

В целях доступности каждый счетчик будет автоматически иметь атрибут `role="status"` при
предоставлении метки. Вы можете легко настроить роль, если это необходимо, с помощью свойства
`role`. Указанная `role` не будет применяться, если не указана метка.

Кроме того, когда метка не указана, счетчик автоматически получает атрибут `aria-hidden="true"`,
чтобы скрыть счетчик от пользователей программ чтения с экрана.

## Смотрите также

Альтернативой компоненту `<b-spinner>` являются [анимированные иконки](/docs/icons/#animated-icons).

<!-- Component reference added automatically from component package.json -->
