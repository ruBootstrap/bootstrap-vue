# Всплывающее окно

> Документация и примеры добавления всплывающих окон BootstrapVue к любому элементу вашего сайта с
> использованием Bootstrap v4 CSS для стилизации и анимации. Всплывающие окна могут вызываться
> наведением курсора, фокусировкой или щелчком по элементу и могут содержать как содержимое, так и
> заголовок заголовка. Поповеры — это всплывающие подсказки на стероидах.

## Обзор

Используйте директиву `v-b-popover` для любого **элемента** или **компонента**, где вы хотите, чтобы
всплывающее окно отображалось.

```html
<div class="text-center my-3">
  <b-button v-b-popover.hover="'Я содержимое всплывающего окна!'" title="Заголовок всплывающего окна">Наведите меня</b-button>
</div>

<!-- b-popover.vue -->
```

Что нужно знать при использовании директивы всплывающего окна:

- Поповеры полагаются на стороннюю библиотеку [Popper.js](https://popper.js.org/) для
  позиционирования.
- Поповеры требуют пользовательского SCSS/CSS BootstrapVue для правильной работы и для вариантов.
- Если заголовок и содержимое не указаны (или представляют собой пустую строку), всплывающее окно не
  будет отображаться.
- Укажите контейнер: 'body' (по умолчанию), чтобы избежать проблем с рендерингом в более сложных
  компонентах (таких как группы ввода, группы кнопок и т. д.).
- Запуск всплывающих окон на скрытых элементах не будет работать.
- Поповеры для `disabled` элементов должны запускаться для элемента-оболочки.
- При запуске из гиперссылок, которые охватывают несколько строк, всплывающие окна будут
  центрированы. Используйте `white-space: nowrap`; на ваших `<a>`, `<b-link>` или `<router-link>`,
  чтобы избежать такого поведения.
- Элементы, вызывающие всплывающие окна, должны находиться в последовательности вкладок документа.
  Добавьте `tabindex="0"`, если требуется.

## Позиционирование

Для позиционирования доступны двенадцать вариантов выравнивания: `top`, `topleft`, `topright`,
`right`, `righttop`, `rightbottom`, `bottom`, `bottomleft`, `bottomright`, `left`, `lefttop` и
`leftbottom`. Позиционирование относительно триггерного элемента.

<div class="bd-example bd-example-popover-static">
  <div class="popover b-popover bs-popover-top bs-popover-top-docs">
    <div class="arrow" style="left: calc(50% - 8px)"></div>
    <h3 class="popover-header">Popover top</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-top bs-popover-top-docs">
    <div class="arrow" style="right: 0px"></div>
    <h3 class="popover-header">Popover topleft</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-top bs-popover-top-docs">
    <div class="arrow" style="left: 0px"></div>
    <h3 class="popover-header">Popover topright</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>

  <div class="popover b-popover bs-popover-right bs-popover-right-docs">
    <div class="arrow" style="top: calc(50% - 4px)"></div>
    <h3 class="popover-header">Popover right</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-right bs-popover-right-docs">
    <div class="arrow" style="bottom: 0px"></div>
    <h3 class="popover-header">Popover righttop</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-right bs-popover-right-docs">
    <div class="arrow" style="top: 0px"></div>
    <h3 class="popover-header">Popover rightbottom</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>

  <div class="popover b-popover bs-popover-bottom bs-popover-bottom-docs">
    <div class="arrow" style="left: calc(50% - 8px)"></div>
    <h3 class="popover-header">Popover bottom</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-bottom bs-popover-bottom-docs">
    <div class="arrow" style="right: 0px"></div>
    <h3 class="popover-header">Popover bottomleft</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-bottom bs-popover-bottom-docs">
    <div class="arrow" style="left: 0px"></div>
    <h3 class="popover-header">Popover bottomright</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>

  <div class="popover b-popover bs-popover-left bs-popover-left-docs">
    <div class="arrow" style="top: calc(50% - 4px)"></div>
    <h3 class="popover-header">Popover left</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-left bs-popover-left-docs">
    <div class="arrow" style="bottom: 0px"></div>
    <h3 class="popover-header">Popover lefttop</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>
  <div class="popover b-popover bs-popover-left bs-popover-left-docs">
    <div class="arrow" style="top: 0px"></div>
    <h3 class="popover-header">Popover leftbottom</h3>
    <div class="popover-body">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
      quam venenatis vestibulum.
    </div>
  </div>

  <div class="clearfix"></div>
</div>

**Живой пример**

```html
<div>
  <b-container fluid>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.top="'Popover!'" variant="primary">Top</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.right="'Popover!'" variant="primary">Right</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.left="'Popover!'" variant="primary">Left</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.bottom="'Popover!'" variant="primary">Bottom</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.topright="'Popover!'" variant="primary">Top right</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.topleft="'Popover!'" variant="primary">Top left</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.bottomright="'Popover!'" variant="primary">Bottom right</b-button>
      </b-col>
       <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.bottomleft="'Popover!'" variant="primary">Bottom left</b-button>
      </b-col>
     <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.lefttop="'Popover!'" variant="primary">Left top</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.leftbottom="'Popover!'" variant="primary">Left bottom</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.righttop="'Popover!'" variant="primary">right top</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.rightbottom="'Popover!'" variant="primary">right bottom</b-button>
      </b-col>
    </b-row>
  </b-container>
</div>

<!-- b-popover-positioning.vue -->
```

## Триггеры

Всплывающие окна могут быть запущены (открыты/закрыты) с помощью любой комбинации `click`, `hover` и
`focus`. Триггер по умолчанию — `click`. Или можно указать триггер `manual`, где всплывающее окно
может быть открыто или закрыто только [программно](#hiding-and-showing-popovers-via-root-events).

Если всплывающее окно имеет более одного триггера, то все триггеры должны быть очищены, прежде чем
всплывающее окно закроется. т.е. если всплывающее окно имеет триггер `focus click`, и оно было
открыто `focus`, а затем пользователь щелкает элемент триггера, он должен щелкнуть его еще раз **и**
переместить фокус, чтобы закрыть всплывающее окно.

```html
<div>
  <b-container fluid>
    <h5>Триггеры</h5>
    <b-row class="text-center">
      <b-col md="6" class="py-3">
        <b-button v-b-popover="'Popover!'" variant="outline-success">Click (default)</b-button>
      </b-col>
      <b-col md="6" class="py-3">
        <b-button v-b-popover.hover="'Popover!'" variant="outline-success">Hover</b-button>
      </b-col>
      <b-col md="6" class="py-3">
        <b-button v-b-popover.focus="'Popover!'" variant="outline-success">Focus</b-button>
      </b-col>
      <b-col md="6" class="py-3">
        <b-button v-b-popover.hover.focus="'Popover!'" variant="outline-success">Hover + Focus</b-button>
      </b-col>
    </b-row>
  </b-container>
</div>

<!-- b-popover-triggers.vue -->
```

### Настройка всплывающих окон для пользователей клавиатуры и вспомогательных технологий

Вы должны добавлять всплывающие окна только к элементам HTML, которые традиционно активны с помощью
клавиатуры и являются интерактивными (например, ссылки, кнопки или элементы управления формы). Хотя
произвольные элементы HTML (такие как `<span>`) можно сделать фокусируемыми, добавив атрибут
`tabindex="0"`, это добавит потенциально раздражающие и запутанные позиции табуляции на
неинтерактивных элементах для пользователей клавиатуры. Кроме того, большинство вспомогательных
технологий в настоящее время не объявляют всплывающее окно в этой ситуации.

Кроме того, не полагайтесь исключительно на `hover` в качестве триггера для вашего всплывающего
окна, так как это сделает ваши всплывающие окна _невозможными для запуска для пользователей,
использующих только клавиатуру_.

### Предостережения со срабатыванием `focus` на элементах `<button>`

Для правильного кросс-браузерного и кросс-платформенного поведения при использовании только триггера
`focus`, вы должны использовать элемент, который отображает тег `<a>`, а не тег `<button>`, и вы
также должны включить `tabindex="0"`.

Следующее сгенерирует `<a>`, который выглядит как кнопка:

```html
<b-button
  href="#"
  tabindex="0"
  v-b-popover.focus="'Popover content'"
  title="Popover title"
>
  Link button with popover directive
</b-button>
```

### Закрыть при следующем нажатии (самозакрытие)

Используйте триггер `focus` отдельно, чтобы закрыть всплывающие окна при следующем щелчке, который
делает пользователь. `focus` также заставляет всплывающее окно активироваться как при `focus` и
`click` (поскольку щелчок заставляет элемент получать фокус, предполагая, что он находится в
последовательности вкладок на странице).

Однако вы можете указать свой триггер как `click blur`, который заставит только щелчок активировать
всплывающее окно, и либо щелчок по элементу - _или потеря фокуса на другом элементе или части
документа_ - закроет всплывающее окно.

Этот триггер `blur` должен использоваться в сочетании с триггером `click`.

В следующем примере показан вариант использования `click blur`. Всплывающие окна будут открываться
только по нажатию кнопки и закрываться либо по нажатию кнопки, либо по щелчку в любом другом месте
(или при смене фокуса нажатием клавиши <kbd>Tab</kbd> key). Некоторые называют это поведение
_самоотвержением_.

```html
<div>
  <b-container fluid>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button v-b-popover.click.blur="'Контент'" title="Всплывающее окно" variant="primary">Клик</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.click.blur="'Контент'" title="Всплывающее окно" variant="primary">Клик</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.click.blur="'Контент'" title="Всплывающее окно" variant="primary">Клик</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.click.blur="'Контент'" title="Всплывающее окно" variant="primary">Клик</b-button>
      </b-col>
    </b-row>
  </b-container>
</div>

<!-- b-popover-dismiss-next-click.vue -->
```

## Заголовок и содержание

Существует несколько вариантов предоставления заголовка и содержимого всплывающего окна.

По умолчанию всплывающее окно будет использовать атрибут `title` элемента в качестве заголовка
всплывающего окна, а содержимое передается в виде строки в директиву `v-b-popover`. Заголовок и
содержимое также могут быть переданы как объект в `v-b-popover` в виде

<!-- eslint-disable no-unused-vars -->

```js
const options = {
  title: 'This is the title',
  content: 'This is the content'
}
```

Если ваш контент имеет базовую HTML-разметку, вам также необходимо установить для свойства `html`
значение `true`, или использовать модификатор директивы `html`

<!-- eslint-disable no-unused-vars -->

```js
// Object format with HTML:
const options = {
  title: 'This is the <strong>title</strong>',
  content: 'This is the <em>контент<em>',
  html: true
}
```

Заголовок и содержимое также могут быть ссылками на функции, которые вызываются каждый раз при
открытии всплывающего окна. Чтобы сделать значение, возвращаемое функцией, реактивным при открытии,
установите для заголовка или содержимого ссылку на функцию _new_ при каждом изменении содержимого.

```html
<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover="'Content!'" title="Title from title attribute" variant="success">
          Title + Content
        </b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button
          v-b-popover.hover="{title:'Popover', content:'This is the content of popover'}"
          variant="success"
        >
          Config Object
        </b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover="popoverData" variant="success">Config from data</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.html="popoverMethod" title="Popover with HTML" variant="success">
          Method
        </b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12" class="py-3">
        <b-button v-b-popover.hover="popoverConfig" variant="success">Config Object</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        date: new Date(),
        counter: 0,
        timer: null
      }
    },
    computed: {
      popoverConfig() {
        // Both title and content specified as a function in this example
        // and will be called the each time the popover is opened
        return {
          html: true,
          title: () => {
            // Note this is called only when the popover is opened
            return 'Hello <b>Popover:</b> ' + ++this.counter
          },
          content: () => {
            // Note this is called only when the popover is opened
            return 'The date is:<br><em>' + new Date() + '</em>'
          }
        }
      },
      popoverData() {
        return {
          title: 'Заголовок всплывающего окна',
          content: 'The date is ' + this.date
        }
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
      popoverMethod() {
        // Returns the content as a string
        // Will be called each time the popover is opened
        return '<strong>' + new Date() + '</strong>'
      }
    }
  }
</script>

<!-- b-popover-content.vue -->
```

## Варианты и пользовательский класс

Всплывающие окна BootstrapVue поддерживают контекстуальные цветовые варианты с помощью нашего
пользовательского CSS либо с помощью модификаторов директив, либо параметров конфигурации:

```html
<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col>
        <b-button
          v-b-popover.hover.v-danger="{ content: 'Popover content' }"
          title="Danger variant"
        >
          Danger Modifier
        </b-button>
      </b-col>
      <b-col>
        <b-button
          v-b-popover.hover="{ variant: 'info',  content: 'Popover content' }"
          title="Info variant"
        >
          Info Config
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<!-- b-popover-variants.vue -->
```

Варианты темы Bootstrap по умолчанию: `danger`, `warning`, `success`, `primary`, `secondary`,
`info`, `light` и `dark`. Вы можете изменить или добавить дополнительные варианты через Bootstrap
[переменные SCSS](/docs/reference/theming)

Пользовательский класс можно применить к внешней оболочке всплывающего окна `<div>` с помощью
свойства опции `customClass`:

```html
<b-button
  v-b-popover.hover="{ customClass: 'my-popover-class', content: 'Popover content' }"
  title="Всплывающее окно"
>
  Кнопка
</b-button>
```

## Синтаксис и использование директив

```html
<b-button v-b-popover:[container].[mod].[mod].[...].[mod]="<value>">Кнопка</b-button>
```

Где `[container]` может быть (необязательно):

- Идентификатор элемента (минус `#`) для размещения разметки всплывающего окна, когда он виден
- Если не указано, всплывающие окна добавляются к `<body>`, когда они видны

Где может быть `[mod]` (все необязательные):

- Позиционирование: `top`, `bottom`, `left`, `right`, `auto`; или позиции выравнивания смещения:
  `topleft`, `topright`, `bottomleft`, `bottomright`, `lefttop`, `leftbottom`, `righttop` или
  `rightbottom` (последнее найденное побеждает, по умолчанию `right`).
- Триггер события: `click`, `hover`, `focus`, `blur` (если ничего не указано, по умолчанию `click`.
  Триггер `blur` является только обработчиком закрытия, и если он указан сам по себе, он будет
  преобразован `focus`). Используйте `manual`, если вы хотите управлять видимостью только вручную.
- `nofade`, чтобы отключить анимацию.
- `html`, чтобы включить рендеринг необработанного HTML. по умолчанию HTML экранируется и
  преобразуется в текст.
- Значение задержки в формате `d###` (где `###` в мс, по умолчанию `50`), применяется как к `hide` и
  `show`.
- Значение задержки показа в формате `ds###` (где `###` в мс, по умолчанию `50`), применяется только
  к триггеру `show`.
- Значение задержки скрытия в формате `dh###` (где `###` в мс, по умолчанию `50`), применяется
  только к триггеру `hide`.
- Значение смещения в пикселях в формате `o###` (где `###` – количество пикселей, по умолчанию `0`.
  Допускаются отрицательные значения). Обратите внимание, что если задано смещение, то позиции
  выравнивания будут возвращаться к одному из `top`, `bottom`, `left` или `right`.
- Настройка границы `window` или `viewport`. Элемент для ограничения визуального размещения
  всплывающего окна. Если не указано, граница по умолчанию соответствует родительскому элементу
  прокрутки триггерного элемента (в большинстве случаев этого будет достаточно).
- Контекстный вариант в форме `v-XXX` (где `XXX` название цветового варианта).

Где `<value>` может быть (необязательно):

- Строка, содержащая **содержимое** всплывающего окна.
- Ссылка на функцию для создания **содержимого** всплывающего окна (получает один аргумент, который
  является ссылкой на элемент DOM, вызывающий всплывающее окно)
- Объект, содержащий более сложную конфигурацию поповера. Доступные параметры смотрите ниже.

**Свойства объекта конфигурации опций:**

| Свойство            | Тип                                   | По умолчанию     | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------- | ------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animation`         | Boolean                               | `true`           | Примените к поповеру плавный переход CSS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `container`         | String ID или HTMLElement или `false` | `false`          | Добавляет всплывающее окно к определенному элементу. Пример: `container: '#body'`. Этот параметр особенно полезен тем, что позволяет расположить всплывающее окно в потоке документа рядом с инициирующим элементом, что предотвратит перемещение всплывающего окна от инициирующего элемента во время изменения размера окна. Если установлено значение `false`, всплывающее окно будет добавлено к `body`, или, если элемент триггера находится внутри модального окна, он будет добавлен к модальному контейнеру. |
| `delay`             | Number или Object                     | `50`             | Задержка показа и скрытия всплывающего окна (мс). Если указано число, задержка применяется как для скрытия, так и для показа. Структура объекта: `delay: { "show": 500, "hide": 100 }`                                                                                                                                                                                                                                                                                                                               |
| `html`              | Boolean                               | `false`          | Разрешить HTML во всплывающем окне. Если true, теги HTML в заголовке и содержимом поповера будут отображаться во всплывающей подсказке. Если false, заголовок и содержимое будут вставлены как обычный текст. Используйте текст, если вы беспокоитесь о XSS-атаках.                                                                                                                                                                                                                                                  |
| `placement`         | String или Function                   | `'top'`          | Как расположить всплывающее окно — `auto`, `top`, `bottom`, `left`, `right`, `topleft`, `topright`, `bottomleft`, `bottomright`, `lefttop`, `leftbottom`, `righttop` или `rightbottom`. Когда указано `auto`, подсказка будет динамически переориентироваться.                                                                                                                                                                                                                                                       |
| `title`             | String или Function                   | `''`             | Значение заголовока по умолчанию, если атрибут тайтла отсутствует. Если задана функция, она должна возвращать строку.                                                                                                                                                                                                                                                                                                                                                                                                |
| `content`           | String или Function                   | `''`             | Значение содержания по умолчанию. Если задана функция, она должна возвращать строку.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `trigger`           | String                                | `'hover focus'`  | Как срабатывает всплывающая подсказка: `click`, `hover`, `focus`. Вы можете передать несколько триггеров; разделяйте их пробелом. Укажите `'manual'`, если вы собираетесь показывать и скрывать всплывающую подсказку только программно.                                                                                                                                                                                                                                                                             |
| `offset`            | Number или String                     | `0`              | Смещение всплывающего окна относительно его цели. Для получения дополнительной информации обратитесь к документации по смещению Popper.js.                                                                                                                                                                                                                                                                                                                                                                           |
| `fallbackPlacement` | String или Array                      | `'flip'`         | Позволяет указать, какую позицию Поппер будет использовать при откате. Может быть `flip`, `clockwise`, `counterclockwise` или массивом мест размещения. Для получения дополнительной информации обратитесь к документации по поведению Popper.js.                                                                                                                                                                                                                                                                    |
| `boundary`          | String ID или HTMLElement             | `'scrollParent'` | Контейнер, в котором всплывающее окно будет ограничено визуально. В большинстве случаев должно быть достаточно значения по умолчанию, но вам может потребоваться изменить его, если ваш целевой элемент находится в небольшом контейнере с прокруткой переполнения. Поддерживаемые значения: `'scrollParent'` (по умолчанию), `'viewport'`, `'window'`, или ссылка на элемент HTML.                                                                                                                                  |
| `boundaryPadding`   | Number                                | `5`              | Количество пикселей, используемое для определения минимального расстояния между границами и всплывающим окном. Это гарантирует, что всплывающее окно всегда будет иметь небольшой отступ между краями своего контейнера.                                                                                                                                                                                                                                                                                             |
| `variant`           | String                                | `null`           | Контекстный вариант цвета всплывающего окна.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `customClass`       | String                                | `null`           | Пользовательское имя класса для применения к элементу внешней оболочки всплывающего окна.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `id`                | String                                | `null`           | Идентификатор для использования в корневом элементе всплывающего окна. Если ничего не указано, оно будет сгенерировано автоматически. Если вы предоставляете идентификатор, он _должен_ быть уникальным на отображаемой странице.                                                                                                                                                                                                                                                                                    |
| `disabled`          | Boolean                               | `false`          | Установите значение `true`, чтобы отключить всплывающее окно.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Использование

**Самое простое использование:**

```
v-b-popover="'This is a Popover!'"
```

или используйте атрибут `title` элемента для заголовка всплывающего окна:

```
v-b-popover title="This is a popover header"
v-b-popover="'This is popover content'" title="This is popover header"
```

или укажите объект для заголовка и содержимого:

```
v-b-popover="{title:'Popover header', content:'Popover content'}"
```

**Включить HTML-контент/заголовок:**

```html
v-b-popover.html="'<em>Emphasis</em> in content'" title="<strong>Bolded title</strong>"
```

**Примеры размещения:**

```
v-b-popover.top
```

**Примеры триггеров:**

```
v-b-popover => Default of click
v-b-popover.hover => Hover only
v-b-popover.click => Click only
v-b-popover.hover.focus => Both hover and focus
```

**Комбо:**

```
v-b-popover.hover.bottom => Show on hover and place at bottom
v-b-popover.bottom.hover => Same as above
v-b-popover.bottom.click.html => Show on click and place at bottom with HTML content
```

## Скрытие и отображение всплывающих окон с помощью событий \$root

Вы можете закрыть (скрыть) **все открытые всплывающие окна**, создав событие `bv::hide::popover` в
\$root:

```js
this.$root.$emit('bv::hide::popover')
```

Чтобы закрыть **определенное всплывающее окно**, передайте `id` триггерного элемента или `id`
всплывающего окна (если он был указан в объекте конфигурации) в качестве первого аргумента:

```js
this.$root.$emit('bv::hide::popover', 'my-trigger-button-id')
```

Чтобы открыть **определенное всплывающее окно**, передайте `id` триггерного элемента или `id`
всплывающего окна (если он был указан в объекте конфигурации) в качестве первого аргумента при
создании `bv::show::popover`:

```js
this.$root.$emit('bv::show::popover', 'my-trigger-button-id')
```

Чтобы открыть все всплывающие окна одновременно, опустите аргумент `id` при генерации события
`bv::show::popover`.

Эти события работают как для версии компонента \*\*, так и для версии директивы popover.

Обратите внимание, что **элемент триггера** должен существовать в DOM и быть в видимом состоянии,
чтобы всплывающее окно могло создаваться и отображаться.

## Отключение и включение всплывающих окон с помощью событий \$root

Вы можете отключить **все** всплывающие окна, создав событие `bv::disable::popover` на \$root:

```js
this.$root.$emit('bv::disable::popover')
```

Чтобы отключить **определенное всплывающее окно**, передайте `id` триггерного элемента или `id`
всплывающего окна (если он был предоставлен в объекте конфигурации) в качестве первого аргумента:

```js
this.$root.$emit('bv::disable::popover', 'my-trigger-button-id')
```

Чтобы включить **определенное всплывающее окно**, передайте `id` триггерного элемента или `id`
всплывающего окна (если он был указан в объекте конфигурации) в качестве первого аргумента при
генерации `bv::enable::popover`:

```js
this.$root.$emit('bv::enable::popover', 'my-trigger-button-id')
```

Чтобы включить все всплывающие окна одновременно, опустите аргумент `id` при генерации события
`bv::enable::popover`.

Эти события работают как для компонентной, так и для директивной версии поповера.

Обратите внимание, что **элемент триггера** должен существовать в DOM, чтобы всплывающее окно было
включено или отключено.

## Смотрите также

- [директива `v-b-tooltip`](/docs/directives/tooltip)
- [компонент `<b-popover>`](/docs/components/popover)
- [компонент `<b-tooltip>`](/docs/components/tooltip)

<!-- Directive reference section auto generated from directive package.json -->
