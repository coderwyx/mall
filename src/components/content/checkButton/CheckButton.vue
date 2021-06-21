<template>
  <div>
    <span class="checkButton" :class="isCheck? 'iconfont icon-mg-checkbox':'iconfont icon-duoxuankuang1' "></span>
    <!-- <span class="icon-duoxuankuang checkButton"></span> -->

  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style scoped>
.checkButton {
  font-size: 22px;
}
</style>