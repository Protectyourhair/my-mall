<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommdView",
  props: {
    recommend: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 10px;
    padding: 1px 0 12px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 80%;
    margin-bottom: 6px;
  }
</style>
