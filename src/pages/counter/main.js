import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    'navigationBarBackgroundColor': '#ffffff',
    'navigationBarTextStyle': 'black',
    'navigationBarTitleText': '测试vuex页面',
    'backgroundColor': '#eeeeee',
    'backgroundTextStyle': 'light'
  }
}
