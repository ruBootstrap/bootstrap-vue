# Пагинация

> Кнопки быстрой первой, предыдущей, следующей, последней и страницы для управления разбиением на
> страницы другого компонента (например, `<b-table>` или списков).

## Обзор

`<b-pagination>` — это настраиваемый компонент ввода, который предоставляет элемент управления
вводом номера текущей страницы. Значение должно быть привязано через `v-model` в вашем приложении.
Номера страниц индексируются с 1. Количество страниц вычисляется из предоставленных значений свойств
для `total-rows` и `per-page`.

Для разбивки на страницы, которая изменяется на новый URL-адрес, вместо этого используйте компонент
[`<b-pagination-nav>`](/docs/components/pagination-nav).

**Пример использования с `<b-table>`:**

```html
<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Текущая страница: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>

<!-- b-pagination.vue -->
```

## Настройка внешнего вида

`<b-pagination>` поддерживает несколько свойств/слотов, которые позволяют настраивать внешний вид.
Все свойства `*-text` содержат только текст и не содержат HTML, но вы можете использовать для этого
аналоги слотов с одинаковыми именами.

### Ограничение количества отображаемых кнопок

Чтобы ограничить количество отображаемых кнопок страницы (включая многоточие, но исключая первую,
предыдущую, следующую и последнюю кнопки), используйте свойство `limit` , чтобы указать желаемое
количество кнопок страницы (включая многоточие, если оно показано). Ограничение `limit` по умолчанию
равно `5`. Минимальное поддерживаемое значение — `3`. Когда для `limit` установлено значение `3`,
для практических целей индикаторы с многоточием отображаться не будут.

Кнопки `first` и `last` могут быть дополнительно скрыты, установив свойство `hide-goto-end-buttons`.

Отображение `ellipsis` можно отключить, установив свойство `hide-ellipsis`.

#### Поддержка маленького экрана

На небольших экранах (например, мобильных) некоторые из кнопок `<b-pagination>` будут скрыты, чтобы
свести к минимуму возможность переноса интерфейса на несколько строк:

- Индикаторы многоточия будут скрыты на экранах `xs` и меньше.
- Кнопки с номерами страниц будут ограничены максимум тремя видимыми на экранах `xs` и меньше.

Это гарантирует, что будут видны не более 3 кнопок с номерами страниц, а также кнопки перехода
_первая_, _предыдущая_, _следующая_ и _последняя_.

### Содержимое кнопки

Полный список всех доступных слотов смотрите в разделе [Слоты](#comp-ref-b-pagination-slots) ниже.

```html
<template>
  <div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>

    <!-- Use emojis in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination>

    <!-- Use HTML and sub-components in slots -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4"
    >
      <template #first-text><span class="text-success">Первая</span></template>
      <template #prev-text><span class="text-danger">Предыдущая</span></template>
      <template #next-text><span class="text-warning">Следующая</span></template>
      <template #last-text><span class="text-info">Последняя</span></template>
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        perPage: 10,
        currentPage: 1
      }
    }
  }
</script>

<!-- b-pagination-appearance.vue -->
```

Область действия слота `page` всегда ограничена, а слоты `first-text`, `prev-text`, `next-text` и
`last-text` опционально. Слот `ellipsis-text` не ограничен.

**Свойства переменных области, доступные для слота `page`:**

| Свойство   | Тип     | Описание                                                    |
| ---------- | ------- | ----------------------------------------------------------- |
| `page`     | Number  | Номер страницы (от `1` до `numberOfPages`)                  |
| `index`    | Number  | Номер страницы (индексируется от `0` до `numberOfPages -1`) |
| `active`   | Boolean | Если страница является активной страницей                   |
| `disabled` | Boolean | Если кнопка страницы отключена                              |
| `content`  | String  | Page number as a string                                     |

**Свойства переменных области, доступные для слота `first-text`, `prev-text`, `next-text` и
`last-text`:**

| Свойство   | Тип     | Описание                                                    |
| ---------- | ------- | ----------------------------------------------------------- |
| `page`     | Number  | Номер страницы (от `1` до `numberOfPages`)                  |
| `index`    | Number  | Номер страницы (индексируется от `0` до `numberOfPages -1`) |
| `disabled` | Boolean | Если кнопка страницы отключена                              |

### Тип кнопки перейти к первому/последнему

Если вы предпочитаете иметь кнопки с первым и последним номером страницы для перехода на
соответствующую страницу, используйте свойства `first-number` и `last-number` props.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Перейти к первому номеру кнопки</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Перейти к последнему номеру кнопки</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        last-number
      ></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Перейти к первому и последнему номеру кнопки</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></b-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        perPage: 1,
        currentPage: 5
      }
    }
  }
</script>

<!-- b-pagination-goto-first-last-number.vue -->
```

### Размер кнопки

Optionally change from the default button size by setting the `size` prop to either `'sm'` for
smaller buttons or `'lg'` for larger buttons.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Маленькая</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>По умолчанию</h6>
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Большая</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" size="lg"></b-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
      }
    }
  }
</script>

<!-- b-pagination-size.vue -->
```

### Стиль таблетки

Easily switch to pill style buttons by setting the `pills` prop

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Маленькая таблетка</h6>
      <b-pagination v-model="currentPage" pills :total-rows="rows" size="sm"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Таблетка по умолчанию</h6>
      <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Большая таблетка</h6>
      <b-pagination v-model="currentPage" pills :total-rows="rows" size="lg"></b-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
      }
    }
  }
</script>

<!-- b-pagination-pills.vue -->
```

**Примечание:** Для стиля таблетки требуется пользовательский CSS/SCSS BootstrapVue.

### Выравнивание

По умолчанию компонент пагинации выравнивается по левому краю. Измените выравнивание на `center`,
`right` (`right` является псевдонимом для `end`) или `fill`, установив свойство `align` в
соответствующее значение.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Выравнивание по левому краю (по умолчанию)</h6>
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Выравнивание по центру</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-right">Выравнивание по правому краю (концу)</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="right"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Выравнивание на всю ширину</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="fill"></b-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 3
      }
    }
  }
</script>

<!-- b-pagination-alignment.vue -->
```

## Предотвращение выбора страницы

Вы можете прослушивать событие `page-click`, которое позволяет предотвратить выбор страницы. Событие
генерируется с двумя аргументами:

- `bvEvent`: Объект `BvEvent`. Вызовите`bvEvent.preventDefault()`, чтобы отменить выбор страницы
- `page`: Номер страницы для выбора (начиная с `1`)

Из соображений доступности при использовании события `page-click` для предотвращения выбора страницы
вы должны предоставить пользователю некоторые средства уведомления о том, почему страница не может
быть выбрана. Рекомендуется использовать атрибут `disabled` в компоненте `<b-pagination>` вместо
использования события `page-click` (поскольку `disabled` более интуитивно понятен для пользователей
программ чтения с экрана).

## Доступность

Компонент `<b-pagination>` предоставляет множество функций для поддержки пользователей
вспомогательных технологий, таких как атрибуты `aria-` и навигация с помощью клавиатуры.

### `aria-controls`

Когда разбивка на страницы управляет другим компонентом на странице (например, `<b-table>`),
установите свойство `aria-controls` на `id` элемента, которым он управляет. Это поможет незрячим
пользователям узнать, какой компонент обновляется/контролируется.

### ARIA метки

`<b-pagination>` предоставляет различные свойства `*-label-*`, которые используются для установки
атрибутов `aria-label` для различных элементов внутри компонента, что поможет пользователям
вспомогательных технологий.

| Свойство           | `aria-label` содержимое по умолчанию                                 |
| ------------------ | -------------------------------------------------------------------- |
| `label-first-page` | "Перейти на первую страницу"                                         |
| `label-prev-page`  | "Перейти на предыдущую страницу"                                     |
| `label-next-page`  | "Перейти на следующую страницу"                                      |
| `label-last-page`  | "Перейти на последнюю страницу"                                      |
| `label-page`       | "Перейти к странице" с добавлением номера страницы                   |
| `aria-label`       | "Пагинация", примененная к внешнему контейнеру разбиения на страницы |

`label-page` может дополнительно принимать функцию для создания aria-label. В функцию передается
единственный аргумент — номер страницы (индексируется от 1 до количества страниц).

Вы можете удалить любую метку, установив свойство в пустую строку (`''`), хотя это не рекомендуется,
если только содержимое кнопки текстом не передает ее назначение.

### Поддержка навигации с помощью клавиатуры

`<b-pagination>` поддерживает навигацию с помощью клавиатуры по умолчанию и следует шаблону
[WAI-ARIA roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_roving_tabindex).

- При нажатии на компонент разбиения на страницы будет автоматически фокусироваться кнопка текущей
  активной страницы
- <kbd>Left</kbd> (или <kbd>Up</kbd>) и <kbd>Right</kbd> (или <kbd>Down</kbd>) будут сфокусированы
  на предыдущей и следующей кнопках, соответственно в списке страниц
- <kbd>Enter</kbd> или <kbd>Space</kbd> будут выбирать (кликать) текущую кнопку страницы в фокусе
- Нажатие <kbd>Tab</kbd> переместит к следующему элементу управления или ссылке на странице, а
  нажатие <kbd>Shift</kbd>+<kbd>Tab</kbd> переместит к предыдущему элементу управления или ссылке на
  страница.

## Смотрите также

Пагинацию на основе навигации смотрите в компоненте
[`<b-pagination-nav>`](/docs/components/pagination-nav).

<!-- Component reference added automatically from component package.json -->
