import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/sellerorderlist',
    name: 'sellerorderlist',
    component: () => import('@/views/sellerOrder/SellerOrderList.vue'),
    meta: { title: '借卖方订单管理', icon: 'el-icon-s-operation' },
    /*children: [
      {
        path: '/sellerorderlist',
        name: 'sellerorderlist',
        component: () => import('@/views/sellerOrder/SellerOrderList.vue'),
        meta: { title: '物流管理', icon: 'el-icon-s-operation' }
      }
    ]*/
  },
  {
    path: '/brandorderlist',
    name: 'brandorderlist',
    component: () => import('@/views/brandOrder/BrandOrderList.vue'),
    meta: { title: '品牌商订单管理', icon: 'el-icon-s-order' }
  },
  {
    path: '/dictionarylist',
    name: 'dictionarylist',
    component: () => import('@/views/dictionary/DictionaryList.vue'),
    meta: { title: '参数管理', icon: 'el-icon-s-management' }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('@/views/wish/wishList.vue'),
    meta: { title: '借卖方-心愿单', icon: 'el-icon-s-opportunity' }
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

/* router.beforeEach((to, from, next) => {
  const uid = localStorage.getItem('id')
  if (to.path.indexOf('noright') !== -1 || to.path.indexOf('404') !== -1) {
    next()
    return
  }
  if (uid != null && uid === '10000') { // 已登录
    next()
  } else { // 未登录
    next('/noright')
  }
}) */

export default router