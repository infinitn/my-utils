const pointData1 = [
  {
    carType: 1,
    pointList: [
      {
        show: true,
        pointId: 9,
        pointName: 'G9',
        time: '2022/02/02',
        linkPoints: []
      },
      {
        show: true,
        pointId: 8,
        pointName: 'G8',
        time: '2022/01/02',
        linkPoints: [
          {
            arrow: 'bottom',
            step: 1,
            carType: 2,
            pointId: 7,
          },
          {
            arrow: 'bottom',
            step: 2,
            carType: 2,
            pointId: 5,
          }
        ]
      },
      {
        show: true,
        pointId: 7,
        pointName: 'G7',
        time: '2022/01/03',
        linkPoints: []
      },
      {
        show: true,
        pointId: 6,
        pointName: 'G6',
        time: '2022/01/04',
        linkPoints: [
          {
            arrow: 'bottom',
            step: 2,
            carType: 3,
            pointId: 5,
          }
        ]
      },
      {
        show: true,
        pointId: 5,
        pointName: 'G5',
        time: '2022/01/05',
        linkPoints: []
      },
      {
        show: true,
        pointId: 4,
        pointName: 'G4',
        time: '2022/01/06',
        linkPoints: []
      },
      {
        show: true,
        pointId: 3,
        pointName: 'G3',
        time: '2022/01/07',
        linkPoints: []
      },
      {
        show: true,
        pointId: 2,
        pointName: 'G2',
        time: '2022/01/08',
        linkPoints: []
      },
      {
        show: true,
        pointId: 1,
        pointName: 'G1',
        time: '2022/01/09',
        linkPoints: []
      },
    ]
  },
  {
    carType: 2,
    pointList: [
      {
        show: false,
        pointId: 9,
        pointName: 'G9',
        time: '2022/01/01',
        linkPoints: []
      },
      {
        show: false,
        pointId: 8,
        pointName: 'G8',
        time: '2022/01/02',
        linkPoints: []
      },
      {
        show: true,
        pointId: 7,
        pointName: 'G7',
        time: '2022/01/03',
        linkPoints: []
      },
      {
        show: true,
        pointId: 6,
        pointName: 'G6',
        time: '2022/01/04',
        linkPoints: []
      },
      {
        show: true,
        pointId: 5,
        pointName: 'G5',
        time: '2022/01/05',
        linkPoints: []
      },
      {
        show: true,
        pointId: 4,
        pointName: 'G4',
        time: '2022/01/06',
        linkPoints: []
      },
      {
        show: true,
        pointId: 3,
        pointName: 'G3',
        time: '2022/01/07',
        linkPoints: []
      },
      {
        show: true,
        pointId: 2,
        pointName: 'G2',
        time: '2022/01/08',
        linkPoints: [
          {
            arrow: 'top',
            step: 1,
            carType: 1,
            pointId: 1,
          }
        ]
      },
      {
        show: false,
        pointId: 1,
        pointName: 'G1',
        time: '2022/01/09',
        linkPoints: []
      },
    ]
  },
  {
    carType: 3,
    pointList: [
      {
        show: false,
        pointId: 9,
        pointName: 'G9',
        time: '2022/01/01',
        linkPoints: []
      },
      {
        show: false,
        pointId: 8,
        pointName: 'G8',
        time: '2022/01/02',
        linkPoints: []
      },
      {
        show: false,
        pointId: 7,
        pointName: 'G7',
        time: '2022/01/03',
        linkPoints: []
      },
      {
        show: false,
        pointId: 6,
        pointName: 'G6',
        time: '2022/01/04',
        linkPoints: []
      },
      {
        show: true,
        pointId: 5,
        pointName: 'G5',
        time: '2022/01/05',
        linkPoints: []
      },
      {
        show: true,
        pointId: 4,
        pointName: 'G4',
        time: '2022/01/06',
        linkPoints: []
      },
      {
        show: true,
        pointId: 3,
        pointName: 'G3',
        time: '2022/01/07',
        linkPoints: [
          {
            arrow: 'top',
            step: 1,
            carType: 2,
            pointId: 2,
          },
          {
            arrow: 'top',
            step: 2,
            carType: 1,
            pointId: 1,
          }
        ]
      },
      {
        show: false,
        pointId: 2,
        pointName: 'G2',
        time: '2022/01/08',
        linkPoints: [
          {
            arrow: 'top',
            step: 2,
            carType: 1,
            pointId: 1,
          }
        ]
      },
      {
        show: false,
        pointId: 1,
        pointName: 'G1',
        time: '2022/01/09',
        linkPoints: []
      },
    ]
  },
]
const pointData2 = [
  {
    carType: 1,
    pointList: [
      {
        show: true,
        pointId: 9,
        pointName: 'G9',
        time: '2022/02/02',
        linkPoints: []
      },
      {
        show: true,
        pointId: 8,
        pointName: 'G8',
        time: '2022/01/02',
        linkPoints: [
          {
            arrow: 'bottom',
            step: 1,
            carType: 2,
            pointId: 7,
          },
        ]
      },
      {
        show: true,
        pointId: 7,
        pointName: 'G7',
        time: '2022/01/03',
        linkPoints: []
      },
      {
        show: true,
        pointId: 6,
        pointName: 'G6',
        time: '2022/01/04',
        linkPoints: [
          {
            arrow: 'bottom',
            step: 2,
            carType: 3,
            pointId: 5,
          }
        ]
      },
      {
        show: true,
        pointId: 5,
        pointName: 'G5',
        time: '2022/01/05',
        linkPoints: []
      },
      {
        show: true,
        pointId: 4,
        pointName: 'G4',
        time: '2022/01/06',
        linkPoints: []
      },
      {
        show: true,
        pointId: 3,
        pointName: 'G3',
        time: '2022/01/07',
        linkPoints: []
      },
      {
        show: true,
        pointId: 2,
        pointName: 'G2',
        time: '2022/01/08',
        linkPoints: []
      },
      {
        show: true,
        pointId: 1,
        pointName: 'G1',
        time: '2022/01/09',
        linkPoints: []
      },
    ]
  },
  {
    carType: 2,
    pointList: [
      {
        show: false,
        pointId: 9,
        pointName: 'G9',
        time: '2022/01/01',
        linkPoints: []
      },
      {
        show: false,
        pointId: 8,
        pointName: 'G8',
        time: '2022/01/02',
        linkPoints: []
      },
      {
        show: true,
        pointId: 7,
        pointName: 'G7',
        time: '2022/01/03',
        linkPoints: []
      },
      {
        show: true,
        pointId: 6,
        pointName: 'G6',
        time: '2022/01/04',
        linkPoints: []
      },
      {
        show: true,
        pointId: 5,
        pointName: 'G5',
        time: '2022/01/05',
        linkPoints: []
      },
      {
        show: true,
        pointId: 4,
        pointName: 'G4',
        time: '2022/01/06',
        linkPoints: []
      },
      {
        show: true,
        pointId: 3,
        pointName: 'G3',
        time: '2022/01/07',
        linkPoints: []
      },
      {
        show: true,
        pointId: 2,
        pointName: 'G2',
        time: '2022/01/08',
        linkPoints: [
          {
            arrow: 'top',
            step: 1,
            carType: 1,
            pointId: 1,
          }
        ]
      },
      {
        show: false,
        pointId: 1,
        pointName: 'G1',
        time: '2022/01/09',
        linkPoints: []
      },
    ]
  },
  {
    carType: 3,
    pointList: [
      {
        show: false,
        pointId: 9,
        pointName: 'G9',
        time: '2022/01/01',
        linkPoints: []
      },
      {
        show: false,
        pointId: 8,
        pointName: 'G8',
        time: '2022/01/02',
        linkPoints: []
      },
      {
        show: false,
        pointId: 7,
        pointName: 'G7',
        time: '2022/01/03',
        linkPoints: []
      },
      {
        show: false,
        pointId: 6,
        pointName: 'G6',
        time: '2022/01/04',
        linkPoints: []
      },
      {
        show: true,
        pointId: 5,
        pointName: 'G5',
        time: '2022/01/05',
        linkPoints: []
      },
      {
        show: true,
        pointId: 4,
        pointName: 'G4',
        time: '2022/01/06',
        linkPoints: []
      },
      {
        show: true,
        pointId: 3,
        pointName: 'G3',
        time: '2022/01/07',
        linkPoints: [
          {
            arrow: 'top',
            step: 1,
            carType: 2,
            pointId: 2,
          },
        ]
      },
      {
        show: false,
        pointId: 2,
        pointName: 'G2',
        time: '2022/01/08',
        linkPoints: [
          {
            arrow: 'top',
            step: 2,
            carType: 1,
            pointId: 1,
          }
        ]
      },
      {
        show: false,
        pointId: 1,
        pointName: 'G1',
        time: '2022/01/09',
        linkPoints: []
      },
    ]
  },
]
const tanleHead = [
  {
    year: 2024,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    year: 2025,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    year: 2026,
    months: [1, 2, 3, 4]
  },
]
const dateArr = [
  {
    year: 2024,
    months: [
      {month: 1},
      {month: 2},
      {month: 3},
      {month: 4},
      {month: 5},
      {month: 6},
      {month: 7},
      {month: 8},
      {month: 9},
      {month: 10},
      {month: 11},
      {month: 12},
    ]
  },
  {
    year: 2025,
    months: [
      {month: 1},
      {month: 2},
      {month: 3},
      {month: 4},
      {month: 5},
      {month: 6},
      {month: 7},
      {month: 8},
      {month: 9},
      {month: 10},
      {month: 11},
      {month: 12},
    ]
  },
  {
    year: 2026,
    months: [
      {month: 1},
      {month: 2},
      {month: 3},
      {month: 4},
    ]
  },
]
const buildDate = () => {
  let obj = {}
  dateArr.forEach((item, index) => {
    item.months.forEach((month, idx) => {
      obj[`year${item.year}month${month.month}`] = []
    })
  })
  return obj
}
const tablegantt = [
  {
    masterPlan: '项目主计划',
    subPlan: '子项目',
    ...buildDate(),
  },
  {
    masterPlan: '项目主计划',
    subPlan: '子项目',
    ...buildDate(),
    children: [
      {
        masterPlan: '项目主计划',
        parentPlan: '子项目',
        subPlan: '子项目A',
        ...buildDate(),
      },
      {
        masterPlan: '项目主计划',
        parentPlan: '子项目',
        subPlan: '子项目B',
        ...buildDate(),
      },
    ],
  },
  {
    masterPlan: '车身',
    subPlan: '车身3车身3车身3车身3车身3车身3车身3车身3车身3车身3车身3车身3车身3车身3车身3车身3',
    isSubPlan: true,
    subPlanNumber: 3,
    ...buildDate(),
  },
  {
    masterPlan: '车身',
    subPlan: '车身2',
    isSubPlan: true,
    subPlanNumber: 0,
    ...buildDate(),
  },
  {
    masterPlan: '车身',
    subPlan: '车身1',
    isSubPlan: true,
    subPlanNumber: 0,
    ...buildDate(),
  },
  {
    masterPlan: '座椅',
    subPlan: '座椅1',
    isSubPlan: true,
    subPlanNumber: 1,
    ...buildDate(),
  },
  {
    masterPlan: '发动机',
    subPlan: '发动机1',
    isSubPlan: true,
    subPlanNumber: 2,
    ...buildDate(),
  },
  {
    masterPlan: '发动机',
    subPlan: '发动机2',
    isSubPlan: true,
    subPlanNumber: 0,
    ...buildDate(),
  },
]
const buildTbaleData = () => {
  tablegantt[0].year2024month4 = [{type: 1, point: 6, status: 1}]
  tablegantt[0].year2024month8 = [{type: 1, point: 5, status: 1}]
  tablegantt[0].year2024month12 = [{type: 1, point: 4, status: 1}]
  tablegantt[0].year2025month6 = [{type: 1, point: 3, status: 3}]
  tablegantt[0].year2025month10 = [{type: 1, point: 2, status: 2}]
  tablegantt[0].year2025month12 = [{type: 1, point: 1, status: 2}]
  tablegantt[1].year2025month1 = [{type: 2, point: 4, status: 1}]
  tablegantt[1].year2025month2 = [{type: 2, point: 4, status: 1}]
  tablegantt[1].year2025month4 = [{type: 2, point: 3, status: 3}]
  tablegantt[1].year2025month11 = [{type: 2, point: 2, status: 2}]
  tablegantt[1].children[0].year2025month1 = [{type: 2, point: 4, status: 1}]
  tablegantt[1].children[0].year2025month4 = [{type: 2, point: 3, status: 3}]
  tablegantt[1].children[1].year2025month2 = [{type: 2, point: 4, status: 1}]
  tablegantt[1].children[1].year2025month4 = [{type: 2, point: 3, status: 3}]
  tablegantt[2].year2024month6 = [{type: 3, start: 8, step: 110, status: 1, text: '供应商定点'}]
  tablegantt[2].year2024month10 = [{type: 3, start: 25, step: 195, status: 1, text: '全功能软件开发'}]
  tablegantt[2].year2025month5 = [{type: 3, start: 15, step: 120, status: 3, text: '性能版发布'}, {type: 4, text: '全功能', date: '5/18'}]
  tablegantt[4].year2025month4 = [{type: 3, start: 15, step: 90, status: 2, text: '模具优化3.5M'}]
}
buildTbaleData()

export {
  pointData1,
  pointData2,
  tanleHead,
  tablegantt,
}
