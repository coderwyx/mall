<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'

  export default {
    name: "Home",
    data() {
      return {}
    },
    methods: {},
    components: {
      navBar
    }
  }
</script>

<style>
  .home-nav {
    background-color: #ff8198;
  }
</style>