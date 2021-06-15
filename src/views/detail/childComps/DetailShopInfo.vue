<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shopInfo.logo" alt="" class="shopLogo" />
      <div class="shopName">{{ shopInfo.name }}</div>
    </div>
    <div class="center">
      <div class="center-left">
        <div class="center-left-item">
          <div>{{ shopSells }}</div>
          <div class="shopSells">总销量</div>
        </div>
        <div class="center-left-item">
          <div>{{ shopInfo.goodsCount }}</div>
          <div class="goodsCount">全部宝贝</div>
        </div>
      </div>
      <div class="center-right">
        <div
          v-for="(item, index) in shopInfo.score"
          :key="index"
          class="center-right-item"
        >
          <div>{{ item.name }}</div>
          <div :class="item.isBetter?'betterScore':'lowScore'">{{ item.score }}</div>
          <span v-if="item.isBetter" class="better">高</span>
          <span v-else class="low">低</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {
      shopSells: 0,
    };
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {},
  watch: {
    shopInfo: function (newVal, oldVal) {
      this.shopSells = (newVal.sells / 10000).toFixed(1) + "万";
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.shopInfo {
  .shopTop {
    display: flex;
    align-items: center;
    .shopLogo {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      border: 1px rgb(156, 156, 156) solid;
      margin: 30px 8px;
    }
    .shopName {
      font-size: 18px;
      margin-left: 5px;
      color: rgb(54, 53, 53);
    }
  }
  .center {
    display: flex;
    .center-left {
      text-align: center;
      align-items: center;
      display: flex;
      width: 50%;
      margin: 10px 0;
      border-right: 1px solid rgb(100, 98, 98);
      .center-left-item {
        font-size: 20px;
        width: 50%;
        .shopSells,
        .goodsCount {
          font-size: 14px;
        }
      }
    }
    .center-right {
      width: 50%;
      .center-right-item {
        display: flex;
        justify-content: space-between;
        margin: 4px 12px;
        font-size: 14px;
        .betterScore {
          color: rgb(243, 20, 20);
        }
        .lowScore {
          color: rgb(19, 128, 5);
        }
        .better{
          background-color: rgb(243, 20, 20);
          color: #fff;
        }
        .low {
          background-color: rgb(19, 128, 5);
          color: #fff;
        }
      }
    }
  }
}
</style>