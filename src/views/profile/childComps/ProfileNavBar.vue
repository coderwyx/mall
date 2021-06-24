<template>
  <NavBar class="ProfileNavBar">
    <div slot="center">购物街</div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "ProfileNavBar",
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
.ProfileNavBar {
  background-color: #ff8198;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
}
</style>