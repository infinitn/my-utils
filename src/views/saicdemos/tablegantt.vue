<script setup>
import { onMounted, ref, reactive } from 'vue'
import { tablegantt, tanleHead } from "@/views/saicdemos/mock.js";

onMounted(() => {
  initPage()
})

const initPage = async () => {
  console.log(tablegantt, 10101)
  await renderHead(tanleHead)
  renderColumns()
}
let columns = ref([])
let heads = ref([])
const renderColumns = () => {
  columns.value = [
    {
      title: '计划',
      dataIndex: 'masterPlan',
      key: 'masterPlan',
      width: 100,
      ellipsis: true,
      fixed: 'left',
      customCell: (record, index, column) => {
        console.log(record, index, column)
        if (index === 0 || index === 1) {
          return {
            colSpan: 2,
            class: record.children && record.children.length > 0 ? 'show-expand' : 'hide-expand'
          }
        }
        if (record.parentPlan) {
          return { colSpan: 0, class: 'hide-expand' }
        }
        if (record.isSubPlan) {
          return { rowSpan: record.subPlanNumber, class: 'hide-expand',}
        }
      }
    },
    {
      title: '子计划',
      dataIndex: 'subPlan',
      key: 'subPlan',
      width: 100,
      ellipsis: true,
      fixed: 'left',
      customCell: (record, index, column) => {
        if (index === 0 || index === 1) {
          return  { colSpan: 0 }
        }
        if (record.parentPlan) {
          return { colSpan: 2 }
        }
      }
    },
    ...heads.value
  ]
}
const renderHead = async (list) => {
  await list.forEach((item, index) => {
    heads.value.push({
      title: item.year,
      dataIndex: `year${item.year}`,
      key: `year${item.year}`,
      children: []
    })
    item.months.forEach((key, idx) => {
      heads.value[index].children.push({
        title: key,
        dataIndex: `year${item.year}month${key}`,
        key: `year${item.year}month${key}`,
        width: 90,
        align: 'center'
      })
    })
  })
}
// 绿色66CC00
// 蓝色3366CC
// 黄色FFCC33
// 灰色C0C0C0
</script>
<template>
  <div class="table-gantt">
    <template v-if="columns.length >= 0">
      <a-table
        :columns="columns"
        :data-source="tablegantt"
        bordered
        table-layout="fixed"
        :pagination="false"
        :scroll="{x: 100}"
      >
        <template #bodyCell="{text, record, index, column}">
          <template v-if="index == 1 && column?.key === 'masterPlan'">
            <sapn>{{record.subPlan}}</sapn>
          </template>
          <template v-if="column?.key.indexOf('month') > -1">
            <template v-if="record[column['key']] && record[column['key']].length > 0">
              <template v-for="(item, index) in record[column['key']]">
                <template v-if="item?.type == 1">
                  <div
                    class="master-point"
                    :class="{
                      'master-point-1': item.status === 1,
                      'master-point-2': item.status === 2,
                      'master-point-3': item.status === 3,
                      'master-point-4': item.status === 4,
                    }"
                  >
                    G{{item.point}}
                  </div>
                </template>
                <template v-if="item?.type == 2">
                  <div
                    class="sub-point"
                    :class="{
                      'sub-point-1': item.status === 1,
                      'sub-point-2': item.status === 2,
                      'sub-point-3': item.status === 3,
                      'sub-point-4': item.status === 4,
                    }"
                  >
                    G{{item.point}}
                  </div>
                </template>
                <template v-if="item?.type == 3">
                  <div
                    class="gantt-line"
                    :class="{
                      'gantt-line-1': item.status === 1,
                      'gantt-line-2': item.status === 2,
                      'gantt-line-3': item.status === 3,
                      'gantt-line-4': item.status === 4,
                    }"
                    :style="{width: item.step * 3 + 'px', left: `${item.start / 30 * 100}px`}"
                  >{{item.text}}</div>
                </template>
                <template v-if="item?.type == 4">
                  <div class="star">
                    <div>{{item.text}}</div>
                    <div>{{item.date}}</div>
                    <img src="../../assets/images/star.png" alt="">
                  </div>
                </template>
              </template>
            </template>
          </template>
        </template>
      </a-table>
    </template>
  </div>
</template>

<style scoped lang="less">
.table-gantt {
  width: 100%;
}
/deep/.hide-expand {
  .ant-table-row-expand-icon.ant-table-row-expand-icon-spaced {
    display: none !important;
  }
}
.line {
  z-index: 1;
  position: absolute;
  height: 20px;
  line-height: 20px;
  background: red;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
}
.master-point {
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #fff;
  font-weight: bold;
  &-1 {
    background-image: url('../../assets/images/icon_like_1.png');
    background-size: 32px;
  }
  &-2 {
    background-image: url('../../assets/images/icon_like_2.png');
    background-size: 32px;
  }
  &-3 {
    background-image: url('../../assets/images/icon_like_3.png');
    background-size: 32px;
  }
  &-4 {
    background-image: url('../../assets/images/icon_like_4.png');
    background-size: 32px;
  }
}
.sub-point {
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #fff;
  font-weight: bold;
  &-1 {
    background-image: url('../../assets/images/diamond_1.png');
    background-size: 32px;
  }
  &-2 {
    background-image: url('../../assets/images/diamond_2.png');
    background-size: 32px;
  }
  &-3 {
    background-image: url('../../assets/images/diamond_3.png');
    background-size: 32px;
  }
  &-4 {
    background-image: url('../../assets/images/diamond_4.png');
    background-size: 32px;
  }
}
.gantt-line {
  box-sizing: border-box;
  z-index: 1;
  position: absolute;
  height: 20px;
  line-height: 20px;
  text-align: center;
  bottom: 5px;
  border-radius: 2px;
  &-1 {
    border: 1px solid #66CC00;
    background-color: #a4e2c6;
  }
  &-2 {
    border: 1px solid #3366CC;
    background-color: #44cef6;
  }
  &-3 {
    border: 1px solid #FFCC33;
    background-color: #fff143;
  }
  &-4 {
    border: 1px solid #C0C0C0;
    background-color: #D0D0D0;
  }
}
.star {
  z-index: 1;
  position: absolute;
  top: 0;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  img {
    margin: 0 auto;
    width: 10px;
    height: 10px;
  }
}
</style>
