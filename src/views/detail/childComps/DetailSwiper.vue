<template>
  <div>
    <van-swipe
     
      :autoplay="3000"
      indicator-color="white"
      height="490"
    >
      <van-swipe-item v-for="(item, index) in topImages" :key="index"  class="my-swipe">
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
.my-swipe {
  background-color: #fff;
}
.topImages{
  /* margin-top: -10px; */
  height: 490px ;
  width: 100%;
}
</style>