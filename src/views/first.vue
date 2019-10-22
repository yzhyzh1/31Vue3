<template>
    <div class="first">
        <p>问卷调查表填写</p>
        <p>2.请选择您的兴趣爱好</p>
        <!--<p>{{this.$store.state.user[0].sex}}</p>-->
        <form>
        <input type="checkbox"  name="love" value="看书" v-model="love"/>看书
        <input type="checkbox"  name="love" value="游泳"  v-model="love"/>游泳
        <input type="checkbox"  name="love" value="跑步"  v-model="love"/>跑步
        <input type="checkbox"  name="love" value="看电影"  v-model="love"/>看电影
        <input type="checkbox"  name="love" value="听音乐"  v-model="love"/>听音乐
        <input type="checkbox"  name="love" value="动漫"  v-model="love"/>动漫
        </form>
        <button @click="doClick()">下一步</button>
        <router-link to="/">上一步</router-link>
        <button>重置</button>

    </div>
</template>

<script>
    export default {
        name: "first",
        data(){
            return{
                love:[]
            }
        },
        methods :{
            doClick(){
                    this.$store.commit("addUser",{love:this.love});
                    this.$router.push('/two');
            }
        }

    }
</script>

<style scoped>
  .first{ text-align: center}
  .index p{font-size:56px;color: dodgerblue; text-align: center;}
  .first{text-align: center}
  .first a{ margin-left: 20px;}
  button{ margin-left: 20px;}
</style>