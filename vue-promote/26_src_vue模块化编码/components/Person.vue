<template>
    <div>
        <h1>人员列表</h1>
        <h2 style="color:'red">上方组件的求和为{{sum}}</h2>
        <h3>列表中第一个人名字是{{firstPersonName}}</h3>
        <input type="text" v-model="name">
        <button @click=add>添加</button>
        <button @click=addWang>添加一个姓王的人</button>
        <button @click=addPersonServer>添加一个来自服务器的人</button>
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
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name=''
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personObj)
            this.name=''
        },
        addPersonServer(){
             this.$store.dispatch('personAbout/addPersonServer')
        }
    },
    computed:{
        // personList(){
        //     return this.$store.state.personList
        // }
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        },
        ...mapState('personAbout',['personList','sum'])
    },
    mounted() {
        console.log(this.$store.getters['personAbout/firstPersonName']);
    },
}
</script>

<style>

</style>