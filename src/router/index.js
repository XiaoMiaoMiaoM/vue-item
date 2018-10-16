/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order =() => import('../pages/Order/Order.vue')
const Profile =() => import('../pages/Profile/Profile.vue')


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'

import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Shop',
      component: Shop,
      children: [
        {
          path: '/Shop/goods',
          component: ShopGoods
        },
        {
          path: '/Shop/ratings',
          component: ShopRatings
        },
        {
          path: '/Shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/Shop/goods'
        }
      ]
    },

    {
      path: '/',
      redirect: '/msite'
    },
    {
      path:'/a',
      component:A
    },
    {
      path:'/b',
      component:B,
      children:[
        {
          path:'/b/b1',
          component:B1
        },
        {
          path:'/b/b2',
          component:B2
        }
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log('global beforeEach', to, from)
  if(to.path==='/a' || to.path==='/b'){
    if(!Vue.store.state.user._id){
      return next('/login')
    }
  }
  next()
})

export default router
