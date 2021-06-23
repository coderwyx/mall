<template>
  <div   class="CategoryInfo"> 
    <CategoryInfoItem @itemImgLoad='itemImgLoad' class="CategoryInfoItem" v-for="(item,index) in CategoryInfoList" :key="index" :CategoryInfoItem='item'></CategoryInfoItem>
  </div>
</template>

<script>
import CategoryInfoItem from './CategoryInfoItem.vue'

export default {
  name: "CategoryInfo",
  data () {
   return {}
  },
  props:{
    CategoryInfoList:{
      type:Array,
      default(){
        return []
      }
    }
  },
   methods:{
     itemImgLoad(){
       this.$emit('infoItemLoad')
     }
   },
   components:{
     CategoryInfoItem
   }
}
</script>

<style scoped>
  .CategoryInfo{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #fff;
  }
</style>