const { repository } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Blog de Electrónica',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Blog para introducción a la electrónica',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: repository,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Diodos',
        link: '/diodos/',
      },
      {
        text: 'Sobre nosotros',
        link: '/sobre-nosotros/',
      }
    ],
    sidebar: {
      '/diodos/': [
        {
          title: 'Diodos',
          collapsable: false,
          children: [
            '',
            'funcionamiento',
            'tipos-de-diodos',
            'productos-comerciales',
            'referencias'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated'
  ]
}
