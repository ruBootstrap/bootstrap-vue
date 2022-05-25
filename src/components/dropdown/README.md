# Выпадающий список

> Выпадающие списки - это переключаемые контекстные наложения для отображения списков ссылок и действий в формате раскрывающегося меню.

Компоненты `<b-dropdown>` (или известные под его более коротким псевдонимом `<b-dd>`) являются переключаемыми, контекстными наложениями для отображения списков ссылок и многого другого. Они переключаются щелчком (или нажатием пробела или вводом при фокусировке), а не при наведении курсора; это [намеренное дизайнерское решение](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

```html
<div>
  <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>Первое действие</b-dropdown-item>
    <b-dropdown-item>Второе действие</b-dropdown-item>
    <b-dropdown-item>Третье действие</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Активное действие</b-dropdown-item>
    <b-dropdown-item disabled>Отключенное действие</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown.vue -->
```

## Контент кнопки

Вы можете настроить текст раскрывающейся кнопки, используя либо свойство `text` (показанное в предыдущих примерах), либо используя слот `button-content` вместо свойства `text`. Слот `button-content` позволяет вам использовать базовый HTML и иконки в содержимом кнопки.

Если присутствуют и свойство `text`, и слот `button-content`, то слот `button-content` будет иметь приоритет.

```html
<div>
  <b-dropdown text="Button text via Prop">
    <b-dropdown-item href="#">Пункт</b-dropdown-item>
    <b-dropdown-item href="#">Другой пункт</b-dropdown-item>
  </b-dropdown>

  <b-dropdown>
    <template #button-content>
      Пользовательский <strong>Content</strong> с <em>HTML</em> через слот
    </template>
    <b-dropdown-item href="#">Пункт</b-dropdown-item>
    <b-dropdown-item href="#">Другой пункт</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-button-content.vue -->
```

## Позиционирование

Раскрывающийся список поддерживает различное позиционирование, такое как выравнивание по левому и правому краю, раскрывающееся и раскрывающееся, а также поддерживает автоматическое переворачивание (раскрывающееся в раскрывающееся и наоборот), когда меню выходит за пределы видимой области экрана.

### Выравнивание меню

Выпадающее меню может быть выровнено по левому краю (по умолчанию) или по правому краю относительно кнопки над ним. Чтобы выпадающий список был выровнен по правому краю, установите свойство `right`.

```html
<div>
  <b-dropdown id="dropdown-left" text="Left align" variant="primary" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>

  <b-dropdown id="dropdown-right" right text="Right align" variant="primary" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-right.vue -->
```

### Выпадающее вверх

Превратите выпадающее меню в выпадающее вверх, установив свойство `dropup`.

```html
<div>
  <b-dropdown id="dropdown-dropup" dropup text="Drop-Up" variant="primary" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-dropup.vue -->
```

### Выпадающее вправо или влево

Превратите раскрывающееся меню в раскрывающееся меню справа, установив свойство `dropright`. Или превратите его в выпадающее левое меню, установив для свойства `dropleft` значение `true`.

`dropright` имеет приоритет над `dropleft`. Ни `dropright`, ни `dropleft` не действуют, если установлено `dropup`.

```html
<div>
  <b-dropdown id="dropdown-dropright" dropright text="Drop-Right" variant="primary" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>

  <b-dropdown id="dropdown-dropleft" dropleft text="Drop-Left" variant="primary" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-dropright-dropleft.vue -->
```

### Авто "flipping"

По умолчанию раскрывающиеся списки могут переворачиваться вверх или вниз в зависимости от их текущего положения в области просмотра. Чтобы отключить эту функцию автоматического переворачивания, установите свойство `no-flip`.

### Смещение меню

Хотите немного отодвинуть меню от кнопок-переключателей? Затем используйте свойство `offset`, чтобы указать количество пикселей, которые нужно сдвинуть вправо (или влево, если оно отрицательно) от переключателя:

- Задается как количество пикселей: положительное для сдвига вправо, отрицательное для сдвига влево.
- Укажите расстояние в единицах CSS (например, `0.3rem`, `4px`, `1.2em` и т. д.), передаваемое в виде строки.

```html
<div>
  <b-dropdown id="dropdown-offset" offset="25" text="Offset Dropdown" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-offset.vue -->
```

### Ограничение границ

По умолчанию раскрывающиеся списки визуально ограничены родительским элементом прокрутки, чего будет достаточно в большинстве ситуаций. Однако, если вы поместите раскрывающийся список внутри элемента, для которого задано `overflow: scroll` (или аналогичный), раскрывающееся меню может - в некоторых ситуациях - обрезаться. Чтобы обойти это, вы можете указать граничный элемент через свойство `boundary`. Поддерживаемые значения: `'scrollParent'` (по умолчанию), `'viewport'`, `'window'` или ссылка на элемент HTML. Граничное значение передается непосредственно в параметр конфигурации Popper.js `boundariesElement`.

**Примечание:** Когда `boundary` - это любое значение, отличное от `'scrollParent'` по умолчанию, стиль `position: static` применяется к корневому элементу раскрывающегося компонента, чтобы позволить меню "прорыв" из контейнера прокрутки. В некоторых ситуациях это может повлиять на ваш макет или расположение кнопки запуска раскрывающегося списка. В этих случаях вам может потребоваться заключить раскрывающийся список в другой элемент.

### Расширенная конфигурация Popper.js

Если вам нужна расширенная конфигурация Popper.js, чтобы раскрывающиеся списки соответствовали вашим потребностям, вы можете использовать свойство `popper-opts` для передачи настраиваемого объекта конфигурации, который будет полностью объединен с настройками BootstrapVue по умолчанию.

Перейдите в [документацию Popper.js](https://popper.js.org/docs/v1/), чтобы увидеть все параметры конфигурации.

**Примечание**: Свойства `offset`, `boundary` и `no-flip` могут потерять свое действие при перезаписи конфигурации Popper.js.

## Поддержка разделенных кнопок

Создайте разделенную кнопку раскрывающегося списка, где левая кнопка обеспечивает стандартное событие `click` и поддержку ссылок, а правая сторона - кнопка переключения раскрывающегося меню.

```html
<div>
  <b-dropdown split text="Split Dropdown" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь...</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-split.vue -->
```

### Поддержка ссылки на разделенную кнопку

Левая разделенная кнопка по умолчанию представляет собой элемент типа `<button>` (точнее, `<b-button>`). Чтобы преобразовать эту кнопку в ссылку или `<router-link>`, укажите href через свойство `split-href` или ссылку маршрутизатора `to` значение через свойство `split-to`, сохраняя при этом внешний вид кнопка.

```html
<div>
  <b-dropdown split split-href="#foo/bar" text="Раздельная ссылка" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь...</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-split-link.vue -->
```

### Тип разделенной кнопки

По умолчанию для разделенной кнопки используется кнопка `type` типа кнопка `'button'`. Вы можете указать альтернативный тип с помощью свойства `split-button-type`. Поддерживаемые значения: `'button'`, `'submit'` и `'reset'`.

Если заданы свойства `split-to` или `split-href`, свойство `split-button-type` будет проигнорировано.

## Варианты стилизации

Выпадающие списки поддерживают различные элементы оформления кнопки запуска раскрывающегося списка.

### Размеры

Выпадающие списки работают с кнопками-триггерами любого размера, включая кнопки по умолчанию и кнопки с разделенным раскрывающимся списком.

Задайте для свойства `size` значение `sm` для маленьких кнопок или `lg` для больших кнопок.

```html
<div>
  <div>
    <b-dropdown size="lg" text="Large" class="m-2">
      <b-dropdown-item-button>Действие</b-dropdown-item-button>
      <b-dropdown-item-button>Другое действие</b-dropdown-item-button>
      <b-dropdown-item-button>Что-то еще здесь</b-dropdown-item-button>
    </b-dropdown>

    <b-dropdown size="lg" split text="Large Split" class="m-2">
      <b-dropdown-item-button>Действие</b-dropdown-item-button>
      <b-dropdown-item-button>Другое действие</b-dropdown-item-button>
      <b-dropdown-item-button>Что-то еще здесь...</b-dropdown-item-button>
    </b-dropdown>
  </div>
  <div>
    <b-dropdown size="sm" text="Small" class="m-2">
      <b-dropdown-item-button>Действие</b-dropdown-item-button>
      <b-dropdown-item-button>Другое действие</b-dropdown-item-button>
      <b-dropdown-item-button>Что-то еще здесь...</b-dropdown-item-button>
    </b-dropdown>

    <b-dropdown size="sm" split text="Small Split" class="m-2">
      <b-dropdown-item-button>Действие</b-dropdown-item-button>
      <b-dropdown-item-button>Другое действие</b-dropdown-item-button>
      <b-dropdown-item-button>Что-то еще здесь...</b-dropdown-item-button>
    </b-dropdown>
  </div>
</div>

<!-- b-dropdown-sizes.vue -->
```

**Примечание:** _Изменение размера кнопок не влияет на размер пунктов меню!_

### Варианты цвета раскрывающегося списка

К кнопке переключения раскрывающегося списка можно применить один из стандартных контекстных вариантов Bootstrap, установив для свойства `variant` значение `success`, `primary`, `info`, `danger`, `link`, `outline-dark` и т. д. (или пользовательские варианты, если они определены). Вариант по умолчанию - `secondary`.

Полный список встроенных контекстных вариантов смотрите в [Справочнике по вариантам](/docs/reference/color-variants).

```html
<div>
  <b-dropdown text="Primary" variant="primary" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>

  <b-dropdown text="Success" variant="success" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>

  <b-dropdown text="Outline Danger" variant="outline-danger" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-variants.vue -->
```

Вы также можете применить произвольные классы к кнопке-переключателю с помощью свойства `toggle-class`. Это свойство принимает либо строку, либо массив строк.

### Вариант цвета разделенной кнопки

По умолчанию левая разделенная кнопка использует тот же вариант `variant`, что и кнопка `toggle`. Вы можете дать кнопке разделения отдельный вариант через свойство `split-variant`.

```html
<div>
  <b-dropdown
    split
    split-variant="outline-primary"
    variant="primary"
    text="Split Variant Dropdown"
    class="m-2"
  >
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь...</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-split-variant.vue -->
```

### Выпадающие списки на уровне блоков

По умолчанию раскрывающиеся списки действуют как кнопки и отображаются в строке. Чтобы создать выпадающие списки на уровне блоков (которые охватывают всю ширину родительского элемента), установите свойство `block`. Поддерживаются раскрывающиеся списки как обычных, так и разделенных кнопок.

```html
<div>
  <b-dropdown text="Block Level Dropdown" block variant="primary" class="m-2">
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>

  <b-dropdown
    text="Block Level Split Dropdown"
    block
    split
    split-variant="outline-primary"
    variant="primary"
    class="m-2"
  >
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь...</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-block.vue -->
```

Если вы хотите, чтобы раскрывающееся меню также занимало всю ширину родительского контейнера, добавьте утилиту `w-100` в свойство `menu-class`.

```html
<div>
  <b-dropdown
    text="Block Level Dropdown Menu"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-block-menu.vue -->
```

### Варианты цвета раскрывающегося подкомпонента

Многие из поддерживаемых раскрывающихся [субкомпонентов](#dropdown-supported-sub-components) предоставляют свойство `variant` для управления цветом их текста.

### Скрытая каретка

Выпадающий список может быть создан с визуально скрытой кареткой переключателя, установив для свойства `no-caret` значение `true`. Это полезно, когда раскрывающийся список должен отображаться в виде иконки.

```html
<div>
  <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content>
      &#x1f50d;<span class="sr-only">Поиск</span>
    </template>
    <b-dropdown-item href="#">Действие</b-dropdown-item>
    <b-dropdown-item href="#">Другое действие</b-dropdown-item>
    <b-dropdown-item href="#">Что-то еще здесь...</b-dropdown-item>
  </b-dropdown>
</div>

<!-- b-dropdown-hidden-caret.vue -->
```

**Примечание:** Каретка всегда будет отображаться при использовании режима `split`.

## Отложенный раскрывающийся список

По умолчанию `<b-dropdown>` отображает содержимое меню в DOM, даже если меню не отображается.
Когда на одной странице отображается большое количество раскрывающихся списков, производительность может снизиться из-за большего общего использования памяти. Вы можете указать `<b-dropdown>` отображать содержимое меню только тогда, когда оно отображается, установив для свойства `lazy` значение `true`.

## Подкомпоненты, поддерживаемые раскрывающимся списком

Следующие компоненты можно разместить в раскрывающихся списках. Использование любого другого компонента или разметки может нарушить раскладку и/или навигацию с клавиатуры.

| Подкомпонент              | Описание                                                                                                                     | Алиасы                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `<b-dropdown-item>`        | Элементы действий, которые обеспечивают щелчок, ссылку и функциональность `<router-link>`/`<nuxt-link>`. По умолчанию отображается как элемент `<a>`. | `<b-dd-item>`                                                    |
| `<b-dropdown-item-button>` | Альтернатива `<b-dropdown-item>`, которая отображает пункт меню с помощью элемента `<button>`.                                      | `<b-dropdown-item-btn>`, `<b-dd-item-button>`, `<b-dd-item-btn>` |
| `<b-dropdown-divider>`     | Разделитель / разделитель, который можно использовать для разделения раскрывающихся элементов.                                                                | `<b-dd-divider>`                                                 |
| `<b-dropdown-text>`        | Свободный текстовый контент в меню.                                                                                            | `<b-dd-text>`                                                    |
| `<b-dropdown-form>`        | Для размещения элементов управления формы в раскрывающемся меню.                                                                               | `<b-dd-form>`                                                    |
| `<b-dropdown-group>`       | Для группировки раскрывающихся субкомпонентов с дополнительным заголовком.                                                                   | `<b-dd-group>`                                                   |
| `<b-dropdown-header>`      | Элемент заголовка, используемый для идентификации группы раскрывающихся элементов.                                                                 | `<b-dd-header>`                                                  |

**Примечание:** _Вложенные подменю **не** поддерживаются._

### `<b-dropdown-item>`

`<b-dropdown-item>` обычно используется для создания навигационной ссылки внутри вашего меню. Используйте либо свойство `href` или свойство `to` (для поддержки ссылки маршрутизатора), чтобы сгенерировать соответствующую ссылку навигации. Если ни `href`, ни `to` не указаны, будет сгенерирована стандартная ссылка `<a>` с `href`, равным `#` (с обработчиком событий, который предотвратит прокрутку вверх, не допуская действия ссылки по умолчанию).

Отключить раскрывающийся список, установив свойство `disabled`.

### `<b-dropdown-item-button>`

Исторически содержимое выпадающего меню должно было быть ссылками (`<b-dropdown-item>`), но это уже не относится к Bootstrap v4. Теперь вы можете дополнительно создавать элементы `<button>` в раскрывающихся списках с помощью подкомпонента `<b-dropdown-item-button>`. `<b-dropdown-item-button>` не поддерживает свойства `href` или `to`.

Отключить кнопку выпадающего списка, установив свойство `disabled`.

```html
<div>
  <b-dropdown id="dropdown-buttons" text="Dropdown using buttons as menu items" class="m-2">
    <b-dropdown-item-button>Я кнопка</b-dropdown-item-button>
    <b-dropdown-item-button active>Я активная кнопка</b-dropdown-item-button>
    <b-dropdown-item-button disabled>Я кнопка, но отключена!</b-dropdown-item-button>
    <b-dropdown-item-button>Я не похож на кнопку, но я такая!</b-dropdown-item-button>
  </b-dropdown>
</div>

<!-- b-dropdown-item-button.vue -->
```

Когда элемент меню не запускает навигацию, рекомендуется использовать подкомпонент `<b-dropdown-item-button>`.

### `<b-dropdown-divider>`

Разделите группы связанных пунктов меню с помощью `<b-dropdown-divider>`.

```html
<div>
  <b-dropdown id="dropdown-divider" text="Dropdown with divider" class="m-2">
    <b-dropdown-item-button>Первый элемент</b-dropdown-item-button>
    <b-dropdown-item-button>Второй элемент</b-dropdown-item-button>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button>Отдельный элемент</b-dropdown-item-button>
  </b-dropdown>
</div>

<!-- b-dropdown-divider.vue -->
```

### `<b-dropdown-text>`

Поместите любой текст произвольной формы в раскрывающееся меню с помощью субкомпонента `<b-dropdown-text>` или используйте текст и утилиты интервалов. Обратите внимание, что вам, вероятно, понадобятся дополнительные стили размеров, чтобы ограничить/установить ширину меню.

```html
<div>
  <b-dropdown id="dropdown-text" text="Dropdown with text" class="m-2">
    <b-dropdown-text style="width: 240px;">
      Пример текста, который свободно перемещается в раскрывающемся меню.
    </b-dropdown-text>
    <b-dropdown-text>И это еще один пример текста.</b-dropdown-text>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button>Первый элемент</b-dropdown-item-button>
    <b-dropdown-item-button>Второй элемент</b-dropdown-item-button>
  </b-dropdown>
</div>

<!-- b-dropdown-text.vue -->
```

`<b-dropdown-text>` имеет примененный к нему пользовательский класс BootstrapVue `.b-dropdown-text`, который устанавливает некоторые базовые стили, подходящие в большинстве ситуаций. По умолчанию его ширина будет такой же, как у самого широкого содержимого `<b-dropdown-item>`. Возможно, вам потребуется разместить в компоненте дополнительные стили или вспомогательные классы.

По умолчанию `<b-dropdown-text>` отображается с использованием тега `<p>`. Вы можете изменить отображаемый тег, установив для свойства `tag` любой допустимый тег HTML5 в подкомпоненте `<b-dropdown-text>`.

### `<b-dropdown-form>`

Выпадающие списки поддерживают основные формы. Поместите `<b-dropdown-form>` в раскрывающееся меню и разместите элементы управления формой внутри `<b-dropdown-form>`. `<b-dropdown-form>` основан на компоненте [`<b-form>`](/docs/components/form) и поддерживает те же свойства и атрибуты, что и обычная форма.

```html
<template>
  <div>
    <b-dropdown id="dropdown-form" text="Dropdown with form" ref="dropdown" class="m-2">
      <b-dropdown-form>
        <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
          <b-form-input
            id="dropdown-form-email"
            size="sm"
            placeholder="email@example.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password" label-for="dropdown-form-password">
          <b-form-input
            id="dropdown-form-password"
            type="password"
            size="sm"
            placeholder="Password"
          ></b-form-input>
        </b-form-group>

        <b-form-checkbox class="mb-3">Запомнить меня</b-form-checkbox>
        <b-button variant="primary" size="sm" @click="onClick">Войти</b-button>
      </b-dropdown-form>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Впервые здесь? Зарегистрироваться</b-dropdown-item-button>
      <b-dropdown-item-button>Забыли пароль?</b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        // Закройте меню и (передав true) верните фокус переключателю.
        this.$refs.dropdown.hide(true)
      }
    }
  }
</script>

<!-- b-dropdown-form.vue -->
```

`<b-dropdown-form>` имеет примененный к нему пользовательский класс BootstrapVue `.b-dropdown-form`, который устанавливает некоторые базовые стили, подходящие в большинстве ситуаций. По умолчанию его ширина будет такой же, как у самого широкого содержимого `<b-dropdown-item>`. Возможно, вам потребуется разместить в компоненте дополнительные стили или вспомогательные классы.

### `<b-dropdown-group>`

Сгруппируйте набор раскрывающихся подкомпонентов с необязательным связанным заголовком. Поместите `<b-dropdown-divider>` между вашей `<b-dropdown-group>` и другими группами или несгруппированным содержимым раскрывающегося списка.

```html
<div>
  <b-dropdown id="dropdown-grouped" text="Dropdown with group" class="m-2">
    <b-dropdown-item-button>
      Несгруппированный элемент
    </b-dropdown-item-button>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-group id="dropdown-group-1" header="Group 1">
      <b-dropdown-item-button>Первый сгруппированный элемент</b-dropdown-item-button>
      <b-dropdown-item-button>Второй сгруппированный элемент</b-dropdown-item-button>
    </b-dropdown-group>
    <b-dropdown-group id="dropdown-group-2" header="Group 2">
      <b-dropdown-item-button>Первый сгруппированный элемент</b-dropdown-item-button>
      <b-dropdown-item-button>Второй сгруппированный элемент</b-dropdown-item-button>
    </b-dropdown-group>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button>
      Другой несгруппированный элемент
    </b-dropdown-item-button>
  </b-dropdown>
</div>

<!-- b-dropdown-group.vue -->
```

Использование `<b-dropdown-group>` вместо `<b-dropdown-header>` является рекомендуемым методом для предоставления доступных сгруппированных элементов с заголовком.

### `<b-dropdown-header>`

Добавьте заголовок для обозначения разделов действий в любом раскрывающемся меню.

```html
<div>
  <b-dropdown id="dropdown-header" text="Dropdown with header" class="m-2">
    <b-dropdown-header id="dropdown-header-label">
      Раскрывающийся заголовок
    </b-dropdown-header>
    <b-dropdown-item-button aria-describedby="dropdown-header-label">
      Первый элемент
    </b-dropdown-item-button>
    <b-dropdown-item-button aria-describedby="dropdown-header-label">
      Второй элемент
    </b-dropdown-item-button>
  </b-dropdown>
</div>

<!-- b-dropdown-header.vue -->
```

Смотрите Раздел [Раскрывающиеся заголовки и доступность](#dropdown-headers-and-accessibility) для получения подробной информации о том, как сделать заголовки более доступными для пользователей вспомогательных технологий.

Использование подкомпонента `<b-dropdown-group>` упрощает создание доступных сгруппированных раскрывающихся элементов со связанным заголовком.

#### Закрытие меню через взаимодействие с формой

Нажатие кнопок внутри `<b-dropdown-form>` не приведет к автоматическому закрытию меню. Если вам нужно закрыть меню с помощью кнопки (или через событие отправки формы), вызовите метод `hide()` для экземпляра `<b-dropdown>`, как показано в приведенном выше примере.

Метод `hide()` принимает единственный логический аргумент. Если аргумент равен `true`, то после закрытия меню фокус будет возвращен к кнопке-переключателю раскрывающегося списка. В противном случае документ перейдет в фокус после закрытия меню.

## Прослушивание изменений раскрывающегося списка с помощью событий \$root

Чтобы прослушать любое раскрывающееся меню, используйте:

```js
export default {
  mounted() {
    this.$root.$on('bv::dropdown::show', bvEvent => {
      console.log('Dropdown is about to be shown', bvEvent)
    })
  }
}
```

Полный список событий смотрите в разделе документации [События](#component-reference).

## Слот по умолчанию с дополнительной областью действия

Слот по умолчанию может быть ограничен следующей доступной областью:

| Свойство или метод | Описание                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hide()`           | Может использоваться для закрытия раскрывающегося меню. Принимает необязательный логический аргумент, который, если `true`, возвращает фокус переключателю |

## Доступность

Предоставление уникального свойства `id` обеспечивает соответствие ARIA за счет автоматического добавления соответствующих атрибутов `aria-*` в визуализированную разметку.

Роль ARIA по умолчанию установлена на `menu`, но вы можете изменить эту роль по умолчанию на другую роль (например, `navigation`) с помощью свойства `role`, в зависимости от вашего пользовательского случая.
Значение свойства `role` будет использоваться для определения атрибута `aria-haspopup` для кнопки-переключателя.

Когда элемент меню не запускает навигацию, рекомендуется использовать субкомпонент `<b-dropdown-item-button>` (который не объявляется как ссылка) вместо `<b-dropdown-item>` (который представлен в виде ссылки на пользователя).

### Заголовки и доступность

При использовании компонентов `<b-dropdown-header>` в раскрывающемся меню рекомендуется добавить атрибут `id` к каждому из заголовков, а затем установить атрибут `aria-describedby` (установленный на `id` значение связанного заголовка) для каждого следующего раскрывающегося списка под этим заголовком. Это предоставит пользователям вспомогательных технологий (то есть пользователям с ослабленным зрением) дополнительный контекст о раскрывающемся элементе:

```html
<div>
  <b-dropdown id="dropdown-aria" text="Dropdown ARIA" variant="primary" class="m-2">
    <b-dropdown-header id="dropdown-header-1">Группы</b-dropdown-header>
    <b-dropdown-item-button aria-describedby="dropdown-header-1">Добавить</b-dropdown-item-button>
    <b-dropdown-item-button aria-describedby="dropdown-header-1">Удалить</b-dropdown-item-button>

    <b-dropdown-header id="dropdown-header-2">Пользователи</b-dropdown-header>
    <b-dropdown-item-button aria-describedby="dropdown-header-2">Добавить</b-dropdown-item-button>
    <b-dropdown-item-button aria-describedby="dropdown-header-2">Удалить</b-dropdown-item-button>

    <b-dropdown-divider></b-dropdown-divider>

    <b-dropdown-item-button>
      Что-то <strong>не</strong> связанное с Пользователями
    </b-dropdown-item-button>

  </b-dropdown>
</div>

<!-- b-dropdown-aria.vue -->
```

В качестве упрощенной альтернативы используйте `<b-dropdown-group>`, чтобы легко связать текст заголовка с содержащимися подкомпонентами раскрывающегося списка.

### Клавиатурная навигация

Выпадающие списки поддерживают навигацию с клавиатуры, имитируя собственное поведение `<select>`.

Обратите внимание, что <kbd>Down</kbd> и <kbd>Up</kbd> не перемещают фокус на субкомпоненты `<b-dropdown-form>`, но пользователи все равно могут использовать <kbd>Tab</kbd> или <kbd>Shift</kbd>+<kbd>Tab</kbd> для перехода к элементам управления формы в меню.

## Примечания по реализации

Выпадающее меню отображается с семантическими элементами `<ul>` и `<li>` по причинам доступности. `.dropdown-menu` - это элемент `<ul>`, а выпадающие элементы (элементы, кнопки, текст, форма, заголовки и разделители) заключены в элемент `<li>`. При создании пользовательских элементов для размещения в раскрывающемся меню убедитесь, что они заключены в простой `<li>`.

## Смотрите также

- [`<b-nav-item-dropdown>`](/docs/components/nav#dropdown-support) для поддержки раскрывающегося списка внутри `<b-nav>` и `<n-navbar>`
- [Поддержка связи маршрутизатора](/docs/reference/router-links) справочник для получения информации о свойствах, специфичных для связи маршрутизатора, доступных в `<b-dropdown-item>`

<!-- Component reference added automatically from component package.json -->
