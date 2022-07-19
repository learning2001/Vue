//该文件用于创建Vuex中最为核心的store
// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//引入Vuex
// 准备actions——用于响应组件中的动作
const actions = {
    // jia(context,value){
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
        console.log('actions中jiaOdd被调用',context,value);
        if(context.state.sum%2){
            context.commit('JIA',value)
            // context.state.sum+=value  会使开发者工具失效
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            console.log('actions中jianWait被调用',context,value);
            context.commit('JIA',value)            
        }, 1000);
    }
}
//准备mutations——用于操作数据（state）
const mutations = {
    JIA(state,value){
        console.log('mutation中JIA被调用',state,value);
        state.sum+=value
    },
    JIAN(state,value){
        console.log('mutation中JIAN被调用',state,value);
        state.sum-=value
    },
}
//准备state——用于存储数据
const state = {
    sum:0,
    school:'长春光华学院',
    subject:'前端'
}

//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建并暴露store——用于管理上面三个对象
export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

