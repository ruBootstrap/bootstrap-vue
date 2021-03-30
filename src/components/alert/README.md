# Уведомление

> Предоставляйте контекстные сообщения обратной связи для типичных действий пользователя с помощью нескольких доступных и гибких предупреждающих сообщений.

## Обзор

Уведомления доступны для текста любой длины, а также для дополнительной кнопки закрытия (и для дополнительного автоматического закрытия).

```html
<template>
  <div>
    <b-alert show>Уведомление по умолчанию</b-alert>

    <b-alert variant="success" show>Уведомление об успехе</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Отклоняемое уведомление!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Это уведомление будет закрыто через {{ dismissCountDown }} секунд...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Показать уведомление с таймером обратного отсчета
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Показать закрываемое уведомление ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

<!-- b-alert.vue -->
```

## Видимое состояние

Используйте опцию `show` для управления состоянием видимости уведомления. По умолчанию оповещения **не** отображаются. Установите свойство `show` для их явного отображения.

Свойство `show` принимает логические значения `true` или `false`, чтобы отображать и скрывать уведомление соответственно. Он также может быть установлен в положительное целое число (представляющее секунды), чтобы создать самоотключение уведомления. Смотрите подробности в разделе [Автоматическое отклонение уведомлений](#auto-dismissing-alerts) ниже.

### Поддержка `v-model`

Вы можете использовать директиву `v-model` для создания двусторонних привязок данных в свойстве `show`, как в `v-model="showDismissibleAlert"` выше. Полезно, когда Вы используете отключение, потому что, когда пользователь закрывает уведомление, Ваша переменная будет обновлена. Не используйте свойство `show` при использовании `v-model`.

## Контекстные варианты

Для правильного оформления `<b-alert>`, используйте один из четырех требуемых контекстных вариантов, установив для свойства `variant` одно из следующих значений: `info`, `success`, `warning` или `danger`. По умолчанию это `info`.

```html
<div>
  <b-alert show variant="primary">Первичное Уведомление</b-alert>
  <b-alert show variant="secondary">Вторичное Уведомление</b-alert>
  <b-alert show variant="success">Уведомление об успехе</b-alert>
  <b-alert show variant="danger">Уведомление об опасности</b-alert>
  <b-alert show variant="warning">Уведомление с предупреждением</b-alert>
  <b-alert show variant="info">Информационное Уведомление</b-alert>
  <b-alert show variant="light">Светлое Уведомление</b-alert>
  <b-alert show variant="dark">Темное Уведомление</b-alert>
</div>

<!-- b-alert-variants.vue -->
```

### Передача смысла вспомогательным технологиям

Использование цветовых вариантов для добавления смысла обеспечивает только визуальную индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана. Убедитесь, что информация, обозначенная цветом, либо очевидна из самого содержимого (например, видимый текст), либо включена с помощью альтернативных средств, таких как дополнительный текст, скрытый с помощью класса `.sr-only`.

## Дополнительный контент внутри уведомлений

`<b-alerts>` также может содержать дополнительные элементы HTML, такие как заголовки и абзацы, которые будут окрашены в соответствующий цвет, соответствующий варианту.

```html
<div>
  <b-alert show variant="success">
    <h4 class="alert-heading">Хорошо сделано!</h4>
    <p>
      О да, Вы успешно прочитали это важное уведомляющее сообщение. Этот пример текста будет длиться немного дольше, чтобы Вы могли увидеть, как интервалы в уведомлении работают с этим типом контента.
    </p>
    <hr>
    <p class="mb-0">
      Когда Вам нужно, обязательно используйте утилиты маржи, чтобы все было в порядке и порядке.
    </p>
  </b-alert>
</div>

<!-- b-alert-content.vue -->
```

### Цвет ссылок в предупреждениях

Используйте утилиту CSS класса `.alert-link`, чтобы быстро предоставлять соответствующие цветные ссылки в любом уведомлении. Используйте на `<a>` или `<b-link>`.

```html
<div>
  <b-alert show variant="primary"><a href="#" class="alert-link">Первичное Уведомление</a></b-alert>
  <b-alert show variant="secondary"><a href="#" class="alert-link">Вторичное Уведомление</a></b-alert>
  <b-alert show variant="success"><a href="#" class="alert-link">Уведомление об успехе</a></b-alert>
  <b-alert show variant="danger"><a href="#" class="alert-link">Уведомление об опасности</a></b-alert>
  <b-alert show variant="warning"><a href="#" class="alert-link">Уведомление с предупреждением</a></b-alert>
  <b-alert show variant="info"><a href="#" class="alert-link">Информационное Уведомление</a></b-alert>
  <b-alert show variant="light"><a href="#" class="alert-link">Светлое Уведомление</a></b-alert>
  <b-alert show variant="dark"><a href="#" class="alert-link">Темное Уведомление</a></b-alert>
</div>

<!-- b-alert-links.vue -->
```

## Отклоняемые оповещения

Используя свойство `dismissible`, можно отклонить любой встроенный `<b-alert>`. Это добавит кнопку закрытия `X`. Используйте опцию `dismiss-label`, чтобы изменить текст скрытой метки, связанный с кнопкой отклонения.

```html
<div>
  <b-alert show dismissible>
    Отклоняемое уведомление! Нажмите там кнопку закрытия <b>&rArr;</b>
  </b-alert>
</div>

<!-- b-alert-dismiss.vue -->
```

### Автоматически отклоняемые уведомления

Чтобы создать `<b-alert>`, который автоматически закрывается по прошествии определенного периода времени, установите свойство `show` (или `v-model`) на количество секунд, в течение которого Вы хотите, чтобы `<b-alert>` оставался видимым. Поддерживается только целое число секунд.

```html
<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Это уведомление будет закрыто через {{ dismissCountDown }} секунд...
    </b-alert>
    <b-button @click="showAlert" variant="info" class="m-1">
      Показать уведомление с таймером обратного отсчета
    </b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

<!-- b-alert-auto-dismissing.vue -->
```

## Затухающие уведомления

Используйте свойство `fade`, чтобы включить анимацию. По умолчанию уведомления не анимированы.

```html
<template>
  <div>
    <b-alert show dismissible fade>Отклоняемое уведомление!</b-alert>

    <b-alert
      variant="danger"
      dismissible
      fade
      :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert=false"
    >
      Отклоняемое уведомление!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      @dismiss-count-down="countDownChanged"
    >
      Это уведомление будет закрыто через {{ dismissCountDown }} секунд...
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Показать уведомление с таймером обратного отсчета
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Показать отклоняемое уведомление ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

<!-- b-alert-fade.vue -->
```

<!-- Component reference added automatically from component package.json -->
