<template>
  <div>
    <h2>Ürün Detayı</h2>
    <p>Ürün ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  mounted() {
    console.log('Ürün ID:', this.$route.params.id);
  },
};
</script>