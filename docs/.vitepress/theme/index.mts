import ElementPlus from 'element-plus'
import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";

import Tag from '../../components/tag.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)

    app.component('Tag',  Tag)
  }
}
