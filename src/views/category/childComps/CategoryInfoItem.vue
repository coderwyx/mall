<template>
  <div class="CategoryInfoItem">
    <a :href="CategoryInfoItem.link">
      <img
        class="itemImg"
        :src="CategoryInfoItem.image"
        @load="itemImgLoad"
        alt=""
      />
      <div class="title">{{ CategoryInfoItem.title }}</div>
    </a>
  </div>
</template>

<script>
import debounce from "@/common/utils";

export default {
  name: "CategoryInfoItem",
  data() {
    return {};
  },
  props: {
    CategoryInfoItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemImgLoad() {
      debounce(() => {
        this.$emit("itemImgLoad");
      },300);
    },
  },
};
</script>

<style scoped>
.CategoryInfoItem {
  display: flex;
  text-align: center;
  margin: 8px 0px;
}
.itemImg {
  height: 125px;
  width: 125px;
  margin-bottom: 5px;
}
.title {
  color: #000;
  font-size: 16px;
}
</style>