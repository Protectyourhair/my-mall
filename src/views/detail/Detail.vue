<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNav"/>

    <scroll class="detail-content"
            ref="scroll" @scroll="contentScroll"
            :probeType="3"
    >
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-shop :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"/>
      <detail-params-info :itemParams="itemParams" ref="params"/>
      <goods-list ref="recommend" :goods="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childComps/DetailNavBar';
import DetailSwiper from '@/views/detail/childComps/DetailSwiper';
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo';
import DetailShop from '@/views/detail/childComps/DetailShop';
import Scroll from '@/components/common/scroll/Scroll';
import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo';
import DetailParamsInfo from '@/views/detail/childComps/DetailParamsInfo';
import DetailCommentInfo from '@/views/detail/childComps/DetailCommentInfo';
import GoodsList from '@/components/content/goods/GoodsList';
import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar';

import {getDetail, Goods, Shop, GoodsParam,getRecommend} from 'network/detail';
import {debounce} from '@/common/utils';
import {backTopMixin} from '@/common/mixin';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins:[backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo: {},
      itemParams: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.query.iid;
    //根据iid 请求相关数据
    getDetail(this.iid).then(res => {
      //console.log(res);
      const data = res.result;
      //获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //获取商家信息的对象
      this.shop = new Shop(data.shopInfo)
      //保存商品的详情
      this.detailInfo = data.detailInfo
      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取参数信息
      this.itemParams = data.itemParams;
      //取出评论信息
      if (data.rate.list) {
        let a = 0;
        this.commentInfo = data.rate.list[a];
      }

        //$nextTick表示页面渲染完成后立即执行以下函数
        /*1。第一次值获取不对，是因为页面还没有渲染出来
          //请求完数据在拿offsetTop值
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          console.log(this.themeTopYs)
        */
    })
      //请求推荐数据
    getRecommend().then((res) => {
        this.recommend = res.data.list
    })
  },
  updated() {
    //$nextTick表示页面渲染完成后立即执行以下函数
    //2.第二次获取值不对，是因为图片没有加载完
    setTimeout(() =>{
      this.$nextTick(()=> {
        //请求完数据在拿offsetTop值
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE);
        //console.log(this.themeTopYs)
      })
    }, 1000)
  },
  methods: {
    goodsImgLoad() {
      // this.$bus.$emit('goodsImgLoad');
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      this.$bus.$on('detailItemImgLoad', () => {
        refresh();
      });
      },
    titleClick(index) {
      //console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position) {
      //获取Y值
      const positionY = -position.y;
      let length = this.themeTopYs.length;

      //position中的y和值进行对比
      for (let i = 0; i < length-1; i++) {
        //this.currentIndex !== i  防止赋值过程太过频繁
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    addToCart() {
      //显示购物车需要展示的数据
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //将商品添加到购物车
      //因为存在判断条件，所以放在actions里，用dispatch调用
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>

<style scoped>
  #detail {
  position: relative;
  z-index: 100;
  background-color: #ffffff;
  height: 100vh;

}
  .detail-nav {
    position: relative;
    z-index: 9;
  }
  .detail-content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

</style>
