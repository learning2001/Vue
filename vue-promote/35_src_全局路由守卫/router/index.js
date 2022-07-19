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
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[      //子路由不需要加斜杠
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    children:[
                        {
                            name:"detail2",
                            path:'detail2',
                            component:Detail2,
                            meta:{isAuth:true,title:'详情'},
                            props({query}){
                                return {id:query.id,name:query.name,color:query.color,animal:query.animal}
                            }
                        },
                    ]
                },
                {
                    name:'xiaoxizong',
                    path:'messages',
                    component:Messages,
                    meta:{isAuth:true,title:'总消息'},
                    children:[
                        {
                            name:'detail',
                            path:'detail/:id/:title',   //使用占位符声明接受params参数
                            component:Detail,
                            meta:{isAuth:true,title:'消息'},
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

//全局前置路由守卫——初始化的时候调用，每次路由切换之前调用
router.beforeEach((to,from,next)=>{
    console.log('全局前置路由守卫',to,from)
    if(to.meta.isAuth){         //判断是否需要权限进入
        if(localStorage.getItem('school') === '长春光华学院'){
            next()
        }
        else{
            alert('学校名不对，您无权查看')
        }
    }
    else{
        next()
    }
})

//全局后置路由守卫——初始化的时候调用，每次路由切换之前调用
router.afterEach((to,from,next)=>{
    console.log('全局后置路由守卫',to,from,next)
    document.title = to.meta.title || '申屠系统'
})
export default router
