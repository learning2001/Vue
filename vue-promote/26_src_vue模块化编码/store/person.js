import {nanoid} from 'nanoid'
import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf("王") == 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context) {
            axios.get('https://v1.hitokoto.cn/?c=f&encode=text (opens new window)').then(
                response => {
                    context.commit("ADD_PERSON", {id: nanoid(),name:response.data.hitokoto})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutation中ADD_PERSON被调用')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
            name: '申屠宇扬',
            id: '001'
        }]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}