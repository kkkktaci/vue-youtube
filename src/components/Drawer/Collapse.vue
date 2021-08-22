<template>
  <div class="collapse-container">
    <div v-if="shouldRenderShowData">
      <Item
        v-for="item in showData"
        :key="item.id"
        :title="item.title"
      >
        <img v-if="!item.image" v-svg-inline src="@assets/play-list.svg" class="default-image" />
      </Item>
    </div>
    <div v-show="shouldRenderFoldedData">
      <Item
        v-for="item in foldedData"
        :key="item.id"
        :title="item.title"
      >
        <img v-if="!item.image" v-svg-inline src="@assets/play-list.svg" class="default-image" />
      </Item>
    </div>
    <Item :title="buttonTitle" @click="toggle" v-if="foldedData.length > 0">
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
  props: {
    data: {
      type: Array,
      required: true
    },
    showCount: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0
      }
    }
  },
  setup(props) {
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

    const showData = computed(() => {
      if (props.showCount === 0) return []
      return props.data.slice(0, props.showCount)
    })

    const foldedData = computed(() => {
      return props.data.slice(props.showCount)
    })

    const shouldRenderShowData = computed(() => {
      return showData.value.length > 0
    })

    const shouldRenderFoldedData = computed(() => {
      return isExpand.value && foldedData.value.length > 0
    })

    return {
      buttonTitle,
      iconStyle,
      toggle,
      shouldRenderShowData,
      shouldRenderFoldedData,
      showData,
      foldedData
    }
  }
}
</script>

<style scoped>
  .collapse-container {
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
  .default-image {
    fill: var(--v-icon-inactive);
    stroke: var(--v-icon-inactive);
  }
</style>