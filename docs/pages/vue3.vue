<template>
  <b-container id="content" fluid="lg" tag="main" class="py-5">
    <header class="pb-4 bd-content">
      <h1>Переход на Vue.js 3.x</h1>
      <p class="bd-lead">
        BootstrapVue развивается с <code class="text-nowrap" translate="no">@vue-compat</code>!
      </p>
    </header>
    <section class="bd-content">
      С выпуском <b>v2.23.0</b> вы можете начать использовать <span class="bd-text-purple-bright">BootstrapVue</span> с <a href="https://v3-migration.vuejs.org/migration-build.html" target="_blank">migration build</a> Vue.js 3.

      <b-alert show variant="warning" class="mt-3">
        Хотя <code class="text-nowrap" translate="no">@vue/compat</code> может помочь с простыми миграциями, он не предназначен для долгосрочного использования. Мы настоятельно рекомендуем перейти на <a href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/" target="_blank" rel="noopener">BootstrapVueNext</a>, полную переработку, которая поддерживает Bootstrap v5 и полностью использует возможности Vue.js 3.
      </b-alert>

      <h2 id="limitations" class="bv-no-focus-ring mb-3">
        <span class="bd-content-title">Важные ограничения<a href="#prerequisites" aria-labelledby="limitations" class="anchorjs-link"></a></span>
      </h2>
      <p>Поддержка <code class="text-nowrap" translate="no">@vue-compat</code> в настоящее время ограничена конфигурацией <code class="text-nowrap" translate="no">{ MODE: 2 }</code> как для компилятора, так и для Vue.js. Для получения дополнительной информации обратитесь к разделу <a href="https://v3-migration.vuejs.org/migration-build.html#compat-configuration" target="_blank">compat configuration</a> руководства по миграции.</p>
      <p>Это означает, что хотя вы можете настроить отдельные компоненты с помощью <code class="text-nowrap" translate="no">{ compatConfig: { MODE: 3 }}</code>, вы должны поддерживать глобальную конфигурацию в режиме совместимости, чтобы обеспечить правильную работу всех функций BootstrapVue.</p>

      <pre class="hljs language-html text-monospace p-2 notranslate" translate="no">{{ cmpCode }}</pre>

      <h2 id="start" class="bv-no-focus-ring">
        <span class="bd-content-title">Начало работы<a href="#prerequisites" aria-labelledby="start" class="anchorjs-link"></a></span>
      </h2>

      <ul>
        <li>Следуйте <a target="_blank" href="https://v3-migration.vuejs.org/migration-build.html#upgrade-workflow">upgrade workflow</a> для настройки вашего приложения.</li>
        <li>Обновитесь до <b>bootstrap-vue v2.23.0</b> или выше.</li>
        <li>Убедитесь, что вы используете Bootstrap <b>v4</b>.</li>
      </ul>

      <p>Для референсной реализации или для сообщения о проблемах с <code class="text-nowrap" translate="no">@vue/compat</code> вы можете использовать эту <a href="https://stackblitz.com/edit/bootstrap-vue-with-compat">песочницу</a>.</p>

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
        `  // Отключить все устаревшие функции Vue.js 2 для вашего компонента`,
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
    // Подсветка блоков кода
    ;[...this.$el.querySelectorAll('pre.hljs')].forEach(pre => {
      hljs.highlightBlock(pre)
    })
  }
}
</script>
