<template>
  <div class="drawer-item-container ">
    <div class="drawer-item-icon-container">
      <slot></slot>
    </div>
    <span class="drawer-item-title">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>

<style scoped>
  .drawer-item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 24px;
    height: var(--v-app-drawer-item-height);
    color: var(--v-text-primary);
  }
  .drawer-item-icon-container {
    width: 24px;
    height: 24px;
    margin-right: 24px;
  }
  .drawer-item-container:hover {
    background-color: var(--v-drawer-item-active);
  }
</style>