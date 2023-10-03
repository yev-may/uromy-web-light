import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import StudyView from "@/views/StudyView.vue";
import NewCardView from "@/views/NewCardView.vue";
import StudyCardView from "@/views/StudyCardView.vue";
import StorageView from "@/views/StorageView.vue";

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView

  }, {
    name: 'study',
    path: '/study',
    component: StudyView
  }, {
    name: 'new-card',
    path: '/new-card',
    component: NewCardView
  }, {
    name: 'study-card',
    path: '/study-card',
    component: StudyCardView
  }, {
    name: 'storage',
    path: '/storage',
    component: StorageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
