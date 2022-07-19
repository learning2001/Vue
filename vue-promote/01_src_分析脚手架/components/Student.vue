<template>
    <!-- 组件的结构 -->
    <div>
        <h2>我的名字是{{name}}</h2>
        <h2>我的名字是{{age}}</h2>
    </div>
</template>

<script>
    //组件交互相关的代码（数据，方法等）
    // 需要将代码暴露 一般使用默认暴露，代码量少
    export default {
            name:'Student',
            data() {
                return {
                    name: '申屠宇扬',
                    age: 18
                }
            }
        }
</script>