import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/HomePage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'localhost:8080',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router;