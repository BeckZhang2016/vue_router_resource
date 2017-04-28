<template>
  <div id="app">
    <h1>Home</h1>
    <app-menu></app-menu>
    <div class="common">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Menu from './components/layout/Menu.vue'
  export default {
    name: 'app',
    components: {
      'app-menu': Menu
    },
    beforeRouteEnter: function (to, from, next) {
      console.log("beforeRouteEnter");
      next();
    }
  }
</script>

<style>
  div {
    margin: 0;
    padding: 0;
  }

  a:hover {
    color: red;
  }

  .common {

  }
</style>
