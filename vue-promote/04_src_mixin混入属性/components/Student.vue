<template>
  <div> 
    <h2 @click="showName">学生姓名{{name}}</h2>
    <h2>学生性别{{sex}}</h2>
  </div>
</template>

<script>
// 引入一个混合
// import {mixin} from "../mixin.js"
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      name:"申屠宇扬",
      sex:"男",
      x:500
    }
  },
  // mixins:[mixin]
}
</script>

<style>
    .demo{
        background-color: aqua;
    }
</style>