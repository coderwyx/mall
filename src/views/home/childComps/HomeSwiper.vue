<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      height="195"
    >
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link"
          ><img :src="item.image" alt="" @load="swipeItemLoad"
        /></a>
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
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    swipeItemLoad() {
      if (!this.isLoad) {
        this.$emit("swipeItemLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style >
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>