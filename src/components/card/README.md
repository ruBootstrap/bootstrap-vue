# Карточка

> Карточка - это гибкий и расширяемый контейнер содержимого. Он включает в себя варианты верхних и нижних колонтитулов, широкий спектр контента, контекстные цвета фона и мощные параметры отображения.

## Обзор

Карточки построены с минимальным количеством разметки и стилей, насколько это возможно, но при этом обеспечивают тонну контроля и настройки. Созданные с помощью флексбокс, они легко выравниваются и хорошо сочетаются с другими компонентами.

`<b-card>` не имеет фиксированной ширины для начала, поэтому они естественным образом заполняют всю ширину своего родительского элемента. Это легко настроить с помощью стилей или стандартных классов размеров Bootstrap v4.

Измените корневой тег по умолчанию `div` на любой другой элемент HTML, указав через свойство `tag`.

```html
<div>
  <b-card
    title="Заголовок карточки"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Изображение"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.
    </b-card-text>

    <b-button href="#" variant="primary">Иди куда-нибудь</b-button>
  </b-card>
</div>

<!-- b-card.vue -->
```

## Типы контента

Карточки поддерживают широкий спектр содержимого, включая изображения, текст, группы списков, ссылки и многое другое. Ниже приведены примеры того, что поддерживается внутри `<b-card>`

### Тело карточки

Строительным блоком `<b-card>` является раздел `<b-card-body>`, который обеспечивает заполненный раздел внутри карты.

По умолчанию содержимое `<b-card>` автоматически помещается в раздел `<b-card-body>`:

```html
<div>
  <b-card class="text-center">
    <div class="bg-secondary text-light">
      Это часть содержимого по умолчанию в блоке <samp>&lt;b-card-body&gt;</samp> компонента <samp>&lt;b-card&gt;</samp>. Обратите внимание на отступ между рамкой карточки и этим серым <samp>&lt;div&gt;</samp>.
    </div>
  </b-card>
</div>

<!-- b-card-body.vue -->
```

Отключите автоматический раздел `<b-card-body>` (и связанное с ним заполнение), установив свойство `no-body` в `<b-card>`.

```html
<div>
  <b-card no-body class="text-center">
    <div class="bg-secondary text-light">
      Это некоторый контент без раздела по умолчанию <samp>&lt;b-card-body&gt;</samp>. Обратите внимание на отсутствие отступов между рамкой карточки и этим серым <samp>&lt;div&gt;</samp>.
    </div>
  </b-card>
</div>

<!-- b-card-body-no-body.vue -->
```

Обратите внимание, что с включенным параметром `no-body` содержимое свойств `title` и `sub-title` отображаться не будет.

Используйте подкомпонент `<b-card-body>`, чтобы разместить собственное тело карты в любом месте компонента `<b-card>`, для которого установлено значение `no-body`.

#### Заголовки, текст и ссылки

_Заголовки карточек_ добавляются через свойство `title`, а _подзаголовки_ добавляются через свойство `sub-title`.
Заголовок отображается с помощью подкомпонента `<b-card-title>`, в то время как подзаголовок отображается с помощью подкомпонента `<b-card-sub-title>`.

С помощью подкомпонента `<b-card-text>` текст абзаца может быть добавлен к карточке. Нижнее поле последнего `<b-card-text>` в теле карточки будет автоматически удалено (через CSS). Текст внутри `<b-card-text>` также можно стилизовать с помощью стандартных тегов HTML.

Ссылки могут быть добавлены и размещены рядом друг с другом путем добавления класса `.card-link` к тегу `<a>` (или компоненту `<b-link>`).

```html
<div>
  <b-card title="Заголовок карточки" sub-title="Подзаголовок карточки">
    <b-card-text>
      Небольшой пример текста, который должен основываться на <em>заголовке карточки</em> и составлять основную часть содержимого карточки.
    </b-card-text>

    <b-card-text>Второй абзац текста на карточке.</b-card-text>

    <a href="#" class="card-link">Ссылка карточки</a>
    <b-link href="#" class="card-link">Другая ссылка</b-link>
  </b-card>
</div>

<!-- b-card-text.vue -->
```

### Изображения

Свойство `img-src` компонента `<b-card>` помещает изображение в верхнюю часть карты и использует свойство `img-alt`, чтобы указать строку, которая будет помещена в атрибут изображения `alt`. Изображение, указанное опцией `img-src`, будет отзывчивым и будет регулировать свою ширину при изменении ширины карты.

В качестве альтернативы вы можете вручную разместить изображения внутри `<b-card>` с помощью подкомпонента `<b-card-img>`. Смотрите пример использования ниже.

```html
<div>
  <div>
    <h4>Верх и низ</h4>
    <b-card-group deck>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Изображение карточки" img-top>
        <b-card-text>
          Небольшой пример текста, который можно построить на карточке и составить основную часть содержимого карточки.
        </b-card-text>
      </b-card>

      <b-card img-src="https://placekitten.com/1000/300" img-alt="Изображение карточки" img-bottom>
        <b-card-text>
          Небольшой пример текста, который можно построить на карточке и составить основную часть содержимого карточки.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-4">
    <h4>Лево и право (или начало и конец)</h4>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Изображение карточки" img-left class="mb-3">
      <b-card-text>
        Небольшой пример текста, который можно построить на карточке и составить основную часть содержимого карточки.
      </b-card-text>
    </b-card>

    <b-card img-src="https://placekitten.com/300/300" img-alt="Изображение карточки" img-right>
      <b-card-text>
        Небольшой пример текста, который можно построить на карточке и составить основную часть содержимого карточки.
      </b-card-text>
    </b-card>
  </div>
</div>

<!-- b-card-img.vue -->
```

**Примечание:** Для левого и правого изображений вам может потребоваться применить дополнительные стили к классам `.card-img-left` и `.card-img-right`, поскольку изображения будут "растягиваться" по высоте, если у вас есть контент, который выше вашего изображения. Верхние и нижние колонтитулы заметок не поддерживаются, если изображения выровнены по левому или правому краю. Вы можете найти пример [Горизонтальный макет карточки](#horizontal-card-layout) более гибким при создании адаптивной горизонтальной карты.

#### Наложение изображения

Поместите изображение на задний план карты, установив логическое свойство `overlay`:

```html
<div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Изображение карточки"
    text-variant="white"
    title="Наложение изображения"
    sub-title="Подзаголовок"
  >
    <b-card-text>
      Небольшой пример текста, который можно построить на карточке и составить основную часть содержимого карточки.
    </b-card-text>
  </b-card>
</div>

<!-- b-card-overlay-img-.vue -->
```

#### Отложенная загрузка изображений

Используйте подкомпонент `<b-card-img-lazy>` для отложенной загрузки изображений по мере их прокрутки в поле зрения. `<b-card-img-lazy>` поддерживает те же свойства, что и `<b-card-img>`, а также многие из свойств [`<b-img-lazy>`](/docs/components/image#lazy-loaded-images) компонента.

### Верхний и нижний колонтитулы

Добавьте необязательный верхний и / или нижний колонтитул в карточку через свойства `header`/`footer` или именованные слоты.
Вы можете управлять используемыми тегами элементов оболочки, установив свойства `header-tag` и `footer-tag` (оба по умолчанию - `div`)

```html
<div>
  <b-card-group deck>
    <b-card
      header="featured"
      header-tag="header"
      footer="Нижний колонтитул карточки"
      footer-tag="footer"
      title="Заголовок"
    >
      <b-card-text>Верхний и нижний колонтитулы с использованием свойств.</b-card-text>
      <b-button href="#" variant="primary">Иди куда-нибудь</b-button>
    </b-card>

    <b-card title="Заголовок" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Слот верхнего колонтитула</h6>
      </template>
      <b-card-text>Верхний и нижний колонтитулы с использованием слотов.</b-card-text>
      <b-button href="#" variant="primary">Иди куда-нибудь</b-button>
      <template #footer>
        <em>Слот нижнего колонтитула</em>
      </template>
    </b-card>
  </b-card-group>
</div>

<!-- b-card-header-footer.vue -->
```

### Бытовой пример

Комбинируйте несколько типов контента, чтобы создать нужную вам карточку, или добавьте туда все.
Ниже показаны стили изображения, блоки, стили текста и группа списков - все они заключены в карточку фиксированной ширины.

```html
<div>
  <b-card
    no-body
    style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">Привет мир</h4>
    </template>

    <b-card-body>
      <b-card-title>Заголовок карточки</b-card-title>
      <b-card-sub-title class="mb-2">Подзаголовок карточки</b-card-sub-title>
      <b-card-text>
        Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <b-card-body>
      <a href="#" class="card-link">Ссылка карточки</a>
      <a href="#" class="card-link">Другая ссылка</a>
    </b-card-body>

    <b-card-footer>Это нижний колонтитул</b-card-footer>

    <b-card-img src="https://placekitten.com/480/210" alt="Изображение" bottom></b-card-img>
  </b-card>
</div>

<!-- b-card-kitchen-sink.vue -->
```

## Горизонтальный макет карточки

Используя комбинацию компонентов сетки, служебных классов и отдельных подкомпонентов карты, карты можно сделать горизонтальными, удобными для мобильных устройств и гибкими.

В приведенном ниже примере мы удаляем желоба сетки строк с помощью свойства `no-gutters` в `<b-row>` и используем свойства `md` в `<b-col>`, чтобы сделать карточку горизонтальной в контрольной точке `md`. Класс `rounded-0` удаляет округление углов `<b-card-img>`, в то время как класс `overflow-hidden` в `<b-card>` будет соответствующим образом обрезать углы изображения на основе радиуса границы карточки. В зависимости от содержимого вашей карточки могут потребоваться дополнительные корректировки.

```html
<div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Изображение" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Горизонтальная карточка">
          <b-card-text>
            Это более широкая карточка с вспомогательным текстом, который естественным образом ведет к дополнительному контенту.
            Этот контент немного длиннее.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>

<!-- b-card-horizontal.vue -->
```

## Варианты текста

По умолчанию в карточках используется темный текст и используется светлый фон. Вы можете отменить это, переключая цвет текста внутри карточки, а также цвет подкомпонентов карточки, через свойство `text-variant`.
Затем укажите вариант темного фона.

```html
<b-card bg-variant="dark" text-variant="white" title="Заголовок карточки">
  <b-card-text>
    С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.
  </b-card-text>
  <b-button href="#" variant="primary">Иди куда-нибудь</b-button>
</b-card>

<!-- b-card-text-variants.vue -->
```

## Варианты фона и границы

Карточки содержат собственный вариантный стиль для быстрого изменения цвета фона и карточки с помощью свойств `bg-variant` и `border-variant`. Для более темных сплошных вариантов может потребоваться установка свойства `text-variant` для настройки цвета текста.

### Сплошной

```html
<div>
  <div>
    <b-card-group deck>
      <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card header="Default" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div>

<!-- b-card-variants.vue -->
```

### С рамками

```html
<div>
  <div>
    <b-card-group deck>
      <b-card
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="secondary"
        header="Secondary"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="success" header="Success" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card border-variant="info" header="Info" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="warning"
        header="Warning"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="danger"
        header="Danger"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck class="mb-3">
      <b-card border-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="dark" header="Dark" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div>

<!-- b-card-border-variants.vue -->
```

#### Вариант сопоставления классов

Варианты BootstrapVue `<b-card>` напрямую сопоставляются с классами карточек Bootstrap v4 путем предварительного добавления `bg-` (для сплошного) или `border-` (для с рамкой) к вышеуказанным именам вариантов.

### Варианты верхнего и нижнего колонтитулов

Вы также можете применить варианты сплошного и рамочного цветов по отдельности к верхним и нижним колонтитулам карточек с помощью `header-bg-variant`, `header-border-variant`, `header-text-variant`, `footer-bg-variant`, `footer-border-variant` и `footer-text-variant`.

```html
<div>
  <b-card
    header="Card Header"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Нижний колонтитул карточки"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Заголовок"
    style="max-width: 20rem;"
  >
    <b-card-text>Варианты верхнего и нижнего колонтитулов.</b-card-text>
  </b-card>
</div>

<!-- b-card-header-footer-variant.vue -->
```

### Передача смысла вспомогательным технологиям

Использование цвета для добавления смысла обеспечивает только визуальную индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана. Убедитесь, что информация, обозначенная цветом, либо очевидна из самого контента (например, видимый текст), либо включена с помощью альтернативных средств, таких как дополнительный текст, скрытый с помощью класса `.sr-only`.

## Интеграция с навигацией

Легко интегрируйте [`<b-nav>`](/docs/components/nav) в заголовки карточек.

**Использование слота `header`**:

```html
<div>
  <b-card title="Заголовок карточки" body-class="text-center" header-tag="nav">
    <template #header>
      <b-nav card-header tabs>
        <b-nav-item active>Активная</b-nav-item>
        <b-nav-item>Неактивная</b-nav-item>
        <b-nav-item disabled>Отключенная</b-nav-item>
      </b-nav>
    </template>

    <b-card-text>
      С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.
    </b-card-text>

    <b-button variant="primary">Иди куда-нибудь</b-button>
  </b-card>
</div>

<!-- card-with-nav-header-slot.vue -->
```

**Использование подкомпонента `<b-card-header>`:**

```html
<div>
  <b-card no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Активная</b-nav-item>
        <b-nav-item>Неактивная</b-nav-item>
        <b-nav-item disabled>Отключенная</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-title>Заголовок карточки</b-card-title>

      <b-card-text>
        С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.
      </b-card-text>

      <b-button variant="primary">Иди куда-нибудь</b-button>
    </b-card-body>
  </b-card>
</div>

<!-- card-with-nav-header-component.vue -->
```

Для получения дополнительной информации об использовании `<b-nav>` в заголовках карточек обратитесь к [документации Навигации](/docs/components/nav).

## Группы карточек

Помимо стилизации содержимого карточек, BootstrapVue включает компонент `<b-card-group>` для размещения серий карточек. В настоящее время эти параметры макета еще не работают.

### Группа карточек по умолчанию

Используйте группы карточек, чтобы отображать карточки как один прикрепленный элемент с столбцами одинаковой ширины и высоты.
Группы карт используют `display: flex`; чтобы добиться их однородной калибровки.

При использовании групп карточек с нижними колонтитулами их содержимое будет автоматически выровнено.

```html
<div>
  <b-card-group>
    <b-card title="Заголовок" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        Это более широкая карточка с вспомогательным текстом ниже как естественный ввод к дополнительному контенту.
        Этот контент немного длиннее.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Последнее обновление: 3 мин. назад</small>
      </template>
    </b-card>

    <b-card title="Заголовок" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        Под этой карточкой есть вспомогательный текст, который является естественным введением к дополнительному содержанию.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Последнее обновление: 3 мин. назад</small>
      </template>
    </b-card>

    <b-card title="Заголовок" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        Это более широкая карточка с вспомогательным текстом ниже как естественный ввод к дополнительному контенту.
        Эта карточка имеет даже более длинное содержание, чем первая, чтобы показать действие одинаковой высоты.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Последнее обновление: 3 мин. назад</small>
      </template>
    </b-card>
  </b-card-group>
</div>

<!-- b-card-group.vue -->
```

### Группы колод карточек

Нужен набор карточек одинаковой ширины и высоты, которые не прикреплены друг к другу? Используйте карточные колоды, установив свойство `deck`. И, как и в случае с обычными группами карточек, нижние колонтитулы карточек в колодах автоматически выстраиваются в линию.

```html
<div>
  <b-card-group deck>
    <b-card title="Заголовок" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        Это более широкая карточка с вспомогательным текстом ниже как естественный ввод к дополнительному контенту.
        Этот контент немного длиннее.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Последнее обновление: 3 мин. назад</small>
      </template>
    </b-card>

    <b-card title="Заголовок" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        Под этой карточкой есть вспомогательный текст, который является естественным введением к дополнительному содержанию.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Последнее обновление: 3 мин. назад</small>
      </template>
    </b-card>

    <b-card title="Заголовок" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        Это более широкая карточка с вспомогательным текстом ниже как естественный ввод к дополнительному контенту.
        Эта карточка имеет даже более длинное содержание, чем первая, чтобы показать действие одинаковой высоты.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Последнее обновление: 3 мин. назад</small>
      </template>
    </b-card>
  </b-card-group>
</div>

<!-- b-card-group-deck.vue -->
```

### Группы столбцов карточек

Карточки могут быть организованы в столбцы, подобные масонству, путем их упаковки в `<b-card-group>` с набором свойств `columns`. Карточки построены с использованием свойств столбца CSS вместо гибкого бокса для упрощения выравнивания. Карты располагаются сверху вниз и слева направо.

Берегись! Ваш пробег с карточными столбцами может отличаться. Чтобы карточки не разбивались по столбцам, мы должны настроить их на `display: inline-block` как `column-break-inside: avoid` - это еще не пуленепробиваемое решение.

```html
<div>
  <b-card-group columns>
    <b-card
      title="Название карточки, которое переносится на новую строку"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        Это более широкая карточка с вспомогательным текстом ниже как естественный ввод к дополнительному контенту.
        Этот контент немного длиннее.
      </b-card-text>
    </b-card>

    <b-card header="Цитата">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Кто-то, известный в <cite title="Название источника">Название источника</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card title="Заголовок" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        Под этой карточкой есть вспомогательный текст, который является естественным введением к дополнительному содержанию.
      </b-card-text>
      <b-card-text class="small text-muted">Последнее обновление: 3 мин. назад</b-card-text>
    </b-card>

    <b-card bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Кто-то, известный в <cite title="Название источника">Название источника</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card>
      <b-card-title>Заголовок</b-card-title>
      <b-card-text>
        Под этой карточкой есть вспомогательный текст, который является естественным введением к дополнительному содержанию.
      </b-card-text>
      <b-card-text class="small text-muted">Последнее обновление: 3 мин. назад</b-card-text>
    </b-card>

    <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

    <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <b-card-text>
        Это более широкая карточка с вспомогательным текстом ниже как естественный ввод к дополнительному контенту.
        Эта карточка имеет даже более длинный контент, чем первая.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Текст нижнего колонтитула</small>
      </template>
    </b-card>
  </b-card-group>
</div>

<!-- b-card-group-columns.vue -->
```

<!-- Component reference added automatically from component package.json -->
