import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomeView.vue'),

  }, {
    name: 'study',
    path: '/study',
    component: () => import('@/views/StudyView.vue')
  }, {
    name: 'new-card',
    path: '/new-card',
    component: () => import('@/views/NewCardView.vue')
  } , {
    name: 'study-card',
    path: '/study-card',
    component: () => import('@/views/StudyCardView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
