<template>
  <div class="cart"> 
    <cart-nav-bar></cart-nav-bar>
    <scroll ref="scroll"  class="scroll">
    <cart-list></cart-list>
    </scroll>
  </div>

</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: "Cart",
  data () {
   return {}
  },
   methods:{},
   components: {
     CartNavBar,
     CartList,
     Scroll
   },
   activated () {
    //  console.log();
    //  this.$refs.scroll
     this.$refs.scroll.scroll.refresh()
   }
  
}
</script>

<style>
.cart{
  height: 100vh;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  background-color: #f6f6f6;
}
.scroll{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>