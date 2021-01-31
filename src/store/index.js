import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions';
import getters from '@/store/getters';

//安装插件
Vue.use(Vuex)

const state = {
  cartList: [],
  count: 0
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//挂载到实例上
export default store
