<template>
  <div class="play-list-container" @click="toggle">
    <div v-show="isExpand">
      <Item
        v-for="item in playList"
        :key="item.id"
        :title="item.title"
      >
        <img v-svg-inline src="@assets/play-list.svg" class="play-list-icon" />
      </Item>
    </div>
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
    // TODO: get data from api
    const playList = [{ id: 1, title: 'Cel Shader' }, { id: 2, title: 'Flutter' }, { id: 3, title: 'Gaming' }]

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
      toggle,
      playList
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
  .play-list-icon {
    fill: var(--v-icon-inactive);
    stroke: var(--v-icon-inactive);
  }
</style>