import ACCESS_ENUM from './accessEnum'

/**
 * @param loginUser 当前登录用户信息，这里给了 any 类型
 * @param needAccess 需要的访问权限，这里给一个未登录（无权限）作为默认值
 * @return boolean 是否有访问权限
 */

// 检查访问权限
const checkAccess = (loginUser: any, needAccess: string = ACCESS_ENUM.NOT_LOGIN) => {
  // 首先获取当前登录用户具有的权限（如果没有loginUser则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true
  }
  //   如果需要是用户才能够访问
  if (needAccess === ACCESS_ENUM.USER) {
    // 如果用户没有登录，那么表示无权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false
    }
  }
  //   如果需要是管理员才能够访问
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 如果不是管理员，那么就无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false
    }
  }
  return true
}
export default checkAccess
