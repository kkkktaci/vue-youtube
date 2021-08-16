<template>
  <div class="drawer">
    <div class="content-container">drawer content</div>
  </div>
</template>

<style scoped>
  .drawer {
    width: var(--v-app-drawer-width);
    height: 100%;
    background-color: rosybrown;
    z-index: 3;
    overflow-y: scroll;
  }
  .content-container {
    /* width: 100% */
    width: 100px;
    /* test */
    height: 800px;
    background-color: sandybrown;
  }
</style>