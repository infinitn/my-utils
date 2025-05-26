<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {tanleHead } from "@/views/saicdemos/mock.js";

const router = useRouter()
const list = [
  { name: 'AP31 Major(P2)', brand: 'Roewe', structure: '三厢车', type: 1, year2024month4: [{type: 1, point: 6, status: 1}] },
  { name: 'AP31 Major(P2)', brand: 'Roewe', structure: '三厢车', type: 2 },
  { name: 'AP32墨西哥', brand: 'MG', structure: 'SUV', type: 1 },
  { name: 'AP32墨西哥', brand: 'MG', structure: 'SUV', type: 2 },
  { name: 'IS31', brand: 'Roewe', structure: '三厢车', type: 1 },
  { name: 'IS31', brand: 'Roewe', structure: '三厢车', type: 2 },
]
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
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 140,
      className: 'dark',
      customCell: (record, index, column) => {
        return {
          rowSpan: index % 2 === 0 ? 2 : 0
        }
      }
    },
    {
      title: '品牌',
      dataIndex: 'brand',
      key: 'brand',
      fixed: 'left',
      width: 100,
      className: 'dark',
      customCell: (record, index, column) => {
        return {
          rowSpan: index % 2 === 0 ? 2 : 0
        }
      }
    },
    {
      title: '车身结构',
      dataIndex: 'structure',
      key: 'structure',
      fixed: 'left',
      width: 100,
      className: 'dark',
      customCell: (record, index, column) => {
        return {
          rowSpan: index % 2 === 0 ? 2 : 0
        }
      }
    },
    {
      title: '目标/实际',
      dataIndex: 'type',
      key: 'type',
      fixed: 'left',
      width: 100,
      className: 'dark',
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
      className: 'dark',
      children: []
    })
    item.months.forEach((key, idx) => {
      heads.value[index].children.push({
        title: key,
        dataIndex: `year${item.year}month${key}`,
        key: `year${item.year}month${key}`,
        width: 90,
        align: 'center',
        className: 'light',
      })
    })
  })
}
const goTbaleGantt = (val) => {
  console.log(val)
  router.push({ name: 'tableGantt' })
}
</script>
<template>
  <div class="project-plan-overview">
    <a-table
      bordered
      :columns="columns"
      :data-source="list"
      :scroll="{x: 100}"
    >
      <template #bodyCell="{ text, record, index, column }">
        <div v-if="column?.dataIndex === 'name'">
          <span class="name-col" @click="goTbaleGantt(record)">{{text}}</span>
        </div>
        <div v-if="column?.dataIndex === 'type'">
          {{record.type == 1 ? '目标' : '实际'}}
        </div>
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
            </template>
          </template>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped lang="less">
.project-plan-overview {
  /deep/th.dark {
    background-color: #1677ff;
    color: #fff;
  }
  /deep/th.light {
    background-color: #91caff;
  }
  .name-col {
    color: #096dd9;
    cursor: pointer;
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
}
</style>
