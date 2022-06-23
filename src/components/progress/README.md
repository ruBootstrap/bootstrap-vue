# Прогресс

> Используйте наш настраиваемый компонент прогресса для отображения простых или сложных индикаторов
> выполнения с поддержкой горизонтальных полос, анимированных фонов и текстовых меток.

```html
<template>
  <div>
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
    <b-progress class="mt-2" :max="max" show-value>
      <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
      <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
      <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
    </b-progress>

    <b-button class="mt-3" @click="randomValue">Нажми на меня</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 45,
        max: 100
      }
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max
      }
    }
  }
</script>

<!-- b-progress.vue -->
```

## Значение

Установите максимальное значение с помощью свойства `max` (по умолчанию `100`) и текущее значение с
помощью свойства `value` (по умолчанию `0`).

При создании нескольких баров в одном процессе поместите свойство `value` в отдельные подкомпоненты
`<b-progress-bar>` (подробнее смотрите в разделе **МультиБары** ниже)

## Метки

Добавьте метки к своим индикаторам выполнения, включив `show-progress` (процент от максимума) или
`show-value` для текущего абсолютного значения. Вы также можете установить точность (количество цифр
после запятой) с помощью свойства `precision` (по умолчанию `0` цифр после запятой).

```html
<template>
  <div>
    <h5>Без метки</h5>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>

    <h5>Метка значения</h5>
    <b-progress :value="value" :max="max" show-value class="mb-3"></b-progress>

    <h5>Метка прогресса</h5>
    <b-progress :value="value" :max="max" show-progress class="mb-3"></b-progress>

    <h5>Метка значения с точностью</h5>
    <b-progress :value="value" :max="max" :precision="2" show-value class="mb-3"></b-progress>

    <h5>Метка прогресса с точностью</h5>
    <b-progress :value="value" :max="max" :precision="2" show-progress class="mb-3"></b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 33.333333333,
        max: 50
      }
    }
  }
</script>

<!-- b-progress-labels.vue -->
```

### Пользовательская метка прогресса

Нужен больший контроль над этикеткой? Укажите свою собственную метку, используя слот по умолчанию в
подкомпоненте `<b-progress-bar>` или используя свойство `label` или `label-html` в
`<b-progress-bar>`:

```html
<template>
  <div>
    <h5>Пользовательская метка через слот по умолчанию</h5>
    <b-progress :max="max" height="2rem">
      <b-progress-bar :value="value">
        <span>Прогресс: <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span>
      </b-progress-bar>
    </b-progress>

    <h5 class="mt-3">Пользовательская метка через свойство</h5>
    <b-progress :max="max">
      <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
    </b-progress>

    <h5 class="mt-3">Пользовательская метка через свойство (поддержка HTML)</h5>
    <b-progress :max="max">
      <b-progress-bar :value="value" :label-html="`<del>${value}</del>`"></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 33.333333333,
        max: 50
      }
    }
  }
</script>

<!-- b-progress-custom-labels.vue -->
```

Порядок приоритета для методов меток (самый верхний имеет приоритет):

- слот по умолчанию `<b-progress-bar>`
- `label` свойство от `<b-progress-bar>`
- `show-progress` свойство от `<b-progress-bar>`
- `show-value` свойство от `<b-progress-bar>`
- `show-progress` свойство от `<b-progress>`
- `show-value` свойство от `<b-progress>`
- без метки

## Ширина и высота

`<b-progress>` всегда будет расширяться до максимума своего родительского контейнера. Чтобы изменить
ширину, поместите `<b-progress>` в стандартный столбец Bootstrap или примените один из стандартных
классов ширины Bootstrap.

```html
<template>
  <div>
    <h5>Ширина по умолчанию</h5>
    <b-progress :value="value" class="mb-3"></b-progress>

    <h5>Настраиваемая ширина</h5>
    <b-progress :value="value" class="w-75 mb-2"></b-progress>
    <b-progress :value="value" class="w-50 mb-2"></b-progress>
    <b-progress :value="value" class="w-25"></b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 75
      }
    }
  }
</script>

<!-- b-progress-width.vue -->
```

Высоту индикатора выполнения можно контролировать с помощью свойства `height`. Значение высоты
должно быть стандартным размером CSS (`px`, `rem`, `em`, и т. д.). Высота по умолчанию `1rem`.

```html
<template>
  <div>
    <h5>Высота по умолчанию</h5>
    <b-progress :value="value" show-progress class="mb-3"></b-progress>

    <h5>Настраиваемая высота</h5>
    <b-progress height="2rem" :value="value" show-progress class="mb-2"></b-progress>
    <b-progress height="20px" :value="value" show-progress class="mb-2"></b-progress>
    <b-progress height="2px" :value="value"></b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 75
      }
    }
  }
</script>

<!-- b-progress-height.vue -->
```

## Фоны

Используйте варианты фона, чтобы изменить внешний вид отдельных индикаторов выполнения. Вариант по
умолчанию — `primary`.

### Варианты сплошного фона

```html
<template>
  <div>
    <div v-for="bar in bars" class="row mb-1">
      <div class="col-sm-2">{{ bar.variant }}:</div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bars: [
          { variant: 'success', value: 75 },
          { variant: 'info', value: 75 },
          { variant: 'warning', value: 75 },
          { variant: 'danger', value: 75 },
          { variant: 'primary', value: 75 },
          { variant: 'secondary', value: 75 },
          { variant: 'dark', value: 75 }
        ],
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))
      }, 2000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>

<!-- b-progress-backgrounds.vue -->
```

### Полосатые фоны

Установите `striped`, чтобы применить полосу с помощью градиента CSS поверх варианта фона индикатора
выполнения.

```html
<template>
  <div>
    <b-progress :value="25" variant="success" :striped="striped"></b-progress>
    <b-progress :value="50" variant="info" :striped="striped" class="mt-2"></b-progress>
    <b-progress :value="75" variant="warning" :striped="striped" class="mt-2"></b-progress>
    <b-progress :value="100" variant="danger" :striped="striped" class="mt-2"></b-progress>

    <b-button variant="secondary" @click="striped = !striped" class="mt-3">
      {{ striped ? 'Удалить' : 'Добавить' }} Полоски
    </b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        striped: true
      }
    }
  }
</script>

<!-- b-progress-striped.vue -->
```

### Анимированные фоны

Полосатый градиент также можно анимировать, установив свойство `animated`.

```html
<template>
  <div>
    <b-progress :value="25" variant="success" striped :animated="animate"></b-progress>
    <b-progress :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-2"></b-progress>
    <b-progress :value="100" variant="danger" :animated="animate" class="mt-3"></b-progress>

    <b-button variant="secondary" @click="animate = !animate" class="mt-3">
      {{ animate ? 'Остановить' : 'Запустить' }} Анимацию
    </b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        animate: true
      }
    }
  }
</script>

<!-- b-progress-animated.vue -->
```

Заметки:

- Если для `animated` установлено значение `true`, `striped` будет автоматически включен.
- Анимированные индикаторы выполнения не работают в Opera 12, так как они не поддерживают анимацию
  CSS3.
- Эффект анимации этого компонента зависит от медиа-запроса `prefers-reduced-motion`. Дополнительную
  информацию смотрите в
  [разделе с уменьшенным движением в нашей документации по специальным возможностям](/docs/reference/accessibility).

## Мульти Бары

Включите несколько подкомпонентов `<b-progress-bar>` в компонент `<b-progress>`, чтобы создать набор
индикаторов выполнения, расположенных горизонтально.

```html
<template>
  <div>
    <b-progress :max="max" class="mb-3">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress show-progress :max="max" class="mb-3">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress show-value striped :max="max" class="mb-3">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress :max="max">
      <b-progress-bar variant="primary" :value="values[0]" show-progress></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]" animated show-progress></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]" striped show-progress></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        values: [15, 30, 20],
        max: 100
      }
    }
  }
</script>

<!-- b-progress-multiple.vue -->
```

`<b-progress-bar>` унаследует большинство свойств от родительского компонента `<b-progress>`, но вы
можете переопределить любой из свойств, установив их на `<b-progress-bar>`

Заметки:

- `height`, если он указан, всегда должен устанавливаться для компонента `<b-progress>`.
- `<b-progress-bar>` не будет наследовать `value` от `<b-progress>`.

<!-- Component reference added automatically from component package.json -->
