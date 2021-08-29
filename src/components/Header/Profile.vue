<template>
  <div class="end">
    <div class="avatar"></div>
    <div class="buttons">
      <TopBarItem class="top-bar-item" svgName="create"></TopBarItem>
      <TopBarItem class="top-bar-item" svgName="applications"></TopBarItem>
      <TopBarItem class="top-bar-item" svgName="notification"></TopBarItem>
    </div>
  </div>
</template>

<script>
import TopBarItem from './TopBarItem.vue'

export default {
  components: {
    TopBarItem
  }
}
</script>

<style scoped>
  .end {
    display: flex;
    flex-direction: row-reverse;
    flex: none;
    align-items: center;
    padding-right: 24px;
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--v-icon-color);
  }
  .buttons {
    margin-right: 8px;
  }
  .top-bar-item {
    margin-right: 18px;
  }
</style>