<template>
  <div class="commentInfo" v-if="commentInfo.content !== ''">
    <div class="moreComment">
      <div>用户评论</div>
      <div>更多</div>
    </div>
    <div class="userInfo">
      <img class="avatar" :src="commentInfo.user.avatar" alt="" />
      <span class="uname">{{ commentInfo.user.uname }}</span>
    </div>
    <div class="content">
      {{ commentInfo.content }}
    </div>
    <div class="otherInfo">
      <div  style="width:30%">{{ commentInfo.created*1000 | dateFmt("YYYY-MM-DD") }}</div>
      <div>{{ commentInfo.style }}</div>
    </div>
    <div class="commentInfo-image" v-if="commentInfo.images !== undefined">
      <div v-for="(item, index) in commentInfo.images" :key="index">
        <img class="userGoodsImage" :src="item" alt="" />
      </div>
    </div>
    <div class="explain" v-if="commentInfo.explain !== ''">
      {{ commentInfo.explain }}
    </div>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  data() {
    return {
      
    };
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return [];
      },
    },
  },

  methods: {
  },
};
</script>

<style lang="less" scoped>
.commentInfo {
  padding: 30px 8px 10px;
  box-shadow: 0px 3px 0px rgba(1, 1, 1, 0.25);
  .moreComment {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 30px;
    border-bottom: 1px #ccc solid;
  }
  .userInfo {
    margin: 30px 8px 20px;
    display: flex;
    align-items: center;
    
    .avatar {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    .uname {
      display: block;
      margin: 10px;
    }
  }
  .content {
    margin: 0 8px;
    color: rgb(92, 91, 91);
    line-height: 20px;
  }
  .otherInfo {
    margin: 14px 8px;
    display: flex;
    justify-content: space-between;
  
    div {
      color: rgb(92, 91, 91);
      font-size: 14px;
    }
  }
  .commentInfo-image {
    display: flex;
    margin: 4px;
    height: 85px;
    overflow: hidden;
    .userGoodsImage {
      margin: 0 2px;
      height: 112px;
      width: 85px;
      position: relative;
      top: -25px;
      left: 0;
      right: 0;
    }
  }
  .explain {
    color: rgb(92, 91, 91);
    line-height: 20px;
    margin: 10px 8px 30px;

  }
}
</style>