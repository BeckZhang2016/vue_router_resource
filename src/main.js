import Vue from 'vue'
import router from './routers/index.js'
import myApp from './App.vue'

const app = new Vue({
  router: router,
  template: '<myApp></myApp>',
  components: {myApp: myApp}
}).$mount('#app');

