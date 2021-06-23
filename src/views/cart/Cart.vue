<template>
  <div class="cart">
    <!-- 导航 -->
    <cart-nav-bar></cart-nav-bar>

    <scroll ref="scroll" class="scroll">
      <!-- 购物车列表 -->
      <cart-list></cart-list>
    </scroll>

    <!-- 汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartNavBar from "./childComps/CartNavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Cart",
  data() {
    return {};
  },
  methods: {},
  components: {
    CartNavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  activated() {
    //  console.log();
    //  this.$refs.scroll
    this.$refs.scroll.scroll.refresh();
  },
};
</script>

<style>
.cart {
  height: 100vh;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  background-color: #f6f6f6;
  font-size: 16px;
}
.scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
  overflow: hidden;
}
</style>