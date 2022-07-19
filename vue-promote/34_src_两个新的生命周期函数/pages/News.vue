<template>
  <div>
    <ul>
      <li :style="{opacity}"> 我是生命周期测试元素 </li>
      <li v-for="n in newsList" :key="n.id"> <router-link :to="{
        name:'detail2',
        query:{
          id:n.id,
          name:n.name,
          color:n.color,
          animal:n.animal
        }
      }"> {{n.name}}</router-link> <input type="text"> </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'News',
  data() {
    return {
      opacity:1,
      newsList:[
        {id:'001',name:'new001',animal:'tiger',color:"red"},
        {id:'002',name:'new002',animal:'fish',color:"black"},
        {id:'003',name:'new003',animal:'dog',color:"yellow"}
      ],
    }
  },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity-=0.01
  //     console.log('@');
  //     if(this.opacity<=0)
  //       this.opacity = 1
  //   }, 10);
  // },
  // beforeDestroy(){
  //   clearInterval(this.timer)
  //   console.log('我要被销毁了')
  // }
  activated(){
    console.log('news组件被激活了');
    this.timer = setInterval(() => {
      this.opacity-=0.01
      console.log('@')
      if(this.opacity<=0)
        this.opacity = 1
    }, 10);
  },
  deactivated(){
    console.log('news组件失活了');
    clearInterval(this.timer)
  }
};
</script>

<style>
</style>