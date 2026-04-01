import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ColorSwatch from './components/ColorSwatch.vue'
import SemanticColorTable from './components/SemanticColorTable.vue'
import SpacingScale from './components/SpacingScale.vue'
import RadiusPreview from './components/RadiusPreview.vue'
import ShadowPreview from './components/ShadowPreview.vue'
import LayoutDiagram from './components/LayoutDiagram.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ColorSwatch', ColorSwatch)
    app.component('SemanticColorTable', SemanticColorTable)
    app.component('SpacingScale', SpacingScale)
    app.component('RadiusPreview', RadiusPreview)
    app.component('ShadowPreview', ShadowPreview)
    app.component('LayoutDiagram', LayoutDiagram)
  }
}
