import Vue from 'vue'
import vuetify from './plugins/vuetify.js'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MagicGrid from 'vue-magic-grid'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(MagicGrid)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
