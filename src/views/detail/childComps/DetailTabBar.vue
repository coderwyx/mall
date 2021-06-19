<template>
  <div class="tabBar">
    <div class="service">
      <span style="color: #ff8198" class="iconfont icon-tubiaozhizuo--"></span>
      <div>客服</div>
    </div>
    <div class="shop">
      <span class="iconfont icon-dianpu"></span>
      <div>店铺</div>
    </div>
    <div class="collect">
      <span class="iconfont icon-shoucang"></span>
      <div>收藏</div>
    </div>

    <div @click="addCart" class="cart">加入购物车</div>

    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit('addCart');
    },
  },
};
</script>

<style lang="less" scoped>
.tabBar {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 49px;
  text-align: center;
  align-items: center;
  .service,
  .shop,
  .collect {
    span {
      font-size: 24px;
    }
    div {
      font-size: 14px;
    }
    width: 17%;
  }
  .cart {
    width: 25%;
    height: 100%;
    background-color: gold;
    line-height: 49px;
  }
  .buy {
    flex: 1;
    height: 100%;
    line-height: 49px;
    background-color: #ff8198;
    color: white;
  }
}
</style>