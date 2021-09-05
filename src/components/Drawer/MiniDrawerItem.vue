<template>
  <div class="mini-drawer-item-container">
    <div class="icon-container">
      <SvgIcon v-if="svgName" :name="svgName"></SvgIcon>
    </div>
    <span class="mini-drawer-item-title">{{ title }}</span>
  </div>
</template>

<script setup>
import SvgIcon from '@components/SvgIcon.vue'

defineProps({
  svgName: String,
  title: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
  .mini-drawer-item-container {
    width: 72px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--v-text-primary);
    cursor: pointer;
  }
  .icon-container {
    margin-bottom: 6px;
  }
  .mini-drawer-item-container:hover {
    background-color: var(--v-drawer-item-active);
  }
</style>
