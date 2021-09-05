<template>
  <div class="header-container">
    <Pill :title="FILTER_ALL" :onSelected="onSelected" :isSelected="currentFilter === FILTER_ALL"></Pill>
    <Pill
      v-for="title in filters"
      :title="title"
      :onSelected="onSelected"
      :isSelected="currentFilter === title"
    ></Pill>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Pill from './Pill.vue'

const FILTER_ALL = '全部'

const currentFilter = ref(FILTER_ALL)

// TODO
const filters = ['音乐', '直播', '平台游戏', '卡通', '动作冒险游戏', '视觉艺术', '宠物']

const onSelected = value => {
  console.log('filter select', value)
  currentFilter.value = value
}
</script>

<style scoped>
  .header-container {
    /* height: 56px; */
    display: flex;
    overflow-y: scroll;
    padding: 12px 24px;
    background-color: var(--v-primary-color);
    border-top: 1px solid var(--v-drawer-divid-color);
    border-bottom: 1px solid var(--v-drawer-divid-color);
  }
</style>
