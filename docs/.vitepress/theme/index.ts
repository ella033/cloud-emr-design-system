import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ColorSwatch from './components/ColorSwatch.vue'
import SemanticColorTable from './components/SemanticColorTable.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ColorSwatch', ColorSwatch)
    app.component('SemanticColorTable', SemanticColorTable)
  }
}
