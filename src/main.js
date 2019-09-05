import Vue from 'vue'
import vuetify from './plugins/vuetify.js'
import './plugins/server.js'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios.js'
import MagicGrid from 'vue-magic-grid'

Vue.config.productionTip = false
const unsync = sync(store, router)
unsync()
// Vue.prototype.$axios = axios

Vue.use(MagicGrid)

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
