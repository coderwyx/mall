<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex:0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less">
.tab-control {
  display: flex;
  background-color: #fff;
  position: sticky;
  top: 42px;
    div {
      flex-grow: 1;
      text-align: center;
      padding: 10px;
      span {
        padding: 5px;
      }
    }
}
.active {
  color: #ff8198;
  span {
    border-bottom: solid 3px #ff8198;
  }
}
</style>