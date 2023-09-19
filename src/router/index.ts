import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue'),

  }, {
    name: 'study',
    path: '/study',
    component: () => import('@/views/Study.vue')
  }, {
    name: 'new-card',
    path: '/new-card',
    component: () => import('@/views/NewCard.vue')
  } , {
    name: 'study-card',
    path: '/study-card',
    component: () => import('@/views/StudyCard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
