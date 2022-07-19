//该文件用于创建Vuex中最为核心的store
// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import countOptions from './count'
import personOptions from './person'

//创建并暴露store——用于管理上面三个对象
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})