<template>
  <div class="start">
    <div class="guide-button">
      <button class="menu-button">
        <SvgIcon class="menu-icon" name="menu" />
      </button>
    </div>
    <a class="logo-container">
      <div class="logo">
        <SvgIcon class="logo-icon" :width="90" :height="20" name="youtube-logo" />
      </div>
      <span class="country-code">HK</span>
    </a>
  </div>
</template>

<script>
import SvgIcon from '@components/SvgIcon.vue'

export default {
  components: { SvgIcon }
}
</script>

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