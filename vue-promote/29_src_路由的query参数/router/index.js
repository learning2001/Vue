//该文件用于专门创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Messages from '../pages/Messages.vue'
import Detail from '../pages/Detail.vue'
//创建一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[      //子路由不需要加斜杠
                {
                    path:'news',
                    component:News
                },
                {
                    path:'messages',
                    component:Messages,
                    children:[
                        {
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        },
    ]
})
