import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 关闭生产提示
Vue.config.productionTip = false

// 导入 Element-UI
Vue.use(ElementUI)

// 创建主 Vue 实例
new Vue({
  router,               // 使用 index.js 中的 VueRouter 路由器实例
  render: h => h(App),  // 根据 App.vue 渲染组件
}).$mount('#app')       // 挂载
