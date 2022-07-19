<template>
  <div> 
    <h1>{{msg}}</h1>
    <h2>学生姓名{{name}}</h2>
    <h2>学生性别{{sex}}</h2>
    <h2>学生年龄{{myAge}}</h2>
    <button @click="changeAge">尝试修改传输的值</button>
    <button @click="sendName">传递学生的姓名</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      msg:'我是一个酒精过敏的帅哥',
      name2:'申屠宇扬',
      myAge:this.age
    }
  },
  methods:{
    changeAge(){
      console.log(this.myAge);
      this.myAge+=1
    },
    sendName(){
      this.getname(this.name2)
    }
  },
  // props优先级更高，先传输值，之后解析组件此处的模板
  props:['name','age','sex','getname'] //简单声明接受

  // 接受的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

  // 接受的同时对数据类型进行限制+默认值的指定+必要性的限制  是较为完整的一种写法
  // props:{
  //   name:{
  //     type:String,  //name的类型是字符串
  //     required:true //name是一个必须要传递的值
  //   },
  //   age:{
  //     type:Number,
  //     default:100  //默认值，如果不传输显示默认值
  //   },
  //   sex:{
  //     type:String,
  //     required:true
  //   }
  // }
}
</script>

<style>
    .demo{
        background-color: aqua;
    }
</style>