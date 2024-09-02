import { createWebHistory, createRouter } from 'vue-router'

import IndexView from './pages/Index.vue'
import ExperienceView from './pages/Experience.vue'

const routes = [
  { path: '/', component: IndexView },
  { path: '/experiences/:id', component: ExperienceView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})