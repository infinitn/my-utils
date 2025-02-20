import { createRouter, createWebHistory } from 'vue-router'

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
    {
      path: '/demos',
      name: 'demosModel',
      component: () => import('../views/demos/index.vue'),
      redirect: {
        name: 'previewPdf'
      },
      children: [
        {
          path: 'previewpdf',
          name: 'previewPdf',
          component: () => import('../views/demos/previewpdf.vue'),
          meta: {
            title: '预览PDF',
            icon: 'icon-PDFyulan'
          }
        },
        {
          path: 'arrayhandle',
          name: 'arrayHandle',
          component: () => import('../views/demos/arrayhandle.vue'),
          meta: {
            title: '数组处理',
            icon: 'icon-hebingshuzu'
          }
        }
      ]
    },
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
