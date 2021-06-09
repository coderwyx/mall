<template>
  <div id="recommend"> 
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  data () {
   return {
    
   }
  },
  props: {
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
   methods:{}
}
</script>

<style >
  #recommend {
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex-grow: 1;
  }
  #recommend img {
    height: 80px;
    width: 80px;
    margin: 5px 0;
    
  }
</style>