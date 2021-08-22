<template>
  <div class="drawer">
    <Section>
      <Item title="首页">
        <img class="drawer-item-icon" v-svg-inline src="@assets/home.svg" />
      </Item>
      <Item title="探索">
        <img class="drawer-item-icon" v-svg-inline src="@assets/discover.svg" />
      </Item>
      <Item title="订阅内容">
        <img class="drawer-item-icon" v-svg-inline src="@assets/subscription.svg" />
      </Item>
    </Section>
    <Section>
      <Item title="媒体库">
        <img class="drawer-item-icon" v-svg-inline src="@assets/media.svg" />
      </Item>
      <Item title="历史记录">
        <img class="drawer-item-icon" v-svg-inline src="@assets/history.svg" />
      </Item>
      <Item title="您的视频">
        <img class="drawer-item-icon" v-svg-inline src="@assets/videos.svg" />
      </Item>
      <Item title="稍后观看">
        <img class="drawer-item-icon" v-svg-inline src="@assets/later.svg" />
      </Item>
      <Item title="顶过的视频">
        <img class="drawer-item-icon" v-svg-inline src="@assets/like.svg" />
      </Item>
      <PlayList />
    </Section>
    <Section title="订阅内容">
      <Subscription />
    </Section>
  </div>
</template>

<script>
import Section from './DrawerSection.vue'
import Item from './DrawerItem.vue'
import PlayList from './PlayList.vue'
import Subscription from './Subscription.vue'

export default {
  components: {
    Section,
    Item,
    PlayList,
    Subscription
  }
}
</script>

<style scoped>
  .drawer {
    width: var(--v-app-drawer-width);
    height: 100%;
    background-color: var(--v-primary-color);
    z-index: 3;
    overflow-y: scroll;
  }
  .drawer-item-icon {
    fill: var(--v-icon-inactive)
  }
</style>