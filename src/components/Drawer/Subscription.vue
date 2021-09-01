<template>
  <Collapse :data="subscription" :showCount="2" />
</template>

<script setup>
import Collapse from './Collapse.vue'

// TODO: get data from api
  const subscription = [{ id: 1, title: 'Dani' }, { id: 2, title: 'Po chi' }, { id: 3, title: 'Sebastion Lague' }, { id: 4, title: 'PlayStation' }]
</script>
