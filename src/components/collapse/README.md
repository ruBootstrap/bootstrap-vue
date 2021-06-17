# Сворачиваемое

> Легко переключайте видимость практически любого контента на ваших страницах в вертикально сворачивающемся контейнере.
> Включает поддержку для изготовления аккордеонов. Видимость можно легко переключить с помощью нашей [директивы `v-b-toggle`](/docs/directives/toggle) или с помощью `v-model`.

```html
<div>
  <b-button v-b-toggle.collapse-1 variant="primary">Переключить коллапс</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Свернутое содержимое здесь</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Переключить внутренний коллапс</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Привет!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
</div>

<!-- b-collapse.vue -->
```

## Применение

Другие элементы могут легко переключать компоненты `<b-collapse>` с помощью [директивы `v-b-toggle`](/docs/directives/toggle).

```html
<div>
  <!-- Использование модификаторов -->
  <b-button v-b-toggle.collapse-2 class="m-1">Переключить коллапс</b-button>

  <!-- Использование значения -->
  <b-button v-b-toggle="'collapse-2'" class="m-1">Переключить коллапс</b-button>

  <!-- Элемент для сворачивания -->
  <b-collapse id="collapse-2">
    <b-card>Я сворачиваемый контент!</b-card>
  </b-collapse>
</div>

<!-- b-collapse-usage.vue -->
```

Смотрите [документацию по директиве `v-b-toggle`](/docs/directives/toggle) для получения подробной информации об использовании.

## Первоначальная видимость (начало расширено)

Чтобы показать `<b-collapse>` изначально, установите свойство `visible`:

```html
<div>
  <b-button v-b-toggle.collapse-3 class="m-1">Переключить коллапс</b-button>
  <b-collapse visible id="collapse-3">
    <b-card>Я должен начать открываться!</b-card>
  </b-collapse>
</div>

<!-- b-collapse-visible.vue -->
```

По умолчанию изначально видимый коллапс не анимируется при монтировании. Чтобы включить анимацию разворачивания сворачивания при монтировании (когда `visible` или `v-model` имеет значение `true`), установите свойство `appear` на `<b-collapse>`.

## Поддержка `v-model`

Состояние свернутого (видимого) компонента также может быть установлено с помощью `v-model`, которая внутренне привязывается к свойству `visible`.

Обратите внимание, что при использовании `v-model` для управления `<b-collapse>` атрибуты `aria-*` и класс `collapsed` не помещаются автоматически на кнопку триггера (как в случае использования директивы `v-b-toggle`). В этом примере мы **должны сами контролировать атрибуты** для надлежащей поддержки специальных возможностей.

```html
<template>
  <div>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Переключить коллапс
    </b-button>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>Я должен начать открываться!</b-card>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: true
      }
    }
  }
</script>

<!-- b-collapse-v-model.vue -->
```

## Запуск нескольких свернутых элементов

Вы даже можете свернуть несколько компонентов `<b-collapse>` с помощью одного `v-b-toggle` , указав несколько целевых идентификаторов с помощью _модификаторов_.

Вы также можете передать несколько целевых идентификаторов с помощью директивы _значение_ в BootstrapVue версии v2.14.0+.

```html
<div>
  <!-- Через несколько модификаторов директив -->
  <b-button v-b-toggle.collapse-a.collapse-b>Переключить коллапс A и B</b-button>

  <!-- Строка идентификаторов, разделенных пробелами, передается в значение директивы -->
  <b-button v-b-toggle="'collapse-a collapse-b'">Переключить коллапс A и B</b-button>

  <!-- Через массив идентификаторов строк, переданных в значение директивы -->
  <b-button v-b-toggle="['collapse-a', 'collapse-b']">Переключить коллапс A и B</b-button>

  <!-- Элементы для сворачивания -->
  <b-collapse id="collapse-a" class="mt-2">
    <b-card>Я сворачиваемый контент A!</b-card>
  </b-collapse>
  <b-collapse id="collapse-b" class="mt-2">
    <b-card>Я сворачиваемый контент B!</b-card>
  </b-collapse>
</div>

<!-- b-collapse-trigger-multiple.vue -->
```

## Поддержка аккордеона

Превратите группу компонентов `<b-collapse>` в аккордеон, предоставив идентификатор группы аккордеона через свойство `accordion`. Обратите внимание, что в группе аккордеона может быть открыт только один сверток одновременно.

```html
<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Аккордеон 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Я начинаю открывать, потому что <code>visible</code> имеет значение <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Аккордеон 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Аккордеон 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
  }
</script>

<!-- b-accordion.vue -->
```

**Примечание:**

- При использовании режима аккордеона убедитесь, что вы разместили элементы триггера и компоненты `<b-collapse>` внутри элемента с помощью `role="tablist"` и установите `role="tab"` для каждого контейнера элемента триггера (каждый триггер элемент должен быть обернут), чтобы помочь пользователям программ чтения с экрана перемещаться по группе аккордеонов.
- Если вы используете функцию `v-model` из `<b-collapse>` в режиме аккордеона, не привязывайте свойство `v-model` или `visible` всех коллапсов в группе аккордеона к одной и той же переменной!
- Убедитесь, что не более одного элемента `<b-collapse>` в группе аккордеона имеет значение свойства `visible` и/или `v-model`, равное `true`. Одновременно может быть открыт только один коллапс в группе аккордеона.

## Скрытие и отображение содержимого в кнопке переключения в зависимости от состояния свертывания

При использовании директивы `v-b-toggle` класс `collapsed` автоматически помещается в элемент триггера при закрытии коллапса и удаляется при открытии. Вы можете использовать этот класс для отображения или скрытия содержимого в переключателе с помощью настраиваемого CSS. Начиная с BootstrapVue 2.14.0, класс `not-collapsed` будет применяться, когда цель (цели) не закрыты.

**Пример разметки HTML:**

```html
<div>
  <b-button v-b-toggle:my-collapse>
    <span class="when-open">Закрыть</span><span class="when-closed">Открыть</span> мой коллапс
  </b-button>
  <b-collapse id="my-collapse">
    <!-- Содержимое здесь -->
  </b-collapse>
</div>
```

**Example Custom CSS:**

```css
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
```

## События экземпляра 'Global' \$root

Используя экземпляр `$root`, можно генерировать и прослушивать события где-нибудь вне компонента, где используется `<b-collapse>`. Короче говоря, `$root` ведет себя как генератор и приемник глобальных событий. Подробности об экземпляре `$root` можно найти в [официальной документации Vue](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-the-Root-Instance).

### Прослушивание изменений состояния сворачивания через события \$root

Чтобы прослушать любые изменения состояния коллапса, используйте:

```js
export default {
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      console.log('collapseId:', collapseId)
      console.log('isJustShown:', isJustShown)
    })
  }
}
```

где `collapseId` - идентификатор коллапса, который изменил свое состояние; `isJustShown` имеет значение true/false, т.е. показано/скрыто сворачивание.

### Переключение сворачивается через события \$root

Чтобы переключить (открыть/закрыть) **конкретное сворачивание**, передайте в коллапс `id`:

```js
this.$root.$emit('bv::toggle::collapse', 'my-collapse-id')
```

## Слот по умолчанию с дополнительной областью действия

<span class="badge badge-info small">Новое в v2.2.0</span>

Слот по умолчанию может быть дополнительно ограничен. Доступны следующие свойства области:

| Свойство  | Тип      | Описание                             |
| --------- | -------- | ------------------------------------ |
| `visible` | Boolean  | Видимое состояние коллапса           |
| `close`   | Function | При вызове закроет коллапс           |

## Доступность

Директива `v-b-toggle` автоматически добавит атрибуты ARIA `aria-controls` и `aria-expanded` к компоненту, на котором указана директива (а также добавит класс `collapsed`, когда он не развернут). `aria-expanded` будет отражать состояние целевого компонента `<b-collapse>`, в то время как для `aria-controls` будет установлено значение идентификатора(ов) целевого компонента `<b-collapse>`.

Если вы используете `v-model` для установки видимого состояния вместо директивы `v-b-toggle`, вам потребуется добавить в элемент переключателя самим `aria-controls` и другие соответствующие атрибуты и классы.

Хотя директиву `v-b-toggle` можно разместить практически на любом элементе HTML или компоненте Vue, рекомендуется использовать кнопку или ссылку (или аналогичный компонент) в качестве переключателя. В противном случае ваши триггерные элементы могут быть недоступны для пользователей клавиатуры или программ чтения с экрана. Если вы размещаете их на чем-то другом, кроме кнопки или ссылки (или аналогичного компонента), вам следует добавить атрибуты `tabindex="0"` и `role="button"`, чтобы позволить пользователям вспомогательных технологий добраться до вашего триггерного элемента. .

При использовании режима аккордеона убедитесь, что вы разместили элементы триггера и компоненты `<b-collapse>` внутри элемента с помощью `role="tablist"` и установите `role="tab"` для каждого контейнера элемента триггера, чтобы помочь пользователи программ чтения с экрана перемещаются по группе аккордеона. К сожалению, BootstrapVue не может применить эти роли автоматически, так как это зависит от окончательной разметки документа.

**Примечание:** Эффект анимации этого компонента зависит от медиа-запроса `prefers-reduced-motion`. Смотрите
[раздел с сокращенным движением в нашей документации по специальным возможностям](/docs/reference/accessibility) для получения дополнительных сведений.

## Смотрите также

- [`v-b-toggle` directive](/docs/directives/toggle)

<!-- Component reference added automatically from component package.json -->
