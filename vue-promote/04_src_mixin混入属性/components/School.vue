<template>
  <div> 
    <h2 @click="showName">学校名称{{name}}</h2>
    <h2>学校地址{{address}}</h2>
  </div>
</template>

<script>
// import {mixin,mixin2} from "../mixin.js"
import {hunru} from "../mixin.js"
export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name:"长春光华学院",
      address:"绍兴"
    }
  },
//   methods: {
//     showName(){
//         console.log("我先来");
//     }
//   },
    mixins:[hunru],
    // mixins:[mixin,mixin2],
    mounted() {
        // console.log(123123)
    },
}
</script>

<style>
</style>