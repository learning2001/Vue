<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <p v-text="msg" ref="title22"></p>
    <button @click="showDOM" ref="btn">点我显示上方DOM</button>
    <School ref="sch"/>  
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  data() {
    return {
      msg:'欢迎来到vue脚手架'
    }
  },
  components: {
    School
  },
  methods: {
    showDOM(){
      console.log(this.$refs.title);  //获得真实dom元素
      console.log(this.$refs.btn);    //获得真实dom元素
      console.log(this.$refs.sch);    //School组件的实例对象（vC）
    }
  },
}
</script>
