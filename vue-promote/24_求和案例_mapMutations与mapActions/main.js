import Vue from 'vue'
import App from './App.vue'
// 使用插件
// Vue.use(plugins)
import store from './store/index'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
