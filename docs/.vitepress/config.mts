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
    logo: `/favicon.ico`,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具库', link: '/tool/' },
      {
        text: '组件库',
        items: [{ text: 'element-plus', link: '/component/element-plus/' }]
      },
      {
        text: '模版',
        items: [
          { text: 'PC', link: '/template/pc/' },
          { text: 'H5', link: '/template/h5/' },
          { text: 'Taro(wechat)', link: '/template/taro/' }
        ]
      },
      { text: '脚手架', link: '/cli/' },
      { text: '规范', link: '/standard/' }
    ],

    sidebar: {
      '/tool': [
        {
          items: [
            { text: '基础说明', link: '/tool/' },
            {
              text: 'classes',
              items: [{ text: 'BaseModel', link: '/tool/classes/base-model' }]
            },
            {
              text: 'decorators',
              items: [
                { text: 'ClassName', link: '/tool/decorators/class-name' },
                { text: 'FieldName', link: '/tool/decorators/field-name' },
                { text: 'Default', link: '/tool/decorators/default' },
                { text: 'EPTableItem', link: '/tool/decorators/ep-table-item' },
                { text: 'EPFormItem', link: '/tool/decorators/ep-form-item' },
                { text: 'EPDescriptions', link: '/tool/decorators/ep-descriptions' },
                { text: 'EPDescriptionsItem', link: '/tool/decorators/ep-descriptions-item' }
              ]
            },
            {
              text: 'service',
              items: [
                { text: 'HTTPService', link: '/tool/service/http-service' },
                { text: 'SingleRequest', link: '/tool/service/single-request' }
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
                { text: 'useTablePage', link: '/tool/hooks/useTablePage' }
              ]
            },
            {
              text: 'utils',
              items: [
                { text: 'is', link: '/tool/utils/is' },
                { text: 'assert', link: '/tool/utils/assert' },
                { text: 'validate', link: '/tool/utils/validate' },
                { text: 'filter', link: '/tool/utils/filter' },
                { text: 'random', link: '/tool/utils/random' },
                { text: 'other', link: '/tool/utils/other' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/TurtleWXG/gx-web-doc' }],

    outline: {
      level: [2, 3],
      label: '内容目录'
    },

    search: {
      provider: 'local'
    }
  }
})
