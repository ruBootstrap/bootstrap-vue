<template>
  <b-container id="content" fluid="lg" tag="main" class="py-5">
    <header class="pb-4 bd-content">
      <h1>Начальная поддержка Vue.js 3.x</h1>
      <p class="bd-lead">
        BootstrapVue соответствует <code class="text-nowrap" translate="no">@vue-compat</code>!
      </p>
    </header>
    <section class="bd-content">
      С выпуском <b>v2.23.0</b> теперь вы можете использовать <span class="bd-text-purple-bright">BootstrapVue</span> с <a href="https://v3-migration.vuejs.org/migration-build.html" target="_blank">миграционной сборкой</a> Vue.js 3

      <b-alert show variant="warning" class="mt-3">
        Поддержка @vue/compat предназначена для ранней миграции на Vue.js 3 и в конечном итоге будет заменена на bootstrap-vue 3.0
      </b-alert>
      <h2 id="limitations" class="bv-no-focus-ring mb-3">
        <span class="bd-content-title">Важные ограничения<a href="#prerequisites" aria-labelledby="limitations" class="anchorjs-link"></a></span>
      </h2>
      <p><code class="text-nowrap" translate="no">@vue-compat</code> в настоящее время ограничена конфигурацией <code class="text-nowrap" translate="no">{ MODE: 2 }</code> как для компилятора, так и для самого Vue.js.
        Вы можете найти более подробную информацию в <a href="https://v3-migration.vuejs.org/migration-build.html#compat-configuration" target="_blank">разделе конфигурации</a> совместимости руководства по миграции.
      </p>
      <p>Это означает, что вы можете вручную настроить каждый свой компонент с помощью <code class="text-nowrap" translate="no">{ compatConfig: { MODE: 3 }}</code>, чтобы он был готов к переходу на Vue.js 3, однако глобальная конфигурация должна быть сохранена в устаревшем режиме, чтобы все функции BootstrapVue работали</p>

      <pre class="hljs language-html text-monospace p-2 notranslate" translate="no">{{ cmpCode }}</pre>


      <h2 id="start" class="bv-no-focus-ring">
        <span class="bd-content-title">Начало работы<a href="#prerequisites" aria-labelledby="start" class="anchorjs-link"></a></span>
      </h2>

      <ul>
        <li>Настройте свое приложение в соответствии с <a target="_blank" href="https://v3-migration.vuejs.org/migration-build.html#upgrade-workflow">рабочим процессом обновления</a></li>
        <li>Обновите bootstrap-vue до версии <b>v2.23.0</b> или выше</li>
        <li>Убедитесь, что вы все еще используете bootstrap <b>v4</b></li>
      </ul>

      <p>Вы можете использовать эту <a href="https://stackblitz.com/edit/bootstrap-vue-with-compat">sandbox</a> для справки или сообщения о проблемах с @vue/compat</p>

    </section>
  </b-container>
</template>

<script>
import hljs from '../utils/hljs'

export default {
  head() {
    const title = `Поддержка Vue.js 3 | BootstrapVue`
    return {
      title
    }
  },
  computed: {
    cmpCode() {
      return [
        `<template>...</template>`,
        `<script>`,
        `export default {`,
        `  data() { /* ... */ },`,
        ``,
        `  // Это отключит все устаревшие функции Vue.js 2 для вашего компонента`,
        `  compatConfig: { MODE: 3 }`,
        ``,
        ` // ... остальная часть конфигурации вашего компонента ... `,
        `}`,
        // eslint-disable-next-line no-useless-escape
        `<\/script>`
      ].join('\n')
    }
  },
  mounted() {
    // Highlight code blocks
    ;[...this.$el.querySelectorAll('pre.hljs')].forEach(pre => {
      hljs.highlightBlock(pre)
    })
  }
}
</script>
