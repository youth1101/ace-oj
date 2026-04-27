<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="doMenuClick">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div class="title-bar">
            <!-- <img class="logo" src="../assets/logo.jpg" alt="" /> -->
            <div class="title">OnlieJudge</div>
          </div>
        </a-menu-item>
        <!-- 动态生成导航菜单 -->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <!-- 用户信息区域 -->
    <a-col flex="100px">
      <div>{{ store.loginUser?.userName ?? '未登录' }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
// 导入依赖
import { computed, ref } from 'vue'
import { routes } from '../router/routes'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import checkAccess from '@/access/checkAccess'
import ACCESS_ENUM from '@/access/accessEnum'

// 初始化
const router = useRouter()
const store = useUserStore()

// 展示在路由的数组，过滤路由，只展示需要展示的路由
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false
    }
    if (!checkAccess(store.loginUser, item.meta?.access as string)) {
      return false
    }
    return true
  })
})
// 默认选中首页
const selectedKeys = ref(['/'])

// 路由跳转后更新菜单选中状态
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path]
})

// 菜单点击处理
const doMenuClick = (key: string) => {
  router.push({ path: key })
}

// 模拟用户登录
setTimeout(() => {
  store.updateUser({ userName: '鱼皮管理员', userRole: ACCESS_ENUM.ADMIN })
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
