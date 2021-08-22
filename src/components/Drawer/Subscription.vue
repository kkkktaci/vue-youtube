<template>
  <Collapse :data="subscription" :showCount="2" />
</template>

<script>
import Collapse from './Collapse.vue'
export default {
  components: {
    Collapse
  },
  setup() {
    // TODO: get data from api
    const subscription = [{ id: 1, title: 'Dani' }, { id: 2, title: 'Po chi' }, { id: 3, title: 'Sebastion Lague' }, { id: 4, title: 'PlayStation' }]

    return {
      subscription
    }
  }
}
</script>

