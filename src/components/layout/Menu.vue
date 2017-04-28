<template>
  <div id="menu">
    <ul>
      <li>
        <router-link :to="home">Home</router-link>
      </li>
      <li>
        <router-link :to="shop">Shop</router-link>
      </li>
      <li>
        <router-link :to="order">Order</router-link>
      </li>
      <li>
        <router-link :to="personal">Personal</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

  export default {
    name: 'menu',
    data: function () {
      return {
        home: '/',
        shop: '/shop',
        order: '/order',
        personal: '/personal',
      }
    },
    methods: {
      goHome: function () {

      },
      goShop: function () {

      },
      goOrder: function () {

      },
      goPersonal: function () {

      }
    }
  }
</script>

<style>
  li {
    display: inline-block;
    width: 60px;
  }

  a {
    color: mediumseagreen;
  }
</style>