# Теги формы

> Легкий пользовательский элемент управления формой ввода с тегами, с параметрами для настраиваемого рендеринга интерфейса, обнаружения повторяющихся тегов и дополнительной проверки тегов.

Теги - это массивы коротких строк, которые используются различными способами, например, для присвоения категорий. Используйте пользовательский интерфейс по умолчанию или создайте свой собственный пользовательский интерфейс с помощью слота с заданной областью действия по умолчанию.

## Базовое использование

В тегах будут удалены все начальные и конечные пробелы, а дублирование тегов не допускается.
Теги, содержащие пробелы, разрешены по умолчанию.

Теги добавляются путем нажатия кнопки **Добавить**, нажатия клавиши <kbd>Enter</kbd> или, необязательно, когда событие `change` запускается на входе нового тега (т.е. когда фокус перемещается с ввода). Кнопка **Добавить** появится только тогда, когда пользователь ввел новое значение тега.

**Рендеринг по умолчанию:**

```html
<template>
  <div>
    <label for="tags-basic">Введите новый тег и нажмите ввод</label>
    <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ['apple', 'orange']
      }
    }
  }
</script>

<!-- form-tags-example.vue -->
```

Вы можете отключить добавление нового тега при нажатии <kbd>Enter</kbd> через свойство `no-add-on-enter` и включить добавление тега в событие ввода `change` через `add-on-change`.

## Создание тегов с использованием разделителей

Для автоматического создания тегов при вводе символа-разделителя (например, <kbd>Space</kbd>, <kbd>,</kbd>, и т. д.) Установите свойство `separator` на символ, который будет запускать тег добавлен. Если необходимо несколько символов-разделителей, включите их как одну строку (например, `' ,;'`) или массив символов (например, `[' ', ',', ';']`), что вызовет новый тег, который будет добавлен при вводе <kbd>Space</kbd>, <kbd>,</kbd> _или_ <kbd>;</kbd>. Разделители должны состоять из одного символа.

В следующем примере тег автоматически создается при вводе <kbd>Space</KBD>, <kbd>,</kbd> или <kbd>;</kbd>:

```html
<template>
  <div>
    <label for="tags-separators">Введите теги через пробел, запятую или точку с запятой</label>
    <b-form-tags
      input-id="tags-separators"
      v-model="value"
      separator=" ,;"
      placeholder="Введите новые теги через пробел, запятую или точку с запятой"
      no-add-on-enter
    ></b-form-tags>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ['one', 'two']
      }
    }
  }
</script>

<!-- form-tags-separator.vue -->
```

## Удаление последнего тега нажатием клавиши Backspace

Когда свойство `remove-on-delete` установлено, и пользователь нажимает <kbd>Backspace</kbd> (или <kbd>Del</kbd>) _и_ входное значение пусто, последний тег в списке тегов будет удален.

```html
<template>
  <div>
    <label for="tags-remove-on-delete">Введите новые теги через пробел</label>
    <b-form-tags
      input-id="tags-remove-on-delete"
      :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
      v-model="value"
      separator=" "
      placeholder="Введите новые теги через пробел"
      remove-on-delete
      no-add-on-enter
    ></b-form-tags>
    <b-form-text id="tags-remove-on-delete-help" class="mt-2">
      Нажмите <kbd>Backspace</kbd>, чтобы удалить последний введенный тег
    </b-form-text>
    <p>Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ['apple', 'orange', 'grape']
      }
    }
  }
</script>

<!-- form-tags-remove-on-delete.vue -->
```

## Стилизация опций

Для изменения основного стиля интерфейса с тегами по умолчанию доступны несколько свойств:

| Свойство          | Описание                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `tag-pills`   | Отображает метки в виде таблеток                                                         |
| `tag-variant` | Применяет один из цветов темы контекстного варианта Bootstrap к тегам                              |
| `size`        | Установите размер внешнего вида компонента. 'sm', 'md' (по умолчанию) или 'lg'                             |
| `placeholder` | Текст-заполнитель для нового элемента ввода тега                                                    |
| `state`       | Устанавливает контекстное состояние элемента управления. Установите значение `true` (для действительного), `false` (для недопустимого) или `null` |
| `disabled`    | Переводит компонент в отключенное состояние                                                              |

Дополнительные сведения см. В разделе справки по компонентам внизу этой страницы.

Стиль фокуса и состояния проверки компонента основан на настраиваемом CSS BootstrapVue.

```html
<template>
  <div>
    <label for="tags-pills">Введите теги</label>
    <b-form-tags
      input-id="tags-pills"
      v-model="value"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Введите новые теги через пробел"
    ></b-form-tags>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ['apple', 'orange', 'grape']
      }
    }
  }
</script>

<!-- form-tags-style-options.vue -->
```

## Использование с нативной отправкой браузера `<form>`

Значение помеченного ввода не будет отправлено через стандартную форму `action`, если вы не укажете имя через свойство `name`. Если указано имя, `<b-form-tags>` создает скрытый `<input>` для каждого тега. Скрытый ввод будет иметь атрибут `name`, установленный на значение свойства `name`.

Скрытые входные данные также будут сгенерированы при использовании [пользовательского рендеринга](#custom-rendering-with-default-scoped-slot) (когда задано свойство `name`).

## Валидация тега

По умолчанию, `<b-form-tags>` определяет, когда пользователь пытается ввести (с учетом регистра) повторяющийся тег, и предоставляет пользователю интегрированную обратную связь.

При желании вы можете предоставить метод проверки тегов через свойство `tag-validator`. Функция валидатора получит один аргумент, который является добавляемым тегом, и должна возвращать либо `true`, если тег проходит проверку и может быть добавлен, либо `false`, если тег не прошел проверку (в этом случае он не добавляется в массив тегов). Интегрированная обратная связь будет предоставлена пользователю с указанием недействительных тегов, которые не удалось добавить.

Проверка тега происходит только для тегов, добавленных с помощью пользовательского ввода. Изменения тегов через `v-model` не проверяются.

```html
<template>
  <div>
    <b-form-group label="Пример проверки тегов" label-for="tags-validation" :state="state">
      <b-form-tags
        input-id="tags-validation"
        v-model="tags"
        :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
        :tag-validator="tagValidator"
        :state="state"
        separator=" "
      ></b-form-tags>

      <template #invalid-feedback>
        Вы должны предоставить не менее 3 тегов и не более 8
      </template>

      <template #description>
        <div id="tags-validation-help">
         Теги должны содержать от 3 до 5 символов в нижнем регистре. Введите теги через пробел или нажмите клавишу ВВОД.
        </div>
      </template>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [],
        dirty: false
      }
    },
    computed: {
      state() {
        // Общее состояние проверки компонентов
        return this.dirty ? (this.tags.length > 2 && this.tags.length < 9) : null
      }
    },
    watch: {
      tags(newValue, oldValue) {
        // Установить грязный флаг при первом изменении массива тегов
        this.dirty = true
      }
    },
    methods: {
      tagValidator(tag) {
        // Функция проверки индивидуальных тегов
        return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
      }
    }
  }
</script>

<!-- b-form-tags-validation-feedback.vue -->
```

### Обнаружение новых, недействительных и повторяющихся тегов

Событие `tag-state` будет генерироваться всякий раз, когда новые теги вводятся в новый элемент ввода тега, теги, не прошедшие проверку, или обнаруживаются повторяющиеся теги. Обработчик событий получит в качестве аргументов три массива:

- `validTags` (теги, которые проходят проверку)
- `invalidTags` (теги, не прошедшие валидацию)
- `duplicateTags` (теги, которые будут дублировать существующие или допустимые теги).

Событие будет сгенерировано только при изменении ввода нового тега (вводятся символы, которые будут считаться частью тега), или когда пользователь попытается добавить тег (например, с помощью <kbd>Enter</kbd>, кликнув по кнопке **Add** или ввести разделитель). Три массива будут пустыми, когда пользователь очистит новый элемент ввода тега (или будет содержать только пробелы).

Если вы предоставляете свой собственный отзыв о повторяющихся и недействительных тегах (с помощью события `tag-state`) за пределами компонента `<b-form-tags>`, вы можете отключить встроенные повторяющиеся и недопустимые сообщения с помощью установка `duplicate-tag-text` и `invalid-tag-text` (соответственно) либо на пустую строку (`''`) или `null`.

```html
<template>
  <div>
    <label for="tags-state-event">Введите теги</label>
    <b-form-tags
      input-id="tags-state-event"
      v-model="tags"
      :tag-validator="validator"
      placeholder="Enter tags (3-5 characters) separated by space"
      separator=" "
      @tag-state="onTagState"
    ></b-form-tags>
    <p class="mt-2">Теги: {{ tags }}</p>
    <p>Значения событий:</p>
    <ul>
        <li>validTags: {{ validTags }}</li>
        <li>invalidTags: {{ invalidTags }}</li>
        <li>duplicateTags: {{ duplicateTags }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [],
        validTags: [],
        invalidTags: [],
        duplicateTags: []
      }
    },
    methods: {
      onTagState(valid, invalid, duplicate) {
        this.validTags = valid
        this.invalidTags = invalid
        this.duplicateTags = duplicate
      },
      validator(tag) {
        return tag.length > 2 && tag.length < 6
      }
    }
  }
</script>

<!-- b-form-tags-tags-state-event.vue -->
```

## Ограничение тегов

Если вы хотите ограничить количество тегов, которые пользователь может добавить, используйте опцию `limit`. Когда настроено, добавление большего количества тегов, чем позволяет `limit`, возможно только с помощью `v-model`.

Когда лимит тегов достигнут, пользователь по-прежнему может печатать, но добавление дополнительных тегов отключено.
Отображается сообщение с обратной связью пользователя о достигнутом пределе. Это сообщение можно настроить с помощью свойства `limit-tags-text`. Установка либо пустой строки (`''`) или `null` отключит обратную связь.

Свойство `limit` не влияет на удаление тегов.

```html
<template>
  <div>
    <label for="tags-limit">Введите теги</label>
    <b-form-tags input-id="tags-limit" v-model="value" :limit="limit" remove-on-delete></b-form-tags>
    <p class="mt-2">Значение: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        limit: 5
      }
    }
  }
</script>

<!-- b-form-tags-limit.vue -->
```

## Пользовательский рендеринг со слотом по умолчанию

Если вам нравится другой внешний вид элемента управления тегами, вы можете предоставить свой собственный рендеринг через слот с заданной по умолчанию областью. Вы можете создать свои собственные теги или использовать наш вспомогательный компонент `<b-form-tag>`.

### Свойства области

Слот с заданной областью действия по умолчанию предоставляет множество свойств и методов для использования при рендеринге вашего пользовательского интерфейса. Не все свойства или методы требуются для создания вашего интерфейса.

Свойства области действия слота по умолчанию следующие:

| Свойство           | Тип                     | Описание                                                                                                                                            |
| ------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `addButtonText`    | String                   | Значение свойства `add-button-text`                                                                                                                |
| `addButtonVariant` | String                   | Значение свойства `add-button-variant`                                                                                                             |
| `addTag`           | Function                 | Метод добавления нового тега. Предполагает, что тег является значением ввода, но дополнительно принимает один аргумент, который является значением тега, которое нужно добавить             |
| `disableAddButton` | Boolean                  | Будет `true`, если тег(и) во входных данных не может быть добавлен (все недействительные и/или дублированные)                                                              |
| `disabled`         | Boolean                  | `true`, если компонент находится в отключенном состоянии. Значение свойства `disabled`                                                                         |
| `duplicateTagText` | String                   | Значение свойства `duplicate-tag-text`                                                                                                             |
| `duplicateTags`    | Array                    | Массив повторяющихся тегов, введенных пользователем                                                                                                     |
| `form`             | String                   | <span class="badge badge-secondary">v2.20.0+</span> Значение свойства `form`                                                                       |
| `inputAttrs`       | Object                   | Объект атрибутов, применяемых к новому элементу ввода тега через `v-bind="inputAttrs"`. Смотрите ниже для деталей                                            |
| `inputHandlers`    | Object                   | Объект обработчиков событий для применения к новому элементу ввода тега через`v-on="inputHandlers"`. Смотрите ниже для деталей                                       |
| `inputId`          | String                   | ID для добавления к новому элементу ввода тега. По умолчанию используется параметр `input-id`. Если не указан, автоматически создается уникальный идентификатор. Также доступно через 'inputAttrs.id' |
| `inputType`        | String                   | <span class="badge badge-secondary">v2.3.0+</span> Тип ввода для рендеринга (нормализованная версия свойства `input-type`)                                   |
| `invalidTagText`   | String                   | Значение свойства `invalid-tag-text`                                                                                                               |
| `invalidTags`      | Array                    | Массив недействительных тегов, введенных пользователем                                                                                                       |
| `isDuplicate`      | Boolean                  | `true`, если пользовательский ввод содержит повторяющиеся теги                                                                                                     |
| `isInvalid`        | Boolean                  | `true`, если пользовательский ввод содержит недопустимые теги                                                                                                       |
| `isLimitReached`   | Boolean                  | <span class="badge badge-secondary">v2.17.0+</span> `true`, если `limit` настроен и количество тегов достигло лимита                     |
| `limitTagsText`    | String                   | <span class="badge badge-secondary">v2.17.0+</span> Значение свойства `limit-tags-text`                                                            |
| `limit`            | String                   | <span class="badge badge-secondary">v2.17.0+</span> Значение свойства `limit`                                                                      |
| `noTagRemove`      | Boolean                  | <span class="badge badge-secondary">v2.21.0+</span> Значение свойства `no-tag-remove`                                                              |
| `placeholder`      | String                   | Значение свойства `placeholder`                                                                                                                    |
| `removeTag`        | Function                 | Способ удаления тега. Принимает один аргумент, который является значением тега для удаления                                                                          |
| `required`         | Boolean                  | <span class="badge badge-secondary">v2.20.0+</span> Значение свойства `required`                                                                   |
| `separator`        | String                   | Значение свойства `separator`                                                                                                                      |
| `size`             | String                   | Значение свойства `size`                                                                                                                           |
| `state`            | Boolean                  | Контекстное состояние компонента. Значение свойства `state`. Возможные значения: `true`, `false` или `null`                                        |
| `tagClass`         | String, Array, or Object | Значение свойства `tag-variant`. Класс (или классы) для применения к тегу                                                                   |
| `tagPills`         | Boolean                  | Значение свойства `tag-pills`                                                                                                                      |
| `tagRemoveLabel`   | String                   | Значение свойства `tag-remove-label`. Используется как атрибут `aria-label` на кнопке удаления тегов                                                  |
| `tagVariant`       | String                   | Значение свойства `tag-variant`                                                                                                                    |
| `tags`             | Array                    | Массив текущих строк тегов                                                                                                                           |

#### Свойства объекта `inputAttrs`

Объект `inputAttrs` содержит атрибуты для привязки (`v-bind`) к новому элементу ввода тега.

| Свойство   | Тип     | Описание                                                                  |
| ---------- | ------- | ---------------------------------------------------------------------------- |
| `disabled` | Boolean | Атрибут `disabled` для ввода нового тега. Значение свойства `disabled` |
| `form`     | String  | Атрибут `form` для ввода нового тега. Значение свойства `form`         |
| `id`       | String  | Атрибут `id` для ввода нового тега                                     |
| `value`    | String  | Атрибут `value` для ввода нового тега                                  |

Объект `inputAttrs` также будет включать любые атрибуты, установленные через свойство `input-attrs`. Обратите внимание, что указанные выше атрибуты имеют приоритет над любыми из тех же атрибутов, указанных в свойстве `input-attrs`
prop.

#### Свойства объекта `inputHandlers`

Объект `inputHandlers` содержит обработчики событий для привязки (`v-on`) к новому элементу ввода тега.

| Свойство  | Тип      | Описание                                                                                                                                                                    |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `change`  | Function | Обработчик события элемента ввода `change`. Принимает один аргумент объекта события или строки. Изменение вызовет добавление тега.                       |
| `input`   | Function | Обработчик события элемента ввода `input`. Принимает один аргумент объекта события или строки. Обновляет внутреннюю v-model для нового элемента ввода тега |
| `keydown` | Function | Обработчик события элемента ввода `keydown` <kbd>Enter</kbd> и <kbd>Del</kbd>. Принимает единственный аргумент, который является собственным объектом события keydown                   |

При необходимости обработчик `change` должен быть включен через свойство `add-on-change`, в противном случае это метод noop.

### Использование собственных входов браузера

Область содержит атрибуты и обработчики событий, которые могут быть напрямую привязаны к собственным элементам `<input>` или `<select>`.

В следующем примере представлены предлагаемые атрибуты и роли ARIA, необходимые для поддержки программы чтения с экрана.

```html
<template>
  <div>
    <b-form-tags v-model="value" no-outer-focus class="mb-2">
      <template v-slot="{ tags, inputAttrs, inputHandlers, addTag, removeTag }">
        <b-input-group aria-controls="my-custom-tags-list">
          <input
            v-bind="inputAttrs"
            v-on="inputHandlers"
            placeholder="Новый тег - нажмите клавишу ВВОД, чтобы добавить"
            class="form-control">
          <b-input-group-append>
            <b-button @click="addTag()" variant="primary">Добавить</b-button>
          </b-input-group-append>
        </b-input-group>
        <ul
          id="my-custom-tags-list"
          class="list-unstyled d-inline-flex flex-wrap mb-0"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions removals"
        >
          <!-- Всегда используйте значение тега в качестве ключа:, а не индекса! -->
          <!-- В противном случае программы чтения с экрана не будут правильно читать добавления и удаления тегов -->
          <b-card
            v-for="tag in tags"
            :key="tag"
            :id="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
            tag="li"
            class="mt-1 mr-1"
            body-class="py-1 pr-2 text-nowrap"
          >
            <strong>{{ tag }}</strong>
            <b-button
              @click="removeTag(tag)"
              variant="link"
              size="sm"
              :aria-controls="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
            >remove</b-button>
          </b-card>
        </ul>
      </template>
    </b-form-tags>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ['apple', 'orange', 'banana', 'pear', 'peach']
      }
    }
  }
</script>

<!-- form-tags-custom-native.vue -->
```

### Использование компонентов пользовательской формы

Область содержит атрибуты и обработчики событий, которые могут быть напрямую привязаны к _ большинству_ настраиваемых входных данных или выбранным компонентам (обработчики событий принимают либо значение строкового тега _, либо_ собственный объект события). Любой компонент, который испускает `input` при вводе символов и (необязательно) испускает `change` при изменении входного значения (например, при размытии или выборе) и использует свойство `value` в качестве v-model, должен работать без изменений.

В этом примере мы используем вспомогательный компонент [`<b-form-tag>` helper component](#b-form-tag-helper-component), но не стесняйтесь отображать теги, используя стандартный HTML или компоненты.

```html
<template>
  <div>
    <b-form-tags v-model="value" no-outer-focus class="mb-2">
      <template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }">
        <b-input-group class="mb-2">
          <b-form-input
            v-bind="inputAttrs"
            v-on="inputHandlers"
            placeholder="Новый тег - нажмите клавишу ВВОД, чтобы добавить"
            class="form-control"
          ></b-form-input>
          <b-input-group-append>
            <b-button @click="addTag()" variant="primary">Добавить</b-button>
          </b-input-group-append>
        </b-input-group>
        <div class="d-inline-block" style="font-size: 1.5rem;">
          <b-form-tag
            v-for="tag in tags"
            @remove="removeTag(tag)"
            :key="tag"
            :title="tag"
            :variant="tagVariant"
            class="mr-1"
          >{{ tag }}</b-form-tag>
        </div>
      </template>
    </b-form-tags>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ['apple', 'orange', 'banana']
      }
    }
  }
</script>

<!-- form-tags-custom-components-input.vue -->
```

Ниже приведен пример использования настраиваемого компонента выбора для выбора из предопределенного набора тегов:

```html
<template>
  <div>
    <b-form-group label="Tagged input using select" label-for="tags-component-select">
      <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
      <b-form-tags
        id="tags-component-select"
        v-model="value"
        size="lg"
        class="mb-2"
        add-on-change
        no-outer-focus
      >
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
          <b-form-select
            v-bind="inputAttrs"
            v-on="inputHandlers"
            :disabled="disabled || availableOptions.length === 0"
            :options="availableOptions"
          >
            <template #first>
              <!-- This is required to prevent bugs with Safari -->
              <option disabled value="">Выберите тег...</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
        value: []
      }
    },
    computed: {
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      }
    }
  }
</script>

<!-- b-form-tags-components-select.vue -->
```

Если пользовательский ввод использует пользовательские имена событий, имитирующие `input` и `change`, и/или требует модификатора `.native` для нажатия клавиши, вы можете сделать что-то похожее на приведенное ниже, чтобы связать обработчики событий:

```html
<template #default="{ inputAttrs, inputHandlers, removeTag, tags }">
  <custom-input
    :id="inputAttrs.id"
    :vistom-value-prop="inputAttrs.value"
    @custom-input-event="inputHandlers.input($event)"
    @custom-change-event="inputHandlers.change($event)"
    @keydown.native="inputHandlers.keydown($event)"
  ></custom-input>
  <template v-for="tag in tags">
    <!-- Ваш список пользовательских тегов здесь -->
  </template>
</template>
```

Обработчик `inputHandlers.input` **должен** быть привязан к событию, которое обновляется с каждым введенным пользователем символом, чтобы проверка тега _пока-вы-набираете_ работала.

### Расширенное использование пользовательского рендеринга

В ситуациях, когда `inputHandlers` не будет работать с вашим пользовательским вводом, или если вам нужно больше
контроля над созданием тегов, вы можете воспользоваться дополнительными свойствами, предоставляемыми через
область действия слота по умолчанию.

```html
<template>
  <div>
    <b-form-checkbox switch size="lg" v-model="disabled">Отключено</b-form-checkbox>
    <b-form-tags
      v-model="value"
      @input="resetInputValue()"
      tag-variant="success"
      class="mb-2 mt-2"
      :disabled="disabled"
      no-outer-focus
      placeholder="Enter a new tag value and click Add"
      :state="state"
    >
      <template v-slot="{tags, inputId, placeholder, disabled, addTag, removeTag }">
        <b-input-group>
          <!-- Всегда привязывайте идентификатор к вводу, чтобы его можно было сфокусировать при необходимости -->
          <b-form-input
            v-model="newTag"
            :id="inputId"
            :placeholder="placeholder"
            :disabled="disabled"
            :formatter="formatter"
          ></b-form-input>
          <b-input-group-append>
            <b-button @click="addTag(newTag)" :disabled="disabled" variant="primary">Добавить</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-form-invalid-feedback :state="state">
          Duplicate tag value cannot be added again!
        </b-form-invalid-feedback>
        <ul v-if="tags.length > 0" class="mb-0">
          <li v-for="tag in tags" :key="tag" :title="`Tag: ${tag}`" class="mt-2">
            <span  class="d-flex align-items-center">
              <span class="mr-2">{{ tag }}</span>
              <b-button
                :disabled="disabled"
                size="sm"
                variant="outline-danger"
                @click="removeTag(tag)"
              >
                Удалить тег
              </b-button>
            </span>
          </li>
        </ul>
        <b-form-text v-else>
          Теги не указаны. Добавьте новый тег выше.
        </b-form-text>
      </template>
    </b-form-tags>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTag: '',
        disabled: false,
        value: []
      }
    },
    computed: {
      state() {
        // Return false (invalid) if new tag is a duplicate
        return this.value.indexOf(this.newTag.trim()) > -1 ? false : null
      }
    },
    methods: {
      resetInputValue() {
        this.newTag = ''
      },
      formatter(value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<!-- form-tags-custom-components-advanced.vue -->
```

Ниже приведен пример использования компонента `<b-dropdown>` для выбора или поиска из заранее определенного набора тегов:

```html
<template>
  <div>
    <b-form-group label="Ввод тегов с использованием раскрывающегося списка" label-for="tags-with-dropdown">
      <b-form-tags id="tags-with-dropdown" v-model="value" no-outer-focus class="mb-2">
        <template v-slot="{ tags, disabled, addTag, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>

          <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
            <template #button-content>
              <b-icon icon="tag-fill"></b-icon> Выбрать теги
            </template>
            <b-dropdown-form @submit.stop.prevent="() => {}">
              <b-form-group
                label="Search tags"
                label-for="tag-search-input"
                label-cols-md="auto"
                class="mb-0"
                label-size="sm"
                :description="searchDesc"
                :disabled="disabled"
              >
                <b-form-input
                  v-model="search"
                  id="tag-search-input"
                  type="search"
                  size="sm"
                  autocomplete="off"
                 ></b-form-input>
              </b-form-group>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button
              v-for="option in availableOptions"
              :key="option"
              @click="onOptionClick({ option, addTag })"
            >
              {{ option }}
            </b-dropdown-item-button>
            <b-dropdown-text v-if="availableOptions.length === 0">
              Нет тегов, доступных для выбора
            </b-dropdown-text>
          </b-dropdown>
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
        search: '',
        value: []
      }
    },
    computed: {
      criteria() {
        // Compute the search criteria
        return this.search.trim().toLowerCase()
      },
      availableOptions() {
        const criteria = this.criteria
        // Filter out already selected options
        const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
        if (criteria) {
          // Show only options that match criteria
          return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
        }
        // Show all options available
        return options
      },
      searchDesc() {
        if (this.criteria && this.availableOptions.length === 0) {
          return 'Нет тегов, соответствующих вашим критериям поиска'
        }
        return ''
      }
    },
    methods: {
      onOptionClick({ option, addTag }) {
        addTag(option)
        this.search = ''
      }
    }
  }
</script>

<!-- b-form-tags-dropdown-example.vue -->
```

### Создание компонентов оболочки

Вы можете легко создать настраиваемый компонент-оболочку с вашим предпочтительным стилем рендеринга следующим образом:

```html
<template>
  <b-form-tags :value="value" @input="$emit('input', $event)">
    <template v-slot="{ tags, addTag, removeTag, inputAttrs, inputHandlers }">
     <!-- Place your custom rendering here -->
    </template>
  </b-form-tags>
</template>

<script>
  import { BFormTags } from 'bootstrap-vue'

  export default {
    name: 'MyCustomTags',
    components: { BFormTags },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
```

## Вспомогательный компонент `<b-form-tag>`

BootstrapVue предоставляет вспомогательный компонент `<b-form-tag>`, для использования со слотом с заданной областью действия по умолчанию `<b-form-tags>`. Компонент основан на [`<b-badge>`](/docs/components/badge) и [`<b-button-close>`](/docs/components/button/#comp-ref-b-button-close).

`<b-form-tag>` поддерживает те же варианты, что и `<b-badge>`, а также поддерживает стили `pill`. Размер зависит от размера шрифта содержащего элемента.

Событие `remove` генерируется при нажатии кнопки удаления `<b-form-tag>`.

Теги, которые слишком велики для родительского контейнера, автоматически усекают текстовое содержимое с многоточием. По этой причине всегда рекомендуется указывать заголовок через свойство `title` при использовании слота по умолчанию `<b-form-tag>` для содержимого тега.

Обратите внимание, что для `<b-form-tag>` требуется собственный CSS/SCSS BootstrapVue для правильного оформления.

<!-- Component reference added automatically from component package.json -->
