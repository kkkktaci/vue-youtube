<template>
  <div class="drawer">
    <Section>
      <Item title="首页" svgName="home"></Item>
      <Item title="探索" svgName="discover"></Item>
      <Item title="订阅内容" svgName="subscription"></Item>
    </Section>
    <Section>
      <Item title="媒体库" svgName="media"></Item>
      <Item title="历史记录" svgName="history"></Item>
      <Item title="您的视频" svgName="videos"></Item>
      <Item title="稍后观看" svgName="later"></Item>
      <Item title="顶过的视频" svgName="like"></Item>
      <PlayList />
    </Section>
    <Section title="订阅内容">
      <Subscription />
    </Section>
  </div>
</template>

<script setup>
import Section from './DrawerSection.vue'
import Item from './DrawerItem.vue'
import PlayList from './PlayList.vue'
import Subscription from './Subscription.vue'
</script>

<style scoped>
  .drawer {
    display: block;
    width: var(--v-app-drawer-width);
    height: 100%;
    background-color: var(--v-primary-color);
    z-index: 3;
    overflow-y: scroll;
  }
  @media screen and (max-width: 1330px) {
    .drawer {
      display: none;
    }
  }
</style>
