<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <div>这里是图标
      <span class="icon-collect"></span>
      <span class="icon-delivery"></span>
      <span class="icon-payment"></span>
    </div>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
    <div class="counter" @click="goToTest">去往Vuex示例页面</div>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  computed: {
    ...mapGetters({
      test: 'getTest'
    })
  },
  components: {
    card
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log('授权成功！！')
              this.userInfo = res.userInfo
            },
            fail: () => {
              wx.showModal({
                title: '警告',
                content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
                success: function (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                      url: '../authorize/main'
                    })
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    goToTest () {
      wx.switchTab({
        url: '/pages/counter/main'
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.$store.dispatch('TEST_GET')
    wx.setNavigationBarTitle({
      title: this.test
    })
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/index.less");
.container {
  // 示例用法
  color: @color-red;
  .font-bold;
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    .userinfo-avatar {
      width: 128rpx;
      height: 128rpx;
      margin: 20rpx;
      border-radius: 50%;
    }

    .userinfo-nickname {
      color: #aaa;
    }

  }


  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
}

</style>
