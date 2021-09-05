<template>
  <div class="mini-drawer">
    <MiniItem title="首页" svgName="home"></MiniItem>
    <MiniItem title="探索" svgName="discover"></MiniItem>
    <MiniItem title="订阅内容" svgName="subscription"></MiniItem>
    <MiniItem title="媒体库" svgName="media"></MiniItem>
  </div>
</template>

<script setup>
import MiniItem from './MiniDrawerItem.vue'
</script>

<style scoped>
  .mini-drawer {
    display: none;
    width: 72px;
    height: 100%;
    background-color: var(--v-primary-color);
    z-index: 3;
    overflow-y: scroll;
  }
  @media screen and (max-width: 1330px) {
    .mini-drawer {
      display: block;
    }
  }
</style>
