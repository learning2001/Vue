//该文件用于专门创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Messages from '../pages/Messages.vue'
import Detail from '../pages/Detail.vue'
import Detail2 from '../pages/Detail2.vue'
//创建一个路由器
export default new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[      //子路由不需要加斜杠
                {
                    path:'news',
                    component:News,
                    children:[
                        {
                            name:"detail2",
                            path:'detail2',
                            component:Detail2,
                            props({query}){
                                return {id:query.id,name:query.name,color:query.color,animal:query.animal}
                            }
                        },
                    ]
                },
                {
                    path:'messages',
                    component:Messages,
                    children:[
                        {
                            name:'detail',
                            path:'detail/:id/:title',   //使用占位符声明接受params参数
                            component:Detail,
                            // props的第一种写法，值为对象，其中所有的key-value值都会以对象的形式传递给组件
                            // props:{school:'长春光华学院',name:'申屠宇扬'}
                            
                            //props第第二种写法，值为布尔值，若布尔值为真，就会把该路由由组件收到的所有params参数，以props的形式传给该参数
                            // props:true

                            //props第第三种写法，值为函数，
                            props($route){
                                return {id:$route.params.id,title:$route.params.title}
                            }
                        }
                    ]
                }
            ]
        },
    ]
})
