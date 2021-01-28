<template>
  <!--  <div class="goods-info" v-if="Object.keys(detailInfo).length!==0">-->
  <!--    <div>{{detailInfo.desc}}{{detailInfo.detailImage[0].key}}</div>-->
  <!--    <div v-for="item in detailInfo.detailImage[0].list">-->
  <!--      <img :src="item" class="img" @load="goodsImgLoad"/>-->
  <!--    </div>-->
  <!--  </div>-->

  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="item in detailInfo.detailImage">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img
          v-for="(item, index) in item.list"
          :key="index"
          v-lazy="item"
          alt=""
          @load="goodsImgLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgLength: 0
    };
  },
  mounted() {

  },
  methods: {
    goodsImgLoad() {
      // ++this.counter相当于counter+=1
      if (++this.counter === this.imgLength) {
        this.$emit('goodsImgLoad');
        // console.log(22,this.imgLength)
      }
    }
  },
  watch: {
    detailInfo() {

      //获取图片个数，并且只返回一次
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>

.goods-info {
  margin-top: 120px;
  border-top: 4px solid #eeeeee;
  padding: 20px 10px 20px 10px;
}

.img {
  width: 100%;
}

/*.goods-info {*/
/*  padding: 20px 0;*/
/*  border-bottom: 5px solid #f2f5f8;*/
/*}*/

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}

</style>
