<template>
  <div>
    <h2>我是home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
           <router-link replace class="list-group-item" active-class="active" to='/home/news'>News</router-link>
        </li>
        <li>
          <!-- <a class="list-group-item" href="./home-message.html">Message</a> -->
          <router-link class="list-group-item" active-class="active" to='/home/messages'>Message</router-link>
        </li>
      </ul>
    </div>
    <div>展示区域</div>
    <!-- 缓存的名字是组件名 -->
    <keep-alive include="News">   
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
  // beforeDestroy(){
  //   console.log('Home组件即将被销毁');
  // },
  mounted() {},
};
</script>

<style>
</style>