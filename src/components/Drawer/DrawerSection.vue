<template>
  <div class="drawer-section-container">
    <span v-if="title" class="title drawer-section-title">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>


<style scoped>
  .drawer-section-container {
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid var(--v-drawer-divid-color);
  }
  .title {
    padding: 0 24px;
    color: var(--v-text-secondary);
  }
</style>