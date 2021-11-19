# Таймпикер формы

> `<b-form-timepicker>` - это настраиваемая форма ввода BootstrapVue для выбора времени, которая обеспечивает полное соответствие WAI-ARIA и поддержку интернационализации.

## Обзор

В качестве компонента оболочки элемента управления формой для компонента [`<b-time>`](/docs/components/time) он обеспечивает дополнительное представление состояния проверки и компактный интерфейс. Нативные входы времени HTML5 различаются по виду, доступности и в некоторых случаях поддерживаются не всеми браузерами.
`<b-form-timepicker>` обеспечивает единообразный и доступный интерфейс для всех браузерных платформ и устройств.

```html
<template>
  <div>
    <b-form-timepicker v-model="value" locale="ru"></b-form-timepicker>
    <div class="mt-2">Значение: '{{ value }}'</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<!-- b-form-timepicker.vue -->
```

## Возвращаемое значение `v-model`

`<b-form-timepicker>` всегда возвращает строку в формате `'HH:mm:ss'`, который является тем же форматом, что и нативные элементы управления браузера `<input type="time">`. Значение будет в диапазоне от `'00:00:00'` до `'23:59:59'` (в 24-часовом формате используется синтаксис часового цикла `'h23'`).

Если время не выбрано, то `<b-form-timepicker>` возвращает пустую строку (`''`).

## Состояния Отключено и доступно только для чтения

Установка свойства `disabled` удалит всю интерактивность компонента `<b-form-timepicker>`.

Установка свойства `readonly` отключит выбор времени, но оставит компонент интерактивным, позволяя переключаться между вращающимися кнопками. `v-model` не будет обновляться в состоянии только для чтения.

```html
<template>
  <div>
    <b-form-group
      label="Выберите интерактивное состояние средства выбора времени"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        v-model="state"
        :aria-describedby="ariaDescribedby"
        aria-controls="ex-disabled-readonly"
      >
        <b-form-radio value="disabled">Отключено</b-form-radio>
        <b-form-radio value="readonly">Только чтение</b-form-radio>
        <b-form-radio value="normal">Обычное</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-form-timepicker
      id="ex-disabled-readonly"
      :disabled="disabled"
      :readonly="readonly"
    ></b-form-timepicker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        state: 'disabled'
      }
    },
    computed: {
      disabled() {
        return this.state === 'disabled'
      },
      readonly() {
        return this.state === 'readonly'
      }
    }
  }
</script>

<!-- b-form-timepicker-disabled-readonly.vue -->
```

## Состояния валидации

`<b-form-timepicker>` поддерживает недопустимый и допустимый стиль через логическое свойство `state`. Если для параметра
`state` присвоено логическое значение `false`, ввод будет задан как недопустимый, а при установке для него логического значения `true` - он будет обозначен как действительный. Установка состояния на `null` не будет отображать никаких стилей состояния проверки (по умолчанию).

```html
<template>
  <div>
    <label for="timepicker-invalid">Выберите время (недействительный стиль)</label>
    <b-form-timepicker id="datepicker-invalid" :state="false" class="mb-2"></b-form-timepicker>

    <label for="timepicker-valid">Выберите время (действительный стиль)</label>
    <b-form-timepicker id="datepicker-valid" :state="true"></b-form-timepicker>
  </div>
</template>

<!-- b-form-timepicker-validation.vue -->
```

Обратите внимание, что проверка собственного браузера недоступна с помощью `<b-form-timepicker>`.

## Стилизация

### Включение кнопки вращения секунд

По умолчанию кнопка вращения секунд не отображается. Чтобы включить секцию секунд, установите для свойства `show-seconds` значение `true`, чтобы активировать вращающуюся кнопку выбора секунд. Когда `show-seconds` ложно (или не задано), возвращаемое значение всегда будет содержать секундную часть строки времени, установленную на `00`.

```html
<template>
  <div>
    <b-form-timepicker v-model="value" show-seconds locale="ru"></b-form-timepicker>
    <div class="mt-2">Значение: '{{ value }}'</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<!-- b-form-timepicker-show-seconds.vue -->
```

### Размеры элементов

Хотите меньший или больший элемент управления `<b-form-timepicker>`? Установите для свойства `size` значение `'sm'` для меньшего элемента управления формой или `'lg'` для элемента управления формы большего размера. Обратите внимание, что это не влияет на размер всплывающего диалогового окна выбора времени.

```html
<template>
  <div>
    <label for="timepicker-sm">Маленький элемент выбора времени</label>
    <b-form-timepicker id="timepicker-sm" size="sm" locale="ru" class="mb-2"></b-form-timepicker>

    <label for="timepicker-lg">Большой элемент выбора времени</label>
    <b-form-timepicker id="timepicker-lg" size="lg" locale="ru"></b-form-timepicker>
  </div>
</template>

<!-- b-form-timepicker-control-size.vue -->
```

### Заполнитель

Если дата не выбрана, добавьте в элемент управления произвольный текст-заполнитель с помощью свойства `placeholder`. Если заполнитель не указан, используется значение свойства `label-no-time-selected`.

```html
<template>
  <div>
    <label for="timepicker-placeholder">Тайм пикер с заполнителем</label>
    <b-form-timepicker id="timepicker-placeholder" placeholder="Выберите время" locale="ru"></b-form-timepicker>
  </div>
</template>

<!-- b-form-timepicker-placeholder.vue -->
```

### Дополнительные элементы управления

Добавьте дополнительные кнопки управления в нижнюю часть всплывающего окна календаря с помощью свойств `now-button` или `reset-button`. Кнопка закрытия по умолчанию может быть удалена с помощью свойства `no-close-button`.

- Кнопка сейчас выбирает текущее время
- Кнопка сброса либо очищает выбранное время, либо устанавливает время равным значению свойства `reset-value` (если предусмотрено)
- Кнопка закрытия закрывает всплывающее окно времени

```html
<template>
  <div>
    <label for="timepicker-buttons">Выбор времени с дополнительными кнопками нижнего колонтитула</label>
    <b-form-timepicker
      id="timepicker-buttons"
      now-button
      reset-button
      locale="ru"
    ></b-form-timepicker>
  </div>
</template>

<!-- b-form-timepicker-footer-buttons.vue -->
```

Текст для дополнительных кнопок может быть установлен с помощью свойств `label-now-button`, `label-reset-button` и `label-close-button`. Из-за ограниченной ширины нижнего колонтитула рекомендуется делать эти ярлыки короткими.

### Размещение в раскрывающемся списке

Используйте выпадающие свойства `right`, `dropup`, `dropright`, `dropleft`, `no-flip` и `offset` для управления расположением всплывающего календаря.

Обратитесь к разделу [позиционирования `<b-dropdown>`](/docs/components/dropdown#positioning) для получения подробной информации об эффектах и использовании этих свойств.

### Режим только кнопки

<span class="badge badge-info small">v2.7.0+</span>

Представьте себе кнопку, запускающую диалог выбора времени, или хотите предоставить собственное дополнительное поле для ввода текста? Используйте свойство `button-only`, чтобы отобразить средство выбора времени как кнопку раскрывающегося списка. Отформатированная метка времени будет отображаться с классом `sr-only` (доступен только для программ чтения с экрана).

В следующем простом примере мы помещаем средство выбора времени (режим только кнопки) как добавление к `<b-input-group>`:

```html
<template>
  <div>
    <label for="example-input">Выберите время</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="value"
        type="text"
        placeholder="HH:mm:ss"
      ></b-form-input>
      <b-input-group-append>
        <b-form-timepicker
          v-model="value"
          button-only
          right
          show-seconds
          locale="ru"
          aria-controls="example-input"
        ></b-form-timepicker>
      </b-input-group-append>
    </b-input-group>
    <p>Значение: '{{ value }}'</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<!-- b-form-timepicker-button-only.vue -->
```

Размер кнопки можно контролировать с помощью свойства `size`, а размер кнопки - с помощью свойства `button-variant`.

## Интернационализация

Интернационализация интерфейса времени обеспечивается через
[`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
и
[`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat),
за исключением меток, применяемых к элементам управления временем (aria-labels, selected status, и т. д.).
Вы должны предоставить свои собственные переводы для этих этикеток. Доступные языковые стандарты будут зависеть от браузера (не все браузеры поддерживают все языковые стандарты).

По умолчанию `<b-form-timepicker>` будет использовать языковой стандарт браузера по умолчанию, но вы можете указать языковой стандарт (или языковые стандарты) для использования через свойство `locale`. Свойство принимает либо одну строку языкового стандарта, либо массив строк языкового стандарта (перечисленных в порядке от наиболее предпочтительного до наименее предпочтительного).

Испускаемое событие `'context'` будет включать в себя, какой языковой стандарт был разрешен для элемента управления временем (который может отличаться от запрашиваемого языкового стандарта, в зависимости от поддерживаемых языковых стандартов `Intl`).

Для рендеринга на стороне сервера (SSR) при использовании Node.js убедитесь, что среда выполнения Node.js, которую вы используете, поддерживает `Intl` и локали, которые вы будете использовать. Дополнительные сведения см. В [документации поддержки Node Intl](https://nodejs.org/api/intl.html).

```html
<template>
  <b-row>
    <b-col cols="12" class="mb-3">
      <label for="example-locales">Локаль:</label>
      <b-form-select id="example-locales" v-model="locale" :options="locales"></b-form-select>
    </b-col>
    <b-col md="6">
      <b-form-timepicker
        v-model="value"
        v-bind="labels[locale] || {}"
        :locale="locale"
        show-seconds
        @context="onContext"
      ></b-form-timepicker>
    </b-col>
    <b-col>
      <p>Значение: <b>'{{ value }}'</b></p>
      <p class="mb-0">Контекст:</p>
      <pre class="small">{{ context }}</pre>
   </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        context: null,
        locale: 'en-US',
        locales: [
          { value: 'en-US', text: 'English US (en-US)' },
          { value: 'ru', text: 'Russian (ru)' },
          { value: 'de', text: 'German (de)' },
          { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },
          { value: 'zh', text: 'Chinese (zh)' }
        ],
        labels: {
          ru: {
            labelHours: 'Часы',
            labelMinutes: 'Минуты',
            labelSeconds: 'Секунды',
            labelIncrement: 'Увеличить',
            labelDecrement: 'Уменьшить',
            labelSelected: 'Выбранное время',
            labelNoTimeSelected: 'Время не выбрано',
            labelCloseButton: 'Закрыть'
          },
          de: {
            labelHours: 'Stunden',
            labelMinutes: 'Minuten',
            labelSeconds: 'Sekunden',
            labelIncrement: 'Erhöhen',
            labelDecrement: 'Verringern',
            labelSelected: 'Ausgewählte Zeit',
            labelNoTimeSelected: 'Keine Zeit ausgewählt',
            labelCloseButton: 'Schließen'
          },
          'ar-EG': {
            labelHours: 'ساعات',
            labelMinutes: 'الدقائق',
            labelSeconds: 'ثواني',
            labelAmpm: 'صباحا مساء',
            labelAm: 'ص',
            labelPm: 'م',
            labelIncrement: 'زيادة',
            labelDecrement: 'إنقاص',
            labelSelected: 'الوقت المحدد',
            labelNoTimeSelected: 'لا وقت المختار',
            labelCloseButton: 'قريب'
          },
          zh: {
            labelHours: '小时',
            labelMinutes: '分钟',
            labelSeconds: '秒',
            labelAmpm: '上午下午',
            labelAm: '上午',
            labelPm: '下午',
            labelIncrement: '增量',
            labelDecrement: '减量',
            labelSelected: '选定时间',
            labelNoTimeSelected: '没有选择时间',
            labelCloseButton: '关'
          }
        }
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
</script>

<!-- b-form-time-i18n.vue -->
```

### Понимание `hourCycle`

В мире используются два основных типа условных обозначений (часов): 12-часовой формат и 24-часовой формат. Свойство `hourCycle` позволяет вам получить доступ к типу часов, используемому в определенной локали. Тип часового цикла может иметь несколько различных значений, которые перечислены в таблице ниже. `hourCycle` сигнализирует, как время `'00:00:00'` (начало дня) должно быть представлено / отформатировано для пользователя определенной локали. Событие `'context'` включает в себя разрешенное значение `hourCycle`.

| `hourCycle` | Описание                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| `'h12'`     | Часовая система с использованием `1`–`12`. 12-часовые часы с полуночью, начинающейся в 12:00 |
| `'h23'`     | Часовая система с использованием `0`–`23`. 24-часовые часы с полуночью, начинающейся в 0:00  |
| `'h11'`     | Часовая система с использованием `0`–`11`. 12-часовые часы с полуночью, начинающейся в 0:00  |
| `'h24'`     | Часовая система с использованием `1`–`24`. 24-часовые часы с полуночью, начинающейся в 24:00 |

Собственный HTML5 `<input type="date">` возвращает значение времени в формате `'h23'`, а `<b-form-timepicker>` также возвращает v-model в формате `'h23'`. Это значение может отличаться от того, что представляется пользователю через графический интерфейс (кнопки вращения) компонента `<b-form-timepicker>`, в зависимости от [выбранный языковой стандарт](#интернационализация).

**Примечание:** IE 11 _не поддерживает_ разрешение значения `hourCycle` локали, поэтому мы принимаем `h12` или `h23` на основе разрешенного значения `hour12`.

### Принудительный 12- или 24-часовой интерфейс

12-часовой или 24-часовой ввод определяется локалью по умолчанию клиентского браузера (или локалью, разрешенной из свойства `locale`). Чтобы заставить 12-часовой пользовательский интерфейс, установите для свойства `hour12` значение `true`. Чтобы настроить 24-часовой пользовательский интерфейс, установите для свойства `hour12` значение `false`. По умолчанию для свойства `hour12` установлено значение `null`, которое использует разрешенный языковой стандарт для определения того, какой интерфейс использовать.

Настройка свойства `hour12` будет влиять на то, какой [`hourCycle`](#understanding-the-hourcycle) разрешается для форматирования вращающейся кнопки часов. Обратите внимание, что хотя это может повлиять на формат часовой стрелки, но результат отформатированной строки времени _может_ показывать формат `'h12` или `'h23'` из-за ограничений клиентской поддержки `Intl.DateTimeFormat` для конкретной локали. Поэтому **рекомендуется оставить свойство `hour12` равным `null` (по умолчанию)**, чтобы показать формат времени/часа по умолчанию для локали.

## Доступность

Время всплывающего окна поддерживает те же элементы управления с клавиатуры, что и [`<b-time>`](/docs/components/time#accessibility), а также следующее:

- <kbd>Esc</kbd> закроет время всплывающего окна без выбора времени

При интернационализации таймпикера важно также обновить реквизиты `label-*` соответствующими переведенными строками, чтобы международные пользователи программ чтения с экрана слышали правильные подсказки и описания.

Дополнительные сведения смотрите в документации [`<b-time>`](/docs/components/time#accessibility).

## Примечания по реализации

`<b-form-timepicker>` основан на компонентах [`<b-time>`](/docs/components/time) и [`<b-dropdown>`](/docs/components/dropdown).

`<b-form-timepicker>` использует служебные классы Bootstrap границ и флексов, а также классы кнопок (`btn-*`), раскрывающегося списка (`dropdown*`) и классы `form-control*` (плюс проверка).
Пользовательский SCSS/CSS BootstrapVue также необходим для правильного оформления окна выбора времени и всплывающего окна.

## Смотрите также

- [`<b-time>` Виджет выбора времени](/docs/components/time)
- [`<b-form-datepicker>` Ввод пользовательской формы выбора даты](/docs/components/form-datepicker)
- [`<b-calendar>` Виджет выбора даты в календаре](/docs/components/calendar)
- [`<b-dropdown>` Выпадающий компонент](/docs/components/dropdown)
