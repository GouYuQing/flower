<template>
  <div>
    <div>
      <van-nav-bar title="花务员" left-text="返回" right-text="..." left-arrow />
    </div>
    <div class="top">
     <p>微信客服（客服时间：9:00-21:00）</p>
    </div>
    <div>
      <van-row>
        <van-col span="12"><img src="../../assets/images/wechat.png"/></van-col>
        <van-col span="12"><img src="../../assets/images/phone.png"/></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style scoped>
.top {
  height: 1.2rem;
  text-align: left;
  /* padding-top: 0.8rem; */
  padding-left: 1rem;
  padding-bottom: 0.4rem;
  background-color: white;
}
img {
  width:9.4rem ;
  height: 9.4rem;
  padding-left: 0.3rem;
}
.top div {
  float: right;
  margin-right: 6rem;
}
.top p {
  color: #ccc;
  font-size: 0.8rem;
}
</style>