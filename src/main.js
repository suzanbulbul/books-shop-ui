import Vue from 'vue';
import App from './App.vue';
import router from './router';

//Bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//SCSS
import '@/assets/scss/style.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
