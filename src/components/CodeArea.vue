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
  <div class="code-area">

  </div>
</template>

<style scoped lang="less">
.code-area {

}
</style>
