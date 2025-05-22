<script setup>
import { onMounted, ref, reactive } from 'vue'
import { tablegantt, tanleHead } from "@/views/saicdemos/mock.js";

onMounted(() => {
  initPage()
})

const initPage = async () => {
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
      customCell: (record, index, column) => {
        console.log(record, index, column)
        if (index === 0 || index === 1) {
          return {
            colSpan: 2,
            class: record.children && record.children.length > 0 ? 'show-expand' : 'hide-expand'
          }
        }
        if (record.parentPlan) {
          return { colSpan: 0 }
        }
        if (record.isSubPlan) {
          return { rowSpan: record.subPlanNumber}
        }
        if (!record.children || record.children.length <= 0) {
          return { class: 'hide-expand' }
        }
      }
    },
    {
      title: '子计划',
      dataIndex: 'subPlan',
      key: 'subPlan',
      width: 100,
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
  console.log(columns)
}
const renderHead = async (list) => {
  await list.forEach((item, index) => {
    heads.value.push({
      title: item.year,
      dataIndex: `year${item.year}`,
      key: `year${item.year}`,
      width: 100,
      children: []
    })
    item.months.forEach((key, idx) => {
      heads.value[index].children.push({
        title: key,
        dataIndex: `year${item.year}month${key}`,
        key: `year${item.year}month${key}`,
        width: 100,
        customCell: (record, index, column) => {
          console.log(record, 1111)
          return {}
        }
      })
    })
  })
}
</script>
<template>
  <div class="table-gantt">
    <template v-if="columns.length >= 0">
      <a-table
        :columns="columns"
        :data-source="tablegantt"
        bordered
        expandFixed="right"
        :scroll="{
          x: 400,
        }"
      >
        <template #bodyCell="{record, column}">
          <template v-if="column?.key.indexOf('month') > -1">
            <span>{{record[column['key']].month}}</span>
            <template v-if="record[column['key']].start">
              <div class="line" :style="{width: record[column['key']].step * 10 + 'px', left: `${record[column['key']].start / 30 * 100}px`}">
                hello
              </div>
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
  top: 0;
}
</style>
