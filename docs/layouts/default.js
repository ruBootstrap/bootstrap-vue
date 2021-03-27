import { BASE_URL } from '~/constants'
import Footer from '~/components/footer'
import Header from '~/components/header'

export default {
  name: 'BVDefaultLayout',
  render(h) {
    return h('div', [h(Header), h('nuxt'), h(Footer)])
  },
  head() {
    return {
      link: [
        // Add canonical URL so all site variations are
        // indexed to the same primary URL
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${BASE_URL}${this.$route.path}`
        }
      ],
      htmlAttrs: {
        lang: 'ru'
      },
      meta: []
    }
  }
}
