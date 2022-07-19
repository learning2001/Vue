<template>
  <div class="School">
    <h2>学校名称{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: "School",
    data() {
      return {
        name: "长春光华学院",
        address: "绍兴",
      };
    },
    methods: {
      demo(MsgName,data){
        console.log('消息订阅成功',MsgName,data);
        console.log(this);  
      }
    },
    mounted() {
      // console.log("school", this.x);
      // this.$bus.$on('hello',(data)=>{
      //   console.log('我是School组件，收到了数据',data);
      // })
      // 订阅消息 想要数据的组件
      this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy(){  //在组件销毁之前，销毁hello
      // this.$bus.$off('hello')
      pubsub.unsubscribe(pubId)
    }
  }
</script>

<style>
.School {
  background-color: skyblue;
  padding-bottom: 10px;
}
</style>