<template>
    <div class="page2">
        <p>{{msg}}</p>
        <!--<button @click="click()">点击切换到page1</button>-->
        <router-link :to="{name:'p1'}">点击跳转到page1</router-link>
        <p>用户名:<input  type="text" v-model="username"></p>
        <p>密码:<input  type="text" v-model="password"></p>
        <button @click="doClick()">点击出现添加的用户名和密码</button>
        <p v-for="(item,index) in this.$store.state.list" :key="index">用户名：{{item.username}},密码：{{item.password}}</p>
        <!--<h2>{{ $route.params.username}}</h2>-->
    </div>
</template>

<script>
    export default {
        name: "MyPage2",
        data(){
            return{
                msg:'this is page 2',
                username:'',
                password:''
            }
        },
        methods:{
            click(){
                this.$router.push('page1');
            },
            doClick(){
                    this.$store.commit("addList",{username:this.username,password:this.password});
            }
        }
    }

</script>

<style scoped>

</style>