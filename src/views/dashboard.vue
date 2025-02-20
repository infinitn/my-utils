<script setup>
import { useRouter } from 'vue-router'
import {
  RightOutlined,
} from '@ant-design/icons-vue'
import IconFont from '@/components/IconFont.vue'

const router = useRouter()

const tools = [
  {
    id: 1,
    title: '图片转黑白',
    desc: '将彩色图片转换为黑白效果',
    icon: 'icon-xingzhuang-tupian',
    route: 'imageToLineArt',
    color: '#1890ff'
  },
  {
    id: 2,
    title: 'JsDemo',
    desc: 'js中各种小场景的解决办法',
    icon: 'icon-space_demo_dashboard-fill',
    route: 'previewPdf',
    color: '#1890ff'
  },
  {
    id: 99,
    title: '敬请期待',
    desc: '',
    icon: 'icon-jingqingqidai',
    route: '',
    color: '#1890ff'
  }
]

const toTool = (route) => {
  router.push({ name: route })
}
</script>

<template>
  <div class="dashboard">
    <div class="container">
      <!-- 标题部分 -->
      <div class="header">
        <h1>工具箱</h1>
        <p class="description">
          简单易用的在线工具集
        </p>
      </div>

      <!-- 工具列表 -->
      <div class="tools-grid">
        <div
          v-for="tool in tools"
          :key="tool.id"
          class="tool-card"
          @click="toTool(tool.route)"
        >
          <div class="tool-icon" :style="{ backgroundColor: `${tool.color}15` }">
            <IconFont :value="tool.icon" size="28" :color="tool.color" />
          </div>
          <div class="tool-content">
            <h3>{{ tool.title }}</h3>
            <p>{{ tool.desc }}</p>
          </div>
          <div class="tool-arrow">
            <right-outlined />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.dashboard {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 24px;
  }

  .header {
    text-align: center;
    margin-bottom: 48px;

    h1 {
      font-size: 36px;
      font-weight: 600;
      color: #1f1f1f;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #1890ff, #096dd9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .description {
      font-size: 16px;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    padding: 0 20px;

    .tool-card {
      background: white;
      border-radius: 12px;
      padding: 24px;
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(24, 144, 255, 0.1), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

        &::before {
          opacity: 1;
        }

        .tool-arrow {
          transform: translateX(0);
          opacity: 1;
        }
      }

      .tool-icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        :deep(.anticon) {
          font-size: 24px;
        }
      }

      .tool-content {
        flex: 1;

        h3 {
          font-size: 18px;
          font-weight: 500;
          color: #1f1f1f;
          margin-bottom: 8px;
        }

        p {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }
      }

      .tool-arrow {
        color: #1890ff;
        font-size: 16px;
        transform: translateX(-10px);
        opacity: 0;
        transition: all 0.3s ease;
      }
    }
  }
}

// 响应式调整
@media (max-width: 768px) {
  .dashboard {
    padding: 12px;

    .container {
      padding: 24px 16px;
    }

    .header {
      margin-bottom: 32px;

      h1 {
        font-size: 28px;
      }

      .description {
        font-size: 14px;
      }
    }

    .tools-grid {
      padding: 0;
      gap: 16px;

      .tool-card {
        padding: 16px;
      }
    }
  }
}
</style>
