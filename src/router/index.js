import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ // 要在侧栏展示的路由作为根组件的children
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
      meta: { title: '品牌商订单管理', icon: 'el-icon-s-operation' }
    },
    {
      path: '/brandmyinfo',
      name: 'brandmyinfo',
      component: () => import('@/views/brandMyInfo/BrandMyInfo.vue'),
      meta: { title: '品牌商信息管理', icon: 'el-icon-s-operation' },
    },
    {
      path: '/addorupdatemyinfo',
      name: 'addorupdatemyinfo',
      component: () => import('@/views/addOrUpdateMyInfo/AddOrUpdateMyInfo.vue'),
      meta: { title: '添加品牌商信息', icon: 'el-icon-s-operation' },
      hidden: true
    },
    {
      path: '/sellermyinfo',
      name: 'sellermyinfo',
      component: () => import('@/views/sellerMyInfo/SellerMyInfo.vue'),
      meta: { title: '借卖方信息管理', icon: 'el-icon-s-operation' },
    },
    {
      path: '/dictionarylist',
      name: 'dictionarylist',
      component: () => import('@/views/dictionary/DictionaryList.vue'),
      meta: { title: '参数管理', icon: 'el-icon-s-management' }
    },
    {
      path: '/sellerShopInformation',
      name: 'sellerShopInformation',
      component: () => import('@/views/sellerShopInformation/sellerShopInformation.vue'),
      meta: { title: '借卖方-店铺管理', icon: 'el-icon-s-opportunity' }
    },
    {
      path: '/sellerCommodityInformation',
      name: 'sellerCommodityInformation',
      component: () => import('@/views/sellerCommodityInformation/sellerCommodityInformation.vue'),
      meta: { title: '借卖方-商品阅览', icon: 'el-icon-s-opportunity' }
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('@/views/wish/wishList.vue'),
      meta: { title: '借卖方-心愿单', icon: 'el-icon-s-opportunity' }
    }]
  },


  // 登录注册放下面
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/authentication/login'),
    hidden: true,
    meta: { title: '登录' }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/authentication/register'),
    hidden: true,
    meta: { title: '注册' }
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