<template>
  <section
    v-if="components.length > 0 || directives.length > 0"
    class="bd-content"
  >
    <template v-if="components.length > 0">
      <article class="bd-content">
        <anchored-heading id="importing-individual-components" level="3">
          Импорт отдельных компонентов
        </anchored-heading>

        <p>
          Вы можете импортировать отдельные компоненты в свой проект с помощью следующих именованных экспортов:
        </p>

        <b-table
          :items="componentImports"
          :fields="[{ key: 'component', label: 'Компонент' }, { key: 'namedExport', label: 'Именованный экспорт' }, { key: 'importPath', label: 'Путь импорта' }]"
          table-class="bv-docs-table"
          responsive="sm"
          head-variant="default"
          bordered
          striped
        >
          <template #cell(component)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          </template>
          <template #cell(namedExport)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          </template>
          <template #cell(importPath)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          </template>
        </b-table>

        <p><strong>Пример:</strong></p>
        <pre class="hljs language-js text-monospace p-2 notranslate" translate="no">{{ componentImportCode }}</pre>
      </article>
    </template>

    <template v-if="directives.length > 0">
      <article class="bd-content">
        <anchored-heading id="importing-individual-directives" level="3">
          Импорт отдельных директив
        </anchored-heading>

        <p>
          Вы можете импортировать отдельные директивы в свой проект с помощью следующих именованных экспортов:
        </p>

        <b-table
          :items="directiveImports"
          :fields="[{ key: 'directive', label: 'Директива' }, { key: 'namedExport', label: 'Именованный экспорт' }, { key: 'importPath', label: 'Путь импорта' }]"
          table-class="bv-docs-table"
          responsive="sm"
          head-variant="default"
          bordered
          striped
        >
          <template #cell(directive)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          </template>
          <template #cell(namedExport)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          </template>
          <template #cell(importPath)="{ value }">
            <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          </template>
        </b-table>

        <p><strong>Пример:</strong></p>
        <pre class="hljs language-js text-monospace p-2 notranslate" translate="no">{{ directiveImportCode }}</pre>
      </article>
    </template>

    <article class="bd-content">
      <anchored-heading id="importing-as-a-plugin" level="3">
        Импортировать как плагин Vue.js
      </anchored-heading>

      <p v-if="isComponentRoute">
        Этот плагин включает в себя все перечисленные выше отдельные компоненты<span v-if="directives.length"> и директивы</span>.
        Плагины также включают псевдонимы любых компонентов.
      </p>
      <p v-else>
        Этот плагин включает в себя все перечисленные выше отдельные директивы.
      </p>

      <b-table
        :items="pluginImports"
        :fields="[{ key: 'namedExport', label: 'Именованный экспорт' }, { key: 'importPath', label: 'Путь импорта' }]"
        table-class="bv-docs-table"
        responsive="sm"
        head-variant="default"
        caption-top
        bordered
        striped
      >
        <template #cell(namedExport)="{ value }">
          <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
        </template>
        <template #cell(importPath)="{ value }">
          <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
        </template>
      </b-table>

      <template v-if="meta.plugins && meta.plugins.length > 0">
        <p>Этот плагин также автоматически включает следующие плагины:</p>
        <ul>
          <li v-for="plugin in meta.plugins" :key="plugin">
            <code class="notranslate" translate="no">{{ plugin }}</code>
          </li>
        </ul>
      </template>

      <p><strong>Пример:</strong></p>
      <pre class="hljs language-js text-monospace p-2 notranslate" translate="no">{{ pluginImportCode }}</pre>
    </article>
  </section>
</template>

<script>
import startCase from 'lodash/startCase'
import hljs from '../utils/hljs'
import { getComponentName, kebabCase } from '../utils'
import AnchoredHeading from './anchored-heading'

const importPath = 'bootstrap-vue'

export default {
  name: 'BVImportdoc',
  components: { AnchoredHeading },
  props: {
    meta: {}
  },
  computed: {
    importPath() {
      return 'bootstrap-vue'
    },
    isComponentRoute() {
      const name = this.$route.name
      return name === 'docs-components-slug' || name === 'docs-icons'
    },
    pluginDir() {
      return this.$route.params.slug || this.meta.slug
    },
    pluginName() {
      // Directive plugin names are prefixed with `VB`
      const prefix = this.isComponentRoute ? '' : 'VB'
      return `${prefix}${startCase(this.pluginDir).replace(/\s+/g, '')}Plugin`
    },
    componentImports() {
      return this.components.map(c => {
        return {
          component: this.componentTag(c),
          namedExport: c,
          importPath: this.importPath
        }
      })
    },
    directiveImports() {
      return this.directives.map(d => {
        return {
          directive: this.directiveAttr(d),
          namedExport: d,
          importPath: this.importPath
        }
      })
    },
    pluginImports() {
      return [
        {
          namedExport: this.pluginName,
          importPath: this.importPath
        }
      ]
    },
    components() {
      let subcomponents = []
      if (this.meta.components) {
        // We just want the sub-component name
        subcomponents = this.meta.components.map(m => m.component)
      }
      return [].concat(this.meta.component, subcomponents).filter(c => c)
    },
    directives() {
      // We just need the directive name
      return []
        .concat(this.meta.directive, this.meta.directives)
        .filter(d => d)
        .map(d => (typeof d === 'string' ? d : d.directive))
    },
    componentImportCode() {
      const firstComponent = this.components[0]
      const firstComponentImport = this.componentImports[0]
      return [
        `import { ${firstComponent} } from '${firstComponentImport.importPath}'`,
        `Vue.component('${getComponentName(firstComponent)}', ${firstComponent})`
      ].join('\n')
    },
    directiveImportCode() {
      const firstDirective = this.directives[0]
      return [
        `import { ${firstDirective} } from '${importPath}'`,
        "// Note: Vue automatically prefixes the directive name with 'v-'",
        `Vue.directive('${this.directiveName(firstDirective)}', ${firstDirective})`
      ].join('\n')
    },
    pluginImportCode() {
      return [
        `import { ${this.pluginName} } from 'bootstrap-vue'`,
        `Vue.use(${this.pluginName})`
      ].join('\n')
    }
  },
  mounted() {
    // Highlight code blocks
    ;[...this.$el.querySelectorAll('pre.hljs')].forEach(pre => {
      hljs.highlightBlock(pre)
    })
  },
  methods: {
    componentTag(component) {
      return `<${getComponentName(component)}>`
    },
    directiveName(directive) {
      return kebabCase(directive)
        .replace(/^v-/, '')
        .replace(/^vb-/, 'b-')
    },
    directiveAttr(directive) {
      return kebabCase(directive).replace(/^vb-/, 'v-b-')
    }
  }
}
</script>
