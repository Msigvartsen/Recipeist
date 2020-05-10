import Vue from "vue"
import App from "./App.vue"
import { router } from "./router"
import BlockContent from "sanity-blocks-vue-component"

Vue.component("block-content", BlockContent)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
