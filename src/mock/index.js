const Mock = require('mockjs') // 导入依赖模块
// 返回一个函数
module.exports = function (middlewares, devServer) {
  // 订单管理mock
  middlewares.unshift({
    name: 'mock',
    path: '/seller/order/unpayment',
    middleware: (req, res) => {
      // mock 数据模拟接口数据
      let json = {
        'data|3-10': [
          {
            title: '@csentence(5, 10)',
            'price|5-200': 1,
            'qty|1-10': 1,
            sku: '@string("upper", 6)',
            orderno: '@integer(100000000000000000, 999999999999999999)',
            total: function () {
              return (this.price * this.qty).toFixed(2)
            }
          }
        ]
      }
      res.send(Mock.mock(json))
    }
  })

  middlewares.unshift({
    name: 'mock',
    path: '/seller/order/shiped',
    middleware: (req, res) => {
      // mock 数据模拟接口数据
      let json = {
        'data|3-10': [
          {
            title: '@csentence(5, 10)',
            'price|5-200': 1,
            'qty|1-10': 1,
            sku: '@string("upper", 6)',
            orderno: '@integer(100000000000000000, 999999999999999999)',
            total: function () {
              return (this.price * this.qty).toFixed(2)
            },
            trackingno: '@integer(30000000, 90000000)'
          }
        ]
      }
      res.send(Mock.mock(json))
    }
  })

  middlewares.unshift({
    name: 'mock',
    path: '/brand/order/completed',
    middleware: (req, res) => {
      // mock 数据模拟接口数据
      let json = {
        'data|3-10': [
          {
            title: '@csentence(5, 10)',
            'price|5-200': 1,
            'count|1-100': 1,
            sku: '@string("upper", 6)',
            orderno: '@integer(100000000000000000, 999999999999999999)',
            orderCreateTime: '@datetime',
            trackingno: '@integer(30000000, 90000000)'
          }
        ]
      }
      res.send(Mock.mock(json))
    }
  })

  middlewares.unshift({
    name: 'mock',
    path: '/brand/order/cancelled',
    middleware: (req, res) => {
      // mock 数据模拟接口数据
      let json = {
        'data|10': [
          {
            title: '@csentence(5, 10)',
            'price|5-200': 1,
            'count|1-100': 1,
            sku: '@string("upper", 6)',
            orderno: '@integer(100000000000000000, 999999999999999999)',
            orderCreateTime: '@datetime'
          }
        ]
      }
      res.send(Mock.mock(json))
    }
  })

  // ===================分割线=================

  return middlewares
}
