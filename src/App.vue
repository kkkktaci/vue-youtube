<template>
  <Home></Home>
</template>

<script setup>
import Home from './components/Home.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--v-main-color);
  display: block;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.button {
  width: var(--v-button-width);
  height: var(--v-button-height);
  padding: 8px;
  box-sizing: border-box;
  border: none;
  background: none;
  cursor: pointer;
}
</style>
