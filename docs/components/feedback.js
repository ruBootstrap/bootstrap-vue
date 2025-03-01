// @vue/component
export default {
  name: 'BVFeedback',
  data() {
    return {
      originUrl: 'https://github.com/bootstrap-vue/bootstrap-vue',
      baseUrl: 'https://github.com/ruBootstrap/bootstrap-vue'
    }
  },
  computed: {
    show() {
      const name = this.$route.name
      const slug = this.$route.params.slug
      return slug || name === 'docs' || name === 'docs-icons'
    },
    reportIssueUrl() {
      // Select issue template
      return `${this.originUrl}/issues/new?template=DOCS_ISSUE_TEMPLATE.md`
    },
    editPageUrl() {
      const name = this.$route.name
      const slug = this.$route.params.slug
      let path = ''
      if (name === 'docs') {
        path = `docs/markdown/intro/README.md`
      } else if (name === 'docs-components-slug') {
        path = `src/components/${slug}/README.md`
      } else if (name === 'docs-icons') {
        path = `src/icons/README.md`
      } else if (name === 'docs-directives-slug') {
        path = `src/directives/${slug}/README.md`
      } else if (name === 'docs-reference-slug') {
        if (slug === 'changelog') {
          path = 'CHANGELOG.md'
        } else if (slug === 'contributing') {
          path = 'CONTRIBUTING.md'
        } else if (slug === 'settings') {
          path = 'docs/markdown/reference/settings/README.md'
        } else {
          path = `docs/markdown/reference/${slug}/README.md`
        }
      }
      return `${this.baseUrl}/tree/dev-ru/${path}`
    }
  },
  render(h) {
    if (!this.show) {
      return h()
    }
    const $reportIssueButton = h(
      'b-button',
      {
        props: {
          variant: 'light',
          href: this.reportIssueUrl,
          target: '_blank'
        }
      },
      'Сообщить о проблеме'
    )
    const $editPageButton = h(
      'b-button',
      {
        props: {
          variant: 'light',
          href: this.editPageUrl,
          target: '_blank'
        }
      },
      'Редактировать эту страницу'
    )
    return h('b-button-group', { props: { size: 'sm' } }, [$reportIssueButton, $editPageButton])
  }
}
