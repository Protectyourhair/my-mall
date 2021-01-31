<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品列表-->
    <cart-list />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import {mapGetters} from 'vuex'
import CartList from '@/views/shopcart/childComps/CartList';
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  computed: {
    /*cartLength() {
      return this.$store.getters.cartLength
    }*/
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
