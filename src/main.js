import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import Home from './components/Home.vue'
// import Shop from './components/Shop.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: App
    }
  ]
});


const app = new Vue({
  router: router
}).$mount('#app');

