<template>
  <div class="cartList">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    ></cart-list-item>
    <div class="tips" v-if="cartLength === 0">
      <div>
        <img class="nothingImg" src="@/assets/img/cart/nothing.png" alt="" />
      </div>
      <span class="tips1">购物车竟然是空的</span>
      <span class="tips2">再忙，也记得要买点什么犒劳自己~</span>
      <div @click="takeAround" class="takeAround">去逛逛</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  data() {
    return {};
  },
  methods: {
    takeAround(){
      this.$router.push('/home')
    }
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
  },
  components: {
    CartListItem,
  },
};
</script>

<style lang='less' scoped>
.cartList {
  overflow: hidden;
}
.tips {
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  .nothingImg {
    margin: 10px;
    height: 120px;
    width: 120px;
  }
  .tips1{
    font-size: 20px;
    letter-spacing: 1px;
    color: #8e8e8e;
  }
  .tips2{
    margin: 20px;
    font-size: 16px;
    color: #bcbcbc;
  }
  .takeAround{
    border: 1px solid #ccc;
    height: 40px;
    width: 100px;
    margin: 0 auto;
    line-height: 40px;
    color: #8e8e8e;
  }
}
</style>