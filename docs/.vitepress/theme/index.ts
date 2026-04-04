import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ColorSwatch from './components/ColorSwatch.vue'
import SemanticColorTable from './components/SemanticColorTable.vue'
import SpacingScale from './components/SpacingScale.vue'
import RadiusPreview from './components/RadiusPreview.vue'
import ShadowPreview from './components/ShadowPreview.vue'
import LayoutDiagram from './components/LayoutDiagram.vue'
import InputStates from './components/InputStates.vue'
import ButtonStates from './components/ButtonStates.vue'
import BadgeStates from './components/BadgeStates.vue'
import TabStates from './components/TabStates.vue'
import ToastStates from './components/ToastStates.vue'
import ModalStates from './components/ModalStates.vue'
import TableStates from './components/TableStates.vue'
import IconPreview from './components/IconPreview.vue'
import SvgIcon from './components/SvgIcon.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ColorSwatch', ColorSwatch)
    app.component('SemanticColorTable', SemanticColorTable)
    app.component('SpacingScale', SpacingScale)
    app.component('RadiusPreview', RadiusPreview)
    app.component('ShadowPreview', ShadowPreview)
    app.component('LayoutDiagram', LayoutDiagram)
    app.component('InputStates', InputStates)
    app.component('ButtonStates', ButtonStates)
    app.component('BadgeStates', BadgeStates)
    app.component('TabStates', TabStates)
    app.component('ToastStates', ToastStates)
    app.component('ModalStates', ModalStates)
    app.component('TableStates', TableStates)
    app.component('IconPreview', IconPreview)
    app.component('SvgIcon', SvgIcon)
  }
}
