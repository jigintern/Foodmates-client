import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

const api = axios.create()
const hostname = 't2.intern.jigd.info'
api.defaults.baseURL = 'http://' + hostname + '/api/v1/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticatedUser: null
  },

  mutations: {
    SET_USER (state, user) {
      state.authenticatedUser = user
      console.log('SET_USER: ' + state.authenticatedUser)
    }
  },

  getters: {
    authUser: state => state.authenticatedUser
  },

  actions: {
    async login ({ commit }, payload) {
      console.log("[store] login: " + JSON.stringify(payload))
      console.log(this)
      await api.get('/users/' + payload.id)
        .then(res => {
          console.log(res)
          if (res.status != 200) return
          commit('SET_USER', res.data)
        })
        .catch((e) => {
          console.log('login failed: ' + e)
        })
    },
    logout ({ commit }) {
      commit('SET_USER', null)
    }
  },
  
  plugins: [createPersistedState()]
})
