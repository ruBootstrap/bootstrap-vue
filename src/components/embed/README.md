# Встраивание

> Создавайте адаптивные встраивания видео или слайд-шоу на основе ширины родительского элемента, создавая внутреннее соотношение, которое масштабируется на любом устройстве.

Правила напрямую применяются к элементам `<iframe>`, `<embed>`, `<video>` и `<object>`

```html
<div>
  <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
    allowfullscreen
  ></b-embed>
</div>

<!-- b-embed.vue -->
```

## Типы встраивания

Поддерживаемые типы встраивания: `iframe` (по умолчанию), `video`, `embed` и `object`, которые переводятся в стандартные HTML-элементы: `<iframe>`, `<video>`, `<embed>` и `<object>`.

Установите желаемый тип встраивания с помощью свойства `type`.

## Соотношения сторон

Соотношение сторон может быть установлено с помощью свойства `aspect`. Поддерживаемые соотношения сторон: `21by9` (21:9), `16by9` (16:9), `4by3` (4:3) и `1by1` (1:1). Формат по умолчанию `16by9`. Соотношения сторон определены в SCSS Bootstrap и преобразуются в имя класса `embed-responsive-{aspect}` (то есть `embed-responsive-16by9`, `embed-responsive-4by3`, etc.).

## Элемент оболочки

Адаптивное встраивание обернуто во внешний элемент (по умолчанию - `div`), чтобы обеспечить адаптивное соотношение сторон. Вы можете изменить этот тег с помощью свойства `tag`.

## Атрибуты и дочерние элементы

Любые дополнительные атрибуты, предоставленные для `<b-embed>` (кроме указанных выше свойств `type`, `aspect` и `tag`) применяются к внутреннему встроенному элементу (например, `iframe`, `video`, `embed` или `object`).

Любые дочерние элементы между открывающим и закрывающим `<b-embed>` будут помещены внутри внутреннего встроенного элемента. Обратите внимание, что тип iframe не поддерживает дочерние элементы.

**Пример: отзывчивое встраивание HTML5 `<video>`**

```html
<div>
  <b-embed type="video" aspect="4by3" controls poster="poster.png">
    <source src="dev-stories.webm" type="video/webm">
    <source src="dev-stories.mp4" type="video/mp4">
  </b-embed>
</div>
```

## Смотрите также

- [`<b-aspect>` component](/docs/components/aspect)

<!-- Component reference added automatically from component package.json -->
