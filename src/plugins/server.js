import axios from 'axios'
import Vue from 'vue'

const api = axios.create()
const hostname = '5b013ae2.ngrok.io'
api.defaults.baseURL = 'http://' + hostname + '/api/v1/'
console.log("[server.js] run!!")

Vue.use({
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          myServer: api
        }
      }
    })
  }
})
