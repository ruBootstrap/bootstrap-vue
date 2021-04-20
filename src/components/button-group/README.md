# Группа кнопок

> Сгруппируйте несколько кнопок в одну строку с помощью `<b-button-group>`.

## Обзор

Группы кнопок - это простой способ сгруппировать серии кнопок вместе.

```html
<div>
  <div>
    <b-button-group>
      <b-button>Кнопка 1</b-button>
      <b-button>Кнопка 2</b-button>
      <b-button>Кнопка 3</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group>
      <b-button variant="success">Успешно</b-button>
      <b-button variant="info">Инфо</b-button>
      <b-button variant="warning">Внимание</b-button>
    </b-button-group>
  </div>
</div>

<!-- b-button-group.vue -->
```

## Размеры

Установите для свойства `size` значение `lg` или `sm`, чтобы отображать кнопки большего или меньшего размера соответственно. Нет необходимости указывать размер на отдельных кнопках.

```html
<div>
  <div>
    <b-button-group>
      <b-button>Кнопка 1</b-button>
      <b-button>Кнопка 2</b-button>
      <b-button>Кнопка 3</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group size="sm">
      <b-button>Лево</b-button>
      <b-button>Середина</b-button>
      <b-button>Право</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group size="lg">
      <b-button>Лево</b-button>
      <b-button>Середина</b-button>
      <b-button>Право</b-button>
    </b-button-group>
  </div>
</div>

<!-- b-button-group-sizes.vue -->
```

## Вертикальная вариация

Сделайте так, чтобы набор кнопок выглядел вертикально сложенными, а не горизонтально, установив свойство `vertical`. Выпадающие меню с разделенными кнопками здесь не поддерживаются.

```html
<div>
  <b-button-group vertical>
    <b-button>Верх</b-button>
    <b-button>Середина</b-button>
    <b-button>низ</b-button>
  </b-button-group>
</div>

<!-- b-button-group-vertical.vue -->
```

## Поддержка выпадающего меню

Добавьте [`<b-dropdown>`](/docs/components/dropdown) меню прямо внутри вашей `<b-button-group>`. Обратите внимание, что разделенные раскрывающиеся меню не поддерживаются, если задано свойство `vertical`.

```html
<div>
  <b-button-group>
    <b-button>Кнопка</b-button>
    <b-dropdown right text="Меню">
      <b-dropdown-item>Элемент 1</b-dropdown-item>
      <b-dropdown-item>Элемент 2</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Элемент 3</b-dropdown-item>
    </b-dropdown>
    <b-dropdown right split text="Раздельное меню">
      <b-dropdown-item>Элемент 1</b-dropdown-item>
      <b-dropdown-item>Элемент 2</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Элемент 3</b-dropdown-item>
    </b-dropdown>
  </b-button-group>
</div>

<!-- b-button-group-menu.vue -->
```

## Смотрите также

Также обратите внимание на компонент [`<b-button-toolbar>`](/docs/components/button-toolbar) для создания панелей инструментов, содержащих группы кнопок и группы ввода.

<!-- Component reference added automatically from component package.json -->
