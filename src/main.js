import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import TopHeader from './components/TopHeader/TopHeader.vue'

import 'swiper/dist/css/swiper.min.css'
import './mock/mockServer'


// 注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button) // mt-button

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App),

  router,
  store,
})
