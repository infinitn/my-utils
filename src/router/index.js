import { createRouter, createWebHistory } from 'vue-router'
import jsdemos from './jsdemos.js'
import saicdemos from './saicdemos.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/dashboard.vue'),
    },
    {
      path: '/image',
      name: 'imageModel',
      component: () => import('../views/image/index.vue'),
      redirect: {
        name: 'imageToLineArt'
      },
      children: [
        {
          path: 'imagetolineart',
          name: 'imageToLineArt',
          component: () => import('../views/image/ImageToLineArt.vue'),
        },
      ]
    },
    jsdemos,
    saicdemos,
    {
      path: '/404',
      component: () => import('@/views/error/404.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/404.vue'),
      meta: { requiresAuth: false }
    }
  ],
})

export default router
