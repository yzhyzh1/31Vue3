<template>
    <div class="page1">
        <p>{{msg}}</p>
        <button @click="click()">点击切换到page2</button>
    <!--<router-link :to="{name:'p2',params:{username:'yzh'}}">点击跳转page2</router-link>-->
        <p>通过page2传递过来的数据:{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "MyPage1",
        data(){
            return{
                msg:'你的风景',
            }
        },
        methods:{
            click(){
                //指定跳转的路由的名字下 this.$router.replace({name:'menu'})
                this.$router.push('/page2');
            }
        }
    }
</script>

<style scoped>
    .page1{
        padding:20px;
        font-size:48px;
        background:#0375b4;
        color:#ffce00;
    }
    button{
        background:#262228;
        color:#ffce00;
        border:none;
        padding:10px 20px;
    }
    p{
        font-size:18px;
    }
</style>