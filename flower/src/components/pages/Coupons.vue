<template>
  <div>
    <div>
      <van-nav-bar title="我的优惠券" left-text="返回" right-text="..." left-arrow />
    </div>
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList=true" />
    <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "满150立减",
  reason: "",
  value: 1000,
  name: "全品优惠券",
  startAt: 1111111111,
  endAt: 1514592000,
  valueDesc: "￥10",
  description: "试用条件：仅限首单试用"
};
export default {
 data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:true,
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
};
</script>

<style scoped>
</style>