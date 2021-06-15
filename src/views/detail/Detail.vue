<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :baseInfo="goods"></detail-base-info>
    <detail-shop-info :shopInfo="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import { getDetail, Goods, Shop } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: null,
      goods: {},
      shop: {},
    };
  },
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid)
      .then((res) => {
        console.log(res);
        const data = res.result;
        //获取详情页轮播图数据
        this.topImages = data.itemInfo.topImages;
        // 获取商品数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 获取店铺数据
        this.shop = new Shop(data.shopInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
};
</script>

<style lang="less" scoped>
.detail {
  height: 2000px;
}
</style>