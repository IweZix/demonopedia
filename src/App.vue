<script setup lang="ts">
import NavbarComponent from '../src/components/navbar/NavbarComponent.vue';
import FooterComponent from '../src/components/footer/FooterComponent.vue';
</script>

<template>
  <NavbarComponent />
  <router-view />
  <FooterComponent />
</template>

<style scoped></style>
