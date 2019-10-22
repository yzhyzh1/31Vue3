<template>
    <div class="final">
        <p>问卷调查表填写</p>
        <p>您的性别是：{{this.$store.state.user[0].sex}}</p>
        <p>您的爱好是：{{this.$store.state.user[1].love.toString()}}</p>
        <p>个人简介:{{this.$store.state.user[2].intro}}</p>
    </div>
</template>

<script>
    export default {
        name: "final"
    }
</script>

<style scoped>
    .final p{font-size:56px;color: dodgerblue; text-align: center;}
</style>