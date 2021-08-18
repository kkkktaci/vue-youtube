<template>
  <div class="play-list-container" @click="toggle">
    <Item :title="buttonTitle">
      <div :class="iconStyle">
        <img v-svg-inline src="@assets/arrow.svg" class="arrow-icon" />
      </div>
    </Item>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import Item from './DrawerItem.vue'
export default {
  components: {
    Item
  },
  setup() {
    const isExpand = ref(false)

    const toggle = () => {
      isExpand.value = !isExpand.value
    }

    const buttonTitle = computed(() => {
      return isExpand.value ? '隐藏部分内容' : '展开'
    })

    const iconStyle = computed(() => {
      return isExpand.value ? 'arrow-icon-expand' : 'arrow-icon-expand-not'
    })

    return {
      isExpand,
      buttonTitle,
      iconStyle,
      toggle
    }
  }
}
</script>

<style scoped>
  .play-list-container {
    cursor: pointer;
  }
  .arrow-icon {
    fill: var(--v-icon-inactive);
  }
  .arrow-icon-expand {
    width: 24px;
    height: 24px;
    transform: rotate(0deg);
  }
  .arrow-icon-expand-not {
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
  }
</style>