<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      height="400"
    >
      <van-swipe-item v-for="(item, index) in topImages" :key="index" >
        <img :src="item" alt="" class="topImages" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style scoped>
.topImages{
  margin-top: -10px;
  height: 450px !important;
  width: 100%;
}
</style>