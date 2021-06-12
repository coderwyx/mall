<template>
  <div class="back-top">  
    <img src="~assets/img/common/top.png" alt="">
    
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data () {
   return {}
  },
   methods:{}
}
</script>

<style lang="less" scoped>
  .back-top {
    position: fixed;
    bottom: 55px;
    right: 20px;
    z-index: 106;
    img {
      height: 48px;
      width: 48px;
    }
  }
</style>