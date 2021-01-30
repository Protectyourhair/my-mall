import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'
export default {
  //传context或者{state, commit}
  addCart(context, payload){
    //payload新添加的商品
    //查找之前数组中是否含有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct) {
      //oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
    }else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
  }
}
