<template>
  <div class="detailGoodsInfo"> 
      <div class="desc">{{detailGoodsInfo.desc}}</div>
      <div v-for="item in detailGoodsInfo.detailImage" :key="item"><img class="defailImage" :src="item" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data () {
   return {}
  },
  props: {
    detailGoodsInfo:{
      type:Object,
      default(){
        return[]
      }
    }
  },
   methods:{}
}
</script>

<style lang="less" scoped>
 .detailGoodsInfo{
   padding: 30px 8px 20px;
   box-shadow: 0px 3px 0  rgba(1, 1, 1, 0.25);
   .desc {
     font-weight: bold;
   }
   .defailImage {
     height: 100%;
     width: 100%;
   }
 }
</style>