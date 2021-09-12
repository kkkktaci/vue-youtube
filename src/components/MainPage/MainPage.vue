<template>
  <div class="main-page">
    <Header></Header>
    <Contents></Contents>
  </div>
</template>

<script setup>
import Header from './Header/Header.vue'
import Contents from './Contents.vue'
</script>

<style scoped>
  .main-page {
    flex: 1;
    background-color: var(--v-contents-background);
    overflow: auto;
  }
</style>