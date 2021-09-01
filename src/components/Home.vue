<template>
  <Header />
  <div class="content">
    <Drawer />
    <MainPage />
  </div>
</template>

<script setup>
import Header from './Header/Header.vue'
import Drawer from './Drawer/Drawer.vue'
import MainPage from './MainPage.vue'
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: row;
    margin-top: var(--v-top-bar-height);
    height: calc(100vh - var(--v-top-bar-height));
  }
</style>
