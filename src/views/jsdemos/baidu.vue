<template>
  <div class="baidu">

    <!-- 主体内容 -->
    <div class="main-content">
      <div class="logo">
        <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="百度logo">
      </div>
      <div class="search-box">
        <input type="text" class="search-input" v-model="searchKeyword">
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchKeyword = ref('')

const initPage = () => {
  console.log('pageName')
}

const search = () => {
  if (searchKeyword.value.trim()) {
    window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(searchKeyword.value)}`, '_blank')
  }
}

</script>

<style scoped lang="less">
.baidu {
  font-family: Arial, sans-serif;
  background: url('../../assets/images/img.png') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  position: relative;


  // 主体内容
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    .logo {
      margin-bottom: 30px;

      img {
        width: 270px;
        height: 129px;
      }
    }

    .search-box {
      width: 582px;
      position: relative;

      .search-input {
        width: 100%;
        height: 34px;
        border: 1px solid #b6b6b6;
        border-radius: 17px;
        padding: 0 15px;
        font-size: 16px;
        outline: none;

        &:focus {
          border-color: #4e6ef2;
          box-shadow: 0 0 3px rgba(78, 110, 242, 0.3);
        }
      }
    }
  }
}
</style>
