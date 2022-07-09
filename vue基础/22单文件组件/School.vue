<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2><school></school></h2>
    </div>
</template>

<script>
    //组件交互相关的代码（数据，方法等）
    // 需要将代码暴露 一般使用默认暴露，代码量少
    export default {
            name:'School',
            data() {
                return {
                    address: '武汉路',
                    province: '吉林'
                }
            },
            methods: {
                showName(){
                    console.log(this);
                }
            },
        }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>