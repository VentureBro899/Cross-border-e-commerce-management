import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/sellerorderlist',
    name: 'sellerorderlist',
    component: () => import('@/views/sellerOrder/SellerOrderList.vue'),
    meta: { title: '借卖方订单管理', icon: 'el-icon-s-operation' },
    children: [
      {
        path: '/sellerorderlist',
        name: 'sellerorderlist',
        component: () => import('@/views/sellerOrder/SellerOrderList.vue'),
        meta: { title: '物流管理', icon: 'el-icon-s-operation' }
      }
    ]
  },
  {
    path: '/brandorderlist',
    name: 'brandorderlist',
    component: () => import('@/views/brandOrder/BrandOrderList.vue'),
    meta: { title: '品牌商订单管理', icon: 'el-icon-s-operation' }
  }
  /*{
    path: '/joblist',
    component: () => import('@/views/job/JobListView.vue')
  },
  {
    path: '/jobupdate/:id',
    component: () => import('@/views/job/JobUpdateView.vue')
  },
  {
    path: '/pptlist',
    component: () => import('@/views/ppt/PPTListView.vue')
  },
  {
    path: '/pptupdate/:id',
    component: () => import('@/views/ppt/PPTUpdateView.vue')
  },
  {
    path: '/pptadd',
    component: () => import('@/views/ppt/PPTAddVIew.vue')
  },
  {
    path: '/notice',
    component: () => import('@/views/notice/NoticeUpdateView.vue')
  },
  {
    path: '/general',
    component: () => import('@/views/GeneralView.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/right/404.vue')
  },
  {
    path: '/noright',
    component: () => import('@/views/right/noright.vue')
  } */
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