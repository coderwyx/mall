<template>
  <div id="detail" class="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar @navBarClick="navBarClick" ref="nav"></detail-nav-bar>
    <!-- 滑动模块 -->
    <scroll ref="scroll" :probeType="3" @scroll="contentScroll" class="scroll">
      <!-- 轮播图组件 -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- 基础信息组件 -->
      <detail-base-info :baseInfo="goods"></detail-base-info>
      <!-- 店铺信息组件 -->
      <detail-shop-info :shopInfo="shop"></detail-shop-info>
      <!-- 商品详细信息组件 -->
      <detail-goods-info
        @imgLoad="imgLoad"
        :detailGoodsInfo="detailGoodsInfo"
      ></detail-goods-info>
      <!-- 商品参数组件 -->
      <detail-params
        ref="params"
        id="params"
        :goodsParams="goodsParams"
      ></detail-params>
      <!-- 商品评论信息组件 -->
      <detail-comment-info
        ref="comment"
        id="comment"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <!-- 推荐商品组件 -->
      <goods-list
        ref="recommend"
        id="recomment"
        :goodsList="recommend"
      ></goods-list>
    </scroll>
    <!-- 返回顶部按钮模块 -->
    <back-top
      @click.native="backClick"
      class="back-top"
      v-show="showBackTop"
    ></back-top>
    <detail-tab-bar @addCart="doAddCart"></detail-tab-bar>
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
import DetailTabBar from "./childComps/DetailTabBar";

import BackTop from "components/content/backTop/BackTop";
import GoodsList from "components/content/goods/GoodsList";

import { mapActions } from "vuex";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  ShopParams,
} from "network/detail";

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
      commentInfo: {
        content: "",
        user: {
          avatar: "",
          uname: "",
        },
      },
      recommend: [],
      navBarToY: ["#detail", "", "", ""],
      navBarTopY: [],
      currentIndex: 0,
      showBackTop: false,
      message: "",
      show: false,
    };
  },
  methods: {
    ...mapActions(["addCart"]),
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      const positionY = -position.y;
      this.showBackTop = positionY > 1000;

      if (
        this.currentIndex !== 0 &&
        positionY >= this.navBarTopY[0] &&
        positionY < this.navBarTopY[1]
      ) {
        this.currentIndex = 0;
        this.$refs.nav.currentIndex = 0;
      } else if (
        this.currentIndex !== 1 &&
        positionY >= this.navBarTopY[1] &&
        positionY < this.navBarTopY[2]
      ) {
        this.currentIndex = 1;
        this.$refs.nav.currentIndex = 1;
      } else if (
        this.currentIndex !== 2 &&
        positionY >= this.navBarTopY[2] &&
        positionY < this.navBarTopY[3]
      ) {
        this.currentIndex = 2;
        this.$refs.nav.currentIndex = 2;
      } else if (this.currentIndex !== 3 && positionY >= this.navBarTopY[3]) {
        this.currentIndex = 3;
        this.$refs.nav.currentIndex = 3;
      }
    },
    imgLoad() {
      // console.log("图片加载完了"); 图片加载完之后获取高度和可以点击跳转
      this.navBarToY[1] = "#params";
      this.navBarToY[2] = "#comment";
      this.navBarToY[3] = "#recomment";
      this.navBarTopY.push(0);
      this.navBarTopY.push(this.$refs.params.$el.offsetTop);
      this.navBarTopY.push(this.$refs.comment.$el.offsetTop);
      this.navBarTopY.push(this.$refs.recommend.$el.offsetTop);
    },
    navBarClick(index) {
      console.log("点击了");
      if (this.navBarToY[index] == "") {
        return;
      }
      this.$refs.scroll.scroll.scrollToElement(this.navBarToY[index]);

      // this.$refs.scroll.scrollTo(0,-this.navBarToY[index],500)
    },
    doAddCart() {
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 将商品添加到购物车
      // this.$store.commit('addCart',product) --> mutations调用

      this.addCart(product).then((res) => {
        this.$toast(res);

        setTimeout(() => {
          this.$toast.clear;
        }, 1500);
      });
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    //获取商品详情页数据
    getDetail(this.iid)
      .then((res) => {
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
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // 获取详情页推荐数据
    getRecommend()
      .then((res) => {
        this.recommend = res.data.list;
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
    DetailTabBar,
    GoodsList,
    BackTop,
    Scroll,
  },
};
</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 101;
  background-color: white;
  font-size: 16px;

  .scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
}
</style>