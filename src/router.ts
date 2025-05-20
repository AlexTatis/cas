import { createWebHistory, createRouter } from 'vue-router'

import IndexView from './pages/Index.vue'
import ExperienceView from './pages/Experience.vue'

const routes = [
  { path: '/', component: IndexView },
  { path: '/experiences/:id', component: ExperienceView },
  {
    path: '/projects/:id',
    name: 'Project',
    component: () => import('./pages/Project.vue')
  }
]

export const router = createRouter({
  history: createWebHistory("/cas/"),
  routes,
})