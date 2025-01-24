<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
const goHome = () => {
  router.push({ path: '/login' })
}
</script>
<template>
  <div class="no-permissions">
    <img src="../../assets/images/401.png" alt="">
    <div class="sorry">对不起，您没有访问该资源的权限或登录已失效。</div>
    <div>
      <a-button type="primary" @click="goHome">返回首页</a-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.no-permissions {
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
