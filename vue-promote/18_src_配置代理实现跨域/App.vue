<template>
  <div>
    <button @click="getStudents">获取学生的信息</button>
    <button @click="getTeachers">获取老师的信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/styy/Student").then(  //使用代理服务器，此处的端口号就是自己的 tip：不能写自己已有的文件放入其中
      
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了",error.message);
        }
      );
    },
    getTeachers() {
      axios.get("http://localhost:8080/teacher/Teacher").then(  //使用代理服务器，此处的端口号就是自己的 tip：不能写自己已有的文件放入其中
      
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了",error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>