<template>
  <div> 
    <h2>学生姓名{{name | mySlice}}</h2>
    <h2>学生性别{{sex }}</h2>
    <input type="text" v-fbind:value = "name">
    <button @click="showHello">点我显示hello</button>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name:"申屠宇扬啦啦啦啦",
      sex:"男nanananana"
    }
  },
  methods:{
    showHello(){
     this.hello()
  }
}
}
</script>

<style>
</style>