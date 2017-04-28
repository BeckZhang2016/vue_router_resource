/**
 * Created by beck.zhang on 4/27/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import App from '../App.vue'
import Order from '../components/Order.vue'
import Personal from '../components/Personal.vue'
import Shop from '../components/Shop.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {path: '/login', name: 'login', component: Login},
    {path: '/home', name: 'home', component: App, children:[
      {path: 'order', name: 'order', component: Order},
      {path: 'personal', name: 'personal', component: Personal},
      {path: 'shop', name: 'shop', component: Shop},
    ]}
  ]
})