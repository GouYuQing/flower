<template>
  <div>
    <div>
      <van-nav-bar title="购花中心" left-text="返回" right-text="..." left-arrow />
    </div>
    <div >
      <img src="../../assets/images/flower.png" alt @click="redRose"/>
      <img src="../../assets/images/flower1.png" alt @click="pickRose"/>
      <img src="../../assets/images/flower2.png" alt @click="flower"/>
      <img src="../../assets/images/flower3.png" alt @click="flowerPicket" />
      <img src="../../assets/images/flower4.png" alt @click="other"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    redRose(e){
       this.$router.push({ name: "RedRose" });
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  /* padding: 0.2rem; */
}
</style>