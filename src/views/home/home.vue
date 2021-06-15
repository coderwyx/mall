<template>
  <div id="home">
    <!-- 顶部导航栏组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="TabControl-2"
      v-show="showTabControl"
      class="showTabControl"
    ></tab-control>

    <!-- 返回顶部组件 -->
    <back-top
      @click.native="backClick"
      class="back-top"
      v-show="showBackTop"
    ></back-top>

    <!-- 滑动效果组件 -->
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :pullUpLoad="true"
    >
      <!-- 轮播图组件 -->
      <home-swiper
        :banner="banner"
        @swipeItemLoad="swipeItemLoad"
      ></home-swiper>

      <!-- 推荐组件 -->
      <home-recommend-view :recommend="recommend"></home-recommend-view>

      <!-- 本周流行组件 -->
      <home-feature-view></home-feature-view>

      <!-- tabcontrol组件 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="TabControl-1"
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

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

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
      showBackTop: false,
      tabOffsetTop: 0,
      showTabControl: false,
      popY: 0,
      newY: 0,
      sellY: 0,
    };
  },

  methods: {
    // 事件监听相关方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          // 判断当前是从哪个模块跳转的
          switch (this.TabControl) {
            case "new":
              // 把对应数据保存到相应的模块中
              if (-this.$refs.scroll.scroll.y < this.tabOffsetTop) {
                this.newY = -this.tabOffsetTop;
              } else {
                this.newY = this.$refs.scroll.scroll.y;
              }
              break;
            case "sell":
              if (-this.$refs.scroll.scroll.y < this.tabOffsetTop) {
                this.sellY = -this.tabOffsetTop;
              } else {
                this.sellY = this.$refs.scroll.scroll.y;
              }
              break;
          }

          this.TabControl = "pop";
          this.$refs.scroll.scrollTo(0, this.popY, 0);

          break;
        case 1:
          switch (this.TabControl) {
            case "pop":
              if (-this.$refs.scroll.scroll.y < this.tabOffsetTop) {
                this.popY = -this.tabOffsetTop;
              } else {
                this.popY = this.$refs.scroll.scroll.y;
              }
              break;
            case "sell":
              if (-this.$refs.scroll.scroll.y < this.tabOffsetTop) {
                this.sellY = -this.tabOffsetTop;
              } else {
                this.sellY = this.$refs.scroll.scroll.y;
              }
              break;
          }
          this.TabControl = "new";

          this.$refs.scroll.scrollTo(0, this.newY, 0);

          break;
        case 2:
          switch (this.TabControl) {
            case "pop":
              if (-this.$refs.scroll.scroll.y < this.tabOffsetTop) {
                this.popY = -this.tabOffsetTop;
              } else {
                this.popY = this.$refs.scroll.scroll.y;
              }
              break;
            case "new":
              if (-this.$refs.scroll.scroll.y < this.tabOffsetTop) {
                this.newY = -this.tabOffsetTop;
              } else {
                this.newY = this.$refs.scroll.scroll.y;
              }
              break;
          }
          this.TabControl = "sell";

          this.$refs.scroll.scrollTo(0, this.sellY, 0);

          break;
      }
      this.$refs["TabControl-2"].currentIndex = index;
      this.$refs["TabControl-1"].currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 监听是否显示backTop
      this.showBackTop = position.y < -1000;

      // 监听是否显示TabControl
      this.showTabControl = position.y < -this.tabOffsetTop;

      // console.log(position.y);
    },
    loadMore() {
      this.getHomeGoods(this.TabControl);
    },
    swipeItemLoad() {
      this.tabOffsetTop = this.$refs["TabControl-1"].$el.offsetTop;
      this.popY = -this.tabOffsetTop;
      this.newY = -this.tabOffsetTop;
      this.sellY = -this.tabOffsetTop;
    },
    // 网络请求相关方法
    getHomeMulitidata() {
      getHomeMulitidata()
        .then((res) => {
          // console.log(res.data.recommend.list);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          this.$refs.scroll.scroll.refresh();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 其他方法
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 获取轮播图推荐等数据
    this.getHomeMulitidata();

    // 获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
 
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
  .showTabControl {
    position: relative;
    z-index: 100;
  }
}
</style>