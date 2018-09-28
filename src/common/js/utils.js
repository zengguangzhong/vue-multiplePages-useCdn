/**
 * 封装一些公共方法
 */

export default {
  // 获取localstorage
  getStore(name = 'hupoBoostFreeBasic') {
    return localStorage.getItem(name)
  },
  // 设置localstorage
  setStore(opt, name = 'hupoBoostFreeBasic') {
    return localStorage.setItem(name, opt)
  },
  // 移除localstorage
  rmStore(name = 'hupoBoostFreeBasic') {
    return localStorage.removeItem(name)
  },
  // 清空 localstorage
  clearStore() {
    return localStorage.clear()
  }
}
