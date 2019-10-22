<template>
    <div class="index">
        <p>问卷调查表填写</p>
        <form>
        <span>1.请问您的性别是：</span><br/>
        <input type="radio" name="sex" value="男" v-model="sex">男
        <input type="radio" name="sex" value="女" v-model="sex">女
        <input type="radio" name="sex" value="保密" v-model="sex">保密<br/>
        <button @click="doClick()">下一步</button>
        <button>重置</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "sex",
        data() {
            return {
                sex: '',
            }
        },
        methods :{
            doClick(){
                this.$store.commit("addUser",{sex:this.sex});
                this.$router.push('/first');

            }
        }
    }
</script>
<style scoped>
    .index p{font-size:56px;color: dodgerblue; text-align: center;}
    form{ width: 100%; text-align: center}
</style>
