const saicdemos = {
  path: '/saicdemos',
  name: 'saicdemosModel',
  component: () => import('../views/saicdemos/index.vue'),
  redirect: {
    name: 'projectPlanOverview'
  },
  children: [
    {
      path: 'projectplanoverview',
      name: 'projectPlanOverview',
      component: () => import('../views/saicdemos/projectplanoverview.vue'),
      meta: {
        title: '项目计划概览',
        icon: 'icon-space_demo_dashboard-fill'
      }
    },
    {
      path: 'tablegantt',
      name: 'tableGantt',
      component: () => import('../views/saicdemos/tablegantt.vue'),
      meta: {
        title: '表格+甘特图',
        icon: 'icon-paichangantetu'
      }
    },
    {
      path: 'valuePoint',
      name: 'valuePoint',
      component: () => import('../views/saicdemos/valuepoint.vue'),
      meta: {
        title: '阀点图',
        icon: 'icon-ziliucheng'
      }
    },
    {
      path: 'saictemp',
      name: 'saicTemp',
      component: () => import('../views/saicdemos/temp.vue'),
      meta: {
        title: '临时文件',
        icon: 'icon-paichangantetu'
      }
    }
  ]
}

export default saicdemos
