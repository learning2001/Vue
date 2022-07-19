<template>
  <div class="count">
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前加工运算的值为:{{bigSum}}</h1>
    <h2>我在{{school}},学习{{subject}}</h2>
    <h2 style="color:'red">下方数组总人数为{{personList.length}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一会再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState,mapMutations,mapActions} from "vuex"
export default {
  name: "count",
  data() {
    return {
      n: 1,
    };
  },
  computed:{ 
    //1.借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({qiuhe:'sum',xuexiao:'school',xueke:'subject'}),

    // 2.借助mapState生成计算属性,从state中读取数据（数组写法）
    ...mapState('countAbout',['sum','subject','school']),
    ...mapState('personAbout',['personList']),

    // 1.借助mapGetters生成计算属性，从state中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'})
    // 2.借助mapGetters生成计算属性，从state中读取数据（数组写法）
    ...mapGetters('countAbout',['bigSum'])
  },
  methods: {
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
    ...mapActions('personAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    ...mapActions('personAbout',{filterWang:'addPersonWang'})
  },
  mounted() {
    console.log(this.$store);
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