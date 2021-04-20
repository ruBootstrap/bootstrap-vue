# Кнопка

> Используйте специальный компонент Bootstrap `b-button` для действий в формах, диалоговых окнах и т. д. Включает поддержку нескольких контекстных вариаций, размеров, состояний и т. д.

## Обзор

Компонент `<b-button>` в BootstrapVue генерирует либо элемент `<button>`, либо элемент `<a>`, либо компонент `<router-link>` со стилем кнопки.

```html
<div>
  <b-button>Кнопка</b-button>
  <b-button variant="danger">Кнопка</b-button>
  <b-button variant="success">Кнопка</b-button>
  <b-button variant="outline-primary">Кнопка</b-button>
</div>

<!-- b-button.vue -->
```

## Тип элемента

Компонент `<b-button>` обычно отображает элемент `<button>`. Однако вы также можете отобразить элемент `<a>`, указав значение свойства `href`. Вы также можете сгенерировать `vue-router` `<router-link>` при указании значения для свойства `to` (требуется `vue-router`).

```html
<div>
  <b-button>Я Кнопка</b-button>
  <b-button href="#">Я Ссылка</b-button>
</div>

<!-- b-button-types.vue -->
```

## Тип

Вы можете указать тип кнопки, установив для свойства `type` значения `'button'`, `'submit'` или `'reset'`.Тип по умолчанию - `'button'`.

Обратите внимание, что свойство `type` не действует, если заданы свойства `href` или `to`.

## Размеры

Хотите кнопки большего или меньшего размера? Укажите `lg` или `sm` через свойство `size`.

```html
<b-row>
  <b-col lg="4" class="pb-2"><b-button size="sm">Маленькая кнопка</b-button></b-col>
  <b-col lg="4" class="pb-2"><b-button>Кнопка по умолчанию</b-button></b-col>
  <b-col lg="4" class="pb-2"><b-button size="lg">Большая кнопка</b-button></b-col>
</b-row>

<!-- b-button-sizes.vue -->
```

## Контекстные варианты

Используйте свойство `variant` для создания различных вариантов контекстных кнопок Bootstrap.

По умолчанию `<b-button>` будет отображаться с вариантом `secondary`.

Свойство `variant` добавляет класс Bootstrap v4.3 `.btn-<variant>` на отображаемую кнопку.

### Варианты сплошного цвета

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` и `dark`.

```html
<div>
  <b-button variant="primary">Primary</b-button>
  <b-button variant="secondary">Secondary</b-button>
  <b-button variant="success">Success</b-button>
  <b-button variant="danger">Danger</b-button>
  <b-button variant="warning">Warning</b-button>
  <b-button variant="info">Info</b-button>
  <b-button variant="light">Light</b-button>
  <b-button variant="dark">Dark</b-button>
</div>

<!-- b-button-solid.vue -->
```

### Варианты цвета контура

Нужна кнопка, но не изрядные цвета фона, которые они приносят? Используйте варианты `outline-*`, чтобы удалить все фоновые изображения и цвета на любой `<b-button>`:

`outline-primary`, `outline-secondary`, `outline-success`, `outline-danger`, `outline-warning`, `outline-info`, `outline-light` и `outline-dark`.

```html
<div>
  <b-button variant="outline-primary">Primary</b-button>
  <b-button variant="outline-secondary">Secondary</b-button>
  <b-button variant="outline-success">Success</b-button>
  <b-button variant="outline-danger">Danger</b-button>
  <b-button variant="outline-warning">Warning</b-button>
  <b-button variant="outline-info">Info</b-button>
  <b-button variant="outline-light">Light</b-button>
  <b-button variant="outline-dark">Dark</b-button>
</div>

<!-- b-button-outline.vue -->
```

### Вариант ссылки

Вариант `link` визуализирует кнопку с внешним видом ссылки, сохраняя отступ и размер кнопки по умолчанию.

```html
<div>
  <b-button variant="link">Ссылка</b-button>
</div>

<!-- b-button-link.vue -->
```

**Совет:** удалите подчеркивание при наведении курсора с кнопки варианта ссылки, добавив класс-утилиту Bootstrap v4.3 `text-decoration-none` в `<b-button>`.

## Блочные кнопки

Создайте кнопки блочного уровня - те, которые охватывают всю ширину родительского элемента - путем установки свойства `block`.

```html
<div>
  <b-button block variant="primary">Блочная кнопка</b-button>
</div>

<!-- b-button-block.vue -->
```

## Таблеточный стиль

Предпочитаете кнопки с более округлыми формами таблеток? Просто установите для свойства `pill` значение `true`.

```html
<div>
  <b-button pill>Кнопка</b-button>
  <b-button pill variant="primary">Кнопка</b-button>
  <b-button pill variant="outline-secondary">Кнопка</b-button>
  <b-button pill variant="success">Кнопка</b-button>
  <b-button pill variant="outline-danger">Кнопка</b-button>
  <b-button pill variant="info">Кнопка</b-button>
</div>

<!-- b-button-pill.vue -->
```

Эта опция добавляет класс-утилиту Bootstrap v4.3 `.rounded-pill` на отображаемую кнопку.

## Квадратный стиль

Предпочитаете кнопки с более квадратными углами? Просто установите для свойства `squared` значение `true`.

```html
<div>
  <b-button squared>Кнопка</b-button>
  <b-button squared variant="primary">Кнопка</b-button>
  <b-button squared variant="outline-secondary">Кнопка</b-button>
  <b-button squared variant="success">Кнопка</b-button>
  <b-button squared variant="outline-danger">Кнопка</b-button>
  <b-button squared variant="info">Кнопка</b-button>
</div>

<!-- b-button-square.vue -->
```

Свойство `squared` добавляет класс-утилиту Bootstrap v4.3 `.rounded-0` на отображаемую кнопку. Свойство `pill` имеет приоритет над свойством `squared`.

## Отключенное состояние

Установите свойство `disabled`, чтобы отключить функциональность кнопки по умолчанию. `disabled` также работает с кнопками, отображаемыми как элементы `<a>` и `<router-link>` (т.е. с установленными свойствами `href` или `to`).

```html
<div>
  <b-button disabled size="lg" variant="primary">Отключена</b-button>
  <b-button disabled size="lg">Также отключена</b-button>
</div>

<!-- b-button-disabled.vue -->
```

## Нажатое состояние и переключение

Кнопки будут казаться нажатыми (с более темным фоном, более темной рамкой и вставленной тенью), когда свойство `pressed` установлено в `true`.

Свойство `pressed` может иметь одно из трех значений:

- `true`: Устанавливает класс `.active` и добавляет атрибут `aria-pressed="true"`.
- `false`: Очищает класс `.active` и добавляет атрибут `aria-pressed="false"`.
- `null`: (по умолчанию) не будут установлены ни класс `.active`, ни атрибут `aria-pressed`.

Чтобы создать кнопку, которая может переключаться между активным и неактивным состояниями, используйте модификатор свойства `.sync` (доступный в Vue 2.3+) в свойстве `pressed`.

```html
<template>
  <div>
    <h5>Нажатое и отжатое состояние</h5>
    <b-button :pressed="true" variant="success">Всегда нажата</b-button>
    <b-button :pressed="false" variant="success">Не нажата</b-button>

    <h5 class="mt-3">Переключаемая кнопка</h5>
    <b-button :pressed.sync="myToggle" variant="primary">Переключи меня</b-button>
    <p>Нажатое состояние: <strong>{{ myToggle }}</strong></p>

    <h5>В группе кнопок</h5>
    <b-button-group size="sm">
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="primary"
      >
        {{ btn.caption }}
      </b-button>
    </b-button-group>
    <p>Нажатое состояние: <strong>{{ btnStates }}</strong></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myToggle: false,
        buttons: [
          { caption: 'Переключатель 1', state: true },
          { caption: 'Переключатель 2', state: false },
          { caption: 'Переключатель 3', state: true },
          { caption: 'Переключатель 4', state: false }
        ]
      }
    },
    computed: {
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    }
  }
</script>

<!-- b-button-toggles.vue -->
```

При использовании стиля переключателя для интерфейса стиля радио или флажка лучше всего использовать встроенную поддержку стиля `button` [`<b-form-radio-group>`](/docs/components/form-radio) и [`<b-form-checkbox-group>`](/docs/components/form-checkbox).

## Поддержка router link

Обратитесь к справочной документации [`Router support`](/docs/reference/router-links), чтобы узнать о различных поддерживаемых свойствах, связанных с `<router-link>`.

## Доступность

Если для свойства `href` задано значение `'#'`, `<b-button>` будет отображать элемент ссылки (`<a>`) с атрибутом `role="button"`, установленным и соответствующими слушателями нажатия клавиш (<kbd>Ввод</kbd> и <kbd>Пробел</kbd>), чтобы ссылка действовала как нативный HTML `<button>` для пользователей программ чтения с экрана и пользователей, использующих только клавиатуру. Когда он отключен, атрибут `aria-disabled="true"` будет установлен в элементе `<a>`.

Когда для параметра `href` установлено любое другое значение (или используется свойство `to`), `role="button"` не будет добавлен, а также не будут включены прослушиватели событий клавиатуры.

## Смотрите также

- [`<b-button-group>`](/docs/components/button-group)
- [`<b-button-toolbar>`](/docs/components/button-toolbar)
- [`<b-link>`](/docs/components/link)
- [Поддержка Router Link](/docs/reference/router-links)
- [Варианты цвета](/docs/reference/color-variants)

<!-- Component reference added automatically from component package.json -->
