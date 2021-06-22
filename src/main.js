
import Vue from 'vue'
import 'normalize.css/normalize.css'
import 'assets/icon/iconfont.css'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
import { Toast } from 'vant';

Vue.use(VueLazyload)
Vue.use(Toast);
Vue.filter('dateFmt', (input, formatString = 'YYYY-MM-DD HH:mm:ss') => {
  //es5函数参数设置默认值
  //const lastFormatString = formatString || ''
  // moment(input) 把时间字符串转成时间对象
  // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
  return moment(input).format(formatString)
});
Vue.use(less);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



