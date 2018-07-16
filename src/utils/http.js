var Fly = require('flyio/dist/npm/wx') // npm引入方式

const request = new Fly()

request.interceptors.request.use((request) => {
  wx.showLoading({ title: '加载中..' })
  // wx.showNavigationBarLoading() //显示导航条加载动画。
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    // wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none',
      duration: 1000
    })
    return promise.resolve()
  }
)

export default {
  install: function (Vue, name = '$http') {
    Object.defineProperty(Vue.prototype, name, { value: request })
  }
}
