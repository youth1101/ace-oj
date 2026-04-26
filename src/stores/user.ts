// 导入依赖
import { ref } from 'vue'
import { defineStore } from 'pinia'

// 用户状态管理
export const useUserStore = defineStore('user', () => {
  // state：存储的用户信息
  // 状态：用户信息
  const loginUser = ref({
    userName: '未登录',
    role: 'notLogin',
  })

  // mutation（尽量同步）：定义了对变量增删改查（更新）的方法
  // 方法：更新用户信息
  const updateUser = (payload) => {
    loginUser.value = payload
  }

  //   actions（支持异步）：执行异步操作，并且触发mutation的更改（actions调用mutation）
  // 方法：获取登录用户信息
  const getLoginUser = () => {
    // 模拟获取用户信息
    updateUser({
      userName: '鱼皮',
      role: 'admin',
    })
  }
  // 暴露状态和方法
  return {
    loginUser,
    updateUser,
    getLoginUser,
  }
})
