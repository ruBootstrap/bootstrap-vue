# Выбор даты формы

> `<b-form-datepicker>` - это элемент управления формы ввода настраиваемого средства выбора даты BootstrapVue, который обеспечивает полное соответствие WAI-ARIA и поддержку интернационализации.

## Обзор

В качестве компонента оболочки элемента управления формой для компонента [`<b-calendar>`](/docs/components/calendar) он обеспечивает дополнительное представление состояния проверки и компактный интерфейс. Собственные входные данные даты HTML5 различаются по представлению, доступности и в некоторых случаях поддерживаются не всеми браузерами. `<b-form-datepicker>` обеспечивает согласованный и доступный интерфейс для всех браузерных платформ и устройств.

```html
<template>
  <div>
    <label for="example-datepicker">Выберите дату</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
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

<!-- b-form-datepicker.vue -->
```

`<b-form-datepicker>` поддерживает многие из свойств, доступных в [`<b-calendar>`](/docs/components/calendar), а также некоторые из свойств, доступных в [`<b-dropdown>`](/docs/components/dropdown).

## Возвращаемое значение `v-model`

По умолчанию `<b-form-datepicker>` возвращает даты в виде строки в формате `YYYY-MM-DD`, который является тем же форматом, что и элементы управления `<input type="date">`. Вместо этого вы можете заставить `<b-form-datepicker>` возвращать объект `Date` (без временной части) в качестве значения `v-model`, установив свойство `value-as-date`.

Если дата не выбрана, `<b-form-datepicker>` возвращает пустую строку `''` или возвращает `null`, если задано свойство `value-as-date`.

Обратите внимание, что когда свойство `value-as-date` установлено, возвращаемый объект `Date` будет находиться в часовом поясе браузера по умолчанию.

Если `<b-form-datepicker>` имеет значение, установленное для свойства `name`, будет создан скрытый ввод, для которого атрибут name будет установлен на значение свойства `name`, а атрибут value будет установить выбранную дату в виде строки `YYYY-MM-DD`. Это позволит отправить выбранное значение `<b-form-datepicker>` через отправку формы в собственном браузере.

## Отключено и доступно только для чтения

Установка свойства `disabled` удалит всю интерактивность компонента `<b-form-datepicker>`.

Установка свойства `readonly` отключит выбор даты, но сохранит интерактивность компонента, позволяя осуществлять навигацию по дате. `v-model` не будет обновляться в состоянии только для чтения.

Чтобы отключить определенные даты или установить минимальные и максимальные пределы дат, обратитесь к разделу [Ограничения даты](#date-constraints).

```html
<template>
  <div>
    <b-form-group
      label="Select date picker interactive state"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        v-model="state"
        :aria-describedby="ariaDescribedby"
        aria-controls="ex-disabled-readonly"
      >
        <b-form-radio value="disabled">Отключено</b-form-radio>
        <b-form-radio value="readonly">Только чтение</b-form-radio>
        <b-form-radio value="normal">Обычный</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-form-datepicker
      id="ex-disabled-readonly"
      :disabled="disabled"
      :readonly="readonly"
    ></b-form-datepicker>
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

<!-- b-form-datepicker-disabled-readonly.vue -->
```

## Ограничения по дате

### Минимальные и максимальные даты

Ограничьте диапазон календаря с помощью свойств `min` и `max`. Свойства принимают строку даты в формате `YYYY-MM-DD` или объект `Date`.

```html
<template>
  <div>
    <b-form-datepicker v-model="value" :min="min" :max="max" locale="ru"></b-form-datepicker>
  </div>
</template>

<script>
  export default {
    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // 15-е за два месяца до
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() - 2)
      minDate.setDate(15)
      // 15-е через два месяца
      const maxDate = new Date(today)
      maxDate.setMonth(maxDate.getMonth() + 2)
      maxDate.setDate(15)

      return {
        value: '',
        min: minDate,
        max: maxDate
      }
    }
  }
</script>

<!-- b-form-datepicker-min-max.vue -->
```

### Отключение дат

Если вам нужно отключить определенные даты в средстве выбора даты, укажите ссылку на функцию для свойства `date-disabled-fn`. Функции передаются два аргумента:

- `ymd` Дата в виде строки `YYYY-MM-DD`
- `date` Дата как объект `Date`

Функция должна либо возвращать `true`, если дата _не может_ быть выбрана (отключена), либо `false`, если дата _может_ быть выбрана (включена). Обратите внимание, что функция **не может** быть асинхронной и должна возвращать значение как можно быстрее.

```html
<template>
  <div>
    <b-form-datepicker v-model="value" :date-disabled-fn="dateDisabled" locale="ru"></b-form-datepicker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      dateDisabled(ymd, date) {
        // Отключаем выходные (воскресенье = `0`, суббота = `6`) и отключаем дни, приходящиеся на 13-е число месяца
        const weekday = date.getDay()
        const day = date.getDate()
        // Вернет `true`, если дату нужно отключить
        return weekday === 0 || weekday === 6 || day === 13
      }
    }
  }
</script>

<!-- b-form-datepicker-disabled-dates.vue -->
```

Обратите внимание, что ограничения даты `min` и `max` оцениваются в первую очередь, перед `date-disabled-fn`.

## Состояния валидации

`<b-form-datepicker>` поддерживает недопустимый и допустимый стиль через логическое свойство `state`. Если для параметра `state` присвоено логическое значение `false`, ввод будет задан как недопустимый, а при установке для него логического значения `true` - он будет обозначен как действительный. Установка для параметра `state` значения `null` не будет отображать никаких стилей состояния проверки (по умолчанию).

```html
<template>
  <div>
    <label for="datepicker-invalid">Выберите дату (невалидный стиль)</label>
    <b-form-datepicker id="datepicker-invalid" :state="false" class="mb-2"></b-form-datepicker>
    <label for="datepicker-valid">Выберите дату (валидный стиль)</label>
    <b-form-datepicker id="datepicker-valid" :state="true"></b-form-datepicker>
  </div>
</template>

<!-- b-form-datepicker-invalid-valid.vue -->
```

Обратите внимание, что встроенная проверка браузера _не_ доступна с помощью `<b-form-datepicker>`.

## Стилизация

### Варианты

Выбранная кнопка даты (цвет фона) по умолчанию соответствует варианту темы `'primary'`. Вы можете изменить это на любой из цветов варианта темы Bootstrap v4: `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'` и т. д. С помощью свойства `selected-variant`.

Сегодняшняя дата также будет выделена (цветом текста) с использованием того же варианта, что и выбранная дата по умолчанию. Чтобы указать другой цвет темы, который будет использоваться для сегодняшней даты, используйте свойство `today-variant`.

Чтобы полностью отключить выделение сегодняшней даты, установите свойство `no-highlight-today`.

Кнопки навигации по умолчанию относятся к `'secondary'` варианту темы. Вы можете изменить это с помощью свойства `nav-button-variant`.

### Размеры

Хотите меньший или больший элемент управления `<b-form-datepicker>`? Установите для свойства `size` значение `'sm'` для меньшего элемента управления формой или `'lg'` для элемента управления формы большего размера. Обратите внимание, что это не влияет на размер всплывающего диалогового окна календаря.

```html
<template>
  <div>
    <label for="datepicker-sm">Маленький датапикер</label>
    <b-form-datepicker id="datepicker-sm" size="sm" locale="ru" class="mb-2"></b-form-datepicker>
    <label for="datepicker-lg">Большой датапикер</label>
    <b-form-datepicker id="datepicker-lg" size="lg" locale="ru"></b-form-datepicker>
  </div>
</template>

<!-- b-form-datepicker-sizes.vue -->
```

### Заполнитель

Если дата не выбрана, добавьте в элемент управления произвольный текст-заполнитель с помощью свойства `placeholder`. Если заполнитель не указан, используется значение свойства `label-no-date-selected`.

```html
<template>
  <div>
    <label for="datepicker-placeholder">Выбор даты с заполнителем</label>
    <b-form-datepicker id="datepicker-placeholder" placeholder="Выберите дату" locale="ru"></b-form-datepicker>
  </div>
</template>

<!-- b-form-datepicker-placeholder.vue -->
```

### Дополнительные элементы управления

Добавьте дополнительные кнопки управления в нижнюю часть всплывающего окна календаря с помощью свойств `today-button`, `reset-button` и `close-button`.

- Кнопка сегодня выбирает сегодняшнюю дату
- Кнопка сброса либо очищает выбранную дату, либо устанавливает дату в значение свойства `reset-value` (если предусмотрено)
- Кнопка закрытия закрывает всплывающее окно календаря

По умолчанию нажатие кнопки «Сегодня» или «Сброс» также закрывает всплывающее окно календаря, если не установлено свойство `no-close-on-select`.

```html
<template>
  <div>
    <label for="datepicker-buttons">Датапикер с дополнительными кнопками нижнего колонтитула</label>
    <b-form-datepicker
      id="datepicker-buttons"
      today-button
      reset-button
      close-button
      locale="ru"
    ></b-form-datepicker>
  </div>
</template>

<!-- b-form-datepicker-buttons.vue -->
```

Текст для дополнительных кнопок может быть установлен с помощью свойств `label-today-button`, `label-reset-button` и `label-close-button`. Из-за ограниченной ширины нижнего колонтитула рекомендуется делать эти ярлыки короткими.

Обратите внимание, что кнопка `Set Today` может не устанавливать сегодняшнюю дату для элемента управления, если сегодняшняя дата выходит за рамки ограничений `min` или `max` диапазона дат. В случае, если он находится за пределами диапазона, будет установлено значение `min` или `max` (в зависимости от того, какая из них закрывается до сегодняшней даты).

### Размещение в раскрывающемся списке

Используйте выпадающие свойства `right`, `dropup`, `dropright`, `dropleft`, `no-flip` и `offset` для управления расположением всплывающего календаря.

Обратитесь к разделу [`<b-dropdown>` positioning section](/docs/components/dropdown#positioning) для получения подробной информации об эффектах и использовании этих свойств.

### Начальная открытая календарная дата

<span class="badge badge-info small">v2.7.0+</span>

По умолчанию, если дата не выбрана, при открытии календарный вид будет установлен на текущий месяц (или на `min` или `max` дату, если сегодняшняя дата выходит за пределы диапазона `min` или `max`). Вы можете изменить это поведение, указав дату через свойство `initial-date`. Свойство начальной даты будет использоваться для определения календарного месяца, который будет первоначально представлен пользователю. Он не устанавливает значение компонента.

### Темный режим

Хотите модное всплывающее окно с темным фоном вместо светлого? Установите для свойства `dark` значение `true`, чтобы включить темный фон.

### Дополнительные кнопки навигации декады

Установите свойство `show-decade-nav` , чтобы включить кнопки предыдущей и следующей декады на панели инструментов навигации по дате.

Свойства `label-prev-decade` и `label-next-decade` могут использоваться для предоставления пользовательского текста метки для кнопок декады.

Для примера использования см. [Раздел интернационализации](#internationalization) ниже.

### Режим только кнопки

<span class="badge badge-info small">v2.7.0+</span>

Представьте себе кнопку, запускающую диалог выбора даты, или хотите предоставить собственное дополнительное поле для ввода текста? Используйте свойство `button-only`, чтобы отобразить указатель даты как кнопку раскрывающегося списка. Отформатированная метка даты будет отображаться с классом `sr-only` (доступен только для программ чтения с экрана).

В следующем простом примере мы помещаем указатель даты (режим только кнопки) как добавление к `<b-input-group>`, и мы используем событие `context` для получения отформатированной строки даты и значения:

```html
<template>
  <div>
    <label for="example-input">Выберите дату</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="value"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="value"
          button-only
          right
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
    <p class="mb-1">Значение: '{{ value }}'</p>
    <p class="mb-1">Выбрано: '{{ selected }}'</p>
    <p>Отформатировано: '{{ formatted }}'</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        formatted: '',
        selected: ''
      }
    },
    methods: {
      onContext(ctx) {
        // Дата, отформатированная в локали, или строка `label-no-date-selected`
        this.formatted = ctx.selectedFormatted
        // Следующее будет пустой строкой, пока не будет введена действительная дата
        this.selected = ctx.selectedYMD
      }
    }
  }
</script>

<!-- b-form-datepicker-button-only.vue -->
```

Управляйте размером кнопки с помощью свойства `size`, а вариантом кнопки - с помощью свойства `button-variant`
prop.

### Формат строки даты

<span class="badge badge-info small">v2.6.0+</span>

Чтобы изменить параметры формата отображаемого текста даты внутри компонента, например в заголовке или заполнителе установите свойство `date-format-options` для объекта, содержащего запрошенные свойства формата для объекта `Intl.DateTimeFormat` (смотрите также [Интернационализация](#internationalization)).

```html
<template>
  <div>
    <label for="datepicker-dateformat1">Пользовательский формат даты</label>
    <b-form-datepicker
      id="datepicker-dateformat1"
      :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
      locale="ru"
    ></b-form-datepicker>

    <label class="mt-3" for="datepicker-dateformat2">Краткий формат даты</label>
    <b-form-datepicker
      id="datepicker-dateformat2"
      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
      locale="ru"
    ></b-form-datepicker>
  </div>
</template>

<!-- b-form-datepicker-dateformat.vue -->
```

В следующей таблице приведены допустимые параметры для каждого свойства формата:

| Свойство  | Возможные значения                                           |
| --------- | ------------------------------------------------------------ |
| `year`    | `'numeric'` или `'2-digit'`                                  |
| `month`   | `'numeric'`, `'2-digit'`, `'long'`, `'short'` или `'narrow'` |
| `day`     | `'numeric'` или `'2-digit'`                                  |
| `weekday` | `'long'`, `'short'` или `'narrow'`                           |

Примечания:

- Отсутствие определенных параметров может повлиять на форматированную текстовую строку, например `weekday`
- Отформатированное значение будет варьироваться в зависимости от разрешенного языкового стандарта. Некоторые языки могут не поддерживать `'narrow'` формат и будут использовать `'short'` или `long'` (если `'short'` недоступен)
- Всегда будут отображаться `year`, `month` и `day`. Если вам нужно не указывать значение, установите для свойства значение `undefined`, хотя это крайне не рекомендуется по причинам доступности

### Формат заголовка названия дня недели

<span class="badge badge-info small">2.12.0+</span>

Формат заголовка имени дня недели календаря по умолчанию `'short'`, который обычно представляет собой трехсимвольное сокращение дня недели, хотя некоторые [локали](#internationalization) могут переопределить это. Форматом можно управлять с помощью свойства `weekday-header-format`, которое принимает одно из трех значений:

- `'long'` t- полное название дня недели (например, <samp>Вторник</samp>). Удобно при использовании календаря полной ширины. Избегайте использования с шириной календаря по умолчанию.
- `'short'` обычно представляет собой двух- или трехбуквенное сокращение названия дня недели, в зависимости от выбранного языка (например, "Вт").
- `'narrow'` обычно односимвольное сокращение (например, <samp>В</samp>). Два будних дня могут иметь один и тот же короткий стиль для некоторых регионов (например, короткий стиль вторника и четверга - <samp>Ч</samp>). Это может быть удобно для тех языков, которые не поддерживают `'short'` формат, например для локалей `'ar'` и `'fa'`.

### Слоты для кнопок навигации по дате

<span class="badge badge-info small">2.12.0+</span>

Чтобы изменить содержимое кнопок навигации по дате календаря, BootstrapVue предоставляет слоты с заданной областью для каждой кнопки:

- `'nav-prev-decade'`
- `'nav-prev-year'`
- `'nav-prev-month'`
- `'nav-this-month'` (кнопка перехода к выбранному/сегодня)
- `'nav-next-month'`
- `'nav-next-year'`
- `'nav-next-decade'`

Все семь слотов имеют одинаковое доступное свойство области действия:

| Свойство | Тип     | Описание                                                                              |
| -------- | ------- | ------------------------------------------------------------------------------------- |
| `isRTL`  | Boolean | Будет иметь значение `true`, если панель навигации по дате отображается справа налево |

Вы можете использовать свойство `isRTL`, чтобы« перевернуть »содержимое кнопки назад и вперед, чтобы обработать изменение ориентации слева направо на справа налево &mdash; т.е. кнопка предыдущего года будет справа, когда `isRTL` имеет значение `true`, а не слева.

### Выпадающий календарь в полную ширину

Чтобы создать раскрывающийся список календаря с полной шириной (где ширина соответствует ширине ввода), просто установите свойство `menu-class` на `'w-100'` и установите свойство `calendar-width` на `'100%'`:

```html
<template>
  <div>
    <label for="datepicker-full-width">Выберите дату</label>
    <b-form-datepicker
      id="datepicker-full-width"
      v-model="value"
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
    ></b-form-datepicker>
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

<!-- b-form-datepicker-full-width.vue -->
```

## Интернационализация

Интернационализация календаря средства выбора даты обеспечивается через [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat), за исключением меток, применяемых к элементам. элемента управления календарем (aria-labels, selected status и help text). Вы должны предоставить свои собственные переводы для этих этикеток. Доступные языковые стандарты будут зависеть от браузера (не все браузеры поддерживают все языковые стандарты).

По умолчанию `<b-form-datepicker>` будет использовать языковой стандарт браузера по умолчанию, но вы можете указать языковой стандарт (или языковые стандарты) для использования с помощью свойства `locale`. Свойство принимает либо одну строку языкового стандарта, либо массив строк языкового стандарта (перечисленных в порядке предпочтительного языкового стандарта).

В календаре неделя начинается в воскресенье. Это можно изменить, установив для свойства `start-weekday` значение от `0` до `6`, где `0` - воскресенье, `1` - понедельник, а `6` - суббота.

```html
<template>
  <div>
    <label for="example-locales">Локаль:</label>
    <b-form-select id="example-locales" v-model="locale" :options="locales" class="mb-2"></b-form-select>

    <label for="example-weekdays">Начало рабочего дня:</label>
    <b-form-select id="example-weekdays" v-model="weekday" :options="weekdays" class="mb-2"></b-form-select>

    <div>
      <b-form-checkbox v-model="showDecadeNav" switch inline class="my-2">
        Показать кнопки навигации по декаде
      </b-form-checkbox>

      <b-form-checkbox v-model="hideHeader" switch inline class="my-2">
        Скрыть заголовок календаря
      </b-form-checkbox>
    </div>

    <label for="example-i18n-picker">Выбор даты:</label>
    <b-form-datepicker
      id="example-i18n-picker"
      v-model="value"
      v-bind="labels[locale] || {}"
      :locale="locale"
      :start-weekday="weekday"
      :show-decade-nav="showDecadeNav"
      :hide-header="hideHeader"
      class="mb-2"
     ></b-form-datepicker>
     <p>Значение: <b>'{{ value }}'</b></p>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        locale: 'ru-Ru',
        showDecadeNav: false,
        hideHeader: false,
        locales: [
          { value: 'en-US', text: 'English US (en-US)' },
          { value: 'de', text: 'German (de)' },
          { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },
          { value: 'zh', text: 'Chinese (zh)' },
          { value: 'ru-Ru', text: 'Русский (ru-Ru)' }
        ],
        weekday: 0,
        weekdays: [
          { value: 0, text: 'Воскресенье' },
          { value: 1, text: 'Понедельник' },
          { value: 6, text: 'Суббота' }
        ],
        labels: {
          de: {
            labelPrevDecade: 'Vorheriges Jahrzehnt',
            labelPrevYear: 'Vorheriges Jahr',
            labelPrevMonth: 'Vorheriger Monat',
            labelCurrentMonth: 'Aktueller Monat',
            labelNextMonth: 'Nächster Monat',
            labelNextYear: 'Nächstes Jahr',
            labelNextDecade: 'Nächstes Jahrzehnt',
            labelToday: 'Heute',
            labelSelected: 'Ausgewähltes Datum',
            labelNoDateSelected: 'Kein Datum gewählt',
            labelCalendar: 'Kalender',
            labelNav: 'Kalendernavigation',
            labelHelp: 'Mit den Pfeiltasten durch den Kalender navigieren'
          },
          'ar-EG': {
            weekdayHeaderFormat: 'narrow',
            labelPrevDecade: 'العقد السابق',
            labelPrevYear: 'العام السابق',
            labelPrevMonth: 'الشهر السابق',
            labelCurrentMonth: 'الشهر الحالي',
            labelNextMonth: 'الشهر المقبل',
            labelNextYear: 'العام المقبل',
            labelNextDecade: 'العقد القادم',
            labelToday: 'اليوم',
            labelSelected: 'التاريخ المحدد',
            labelNoDateSelected: 'لم يتم اختيار تاريخ',
            labelCalendar: 'التقويم',
            labelNav: 'الملاحة التقويم',
            labelHelp: 'استخدم مفاتيح المؤشر للتنقل في التواريخ'
          },
          zh: {
            weekdayHeaderFormat: 'narrow',
            labelPrevDecade: '过去十年',
            labelPrevYear: '上一年',
            labelPrevMonth: '上个月',
            labelCurrentMonth: '当前月份',
            labelNextMonth: '下个月',
            labelNextYear: '明年',
            labelNextDecade: '下一个十年',
            labelToday: '今天',
            labelSelected: '选定日期',
            labelNoDateSelected: '未选择日期',
            labelCalendar: '日历',
            labelNav: '日历导航',
            labelHelp: '使用光标键浏览日期'
          },
          'ru-Ru: {
            weekdayHeaderFormat: 'narrow',
            labelPrevDecade: 'Предыдущее десятилетие',
            labelPrevYear: 'Предыдущий год',
            labelPrevMonth: 'Предыдущий месяц',
            labelCurrentMonth: 'Текущий месяц',
            labelNextMonth: 'Следующий месяц',
            labelNextYear: 'Следующий год',
            labelNextDecade: 'Следующее десятилетие',
            labelToday: 'Сегодня',
            labelSelected: 'Выбранная дата',
            labelNoDateSelected: 'Дата не выбрана',
            labelCalendar: 'Календарь',
            labelNav: 'Навигация по календарю',
            labelHelp: 'Используйте клавиши со стрелками для навигации по календарю'
          }
        }
      }
    }
  }
</script>

<!-- b-form-datepicker-i18n.vue -->
```

Вы можете прослушивать событие `context`, чтобы определить локаль и направленность, на которые разрешился календарь.

Дополнительные сведения смотрите в документации [`<b-calendar>`](/docs/components/calendar#internationalization).

## Доступность

Всплывающий календарь поддерживает те же [элементы управления с клавиатуры, что и `<b-calendar>`](/docs/components/calendar#accessibility), а также следующее:

- <kbd>Esc</kbd> закроет всплывающий календарь без выбора даты

При интернационализации datepicker важно также обновить свойства `label-*` соответствующими переведенными строками, чтобы международные пользователи программ чтения с экрана слышали правильные подсказки и описания.

Дополнительные сведения смотрите в документации [`<b-calendar>`](/docs/components/calendar#accessibility).

## Примечания по реализации

`<b-form-datepicker>` основан на компонентах [`<b-calendar>`](/docs/components/calendar) и [`<b-dropdown>`](/docs/components/dropdown).

`<b-form-datepicker>` использует служебные классы Bootstrap border и flex, а также классы кнопок (`btn-*`), классы раскрывающегося списка (`dropdown*`) и `form-control*` (плюс валидация) классы.
Пользовательский SCSS/CSS BootstrapVue также необходим для правильного оформления средства выбора даты и календаря.

## Смотрите также

- [`<b-form-timepicker>` Ввод настраиваемой формы выбора времени](/docs/components/form-timepicker)
- [`<b-calendar>` Виджет выбора даты в календаре](/docs/components/calendar)
- [`<b-time>` Виджет выбора времени](/docs/components/time)
- [`<b-dropdown>` Выпадающий компонент](/docs/components/dropdown)
