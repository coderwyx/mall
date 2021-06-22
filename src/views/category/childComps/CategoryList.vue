<template>
  <div class="categoryList">
    <div
      class="categoryItem"
      v-for="(item,index) in categoryList"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index,item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index,item) {
      this.currentIndex = index;
      this.$emit('categoryClick', item)
    },
  },
};
</script>

<style lang="less" scoped>
.categoryList {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f6f6f6;
  width: 100%;

  .categoryItem {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .active {
    color: #fd5979;
    border-left: #fd5979 solid 3px;
    padding-right: 3px;
  }
}
</style>