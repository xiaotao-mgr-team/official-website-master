// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Carousel from 'element-ui'
import Pagination from 'element-ui'
import Breadcrumb from 'element-ui'
import Tabs from 'element-ui'
import { get } from './utils/http'
import * as filters from './filters'

Vue.use(VueAwesomeSwiper);
Vue.use(Carousel);
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.config.productionTip = false
Vue.prototype.$get = get;

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

// 注册中央事件总线
Vue.prototype.$event = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
