<template>
  <div>
    <div>
      <van-nav-bar title="商品分类" left-text="返回" right-text="..." left-arrow />
    </div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item title="筛选" ref="item">
          <van-switch-cell v-model="switch1" title="包邮" />
          <van-switch-cell v-model="switch2" title="团购" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div>
      <van-card
        num="2"
        price="99.00"
        desc="33朵红玫瑰"
        title="执子之手"
        thumb="http://img0.imgtn.bdimg.com/it/u=2619724275,1042226685&fm=26&gp=0.jpg"
        origin-price="129.00"
        thumb-link="/goodsDetails"
      >
        <template #tags>
          <van-tag plain type="danger">库存</van-tag>
          <van-tag plain type="danger">销量</van-tag>
        </template>
        <template #footer>
            <van-button type="warning" text="加入购物车" size="small"/>
            <van-button type="danger" text="立即购买" size="small"/>
        </template>
      </van-card>
           <van-card
        num="1"
        price="58.00"
        desc="33朵红玫瑰"
        title="hhhhhhhh"
        thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592067272332&di=fd6ebfcaf54288e50be79cd81d56353d&imgtype=0&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN04%2FM00%2F33%2F55%2FCgQDrVOtFamAXpBAAAU8TlLiaps36000.jpg"
        origin-price="129.00"
      >
        <template #tags>
          <van-tag plain type="danger">库存</van-tag>
          <van-tag plain type="danger">销量</van-tag>
        </template>
        <template #footer>
            <van-button type="warning" text="加入购物车" size="small"/>
            <van-button type="danger" text="立即购买" size="small"/>
        </template>
      </van-card>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "one",
      switch1: false,
      switch2: false,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "价格升序", value: "one" },
        { text: "价格降序", value: "two" }
      ]
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style scoped>
</style>