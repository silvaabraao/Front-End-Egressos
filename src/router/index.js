import { createRouter, createWebHistory } from 'vue-router'

import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import PaginaInicialEgresso from '@/views/PaginaInicialEgresso.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/egressos',
    name: 'PaginaInicialEgresso',
    component: PaginaInicialEgresso
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
