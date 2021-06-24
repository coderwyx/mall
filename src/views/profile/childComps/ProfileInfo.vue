<template>
  <div class="profileInfo">
    <!-- 用户信息 -->
    <div class="usersInfo">
      <img src="@/assets/img/profile/avatar.svg" alt="" />
      <div class="loginInfo">
        <div class="login">登录/注册</div>
        <span class="iconfont icon-shouji phone">暂无绑定手机号</span>
      </div>
      <div class="iconfont icon-gengduo more"></div>
    </div>
    <!-- 其他信息 -->
    <div class="otherInfo">
      <div class="money">
        <span class="Spnumber">{{ toMoneny }}</span
        ><span>元</span>
        <div>我的余额</div>
      </div>
      <div class="sale">
        <span class="Spnumber">{{ sale }}</span
        ><span>个</span>

        <div>我的优惠</div>
      </div>
      <div class="integration">
        <span class="Spnumber">{{ integration }}</span
        ><span>分</span>
        <div>我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  data() {
    return {
      moneny: 0.0,
      sale: 0,
      integration: 0,
    };
  },
  methods: {},
  computed: {
    toMoneny() {
      return this.moneny.toFixed(2);
    },
  },
};
</script>

<style lang='less' scoped>
@color: #ff8198;

.profileInfo {
  .usersInfo {
    padding: 8px;
    display: flex;
    background-color: @color;
    font-size: 16px;
    color: #fff;
    height: 50%;
    img {
      width: 70px;
      height: 70px;
    }
    .more {
      margin-left: auto;
      line-height: 70px;
    }
    .loginInfo {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .login {
        font-weight: bold;
        margin-bottom: 2px;
        margin-left: 2px;
      }
      .phone {
        margin-top: 2px;
        font-size: 14px;
      }
    }
  }
  .otherInfo {
    height: 86px;
    display: flex;
    border-bottom: 10px solid #f6f6f6;
    .money,
    .sale,
    .integration {
      flex: 1;
      text-align: center;
      padding-top: 16px;
      border-right: 1px solid #f2f2f2;
    }
    .Spnumber {
      color: #fd6046;
      font-size: 30px;
      font-weight: bold;
    }
  }
}
</style>