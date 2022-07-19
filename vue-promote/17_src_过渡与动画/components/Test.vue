<template>
  <div>
    <button @click="isShow = !isShow" :x="false">点我显示/隐藏</button>
    <transition name="haha" appear>
        <h1 v-show="isShow" class="title come">你好呀</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
    .title{
        background-color: orange;
    }
    .haha-enter-active{
        animation: comego 1s linear;
    }
    .haha-leave-active{
        animation: comego 1s linear reverse;
    }
    @keyframes comego {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>