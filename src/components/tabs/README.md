# Табы

> Создайте виджет вкладок с _локальным содержимым_. Компонент вкладок построен на внутренних
> элементах навигации и карточках и обеспечивает полное управление навигацией по вкладкам с помощью
> клавиатуры.

Для вкладок на основе навигации (т. е. вкладок, которые могут изменить URL-адрес) вместо этого
используйте компонент [`<b-nav>`](/docs/components/nav).

## Простое использование

```html
<div>
  <b-tabs content-class="mt-3">
    <b-tab title="First" active><p>я первая вкладка</p></b-tab>
    <b-tab title="Second"><p>я вторая вкладка</p></b-tab>
    <b-tab title="Disabled" disabled><p>я отключенная вкладка!</p></b-tab>
  </b-tabs>
</div>

<!-- b-tabs.vue -->
```

**Совет:** Вы должны предоставить каждому дочернему компоненту `<b-tab>` уникальное значение `key`
при динамическом добавлении или удалении компонентов `<b-tab>` (например, `v-if` или циклы). Атрибут
`key`— это специальный атрибут Vue, смотрите https://vuejs.org/v2/api/#key.

## Интеграция карточек

Вкладки поддерживают интеграцию с карточками Bootstrap. Просто добавьте свойство `card` в `<b-tabs>`
и поместите его внутрь компонента `<b-card>`. Обратите внимание, что вы должны добавить свойство
`no-body` к компоненту `<b-card>`, чтобы правильно украсить заголовок карты и удалить лишнее
заполнение, введенное `card-body`.

```html
<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Вкладка 1" active>
        <b-card-text>Содержимое вкладки 1</b-card-text>
      </b-tab>
      <b-tab title="Вкладка 2">
        <b-card-text>Содержимое вкладки 2</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>

<!-- b-tabs-card.vue -->
```

Когда `<b-tabs>` находится в режиме `card`, к каждому подкомпоненту `<b-tab>` автоматически
применяется класс `card-body` (этот класс обеспечивает отступ вокруг содержимого вкладки). Чтобы
отключить класс `card-body`, установите свойство `no-body` в подкомпоненте `<b-tab>`.

```html
<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab no-body title="Картинка 1">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=21" alt="Изображение 21"></b-card-img>
        <b-card-footer>Картинка 1 футер</b-card-footer>
      </b-tab>

      <b-tab no-body title="Картинка 2">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=25" alt="Изображение 25"></b-card-img>
        <b-card-footer>Картинка 2 футер</b-card-footer>
      </b-tab>

      <b-tab no-body title="Картинка 3">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Изображение 26"></b-card-img>
        <b-card-footer>Картинка 3 футер</b-card-footer>
      </b-tab>

      <b-tab title="Text">
        <b-card-title>На этой вкладке не установлено свойство <code>no-body</code></b-card-title>
        <b-card-text>
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
          consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
          consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
          veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
          esse irure.
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>

<!-- b-tabs-card-no-body.vue -->
```

**Примечание:** Установка свойства `no-body` на `<b-tab>` не повлияет, если `<b-tabs>` не находится
в режиме `card` (поскольку класс `card-body` устанавливается только в режиме `card`).

Смотрите [Документацию по карточкам](/docs/components/card) для получения более подробной информации
о компонентах карточки.

## Вариант таблеток

Вкладки по умолчанию используют стиль `tabs`. Просто добавьте свойство `pills` в `<b-tabs>` для
варианта в стиле таблетки.

```html
<div>
  <b-card no-body>
    <b-tabs pills card>
      <b-tab title="Вкладка 1" active><b-card-text>Содержимое вкладки 1</b-card-text></b-tab>
      <b-tab title="Вкладка 2"><b-card-text>Содержимое вкладки 2</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>

<!-- b-tabs-pills.vue -->
```

## Fill и justify

Заставьте ваши элементы управления `<b-tabs>` увеличить всю доступную ширину.

### Fill

Чтобы пропорционально заполнить все доступное пространство элементами управления вкладками,
установите свойство `fill`. Обратите внимание, что все горизонтальное пространство занято, но не все
элементы управления имеют одинаковую ширину.

```html
<div>
  <b-tabs content-class="mt-3" fill>
    <b-tab title="First" active><p>я первая вкладка</p></b-tab>
    <b-tab title="Second"><p>я вторая вкладка</p></b-tab>
    <b-tab title="Very, very long title"><p>Я вкладка с очень-очень длинным названием</p></b-tab>
    <b-tab title="Disabled" disabled><p>я отключенная вкладка!</p></b-tab>
  </b-tabs>
</div>

<!-- b-tabs-fill.vue -->
```

### Justified

Для элементов управления одинаковой ширины используйте вместо этого свойство `justified`. Все
горизонтальное пространство будет занято элементами управления, но в отличие от использования `fill`
выше, все элементы управления будут иметь одинаковую ширину.

```html
<div>
  <b-tabs content-class="mt-3" justified>
    <b-tab title="First" active><p>я первая вкладка</p></b-tab>
    <b-tab title="Second"><p>я вторая вкладка</p></b-tab>
    <b-tab title="Very, very long title"><p>Я вкладка с очень-очень длинным названием</p></b-tab>
    <b-tab title="Disabled" disabled><p>я отключенная вкладка!</p></b-tab>
  </b-tabs>
</div>

<!-- b-tabs-justified.vue -->
```

## Выравнивание

Чтобы выровнять элементы управления вкладками, используйте свойство `align`. Доступные значения:
`left`, `center` и `right`.

```html
<div>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="First" active><p>я первая вкладка</p></b-tab>
    <b-tab title="Second"><p>я вторая вкладка</p></b-tab>
    <b-tab title="Disabled" disabled><p>я отключенная вкладка!</p></b-tab>
  </b-tabs>
</div>

<!-- b-tabs-alignment.vue -->
```

## Нижнее размещение элементов управления вкладками

Визуально переместите элементы управления вкладками вниз, установив свойство `end`.

```html
<div>
  <b-card no-body>
    <b-tabs pills card end>
      <b-tab title="Вкладка 1" active><b-card-text>Содержимое вкладки 1</b-card-text></b-tab>
      <b-tab title="Вкладка 2"><b-card-text>Содержимое вкладки 2</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>

<!-- b-tabs-bottom.vue -->
```

**Предостережения:**

- Нижнее размещение визуально лучше всего работает с вариантом `pills`. При использовании варианта
  `tabs` по умолчанию вы можете захотеть предоставить свои собственные настраиваемые классы стилей,
  поскольку Bootstrap v4 CSS предполагает, что вкладки всегда будут размещаться в верхней части
  содержимого вкладок.
- Чтобы обеспечить лучший пользовательский интерфейс с расположенными внизу элементами управления,
  убедитесь, что содержимое каждой панели вкладок имеет одинаковую высоту и полностью помещается в
  видимом окне просмотра, в противном случае пользователю потребуется прокрутить вверх, чтобы
  прочитать начало содержимого вкладок.

## Вертикальные вкладки

Разместите элементы управления вкладками с левой стороны, установив для свойства `vertical` значение
`true`. Вертикальные вкладки работают как с включенным режимом `card`, так и без него.

```html
<div>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Вкладка 1" active><b-card-text>Содержимое вкладки 1</b-card-text></b-tab>
      <b-tab title="Вкладка 2"><b-card-text>Содержимое вкладки 2</b-card-text></b-tab>
      <b-tab title="Вкладка 3"><b-card-text>Содержимое вкладки 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>

<!-- b-tabs-vertical.vue -->
```

Визуально переместите элементы управления вкладками вправо, установив свойство `end`:

```html
<div>
  <b-card no-body>
    <b-tabs pills card vertical end>
      <b-tab title="Вкладка 1" active><b-card-text>Содержимое вкладки 1</b-card-text></b-tab>
      <b-tab title="Вкладка 2"><b-card-text>Содержимое вкладки 2</b-card-text></b-tab>
      <b-tab title="Вкладка 3"><b-card-text>Содержимое вкладки 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>

<!-- b-tabs-vertical-end.vue -->
```

Ширина элементов управления вертикальной вкладкой увеличится, чтобы соответствовать ширине заголовка
вкладки. Чтобы контролировать ширину, установите
[класс утилиты ширины](/docs/reference/size-props#sizing-utility-classes) через свойство
`nav-wrapper-class`. Вы можете использовать такие значения, как `w-25` (25% ширина), `w-50` (50%
ширина), и т. д., или классы столбцов, такие как `col-2`, `col-3`, и т. д.

```html
<div>
  <b-card no-body>
    <b-tabs pills card vertical nav-wrapper-class="w-50">
      <b-tab title="Вкладка 1" active><b-card-text>Содержимое вкладки 1</b-card-text></b-tab>
      <b-tab title="Вкладка 2"><b-card-text>Содержимое вкладки 2</b-card-text></b-tab>
      <b-tab title="Вкладка 3"><b-card-text>Содержимое вкладки 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>

<!-- b-tabs-vertical-width.vue -->
```

Вертикальное размещение визуально лучше всего работает с вариантом `pills`. При использовании
варианта `tabs` по умолчанию вы можете захотеть предоставить свои собственные классы стилей,
поскольку Bootstrap v4 CSS предполагает, что элементы управления вкладками всегда будут размещаться
в верхней части содержимого вкладок.

**Примечание:** _переполнение текста может произойти, если ваша ширина меньше, чем заголовок
вкладки. Вам может понадобиться дополнительный индивидуальный стиль._

## Активные классы

Чтобы применить классы к текущему активному элементу управления или вкладке, используйте свойства
`active-nav-item-class` и `active-tab-class`.

```html
<div>
  <b-tabs
    active-nav-item-class="font-weight-bold text-uppercase text-danger"
    active-tab-class="font-weight-bold text-success"
    content-class="mt-3"
  >
    <b-tab title="First" active><p>я первая вкладка</p></b-tab>
    <b-tab title="Second"><p>я вторая вкладка</p></b-tab>
    <b-tab title="Disabled" disabled><p>я отключенная вкладка!</p></b-tab>
  </b-tabs>
</div>

<!-- b-tabs-classes.vue -->
```

## Анимация затухания

Затухание включено по умолчанию при смене вкладок. Его можно отключить с помощью свойства `no-fade`.

## Добавить вкладки без содержимого

Если вы хотите добавить дополнительные вкладки, у которых нет содержимого, вы можете поместить их в
слоты `tabs-start` или `tabs-end`:

```html
<div>
  <b-tabs>
    <!-- Add your b-tab components here -->
    <template #tabs-end>
      <b-nav-item href="#" role="presentation" @click="() => {}">Другая вкладка</b-nav-item>
      <li role="presentation" class="nav-item align-self-center">Простой текст</li>
    </template>
  </b-tabs>
</div>

<!-- b-tabs-item-slot.vue -->
```

Используйте слот `tabs-start`, чтобы разместить дополнительные кнопки вкладок перед кнопками вкладок
содержимого, и используйте слот `tabs-end`, чтобы разместить дополнительные кнопки вкладок после
кнопок вкладок содержимого.

**Примечание:** дополнительные (бессодержательные) кнопки вкладок должны быть `<b-nav-item>` или
иметь корневой элемент `<li>` и класс `nav-item` для правильного рендеринга и семантической
разметки.

## Добавить пользовательский контент в заголовок вкладки

Если вы хотите добавить пользовательский контент в заголовок вкладки, например HTML-код, иконки или
другой неинтерактивный компонент Vue, это возможно с помощью слота `title` в `<b-tab>`.

```html
<div>
  <b-tabs>
    <b-tab active>
      <template #title>
        <b-spinner type="grow" small></b-spinner> Я <i>кастомный</i> <strong>тайтл</strong>
      </template>
      <p class="p-3">Содержимое вкладки 1</p>
    </b-tab>

    <b-tab>
      <template #title>
        <b-spinner type="border" small></b-spinner> Вкладка 2
      </template>
      <p class="p-3">Содержимое вкладки 2</p>
    </b-tab>
  </b-tabs>
</div>

<!-- b-tabs-title-slot.vue -->
```

**Не** размещайте интерактивные элементы/компоненты внутри слота заголовка. Кнопка вкладки — это
ссылка, которая не поддерживает дочерние интерактивные элементы в соответствии со спецификацией
HTML5.

## Применение пользовательских классов к сгенерированным навигационным вкладкам или таблеткам

Селекторы вкладок основаны на разметке `nav` Bootstrap v4 (например,
`ul.nav > li.nav-item > a.nav-link`). В некоторых ситуациях вам может понадобиться добавить классы в
`<li>` (элемент навигации) и/или `<a>` (ссылка навигации) для каждой вкладки отдельно. Для этого
просто укажите имя класса в свойстве `title-item-class` (для элемента `<li>`) или в свойстве
`title-link-class` (для элемента `<a>`). Значение может быть передано в виде строки или массива
строк.

**Примечание:** _Класс `active` автоматически применяется к элементу активных вкладок `<a>`. Для
этого вам может потребоваться приспособить свои пользовательские классы._

```html
<template>
  <div>
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Вкладка 1" :title-link-class="linkClass(0)">Содержимое вкладки 1</b-tab>
        <b-tab title="Вкладка 2" :title-link-class="linkClass(1)">Содержимое вкладки 2</b-tab>
        <b-tab title="Вкладка 3" :title-link-class="linkClass(2)">Содержимое вкладки 3</b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }
    }
  }
</script>

<!-- b-tabs-with-classes.vue -->
```

## Отложенная загрузка содержимого вкладки

Иногда предпочтительнее загружать компоненты и данные только при активации вкладки, а не загружать
все вкладки (и связанные с ними данные) при рендеринге набора `<b-tabs>`.

Отдельные компоненты `<b-tab>` могут быть лениво загружены через свойство `lazy`, которое, если
установлено, не монтирует содержимое `<b-tab>` пока оно не будет активировано (показано), и будет
удалено. размонтируется, когда вкладка деактивирована (скрыта):

```html
<b-tabs content-class="mt-3">
  <!-- This tabs content will always be mounted -->
  <b-tab title="Regular tab"><b-alert show>Я всегда смонтирован</b-alert></b-tab>

  <!-- This tabs content will not be mounted until the tab is shown -->
  <!-- and will be un-mounted when hidden -->
  <b-tab title="Lazy tab" lazy><b-alert show>Я смонтирован отложено!</b-alert></b-tab>
</b-tabs>

<!-- b-tabs-lazy-tab.vue -->
```

Также можно сделать все вкладки ленивыми, установив свойство `lazy` для родительского компонента
`<b-tabs>`:

```html
<b-tabs content-class="mt-3" lazy>
  <b-tab title="Вкладка 1"><b-alert show>Я смонтирован отложено!</b-alert></b-tab>
  <b-tab title="Вкладка 2"><b-alert show>Я смонтирован отложено тоже!</b-alert></b-tab>
</b-tabs>

<!-- b-tabs-lazy.vue -->
```

## Клавиатурная навигация

Навигация с помощью клавиатуры включена по умолчанию для соответствия ARIA спискам таблиц, когда
кнопка вкладки находится в фокусе.

| Нажатие клавиши                                                        | Действие                                                       |
| ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| <kbd>Left</kbd> или <kbd>Up</kbd>                                      | Активировать предыдущую неотключенную вкладку                  |
| <kbd>Right</kbd> или <kbd>Down</kbd>                                   | Активировать следующую неотключенную вкладку                   |
| <kbd>Shift</kbd>+<kbd>Left</kbd> или <kbd>Shift</kbd>+<kbd>Up</kbd>    | Активировать первую неотключенную вкладку                      |
| <kbd>Home</kbd>                                                        | Активировать первую неотключенную вкладку                      |
| <kbd>Shift</kbd>+<kbd>Right</kbd> или <kbd>Shift</kbd>+<kbd>Down</kbd> | Активировать последнюю неотключенную вкладку                   |
| <kbd>End</kbd>                                                         | Активировать последнюю неотключенную вкладку                   |
| <kbd>Tab</kbd>                                                         | Переместить фокус на содержимое активной вкладки               |
| <kbd>Shift</kbd>+<kbd>Tab</kbd>                                        | Переместить фокус на предыдущий элемент управления на странице |

Отключите навигацию с помощью клавиатуры, установив параметр `no-key-nav`. Поведение теперь по
умолчанию будет обычной навигацией в браузере с помощью клавиши TAB.

| Нажатие клавиши                       | Действие                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------ |
| <kbd>Tab</kbd>                        | Кнопка перехода к следующей вкладке или элемент управления на странице   |
| <kbd>Shift</kbd>+<kbd>Tab</kbd>       | Кнопка перехода на предыдущую вкладку или элемент управления на странице |
| <kbd>Enter</kbd> или <kbd>Space</kbd> | Активировать вкладку текущей сфокусированной кнопки                      |

## Программная активация и деактивация вкладок

Используйте `<b-tabs>` `v-model`, чтобы контролировать, какая вкладка активна, установив `v-model`
на индекс (отсчитываемый от нуля) отображаемой вкладки (см. пример ниже).

В качестве альтернативы, вы можете использовать свойство `active` для каждой `<b-tab>` с
модификатором `.sync`, чтобы активировать вкладку или определить, активна ли конкретная вкладка.

Каждый экземпляр `<b-tab>` также предоставляет два общедоступных метода для активации или
деактивации вкладки. Это методы `.activate()` и `.deactivate()` соответственно. Если активация или
деактивация не удалась (т. е. вкладка отключена или нет доступной вкладки для перемещения
активации), то текущая активная вкладка останется активной, и метод вернет `false`. Вам понадобится
ссылка на `<b-tab>`, чтобы использовать эти методы.

## Предотвращение активации `<b-tab>`

Чтобы предотвратить активацию вкладки, просто установите свойство `disabled` в компоненте `<b-tab>`.

В качестве альтернативы вы можете прослушивать событие `activate-tab`, которое предоставляет
возможность предотвратить активацию вкладки. Событие `activate-tab` генерируется с тремя
аргументами:

- `newTabIndex`: Индекс вкладки, которая будет активирована
- `prevTabIndex`: Индекс текущей активной вкладки
- `bvEvent`: Объект `BvEvent`. Вызов `bvEvent.preventDefault()`, чтобы предотвратить активацию
  `newTabIndex`

По соображениям доступности при использовании события `activate-tab` для предотвращения активации
вкладки вы должны предоставить пользователю некоторые средства уведомления о том, почему вкладка не
может быть активирована. Рекомендуется использовать атрибут `disabled` компонента `<b-tab>` вместо
использования события `activate-tab` (поскольку `disabled` более интуитивно понятен для
пользователей программ чтения с экрана).

## Расширенные примеры

### Внешние элементы управления с использованием `v-model`

```html
<template>
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card>
        <b-tab title="General">Я первая исчезающая вкладка</b-tab>
        <b-tab title="Edit profile">
          я вторая вкладка
          <b-card>Я карточка во вкладке</b-card>
        </b-tab>
        <b-tab title="Premium Plan" disabled>Сибзамини!</b-tab>
        <b-tab title="Info">Я последняя вкладка</b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--">Предыдущая</b-button>
        <b-button @click="tabIndex++">Следующая</b-button>
      </b-button-group>

      <div class="text-muted">Текущая вкладка: {{ tabIndex }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabIndex: 1
      }
    }
  }
</script>

<!-- b-tabs-controls.vue -->
```

### Динамические вкладки + вкладки в конце слота

```html
<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
          Содержимое вкладки {{ i }}
          <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">
            Закрыть вкладку
          </b-button>
        </b-tab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
        </template>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            Нет открытых вкладок<br>
            Откройте новую вкладку с помощью <b>+</b> кнопки выше.
          </div>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [],
        tabCounter: 0
      }
    },
    methods: {
      closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i, 1)
          }
        }
      },
      newTab() {
        this.tabs.push(this.tabCounter++)
      }
    }
  }
</script>

<!-- b-tabs-dynamic.vue -->
```

<!-- Component reference added automatically from component package.json -->
