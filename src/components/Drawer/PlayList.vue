<template>
  <Collapse :data="playList" />
</template>

<script>
import Collapse from './Collapse.vue'
export default {
  components: {
    Collapse
  },
  setup() {
    // TODO: get data from api
    const playList = [{ id: 1, title: 'Cel Shader' }, { id: 2, title: 'Flutter' }, { id: 3, title: 'Gaming' }]

    return {
      playList
    }
  }
}
</script>
