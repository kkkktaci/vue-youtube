<template>
  <div class="header-container">
    <Menu></Menu>
    <SearchBox></SearchBox>
    <Profile></Profile>
  </div>
</template>

<script setup>
import Menu from './Menu.vue'
import SearchBox from './SearchBox.vue'
import Profile from './Profile.vue'
</script>

<style scoped>
  .header-container {
    height: var(--v-top-bar-height);
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: var(--v-primary-color);
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>