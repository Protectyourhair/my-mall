<template>
  <div class="tab-bar-item" @click="tabbarClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return{
      //isActive: true,
    }
  },
  computed: {
    isActive(){
      //isActive需要动态决定
      //  /home->item1(/home)->true
      //return this.$route.path.indexOf(this.path) !== -1
      return this.$route.path === this.path
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabbarClick(){
      //防止出现重复点击相同路径报错
      this.$router.push('/location').catch(err => {console.log(err)})
      //路径改变
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
}
.tab-bar-item img {
  width: 20px;
  margin-top: 6px;
  vertical-align: middle;
  margin-bottom:3px;
}
.active {
  color:pink;
}
</style>
