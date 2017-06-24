// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'

// provide additional configuration to mini-toastr
const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToastr.init({types: toastTypes})

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.config.productionTip = false

Vue.use(VueNotifications, options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
