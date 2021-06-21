<template>
  <div class="DetailBaseInfo">
    <div class="title">{{ baseInfo.title }}</div>
    <div class="price">
      <div class="newPrice">{{ baseInfo.newPrice }}</div>
      <div class="oldPrice">
        <s>{{ baseInfo.oldPrice }}</s>
      </div>
      <div class="discount" v-if="baseInfo.discount">
        {{ baseInfo.discount }}
      </div>
    </div>
    <div class="columns">
      <div v-for="item in baseInfo.columns" :key="item" class="columnsItem">
        {{ item }}
      </div>
    </div>
    <div class="services">
      <div v-for="(item, index) in baseInfo.services" :key="index">
        <img :src="item.icon" alt="" class="serviceIcon" />
        <span class="servicesInfo">{{ item.name }}</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    baseInfo: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.DetailBaseInfo {
  
  .title {
    margin: 8px 8px 4px;
    font-size: 16px;
    font-weight: bold;
  }

  .price {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    .newPrice {
      margin: 4px 8px;
      color: rgba(255, 0, 0);
      font-size: 28px;
    }
    .oldPrice {
      margin: 16px 6px 4px 4px;
      color: rgba(158, 154, 154);;
    }
    .discount {
      background-color: rgb(247, 59, 59);
      color: rgb(248, 232, 232);
      font-weight: bold;
      font-size: 14px;
      border-radius: 10px;
      margin: 10px 6px 12px;
      padding: 0 2px 0;
      height: 24px;
      line-height: 24px;
    }
  }
  .columns {
    display: flex;
    // text-align: center;
    font-size: 14px;
    justify-content: space-between;
    box-shadow: 0 1px 0px rgba(117, 115, 115, 0.25);
    color: rgb(158, 154, 154);
    .columnsItem {
      margin: 10px 8px;
    }
  }
  .services {
    display: flex;
    justify-content: space-between;
    padding: 20px 8px;
    box-shadow: 0 3px 0px rgba(117, 115, 115, 0.25);

    .serviceIcon {
      height: 10px;
      width: 10px;
    }
    .servicesInfo {
      font-size: 12px;
    }
  }
}
</style>