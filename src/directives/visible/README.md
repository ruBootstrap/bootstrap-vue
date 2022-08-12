# Видимость

> `v-b-visible` — это упрощенная директива, которая позволяет вам реагировать, когда элемент
> становится видимым в области просмотра и/или когда он выходит из области просмотра (или больше не
> виден).

## Обзор

- `v-b-visible` вызовет ваш метод обратного вызова с логическим значением, указывающим, является ли
  элемент видимым (пересекающимся с окном просмотра) или нет.
- Директиву можно разместить практически на любом элементе или компоненте.
- Изменения в видимости также могут быть обнаружены (например, `display: none`), если элемент
  находится внутри (или частично) области просмотра или в пределах необязательного смещения.
  Примечание: переход в невидимое состояние из-за `v-if="false"` _не может_ быть обнаружен.
- Внутри BootstrapVue использует эту директиву в нескольких компонентах, таких как `<b-img-lazy>`.
- Директива `v-b-visible` требует поддержки браузера
  [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
  Для старых браузеров, которые не поддерживают `IntersectionObserver`, вам нужно будет использовать
  [polyfill](/docs/#js).
- Если поддержка `IntersectionObserver` не обнаружена, тогда `v-b-visible` будет считать, что
  элемент _всегда виден_, и вызовет обратный вызов один раз с аргументом, установленным в `true`.

## Синтаксис и использование директив

```html
<div v-b-visible.[mod1].[mod2]="callback">контент</div>
```

Где требуется `callback`:

- Ссылка на функцию, которая будет вызываться при изменении видимости. Обратному вызову передается
  один логический аргумент. `true` указывает, что элемент пересекается (частично или полностью
  виден) в окне просмотра, или `false`, если элемент не виден/пересекается с окном просмотра.
  Обратный вызов будет вызываться каждый раз, когда изменяется видимость элемента (за исключением
  случаев, когда используется модификатор `once`. Подробнее смотрите ниже)

Где `[mod1]` или `[mod2]` могут быть (все необязательные):

- Положительное целое число, представляющее смещение (поле) в пикселях _в стороне_ от края
  _просмотра_ для определения того, когда элемент рассматривается (или почти находится) в окне
  просмотра. Значение добавляет поле вокруг области просмотра. Значение по умолчанию — `0`.
- Ключевое слово `once`. Когда этот модификатор присутствует, обратный вызов будет вызываться только
  один раз, когда элемент становится видимым в первый раз (с аргументом `true`, указывающим, что
  элемент пересекается/видим). Обратите внимание, что обратный вызов _может_ быть вызван до этого с
  аргументом `false`, означающим, что элемент не пересекается/не виден.

Порядок модификаторов не важен.

### Примеры использования синтаксиса

Во всех случаях использования требуется функция обратного вызова.

#### Базовый (без модификаторов)

```html
<template>
  <div v-b-visible="visibleHandler"> ... </div>
</template>
<script>
export default {
  methods: {
    visibleHandler(isVisible) {
      if (isVisible) {
        // Do something
      } else {
        // Do something else
      }
    }
  }
}
</script>
```

#### С модификатором смещения окна просмотра

В этом примере значение модификатора составляет 350 пикселей (если элемент находится за пределами
физического окна просмотра не менее чем на 350 пикселей, то он будет считаться "visible"):

```html
<template>
  <div v-b-visible.350="visibleHandler"> ... </div>
</template>
<script>
export default {
  methods: {
    visibleHandler(isVisible) {
      if (isVisible) {
        // Do something
      } else {
        // Do something else
      }
    }
  }
}
</script>
```

#### С модификатором `once`

```html
<template>
  <div v-b-visible.once="visibleHandler"> ... </div>
</template>
<script>
export default {
  methods: {
    visibleHandler(isVisible) {
      if (isVisible) {
        // This will only ever happen once, when the
        // element has become visible for the first time
      } else {
        // This may happen zero or more times before
        // the element becomes visible, but will never
        // happen after the element has become visible
      }
    }
  }
}
</script>
```

#### С модификаторами `once` и `offset`

```html
<template>
  <div v-b-visible.once.350="visibleHandler"> ... </div>
</template>
<script>
export default {
  methods: {
    visibleHandler(isVisible) {
      if (isVisible) {
        // This will only ever happen once, when the
        // element is outside of the physical viewport
        // by at least 350px for the first time
      } else {
        // This may happen zero or more times before
        // the element becomes visible, but will never
        // happen after the element has become visible
      }
    }
  }
}
</script>
```

## Живые примеры

Вот два живых примера, демонстрирующих два распространенных варианта использования.

### Видимость прокручиваемого контента

Прокрутите контейнер, чтобы увидеть реакцию, когда `<b-badge>` появится в поле зрения. Обратите
внимание, что состояние видимости также изменится, если элемент прокручивается за пределы области
просмотра.

```html
<template>
  <div>
    <div
      :class="[isVisible ? 'bg-info' : 'bg-light', 'border', 'p-2', 'text-center']"
      style="height: 85px; overflow-y: scroll;"
    >
      <p>{{ text }}</p>
      <b-badge v-b-visible="handleVisibility">Element with v-b-visible directive</b-badge>
      <p>{{ text }}</p>
    </div>
    <p class="mt-2">
      Visible: {{ isVisible }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isVisible: false,
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur commodo
          non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum
          commodo tempor sunt in proident. Non elixir food exorcism nacho tequila tasty.
        `
      }
    },
    methods: {
      handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    }
  }
</script>

<!-- v-b-visible-scroll.vue -->
```

Один из вариантов использования для этого, в сочетании с модификатором `once`, состоит в том, чтобы
увидеть, прокручивал ли пользователь страницу или прокручиваемый элемент div до конца (т. е. "read"
все условия обслуживания).

### Определение видимости отображения CSS

Нажмите кнопку, чтобы изменить состояние видимости `<div>`. Обратите внимание, что состояние
видимости также изменится, если элемент прокручивается за пределы области просмотра.

```html
<template>
  <div>
    <b-button @click="show = !show" class="mb-2">Toggle display</b-button>
    <p>Visible: {{ isVisible }}</p>
    <div class="border p-3" style="height: 6em;">
      <!-- We use Vue's `v-show` directive to control the CSS `display` of the div -->
      <div v-show="show" class="bg-info p-3">
        <b-badge v-b-visible="handleVisibility">Element with v-b-visible directive</b-badge>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        isVisible: false
      }
    },
    methods: {
      handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    }
  }
</script>

<!-- v-b-visible-display.vue -->
```

## Смотрите также

Дополнительные сведения об IntersectionObserver см. в
[документации MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
