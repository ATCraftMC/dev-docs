// .vitepress/theme/index.md.js
import DefaultTheme from 'vitepress/theme-without-fonts'
import './font.css'
import "./style.css"
import CustomLayout from "./CustomLayout.vue";

export default {
    extends: DefaultTheme,
    // 使用注入插槽的包装组件覆盖 Layout
    Layout: CustomLayout,
    enhanceApp({app}) {
    }
}
