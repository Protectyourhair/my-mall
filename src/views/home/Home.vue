<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" class="swiper"/>
    <recommend-view :recommend="recommend" />
    <feature-view />
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabclick="tabClick"
    />
    <good-list :goods="showGoods" />
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>
  </div>
</template>

<script>
//导入公共组件
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from '@/views/home/childComps/FeatureView';

//导入一些业务组件
import TabControl from '@/components/content/tabcontrol/TabControl';
import GoodList from '@/components/content/goods/GoodList';
import GoodListItem from '@/components/content/goods/GoodListItem';
//请求首页数据的方法
import {getHomeMultidata} from 'network/home';
import {getHomeGoods} from '@/network/home';


export default {
  name: "Home",
  components: {
    // 公共组件
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    //业务组件
    TabControl,
    GoodList,
    GoodListItem
  },
  data(){
    return {
      banners: [],
      recommend: [],
      goods: {
        //pop,news,sell分别对应第四个模块的流行，新款，精选
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    //1.请求多个数据，banner图，推荐图
    this.getHomeMultidata()
    //2.请求商品数据
    //pop,news,sell分别对应第四个模块的流行，新款，精选
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /*
    事件监听相关的方法
    */
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType ='pop';
          break;
        case 1:
          this.currentType ='new';
          break;
        case 2:
          this.currentType ='sell';
          break;
      }
    },
    /*tabClick(index) {

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },*/
    /*
    网络请求相关的方法
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //将请求到的数据保存到一个变量中
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      //动态获取页码
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        //将请求到的数据放到list数组中
        //.push(... )方法是将一个数组中的数据塞到另一个数组中
        this.goods[type].list.push(...res.data.list)
        //此时页码需要加1
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
  }
  .nav-home {
    background-color: var(--color-tint);
    color: #fff;

    /*防止头部导航滚动*/
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 8;
  }
  .swiper {
    padding-top: 44px;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
