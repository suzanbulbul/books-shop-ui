import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Products from '../pages/products/index.vue';
import ProductDetail from '../pages/products/_id.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, props: true },
  { path: '/products', component: Products },
  {
    path: '/products/:id',
    component: ProductDetail,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
