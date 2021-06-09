<template>
  <div id="home">

    <!-- 顶部导航栏组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 轮播图组件 -->
    <home-swiper :banner="banner"></home-swiper>

    <!-- 推荐组件 -->
    <home-recommend-view :recommend="recommend"></home-recommend-view>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'


  import {getHomeMulitidata} from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banner: null,
        recommend: null
      }
    },
  
    methods: {},
    components: {
      navBar,
      HomeSwiper,
      HomeRecommendView
    },
    created () {
      getHomeMulitidata().then(res => {
        console.log(res.data.recommend.list);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
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