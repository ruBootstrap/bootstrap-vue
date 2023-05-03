# Медиа

> Медиа-объект помогает создавать сложные и повторяющиеся компоненты, в которых некоторые медиафайлы располагаются рядом с содержимым, которое не окружает упомянутые медиафайлы. Кроме того, благодаря flexbox он делает это всего с двумя обязательными классами.

```html
<div>
  <b-card>
    <b-media>
      <template #aside>
        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0">Заголовок медиа</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>

      <b-media>
        <template #aside>
          <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0">Вложенное медиа</h5>
        <p class="mb-0">
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
        </p>
      </b-media>
    </b-media>
  </b-card>
</div>

<!-- b-media.vue -->
```

## Использование

```html
<div>
  <b-media>
    <template #aside>
      <img src="..." alt="Media Aside">
    </template>

    <h2>Тело медиа</h2>
    <p>Какой-то текст</p>

    <!-- b-[Optional: add media children here for nesting] -->
  </b-media>
</div>
```

## Без тела (с подкомпонентами)

```html
<div>
  <b-card>
    <b-media no-body>
      <b-media-aside vertical-align="center">
        <b-img blank blank-color="#ccc" width="64" height="128" alt="placeholder"></b-img>
      </b-media-aside>

      <b-media-body>
        <h5 class="mt-0">Заголовок медиа</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
          condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p class="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <b-media>
          <template #aside>
            <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0">Вложенное медиа</h5>
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
        </b-media>
      </b-media-body>
    </b-media>
  </b-card>
</div>

<!-- b-media-no-body.vue -->
```

## Порядок

Измените порядок содержимого в медиа-объектах, добавив свойство `right-align`.

```html
<div>
  <b-media right-align vertical-align="center">
    <template #aside>
      <b-img blank blank-color="#ccc" width="80" alt="placeholder"></b-img>
    </template>
    <h5 class="mt-0 mb-1">Медиа-объект</h5>
    <p class="mb-0">
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
      Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </p>
  </b-media>
</div>

<!-- b-media-order.vue -->
```

## Вложенность

Вы можете легко вложить медиа-объекты, включив другой `<b-media>` в тело родителя.

## Вертикальное выравнивание

Сторона может быть выровнена по вертикали с помощью свойства `vertical-align`, установленного в `top`, `center` или `end`.
Выравнивание по умолчанию `top`.

## Медиа-список

Поскольку к медиа-объекту предъявляется мало структурных требований, этот компонент можно использовать в качестве
элемента списка в списках HTML. В вашем `<ul>` или `<ol>` добавьте класс `list-unstyled`, чтобы удалить все стили
списка браузера по умолчанию, а затем используйте компонент `<b-media>` со свойством `tag`, установленным в `li`.
Как всегда, используйте утилиты интервалов везде, где это необходимо для точной настройки.

```html
<div>
  <ul class="list-unstyled">
    <b-media tag="li">
      <template #aside>
        <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
      </template>
      <h5 class="mt-0 mb-1">Медиа-объект на основе списка</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>

    <b-media tag="li" class="my-4">
      <template #aside>
       <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0 mb-1">Медиа-объект на основе списка</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>

    <b-media tag="li">
      <template #aside>
        <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0 mb-1">Медиа-объект на основе списка</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>
  </ul>
</div>

<!-- b-media-list.vue -->
```

<!-- Component reference added automatically from component package.json -->
