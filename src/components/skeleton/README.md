# Скелет

> `<b-skeleton>` — это настраиваемый компонент BootstrapVue, который позволяет отображать состояние
> загрузки для нескольких типов компонентов во время выборки или вычисления данных.

**Пример: Простое использование**

```html
<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
        <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
      </b-progress>

      <b-button class="ml-3" @click="startLoading()">Перезагрузить</b-button>
    </div>

    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>

      <b-card>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
        non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
        massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
        sit amet sollicitudin neque sodales in.
      </b-card>
    </b-skeleton-wrapper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 3
      }
    },
    watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    }
  }
</script>

<!-- b-skeleton.vue -->
```

## Типы

`<b-skeleton>` поддерживает различные базовые типы для представления различных компонентов в вашем
проекте.

```html
<h5>Text (default)</h5>
<b-skeleton></b-skeleton>

<h5 class="mt-3">Аватар</h5>
<b-skeleton type="avatar"></b-skeleton>

<h5 class="mt-3">Ввод</h5>
<b-skeleton type="input"></b-skeleton>

<h5 class="mt-3">Кнопка</h5>
<b-skeleton type="button"></b-skeleton>

<!-- b-skeleton-types.vue -->
```

## Анимация скелета

`<b-skeleton>` поддерживает различные анимации. Вы можете установить их для каждого компонента или
изменить глобально в [настройках](/docs/reference/settings).

```html
<h5>Wave (по умолчанию)</h5>
<b-card>
  <b-skeleton animation="wave" width="85%"></b-skeleton>
  <b-skeleton animation="wave" width="55%"></b-skeleton>
  <b-skeleton animation="wave" width="70%"></b-skeleton>
</b-card>

<h5 class="mt-3">Fade</h5>
<b-card>
  <b-skeleton animation="fade" width="85%"></b-skeleton>
  <b-skeleton animation="fade" width="55%"></b-skeleton>
  <b-skeleton animation="fade" width="70%"></b-skeleton>
</b-card>

<h5 class="mt-3">Throb</h5>
<b-card>
  <b-skeleton animation="throb" width="85%"></b-skeleton>
  <b-skeleton animation="throb" width="55%"></b-skeleton>
  <b-skeleton animation="throb" width="70%"></b-skeleton>
</b-card>

<h5 class="mt-3">Ничего</h5>
<b-card>
  <b-skeleton animation width="85%"></b-skeleton>
  <b-skeleton animation width="55%"></b-skeleton>
  <b-skeleton animation width="70%"></b-skeleton>
</b-card>

<!-- b-skeleton-animations.vue -->
```

## Вспомогательные компоненты

Используйте вспомогательные компоненты `<b-skeleton>` для быстрого создания шаблонов существующих
компонентов.

### Таблица

`<b-skeleton-table>` позволяет вам создавать базовую структуру таблицы, используя свойства `rows` и
`columns` для определения размера таблицы. Вы можете передавать свойства непосредственно в таблицу
через свойство `table-props`, которое поддерживает те же свойства, что и `<b-table-simple>`. Полный
список смотрите в `<b-table-simple>` [документации](/docs/components/table#comp-ref-b-table-simple).

```html
<b-skeleton-table
  :rows="5"
  :columns="4"
  :table-props="{ bordered: true, striped: true }"
></b-skeleton-table>

<!-- b-skeleton-helper-table.vue -->
```

### Изображение

Используйте `<b-skeleton-img>` для представления изображений. По умолчанию используется соотношение
сторон 16:9 для адаптивного размера. Вы можете перезаписать это, применив `no-aspect` и используя
свойства `height` и `width`, чтобы установить свой собственный размер.

```html
<b-row>
  <b-col>
    <b-skeleton-img></b-skeleton-img>
  </b-col>
  <b-col>
    <b-skeleton-img></b-skeleton-img>
  </b-col>
  <b-col cols="12" class="mt-3">
    <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
  </b-col>
</b-row>

<!-- b-skeleton-helper-img.vue -->
```

#### Изображение карточки

Используйте `<b-skeleton-img>` для представления изображений в `<b-card>`. Не забудьте установить
свойство `card-img` в положение изображения. Это применит правильный радиус границы.

```html
<b-row>
  <b-col cols="12" md="6">
    <h5>Image top</h5>
    <b-card no-body img-top>
      <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
      <b-card-body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
        non rhoncus elit tincidunt vitae.
      </b-card-body>
    </b-card>
  </b-col>
  <b-col cols="12" md="6">
    <h5>Image bottom</h5>
    <b-card no-body img-bottom>
      <b-card-body>
        Vestibulum maximus, ligula eu feugiat molestie, massa diam imperdiet odio, vitae viverra
        ligula est id nisi. Aliquam ut molestie est.
      </b-card-body>
      <b-skeleton-img card-img="bottom" aspect="3:1"></b-skeleton-img>
    </b-card>
  </b-col>
</b-row>

<b-row class="mt-md-3">
  <b-col cols="12" md="6">
    <h5>Image left</h5>
    <b-card no-body img-left>
      <b-skeleton-img card-img="left" width="225px"></b-skeleton-img>
      <b-card-body>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Phasellus at consequat dui.
      </b-card-body>
    </b-card>
  </b-col>
  <b-col cols="12" md="6">
    <h5>Image right</h5>
    <b-card no-body img-right>
      <b-skeleton-img card-img="right" width="225px"></b-skeleton-img>
      <b-card-body>
        Aenean tristique sagittis quam, sit amet sollicitudin neque sodales in.
      </b-card-body>
    </b-card>
  </b-col>
</b-row>

<!-- b-skeleton-helper-card-img.vue -->
```

## Иконки

`<b-skeleton-icon>` также можно использовать в качестве заполнителя для иконок. Если вам нужно
использовать какие-либо свойства иконок, вы можете передать их через свойство `icon-props`.

```html
<b-skeleton-icon
  icon="person"
  :icon-props="{ fontScale: 2 }"
></b-skeleton-icon>

<b-skeleton-icon
  icon="person-fill"
  :icon-props="{ fontScale: 2, variant: 'dark' }"
></b-skeleton-icon>

<!-- b-skeleton-helper-card-icon.vue -->
```

**Примечание:** Анимация `throb` не работает с `b-skeleton-icon`.

## Стилизация и персонализация

Компонент `<b-skeleton>` и вспомогательные компоненты используют переменные Bootstrap SCSS,
насколько это возможно, чтобы наилучшим образом соответствовать стилю и размеру собственных
компонентов. Это означает, что если вы настроили Bootstrap SCSS, компоненты скелета должны
адаптироваться к вашей пользовательской теме.

Мы также предоставили несколько пользовательских переменных SCSS, которые можно использовать для
дальнейшей настройки стиля различных компонентов `<b-skeleton>`. Вы можете узнать больше о том, как
изменить эти переменные, в [разделе тем](/docs/reference/theming#bootstrapvue-sass-variables).
