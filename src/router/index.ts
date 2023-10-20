import { createRouter, createWebHistory } from 'vue-router'
import MainMenuView from "@/views/MainMenuView.vue";
import NewCardView from "@/views/NewCardView.vue";
import StudyCardView from "@/views/StudyCardView.vue";
import BoxesView from "@/views/BoxesView.vue";
import EditCardView from "@/views/EditCardView.vue";
import BoxView from "@/views/BoxView.vue";
import EditBoxView from "@/views/EditBoxView.vue";
import NewBoxView from "@/views/NewBoxView.vue";

const routes = [
  {
    name: 'main-manu',
    path: '/',
    component: MainMenuView
  },

  {
    name: 'boxes',
    path: '/boxes',
    component: BoxesView
  }, {
    name: 'box',
    path: '/boxes/:boxId',
    component: BoxView
  }, {
    name: 'new-box',
    path: '/boxes/new',
    component: NewBoxView
  }, {
    name: 'edit-box',
    path: '/boxes/:boxId/edit',
    component: EditBoxView
  },

  {
    name: 'new-card',
    path: '/boxes/:boxId/cards/new',
    component: NewCardView
  }, {
    name: 'edit-card',
    path: '/boxes/:boxId/edit-card/:cardId',
    component: EditCardView
  },

  {
    name: 'study-card',
    path: '/study-card',
    component: StudyCardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
