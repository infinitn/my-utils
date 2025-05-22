<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(() => {
  initPage()
})

const initPage = () => {
  console.log('pageName')
}
</script>
<template>
  <div class="point-dot">

  </div>
</template>

<style scoped lang="less">
.point-dot {

}
</style>
