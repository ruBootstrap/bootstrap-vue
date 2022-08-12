# Всплывающая Подсказка

> Добавляйте настраиваемые всплывающие подсказки BootstrapVue к любому элементу. Всплывающие
> подсказки могут быть вызваны наведением курсора, фокусировкой или кликом по элементу.

## Обзор

Используйте директиву `v-b-tooltip` для любого элемента или компонента, где вы хотите, чтобы
всплывающая подсказка появлялась.

```html
<div class="text-center my-3">
  <b-button v-b-tooltip.hover title="Содержание всплывающей подсказки">Наведите меня</b-button>
</div>

<!-- b-tooltip.vue -->
```

Что нужно знать при использовании директивы всплывающей подсказки:

- Всплывающие подсказки полагаются на стороннюю библиотеку [Popper.js](https://popper.js.org/) для
  позиционирования.
- Всплывающие подсказки требуют настраиваемого SCSS/CSS BootstrapVue для правильной работы и для
  вариантов.
- Если заголовок не указан (или это пустая строка), всплывающая подсказка не будет отображаться.
- Укажите контейнер: 'body' (по умолчанию), чтобы избежать проблем с рендерингом в более сложных
  компонентах (таких как группы ввода, группы кнопок и т. д.).
- Не будут работать всплывающие подсказки для скрытых элементов.
- Всплывающие подсказки для `disabled` элементов должны запускаться для элемента-оболочки.
- При запуске из гиперссылок, которые охватывают несколько строк, всплывающие подсказки будут
  центрированы. Используйте `white-space: nowrap`; на ваших `<a>`, `<b-link>` и `<router-link>`,
  чтобы избежать такого поведения.
- Всплывающие подсказки должны быть скрыты до того, как соответствующие им элементы будут удалены из
  DOM.

## Позиционирование

Для позиционирования доступны двенадцать вариантов выравнивания: `top`, `topleft`, `topright`,
`right`, `righttop`, `rightbottom`, `bottom`, `bottomleft`, `bottomright`, `left`, `lefttop` и
`leftbottom`. Положение по умолчанию — `top`. Позиционирование относительно триггерного элемента.

<div class="bd-example bd-example-tooltip-static">
  <div class="tooltip b-tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">
    <div class="arrow" style="left: calc(50% - 6px)"></div>
    <div class="tooltip-inner">Подсказка вверху</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">
    <div class="arrow" style="right: 0px"></div>
    <div class="tooltip-inner">Подсказка вверху слева</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">
    <div class="arrow" style="left: 0px"></div>
    <div class="tooltip-inner">Подсказка вверху справа</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">
    <div class="arrow" style="top: 5px"></div>
    <div class="tooltip-inner">Подсказка справа</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">
    <div class="arrow" style="bottom: 0px"></div>
    <div class="tooltip-inner">Подсказка справа вверху</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">
    <div class="arrow" style="top: 0px"></div>
    <div class="tooltip-inner">Подсказка справа внизу</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">
    <div class="arrow" style="left: calc(50% - 6px)"></div>
    <div class="tooltip-inner">Подсказка внизу</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">
    <div class="arrow" style="right: 0px"></div>
    <div class="tooltip-inner">Подсказка внизу слева</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">
    <div class="arrow" style="left: 0px"></div>
    <div class="tooltip-inner">Подсказка внизу справа</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">
    <div class="arrow" style="top: 5px"></div>
    <div class="tooltip-inner">Подсказка слева</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">
    <div class="arrow" style="bottom: 0px"></div>
    <div class="tooltip-inner">Подсказка слева вверху</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">
    <div class="arrow" style="top: 0px"></div>
    <div class="tooltip-inner">Подсказка слева внизу</div>
  </div>
</div>

**Live example**

```html
<div>
  <b-container fluid>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.top="'Подсказка!'" variant="primary">Вверху</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.right="'Подсказка!'" variant="primary">Справа</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.left="'Подсказка!'" variant="primary">Слева</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.bottom="'Подсказка!'" variant="primary">Внизу</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.topright="'Подсказка!'" variant="primary">Вверху справа</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.topleft="'Подсказка!'" variant="primary">Вверху слева</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.bottomright="'Подсказка!'" variant="primary">Внизу справа</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.bottomleft="'Подсказка!'" variant="primary">Внизу слева</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.lefttop="'Подсказка!'" variant="primary">Слева вверху</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.leftbottom="'Подсказка!'" variant="primary">Слева внизу</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.righttop="'Подсказка!'" variant="primary">Справа вверху</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.rightbottom="'Подсказка!'" variant="primary">Справа внизу</b-button>
      </b-col>
    </b-row>
  </b-container>
</div>

<!-- b-tooltip-positioning.vue -->
```

## Триггеры

Всплывающие подсказки могут запускаться (открываться/закрываться) с помощью любой комбинации
`click`, `hover` и `focus`. Триггер по умолчанию — `hover focus`. Или можно указать триггер ручного
управления, где всплывающее окно может быть открыто или закрыто только
[программно](#hiding-and-showing-tooltips-via-root-events).

Если всплывающая подсказка имеет более одного триггера, все триггеры должны быть очищены, прежде чем
всплывающая подсказка закроется. т.е. если всплывающая подсказка имеет триггер `focus click`, и она
была открыта `focus`, а затем пользователь щелкает элемент триггера, он должен кликнуть его еще раз
**и** переместить фокус, чтобы закрыть всплывающую подсказку.

```html
<div>
  <b-container>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip="'Подсказка!'" variant="outline-success">Наведение + Фокус</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover="'Подсказка!'" variant="outline-success">Наведение</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.click="'Подсказка!'" variant="outline-success">Клик</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.focus="'Подсказка!'" variant="outline-success">Фокус</b-button>
      </b-col>
    </b-row>
  </b-container>
</div>

<!-- b-tooltip-triggers.vue -->
```

### Заставить всплывающие подсказки работать с клавиатурой и пользователями вспомогательных технологий

Вы должны добавлять всплывающие подсказки только к элементам HTML, которые традиционно являются
интерактивными и ориентированными на клавиатуру (такими как ссылки, кнопки или элементы управления
формы). Хотя произвольные элементы HTML (такие как `<span>`) можно сделать фокусируемыми, добавив
атрибут `tabindex="0"`, это добавит потенциально раздражающие и запутанные позиции табуляции на
неинтерактивных элементах для пользователей клавиатуры. Кроме того, большинство вспомогательных
технологий в настоящее время не объявляют всплывающую подсказку в этой ситуации.

Кроме того, не полагайтесь исключительно на `hover` в качестве триггера для всплывающей подсказки,
так как это сделает ваши всплывающие подсказки _невозможными для срабатывания для пользователей,
использующих только клавиатуру_.

### Отключенные элементы

Элементы с атрибутом `disabled` не являются интерактивными, то есть пользователи не могут
сфокусироваться, навести курсор или щелкнуть их, чтобы вызвать всплывающую подсказку (или
всплывающее окно). В качестве обходного пути вы захотите вызвать всплывающую подсказку из оболочки
`<div>` или `<span>`, в идеале сфокусируемой на клавиатуре с помощью `tabindex="0"`, и
переопределить `pointer-events` на отключенный элемент.

```html
<div>
  <span class="d-inline-block" tabindex="0" v-b-tooltip.top title="Отключенная подсказка">
    <b-button variant="primary" style="pointer-events: none;" disabled>Кнопка отключена</b-button>
  </span>
</div>

<!-- disabled-trigger-element.vue -->
```

### Предостережения со срабатыванием `focus` на элементах `<button>`

Для правильного кросс-браузерного и кросс-платформенного поведения при использовании только триггера
`focus` вы должны использовать элемент, который отображает тег `<a>`, а не тег `<button>`, и вы
также должны включить атрибут `tabindex="0"`.

Следующее сгенерирует `<a>`, который выглядит как кнопка:

```html
<b-button
  href="#"
  tabindex="0"
  v-b-tooltip.focus
  title="Tooltip title"
>
  Кнопка ссылки с директивой всплывающей подсказки
</b-button>
```

### Закрыть при следующем нажатии

Используйте как `click`, так и `blur`, если вы хотите, чтобы всплывающая подсказка открывалась
только при клике элемента, но закрывалась, когда кликали что-либо еще в документе или получали
фокус.

Обратите внимание, что ваш элемент **должен** находиться в последовательности вкладок документа,
чтобы это работало. Если ваш элемент не является вкладкой, добавьте атрибут `tabindex="0"` к
элементу.

## Содержание заголовка

Существует несколько вариантов указания заголовка всплывающей подсказки.

По умолчанию всплывающая подсказка будет использовать атрибут `title` элемента в качестве
содержимого всплывающей подсказки. Заголовок также можно передать как объект `v-b-tooltip` в виде

<!-- eslint-disable no-unused-vars -->

```js
const options = {
  title: 'This is the title'
}
```

Если содержимое заголовка имеет базовую HTML-разметку, вам также потребуется установить для свойства
`html` значение `true` или использовать модификатор директивы `html`

<!-- eslint-disable no-unused-vars -->

```js
// Object format with HTML
const options = {
  title: 'This is the <strong>title</strong>',
  html: true
}
```

Заголовок также может быть ссылкой на функцию, которая вызывается каждый раз при открытии
всплывающей подсказки. Чтобы сделать заголовок, возвращаемый функцией, реактивным при открытии,
установите для заголовка ссылку на _новую_ функцию при каждом изменении содержимого.

```html
<template>
  <b-container>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover :title="'Tip from title attribute ' + date" variant="success">Title</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover="'String Tip'" variant="success">String</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.html="tipData" variant="success">Data</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.html="tipMethod" variant="success">Method</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        tipData: { title: 'Tooltip <em>Message</em>' },
        date: new Date(),
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.date = new Date()
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      tipMethod() {
        // Note this is called each time the tooltip is first opened.
        return '<strong>' + new Date() + '</strong>'
      }
    }
  }
</script>

<!-- b-tooltip-content.vue -->
```

## Варианты и пользовательский класс

Всплывающие подсказки BootstrapVue поддерживают контекстные цветовые варианты с помощью нашего
пользовательского CSS либо с помощью модификаторов директив, либо параметров конфигурации:

```html
<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col>
        <b-button v-b-tooltip.hover.v-danger title="Danger variant">Danger Modifier</b-button>
      </b-col>
      <b-col>
        <b-button v-b-tooltip.hover="{ variant: 'info' }" title="Info variant">Info Config</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<!-- b-tooltip-variants.vue -->
```

Варианты темы Bootstrap по умолчанию: `danger`, `warning`, `success`, `primary`, `secondary`,
`info`, `light` и `dark`. Вы можете изменить или добавить дополнительные варианты через Bootstrap
[переменные SCSS](/docs/reference/theming)

Пользовательский класс можно применить к внешней оболочке всплывающей подсказки `<div>` с помощью
свойства опции `customClass`:

```html
<b-button v-b-tooltip.hover="{ customClass: 'my-tooltip-class' }" title="Tooltip">Кнопка</b-button>
```

## Синтаксис и использование директив

```html
<b-button v-b-tooltip:[container].[mod1].[mod2].[...].[modN]="<value>">Кнопка</b-button>
```

Где `[container]` может быть (необязательно):

- Идентификатор элемента (минус #) для размещения разметки всплывающей подсказки
- Если не предусмотрено, всплывающие подсказки добавляются к `body`. Если элемент триггера находится
  внутри модального окна, всплывающая подсказка будет добавлена к контейнеру модального окна

Где `[modX]` может быть (все необязательно):

- Позиционирование: `top`, `bottom`, `left`, `right`, `auto`, `topleft`, `topright`, `bottomleft`,
  `bottomright`, `lefttop`, `leftbottom`, `righttop` или `rightbottom` (выигрывает последний
  найденный, по умолчанию `top`).
- Триггер события: `click`, `hover`, `focus`, `blur` (если ничего не указано, по умолчанию
  используются `focus` и `hover`. `blur` является обработчиком только закрытия, и если он указан сам
  по себе, то будет преобразован в `focus`). Используйте `manual`, если вы хотите управлять
  видимостью только вручную.
- `nofade` для отключения анимации.
- `html`, чтобы включить рендеринг необработанного HTML. По умолчанию HTML экранируется и
  преобразуется в текст.
- Значение задержки в формате `d###` (где `###` в мс, по умолчанию `50`), применяется как к `hide`,
  так и к `show`.
- Значение задержки показа в формате `ds###` (где `###` в мс, по умолчанию `50`), применяется только
  к триггеру `show`.
- Значение задержки скрытия в формате `dh###` (где `###` в мс, по умолчанию `50`), применяется
  только к триггеру `hide`.
- Значение смещения в пикселях в формате `o###` (где `###` это количество пикселей, по умолчанию
  `0`. Допускаются отрицательные значения).
- Настройка границы `window` или `viewport`. Элемент для ограничения визуального размещения
  всплывающей подсказки. Если не указано, граница по умолчанию соответствует родительскому элементу
  прокрутки триггерного элемента (в большинстве случаев этого будет достаточно).
- Контекстный вариант в форме `v-XXX` (где `XXX` название цветового варианта).
- `noninteractive`, чтобы сделать всплывающую подсказку не интерактивной для пользователя.

Где `<value>` может быть (необязательно):

- Строка, содержащая заголовок всплывающей подсказки
- Ссылка на функцию для создания заголовка всплывающей подсказки (получает один аргумент, который
  является ссылкой на элемент DOM, вызывающий всплывающую подсказку)
- Объект, содержащий более сложную конфигурацию всплывающей подсказки. Смотрите ниже допустимые
  свойства объекта:

**Свойства объекта конфигурации параметров:**

| Свойство            | Тип                                   | По умолчанию     | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animation`         | Boolean                               | `true`           | Применить CSS-переход затухания к всплывающей подсказке                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `container`         | String ID или HTMLElement или `false` | `false`          | Добавляет всплывающую подсказку к определенному элементу. Пример: `container: '#body'`. Этот параметр особенно полезен тем, что позволяет расположить всплывающую подсказку в потоке документа рядом с инициирующим элементом, что предотвратит всплывающую подсказку от инициирующего элемента во время изменения размера окна. Если установлено значение `false`, всплывающая подсказка будет добавлена к `body`, или, если элемент триггера находится внутри модального окна, он будет добавлен к контейнеру модального окна |
| `delay`             | Number или Object                     | `50`             | Задержка показа и скрытия всплывающей подсказки (мс). Если указано число, задержка применяется как для скрытия, так и для показа. Структура объекта: `delay: { "show": 500, "hide": 100 }`                                                                                                                                                                                                                                                                                                                                      |
| `html`              | Boolean                               | `false`          | Разрешить HTML в подсказке. Если задано значение true, теги HTML в заголовке всплывающей подсказки будут отображаться во всплывающей подсказке. Если false, заголовок будет вставлен как обычный текст. Используйте текст, если вы беспокоитесь о XSS-атаках                                                                                                                                                                                                                                                                    |
| `placement`         | String или Function                   | `'top'`          | Как расположить всплывающую подсказку — `auto`, `top`, `bottom`, `left`, `right`, `topleft`, `topright`, `bottomleft`, `bottomright`, `lefttop`, `leftbottom`, `righttop` или `rightbottom`. Когда указано `auto`, он будет динамически переориентировать всплывающую подсказку                                                                                                                                                                                                                                                 |
| `title`             | String или Element или Function       | `''`             | Значение заголовка по умолчанию, если атрибут заголовка отсутствует. Если задана функция, она должна возвращать строку                                                                                                                                                                                                                                                                                                                                                                                                          |
| `trigger`           | String                                | `'hover focus'`  | Как срабатывает всплывающая подсказка: `click`, `hover`, `focus`. Вы можете передать несколько триггеров; разделите их пробелом                                                                                                                                                                                                                                                                                                                                                                                                 |
| `offset`            | Number или String                     | `0`              | Смещение всплывающей подсказки относительно ее цели. Для получения дополнительной информации обратитесь к документации по смещению Popper.js                                                                                                                                                                                                                                                                                                                                                                                    |
| `fallbackPlacement` | String или Array                      | `'flip'`         | Позволяет указать, какую позицию Поппер будет использовать при откате. Может быть `flip`, `clockwise`, `counterclockwise` или массивом мест размещения. Для получения дополнительной информации обратитесь к документации по поведению Popper.js                                                                                                                                                                                                                                                                                |
| `boundary`          | String ID или HTMLElement             | `'scrollParent'` | Контейнер, в котором всплывающая подсказка будет визуально ограничена. В большинстве случаев должно быть достаточно значения по умолчанию, но вам может потребоваться изменить его, если ваш целевой элемент находится в небольшом контейнере с прокруткой переполнения. Поддерживаемые значения: `'scrollParent'` (по умолчанию), `'viewport'`, `'window'`, или ссылка на элемент HTML                                                                                                                                         |
| `boundaryPadding`   | Number                                | `5`              | Количество пикселей, используемое для определения минимального расстояния между границами и всплывающей подсказкой. Это гарантирует, что всплывающая подсказка всегда имеет небольшой отступ между краями своего контейнера                                                                                                                                                                                                                                                                                                     |
| `interactive`       | Boolean                               | `true`           | Должна ли всплывающая подсказка быть интерактивной с пользователем                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `variant`           | String                                | `null`           | Контекстный вариант цвета всплывающей подсказки                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `customClass`       | String                                | `null`           | Пользовательское имя класса для применения к элементу внешней оболочки всплывающей подсказки                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `id`                | String                                | `null`           | Идентификатор для использования в корневом элементе всплывающей подсказки. Если ничего не указано, оно будет сгенерировано автоматически. Если вы предоставляете идентификатор, он _должен_ быть уникальным на отображаемой странице                                                                                                                                                                                                                                                                                            |
| `disabled`          | Boolean                               | `false`          | Установите значение `true`, чтобы отключить всплывающую подсказку                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Использование

**Самое простое использование:**

```
v-b-tooltip="'Это Подсказка!'"
```

или используйте атрибут `title` элемента для содержимого всплывающей подсказки:

```
v-b-tooltip title="Это заголовок Подсказки"
```

**Примеры размещения:**

```
v-b-tooltip.bottom
v-b-tooltip.right
```

**Примеры вариантов:**

```
v-b-tooltip.v-primary => `primary` variant
v-b-tooltip.v-danger => `danger` variant
```

**Примеры триггеров:**

```
v-b-tooltip.hover => Hover only
v-b-tooltip.click => Click only
v-b-tooltip.hover.focus => Both hover and focus
```

**Комбо:**

```
v-b-tooltip.hover.bottom => Show on hover and place at bottom
v-b-tooltip.bottom.hover => Same as above
v-b-tooltip.bottom.hover.v-danger => Same as above, but with variant
```

**Объект:**

```
v-b-tooltip="{ title: 'Title', placement: 'bottom', variant: 'danger' }"
```

## Скрытие и отображение всплывающих подсказок с помощью событий \$root

Вы можете закрыть (скрыть) **все открытые всплывающие подсказки**, создав событие
`bv::hide::tooltip` на \$root:

```js
this.$root.$emit('bv::hide::tooltip')
```

Чтобы закрыть **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был указан в объекте конфигурации) в качестве первого аргумента:

```js
this.$root.$emit('bv::show::tooltip', 'my-trigger-button-id')
```

Чтобы открыть **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был указан в объекте конфигурации) в качестве первого аргумента при
генерировании `bv::show::tooltip` события \$root:

```js
this.$root.$emit('bv::show::tooltip', 'my-trigger-button-id')
```

Чтобы открыть все всплывающие окна одновременно, опустите аргумент `id` при генерации события
`bv::show::tooltip`.

Эти события работают как для версии компонента **, так и для** директивы всплывающей подсказки.

Обратите внимание, что **элемент триггера** должен существовать в DOM и быть в видимом состоянии,
чтобы отображалась всплывающая подсказка.

## Отключение и включение всплывающих подсказок с помощью событий \$root

Вы можете отключить **все открытые всплывающие подсказки**, создав событие `bv::disable::tooltip` на
\$root:

```js
this.$root.$emit('bv::disable::tooltip')
```

Чтобы отключить **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был указан в объекте конфигурации) в качестве первого аргумента:

```js
this.$root.$emit('bv::disable::tooltip', 'my-trigger-button-id')
```

Чтобы включить **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был предоставлен в объекте конфигурации) в качестве первого аргумента
при генерировании `bv::enable::tooltip` события \$root:

```js
this.$root.$emit('bv::enable::tooltip', 'my-trigger-button-id')
```

Чтобы включить все всплывающие окна одновременно, опустите аргумент `id` при генерации события
`bv::enable::tooltip`.

Эти события работают как для версии компонента **, так и для** директивы всплывающей подсказки.

Обратите внимание, что **элемент триггера** должен существовать в DOM, чтобы всплывающая подсказка
была включена или отключена.

## Смотрите также

- [директива `v-b-popover`](/docs/directives/popover)
- [компонент `<b-tooltip>`](/docs/components/tooltip)
- [компонент `<b-popover>`](/docs/components/popover)

<!-- Directive reference section auto generated from directive package.json -->
