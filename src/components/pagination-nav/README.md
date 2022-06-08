# Пагинация навигации

> Быстрые кнопки «первая», «предыдущая», «следующая», «последняя» и «к странице» для разбиения на
> страницы на основе навигации, поддерживающие обычные ссылки или ссылки маршрутизатора.

## Обзор

`<b-pagination-nav>` – это настраиваемый компонент ввода, обеспечивающий разбиение на страницы
навигации. Общее количество страниц, заданное свойством `number-of-pages`. Номера страниц
индексируются от 1 до `number-of-pages`.

`b-pagination-nav` попытается автоматически определить, какая ссылка страницы является активной
кнопкой страницы, на основе URL-адреса текущей страницы (либо с помощью обнаружения `$route`, либо,
если `$router` не обнаружен, URL-адрес местоположения браузера).

**Примечание:** `<b-pagination-nav>` используется для перехода к новым URL-адресам страниц. Для
управления нумерацией страниц компонентов страницы (например, нумерация таблиц или списков) вместо
этого используйте компонент [`<b-pagination>`](/docs/components/pagination).

```html
<template>
  <div class="overflow-auto">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>

<!-- b-pagination-nav-lead.vue -->
```

## Ссылка на страницу и генерация номера

По умолчанию `<b-pagination-nav>` генерирует простые теги ссылок, устанавливая для атрибута HREF
значение `base-url`, связанное с номером страницы. Свойство `base-url` по умолчанию имеет значение
`/`. Количество страниц указывается с помощью свойства `number-of-pages`. Страницы — это числа от
`1` до `number-of-pages`.

### Ссылки роутера

Чтобы сгенерировать ссылки на страницы в виде компонентов
[`<router link>`](https://router.vuejs.org/api/#router-link) (или
[`<nuxt-link>`](https://nuxtjs.org/api/components-nuxt-link#the-lt-nuxt-link-gt-component), если
обнаружен [Nuxt.js](https://nuxtjs.org/)), установите свойство `use-router`. Затем HREF станет
свойством `to` ссылки маршрутизатора. Или, при желании, используйте функцию генератора ссылок, чтобы
вернуть объект [`to` location](https://router.vuejs.org/api/#to).

Если в вашем приложении не обнаружен `$router`, `<b-pagination-nav>` будет использовать обычные
элементы `<a>`, а любой объект местоположения `to` будет преобразован в стандартный URL-адрес (если
возможно).

Поддерживаются следующие свойства ссылок маршрутизатора:

- `active-class`
- `exact`
- `exact-active-class`
- `prefetch` (`<nuxt-link>` специфическое свойство)
- `no-prefetch` (`<nuxt-link>` специфическое свойство)

Для получения подробной информации о вышеуказанных свойствах обратитесь к справочному разделу
[Поддержка Router Link](/docs/reference/router-links).

### Функция генератора ссылок

Если вам нужен более тонкий контроль над сгенерированными URL-адресами ссылок или свойствами
`<router-link>` и `to`, вы можете установить свойство `link-gen` на ссылку на функцию, которая
получает два аргумента: номер страницы и объект. содержит два поля (`link` и `page`), где `page` —
это номер страницы, а `link` — это внутренняя ссылка.

Функция `link-gen` должна возвращать либо строку (для HREF), либо объект маршрутизатора `to`. Если
возвращаемое значение является объектом, то всегда будет генерироваться маршрутизатор-ссылка (если
обнаружен `$router`). Если возвращаемое значение является строкой, по умолчанию генерируется
стандартная ссылка, если только не задан параметр `use-router`. Если используется объект
местоположения `to`, то свойство `base-url` не будет иметь никакого эффекта.

<!-- eslint-disable no-dupe-keys -->

```js
export default {
  methods: {
    // For regular HREF (or string `to` prop if `use-router` is set)
    linkGen(pageNum) {
      return `/foo/page/${pageNum}`
    },

    // Returning a router-link `to` object
    linkGen(pageNum) {
      return { path: `/foo/page/${pageNum}` }
    },

    // Returning a router-link `to` object with query parameters
    linkGen(pageNum) {
      return {
        path: '/foo/',
        query: { page: pageNum }
      }
    },

    // Returning a router-link `to` object with named route and parameters
    linkGen(pageNum) {
      return {
        name: 'posts',
        params: { post: pageNum }
      }
    }
  }
}
```

**Примечание:** При возврате от объекта местоположения `to` к стандартной ссылке (когда нет
доступного `$router`), для создания URL-адреса используются только следующие свойства
местоположения:

- `path` (если не указан, по умолчанию используется текущий URL-адрес страницы)
- `query`
- `hash` (должен включать `#` в начале, если используется)

Преобразование маршрутов `name` и `params` не поддерживается.

### Генерация номера страницы

По умолчанию `<b-pagination-nav>` отображает номера страниц (1-N) в кнопках ссылок на страницы. Вы
можете переопределить это поведение, указав ссылку на функцию для свойства `page-gen`. Ссылка на
функцию должна принимать единственный аргумент, который является номером страницы (1-N). Функция
`page-gen` должна возвращать строку.

**Примечание:** Содержимое HTML в сгенерированных строках номеров страниц **не** поддерживается. Для
базового HTML вы можете использовать область действия `page` для более тонкого форматирования.

**Пример: использование массива ссылок для создания пагинации:**

```html
<template>
  <div class="overflow-auto">
    <b-pagination-nav
      :link-gen="linkGen"
      :page-gen="pageGen"
      :number-of-pages="links.length"
    ></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: ['#foo', '#bar', '#baz', '#faz']
      }
    },
    methods: {
      linkGen(pageNum) {
        return this.links[pageNum - 1]
      },
      pageGen(pageNum) {
        return this.links[pageNum - 1].slice(1)
      }
    }
  }
</script>

<!-- b-pagination-nav-links.vue -->
```

### Предоставление массива страниц

Вместо того, чтобы использовать `number-of-pages` для автоматического создания ссылок на страницы,
вы можете передать массив ссылок через свойство `pages`. Когда свойство `pages` имеет массив длины
`1` или больше, он будет использоваться для генерации ссылок на страницы.

Массив может быть одного из двух форматов:

- Массив строк, где каждая запись является ссылкой. в этом режиме номера кнопок страниц будут
  автоматически установлены от `1` до количества записей в массиве.
- Массив объектов, где каждый объект имеет два поля: `link` (обязательно) и `text` (необязательно).
  Ссылка может быть либо строкой, указывающей ссылку, либо объектом местоположения `to`. `text`
  будет содержимым кнопок ссылок на страницы. Если `text` не указан, по умолчанию содержимое кнопки
  страницы будет содержать номер страницы.

Когда предоставлена строковая ссылка, `<b-pagination-nav>` будет использовать обычные элементы
`<a>`, если только не установлено свойство `use-router`. Когда ссылка (в форме массива объектов)
является объектом местоположения `to`, тогда ссылка на маршрутизатор будет автоматически
сгенерирована (если обнаружен `$router`).

В формате массива строки ссылок (и/или объекты местоположения) используются как есть, а свойство
`base-url` будет игнорироваться.

```html
<template>
  <b-pagination-nav :pages="pages1" use-router></b-pagination-nav>
  <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>
  <b-pagination-nav :pages="pages3" use-router></b-pagination-nav>
</template>

<script>
export default {
  data() {
    return {
      // Simple array of strings
      pages1: ['?page=1', '?page=2', '?page=3'],
      // Array of objects with string links
      pages2: [
        { link: '?page=1', text: 'One' },
        { link: '?page=2', text: 'Two' },
        { link: '?page=3', text: 'Three' }
      ],
      // Array of objects with router `to` locations
      pages3: [
        { link: { query: { page: 1 } }, text: 'Page 1' },
        { link: { query: { page: 2 } }, text: 'Page 2' },
        { link: { query: { page: 3 } }, text: 'Page 3' }
      ]
    }
  }
}
</script>

<!-- pagination-nav-array.vue -->
```

## Настройка внешнего вида

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

`<b-pagination-nav>` поддерживает несколько свойств/слотов, которые позволяют настраивать внешний
вид. Все свойства `*-text` содержат только текст и не содержат HTML, но вы можете использовать для
этого аналоги слотов с одинаковыми именами.

Полный список всех доступных слотов смотрите в разделе [Слоты](#comp-ref-b-pagination-slots) ниже.

```html
<template>
  <div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination-nav>

    <!-- Use emojis in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination-nav>

    <!-- Use HTML and sub-components in slots -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
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
    </b-pagination-nav>
  </div>
</template>

<!-- b-pagination-nav-appearance.vue -->
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
| `content`  | String  | Содержимое по умолчанию или результат функции `page-gen`    |

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
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Перейти к последнему номеру кнопки</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        last-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Перейти к первому и последнему номеру кнопки</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
        last-number
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pages: 100,
        currentPage: 5
      }
    }
  }
</script>

<!-- b-pagination-nav-goto-first-last-number.vue -->
```

### Размер кнопки

При желании измените размер кнопки по умолчанию, установив свойство `size` либо на `'sm'` для кнопок
меньшего размера, либо на `'lg'` для кнопок большего размера.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Маленькая</h6>
      <b-pagination-nav size="sm" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>По умолчанию</h6>
      <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Большая</h6>
      <b-pagination-nav size="lg" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-size.vue -->
```

### Стиль таблетки

Легко переключайтесь на кнопки в стиле таблеток, установив свойство `pills`

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Маленькая таблетка</h6>
      <b-pagination-nav pills size="sm" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Таблетка по умолчанию</h6>
      <b-pagination-nav pills number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Большая таблетка</h6>
      <b-pagination-nav pills size="lg" number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-pills.vue -->
```

**Примечание:** Для стиля таблетки требуется пользовательский CSS/SCSS BootstrapVue.

### Выравнивание

По умолчанию компонент пагинации выравнивается по левому краю. Измените выравнивание на `center`,
`right` (`right` - это псевдоним для `end`) или `fill`, установив свойство `align` на
соответствующее значение.

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Выравнивание по левому краю (по умолчанию)</h6>
      <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Выравнивание по центру</h6>
      <b-pagination-nav number-of-pages="10" base-url="#" align="center"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-right">Выравнивание по правому краю (концу)</h6>
      <b-pagination-nav number-of-pages="10" base-url="#" align="right"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Выравнивание на всю ширину</h6>
      <b-pagination-nav number-of-pages="10" base-url="#" align="fill"></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-alignment.vue -->
```

## Автоматическое определение текущей страницы и поддержка `v-model`

`<b-pagination-nav>` попытается автоматически определить, какая кнопка страницы должна быть
активной, на основе текущего URL-адреса страницы или `$route` (если обнаружен маршрутизатор). В тех
случаях, когда он не может обнаружить страницу, никакие кнопки номеров страниц не будут в активном
состоянии, а первая, предыдущая, следующая и последняя кнопки будут в отключенном состоянии до тех
пор, пока не будет нажата кнопка страницы.

Опционально поддерживается `v-model` (обновляется событием `input` и привязывается к свойству
`value`). Установка для `v-model` значения `null` (по умолчанию) первоначально вызовет
автоматическое обнаружение активной страницы, а затем будет обновлен номер текущей страницы
(индексируется от `1` до количества страниц). Если вы изначально установили для `v-model` значение
`1` или больше, автоматическое определение страницы не произойдет (пока пользователь не нажмет
кнопку страницы), а страница, указанная `v-model`, будет установить как `active`.

Чтобы отключить автоматическое обнаружение активной страницы, установите свойство `no-page-detect` в
значение `true`.

**Примечание:** Автоматическое обнаружение страниц должно перебирать все возможные ссылки на
страницы, пока не будет обнаружено совпадение. Для большего `number-of-pages`, эта проверка может
занять некоторое время, поэтому вы можете вручную контролировать, какая страница является активной с
помощью `v-model` и свойства `no-page-detect`.

## Предотвращение выбора страницы

Вы можете прослушивать событие `page-click`, которое позволяет предотвратить выбор страницы. Событие
генерируется с двумя аргументами:

- `bvEvent`: Объект `BvEvent`. Вызовите`bvEvent.preventDefault()`, чтобы отменить выбор страницы
- `page`: Номер страницы для выбора (начиная с `1`)

Из соображений доступности при использовании события `page-click` для предотвращения выбора страницы
вы должны предоставить пользователю некоторые средства уведомления о том, почему страница не может
быть выбрана. Рекомендуется использовать атрибут `disabled` в компоненте `<b-pagination-nav>` вместо
использования события `page-click` (поскольку `disabled` более интуитивно понятен для пользователей
программ чтения с экрана).

## Доступность

Компонент `<b-pagination-nav>` предоставляет множество функций для поддержки пользователей
вспомогательных технологий, таких как атрибуты `aria-` и навигация с помощью клавиатуры.

### ARIA метки

`<b-pagination-nav>` предоставляет различные свойства `*-label-*`, которые используются для
установки атрибутов `aria-label` для различных элементов внутри компонента, что поможет
пользователям вспомогательных технологий.

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

### Навигация с помощью клавиатуры

`<b-pagination-nav>` поддерживает стандартную навигацию с помощью клавиш <kbd>Tab</kbd>.

## Смотрите также

Обратитесь к справочной странице [Поддержка маршрутизатора](/docs/reference/router-links) для
конкретных свойств маршрутизатора.

Для управления нумерацией страниц компонента (например, `<b-table>`) или списка страниц используйте
компонент [`<b-pagination>`](/docs/components/pagination).

<!-- Component reference added automatically from component package.json -->
