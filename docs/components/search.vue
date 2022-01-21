<template>
  <form
    role="search"
    class="bd-search d-flex align-items-center"
    @submit.stop.prevent
  >
    <b-form-input
      id="bd-search-input"
      autocomplete="off"
      type="search"
      placeholder="Поиск..."
      aria-label="Поиск по документации"
    ></b-form-input>
  </form>
</template>

<script>
import { relativeUrl } from '../utils'

let scriptsInjected = false

export default {
  name: 'BVSearch',
  data() {
    return {
      docsearch: null
    }
  },
  mounted() {
    this.loadDocsearch().then(this.initDocsearch)
  },
  methods: {
    async loadDocsearch() {
      if (scriptsInjected) {
        return
      }

      // Search indexing config stored at:
      // https://github.com/algolia/docsearch-configs/blob/master/configs/bootstrap-vue.json

      const cdnBaseUrl = '//cdn.jsdelivr.net/docsearch.js/2/'
      const $body = document.body

      // Load JS
      const loadJs = new Promise(resolve => {
        const $script = document.createElement('script')
        $script.setAttribute('type', 'text/javascript')
        $script.setAttribute('src', `${cdnBaseUrl}docsearch.min.js`)
        $body.appendChild($script)
        $script.onload = resolve
      })

      // Load CSS
      const loadCss = new Promise(resolve => {
        const $link = document.createElement('link')
        $link.setAttribute('rel', 'stylesheet')
        $link.setAttribute('type', 'text/css')
        $link.setAttribute('href', `${cdnBaseUrl}docsearch.min.css`)
        $body.appendChild($link)
        $link.onload = resolve
      })

      await Promise.all([loadJs, loadCss])

      scriptsInjected = true
    },
    initDocsearch() {
      if (this.docsearch) {
        return
      }
      // Initialize docsearch
      this.docsearch = window.docsearch({
        appId: 'OPPH7VYZ15',
        apiKey: '8db8f080dda4de386bf585d70483f095',
        indexName: 'bootstrap-vue-ru',
        inputSelector: '#bd-search-input',
        transformData(hits) {
          return hits.map(function(hit) {
            // Transform URL to a relative URL
            hit.url = relativeUrl(hit.url)

            return hit
          })
        },
        // Set debug to `true` if you want to inspect the dropdown
        debug: false
      })
    }
  }
}
</script>
