import { defineConfig } from 'vitepress'

/**
 * ### 基础路径
 */
const baseUrl = '/gx-web-doc/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '冠宣前端文档',
  head: [['link', { rel: 'icon', href: `${baseUrl}/favicon.ico` }]],
  description: 'A VitePress Site',
  base: baseUrl,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具库', link: '/tool/' },
      { text: 'PC', link: '/pc/' },
      { text: 'H5', link: '/h5/' },
      { text: 'Taro(wechat)', link: '/taro/' },
      { text: '规范', link: '/standard/' },
      { text: '例子', link: '/markdown-examples' }
    ],

    sidebar: {
      '/tool': [
        {
          items: [
            { text: '基础说明', link: '/tool/' },
            {
              text: 'hooks',
              link: '/tool/hooks',
              items: [{ text: 'useStateRef', link: '/tool/useStateRef' }]
            },
            { text: 'utils', link: '/tool/utils' }
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
