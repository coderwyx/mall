<template>
  <div class="goodsListItem">
    <img :src="goods.show.img" alt="" />
    <div class="goodsInfo">
      <p>{{ goods.title }}</p>
      <span class="price">{{ goods.price }}</span>
      <span class="cfav">☆{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  methods: {},
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
  .goodsInfo {
    height: 60px;
    img {
      width: 100%;
    }
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