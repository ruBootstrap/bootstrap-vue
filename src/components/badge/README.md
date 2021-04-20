# Значок

> Небольшой адаптивный тег для добавления контекста практически к любому контенту.

## Обзор

Значки масштабируются в соответствии с размером непосредственного родительского элемента с использованием относительного размера шрифта и единиц измерения `em`.

```html
<div>
  <h2>Пример заголовка <b-badge>Новое</b-badge></h2>
  <h3>Пример заголовка <b-badge>Новое</b-badge></h3>
  <h4>Пример заголовка <b-badge>Новое</b-badge></h4>
  <h5>Пример заголовка <b-badge>Новое</b-badge></h5>
  <h6>Пример заголовка <b-badge>Новое</b-badge></h6>
</div>

<!-- b-badges.vue -->
```

Значки можно использовать как часть ссылок или кнопок для обеспечения счетчика (или аналогичного флажка).

```html
<div class="text-center">
  <b-button variant="primary">
    Уведомления <b-badge variant="light">4</b-badge>
  </b-button>
</div>

<!-- b-badge-button.vue -->
```

Обратите внимание, что в зависимости от того, как они используются, значки могут сбивать с толку пользователей программ чтения с экрана и аналогичных вспомогательных технологий. Хотя стиль значков дает визуальную подсказку об их назначении, этим пользователям просто будет представлено содержимое значка. В зависимости от конкретной ситуации эти значки могут выглядеть как случайные дополнительные слова или числа в конце предложения, ссылки или кнопки.

Если контекст не ясен (как в примере «Уведомления», где подразумевается, что «4» - это количество уведомлений), рассмотрите возможность включения дополнительного контекста с визуально скрытым фрагментом дополнительного текста.

```html
<div class="text-center">
  <b-button variant="primary">
    Профиль
    <b-badge variant="light">9 <span class="sr-only">непрочитанных сообщений</span></b-badge>
  </b-button>
</div>

<!-- b-badge-button-aria.vue -->
```

## Контекстные вариации

Добавьте любой из следующих вариантов с помощью свойства `variant`, чтобы изменить внешний вид `<b-badge>`: `default`, `primary`, `success`, `warning`, `info` и `danger`. Если вариант не указан, будет использоваться `default`.

```html
<div>
  <b-badge variant="primary">Primary</b-badge>
  <b-badge variant="secondary">Secondary</b-badge>
  <b-badge variant="success">Success</b-badge>
  <b-badge variant="danger">Danger</b-badge>
  <b-badge variant="warning">Warning</b-badge>
  <b-badge variant="info">Info</b-badge>
  <b-badge variant="light">Light</b-badge>
  <b-badge variant="dark">Dark</b-badge>
</div>

<!-- b-badge-variants.vue -->
```

### Передача смысла вспомогательным технологиям

Использование цвета для добавления смысла обеспечивает только визуальную индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана. Убедитесь, что информация, обозначенная цветом, либо очевидна из самого контента (например, видимый текст), либо включена с помощью альтернативных средств, таких как дополнительный текст, скрытый с помощью класса `.sr-only`.

## Значки таблетки

Используйте свойство `pill`, чтобы сделать значки более округлыми (с большим радиусом границы и дополнительным горизонтальным отступом). Полезно, если вы пропустите значки из Bootstrap v3.

```html
<div>
  <b-badge pill variant="primary">Primary</b-badge>
  <b-badge pill variant="secondary">Secondary</b-badge>
  <b-badge pill variant="success">Success</b-badge>
  <b-badge pill variant="danger">Danger</b-badge>
  <b-badge pill variant="warning">Warning</b-badge>
  <b-badge pill variant="info">Info</b-badge>
  <b-badge pill variant="light">Light</b-badge>
  <b-badge pill variant="dark">Dark</b-badge>
</div>

<!-- b-badge-pill.vue -->
```

## Действующие значки

Быстро предоставляйте действенные значки с состояниями наведения и фокуса, указав свойство `href` (ссылки) или `to` свойство (router-links):

```html
<div>
  <b-badge href="#" variant="primary">Primary</b-badge>
  <b-badge href="#" variant="secondary">Secondary</b-badge>
  <b-badge href="#" variant="success">Success</b-badge>
  <b-badge href="#" variant="danger">Danger</b-badge>
  <b-badge href="#" variant="warning">Warning</b-badge>
  <b-badge href="#" variant="info">Info</b-badge>
  <b-badge href="#" variant="light">Light</b-badge>
  <b-badge href="#" variant="dark">Dark</b-badge>
</div>

<!-- b-badge-action.vue -->
```

Обратитесь к справочной странице [Поддержка маршрутизатора](/docs/reference/router-links) для получения информации о конкретных свойствах связи маршрутизатора.

<!-- Component reference added automatically from component package.json -->
