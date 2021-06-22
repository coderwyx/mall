<template>
  <div class="Category">
    <CategoryNavBar></CategoryNavBar>
    <Scroll class="scroll" :pullup="false" :pulldown="false">
      <CategoryList
        @categoryClick="categoryClick"
        :categoryList="categoryList"
      ></CategoryList>
    </Scroll>
  </div>
</template>

<script>
import CategoryNavBar from "./childComps/CategoryNavBar.vue";
import CategoryList from "./childComps/CategoryList.vue";
import Scroll from "components/common/scroll/Scroll";

import { getCategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
    };
  },
  methods: {
    categoryClick(item) {
      console.log(item.maitKey);
    },
  },
  components: {
    CategoryNavBar,
    CategoryList,
    Scroll,
  },
  created() {
    getCategory().then((res) => {
      console.log(res.data.category.list);

      this.categoryList = res.data.category.list;
    });
  },
};
</script>

<style lang="less" scoped>
.Category {
  height: 100vh;
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    width: 27%;
    overflow: hidden;
  }
}
</style>