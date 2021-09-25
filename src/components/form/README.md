# Форма

> Компонент формы BootstrapVue и вспомогательные компоненты, которые дополнительно поддерживают встроенные стили формы и состояния проверки. Объедините их с другими компонентами элементов управления формами BootstrapVue, чтобы получить простой настраиваемый и отзывчивый макет с единообразным внешним видом.

## Введение в формы и элементы управления

Обязательно используйте соответствующий `type` для всех входных данных (например, `email` для адреса электронной почты или `number` для числовой информации), чтобы воспользоваться преимуществами новых элементов управления вводом, таких как проверка электронной почты, выбор номера и т. д.

Вот быстрый пример, демонстрирующий стили формы BootstrapVue. Продолжайте читать, чтобы узнать о поддерживаемых компонентах, макете формы и многом другом.

```html
<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Проверить меня</b-form-checkbox>
          <b-form-checkbox value="that">Проверь это</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Отправить</b-button>
      <b-button type="reset" variant="danger">Сбросить</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Сбросить значения нашей формы
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Уловка для сброса/очистки состояния проверки формы в собственном браузере
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<!-- b-form.vue -->
```

## Инлайновая форма

Используйте свойство `inline` в `<b-form>`, чтобы отобразить серию меток, элементов управления формы и кнопок в одной горизонтальной строке. Элементы управления формами внутри встроенных форм незначительно отличаются от состояний по умолчанию.

- Элементы управления - это `display: flex`, сворачивающие любое пустое пространство HTML и позволяющие вам обеспечить контроль выравнивания с помощью утилит spacing и flexbox.
- Элементы управления и группы ввода получают `width: auto`, чтобы переопределить ширину Bootstrap по умолчанию: 100%.
- Элементы управления **отображаются встроенными только в окнах просмотра шириной не менее 576 пикселей**, чтобы учесть узкие окна просмотра на мобильных устройствах.

Возможно, вам придется вручную задать ширину и выравнивание отдельных элементов управления формой с помощью [утилит интервалов](/docs/reference/spacing-classes) (как показано ниже). Наконец, не забудьте всегда включать `<label>` в каждый элемент управления формы, даже если вам нужно скрыть его от посетителей, не читающих с экрана, с помощью класса `.sr-only`.

```html
<div>
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Имя</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-username">Пользователь</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="Пользователь"></b-form-input>
    </b-input-group>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Запомнить меня</b-form-checkbox>

    <b-button variant="primary">Сохранить</b-button>
  </b-form>
</div>

<!-- b-form-inline.vue -->
```

Также поддерживаются настраиваемые элементы управления и выбор формы.

```html
<div>
  <b-form inline>
    <label class="mr-sm-2" for="inline-form-custom-select-pref">Предпочтение</label>
    <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Выберите...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Запомнить мои предпочтения</b-form-checkbox>

    <b-button variant="primary">Сохранить</b-button>
  </b-form>
</div>

<!-- b-form-inline-custom.vue -->
```

**Примечание:** _`<b-form-group>` не поддерживается в `inline` формах из-за конфликтов макета._

### Альтернативы скрытым ярлыкам

Вспомогательные технологии, такие как программы чтения с экрана, будут иметь проблемы с вашими формами, если вы не добавите метку для каждого ввода. Для этих встроенных форм вы можете скрыть метки с помощью класса `.sr-only`.
Существуют и другие альтернативные методы предоставления метки для вспомогательных технологий, такие как атрибуты `aria-label`, `aria-labelledby` или `title`. Если ни один из них не присутствует, вспомогательные технологии могут прибегать к использованию атрибута `placeholder`, если он присутствует, но учтите, что использование `placeholder` в качестве замены для других методов маркировки не рекомендуется.

## Связанные элементы управления формой и компоненты макета

Смотрите также:

- [`<b-form-input>`](/docs/components/form-input) Текстовые и текстовые поля ввода
- [`<b-form-textarea>`](/docs/components/form-textarea) Многострочные текстовые поля ввода
- [`<b-form-select>`](/docs/components/form-select) Элемент выбора
- [`<b-form-radio>`](/docs/components/form-radio) Радио кнопки
- [`<b-form-checkbox>`](/docs/components/form-checkbox) Флажки
- [`<b-form-file>`](/docs/components/form-file) Выбор файла
- [`<b-form-datepicker>`](/docs/components/form-datepicker) Выбор даты
- [`<b-form-spinbutton>`](/docs/components/form-spinbutton) Ввод с помощью спиновой кнопки числового диапазона
- [`<b-form-tags>`](/docs/components/form-tags) Настраиваемый ввод тегов
- [`<b-form-timepicker>`](/docs/components/form-timepicker) Ввод настраиваемой формы для выбора времени
- [`<b-form-rating>`](/docs/components/form-rating) Ввод и отображение пользовательской формы звездного рейтинга
- [`<b-button>`](/docs/components/button) Кнопки
- [`<b-form-group>`](/docs/components/form-group) Оболочка ввода формы для создания групп форм, поддерживающих метки, текст справки и отзывы
- [`<b-input-group>`](/docs/components/input-group) Ввод формы с надстройками
- [`<b-form-row>`](/docs/components/layout) Создавайте строки и столбцы сетки с более узкими полями (доступно через [Компоненты макета и сетки](/docs/components/layout))

## Компоненты помощника формы

Следующие вспомогательные компоненты доступны с плагином `Form`:

- `<b-form-text>` Блоки текста справки для входов
- `<b-form-invalid-feedback>` Недействительные текстовые блоки обратной связи для входных `invalid` состояний
- `<b-form-valid-feedback>` Действительные текстовые блоки обратной связи для входных состояний `valid`
- `<b-form-datalist>` Простое создание `<datalist>` для использования с `<b-form-input>` или обычным `<input>`

### Помощник по тексту формы

Отобразите блок текста справки под полем ввода с помощью вспомогательного компонента `<b-form-text>`. Текст отображается с приглушенным цветом и немного меньшим размером шрифта.

**Совет:** Текст справки должен быть явно связан с элементом управления формы, к которому он относится, с помощью атрибута `aria-describedby`. Это гарантирует, что вспомогательные технологии, такие как программы чтения с экрана, будут озвучивать этот текст справки, когда пользователь фокусируется или входит в элемент управления.

```html
<div>
  <b-form @submit.stop.prevent>
    <label for="text-password">Пароль</label>
    <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
    <b-form-text id="password-help-block">
      Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры и не должен содержать пробелов, специальных символов или эмодзи.
    </b-form-text>
   </b-form>
</div>

<!-- b-form-help-text.vue -->
```

### Помощники по обратной связи

Вспомогательные компоненты `<b-form-valid-feedback>` и `<b-form-invalid-feedback>` будут отображать обратную связь (основанную на состоянии ввода) в виде блока цветного текста. Они полагаются на то, что их помещают после ввода (родственника) и будут отображаться на основе собственного состояния проверки ввода в браузере. Чтобы заставить их показываться, установите для свойства `force-show` значение `true` или привяжите элементы управления `state` к свойству `state` помощника обратной связи, или установите класс `was-validated` для родительского элемента (например, форма). Дополнительные сведения смотрите в разделе **Валидация** ниже.

Используйте необязательную логическую опцию `tooltip`, чтобы изменить отображение с блочного на статический стиль всплывающей подсказки. Отзыв обычно отображается под элементом управления формы. Когда этот режим включен, важно, чтобы родительский контейнер имел стиль `position: relative:` css (или класс `position-relative`). Обратите внимание, что обратная связь в стиле всплывающей подсказки может, поскольку ее расположение статично, скрывать другие поля ввода, метки и т. д.

**Примечание:** Некоторые элементы управления формой, например
[`<b-form-radio>`](/docs/components/form-radio#contextual-states),
[`<b-form-checkbox>`](/docs/components/form-checkbox#contextual-states) и
[`<b-form-file>`](/docs/components/form-file) имеют элементы оболочки, которые предотвращают автоматическое отображение текста обратной связи (поскольку компонент обратной связи не является прямым родственником ввода элемента управления формой). Используйте свойство `state` компонента обратной связи (привязанное к состоянию элемента управления формой) или свойство `force-show` для отображения обратной связи.

```html
<template>
  <div>
    <b-form  @submit.stop.prevent>
      <label for="feedback-user">Идентификатор пользователя</label>
      <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Ваш идентификатор пользователя должен состоять из 5–12 символов.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Выглядит неплохо.
      </b-form-valid-feedback>
     </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: ''
      }
    },
    computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
    }
  }
</script>

<!-- b-form-feedback-example.vue -->
```

### Помощник даталиста

Для браузеров, поддерживающих
[`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) элементы, вспомогательный компонент `<b-form-datalist>` позволит вам быстро создать элементы `<datalist>` и дочерние элементы `<option>` через массив, переданный в свойство `options`.

Вы также можете вручную указать элементы `<option>` внутри `<b-form-datalist>`. Они будут отображаться под любыми элементами `<option>`, созданными из свойства `options`.

```html
<template>
  <div>
    <label for="input-with-list">Ввод с помощью списка данных</label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']
    }
  }
}
</script>

<!-- b-form-datalist-example.vue -->
```

`<b-form-datalist>` также доступен через более короткий псевдоним `<b-datalist>`.

Смотрите также:

- [`<b-form-input> datalist`](/docs/components/form-input#datalist-support) для использования списка данных.
- [`<b-form-select>` `options` prop](/docs/components/form-select#options-property) документация для получения подробной информации о форматах и вспомогательных свойствах, связанных с `options`.

## Валидация

Отключите встроенную проверку HTML5 в браузере, установив для свойства `novalidate` значение true в `<b-form>`.

Установите для свойства `validated` на `<b-form>` значение `true`, чтобы добавить класс Bootstrap v4 `.was-validated` в форму для запуска состояний проверки.

Все элементы управления формой поддерживают свойство `state`, которое можно использовать для установки элемента управления формы в одно из трех контекстных состояний:

- `false` (обозначает недопустимое состояние) отлично подходит, когда есть блокирующее или обязательное поле. Пользователь должен правильно заполнить это поле, чтобы отправить форму.
- `true` (обозначает действительное состояние) идеально подходит для ситуаций, когда у вас есть проверка по каждому полю во всей форме и вы хотите побудить пользователя пройти через остальные поля.
- `null` Не отображает состояние проверки (ни действительное, ни недействительное)

Смотрите [Документацию по проверке формы Bootstrap v4](https://getbootstrap.com/docs/4.5/components/forms/#validation) для получения подробной информации о новых состояниях проверки Bootstrap v4.

### Механизмы валидации

Использование 3<sup>х</sup> сторонних проверочных библиотек на основе Vue с BootstrapVue:

- BootstrapVue [раздел справки по проверке формы](/docs/reference/validation)

Дополнительные ресурсы:

- [Bootstrap v4: документация по проверке формы](https://getbootstrap.com/docs/4.5/components/forms/#validation)
- [MDN: изучение проверки форм - использование JavaScript API](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Validating_forms_using_JavaScript)
- [MDN: проверка ограничений HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [MDN: API состояния действительности](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)

<!-- Component reference added automatically from component package.json -->
