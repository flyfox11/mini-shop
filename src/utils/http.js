let Fly = require('flyio/dist/npm/wx') // npm引入方式
const request = new Fly()

request.config.timeout = 5 * 1000
request.config.baseURL = 'http://result.eolinker.com'
request.interceptors.request.use((request) => {
  // request.headers['Authorization'] = 'xxx'
  wx.showLoading({ title: '加载中..' })
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideLoading()
    wx.showToast({
      title: err.message,
      icon: 'none',
      duration: 1000
    })
    return promise.resolve()
  }
)

// export default {
//   install: function (Vue, name = '$http') {
//     Object.defineProperty(Vue.prototype, name, { value: request })
//   }
// }
// export default request

export default function fetch (url, params = {}, method = 'post') {
  return new Promise((resolve, reject) => {
    request[method](url, params)
      .then(response => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
