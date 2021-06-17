<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll" :pullUpLoad="true">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :baseInfo="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shop"></detail-shop-info>
      <detail-goods-info :detailGoodsInfo="detailGoodsInfo"></detail-goods-info>
      <detail-params :goodsParams="goodsParams"></detail-params>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import { getDetail, Goods, Shop, ShopParams } from "network/detail";

import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: null,
      goods: {},
      shop: {},
      detailGoodsInfo: {
        desc: "",
        detailImage: [],
      },
      goodsParams: {},
      commentInfo:{
        content:'',
        user:{
          avatar:'',
          uname:''
        }
      }
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
        // 获取商品详细数据
        this.detailGoodsInfo.desc = data.detailInfo.desc;
        this.detailGoodsInfo.detailImage = data.detailInfo.detailImage[0].list;
        // 获取商品参数数据
        this.goodsParams = new ShopParams(data.itemParams);
        // 获取评论数据
        if(data.rate.list){
          this.commentInfo = data.rate.list[0]
        }
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
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    Scroll,
  },
};
</script>

<style lang="less" scoped>
.scroll {
  position: absolute;
}
.detail {
  height: 100vh;
  position: relative;
  z-index: 101;
  background-color: white;
  .scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>