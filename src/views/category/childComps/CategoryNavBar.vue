<template>
  <div>
    <NavBar class="CategoryNavBar">
      <span slot="center">商品分类</span>
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

<style scoped>
.CategoryNavBar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ff8198;
}
</style>