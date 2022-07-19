import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {mixin,mixin2,hunru2} from "./mixin.js";
Vue.mixin(mixin);
Vue.mixin(mixin2);
Vue.mixin(hunru2)

new Vue({
  render: h => h(App),
}).$mount('#app')
