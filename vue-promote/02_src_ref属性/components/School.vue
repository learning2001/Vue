<template>
  <div class="demo"> 
    <h1>学校的地址是：{{address}}</h1>
    <h1>学校老师有：{{teacher}}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      address: "长春光华学院",
      teacher: "郭亮"
    }
  }
}
</script>

<style>
    .demo{
        background-color: aqua;
    }
</style>