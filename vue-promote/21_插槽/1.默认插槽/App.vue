<template>
  <div class="allmenu">
    <Category title="美食" :listData="foods">
      <img src="./assets/img/R-C.jpg" alt="" />
      <a href="https://www.bilibili.com/"></a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="item in this.games" :key="item.index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <video controls src="./assets/video/无间行者_x264.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "寿司", "烧烤", "小龙虾"],
      games: ["英雄联盟", "炉石传说", "超级玛丽", "红色警戒"],
      films: ["海街日记", "小偷家族", "比海更深", "燕尾蝶"],
    };
  },
};
</script>

<style>
.allmenu {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
</style>