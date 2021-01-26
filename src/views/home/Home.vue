<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
  <home-swiper :banners="banners" />
  <recommend-view :recommend="recommend" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import {getHomeMultidata} from 'network/home';


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
    return {
      banners: [],
      recommend: []
    }
  },
  created(){
    getHomeMultidata().then((res) => {
      console.log(res);
      //将请求到的数据保存到一个变量中
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  .nav-home {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
