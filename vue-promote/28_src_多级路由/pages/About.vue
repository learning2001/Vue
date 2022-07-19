<template>
  <div>
    <h2>我是About组件</h2>
  </div>
</template>

<script>
export default {
  name:'About',
  // beforeDestroy(){
  //   console.log('About组件即将被销毁');
  // },
  mounted() {
    console.log('About组件挂载完毕',this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },
}
</script>

<style>

</style>