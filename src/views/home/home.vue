<template>
  <div id="home">
    <!-- 顶部导航栏组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 滑动效果组件 -->
    <scroll class="scroll">

      <!-- 轮播图组件 -->
      <home-swiper :banner="banner"></home-swiper>

      <!-- 推荐组件 -->
      <home-recommend-view :recommend="recommend"></home-recommend-view>

      <!-- 本周流行组件 -->
      <home-feature-view></home-feature-view>

      <!-- tabcontrol组件 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>

      <!-- 商品列表组件 -->
      <goods-list
        :goodsList="goods[TabControl].list"
        class="goods-list"
      ></goods-list>

    </scroll>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import navBar from "components/common/navbar/navBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMulitidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banner: null,
      recommend: null,
      TabControl: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },

  methods: {
    // 事件监听相关方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.TabControl = "pop";

          break;
        case 1:
          this.TabControl = "new";

          break;
        case 2:
          this.TabControl = "sell";

          break;
      }
    },

    // 网络请求相关方法
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
    Scroll,
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
  position: relative;
  height: 100vh;
  .home-nav {
    background-color: #ff8198;
    position: sticky;
    top: -1px;
    z-index: 100;
  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    overflow: hidden;
  }
}
</style>