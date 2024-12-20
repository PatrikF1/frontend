import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Registration from '@/views/Registration.vue'
import Home from '@/views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
