# Переключатель

> `v-b-toggle` — это упрощенная директива для переключения видимости сворачивания и боковых панелей,
> которая включает автоматическую обработку атрибутов
> [Доступности WAI-ARIA](/docs/reference/accessibility).

## Обзор

Директиву `v-b-toggle` можно использовать для интерактивных элементов, таких как кнопки, для
переключения состояния видимости компонентов [`<b-collapse>`](/docs/components/collapse) и
[`<b-sidebar>`](/docs/components/sidebar).

Помимо переключения видимости целевого компонента, директива автоматически обновляет атрибуты
доступности ARIA для элемента, к которому она применяется, чтобы они отражали состояние видимости
целевого компонента. Дополнительные сведения и предостережения смотрите в разделе ниже
[Специальные возможности](#accessibility).

## Синтаксис и использование директив

Директива применяется к элементу или компоненту, который запускает видимость цели. Целевой компонент
может быть указан (через его идентификатор) как модификатор(ы) директивы, аргумент директивы или как
строка/массив, переданный в качестве значения директивы:

- `v-b-toggle.my-collapse` - модификатор директивы (допускается несколько целей, каждый модификатор
  является идентификатором цели)
- `v-b-toggle:my-collapse` - аргумент директивы (поддерживается
  [динамический аргумент Vue](https://vuejs.org/v2/guide/syntax.html#Dynamic-Arguments))
  <span class="badge badge-info small" aria-label="Доступно в BootstrapVue v2.14.0+">v2.14.0+</span>
- `v-b-toggle="'my-collapse'"` - значение директивы в виде строки идентификатора
- `v-b-toggle="'my-collapse1 my-collapse2'"` - значение директивы в виде строки идентификаторов,
  разделенных пробелами
  <span class="badge badge-info small" aria-label="Доступно в BootstrapVue v2.14.0+">v2.14.0+</span>
- `v-b-toggle="['my-collapse1', 'my-collapse2']"` - значение директивы в виде массива
  идентификаторов строк
  <span class="badge badge-info small" aria-label="Доступно в BootstrapVue v2.14.0+">v2.14.0+</span>

Модификаторы, аргумент и значение можно использовать одновременно при нацеливании на несколько
компонентов.

**Пример использования:**

```html
<template>
  <div>
    <div class="mb-3">
      <b-button v-b-toggle.my-collapse>Переключатель свернутого содержимого</b-button>
      <b-button v-b-toggle.my-sidebar>Переключатель боковой навигации</b-button>
    </div>

    <b-collapse id="my-collapse">
      <b-card title="Сворачиваемая карточка">
        Привет мир!
      </b-card>
    </b-collapse>

    <b-sidebar id="my-sidebar" title="Боковая панель" shadow>
      <div class="px-3 py-2">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </div>
    </b-sidebar>
  </div>
</template>

<!-- v-b-toggle-directive.vue -->
```

## Использование на ссылках

<span class="badge badge-info small">2.15.0+</span>

При размещении директивы на ссылке (или компоненте, отображающем ссылку) целевой идентификатор можно
также указать с помощью атрибута `href`.

Обратите внимание, что URL-адрес браузера изменится, и страница может прокручивать цель в поле
зрения. Чтобы предотвратить изменение URL-адреса и прокрутку страницы, добавьте к ссылке
`@click.prevent`.

**Пример использования:**

```html
<template>
  <div>
    <div class="mb-3">
      <a v-b-toggle href="#example-collapse" @click.prevent>Переключатель свернутого содержимого</a>
      <b-button v-b-toggle href="#example-sidebar" @click.prevent>Переключатель боковой навигации</b-button>
    </div>

    <b-collapse id="example-collapse">
      <b-card title="Сворачиваемая карточка">
        Привет мир!
      </b-card>
    </b-collapse>

    <b-sidebar id="example-sidebar" title="Боковая панель" shadow>
      <div class="px-3 py-2">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </div>
    </b-sidebar>
  </div>
</template>

<!-- v-b-toggle-links.vue -->
```

## Скрытие и отображение содержимого в элементе триггера переключения

При использовании директивы `v-b-toggle` класс `collapsed` будет автоматически помещаться в элемент
триггера, когда целевой компонент закрывается, и удаляется при открытии. Начиная с BootstrapVue
`2.14.0`, класс `not-collapsed` будет применяться, когда цель _не_ закрыта.

**Пример HTML-разметки:**

```html
<div>
  <b-button v-b-toggle:my-collapse>
    <span class="when-open">Закрыть</span><span class="when-closed">Открыть</span> Мое сворачиваемое содержимое
  </b-button>
  <b-collapse id="my-collapse">
    <!-- Content here -->
  </b-collapse>
</div>
```

**Пример пользовательского CSS:**

```css
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
```

## Предотвращение открытия или закрытия цели

Чтобы элемент триггера не переключал цель, установите свойство `disabled` на `<button>`,
`<b-button>`, или `<b-link>` (или компоненты, основанные на `<b-link>`) и событие переключения _не_
будет отправлено в цель(и).

## Доступность

Директива из соображений доступности должна быть размещена на интерактивном элементе, на который
можно щелкнуть, таком как `<button>` или `<b-button>`, к которому могут легко получить доступ
пользователи, использующие только клавиатуру, и пользователи программ чтения с экрана. К элементам,
которые изначально не имеют роли доступности `button` (или `link`), будут применены атрибуты
`role="button"` и `tabindex="0"`, и будет создан соответствующий обработчик кликов. Поэтому
_настоятельно рекомендуется_ _не_ размещать директиву на элементах управления формы, кроме кнопок.

Директива применяет и динамически обновляет следующие атрибуты ARIA в элементе триггера:

- `aria-controls` - идентификаторы переключаемых компонентов сворачивания или боковой панели
- `aria-expanded` - состояние видимости сворачивания или боковой панели (смотрите раздел
  [предостережения](#caveats-with-multiple-targets) ниже)

### Предостережения с несколькими целями

Когда указано несколько целей, значение атрибута `aria-expanded` может быть неправильным, если
отдельные целевые компоненты могут управлять своим свернутым состоянием независимо (либо с помощью
`v-model`, либо других элементов управления с помощью директивы `v-b-toggle`, или видимость CSS).

## Смотрите также

- [`<b-collapse>`](/docs/components/collapse) Сворачиваемое содержимое с поддержкой аккордеона
- [`<b-sidebar>`](/docs/components/sidebar) Off-canvas боковая панель
- [`<b-navbar-toggle>`](/docs/components/navbar#b-navbar-toggle-and-b-collapse-is-nav) Кнопка
  переключения гамбургера на панели навигации (на основе директивы `v-b-toggle`)
