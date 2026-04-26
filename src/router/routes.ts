// 导入路由组件
import AdminView from '@/views/AdminView.vue'
import NoAuthView from '@/views/NoAuthView.vue'
import type { RouteRecordRaw } from 'vue-router'

// 路由配置数组
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '浏览题目',
    // 首页组件（待实现）
  },
  {
    path: '/admin',
    name: '管理员可见',
    component: AdminView,
    meta: { access: 'canAdmin' }, // 需要管理员权限
  },
  {
    path: '/noAuth',
    name: '无法访问',
    component: NoAuthView, // 无权限页面
  },
  {
    path: '/hide',
    name: '显隐页面',
    meta: { hideInMenu: true }, // 该页面在菜单中隐藏
  },
  {
    path: '/about',
    name: '关于我的',
    // 关于页面（待实现，计划使用懒加载）
  },
]
