<template>
  <div> 
    {{baseInfo}}
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data () {
   return {}
  },
  props: {
    baseInfo:{
      type:Array,
      default(){
        return[]
      }
    }
  },
   methods:{}
}
</script>

<style scoped>

</style>