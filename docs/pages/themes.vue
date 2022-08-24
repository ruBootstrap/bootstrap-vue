<template>
  <b-container id="content" fluid="lg" tag="main" class="pb-5">
    <section>
      <header class="bd-content pb-4">
        <h1>Пользовательские темы и информационные панели</h1>
        <p class="lead">
          С темами и информационными панелями, созданными нашими партнерами, вы можете создавать привлекательные приложения и страницы &mdash; все используют BootstrapVue! Следующие элементы были подготовлены командой BootstrapVue.
        </p>
      </header>

      <article v-if="!themes || themes.length === 0" class="bvd-theme text-center mb-5">
        <b-card bg-varinatt="light">
          <BvLogo class="mx-auto"></BvLogo>
          <h2 class="display-4 font-weight-bold text-dark mt-3">Скоро будет!</h2>
          <p class="card-text">Темы появятся в ближайшее время.</p>
        </b-card>
      </article>

      <article
        v-for="(theme, idx) in themes"
        :key="idx"
        :aria-labelledby="`theme-label-${idx}`"
        class="bvd-theme mb-5"
      >
        <b-card no-body bg-variant="light">
          <b-row no-gutters>
            <b-col
              md="6"
              lg="4"
              xl="4"
              class="bg-dark"
              aria-hidden="true"
            >
              <b-aspect aspect="4:3" class="h-100 align-items-center">
                <b-card-img-lazy
                  :src="theme.img"
                  alt="Image"
                  blank-width="800"
                  blank-height="600"
                  class="rounded-0"
                ></b-card-img-lazy>
              </b-aspect>
            </b-col>
            <b-col class="d-flex flex-column p-4">
              <!-- We use `<h2>` for correct semantics, but `.h5` style -->
              <h2 :id="`theme-label-${idx}`" class="h5 mb-3">{{ theme.title }}</h2>
              <b-card-text class="flex-grow-1">{{ theme.description }}</b-card-text>
              <b-card-text class="text-muted small">
                <span class="d-block d-lg-inline-block mb-2 mb-lg-0"><strong>Категория:</strong> {{ theme.category }}</span>
                <span class="d-block d-lg-inline-block ml-lg-3"><i><strong>Предоставлено:</strong> {{ theme.provider }}</i></span>
              </b-card-text>
              <b-card-text class="d-flex align-items-center">
                <b-button :href="theme.href" target="_blank" variant="bd-primary">
                  Получить {{ theme.type || 'theme' }}
                </b-button>
                <span v-if="theme.price" class="text-muted position-relative ml-3">
                  <strong>Стоимость:</strong> {{ theme.price }}<b-link href="#theme-notes" title="Смотреть примечания">*</b-link>
                </span>
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </article>

      <aside id="theme-notes" class="text-muted mb-3" aria-labelledby="theme-notes-heading">
        <h2 id="theme-notes-heading" class="h6">Примечания:</h2>
        <ul class="small">
          <li>
            Цены указаны в долларах США. Цены подвержены изменениям. Текущие цены смотрите на веб-сайте вендора/провайдера.
          </li>
          <li>
            Лицензии на темы обычно предоставляются для каждого сайта (если не указано иное). Информацию о лицензировании см. в документации тематического сайта.
          </li>
          <li>
            BootstrapVue не гарантирует, что все пользовательские компоненты, предоставляемые темой, совместимы с WIA-ARIA. За подробностями обратитесь к документации провайдера.
          </li>
          <li>
            BootstrapVue получает комиссию за темы, приобретенные по вышеуказанным партнерским ссылкам.
          </li>
          <li>
            Обратитесь к <b-link to="/docs/reference/theming">разделу Тем</b-link> для получения подробной информации о включении файлов SCSS пользовательских тем.
          </li>
        </ul>
      </aside>

      <aside id="theme-providers" class="text-muted" aria-labelledby="theme-provider-heading">
        <h2 id="theme-provider-heading" class="h6">Вы представитель темы?</h2>
        <p class="small mb-2">
          Если вы заинтересованы в том, чтобы стать партнером и разместить свою тему или информационную панель на этой странице, ваш продукт должен соответствовать следующим требованиям:
        </p>
        <ul class="small">
          <li>Он должен быть основан на компонентах BootstrapVue (или расширять их).</li>
          <li>
            Должен быть совместим с BootstrapVue, чтобы пользователи могли при желании включать собственные компоненты BootstrapVue.
          </li>
          <li>
            Следует избегать необходимости в файлах JavaScript jQuery или Bootstrap v4 (за исключением включенных сторонних компонентов, если это необходимо).
          </li>
          <li>Должен предоставить исходные файлы/переменные SCSS/SASS.</li>
          <li>Следует продвигать, что он основан на (или совместим с) <i>BootstrapVue</i>.</li>
          <li>
            Пользовательские компоненты, предоставляемые темой, должны быть доступны через WAI-ARIA. Любые ограничения WAI-ARIA должны быть отмечены в документации к теме.
          </li>
        </ul>
      </aside>
    </section>
  </b-container>
</template>

<script>
import BvLogo from '~/components/bv-logo'

export default {
  components: { BvLogo },
  async asyncData({ $content }) {
    // Themes are stored as YAML files in `docs/content/themes`
    // The theme preview image should be 800x400px (and 4:3 aspect ratio)
    // Data structure:
    //   title: 'Superduper Dashboard - PRO'
    //   type: 'dashboard'
    //   category: 'Admin & Dashboard'
    //   img: 'https://picsum.photos/800/600/?image=84'
    //   href: '#'
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //   provider: 'Innovative Ivan'
    //   price: '$100.00'
    const themes = await $content('themes').fetch()

    return {
      themes
    }
  },
  head() {
    const title = `${this.title} | BootstrapVue`
    const description = 'Темы премиум-класса и информационные панели на основе BootstrapVue.'
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        }
      ]
    }
  },
  computed: {
    title() {
      return 'Темы и панели'
    }
  }
}
</script>

<style lang="scss" scoped>
.bv-logo {
  // BV Logo (SVG)
  width: 280px;
  height: 280px;
}

@media (max-width: 991px) {
  // Shrink the display text a bit on smaller screens
  // Only used if no themes are available
  .display-4 {
    font-size: 2.5rem;
  }
}

.bvd-theme {
  .card {
    // Simple way to get rounded corners on the images
    overflow: hidden;
    // Add some shadow
    box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.06);
  }
}
</style>
