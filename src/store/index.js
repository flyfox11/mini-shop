import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  ...counter,
  plugins: [
    // 数据持久化
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => wx.clearStorage()
      }
    })
  ]
})

// export default store
export default {
  install: function (Vue, name = 'store') {
    Object.defineProperty(Vue.prototype, name, { value: store })
  }
}
