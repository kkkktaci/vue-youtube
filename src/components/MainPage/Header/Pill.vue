<template>
  <div
    v-if="title"
    class="filter-container drawer-item-title"
    :class="{ selected: isSelected }"
    @click="onPillClick"
  >
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  onSelected: Function,
  isSelected: {
    type: Boolean,
    default: false
  }
})

const onPillClick = () => {
  props.onSelected && props.onSelected(props.title)
}
</script>

<style scoped>
  .filter-container {
    box-sizing: border-box;
    padding: 8px 12px;
    height: 32px;
    border-radius: 16px;
    color: var(--v-text-pill-color);
    background-color: var(--v-pill-background);
    border: 1px solid var(--v-drawer-divid-color);
    margin-right: 12px;
    white-space: nowrap;
    cursor: pointer;
  }
  .selected {
    color: var(--v-text-pill-selected-color);
    background-color: var(--v-pill-select-background);
  }
</style>
