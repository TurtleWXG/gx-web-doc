import ElementPlus from 'element-plus'
import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";

import Tag from '../../components/tag.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)

    app.component('Tag',  Tag)
  }
}
