import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // state：存储的用户信息
  const loginUser = ref({
    userName: '未登录',
  })
  //   mutation（尽量同步）：定义了对变量增删改查（更新）的方法
  const updateUser = (payload) => {
    loginUser.value = payload
  }
  //   actions（支持异步）：执行异步操作，并且触发mutation的更改（actions调用mutation）
  const getLoginUser = () => {
    updateUser({ userName: '鱼皮' })
  }

  return {
    loginUser,
    updateUser,
    getLoginUser,
  }
})
