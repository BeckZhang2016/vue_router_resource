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
  import Menu from './components/Menu.vue'
  export default {
    name: 'app',
    components: {
      'app-menu': Menu
    }
  }
</script>

<style>
  li {
    display: inline-block;
    float: left;
    width: 60px;
  }

  a {
    color: mediumseagreen;
  }

  a:hover {
    color: red;
  }

  .common {

  }
</style>
