<template>
  <div class="cartList">
    {{ cartList }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["cartList"]),
  },
 
};
</script>

<style scoped>
.cartList{
  overflow: hidden;
}
</style>