<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数,to的字符串写法 -->
        <!-- <router-link :to="`/home/messages/detail/${m.id}/${m.title}`">{{ m.title }}</router-link > -->
        <!-- 跳转路由并携带query参数,to的对象写法 -->
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "detail",
        params: {
          id:  m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m){
      this.$router.replace({
        name: "detail",
        params: {
          id:  m.id,
          title: m.title,
        },
      });
    }
  },
  beforeDestroy(){
    console.log('messages要被销毁了');
  }
};
</script>

<style>
</style>