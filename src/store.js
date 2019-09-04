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
    authenticatedUser: null,
    viewingUser: null
  },

  mutations: {
    SET_AUTH_USER (state, user) {
      state.authenticatedUser = user
      console.log('SET_AUTH_USER: ' + state.authenticatedUser)
    },
    SET_VIEW_USER (state, user) {
      state.viewingUser = user
      console.log('SET_VIEW_USER: ' + state.viewingUser)
    },
  },

  getters: {
    authUser: state => state.authenticatedUser,
    viewingUser: state => state.viewingUser
  },

  actions: {
    async login ({ commit }, payload) {
      await api.get('/users/' + payload.id)
        .then(res => {
          console.log(res)
          if (res.status != 200) return
          commit('SET_AUTH_USER', res.data)
        })
        .catch((e) => {
          console.log('login failed: ' + e)
        })
    },

    logout ({ commit }) {
      console.log("logout!")
      commit('SET_AUTH_USER', null)
    },

    async viewUserInfo ({ commit }, id) {
      await api.get('/users/' + id)
        .then(res => {
          console.log(res)
          if (res.status != 200) return
          commit('SET_VIEW_USER', res.data)
        })
        .catch((e) => {
          console.log('login failed: ' + e)
        })
    }
  },
  
  plugins: [createPersistedState()]
})
