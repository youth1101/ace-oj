// 导入路由相关依赖
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { routes } from './routes'
import { useUserStore } from '@/stores/user'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[],
})

// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()

//   // 权限检查：需要管理员权限的路由
//   if (to.meta?.access === 'canAdmin') {
//     if (userStore.loginUser?.userRole !== 'admin') {
//       next('/noAuth')
//       return
//     }
//   }

//   next() // 放行
// })

export default router
