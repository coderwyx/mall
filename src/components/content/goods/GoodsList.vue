<template>
  <div class="goodsList">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goods="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  data() {
    return {};
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
  components: {
    GoodsListItem,
  },
 
};
</script>

<style lang="less">
.goodsList {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  // flex-wrap: wrap;
  .goodsListItem {
    width: 48%;
  }
}
</style>