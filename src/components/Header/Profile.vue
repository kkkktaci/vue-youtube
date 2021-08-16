<template>
  <div class="end">
    <div class="avatar"></div>
    <div class="buttons">
      <TopBarItem class="top-bar-item">
        <img class="button-icon" v-svg-inline src="@assets/create.svg" />
      </TopBarItem>
      <TopBarItem class="top-bar-item">
        <img class="button-icon" v-svg-inline src="@assets/applications.svg" />
      </TopBarItem>
      <TopBarItem class="top-bar-item">
        <img class="button-icon" v-svg-inline src="@assets/notification.svg" />
      </TopBarItem>
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
  .button-icon {
    fill: var(--v-icon-color);
  }
  .top-bar-item {
    margin-right: 18px;
  }
</style>