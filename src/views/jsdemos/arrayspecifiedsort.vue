<script setup>
import { onMounted } from 'vue'

const arr = [
  { name: '荣威' },
  { name: '大通' },
  { name: '智己' }
]

const arr1 = [
  { name: '智己', value: 12 },
  { name: '荣威', value: 22 },
  { name: '荣威', value: 92 },
  { name: '大通', value: 32 },
  { name: '智己', value: 11 },
]
onMounted(() => {
// 创建一个映射，将arr中的name与其索引对应起来
  const orderMap = new Map(arr.map((item, index) => [item.name, index]))
  console.log(orderMap, JSON.stringify(orderMap), 'orderMap')
// 根据arr的顺序对arr1进行排序
  arr1.sort((a, b) => orderMap.get(a.name) - orderMap.get(b.name))

  console.log(arr1, JSON.stringify(arr1), 'arr1') // 输出排序后的arr1
  window.opener.focus()
  // setTimeout(() => {
  //   window.open('javescript:;', 'hello2')
  // }, 1000)
})
const openWin = () => {
  window.open('javescript:;', 'hello2')
}
</script>
<template>
  <div class="arr-handle">
    <div class="explanation" @click="openWin">
      说明：根据特定顺序对数组进行排序
    </div>
    <div class="container">
      <div>
        <div>数组一</div>
        <div v-for="(item, index) in arr" :key="index">
          name: {{ item.name }}
        </div>
        <div style="margin-top: 20px">数组二</div>
        <div v-for="(item, index) in arr1" :key="index">
          name: {{ item.name }}, value: {{ item.value }}
        </div>
      </div>
      <div class="handle-process">
        <div class="sub-title">操作过程:</div>
        <div>step1：</div>
        <div>const orderMap = new Map(arr.map((item, index) => [item.name, index]))</div>

        <div class="sub-title">执行结果：</div>
        <div>Map(3) {'荣威' => 0, '大通' => 1, '智己' => 2}</div>

        <div class="sub-title">step2:</div>
        <div>arr2.sort((a, b) => orderMap.get(a.name) - orderMap.get(b.name))</div>

        <div class="sub-title">执行结果：</div>
        <div>[{"name":"荣威","value":22},{"name":"荣威","value":92},{"name":"大通","value":32},{"name":"智己","value":12},{"name":"智己","value":11}]</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.arr-handle {
  .explanation {
    font-size: 16px;
    line-height: 30px;
  }
  .container {
    display: flex;
    .handle-process {
      margin-left: 20px;
      .sub-title {
        margin-top: 20px;
      }
    }
  }
}
</style>
