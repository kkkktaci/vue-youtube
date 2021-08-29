<template>
  <button class="button">
    <SvgIcon class="button-icon" :name="svgName"></SvgIcon>
  </button>
</template>

<script>
import SvgIcon from '@components/SvgIcon.vue'

export default {
  components: {
    SvgIcon,
  },
  props: {
    svgName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .button-icon {
    fill: var(--v-icon-color);
  }
</style>
