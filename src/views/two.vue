<template>
    <div class="two">
        <p id="a">问卷调查表填写</p>
        <p>3.请介绍一下自己</p>
        <textarea v-model="intro">
        </textarea><br/>
        <button @click="doClick()">提交</button>
        <router-link to="/first">上一页</router-link>
        <button>重置</button>


    </div>
</template>

<script>
    export default {
        name: "two",
        data(){
            return{
                intro:''
            }
        },
        methods :{
            doClick(){
                this.$store.commit("addUser",{intro:this.intro});
                this.$router.push('/final');
            }

        }
    }
</script>

<style scoped>
    .two{text-align: center}
    .two a{ margin-left: 20px;}
    button{ margin-left: 20px;}
    #a {font-size:56px;color: dodgerblue; text-align: center;}

</style>