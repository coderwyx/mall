<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div>{{banner}}</div>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
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
      navBar
    },
    created () {
      getHomeMulitidata().then(res=> {
        console.log(res.data.banner.list);
        this.banner = res.data.banner.list;
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: #ff8198;
  }
</style>