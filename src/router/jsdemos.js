const jsdemos = {
  path: '/jsdemos',
  name: 'jsdemosModel',
  component: () => import('../views/jsdemos/index.vue'),
  redirect: {
    name: 'arrayHandle'
  },
  children: [
    {
      path: 'arrayhandle',
      name: 'arrayHandle',
      component: () => import('../views/jsdemos/arrayhandle.vue'),
      meta: {
        title: '数组处理',
        icon: 'icon-hebingshuzu'
      }
    },
    {
      path: 'previewpdf',
      name: 'previewPdf',
      component: () => import('../views/jsdemos/previewpdf.vue'),
      meta: {
        title: '预览PDF',
        icon: 'icon-PDFyulan'
      }
    },
    {
      path: 'threetest',
      name: 'threeTest',
      component: () => import('../views/jsdemos/threetest.vue'),
      meta: {
        title: 'three测试',
        icon: 'icon-sheshisanweihua'
      }
    },
    {
      path: 'wordcloud',
      name: 'wordCloud',
      component: () => import('../views/jsdemos/wordcloud.vue'),
      meta: {
        title: '词云',
        icon: 'icon-ciyuntu'
      }
    }
  ]
}

export default jsdemos
