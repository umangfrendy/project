import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'
import axios from 'axios';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Product from './components/Product'
import Category from './components/Category'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false
const routes = [
  {
    name: 'product',
    path: '/product',
    component: Product
},
{
  name: 'category',
  path: '/category',
  component: Category
},
];
const router = new VueRouter({ mode: 'history', routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')