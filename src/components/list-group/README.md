# Группа списка

> Группы списков — это гибкий и мощный компонент для отображения серии содержимого. Элементы группы списка могут быть изменены для поддержки практически любого содержимого внутри. Их также можно использовать в качестве навигации с помощью различных свойств.

```html
<b-list-group>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>

<!-- b-list-group.vue -->
```

## Активные элементы

Установите свойство `active` в `<b-list-group-item>`, чтобы указать текущий активный выбор.

```html
<b-list-group>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>

<!-- b-list-group-active.vue -->
```

## Disabled items

Установите свойство `disabled` в `<b-list-group-item>`, чтобы оно отображалось отключенным (также работает с активными элементами, смотрите ниже).

```html
<b-list-group>
  <b-list-group-item disabled>Cras justo odio</b-list-group-item>
  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item disabled>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>

<!-- b-list-group-disabled.vue -->
```

## Элементы группы списка действий

Превратите `<b-list-group-item>` в действенную _ссылку_ (`<a href="...">`), указав либо свойство `href`, либо свойство [router-link](/docs/reference/router-links) `to`.

```html
<b-list-group>
  <b-list-group-item href="#some-link">Отличная ссылка</b-list-group-item>
  <b-list-group-item href="#" active>Ссылка с активным состоянием</b-list-group-item>
  <b-list-group-item href="#">Ссылки на действия легко</b-list-group-item>
  <b-list-group-item href="#foobar" disabled>Отключенная ссылка</b-list-group-item>
</b-list-group>

<!-- b-list-group-link.vue -->
```

Или, если вы предпочитаете элементы `<button>` ссылкам, установите свойство `button` в значение `true`.

```html
<b-list-group>
  <b-list-group-item button>Элемент кнопки</b-list-group-item>
  <b-list-group-item button>Я кнопка</b-list-group-item>
  <b-list-group-item button disabled>Отключенная кнопка</b-list-group-item>
  <b-list-group-item button>Это тоже кнопка</b-list-group-item>
</b-list-group>

<!-- b-list-group-button.vue -->
```

**Примечания:**

- Когда свойство `button` имеет значение `true`, все [свойства, связанные со ссылкой](/docs/components/link) (кроме `active`) и свойство `tag` не будут иметь никакого эффекта.
- Когда установлены `href` или `to`, свойство `tag` не действует.

Обратитесь к справочной странице [Поддержка маршрутизатора](/docs/reference/router-links) для конкретных свойств маршрутизатора.

## Контекстные варианты

Используйте контекстные варианты, чтобы стилизовать элементы списка с фоном и цветом с отслеживанием состояния с помощью параметра `variant`.

```html
<b-list-group>
  <b-list-group-item>Элемент группы списка по умолчанию</b-list-group-item>
  <b-list-group-item variant="primary">Элемент группы основного списка</b-list-group-item>
  <b-list-group-item variant="secondary">Элемент группы вторичного списка</b-list-group-item>
  <b-list-group-item variant="success">Элемент группы списка успехов</b-list-group-item>
  <b-list-group-item variant="danger">Элемент группы списка опасностей</b-list-group-item>
  <b-list-group-item variant="warning">Элемент группы списка предупреждений</b-list-group-item>
  <b-list-group-item variant="info">Элемент группы информационного списка</b-list-group-item>
  <b-list-group-item variant="light">Элемент группы светлого списка</b-list-group-item>
  <b-list-group-item variant="dark">Элемент группы темного списка</b-list-group-item>
</b-list-group>

<!-- b-list-group-variant.vue -->
```

Контекстные варианты также работают с элементами действий. Обратите внимание на добавление стиля при наведении, которого нет в предыдущем примере. Также поддерживается состояние `active`; установите его, чтобы указать активный выбор в элементе группы контекстного списка.

```html
<b-list-group>
  <b-list-group-item href="#">Элемент группы списка по умолчанию</b-list-group-item>
  <b-list-group-item href="#" variant="primary">Элемент группы основного списка</b-list-group-item>
  <b-list-group-item href="#" variant="secondary">Элемент группы вторичного списка</b-list-group-item>
  <b-list-group-item href="#" variant="success">Элемент группы списка успехов</b-list-group-item>
  <b-list-group-item href="#" variant="danger">Элемент группы списка опасностей</b-list-group-item>
  <b-list-group-item href="#" variant="warning">Элемент группы списка предупреждений</b-list-group-item>
  <b-list-group-item href="#" variant="info">Элемент группы информационного списка</b-list-group-item>
  <b-list-group-item href="#" variant="light">Элемент группы светлого списка</b-list-group-item>
  <b-list-group-item href="#" variant="dark">Элемент группы темного списка</b-list-group-item>
</b-list-group>

<!-- b-list-group-variant-action.vue -->
```

### Передача смысла вспомогательным технологиям

Использование цвета для добавления значения обеспечивает только визуальную индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана. Убедитесь, что информация, обозначенная цветом, либо очевидна из самого содержимого (например, видимый текст), либо включена с помощью альтернативных средств, таких как дополнительный текст, скрытый с помощью класса `.sr-only`.

## Со значками

Добавьте [значки](/docs/components/badge)в любой элемент группы списка, чтобы показать количество непрочитанных сообщений, активность и многое другое с помощью некоторых [классов флекс-утилит](/docs/reference/utility-classes).

```html
<b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Cras justo odio
    <b-badge variant="primary" pill>14</b-badge>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <b-badge variant="primary" pill>2</b-badge>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <b-badge variant="primary" pill>1</b-badge>
  </b-list-group-item>
</b-list-group>

<!-- b-list-group-badges.vue -->
```

## Список групп внутри карточек

Включите группы списков в [карточки](/docs/components/card). Используйте свойство `flush` элемента `<b-list-group>` при использовании карточек с `no-body`, чтобы стороны группы списка были на одном уровне с карточкой.

```html
<b-card-group deck>
  <b-card header="Карточка с группой списка">
    <b-list-group>
      <b-list-group-item href="#">Cras justo odio</b-list-group-item>
      <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <p class="card-text mt-2">
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </p>
  </b-card>

  <b-card no-body header="Карта с группой флеш-списков">
    <b-list-group flush>
      <b-list-group-item href="#">Cras justo odio</b-list-group-item>
      <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <b-card-body>
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </b-card-body>
  </b-card>
</b-card-group>

<!-- b-list-group-card.vue -->
```

## Горизонтальные группы списка

Установите для параметра `horizontal` значение `true`, чтобы изменить расположение элементов группы списка с вертикального на горизонтальное во всех контрольных точках. В качестве альтернативы, установите `horizontal` на отзывчивую контрольную точку (`sm`, `md`, `lg` или `xl`), чтобы сделать группу списка горизонтальной, начиная с минимальной ширины этой контрольной точки. В настоящее время группы горизонтальных списков нельзя комбинировать с группами списков `flush`.

**Совет:** Хотите, чтобы элементы списка были одинаковой ширины в горизонтальном положении? Добавьте класс `flex-fill` к каждому элементу группы списка.

**Всегда горизонтально:**

```html
<div>
  <b-list-group horizontal>
    <b-list-group-item>Cras justo odio</b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
  </b-list-group>
</div>

<!-- b-list-group-horizontal.vue -->
```

**Горизонтально в контрольной точке `md` и выше:**

```html
<div>
  <b-list-group horizontal="md">
    <b-list-group-item>Cras justo odio</b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
  </b-list-group>
</div>

<!-- b-list-group-horizontal-md.vue -->
```

## Пользовательский контент

Добавьте практически любой HTML или компонент внутри, даже для групп связанных списков, таких как приведенный ниже, с помощью [классов-утилит flexbox](/docs/reference/utility-classes).

```html
<b-list-group>
  <b-list-group-item href="#" active class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Заголовок элемента группы списка</h5>
      <small>3 дня назад</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small>Donec id elit non mi porta.</small>
  </b-list-group-item>

  <b-list-group-item href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Заголовок элемента группы списка</h5>
      <small class="text-muted">3 дня назад</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small class="text-muted">Donec id elit non mi porta.</small>
  </b-list-group-item>

  <b-list-group-item href="#" disabled class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Отключенный элемент группы списка</h5>
      <small class="text-muted">3 дня назад</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small class="text-muted">Donec id elit non mi porta.</small>
  </b-list-group-item>
</b-list-group>

<!-- b-list-group-content.vue -->
```

<!-- Component reference added automatically from component package.json -->
