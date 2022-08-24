# Иконки

> Иконки Bootstrap предназначены для работы с компонентами Bootstrap, от элементов управления формой
> до навигации. Иконки Bootstrap представляют собой SVG, поэтому они быстро и легко масштабируются и
> могут быть оформлены с помощью CSS. Хотя они созданы для Bootstrap, они будут работать в любом
> проекте.

Компоненты иконок BootstrapVue созданы из svg-исходников
[`bootstrap-icons` v{{ bootstrapIconsVersion }}](https://icons.getbootstrap.com/). Иконки являются
опциональными, что означает, что их необходимо явно импортировать, чтобы использовать. Они не
устанавливаются по умолчанию. Вам не нужны `bootstrap-icons` в качестве зависимости.

- [Bootstrap Icons](https://blog.getbootstrap.com/2019/11/26/bootstrap-icons/) были представлены в
  BootstrapVue в выпуске `v2.2.0`.
- [Bootstrap Icons `v1.0.0-alpha3`](https://blog.getbootstrap.com/2020/03/19/bootstrap-icons-alpha-3/)
  были добавлены в BootstrapVue `v2.8.0`.
- [Bootstrap Icons `v1.0.0-alpha4`](https://blog.getbootstrap.com/2020/05/21/bootstrap-icons-alpha4/)
  были добавлены в BootstrapVue `v2.15.0`.
- [Bootstrap Icons `v1.0.0-alpha5`](https://blog.getbootstrap.com/2020/06/26/bootstrap-icons-alpha5/)
  были добавлены в BootstrapVue `v2.16.0`.
- [Bootstrap Icons `v1.0.0`](https://blog.getbootstrap.com/2020/08/28/bootstrap-icons-stable/) были
  добавлены в BootstrapVue `v2.17.0`.
- [Bootstrap Icons `v1.1.0`](https://blog.getbootstrap.com/2020/10/28/bootstrap-icons-1-1-0/) были
  добавлены в BootstrapVue `v2.19.0`.
- [Bootstrap Icons `v1.2.0`](https://blog.getbootstrap.com/2020/12/11/bootstrap-icons-1-2-0/) были
  добавлены в BootstrapVue `v2.21.0`.
- [Bootstrap Icons `v1.3.0`](https://blog.getbootstrap.com/2021/01/07/bootstrap-icons-1-3-0/) были
  добавлены в BootstrapVue `v2.22.0`.
- [Bootstrap Icons `v1.4.0`](https://blog.getbootstrap.com/2021/02/22/bootstrap-icons-1-4-0/) были
  добавлены в BootstrapVue `v2.22.0`.
- [Bootstrap Icons `v1.4.1`](https://blog.getbootstrap.com/2021/03/29/bootstrap-icons-1-4-1/) были
  добавлены в BootstrapVue `v2.22.0`.
- [Bootstrap Icons `v1.5.0`](https://blog.getbootstrap.com/2021/05/10/bootstrap-icons-1-5-0/) были
  добавлены в BootstrapVue `v2.22.0`.

## Использование

Иконки BootstrapVue не устанавливаются автоматически при использовании BootstrapVue в вашем проекте,
вы должны явно включить их.

Иконки наследуют текущий цвет шрифта и размер шрифта от своего родительского элемента-контейнера.
Чтобы изменить цвет иконки, обратитесь к разделу [Варианты](#variants), а чтобы изменить размер
иконки, обратитесь к разделу [Размер](#sizing).

Все иконки экспортируются с именем в <samp>PascalCase</samp>, с префиксом <samp>BIcon</samp>. Т. е.
иконка `'alert-circle-fill'` экспортируется как `BIconAlertCircleFill`, иконка `'x'` экспортируется
как `BIconX`, а иконка `'x-square-fill'` экспортируется как `BIconXSquareFill`.

### Сборщики модулей

**Импорт всех иконок:**

```js
import { Vue } from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
```

Или

```js
import { Vue } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
```

**Импорт определенных иконок:**

Сделать их доступными по всему миру:

```js
import { Vue } from 'vue'
import { BootstrapVue, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)
```

Или при использовании на определенных страницах или компонентах:

```js
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconArrowUp,
    BIconArrowDown
  },
  props: {
    // ...
  }
  // ...
}
```

Если вы используете _только_ `BootstrapVueIcons` или `IconsPlugin` в своем проекте, вы также можете
просто импортировать необходимые иконки CSS, а не полный Bootstrap и BootstrapVue SCSS/CSS.

```js
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVueIcons)
```

Или при использовании источника иконок SCSS:

```js
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/src/icons.scss'

Vue.use(BootstrapVueIcons)
```

Иконки BootstrapVue SCSS/CSS не зависят ни от каких переменных Bootstrap SASS, миксинов, функций или
классов CSS (кроме служебных классов цвета текста Bootstrap `text-{variant}`, если используется
свойство `variant`). Обратите внимание, что CSS иконок _также_ включен в основные файлы BootstrapVue
SCSS/CSS. Для эффектов анимации требуется пользовательский SCSS/CSS BootstrapVue.

### Браузер

Иконки **не** устанавливаются по умолчанию в сборке браузера UMD, поэтому вы должны явно включить
библиотеку иконок:

```html
<head>
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
  <!-- Load Vue followed by BootstrapVue, and BootstrapVueIcons -->
  <script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>
  <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
  <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script>
</head>
```

Если использовать только иконки:

```html
<head>
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.css" />
  <!-- Load Vue followed by BootstrapVueIcons -->
  <script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>
  <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script>
</head>
```

### Компонент иконки

Вы можете либо использовать отдельные компоненты иконок, либо использовать вспомогательный компонент
иконок `<b-icon>` для размещения иконок в шаблонах проекта.

Все отдельные компоненты иконок имеют префикс имени `<b-icon-{name}>`, где `{name}` — одно из имен
иконок, перечисленных в разделе [Иконки](#icons).

**Использование отдельных компонентов иконок:**

```html
<template>
  <div class="h2 mb-0">
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
  </div>
</template>

<!-- icons-individual-usage.vue -->
```

**Использование вспомогательного компонента `<b-icon>`:**

```html
<template>
  <div class="h2 mb-0">
    <b-icon icon="arrow-up"></b-icon>
    <b-icon icon="exclamation-triangle"></b-icon>
  </div>
</template>

<!-- icons-helper-usage.vue -->
```

**Примечание:** при использовании `<b-icon>`, вы **должны** также импортировать необходимые
отдельные компоненты иконок, если вы не используете плагин `IconsPlugin` или `BootstrapVueIcons`.

## Варианты

По умолчанию иконки наследуют текущий цвет текста своего родительского элемента. Все компоненты
иконок предоставляют свойство `variant` для применения одного из вариантов контекстного текста
Bootstrap:

```html
<template>
  <div class="h2 mb-0">
    <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="info"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
  </div>
</template>

<!-- icons-color-variants.vue -->
```

Вы также можете использовать пользовательский CSS для установки цвета иконки либо с помощью прямого
атрибута `style`, либо с помощью пользовательских классов:

```html
<template>
  <div class="h2 mb-0">
    <b-icon icon="battery-full" style="color: #7952b3;"></b-icon>
  </div>
</template>

<!-- icons-color-css.vue -->
```

Свойство `variant` помещает [класс цвета утилиты](/docs/reference/color-variants) `text-{variant}` в
корневой элемент иконки.

## Размеры

Иконки имеют ширину и высоту по умолчанию `1em`, что означает, что они будут масштабироваться с
размером текущего размера шрифта:

```html
<template>
  <div>
    <p class="h1 mb-2">Иконка <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h2 mb-2">Иконка <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h3 mb-2">Иконка <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h4 mb-2">Иконка <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h5 mb-2">Иконка <b-icon icon="exclamation-circle-fill"></b-icon></p>
  </div>
</template>

<!-- icons-size-inherit.vue -->
```

Вы также можете использовать пользовательский CSS для установки размера иконки либо с помощью
прямого атрибута `style`, либо с помощью пользовательских классов:

```html
<template>
  <div>
    <b-icon icon="exclamation-circle" style="width: 120px; height: 120px;"></b-icon>
  </div>
</template>

<!-- icons-size-css.vue -->
```

Вы также можете использовать свойство `font-scale`, чтобы масштабировать текущий размер шрифта
иконки на указанный коэффициент:

```html
<template>
  <div>
    <b-icon icon="camera" font-scale="0.5"></b-icon>
    <b-icon icon="camera" font-scale="1"></b-icon>
    <b-icon icon="camera" font-scale="2"></b-icon>
    <b-icon icon="camera" font-scale="3"></b-icon>
    <b-icon icon="camera" font-scale="4"></b-icon>
    <b-icon icon="camera" font-scale="5"></b-icon>
    <b-icon icon="camera" font-scale="7.5"></b-icon>
  </div>
</template>

<!-- icons-size-font-size-prop.vue -->
```

Также смотрите раздел [преобразования масштабирования](#scale) ниже, чтобы узнать о дополнительных
параметрах изменения размера.

## Стилизация

Используя рамку, фон и отступы Bootstrap [вспомогательные классы](/docs/reference/utility-classes),
вы можете создавать различные эффекты стиля:

```html
<template>
  <div style="font-size: 4rem;">
    <b-icon icon="bell-fill" class="border rounded p-2"></b-icon>
    <b-icon icon="bell-fill" class="border border-info rounded p-2" variant="info"></b-icon>
    <b-icon icon="bell-fill" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
    <b-icon icon="unlock-fill" class="rounded bg-primary p-1" variant="light"></b-icon>
  </div>
</template>

<!-- icons-styling.vue -->
```

## SVG-преобразования

Иконки BootstrapVue предоставляют несколько свойств для применения базовых преобразований SVG к
`<svg>`. Все преобразования могут быть объединены для дополнительного эффекта. Обратите внимание,
что преобразования применяются к `<svg>` _контенту_, а не к ограничивающей рамке `<svg>`.

### Перелистывание

Отразите иконку по горизонтали и/или по вертикали с помощью свойств `flip-h` и `flip-v`.

```html
<template>
  <div style="font-size: 4rem;">
    <b-icon icon="bar-chart-fill"></b-icon>
    <b-icon icon="bar-chart-fill" flip-h></b-icon>
    <b-icon icon="bar-chart-fill" flip-v></b-icon>
    <b-icon icon="bar-chart-fill" flip-h flip-v></b-icon>
  </div>
</template>

<!-- icons-transform-flip.vue -->
```

### Повороты

Поверните иконку на указанное количество градусов с помощью свойства `rotate`. Положительные
значения будут вращать иконку по часовой стрелке, а отрицательные значения будут вращать иконку
против часовой стрелки.

```html
<template>
  <div style="font-size: 4rem;">
    <b-icon icon="camera"></b-icon>
    <b-icon icon="camera" rotate="45"></b-icon>
    <b-icon icon="camera" rotate="90"></b-icon>
    <b-icon icon="camera" rotate="180"></b-icon>
    <b-icon icon="camera" rotate="270"></b-icon>
    <b-icon icon="camera" rotate="-45"></b-icon>
  </div>
</template>

<!-- icons-transform-rotate.vue -->
```

Обратите внимание, что любое [flipping](#flipping) выполняется до применения поворота.

### Масштабирование

Масштабируйте иконку любым положительным фактором с помощью свойства `scale`. Обратите внимание, что
это изменяет визуальный размер иконки, но не физический размер шрифта. Чтобы проиллюстрировать это,
мы добавили фоновый цвет для иконок.

```html
<template>
  <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem;">
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" scale="0.5" class="bg-info"></b-icon>
    </b-col>
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
    </b-col>
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" scale="1.5" class="bg-info"></b-icon>
    </b-col>
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" scale="2" class="bg-info"></b-icon>
    </b-col>
  </b-row>
</template>

<!-- icons-transform-scale.vue -->
```

Если вам нужно, чтобы фон и/или граница масштабировались вместе с иконкой, используйте вместо этого
свойство `font-scale`.

### Смещение

Сдвиг влияет на расположение иконки без изменения или перемещения контейнера svg. Для перемещения
иконок по горизонтальной и/или вертикальной оси используйте реквизиты `shift-h` и `shift-v` с любым
произвольным числовым значением, включая десятичные дроби.

Для `shift-v`, положительные значения будут перемещать иконку вверх, а отрицательные значения будут
перемещать иконку вниз. Для `shift-h`, положительные значения будут перемещать иконку вправо, а
отрицательные значения - влево. Оба реквизита принимают значения в единицах 1/16em (относительно
текущего размера шрифта иконки).

Для ясности в примере мы добавили цвет фона на иконку, чтобы вы могли видеть эффект.

```html
<template>
  <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem;">
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="16" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="-8" shift-v="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon
        icon="exclamation-circle"
        scale="0.5"
        rotate="45"
        shift-h="-4"
        shift-v="4"
        class="bg-info"
      ></b-icon>
    </b-col>
  </b-row>
</template>

<!-- icons-transform-shift.vue -->
```

Сдвиг применяется после любых преобразований вращения. Как и при масштабировании, фон и границы не
затрагиваются. Если вам нужно сместить границу/фон с помощью иконки, используйте поле Bootstrap
[промежутки между служебными классами](/docs/reference/utility-classes).

## Анимированные иконки

<span class="badge badge-info small">v2.7.0+</span>

BootstrapVue включает следующие встроенные анимации для иконок:

- `'cylon'` перемещает иконку влево-вправо
- `'cylon-vertical'` перемещает иконку вверх-вниз
- `'fade'` иконка появляется и исчезает <span class="badge badge-info small">2.12.0+</span>
- `'spin'` плавно вращает иконку по часовой стрелке
- `'spin-reverse'` плавно вращает иконку против часовой стрелки
- `'spin-pulse'` вращает иконку по часовой стрелке, но в стиле импульсного шага
- `'spin-reverse-pulse'` вращает иконку против часовой стрелки, но в стиле пульсирующего шага
- `'throb'` увеличивает и уменьшает масштаб иконки
  <span class="badge badge-info small">2.12.0+</span>

Чтобы использовать анимацию, установите свойство `animation` на одно из названий анимации выше.

```html
<template>
  <b-row class="text-md-center">
    <b-col md="6" class="mb-3">
      <p>Cylon animation:</p>
      <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Vertical cylon animation:</p>
      <b-icon icon="three-dots-vertical" animation="cylon-vertical" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Fade animation:</p>
      <b-icon icon="star-fill" animation="fade" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Spinning animation:</p>
      <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Reverse spinning animation:</p>
      <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Pulsing spin animation:</p>
      <b-icon icon="arrow-clockwise" animation="spin-pulse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Reversed pulsing spin animation:</p>
      <b-icon icon="arrow-counterclockwise" animation="spin-reverse-pulse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Throb animation:</p>
      <b-icon icon="circle-fill" animation="throb" font-scale="4"></b-icon>
    </b-col>
  </b-row>
</template>

<!-- b-icon-aminations.vue -->
```

Поскольку анимации основаны на CSS, они применяются _после_ любых преобразований SVG:

```html
<template>
  <div class="p-4">
    <b-icon icon="clock" animation="spin" font-scale="4" shift-v="8"></b-icon>
  </div>
</template>

<!-- b-icon-aminations-transforms.vue -->
```

Эффекты анимации иконок, определенные BootstrapVue, требуют пользовательского CSS BootstrapVue.
Свойство `animation` транслируется в имя класса `b-icon-animation-{animationName}`.

Нужна анимация в другом стиле? Просто создайте пользовательский класс, определяющий анимацию, и
примените этот класс к компоненту иконки, или создайте новый класс анимации в форме
`b-icon-animation-{animationName}` и передайте имя пользовательской анимации в свойство `animation`.

**Примечания к анимации:**

- С анимацией `cylon` движение влево-вправо (или движение вверх-вниз) расширяет ограничивающую рамку
  иконки на `+/- 25%`, поэтому вам может потребоваться настроить отступы или поля, чтобы
  компенсировать ваш вариант использования.
- Длительность анимации можно [настроить с помощью переменных SASS SCSS](/docs/reference/theming)
- Определяемые BootstrapVue анимационные эффекты этого компонента зависят от медиа-запроса
  `prefers-reduced-motion`. Дополнительную информацию см. в
  [разделе с ограниченным движением нашей документации по специальным возможностям](/docs/reference/accessibility#reduced-motion).
- Анимация `cylon` получила свое название от «глаза» сайлонов из _оригинального_
  [тв телесериала Battlestar Galactica 1978 года](https://www.youtube.com/watch?v=5a5bEIf0UaU).

## Укладка иконок

<span class="badge badge-info small">v2.3.0+</span>

Объедините иконки вместе с помощью компонента `<b-iconstack>` и свойства `stacked` на отдельных
иконках (`<b-icon>` или `<b-icon-{icon-name}>`) для создания комплексных иконки:

```html
<template>
  <div>
    <b-iconstack font-scale="5">
      <b-icon stacked icon="camera" variant="info" scale="0.75"></b-icon>
      <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5" rotate="90">
      <b-icon stacked icon="chevron-right" shift-h="-4" variant="danger"></b-icon>
      <b-icon stacked icon="chevron-right" shift-h="0" variant="success"></b-icon>
      <b-icon stacked icon="chevron-right" shift-h="4" variant="primary"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5">
      <b-icon stacked icon="circle-fill" variant="info"></b-icon>
      <b-icon stacked icon="bell-fill" scale="0.5" variant="white"></b-icon>
      <b-icon stacked icon="circle" variant="danger"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5" variant="white">
      <b-icon stacked icon="square-fill" variant="dark"></b-icon>
      <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="3" shift-h="-3"></b-icon>
      <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="3" shift-h="3" rotate="90"></b-icon>
      <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="-3" shift-h="3" rotate="180"></b-icon>
      <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="-3" shift-h="-3" rotate="270"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5">
      <b-icon stacked icon="square"></b-icon>
      <b-icon stacked icon="check"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5">
      <b-icon stacked icon="square"></b-icon>
      <b-icon stacked icon="dot" shift-h="-3" shift-v="4"></b-icon>
      <b-icon stacked icon="dot" shift-h="-3"></b-icon>
      <b-icon stacked icon="dot" shift-h="-3" shift-v="-4"></b-icon>
      <b-icon stacked icon="dot" shift-h="3" shift-v="4"></b-icon>
      <b-icon stacked icon="dot" shift-h="3"></b-icon>
      <b-icon stacked icon="dot" shift-h="3" shift-v="-4"></b-icon>
    </b-iconstack>
  </div>
</template>

<!-- b-iconsstack.vue -->
```

`<b-iconstack>` поддерживает те же свойства `variant`, `font-size`, `animation` и трансформации, что
и для отдельных иконок.

Примечания к иконкам с накоплением:

- Не забудьте установить свойство `stacked` для внутренних компонентов иконок!
- Опция `font-scale` не может использоваться на внутренних компонентах иконок
- Атрибуты `width` и `height` не могут быть применены к внутренним компонентам иконок.
- Сложенные иконки **не могут** быть сложены внутри другого `<b-iconstack>`

### Анимация сложенных иконок

Компонент `<b-iconstack>` поддерживает те же анимации, что и отдельные иконки:

```html
<template>
  <div>
    <b-iconstack font-scale="5" animation="spin">
      <b-icon stacked icon="camera" variant="info" scale="0.75" shift-v="-0.25"></b-icon>
      <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
    </b-iconstack>
  </div>
</template>

<!-- b-iconstack-animation.vue -->
```

Отдельные иконки в стеке иконок также можно анимировать (кроме IE 11):

```html
<template>
  <div>
    <b-iconstack font-scale="5" animation="cylon">
      <b-icon
        stacked
        icon="camera"
        animation="throb"
        variant="info"
        scale="0.75"
      ></b-icon>
      <b-icon
        stacked
        icon="slash-circle"
        animation="spin-reverse"
        variant="danger"
      ></b-icon>
    </b-iconstack>
  </div>
</template>

<!-- b-iconstack-animation-child-icons.vue -->
```

**Примечания:**

- IE 11 не поддерживает анимацию дочерних элементов в SVG, поэтому можно анимировать только
  компонент `<b-iconstack>`. Анимация дочерних иконок не будет видна пользователям IE 11.
- Определяемые BootstrapVue анимационные эффекты этого компонента зависят от медиа-запроса
  `prefers-reduced-motion`. Дополнительную информацию смотрите в
  [разделе с уменьшенным движением в нашей документации по специальным возможностям](/docs/reference/accessibility).

## Использование в компонентах

Легко размещайте иконки в качестве контента в других компонентах.

Обратите внимание, что иконки, размещенные в компонентах BootstrapVue, используют пользовательский
CSS BootstrapVue для дополнительной компенсации стиля из-за текущих проблем с реализацией
выравнивания иконок Bootstrap `<svg>`, а также для дополнительного эстетического масштабирования
(иконки, размещенные в компонентах, перечисленных ниже, будут масштабироваться на 125%).

### Кнопки

```html
<template>
  <div>
    <b-button size="sm" class="mb-2">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Настройки
    </b-button>
    <br>
    <b-button variant="primary" class="mb-2">
      Оплатить сейчас <b-icon icon="credit-card" aria-hidden="true"></b-icon>
    </b-button>
    <br>
    <b-button variant="outline-info" class="mb-2">
      <b-icon icon="power" aria-hidden="true"></b-icon> Выйти
    </b-button>
    <br>
    <b-button size="lg" variant="primary" class="mb-2">
      <b-icon icon="question-circle-fill" aria-label="Помощь"></b-icon>
    </b-button>
  </div>
</template>

<!-- icons-buttons.vue -->
```

### Группы кнопок и панели инструментов

#### Группы кнопок

```html
<template>
  <div>
    <b-button-group>
      <b-button variant="outline-primary">
        <b-icon icon="tools"></b-icon> Настройки
      </b-button>
      <b-button variant="outline-primary">
        <b-icon icon="person-fill"></b-icon> Аккаунт
      </b-button>
      <b-button variant="outline-primary">
        <b-icon icon="inbox-fill"></b-icon> Сообщения
      </b-button>
    </b-button-group>
  </div>
</template>

<!-- icons-button-group.vue -->
```

#### Кнопка панели инструментов

```html
<template>
  <div>
    <b-button-toolbar>
      <b-button-group class="mr-1">
        <b-button title="Сохранить файл">
          <b-icon icon="cloud-upload" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Загрузить файл">
          <b-icon icon="cloud-download" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Новый документ">
          <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group class="mr-1">
        <b-button title="Выравнивание слева">
          <b-icon icon="text-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Выравнивание по центру">
          <b-icon icon="text-center" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Выравнивание справа">
          <b-icon icon="text-right" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group>
        <b-button title="Жирный">
          <b-icon icon="type-bold" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Курсив">
          <b-icon icon="type-italic" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Подчеркивание">
          <b-icon icon="type-underline" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Зачеркнутый">
          <b-icon icon="type-strikethrough" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>

<!-- icons-button-toolbar.vue -->
```

### Группа ввода

```html
<template>
  <div>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="search" placeholder="Условия поиска"></b-form-input>
    </b-input-group>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="tag-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-tags
        separator=" ,;"
        tag-variant="primary"
        placeholder="Введите новые теги, разделенные пробелом, запятой или точкой с запятой"
        no-add-on-enter
      ></b-form-tags>
    </b-input-group>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="User ID"></b-form-input>
    </b-input-group>
    <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" placeholder="me@example.com"></b-form-input>
    </b-input-group>
  </div>
</template>

<!-- icons-input-groups.vue -->
```

### Группа списка

```html
<template>
  <b-list-group>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
      Cras justo odio
    </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="exclamation-triangle-fill" scale="2" variant="warning"></b-icon>
      Dapibus ac facilisis in
    </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="info-circle-fill" scale="2" variant="info"></b-icon>
      Morbi leo risus
    </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="check-square" scale="2" variant="success"></b-icon>
      Incididunt veniam velit
    </b-list-group-item>
  </b-list-group>
</template>

<!-- icons-list-groups.vue -->
```

### Выпадающие списки

```html
<template>
  <div>
    <b-dropdown variant="primary">
      <template #button-content>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Настройки
      </template>
      <b-dropdown-item-button>
         <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
         Заблокировано <span class="sr-only">(Нажмите, чтобы разблокировать)</span>
      </b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-group header="Выберите опцию" class="small">
        <b-dropdown-item-button>
           <b-icon icon="blank" aria-hidden="true"></b-icon>
           Опция А <span class="sr-only">(Не выбрано)</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
           <b-icon icon="check" aria-hidden="true"></b-icon>
           Опция Б <span class="sr-only">(Selected)</span>
        </b-dropdown-item-button>
         <b-dropdown-item-button>
           <b-icon icon="blank" aria-hidden="true"></b-icon>
           Опция В <span class="sr-only">(Не выбрано)</span>
        </b-dropdown-item-button>
      </b-dropdown-group>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Некоторое действие</b-dropdown-item-button>
      <b-dropdown-item-button>Какое-то другое действие</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button variant="danger">
        <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        Удалить
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<!-- icons-dropdowns.vue -->
```

## Работа с SVG

С SVG замечательно работать, но у них есть некоторые известные особенности, которые нужно обойти.

- **Обработка фокуса не работает в Internet Explorer и Edge.** Мы добавили атрибут
  `focusable="false"` к элементу `<svg>`. Вы можете переопределить это, установив атрибут
  `focusable="false"` для компонента иконки.
- **Браузеры непоследовательно объявляют SVG как теги `<img>` с голосовой поддержкой.** Поэтому мы
  добавили атрибуты `role="img"` и `alt="icon"`. При необходимости вы можете переопределить эти
  атрибуты.
- **Safari пропускает `aria-label` при использовании на нефокусируемых SVG.** Таким образом,
  используйте атрибут `aria-hidden="true"` при использовании иконки и используйте CSS, чтобы
  визуально скрыть эквивалентную метку.

## Иконки

Используйте проводник ниже для поиска и просмотра доступных иконок.

<!-- Component rendered by `docs/pages/docs/icons.index.js` -->
<!-- We use a `<div is="...">` to prevent marked loader from mangling the unknown tag -->
<div is="IconsTable"></div>
