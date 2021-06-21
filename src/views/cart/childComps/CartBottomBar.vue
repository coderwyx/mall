<template>
  <div class="cartBottomBar">
    <div class="allCheck">
      <check-button @click.native="allItemCheck" :isCheck="allCheck"></check-button>
      <span class="all">全选</span>
    </div>

    <div class="total">
      <span>合计:</span>
      <div class="amount">{{ totalPrice }}</div>
    </div>

    <div class="inputOrder">提交订单({{ totalCheck }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  methods: {
    allItemCheck(){
      if(this.allCheck){
        this.$store.commit('cancelAllCheck',this.$store.getters.cartList)
      }else{
        this.$store.commit('allCheck',this.$store.getters.cartList)
      }
    }
  },
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.getters.cartList
        .filter((item) => {
          return item.isCheck;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    totalCheck() {
      return this.$store.getters.cartList.filter((item) => {
        return item.isCheck;
      }).length;
    },
    allCheck() {
      if (this.$store.getters.cartLength === 0) {
        return false;
      }
      return !this.$store.getters.cartList.find(
        (item) => item.isCheck === false
      );
    },
  },
};
</script>

<style lang='less' scoped>
.cartBottomBar {
  display: flex;
  height: 40px;
  background-color: #fff;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  .allCheck {
    color: #ff8198;
    display: flex;
    margin-left: 6px;
    align-items: center;
    width: 20%;
    .all {
      margin-left: 2px;
      color: black;
    }
  }
  .total {
    display: flex;
    margin-left: 65px;
    align-items: center;
    .amount {
      font-size: 20px;
      margin-left: 4px;
      font-weight: bold;
    }
  }
  .inputOrder {
    margin-right: 15px;
    color: #fff;
    line-height: 32px;
    height: 32px;
    width: 100px;
    text-align: center;
    background-color: #ff8198;
    border-radius: 20px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
 
}
</style>