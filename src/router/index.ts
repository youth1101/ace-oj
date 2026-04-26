import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { routes } from './routes'

import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})

router.beforeEach((to, from, next) => {
  // 获取用户状态
  const userStore = useUserStore()

  // 判断是否需要管理员权限
  if (to.meta?.access === 'canAdmin') {
    // 如果用户不是 admin → 跳转到无权限页面
    if (userStore.loginUser?.role !== 'admin') {
      next('/noAuth')
      return
    }
  }

  // 放行
  next()
})

export default router
