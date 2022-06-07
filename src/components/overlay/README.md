# Оверлей

> Пользовательский компонент BootstrapVue `b-overlay` используется для _визуального скрытия_
> определенного элемента или компонента и его содержимого. Он сигнализирует пользователю об
> изменении состояния внутри элемента или компонента и может использоваться для создания
> загрузчиков, предупреждений/предупреждений, подсказок и многого другого.

## Обзор

`<b-overlay>` можно использовать, чтобы скрыть почти что угодно.
[Примерами использования](#use-case-examples) могут быть формы, таблицы, диалоговые окна
подтверждения удаления или любое другое место, где вам нужно указать, что приложение занято
выполнением фоновой задачи, сообщить, что определенный компонент недоступен, или предоставлять
дополнительный контекст конечному пользователю.

`<b-overlay>` можно использовать для наложения (обтекания) элемента или компонента (поведение по
умолчанию) или можно поместить в качестве потомка элемента `position: relative`
([режим без переноса](#non-wrapping-mode)).

Видимость наложения контролируется с помощью свойства `show`. По умолчанию оверлей _не_
отображается.

<div class="alert alert-info">
  <p class="mb-0">
    Обратите внимание, что этот компонент только <em>визуально скрывает</em> свое содержимое (или страницу). Смотрите
    <a href="#accessibility" class="alert-link">раздел специальных возможностей</a> ниже, чтобы получить дополнительные сведения о специальных возможностях и проблемы.
  </p>
</div>

**Пример режима переноса по умолчанию:**

```html
<template>
  <div>
    <b-overlay :show="show" rounded="sm">
      <b-card title="Карточка с наложением" :aria-hidden="show ? 'true' : null">
        <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
        <b-card-text>Нажмите кнопку, чтобы переключить наложение:</b-card-text>
        <b-button :disabled="show" variant="primary" @click="show = true">
          Показать наложение
        </b-button>
      </b-card>
    </b-overlay>
    <b-button class="mt-3" @click="show = !show">Переключить наложение</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<!-- b-overlay.vue -->
```

## Опции

Существует множество вариантов оформления оверлея и предоставления пользовательского содержимого
внутри оверлея.

### Цвет фона наложения

Вы можете управлять цветом фона фона через свойство `variant`. Вариант переводится в один из
[служебных классов фонового варианта Bootstrap](/docs/reference/color-variants#background-and-border-variants).
Управляйте непрозрачностью фона с помощью свойства `opacity` (значения непрозрачности могут
варьироваться от `0` до `1`). А размытие фона можно контролировать с помощью свойства `blur`.

```html
<template>
  <div>
    <b-row>
      <b-col lg="6" aria-controls="overlay-background">
        <b-form-group label="Variant" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-variant" v-model="variant" :options="variants"></b-form-select>
        </b-form-group>

        <b-form-group label="Opacity" label-for="bg-opacity" label-cols-sm="4" label-cols-lg="12">
          <b-input-group>
            <b-form-input
              id="bg-opacity"
              v-model="opacity"
              type="range"
              number
              min="0"
              max="1"
              step="0.01"
            ></b-form-input>
            <b-input-group-append is-text class="text-monospace">
              {{ opacity.toFixed(2) }}
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group label="Blur" label-for="bg-blur" label-cols-sm="4" label-cols-lg="12">
          <b-form-select id="bg-blur" v-model="blur" :options="blurs"></b-form-select>
        </b-form-group>
      </b-col>

      <b-col lg="6">
        <b-overlay
          id="overlay-background"
          show
          :variant="variant"
          :opacity="opacity"
          :blur="blur"
          rounded="sm"
        >
          <b-card title="Карточка с наложением" aria-hidden="true">
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </b-card-text>

            <b-button disabled variant="primary">Кнопка</b-button>
          </b-card>
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        variant: 'light',
        opacity: 0.85,
        blur: '2px',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ],
        blurs: [
          { text: 'Отсутствуют', value: '' },
          '1px',
          '2px',
          '5px',
          '0.5em',
          '1rem'
        ]
      }
    }
  }
</script>

<!-- b-overlay-background.vue -->
```

В качестве альтернативы свойству `variant` вы можете указать строковое значение цвета CSS через
свойство `bg-color`. Когда для `bg-color` указано значение, свойство `variant` игнорируется.

**Примечания:**

- Размытие фона недоступно в некоторых браузерах (например, IE 11).
- Размытие требует, чтобы уровень непрозрачности был относительно высоким, чтобы эффект был виден.

### Плавный переход

По умолчанию наложение использует плавный переход Bootstrap при отображении или скрытии. Вы можете
отключить переход затухания, добавив свойство `no-fade` в `<b-overlay>`.

### Стиль спиннера по умолчанию

Содержимое наложения по умолчанию — это [`<b-spinner>`](/docs/components/spinner) типа `'border'`.
Вы можете управлять внешним видом спиннера с помощью следующих свойств:

- `spinner-type`: В настоящее время поддерживаются значения `'border'` (по умолчанию) или `'grow'`.
- `spinner-variant`: Вариант цвета темы для спиннера. Значение по умолчанию — `null`, которое
  наследует текущий цвет шрифта.
- `spinner-small`: Установите значение `true` для рендеринга спиннера небольшого размера.

```html
<template>
  <div>
    <b-overlay
      show
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
      rounded="sm"
      style="max-width: 320px;"
    >
      <b-card title="Карта в стиле спиннера" aria-hidden="true">
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </b-card-text>
        <b-button disabled variant="primary">Кнопка</b-button>
      </b-card>
    </b-overlay>
  </div>
</template>

<!-- b-overlay-spinner-style.vue -->
```

### Скругление углов наложения

По умолчанию фон наложения имеет квадратные углы. Если содержимое, которое вы оборачиваете, имеет
закругленные углы, вы можете использовать свойство `rounded`, чтобы применить закругление к углам
наложения, чтобы оно соответствовало закругленным углам закрытого содержимого.

Возможные значения:

- `true` (или пустая строка `''`), чтобы применить округление по умолчанию (среднее)
- `false` (по умолчанию) не применяет округление к наложению фона
- `'sm'` для маленьких закругленных углов
- `'lg'` для больших закругленных углов
- `'pill'` для закругленных углов в стиле пилюли
- `'circle'` для круглого (или овального) закругления
- `'top'` для скругления только двух верхних углов
- `'bottom'` для скругления только двух нижних углов
- `'left'` для скругления только двух левых углов
- `'right'` для скругления только двух правых углов

```html
<template>
  <div>
    <b-button @click="show = !show">Переключить наложение</b-button>
    <b-row class="text-center mt-3">
      <b-col md="6">
        <p>С закруглением</p>
        <b-overlay :show="show" class="d-inline-block" rounded="circle">
          <b-img thumbnail rounded="circle" fluid src="https://picsum.photos/200/200/?image=54" alt="Изображение 1"></b-img>
        </b-overlay>
      </b-col>
      <b-col md="6">
        <p>Без закругления</p>
        <b-overlay :show="show" class="d-inline-block">
          <b-img thumbnail rounded="circle" fluid src="https://picsum.photos/200/200/?image=54" alt="Изображение 1"></b-img>
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>

<!-- b-overlay-rounded.vue -->
```

### Пользовательский оверлейный контент

Поместите пользовательский контент в оверлей (заменив спиннер по умолчанию) через опционально
ограниченный слот `overlay`.

```html
<template>
  <div>
    <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
      <b-card title="Карточка с пользовательским оверлейным содержимым" :aria-hidden="show ? 'true' : null">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        <b-card-text>Нажмите кнопку, чтобы переключить наложение:</b-card-text>
        <b-button ref="show" :disabled="show" variant="primary" @click="show = true">
          Показать наложение
        </b-button>
      </b-card>
      <template #overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Пожалуйста, подождите...</p>
          <b-button
            ref="cancel"
            variant="outline-danger"
            size="sm"
            aria-describedby="cancel-label"
            @click="show = false"
          >
            Отменить
          </b-button>
        </div>
      </template>
    </b-overlay>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      onShown() {
        // Сфокусируйте кнопку отмены, когда отображается наложение
        this.$refs.cancel.focus()
      },
      onHidden() {
        // Сфокусируйте кнопку показа, когда наложение удалено
        this.$refs.show.focus()
      }
    }
  }
</script>

<!-- b-overlay-overlay-slot.vue -->
```

Для слота `overlay` доступны следующие свойства области видимости:

| Свойство         | Описание                            |
| ---------------- | ----------------------------------- |
| `spinnerVariant` | Значение свойства `spinner-variant` |
| `spinnerType`    | Значение свойства `spinner-type`    |
| `spinnerSmall`   | Значение свойства `spinner-small`   |

При размещении интерактивного содержимого в оверлее следует сфокусировать контейнер
пользовательского содержимого или один из фокусируемых элементов управления в оверлейном содержимом
из соображений доступности. Вы можете прослушивать событие `'shown'` в `<b-overlay>`, чтобы узнать,
когда содержимое наложения доступно в документе.

### Центрирование содержимого наложения

По умолчанию содержимое наложения будет центрировано по горизонтали и вертикали в области наложения.
Чтобы отключить центрирование, установите свойство `no-center` в значение `true`.

В следующем примере мы установили свойство `no-center` и абсолютно разместили содержимое
пользовательского слота оверлея в правом верхнем углу.

```html
<template>
  <div>
    <b-overlay no-center show rounded="sm">
      <template #overlay>
        <b-icon
          icon="stopwatch"
          variant="info"
          scale="2"
          shift-v="8"
          shift-h="8"
          class="position-absolute"
          style="top: 0; right: 0"
        ></b-icon>
      </template>
      <b-card title="Карточка с наложением без центра" aria-hidden="true">
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </b-card-text>
        <b-button disabled variant="primary">Кнопка</b-button>
      </b-card>
    </b-overlay>
  </div>
</template>

<!-- b-overlay-no-center.vue -->
```

### Ширина

`<b-overlay>` по умолчанию имеет ширину `100%`. При обертывании встроенного элемента или встроенного
блока вам нужно будет добавить класс `d-inline-block` (например,
`<b-overlay class="d-inline-block">`).

Вы также можете использовать ширину [служебные классы](/docs/reference/utility-classes) или стили
CSS для управления шириной элемента-контейнера оверлея.

### Режим без обертки

По умолчанию `<b-overlay>` оборачивает содержимое слота по умолчанию. В некоторых случаях вы можете
захотеть скрыть родительский контейнер. Используйте свойство `no-wrap`, чтобы отключить рендеринг
упаковки (и игнорировать слот по умолчанию). Обратите внимание, что для этого требуется, чтобы
элемент-предок, который должен быть скрыт, имел относительное позиционирование (либо с помощью
служебного класса `'position-relative'`, либо с помощью стиля CSS `'position: relative;'`).

```html
<template>
  <div>
    <div class="position-relative p-4 bg-info">
      <p class="text-light font-weight-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <b-card title="Карточка с родительским оверлеем">
        <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
        <b-card-text>Нажмите кнопку, чтобы переключить наложение:</b-card-text>
        <b-button :disabled="show" variant="primary" @click="show = true">
          Показать наложение
        </b-button>
      </b-card>
      <p class="text-light font-weight-bold mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <b-overlay :show="show" no-wrap>
      </b-overlay>
    </div>
    <b-button class="mt-3" @click="show = !show">Переключить наложение</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<!-- b-overlay-nowrap.vue -->
```

Обратите внимание, что для некоторых стилей компонентов Bootstrap v4 определено относительное
позиционирование (например, карточки, столбцы и т. д.). Возможно, вам потребуется изменить
размещение `<b-overlay>` в вашей разметке.

Например, `<b-card>` имеет относительное позиционирование, поэтому вы можете поместить
`<b-overlay no-wrap>` как потомка `<b-card>`:

```html
<template>
  <div>
    <b-card header="Хедер карточки" footer="Футер карточки">
      <b-media>
        <template #aside>
          <b-img
            thumbnail
            rounded="circle"
            src="https://picsum.photos/72/72/?image=58"
            alt="Image"
          ></b-img>
        </template>
        <p class="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </b-media>
      <b-overlay :show="show" no-wrap></b-overlay>
    </b-card>
    <b-button @click="show = !show" class="mt-3">Переключить наложение</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>

<!-- b-overlay-card-relative.vue -->
```

В режиме `no-wrap`, `<b-overlay>` не будет устанавливать атрибут `aria-busy` для скрытого элемента.
Вы также можете использовать область `aria-live` в своем приложении, которая сообщает пользователям
программ чтения с экрана, что страница занята.

Обратитесь к [разделу «Специальные возможности»](#accessibility) ниже для получения дополнительной
информации и проблем.

#### Абсолютное и фиксированное позиционирование для `no-wrap`

В случаях, когда вы хотите скрыть все приложение или страницу, при использовании свойства `no-wrap`
вы можете переключиться на фиксированное позиционирование области просмотра, установив свойство
`fixed` на `<b-overlay>`. Обратите внимание, что это не отключает прокрутку страницы, и обратите
внимание, что любые интерактивные элементы на странице по-прежнему будут находиться в
последовательности вкладок документа.

Вам также может понадобиться настроить [z-индекс оверлея](#overlay-z-index), чтобы фон отображался
над всеми остальными элементами страницы. Используйте свойство `z-index`, чтобы переопределить
значение по умолчанию `z-index`.

Обратитесь к [разделу «Специальные возможности»](#accessibility) ниже для получения дополнительной
информации и проблем.

### Оверлей z-index

В некоторых случаях вам может потребоваться настроить `z-index`, используемый наложением (в
зависимости от позиционирования в DOM или скрытого содержимого). Просто установите свойство
`z-index` со значением, подходящим для вашего приложения или варианта использования. `z-index` по
умолчанию равен `10`.

## Доступность

Обратите внимание, что наложение является только визуальным. Вы **должны** отключить любые
интерактивные элементы (кнопки, ссылки и т. д.) при отображении оверлея, иначе скрытые элементы
по-прежнему будут доступны с помощью навигации с помощью клавиатуры (т. е. все еще будут находиться
в последовательности вкладок документа).

Если у вас есть какие-либо ссылки в скрытом контенте, мы рекомендуем использовать
[компонент `<b-link>`](/docs/components/link), так как он поддерживает состояние `disabled`, в
качестве нативных ссылок (`<a href="...">`) и `<router-link>` не поддерживают отключенное состояние.

Также рекомендуется добавить атрибут `aria-hidden="true"` или `aria-busy="true"` к скрытому
содержимому, когда оверлей виден. Просто будьте осторожны и не добавляйте `aria-hidden="true"` в
оболочку, содержащую компонент `<b-overlay>` (при использовании `no-wrap`), так как это скроет любой
интерактивный контент в `overlay` для пользователей программ чтения с экрана.

Если вы помещаете интерактивный контент в слот `overlay`, вы должны сфокусировать содержимое после
того, как будет сгенерировано событие `'shown'`. Вы можете использовать событие `hidden`, чтобы
инициировать возврат фокуса к элементу по мере необходимости, когда оверлей больше не виден.

При использовании режима упаковки (свойство `no-wrap` не установлено) оболочка будет иметь
установленный атрибут `aria-busy="true"`, чтобы пользователи программ чтения с экрана знали, что
упакованное содержимое занято или состояние загрузки. Когда установлено свойство `no-wrap`, атрибут
_не_ будет применяться.

При использовании свойства `no-wrap` и, возможно, свойства `fixed`, чтобы скрыть все приложение или
страницу, вы должны убедиться, что все интерактивные элементы страницы (кроме содержимого оверлея)
отключены и _не_ находятся в последовательность вкладок документа.

## Примеры использования

Вот лишь несколько примеров распространенных вариантов использования `<b-overlay>`. Во всех случаях
мы отключаем любые интерактивные элементы в скрытой области, чтобы предотвратить доступ к ним с
помощью навигации с помощью клавиатуры (например, клавиши <kbd>Tab</kbd>) или доступа к программе
чтения с экрана.

Пожалуйста, обратитесь к [разделу специальных возможностей](#accessibility) для получения
дополнительной информации и проблем.

### Кнопка загрузки

Легко создать кнопку загрузки:

```html
<template>
  <div>
    <b-overlay
      :show="busy"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block"
      @hidden="onHidden"
    >
      <b-button
        ref="button"
        :disabled="busy"
        variant="primary"
        @click="onClick"
      >
        Сделай что-нибудь
      </b-button>
    </b-overlay>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        busy: false,
        timeout: null
      }
    },
    beforeDestroy() {
      this.clearTimeout()
    },
    methods: {
      clearTimeout() {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }
      },
      setTimeout(callback) {
        this.clearTimeout()
        this.timeout = setTimeout(() => {
          this.clearTimeout()
          callback()
        }, 5000)
      },
      onHidden() {
        // Вернуть фокус скрытой кнопке
        this.$refs.button.focus()
      },
      onClick() {
        this.busy = true
        // Имитация асинхронного запроса
        this.setTimeout(() => {
          this.busy = false
        })
      }
    }
  }
</script>

<!-- b-overlay-example-loading-button.vue -->
```

### Группа ввода состояния занятости

В этом примере мы скрываем ввод и кнопку:

```html
<template>
  <div>
    <b-overlay :show="busy" rounded="lg" opacity="0.6" @hidden="onHidden">
      <template #overlay>
        <div class="d-flex align-items-center">
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          <b-spinner type="grow" variant="dark"></b-spinner>
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          <!-- Мы добавляем только текст SR для программ чтения с экрана -->
          <span class="sr-only">Пожалуйста, подождите...</span>
        </div>
      </template>
      <b-input-group size="lg" :aria-hidden="busy ? 'true' : null">
        <b-form-input v-model="value" :disabled="busy"></b-form-input>
        <b-input-group-append>
          <b-button ref="button" :disabled="busy" variant="primary"  @click="onClick">
            Сделай что-нибудь
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-overlay>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 'Некоторое значение',
        busy: false,
        timeout: null
      }
    },
    beforeDestroy() {
      this.clearTimeout()
    },
    methods: {
      clearTimeout() {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }
      },
      setTimeout(callback) {
        this.clearTimeout()
        this.timeout = setTimeout(() => {
          this.clearTimeout()
          callback()
        }, 5000)
      },
      onHidden() {
        // Вернуть фокус на кнопку
        this.$refs.button.focus()
      },
      onClick() {
        this.busy = true
        // Имитация асинхронного запроса
        this.setTimeout(() => {
          this.busy = false
        })
      }
    }
  }
</script>

<!-- b-overlay-example-input-group.vue -->
```

### Запрос подтверждения формы и статус загрузки

Этот пример немного сложнее, но показывает использование `no-wrap` и использование слота `overlay`
для представления пользователю диалогового окна с подсказкой, и после подтверждения он показывает
индикатор состояния загрузки. В этом примере также демонстрируется дополнительная разметка
специальных возможностей.

```html
<template>
  <div>
    <b-form class="position-relative p-3" @submit.prevent="onSubmit">
      <b-form-group label="Имя" label-for="form-name" label-cols-lg="2">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="form-name" :disabled="busy"></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group label="Эл. Почта" label-for="form-mail" label-cols-lg="2">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="envelope-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="form-email" type="email" :disabled="busy"></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group label="Изображение" label-for="form-image" label-cols-lg="2">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="image-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-file id="form-image" :disabled="busy" accept="image/*"></b-form-file>
        </b-input-group>
      </b-form-group>

      <div class="d-flex justify-content-center">
         <b-button ref="submit" type="submit" :disabled="busy">Отправить</b-button>
      </div>

      <b-overlay :show="busy" no-wrap @shown="onShown" @hidden="onHidden">
        <template #overlay>
          <div v-if="processing" class="text-center p-4 bg-primary text-light rounded">
            <b-icon icon="cloud-upload" font-scale="4"></b-icon>
            <div class="mb-3">Обработка...</div>
            <b-progress
              min="1"
              max="20"
              :value="counter"
              variant="success"
              height="3px"
              class="mx-n4 rounded-0"
            ></b-progress>
          </div>
          <div
            v-else
            ref="dialog"
            tabindex="-1"
            role="dialog"
            aria-modal="false"
            aria-labelledby="form-confirm-label"
            class="text-center p-3"
          >
            <p><strong id="form-confirm-label">Ты уверен?</strong></p>
            <div class="d-flex">
              <b-button variant="outline-danger" class="mr-3" @click="onCancel">
                Отменить
              </b-button>
              <b-button variant="outline-success" @click="onOK">Хорошо</b-button>
            </div>
          </div>
        </template>
      </b-overlay>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        busy: false,
        processing: false,
        counter: 1,
        interval: null
      }
    },
    beforeDestroy() {
      this.clearInterval()
    },
    methods: {
      clearInterval() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
      onShown() {
        // Сфокусируйте диалоговое окно
        this.$refs.dialog.focus()
      },
      onHidden() {
        // В этом случае мы возвращаем фокус на кнопку отправки
        // Возможно, вам придется изменить это в зависимости от требований вашего приложения
        this.$refs.submit.focus()
      },
      onSubmit() {
        this.processing = false
        this.busy = true
      },
      onCancel() {
        this.busy = false
      },
      onOK() {
        this.counter = 1
        this.processing = true
        // Имитация асинхронного запроса
        this.clearInterval()
        this.interval = setInterval(() => {
          if (this.counter < 20) {
            this.counter = this.counter + 1
          } else {
            this.clearInterval()
            this.$nextTick(() => {
              this.busy = this.processing = false
            })
          }
        }, 350)
      }
    }
  }
</script>

<!-- b-overlay-example-form.vue -->
```

### Использование в `<b-modal>`

В теле модального окна задано `position: relative;`, поэтому при использовании
`<b-overlay no-wrap ...>` в теле модального окна будет скрыто только само тело модального окна. Если
вы хотите скрыть все модальное окно (включая верхний и нижний колонтитулы), вам нужно будет
установить свойство `body-class` на `position-static` в `<b-modal>`, а также установить свойство
`rounded` в `<b-overlay>`.
