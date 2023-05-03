# Модальное окно

> Модальные окна оптимизированы, но гибкие диалоговые подсказки основаны на JavaScript и CSS. Они
> поддерживают ряд вариантов использования, от уведомлений пользователей до полностью настраиваемого
> контента, и содержат несколько полезных подкомпонентов, размеров, вариантов, доступности и многого
> другого.

```html
<div>
  <b-button v-b-modal.modal-1>Запустить демонстрацию модального окна</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Привет из модального окна!</p>
  </b-modal>
</div>

<!-- b-modal.vue -->
```

## Обзор

`<b-modal>` по умолчанию имеет кнопки **OK** и **Cancel** в нижнем колонтитуле. Эти кнопки можно
настроить, установив различные свойства компонента. Вы можете настроить размер кнопок, отключить
кнопки, скрыть кнопку **Cancel** (т. е. `ok-only`), выбрать вариант (например, `danger` для красной
кнопки **OK**) с помощью свойств `ok-variant` и `cancel-variant`, а также предоставлять
настраиваемое содержимое кнопки, используя свойства `ok-title` и `cancel-title`, или используя
именованные слоты `modal-ok` и `modal-cancel`.

`<b-modal>` поддерживает закрытие по ESC (включено по умолчанию), закрытие по щелчку фона (включено
по умолчанию) и кнопку закрытия `X` в заголовке (включено по умолчанию). Эти функции можно
отключить, установив параметры `no-close-on-esc`, `no-close-on-backdrop` и `hide-header-close`
соответственно.

Вы можете переопределить модальный заголовок с помощью именованного слота `modal-title`, полностью
переопределить заголовок с помощью слота `modal-header` и полностью переопределить нижний колонтитул
с помощью слота `modal-footer`.

**Примечание**: при использовании слота `modal-footer` кнопки **OK** и **Cancel** по умолчанию не
будут присутствовать. Кроме того, если вы используете слот `modal-header`, кнопка закрытия заголовка
по умолчанию `X` не будет присутствовать, и вы не сможете использовать слот `modal-title`.

Модальные окна не будут отображать свое содержимое в документе до тех пор, пока они не будут
показаны (отложено отрисованы). Видимые модальные окна отображаются **добавленными к элементу
`<body>`**. Размещение компонента `<b-modal>` не повлияет на макет, так как он всегда отображается
как узел комментария-заполнителя (`<!---->`). Вы можете вернуться к поведению более старых версий
BootstrapVue с помощью [свойства `static`](#lazy-loading-and-static-modals).

## Переключатель видимости модального окна

Есть несколько методов, которые вы можете использовать для переключения видимости `<b-modal>`.

### Использование директивы `v-b-modal`

Другие элементы могут легко отображать модальные окна с помощью директивы `v-b-modal`.

```html
<div>
  <!-- Using modifiers -->
  <b-button v-b-modal.my-modal>Показать модалку</b-button>

  <!-- Using value -->
  <b-button v-b-modal="'my-modal'">Показать модалку</b-button>

  <!-- The modal -->
  <b-modal id="my-modal">Привет из моей модалки!</b-modal>
</div>

<!-- b-modal-directive.vue -->
```

Этот подход автоматически вернет фокус на элемент триггера после закрытия модального окна
(аналогично функциональности Bootstrap по умолчанию). Другие подходы к переключению модальной
видимости могут потребовать дополнительного кода для реализации этой функции специальных
возможностей.

Дополнительные сведения см. в разделе [Специальные возможности](#accessibility) ниже.

### Использование методов экземпляра `this.$bvModal.show()` и `this.$bvModal.hide()`

Когда BootstrapVue установлен как плагин или используется плагин `ModalPlugin`, BootstrapVue будет
внедрять объект `$bvModal` в каждый экземпляр Vue (компоненты, приложения). `this.$bvModal`
предоставляет несколько методов, два из которых предназначены для отображения и скрытия модальных
окон:

| Метод                    | Описание                                 |
| ------------------------ | ---------------------------------------- |
| `this.$bvModal.show(id)` | Показать модальное окно с указанным `id` |
| `this.$bvModal.hide(id)` | Скрыть модальное окно с указанным `id`   |

Оба метода возвращаются сразу после вызова.

```html
<div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Открыть модальное окно</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Использование методов <code>$bvModal</code>
    </template>
    <div class="d-block text-center">
      <h3>Привет из этого модального окна!</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Закрой меня</b-button>
  </b-modal>
</div>

<!-- b-modal-bv-modal-hide-show.vue -->
```

Объект `this.$bvModal` также используется для отображения
[модальных окон сообщений](#modal-message-boxes).

### Использование методов компонента `show()`, `hide()` и `toggle()`

You can access modal using `ref` attribute and then call the `show()`, `hide()` or `toggle()`
methods.

```html
<template>
  <div>
    <b-button id="show-btn" @click="showModal">Открыть модальное окно</b-button>
    <b-button id="toggle-btn" @click="toggleModal">Переключить модальное окно</b-button>

    <b-modal ref="my-modal" hide-footer title="Использование методов компонента">
      <div class="d-block text-center">
        <h3>Привет из моей модалки!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Закрой меня</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Переключи меня</b-button>
    </b-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // Мы передаем идентификатор кнопки, на которую мы хотим вернуть фокус,
        // когда модальное окно скрыто
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>

<!-- b-modal-methods.vue -->
```

Метод `hide()` принимает необязательный строковый аргумент `trigger` для определения того, что
вызвало закрытие модального окна. См. подробности в разделе
[Предотвращение закрытия](#prevent-closing) ниже.

**Примечание:** Рекомендуется использовать методы `this.$bvModal.show()` и `this.$bvModal.hide()`
(упомянутые в предыдущем разделе) вместо методов `$ref`.

### Использование свойства `v-model`

Свойство `v-model` всегда автоматически синхронизируется с видимым состоянием `<b-modal>`, и вы
можете показать/скрыть его с помощью `v-model`.

```html
<template>
  <div>
    <b-button @click="modalShow = !modalShow">Открыть модальное окно</b-button>

    <b-modal v-model="modalShow">Привет из модального окна!</b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>

<!-- b-modal-v-model.vue -->
```

При использовании свойства `v-model` **не** используйте свойство `visible` одновременно.

### Использование методов области видимости слота

Обратитесь к разделу [Пользовательский рендеринг со слотами](#custom-rendering-with-slots) по
использованию различных методов, передаваемых слотам с заданной областью действия для закрытия
модальных окон.

### Отправка событий на \$root

Вы можете генерировать события `bv::show::modal`, `bv::hide::modal` и `bv::toggle::modal` в `$root`
с первым аргументом, установленным в идентификатор модального окна. Необязательный второй аргумент
может указать элемент, на который нужно вернуть фокус после закрытия модального окна. Вторым
аргументом может быть селектор CSS, ссылка на элемент или ссылка на компонент (корневой элемент
компонента будет сфокусирован).

```html
<div>
  <b-button @click="showModal" ref="btnShow">Открыть модальное окно</b-button>
  <b-button @click="toggleModal" ref="btnToggle">Переключить модальное окно</b-button>

  <b-modal id="modal-1">
    <div class="d-block">Привет из моей модалки!</div>
    <b-button @click="hideModal">Закрой меня</b-button>
    <b-button @click="toggleModal">Переключи меня</b-button>
  </b-modal>
</div>
```

```js
export default {
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
    },
    toggleModal() {
      this.$root.$emit('bv::toggle::modal', 'modal-1', '#btnToggle')
    }
  }
}
```

**Примечание:** Рекомендуется использовать методы `this.$bvModal.show()` и `this.$bvModal.hide()`
(упомянутые в предыдущем разделе) вместо генерации событий `$root`.

### Предотвратить закрытие

Чтобы предотвратить закрытие `<b-modal>` (например, при сбое проверки). вы можете вызвать метод
`.preventDefault()` объекта события, переданного вашему `ok` (кнопка **OK**), `cancel` (кнопка
**Cancel**), `close` (кнопка закрытия модального заголовка ) и `hide` обработчики событий. Обратите
внимание, что `.preventDefault()`, при использовании **должен** вызываться синхронно, так как
асинхронность не поддерживается.

```html
<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Открыть модальное окно</b-button>

    <div class="mt-3">
      Представленные имена:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames">{{ name }}</li>
      </ul>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Введите ваше имя"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Имя"
          label-for="name-input"
          invalid-feedback="Имя обязательно"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        nameState: null,
        submittedNames: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvent) {
        // Предотвратить закрытие модального окна
        bvModalEvent.preventDefault()
        // Обработчик отправки триггера
        this.handleSubmit()
      },
      handleSubmit() {
        // Выйти, если форма недействительна
        if (!this.checkFormValidity()) {
          return
        }
        // Вставьте имя в представленные имена
        this.submittedNames.push(this.name)
        // Скрыть модальное окно вручную
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>

<!-- b-modal-prevent-closing.vue -->
```

## События

События `ok`, `cancel` и `close` генерируются модальными встроенными кнопками **OK**, **Cancel** и
закрытие заголовка (**X**) соответственно. Эти события не будут генерироваться по умолчанию, если
вы предоставили свои собственные кнопки в слоте `modal-footer` или скрыли нижний колонтитул.
В этом случае используйте событие `hide` для управления отменой закрытия модального окна.
Событие `hide` генерируется всегда, даже если генерируются `ok`, `cancel` и `close`.

Объект событий `ok`, `cancel`, `close` и `hide` (`BvModalEvent`) содержит несколько свойств и
методов:

| Свойство или метод | Тип      | Описание                                                                                                                                                                                                                                                                                                               |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preventDefault()` | Метод    | При вызове предотвращает закрытие модального окна                                                                                                                                                                                                                                                                      |
| `trigger`          | Свойство | Будет одним из: `ok` (по умолчанию нажато **OK**), `cancel` (по умолчанию нажато **Cancel**), `esc` (если была нажата клавиша <kbd>Esc</kbd>), `backdrop` (если был нажат фон), `headerclose` (если была нажата кнопка X в заголовке), первый аргумент, предоставленный методу `hide()` или `null` в противном случае. |
| `target`           | Свойство | Ссылка на модальный элемент                                                                                                                                                                                                                                                                                            |
| `vueTarget`        | Свойство | Ссылка на модальный экземпляр Vue VM                                                                                                                                                                                                                                                                                   |
| `componentId`      | Свойство | Идентификатор модального окна                                                                                                                                                                                                                                                                                          |

Вы можете установить значение `trigger`, передав аргумент методу `hide()` компонента для
расширенного управления (т.е. определения того, какая кнопка или действие вызвало скрытие модального
окна).

**Примечание:** `ok`, `cancel` или `close` будут генерироваться только в том случае, если аргумент
`hide()` строго равен `'ok'`, `'cancel'` или `'headerclose'` соответственно. Аргумент, переданный в
`hide()` будет помещен в свойство `trigger` объекта события.

## Модальное содержимое

### Использование сетки

Используйте сетку Bootstrap внутри модального окна, вставив `<b-container fluid>` внутри модального
тела. Затем используйте обычную систему сетки `<b-row>` (или `<b-form-row>`) и `<b-col>` как и
везде.

### Подсказки и всплывающие окна

Подсказки и всплывающие окна могут быть размещены в модальных окнах по мере необходимости. Когда
модальные окна закрыты, любые всплывающие подсказки и всплывающие окна также автоматически
закрываются. Всплывающие подсказки и всплывающие окна автоматически добавляются к модальному
элементу (для обеспечения правильной z-индексации), хотя вы можете переопределить, где они
добавляются, указав идентификатор контейнера (подробности см. в документации по всплывающим
подсказкам и всплывающим окнам).

```html
<div>
  <b-button v-b-modal.modalPopover>Показать модалку</b-button>

  <b-modal id="modalPopover" title="Modal with Popover" ok-only>
    <p>
      This
      <b-button v-b-popover="'Popover inside a modal!'" title="Popover">Кнопка</b-button>
      вызывает всплывающее окно при нажатии.
    </p>
    <p>
      Эта <a href="#" v-b-tooltip title="Подсказка в модальном окне!">ссылка</a> будет показывать всплывающую подсказку при наведении.
    </p>
  </b-modal>
</div>

<!-- b-modal-popover.vue -->
```

## Отложенная загрузка и статические модальные окна

По умолчанию модальные окна не будут отображать свое содержимое в документе, пока они не будут
показаны (лениво отрисованы). Модальные окна, которые при отображении добавляются к элементу
`<body>`. Компонент `<b-modal>` не повлияет на макет, так как он отображается как узел
комментария-заполнителя (`<!---->`) в позиции DOM, в которой он размещен. Из-за процесса портала
может потребоваться два или более `$nextTick` для отображения изменений содержимого в цели.

Модальные окна могут отображаться _на месте_ в документе (т. е. там, где в документе находится
компонент `<b-modal>` ), установив свойство `static` в значение `true`. Обратите внимание, что
содержимое модального окна будет отображаться в DOM, даже если модальное окно не отображается/не
отображается, когда `static` равно `true`. Чтобы статические модальные окна `static` отображались
лениво, также установите параметр `lazy` в значение `true`. Затем модальное окно появится в
документе _только_ когда оно будет видимым. Обратите внимание, что в статическом режиме `static`
размещение компонента `<b-modal>` _может повлиять на макет_ вашего документа и модального окна.

Свойство `lazy` не будет иметь никакого эффекта, если свойство `static` не равно `true`
(нестатические модальные окна будут _всегда_ отображаться лениво).

## Стиль, опции и персонализация

### Модальный размер

Модальные окна имеют три необязательных размера, доступных через свойство `size`. Эти размеры
срабатывают в определенных контрольных точках, чтобы избежать горизонтальных полос прокрутки на
более узких окнах просмотра. Допустимые необязательные размеры: `sm`, `lg` и `xl`.

```html
<div>
  <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
  <b-button v-b-modal.modal-lg variant="primary">lg modal</b-button>
  <b-button v-b-modal.modal-sm variant="primary">sm modal</b-button>

  <b-modal id="modal-xl" size="xl" title="Extra Large Modal">Привет, очень большое модальное окно!</b-modal>
  <b-modal id="modal-lg" size="lg" title="Large Modal">Привет, большое модальное окно!</b-modal>
  <b-modal id="modal-sm" size="sm" title="Small Modal">Привет, маленькое модальное окно!</b-modal>
</div>

<!-- b-modal-sizes.vue -->
```

Свойство `size` сопоставляет размер с классами `.modal-<size>`.

### Прокрутка длинного контента

Когда модальные окна становятся слишком длинными для области просмотра или устройства пользователя,
они прокручиваются независимо от самой страницы. Попробуйте демо ниже, чтобы увидеть, что мы имеем в
виду.

```html
<div>
  <b-button v-b-modal.modal-tall>Запустить переполненное модальное окно</b-button>

  <b-modal id="modal-tall" title="Overflowing Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
</div>

<!-- b-modal-scroll-overflow.vue -->
```

Вы также можете создать модальное окно с возможностью прокрутки, которое позволяет прокручивать тело
модального окна, установив для параметра `scrollable` значение `true`.

```html
<div>
  <b-button v-b-modal.modal-scrollable>Запустить модальное окно с прокруткой</b-button>

  <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
</div>

<!-- b-modal-scrollable-content.vue -->
```

### Вертикально центрированное модальное окно

Вертикально центрируйте ваш модальный экран в окне просмотра, установив свойство `centered`.

```html
<div>
  <b-button v-b-modal.modal-center>Запуск по центру модального окна</b-button>

  <b-modal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">Вертикально центрированное модальное окно!</p>
  </b-modal>
</div>

<!-- b-modal-center-vertically.vue -->
```

Не стесняйтесь смешивать вертикальное `centered` с `scrollable`.

### Варианты

Управляйте заголовком, нижним колонтитулом, фоном и текстом основного текста, устанавливая свойства
`header-bg-variant`, `header-text-variant`, `body-bg-variant`, `body-text-variant`,
`footer-bg-variant` и `footer-text-variant`. Используйте любой из стандартных вариантов Bootstrap,
таких как `danger`, `warning`, `info`, `success`, `dark`, `light` и т. д.

Варианты нижней границы заголовка и верхней границы нижнего колонтитула можно контролировать с
помощью свойств `header-border-variant` и `footer-border-variant` соответственно.

```html
<template>
  <div>
    <b-button @click="show=true" variant="primary">Показать модалку</b-button>

    <b-modal
      v-model="show"
      title="Modal Variants"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3"></b-col>
          <b-col>Фон</b-col>
          <b-col>Текст</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Хедер</b-col>
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">Боди</b-col>
          <b-col>
            <b-form-select
              v-model="bodyBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="bodyTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">Футер</b-col>
          <b-col>
            <b-form-select
              v-model="footerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Содержимое модального нижнего колонтитула</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Закрыть
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'warning',
        footerTextVariant: 'dark'
      }
    }
  }
</script>

<!-- b-modal-variants.vue -->
```

Вы также можете применять произвольные классы к контейнеру модального диалога, содержимому (само
модальное окно), заголовку, телу и нижнему колонтитулу через свойства `modal-class`,
`content-class`, `header-class`, `body-class` и `footer-class` соответственно. Свойства принимают
либо строку, либо массив строк.

### Скрытие фона

Скройте фон модального окна, установив свойство `hide-backdrop`.

```html
<div>
  <b-button v-b-modal.modal-no-backdrop>Открыть модальное окно</b-button>

  <b-modal id="modal-no-backdrop" hide-backdrop content-class="shadow" title="BootstrapVue">
    <p class="my-2">
      Мы добавили служебный класс <code>'shadow'</code> в модальное содержимое для дополнительного эффекта.
    </p>
  </b-modal>
</div>

<!-- modal-no-backdrop.vue -->
```

Обратите внимание, что щелчок за пределами модального окна все равно закроет модальное окно, даже
если фон скрыт. Вы можете отключить это поведение, установив свойство `no-close-on-backdrop` на
`<b-modal>`.

### Отключить анимацию открытия и закрытия

Чтобы отключить затухающий переход/анимацию при открытии и закрытии модального окна, просто
установите свойство `no-fade` в компоненте `<b-modal>`.

### Размер кнопки нижнего колонтитула

Хотите маленькие или большие кнопки в нижнем колонтитуле по умолчанию? Просто установите свойство
`button-size` в `'sm'` для маленьких кнопок или `'lg'` для больших кнопок.

```html
<div>
  <b-button v-b-modal.modal-footer-sm>Маленькие кнопки нижнего колонтитула</b-button>
  <b-button v-b-modal.modal-footer-lg>Большие кнопки нижнего колонтитула</b-button>

  <b-modal id="modal-footer-sm" title="BootstrapVue" button-size="sm">
    <p class="my-2">Этот модал имеет маленькие кнопки нижнего колонтитула</p>
  </b-modal>

  <b-modal id="modal-footer-lg" title="BootstrapVue" button-size="lg">
    <p class="my-2">У этого модального окна большие кнопки нижнего колонтитула</p>
  </b-modal>
</div>

<!-- modal-footer-btn-sizes.vue -->
```

Свойство `button-size` не действует, если вы предоставили свой собственный нижний колонтитул через
слот [`modal-footer`](#custom-rendering-with-slots).

### Отключение встроенных кнопок нижнего колонтитула

Вы можете программно отключить встроенные кнопки нижнего колонтитула.

Вы можете отключить кнопки **Cancel** и **OK** по отдельности, установив для свойств
`cancel-disabled` и `ok-disabled` соответственно значение `true`. Установите свойство на `false`,
чтобы снова активировать кнопку.

Чтобы одновременно отключить кнопки **Cancel** и **OK**, просто установите для свойства `busy`
значение `true`. Установите значение `false`, чтобы снова активировать обе кнопки.

### Пользовательский рендеринг со слотами

`<b-modal>` предоставляет несколько именованных слотов (некоторые из которых не являются
обязательными), которые вы можете использовать для настройки содержимого различных разделов
модального окна.

| Слот                 | Необязательно | Описание                                                                         |
| -------------------- | ------------- | -------------------------------------------------------------------------------- |
| `default`            | Да            | Основное содержание модального окна                                              |
| `modal-title`        | Да            | Контент для размещения в заголовке модального окна                               |
| `modal-header`       | Да            | Контент разместить в шапке. Заменяет весь заголовок, включая кнопку закрытия     |
| `modal-footer`       | Да            | Контент для размещения в футере. Заменяет весь нижний колонтитул, включая кнопки |
| `modal-ok`           | Нет           | Содержимое для размещения внутри кнопки OK нижнего колонтитула                   |
| `modal-cancel`       | Нет           | Содержимое для размещения внутри кнопки CANCEL нижнего колонтитула               |
| `modal-header-close` | Нет           | Содержимое для размещения в заголовке кнопка CLOSE (`x`)                         |

Область действия, доступная для слотов, которые поддерживают необязательную область видимости:

| Метод или Свойство | Описание                                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `ok()`             | Закрывает модальное окно и запускает события `ok` и `hide`, с `bvModalEvent.trigger = 'ok'`                                |
| `cancel()`         | Закрывает модальное окно и запускает события `cancel` и `hide`, с `bvModalEvent.trigger = 'cancel'`                        |
| `close()`          | Закрывает модальное окно и запускает события `close` и `hide`, с `bvModalEvent.trigger = 'headerclose'`                    |
| `hide(trigger)`    | Закрывает модальное окно и запускает событие `hide`, с `bvModalEvent.trigger = trigger` (триггер не является обязательным) |
| `visible`          | Состояние видимости модального окна. `true` если модальное окно видимо, и `false`, если не видно                           |

#### Пример модального окна с использованием слотов с пользовательской областью действия

```html
<template>
  <b-button @click="$bvModal.show('modal-scoped')">Открыть модальное окно</b-button>

  <b-modal id="modal-scoped">
    <template #modal-header="{ close }">
      <!-- Эмулировать встроенное модальное действие кнопки закрытия заголовка -->
      <b-button size="sm" variant="outline-danger" @click="close()">
        Закрыть модальное кно
      </b-button>
      <h5>Заголовок модального окна</h5>
    </template>

    <template #default="{ hide }">
      <p>Тело модального окна с кнопкой</p>
      <b-button @click="hide()">Скрыть модальное окно</b-button>
    </template>

    <template #modal-footer="{ ok, cancel, hide }">
      <b>Кастомный футер</b>
      <!-- Эмулировать встроенный модальный нижний колонтитул в порядке и отменить действия кнопки -->
      <b-button size="sm" variant="success" @click="ok()">
        Сохранить
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Отменить
      </b-button>
      <!-- Кнопка с пользовательским значением триггера закрытия -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Забыть это
      </b-button>
    </template>
  </b-modal>
</template>

<!-- b-modal-scoped-slots.vue -->
```

## Множественная модальная поддержка

В отличие от родного Bootstrap v4, BootstrapVue поддерживает одновременное открытие нескольких
модальных окон.

Чтобы отключить стек для определенного модального окна, просто установите свойство `no-stacking` в
компоненте `<b-modal>`. Это скроет модальное окно до того, как будет показано другое модальное окно.

```html
<div>
  <b-button v-b-modal.modal-multi-1>Открыть Первое модальное окно</b-button>

  <b-modal id="modal-multi-1" size="lg" title="Первое модальное окно" ok-only no-stacking>
    <p class="my-2">Первое модальное окно</p>
    <b-button v-b-modal.modal-multi-2>Открыть Второе модальное окно</b-button>
  </b-modal>

  <b-modal id="modal-multi-2" title="Второе модальное окно" ok-only>
    <p class="my-2">Второе модальное окно</p>
    <b-button v-b-modal.modal-multi-3 size="sm">Открыть Третье модальное окно</b-button>
  </b-modal>

  <b-modal id="modal-multi-3" size="sm" title="Третье модальное окно" ok-only>
    <p class="my-1">Третье модальное окно</p>
  </b-modal>
</div>

<!-- b-modal-multiple.vue -->
```

**Примечания:**

- Избегайте вложения `<b-modal>` _внутри_ другого `<b-modal>`, так как он может быть "ограничен"
  границами родительского модального диалога (особенно при использовании статических модальных
  окон).
- Непрозрачный фон будет казаться темнее для каждого открытого модального окна. Это ожидаемое
  поведение, так как каждый фон открывается поверх других модальных окон и фонов.

## Модальные окна сообщений

BootstrapVue предоставляет несколько встроенных методов Message Box для открытого объекта
`this.$bvModal`. Эти методы позволяют генерировать простые модальные сообщения в стиле OK и Confirm
из любой точки вашего приложения без необходимости явного размещения компонента `<b-modal>` на ваших
страницах.

| Метод                                           | Описание                                                                          |
| ----------------------------------------------- | --------------------------------------------------------------------------------- |
| `this.$bvModal.msgBoxOk(message, options)`      | Откройте модальное окно с `message` в качестве содержимого и одной кнопкой OK     |
| `this.$bvModal.msgBoxConfirm(message, options)` | Откройте модальное окно с `message` в качестве содержимого и кнопками CANCEL и OK |

Аргумент `options` — это необязательный объект конфигурации для добавления заголовков и оформления
модального окна сообщения. Свойства объекта соответствуют свойствам `<b-modal>`, за исключением
формата <samp>camelCase</samp> вместо <samp>kebab-case</samp>.

Оба метода возвращают `Promise` (требуется полифилл для поддержки IE 11 и более старых браузеров),
который преобразуется в значение, когда модальное окно скрывается. `.msgBoxOk()` всегда принимает
значение `true`, тогда как `.msgBoxConfirm()` принимает значение `true` (нажата кнопка OK), `false`
(нажата кнопка CANCEL) или `null` (если модальное окно было закрыто щелчком фона, нажатием
<kbd>Esc</kbd> или каким-либо другим способом.

Если `message` не указано, оба метода немедленно вернутся со значением `undefined`.

Вы можете использовать стили кода `.then(..).catch(...)` или асинхронный `await` (асинхронный
`await` требует современных браузеров или транспилера).

### Окно сообщения OK

Пример окон сообщений OK

```html
<template>
  <div>
    <div class="mb-2">
     <b-button @click="showMsgBoxOne">Простой msgBoxOk</b-button>
     Возвращаемое значение: {{ String(boxOne) }}
    </div>
    <div class="mb-1">
     <b-button @click="showMsgBoxTwo">msgBoxOk с опциями</b-button>
     Возвращаемое значение: {{ String(boxTwo) }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        boxOne: '',
        boxTwo: ''
      }
    },
    methods: {
      showMsgBoxOne() {
        this.boxOne = ''
        this.$bvModal.msgBoxOk('Действие завершено')
          .then(value => {
            this.boxOne = value
          })
          .catch(err => {
            // An error occurred
          })
      },
      showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Данные успешно отправлены', {
          title: 'Подтверждение',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // Произошла ошибка
          })
      }
    }
  }
</script>

<!-- b-modal-msg-box-ok.vue -->
```

### Окно сообщения Confirm

Пример окна сообщения Confirm

```html
<template>
  <div>
    <div class="mb-2">
     <b-button @click="showMsgBoxOne">Простой msgBoxConfirm</b-button>
     Возвращаемое значение: {{ String(boxOne) }}
    </div>
    <div class="mb-1">
     <b-button @click="showMsgBoxTwo">msgBoxConfirm with options</b-button>
     Возвращаемое значение: {{ String(boxTwo) }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        boxOne: '',
        boxTwo: ''
      }
    },
    methods: {
      showMsgBoxOne() {
        this.boxOne = ''
        this.$bvModal.msgBoxConfirm('Уверены ли вы?')
          .then(value => {
            this.boxOne = value
          })
          .catch(err => {
            // An error occurred
          })
      },
      showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxConfirm('Пожалуйста, подтвердите, что вы хотите удалить все.', {
          title: 'Пожалуйста, подтвердите',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })
      }
    }
  }
</script>

<!-- b-modal-msg-box-confirm.vue -->
```

### Примечания к окну сообщения

- Внедрение `this.$bvModal` доступно только при использовании полного плагина `BootstrapVue` или
  плагина `ModalPlugin`. Он недоступен при импорте только компонента `b-modal`. Чтобы просто
  импортировать инъекцию, используйте плагин `BVModalPlugin`.
- Новая инъекция `$bvModal` (примесь) создается для каждой виртуальной машины Vue (т. е. каждого
  экземпляра компонента), и ее нельзя использовать через прямой доступ к `Vue.prototype`, так как ей
  нужен доступ к контексту `this` и `$root`.
- Окна сообщений требуют поддержки `Promise` в браузере. Если ваше приложение предназначено для
  старых браузеров, таких как IE 11, включите полифилл, обеспечивающий поддержку `Promise`. Если
  поддержка `Promise` не обнаружена, то методы окна сообщения немедленно вернут `undefined`.
- Окна сообщений являются расширением компонента `<b-modal>` и, следовательно, поддерживают
  большинство свойств `<b-modal>` (в формате <samp>camelCase</samp>), за исключением следующих
  свойств: `lazy`, `static`, `busy`, `visible`, `noStacking`, `okOnly`, `okDisabled` и
  `cancelDisabled`.
- Когда `title` (или `titleHtml`) _не указан_ в опциях, заголовок не будет отображаться.
- Когда `title` (или `titleHtml`) _указан_ в опциях, кнопка закрытия заголовка не отображается по
  умолчанию. Вы можете включить кнопку закрытия заголовка, установив `hideHeaderClose: false` в
  параметрах.
- Окна сообщений будут выдавать ошибку (отклонение обещания), если они будут закрыты/уничтожены до
  того, как они будут скрыты. Всегда включайте обработчик отклонения `.catch(errHandler)`, если
  используется асинхронный код стиля `await`.
- При использовании Vue Router (или аналогичного) окна сообщений будут закрываться и отклоняться,
  если маршрут изменится до того, как модальное окно скроется. Если вы хотите, чтобы окно сообщения
  оставалось открытым при изменении маршрута, используйте `this.$root.$bvModal` insвместо
  `this.$bvModal`.
- Окна сообщений не могут быть созданы во время рендеринга на стороне сервера (SSR).
- Окно сообщения `message` в настоящее время не поддерживает строки HTML, однако вы можете передать
  _массив_ из `VNodes` в качестве `message` для точного управления разметкой. Вы можете использовать
  метод Vue
  [`this.$createElement`](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments)
  для создания VNodes. Это также можно сделать для модального заголовка (путем передачи VNodes в
  параметр `title`), текста кнопки OK (через опцию `okTitle`), и текста кнопки CANCEL (через опцию
  `cancelTitle`).

### Расширенное использование окна сообщений

При использовании методов `this.$bvModal.msgBoxOk(...)` или `this.$bvModal.msgBoxConfirm(...)` для
создания модальных окон вы можете захотеть, чтобы модальное содержимое было чем-то большим, чем
просто строковое сообщение. Как упоминалось в разделе [заметки окна сообщения](#message-box-notes)
выше, вы можете передать _массивы_ виртуальных узлов в качестве сообщения и заголовка для более
сложного содержимого.

Используйте метод Vue
[`this.$createElement`](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) для
создания VNodes.

```html
<template>
  <div>
    <b-button @click="showMsgOk">Показать окно сообщения OK с пользовательским содержимым</b-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showMsgOk() {
        const h = this.$createElement
        // Использование строки HTML
        const titleVNode = h('div', { domProps: { innerHTML: 'Title from <i>HTML<i> string' } })
        // Более сложная структура
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center'] }, [
            ' Flashy ',
            h('strong', 'msgBoxOk'),
            ' message ',
          ]),
          h('p', { class: ['text-center'] }, [h('b-spinner')]),
          h('b-img', {
            props: {
              src: 'https://picsum.photos/id/20/250/250',
              thumbnail: true,
              center: true,
              fluid: true, rounded: 'circle'
            }
          })
        ])
        // Мы должны передать сгенерированные VNodes как массивы
        this.$bvModal.msgBoxOk([messageVNode], {
          title: [titleVNode],
          buttonSize: 'sm',
          centered: true, size: 'sm'
        })
      }
    }
  }
</script>

<!-- modal-msg-box-advanced.vue -->
```

## Прослушивание модальных изменений через события \$root

Чтобы прослушать любое модальное открытие, используйте:

```js
export default {
  mounted() {
    this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
      console.log('Модальное окно скоро будет показано', bvEvent, modalId)
    })
  }
}
```

Обратитесь к разделу [События](#comp-ref-b-modal) этой документации для получения полного списка
генерируемых событий.

## Доступность

`<b-modal>` предоставляет несколько функций специальных возможностей, включая автофокус, возврат
фокуса, _фиксацию_ фокуса клавиатуры (вкладки) и автоматические атрибуты `aria-*`.

**Примечание:** Эффект анимации этого компонента зависит от медиа-запроса `prefers-reduced-motion`.
Дополнительную информацию см. в
[разделе с уменьшенным движением в нашей документации по специальным возможностям](/docs/reference/accessibility).

### Модальные атрибуты ARIA

Атрибуты `aria-labelledby` и `aria-describedby` автоматически появляются в модальном окне в
большинстве случаев.

- Атрибут `aria-labelledby` **отсутствует**, если вы скрыли заголовок, указали свой собственный
  заголовок или не указали модальный заголовок. Рекомендуется указать заголовок для ваших модальных
  окон (при использовании встроенного заголовка). Вы можете визуально скрыть заголовок заголовка, но
  сделать его доступным для программ чтения с экрана, установив свойство `title-sr-only`. Если у вас
  нет заголовка, вы можете указать метку для модального окна, передав строку в свойство
  `aria-label`.
- Атрибут `aria-describedby` всегда будет указывать на содержимое тела модального окна.
- Если свойство `aria-label` указано со строковым значением, атрибут `aria-labelledby` не будет
  отображаться, даже если у вас есть заголовок/заголовок для вашего модального окна.

Свойства `aria-label` и `title-sr-only` были добавлены в версии `v2.0.0-rc.27`.

### Автофокус при открытии

`<b-modal>` будет автоматически фокусировать модальный _контейнер_ при открытии.

Вы можете предварительно сфокусировать элемент внутри `<b-modal>`, прослушивая событие `shown` и
вызывая метод `focus()` элемента `<b-modal>`. `<b-modal>` не будет пытаться сфокусироваться, если
элемент уже имеет фокус внутри `<b-modal>`.

```html
<b-modal @shown="focusMyElement">
  <div>
    <b-button>У меня нет фокуса</b-button>
  </div>

  <div>
    <b-form-input></b-form-input>
  </div>

  <div>
    <!-- Элемент для получения фокуса при открытии модального окна -->
    <b-form-input ref="focusThis"></b-form-input>
  </div>

  <div>
    <b-form-input></b-form-input>
  </div>
</b-modal>
```

```js
export default {
  methods: {
    focusMyElement() {
      this.$refs.focusThis.focus()
    }
  }
}
```

В качестве альтернативы, если вы используете элементы управления формы `b-form-*`, вы можете
использовать свойство `autofocus`, чтобы автоматически фокусировать элемент управления формы при
открытии модального окна. Обратите внимание, что свойство `autofocus` не будет работать с `b-modal`,
если свойство `static` используется без набора свойств `lazy`, так как `autofocus` происходит, когда
элементы управления `b-form-*` _монтируются в ДОМ_.

Если вы хотите автоматически сфокусировать одну из _встроенных_ модальных кнопок (`ok`, `cancel` или
кнопку `close` в заголовке, вы можете установить свойство `auto-focus-button` в одно из значений
`'ok'`, `'cancel'` или `'close'` и `<b-modal>` будут фокусировать указанную кнопку, если она
существует. Эта функция также доступна для модальных окон сообщений.

<p class="alert alert-warning">
  <strong>Примечание:</strong> <strong>не рекомендуется</strong> автофокусировать ввод или элемент управления внутри модального окна по соображениям доступности, так как пользователи программ чтения с экрана не будут знать контекст того, где находится ввод (объявление модального окна может не произноситься) . Лучше всего позволить <code>&lt;b-modal&gt;</code> сфокусировать контейнер модального окна, позволяя сообщить модальную информацию пользователю, а затем позволить пользователю перейти к вводу с помощью табуляции.
</p>

### Возврат фокуса к элементу запуска

Из соображений доступности желательно возвращать фокус элементу, вызвавшему открытие модального
окна, когда оно закрывается.

`<b-modal>` попытается автоматически определить, какой элемент имел фокус до того, как модальное
окно было открыто, и вернет фокус этому элементу, когда модальное окно скроется, если это возможно.
Однако предоставляется несколько методов и опций, позволяющих вам указать элемент, на который нужно
вернуть фокус после того, как модальное окно скрыто.

#### Укажите элемент возврата фокуса с помощью свойства `return-focus`

Вы также можете указать элемент, на который будет возвращаться фокус при закрытии модального окна,
установив для свойства `return-focus` одно из следующих значений:

- Строка селектора запросов CSS (или идентификатор элемента с префиксом `#`)
- Ссылка на компонент (которая монтируется на фокусируемом элементе, таком как `<b-button>`)
- Ссылка на элемент DOM, который можно сфокусировать

Если переданный элемент не может быть сфокусирован, тогда браузер определит, что имеет фокус (обычно
`<body>`, что нежелательно)

Этот метод возврата фокуса удобен, когда вы используете методы `show()` и `hide()` или свойство
`v-model` элемента `<b-modal>`. Обратите внимание, что это свойство имеет приоритет над другими
методами указания возвращаемого элемента фокуса.

#### Автоматический возврат фокуса

Когда `<b-modal>` открывается с помощью директивы `v-b-modal` для элемента, фокус автоматически
возвращается к этому элементу при закрытии `<b-modal>`, если элемент не был указан через свойство
`return-focus`.

#### Укажите возврат фокуса через событие

При использовании события `bv::show::modal` (генерируемого в `$root`) вы можете указать второй
аргумент, который является элементом, на который нужно вернуть фокус. Этот аргумент принимает те же
типы, что и свойство `return-focus`.

```js
this.$root.$emit('bv::show::modal', 'modal-1', '#focusThisOnClose')
```

_Совет:_ если вы используете событие клика (или подобное) для запуска модального окна для открытия,
передайте свойство события `target`:

```html
<div>
  <b-button @click="$root.$emit('bv::show::modal', 'modal-1', $event.target)">Открыть модальное окно</b-button>
</div>
```

**Примечание:** Если для `<b-modal>` установлено свойство `return-focus`, то элемент, указанный в
событии, будет проигнорирован.

### Клавиатурная навигация

При перемещении по элементам внутри `<b-modal>`, если фокус попытается оставить модальное окно в
документе, он вернется в модальное окно.

Избегайте установки `tabindex` для элементов внутри модального окна на любое значение, отличное от
`0` или `-1`. Это затруднит навигацию и работу с содержимым страницы для людей, которые полагаются
на вспомогательные технологии, и может сделать некоторые из ваших элементов недоступными с помощью
навигации с помощью клавиатуры.

Если некоторые элементы за пределами модального окна должны быть сфокусированы (например, для
TinyMCE), вы можете добавить их в качестве селекторов CSS в свойство `ignore-enforce-focus-selector`
<span class="badge badge-secondary">2.4.0+</span>, например:

```html
<b-modal
  id="some-modal-id"
  title="Modal with TinyMCE Editor"
  ignore-enforce-focus-selector=".tox-tinymce-aux, .moxman-window, .tam-assetmanager-root"
>
  <!-- Модальный контент с редактором TinyMCE здесь -->
</b-modal>
```

В некоторых случаях может потребоваться полностью отключить функцию принудительного фокуса. Вы
можете сделать это, установив свойство `no-enforce-focus`, хотя это _крайне не рекомендуется_ из
соображений доступности.

### Доступность директивы `v-b-modal`

Примечания о доступности директивы `v-b-modal`:

- Если элемент не является `<button>` (или компонентом, который отображает `<button>`), ARIA `role`
  будет установлена на `button`, а прослушиватели событий нажатия клавиши для <kbd>Enter</kbd> и
  <kbd>Space</kbd> будут добавлены вместе с прослушивателем кликов `click`.
- Если элемент не является `<button>` или `<a>` (или компонентом, который отображает любой из них),
  то к элементу будет добавлен `tabindex` равный `0`, чтобы обеспечить доступность, если нет уже
  является набором `tabindex`.

<!-- Component reference added automatically from component package.json -->
