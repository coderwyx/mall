<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titles">
        <span v-for="(item, index) in titles" :key="index" class="titlesitem" @click="itemClick(index)" :class="{active:currentIndex===index}">{{
          item
        }}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('navBarClick', index)
    },
    back(){
      this.$router.back()
    }
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.titles {
  display: flex;
  font-size: 16px;
  .titlesitem {
    flex-grow: 1;
  }
}
.back{
  img {
    margin-top: 10px;
    height: 22px;
    width: 22px;
  }
}
.active {
  color: #ff8198;
}
</style>