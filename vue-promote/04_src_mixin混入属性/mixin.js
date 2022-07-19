export const mixin={
    methods:{
        showName(){
            alert(this.name)
        }
    },
    data(){
        return{
            x:100,
            y:200
        }
    }
}
export const mixin2={
    mounted() {
        console.log(123)
    },
}
export const hunru={
    data(){
        return{
            test:"aaa"
        }
    }
}

export const hunru2={
    mounted() {
        console.log("mounted");
    },
}