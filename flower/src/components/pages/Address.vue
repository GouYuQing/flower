<template>
  <div>
    <div class="content">
      <div>
        <van-nav-bar title="编辑地址" left-text="返回" right-text="..." left-arrow />
      </div>

      <van-field v-model="text" label="联系人" placeholder="姓名" />
      <van-row gutter="20" type="flex" justify="center">
        <van-col span="8">
          <van-button plain type="danger" size="large">先生</van-button>
        </van-col>
        <van-col span="8">
          <van-button plain type="danger" size="large">女士</van-button>
        </van-col>
      </van-row>
      <van-field v-model="tel" type="tel" label="电话" placeholder="手机号码" />
      <van-field v-model="text" type="address" label="地址" placeholder="选择收货地址" right-icon="arrow" />
      <van-field v-model="text" type="number" label="门牌号" placeholder="例：8号宿舍7号楼" />
     
      <div class="register-button">
        <van-button type="danger" size="large" :loading="openLoading">确定</van-button>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.content{
  background-color:white;
}
.register-button {
  padding-top: 10px;
  margin-left: 1rem;
  margin-right: 1rem;

}
</style>