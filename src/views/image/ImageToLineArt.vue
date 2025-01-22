<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import {
  UploadOutlined,
  DownloadOutlined,
  PictureOutlined,
  CheckCircleOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons-vue'

const router = useRouter()

const imgBase64 = ref('')
const originalImageRef = ref(null)
const canvasRef = ref(null)
const imageSize = ref({ width: 0, height: 0 })

// 返回首页并清除历史
const goBack = () => {
  router.replace('/').then(() => {
    // 清除历史记录
    window.history.pushState(null, '', '/')
  })
}

// 拿到上传文件，转换为base64
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

// 转换为黑白图像
const convertToBlackAndWhite = () => {
  const img = originalImageRef.value
  const canvas = canvasRef.value

  if (!img || !canvas) return

  try {
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114
      const value = Math.round(gray)

      data[i] = value     // R
      data[i + 1] = value // G
      data[i + 2] = value // B
    }

    ctx.putImageData(imageData, 0, 0)
  } catch (error) {
    console.error('图像处理出错:', error)
    alert('图像处理失败，请查看控制台了解详情')
  }
}

// 上传图片，拿到文件
const uploadChange = async (info) => {
  try {
    const base64 = await getBase64(info.file)
    imgBase64.value = base64

    await nextTick()

    const img = new Image()
    img.onload = () => {
      imageSize.value = {
        width: img.width,
        height: img.height
      }
      const canvas = canvasRef.value
      if (canvas) {
        canvas.width = img.width
        canvas.height = img.height
        convertToBlackAndWhite()
      }
    }
    img.src = base64
  } catch (error) {
    console.error('图片上传失败:', error)
    alert('图片上传失败，请重试')
  }
}

// 下载图片
const downloadImage = () => {
  const canvas = canvasRef.value
  if (!canvas) {
    alert('请先转换图片')
    return
  }

  try {
    const link = document.createElement('a')
    const imageData = canvas.toDataURL('image/png')
    link.download = '黑白图片.png'
    link.href = imageData
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('下载失败:', error)
    alert('下载失败，请查看控制台了解详情')
  }
}

// 拖拽上传的配置
const uploadProps = {
  name: 'file',
  multiple: false,
  showUploadList: false,
  beforeUpload: () => false,
  onChange: uploadChange
}
</script>

<template>
  <div class="image-to-line-art">
    <!-- 返回按钮 -->
    <a-button
      class="back-btn"
      type="link"
      @click="goBack"
    >
      <template #icon><arrow-left-outlined /></template>
      首页
    </a-button>

    <div class="container">
      <!-- 标题部分 -->
      <div class="header">
        <h2>图片转黑白工具</h2>
        <p class="description">
          上传或拖拽图片，自动转换为黑白效果
        </p>
      </div>

      <!-- 上传区域 -->
      <div class="upload-section-box">
        <a-upload
        v-bind="uploadProps"
        :drag="true"
        class="upload-section"
      >
        <div class="upload-content">
          <div class="upload-icon">
            <upload-outlined />
            <picture-outlined />
          </div>
          <p class="upload-text">点击或拖拽图片到此区域上传</p>
        </div>
      </a-upload>
      </div>

      <!-- 图片处理区域 -->
      <div class="image-processing" v-if="imgBase64">
        <!-- 图片展示区域 -->
        <div class="image-display">
          <!-- 原图 -->
          <div class="image-card">
            <div class="card-header">
              <picture-outlined />
              <span>原图</span>
            </div>
            <div class="image-wrapper">
              <img
                ref="originalImageRef"
                :src="imgBase64"
                alt="原图"
              >
            </div>
          </div>

          <!-- 处理结果 -->
          <div class="image-card">
            <div class="card-header">
              <check-circle-outlined />
              <span>黑白效果</span>
              <a-button
                type="primary"
                @click="downloadImage"
                class="download-btn"
                size="middle"
              >
                <template #icon><download-outlined /></template>
                保存图片
              </a-button>
            </div>
            <div class="image-wrapper">
              <canvas ref="canvasRef"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.image-to-line-art {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  position: relative;

  .back-btn {
    position: fixed;
    left: 32px;
    top: 32px;
    font-size: 14px;
    padding: 6px 12px;
    height: auto;
    color: #666;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    z-index: 10;

    &:hover {
      color: #1890ff;
      transform: translateX(-2px);
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    :deep(.anticon) {
      font-size: 16px;
      margin-right: 4px;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    .header {
      text-align: center;
      margin-bottom: 32px;

      h2 {
        font-size: 24px;
        color: #1f1f1f;
        margin-bottom: 8px;
      }

      .description {
        color: #666;
        font-size: 14px;
      }
    }

    .upload-section-box {
      text-align: center;
    }
    .upload-section {
      width: 100%;
      margin-bottom: 24px;
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));

      :deep(.ant-upload-drag) {
        padding: 40px;
        background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%);
        border: 2px dashed #e6f0ff;
        border-radius: 16px;
        transition: all 0.3s ease;
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:not(.ant-upload-drag-hover) {
          &:hover {
            transform: translateY(-2px);
            border-color: #1890ff;
            background: linear-gradient(135deg, #ffffff 0%, #e6f7ff 100%);
            box-shadow: 0 8px 20px rgba(24, 144, 255, 0.12);
          }
        }

        &.ant-upload-drag-hover {
          border-color: #1890ff;
          background: linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%);
          box-shadow: 0 8px 20px rgba(24, 144, 255, 0.15);
        }
      }

      .upload-content {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;

        .upload-icon {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          gap: 12px;

          :deep(.anticon) {
            font-size: 36px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

            &:first-child {
              color: #1890ff;
              transform: translateX(12px);
            }

            &:last-child {
              color: #52c41a;
              transform: translateX(-12px);
            }
          }
        }

        .upload-text {
          font-size: 18px;
          font-weight: 500;
          color: #1890ff;
          margin: 16px 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
        }

        .upload-hint {
          color: #666;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;

          br {
            content: '';
            margin: 8px 0;
            display: block;
          }
        }
      }

      &:hover {
        .upload-text {
          color: #1890ff;
        }

        .upload-hint {
          color: #595959;
        }
      }
    }

    .image-display {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-top: 24px;

      .image-card {
        background: #fff;
        border: 1px solid #f0f0f0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        height: fit-content;

        .card-header {
          padding: 12px 16px;
          background: #fafafa;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          color: #1f1f1f;

          :deep(.anticon) {
            color: #1890ff;
          }

          .download-btn {
            margin-left: auto;
            border-radius: 6px;
            height: 32px;
            padding: 0 16px;
            font-weight: 500;
            background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
            border: none;
            box-shadow: 0 2px 6px rgba(24, 144, 255, 0.35);
            transition: all 0.3s ease;

            &:hover {
              transform: translateY(-1px);
              background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%);
              box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
            }

            &:active {
              transform: translateY(0);
              background: linear-gradient(135deg, #096dd9 0%, #0050b3 100%);
              box-shadow: 0 2px 4px rgba(24, 144, 255, 0.4);
            }

            :deep(.anticon) {
              font-size: 14px;
              margin-right: 6px;
              color: #fff;
            }
          }
        }

        .image-wrapper {
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          overflow: hidden;
          aspect-ratio: 4/3;
          position: relative;

          img, canvas {
            position: absolute;
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 4px;
          }
        }
      }
    }
  }

  // 响应式调整
  @media (max-width: 768px) {
    padding: 12px;

    .back-btn {
      position: fixed;
      left: 16px;
      top: 16px;
      padding: 6px 12px;
      font-size: 14px;
      backdrop-filter: none;
    }

    .container {
      padding: 16px;
      margin-top: 40px;

      .header {
        margin-bottom: 24px;
        h2 {
          font-size: 20px;
        }
      }

      .image-display {
        grid-template-columns: 1fr;
      }
    }
  }

  // 添加拖拽时的动画效果
  @keyframes pulse {
    0% {
      transform: scale(1) translateY(0);
    }
    50% {
      transform: scale(1.02) translateY(-2px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  :deep(.ant-upload-drag-hover) {
    .upload-icon {
      animation: pulse 1s ease infinite;
    }
  }
}
</style>
