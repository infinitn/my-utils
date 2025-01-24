<script setup>
import { onMounted } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter()
onMounted(() => {
  initPage()
})

const initPage = () => {
  console.log('pageName')
}
const goHome = () => {
  router.push({ path: '/' })
}
</script>
<template>
  <div class="not-found">
    <img src="../../assets/images/404.png" alt="">
    <div class="sorry">对不起，您访问的页面不存在。</div>
    <div>
      <a-button type="primary" @click="goHome">返回首页</a-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  img {
    width: 400px;
  }
  .sorry {
    margin-top: 40px;
    margin-bottom: 40px;
    color: #727785;
  }
}
</style>

