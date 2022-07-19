<template>
  <div>
    <button @click="isShow = !isShow" :x="false">点我显示/隐藏</button>
    <transition-group name="haha" appear>
      <h1 v-show="isShow" class="title come" key="1">你好呀</h1>
      <h1 v-show="isShow" class="title come" key="2">你好呀</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
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
  /* 进入的起点  离开的终点*/
  .haha-enter,
  .haha-leave-to {
    transform: translateX(-100%);
  }

  .haha-enter-active,
  .haha-leave-active {
    transition: 1s linear;
  }
  /* 进入的终点 离开的起点*/
  .haha-enter-to,
  .haha-leave {
    transform: translateX(0);
  }
</style>