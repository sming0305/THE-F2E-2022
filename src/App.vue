<template>
  <OffcanvasComponent />
  <LoadingComponent :loading-time="3"></LoadingComponent>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import OffcanvasComponent from './components/OffcanvasComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

export default {
  components: {
    RouterView,
    OffcanvasComponent,
    LoadingComponent
  }
}
</script>

<style></style>
