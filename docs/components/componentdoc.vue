<template>
  <section v-if="component" class="bd-content">
    <b-row tag="header" align-v="center">
      <b-col sm="9">
        <anchored-heading :id="`comp-ref-${componentNameClean}`" level="3">
          <code class="notranslate bigger" translate="no">{{ tag }}</code>
        </anchored-heading>
        <b-badge v-if="version" variant="success">v{{ version }}+</b-badge>
        <b-badge
          v-if="componentFunctional"
          variant="secondary"
          target="_blank"
          href="https://vuejs.org/v2/guide/render-function.html#Functional-Components"
          class="mb-3 mb-sm-0"
        >
          Функциональный компонент
        </b-badge>
      </b-col>
      <b-col sm="3" class="text-sm-right">
        <b-btn
          v-if="githubURL"
          variant="outline-secondary"
          size="sm"
          :href="githubURL"
          target="_blank"
        >
          Смотреть источник
        </b-btn>
      </b-col>
    </b-row>

    <ul class="component-ref-mini-toc my-3">
      <li v-if="aliases && aliases.length > 0">
        <a :href="`#comp-ref-${componentName}-aliases`">
          <code class="notranslate" translate="no">{{ tag }}</code> Псевдонимы компонентов
        </a>
      </li>
      <li v-if="propsItems && propsItems.length > 0">
        <a :href="`#comp-ref-${componentName}-props`">
          <code class="notranslate" translate="no">{{ tag }}</code> Свойства
        </a>
      </li>
      <li v-if="componentVModel">
        <a :href="`#comp-ref-${componentName}-v-model`">
          <code class="notranslate" translate="no">{{ tag }}</code> v-model
        </a>
      </li>
      <li v-if="slots && slots.length > 0">
        <a :href="`#comp-ref-${componentName}-slots`">
          <code class="notranslate" translate="no">{{ tag }}</code> Слоты
        </a>
      </li>
      <li v-if="events && events.length > 0">
        <a :href="`#comp-ref-${componentName}-events`">
          <code class="notranslate" translate="no">{{ tag }}</code> События
        </a>
      </li>
      <li v-if="rootEventListeners && rootEventListeners.length > 0">
        <a :href="`#comp-ref-${componentName}-rootEventListeners`">
          <code class="notranslate" translate="no">{{ tag }}</code>
          <code class="notranslate" translate="no">$root</code> Прослушиватели событий
        </a>
      </li>
    </ul>

    <article v-if="aliases && aliases.length > 0" class="bd-content">
      <anchored-heading :id="`comp-ref-${componentName}-aliases`" level="4" class="mb-3">
        Псевдонимы компонентов
      </anchored-heading>
      <p><code class="notranslate" translate="no">{{ tag }}</code> также может использоваться через следующие псевдонимы:</p>
      <ul>
        <li v-for="alias in aliases" :key="alias">
          <code class="notranslate" translate="no">&lt;{{ kebabCase(alias) }}&gt;</code>
        </li>
      </ul>
      <div class="alert alert-info">
        <p class="mb-0 small">
          Примечание: Псевдонимы компонентов доступны только при импорте всего BootstrapVue или при использовании подключаемого модуля группы компонентов.
        </p>
      </div>
    </article>

    <article v-if="propsItems && propsItems.length > 0" class="bd-content">
      <anchored-heading :id="`comp-ref-${componentName}-props`" level="4" class="mb-3">
        Свойства
      </anchored-heading>

      <p>
        Все значения свойств по умолчанию <b-link href="/docs/reference/settings">настраиваются глобально</b-link>.
      </p>

      <b-table
        :items="propsItems"
        :fields="propsFields"
        primary-key="prop"
        table-class="bv-docs-table"
        responsive="sm"
        sort-icon-left
        bordered
        striped
      >
        <template #cell(prop)="{ value, item }">
          <code class="text-nowrap notranslate" translate="no">{{ value }}</code><br>
          <b-badge v-if="item.required" variant="info">Обязательный</b-badge>
          <b-badge v-if="item.version" variant="secondary">v{{ item.version }}+</b-badge>
          <b-badge v-if="item.isVModel" variant="primary">v-model</b-badge>
          <b-badge v-if="item.xss" variant="warning">Использовать с осторожностью</b-badge>
          <b-badge v-if="item.deprecated" variant="danger">Устаревший</b-badge>
          <b-badge v-else-if="item.deprecation" variant="warning">Устаревающий</b-badge>
        </template>
        <template #cell(type)="{ value }">
          <span v-html="value"></span>
        </template>
        <template #cell(defaultValue)="{ value }">
          <code v-if="value" class="word-wrap-normal notranslate" translate="no">{{ value }}</code>
        </template>
        <template #row-details="{ item }">
          <p v-if="typeof item.deprecated === 'string'" class="mb-1 small">
            {{ item.deprecated }}
          </p>
          <p v-if="typeof item.deprecation === 'string'" class="mb-1 small">
            {{ item.deprecation }}
          </p>
        </template>
      </b-table>
      <div v-if="hasRouterProps" class="alert alert-info">
        <p class="mb-0 small">
          <code class="notranslate" translate="no">{{ tag }}</code> поддерживает генерацию
          <code class="notranslate" translate="no">&lt;router-link&gt;</code> или
          <code class="notranslate" translate="no">&lt;nuxt-link&gt;</code> компонент (при использовании Nuxt.js).
          Дополнительные сведения о свойствах, связанных с ссылками на маршрутизаторы (или Nuxt Link), смотрите в разделе справки по
          <b-link to="/docs/reference/router-links" class="alert-link">поддержке роутов</b-link>.
        </p>
      </div>
      <div v-if="hasHtmlProps" class="alert alert-warning">
        <p class="mb-0 small">
          <strong>Осторожно:</strong> Свойства, поддерживающие HTML-строки
          (<code class="notranslate" translate="no">*-html</code>) может быть уязвим для
          <b-link href="https://en.wikipedia.org/wiki/Cross-site_scripting" class="alert-link" target="_blank">
            Атаки межсайтового скриптинга (XSS)
          </b-link>
          при передаче необработанных значений, предоставленных пользователем. Вы должны правильно
          <b-link href="https://en.wikipedia.org/wiki/HTML_sanitization" class="alert-link" target="_blank">
            очищать
          </b-link>
          ввод пользователя!
        </p>
      </div>
    </article>

    <article v-if="componentVModel" class="bd-content">
      <anchored-heading :id="`comp-ref-${componentName}-v-model`" level="4" class="mb-3">
        <code class="notranslate" translate="no">v-model</code>
      </anchored-heading>
      <b-table-lite
        :items="[componentVModel]"
        :fields="[{ key: 'prop', label: 'Свойство' }, { key: 'event', label: 'Событие' }]"
        table-class="bv-docs-table"
        responsive="sm"
        bordered
        striped
      >
        <template #cell(prop)="{ value }">
          <code class="notranslate" translate="no">{{ kebabCase(value) }}</code>
        </template>
        <template #cell(event)="{ value }">
          <code class="notranslate" translate="no">{{ value }}</code>
        </template>
      </b-table-lite>
    </article>

    <article v-if="slots && slots.length > 0" class="bd-content">
      <anchored-heading :id="`comp-ref-${componentName}-slots`" level="4" class="mb-3">
        Слоты
      </anchored-heading>
      <b-table
        :items="slotsItems"
        :fields="slotsFields"
        primary-key="name"
        table-class="bv-docs-table"
        responsive="sm"
        sort-icon-left
        bordered
        striped
      >
        <template #cell(name)="{ value, item }">
          <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          <b-badge v-if="item.version" variant="secondary">v{{ item.version }}+</b-badge>
        </template>
        <template #cell(scope)="{ value, detailsShowing, toggleDetails }">
          <b-button
            v-if="value"
            variant="outline-info"
            size="sm"
            class="py-0"
            @click="toggleDetails()"
          >
            {{ detailsShowing ? 'Скрыть область' : 'Показать область' }}
          </b-button>
          <span v-else>Нет</span>
        </template>
        <template #row-details="{ item }">
          <b-table-lite
            :items="item.scope"
            :fields="[{ key: 'prop', label: 'Свойство' }, { key: 'type', label: 'Тип' }, { key: 'description', label: 'Описание' }]"
            primary-key="prop"
            class="m-0"
            dark
            caption-top
            small
          >
            <template #thead-top>
              <b-tr>
                <b-th colspan="3" class="text-center">
                  <code class="text-nowrap notranslate" translate="no">{{ item.name }}</code>
                  Свойства области слота
                </b-th>
              </b-tr>
            </template>
            <template #cell(prop)="{ value, item: cellItem }">
              <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
              <b-badge v-if="cellItem.version" variant="secondary">v{{ cellItem.version }}+</b-badge>
            </template>
            <template #cell(type)="{ value }">
              <code class="text-nowrap notranslate" translate="no">{{ value || 'Другие' }}</code>
            </template>
          </b-table-lite>
        </template>
      </b-table>
    </article>

    <article v-if="events && events.length > 0" class="bd-content">
      <anchored-heading :id="`comp-ref-${componentName}-events`" level="4" class="mb-3">
        События
      </anchored-heading>
      <b-table
        :items="events"
        :fields="eventsFields"
        primary-key="event"
        table-class="bv-docs-table"
        responsive="sm"
        bordered
        striped
      >
        <template #cell(event)="{ value, item }">
          <code class="notranslate" translate="no">{{ value }}</code>
          <b-badge v-if="item.version" variant="secondary">v{{ item.version }}+</b-badge>
        </template>
        <template #cell(args)="{ value, item }">
          <ol v-if="value && value.length > 0" class="list-unstyled mb-0">
            <li v-for="(arg, idx) in value" :key="`event-${item.event}-${arg.arg || idx}`">
              <template v-if="arg.arg">
                <code class="notranslate" translate="no">{{ arg.arg }}</code> -
              </template>
              <span v-if="arg.description">{{ arg.description }}</span>
            </li>
          </ol>
        </template>
      </b-table>
    </article>

    <article v-if="rootEventListeners && rootEventListeners.length > 0" class="bd-content">
      <anchored-heading :id="`comp-ref-${componentName}-rootEventListeners`" level="4" class="mb-3">
        <code class="notranslate" translate="no">$root</code> слушатели событий
      </anchored-heading>
      <p>
        Вы можете управлять <code class="notranslate" translate="no">{{ tag }}</code>,
        генерируя следующие события на <samp class="notranslate" translate="no">$root</samp>:
      </p>
      <b-table-lite
        :items="rootEventListeners"
        :fields="rootEventListenersFields"
        primary-key="event"
        table-class="bv-docs-table"
        responsive="sm"
        bordered
        striped
      >
        <template #cell(event)="{ value, item }">
          <code class="text-nowrap notranslate" translate="no">{{ value }}</code>
          <b-badge v-if="item.version" variant="secondary">v{{ item.version }}+</b-badge>
        </template>
        <template #cell(args)="{ value, item }">
          <p
            v-for="arg in value"
            :key="`event-${item.event}-${arg.arg ? arg.arg : 'none'}`"
            class="mb-1"
          >
            <template v-if="arg.arg">
              <code class="text-nowrap notranslate" translate="no">{{ arg.arg }}</code>
              <span v-if="arg.description"> - {{ arg.description }}</span>
            </template>
          </p>
        </template>
      </b-table-lite>
    </article>
  </section>
</template>

<script>
import Vue from 'vue'
import commonProps from '../common-props.json'
import { getComponentName, getCleanComponentName, kebabCase } from '../utils'
import AnchoredHeading from './anchored-heading'

const SORT_THRESHOLD = 10

export default {
  name: 'BVComponentdoc',
  components: { AnchoredHeading },
  props: {
    component: {},
    srcComponent: {
      // This prop is used only when the above `component` is a
      // "fake" component. This prop specifies a "real" component
      // to use when grabbing the component definition options
    },
    propsMeta: {
      // For getting prop descriptions
      type: Array,
      default: () => []
    },
    slots: {
      type: Array,
      default: () => []
    },
    events: {
      type: Array,
      default: () => []
    },
    rootEventListeners: {
      type: Array,
      default: () => []
    },
    aliases: {
      type: Array,
      default: () => []
    },
    version: {
      type: String,
      default: null
    }
  },
  computed: {
    componentOptions() {
      const component = Vue.options.components[this.srcComponent || this.component]
      if (!component) {
        return {}
      }

      let options = {}
      if (!component.options && typeof component === 'function') {
        // Async component that hans't been resolved yet
        component(cmp => {
          if (Object.prototype.toString.call(cmp) === '[object Object]') {
            options = { ...cmp }
          } else if (cmp && cmp.options) {
            options = cmp.options
          }
        })
      } else {
        // Regular component
        options = component.options || {}
      }

      return options
    },
    componentFunctional() {
      return this.componentOptions.functional
    },
    componentVModel() {
      const model = this.componentOptions.model || {}
      return model.prop && model.event ? model : false
    },
    componentProps() {
      return this.componentOptions.props || {}
    },
    hasRouterProps() {
      return this.propsItems.some(p => {
        return p.prop === 'to' || p.prop === 'split-to' || p.prop === 'exact-active-class'
      })
    },
    hasHtmlProps() {
      return this.propsItems.some(p => p.xss)
    },
    componentPropsMetaObj() {
      // Returns the propsMeta array in object format for easy lookups
      return this.propsMeta.reduce((obj, propMeta) => {
        if (propMeta.prop) {
          obj[propMeta.prop] = propMeta
        }
        return obj
      }, {})
    },
    propsFields() {
      const sortable = this.propsItems.length >= SORT_THRESHOLD
      const hasDescriptions = this.propsItems.some(p => p.description)
      return [
        { key: 'prop', label: 'Свойство', sortable },
        { key: 'type', label: 'Тип', sortable },
        { key: 'defaultValue', label: 'По умолчанию' },
        ...(hasDescriptions ? [{ key: 'description', label: 'Описание' }] : [])
      ]
    },
    eventsFields() {
      const sortable = this.events.length >= SORT_THRESHOLD
      return [
        { key: 'event', label: 'Событие', sortable },
        { key: 'args', label: 'Аргументы' },
        { key: 'description', label: 'Описание' }
      ]
    },
    rootEventListenersFields() {
      const sortable = this.rootEventListeners.length >= SORT_THRESHOLD
      return [
        { key: 'event', label: 'Событие', sortable },
        { key: 'args', label: 'Аргументы' },
        { key: 'description', label: 'Описание' }
      ]
    },
    slotsFields() {
      const sortable = this.slots.length >= SORT_THRESHOLD
      const hasScopedSlots = this.slots.some(s => s.scope)
      return [
        { key: 'name', label: 'Наименование', sortable },
        ...(hasScopedSlots ? [{ key: 'scope', label: 'Область' }] : []),
        { key: 'description', label: 'Описание' }
      ]
    },
    propsItems() {
      const props = this.componentProps
      const propsMetaObj = this.componentPropsMetaObj

      return Object.keys(props)
        .sort()
        .map(prop => {
          const p = props[prop]
          const meta = {
            // Fallback descriptions for common props
            ...(commonProps[prop] || {}),
            ...(propsMetaObj[prop] || {})
          }

          // Describe type
          let type = p.type
          let types = []
          if (Array.isArray(type)) {
            types = type.map(type => type.name)
          } else {
            types = type && type.name ? [type.name] : ['Any']
          }
          type = types
            .map(type => `<code class="notranslate" translate="no">${type}</code>`)
            .join(' or ')

          // Default value
          let defaultValue = p.default
          if (defaultValue instanceof Function && !Array.isArray(defaultValue)) {
            defaultValue = defaultValue()
          }
          defaultValue =
            typeof defaultValue === 'undefined'
              ? ''
              : String(JSON.stringify(defaultValue, undefined, 1)).replace(/"/g, "'")

          return {
            prop: kebabCase(prop),
            type,
            defaultValue,
            required: p.required || false,
            description: meta.description || '',
            version: meta.version || '',
            xss: meta.xss || false,
            isVModel: this.componentVModel && this.componentVModel.prop === prop,
            deprecated: p.deprecated || false,
            deprecation: p.deprecation || false,
            _showDetails: typeof p.deprecated === 'string' || typeof p.deprecation === 'string'
          }
        })
    },
    slotsItems() {
      // We use object spread here so that `_showDetails` doesn't
      // mutate the original array objects
      return this.slots ? this.slots.map(slot => ({ ...slot })) : []
    },
    componentName() {
      return getComponentName(this.component)
    },
    componentNameClean() {
      return getCleanComponentName(this.component)
    },
    tag() {
      return `<${this.componentName}>`
    },
    githubURL() {
      const name = this.componentName.replace(/^b-/, '')
      if (name.indexOf('{') !== -1) {
        // Example component (most likely an auto generated component)
        return ''
      }
      const base = 'https://github.com/bootstrap-vue/bootstrap-vue/tree/dev/src/components'
      const slug = this.$route.params.slug
      // Always point to the `.js` file (which may import a `.vue` file)
      return `${base}/${slug}/${name}.js`
    }
  },
  methods: {
    kebabCase
  }
}
</script>

<style scoped>
h3::before {
  display: block;
  height: 1.25rem;
  margin-top: -1.25rem;
  content: '';
}

code.bigger {
  font-size: 105%;
}

ul.component-ref-mini-toc:empty {
  display: none;
}

>>> .word-wrap-normal {
  white-space: normal !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
}
</style>
