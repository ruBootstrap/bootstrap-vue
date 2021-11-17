# Меню выбора формы

> Пользовательский Bootstrap элемент `<select>` с использованием пользовательских стилей. При необходимости укажите параметры на основе массива, массива объектов или объекта.

Сгенерируйте ваши опции выбора, передав массив или объект в свойства `options`:

```html
<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Пожалуйста, выберите опцию' },
          { value: 'a', text: 'Это первая опция' },
          { value: 'b', text: 'Выбранная опция' },
          { value: { C: '3PO' }, text: 'Эта опция со значением объекта' },
          { value: 'd', text: 'Эта одна отключена', disabled: true }
        ]
      }
    }
  }
</script>

<!-- b-form-select-options.vue -->
```

Вы даже можете определить группы опций с помощью свойства `options`:

```html
<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Пожалуйста, выберите опцию' },
          { value: 'a', text: 'Это первая опция' },
          { value: 'b', text: 'Выбранная опция', disabled: true },
          {
            label: 'Сгруппированные опции',
            options: [
              { value: { C: '3PO' }, text: 'Опция со значением объекта' },
              { value: { R: '2D2' }, text: 'Другая опция со значением объекта' }
            ]
          }
        ]
      }
    }
  }
</script>

<!-- b-form-select-options.vue -->
```

Или укажите свои параметры и группы параметров вручную:

```html
<template>
  <div>
    <b-form-select v-model="selected" class="mb-3">
      <b-form-select-option :value="null">Пожалуйста, выберите опцию</b-form-select-option>
      <b-form-select-option value="a">Опция A</b-form-select-option>
      <b-form-select-option value="b" disabled>Опция B (отключена)</b-form-select-option>
      <b-form-select-option-group label="Сгруппированные опции">
        <b-form-select-option :value="{ C: '3PO' }">Опция со значением объекта</b-form-select-option>
        <b-form-select-option :value="{ R: '2D2' }">Другая опция со значением объекта</b-form-select-option>
      </b-form-select-option-group>
    </b-form-select>

    <div class="mt-2">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null
      }
    }
  }
</script>

<!-- b-form-select-manual.vue -->
```

Не стесняйтесь смешивать опцию `options` с `<b-form-select-option>` и `<b-form-select-option-group>`. Параметры и группы параметров, размещенные вручную, появятся _под_ параметрами, созданными с помощью свойства `options`. Чтобы разместить ручные опции и группы опций _выше_ опций, заданных опцией `options`, используйте именованный слот `first`.

```html
<template>
  <div>
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <!-- Этот слот появляется над опциями из свойства 'options' -->
      <template #first>
        <b-form-select-option :value="null" disabled>-- Пожалуйста, выберите опцию --</b-form-select-option>
      </template>

      <!-- Эти параметры появятся после параметров из свойства 'options' -->
      <b-form-select-option value="C">Опция C</b-form-select-option>
      <b-form-select-option value="D">Опция D</b-form-select-option>
    </b-form-select>

    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: 'A', text: 'Опция A (из свойства опций)' },
          { value: 'B', text: 'Опция B (из свойства опций)' }
        ]
      }
    }
  }
</script>

<!-- b-form-select-both.vue -->
```

## Свойство Options

`options` может быть массивом строк или объектов или объектом значения ключа. Доступные поля:

- **`value`** Выбранное значение, которое будет установлено на `v-model`
- **`disabled`** Отключает элемент для выбора
- **`text`** Отображать текст или **`html`** Отображать базовый инлайновый html

`value` может быть строкой, числом или простым объектом. Избегайте использования сложных типов в значениях.

Если указаны и `html`, и `text`, приоритет будет иметь `html`. В поле `html` поддерживается только базовый / собственный HTML (компоненты работать не будут). Обратите внимание, что не все браузеры будут отображать встроенный html (т.е. `<i>`, `<strong>` и т. д.). Внутри элементов `<option>` элемента `<select>`.

<p class="alert alert-danger">
  <strong>Будьте осторожны</strong> при размещении пользовательского контента в поле <code>html</code>, поскольку это может сделать вас уязвимыми для
  <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
  <abbr title="Атаки межсайтового скриптинга">XSS-атаки</abbr></a>, если вы сначала не
  <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">очистите</a> строку, введенную пользователем.
</p>

### Опции как массив

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
  { text: 'Элемент 1', value: 'first' },
  { text: 'Элемент 2', value: 'second' },
  { html: '<b>Элемент</b> 3', value: 'third', disabled: true },
  { text: 'Элемент 4' },
  { text: 'Элемент 5', value: { foo: 'bar', baz: true } }
]
```

Если `value` отсутствует, то `text` будет использоваться как поля `value` и `text`. Если вы используете свойство `html`, вы **должны** предоставить свойство `value`.

<span class="badge badge-info">Новое в версии 2.2.0</span> Чтобы определить группы опций, просто добавьте объект со свойством `label` в качестве имени группы и свойством `options` с массивом опций группы.

<!-- eslint-disable no-unused-vars -->

```js
const options = [
  { text: 'Элемент 1', value: 'first' },
  { text: 'Элемент 2', value: 'second' },
  {
    label: 'Сгруппированные опции',
    options: [{ html: '<b>Элемент</b> 3', value: 'third', disabled: true }, { text: 'Элемент 4' }]
  },
  { text: 'Элемент 5', value: { foo: 'bar', baz: true } }
]
```

### Опции как объект

<span class="badge badge-warning">Устарело</span>

Ключи отображаются в `value`, а значения отображаются в параметр `text`.

<!-- eslint-disable no-unused-vars -->

```js
const options = {
  a: 'Элемент A',
  b: 'Элемент B',
  c: { html: 'Элемент C', disabled: true },
  d: { text: 'Элемент D', value: 'overridden_value' },
  e: { text: 'Элемент E', value: { foo: 'bar', baz: true } }
}
```

Внутри BootstrapVue преобразует указанный выше объект в следующий формат (формат [массив объектов](#options-as-an-array-of-objects)):

<!-- eslint-disable no-unused-vars -->

```js
const options = [
  { text: 'Элемент A', value: 'a', disabled: false },
  { text: 'Элемент B', value: 'b', disabled: false },
  { html: 'Элемент C', value: 'c', disabled: false },
  { text: 'Элемент D', value: 'overridden_value', disabled: true },
  { text: 'Элемент E', value: { foo: 'bar', baz: true }, disabled: false }
]
```

**Примечание:** При использовании формата объекта порядок окончательного массива **не** гарантирован. По этой причине рекомендуется использовать любой из ранее упомянутых форматов массивов.

### Изменение названий полей опций

Если вы хотите настроить имена свойств поля (например, используя поле `name` для отображения `text`), вы можете легко изменить их, установив `text-field`, `html-field`, `value-field` и `disabled-field` прописывает строку, содержащую имя свойства, которое вы хотите использовать:

```html
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>

    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'A',
        options: [
          { item: 'A', name: 'Опция A' },
          { item: 'B', name: 'Опция B' },
          { item: 'D', name: 'Опция C', notEnabled: true },
          { item: { d: 1 }, name: 'Опция D' }
        ]
      }
    }
  }
</script>

<!-- b-form-select-options-fields.vue -->
```

### Примечания опции

Если начальное значение вашего выражения `v-model` не соответствует ни одному из параметров, компонент `<b-form-select>` (который является встроенным в HTML5 `<select>`) будет отображаться в _не выбранное_ состояние.
В iOS это приведет к тому, что пользователь не сможет выбрать первый элемент, потому что iOS в этом случае не запускает событие изменения.
Поэтому рекомендуется в качестве первого варианта указать отключенный параметр с пустым значением.

```html
<b-form-select v-model="selected" :options="options">
  <template #first>
    <b-form-select-option value="" disabled>-- Пожалуйста, выберите опцию --</b-form-select-option>
  </template>
</b-form-select>
```

Дополнительную информацию смотрите в документации [Vue select](https://vuejs.org/v2/guide/forms.html#Select).

## Стандартный (одиночный) выбор

По умолчанию применяется настраиваемый стиль выбора Bootstrap v4.

### Значение в одиночном режиме

В режиме, отличном от `multiple`, `<b-form-select>` возвращает единственное `value` текущей выбранной опции.

```html
<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Пожалуйста, выберите какой-нибудь элемент' },
          { value: 'a', text: 'Это первая опция' },
          { value: 'b', text: 'Выбранная опция по умолчанию' },
          { value: 'c', text: 'Это другая опция' },
          { value: 'd', text: 'Эта одна отключена', disabled: true }
        ]
      }
    }
  }
</script>

<!-- b-form-select-single.vue -->
```

### Размеры селекта (отображаемые строки)

Вы можете использовать свойство `select-size`, чтобы переключить пользовательский выбор в список выбора, а не в раскрывающийся список. Установите для свойства `select-size` числовое значение больше 1, чтобы контролировать количество видимых строк параметров.

Обратите внимание, когда для параметра `select-size` установлено значение больше 1, пользовательский стиль Bootstrap v4 **не** будет применяться, если также не установлено свойство `multiple`.

Обратите внимание, что не все мобильные браузеры отображают выбор в виде списка.

```html
<template>
  <div>
    <b-form-select v-model="selected" :options="options" :select-size="4"></b-form-select>
    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Пожалуйста, выберите какой-нибудь элемент' },
          { value: 'a', text: 'Это Опция a' },
          { value: 'b', text: 'Выбранная опция b по умолчанию' },
          { value: 'c', text: 'Это Опция c' },
          { value: 'd', text: 'Эта одна отключена', disabled: true },
          { value: 'e', text: 'Это Опция e' },
          { value: 'e', text: 'Это Опция f' }
        ]
      }
    }
  }
</script>

<!-- b-form-select-size.vue -->
```

## Поддержка множественного выбора

Включите режим множественного выбора, установив свойство `multiple`, и управляйте количеством строк, отображаемых в списке множественного выбора, установив `select-size` равным количеству отображаемых строк. По умолчанию браузер использует значение по умолчанию (обычно 4).

### Значение в режиме множественного выбора

В режиме `multiple`, `<b-form-select>` всегда возвращает массив значений параметров. Вы **должны** предоставить ссылку на массив в качестве `v-model` в режиме `multiple`.

```html
<template>
  <div>
    <b-form-select v-model="selected" :options="options" multiple :select-size="4"></b-form-select>
    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: ['b'], // Array reference
        options: [
          { value: 'a', text: 'Это первая опция' },
          { value: 'b', text: 'Выбранная опция по умочланию' },
          { value: 'c', text: 'Это другая опция' },
          { value: 'd', text: 'Эта одна отключена', disabled: true },
          { value: 'e', text: 'Это опция e' },
          { value: 'f', text: 'Это опция f' },
          { value: 'g', text: 'Это опция g' }
        ]
      }
    }
  }
</script>

<!-- b-form-select-multiple-mode.vue -->
```

## Размер контролов

Установите размер текста элемента управления формой, используя свойство `size` равное `sm` или `lg` для малых или больших соответственно.

По умолчанию `<b-form-select>` будет занимать всю ширину контейнера, в котором он появляется. Чтобы контролировать ширину выбора, поместите ввод внутри стандартного столбца сетки Bootstrap.

## Автофокус

Когда свойство `autofocus` установлено на `<b-form-select>`, выделение будет автоматически сфокусировано, когда оно вставлено (т.е. **mounted**) в документ или повторно активировано, когда оно находится внутри компонента Vue `<keep-alive>`. Обратите внимание, что эта опция **не** устанавливает атрибут `autofocus` для выбора и не может сказать, когда выбор становится видимым.

## Контекстные состояния

Bootstrap включает стили проверки `valid` и `invalid` состояний для большинства элементов управления формой.

Вообще говоря, вы захотите использовать определенное состояние для определенных типов обратной связи:

- `false` (обозначает недопустимое состояние) отлично подходит, когда есть блокирующее или обязательное поле. Пользователь должен правильно заполнить это поле, чтобы отправить форму.
- `true` (обозначает допустимое состояние) идеально подходит для ситуаций, когда у вас есть проверка по каждому полю во всей форме и вы хотите побудить пользователя пройти через остальные поля.
- `null` Не отображает состояние проверки (ни действительное, ни недействительное)

Чтобы применить один из значков контекстного состояния к `<b-form-select>`, установите для свойства `state` значение `false` (для недопустимого), `true` (для действительного) или `null` (состояние проверки отсутствует).

### Передача состояния контекстной проверки вспомогательным технологиям и пользователям с дальтонизмом

Использование этих контекстных состояний для обозначения состояния элемента управления формы обеспечивает только визуальную цветовую индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана, или пользователям с дальтонизмом.

Убедитесь, что также имеется альтернативная индикация состояния. Например, вы можете включить подсказку о состоянии в самом тексте элемента управления формы `<label>` или предоставив дополнительный блок текста справки (через `<b-form-group>` или `<b-form-*-feedback>`). В частности, для вспомогательных технологий недопустимым элементам управления формой также может быть назначен атрибут `aria-invalid="true"` (смотрите ниже).

### Атрибут ARIA `aria-invalid`

Когда `<b-form-select>` имеет недопустимое контекстное состояние (например, state = `false`), вы также можете установить для `<b-form-select>` свойства `aria-invalid` значение `true`.

Поддерживаемые `invalid` значения:

- `false` (по умолчанию) Ошибок не обнаружено
- `true` Значение не прошло проверку

Когда для параметра `state` установлено значение `false`, для параметра aria-invalid также будет установлено значение true.

## Не кастомный селект

Задайте для свойства `plain` свойство рендеринга `<select>` в собственном браузере (хотя класс `.form-control` всегда будет помещен в выделение).

`plain` выбор всегда будет отображаться для не `multiple` селектов, для которых свойство `select-size` установлено на значение больше 1.

<!-- Component reference added automatically from component package.json -->
