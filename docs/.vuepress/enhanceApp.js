import _ from 'lodash'
import BootstrapVue from 'bootstrap-vue'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化

  // 讓 vue 中可以使用 lodash
  Object.defineProperty(Vue.prototype, '_', { value: _ })

  // 新增 bootstrap-vue
  Vue.use(BootstrapVue)
}
