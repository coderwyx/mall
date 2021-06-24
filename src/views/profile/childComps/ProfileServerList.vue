<template>
  <div class="ProfileServerList"> 
    <div>
      <span style="font-size: 22px;color:#fd6046" class="iconfont icon-cart-small2"></span>
      <span class="text">我的购物车</span>
    </div>
    <div>
      <span style="font-size: 22px;color:#fd6046" class="iconfont icon-xiazaiAPP"></span>
      <span class="text">下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileServerList",
  data () {
   return {}
  },
   methods:{}
}
</script>

<style lang='less' scoped>

.ProfileServerList {

  div {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    margin: 0 12px;
    font-size: 18px;
    border-bottom: 1px solid #f6f6f6;
  }
  .text {
    margin-left: 8px;
  }
}
</style>