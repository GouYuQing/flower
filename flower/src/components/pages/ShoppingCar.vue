<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="购物车"></van-nav-bar>
    </div>
    <div class="car-title">
      <van-button size="small" type="danger" @click="clearCar" plain>清空购物车</van-button>
    </div>
    <div class="car-list">
      <div class="car-row" v-for="(item,index) in carInfo" :key="index">
        <div class="car-img">
          <img :src="item.image" width="100%" />
        </div>
        <div class="car-text">
          <div class="car-goods-name">{{item.name}}</div>
          <div class="car-number">
            <van-stepper v-model="item.count"></van-stepper>
          </div>
        </div>
        <div class="car-goods-price">
            <div> ￥{{item.price|moneyFilter}}</div>
            <div>x{{item.count}}</div>
            <div style="color:red">￥{{item.price*item.count|moneyFilter}}</div>
           </div>
      </div>
    </div>
    <div class="totleMoney">
        商品总价：￥{{totleMoney|moneyFilter}}
    </div>
  </div>
</template>

<script>
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  data() {
    return {
      carInfo: [], //商品数据
      isEmpty: false //购物车是否为空
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  created() {
    this.getCarInfo();
  },
  computed:{
      totleMoney(){
          let allMoney = 0;
          this.carInfo.forEach((item,index) => {
              allMoney +=item.price*item.count
          });
          //本地保存，避免刷新然后数据不在
          localStorage.carInfo = JSON.stringify(this.carInfo);
          return allMoney;
      }
  },
  methods: {
    //得到购物车里面的商品信息
    getCarInfo() {
      if (localStorage.carInfo) {
        //字符串解析出json对象并赋值给carInfo
        this.carInfo = JSON.parse(localStorage.carInfo);
        console.log(this.carInfo);
      }
      this.isEmpty = this.carInfo.lenght > 0 ? true : false;
    },
    //清空购物车
    clearCar() {
      localStorage.removeItem("carInfo");
      this.carInfo = [];
    }
  }
};
</script>

<style scoped>
.cart-list {
  background-color: #fff;
}
.car-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.5rem;
  font-size: 0.85rem;
  border-bottom: 1px solid #e4e7ed;
}
.car-img {
  flex: 6;
}
.car-text {
  flex: 14;
  padding-left: 5px;
}
.car-control {
  padding-top: 15px;
}
.car-goods-price {
  flex: 4;
  /* text-align: right; */
}
.titleMoney{
    text-align: right;
    background-color: #fff;
    border-bottom: 1px solid #E4E7Ed;
    padding: 5px;
}
</style>