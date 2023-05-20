<template>
  <LoginComponent />

  <div class="container position-relative vh-100">
    <img src="../assets/images/main/start.png" alt="" class="position-absolute">
    <img src="../assets/images/character/character_f2e.gif" alt="" />
    <img src="../assets/images/character/character_ui.gif" alt="" />
    <img src="../assets/images/character/character_team.gif" alt="" />
    <img src="../assets/images/main/road.png" alt=""/>
  </div>
  <JoinButtonComponent
    :textP="'JOIN'"
    :finger="true"
    :mobileHidden="true"
    class="position-fixed"
    style="bottom: 20px; right: 20px"
  ></JoinButtonComponent>
  <MapComponent />
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'
import JoinButtonComponent from '@/components/JoinButtonComponent.vue'
import MapComponent from '@/components/MapComponent.vue'

export default {
  components: {
    LoginComponent,
    JoinButtonComponent,
    MapComponent
  }
}
</script>
