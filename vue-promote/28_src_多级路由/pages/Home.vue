<template>
  <div>
    <h2>我是home组件</h2>
  </div>
</template>

<script>
export default {
  name:'Home',
  // beforeDestroy(){
  //   console.log('Home组件即将被销毁');
  // },
  mounted() {
    console.log('Home组件挂载完毕',this);
    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
  },
}
</script>

<style>

</style>