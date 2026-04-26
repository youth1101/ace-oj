import AdminView from '@/views/AdminView.vue'
import NoAuthView from '@/views/NoAuthView.vue'
import type { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '浏览题目',
    // component: HomeView,
  },
  {
    path: '/admin',
    name: '管理员可见',
    component: AdminView,
    meta: {
      access: 'canAdmin',
    },
  },
  {
    path: '/noAuth',
    name: '无法访问',
    component: NoAuthView,
  },
  {
    path: '/about',
    name: '关于我的',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue'),
  },
]
