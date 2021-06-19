<template>
  <div class="goodsListItem" @click="itemClick">
    <img  class="goodsImage" v-if="goods.image" :src="goods.image" alt="">
    <img v-else class="goodsImage" :src="goods.show.img" alt="" />
    <div class="goodsInfo">
      <p>{{ goods.title }}</p>
      <span class="price">{{ goods.price }}</span>
      <span class="cfav">★{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  methods: {
    itemClick(){
      if (this.goods.show) {
        this.$router.push('/detail/'+this.goods.iid)
      }
      

    },
   
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less">
.goodsListItem {
  display: flex;
  flex-direction: column;
  text-align: center;
   .goodsImage {
      width: 100%;
      height: 270px;
      border-radius: 5px;
    }
  .goodsInfo {
    height: 60px;
    p {
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 10px 10px 5px;
    }
    .price {
      color: #ff8198;
      margin: 8px;
    }
    .cfav {
      margin: 8px;
      
    }
  }
}
</style>    