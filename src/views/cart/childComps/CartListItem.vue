<template>
  <div class="cartListItem">
    <div class="checkButton" @click="checkItem">
      <check-button :isCheck="product.isCheck"></check-button>
    </div>
    <div class="itemImg"><img :src="product.image" alt="" /></div>

    <div class="itemInfo">
      <div class="title">
        {{ product.title }}
      </div>
      <div class="desc">
        {{ product.desc }}
      </div>
      <div class="otherInfo">
        <div class="price">
        ¥{{ product.price }}
        </div>
        <div class="count">
        ×{{ product.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: "CartListItem",
  data() {
    return {
     
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {
    checkItem(){
      this.$store.commit('changeCheck',this.product)
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style lang="less" scoped>
.cartListItem {
  display: flex;
  background-color: #fff;
  margin: 8px 0px;
  align-items: center;
  .checkButton{
    color: #ff8198;
    width: 20px;
    margin-left: 6px;

  }
  .itemImg {
    margin: 5px 8px;
    height: 90px;
    width: 90px;
    overflow: hidden;
    border-radius: 8px;
    img {
      height: 140px;
      width: 100%;
      position: relative;
      top: -25px;
    }
  }
  .itemInfo {
    flex: 1;
    overflow: hidden;
    padding: 5px 10px 5px 0px;
    .title {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 18px;
      font-weight: bold;
    }
    .desc {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
      color: #9fa0a1;
      margin-top: 5px;
    }
    .otherInfo{
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      .price {
        color: #ff8198;
        font-size: 18px;
      }
      .count {
        font-size: 18px;
      }
    }
  }
}
</style>