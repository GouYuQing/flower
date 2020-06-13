<template>
  <div>
    <div class="main-div">
      <router-view />
    </div>

    <van-tabbar v-model="active" @change="changeTab(active)">
      <van-tabbar-item class="iconfont icon-piliangxiadan">下单指南</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-shop">购花中心</van-tabbar-item>
      <van-tabbar-item  icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-kefu">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  created(){
      this.changeTabActive()
  },
  methods: {
    changeTab(active) {
      switch (active) {
        case 0:
          this.$router.push({ name: "ShoppingGuide" });
          break;
        case 1:
          this.$router.push({ name: "FlowerCenter" });
          break;
        case 2:
          this.$router.push({ name: "ShoppingCar" });
          break;
        case 3:
          this.$router.push({name:'Me'})
          break;
      }
    },
    changeTabActive(){
        this.nowPath = this.$route.path;
        if(this.nowPath=='/shoppingCar'){
            this.active=2
        }
    }
  }
};
</script>

<style scoped>

</style>