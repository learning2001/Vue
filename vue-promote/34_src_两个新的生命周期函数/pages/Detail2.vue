<template>
<div>
  <ul>
    <li>新闻编号:{{id}}</li>
    <li>新闻标题:{{name}}</li>
    <li>新闻时间:{{color}}</li>
    <li>新闻主题:{{animal}}</li>
  </ul>
</div>
</template>

<script>
export default {
    name:'Detail2',
    props:['id','color','name','animal'],
    mounted() {
        console.log(this);
    },
}
</script>

<style>

</style>