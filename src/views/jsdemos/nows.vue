<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(() => {
  initPage()
})

const initPage = () => {
  console.log('pageName')
}
const start = async () => {
  try {
    const response = await fetch('http://www.nows.fun/')
    if (response.ok) {
      const data = await response.json()
      console.log('请求成功:', data)
    } else {
      console.error('请求失败:', response.status)
    }
  } catch (error) {
    console.error('请求出错:', error)
  }
}
</script>
<template>
  <div class="nows">
    <a-button type="primary" @click="start">开始</a-button>
  </div>
</template>

<style scoped lang="less">
.nows {

}
</style>
