import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Registration from '@/views/Registration.vue'
import Landing from '@/views/Landing.vue'
import Home from '@/views/Home.vue'
import Frizer from '@/views/Frizer.vue'
import Usluge from '@/views/Usluge.vue'
const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/frizer',
    name: 'frizer',
    component: Frizer
  },
  {
    path: '/usluge',
    name: 'usluge',
    component: Usluge
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
