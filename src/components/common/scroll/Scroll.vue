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
    pulldown: {
      type: Boolean,
      default: true,
    },
    pullup: {
      type: Boolean,
      default: true,
    },
    // pullUpLoad: {
    //   type: Boolean,
    //   default: false,
    // },
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
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: true,
      pulldown:this.pulldown,
      pullup:this.pullup,
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