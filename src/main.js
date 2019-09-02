import Vue from 'vue'
import vuetify from './plugins/vuetify.js'
import './plugins/server.js'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios.js'

Vue.config.productionTip = false

// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
