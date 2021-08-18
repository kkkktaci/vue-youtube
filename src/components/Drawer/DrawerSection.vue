<template>
  <div class="drawer-section-container">
    <slot></slot>
  </div>
</template>

<style scoped>
  .drawer-section-container {
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid var(--v-drawer-divid-color);
  }
</style>