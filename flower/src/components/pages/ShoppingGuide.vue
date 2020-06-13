<template>
    <div>
        <div>
            <van-nav-bar 
             title="下单指南"
             left-text="返回"
             right-text="..."
             left-arrow
              />
        </div>
        <div class="image">
            <img src="../../assets/images/one.png" >
            <img src="../../assets/images/two.png" >
            <img src="../../assets/images/three.png" >
            <img src="../../assets/images/four.png" >
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
        margin-bottom: 0.2rem;
         margin-top: 0.5rem;
    }
</style>