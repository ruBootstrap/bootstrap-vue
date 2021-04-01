# Аспект

> Компонент `<b-aspect>` может использоваться для поддержания минимального адаптивного соотношения сторон содержимого.
> Когда содержимое превышает доступную высоту, компонент будет расширяться по вертикали, чтобы вместить все содержимое.
> Если содержимое короче, чем вычисленная высота аспекта, компонент будет обеспечивать поддержание минимальной высоты.

## Обзор

По умолчанию [aspect](<https://en.wikipedia.org/wiki/Aspect_ratio_(image)>) соотношение равно `1:1` (соотношение `1`), что делает высоту всегда как минимум одинаковой, как ширина. Свойство `aspect` можно использовать для указания произвольного соотношения сторон (например, `1.5`) или соотношения в виде строки, например `'16:9'` или `'4:3'`.

Ширина всегда будет составлять 100% доступной ширины родительского элемента/компонента.

```html
<template>
  <div>
    <b-form-group label="Aspect ratio" label-for="ratio" label-cols-md="auto" class="mb-3">
      <b-form-select id="ratio" v-model="aspect" :options="aspects"></b-form-select>
    </b-form-group>
    <b-card>
      <b-aspect :aspect="aspect">
        Это всегда будет аспект "{{ aspect }}", за исключением случаев, когда содержание слишком высокое.
      </b-aspect>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        aspect: '16:9',
        aspects: [
          { text: '4:3 (SD)', value: '4:3' },
          { text: '1:1 (Square)', value: '1:1' },
          { text: '16:9 (HD)', value: '16:9' },
          { text: '1.85:1 (Widescreen)', value: '1.85:1' },
          { text: '2:1 (Univisium/Superscope)', value: '2:1' },
          { text: '21:9 (Anamorphic)', value: '21:9' },
          { text: '1.43:1 (IMAX)', value: '1.43:1' },
          { text: '3:2 (35mm Film)', value: '3:2' },
          { text: '3:1 (APS-P)', value: '3:1' },
          { text: '4/3 (Same as 4:3)', value: 4 / 3 },
          { text: '16/9 (Same as 16:9)', value: 16 / 9 },
          { text: '3 (Same as 3:1)', value: 3 },
          { text: '2 (Same as 2:1)', value: 2 },
          { text: '1.85 (Same as 1.85:1)', value: 1.85 },
          { text: '1.5', value: 1.5 },
          { text: '1 (Same as 1:1)', value: 1 }
        ]
      }
    }
  }
</script>

<!-- b-aspect.vue -->
```

## Смотрите также

- [Компонент `<b-embed>`](/docs/components/embed) для адаптивных встраиваний (видео, фреймы и т. д.)
