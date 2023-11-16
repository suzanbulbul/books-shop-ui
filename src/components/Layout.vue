<template>
  <div>
    <Header />
    <main class="layout-main container">
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
 name: 'Layout',
    components: {
        Header
    }
}
</script>