import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import CartControl from './components/CartControl/CartControl.vue'
import TopHeader from './components/TopHeader/TopHeader.vue'
import Split from './components/Split/Split.vue'

import 'swiper/dist/css/swiper.min.css'
import './mock/mockServer'
import './filters'
import loading from './common/imgs/loading.gif'


// 注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component('CartControl', CartControl)
Vue.component('Split',Split)
Vue.component(Button.name, Button) // mt-button
Vue.use(VueLazyload, {  // 内部添加一个全局指令: lazy
  loading,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})

Vue.store = store
