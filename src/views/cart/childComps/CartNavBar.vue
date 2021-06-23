<template>
  <div>
    <nav-bar class="cartNavBar">
      <div class="title" slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import { mapGetters } from "vuex";

export default {
  name: "CartNavBar",
  data() {
    return {};
  },
  methods: {},
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style lang="less" scoped>
.cartNavBar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #ff8198;
  .title {
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
  }
}
</style>