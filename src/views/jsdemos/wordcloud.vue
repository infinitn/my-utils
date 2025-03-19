<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import WordCloud from 'wordcloud'

const router = useRouter()
onMounted(() => {
  initPage()
})

const initPage = () => {
  const data = [
    ['Hello', 10],
    ['World', 20],
    ['Welcome', 30],
    ['to', 40],
    ['the', 50],
    ['WordCloud', 60],
    ['Hello', 10],
    ['World', 20],
    ['Welcome', 30],
    ['to', 40],
    ['the', 50],
    ['WordCloud', 60],
    ['Hello', 10],
    ['World', 20],
    ['Welcome', 30],
    ['to', 40],
    ['the', 50],
    ['WordCloud', 60],
  ]
  const container = document.getElementById('my-word-cloud')
  const options = {
    list: data,
    gridSize: 0,
    backgroundColor: '#f4f4f4',
    minSize: 10,
    maxSize: 100,
    shape: 'diamond',
    drawOutOfBound: false,
    shrinkToFit: true,
  }
  WordCloud(container, options);
}
</script>
<template>
  <div class="word-cloud">
    <div class="doc">参考文档：<a href="//github.com/timdream/wordcloud2.js/blob/gh-pages/API.md">https://github.com/timdream/wordcloud2.js/blob/gh-pages/API.md</a></div>
    <div class="my-word-cloud" id="my-word-cloud"></div>
  </div>
</template>

<style scoped lang="less">
.word-cloud {
  width: 100%;
  height: 100%;
  .doc {
    line-height: 30px;
  }
  .my-word-cloud {
    width: 100%;
    height: calc(100% - 30px);
  }
}
</style>
