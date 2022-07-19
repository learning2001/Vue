<template>
  <div class="School">
    <h2>学校名称{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "长春光华学院",
      address: "绍兴",
    };
  },
  mounted() {
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件，收到了数据',data);
    })
  },
  beforeDestroy(){  //在组件销毁之前，销毁hello
    this.$bus.$off('hello')
  }
};
</script>

<style>
.School {
  background-color: skyblue;
  padding-bottom: 10px;
}
</style>