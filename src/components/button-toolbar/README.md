# Панель инструментов кнопок

> Сгруппируйте серию групп кнопок и/или групп ввода в одну строку с дополнительной навигацией с помощью клавиатуры

**Пример 1:** с группами кнопок и навигацией по клавиатуре

```html
<div>
  <b-button-toolbar key-nav aria-label="Панель инструментов с группами кнопок и навигацией по клавиатуре">
    <b-button-group class="mx-1">
      <b-button>&laquo;</b-button>
      <b-button>&lsaquo;</b-button>
    </b-button-group>
    <b-button-group class="mx-1">
      <b-button>Редактировать</b-button>
      <b-button>Отменить</b-button>
      <b-button>Повторить</b-button>
    </b-button-group>
    <b-button-group class="mx-1">
      <b-button>&rsaquo;</b-button>
      <b-button>&raquo;</b-button>
    </b-button-group>
  </b-button-toolbar>
</div>

<!-- b-button-toolbar.vue -->
```

**Пример 2:** со смесью небольшой группы кнопок и небольшой группы ввода

```html
<div>
  <b-button-toolbar aria-label="Панель инструментов со смесью небольшой группы кнопок и небольшой группы ввода">
    <b-button-group size="sm" class="mr-1">
      <b-button>Сохранить</b-button>
      <b-button>Отменить</b-button>
    </b-button-group>
    <b-input-group size="sm" prepend="$" append=".00">
      <b-form-input value="100" class="text-right"></b-form-input>
    </b-input-group>
  </b-button-toolbar>
</div>

<!-- b-button-toolbar-input.vue -->
```

**Пример 3:** с группами кнопок и раскрывающимся меню

```html
<div>
  <b-button-toolbar aria-label="Панель инструментов с группами кнопок и раскрывающимся меню">
    <b-button-group class="mx-1">
      <b-button>Новый</b-button>
      <b-button>Редактировать</b-button>
      <b-button>Отменить</b-button>
    </b-button-group>
    <b-dropdown class="mx-1" right text="menu">
      <b-dropdown-item>Элемент 1</b-dropdown-item>
      <b-dropdown-item>Элемент 2</b-dropdown-item>
      <b-dropdown-item>Элемент 3</b-dropdown-item>
    </b-dropdown>
    <b-button-group class="mx-1">
      <b-button>Сохранить</b-button>
      <b-button>Отменить</b-button>
    </b-button-group>
  </b-button-toolbar>
</div>

<!-- b-button-toolbar-dropdown.vue -->
```

## Применение

Не стесняйтесь комбинировать группы ввода и раскрывающиеся списки с группами кнопок на панелях инструментов. Как и в приведенном выше примере, вам, вероятно, понадобятся некоторые классы утилиты, чтобы правильно расположить вещи.

## Размеры

Обратите внимание, если вам нужны кнопки или элементы управления меньшего или большего размера, установите свойство `size` непосредственно в компонентах `<b-button-group>`, `<b-input-group>` и `<b-dropdown>`.

## Обоснование

Сделайте панель инструментов с максимально доступной шириной, увеличив интервал между группами кнопок, группами ввода и раскрывающимися списками, установив свойство `justify`.

## Навигация с клавиатуры

Включите необязательную навигацию с клавиатуры, установив свойство `key-nav`.

| Нажатие клавиши                                                        | Действие                                              |
| ---------------------------------------------------------------------- | ----------------------------------------------------- |
| <kbd>Left</kbd> или <kbd>Up</kbd>                                      | Перейти к предыдущему неотключенному элементу на панели инструментов |
| <kbd>Right</kbd> или <kbd>Down</kbd>                                   | Перейти к следующему неотключенному элементу на панели инструментов     |
| <kbd>Shift</kbd>+<kbd>Left</kbd> или <kbd>Shift</kbd>+<kbd>Up</kbd>    | Перейти к первому неотключенному элементу на панели инструментов    |
| <kbd>Shift</kbd>+<kbd>Right</kbd> или <kbd>Shift</kbd>+<kbd>Down</kbd> | Перейти к последнему неотключенному элементу на панели инструментов     |
| <kbd>Tab</kbd>                                                         | Перейти к следующему элементу управления на странице                  |
| <kbd>Shift</kbd>+<kbd>Tab</kbd>                                        | Перейти к предыдущему элементу управления на странице              |

**Осторожно:** Если у вас есть текст или текстовые поля ввода на панели инструментов, оставьте навигацию с клавиатуры отключенной, так как невозможно использовать нажатия клавиш для выхода из текстовых (или тестовых) полей ввода.

## Смотрите также

- [`<b-button-group>`](/docs/components/button-group)
- [`<b-dropdown>`](/docs/components/dropdown)

<!-- Component reference added automatically from component package.json -->
