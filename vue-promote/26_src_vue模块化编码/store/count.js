export default  {
    namespaced:true,
    actions: {
        jiaOdd(context, value) {
            console.log('actions中jiaOdd被调用', context, value);
            if (context.state.sum % 2) {
                context.commit('JIA', value)
                // context.state.sum+=value  会使开发者工具失效
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                console.log('actions中jianWait被调用', context, value);
                context.commit('JIA', value)
            }, 1000);
        }
    },
    mutations: {
        JIA(state, value) {
            console.log('mutation中JIA被调用');
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutation中JIAN被调用');
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '长春光华学院',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}
