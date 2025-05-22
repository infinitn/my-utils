<script setup>
import RenderPoint from '@/components/renderpoint.vue'
import RenderPoint2 from '@/components/renderpoint2.vue'
import { pointData1, pointData2 } from "@/views/saicdemos/mock.js";

</script>
<template>
  <div class="value-point">
<!--    <RenderPoint2 :pointData="pointData2"></RenderPoint2>-->
<!--    <hr class="dom-hr">-->
    <RenderPoint :pointData="pointData2"></RenderPoint>
    <hr class="dom-hr">
    <RenderPoint :pointData="pointData1"></RenderPoint>
    <hr class="dom-hr">
    <RenderPoint2 :pointData="pointData2"></RenderPoint2>
  </div>
</template>

<style scoped lang="less">
.value-point {
  .dom-hr {
    margin: 20px 0;
  }
}
</style>
