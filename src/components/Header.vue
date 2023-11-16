<template>
  <header class="header">
    <b-navbar toggleable="lg">
      <b-container>
        <router-link to="/">
          <b-navbar-brand>Book Shop</b-navbar-brand>
        </router-link>

        <b-navbar-nav>
          <router-link to="/">
            <b-nav-item>Home</b-nav-item>
          </router-link>

          <router-link to="/cart">
            <b-nav-item><i class="fa-solid fa-basket-shopping"></i></b-nav-item>
          </router-link>

          <router-link to="/user">
            <b-nav-item><i class="fa-solid fa-user"></i></b-nav-item>
          </router-link>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
