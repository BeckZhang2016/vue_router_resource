<template>
  <div id="app">
    <h3>Home</h3>
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
