// 导入所需依赖
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

// 创建 Vue 应用实例
const app = createApp(App)

// 注册插件
app.use(createPinia()) // 状态管理
app.use(router) // 路由管理
app.use(ArcoVue) // UI 组件库

// 挂载应用
app.mount('#app')
