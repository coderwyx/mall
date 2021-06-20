<template>
  <div class="cartList">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from './CartListItem'

export default {
  name: "CartList",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: {
    CartListItem
  }
 
};
</script>

<style scoped>
.cartList{
  overflow: hidden;
}
</style>