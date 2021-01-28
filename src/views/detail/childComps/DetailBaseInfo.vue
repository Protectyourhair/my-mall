<template>
  <div v-if="Object.keys(goods).length!==0" class="goods-info">
    <div class="goods-title">{{goods.title}}</div>
    <div class="price">
      <div class="nowPrice">{{goods.newPrice}}</div>
      <div class="line-price">{{goods.oldPrice}}</div>
      <div v-show="(goods.discount)" class="discount">{{goods.discount}}</div>
    </div>

    <div class="columns">
      <div>{{goods.columns[0]}}</div>

      <div>{{goods.columns[1]}}</div>

      <div>{{goods.services[0].name}}</div>
    </div>

    <div class="services">
      <div class="services-item">
        <img :src="goods.services[1].icon" class="icon">
        <span>{{goods.services[1].name}}</span>
      </div>

      <div class="services-item">
        <img :src="goods.services[2].icon" class="icon">
        <span>{{goods.services[2].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    mounted() {
    }
  };
</script>

<style scoped>

  .goods-info {
    padding: 10px;
  }

  .goods-title {

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #666666;
    font-size: 20px;
  }

  .price {
    display: flex;
    margin-top: 4px;
    vertical-align: bottom;
    align-items: center;
  }

  .nowPrice {
    color: var(--color-high-text);
    font-size: 20px;
    font-weight: bold;
  }

  .line-price {
    text-decoration: line-through;
    line-height: 34px;
    margin-left: 10px;
  }

  .discount {
    background-color: var(--color-high-text);
    border-radius: 4px;
    color: #fff;
    height: 24px;
    margin-left: 10px;
  }

  .columns {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #F5F5F5;
    height: 26px;
  }

  .columns div {
    color: #999999;
  }

  .services {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .services-item {
    display: flex;
    align-items: center;
  }

  .services-item span {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
  }

  .icon {
    height: 13px;
    width: 13px;

  }

</style>
