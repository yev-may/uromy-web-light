import { createRouter, createWebHistory } from 'vue-router'
import MainMenuView from "@/views/MainMenuView.vue";
import NewCardView from "@/views/NewCardView.vue";
import StudyCardView from "@/views/StudyCardView.vue";
import StorageView from "@/views/StorageView.vue";
import EditCardView from "@/views/EditCardView.vue";

const routes = [
  {
    name: 'main-manu',
    path: '/',
    component: MainMenuView
  },
  {
    name: 'new-card',
    path: '/new-card',
    component: NewCardView
  }, {
    name: 'edit-card',
    path: '/edit-card/:card',
    component: EditCardView
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
