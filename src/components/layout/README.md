# Макет и система сеток

> Используйте мощную сетку flexbox, ориентированную на мобильные устройства (с помощью компонентов `<b-container>`, `<b-row>`, `<b-form-row>` и `<b-col>`) для создания макетов все формы и размеры благодаря системе из двенадцати столбцов, пяти адаптивным уровням по умолчанию, переменным и миксинам CSS Sass, а также десяткам предопределенных классов.

BootstrapVue предоставляет несколько удобных _функциональных_ компонентов, адаптированных для макета, которые могут упростить разметку вашей сложной страницы по сравнению с традиционной разметкой Bootstrap v4. Не стесняйтесь переключаться между традиционной разметкой Bootstrap v4 (например, `<div>` и классы) и удобными функциональными компонентами компоновки BootstrapVue.

## Как это работает

Система сеток Bootstrap использует серию контейнеров, строк и столбцов для компоновки и выравнивания содержимого.
Он построен с помощью [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) и полностью адаптивен. Ниже приведен пример и подробное рассмотрение того, как объединяется сетка.

```html
<b-container class="bv-example-row">
  <b-row>
    <b-col>1 из 3</b-col>
    <b-col>2 из 3</b-col>
    <b-col>3 из 3</b-col>
  </b-row>
</b-container>

<!-- b-grid-how-it-works.vue -->
```

В приведенном выше примере создаются три столбца одинаковой ширины на малых, средних, больших и очень больших устройствах с использованием предопределенных классов сетки Bootstrap v4. Эти столбцы центрируются на странице с родительским `.container`.

Вот как это работает:

- Контейнеры позволяют центрировать и размещать содержимое вашего сайта по горизонтали. Используйте `<b-container>` для ширины адаптивного пикселя или `<b-container fluid>` для параметра `width: 100%` для всех размеров области просмотра и устройства.
- Строки - это обертки для столбцов. У каждого столбца есть горизонтальный `padding` (называемый промежутком) для управления пространством между ними. Затем этому `padding` противодействуют строки с отрицательными полями. Таким образом, все содержимое ваших столбцов визуально выравнивается по левому краю.
- В макете сетки содержимое должно быть размещено внутри столбцов, и только столбцы могут быть непосредственными дочерними элементами строк.
- Благодаря flexbox, столбцы сетки без установленной ширины будут автоматически компоноваться с одинаковой шириной. Например, четыре экземпляра `<b-col sm="auto">` каждый автоматически будут иметь ширину 25% для небольших контрольных точек.
- Свойство колонки `cols` указывает количество столбцов, которое вы хотели бы использовать из возможных 12 в строке, независимо от контрольной точки (начиная с контрольной точки `xs`). Итак, если вам нужны три столбца одинаковой ширины в любой контрольной точке, вы можете использовать `<b-col cols="4">`.
- Свойства столбцов `sm`, `md`, `lg`, `xl` указывают количество столбцов, которые вы хотели бы использовать из возможных 12 в строке, в различных контрольных точках. Итак, если вам нужны три столбца одинаковой ширины в контрольной точке `sm`, вы можете использовать `<b-col sm="4">`. Специальное значение `auto` может использоваться, чтобы занять оставшееся доступное пространство столбца в строке.
- Ширина столбцов `width` задается в процентах, поэтому они всегда гибкие и имеют размер относительно их родительского элемента.
- Столбцы имеют горизонтальный `padding` для создания промежутков между отдельными столбцами, однако вы можете удалить `margin` из `<b-row>` и `padding` из `<b-col>`, установив свойство `no-gutters` для `<b-row>`.
- Чтобы сетка реагировала, существует пять контрольных точек сетки, по одной для каждой отзывчивой контрольной точки: все контрольные точки (очень маленькие), маленькие, средние, большие и очень большие.
- Контрольные точки сетки основаны на медиа-запросах минимальной ширины, то есть **они применяются к этой одной контрольной точке и всем тем, что выше нее** (например, `<b-col sm="4">` применяется к малым, средним, большим, и очень большие устройства, но не первая контрольная точка `xs`).
- Вы можете использовать предопределенные классы сетки или примеси Sass для более семантической разметки.

Помните об ограничениях и [ошибках, связанных с flexbox](https://github.com/philipwalton/flexbugs),
например [невозможность использовать некоторые элементы HTML в качестве гибких контейнеров](https://github.com/philipwalton/flexbugs#flexbug-9).

## Контейнеры `<b-container>`

Контейнеры (`<b-container>`) являются самым основным элементом макета в Bootstrap. Выберите из адаптивного контейнера фиксированной ширины (что означает, что его `max-width` изменяется в каждой контрольной точке) по умолчанию или гибкой ширины (что означает, что он всегда на 100% шириной), установив опору 'Fluid', или адаптивные контейнеры, где контейнер остается подвижным до определенной контрольной точки (требуется Bootstrap CSS `v4.4+`).

Хотя контейнеры могут быть вложенными, для большинства макетов вложенный контейнер не требуется.

Ширина контрольной точки по умолчанию может быть настроена с помощью переменных SCSS Bootstrap V4.x. Дополнительные сведения см. На справочной странице [Оформление](/docs/reference/theming), а также в таблице в разделе [Параметры сетки](#grid-options) section below.

### Контейнер по умолчанию

По умолчанию `<b-container>` является адаптивным контейнером с фиксированной шириной, что означает, что его `max-width` изменяется в каждой контрольной точке по ширине области просмотра.

```html
<b-container>
  <!-- Контент здесь -->
</b-container>
```

### Контейнер заполняемой ширины

Использование свойства `fluid` на `<b-container>` отрендерит контейнер, который всегда имеет 100% ширину, независимо от контрольной точки области просмотра.

```html
<b-container fluid>
  <!-- Контент здесь -->
</b-container>
```

Установка для свойства `fluid` значения `true` (или пустой строки) эквивалентна Bootstrap классу `.container-fluid`.

### Отзывчивые текучие контейнеры

<span class="badge badge-info small">Обязателен Bootstrap v4.4+ CSS</span>

Адаптивные контейнеры - это новинка Bootstrap v4.4. Они позволяют вам указать контейнер шириной 100% (текучий) до тех пор, пока не будет достигнута определенная контрольная точка, в которой применяется `max-width`. Например, установка свойства `fluid` на `'md'` отрендерит контейнер шириной 100% для начала, пока не будет достигнута контрольная точка `'md'`, после чего он станет стандартным не текучим контейнером.

```html
<b-container fluid="sm">
  100% ширины до небольшой контрольной точки
</b-container>
<b-container fluid="md">
  100% ширины до средней контрольной точки
</b-container>
<b-container fluid="lg">
  100% ширины до большой контрольной точки
</b-container>
<b-container fluid="xl">
  100% ширины до очень большой контрольной точки
</b-container>
```

Установка свойству fluid имени контрольной точки переводится в класс Bootstrap `.container-{breakpoint}`.

Значения ширины контейнера по умолчанию смотрите в таблице [Раздел параметров сетки](#grid-options) ниже.

## Строки `<b-row>` и `<b-form-row>`

Строки - это оболочки для [столбцов](#columns-b-col). Каждый столбец имеет горизонтальный отступ (называемый промежутком) для управления пространством между ними. Затем этому заполнению противодействуют строки с отрицательными полями. Таким образом, все содержимое ваших столбцов визуально выравнивается по левому краю.

Вы можете удалить поля из `<b-row>` и отступы из `<b-col>`, установив свойство `no-gutters` на `<b-row>`.

Или, для компактных полей (меньшие промежутки между столбцами), используйте компонент `<b-form-row>`, который обычно используется при компоновке [форм](/docs/components/form).

## Колонки `<b-col>`

`<b-col>` должен быть помещен внутри компонента `<b-row>` или элемента (такого как `<div>`), к которому применен класс `row`, или - в случае [forms](/docs/components/form) - внутри
компонент `<b-form-row>` (для получения столбцов с более компактными полями).

## Параметры сетки

В то время как Bootstrap использует единицы измерения `em` или `rem` для определения большинства размеров, `px` используются для контрольных точек сетки и ширины контейнера. Это связано с тем, что ширина области просмотра указана в пикселях и не изменяется в зависимости от [размера шрифта](https://drafts.csswg.org/mediaqueries-3/#units).

Посмотрите, как аспекты системы сеток Bootstrap работают на нескольких устройствах с помощью удобной таблицы.

<div class="table-responsive-sm">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th>
          <strong>Очень маленькое</strong> (xs)<br>
          <code>&lt;576px</code>
        </th>
        <th>
          <strong>Маленькое</strong> (sm)<br>
          <code>≥576px</code>
        </th>
        <th>
          <strong>Среднее</strong> (md)<br>
          <code>≥768px</code>
        </th>
        <th>
          <strong>Большое</strong> (lg)<br>
          <code>≥992px</code>
        </th>
        <th>
          <strong>Очень большое</strong> (xl)<br>
          <code>≥1200px</code>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-left">Максимальная ширина контейнера</th>
        <td>Нет (авто)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
      </tr>
      <tr>
        <th class="text-left">Свойство</th>
        <td><code>cols="*"</code></td>
        <td><code>sm="*"</code></td>
        <td><code>md="*"</code></td>
        <td><code>lg="*"</code></td>
        <td><code>xl="*"</code></td>
      </tr>
      <tr>
        <th class="text-left"># столбцов</th>
        <td colspan="5">12</td>
      </tr>
      <tr>
        <th class="text-left">Ширина промежутка</th>
        <td colspan="5">30px (по 15px с каждой стороны столбца)</td>
      </tr>
      <tr>
        <th class="text-left">Вложенный</th>
        <td colspan="5">Да</td>
      </tr>
      <tr>
        <th class="text-left">Смещение</th>
        <td><code>offset="*"</code></td>
        <td><code>offset-sm="*"</code></td>
        <td><code>offset-md="*"</code></td>
        <td><code>offset-lg="*"</code></td>
        <td><code>offset-xl="*"</code></td>
      </tr>
      <tr>
        <th class="text-left">Порядок</th>
        <td><code>order="*"</code></td>
        <td><code>order-sm="*"</code></td>
        <td><code>order-md="*"</code></td>
        <td><code>order-lg="*"</code></td>
        <td><code>order-xl="*"</code></td>
      </tr>
    </tbody>
  </table>
</div>

**Примечания:**

- Нет свойства `xs`. Свойство `cols` относится к `xs` (наименьшей) контрольной точке.
- Вышеуказанные значения и имена контрольных точек являются значениями по умолчанию для начальной загрузки. Их можно настроить с помощью [переменных SCSS](/docs/reference/theming) и (если также используются пользовательские имена контрольных точек) с помощью BootstrapVue [глобальная конфигурация](/docs/reference/settings).

### Размеры контейнеров

В следующей таблице представлена максимальная ширина контейнера по умолчанию в различных контрольных точках. Они могут отличаться, если вы используете настраиваемое оформление Bootstrap v4 SCSS/CSS.

| Тип контейнера | Очень маленькое `<576px` | Маленькое `≥576px` | Среднее `≥768px` | Большое `≥992px` | Очень большое `≥1200px` |
| -------------- | -------------------- | -------------- | --------------- | -------------- | --------------------- |
| _default_      | `100%`               | `540px`        | `720px`         | `960px`        | `1140px`              |
| `fluid`        | `100%`               | `100%`         | `100%`          | `100%`         | `100%`                |
| `fluid="sm"`   | `100%`               | `540px`        | `720px`         | `960px`        | `1140px`              |
| `fluid="md"`   | `100%`               | `100%`         | `720px`         | `960px`        | `1140px`              |
| `fluid="lg"`   | `100%`               | `100%`         | `100%`          | `960px`        | `1140px`              |
| `fluid="xl"`   | `100%`               | `100%`         | `100%`          | `100%`         | `1140px`              |

Дополнительную информацию смотрите в разделе [Контейнеры `<b-container>`](#containers-b-container) выше

## Столбцы с автоматической компоновкой

Используйте классы столбцов, зависящие от контрольной точки, для упрощения определения размера столбца без явного пронумерованного свойства, такого как `<b-col sm="6">`.

### Столбцы одинаковой ширины

Например, вот два макета сетки, которые применяются к каждому устройству и окну просмотра, от `xs` до `xl`.
Добавьте любое количество классов без единиц для каждой нужной контрольной точки, и каждый столбец будет одинаковой ширины.

```html
<b-container class="bv-example-row">
  <b-row>
    <b-col>1 из 2</b-col>
    <b-col>2 из 2</b-col>
  </b-row>

  <b-row>
    <b-col>1 из 3</b-col>
    <b-col>2 из 3</b-col>
    <b-col>3 из 3</b-col>
  </b-row>
</b-container>

<!-- b-grid-equal-width.vue -->
```

### Многострочные одинаковые ширины

Создайте столбцы одинаковой ширины, охватывающие несколько строк, вставив расширение `.w-100` там, где вы хотите, чтобы столбцы переходили в новую строку. Сделайте паузы адаптивными, смешав `.w-100` с некоторыми [утилитами адаптивного отображения](https://getbootstrap.com/docs/4.5/utilities/display/).

Была [ошибка flexbox в Safari](https://github.com/philipwalton/flexbugs#flexbug-11), которая не позволяла этому работать без явного `flex-basis` или `border`. Существуют обходные пути для более старых версий браузеров, но в них нет необходимости, если ваши целевые браузеры не попадают в версии с ошибками.

```html
<b-container class="bv-example-row">
  <b-row>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <div class="w-100"></div>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
  </b-row>
</b-container>

<!-- b-grid-equal-width-multiple-lines.vue -->
```

### Установка ширины одного столбца

Автоматическая компоновка столбцов сетки flexbox также означает, что вы можете установить ширину одного столбца и автоматически изменять размер столбцов-братьев вокруг него. Вы можете использовать предопределенные классы сетки (как показано ниже), миксины сетки или встроенную ширину. Обратите внимание, что размер других столбцов изменится независимо от ширины центрального столбца.

```html
<b-container class="bv-example-row">
  <b-row class="text-center">
    <b-col>1 из 3</b-col>
    <b-col cols="8">2 из 3 (шире)</b-col>
    <b-col>3 из 3</b-col>
  </b-row>

  <b-row class="text-center">
    <b-col>1 из 3</b-col>
    <b-col cols="5">2 из 3 (шире)</b-col>
    <b-col>3 из 3</b-col>
  </b-row>
</b-container>

<!-- b-grid-one-width.vue -->
```

### Содержимое переменной ширины

Используйте свойства `{breakpoint}="auto"` для изменения размера столбцов в зависимости от естественной ширины их содержимого.

```html
<b-container class="bv-example-row">
  <b-row class="justify-content-md-center">
    <b-col col lg="2">1 из 3</b-col>
    <b-col cols="12" md="auto">Содержимое переменной ширины</b-col>
    <b-col col lg="2">3 из 3</b-col>
  </b-row>

  <b-row>
    <b-col>1 из 3</b-col>
    <b-col cols="12" md="auto">Содержимое переменной ширины</b-col>
    <b-col col lg="2">3 из 3</b-col>
  </b-row>
</b-container>

<!-- b-grid-variable-width.vue -->
```

## Адаптивные классы

Сетка Bootstrap включает пять уровней предопределенных классов для создания сложных адаптивных макетов.
Настройте размер столбцов на очень маленьких, маленьких, средних, больших или очень больших устройствах по своему усмотрению.

### Все контрольные точки

Для сеток, которые одинаковы от самых маленьких устройств до самых больших, используйте свойства `col` и `cols="*"`. Укажите количество столбцов, если вам нужен столбец `cols` определенного размера; в противном случае не стесняйтесь придерживаться `col` (который применяется автоматически, если `cols` не указаны).

```html
<b-container class="bv-example-row">
  <b-row>
    <b-col>col</b-col>
    <b-col>col</b-col>
    <b-col>col</b-col>
    <b-col>col</b-col>
  </b-row>

  <b-row>
    <b-col cols="8">col-8</b-col>
    <b-col cols="4">col-4</b-col>
  </b-row>
</b-container>

<!-- b-grid-size-all-breakpoints.vue -->
```

### Сложено по горизонтали

Используя один набор свойств `sm="*"` или `sm` (логическое значение для равной ширины @sm), вы можете создать базовую сеточную систему, которая сначала складывается на очень маленьких устройствах, а затем становится горизонтальной на настольных (средних) устройствах.

```html
<b-container class="bv-example-row">
  <b-row>
    <b-col sm="8">col-sm-8</b-col>
    <b-col sm="4">col-sm-4</b-col>
  </b-row>

  <b-row>
    <b-col sm>col-sm</b-col>
    <b-col sm>col-sm</b-col>
    <b-col sm>col-sm</b-col>
  </b-row>
</b-container>

<!-- b-grid-horizontal-stacked.vue -->
```

### Смешивать и сочетать

Не хотите, чтобы ваши столбцы просто складывались в несколько ярусов сетки? При необходимости используйте комбинацию различных свойств для каждого уровня. Смотрите пример ниже, чтобы лучше понять, как все это работает.

```html
<b-container class="bv-example-row">
  <!-- Сложите столбцы на мобильном устройстве, сделав одну полную ширину, а другую половину ширины -->
  <b-row>
    <b-col cols="12" md="8">cols="12" md="8"</b-col>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
  </b-row>

  <!-- Ширина столбцов начинается с 50% на мобильных устройствах и увеличивается до 33,3% на компьютерах -->
  <b-row>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
  </b-row>

  <!-- Столбцы всегда имеют ширину 50%, как на мобильных устройствах, так и на компьютерах -->
  <b-row>
    <b-col cols="6">cols="6"</b-col>
    <b-col cols="6">cols="6"</b-col>
  </b-row>
</b-container>

<!-- b-grid-mix-and-match.vue -->
```

## Выравнивание

Используйте утилиты выравнивания flexbox для вертикального и горизонтального выравнивания столбцов.

**Примечание:** Internet Explorer 11 не поддерживает вертикальное выравнивание гибких элементов, если гибкий контейнер имеет `min-height`, как показано ниже.
[Подробнее смотрите Flexbugs #3](https://github.com/philipwalton/flexbugs#flexbug-3).

### Вертикальное выравнивание

Для вертикального выравнивания всех ячеек сетки в строке используйте свойство `align-v` в `<b-row>`. Возможные значения: `'start'`, `'center'`, `'end'`, `'baseline'` и `'stretch'`:

```html
<b-container class="bv-example-row bv-example-row-flex-cols">
  <b-row align-v="start">
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
  </b-row>

  <b-row align-v="center">
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
  </b-row>

  <b-row align-v="end">
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
  </b-row>

  <b-row align-v="baseline">
    <b-col style="font-size: 0.75rem;">Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
    <b-col style="font-size: 1.25rem;">Один из трех столбцов</b-col>
  </b-row>

  <b-row align-v="stretch">
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
    <b-col>Один из трех столбцов</b-col>
  </b-row>
</b-container>

<!-- b-grid-vertical-alignment.vue -->
```

Для вертикального выравнивания отдельных ячеек сетки используйте свойство `align-self` в `<b-col>`. Возможные значения: `'start'`, `'center'`, `'end'`, `'baseline'` и `'stretch'`:

```html
<b-container class="bv-example-row bv-example-row-flex-cols">
  <b-row>
    <b-col align-self="start">Один из трех столбцов</b-col>
    <b-col align-self="center">Один из трех столбцов</b-col>
    <b-col align-self="end">Один из трех столбцов</b-col>
  </b-row>
  <b-row>
    <b-col align-self="baseline">Один из двух столбцов</b-col>
    <b-col align-self="stretch">Один из двух столбцов</b-col>
  </b-row>
</b-container>

<!-- b-grid-align-self.vue -->
```

### Horizontal alignment

To horizontally align grid cells within a row, use the `align-h` prop on `<b-row>`. Возможные значения: `'start'`, `'center'`, `'end'`, `'around'` и `'between'`:

```html
<b-container class="bv-example-row">
  <b-row align-h="start">
    <b-col cols="4">Один из двух столбцов</b-col>
    <b-col cols="4">Один из двух столбцов</b-col>
  </b-row>

  <b-row align-h="center">
    <b-col cols="4">Один из двух столбцов</b-col>
    <b-col cols="4">Один из двух столбцов</b-col>
  </b-row>

  <b-row align-h="end">
    <b-col cols="4">Один из двух столбцов</b-col>
    <b-col cols="4">Один из двух столбцов</b-col>
  </b-row>

  <b-row align-h="around">
    <b-col cols="4">Один из двух столбцов</b-col>
    <b-col cols="4">Один из двух столбцов</b-col>
  </b-row>

  <b-row align-h="between">
    <b-col cols="4">Один из двух столбцов</b-col>
    <b-col cols="4">Один из двух столбцов</b-col>
  </b-row>
</b-container>

<!-- b-grid-horizontal-alignment.vue -->
```

## Переупорядочивание

### Порядок колонок

Используйте свойства `order-*` для управления визуальным порядком вашего контента. Эти свойства являются адаптивными, поэтому вы можете установить порядок по контрольной точке (например, `order="1" order-md="2"`). Включает поддержку от 1 до 12 на всех пяти уровнях сетки. `<b-col>` по умолчанию имеет значение порядка `0`.

```html
<b-container fluid class="bv-example-row">
  <b-row class="mb-3">
    <b-col>Первый в DOM, порядок не применяется</b-col>
    <b-col order="5">Второй в DOM, с большим порядком</b-col>
    <b-col order="1">Третий в DOM, с порядком 1</b-col>
  </b-row>

  <b-row class="mb-3">
    <b-col order="6">Первый в DOM, порядка 6</b-col>
    <b-col order="1">Второй в DOM, порядка 1</b-col>
    <b-col>В-третьих, в DOM порядок не применяется</b-col>
  </b-row>
</b-container>

<!-- b-grid-order.vue -->
```

Порядок контролируется стилем CSS flexbox `order`.

### Смещение столбцов

Вы можете смещать столбцы сетки двумя способами: наши отзывчивые свойства `offset-*` или служебные классы [margin](/docs/reference/spacing-classes). Размер свойства сетки `offset-*` соответствует размерам столбцов, в то время как служебные классы полей более полезны для быстрых макетов, где ширина смещения является переменной.

```html
<b-container fluid class="bv-example-row">
  <b-row>
    <b-col md="4">md="4"</b-col>
    <b-col md="4" offset-md="4">md="4" offset-md="4"</b-col>
  </b-row>

  <b-row>
    <b-col md="3" offset-md="3">md="3" offset-md="3"</b-col>
    <b-col md="3" offset-md="3">md="3" offset-md="3"</b-col>
  </b-row>

  <b-row>
    <b-col md="6" offset-md="3">md="6" offset-md="3"</b-col>
  </b-row>
</b-container>

<!-- b-grid-offset.vue -->
```

В дополнение к очистке столбца в ответных контрольных точках вам может потребоваться сбросить смещения, установив смещение на `0` в более большой контрольной точке:

```html
<b-container fluid class="bv-example-row">
  <b-row>
    <b-col sm="5" md="6">sm="5" md="6"</b-col>
    <b-col sm="5" offset-sm="2" md="6" offset-md="0">sm="5" offset-sm="2" md="6" offset-md="0"</b-col>
  </b-row>

  <b-row>
    <b-col sm="6" md="5" lg="6">sm="6" md="5" lg="6"</b-col>
    <b-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">sm="6" md="5" offset-md="2" col-lg="6" offset-lg="0"</b-col>
  </b-row>
</b-container>

<!-- b-grid-offset-reset.vue -->
```

### Утилиты полей на колонках

С переходом на flexbox в Bootstrap v4 вы можете использовать служебные классы [margin и spacing](/docs/reference/spacing-classes), такие как `.mr-auto`, чтобы отодвинуть одноуровневые столбцы друг от друга.

```html
<b-container fluid class="text-light text-center">
  <b-row class="mb-3">
    <b-col md="4" class="p-3 bg-info">md="4"</b-col>
    <b-col md="4" class="ml-auto p-3 bg-info">md="4" .ml-auto</b-col>
  </b-row>

  <b-row class="mb-3">
    <b-col md="3" class="ml-md-auto p-3 bg-info">md="3" .ml-md-auto</b-col>
    <b-col md="3" class="ml-md-auto p-3 bg-info">md="3" .ml-md-auto</b-col>
  </b-row>

  <b-row>
    <b-col cols="auto" class="mr-auto p-3 bg-info">cols="auto" .mr-auto</b-col>
    <b-col cols="auto" class="p-3 bg-info">cols="auto"</b-col>
  </b-row>
</b-container>

<!-- b-grid-margins.vue -->
```

## Вложенные сетки

Чтобы вложить ваш контент в сетку по умолчанию, добавьте новый `<b-row>` и набор компонентов `<b-col>` в существующий компонент `<b-col>`. Вложенные строки должны включать набор столбцов, которые в сумме составляют до 12 или меньше (необязательно, чтобы вы использовали все 12 доступных столбцов).

```html
<b-container fluid class="bv-example-row">
  <b-row>
    <b-col sm="9">
      Уровень 1: sm="9"
      <b-row>
        <b-col cols="8" sm="6">Уровень 2: cols="8" sm="6"</b-col>
        <b-col cols="4" sm="6">Уровень 2: cols="4" sm="6"</b-col>
      </b-row>
    </b-col>
  </b-row>
</b-container>

<!-- b-grid-nesting.vue -->
```

## Строка столбцов

<span class="badge badge-info small">Требуется Bootstrap v4.4+ CSS</span>

Используйте отзывчивые свойства `cols-*` в `<b-row>`, чтобы быстро установить количество столбцов, которые лучше всего отображают ваш контент и макет. В то время как обычная ширина столбца применяется к отдельным столбцам `<b-col>` (например, `<b-col md="4">`), свойства столбцов строк `col-*` устанавливаются на родительский элемент `<b-row>` как ярлык.

Используйте эти столбцы строк для быстрого создания базовых макетов сетки или для управления макетами карточек. По умолчанию максимальное количество столбцов строк в Bootstrap v4.4 равно `6` (в отличие от обычных столбцов, которые по умолчанию имеют максимум `12` колонок)

Значение, указанное в свойстве `<b-row>`, представляет собой количество столбцов, создаваемых для каждой строки (тогда как свойства в `<b-col>` относятся к количеству занимаемых столбцов).

```html
<b-container class="bv-example-row mb-3">
  <b-row cols="2">
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
  </b-row>
</b-container>

<b-container class="bv-example-row mb-3">
  <b-row cols="3">
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
  </b-row>
</b-container>

<b-container class="bv-example-row mb-3">
  <b-row cols="4">
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
  </b-row>
</b-container>

<b-container class="bv-example-row">
  <b-row cols="4">
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col cols="6">Колонка</b-col>
    <b-col>Колонка</b-col>
  </b-row>
</b-container>

<!-- b-grid-row-cols-introduction.vue -->
```

Вы можете контролировать количество столбцов на каждом уровне контрольной точки с помощью следующих свойств `<b-row>`:

- `cols` для экранов `xs` и выше
- `cols-sm` для экранов `sm` и выше
- `cols-md` для экранов `md` и выше
- `cols-lg` для экранов `lg` и выше
- `cols-xl` для экранов `xl` и выше

```html
<b-container class="bv-example-row">
  <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="6">
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
    <b-col>Колонка</b-col>
  </b-row>
</b-container>

<!-- b-grid-row-cols-breakpoints.vue -->
```

## Утилиты для макета

Для более быстрой разработки, удобной для мобильных устройств и гибкой реакции, Bootstrap включает в себя десятки [служебных классов](/docs/reference/utility-classes) для отображения, скрытия, выравнивания и размещения содержимого.

### Изменение `display`

Используйте [утилиты отображения](/docs/reference/utility-classes) Bootstrap для быстрого переключения общих значений свойства `display`. Смешайте его с сеткой, контентом или компонентами, чтобы показать или скрыть их в определенных окнах просмотра.

### Параметры Flexbox

Bootstrap 4 построен с использованием flexbox, но не каждый элемент `display` был изменен на `display: flex`, так как это добавило бы множество ненужных переопределений и неожиданно изменило бы поведение основных браузеров. Большинство компонентов построено с включенным flexbox.

Если вам нужно добавить к элементу `display: flex`, сделайте это с помощью `.d-flex` или одного из адаптивных вариантов (например, `.d-sm-flex`). Вам понадобится этот класс или значение `display`, чтобы разрешить использование дополнительных [утилит flexbox](/docs/reference/utility-classes) для изменения размера, выравнивания, интервалов и т. д.

### Поля и отступы

Используйте `margin` и `padding` [утилиты интервалов](/docs/reference/utility-classes), чтобы контролировать расположение элементов и компонентов и их размер. Bootstrap 4 включает пятиуровневую шкалу для интервалов между утилитами, основанную на переменной SASS по умолчанию `$spacer` со значением `1rem`. Выберите значения для всех окон просмотра (например, `.mr-3` для `margin-right: 1rem`), или выберите адаптивные варианты для нацеливания на определенные области просмотра (например, `.mr-md-3` для `margin-right: 1rem` начиная с контрольной точки `md`).

### Переключатель `visibility`

Когда переключение `display` не требуется, вы можете переключать `visibility` элемента с помощью [служебных классов видимости](/docs/reference/utility-classes). Невидимые элементы по-прежнему будут влиять на макет страницы, но визуально скрыты от посетителей.

<!-- Component reference added automatically from component package.json -->
