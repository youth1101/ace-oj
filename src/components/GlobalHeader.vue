<template>
  <div id="globalHeader">
    <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="doMenuClick">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div class="title-bar">
          <!-- <img class="logo" src="../assets/logo.jpg" alt="" /> -->
          <div class="title">OnlieJudge</div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup lang="ts">
import { routes } from '../router/routes'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

// 默认的主页
const selectedKeys = ref(['/'])

// 路由跳转时，更新选中菜单项（让顶部菜单的高亮状态，自动跟随页面路由变化）
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path]
})

const doMenuClick = (key: string) => {
  router.push({ path: key })
}
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.title {
  color: #444;
}
.logo {
  height: 48px;
}
</style>
