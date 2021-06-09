<template>
  <div id="home">

    <!-- 顶部导航栏组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 轮播图组件 -->
    <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import HomeSwiper from './childComps/HomeSwiper'

  import {getHomeMulitidata} from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banner: null
      }
    },
  
    methods: {},
    components: {
      navBar,
      HomeSwiper
    },
    created () {
      getHomeMulitidata().then(res => {
        console.log(res.data.banner.list);
        this.banner = res.data.banner.list;
      }).catch(err=> {
        console.log(err);
        
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: #ff8198;
  }
</style>