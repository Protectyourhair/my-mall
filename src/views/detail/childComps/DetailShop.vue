<template>

  <div v-if="Object.keys(shop).length!==0" class="shop">

    <div class="shop-info">
      <img :src="shop.logo" class="shop-img"/>
      <div class="shop-name">{{shop.name}}</div>
    </div>

    <div class="detail-info">

      <div class="sells-box">
        <div>{{((shop.sells)/10000).toFixed(1)}}<span>万</span></div>
        <div>总销量</div>
      </div>

      <div class="goodsCount">
        <div>{{shop.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>

      <div class="line"/>

      <div class="right">
        <div v-for="item in shop.score">
          <div class="score-box">
            <div class="name">{{item.name}}</div>

            <div v-if="item.isBetter" class="better">
              <div class="better-score">{{item.score}}</div>

              <div class="better-name">高</div>
            </div>
            <div v-else class="not-better">
              <div class="not-better-score">{{item.score}}</div>

              <div class="not-better-name">低</div>
            </div>


          </div>
        </div>
      </div>

    </div>

    <div class="white"></div>

    <div class="shop-go-box">
      <div class="shop-go">进店逛逛</div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'DetailShop',
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  };
</script>

<style scoped>

  .shop {
    border-top: 2px solid #eeeeee;
    padding: 10px;
    height: 100px;
    width: 100%;
  }

  .shop-info {
    display: flex;
    align-items: center;
  }

  .shop-img {
    border-radius: 30px;
    height: 60px;
    width: 60px;
    border: 1px solid #F5F5F5;

  }

  .shop-name {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 400;
    color: #999999;
  }

  .detail-info {
    position: relative;
    background-color: pink;
  }

  .sells-box {
    position: absolute;
    text-align: center;
    top: 10px;
    left: 5%;
    font-size: 16px;
    /*width: 100px;*/
  }

  .goodsCount {
    position: absolute;
    top: 10px;
    left: 25%;
    /*width: 100px;*/
    text-align: center;
    font-size: 16px;
  }

  .line {
    position: absolute;
    top: 20px;
    left: 50%;
    width: 1px;
    height: 30px;
    background-color: #999999;
  }

  .right {
    position: absolute;
    right: 0;
    top: 0;
    /*display: flex;*/
    /*flex-direction: row;*/
  }

  .score-box {
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
  }

  .name {
    /*margin-right: 2%;*/
  }

  .better,.not-better {
    width: 60px;
    display: flex;
    justify-content: space-between;
    margin-left: 6px;
  }

  .better-score {
    color: #ff5777;
  }

  .better-name {
    background-color: #ff5777;
    color: #ffffff;
  }

  .not-better-score {
    color: 	#2E8B57;
  }

  .not-better-name {
    background-color: #2E8B57;
    color: #ffffff;
  }


  .white {
    height: 80px;
    width: 100%;
    background-color: #fff;
  }

  .shop-go-box {
    display: flex;
    justify-content: center;
  }

  .shop-go {
    width: 40%;
    height: 24px;
    background-color: #F5F5F5;
    border-radius: 4px;
    text-align: center;
    color: 	#A9A9A9;
    line-height: 24px;
  }


</style>
