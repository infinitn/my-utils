const jsdemos = {
  path: '/jsdemos',
  name: 'jsdemosModel',
  component: () => import('../views/jsdemos/index.vue'),
  redirect: {
    name: 'arraySpecifiedSort'
  },
  children: [
    {
      path: 'arraySpecifiedSort',
      name: 'arraySpecifiedSort',
      component: () => import('../views/jsdemos/arrayspecifiedsort.vue'),
      meta: {
        title: '数组指定排序',
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
