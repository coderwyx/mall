<template>
  <div class="ProfileOrderList">
    <div>
      <span style="font-size: 22px" class="iconfont icon-wodexinxi"></span>
      <span class="text">我的信息</span>
    </div>
    <div>
      <span
        style="color: #fa7c59; font-size: 22px"
        class="iconfont icon-jifenshangcheng1"
      ></span>
      <span class="text">积分商店</span>
    </div>
    <div>
      <span
        style="color: #fec547; font-size: 22px"
        class="iconfont icon-huangguan"
      ></span>
      <span class="text">会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOrderList",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.ProfileOrderList {
  border-bottom: 10px solid #f6f6f6;

  div {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    margin: 0 12px;
    font-size: 18px;
    border-bottom: 1px solid #f6f6f6;
  }
  .text {
    margin-left: 8px;
  }
}
</style>