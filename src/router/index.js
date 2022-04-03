import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dient from '../views/dient.vue'

const routes = [
  {
    path: '/',
    name: 'Dient',
    component: Dient
  },
  {
    path: '/pacientes',
    name: 'Home',
    component: Home
  },

  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
