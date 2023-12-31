import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import request from '@/utils/request.js'

Vue.use(ElementUI)

Vue.prototype.$request = request
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
