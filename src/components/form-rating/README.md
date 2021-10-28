# Рейтинг формы

> Пользовательский компонент звездного рейтинга BootstrapVue, `<b-form-rating>`, предназначен для ввода или отображения значения рейтинга. Компонент полностью доступен по WAI-ARIA и поддерживает управление с клавиатуры.

## Обзор

Значения рейтинга варьируются от `1` до разрешенного количества звезд (по умолчанию - `5`, минимальное количество звезд - `3`). Поскольку `<b-form-rating>` использует класс Bootstrap `form-control`, его можно легко разместить внутри [групп ввода](/docs/components/input-group).

Для `<b-form-rating>` существует два основных режима: интерактивный и только для чтения.

Интерактивный режим позволяет пользователю выбирать рейтинг от `1` до количества звезд (по умолчанию `5`) с _полным числом_ приращений.

**Интерактивный рейтинг (режим ввода):**

```html
<template>
  <div>
    <b-form-rating v-model="value"></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>

<!-- b-form-rating.vue -->
```

Режим только для чтения используется для отображения агрегированного рейтинга и поддерживает `half` звездочки.

**Рейтинг только для чтения (неинтерактивный):**

```html
<template>
  <div>
    <b-form-rating v-model="value" readonly></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 2.567
      }
    }
  }
</script>

<!-- b-form-rating-non-interactive.vue -->
```

## Стилизация

### Вариант и цвет

С легкостью примените один из вариантов цвета темы Bootstrap к значку рейтинга с помощью свойства `variant`.
По умолчанию используется цвет текста элемента управления формы по умолчанию.

```html
<template>
  <div>
    <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="success" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="danger" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="primary" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="info" class="mb-2"></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3
      }
    }
  }
</script>

<!-- b-form-rating-variant.vue -->
```

Чтобы применить _собственный цвет_, используйте свойство `color`, которое принимает стандартное имя цвета CSS, значение цвета HEX (`#...`) или RGB/RGBA (`rgb(...)`/`rgba(...)`):

```html
<template>
  <div>
    <b-form-rating v-model="value" color="indigo" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" color="#ff00ff" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" color="rgb(64, 192, 128)" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" color="rgba(64, 192, 128, 0.75)" class="mb-2"></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>

<!-- b-form-rating-color.vue -->
```

**Примечания:**

- Свойство `color` имеет приоритет над свойством `variant`
- Варианты переводятся в служебный класс `text-{variant}` на иконке

### Количество звезд

По умолчанию для `<b-form-rating>` количество звезд равно `5`. Вы можете изменить количество звезд с помощью свойства `stars`. Минимально допустимое количество звездочек `3`.

```html
<template>
  <div>
    <label for="rating-10">Рейтинг с 10 звездами:</label>
    <b-form-rating id="rating-10" v-model="value10" stars="10"></b-form-rating>
    <p class="mt-2">Значение: {{ value10 }}</p>

    <label for="rating-7">Рейтинг с 7 звездами:</label>
    <b-form-rating id="rating-7" v-model="value7" stars="7"></b-form-rating>
    <p class="mt-2">Значение: {{ value7 }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: null,
        value7: null,
      }
    }
  }
</script>

<!-- b-form-rating-stars.vue -->
```

### Показать значение

По умолчанию `<b-form-rating>` не отображает текущее числовое значение. Чтобы показать текущее значение, просто установите для свойства `show-value` значение `true`. Чтобы контролировать точность (количество цифр после десятичной дроби), просто установите для параметра `precision` количество отображаемых цифр после десятичной дроби. Параметр `precision` полезен при отображении агрегированного или среднего значения рейтинга в режиме `readonly`.

```html
<template>
  <div>
    <b-form-rating v-model="value" show-value></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 4
      }
    }
  }
</script>

<!-- b-form-rating-value.vue -->
```

**С набором точности:**

```html
<template>
  <div>
    <b-form-rating v-model="value" readonly show-value precision="2"></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3.555
      }
    }
  }
</script>

<!-- b-form-rating-value-precision.vue -->
```

#### Показать максимальное значение

<span class="badge badge-info small">2.13.0+</span>

При желании можно показать максимально возможный рейтинг, установив для свойства `show-value-max` значение `true`:

```html
<template>
  <div>
    <b-form-rating
      v-model="value"
      readonly
      show-value
      show-value-max
      precision="2"
    ></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3.555
      }
    }
  }
</script>

<!-- b-form-rating-value-max.vue -->
```

### Размеры элементов

Хотите маленький или большой рейтинг? Просто установите для свойства `size` значение `'sm'` или `'lg'` соответственно.

```html
<template>
  <div>
    <label for="rating-sm">Маленькие элементы рейтинга</label>
    <b-form-rating id="rating-sm" v-model="value" size="sm"></b-form-rating>

    <label for="rating-md" class="mt-3">Элементы рейтинга по умолчанию (средний)</label>
    <b-form-rating id="rating-md" v-model="value"></b-form-rating>

    <label for="rating-lg" class="mt-3">Большие элементы рейтинга</label>
    <b-form-rating id="rating-lg" v-model="value" size="lg"></b-form-rating>

    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>

<!-- b-form-rating-size.vue -->
```

### Инлайновый режим

По умолчанию `<b-form-rating>` занимает 100% ширины родительского контейнера. В некоторых ситуациях вы можете предпочесть, чтобы пользовательский ввод занимал место, необходимое для его содержимого. Просто установите для свойства `inline` значение `true`, чтобы визуализировать компонент во встроенном режиме:

```html
<template>
  <div>
    <label for="rating-inline">Инлайновый рейтинг:</label>
    <b-form-rating id="rating-inline" inline value="4"></b-form-rating>
  </div>
</template>

<!-- b-form-rating-inline.vue -->
```

### Без границ

По умолчанию `<b-form-rating>` имеет стандартный стиль элемента управления формы Bootstrap. Чтобы отключить стандартную границу элемента управления формой, просто установите для свойства `no-border` значение `true`.

```html
<template>
  <div>
    <label for="rating-sm-no-border">Маленький рейтинг без рамки</label>
    <b-form-rating id="rating-sm-no-border" v-model="value" no-border size="sm"></b-form-rating>

    <label for="rating-md-no-border" class="mt-3">Рейтинг по умолчанию (средний) без рамки</label>
    <b-form-rating id="rating-md-no-border" v-model="value" no-border></b-form-rating>

    <label for="rating-lg-no-border" class="mt-3">Большой рейтинг без рамки</label>
    <b-form-rating id="rating-lg-no-border" v-model="value" no-border size="lg"></b-form-rating>

    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>

<!-- b-form-rating-no-border.vue -->
```

**Примечания:**

- Из соображений доступности кольцо фокусировки будет отображаться, когда компонент оценки находится в фокусе, независимо от настройки `no-border`.

### Отключенный

Если вам требуется дополнительная информация, прежде чем пользователь сможет выбрать значение рейтинга, просто установите для свойства `disabled` значение `true`, чтобы отключить любое взаимодействие пользователя с компонентом:

```html
<template>
  <div>
    <label for="rating-disabled">Рейтинг отключен</label>
    <b-form-rating id="rating-disabled" value="2.75" disabled></b-form-rating>
  </div>
</template>

<!-- b-form-rating-disabled.vue -->
```

### Только чтение

Рейтинги только для чтения остаются настраиваемыми, но не интерактивными. Это состояние полезно для отображения агрегированного или среднего значения оценок. Допускаются дробные значения, которые будут приводить к отображению _половинных иконок_, если `value` не является целым числом (пороговое значение для половины значка равно `0.5`).

```html
<template>
  <div>
    <label for="rating-readonly">Рейтинг только для чтения</label>
    <b-form-rating
      id="rating-readonly"
      value="3.6536"
      readonly
      show-value
      precision="3"
    ></b-form-rating>
  </div>
</template>

<!-- b-form-rating-readonly.vue -->
```

### Кнопка Очиститки

При желании можно показать значок очистки через свойство `show-clear`. При щелчке по значку очистки значение будет установлено в `null`.

```html
<template>
  <div>
    <b-form-rating v-model="value" show-clear show-value></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 2.5
      }
    }
  }
</script>

<!-- b-form-rating-clear.vue -->
```

**Примечания:**

- Иконка очистки _не_ будет отображаться, если заданы свойства `readonly` или `disabled`.

### Иконки

По умолчанию `<b-form-rating>` использует [Иконки Bootstrap](/docs/icons) `'star'`, `'star-half'`, `'star-fill'` и иконку `'x'` (для дополнительной кнопки очистки). Вы можете указать альтернативные значки начальной загрузки для использования с помощью свойств `icon-empty`, `icon-half`, `icon-full` и `icon-clear`. Эти свойства принимают имя Bootstrap Иконки <samp>kebab-case</samp> и требуют, чтобы соответствующий компонент иконки был зарегистрирован/установлен локально или глобально.

```html
<template>
  <div>
    <b-form-rating
      icon-empty="heart"
      icon-half="heart-half"
      icon-full="heart-fill"
      icon-clear="slash-circle"
      show-clear
      variant="danger"
    ></b-form-rating>
  </div>
</template>

<!-- b-form-rating-icons.vue -->
```

В качестве альтернативы вы можете предоставить свой собственный контент через слоты с областью видимости `'icon-empty'`, `'icon-half'`, `'icon-full'` и `'icon-clear'`.

## Отправка формы

Если вы собираетесь отправить значение рейтинга через стандартную отправку формы, установите для свойства `name` нужное имя поля формы. Будет создан скрытый ввод с текущим значением (или пустой строкой, если значение отсутствует).

## Использование в группах ввода

Ниже приведен пример помещения `<b-form-rating>` в группе ввода:

```html
<template>
  <div>
    <b-input-group>
      <b-input-group-prepend>
        <b-button @click="value = null">Очистить</b-button>
      </b-input-group-prepend>
      <b-form-rating v-model="value" color="#ff8800"></b-form-rating>
      <b-input-group-append>
        <b-input-group-text class="justify-content-center" style="min-width: 3em;">
          {{ value }}
        </b-input-group-text>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>

<!-- b-form-rating-input-group.vue -->
```

## Интернационализация

Когда указан `locale`, отображаемое значение (когда свойство `show-value` равно `true`) будет в локали браузера по умолчанию. Чтобы изменить языковой стандарт, просто установите свойство `locale` на предпочтительный языковой стандарт или массив предпочтительных языковых стандартов (сначала наиболее предпочтительный языковой стандарт). Это повлияет на необязательное отображаемое значение и ориентацию компонента слева направо или справа налево.

```html
<template>
  <div>
    <b-form-select v-model="locale" :options="locales" class="mb-2"></b-form-select>
    <b-form-rating v-model="value" :locale="locale" show-value precision="1"></b-form-rating>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3.5,
        locale: 'en-US',
        locales: [
          { text: 'English US (en-US)', value: 'en-US' },
          { text: 'Русский (ru-RU)', value: 'ru-RU' },
          { text: 'French (fr)', value: 'fr' },
          { text: 'Persian (fa)', value: 'fa'},
          { text: 'Arabic Egyptian (ar-EG)', value: 'ar-EG' }
        ]
      }
    }
  }
</script>

<!-- b-form-rating-i18n.vue -->
```

## Примечания по реализации

Элемент управления рейтингами использует классы Bootstrap v4 `form-control*`, `d-*` (отображение), `border-*` и `text-{variant}`, а также собственный CSS BootstrapVue для правильного оформления.

Корневым элементом элемента управления является элемент `<output>`, который позволяет связать с ним элемент `<label>`.

## Доступность

Для пользователей программ чтения с экрана `<b-form-rating>` отображается как входной ввод типа _ползунка_.

Клавиатурная навигация используется для выбора значения рейтинга и имитирует элементы управления с клавиатуры для входов `range`:

- <kbd>Left</kbd> или <kbd>Down</kbd> уменьшит значение рейтинга на `1`
- <kbd>Right</kbd> или <kbd>Up</kbd> увеличит значение рейтинга на `1`
- Когда [`locale`](#интернационализация) преобразуется в язык с письмом справа налево, поведение <kbd>Left</kbd> и <kbd>Right</kbd> меняется на противоположное.
