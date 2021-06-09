
import Vue from 'vue'
import 'normalize.css/normalize.css'
import 'assets/icon/iconfont.css'
import App from './App.vue'
import router from './router'
import store from './store'




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



