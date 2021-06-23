<template>
  <div class="Category">
    <!-- 导航栏 -->
    <CategoryNavBar></CategoryNavBar>

    <!-- 左边滚动栏 -->
    <Scroll class="scroll" :pullup="false" :pulldown="false">
      <!-- 分类列表 -->
      <CategoryList
        @categoryClick="categoryClick"
        :categoryList="categoryList"
      ></CategoryList>
    </Scroll>

    <TabControl
      ref="tabControl-T"
      @tabClick="tabClick"
      v-show="isShowTtab"
      class="tabControl-T"
      :titles="titles"
    ></TabControl>

    <!-- 右边滚动栏 -->
    <Scroll :probe-type="3" @scroll="scroll" ref="categoryInfo" class="scroll2">
      <!-- 分类详细信息 -->
      <CategoryInfo
        @infoItemLoad="infoItemLoad"
        :CategoryInfoList="CategoryInfoList"
      ></CategoryInfo>
      <TabControl
        @tabClick="tabClick"
        ref="tabControl"
        :titles="titles"
      ></TabControl>
      <GoodsList :goodsList="categoryGoodsList"></GoodsList>
    </Scroll>

    <TabControl
      @tabClick="tabClick"
      ref="tabControl-B"
      v-show="isShowBtab"
      class="tabControl-B"
      :titles="titles"
    ></TabControl>
  </div>
</template>

<script>
import CategoryNavBar from "./childComps/CategoryNavBar.vue";
import CategoryList from "./childComps/CategoryList.vue";
import CategoryInfo from "./childComps/CategoryInfo.vue";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import {
  getCategory,
  getSubCategory,
  getCategoryDetail,
} from "network/category";

export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      maitKey: "",
      miniWallkey: "",
      CategoryInfoList: [],
      titles: ["综合", "新品", "销量"],
      currentType: "pop",
      categoryGoodsList: [],
      // goods: {
      //   pop: { page: 0, list: [] },
      //   new: { page: 0, list: [] },
      //   sell: { page: 0, list: [] },
      // },
      isShowBtab: true,
      isShowTtab: false,
      BtabTop: 0,
      TtabTop: 0,
    };
  },
  methods: {
    infoItemLoad() {
      this.BtabTop =
        this.$refs.tabControl.$el.offsetTop -
        this.$refs["tabControl-B"].$el.offsetTop +
        this.$refs["tabControl-B"].$el.offsetHeight;
      this.TtabTop = this.$refs.tabControl.$el.offsetTop;
    },
    scroll(position) {
      // 根据下拉的高度决定是否显示另外两个tabControl
      this.isShowBtab = position.y > -this.BtabTop;
      this.isShowTtab = position.y < -this.TtabTop;
    },
    categoryClick(item) {
      getSubCategory(item.maitKey).then((res) => {
        this.CategoryInfoList = res.data.list;
        this.$refs.categoryInfo.scrollTo(0, 0, 0);
      });
    },
    tabClick(index) {
      // 让所有tabControl组件中的currentIndex相等
      this.$refs.tabControl.currentIndex =
        this.$refs["tabControl-T"].currentIndex =
        this.$refs["tabControl-B"].currentIndex =
          index;

      switch (index) {
        case 0:
          this.currentType = "pop";
          break;

        case 1:
          this.currentType = "new";
          break;

        case 2:
          this.currentType = "sell";
          break;

      }

        getCategoryDetail(this.miniWallkey, this.currentType)
          .then((res) => {
            this.categoryGoodsList = res;
          })
          .catch((err) => {
            console.log(err);
          });  
    },
  },
  components: {
    CategoryNavBar,
    CategoryList,
    CategoryInfo,
    TabControl,
    GoodsList,
    Scroll,
  },
  created() {
    // 请求分类列表数据
    getCategory()
      .then((res) => {
        this.miniWallkey = res.data.category.list[0].miniWallkey;
        this.categoryList = res.data.category.list;
        this.maitKey = res.data.category.list[0].maitKey;

        //请求列表详细数据
        getSubCategory(this.maitKey)
          .then((res) => {
            this.CategoryInfoList = res.data.list;
          })
          .catch((err) => {
            console.log(err);
          });

        //请求"综合", "新品", "销量"数据
        getCategoryDetail(this.miniWallkey, this.currentType)
          .then((res) => {
            console.log(res);
            
            this.categoryGoodsList = res;
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="less" scoped>
.Category {
  height: 100vh;
  overflow: hidden;
  font-size: 16px;

  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    width: 27%;
    overflow: hidden;
  }
  .scroll2 {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0px;
    width: 73%;
    overflow: hidden;
  }
  .tabControl-B {
    position: fixed;
    bottom: 49px;
    right: 0px;
    width: 73%;
  }
  .tabControl-T {
    position: fixed;
    top: 44px;
    right: 0px;
    width: 73%;
    z-index: 100;
  }
}
</style>