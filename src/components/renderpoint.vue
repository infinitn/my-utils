<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  pointData: {
    required: true,
    default: null
  }
})

</script>
<template>
  <div class="render-point">
    <div class="car-type" v-for="(item, index) in props.pointData" :key="index">
      <div class="car-type-name">车型{{ item.carType }}：</div>
      <div class="point" v-for="(key, idx) in item.pointList" :key="idx">
        <template v-if="key.show">
          <div class="point-name">{{ key.pointName }}</div>
          <div class="point-time">{{ key.time }}</div>
          <div
            class="point-left-line"
            :style="{
              width: item.pointList[idx - 1]?.show ? '70px' : '35px',
              left: item.pointList[idx - 1]?.show  ? '-35px' : '0'
            }"
          ></div>
          <div
            v-for="(d, s) in key.linkPoints"
            :key="s"
            :class="`point-${d.arrow}-line`"
            :style="{
              height: `${d.step * 80}px`,
              top: d.arrow == 'top' ? `-${d.step * 80 - 16}px` : '16px',
              right: d.arrow == 'top' ? `-${(d.step - 1) * 102}px` : '0px',
            }"
          >
            <div
              v-if="d.arrow == 'bottom'"
              class="bottom-dashed"
              :style="{
                width: `${(key.pointId - d.pointId) * 102}px`,
                top: `${d.step * 80}px`
              }"
            ></div>
            <div
              v-if="d.arrow == 'top'"
              class="top-dashed"
              :style="{
                width: `${(key.pointId - d.pointId - 1) * 102 + 35}px`,
                bottom: `0px`,
                right: `0px`
              }"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.render-point {
  .car-type {
    display: flex;
    height: 80px;
    .car-type-name {
      margin-right: 32px;
      line-height: 32px;
      font-weight: bold;
    }
    .point {
      position: relative;
      box-sizing: border-box;
      width: 102px;
      text-align: center;
      .point-name {
        margin: 0 auto;
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 50%;
        background-color: #1890ff;
      }
      .point-left-line {
        position: absolute;
        top: 16px;
        left: -35px;
        border-top: 1px solid #111;
      }
      .point-bottom-line {
        position: absolute;
        top: 16px;
        right: 0;
        border-right: 1px dashed #111;
        .bottom-dashed {
          position: absolute;
          border-top: 1px dashed #111;
        }
      }
      .point-top-line {
        position: absolute;
        top: 16px;
        right: 0;
        border-right: 1px dashed #111;
        .top-dashed {
          position: absolute;
          border-top: 1px dashed #111;
        }
      }
    }
  }
}
</style>
