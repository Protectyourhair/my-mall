import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions';

//安装插件
Vue.use(Vuex)

const state = {
  cartList: [],
  count: 0
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

//挂载到实例上
export default store
