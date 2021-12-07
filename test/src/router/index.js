import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Product from '../views/Product.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  // {
  //   path: '/category',
  //   name: 'Category',
  //   component: () => import('../views/Category.vue')
  // },
  // {
  //   path: '/category',
  //   name: 'Category',
  //   component: () => import('../views/Category.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
