<template>
    <div>
        <h1>人员列表</h1>
        <h2 style="color:'red">上方组件的求和为{{sum}}</h2>
        <input type="text" v-model="name">
        <button @click=add>添加</button>
        <ul>
            <li v-for="p in personList" :key='p.id'>{{p.name}}</li>
            <!-- <li>{{$store.state.personList}}</li> -->
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapGetters, mapState,mapMutations,mapActions} from "vuex"
export default {
    name:'person',
    data() {
        return {
            name:''
        }
    },
    methods: {
        add(){
            const personObj = {id:nanoid(),name:this.name}  
            this.$store.commit('ADD_PERSON',personObj)
        }
    },
    computed:{
        // personList(){
        //     return this.$store.state.personList
        // }
        ...mapState(['personList','sum'])
    },
    mounted() {
        console.log(this.$store.state.personList);
    },
}
</script>

<style>

</style>