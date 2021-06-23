<template>
  <div>
    <NavBar class="CategoryNavBar">
      <span class="title" slot="center">商品分类</span>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "CategoryNavBar",
  data() {
    return {};
  },
  methods: {},
  components: {
    NavBar,
  },
 
};
</script>

<style lang="less" scoped>
.CategoryNavBar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ff8198;
  .title{
   
   color: #fff;
   font-weight: bold;
   letter-spacing: 1px;
  }
}
</style>