<script setup>
import { defineProps } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_543083_682iflgrgzb.js',
});

const props = defineProps({
  value: {
    required: true,
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 14
  },
  color: {
    type: String,
    default: '#000'
  }
})

</script>
<template>
  <icon-font :type="props.value" :style="{ fontSize: props.size+'px', color: props.color }" />
</template>

<style scoped lang="less">
.icon-font {

}
</style>
