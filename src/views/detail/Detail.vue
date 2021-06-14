<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :baseInfo="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import { getDetail, Goods } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: null,
      goods: {},
    };
  },
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid)
      .then((res) => {
        console.log(res);
        const data = res.result;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.topImages = data.itemInfo.topImages;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
};
</script>

<style lang="less" scoped>
</style>