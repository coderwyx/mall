<template>
  <div id="home">
    <!-- 顶部导航栏组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 轮播图组件 -->
    <home-swiper :banner="banner"></home-swiper>

    <!-- 推荐组件 -->
    <home-recommend-view :recommend="recommend"></home-recommend-view>

    <!-- 本周流行组件 -->
    <home-feature-view></home-feature-view>

    <!-- tabcontrol组件 -->
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>

    <!-- 商品列表组件 -->
    <goods-list :goodsList="goods.pop.list" class="goods-list"></goods-list>

    <!-- 底部一些信息给tabbar挡住了，这个是把隐藏的内容顶出来的 -->
    <div class="test" style="height:49px"></div>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import navBar from "components/common/navbar/navBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMulitidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },

  methods: {
    getHomeMulitidata() {
      getHomeMulitidata()
        .then((res) => {
          // console.log(res.data.recommend.list);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    navBar,
    TabControl,
    GoodsList,
  },
  created() {
    // 获取轮播图推荐等数据
    this.getHomeMulitidata();

    // 获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
};
</script>

<style lang="less">
#home {
  .home-nav {
    background-color: #ff8198;
    position: sticky;
    top: -1px;
    z-index: 100;
  }
 
}
</style>