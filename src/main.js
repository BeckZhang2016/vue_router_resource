import Vue from 'vue'
import router from './routers/index.js'
import myApp from './App.vue'

const app = new Vue({
  router: router,
  /*template: '<myApp></myApp>',*/
  // components: {myApp: myApp},


}).$mount('#app');

router.beforeEach(function (to, from, next) {
  console.log(to,from);
  next();
});

app.$router.push('/home/order');
