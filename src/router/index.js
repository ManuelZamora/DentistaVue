
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pacient.vue'
import Dient from '../views/dient.vue'
import Cit from '../views/citas.vue'

const routes = [
  {
    path: '/pacient',
    name: 'pacien',
    component: Home
  },

  {
    path: '/',
    name: 'Dient',
    component: Dient
  },

  {
    path: '/citas',
    name: 'Citas',
    component: Cit
  },



  {
      path: '/edit/:id/:nombre/:direccion/:telefono/:edad',
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
