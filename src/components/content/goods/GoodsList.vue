<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :goodsitem="item" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem';

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    /*根据宽度进行分配一行显示几个*/
    flex-wrap: wrap;
    /*一般是根据两个之间距离进行均等分，左右两边的距离为中间距离的一半*/
    justify-content: space-around;

    padding: 2px;
  }
</style>
