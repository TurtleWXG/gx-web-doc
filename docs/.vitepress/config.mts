import { defineConfig } from 'vitepress'

/**
 * ### 基础路径
 */
const baseUrl = '/gx-web-doc/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      port: 8080
    },
    resolve: {
      alias: [
        {
          find: '@gx-web/tool',
          replacement: '@gx-web/tool/lib'
        }
      ]
    }
  },
  lastUpdated: true,
  title: '冠宣前端文档',
  head: [['link', { rel: 'icon', href: `${baseUrl}/favicon.ico` }]],
  description: '冠宣前端文档说明',
  base: baseUrl,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具库', link: '/tool/' },
      { text: 'PC', link: '/pc/' },
      { text: 'H5', link: '/h5/' },
      { text: 'Taro(wechat)', link: '/taro/' },
      { text: '脚手架', link: '/cli/' },
      { text: '规范', link: '/standard/' },
      // { text: '例子', link: '/markdown-examples' }
    ],

    sidebar: {
      '/tool': [
        {
          items: [
            { text: '基础说明', link: '/tool/' },
            {
              text: 'service',
              items: [
                { text: 'http-service', link: '/tool/service/http-service' },
                { text: 'single-request', link: '/tool/service/single-request' },
              ]
            },
            {
              text: 'hooks',
              items: [
                { text: 'useStateRef', link: '/tool/hooks/useStateRef' },
                { text: 'useCompRef', link: '/tool/hooks/useCompRef' },
                { text: 'useList', link: '/tool/hooks/useList' },
                { text: 'useLoadList', link: '/tool/hooks/useLoadList' },
                { text: 'useLoadMap', link: '/tool/hooks/useLoadMap' },
                { text: 'useToggle', link: '/tool/hooks/useToggle' },
                { text: 'useTablePage', link: '/tool/hooks/useTablePage' },
              ]
            },
            { text: 'utils', items: [
                { text: 'is', link: '/tool/utils/is' }, 
                { text: 'assert', link: '/tool/utils/assert' }, 
                { text: 'validate', link: '/tool/utils/validate' },
                { text: 'filter', link: '/tool/utils/filter' },
                { text: 'random', link: '/tool/utils/random' },
                { text: 'other', link: '/tool/utils/other' },
              ]
            }
          ]
        }
      ],
      '/markdown-examples': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/TurtleWXG/gx-web-doc' }]
  }
})
