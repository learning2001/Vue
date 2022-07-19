<template>
  <div class="demo"> 
    <h2 class="q">学校名称{{name}}</h2>
    <h2 class="title">学校地址{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name:"长春光华学院",
      address:"绍兴"
    }
  },
}
</script>

<style lang="less" scoped>
    .demo{
      background-color: skyblue;
      .q{
        font-size: 40px;
      }
    }
</style>