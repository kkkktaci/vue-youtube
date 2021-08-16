<template>
  <div class="start">
    <div class="guide-button">
      <button class="menu-button">
        <img class="menu-icon" v-svg-inline src="@assets/menu.svg" />
      </button>
    </div>
    <a class="logo-container">
      <div class="logo">
        <img class="logo-icon" v-svg-inline src="@assets/youtube-logo.svg" />
      </div>
      <span class="country-code">HK</span>
    </a>
  </div>
</template>

<style scoped>
  .start {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .guide-button {
    width: var(--v-button-with);
    height: var(--v-button-height);
    padding: 8px;
    display: inline-block;
    box-sizing: border-box;
  }
  .menu-button {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    vertical-align: middle;
    cursor: pointer;
  }
  .logo-container {
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
  .logo {
    width: 90px;
    height: 20px;
    padding: 0 14px;
  }
  .country-code {
    margin: -12px 0 0 -10px;
    color: #757575;
    font-size: 10px;
  }
  .menu-icon {
    stroke: var(--v-icon-color);
  }
  .logo-icon {
    fill: var(--v-icon-color);
  }
</style>