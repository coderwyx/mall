<<<<<<< HEAD
import Vue from 'vue'
=======
import { createApp } from 'vue'
>>>>>>> 9b938e721b263ac8122892912288ab02faf2869c
import App from './App.vue'
import router from './router'
import store from './store'

<<<<<<< HEAD
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
=======
createApp(App).use(store).use(router).mount('#app')
>>>>>>> 9b938e721b263ac8122892912288ab02faf2869c
