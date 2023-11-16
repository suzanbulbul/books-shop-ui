<template>
    <div class="home">
      <div class="container">
        <div class="home-body container">
          <Card />
          <router-link to="/products">Go to product</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue'
  
  export default {
    name: 'Home',
    components: {
      Card
    }
  }
  </script>