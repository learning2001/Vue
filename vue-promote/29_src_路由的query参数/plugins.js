const obj = {
    install(Vue){
        //引入全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        //定义全局指令
        Vue.directive('fbind', {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
                // console.log('fbind-this',this);  指向window
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                console.log('fbind-inserted', this);
                element.focus();
            },
            //指令所在的模板被重新更新时
            update(element, binding) {
                element.value = binding.value * 10;
            },
        })
        Vue.mixin(
            {
                data() {
                    return {
                        x:100,
                        y:200
                    }
                },
            }
        )
        Vue.prototype.hello=()=>{
            alert('你好')
        }
    }
}
export default obj