<template>
  <div class="count">
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前加工运算的值为:{{bigSum}}</h1>
    <h2>我在{{school}},学习{{subject}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一会再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex"
export default {
  name: "count",
  data() {
    return {
      n: 1,
    };
  },
  computed:{ 
    //通过计算属性简化模板中代码
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },

    //1.借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({qiuhe:'sum',xuexiao:'school',xueke:'subject'}),

    // 2.借助mapState生成计算属性,从state中读取数据（数组写法）
    ...mapState(['sum','school','subject']),
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },

    // 1.借助mapGetters生成计算属性，从state中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'})
    // 2.借助mapGetters生成计算属性，从state中读取数据（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('JIA',this.n)
    },
    decrement() {
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait',this.n)
    },
  },
  mounted() {
    const x = mapState({qiuhe:'sum',xuexiao:'school',xueke:'subject'})
    console.log(x);
  },
};
</script>

<style>
.count {
  margin-left: 100px;
}
button {
  margin: 5px;
}
</style>