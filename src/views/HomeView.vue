<template>
  <LoginComponent />

  <div class="container position-relative vh-100">
    <div class="position-absolute d-none d-lg-flex align-items-end h-100">
      <img src="../assets/images/main/start.png" alt="" class="z--6" style="object-fit: contain" />
    </div>
    <div class="d-flex justify-content-center h-100">
      <div class="d-flex flex-column justify-content-end" style="max-width: 1175px">
        <ul
          class="d-flex flex-column flex-lg-row list-unstyled justify-content-around align-items-center mb-20 mb-lg-0"
        >
          <li class="mb-8">
            <h5 class="text-primary text-center mb-4">前端工程師</h5>
            <div class="d-flex align-items-center bg-primary justify-content-center rounded-5 ps-8 pe-12 ">
              <UsersSvgComponent />
              <p class="text-white fs-12">920</p>
            </div>
          </li>
          <li class="mb-8">
            <h5 class="text-primary text-center mb-4">UI設計師</h5>
            <div class="d-flex align-items-center bg-primary justify-content-center rounded-5 ps-8 pe-12">
              <UsersSvgComponent />
              <p class="text-white fs-12">920</p>
            </div>
          </li>
          <li class="mb-8">
            <h5 class="text-primary text-center mb-4">團體組</h5>
            <div class="d-flex align-items-center bg-primary justify-content-center rounded-5 ps-8 pe-12">
              <UsersSvgComponent />
              <p class="text-white fs-12">920</p>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-center align-items-end character">
          <div class="character--size1 z-12">
            <img src="../assets/images/character/character_f2e.gif" alt="" />
          </div>
          <div class="character--size2 z-12">
            <img src="../assets/images/character/character_ui.gif" alt="" />
          </div>
          <div class="character--size3 z-12">
            <img src="../assets/images/character/character_team.gif" alt="" />
          </div>
        </div>
        <img src="../assets/images/main/road.png" class="z-6" alt="" />
      </div>
    </div>
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
import UsersSvgComponent from '@/components/UsersSvgComponent.vue'

export default {
  components: {
    LoginComponent,
    JoinButtonComponent,
    MapComponent,
    UsersSvgComponent
  }
}
</script>

<style lang="scss" scoped>
.character {
  margin-bottom: -10%;

  &--size1 {
    max-height: 591px;
    max-width: 351px;
  }

  &--size2 {
    max-width: 370px;
    max-height: 591px;
  }

  &--size3 {
    max-width: 351px;
    max-height: 527px;
  }
}
</style>
