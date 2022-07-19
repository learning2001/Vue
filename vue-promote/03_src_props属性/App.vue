<template>
  <div>
    <!-- <Student name="申屠宇扬" sex="男" :age="18"/>   -->
    <Student name="申屠" sex="男" :age="55" :getname="getStudentName"/>   

  </div>
</template>

<script>
import Student from './components/Student.vue';
export default {
  name: 'App',
  components: {
    Student
  },
  methods: {
    getStudentName(name){
      console.log("收到了学生的姓名",name);
    }
  },
}
</script>
