<template>
  <div class="goodsParams">
    <!-- 遍历的方法展示 -->
    <!-- <div class="rule" v-for="(item, index) in goodsParams.rule" :key="index">
      <div class="rule-line" v-for="(item, index) in item" :key="index">
        <div class="rule-item" v-for="(item, index) in item" :key="index">
          {{ item }}
        </div>
      </div>
    </div> -->

    <!-- 表格方法展示 -->
    <div class="rule" v-for="(item, index) in goodsParams.rule" :key="index">
      <table class="rule-table">
        <tr class="rule-line" v-for="(item, index) in item" :key="index">
          <td class="rule-item" v-for="(item, index) in item" :key="index">
            {{ item }}
          </td>
        </tr>
      </table>
    </div>
    <div class="disc">{{ goodsParams.disclaimer }}</div>

    <!-- <div>{{goodsParams.set}}</div> -->
    <table class="set">
      <tr v-for="(item, index) in goodsParams.set" :key="index">
        <td style="width:30%">{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  data() {
    return {};
  },
  props: {
    goodsParams: {
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
.goodsParams {
  padding: 30px 8px 30px;
  box-shadow: 0px 3px 0px rgba(1, 1, 1, 0.25);
  .rule {
    padding-bottom: 10px;
    .rule-table {
      border-collapse: collapse;
      .rule-item {
        width: 60px;
        border: 1px solid #ff8198;
        padding: 5px;
      }
    }
    
  }
  .disc {
    margin: 10px 8px;
    font-weight: bold;
  }

  .set {
    margin-top: 30px;
      border-collapse: collapse;
      width: 100%;
      td {
        border: solid 1px #ff8198;
        padding: 5px;
      }
    }
}
</style>