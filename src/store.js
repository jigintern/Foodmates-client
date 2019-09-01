import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticatedUser: null
  },

  mutations: {
    SET_USER (state, user) {
      state.authenticatedUser = user
    }
  },

  getters: {
    authUser: state => state.authenticatedUser
  },

  actions: {
    login () {},
    logout () {},
    signup() {}
  },
  
  plugins: [createPersistedState({
    key: 'TodoApp',
    paths: ['auth.token'],
    storage: window.sessionStorage
  })]
})
