import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import counter from './modules/counter'
import test from './modules/test'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
    test
  },
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

export default store
