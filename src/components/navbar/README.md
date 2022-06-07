# Панель навигации

> Компонент `<b-navbar>` представляет собой оболочку, которая размещает брендинг, навигацию и другие
> элементы в сжатом заголовке. Его легко расширять, а благодаря компоненту `<b-collapse>` он может
> легко интегрировать адаптивное поведение.

**Пример:**

```html
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Панель навигации</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Ссылка</b-nav-item>
        <b-nav-item href="#" disabled>Отключено</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Поиск</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Язык" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Пользователь</em>
          </template>
          <b-dropdown-item href="#">Профиль</b-dropdown-item>
          <b-dropdown-item href="#">Выйти</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<!-- b-navbar.vue -->
```

## Цветовые схемы

`<b-navbar>` поддерживает стандартные доступные варианты цвета фона Bootstrap v4. Установите
свойство `variant` на одно из следующих значений, чтобы изменить цвет фона: `primary`, `success`,
`info`, `warning`, `danger`, `dark` или `light`.

Управляйте цветом текста, установив свойство `type` в значение `light` для использования со светлыми
вариантами цвета фона или `dark` для вариантов цвета темного фона.

## Размещение

Управляйте размещением панели навигации, установив один из двух свойств:

| свойство | тип     | по умолчанию | описание                                                                                                                                                                                     |
| -------- | ------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fixed`  | String  | `null`       | Установите `top` для закрепления в верхней части области просмотра или `bottom`, для фиксации в нижней части области просмотра.                                                              |
| `sticky` | Boolean | `false`      | Установите значение `true`, чтобы при прокрутке панель навигации оставалась в верхней части области просмотра (или родительского контейнера, для которого установлено `position: relative`). |

**Примечания:**

- Фиксированное позиционирование использует CSS `position: fixed`. Возможно, вам потребуется
  настроить верхний/нижний отступ или поля документа.
- CSS `position: sticky` (используется для `sticky`) не полностью поддерживается в каждом браузере.
  Для браузеров, которые не поддерживают `position: sticky`, будет изначально использоваться
  `position: relative`.

## Поддерживаемый контент

Панели навигации поставляются со встроенной поддержкой нескольких подкомпонентов. При необходимости
выберите из следующего:

- `<b-navbar-brand>` для названия вашей компании, продукта или проекта.
- `<b-navbar-toggle>` для использования с компонентом `<b-collapse is-nav>`.
- `<b-collapse is-nav>` для группировки и скрытия содержимого панели навигации родительской
  контрольной точкой.
- `<b-navbar-nav>` для полноразмерной и облегченной навигации (включая поддержку раскрывающихся
  списков). Поддерживаются следующие подкомпоненты внутри `<b-navbar-nav>`:
  - `<b-nav-item>` для действий по ссылке (и ссылке-роутера)
  - `<b-nav-item-dropdown>` для выпадающих меню навигации
  - `<b-nav-text>` для добавления вертикально центрированных строк текста.
  - `<b-nav-form>` для любых элементов управления и действий формы.

### `<b-navbar-brand>`

`<b-navbar-brand>` создает ссылку, если указано `href`, или `<router-link>`, если указано `to`. Если
ни один из них не указан, он отображается как тег `<div>`. Вы можете переопределить тип тега,
установив свойство `tag` для элемента, который вы хотите отобразить:

```html
<div>
  <!-- As a link -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
  </b-navbar>
</div>

<!-- b-navbar-brand-link.vue -->
```

```html
<div>
  <!-- As a heading -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand tag="h1" class="mb-0">BootstrapVue</b-navbar-brand>
  </b-navbar>
</div>

<!-- b-navbar-brand-heading.vue -->
```

Добавление изображений в `<b-navbar-brand>`, скорее всего, всегда потребует пользовательских стилей
или утилит для правильного размера. Вот несколько примеров для демонстрации:

```html
<div>
  <!-- Just an image -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" alt="Kitten">
    </b-navbar-brand>
  </b-navbar>
</div>

<!-- b-navbar-brand-image.vue -->
```

```html
<div>
  <!-- Image and text -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
      BootstrapVue
    </b-navbar-brand>
  </b-navbar>
</div>

<!-- b-navbar-brand-image-and-text.vue -->
```

### `<b-navbar-nav>`

Навигационные ссылки на панели навигации основаны на родительском компоненте `<b-navbar-nav>` и
требуют использования переключателя `<b-collapse is-nav>` и `<b-nav-toggle>` для правильного
адаптивного стиля. Навигация в навигационных панелях также будет увеличиваться, чтобы занимать как
можно больше горизонтального пространства, чтобы содержимое вашей навигационной панели было надежно
выровнено.

`<b-navbar-nav>` поддерживает следующие дочерние компоненты:

- `<b-nav-item>` для действий по ссылке (и router-link).
- `<b-nav-text>` для добавления вертикально центрированных строк текста.
- `<b-nav-item-dropdown>` для выпадающих меню панели навигации.
- `<b-nav-form>` для добавления простых форм на панель навигации.

### `<b-nav-item>`

`<b-nav-item>` — это компонент основной ссылки (и `<router-link>`). Предоставление значения свойства
`to` будет генерировать `<router-link>`, а предоставление значения свойства `href` будет
генерировать стандартную ссылку.

Установите свойство `active` для `<b-nav-item>`, чтобы выделить элемент как активную страницу.
Отключите элемент `<b-nav-item>`, установив для свойства `disabled` значение `true`.

Обрабатывайте события кликов, указав обработчик для события `@click` на `<b-nav-item>`.

### `<b-nav-text>`

Панели навигации могут содержать фрагменты текста с помощью `<b-nav-text>`. Этот компонент
регулирует вертикальное выравнивание и горизонтальный интервал для строк текста.

```html
<div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>BootstrapVue</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<!-- b-navbar-text.vue -->
```

### `<b-nav-item-dropdown>`

Информацию об использовании `<b-nav-item-dropdown>` смотрите в документации
[`<b-dropdown>`](/docs/components/dropdown). Обратите внимание, что раздельные раскрывающиеся списки
не поддерживаются в `<b-navbar>` и `<b-navbar-nav>`.

```html
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Главная</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Язык" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Пользователь" right>
        <b-dropdown-item href="#">Аккаунт</b-dropdown-item>
        <b-dropdown-item href="#">Настройки</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>

<!-- b-navbar-dropdown.vue -->
```

### `<b-nav-form>`

Используйте `<b-nav-form>`, чтобы разместить встроенные элементы управления формой на панели
навигации.

```html
<div>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Поиск"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Поиск</b-button>
    </b-nav-form>
  </b-navbar>
</div>

<!-- b-navbar-form.vue -->
```

Группы ввода также работают:

```html
<div>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-input-group prepend="@">
        <b-form-input placeholder="Username"></b-form-input>
      </b-input-group>
    </b-nav-form>
  </b-navbar>
</div>

<!-- b-navbar-form-inputs.vue -->
```

### `<b-navbar-toggle>` и `<b-collapse is-nav>`

Панели навигации по умолчанию не реагируют, но вы можете легко изменить их, чтобы изменить это.
Отзывчивое поведение зависит от нашего компонента `<b-collapse>`.

Оберните компоненты `<b-navbar-nav>` в `<b-collapse is-nav>` (**не забудьте установить свойство
`is-nav`!**), чтобы указать содержимое, которое будет сворачиваться на основе определенной
контрольной точки. Присвойте документу уникальное значение `id` в `<b-collapse>`.

Используйте компонент `<b-navbar-toggle>`, чтобы управлять компонентом сворачивания, и установите
свойство `target` в `<b-navbar-toggle>` на `id` в `<b-collapse>`.

Установите свойство `toggleable` на `<b-navbar>` на желаемую контрольную точку, в которой вы хотите,
чтобы контент автоматически расширялся. Возможные значения `toggleable`: `sm`, `md`, `lg` и `xl`.
Установка `toggleable` в `true` (или пустая строка) приведет к тому, что панель навигации всегда
будет свернута, а установка ее в `false` (по умолчанию) отключит свертывание (всегда раскрывается).

Компоненты `<b-navbar-toggle>` по умолчанию выравниваются по левому краю, но если они следуют за
родственным элементом, например `<b-navbar-brand>`, они автоматически выравниваются по правому краю.
Изменение разметки на противоположное приведет к обратному размещению переключателя.

Смотрите первый пример на этой странице для справки, а также смотрите
[`<b-collapse>`](/docs/components/collapse) для получения подробной информации о компоненте
сворачивания.

Помимо управления сворачиванием, `<b-navbar-toggle>` можно также использовать для переключения
видимости компонента [`<b-sidebar>`](/docs/components/sidebar). Просто укажите идентификатор
`<b-sidebar>` через свойство `target`.

Внутри `<b-navbar-toggle>` используется [директива `v-b-toggle`](/docs/directives/toggle).

#### Пользовательский переключатель панели навигации

`<b-navbar-toggle>` отображает по умолчанию Bootstrap v4 _гамбургер_ (который является фоновым
изображением SVG). Вы можете предоставить свой собственный контент (например, значок) через слот
`default` с необязательной областью действия. Область слота по умолчанию содержит свойство
`expanded`, которое будет `true`, когда свертывание расширяется, или `false`, когда сворачивание
свертывается.

Обратите внимание, что свойство `expanded` область видимости работает только при предоставлении
свойства `target` в виде `string`, а не `array`.

```html
<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Панель навигации</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Ссылка 1</b-nav-item>
        <b-nav-item href="#">Ссылка 2</b-nav-item>
        <b-nav-item href="#" disabled>Отключено</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<!-- b-navbar-toggle-slot.vue -->
```

## Печать

Панели навигации по умолчанию скрыты при печати. Заставьте их распечатать, установив свойство
`print`.

## Смотрите также

- [Компонент `<b-collapse>`](/docs/components/collapse)
- [Компонент `<b-sidebar>`](/docs/components/sidebar)
- [Директива `v-b-toggle`](/docs/directives/toggle)
- [Документация `<b-nav>`](/docs/components/nav) для дополнительных компонентов и псевдонимов
  подкомпонентов

Обратитесь к справочной странице [Поддержка маршрутизатора](/docs/reference/router-links) для
конкретных свойств маршрутизатора.

<!-- Component reference added automatically from component package.json -->
