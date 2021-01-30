/*import Vue from 'vue'
import App from 'App.vue'
import router from 'router';
Vue.config.productionTip = false

//事件总线实例
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
import Vue from 'vue';
import App from './App.vue';
//import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from './store';
//import Antd from 'ant-design-vue';
import _ from 'lodash';
import VueLazyload from 'vue-lazyload';
//import Directives from './common/directives/index';


Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.prototype._ = _;
/!*Vue.use(Antd);
Vue.use(Directives);*!/

Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');*/

import Vue from 'vue';
import App from './App.vue';
//import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from './store';
//import Antd from 'ant-design-vue';
//import _ from 'lodash';
import VueLazyload from 'vue-lazyload';
//import Directives from './common/directives/index';


Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
//Vue.prototype._ = _;
//Vue.use(Antd);
//Vue.use(Directives);

Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

