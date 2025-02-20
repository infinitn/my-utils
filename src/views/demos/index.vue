<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router'
import IconFont from '@/components/IconFont.vue'
const router = useRouter()
const route = useRoute()
let menus = []
router.options.routes.forEach(item => {
  if (item.name && item.name == 'demosModel') {
    menus = item.children
  }
})
</script>
<template>
  <div class="demos-model">
    <div>
      <a-menu :mode="'inline'" :selectedKeys="[route.name]">
        <template v-for="item in menus" :key="item.name">
          <a-menu-item @click="() => router.push(item.path)">
            <IconFont :value="item.meta.icon" :color="route.name == item.name ? '#1677ff' : 'rgba(0,0,0,0.88)'" />
            {{ item.meta.title }}
          </a-menu-item>
        </template>
      </a-menu>
      <div class="back-menu" @click="() => router.push('/')">
        <IconFont value="icon-left" size="14" />
        返回首页
      </div>
    </div>
    <div class="router-view-box">
      <RouterView />
    </div>
  </div>
</template>
<style lang="less" scoped>
.demos-model {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  .ant-menu {
    position: sticky;
    flex-shrink: 0;
    width: 200px;
    height: calc(100% - 40px);
    border-right: 1px solid #e8e8e8;
  }
  .ant-menu-inline {
    width: 200px;
  }
  .ant-menu-item {
    height: 40px;
    line-height: 40px;
  }
  .back-menu {
    height: 39px;
    line-height: 39px;
    text-align: center;
    border-right: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
    cursor: pointer;
    &:hover {
      color: #1890ff;
    }
  }
  .router-view-box {
    padding: 20px;
  }
}
</style>
