import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path:'/foo', component: Foo},
    {path:'/bar', component: Bar}
  ]
});


const app = new Vue({
  router: router
}).$mount('#app');

