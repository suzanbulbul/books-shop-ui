<template>
    <div class="home">
      <div class="container">
        <AppHeader />
        <div class="home-body container">
          <Card />
          <router-link to="/products">Go to product</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/Header.vue'
  import Card from '../components/Card.vue'
  
  export default {
    name: 'Home',
    components: {
      AppHeader,
      Card
    }
  }
  </script>