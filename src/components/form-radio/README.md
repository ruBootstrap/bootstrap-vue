# Радио ввод формы

> Для согласованности между браузерами, `<b-form-radio-group>` и `<b-form-radio>` используют пользовательский радио-ввод Bootstrap, чтобы заменить радио-ввод браузера по умолчанию.
> Он построен на основе семантической и доступной разметки, поэтому является надежной заменой радио-ввода по умолчанию.

## Индивидуальные радио

```html
<template>
  <div>
    <b-form-group label="Индивидуальные радио" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Option A</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Option B</b-form-radio>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: ''
      }
    }
  }
</script>

<!-- b-form-radio.vue -->
```

## Сгруппированные радио

Отдельные радио-вводы в `<b-form-radio-group>` могут быть указаны с помощью свойства `options` или путем ручного размещения подкомпонента `<b-form-radio>`. При использовании вручную размещенных компонентов `<b-form-radio>` внутри `<b-form-radio-group>`, они унаследуют большинство свойств и v-model от `<b-form-radio-group>`.

```html
<template>
  <div>
    <b-form-group label="Radios using options" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Radios using sub-components" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="radio-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="radio-sub-component"
      >
        <b-form-radio value="first">Toggle this custom radio</b-form-radio>
        <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
        <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
        <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'Toggle this custom radio', value: 'first' },
          { text: 'Or toggle this other custom radio', value: 'second' },
          { text: 'This one is Disabled', value: 'third', disabled: true },
          { text: 'This is the 4th radio', value: { fourth: 4 } }
        ]
      }
    }
  }
</script>

<!-- b-form-radio-group.vue -->
```

Не стесняйтесь комбинировать и сопоставлять свойство `options` и `<b-form-radio>` в `<b-form-radio-group>`. Помещенные вручную вводы `<b-form-radio>` будут появляться _под_ любыми радио-вводами, сгенерированными свойством `options`.
Чтобы они отображались _выше_ входов, созданных с помощью `options`, поместите их в именованный слот `first`.

```html
<template>
  <div>
    <b-form-group label="Radios using options and slots" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="radio-slots"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
        <!-- Radios in this slot will appear first -->
        <template #first>
          <b-form-radio value="first">Toggle this custom radio from slot first</b-form-radio>
        </template>

        <!-- Radios in the default slot will appear after any option generated radios -->
        <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio>
        <b-form-radio value="fifth">This is the 5th radio</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: '',
        options: [
          { text: 'Or toggle this other custom radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    }
  }
</script>

<!-- b-form-radio-group-slot.vue -->
```

## Массив опций радиогруппы

`options` могут быть массивом строк или объектов. Доступные поля:

- **`value`** Выбранное значение, которое будет установлено на `v-model`
- **`disabled`** Отключает элемент для выбора
- **`text`** Отображает текст или **`html`** Отображает базовый встроенный HTML-код

`value` может быть строкой, числом или простым объектом. Избегайте использования сложных типов в значениях.

Если указаны и `html` и `text`, `html` приоритет будет иметь. В поле `html` поддерживается только базовый/собственный HTML (компоненты работать не будут). Обратите внимание, что не все браузеры будут отображать встроенный html (т. е. `<i>`, `<strong>` и т. д.) внутри элементов `<option>` в `<select>`.

<p class="alert alert-danger">
  <strong>Будьте осторожны</strong> при размещении пользовательского контента в поле <code>html</code>, поскольку это может сделать вас уязвимыми для
  <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
  <abbr title="Cross Site Scripting Attacks">XSS атак</abbr></a>, если вы сначала не
  <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">обезопасить</a> введенную пользователем строку.
</p>

<!-- eslint-disable no-unused-vars -->

```js
const options = ['A', 'B', 'C', { text: 'D', value: { d: 1 }, disabled: true }, 'E', 'F']
```

Если запись массива является строкой, она будет использоваться как для сгенерированных полей `value` и `text`.

Вы можете смешивать, используя строки и [объекты](#options-as-an-array-of-objects) в массиве.

Внутри BootstrapVue преобразует указанный выше массив в следующий формат (формат [массив объектов](#options-as-an-array-of-objects)):

<!-- eslint-disable no-unused-vars -->

```js
const options = [
  { text: 'A', value: 'A', disabled: false },
  { text: 'B', value: 'B', disabled: false },
  { text: 'C', value: 'C', disabled: false },
  { text: 'D', value: { d: 1 }, disabled: true },
  { text: 'E', value: 'E', disabled: false },
  { text: 'F', value: 'F', disabled: false }
]
```

### Параметры как массив объектов

<!-- eslint-disable no-unused-vars -->

```js
const options = [
  { text: 'Item 1', value: 'first' },
  { text: 'Item 2', value: 'second' },
  { html: '<b>Item</b> 3', value: 'third', disabled: true },
  { text: 'Item 4' },
  { text: 'Item 5', value: { foo: 'bar', baz: true } }
]
```

Если `value` отсутствует, то `text` будет использоваться как полей `value` и `text`. Если вы используете свойство `html`, вы **должны** предоставить свойство `value`.

Внутри BootstrapVue преобразует указанный выше массив в следующий формат (формат [массив объектов](#options-as-an-array-of-objects)):

<!-- eslint-disable no-unused-vars -->

```js
const options = [
  { text: 'Item 1', value: 'first', disabled: false },
  { text: 'Item 2', value: 'second', disabled: false },
  { html: '<b>Item</b> 3', value: 'third', disabled: true },
  { text: 'Item 4', value: 'Item 4', disabled: false },
  { text: 'Item 5', value: 'E', disabled: false }
]
```

### Изменение названий полей опций

Если вы хотите настроить имена свойств поля (например, используя поле `name` для отображения `text`), вы можете легко изменить их, установив `text-field`, `html-field`, `value-field` и `disabled-field` прописывает строку, содержащую имя свойства, которое вы хотели бы использовать:

```html
<template>
  <div>
    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-radio-group>
    <div class="mt-3">Выбранное: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'A',
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
        ]
      }
    }
  }
</script>

<!-- b-form-radio-group-options-fields.vue -->
```

## Значение радио и v-model

Компоненты `<b-form-radio>` не имеют значения по умолчанию. Вы должны явно указать значение через свойство `value` в `<b-form-radio>`. Это значение будет отправлено в `v-model`, когда радио будет проверено.

`v-model` как `<b-form-radio>`, так и `<b-form-radio-group>` привязывается к свойству `checked`. Чтобы предварительно проверить радио, вы должны установить значение `v-model` равным одному из значений радио (т.е. должно соответствовать значению, указанному в одном из параметра `value`). Не используйте свойство `checked` напрямую. Каждый радиомодуль в радиогруппе должен иметь уникальное значение.

Радио поддерживают значения многих типов, такие как  `string`, `boolean`, `number` или простой `object`.

## Инлайновые и стековые радио

По умолчанию `<b-form-radio-group>` генерирует встроенные радио, а `<b-form-radio>` генерирует сложенные радио. Установите свойство `stacked` на `<b-form-radio-group>`, чтобы радиостанции появлялись одно над другим, или при использовании радиостанций не в группе, установите свойство `inline` на `b-form-radio` значение `true`, чтобы сделать их встроенными.

```html
<template>
  <div>
    <b-form-group label="Inline radios (default)" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Stacked radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    }
  }
</script>

<!-- b-form-radio-stacked.vue -->
```

## Размеры элементов

Используйте опцию `size` для управления размером радио. Размер по умолчанию - средний. Поддерживаемые значения размера: `sm` (маленький) и `lg` (большой).

```html
<div>
  <b-form-radio name="radio-size" size="sm">Маленький</b-form-radio>
  <b-form-radio name="radio-size">По умолчанию</b-form-radio>
  <b-form-radio name="radio-size" size="lg">Большой</b-form-radio>
</div>

<!-- form-radio-sizes.vue -->
```

Размеры могут быть заданы для отдельных компонентов `<b-form-radio>` или унаследованы от параметра `size` в `<b-form-radio-group>`.

**Примечание:** Bootstrap v4.x изначально не поддерживает размеры для настраиваемых элементов управления радио. Однако BootstrapVue включает настраиваемый SCSS/CSS, который добавляет поддержку для изменения размера настраиваемых радио.

## Радио кнопочного типа

Визуализируйте радио как кнопки, установив для свойства `buttons` значение `true` в `<b-form-radio-group>`. Установите вариант кнопки, установив для свойства `button-variant` один из стандартных вариантов кнопки Bootstrap (смотрите [`<b-button>`](/docs/components/button) для поддерживаемых вариантов). По умолчанию `button-variant` является `secondary`.

Свойство `buttons` имеет приоритет над `plain`, а `button-variant` не имеет никакого эффекта, если `buttons` не установлено.

Радио в стиле кнопки будут иметь класс `.active`, автоматически примененный к их метке, когда они находятся в отмеченном состоянии.

```html
<template>
  <div>
    <b-form-group label="Button style radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Button style radios with outline-primary variant and size lg"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
        buttons
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Stacked button style radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-btn-stacked"
        buttons
        stacked
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'radio1',
        options: [
          { text: 'Radio 1', value: 'radio1' },
          { text: 'Radio 3', value: 'radio2' },
          { text: 'Radio 3 (disabled)', value: 'radio3', disabled: true },
          { text: 'Radio 4', value: 'radio4' }
        ]
      }
    }
  }
</script>

<!-- b-form-radio-buttons.vue -->
```

## Радиовводы нестандартного стиля (простые)

Вы можете сделать так, чтобы `<b-form-radio>` и `<b-form-radio-group>` отображали радио-ввод в собственном стиле браузера, установив свойство `plain`.

```html
<template>
  <div>
    <b-form-group label="Plain inline radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="plain-inline"
        plain
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Plain stacked radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="plain-stacked"
        plain
        stacked
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    }
  }
</script>

<!-- b-form-radio-plain.vue -->
```

**Примечание:** `plain` не будет иметь никакого эффекта, если установлено `buttons`/`button`.

## Требуемое ограничение

При использовании отдельных компонентов `<b-form-radio>` (не в `<b-form-radio-group>`), и вы хотите, чтобы радио были `required` в вашей форме, вы **должен** предоставлять `name` для каждого `<b-form-radio>` для того, чтобы требуемое ограничение работало. Все компоненты `<b-form-radio>`, связанные с одной и той же `v-model`, **должны** иметь одинаковое `name`.

`name` требуется для того, чтобы вспомогательные технологии (такие как программы чтения с экрана и пользователи, использующие только клавиатуру) могли знать, какие радиостанции принадлежат одной и той же переменной формы (имя также автоматически включает встроенную навигацию с клавиатуры браузера), поэтому `required` будет только работать, если установлено `name`.
`<b-form-radio-group>` автоматически сгенерирует уникальное имя входа, если оно не указано в группе.

## Автофокус

Когда свойство `autofocus` установлено на `<b-form-radio>`, вход будет автоматически сфокусирован, когда он вставлен (т.е. **установлен**) в документ или повторно активирован, когда он находится внутри компонента Vue `<keep-alive>`. Обратите внимание, что это свойство **не** устанавливает атрибут `autofocus` на входе и не может сказать, когда ввод становится видимым.

## Контекстные состояния

Bootstrap включает стили проверки `valid` и `invalid` состояний для большинства элементов управления формой.

Вообще говоря, вы захотите использовать определенное состояние для определенных типов обратной связи:

- `false` (обозначает недопустимое состояние) отлично подходит, когда есть блокирующее или обязательное поле. Пользователь должен правильно заполнить это поле, чтобы отправить форму.
- `true` (обозначает действительное состояние) идеально подходит для ситуаций, когда у вас есть проверка по каждому полю во всей форме и вы хотите поощрить пользователя через остальные поля.
- `null` Не отображает состояние проверки (ни действительное, ни недействительное)

Чтобы применить один из значков контекстного состояния на `<b-form-radio>`, установите для свойства `state` значение `false` (для недопустимого), `true` (для допустимого) или `null` (состояние проверки отсутствует).

**Примечание:** Контекстное состояние не поддерживается для радиостанций, отображаемых в режиме кнопок.

### Контекстное состояние с примером обратной связи

```html
<template>
  <div>
    <b-form-radio-group v-model="value" :options="options" :state="state" name="radio-validation">
      <b-form-invalid-feedback :state="state">Пожалуйста, выберите один</b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">Спасибо</b-form-valid-feedback>
    </b-form-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null,
        options: [
          { text: 'Первое радио', value: 'first' },
          { text: 'Второе радио', value: 'second' },
          { text: 'Третье радио', value: 'third' }
        ]
      }
    },
    computed: {
      state() {
        return Boolean(this.value)
      }
    }
  }
</script>

<!-- b-form-radio-validation.vue -->
```

### Передача состояния контекстной проверки вспомогательным технологиям и пользователям с дальтонизмом

Использование этих контекстных состояний для обозначения состояния элемента управления формы обеспечивает только визуальную цветовую индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана, или пользователям с дальтонизмом.

Убедитесь, что также имеется альтернативная индикация состояния. Например, вы можете включить подсказку о состоянии в самом тексте элемента управления формой `<label>` или путем предоставления дополнительного текстового блока справки (например, `<b-form-invalid-feedback>`). В частности, для вспомогательных технологий недопустимым элементам управления формой также может быть назначен атрибут `aria-invalid="true"` (смотрите ниже).

### Атрибут ARIA `aria-invalid`

Когда `<b-form-radio-group>` имеет недопустимое контекстное состояние (т.е. state = `false`), вам также может потребоваться
для установки `<b-form-radio-group>` свойства `aria-invalid` значение `true`.

Поддерживаемые значения `aria-invalid`:

- `false` (по умолчанию) Ошибок не обнаружено
- `true` Значение не прошло проверку.

`aria-invalid` автоматически устанавливается в `true`, если свойство `state` имеет значение `false`.

<!-- Component reference added automatically from component package.json -->
