<template>
  <div>
    <h2>Ürünler Sayfası</h2>
    <router-link v-for="product in products" :to="'/products/' + product.id" :key="product.id">
      {{ product.name }}
    </router-link>

    <router-view></router-view>
    <router-view name="detail"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [
        { id: 1, name: 'Ürün 1' },
        { id: 2, name: 'Ürün 2' },
      ],
    };
  },
};
</script>
