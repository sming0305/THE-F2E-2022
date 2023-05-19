<template>
  <OffcanvasComponent />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import OffcanvasComponent from './components/OffcanvasComponent.vue'

export default {
  components: {
    RouterView,
    OffcanvasComponent
  }
}
</script>

<style></style>
