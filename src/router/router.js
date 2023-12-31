import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import FormMedicamento from '../pages/FormMedicamentos.vue'

export const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/novo-medicamento',
      name: 'novo-medicamento',
      component: FormMedicamento
    }
  ]
})

 