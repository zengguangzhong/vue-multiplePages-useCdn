
/**
 * 封装一些公共方法
 */

export default {
  // 获取localstorage
	getStore(name = 'hupoBoostFree') {
		return localStorage.getItem(name)
	},
  // 设置localstorage
	setStore(name = 'hupoBoostFree', opt) {
		return localStorage.setItem(name, opt)
	},
  // 移除localstorage
	rmStore(name = 'hupoBoostFree') {
		return localStorage.removeItem(name)
	},
  // 清空 localstorage
	clearStore() {
		return localStorage.clear()
	}
}