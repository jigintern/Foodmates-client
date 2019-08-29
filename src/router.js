import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import Debug from './views/Debug.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // "http://localhost:8080/"
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // "http://localhost:8080/Profile"
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      // "http://localhost:8080/Profile"
      path: '/debug',
      name: 'debug',
      component: Debug
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
