# Боковая панель

> Пользовательский компонент BootstrapVue `<b-sidebar>`, также известный как off-canvas или side
> drawer, представляет собой переключаемое выдвижное поле с фиксированным положением, которое можно
> использовать для навигации, меню, деталей и т. д. Его можно расположить на любом слева (по
> умолчанию) или справа от области просмотра с дополнительной поддержкой фона.

## Обзор

В `<b-sidebar>` [слот по умолчанию с опциональной областью действия](#scoped-default-slot) можно
поместить практически любое содержимое, например текст, кнопки, формы, изображения или
[вертикальные элементы навигации](/docs/components/nav#vertical-variation).

Компонент поддерживает заголовок и встроенную кнопку закрытия, которую вы можете при желании
отключить и указать свой собственный заголовок (при необходимости), и его можно легко переключать с
помощью нашей [директивы `v-b-toggle`](/docs/directives/toggle).

Компонент имеет минимальный стиль по умолчанию, что дает вам большую гибкость в размещении
содержимого боковой панели.

```html
<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Переключить боковую панель</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<!-- b-sidebar.vue -->
```

Если содержимое выше доступной высоты области просмотра, вертикальная прокрутка будет автоматически
включена с помощью CSS в теле боковой панели.

## Стайлинг

Для управления внешним видом боковой панели предусмотрено несколько свойств.

### Тайтл

Боковые панели должны иметь заголовок (особенно из соображений доступности). Легко установите
заголовок, который появляется в заголовке, либо с помощью свойства `title`, либо через слот `title`.
братите внимание, что слот `title` имеет приоритет над свойством `title`.

Если установлено [свойство `no-header`](#hiding-the-header), то ни свойство `title`, ни слот `title`
не действуют.

Если вы не указываете заголовок, используйте свойства `aria-label` или `aria-labelledby`, чтобы
указать доступный заголовок для боковой панели. Дополнительную информацию смотрите в разделе
[Специальные возможности](#accessibility) ниже.

### Размещение

По умолчанию боковая панель будет размещена в левой части окна просмотра. Установите для свойства
`right` значение `true`, чтобы боковая панель отображалась с правой стороны окна просмотра.

```html
<template>
  <div>
    <b-button v-b-toggle.sidebar-right>Переключить боковую панель</b-button>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<!-- b-sidebar-right.vue -->
```

### Варианты

Используйте свойства `bg-variant` и `text-variant`, чтобы управлять вариантом цвета темы фона и
текста соответственно. Кроме того, вы можете применить стили или классы, чтобы задать цвет фона и
текста.

```html
<template>
  <div>
    <b-button v-b-toggle.sidebar-variant>Переключить боковую панель</b-button>
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<!-- b-sidebar-variant.vue -->
```

Стандартные варианты темы Bootstrap: `'white'`, `'light'`, `'dark'`, `'primary'`, `'secondary'`,
`'success'`, `'danger'`, `'warning'` и `'info'`.

Вариант фона по умолчанию — `'light'`, а вариант текста по умолчанию — `'dark'`.

### Тень

Предпочитаете боковую панель с фоновой тенью? Установите свойство `shadow` в логическое значение
`true` для средней тени, `'sm'` для маленькой тени или `'lg'` для большей тени. Установите значение
`false` (по умолчанию) для отсутствия тени.

### Границы

По умолчанию `<b-sidebar>` не имеет границ. Используйте
[классы вспомогательных бордеров](/docs/reference/utility-classes), чтобы добавить границы к
`<b-sidebar>` (через свойство `sidebar-class` <span class="badge badge-secondary">2.12.0+</span>),
или используйте переопределения стилей CSS.

```html
<template>
  <div>
    <b-button v-b-toggle.sidebar-border>Переключить боковую панель</b-button>
    <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger">
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<!-- b-sidebar-border.vue -->
```

### Ширина

По умолчанию ширина `<b-sidebar>` установлена на `320px` (100% на экранах 'xs'). Просто укажите
значение через свойство `width` (например, `'180px'`, `'20em'` и т. д.), чтобы переопределить это
значение по умолчанию. Максимальная ширина устанавливается на `100%` через CSS.

### Отступы

Боковая панель по умолчанию не имеет отступов. Вы можете применить служебные классы отступов к
компоненту или служебные классы полей/отступов к содержимому боковой панели.

### Отключить переход между слайдами

По умолчанию боковая панель будет использовать скользящий переход при отображении и скрытии. Вы
можете отключить переход слайдов с помощью свойства `no-slide`.

**Примечание:** Определенный BootstrapVue эффект перехода этого компонента зависит от медиа-запроса
`prefers-reduced-motion`. Дополнительную информацию смотрите в
[разделе с уменьшенным движением в нашей документации по специальным возможностям](/docs/reference/accessibility).

При отключении перехода слайдов также будет отключен плавный переход
[необязательный фон](#backdrop).

### Z-индекс

Боковая панель имеет `z-index` по умолчанию, определенный в SCSS/CSS. В некоторых ситуациях вам
может понадобиться использовать другой `z-index`, чтобы боковая панель отображалась поверх или под
другим содержимым. Вы можете сделать это либо с помощью стилей CSS, либо с помощью свойства
`z-index`.

### Слот по умолчанию с ограниченной областью действия

Слот `default` позволяет вам предоставить основной контент для вашей боковой панели. Это
опционально. Примеры в следующих разделах демонстрируют использование области слота по умолчанию.

Вы можете применять произвольные классы к разделу `body` через свойство `body-class`.

### Хедер

По умолчанию `<b-sidebar>` имеет заголовок с необязательным заголовком и кнопку закрытия. Вы можете
указать заголовок через свойство `title` или через опционально ограниченный слот `title`.

Если вы хотите предоставить полностью настраиваемый заголовок, вы можете использовать слот `header`
с опциональной областью действия.

Вы можете применить произвольные классы к разделу заголовка с помощью свойства `header-class`, чтобы
переопределить заполнение по умолчанию и т. д.

#### Скрытие заголовка по умолчанию

Вы можете отключить заголовок по умолчанию (включая кнопку закрытия) с помощью параметра
`no-header`. Обратите внимание, что вам нужно будет указать способ закрытия боковой панели. Слот
`default` имеет область действия, которая включает метод `hide()`, который можно использовать для
закрытия боковой панели.

```html
<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header>Переключить боковую панель</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Пользовательский хедер боковой панели</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Активная</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Ссылка</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Другая ссылка</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Закрыть сайдбар</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<!-- b-sidebar-no-header.vue -->
```

### Футер

`<b-sidebar>` предоставляет слот `footer` (необязательно с ограниченной областью действия), чтобы вы
могли предоставить контент, который отображается внизу боковой панели. Слот `footer` имеет область
действия, которая включает метод `hide()`, который можно использовать для закрытия боковой панели.

```html
<template>
  <div>
    <b-button v-b-toggle.sidebar-footer>Переключить боковую панель</b-button>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto">Футер</strong>
        <b-button size="sm" @click="hide">Закрыть</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<!-- b-sidebar-footer.vue -->
```

Вы можете применять произвольные классы к разделу нижнего колонтитула с помощью свойства
`footer-class`.

### Отложенный рендеринг

В некоторых случаях вы можете не захотеть, чтобы содержимое отображалось, когда боковая панель не
видна. Просто установите свойство `lazy` на `<b-sidebar>`. Когда `lazy` равно `true`, `body` и
необязательный футер _не_ будут отображаться (удалены из DOM) всякий раз, когда боковая панель
закрыта.

### Подложка

<span class="badge badge-info small">2.12.0+</span>

Добавьте базовый фон, когда боковая панель открыта, с помощью свойства `backdrop`. Если установлено
значение `true`, боковая панель будет показывать непрозрачный фон. Щелчок по фону закроет боковую
панель, если для параметра `no-close-on-backdrop` не установлено значение `true`.

При желании (начиная с BootstrapVue v2.15.0+) вы можете использовать свойство `backdrop-variant` для
управления вариантом цвета темы фона. Вариант фона по умолчанию — `dark`.

```html
<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Переключить боковую панель</b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Боковая панель с фоном"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
          <b-form-select id="backdrop-variant" v-model="variant" :options="variants"></b-form-select>
        </b-form-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        variant: 'dark',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ]
      }
    }
  }
</script>

<!-- b-sidebar-backdrop.vue -->
```

Обратите внимание, что когда боковая панель открыта, все еще можно прокручивать тело (в отличие от
поведения модальных окон). Когда фон включен, ограничение фокуса будет пытаться удерживать фокус в
пределах боковой панели. Обратите внимание, что в редких случаях пользователи могут переместить
фокус на элементы за пределами боковой панели.

## Управление видимостью

### Директива `v-b-toggle`

Использование [директивы `v-b-toggle`](/docs/directives/toggle) является предпочтительным методом
для _открытия_ боковой панели, так как он автоматически обрабатывает применение атрибутов
доступности `aria-controls` и `aria-expanded` для триггерного элемента. .

В большинстве примеров на этой странице используется директива `v-b-toggle`.

### `v-model`

`v-model` отражает текущее состояние видимости боковой панели. Хотя его можно использовать для
управления состоянием видимости боковой панели, рекомендуется использовать
[директиву `v-b-toggle`](#v-b-toggle-directive), чтобы _показать_ боковую панель по соображениям
доступности. Если вы используете `v-model` для отображения боковой панели, вы должны поместить
атрибут `aria-controls="id"` (где `id` – это идентификатор боковой панели) в элементе триггера, а
также установить `aria-expanded` (также в элементе триггера) в строку `'true'` (если боковая панель
открыта) или `'false`' (если боковая панель закрыта).

`v-model` внутренне связана со свойством `visible`, а событие `change` обновляет `v-model`.

### Закрытие при изменении $route

По умолчанию `<b-sidebar>` закрывается при изменении `$route` полный путь, включая запрос и хэш).
Это может быть особенно удобно, если боковая панель находится за пределами вашего `<router-view>` и
используется для навигации.

Вы можете отключить это поведение, установив для свойства `no-close-on-route-change` значение
`true`.

## События

Боковая панель будет генерировать событие `shown`, когда боковая панель откроется, и событие
`hidden`, когда боковая панель будет закрыта.

Событие `change` используется для обновления `v-model` и генерируется всякий раз, когда изменяется
состояние видимости боковой панели.

## Доступность

`<b-sidebar>` предоставляет несколько специальных возможностей.

Когда боковая панель открыта, вся боковая панель получает фокус, что желательно для программ чтения
с экрана и пользователей, использующих только клавиатуру. Когда боковая панель закрыта, элемент,
который ранее был в фокусе до того, как боковая панель была открыта, будет перефокусирован.

В некоторых случаях может потребоваться полностью отключить функцию принудительного фокуса. Вы
можете сделать это, установив свойство `no-enforce-focus`, хотя обычно это не рекомендуется из
соображений доступности.

Когда боковая панель открыта, пользователи могут нажать <kbd>Esc</kbd>, чтобы закрыть боковую
панель. Чтобы отключить эту функцию, установите свойство `no-close-on-esc` в значение `true`. С
включенным фоном вы можете использовать свойство `no-close-on-backdrop`, чтобы отключить функцию
закрытия при щелчке фона.

Когда свойство `backdrop` имеет значение `true`, боковая панель будет пытаться ограничить фокус
внутри боковой панели, а для боковой панели будет установлен атрибут `aria-modal="true"`.

Если вы скрыли заголовок или не имеете заголовка для боковой панели, задайте либо строку
`aria-label`, описывающую боковую панель, либо задайте `aria-labelledby` идентификатор элемента,
содержащего заголовок. При использовании `lazy` свойства _и_ у вас нет заголовка, используйте
свойство `aria-label`, чтобы предоставить соответствующую строку для маркировки боковой панели.

## Замечания по реализации

Пользовательский SCSS/CSS BootstrapVue требуется для правильного стиля и позиционирования боковой
панели.

Вспомогательные классы Bootstrap v4 фона (`'bg-*'`) и текста (`'text-*'`) используются для
управления цветом фона и шрифта соответственно.

Некоторые стили по умолчанию для `<b-sidebar>` можно настроить с помощью переменных SASS.
Дополнительные сведения смотрите в [документации по темам](/docs/reference/theming).

## Смотрите также

- [`v-b-toggle` directive](/docs/directives/toggle)
- [`<b-collapse>` component](/docs/components/collapse)
- [`<b-button-close>` component](/docs/components/button#comp-ref-b-button-close)
