<template>
  <div class="APP">
    <h1>{{ msg }} 学生的姓名是 {{studentName}} 学生的年龄是{{studentAge}}</h1>

    <!-- 通过父组件向子组件传递函数类型的props实现：子给父传递数据 -->
    <School :grtShoolName="grtShoolName" />

    <!-- 通过父组件向子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on绑定事件) -->
    <Student v-on:atstyy="getStudentName" @showAge="getStudentAge" @demo="test1"/>  

    <!-- 通过父组件向子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <!-- <Student ref="Student" v-on:click.native="show" :getStudentAge="getStudentAge"/>    
          Vue中默认为组件添加事件即为自定义事件，解决方法，在事件后加.native，vue会把这个方法给组件最外层div中去 -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊",
      studentName:'',
      studentAge:''
    };
  },
  methods: {
    grtShoolName(e) {
      console.log("APP收到了学校名：", e);
    },
    getStudentName(name,...params) {
      console.log("APP收到了学生名字",name,params);
      this.studentName = name
    },
    getStudentAge(age){
      console.log("age被触发");
      this.studentAge = age
    },
    test1(){
      console.log('text1被触发了');
    },
    show(){
      alert("132")
    }
  },
  mounted() {
    // setTimeout(() => {   使用ref方式添加，可以更加灵活控制事件触发时机
      // this.$refs.Student.$once('atstyy',this.getStudentName)   //一次性触发
      // this.$refs.Student.$on('atstyy',this.getStudentName)
      // this.$refs.Student.$on('atstyy',(name)=>{     //箭头函数没有this对象，往外找，外面的this指向APP的实例对象
      //   console.log("APP收到了学生名字",name);
      //   console.log(this);    //写成普通函数，this位student实例对象，函数内部this，vue规定这个函数绑定在谁身上，this就指向谁
      //   this.studentName = name
      // })
      // },3000);
  },
};
</script>

<style>
.APP {
  background-color: brown;
  padding: 5px;
}
</style>