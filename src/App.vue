<script setup>
import Navbar from "./components/Navbar.vue";
import Imagerow from "./components/Imagerow.vue";
</script>

<template>
  <Navbar style="width: 100%; z-index: 9; margin-top: -10px; position: fixed" />
  <Imagerow />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
