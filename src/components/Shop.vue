<template>
  <div id="shop">
    <input type="button" value="go home" v-on:click="goHome">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  export default {
    name: 'shop',
    methods:{
      goHome: function () {
        this.$router.push(' ')
      }
    }
  }
</script>