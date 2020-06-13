<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
 background-color: #f0f0f0;
}
.van-nav-bar{
  background-color: black;
  /* color: white; */
}
.van-nav-bar div{
  color: white;
}
.van-nav-bar div i{
  color: white;
}
.van-nav-bar div span{
  color: white;
}
.van-nav-bar .van-icon{
  color: white;
}
</style>
