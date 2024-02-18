import ElementPlus from 'element-plus'
import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)
  }
}
