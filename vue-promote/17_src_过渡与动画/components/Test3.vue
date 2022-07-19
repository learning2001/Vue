<template>
  <div>
    <button @click="isShow = !isShow" :x="false">点我显示/隐藏</button>
    <transition-group 
        appear 
        name="animate__animated animate__bounce"
        enter-active-class="animate__wobble"
        leave-active-class="animate__bounceOut"
    >
      <h1 v-show="isShow" class="title come" key="1">你好呀</h1>
      <h1 v-show="isShow" class="title come" key="2">你好呀</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
  .title {
    background-color: orange;
  }
</style>