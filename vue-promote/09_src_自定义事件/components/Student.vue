<template>
  <div class="Student">
    <h2>学生姓名{{ name }}</h2>
    <h2>学生性别{{ sex }}</h2>
    <h2>{{ number }}</h2>
    <button @click="add">点我Number++</button>
    <button @click="sendStudentName">把学生名给APP</button>
    <button @click="sendStudentAge">显示学生年龄</button>
    <button @click="unbind">解绑atstyy事件</button>
    <button @click="death">销毁当前student组件所有对象</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "申屠宇扬",
      sex: "男",
      number: 0,
      age:18
    };
  },
  methods: {
    add() {
      console.log("add被调用");
      this.number++;
    },
    sendStudentName() {
      // console.log(this);
      this.$emit("atstyy", this.name, this.sex, 85, 78); //触发自定义事件
      // this.$emit("click");
    },
    sendStudentAge(){
      this.$emit('showAge',this.age)
    },
    unbind() {
      this.$off('atstyy')     //解绑一个自定义事件
      // this.$off(['atstyy','demo'])     //解绑多个自定义事件
      // this.$off(); //所有的自定义事件全部解绑
    },
    death() {
      this.$destroy();  //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全部不奏效
    },
  },
};
</script>

<style scoped>
.Student {
  background-color: orange;
  padding-bottom: 10px;
}
</style>