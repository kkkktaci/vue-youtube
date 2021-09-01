<template>
  <div class="drawer-item-container ">
    <div class="drawer-item-icon-container">
      <slot><SvgIcon v-if="svgName" :name="svgName"></SvgIcon></slot>
    </div>
    <span class="drawer-item-title">
      {{ title }}
    </span>
  </div>
</template>

<script setup>
import SvgIcon from '@components/SvgIcon.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  svgName: {
    type: String,
    required: false
  }
})
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