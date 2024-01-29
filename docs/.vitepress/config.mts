import { defineConfig } from 'vitepress'

/**
 * ### 基础路径
 */
const baseUrl = '/gx-web-doc/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冠宣前端文档",
  head: [['link', { rel: 'icon', href: `${baseUrl}/favicon.ico` }]],
  description: "A VitePress Site",
  base: baseUrl,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '公共库', link: '/lib' },
      { text: 'PC', link: '/pc' },
      { text: 'H5', link: '/h5' },
      { text: 'Taro(wechat)', link: '/taro' },
      { text: '规范', link: '/standard' },
      { text: '例子', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TurtleWXG/gx-web-doc' }
    ]
  }
})
