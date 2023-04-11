import { createRouter, createWebHistory } from 'vue-router'
import { useRestaurantStore } from '../stores/restaurant'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Favorites from '../views/Favorites.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'main',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ] 
})

router.beforeEach(async (to, from) => {
  let access_token = localStorage.getItem('access_token')
  if(!access_token && to.name === 'favorites') {
    return {name: 'login'}
  }

  if(access_token && (to.name === 'login' || to.name === 'register')) {
    return {name: 'home'}
  }
})

export default router
