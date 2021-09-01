<template>
  <svg class="icon" aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 24
  },
})

const symbolId = computed(() => `#${props.name}`)
</script>

<style scoped>
  .icon {
    fill: var(--v-icon-inactive);
  }
</style>