import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Debug from './views/Debug.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const User = {
  template: '<div>User {{ $route.params.id }} </div>'
}

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
      // "http://localhost:8080/user/:user_name"
      path: '/user/:user_name',
      name: 'user_name',
      compornent: User
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
      // "http://localhost:8080/Login"
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
