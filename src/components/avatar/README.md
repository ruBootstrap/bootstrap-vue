# Аватар

> Аватары - это настраиваемый компонент BootstrapVue, который обычно используется
> для отображения профиля пользователя в виде изображения, значка или короткого текста.
> `<b-avatar>` предоставляет несколько свойств для настройки своего внешнего вида,
> таких как вариант цвета и округлость, и опционально поддерживает работу в качестве кнопки,
> ссылки или [ссылки маршрутизатора](/docs/reference/router-links).

## Обзор

Аватары - это легкие компоненты, которые по умолчанию отображаются встроенными, так что они центрируются по вертикали рядом с любым прилегающим простым текстом. Их также можно использовать как потомки других компонентов.

```html
<template>
  <div>
    <p>Использование автономного:<p/>
    <div class="mb-4">
      <b-avatar></b-avatar>
      <b-avatar variant="primary" text="BV"></b-avatar>
      <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
      <b-avatar variant="success" icon="people-fill"></b-avatar>
    </div>
    <p>Пример использования в компонентах (группа списка):<p/>
    <b-list-group style="max-width: 300px;">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">J. Circlehead</span>
        <b-badge>5</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
        <span class="mr-auto">BootstrapVue</span>
        <b-badge>12</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
        <span class="mr-auto">Super Kitty</span>
        <b-badge>9</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
        <span class="mr-auto">ACME group</span>
        <b-badge>7</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<!-- b-avatar.vue -->
```

## Типы аватаров

Содержимое аватара может быть изображением, иконкой или короткой текстовой строкой. По умолчанию для содержимого аватара используется [иконка `'person-fill'`](/docs/icons), если не указано иное содержимое.

Вы также можете предоставить настраиваемый контент через слот по умолчанию, хотя Вам может потребоваться применить дополнительный стиль к контенту.

### Содержание изображения

Используйте свойство `src`, чтобы указать URL-адрес изображения, которое будет использоваться в качестве содержимого аватара. Изображение должно иметь соотношение сторон `1:1` (это означает, что ширина и высота должны быть равны), в противном случае произойдет искажение формата изображения. Изображение будет увеличено или уменьшено, чтобы соответствовать ограничивающему прямоугольнику аватара.

```html
<template>
  <div class="mb-2">
    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
  </div>
</template>

<!-- b-avatar-src.vue -->
```

**Заметки:**

- При использовании сборщика модулей и относительных URL-адресов изображений проекта, пожалуйста, обратитесь к разделу справки [Компонент разрешение img src](/docs/reference/images) для получения дополнительных сведений.
- Свойство `src` имеет приоритет над реквизитом `icon` и `text`.
- <span class="badge badge-secondary">2.11.0+</span> Если изображение не загружается, аватар вернется к значению свойств `icon` или `text`. Если ни `icon`, ни `text` не указаны, будет отображаться иконка аватара по умолчанию. Кроме того, когда изображение не загружается, будет сгенерировано событие `img-error`.
- [Варианты цветов](#variants) при использовании изображений, которые обычно не видны, кроме случаев, когда изображение не загружается. Вариант повлияет на стиль фокуса, если аватар изображения также является [активным аватаром](#actionalble-avatars).

### Содержание иконки

С легкостью используйте одну из [иконок BootstrapVue](/docs/icons) в качестве содержимого аватара с помощью свойства `icon`. В свойстве должно быть указано допустимое имя иконки. Иконки будут масштабироваться в соответствии с [свойством `size`](#sizing).

```html
<template>
  <div class="mb-2">
    <b-avatar icon="people-fill"></b-avatar>
    <b-avatar icon="star-fill"></b-avatar>
    <b-avatar icon="music-note"></b-avatar>
    <b-avatar icon="star-fill" size="4em"></b-avatar>
  </div>
</template>

<!-- b-avatar-icon.vue -->
```

**Заметки:**

- Предоставляя имя иконки BootstrapVue, Вы _обязательно_ убедитесь, что Вы зарегистрировали соответствующий компонент иконки (либо локально для Вашего компонента/страницы, либо глобально), если не используете полный [плагин `BootstrapVueIcons`](/docs/icons).
- Свойство `icon` имеет приоритет перед свойством `text`.
- Если свойства `text`, `src` или `icon` не предоставлены _и_ [слот по умолчанию](#custom-content) не имеет содержимого, то будет использоваться иконка `person-fill`.

### Текстовый контент

Вы можете указать короткую строку в качестве содержимого аватара через свойство `text`. Строка должна быть короткой (от 1 до 3 символов) и будет преобразована с помощью CSS в верхний регистр. Размер шрифта будет масштабироваться относительно [установки свойства `size`](#sizing).

```html
<template>
  <div class="mb-2">
    <b-avatar text="BV"></b-avatar>
    <b-avatar text="a"></b-avatar>
    <b-avatar text="Foo"></b-avatar>
    <b-avatar text="BV" size="4rem"></b-avatar>
  </div>
</template>

<!-- b-avatar-text.vue -->
```

### Пользовательский контент

Используйте слот по умолчанию `default` для рендеринга пользовательского контента в аватаре, для более точного управления его внешним видом или при использовании пользовательских иконок или SVG, например:

```html
<b-avatar><custom-icon></custom-icon></b-avatar>
```

**Multi-line text example:**

```html
<template>
  <div class="mb-2">
    <b-avatar size="4em">Привет<br>Мир</b-avatar>
    <b-avatar size="4em">你好<br>世界</b-avatar>
  </div>
</template>

<!-- b-avatar-default-slot-multi-line.vue -->
```

**Заметки:**

- Слот по умолчанию имеет приоритет над свойствами `text`, `src` и `icon`.
- Содержимое слота по умолчанию будет заключено в элемент `<span>` для обеспечения правильного центрирования.
- Вам может потребоваться дополнительный стиль, применяемый к пользовательскому содержимому, чтобы компенсировать [форму компонента аватара](#rounding).

## Стилизация

### Варианты

Используйте свойство `variant`, чтобы указать один из цветов варианта темы Bootstrap. Вариант по умолчанию - `secondary`.

```html
<template>
  <div>
    <b-avatar variant="secondary"></b-avatar>
    <b-avatar variant="primary"></b-avatar>
    <b-avatar variant="dark"></b-avatar>
    <b-avatar variant="light"></b-avatar>
    <b-avatar variant="success"></b-avatar>
    <b-avatar variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar variant="info"></b-avatar>
  </div>
</template>

<!-- b-avatar-variant.vue -->
```

Если Вы определили дополнительные пользовательские варианты с помощью [тематических переменных SASS](/docs/reference/theming), пользовательские варианты также будут доступны для использования.

### Размеры

По умолчанию аватары имеют размер `2.5em` (относительно текущего размера шрифта). Вы можете изменить размер аватара, изменив текущий размер шрифта, или использовать свойство `size`, чтобы указать точный размер. Для размеров `sm`, `md` и `lg` по умолчанию используются значения `1.5em`, `2.5em` и `3.5em`. Числа преобразуются в значения пикселей. Любое другое значение _должно_ включать единицы измерения (например, `px`, `em` или `rem`).

```html
<template>
  <div>
    <b-avatar></b-avatar>
    <b-avatar size="sm"></b-avatar>
    <b-avatar size="lg"></b-avatar>
    <b-avatar :size="24"></b-avatar>
    <b-avatar size="3em"></b-avatar>
    <b-avatar size="72px"></b-avatar>
  </div>
</template>

<!-- b-avatar-size.vue -->
```

**Примечание:** Аватары _всегда_ отображаются с соотношением сторон `1:1`.

### Квадрат

Предпочитаете квадратный аватар? просто установите для свойства `square` значение `true`.

```html
<template>
  <div>
    <b-avatar square></b-avatar>
  </div>
</template>

<!-- b-avatar-square.vue -->
```

### Округление

`<b-avatar>` отрисовывает с круговым радиусом границы. Вы можете изменить округление, установив для свойства `rounded` одно из значений `true`, `'sm'`, `'lg'`, `'top'`, `'left'`, `'right'` или `'bottom'`. Когда установлено значение `true` (или пустая строка `''`), он использует значение по умолчанию для начальной загрузки среднего округления.

```html
<template>
  <div>
    <b-avatar rounded="sm"></b-avatar>
    <b-avatar rounded></b-avatar>
    <b-avatar rounded="lg"></b-avatar>
    <b-avatar rounded="top"></b-avatar>
    <b-avatar rounded="left"></b-avatar>
    <b-avatar rounded="right"></b-avatar>
    <b-avatar rounded="bottom"></b-avatar>
  </div>
</template>

<!-- b-avatar-rounding.vue -->
```

**Заметки:**

- Свойство `square` имеет приоритет над свойством `rounded`.
- В качестве альтернативного свойства `square` Вы можете установить свойство `rounded` на строку `'0'`, чтобы получить квадратный аватар.

### Выравнивание

По умолчанию `<b-avatar>` будет центрирован по вертикали вместе с прилегающим содержимым. В некоторых случаях Вы можете захотеть изменить выравнивание, например, чтобы текстовый аватар выровнял свой текст с прилегающим текстом. Просто установите класс [утилита вертикального выравнивания](/docs/reference/utility-classes) для компонента, например `<b-avatar class="align-baseline" ...>` или `<b-avatar class="align-top" ...>` и т. д.

## Действенные аватары

Легко создавайте аватары, которые реагируют на клики, или аватары, которые изменяют URL-адрес/маршрут при нажатии. Активные аватары появятся в последовательности вкладок документа и будут доступны как для программ чтения с экрана, так и для пользователей, использующих только клавиатуру.

Аватары изображения, когда они активны, используют базовое масштабное преобразование изображения при наведении курсора.

### Кнопка

Хотите вызвать открытие модального окна или действие? Установите свойство `button`, чтобы указать `<b-avatar>` на рендеринг как элемент `<button>`. При отображении в виде кнопки компонент будет генерировать событие `click` при каждом нажатии.

```html
<template>
  <b-list-group>
    <b-list-group-item>
      <b-avatar button @click="onClick" variant="primary" text="FF" class="align-baseline"></b-avatar>
      Кнопка аватар-текст
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" src="https://placekitten.com/300/300"></b-avatar>
      Кнопка аватар-изображение
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="onClick" icon="star-fill" class="align-center"></b-avatar>
      Кнопка аватар-иконка
    </b-list-group-item>
  </b-list-group>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.$bvModal.msgBoxOk('User name: Fred Flintstone', {
          title: 'User Info',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0'
        })
      }
    }
  }
</script>

<!-- b-avatar-button.vue -->
```

Свойство `button-type` можно использовать для управления типом кнопки для рендеринга. Поддерживаемые значения: `'button'` (по умолчанию), `'submit'` или `'reset'`.

### Ссылка

Представьте себе аватар в качестве ссылки или ссылки маршрутизатора? Просто установите свойства `href` или `to` (соответственно). Свойство `to` может быть либо строковым путем, либо объектом `Location`. Свойство `to` требует, чтобы был установлен `Vue router` (или эквивалент).

```html
<template>
  <b-list-group>
    <b-list-group-item>
      <b-avatar href="#foo" variant="primary" text="FF" class="align-baseline"></b-avatar>
      Ссылка аватар-текст
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar href="#bar" src="https://placekitten.com/300/300"></b-avatar>
      Ссылка аватар-изображение
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar href="#baz" icon="star-fill" class="align-center"></b-avatar>
      Ссылка аватар-иконка
    </b-list-group-item>
  </b-list-group>
</template>

<!-- b-avatar-href.vue -->
```

**Заметки:**

- Свойство `button` имеет приоритет над свойствами `href` и `to`.
- Дополнительные сведения о свойствах, совместимых с `<router-link>`, смотрите в [Раздел справки по поддержке маршрутизаторов](/docs/reference/router-links).

## Значки-аватары

<span class="badge badge-info small">2.12.0+</span>

Легко добавьте иконку к своему аватару через свойство `badge` или слот `'badge'`, а вариант иконки можно установить с помощью свойства `badge-variant`. Значок будет масштабироваться в соответствии с размером аватара.

```html
<template>
  <div>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="warning" icon="people-fill"></b-avatar>
    <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="dark" text="BV"></b-avatar>
    <b-avatar square badge badge-variant="dark" text="BV"></b-avatar>
  </div>
</template>

<!-- b-avatar-badge.vue -->
```

### Контент значка

Добавьте текстовое содержимое к значку, указав строку в свойстве `badge`, или используйте именованный слот `'badge'`.

```html
<template>
  <div>
    <b-avatar badge="BV"></b-avatar>
    <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
    <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
      <template #badge><b-icon icon="star-fill"></b-icon></template>
    </b-avatar>
  </div>
</template>

<!-- b-avatar-badge-content.vue -->
```

### Позиционирование значка

По умолчанию значок отображается в правом нижнем углу аватара. Вы можете использовать логические свойства `badge-top` и `badge-right` для переключения сторон. Объедините оба атрибута, чтобы переместить значок в верхний правый угол аватара.

```html
<template>
  <div>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-left></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-left badge-top></b-avatar>
  </div>
</template>

<!-- b-avatar-badge-position.vue -->
```

Используйте свойство `badge-offset` для управления смещением значка. Значение `badge-offset` должно быть допустимой строкой длины CSS (например, `'2px'`, `'-2px'`, `'0.5em'` и т. д.). Положительные значения перемещают значок внутрь, а отрицательные значения перемещают значок наружу.

```html
<template>
  <div>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-offset="2px"></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-top badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-top badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-top badge-offset="2px"></b-avatar>
  </div>
</template>

<!-- b-avatar-badge-offset.vue -->
```

## Группы аватаров

<span class="badge badge-info small">v2.14.0+</span>

Сгруппируйте несколько аватаров вместе, заключив их в компонент `<b-avatar-group>`:

```html
<template>
  <div>
    <b-avatar-group size="60px">
      <b-avatar></b-avatar>
      <b-avatar text="BV" variant="primary"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar text="OK" variant="danger"></b-avatar>
      <b-avatar variant="warning"></b-avatar>
      <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
      <b-avatar icon="music-note" variant="success"></b-avatar>
    </b-avatar-group>
  </div>
</template>

<!-- b-avatar-group.vue -->
```

**Заметки:**

- Свойства `variant`, `square` и `rounded` в `<b-avatar-group>` будут иметь приоритет над соответствующими свойствами на отдельных аватарах.

### Размер группы

Чтобы изменить размер аватаров, используйте свойство `size` в `<b-avatar-group>`. Свойство `size` принимает значения того же типа, что и свойство `size` в `<b-avatar>`. Обратите внимание, что свойство `size` будет игнорироваться на отдельных аватарах, когда они помещаются внутри `<b-avatar-group>`.

```html
<template>
  <div>
    <b-avatar-group size="5rem">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </div>
</template>

<!-- b-avatar-group-size.vue -->
```

### Групповой вариант

Используйте свойство `variant`, чтобы раскрасить все дочерние аватары в `<b-avatar-group>`. Обратите внимание, что свойство `variant`, если оно установлено, переопределит `variant`, заданное для отдельных аватаров.

```html
<template>
  <div>
    <b-avatar-group variant="success">
      <b-avatar></b-avatar>
      <b-avatar variant="info"></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </div>
</template>

<!-- b-avatar-group-variant.vue -->
```

### Групповое округление

Подобно свойству `variant`, свойства `<b-avatar-group>`, `square` и `rounded` имеют приоритет над соответствующими свойствами на отдельных дочерних аватарах.

```html
<template>
  <div>
    <b-avatar-group rounded="lg">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </div>
</template>

<!-- b-avatar-group-rounded.vue -->
```

### Групповое перекрытие

По умолчанию дочерние аватары внутри `<b-avatar-group>` будут перекрываться с коэффициентом `0.3` (относительно размера аватара). Вы можете контролировать величину перекрытия, установив для свойства `overlap` значение от `0` до `1`, где `0` означает отсутствие перекрытия, а `1` означает 100% перекрытие.

```html
<template>
  <div>
    <b-avatar-group overlap="0.65">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </div>
</template>

<!-- b-avatar-group-overlap.vue -->
```

## Доступность

Используйте свойство `aria-label`, чтобы предоставить доступную, удобную для чтения с экрана метку для Вашего аватара. Если у Вас есть значок, рекомендуется добавить информацию о его назначении или содержании на свой aria-label (например, `'3 messages'`, `'online'` и т. д.).

Хотя событие `click` генерируется независимо от того, установлены ли события `button`, `href` или `to`, настоятельно рекомендуется использовать свойство `button`, когда событие click должно запускать действие (или использовать свойства `to` или `href` при изменении маршрутов или URL-адресов) по причинам доступности.

## Замечания по реализации

Аватары основаны на компонентах `<b-badge>` и `<b-button>` и, как таковые, полагаются на классы вариантов Bootstrap `badge-*` и `btn-*`, а также на `rounded-*` [классы утилит](/docs/reference/utility-classes).

`<b-avatar>` также требует настраиваемого CSS BootstrapVue для правильного оформления.
