<template>
  <button class="button">
    <SvgIcon class="button-icon" :name="svgName"></SvgIcon>
  </button>
</template>

<script setup>
import SvgIcon from '@components/SvgIcon.vue'

defineProps({
  svgName: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
  .button-icon {
    fill: var(--v-icon-color);
  }
</style>
