# Начало

> Начните работу с BootstrapVue, основанным на самой популярной в мире платформе - Bootstrap
> v{{ bootstrapVersionMajor }}, для создания адаптивных, ориентированных на мобильные устройства сайтов с использованием Vue.js.

- [Vue.js](https://vuejs.org/) `v{{ vueVersionMinor }}` обязательно, `v{{ vueVersion }}` рекомендуется
- [Bootstrap](https://getbootstrap.com/) `v4.3.1` обязательно, `v{{ bootstrapVersion }}` рекомендуется
- [Popper.js](https://popper.js.org/) `v{{ popperVersionMinor }}` обязательно для раскрывающихся списков
  (и компонентов на основе раскрывающихся списков), всплывающих подсказок и всплывающих окон. `v{{ popperVersion }}` рекомендуется
- [PortalVue](https://portal-vue.linusb.org/) `v{{ portalVueVersionMinor }}` обязательно by
  [Toasts](/docs/components/toast), `v{{ portalVueVersion }}` рекомендуется
- [jQuery](https://jquery.com/) **не** обязательно

Узнайте, что нового в [релизе BootstrapVue v{{ version }}](/docs/reference/changelog).

Если вы переходите с предыдущей версии `v2.0.0-rc.##`, смотрите
[руководство по миграции `v2.0.0`](/docs/reference/changelog#v200).

## Разделы документации

Электронная документация включает:

- [Компоненты](/docs/components) - Документация по компонентам и плагинам компонентов
- [Директивы](/docs/directives) - Директивы и документация плагина директив
- [Иконки](/docs/icons) - Иконки и документация плагина иконок <b-badge>v2.2.0+</b-badge>
- [Справочник](/docs/reference) - Справочная информация и документация
- [Плейграунд](/play) - Интерактивная онлайн площадка
- [Темы](/themes) - Темы и информационные панели

## Предпосылки

В этой документации BootstrapVue предполагается, что Вы знакомы с Vue и Bootstrap
v{{ bootstrapVersionMajor }} CSS. Хорошие отправные точки для этого:

- [Руководство по Vue](https://vuejs.org/v2/guide/)
- [Vue API](https://vuejs.org/v2/api/)
- [Документация Bootstrap v{{bootstrapVersionMinor}}](https://v4.getbootstrap.su/)
- [Vue область загрузки CSS](https://vue-loader.vuejs.org/guide/scoped-css.html), при использовании стилей с областью видимости в файлах SFC (однофайловый компонент) `.vue`

## Информация о документации

Во многих примерах, показанных в документации BootstrapVue, Вы можете увидеть использование CSS-классы такие как <code class="text-nowrap">ml-2</code>, <code class="text-nowrap">py-1</code> и т. д. Это классы утилиты Bootstrap v{{bootstrapVersionMinor}}, которые помогают управлять заполнением, полями, позиционированием и т. д. Вы можете найти информацию об этих классах в справочном разделе по [Утилитам классов](/docs/reference/utility-classes).

Многие из примеров в этой документации являются _действующими_ и могут быть отредактированы на месте для улучшения процесса обучения (обратите внимание, что некоторые примеры могут не работать в IE 11 из-за использования кода ES6 JavaScript в разделах `<template>`).

BootstrapVue также предоставляет [интерактивную площадку](/play), где Вы можете экспериментировать с различными компонентами и экспортировать результаты в JSFiddle, CodePen и/или CodeSandbox.

## Важные глобальные HTML

Bootstrap v{{bootstrapVersionMajor}} CSS использует несколько важных глобальных стилей и настроек, о которых Вам нужно знать при его использовании. Все они почти исключительно направлены на нормализацию кроссбраузерных стилей. См. Подробности в следующих подразделах.

### Доктайп HTML5

Bootstrap требует использования типа документа `HTML5`. Без него Вы можете увидеть какое-то странное незавершенное оформление.

```html
<!doctype html>
<html lang="ru">
  ...
</html>
```

### Адаптивный метатег

Bootstrap сначала оптимизируется для мобильных устройств, а затем масштабирует компоненты по мере необходимости с помощью медиа-запросов CSS. Чтобы обеспечить правильный рендеринг и сенсорное масштабирование для всех устройств, **добавьте метатег** адаптивного окна просмотра к вашему `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

### CSS box-sizing

Для более простого изменения размера в CSS глобальное значение `box-sizing` переключается с `content-box`
на `border-box`. Это гарантирует, что `padding` не влияет на окончательную вычисленную ширину элемента, но может вызвать проблемы с некоторым сторонним программным обеспечением, таким как Google Maps и Google Custom Search Engine.

В редких случаях Вам нужно отменить его, используйте что-то вроде следующего:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

В приведенном выше фрагменте все вложенные элементы, включая сгенерированный контент с помощью `::before` и `::after`, будут наследовать указанный `box-sizing` для этого `.selector-for-some-widget`.

Узнайте больше о [блочной модели и размерах на сайте CSS Tricks](https://css-tricks.com/box-sizing/).

### Перезагрузка стиля

Для улучшения кроссбраузерности рендеринга, Bootstrap v{{ bootstrapVersionMinor }} использует [Reboot](https://v4.getbootstrap.su/docs/4.5/content/reboot/) для исправления несоответствий между браузерами и устройствами, обеспечивая при этом несколько более самоуверенный сброс для общие элементы <abbr title="Язык гипертекстовой разметки">HTML</abbr>.

## Использование сборщиков модулей

Скорее всего, Dы используете такие комплекты модулей, как [Webpack](https://webpack.js.org/), [Parcel](https://parceljs.org/) или [rollup.js](https://rollupjs.org/), что упрощает прямое включение пакета в Ваш проект. Для этого используйте `npm` или `yarn`, чтобы получить последнюю версию Vue.js, Bootstrap v4 и BootstrapVue:

```bash
# With npm
npm install vue bootstrap bootstrap-vue

# With yarn
yarn add vue bootstrap bootstrap-vue
```

Затем зарегистрируйте BootstrapVue в точке входа Вашего приложения (обычно `app.js` или `main.js`):

```js
// app.js
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Импортируйте файлы CSS Bootstrap и BootstrapVue (порядок важен)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Сделайте BootstrapVue доступным для всего проекта
Vue.use(BootstrapVue)
// При желании установите плагин компонентов иконок BootstrapVue
Vue.use(IconsPlugin)
```

### Темы в Bootstrap

Если Вы хотите изменить стили Bootstrap по умолчанию (например, `$body-color`), Вы должны использовать файлы `scss` в Bootstrap и BootstrapVue.

Создайте свой собственный файл `scss` (например, `app.scss`) содержащий **оба** ваши пользовательские определения **и** 2 `@import` в конце:

```scss
// app.scss

// Определить значения переменных по умолчанию
$body-bg: #000;
$body-color: #111;

// Затем импортируйте файлы SCSS Bootstrap и BootstrapVue  (порядок важен)
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
```

Затем импортируйте этот единственный файл `scss` в свой проект:

```js
// app.js
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

import './app.scss'

Vue.use(BootstrapVue)
```

Не импортируйте отдельные файлы SCSS в свой проект по отдельности, потому что переменные и функции не будут совместно использоваться файлами.

Для получения информации о темах Bootstrap ознакомьтесь со справочным разделом [Theming](/docs/reference/theming).

### Импорт Vue с псевдонимом

BootstrapVue и PortalVue требуют доступа к глобальной ссылке `Vue` (через `import Vue from 'vue'`).

<div class="alert alert-info mb-3">
  <p class="mb-0">
    Если Вы используете конкретную сборку Vue (т.е. runtime-only против compiler + runtime), Вам нужно будет настроить псевдоним для <code>'vue'</code> в конфигурации Вашего сборщика, чтобы гарантировать, что Ваш проект, BootstrapVue и PortalVue используют одну и ту же версию сборки Vue. Если Вы видите такую ошибку, как <code>"$attr and $listeners is readonly"</code>, или <code>"Multiple instances of Vue detected"</code>, то Вам необходимо настроить псевдоним.
  </p>
</div>

**Пример: Vue алиас для [Vue CLI](https://cli.vuejs.org/) в `vue.config.js`**

```js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set(
      'vue$',
      // Если используется только рантайм сборка
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
      // Или при использовании полной сборки Vue (рантайм + компилятор)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
  }
}
```

**Example: Vue alias in `webpack.config.js`**

```js
module.exports = {
  // ...
  resolve: {
    alias: {
      // Если используется только рантайм сборка
      vue$: 'vue/dist/vue.runtime.esm.js' // 'vue/dist/vue.runtime.common.js' для webpack 1
      // Или при использовании полной сборки Vue (рантайм + компилятор)
      // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' для webpack 1
    }
  }
}
```

**Примечание:** Если Ваш проект имеет несколько файлов конфигурации webpack (например, `webpack.config.js`, `webpack.renderer.config.js`, `webpack.vendor.config.js`, `webpack.server.config.js`, `webpack.client.config.js` и т. д.) Вам нужно будет установить соответствующий псевдоним для _all_ из них.

Смотрите руководство [Vue.js](https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only) для получения полной информации о настройке псевдонимов для [webpack](https://webpack.js.org/), [rollup.js](https://rollupjs.org/), [Parcel](https://parceljs.org/) и т. д.

### Использование расширенного сборщика модулей

Webpack и Parcel поддерживают добавление модулей `scss` с путями тильды (`~`) при импорте из файла `scss`:

```scss
// Webpack пример
@import '~bootstrap';
@import '~bootstrap-vue';
```

```scss
// Parcel пример
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
```

Для получения дополнительных сведений о настройке загрузки ресурсов и разрешении модулей смотрите документацию по сборщикам модулей.

**Примечания**:

- Конфигурация Webpack для загрузки файлов CSS ([официальное руководство](https://webpack.js.org/guides/asset-management/#loading-css))
- Загрузчик Webpack для файлов SASS/SCSS ([официальное руководство](https://webpack.js.org/loaders/sass-loader/))
- Parcel CSS ([официальное руководство](https://parceljs.org/css.html))
- Parcel SCSS ([официальное руководство](https://parceljs.org/scss.html))

## Встряхивание дерева с помощью сборщиков модулей

При использовании сборщика модулей Вы можете дополнительно импортировать только определенные группы компонентов (плагины), компоненты и/или директивы. Обратите внимание, что встряхивание дерева применяется только к коду JavaScript, а не к CSS/SCSS.

<div class="alert alert-info">
  <p class="mb-0">
    <b>Примечание:</b> Оптимальное встряхивание дерева работает только тогда, когда установлен webpack 4 находится в режиме <a href="https://webpack.js.org/guides/tree-shaking"><code>продакшен</code></a> и минимизация javascript включена.
  </p>
</div>

### Группы компонентов и директивы как плагины Vue

Вы можете импортировать группы компонентов и директивы как плагины Vue, импортировав из `bootstrap-vue`:

<!-- eslint-disable import/first, import/no-duplicates -->

```js
// Это импортирует все компоненты макета, такие как <b-container>, <b-row>, <b-col>:
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

// Это импортирует <b-modal>, а также директиву v-b-modal как плагин:
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

// Это импортирует <b-card> вместе со всеми субкомпонентами <b-card-*> как плагин:
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

// Это импортирует директиву v-b-scrollspy как плагин:
import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)

// Это импортирует плагины раскрывающегося списка и таблицы
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
```

При импорте в виде плагинов в большинстве случаев импортируются все подкомпоненты и связанные директивы. т.е. при импорте `<b-nav>`, все подкомпоненты `<nav-*>` также включаются, а также все подкомпоненты выпадающего списка. Сокращенные псевдонимы компонентов (если есть) также включены в плагин. За подробностями обращайтесь к документации по компонентам и директивам.

Есть два дополнительных вспомогательных плагина для обеспечения инъекций `$bvModal` и `$bvToast` (если Вы не используете плагины `ModalPlugin` или `ToastPlugin`), которые доступны для импорта из `'bootstrap-vue'`:

- `BVModalPlugin` - предоставляет инъекцию `$bvModal` для генерации [коробок сообщений](/docs/components/modal#modal-message-boxes).
- `BVToastPlugin` - предоставляет инъекцию `$bvToast` для генерации [тосты по запросу](/docs/components/toast#toasts-on-demand).

При импорте нескольких подключаемых модулей группы компонентов и/или группы директив, включите весь импорт в один оператор `import` для оптимального встряхивания дерева.

### Отдельные компоненты и директивы

Если Вы хотите использовать только определенный компонент или набор компонентов, Вы можете сделать это, напрямую импортировав эти компоненты.

Чтобы выбрать компонент/директиву cherry, начните с импорта ее в файл, в котором она используется:

<!-- eslint-disable no-unused-vars -->

```js
// Поместите весь импорт из 'bootstrap-vue' в один оператор импорта
// для получения оптимальных размеров пакета
import { BModal, VBModal } from 'bootstrap-vue'
```

Затем добавьте его в определение Вашего компонента:

<!-- eslint-disable no-undef -->

```js
Vue.component('MyComponent', {
  components: { BModal },
  // Обратите внимание, что Vue автоматически добавляет к именам директив префиксы `v-`
  directives: { 'b-modal': VBModal }
  // ...
})
```

Or register them globally:

<!-- eslint-disable no-undef -->

```js
Vue.component('BModal', BModal)
// Обратите внимание, что Vue автоматически добавляет к именам директив префиксы `v-`
Vue.directive('b-modal', VBModal)
```

Vue позволяет использовать здесь различные синтаксисы имен компонентов и директив, поэтому не стесняйтесь использовать <samp>kebab-casing</samp> (показано), <samp>camelCasing</samp>, <samp>PascalCasing</samp> и/или сокращенное обозначение свойства объекта (только для компонентов).

### Использование исходного кода BootstrapVue для небольших пакетов

При использовании сборщиков модулей они обычно по умолчанию используют модульную сборку `esm/`, которая была предварительно перенесена Babel для наших [поддерживаемых браузеров](https://github.com/bootstrap-vue/bootstrap-vue/blob/master/.browserslistrc).

Вы можете переопределить использование сборки `esm/`, назначив псевдоним `'bootstrap-vue'` для использования исходных файлов BootstrapVue и добавив `node_modules/bootstrap-vue/src/*` в белый список для транспиляции в процессе сборки в Вашем конфигурация сборщика модулей. Это позволит Вам перенести BootstrapVue для Ваших целевых браузеров/сред и потенциально уменьшить размеры пакетов (и включать вспомогательные утилиты babel только один раз) за счет немного большего времени сборки.

**Пример webpack.config.js для транспиляции Babel:**

```js
module.exports = {
  resolve: {
    alias: {
      // Псевдоним для использования источника BootstrapVue
      'bootstrap-vue$': 'bootstrap-vue/src/index.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // Исключить транспилирование `node_modules`, кроме `bootstrap-vue/src`
        exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
```

Вам может потребоваться установить `babel-core`, `babel-loader` и `babel-preset-env`:

```bash
# Если Вы используете npm
npm install babel-core babel-loader babel-preset-env --save-dev

# Если Вы используете yarn
yarn add babel-core babel-loader babel-preset-env --dev
```

Подробнее смотрите:

- [Webpack `resolve.alias`](https://webpack.js.org/configuration/resolve/)
- [Webpack `rule`](https://webpack.js.org/configuration/module/#rule)
- [rollup.js](https://rollupjs.org/)
- [Parcel](https://parceljs.org/)

## Модуль Nuxt.js

BootstrapVue предоставляет модуль Nuxt.js для простого импорта BootstrapVue (или частей BootstrapVue) в Ваше приложение Nuxt.js.

### Начало работы с Nuxt.js

[Nuxt.js](https://nuxtjs.org/) версия <code>{{ nuxtVersion }}</code> (или выше) рекомендуется.

Установка зависимостей:

```bash
# С помощью npm
npm install bootstrap-vue

# С помощью yarn
yarn add bootstrap-vue
```

Добавьте `bootstrap-vue/nuxt` в раздел модулей Вашего файла **`nuxt.config.js`**.

Это будет включать как `bootstrap.css` и `bootstrap-vue.css` по умолчанию предварительно скомпилированный CSS.

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt']
}
```

Обратите внимание, что это **не** установит компоненты иконок. Чтобы узнать, как включить иконки через модуль Nuxt.js, обратитесь к [разделу Иконки](#иконки) ниже.

### Использование настраиваемого Bootstrap SCSS

Если Вы используете собственный Bootstrap SCSS, Вы можете отключить автоматическое включение предварительно скомпилированных файлов CSS Bootstrap и BootstrapVue, установив для следующих опций значение `false`:

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    bootstrapCSS: false, // Или `css: false`
    bootstrapVueCSS: false // Или `bvCSS: false`
  }
}
```

Пользовательский SCSS BootstrapVue полагается на переменные и миксины Bootstrap SCSS, а также любые переопределения переменных, которые Вы могли установить. Вы можете включить Bootstrap и BootstrapVue SCSS в пользовательский файл SCSS Вашего проекта:

```scss
// custom.scss

// Пользовательские переопределения переменных Bootstrap идут первыми
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 640px,
  lg: 992px,
  xl: 1300px
);
$enable-rounded: false;

// Затем включите следующие
@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';

// И определите любой из ваших пользовательских или дополнительных CSS/SCSS
// здесь или через @import
```

В главную точку входа Вашего приложения включите _одиночный_ пользовательский файл SCSS (при использовании `sass-loader`):

```js
// app.js
import 'custom.scss'
```

### `transformAssetUrls` с Nuxt.js

Плагин подключаемого модуля BootstrapVue Nuxt автоматически добавит в конкретный для BootstrapVue  [`transformAssetUrls`](/docs/reference/images) изображения `src` конфигурация свойства для Вас.

### Тряска дерева с Nuxt.js

Если Вы хотите уменьшить размер производственного пакета, потому что Вы используете только подмножество доступных плагинов BootstrapVue, Вы можете настроить список BootstrapVue `componentPlugins` или `directivePlugins`, которые Вы хотите глобально установить в свой проект Nuxt.js. Встряхивание дерева заметок применяется только к коду JavaScript, но не к CSS/SCSS.

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'ToastPlugin',
      'ModalPlugin'
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin']
  }
}
```

Есть два дополнительных вспомогательных плагина для обеспечения инъекций `$bvModal` и `$bvToast` injections (если вы не используете плагины `ModalPlugin` или `ToastPlugin`), которые доступны в опции `componentPlugins`:

- `BVModalPlugin` - предоставляет инъекцию `$bvModal` для генерации [коробок сообщения](/docs/components/modal#modal-message-boxes).
- `BVToastPlugin` - предоставляет инъекцию `$bvToast` для генерации [тосты по запросу](/docs/components/toast#toasts-on-demand).

Вы также можете при желании импортировать отдельные компоненты и/или директивы, настроив список BootstrapVue `components` или `directives`, которые Вы хотите глобально установить в свой проект Nuxt.js.

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal'],
    directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
  }
}
```

Не стесняйтесь смешивать и сопоставлять импорт плагинов с импортом отдельных компонентов и директив.

Обратитесь к справочному разделу внизу каждого из документации [компонент](/docs/components) и [директива](/docs/directives) для получения подробной информации о доступных именах подключаемых модулей (и о том, какие компоненты и директивы включены в каждый подключаемый плагин) и имена импорта компонентов и/или директив.

Обратите внимание, что при импорте отдельных компонентов любые псевдонимы компонентов **недоступны**.

<div class="alert alert-info">
  <p class="mb-0">
    <b>Примечание:</b> Оптимальное встряхивание дерева работает только тогда, когда Ваше приложение Nuxt.js находится в режиме <code>production</code>. Вы можете заметить большие размеры пакетов, когда не находитесь в режиме <code>production</code> (т.е. в режиме <code>dev</code>).
  </p>
</div>

Если Вы хотите импортировать отдельные компоненты BootstrapVue на _специфичных_ страницах и/или компоненты Вашего приложения Nuxt, Вы можете обойти модуль Nuxt.js и вместо этого следовать [модульным сборщикам](#использование-сборщиков-модулей) и [Встряхивание дерева с помощью сборщиков модулей](#встряхивание-дерева-с-помощью-сборщиков-модулей) разделы выше. В качестве альтернативы Вы можете просто импортировать несколько плагинов (например, `LayoutPlugin`) в конфигурацию Вашего модуля Nuxt.js, а затем импортировать дополнительные компоненты или плагины на страницы, где это необходимо.

### Иконки

[Плагин иконок](/docs/icons) **не** автоматически устанавливается при использовании модуля Nuxt.js. Вы должны либо явно включить `IconsPlugin`, либо указать, какие компоненты значков Вы хотите импортировать.

Все иконки:

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    // Установите плагин `IconsPlugin` (в дополнение к плагину `BootstrapVue`)
    icons: true
  }
}
```

Конкретные иконки:

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    // Добавьте нужные компоненты иконки в массив `components`
    components: ['BIcon', 'BIconAlertFill', 'BIconCalendar', 'BIconGears']
  }
}
```

Плагин иконок:

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    // Добавьте плагин иконки в массив `componentsPlugins`
    componentPlugins: ['IconsPlugin']
  }
}
```

### Передача пользовательской конфигурации BootstrapVue с помощью Nuxt.js

Если Вам нужно передать пользовательскую [конфигурацию BootstrapVue](/docs/reference/settings#default-bootstrapvue-configuration), Вы можете сделать это, установив свойство `config` в Вашем `nuxt.config.js`:

```js
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    config: {
      // Пользовательские параметры конфигурации здесь
    }
  }
}
```

### Использование предварительно перенесенной версии BootstrapVue для Nuxt.js

Модуль Nuxt.js использует предварительно перенесенные версии BootstrapVue для более быстрой разработки и исходный код (`src/`) BootstrapVue для более качественных и небольших производственных сборок.

Вы можете переопределить эту опцию, используя опцию `usePretranspiled`. Установка значения `true` всегда использует предварительно перенесенные версии, а установка значения `false` всегда будет использовать `src/`. По умолчанию `usePretranspiled` включен только в режиме разработки. Вам не нужно использовать этот параметр, поскольку значение по умолчанию является наиболее оптимальным для производительности.

## Vue CLI 3

В отличие от V2, Vue CLI 3 не использует шаблоны.

Создайте новый проект в каталоге `my-project`:

```bash
npx @vue/cli create my-project
```

Войдите в каталог `my-project` и установите `bootstrap-vue`:

```bash
npm install bootstrap-vue
```

Под капотом Vue CLI использует webpack, поэтому мы можем зарегистрировать плагин BootstrapVue, как с инструкциями webpack.

```js
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
```

Дополнительную конфигурацию Vue CLI 3 для использования относительных путей проекта для свойств src изображений в различных компонентах BootstrapVue смотрите в разделе Vue CLI 3 статьи [Разрешение источника изображений](/docs/reference/images#vue-cli-3-support) справочной страницы.

### Vue CLI 3 плагин

В качестве альтернативы Вы можете использовать [плагин Bootstrap-Vue Vue CLI 3](https://github.com/GregYankovoy/vue-cli-plugin-bootstrap-vue), который поможет Вам настроить приложение.

```bash
vue create my-app
cd my-app
vue add bootstrap-vue
```

Это создаст новое приложение с базовыми настройками BootstrapVue для запуска Вашего проекта.

В будущем этот плагин будет предоставлять возможности для более сложных конфигураций и шаблонов.

Для поддержки иконок Вам может потребоваться отредактировать полученный файл конфигурации.

## Браузер

Если Вы не используете сборщик модулей или процесс компиляции, Вы можете вместо этого добавить URL-адреса CSS Bootstrap и BootstrapVue в свой HTML-раздел `<head>`, а затем необходимые файлы JavaScript.

Для поддержки старых браузеров (смотрите [Поддержка браузера](#поддержка-браузера) ниже), Вам необходимо будет включить полифилл для обработки современных функций JavaScript перед загрузкой файлов JavaScript Vue и BootstrapVue.

```html
<!-- Добавьте это в <head> -->

<!-- Загрузите необходимые CSS Bootstrap и BootstrapVue -->
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />

<!-- Загрузите полифиллы для поддержки старых браузеров -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver" crossorigin="anonymous"></script>

<!-- Загрузите Vue, а затем BootstrapVue -->
<script src="https://unpkg.com/vue@latest/dist/vue.min.js"></script>
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>

<!-- Загрузите следующее для поддержки BootstrapVueIcons -->
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script>
```

## Варианты сборки

Выбор лучшего варианта для вашей среды сборки / упаковщика помогает уменьшить размеры пакетов. Если Ваш сборщик поддерживает модули esm, он автоматически предпочтет их по сравнению с commonjs.

| Вариант        | Среды                  | Tree Shake | Путь к пакету                                                           |
| -------------- | ---------------------- | ---------- | ---------------------------------------------------------------------- |
| **ESM module** | webpack 2+ / rollup.js | Да         | `esm/index.js`                                                         |
| ESM bundle     | webpack 2+ / rollup.js | Да         | `dist/bootstrap-vue.esm.js`                                            |
| commonjs2      | webpack 1 / ...        | Нет        | `dist/bootstrap-vue.common.js` _или_ `dist/bootstrap-vue.common.min.js` |
| UMD            | Browser                | Нет        | `dist/bootstrap-vue.js` _или_ `dist/bootstrap-vue.min.js`               |

Обратите внимание, что вариант UMD (браузер) **не** включает поддержку BootstrapVue [иконок](/docs/icons). Все другие варианты, перечисленные выше _дополняют_ подключаемый плагин `BootstrapVueIcons` (`IconsPlugin`) (обратите внимание, что подключаемый модуль иконок не устанавливается автоматически и должен быть явно установлен через `Vue.use()`. Смотрите [Использование иконок](/docs/icons#usage) для получения более подробной информации.

Только модули иконок:

| Вариант        | Среды                  | Tree Shake | Путь к пакету                                                                       |
| -------------- | ---------------------- | ---------- | ---------------------------------------------------------------------------------- |
| **ESM bundle** | webpack 2+ / rollup.js | Да         | `dist/bootstrap-vue-icons.esm.js`                                                  |
| commonjs2      | webpack 1 / ...        | Нет        | `dist/bootstrap-vue-icons.common.js` _или_ `dist/bootstrap-vue-icons.common.min.js` |
| UMD            | Browser                | Нет        | `dist/bootstrap-vue-icons.js` _или_ `dist/bootstrap-vue-icons.min.js`               |

Сборка модуля `ESM` и пакеты `ESM` (один файл) are [tree-shakeable](#встряхивание-дерева-с-помощью-сборщиков-модулей), но Вы получите меньшие конечные размеры пакетов при использовании модуля `ESM` _против_ пакета `ESM`.

Все перечисленные выше варианты сборки были предварительно перенесены на [браузеры](https://github.com/bootstrap-vue/bootstrap-vue/blob/master/.browserslistrc), поддерживаемые BootstrapVue. Однако, если Вы ориентируетесь только на современные браузеры, Вы можете импортировать `BootstrapVue` из `src/index.js`, (добавив псевдоним `bootstrap-vue` к `bootstrap-vue/src/index.js`) и добавив в белый список `bootstrap-vue/src` для транспиляции через Ваш собственный проект. Это потенциально может уменьшить размеры окончательного пакета проекта. Дополнительные сведения смотрите в разделе [Использование исходного кода BootstrapVue для небольших пакетов](#использование-исходного-кода-bootstrapvue-для-небольших-пакетов) выше.

### Зависимости

BootstrapVue использует `Popper.js` (для позиционирования всплывающих подсказок, всплывающих окон и раскрывающегося списка), [`PortalVue`](https://portal-vue.linusb.org/) (для тостов) и [`vue-functional-data-merge`](https://github.com/alexsasharegan/vue-functional-data-merge) (используется нашими функциональными компонентами). Эти три зависимости включены в пакет BootstrapVue `UMD`, в то время как пакет только для значков UMD (браузера) включает в себя `vue-functional-data-merge`. Все другие сборки не включают эти зависимости.

## Перенос проекта уже с использованием Bootstrap

Если Вы уже использовали Bootstrap v{{bootstrapVersionMajor}}, Вам, возможно, придется внести в свой проект несколько изменений:

- Удалите файл `bootstrap.js` из скриптов Вашей страницы или конвейера сборки
- Если Bootstrap - единственное, что полагается на `jQuery`, Вы можете безопасно удалить его - BootstrapVue **не** зависит от `jQuery`
- Преобразуйте собственную разметку HTML Bootstrap в упрощенную разметку пользовательских компонентов BootstrapVue
- Начните с преобразования только интерактивных элементов управления, для которых сначала требуется Bootstrap javascript.

## Поддержка браузера

### CSS

BootstrapVue должен использоваться с Bootstrap v{{bootstrapVersionMinor}} CSS/SCSS. Смотрите <b-link :href="bootstrapBrowserDevicesHref" target="_blank">браузеры и устройства</b-link> для получения дополнительной информации о браузерах, которые в настоящее время поддерживаются Bootstrap v{{bootstrapVersionMajor}}.

### JS

BootstrapVue написан на Vue.js! Итак, какие браузеры поддерживаются, зависит от Вашего проекта и сборщика.

BootstrapVue использует следующие функции и API:

- ES6 (например, `Array.from()`, `Array.isArray()`, `Object.assign()`, `Object.is()`, и т.д.)
- `Promise`
- `MutationObserver`
- `IntersectionObserver` (опционально)

Если Вы хотите поддерживать старые веб-браузеры устройств IE, Android и iOS, Вы можете использовать [core-js](https://github.com/zloirock/core-js) и [intersection-observer](https://www.npmjs.com/package/intersection-observer):

```bash
npm install core-js regenerator-runtime intersection-observer
```

Затем импортируйте полифиллы в основную точку входа приложения:

<!-- eslint-disable no-unused-vars -->

```js
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer' // Опционально
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
```

При использовании устаревшего [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill/):

```bash
npm install @babel/polyfill intersection-observer
```

Затем импортируйте полифиллы в основную точку входа приложения:

<!-- eslint-disable no-unused-vars -->

```js
import '@babel/polyfill'
import 'intersection-observer' // Опционально
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
```

В качестве альтернативы используйте [Polyfill.io](https://polyfill.io/) для динамического обслуживания полифиллов, специфичных для браузера, с помощью тегов `<script>` в разделе HTML `<head>`. Смотрите пример в разделе [Браузер](#браузер) выше.

## Поддержка Инструментов

BootstrapVue предоставляет дополнительные вспомогательные файлы для автозаполнения в популярных редакторах IDE.

### VS Code + Vetur

Если Вы используете [VS Code](https://code.visualstudio.com/) в качестве текстового редактора, BootstrapVue имеет автозаполнение intellisense для атрибутов компонентов и директив, доступных через файлы `dist/vetur-tags.json` и `dist/vetur-attributes.json`.

### JetBrains WebStorm (и совместимый)

Для редактора [WebStorm](https://www.jetbrains.com/webstorm/) (или совместимого с веб-типами), BootstrapVue предоставляет файл `dist/web-types.json` для атрибута компонента и автозаполнения директив.
