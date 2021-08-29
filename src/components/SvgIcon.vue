<template>
  <svg class="icon" aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
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
  },
  setup(props) {
    const symbolId = computed(() => `#${props.name}`)
    return { symbolId }
  },
})
</script>

<style scoped>
  .icon {
    fill: var(--v-icon-inactive);
  }
</style>