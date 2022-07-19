<template>
  <div class="Student">
    <h2>学生姓名{{ name }}</h2>
    <h2>学生性别{{ sex }}</h2>
    <button @click='sendStudentName'>把学生名给school组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "申屠宇扬",
      sex: "男",
    };
  },
  mounted() {
    // console.log("student", this.x);
  },
  methods: {
    sendStudentName(){
      this.$bus.$emit('hello',666)
    }
  },
};
</script>

<style scoped>
.Student {
  background-color: orange;
  padding-bottom: 10px;
}
</style>