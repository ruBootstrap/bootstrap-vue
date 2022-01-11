# Группа ввода

> Easily extend form controls by adding text, buttons, or button groups on either side of textual
> inputs.

```html
<div>
  <!-- Использование свойств -->
  <b-input-group size="lg" prepend="$" append=".00">
    <b-form-input></b-form-input>
  </b-input-group>

  <!-- Использование слотов -->
  <b-input-group class="mt-3">
    <template #append>
      <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
    </template>
    <b-form-input></b-form-input>
  </b-input-group>

  <!-- Использование компонентов -->
  <b-input-group prepend="Username" class="mt-3">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-success">Кнопка</b-button>
      <b-button variant="info">Кнопка</b-button>
    </b-input-group-append>
  </b-input-group>
</div>

<!-- b-input-group.vue -->
```

## Использование

Вы можете прикреплять надстройки, используя свойства, именованные слоты и/или субкомпоненты.

### Использование свойств `prepend` и `append`

Значения будут внутренне заключены в `<b-input-group-text>` для правильного отображения.

```html
<div>
  <b-input-group prepend="$" append=".00">
    <b-form-input></b-form-input>
  </b-input-group>

  <b-input-group prepend="0" append="100" class="mt-3">
    <b-form-input type="range" min="0" max="100"></b-form-input>
  </b-input-group>
</div>

<!-- b-input-group-using-props.vue -->
```

### Использование именованных слотов

Если вы хотите лучше контролировать надстройки, вы можете использовать вместо них слоты `prepend` и `append`.

Содержимое слота будет автоматически заключено в [`<b-input-group-prepend>` или `<b-input-group-append>`](#using-sub-components) для правильного отображения.

```html
<div>
  <b-input-group>
    <template #prepend>
      <b-input-group-text>Имя пользователя</b-input-group-text>
    </template>
    <b-form-input></b-form-input>

    <template #append>
      <b-dropdown text="Выпадающий список" variant="success">
        <b-dropdown-item>Действие A</b-dropdown-item>
        <b-dropdown-item>Действие B</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-input-group>
</div>

<!-- b-input-group-using-slots.vue -->
```

### Использование подкомпонентов

Используйте `<b-input-group-prepend>` или `<b-input-group-append>` для добавления произвольных надстроек, где хотите, и используйте эти компоненты для группировки кнопок в вашей группе ввода. Отдельные кнопки всегда должны быть обернуты этими компонентами для правильного стиля.

```html
<div>
  <b-input-group>
    <b-input-group-prepend>
      <b-button variant="outline-info">Кнопка</b-button>
    </b-input-group-prepend>

    <b-form-input type="number" min="0.00"></b-form-input>

    <b-input-group-append>
      <b-button variant="outline-secondary">Кнопка</b-button>
      <b-button variant="outline-primary">Кнопка</b-button>
      <b-input-group-text>
        <b-icon icon="x" />
      </b-input-group-text>
    </b-input-group-append>
  </b-input-group>
</div>

<!-- b-input-group-addons-placement.vue -->
```

Установите свойство `is-text` в `<b-input-group-prepend>` или `<b-input-group-append>`, если содержимое является текстовым по своей природе, чтобы применить правильный стиль. В качестве альтернативы поместите подкомпонент `<b-input-group-text>` внутри `<b-input-group-prepend>` или `<b-input-group-append>`. Это также применимо, когда вы хотите использовать один из [иконок BootstrapVue](/docs/icons).

## Поддерживаемые формы-элементы управления

Следующие элементы управления формами поддерживаются в качестве входного _главного_ элемента входной группы:

- [`<b-form-input>`](/docs/components/form-input)
- [`<b-form-textarea>`](/docs/components/form-textarea)
- [`<b-form-select>`](/docs/components/form-select)
- [`<b-form-file>`](/docs/components/form-file)
- [`<b-form-rating>`](/docs/components/form-rating)
- [`<b-form-tags>`](/docs/components/form-tags)
- [`<b-form-spinbutton>`](/docs/components/form-spinbutton)
- [`<b-form-datepicker>`](/docs/components/form-datepicker)
- [`<b-form-timepicker>`](/docs/components/form-timepicker)

**Примечания:**

- BootstrapVue использует пользовательский SCSS/CSS для обработки размера ввода `<b-form-file>`, когда он помещается в `<b-input-group>`, который имеет [`size`](#control-sizing).
- BootstrapVue использует пользовательский SCSS/CSS, когда `<b-form-input type="range">` помещается в `<b-input-group>`.
- Пользовательские компоненты BootstrapVue (например, `<b-form-spinbutton>`, `<b-form-rating>`, `<b-form-tags>` и т. д.) Требуют настраиваемого SCSS/CSS BootstrapVue.

## Аддоны флажок и радио

Поместите любой флажок или переключатель в надстройку группы ввода вместо текста.

**Примечание:** Bootstrap v4.x рекомендует использовать встроенные радиомодули и входы флажков вместо настраиваемых радиомодулей и флажков, но можно использовать как `<b-form-radio>` и `<b-form-checkbox>` с применено несколько служебных классов.

### Нативные аддоны флажок и радио

```html
<div>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <input type="checkbox" aria-label="Флажок для следующего ввода текста">
    </b-input-group-prepend>
    <b-form-input aria-label="Ввод текста с флажком"></b-form-input>
  </b-input-group>

  <b-input-group>
    <b-input-group-prepend is-text>
      <input type="radio" aria-label="Радио для последующего ввода текста">
    </b-input-group-prepend>
    <b-form-input aria-label="Ввод текста с радио-вводом"></b-form-input>
  </b-input-group>
</div>

<!-- b-input-group-checks-radios.vue -->
```

### Пользовательские аддоны радио, флажки и переключатели

Использование компонентов `<b-form-checkbox>` и `<b-form-radio>` в качестве надстроек, использование Bootstrap [служебных классов](/docs/reference/utility-classes) для дополнительной стилизации, чтобы они "соответствовали" в аддоне:

```html
<div>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-checkbox class="mr-n2">
        <span class="sr-only">Флажок для следующего ввода текста</span>
      </b-form-checkbox>
    </b-input-group-prepend>
    <b-form-input aria-label="Ввод текста с флажком"></b-form-input>
  </b-input-group>

  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-radio class="mr-n2">
        <span class="sr-only">Радио для последующего ввода текста</span>
      </b-form-radio>
    </b-input-group-prepend>
    <b-form-input aria-label="Ввод текста с радио-вводом"></b-form-input>
  </b-input-group>

  <b-input-group>
    <b-input-group-prepend is-text>
      <b-form-checkbox switch class="mr-n2">
        <span class="sr-only">Переключиться на следующий ввод текста</span>
      </b-form-checkbox>
    </b-input-group-prepend>
    <b-form-input aria-label="Ввод текста с переключателем"></b-form-input>
  </b-input-group>
</div>

<!-- b-input-group-custom-checks-radios.vue -->
```

В приведенном выше примере мы использовали класс `.sr-only` в `<span>`, чтобы визуально скрыть содержимое метки настраиваемого элемента управления (при этом сделав его доступным для пользователей программ чтения с экрана), и использовали служебный класс `.mr-n2`, чтобы добавить отрицательное правое поле, чтобы компенсировать "промежуток" между элементом управления и скрытой меткой.

## Мультивводы

```html
<div>
  <b-input-group prepend="Имя и фамилия" class="mb-2">
    <b-form-input aria-label="Имя"></b-form-input>
    <b-form-input aria-label="Фамилия"></b-form-input>
  </b-input-group>
</div>

<!-- input-group-multiple-inputs.vue -->
```

## Множественные дополнения

Поддерживаются несколько надстроек, которые можно комбинировать с версиями флажков и радиовходов.

```html
<div>
  <b-input-group prepend="Item">
    <b-input-group-prepend is-text>
      <input type="checkbox" aria-label="Флажок для следующего ввода текста">
    </b-input-group-prepend>
    <b-input-group-prepend is-text><b>$</b></b-input-group-prepend>
    <b-form-input type="number" aria-label="Ввод текста с флажком"></b-form-input>
  </b-input-group>
</div>

<!-- b-input-group-multiple-addons.vue -->
```

## Выпадающие дополнения

```html
<div>
  <b-input-group>
    <template #prepend>
      <b-dropdown text="Выпадающий список" variant="info">
        <b-dropdown-item>Действие A</b-dropdown-item>
        <b-dropdown-item>Действие B</b-dropdown-item>
      </b-dropdown>
    </template>

    <b-form-input></b-form-input>

    <template #append>
      <b-dropdown text="Выпадающий список" variant="outline-secondary" v-for="i in 2" :key="i">
        <b-dropdown-item>Действие C</b-dropdown-item>
        <b-dropdown-item>Действие D</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-input-group>
</div>

<!-- b-input-group-dropdown.vue -->
```

## Размеры элементов

Установите высоту, используя свойство `size`, на `sm` или `lg` для маленьких или больших соответственно. Нет необходимости устанавливать размер отдельных входов или кнопок. Обратите внимание, однако, что вам _обязательно_ также установить размер в раскрывающихся списках.

```html
<div>
  <b-input-group
    v-for="size in ['sm','','lg']"
    :key="size"
    :size="size"
    class="mb-3"
    prepend="Метка"
  >
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button size="sm" text="Кнопка" variant="success">Кнопка</b-button>
    </b-input-group-append>
  </b-input-group>
</div>

<!-- b-input-group-size.vue -->
```

Чтобы контролировать ширину, поместите ввод внутри стандартного столбца сетки Bootstrap.

### Настройка настраиваемого радио, флажка и переключателей аддонов

При использовании `<b-form-radio>` или `<b-form-checkbox>` в качестве дополнений могут потребоваться дополнительные служебные классы, чтобы все подходило правильно, в зависимости от выбранного размера:

```html
<div>
  <b-input-group size="sm" prepend="Small" class="mb-2">
    <b-form-input aria-label="Ввод небольшого текста с настраиваемым переключателем"></b-form-input>
    <b-input-group-append is-text>
      <b-form-checkbox switch class="mr-n2 mb-n1">
        <span class="sr-only">Флажок для предыдущего ввода текста</span>
      </b-form-checkbox>
    </b-input-group-append>
  </b-input-group>

  <b-input-group size="lg" prepend="Large" class="mb-2">
    <b-form-input aria-label="Большой ввод текста с переключателем"></b-form-input>
    <b-input-group-append is-text>
      <b-form-checkbox switch class="mr-n2">
        <span class="sr-only">Переключатель к предыдущему вводу текста</span>
      </b-form-checkbox>
    </b-input-group-append>
  </b-input-group>
</div>

<!-- b-input-group-custom-checks-radios-sizing.vue -->
```

В частности, при использовании размера `sm` в `<b-input-group>` вам нужно будет добавить отрицательное нижнее поле, используя `.mb-n1` [класс утилит](/docs/reference/utility-classes).

## Контекстные состояния

Bootstrap v4 в настоящее время **не** поддерживает контекстную стилизацию состояния (т.е. допустимую или недопустимую) групп ввода. Однако входы внутри группы ввода действительно поддерживают контекстное состояние.

<!-- Component reference added automatically from component package.json -->
