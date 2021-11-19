# Спин-кнопка формы

> Спин кнопки - это настраиваемый элемент управления числовым диапазоном BootstrapVue. Кнопки спин позволяют увеличивать или уменьшать числовое значение в диапазоне от минимального до максимального числа с дополнительным значением шага

## Обзор

Компонент `<b-form-spinbutton>` [совместим с WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton), что позволяет [управление с клавиатуры](#accessibility) и поддерживает как горизонтальную (по умолчанию), так и вертикальную компоновку.

Подобно [входам типа диапазона](/docs/components/form-input#range-type-input), BootstrapVue `<b-form-spinbutton>` _не_ позволяет пользователю вводить значение.

```html
<template>
  <div>
    <label for="demo-sb">Кнопка спин</label>
    <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
    <p>Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 50
      }
    }
  }
</script>

<!-- b-form-spinbutton-demo.vue -->
```

Клавиши <kbd>ArrowUp</kbd> и <kbd>ArrowDown</kbd> могут использоваться для увеличения или уменьшения значения.

Для отправки через отправку формы в собственном браузере, спин-кнопка должна иметь имя, заданное с помощью свойства `name`. Это создаст скрытый ввод, содержащий текущее значение кнопки вращения. Если спин-кнопка не имеет значения, значение скрытого ввода будет пустой строкой.

## Значение `v-model`

`v-model` всегда возвращает значение в виде числа. `v-model` может иметь значение `null`, если начальное значение не установлено.

Если начальное значение равно `null`, то на кнопке прокрутки не будет отображаться никакого значения. Используйте свойство `placeholder`, чтобы показать строку, когда спин-кнопка не имеет значения (например, `placeholder="--"`).

## Минимальное, Максимальное и Шаг

По умолчанию Spinbuttons имеют диапазон от `1` до `100`, который можно изменить, задав свойства `min` и `max`. Приращение шага по умолчанию равно `1`, и его можно изменить с помощью свойства `step` (разрешены десятичные значения).

Когда установлен `step`, значение всегда будет кратным размеру шага плюс минимальное значение.

```html
<template>
  <div>
    <label for="sb-step">Кнопка вращения с шагом 0,25</label>
    <b-form-spinbutton
      id="sb-step"
      v-model="value"
      min="0"
      max="10"
      step="0.25"
    ></b-form-spinbutton>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>

<!-- b-form-spinbutton-step.vue -->
```

## Обертка числа

По умолчанию, когда значение увеличивается до значения `max`, нажатие кнопки увеличения не будет иметь никакого эффекта. Точно так же, когда значение равно `min`, нажатие кнопки уменьшения не будет иметь никакого эффекта.

Чтобы позволить кнопке прокрутки переходить от max к min при увеличении (или от min к max при уменьшении), установите для свойства `wrap` значение `true`.

```html
<template>
  <div>
    <label for="sb-wrap">Кнопка вращения значения упаковки</label>
    <b-form-spinbutton id="sb-wrap" wrap min="1" max="25" placeholder="--"></b-form-spinbutton>
  </div>
</template>

<!-- b-form-spinbutton-wrap.vue -->
```

## Стилизация

### Размер

Как и другие элементы управления формой, `<b-form-spinbutton>` поддерживает малые и большие размеры, задав для свойства `size` значение `'sm'` или `'lg'`, соответственно.

```html
<template>
  <div>
    <label for="sb-small">Спин кнопка - Маленький размер</label>
    <b-form-spinbutton id="sb-small" size="sm" placeholder="--" class="mb-2"></b-form-spinbutton>

    <label for="sb-default">Спин кнопка - Размер по умолчанию</label>
    <b-form-spinbutton id="sb-default" placeholder="--" class="mb-2"></b-form-spinbutton>

    <label for="sb-large">Спин кнопка - Большой размер</label>
    <b-form-spinbutton id="sb-large" size="lg" placeholder="--" class="mb-2"></b-form-spinbutton>
  </div>
</template>

<!-- b-form-spinbutton-size.vue -->
```

### Inline

```html
<template>
  <div>
    <label for="sb-inline">Инлайновая спин кнопка</label>
    <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 50
      }
    }
  }
</script>

<!-- b-form-spinbutton-inline.vue -->
```

Кнопка вращения автоматически отрегулирует ширину в соответствии с отображаемым значением. Смотреть раздел [Ширина](#width) ниже для получения подробной информации об управлении или настройке ширины.

### Вертикальный

Spinbuttons можно ориентировать в вертикальном режиме:

```html
<template>
  <div>
    <label for="sb-vertical">Вертикальная спин кнопка</label><br>
    <b-form-spinbutton id="sb-vertical" v-model="value" vertical></b-form-spinbutton>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 50
      }
    }
  }
</script>

<!-- b-form-spinbutton-vertical.vue -->
```

Размер кнопок вертикального вращения также можно изменить с помощью [свойства `size`](#размер). В вертикальном режиме кнопка вращения отображается как встроенный элемент.

Кнопка вращения автоматически отрегулирует ширину в соответствии с отображаемым значением. Смотрите раздел [Ширина](#ширина) ниже для получения подробной информации об управлении или настройке ширины.

### Ширина

Элемент управления (если он не `vertical` или `inline`) будет расширяться до максимальной ширины родительского контейнера. Вы можете управлять шириной с помощью служебных классов, таких как `w-25`, `w-50`, `w-75` или используйте стили для установки ширины.

Если установлено значение `vertical` или `inline`, элемент управления будет регулировать свою ширину в зависимости от отображаемого значения. Вы можете использовать стиль css для управления общей шириной элемента управления (например, `style="width: 10rem;`).

### Форматирование чисел и языковой стандарт

По умолчанию `<b-form-spinbutton>` отформатирует отображаемое число в локали по умолчанию в браузере пользователя. Вы можете изменить локализованное форматирование, указав локаль (или массив локалей) через свойство `locale`. Локализация числового формата выполняется через [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).
Доступные языковые стандарты будут зависеть от реализации браузера. Локализация контролирует только представление значения пользователю и не влияет на `v-model`.

```html
<template>
  <div>
    <label for="sb-locales">Локаль</label>
    <b-form-select id="sb-locales" v-model="locale" :options="locales"></b-form-select>
    <label for="sb-local" class="mt-2">Спин кнопка с языковым стандартом</label>
    <b-form-spinbutton
      id="sb-locale"
      v-model="value"
      :locale="locale"
      min="0"
      max="10"
      step="0.125"
    ></b-form-spinbutton>
    <p>Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        locale: 'ru',
        locales: [
          { value: 'en', text: 'English' },
          { value: 'ru', text: 'Russian' },
          { value: 'de', text: 'German' },
          { value: 'fr-CA', text: 'French (Canadian)' },
          { value: 'fa', text: 'Persian' },
          { value: 'ar-EG', text: 'Arabic (Egyptian)' }
        ]
      }
    }
  }
</script>

<!-- b-form-spinbutton-locale.vue -->
```

В качестве альтернативы вы можете предоставить свою собственную функцию форматирования чисел для форматирования отображаемого значения. Это полезно для отображения текста вместо числа, или если вы хотите реализовать различные функции `Intl.NumberFormat`.

Чтобы предоставить функцию форматирования, установите для свойства `formatter-fn` ссылку на метод. Средству форматирования передается единственный аргумент, который является текущим значением. Обратите внимание, что средство форматирования влияет только на значение, отображаемое пользователю, и не влияет на `v-model`.

```html
<template>
  <div>
    <label for="sb-days" class="mt-2">Спин кнопка с форматером</label>
    <b-form-spinbutton
      id="sb-days"
      v-model="value"
      :formatter-fn="dayFormatter"
      min="0"
      max="6"
      wrap
    ></b-form-spinbutton>
    <p>Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }
    },
    methods: {
      dayFormatter(value) {
        return this.days[value]
      }
    }
  }
</script>

<!-- b-form-spinbutton-formatter.vue -->
```

## Отключено и доступно только для чтения

Установка свойства `disabled` переводит компонент в отключенное, неинтерактивное состояние. Свойство `readonly` помещает компонент в состояние только для чтения (фокусируется, но значение не может быть изменено пользователем).

```html
<template>
  <b-row>
    <b-col md="6" class="mb-2">
      <label for="sb-disabled">Отключенная спин кнопка</label>
      <b-form-spinbutton id="sb-disabled" v-model="value" disabled></b-form-spinbutton>
    </b-col>
    <b-col md="6" class="mb-2">
      <label for="sb-readonly" class="">Спин кнопка только для чтения</label>
      <b-form-spinbutton id="sb-readonly" v-model="value" readonly></b-form-spinbutton>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        value: 50
      }
    }
  }
</script>

<!-- b-form-spinbutton-disabled-readonly.vue -->
```

Отключенные спин-кнопки не будут отправлены во время отправки формы в собственном браузере, в то время как спин-кнопка только для чтения будет отправлена (если имя было установлено через свойство `name`).

## Состояния валидации

Когда вы по умолчанию используете значение `null`, а пользователь не выбрал значение, вы можете использовать свойство `state` для применения одного из стилей контекстной проверки к компоненту.

- `true` применяет допустимый стиль к компоненту
- `false` применяет недопустимый стиль к компоненту
- `null` не применяет контекстного стиля (по умолчанию)

### Обязательные свойства

Обратите внимание, что требуемое свойство только генерирует атрибут `aria-required="true"` для компонента и не выполняет никакой проверки при отправке формы. Вы должны проверить `v-model` в логике вашего приложения.

Обратите внимание, что если свойство `required` установлено, а `v-model` имеет значение `null`, атрибут `aria-invalid="true"` будет отображаться в компоненте.

## События

Событие `input` используется для обновления `v-model` и генерируется каждый раз, когда значение изменяется.

Событие `change` генерируется, когда пользователь отпускает кнопку мыши (при нажатии кнопок увеличения или уменьшения) или когда пользователь отпускает клавишу <kbd>ArrowDown</kbd> или <kbd>ArrowUp</kbd>.
Это может быть удобно, когда вам нужно заблокировать ввод.

Следующий пример иллюстрирует разницу между событиями `input` и `change`. Нажмите и удерживайте кнопку увеличения или уменьшения (или используйте клавиши со стрелками вверх/вниз).

```html
<template>
  <div>
    <label for="sb-input">Спин кнопка - ввод и изменение событий</label>
    <b-form-spinbutton
      id="sb-input"
      v-model="value1"
      @change="value2 = $event"
      wrap
    ></b-form-spinbutton>
    <p>Событие ввода: {{ value1 }}</p>
    <p>Событие изменения: {{ value2 }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: null
      }
    }
  }
</script>

<!-- b-form-spinbutton-events.vue -->
```

## Доступность

Когда кнопка вращения находится в фокусе, доступны следующие элементы управления клавиатуры:

- <kbd>Home</kbd> Устанавливает значение в значение `min`
- <kbd>End</kbd> Устанавливает значение в значение `max`
- <kbd>ArrowUp</kbd> Увеличивает значение на величину шага
- <kbd>ArrowDown</kbd> Уменьшает значение на величину шага
- <kbd>PageUp</kbd> Увеличивает значение на величину шага, умноженную на величину `repeat-step-multiplier`
- <kbd>PageDown</kbd> Уменьшает значение на величину шага, умноженную на величину `repeat-step-multiplier`

Нажатие и удерживание клавиш <kbd>ArrowUp</kbd>, <kbd>ArrowDown</kbd>, <kbd>PageUp</kbd> или <kbd>PageDown</kbd> будет автоматически повторять увеличение или уменьшение ( после начальной задержки).
Удерживание клавиш <kbd>ArrowUp</kbd> или <kbd>ArrowDown</kbd> в течение длительного периода умножит величину приращения или уменьшения на величину `repeat-step-multiplier`.

Обратите внимание, что параметры `repeat-delay`, `repeat-threshold` и `repeat-interval` применяются только к клавишам <kbd>ArrowUp</kbd> или <kbd>ArrowDown</kbd>.

## Примечания по реализации

`<b-form-spinbutton>` использует смесь служебных классов Bootstrap v4 (border, alignment, flex), классов форм и кнопок, а также дополнительные настраиваемые BootstrapVue SCSS/CSS.

## Смотрите также

- [Ввод типа диапазона](/docs/components/form-input#range-type-input)
