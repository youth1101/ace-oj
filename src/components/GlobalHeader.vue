<template>
  <a-row id="globalHeader" align="center">
    <a-col flex="auto">
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
    </a-col>
    <a-col flex="100px">
      <div>{{ store.loginUser?.userName ?? '未登录' }}</div>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { routes } from '../router/routes'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const router = useRouter()
const store = useUserStore()
// 默认的主页
const selectedKeys = ref(['/'])

// 路由跳转时，更新选中菜单项（让顶部菜单的高亮状态，自动跟随页面路由变化）
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path]
})

const doMenuClick = (key: string) => {
  router.push({ path: key })
}

setTimeout(() => {
  store.updateUser({ userName: '鱼皮', role: 'admin' })
}, 3000)
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
