# Флажок формы

> Для согласованности между браузерами, `<b-form-checkbox-group>` и `<b-form-checkbox>` используют ввод настраиваемого флажка Bootstrap вместо ввода флажка по умолчанию в браузере. Он построен на основе семантической и доступной разметки, поэтому является надежной заменой для ввода флажка по умолчанию.

**Пример 1:** Один флажок

```html
<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Я принимаю условия и использую
    </b-form-checkbox>

    <div>Состояние: <strong>{{ status }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: 'not_accepted'
      }
    }
  }
</script>

<!-- b-form-checkbox.vue -->
```

**Пример 2:** Флажки с множественным выбором

```html
<template>
  <div>
    <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Апельсин</b-form-checkbox>
        <b-form-checkbox value="apple">Яблоко</b-form-checkbox>
        <b-form-checkbox value="pineapple">Ананас</b-form-checkbox>
        <b-form-checkbox value="grape">Виноград</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div>Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Должна быть ссылка на массив!
        options: [
          { text: 'Апельсин', value: 'orange' },
          { text: 'Яблоко', value: 'apple' },
          { text: 'Ананас', value: 'pineapple' },
          { text: 'Виноград', value: 'grape' }
        ]
      }
    }
  }
</script>

<!-- b-form-checkbox-multiple.vue -->
```

Не стесняйтесь смешивать и сочетать свойства `options` и `<b-form-checkbox>` в `<b-form-checkbox-group>`.
Вручную помещенные входы `<b-form-checkbox>` будут отображаться _под_ любыми входами флажков, созданными опцией
`options`. Чтобы они отображались _выше_ входов, созданных с помощью `options`, поместите их в именованный слот `first`.

## Массив опций группы флажков

`options` могут быть массивом строк или объектов. Доступные поля:

- **`value`** Выбранное значение, которое будет установлено на `v-model`
- **`disabled`** Отключает элемент для выбора
- **`text`** Отображать текст или **`html`** Отображать базовый встроенный HTML-код

`value` может быть строкой, числом или простым объектом. Избегайте использования сложных типов в значениях.

Если указаны и `html` и `text`, приоритет будет иметь `html`. В поле `html` поддерживается только базовый / собственный HTML (компоненты работать не будут). Обратите внимание, что не все браузеры будут отображать встроенный html (т.е. `<i>`, `<strong>` и т.д.) внутри элементов `<option>` элемента `<select>`.

<p class="alert alert-danger">
  <strong>Будьте осторожны</strong> при размещении содержимого, предоставляемого пользователем, в поле <code>html</code>, так как это может сделать вас уязвимым для
  <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
  <abbr title="Атаки межсайтового скриптинга">XSS attacks</abbr></a>,
  если вы сначала не <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">провели обработку</a> введенную пользователем строку.
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
  { text: 'Элемент 1', value: 'first' },
  { text: 'Элемент 2', value: 'second' },
  { html: '<b>Элемент</b> 3', value: 'third', disabled: true },
  { text: 'Элемент 4' },
  { text: 'Элемент 5', value: { foo: 'bar', baz: true } }
]
```

Если `value` отсутствует, то `text` будет использоваться как поля `value` и `text`. Если вы используете свойство `html`, вы **должны** предоставить свойство `value`.

Внутри BootstrapVue преобразует указанный выше массив в следующий формат (формат [массив объектов](#options-as-an-array-of-objects)):

<!-- eslint-disable no-unused-vars -->

```js
const options = [
  { text: 'Элемент 1', value: 'first', disabled: false },
  { text: 'Элемент 2', value: 'second', disabled: false },
  { html: '<b>Элемент</b> 3', value: 'third', disabled: true },
  { text: 'Элемент 4', value: 'Элемент 4', disabled: false },
  { text: 'Элемент 5', value: 'E', disabled: false }
]
```

### Изменение названий полей опций

Если вы хотите настроить имена свойств поля (например, используя поле `name` для отображения `text`), вы можете легко изменить их, установив `text-field`, `html-field`, `value-field` и `disabled-field` прописывает строку, содержащую имя свойства, которое вы хотите использовать:

```html
<template>
  <div>
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-checkbox-group>
    <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
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

<!-- b-form-checkbox-group-options-fields.vue -->
```

## Встроенные и сложенные флажки

Компоненты `<b-form-checkbox-group>` по умолчанию отображают встроенные флажки, тогда как `<b-form-checkbox>` отображают флажки на уровне блоков (составные).

Установите свойство `stacked` в `<b-form-checkbox-group>` для размещения каждого элемента управления формой один над другим, или, если вы используете отдельные флажки не внутри `<b-form-checkbox-group>`, установите свойство `inline` в `<b-form-checkbox>`.

```html
<template>
  <div>
    <b-form-group
      label="Встроенные флажки form-checkbox-group (по умолчанию)"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1a"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Сложенные флажки form-checkbox-group"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-2a"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Отдельные сложенные флажки (по умолчанию)"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-3a"
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>

    <b-form-group
      label="Индивидуальные встроенные флажки"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-4a"
        inline
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Должна быть ссылка на массив!
        options: [
          { text: 'Апельсин', value: 'orange' },
          { text: 'Яблоко', value: 'apple' },
          { text: 'Ананас', value: 'pineapple' },
          { text: 'Виноград', value: 'grape' }
        ]
      }
    }
  }
</script>

<!-- b-form-checkbox-stacked.vue -->
```

## Размеры

Используйте свойство `size` для управления размером флажка. Размер по умолчанию средний. Поддерживаемые значения размера: `sm` (маленький) и `lg` (большой).

```html
<div>
  <b-form-checkbox size="sm">Маленький</b-form-checkbox>
  <b-form-checkbox>По умолчанию</b-form-checkbox>
  <b-form-checkbox size="lg">Большой</b-form-checkbox>
</div>

<!-- form-checkbox-sizes.vue -->
```

Размеры могут быть установлены для отдельных компонентов `<b-form-checkbox>` или унаследованы от настройки размера `<b-form-checkbox-group>`.

**Примечание:** Bootstrap v4.x изначально не поддерживает размеры для пользовательского элемента управления флажком. Однако BootstrapVue включает настраиваемые SCSS/CSS, в которых добавлена поддержка изменения размеров настраиваемых флажков.

## Значения флажков и `v-model`

По умолчанию значение `<b-form-checkbox>` будет равно `true`, если флажок выбран, и `false`, если флажок снят. Вы можете настроить проверенные и непроверенные значения, указав свойства `value` и `unchecked-value` соответственно.

`v-model` привязывается к свойству `checked`. Если у вас есть несколько флажков, привязанных к одной переменной состояния данных, вы **должны** указать ссылку на массив (`[]`) для вашей `v-model`. Не используйте свойство `checked` напрямую.

Обратите внимание, что когда `v-model` привязан к нескольким флажкам (т. е. ссылка на массив), `unchecked-value` **не используется**. В связанном массиве `v-model` будут возвращены только значения отмеченных флажков. Вы должны указать уникальное значение для свойства `value` каждого флажка (значение по умолчанию `true` не будет работать при привязке к массиву).

Чтобы предварительно проверить любые радиостанции, установите `v-model` на значение(я) проверок, которые вы хотели бы предварительно выбрать.

При размещении отдельных компонентов `<b-form-checkbox>` в `<b-form-checkbox-group>`, большинство свойств и `v-model` наследуются от `<b-form-checkbox-group>`.

**Примечание:** свойство `unchecked-value` _не_ влияет на собственный атрибут `<input>` `value`, потому что браузеры не включают неотмеченные флажки при отправке форм. Чтобы гарантировать, что одно из двух значений будет отправлено в исходной форме `<form>` (например, `'yes'` или `'no'`), вместо этого используйте радио-вводы. Это то же самое ограничение, которое [Vue имеет с собственным вводом флажков](https://vuejs.org/v2/guide/forms.html#Checkbox-1).

### Мультивыбор флажков и доступность

При связывании нескольких флажков вместе вы должны установить для свойства `name` одно и то же значение для всех `<b-form-checkbox>` в группе по отдельности или через свойство `name` элемента `<b-form-checkbox-group>`.
Это проинформирует пользователей вспомогательных технологий о том, что флажки связаны между собой, и активирует навигацию с помощью встроенной клавиатуры браузера.

При использовании нескольких флажков рекомендуется размещать флажки в компоненте
[`<b-form-group>`](/docs/components/form-group), чтобы связать метку со всей группой флажков. Смотрите примеры выше.

## Флажки стиля кнопки

При желании вы можете отобразить флажки в виде кнопок по отдельности или в группе.

Флажки стиля кнопки будут иметь класс `.active`, автоматически применяемый к метке, когда они находятся в состоянии _выбрано_.

### Индивидуальный стиль кнопки флажка

Один флажок можно отобразить с помощью кнопки, установив для свойства `button` значение `true`

Измените вариант кнопки, установив свойство `button-variant` на один из стандартных вариантов кнопки Bootstrap (поддерживаемые варианты смотрите в [`<b-button>`](/docs/components/button)). Вариант по умолчанию: `secondary`.

```html
<template>
  <div>
    <b-form-checkbox v-model="checked1" name="check-button" button>
      Кнопка Флажок <b>(Выбрано: {{ checked1 }})</b>
    </b-form-checkbox>
    <b-form-checkbox v-model="checked2" name="check-button" button button-variant="info">
      Кнопка Флажок <b>(Выбрано: {{ checked2 }})</b>
    </b-form-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: false
      }
    }
  }
</script>

<!-- b-form-checkbox-button.vue -->
```

Свойство `inline` не влияет на отдельные флажки в стиле кнопок.

### Флажки сгруппированного стиля кнопок

Визуализируйте группы флажков в виде группы кнопок, установив свойство `buttons` в `<b-form-checkbox-group>`. Измените вариант кнопки, установив свойство `button-variant` на один из стандартных вариантов кнопки Bootstrap (поддерживаемые варианты смотрите в [`<b-button>`](/docs/components/button)). По умолчанию `button-variant` является `secondary`.

```html
<template>
  <div>
    <b-form-group
      label="Button-group style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="buttons-1"
        buttons
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Button-group style checkboxes with variant primary and large buttons"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        buttons
        button-variant="primary"
        size="lg"
        name="buttons-2"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Stacked (vertical) button-group style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        stacked
        buttons
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Должна быть ссылка на массив!
        options: [
          { text: 'Апельсин', value: 'orange' },
          { text: 'Яблоко', value: 'apple' },
          { text: 'Ананас', value: 'pineapple' },
          { text: 'Виноград', value: 'grape' }
        ]
      }
    }
  }
</script>

<!-- b-form-checkbox-button-group.vue -->
```

## Флажки в стиле переключателя

Стиль переключателя поддерживается в компонентах `<b-form-checkbox>` и `<b-form-checkbox-group>`.

**Примечание:** Если флажок установлен в [режим кнопки](#button-style-checkboxes), режим переключения не будет иметь никакого эффекта.

### Индивидуальный флажок в стиле переключателя

Один флажок может быть отображен с внешним видом переключателя, установив для свойства `switch` значение `true`

```html
<template>
  <div>
    <b-form-checkbox v-model="checked" name="check-button" switch>
      Переключить флажок <b>(Статус: {{ checked }})</b>
    </b-form-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false
      }
    }
  }
</script>

<!-- b-form-checkbox-switch.vue -->
```

### Сгруппированные флажки стиля переключателя

Визуализируйте группы флажков в виде переключателей, установив свойство `switches` в `<b-form-checkbox-group>`.

```html
<template>
  <div>
    <b-form-group
      label="Флажки встроенного стиля переключения"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Флажки сгруппированного (вертикального) стиля переключателя"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Должна быть ссылка на массив!
        options: [
          { text: 'Красный', value: 'red' },
          { text: 'Зеленый', value: 'green' },
          { text: 'Желтый (отключен)', value: 'yellow', disabled: true },
          { text: 'Синий', value: 'blue' }
        ]
      }
    }
  }
</script>

<!-- b-form-checkboxes-switch-group.vue -->
```

### Размер переключателя

Используйте свойство `size` для управления размером переключателя. Размер по умолчанию - средний. Поддерживаемые значения размера: `sm` (маленький) и `lg` (большой).

```html
<div>
  <b-form-checkbox switch size="sm">Маленький</b-form-checkbox>
  <b-form-checkbox switch>По умолчанию</b-form-checkbox>
  <b-form-checkbox switch size="lg">Большой</b-form-checkbox>
</div>

<!-- form-checkbox-switch-sizes.vue -->
```

Размеры могут быть установлены для отдельных компонентов `<b-form-checkbox>` или унаследованы от настройки размера `<b-form-checkbox-group>`.

**Примечание:** Bootstrap v4.x изначально не поддерживает размеры для настраиваемого элемента управления переключателем. Однако BootstrapVue включает настраиваемый SCSS/CSS, который добавляет поддержку для изменения размера настраиваемых переключателей.

## Нестандартные контрольные входы (простые)

Вы можете использовать `<b-form-checkbox-group>` или `<b-form-checkbox>` для рендеринга ввода встроенного флажка браузера, установив свойство `plain`.

```html
<template>
  <div>
    <b-form-group label="Обычные встроенные флажки" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        plain
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Обычные сложенные флажки" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        plain
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Должна быть ссылка на массив!
        options: [
          { text: 'Апельсин', value: 'orange' },
          { text: 'Яблоко', value: 'apple' },
          { text: 'Ананас', value: 'pineapple' },
          { text: 'Виноград', value: 'grape' }
        ]
      }
    }
  }
</script>

<!-- b-form-checkbox-plain.vue -->
```

**Примечание:** Свойство `plain` не действует, если установлено `button` или `buttons`.

## Контекстные состояния

Bootstrap включает стили валидации для состояний `valid` и `invalid` для большинства элементов управления формой.

Вообще говоря, вы захотите использовать определенное состояние для определенных типов обратной связи:

- `false` (обозначает недопустимое состояние) отлично подходит, когда есть блокирующее или обязательное поле. Пользователь должен правильно заполнить это поле, чтобы отправить форму.
- `true` (обозначает действительное состояние) идеально подходит для ситуаций, когда у вас есть проверка по каждому полю во всей форме и вы хотите побудить пользователя пройти через остальные поля.
- `null` Не отображает состояние проверки (ни действительное, ни недействительное)

Чтобы применить один из значков контекстного состояния на `<b-form-checkbox>`, установите для свойства `state` значение `false` (для невалидного), `true` (для валидного) или `null` (состояние проверки отсутствует).

**Примечание:** Контекстные состояния **не** поддерживаются в режиме кнопок.

### Контекстное состояние и пример проверки

```html
<template>
  <div>
    <b-form-checkbox-group
      v-model="value"
      :options="options"
      :state="state"
      name="checkbox-validation"
    >
      <b-form-invalid-feedback :state="state">Пожалуйста, выберите два</b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">Спасибо</b-form-valid-feedback>
    </b-form-checkbox-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          { text: 'Первый выбор', value: 'first' },
          { text: 'Второй выбор', value: 'second' },
          { text: 'Третий выбор', value: 'third' }
        ]
      }
    },
    computed: {
      state() {
        return this.value.length === 2
      }
    }
  }
</script>

<!-- form-checkbox-validation.vue -->
```

### Требуемое ограничение

При использовании отдельных компонентов `<b-form-checkbox>` (не в `<b-form-checkbox-group>`), и вы хотите, чтобы флажки были `required` в вашей форме, вы **должны** предоставлять `name` для каждого `<b-form-checkbox>`, чтобы необходимое ограничение работало. Все компоненты `<b-form-checkbox>`, связанные с одной и той же `v-model` **должны** иметь одинаковое `name`.

`name` требуется для того, чтобы вспомогательные технологии (такие как программы чтения с экрана и пользователи, использующие только клавиатуру) знали, какие флажки принадлежат одной и той же переменной формы (имя также автоматически включает встроенную навигацию с клавиатуры браузера), поэтому `required` будет только работать, если установлено `name`. `<b-form-checkbox-group>` автоматически сгенерирует уникальное имя входа, если оно не указано в группе.

## Автофокус

Когда свойство `autofocus` установлено на `<b-form-checkbox>`, ввод будет автоматически сфокусирован, когда он вставлен (т.е. **установлен**) в документ, или повторно активирован, когда он находится внутри Vue компонент `<keep-alive>`. Обратите внимание, что это свойство **не** устанавливает атрибут `autofocus` на входе и не может определить, когда ввод становится видимым.

## Неопределенная (трисостояния) поддержка

Обычно вход флажка может иметь только два состояния: _checked_ или _unchecked_. ни могут иметь любое значение, но они либо отправляют это значение (_checked_), либо не отправляют (_unchecked_) с отправкой формы (хотя BootstrapVue допускает значение для состояния _unchecked_ для одного флажка)

_Визуально_, на самом деле есть три состояния, в которых может находиться флажок: _checked_, _unchecked_ или **_indeterminate_**.

Состояние _indeterminate_ **только визуально**. Флажок по-прежнему либо установлен, либо не отмечен как значение. Это означает, что визуальное неопределенное состояние маскирует реальное значение флажка, так что это лучше будет иметь смысл в вашем пользовательском интерфейсе!

`<b-form-checkbox>` поддерживает установку этого визуального неопределенного состояния с помощью свойства `indeterminate` (по умолчанию `false`). Установка флажка сбросит неопределенное состояние. Свойство `indeterminate` может быть синхронизировано с состоянием флажка путем привязки свойства `indeterminate` с модификатором `.sync`.

**Примечание:** неопределенный стиль не поддерживается в режиме кнопки или переключателя, а также не поддерживается в `<b-form-checkbox-group>` (несколько флажков).

**Неопределенный одиночный флажок:**

```html
<template>
  <div>
    <b-form-checkbox v-model="checked" :indeterminate.sync="indeterminate">
      Щелкните меня, чтобы увидеть, что происходит
    </b-form-checkbox>

    <div class="mt-3">
      Выбрано: <strong>{{ checked }}</strong><br>
      Неопределенно: <strong>{{ indeterminate }}</strong>
    </div>

    <b-button @click="toggleIndeterminate">Переключить неопределенное состояние</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        indeterminate: true
      }
    },
    methods: {
      toggleIndeterminate() {
        this.indeterminate = !this.indeterminate
      }
    }
  }
</script>

<!-- b-form-checkbox-indeterminate.vue -->
```

**Пример варианта использования неопределенного флажка:**

```html
<template>
  <div>
    <b-form-group>
      <template #label>
        <b>Выбери свои вкусы:</b><br>
        <b-form-checkbox
          v-model="allSelected"
          :indeterminate="indeterminate"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="toggleAll"
        >
          {{ allSelected ? 'Снять все' : 'Выбрать все' }}
        </b-form-checkbox>
      </template>

      <template v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="flavors"
          v-model="selected"
          :options="flavours"
          :aria-describedby="ariaDescribedby"
          name="flavors"
          class="ml-4"
          aria-label="Individual flavours"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>

      <div>
        Выбрано: <strong>{{ selected }}</strong><br>
        Всего выбрано: <strong>{{ allSelected }}</strong><br>
        Неопределенно: <strong>{{ indeterminate }}</strong>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flavours: ['Апельсин', 'Виноград', 'Яблоко', 'Лайм', 'Очень ягодный'],
        selected: [],
        allSelected: false,
        indeterminate: false
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : []
      }
    },
    watch: {
      selected(newValue, oldValue) {
        // Обрабатывать изменения в отдельных флажках вкуса
        if (newValue.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newValue.length === this.flavours.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
      }
    }
  }
</script>

<!-- b-form-checkbox-indeterminate-multiple.vue -->
```

**Примечание:** неопределенное значение не поддерживается ни в режиме `button`, ни в режиме нескольких флажков. Также обратите внимание, что простой флажок (т.е. со свойством `plain`) также поддерживает неопределенное состояние в Windows/Linux/Mac/Android, но не в iOS.

### Неопределенное состояние и доступность

Не все программы чтения с экрана передают неопределенное состояние пользователям программ чтения с экрана. Поэтому рекомендуется предоставить пользователю некоторую форму текстовой обратной связи (возможно, через класс `.sr-only`), если неопределенное состояние имеет особое контекстное значение в вашем приложении.

<!-- Component reference added automatically from component package.json -->
