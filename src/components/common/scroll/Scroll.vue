<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
  mounted() {
    (this.scroll = BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      observeImage:true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })),
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      }),
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
  },
};
</script>

<style scoped>
</style>