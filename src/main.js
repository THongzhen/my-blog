import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//全局样式
import './assets/css/global.css'
Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL='http://localhost:8888'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
