<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#ff8198">
      <span slot="item-icon" class="iconfont icon-index"></span>
      <div slot="item-text">主页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#ff8198">
      <span slot="item-icon" class="iconfont icon-category"></span>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#ff8198">
      <span slot="item-icon" class="iconfont icon-qicheqianlian-select"></span>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#ff8198">
      <span slot="item-icon" class="iconfont icon-wode"></span>
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    data() {
      return {}
    },
    methods: {},
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>