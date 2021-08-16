import { createApp } from 'vue'

import VueSvgInlinePlugin from "vue-svg-inline-plugin"

import App from './App.vue'

const app = createApp(App)

app.use(VueSvgInlinePlugin)

app.mount('#app')
