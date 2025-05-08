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

export {
  pointData1,
  pointData2,
}
