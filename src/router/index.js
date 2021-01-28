import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/shopcart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('views/detail/Detail')

//创建router
const routes = [
  {
  path: '',
  redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
    // path: '/detail',
    // component: Detail
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

//导出
export default router
