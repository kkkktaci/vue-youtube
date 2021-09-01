<template>
  <div class="center">
    <div class="search-box">
      <form class="search-form" action='/results'>
        <input class="search-input" placeholder="搜索" />
        <button class="search-button">
          <SvgIcon class="search-button-icon" name="search" />
        </button>
      </form>
    </div>
    <button class="button mini-search">
      <SvgIcon class="mini-search-icon" name="search" />
    </button>
  </div>
</template>

<script setup>
import SvgIcon from '@components/SvgIcon.vue'
</script>

<style scoped>
  .center {
    display: flex;
    flex-direction: row;
    flex: 0 1 var(--v-search-box-width);
    justify-content: center;
    position: relative;
    min-width: 0;
    height: var(--v-search-box-height);
    padding-left: 20px;
    box-sizing: border-box;
  }
  .search-box {
    display: flex;
    flex: 1;
    padding-left: 6px;
    box-sizing: border-box;
    background-color: var(--v-search-box-background);
    border-radius: 2px;
    border: 1px solid var(--v-search-box-border-color);
  }
  .search-form {
    display: flex;
    flex: 1;
  }
  .search-input {
    flex: 1;
    color: var(--v-icon-color);
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .search-button {
    width: 65px;
    background-color: var(--v-search-box-border-color);
    border: none;
    cursor: pointer;
  }
  .search-button-icon {
    width: 24px;
    height: 24px;
    fill: var(--v-search-box-button-icon-color);
  }
  .mini-search {
    display: none;
    margin-right: 8px;
  }
  .mini-search-icon {
    fill: var(--v-icon-color)
  }

  @media screen and (max-width: 680px) {
    .search-box {
      display: none;
    }
    .mini-search {
      display: block;
      position: absolute;
      right: 0;
    }
  }
</style>