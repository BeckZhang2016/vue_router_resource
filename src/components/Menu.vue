<template>
  <div id="menu">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/shop">Shop</router-link>
      </li>
      <li>
        <router-link to="/order">Order</router-link>
      </li>
      <li>
        <router-link to="/personal">Personal</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

  export default {
    name: 'menu',
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