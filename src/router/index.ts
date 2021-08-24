import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/business',
    name: 'Ausiness',
    component: () => import('../views/business.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
