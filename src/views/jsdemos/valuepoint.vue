<script setup>
import RenderPoint from '@/components/renderpoint.vue'
import { pointData1, pointData2 } from "@/views/jsdemos/mock.js";

</script>
<template>
  <div class="value-point">
    <RenderPoint :pointData="pointData2"></RenderPoint>
    <hr class="dom-hr">
    <RenderPoint :pointData="pointData1"></RenderPoint>
  </div>
</template>

<style scoped lang="less">
.value-point {
  .dom-hr {
    margin: 20px 0;
  }
}
</style>
