# Всплывающее окно

> Функцию всплывающего сообщения, которая обеспечивает поведение, подобное всплывающей подсказке,
> можно легко применить к любому интерактивному элементу с помощью компонента `<b-popover>` или
> директивы [`v-b-popover`](/docs/directives/popover).

```html
<div class="text-center my-3">
  <b-button v-b-popover.hover.top="'Я содержание директивы popover!'" title="Заголовок всплывающего окна">
    Наведите на меня
  </b-button>

  <b-button id="popover-target-1">
    Наведите на меня
  </b-button>
  <b-popover target="popover-target-1" triggers="hover" placement="top">
    <template #title>Заголовок всплывающего окна</template>
    Я <b>компонентный</b> поповер контент!
  </b-popover>
</div>

<!-- b-popover.vue -->
```

## Обзор

Что нужно знать при использовании компонента popover:

- Поповеры полагаются на стороннюю библиотеку [Popper.js](https://popper.js.org/) для
  позиционирования.
- Поповеры требуют пользовательского SCSS/CSS BootstrapVue для правильной работы и для вариантов.
- Укажите `container` как `null` (по умолчанию, добавляется к `<body>`), чтобы избежать проблем с
  рендерингом в более сложных компонентах (таких как группы ввода, группы кнопок и т. д.). Вы можете
  использовать `container`, чтобы дополнительно указать другой элемент, к которому нужно добавить
  отображаемое всплывающее окно.
- Запуск всплывающих окон на скрытых элементах не будет работать.
- Поповеры для `disabled` элементов должны запускаться для элемента-оболочки.
- При запуске из гиперссылок, которые охватывают несколько строк, всплывающие окна будут
  центрированы. Используйте `white-space: nowrap;` для `<a>`, `<b-link>` и `<router-link>`, чтобы
  избежать такого поведения.

## Цель

Целью является элемент _триггер_ (или компонент), который вызовет всплывающее окно. Цель указывается
с помощью свойства `target` и может быть любой из следующих:

- Строка, идентифицирующая идентификатор триггерного элемента (или идентификатор корневого элемента
  компонента)
- Ссылка (ref) на `HTMLElement` или `SVGElement` (например, через `this.$refs.refName`)
- Ссылка (ref) на компонент, который имеет либо `HTMLElement`, либо `SVGElement` в качестве
  корневого элемента (например, через `this.$refs.refName`)
- Функция (callback), которая возвращает ссылку на `HTMLElement` или `SVGElement`

Для получения дополнительной информации о ссылках см. официальную
[документацию Vue](https://vuejs.org/v2/api/#vm-refs).

**Примечания:**

Целевой элемент **должен** существовать в документе, прежде чем `<b-popover>` будет смонтирован.
Если целевой элемент не найден во время монтирования, всплывающее окно никогда не откроется. Всегда
размещайте компонент `<b-popover>` ниже в DOM, чем целевой элемент. Это правило также применяется,
если функция обратного вызова используется в качестве целевого элемента, поскольку этот обратный
вызов вызывается только один раз при монтировании.

`HTMLElement` относится к стандартным элементам HTML, таким как `<div>`, `<button>` и т. д., а
`SVGElement` относится к `<svg>` или поддерживаемым дочерним элементам SVG.

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

Смотрите документацию [Директива Popover](/docs/directives/popover/#positioning) для живых примеров
позиционирования.

## Триггеры

570 / 5 000 Результаты перевода Всплывающие окна могут быть запущены (открыты/закрыты) с помощью
любой комбинации `click`, `hover` и `focus`. Триггер по умолчанию — `click`. Или можно указать
триггер `manual`, где всплывающее окно можно открыть или закрыть только
[программно](#programmatically-disabling-popover).

Если всплывающее окно имеет более одного триггера, то все триггеры должны быть очищены, прежде чем
всплывающее окно закроется. Т. е. если всплывающее окно имеет триггер `focus click` и оно было
открыто `focus`, а затем пользователь щелкает элемент триггера, он должен снова щелкнуть его **и**
переместить фокус, чтобы закрыть всплывающее окно.

### Предостережения с триггером `focus` на элементах `<button>`

Для правильного кросс-браузерного и кросс-платформенного поведения при использовании только триггера
`focus` вы должны использовать элемент, который отображает тег `<a>`, а не тег `<button>`, и вы
также должны включить атрибут `tabindex="0"`.

Следующее сгенерирует `<a>`, который выглядит как кнопка:

```html
<b-button
  href="#"
  tabindex="0"
  v-b-popover.focus="'Контент всплывающего окна'"
  title="Заголовок всплывающего окна"
>
  Кнопка ссылки с директивой поповера
</b-button>

<b-button id="link-button" href="#" tabindex="0">
  Кнопка ссылки с компонентом поповера
</b-button>
<b-popover target="link-button" title="Заголовок всплывающего окна" triggers="focus">
  Контент всплывающего окна
</b-popover>
```

### Закрыть при следующем нажатии (самозакрытие)

Используйте триггер `focus` отдельно, чтобы закрыть всплывающие окна при следующем щелчке, который
делает пользователь. `focus` также заставляет всплывающее окно активироваться как при `focus`, так и
при `click` (поскольку щелчок заставляет элемент получать фокус в большинстве браузеров,
предполагая, что он находится в последовательности вкладок на странице).

Однако вы можете указать свой триггер как `click blur`, который заставит только щелчок активировать
всплывающее окно, и либо щелчок по элементу, **либо** потеря фокуса на другом элементе или части
документа закроет всплывающее окно.

Специальный триггер `blur` **должен** использоваться в сочетании с триггером `click`.

## Основное использование компонента `<b-popover>`

```html
<template>
  <b-container fluid>
    <h5 class="my-3">Размещение</h5>
    <b-row>
      <b-col
        v-for="placement in placements"
        :key="placement"
        md="4"
        class="py-4 text-center"
      >
        <b-button :id="`popover-1-${placement}`" variant="primary">{{ placement }}</b-button>
        <b-popover
          :target="`popover-1-${placement}`"
          :placement="placement"
          title="Поповер!"
          triggers="hover focus"
          :content="`Размещение ${placement}`"
        ></b-popover>
      </b-col>
    </b-row>

    <h5 class="my-3">Контент через свойства или слоты</h5>
    <b-row>
      <b-col md="6" class="py-4 text-center">
        <b-button id="popover-2" variant="primary">Использование свойств</b-button>
        <b-popover
          target="popover-2"
          title="Примеры свойства"
          triggers="hover focus"
          content="Встраивание контента с использованием свойств очень просто"
        ></b-popover>
      </b-col>

      <b-col md="6" class="py-4 text-center">
        <b-button id="popover-3" variant="primary">Использование слотов</b-button>
        <b-popover target="popover-3" triggers="hover focus">
          <template #title>Контент через слоты</template>
          Встраивание контента <span class="text-danger">с использованием слотов</span> дает вам
          <em>более высокий <strong>контроль</strong></em> и базовую поддержку HTML.
        </b-popover>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        placements: [
          'topright',
          'top',
          'topleft',
          'bottomright',
          'bottom',
          'bottomleft',
          'righttop',
          'right',
          'lefttop',
          'rightbottom',
          'left',
          'leftbottom'
        ]
      }
    }
  }
</script>

<!-- b-popover-placements.vue -->
```

### Параметры компонента через свойства

| Свойство             | По умолчанию     | Описание                                                                                                                                                                                                                                                            | Поддерживаемые значения                                                                                                                                |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target`             | `null`           | Идентификатор строки элемента или ссылка на элемент или компонент, для которого вы хотите вызвать всплывающее окно. **Обязательный**                                                                                                                                | Любой действительный уникальный идентификатор элемента в документе или ссылка на элемент/компонент в документе                                         |
| `title`              | `null`           | Заголовок всплывающего окна (только текст, без HTML). Если требуется HTML или реактивность, используйте именованный слот `title`                                                                                                                                    | Простой текст                                                                                                                                          |
| `content`            | `null`           | Содержимое всплывающего окна (только текст, без HTML). Если требуется HTML или реактивность, используйте слот по умолчанию.                                                                                                                                         | Простой текст                                                                                                                                          |
| `placement`          | `'right'`        | Позиционирование поповера относительно триггерного элемента.                                                                                                                                                                                                        | `auto`, `top`, `bottom`, `left`, `right`, `topleft`, `topright`, `bottomleft`, `bottomright`, `lefttop`, `leftbottom`, `righttop`, `rightbottom`       |
| `fallback-placement` | `'flip'`         | Автоматическое переворачивание поведения всплывающего окна относительно триггерного элемента.                                                                                                                                                                       | `flip`, `clockwise`, `counterclockwise` или массив допустимых мест размещения, оцениваемых слева направо                                               |
| `disabled`           | `false`          | Программное управление состоянием отображения Popover. Рекомендуется использовать с [модификатором синхронизации](https://vuejs.org/v2/guide/components.html#sync-Modifier).                                                                                        | `true`, `false`                                                                                                                                        |
| `triggers`           | `'click'`        | Разделенный пробелами список событий, которые вызовут открытие/закрытие всплывающего окна с помощью встроенной обработки                                                                                                                                            | `hover`, `focus`, `click`. Обратите внимание, что `blur` — это специальный вариант использования, чтобы закрыть всплывающее окно при следующем щелчке. |
| `no-fade`            | `false`          | Отключить анимацию затухания, если установлено значение `true`                                                                                                                                                                                                      | `true` или `false`                                                                                                                                     |
| `delay`              | `50`             | Задержка показа и скрытия всплывающих окон на указанное количество миллисекунд. Также может быть определен как объект в форме `{ show: 100, hide: 400 }`, что позволяет отображать и скрывать различные задержки                                                    | `0` и выше, только целые числа.                                                                                                                        |
| `offset`             | `0`              | Сместить центр всплывающего окна на указанное количество пикселей. Также влияет на положение стрелки всплывающего окна.                                                                                                                                             | Любое отрицательное или положительное целое число                                                                                                      |
| `container`          | `null`           | Идентификатор строки элемента для добавления визуализированного всплывающего окна. Если `null` или элемент не найден, всплывающее окно добавляется к `<body>` (по умолчанию)                                                                                        | Любой действительный уникальный идентификатор элемента в документе.                                                                                    |
| `boundary`           | `'scrollParent'` | Контейнер, в котором всплывающее окно будет визуально ограничено. В большинстве случаев должно быть достаточно значения по умолчанию, но вам может потребоваться изменить его, если ваш целевой элемент находится в небольшом контейнере с прокруткой переполнения. | `'scrollParent'` (по умолчанию), `'viewport'`, `'window'` или ссылка на элемент HTML.                                                                  |
| `boundary-padding`   | `5`              | Количество пикселей, используемое для определения минимального расстояния между границами и всплывающим окном. Это гарантирует, что всплывающее окно всегда будет иметь небольшой отступ между краями своего контейнера.                                            | Любое положительное число                                                                                                                              |
| `variant`            | `null`           | Контекстный вариант цвета всплывающего окна                                                                                                                                                                                                                         | Название любого контекстного варианта цвета темы                                                                                                       |
| `custom-class`       | `null`           | Пользовательское имя класса для применения к элементу внешней оболочки всплывающего окна                                                                                                                                                                            | Строка                                                                                                                                                 |
| `id`                 | `null`           | Идентификатор для использования в корневом элементе всплывающего окна. Если ничего не указано, оно будет сгенерировано автоматически. Если вы предоставляете идентификатор, он _должен_ быть уникальным на отображаемой странице.                                   | Действительная строка уникального идентификатора элемента                                                                                              |

### Варианты и пользовательский класс

Всплывающие окна BootstrapVue поддерживают контекстные цветовые варианты через наш собственный CSS,
через свойство `variant`:

```html
<div class="text-center">
  <b-button id="popover-button-variant" href="#" tabindex="0">Кнопка</b-button>
  <b-popover target="popover-button-variant" variant="danger" triggers="focus">
    <template #title>Опасность!</template>
    Опасный вариант всплывающего окна
  </b-popover>
</div>

<!-- b-popover-variant.vue -->
```

Варианты темы Bootstrap по умолчанию: `danger`, `warning`, `success`, `primary`, `secondary`,
`info`, `light` и `dark`. Вы можете изменить или добавить дополнительные варианты через Bootstrap
[переменные SCSS](/docs/reference/theming)

Пользовательский класс можно применить к внешней оболочке всплывающего окна `<div>` с помощью
свойства `custom-class`:

```html
<div class="text-center">
  <b-button id="my-button">Кнопка</b-button>
  <b-popover target="my-button" custom-class="my-popover-class">
    <template #title>Заголовок всплывающего окна</template>
    Контент всплывающего окна
  </b-popover>
</div>
```

`variant` и `custom-class` являются реактивными и могут быть изменены, пока всплывающее окно
открыто.

Смотрите документацию [директива всплывающего окна](/docs/directives/popover) о применении вариантов
и пользовательского класса к версии директивы.

### Программно показать и скрыть всплывающее окно

Вы можете вручную управлять видимостью всплывающего окна с помощью синхронизируемой логической
переменной `show`. Установка значения `true` покажет всплывающее окно, а установка значения `false`
скроет всплывающее окно.

```html
<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-sync" variant="primary">У меня есть поповер</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="show = !show">Переключить всплывающее окно</b-button>

      <b-popover :show.sync="show" target="popover-button-sync" title="Поповер">
        Привет <strong>Мир!</strong>
      </b-popover>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<!-- b-popover-show-sync.vue -->
```

Программное управление также может быть затронуто отправкой событий `'open'` и `'close'` во
всплывающее окно по ссылке.

```html
<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-event" variant="primary">У меня есть поповер</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onOpen">Открыть</b-button>
      <b-button class="px-1" @click="onClose">Закрыть</b-button>
    </div>

    <b-popover ref="popover" target="popover-button-event" title="Поповер">
      Привет <strong>Мир!</strong>
    </b-popover>
  </div>
</template>

<script>
  export default {
    methods: {
      onOpen() {
        this.$refs.popover.$emit('open')
      },
      onClose() {
        this.$refs.popover.$emit('close')
      }
    }
  }
</script>

<!-- b-popover-show-event.vue -->
```

Чтобы всплывающее окно отображалось при начальном рендеринге, просто добавьте свойство `show` в
`<b-popover>`:

```html
<div class="text-center">
  <b-button id="popover-button-open" variant="primary">Кнопка</b-button>

  <b-popover show target="popover-button-open" title="Поповер">
    Я начинаю <strong>открывать</strong>
  </b-popover>
</div>

<!-- b-popover-show-open.vue -->
```

Всплывающее окно, открытое программно через свойство 'show' или вызовом события, может быть закрыто
только программно. Встроенные триггеры будут работать некорректно, т.к. событие триггера попытается
открыть поповер, даже если он уже открыт.

В приведенном ниже примере, когда первый Popover открывается с помощью события 'open', потребуется
два нажатия кнопки, чтобы закрыть его. Поиграйте с приведенной ниже демонстрацией, чтобы понять это.
Если вам нужна изящная обработка как программного управления компонентом Popover, так и триггеров
взаимодействия с пользователем, вам следует отключить встроенные триггеры и управлять управлением
самостоятельно, как показано во втором Popover.

```html
<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-manual-1" variant="primary" ref="button">Ненадежный</b-button>

      <b-popover target="popover-manual-1" :show.sync="pop1" triggers="click">
        Иногда я могу быть упрямым.
      </b-popover>
    </div>

    <div class="p-2">
      <b-button id="popover-manual-2" variant="primary" ref="button" @click="pop2 = !pop2">
        Комфортное онемение
      </b-button>

      <b-popover target="popover-manual-2" :show.sync="pop2" triggers="">
        Я верю, что это работает, хорошо.
      </b-popover>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="popOpen">Открыть</b-button>
      <b-button class="px-1" @click="popClose">Закрыть</b-button>
      <b-button class="px-1" @click="popToggle">Переключить</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pop1: false,
        pop2: false
      }
    },
    methods: {
      popOpen() {
        this.pop1 = this.pop2 = true
      },
      popClose() {
        this.pop1 = this.pop2 = false
      },
      popToggle() {
        this.pop1 = !this.pop1
        this.pop2 = !this.pop2
      }
    }
  }
</script>

<!-- b-popover-advanced-caution.vue -->
```

Вы также можете использовать события `$root` для запуска показа и скрытия всплывающих окон.
Дополнительные сведения см. в разделе **Скрытие и отображение всплывающих окон с помощью \$root
событий** ниже.

### Программное отключение всплывающих окон

Вы можете отключить всплывающее окно с помощью синхронизируемого логического свойства `disabled`
(значение по умолчанию — `false`) установка его в `true` отключит всплывающее окно. Если всплывающее
окно в настоящее время видимо, когда для параметра `disabled` установлено значение `false`, оно
останется видимым до тех пор, пока не будет включено или программно закрыто. Если всплывающее окно
отключено/включено с помощью \$root событий (смотрите ниже), ваше значение `disabled` будет
обновлено, если вы указали модификатор свойства `.sync`.

```html
<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-disable" variant="primary">У меня есть поповер</b-button>
    </div>

    <div class="p-2">
      <b-button @click="disabled = !disabled">
        {{ disabled ? 'Enable' : 'Disable' }} Поповер по свойству
      </b-button>
      <b-button @click="disableByRef">
        {{ disabled ? 'Enable' : 'Disable' }} Поповер по событию $ref
      </b-button>

      <b-popover
        :disabled.sync="disabled"
        target="popover-button-disable"
        title="Поповер"
        ref="popover"
      >
        Привет <strong>Мир!</strong>
      </b-popover>
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
          this.$refs.popover.$emit('enable')
        } else {
          this.$refs.popover.$emit('disable')
        }
      }
    }
  }
</script>

<!-- b-popover-disable.vue -->
```

На программное управление также можно воздействовать, отправляя события `'enable'` и `'disable'` во
всплывающее окно по ссылке.

```html
<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-disable-event" variant="primary">У меня есть поповер</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onEnable">Включить</b-button>
      <b-button class="px-1" @click="onDisable">Отключить</b-button>
    </div>

    <b-popover ref="popover" target="popover-button-disable-event" title="Поповер">
      Привет <strong>Мир!</strong>
    </b-popover>
  </div>
</template>

<script>
  export default {
    methods: {
      onEnable() {
        this.$refs.popover.$emit('enable')
      },
      onDisable() {
        this.$refs.popover.$emit('disable')
      }
    }
  }
</script>

<!-- b-popover-disabled-event.vue -->
```

Когда отключено, всплывающее окно можно открыть программно (через свойство `show`, методы или
события).

Вы также можете использовать события `$root` для включения и отключения всплывающих окон.
Дополнительные сведения см. в разделе **Отключение и включение всплывающих окон с помощью \$root
событий** ниже.

## Использование директивы `v-b-popover`

Просто нужны быстрые всплывающие окна без лишней разметки? Используйте
[директиву `v-b-popover`](/docs/directives/popover):

```html
<div>
  <b-container fluid>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.top="'Popover!'" title="Заголовок" variant="primary">Top</b-button>
      </b-col>

      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.right="'Popover!'" title="Заголовок" variant="primary">Right</b-button>
      </b-col>

      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.left="'Popover!'" title="Заголовок" variant="primary">Left</b-button>
      </b-col>

      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.bottom="'Popover!'" title="Заголовок" variant="primary">Bottom</b-button>
      </b-col>
    </b-row>
  </b-container>
</div>

<!-- b-popover-directive-placement.vue -->
```

Обратитесь к документации [директивы `v-b-popover`](/docs/directives/popover) для получения
подробной информации об использовании директивы.

## Расширенное использование `<b-popover>` с реактивным контентом

Вы даже можете сделать содержимое `<b-popover>` интерактивным. Просто помните, что нельзя
использовать `focus` или триггеры (используйте только `click`).

Если вам абсолютно необходимо использовать триггер, отличный от `click` (или вы хотите отключить
закрытие всплывающего окна при повторном щелчке элемента триггера), вы можете:

- Слушайте событие `hide` элемента `<b-popover>` и вызовите метод `preventDefault()` при
  необходимости) для объекта `BvEvent`, переданного вашему обработчику `hide`;
- Отключите ваш триггерный элемент (если возможно), как только всплывающее окно начнет открываться
  (через событие `hide` или `hidden`).

Для практических целей **всплывающие окна с интерактивным контентом должны быть минимальными**.
Максимальная ширина всплывающего окна жестко закодирована в Bootstrap v4 CSS на `276px`. С высокими
всплывающими окнами на маленьких экранах может быть сложнее работать на мобильных устройствах (таких
как смартфоны).

```html
<template>
  <div id="my-container">
    <div class="my-3">
      <!-- Our triggering (target) element -->
      <b-button id="popover-reactive-1" variant="primary" ref="button">
        Реактивный контент с использованием слотов
      </b-button>
    </div>

    <!-- Output from the popover interaction -->
    <b-card title="Returned values:" v-if="input1Return && input2Return">
      <p class="card-text" style="max-width: 20rem;">
        Название: <strong>{{ input1Return }}</strong><br>
        Цвет: <strong>{{ input2Return }}</strong>
      </p>
    </b-card>

    <!-- Our popover title and content render container -->
    <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
    <!-- We specify the same container as the trigger button, so that popover is close to button -->
    <b-popover
      target="popover-reactive-1"
      triggers="click"
      :show.sync="popoverShow"
      placement="auto"
      container="my-container"
      ref="popover"
      @show="onShow"
      @shown="onShown"
      @hidden="onHidden"
    >
      <template #title>
        <b-button @click="onClose" class="close" aria-label="Close">
          <span class="d-inline-block" aria-hidden="true">&times;</span>
        </b-button>
        Интерактивный контент
      </template>

      <div>
        <b-form-group
          label="Name"
          label-for="popover-input-1"
          label-cols="3"
          :state="input1state"
          class="mb-1"
          description="Enter your name"
          invalid-feedback="This field is required"
        >
          <b-form-input
            ref="input1"
            id="popover-input-1"
            v-model="input1"
            :state="input1state"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Color"
          label-for="popover-input-2"
          label-cols="3"
          :state="input2state"
          class="mb-1"
          description="Pick a color"
          invalid-feedback="This field is required"
        >
          <b-form-select
            id="popover-input-2"
            v-model="input2"
            :state="input2state"
            :options="options"
            size="sm"
          ></b-form-select>
        </b-form-group>

        <b-alert show class="small">
          <strong>Текущие значения:</strong><br>
          Название: <strong>{{ input1 }}</strong><br>
          Цвет: <strong>{{ input2 }}</strong>
        </b-alert>

        <b-button @click="onClose" size="sm" variant="danger">Отменить</b-button>
        <b-button @click="onOk" size="sm" variant="primary">Хорошо</b-button>
      </div>
    </b-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input1: '',
        input1state: null,
        input2: '',
        input2state: null,
        options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
        input1Return: '',
        input2Return: '',
        popoverShow: false
      }
    },
    watch: {
      input1(val) {
        if (val) {
          this.input1state = true
        }
      },
      input2(val) {
        if (val) {
          this.input2state = true
        }
      }
    },
    methods: {
      onClose() {
        this.popoverShow = false
      },
      onOk() {
        if (!this.input1) {
          this.input1state = false
        }
        if (!this.input2) {
          this.input2state = false
        }
        if (this.input1 && this.input2) {
          this.onClose()
          // Return our popover form results
          this.input1Return = this.input1
          this.input2Return = this.input2
        }
      },
      onShow() {
        // This is called just before the popover is shown
        // Reset our popover form variables
        this.input1 = ''
        this.input2 = ''
        this.input1state = null
        this.input2state = null
        this.input1Return = ''
        this.input2Return = ''
      },
      onShown() {
        // Called just after the popover has been shown
        // Transfer focus to the first input
        this.focusRef(this.$refs.input1)
      },
      onHidden() {
        // Called just after the popover has finished hiding
        // Bring focus back to the button
        this.focusRef(this.$refs.button)
      },
      focusRef(ref) {
        // Some references may be a component, functional component, or plain element
        // This handles that check before focusing, assuming a `focus()` method exists
        // We do this in a double `$nextTick()` to ensure components have
        // updated & popover positioned first
        this.$nextTick(() => {
          this.$nextTick(() => {
            ;(ref.$el || ref).focus()
          })
        })
      }
    }
  }
</script>

<!-- b-popover-advanced.vue -->
```

## 'Global' события экземпляра \$root

Используя экземпляр `$root` , можно генерировать и прослушивать события где-то вне компонента, где
используется `<b-collapse>`. Короче говоря, `$root` ведет себя как глобальный источник и слушатель
событий. Подробности об экземпляре `$root` можно найти в
[официальной документации Vue](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-the-Root-Instance).

### Скрытие и отображение всплывающих окон с помощью событий \$root

Вы можете закрыть (скрыть) **все открытые всплывающие окна**, создав событие `bv::hide::popover` в
\$root:

```js
this.$root.$emit('bv::hide::popover')
```

Чтобы закрыть **определенное всплывающее окно**, передайте `id` триггерного элемента или `id`
всплывающего окна (если он был предоставлен через свойство `id`) в качестве первого аргумента:

```js
this.$root.$emit('bv::hide::popover', 'my-trigger-button-id')
```

Чтобы открыть (показать) **определенное всплывающее окно**, передайте `id` триггерного элемента или
`id` всплывающего окна (если он был предоставлен через свойство `id`) в качестве первого аргумента
при создании события `bv::show::popover`:

```js
this.$root.$emit('bv::show::popover', 'my-trigger-button-id')
```

Чтобы открыть все всплывающие окна одновременно, опустите аргумент `id` при генерации события
`bv::show::popover`.

Эти события работают как для версии компонента \*\*, так и для версии директивы popover.

**Примечание:** _**Элемент триггера** должен существовать в DOM и находиться в видимом состоянии,
чтобы всплывающее окно могло создаваться и отображаться._

### Отключение и включение всплывающих окон с помощью событий \$root

Вы можете отключить **все** всплывающие окна, создав событие `bv::disable::popover` на \$root:

```js
this.$root.$emit('bv::disable::popover')
```

Чтобы отключить **определенное всплывающее окно**, передайте `id` триггерного элемента или `id`
всплывающего окна (если он был предоставлен через свойство `id`) в качестве первого аргумента:

```js
this.$root.$emit('bv::disable::popover', 'my-trigger-button-id')
```

Чтобы включить **определенное всплывающее окно**, передайте `id` триггерного элемента или `id`
всплывающего окна (если он был предоставлен через свойство `id`) в качестве первого аргумента при
создании события `bv::enable::popover`:

```js
this.$root.$emit('bv::enable::popover', 'my-trigger-button-id')
```

Чтобы включить все всплывающие окна одновременно, опустите аргумент `id` при генерации события
`bv::enable::popover`.

Эти события работают как для компонентной, так и для директивной версии popover.

**Примечание:** _Элемент **триггера** должен существовать в DOM, чтобы всплывающее окно было
включено или отключено._

### Прослушивание изменений всплывающих окон с помощью событий \$root

Чтобы прослушать любое всплывающее окно, используйте:

```js
export default {
  mounted() {
    this.$root.$on('bv::popover::show', bvEventObj => {
      console.log('bvEventObj:', bvEventObj)
    })
  }
}
```

Полный список событий см. в разделе документации
[Событий](/docs/components/popover#component-reference).

## Доступность

Всплывающие окна в их текущей реализации не слишком доступны при использовании в качестве
интерактивных компонентов. Контент не может активно читаться пользователями программ чтения с
экрана, а разметка всплывающего окна может располагаться не близко к элементу-триггеру в DOM
(поскольку всплывающие окна обычно добавляются в конец `<body>`).

При использовании всплывающих окон в качестве интерактивного компонента вы должны по возможности
переносить фокус в всплывающее окно. Когда всплывающее окно закрывается, вы должны вернуть фокус
обратно на ваш триггерный элемент (при условии, что `focus` не используется в качестве метода
триггера), как мы сделали в приведенном выше примере.

Вы также можете захотеть реализовать сдерживание фокуса в содержимом всплывающего окна, пока
пользователь взаимодействует с ним (удерживая фокус внутри всплывающего окна, пока оно не будет
закрыто пользователем).

**Примечание:** Эффект анимации этого компонента зависит от медиа-запроса `prefers-reduced-motion`.
Дополнительную информацию см. в
[разделе с уменьшенным движением в нашей документации по специальным возможностям](/docs/reference/accessibility).

### Настройка всплывающих окон для пользователей клавиатуры и вспомогательных технологий

Чтобы позволить пользователям клавиатуры активировать ваши всплывающие окна, вы должны добавлять их
только к элементам HTML, которые традиционно являются интерактивными и ориентированными на
клавиатуру (такими как ссылки или элементы управления формы). Хотя произвольные элементы HTML (такие
как `<span>`) можно сделать фокусируемыми, добавив атрибут `tabindex="0"`, это добавит потенциально
раздражающие и запутанные позиции табуляции на неинтерактивных элементах для пользователей
клавиатуры, и большинство вспомогательные технологии в настоящее время не объявляют содержимое
всплывающего окна в этой ситуации. Кроме того, не полагайтесь исключительно на `hover` в качестве
триггера для ваших всплывающих окон, так как это сделает их невозможными для пользователей
клавиатуры.

Хотя вы можете вставлять богатый структурированный HTML и/или компоненты во всплывающие окна через
слоты, мы настоятельно рекомендуем вам избегать добавления чрезмерного количества контента. В
настоящее время всплывающие окна работают следующим образом: после отображения их содержимое
привязывается к элементу триггера с атрибутом `aria-describedby`. В результате все содержимое
всплывающего окна будет объявлено (прочитано) пользователям вспомогательных технологий как один
длинный непрерывный поток.

Кроме того, хотя в всплывающее окно можно также включать интерактивные элементы управления (такие
как элементы формы или ссылки), имейте в виду, что в настоящее время всплывающее окно не управляет
порядком фокуса клавиатуры. Когда пользователь с клавиатурой открывает всплывающее окно, фокус
остается на вызывающем его элементе, и, поскольку всплывающее окно обычно не следует сразу за
триггером в структуре документа, нет гарантии, что перемещение вперед/нажатие <kbd>Tab</kbd>
приведет к перемещению. пользователя клавиатуры в самом всплывающем окне. Короче говоря, простое
добавление интерактивных элементов управления во всплывающее окно, вероятно, сделает эти элементы
управления недоступными/непригодными для пользователей клавиатуры и пользователей вспомогательных
технологий или, по крайней мере, приведет к нелогичному общему порядку фокуса. **В этих случаях
рассмотрите возможность использования вместо этого диалогового окна `<b-modal>`**.

<!-- Component reference added automatically from component package.json -->
