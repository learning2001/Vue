<template>
  <div class="demo"> 
    <h2 class="title">学生姓名{{name | mySlice}}</h2>
    <h2>学生性别{{sex }}</h2>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name:"申屠宇扬",
      sex:"男"
    }
  },
}

</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>