<template>
  <footer :class="['bd-footer', 'text-muted', { 'docs-border': isDocs }]">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" sm order-sm="3" class="text-center text-sm-right">
          <b-link to="/" class="d-inline-block mx-auto">
            <BvLogo width="120" height="120" class="img-fluid mb-4 mb-sm-0"></BvLogo>
          </b-link>
        </b-col>

        <b-col cols="auto" md="4" class="text-left">
          <h5 class="bd-text-purple-bright mb-1">Документация</h5>
          <ul class="list-unstyled ml-3">
            <li><b-link to="/" exact>Главная</b-link></li>
            <li><b-link to="/docs" exact>С чего начать</b-link></li>
            <li><b-link to="/docs/components" exact>Компоненты</b-link></li>
            <li><b-link to="/docs/directives" exact>Директивы</b-link></li>
            <li><b-link to="/docs/icons" exact>Иконки</b-link></li>
            <li><b-link to="/docs/reference" exact>Справка</b-link></li>
            <li><b-link to="/play" exact>Плейграунд</b-link></li>
          </ul>
          <h5 class="bd-text-purple-bright mb-1 mt-3">Темы</h5>
          <ul class="list-unstyled ml-3">
            <li><b-link to="/themes" exact>Темы и информационные панели</b-link></li>
          </ul>
        </b-col>

        <b-col cols="auto" class="text-left">
          <h5 class="bd-text-purple-bright mb-1">Сообщество</h5>
          <ul class="list-unstyled ml-3">
            <li><a href="https://github.com/bootstrap-vue/bootstrap-vue" target="_blank">GitHub</a></li>
            <li><a href="https://discord.gg/j2Mtcny" target="_blank">Discord чат</a></li>
            <li><a href="https://twitter.com/BootstrapVue" target="_blank">Twitter</a></li>
            <li><a href="https://opencollective.com/bootstrap-vue/" target="_blank">Open Collective</a></li>
          </ul>
          <h5 class="bd-text-purple-bright mb-1 mt-3">Примечания к выпуску</h5>
          <ul class="list-unstyled ml-3">
            <li><b-link to="/docs/reference/changelog" exact>Журнал изменений</b-link></li>
          </ul>
        </b-col>
      </b-row>

      <hr>

      <p class="mb-2">
        Разработан и построен с любовью в мире. Поддерживается
        <a href="https://github.com/orgs/bootstrap-vue/people" target="_blank">основной командой</a>
        с помощью
        <a href="https://github.com/bootstrap-vue/bootstrap-vue/graphs/contributors" target="_blank">наших участников</a>.
      </p>

      <p>
        В настоящее время v{{ version }}. Код под лицензией
        <a href="https://github.com/bootstrap-vue/bootstrap-vue/blob/master/LICENSE" target="_blank">MIT</a>.
        Документация создана с помощью
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a><template v-if="!isNetlify && !isVercel">.</template>
        <template v-if="isNetlify">
          и гордо хостится на <a href="https://www.netlify.com" target="_blank">Netlify</a>.
        </template>
        <template v-else-if="isVercel">
          и гордо хостится на <a href="https://vercel.com/?utm_source=bootstrapvue" target="_blank">Vercel</a>.
        </template>
      </p>

      <template v-if="isVercel">
        <p class="mt-3 text-center">
          <a href="https://vercel.com/?utm_source=bootstrapvue" target="_blank" rel="noopener">
            <img src="~assets/powered-by-vercel.svg" width="159" height="33">
          </a>
        </p>
      </template>
    </b-container>
  </footer>
</template>

<script>
import { version } from '~/content'
import BvLogo from '~/components/bv-logo'

export default {
  name: 'BVFooter',
  components: { BvLogo },
  props: {
    isDocs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { version }
  },
  computed: {
    isNetlify() {
      return Boolean(process.env.NETLIFY)
    },
    isVercel() {
      return Boolean(process.env.VERCEL_NOW)
    }
  }
}
</script>

<style scoped>
.bv-logo {
  margin-top: -2rem;
}

.docs-border {
  border-top: 3px solid #dee2e6;
}

@media (min-width: 1200px) {
  .bd-footer > .container {
    max-width: 960px;
  }
}
</style>
