<template>
  <div class="School">
    <h2>学校名称{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
    <button @click="sendSchoolName">点我传递值给父元素</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:["grtShoolName"],
  data() {
    return {
      name: "长春光华学院",
      address: "绍兴",
    };
  },
  methods: {
    sendSchoolName(){
      this.grtShoolName(this.name)
    }
  },
};
</script>

<style>
.School {
  background-color: skyblue;
  padding-bottom: 10px;
}
</style>