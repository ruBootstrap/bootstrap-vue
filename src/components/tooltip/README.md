# Всплывающая подсказка

> Легко добавляйте всплывающие подсказки к элементам или компонентам с помощью компонента
> `<b-tooltip>` или директивы [`v-b-tooltip`](/docs/directives/tooltip) (предпочтительный метод).

```html
<div class="text-center my-3">
  <b-button v-b-tooltip.hover title="Tooltip directive content">
    Наведите на меня
  </b-button>

  <b-button id="tooltip-target-1">
    Наведите на меня
  </b-button>
  <b-tooltip target="tooltip-target-1" triggers="hover">
    Я <b>компонентный</b> тултип контент!
  </b-tooltip>
</div>

<!-- b-tooltip.vue -->
```

## Обзор

Что нужно знать при использовании компонента всплывающей подсказки:

- Тултипы полагаются на стороннюю библиотеку [Popper.js](https://popper.js.org/) для
  позиционирования.
- Тултипы требуют пользовательского SCSS/CSS BootstrapVue для правильной работы и для вариантов.
- Укажите `container` как `null` (по умолчанию, добавляется к `<body>`), чтобы избежать проблем с
  рендерингом в более сложных компонентах (таких как группы ввода, группы кнопок и т. д.). Вы можете
  использовать `container`, чтобы дополнительно указать другой элемент, к которому нужно добавить
  отображаемую всплывающую подсказку.
- Запуск всплывающих окон на скрытых элементах не будет работать.
- Тултипы для `disabled` элементов должны запускаться для элемента-оболочки.
- При запуске из гиперссылок, которые охватывают несколько строк, всплывающие подсказки будут
  центрированы. Используйте `white-space: nowrap;` для `<a>`, `<b-link>` и `<router-link>`, чтобы
  избежать такого поведения.

## Цель

Целью является элемент _триггер_ (или компонент), который вызовет всплывающее сообщение. Цель
указывается с помощью свойства `target` и может быть любой из следующих:

- Строка, идентифицирующая идентификатор триггерного элемента (или идентификатор корневого элемента
  компонента)
- Ссылка (ref) на `HTMLElement` или `SVGElement` (например, через `this.$refs.refName`)
- Ссылка (ref) на компонент, который имеет либо `HTMLElement`, либо `SVGElement` в качестве
  корневого элемента (например, через `this.$refs.refName`)
- Функция (callback), которая возвращает ссылку на `HTMLElement` или `SVGElement`

Для получения дополнительной информации о ссылках см. официальную
[документацию Vue](https://vuejs.org/v2/api/#vm-refs).

**Примечание:**

Целевой элемент **должен** существовать в документе, прежде чем `<b-tooltip>` будет смонтирован.
Если целевой элемент не найден во время монтирования, всплывающая подсказка никогда не откроется.
Всегда размещайте компонент `<b-tooltip>` ниже в DOM, чем целевой элемент. Это правило также
применяется, если функция обратного вызова используется в качестве целевого элемента, поскольку этот
обратный вызов вызывается только один раз при монтировании.

`HTMLElement` относится к стандартным элементам HTML, таким как `<div>`, `<button>` и т. д., а
`SVGElement` относится к `<svg>` или поддерживаемым дочерним элементам SVG.

## Позиционирование

Для позиционирования доступны двенадцать вариантов выравнивания: `top`, `topleft`, `topright`,
`right`, `righttop`, `rightbottom`, `bottom`, `bottomleft`, `bottomright`, `left`, `lefttop` и
`leftbottom`. Позиционирование относительно триггерного элемента.

<div class="bd-example bd-example-tooltip-static">
  <div class="tooltip b-tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">
    <div class="arrow" style="left: calc(50% - 6px)"></div>
    <div class="tooltip-inner">Tooltip on the top</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">
    <div class="arrow" style="right: 0px"></div>
    <div class="tooltip-inner">Tooltip on the topleft</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">
    <div class="arrow" style="left: 0px"></div>
    <div class="tooltip-inner">Tooltip on the topright</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">
    <div class="arrow" style="top: 5px"></div>
    <div class="tooltip-inner">Tooltip on the right</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">
    <div class="arrow" style="bottom: 0px"></div>
    <div class="tooltip-inner">Tooltip on the righttop</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">
    <div class="arrow" style="top: 0px"></div>
    <div class="tooltip-inner">Tooltip on the rightbottom</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">
    <div class="arrow" style="left: calc(50% - 6px)"></div>
    <div class="tooltip-inner">Tooltip on the bottom</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">
    <div class="arrow" style="right: 0px"></div>
    <div class="tooltip-inner">Tooltip on the bottomleft</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">
    <div class="arrow" style="left: 0px"></div>
    <div class="tooltip-inner">Tooltip on the bottomright</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">
    <div class="arrow" style="top: 5px"></div>
    <div class="tooltip-inner">Tooltip on the left</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">
    <div class="arrow" style="bottom: 0px"></div>
    <div class="tooltip-inner">Tooltip on the lefttop</div>
  </div>
  <div class="tooltip b-tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">
    <div class="arrow" style="top: 0px"></div>
    <div class="tooltip-inner">Tooltip on the leftbottom</div>
  </div>
</div>

Смотрите документацию [Директива Tooltip](/docs/directives/tooltip/#positioning) для живых примеров
позиционирования.

## Триггеры

Всплывающие подсказки могут запускаться (открываться/закрываться) с помощью любой комбинации
`click`, `hover` и `focus`. Триггер по умолчанию — `hover focus`. Или можно указать триггер
`manual`, где всплывающее окно можно открыть или закрыть только
[программно](#programmatically-disabling-tooltip).

Если всплывающая подсказка имеет более одного триггера, все триггеры должны быть очищены, прежде чем
всплывающая подсказка закроется. Т.е. если всплывающая подсказка имеет триггер `focus click` и она
была открыта `focus`, а затем пользователь щелкает элемент триггера, он должен щелкнуть его еще раз
**и** переместить фокус, чтобы закрыть всплывающую подсказку.

### Предостережения с триггером `focus` на элементах `<button>`

Для правильного кросс-браузерного и кросс-платформенного поведения при использовании только триггера
`focus` вы должны использовать элемент, который отображает тег `<a>`, а не тег `<button>`, и вы
также должны включить атрибут `tabindex="0"`.

Следующее сгенерирует `<a>`, который выглядит как кнопка:

```html
<b-button
  href="#"
  tabindex="0"
  v-b-tooltip.focus
  title="Заголовок всплывающей подсказки"
>
  Кнопка ссылки с директивой тултипа
</b-button>

<b-button id="link-button" href="#" tabindex="0">
  Кнопка ссылки с компонентом тултипа
</b-button>
<b-tooltip target="link-button" title="Заголовок всплывающей подсказки" triggers="focus">
  Заголовок всплывающей подсказки
</b-tooltip>
```

### Заставить всплывающие подсказки работать с клавиатурой и пользователями вспомогательных технологий

Вы должны добавлять всплывающие подсказки только к элементам HTML, которые традиционно активны с
помощью клавиатуры и являются интерактивными (например, ссылки, кнопки или элементы управления
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
`<div>` или `<span>`, в идеале сфокусируемой на клавиатуре с помощью `tabindex="0"` и переопределить
`pointer-events` на отключенный элемент.

```html
<div>
  <span id="disabled-wrapper" class="d-inline-block" tabindex="0">
    <b-button variant="primary" style="pointer-events: none;" disabled>Отключенная кнопка</b-button>
  </span>
  <b-tooltip target="disabled-wrapper">Отключенная подсказка</b-tooltip>
</div>

<!-- disabled-trigger-element.vue -->
```

## Использование компонента `<b-tooltip>`

```html
<b-container fluid>
  <b-row>
    <b-col md="4" class="py-4">
      <b-button id="button-1" variant="outline-success">Живой чат</b-button>
    </b-col>
    <b-col md="4" class="py-4">
      <b-button id="button-2" variant="outline-success">Html-чат</b-button>
    </b-col>
    <b-col md="4" class="py-4">
      <b-button ref="button-3" variant="outline-success">Альтернативный чат</b-button>
    </b-col>
  </b-row>

  <!-- Tooltip title specified via prop title -->
  <b-tooltip target="button-1" title="Онлайн!"></b-tooltip>

  <!-- HTML title specified via default slot -->
  <b-tooltip target="button-2" placement="bottom">
    Привет <strong>Мир!</strong>
  </b-tooltip>

  <!-- Tooltip for an element identified by ref -->
  <b-tooltip :target="() => $refs['button-3']" title="Альтернатива!"></b-tooltip>
</b-container>

<!-- b-tooltip-component.vue -->
```

### Варианты компонентов

| Свойство             | По умолчанию     | Описание                                                                                                                                                                                                                                                                | Поддерживаемые значения                                                                                                                                                                              |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target`             | `null`           | Идентификатор строки элемента, или ссылка на элемент или компонент, или функция, возвращающая любой из них, для которых вы хотите вызвать всплывающую подсказку **Обязательно**                                                                                         | Любой допустимый уникальный идентификатор элемента в документе, ссылка на элемент или компонент или функция, возвращающая любой такой идентификатор/ссылку                                           |
| `title`              | `null`           | Содержимое всплывающей подсказки (только текст, без HTML). если требуется HTML, поместите его в слот по умолчанию                                                                                                                                                       | Обычный текст                                                                                                                                                                                        |
| `placement`          | `'top'`          | Положение всплывающей подсказки относительно триггерного элемента                                                                                                                                                                                                       | `top`, `bottom`, `left`, `right`, `auto`, `topleft`, `topright`, `bottomleft`, `bottomright`, `lefttop`, `leftbottom`, `righttop`, `rightbottom`                                                     |
| `fallback-placement` | `'flip'`         | Автоматическое переворачивание поведения всплывающей подсказки относительно триггерного элемента                                                                                                                                                                        | `flip`, `clockwise`, `counterclockwise` или массив допустимых мест размещения, оцениваемых слева направо                                                                                             |
| `triggers`           | `'hover focus'`  | Разделенный пробелами список событий, которые вызовут открытие/закрытие всплывающей подсказки                                                                                                                                                                           | `hover`, `focus`, `click`. Обратите внимание, что `blur` — это специальный вариант использования для закрытия всплывающей подсказки при следующем щелчке, обычно используемый в сочетании с `click`. |
| `no-fade`            | `false`          | Отключить анимацию затухания, если установлено значение `true`                                                                                                                                                                                                          | `true` или `false`                                                                                                                                                                                   |
| `delay`              | `50`             | Задержка отображения и скрытия всплывающей подсказки на указанное количество миллисекунд. Также может быть указан как объект в форме `{ show: 100, hide: 400 }`, что позволяет отображать и скрывать различные задержки.                                                | `0` и выше, только целые числа.                                                                                                                                                                      |
| `offset`             | `0`              | Сместить центр всплывающей подсказки на указанное количество пикселей                                                                                                                                                                                                   | Любое отрицательное или положительное целое число                                                                                                                                                    |
| `container`          | `null`           | Идентификатор строки элемента, к которому добавляется визуализированная всплывающая подсказка. Если `null` или элемент не найден, всплывающая подсказка добавляется к `<body>` (по умолчанию)                                                                           | Любой действительный уникальный идентификатор элемента в документе.                                                                                                                                  |
| `boundary`           | `'scrollParent'` | Контейнер, в котором всплывающая подсказка будет визуально ограничена. В большинстве случаев должно быть достаточно значения по умолчанию, но вам может потребоваться изменить его, если ваш целевой элемент находится в небольшом контейнере с прокруткой переполнения | `'scrollParent'` (по умолчанию), `'viewport'`, `'window'` или ссылка на элемент HTML.                                                                                                                |
| `boundary-padding`   | `5`              | Количество пикселей, используемое для определения минимального расстояния между границами и всплывающей подсказкой. Это гарантирует, что всплывающая подсказка всегда имеет небольшой отступ между краями своего контейнера                                             | Любое положительное число                                                                                                                                                                            |
| `noninteractive`     | `false`          | Должна ли всплывающая подсказка быть интерактивной с пользователем                                                                                                                                                                                                      | `true` или `false`                                                                                                                                                                                   |
| `variant`            | `null`           | Контекстный вариант цвета всплывающей подсказки                                                                                                                                                                                                                         | Название любого контекстного варианта цвета темы                                                                                                                                                     |
| `custom-class`       | `null`           | Пользовательское имя класса для применения к элементу внешней оболочки всплывающей подсказки                                                                                                                                                                            | Строка                                                                                                                                                                                               |
| `id`                 | `null`           | Идентификатор для использования в корневом элементе всплывающей подсказки. Если ничего не указано, оно будет сгенерировано автоматически. Если вы предоставляете идентификатор, он _должен_ быть уникальным на отображаемой странице                                    | Действительная строка уникального идентификатора элемента                                                                                                                                            |

### Неинтерактивные всплывающие подсказки

Подсказки BootstrapVue по умолчанию интерактивны для пользователя из соображений доступности. Чтобы
восстановить поведение Bootstrap по умолчанию, примените свойство `noninteractive`:

```html
<div class="text-center">
  <div>
    <b-button id="tooltip-button-interactive">Моя подсказка интерактивна</b-button>
    <b-tooltip target="tooltip-button-interactive">Я буду оставаться открытым при наведении</b-tooltip>
  </div>

  <div class="mt-3">
    <b-button id="tooltip-button-not-interactive">Мой не...</b-button>
    <b-tooltip target="tooltip-button-not-interactive" noninteractive>Поймай меня, если сможешь!</b-tooltip>
  </div>
</div>

<!-- b-tooltip-interactive.vue -->
```

### Варианты и пользовательский класс

Всплывающие окна BootstrapVue поддерживают контекстные цветовые варианты через наш собственный CSS,
через свойство `variant`:

```html
<div class="text-center">
  <b-button id="tooltip-button-variant">Кнопка</b-button>
  <b-tooltip target="tooltip-button-variant" variant="danger">Подсказка об опасности</b-tooltip>
</div>

<!-- b-tooltip-variant.vue -->
```

Варианты темы Bootstrap по умолчанию: `danger`, `warning`, `success`, `primary`, `secondary`,
`info`, `light` и `dark`. Вы можете изменить или добавить дополнительные варианты через Bootstrap
[переменные SCSS](/docs/reference/theming)

Пользовательский класс можно применить к внешней оболочке всплывающей подсказки `<div>` с помощью
свойства `custom-class`:

```html
<div class="text-center">
  <b-button id="my-button">Кнопка</b-button>
  <b-tooltip target="my-button" custom-class="my-tooltip-class">Заголовок всплывающей подсказки</b-tooltip>
</div>
```

`variant` и `custom-class` являются реактивными и могут быть изменены, когда всплывающая подсказка
открыта.

Смотрите документацию [директива всплывающей подсказки](/docs/directives/tooltip) о применении
вариантов и пользовательского класса к версии директивы.

### Программно показать и скрыть всплывающую подсказку

Вы можете вручную управлять видимостью всплывающей подсказки с помощью синхронизируемой логической
переменной `show`. Установка значения `true` покажет всплывающую подсказку, а установка значения
`false` скроет всплывающую подсказку.

```html
<template>
  <div class="text-center">
    <div>
      <b-button id="tooltip-button-1" variant="primary">У меня есть подсказка</b-button>
    </div>

    <div class="mt-3">
      <b-button @click="show = !show">Переключить подсказку</b-button>
    </div>

    <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">
      Привет <strong>Мир!</strong>
    </b-tooltip>
  </div>
</template>
<script>
  export default {
    data: {
      show: true
    }
  }
</script>

<!-- b-tooltip-show-sync.vue -->
```

Чтобы всплывающая подсказка отображалась при начальном рендеринге, просто добавьте параметр `show` в
`<b-tooltip>`:

```html
<div class="text-center">
  <b-button id="tooltip-button-2" variant="primary">Кнопка</b-button>
  <b-tooltip show target="tooltip-button-2">Я начинаю открывать</b-tooltip>
</div>

<!-- b-tooltip-show-open.vue -->
```

На программное управление также можно воздействовать, отправляя события `'open'` и `'close'` во
всплывающую подсказку по ссылке.

```html
<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="tooltip-button-show-event" variant="primary">У меня есть подсказка</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onOpen">Открыть</b-button>
      <b-button class="px-1" @click="onClose">Закрыть</b-button>
    </div>

    <b-tooltip ref="tooltip" target="tooltip-button-show-event">
      Привет <strong>Мир!</strong>
    </b-tooltip>
  </div>
</template>

<script>
  export default {
    methods: {
      onOpen() {
        this.$refs.tooltip.$emit('open')
      },
      onClose() {
        this.$refs.tooltip.$emit('close')
      }
    }
  }
</script>

<!-- b-tooltip-show-ref-event.vue -->
```

Вы также можете использовать события `$root`, чтобы активировать отображение и скрытие всплывающих
подсказок. Дополнительные сведения смотрите в разделе **Скрытие и отображение всплывающих подсказок
с помощью \$root событий** ниже.

### Программное отключение всплывающей подсказки

Вы можете отключить всплывающую подсказку с помощью синхронизируемой логического свойства `disabled`
(по умолчанию `false`) установка значения `true` отключит всплывающую подсказку. Если всплывающая
подсказка в настоящее время видна, когда для параметра `disabled` установлено значение `false`,
всплывающая подсказка будет оставаться видимой до тех пор, пока она не будет включена или программно
закрыта. Если всплывающая подсказка отключена/включена с помощью событий \$root (смотрите ниже),
ваше значение `disabled` будет обновлено, если вы указали модификатор свойства `.sync`.

```html
<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="tooltip-button-disable" variant="primary">У меня есть подсказка</b-button>
    </div>

    <div class="p-2">
      <b-button @click="disabled = !disabled">
        {{ disabled ? 'Enable' : 'Disable' }} Подсказка по свойству
      </b-button>
      <b-button @click="disableByRef">
        {{ disabled ? 'Enable' : 'Disable' }} Подсказка по событию $ref
      </b-button>

      <b-tooltip :disabled.sync="disabled" ref="tooltip" target="tooltip-button-disable">
        Привет <strong>Мир!</strong>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false
      }
    },
    methods: {
      disableByRef() {
        if (this.disabled) {
          this.$refs.tooltip.$emit('enable')
        } else {
          this.$refs.tooltip.$emit('disable')
        }
      }
    }
  }
</script>

<!-- b-tooltip-disable.vue -->
```

**Примечание:** _В приведенном выше примере, поскольку мы используем триггеры всплывающей подсказки
по умолчанию `focus hover`, всплывающая подсказка закроется до того, как она будет отключена из-за
потери фокуса (и наведения) на кнопку-переключатель._

Вы также можете генерировать события `$root`, чтобы активировать отключение и включение всплывающих
подсказок. Дополнительные сведения смотрите в разделе **Отключение и включение всплывающих подсказок
с помощью \$root событий** ниже.

Вы также можете генерировать события `$root`, чтобы активировать отключение и включение всплывающих
окон. Дополнительные сведения смотрите в разделе **Отключение и включение всплывающих подсказок с
помощью \$root событий** ниже.

## Использование директивы `v-b-tooltip`

Директива `v-b-tooltip` делает добавление всплывающих подсказок еще проще без дополнительной
разметки-заполнителя:

```html
<b-container fluid>
  <b-row>
    <b-col md="6" class="py-4">
      <b-button v-b-tooltip title="Онлайн!" variant="outline-success">Живой чат</b-button>
    </b-col>

    <b-col md="6" class="py-4">
      <b-button
        v-b-tooltip.html
        title="Привет <strong>Мир!</strong>"
        variant="outline-success"
      >
        Html-чат
      </b-button>
    </b-col>
  </b-row>
</b-container>

<!-- b-tooltip-directive.vue -->
```

Обратитесь к [документации `v-b-tooltip`](/docs/directives/tooltip) для получения дополнительной
информации и функций формата директивы.

## 'Global' события экземпляра \$root

Используя экземпляр `$root`, можно генерировать и прослушивать события где-то вне компонента, где
используется `<b-collapse>`. Короче говоря, `$root` ведет себя как глобальный источник и слушатель
событий. Подробности об экземпляре `$root` можно найти в
[официальной документации Vue](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-the-Root-Instance).

### Скрытие и отображение всплывающих подсказок с помощью событий \$root

Вы можете закрыть (скрыть) **все открытые всплывающие подсказки**, создав событие
`bv::hide::tooltip` на \$root:

```js
this.$root.$emit('bv::hide::tooltip')
```

Чтобы закрыть **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был предоставлен через свойство `id`) в качестве аргумента:

```js
this.$root.$emit('bv::hide::tooltip', 'my-trigger-button-id')
```

Чтобы открыть **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был предоставлен через свойство `id`) в качестве аргумента при
запуске \$root события `bv::show::tooltip`:

```js
this.$root.$emit('bv::show::tooltip', 'my-trigger-button-id')
```

Чтобы открыть все всплывающие подсказки одновременно, опустите аргумент `id` при генерации события
`bv::show::tooltip`.

Эти события работают как для версии компонента, **так и для** директивы всплывающей подсказки.

**Примечание:** _**Триггерный элемент** должен существовать в DOM и быть видимым, чтобы всплывающая
подсказка отображалась._

### Отключение и включение всплывающих подсказок с помощью событий \$root

Вы можете отключить **все открытые всплывающие подсказки**, создав событие `bv::disable::tooltip` в
\$root:

```js
this.$root.$emit('bv::disable::tooltip')
```

Чтобы отключить **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был предоставлен через свойство `id`) в качестве аргумента:

```js
this.$root.$emit('bv::disable::tooltip', 'my-trigger-button-id')
```

Чтобы включить **конкретную всплывающую подсказку**, передайте `id` элемента триггера или `id`
всплывающей подсказки (если он был предоставлен через свойство `id`) в качестве аргумента при
генерировании \$root события `bv::enable::tooltip` :

```js
this.$root.$emit('bv::enable::tooltip', 'my-trigger-button-id')
```

Чтобы включить все всплывающие подсказки одновременно, опустите аргумент `id` при генерации события
`bv::enable::tooltip`.

Эти события работают как для версии компонента, **так и для** директивы всплывающей подсказки.

**Примечание:** _Элемент **триггера** должен существовать в DOM, чтобы всплывающая подсказка была
включена или отключена._

### Прослушивание изменений всплывающей подсказки с помощью событий \$root

Чтобы прослушать любое открытие всплывающей подсказки, используйте:

```js
export default {
  mounted() {
    this.$root.$on('bv::tooltip::show', bvEvent => {
      console.log('bvEvent:', bvEvent)
    })
  }
}
```

Полный список событий смотрите в документации вразделе
[События](/docs/components/tooltip#component-reference).

## Доступность

Элемент триггера, когда отображается всплывающая подсказка, будет иметь атрибут `aria-describedby`,
установленный с автоматически сгенерированным идентификатором всплывающей подсказки.

**Примечание:** Эффект анимации этого компонента зависит от медиа-запроса `prefers-reduced-motion`.
Дополнительную информацию смотрите в
[разделе с уменьшенным движением в нашей документации по специальным возможностям](/docs/reference/accessibility).

<!-- Component reference added automatically from component package.json -->
