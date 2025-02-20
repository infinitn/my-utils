<script setup>
import { onMounted, ref } from 'vue'
import * as pdfjsLib from 'https://mozilla.github.io/pdf.js/build/pdf.mjs'
import pdfFile from "@/assets/files/test-pdf.pdf";

// 设置PDF.js worker路径
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.mjs'
const pdfContainer = ref(null)

onMounted(() => {
  initPdfViewer()
})

const initPdfViewer = async () => {
  const loadingTask = pdfjsLib.getDocument(pdfFile)
  const pdf = await loadingTask.promise
  const numPages = pdf.numPages
  let height = 0

  for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber)
    const viewport = page.getViewport({ scale: 1.5 })
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.height = viewport.height
    canvas.width = viewport.width
    height += canvas.height

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    }
    await page.render(renderContext).promise

    pdfContainer.value.appendChild(canvas)
  }

  // 监听滚动事件
  pdfContainer.value.addEventListener('scroll', function (e) {
    // 40 外围div的上下padding
    if (height - e.target.clientHeight == e.target.scrollTop) {
      console.log('到底了')
    }
  })
}
</script>
<template>
  <div class="preview-pdf">
    <div ref="pdfContainer" style="height: 100%; overflow-y: scroll;"></div>
  </div>
</template>

<style scoped lang="less">
.preview-pdf {
  height: 100%;
  overflow: auto;
}
</style>
