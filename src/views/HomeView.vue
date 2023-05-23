<template>
  <LoginComponent />
  <section class="overflow-hidden" style="width: 100%" ref="section1Box">
    <div class="container position-relative vh-100 mt-16 mt-lg-0">
      <div class="position-absolute d-none d-lg-flex align-items-end h-100" ref="startLine">
        <img
          src="../assets/images/main/start.png"
          alt=""
          class="z--6"
          style="object-fit: contain"
        />
      </div>
      <div class="position-absolute cloud__left z--12" ref="cloudLeft">
        <img src="../assets/images/bg/bg_decorate_01.png" alt="" />
      </div>
      <div class="position-absolute cloud__right z--12" ref="cloudRight">
        <img src="../assets/images/bg/bg_decorate_05.png" alt="" />
      </div>
      <div class="d-flex justify-content-center" ref="sectionTextArea">
        <div class="d-flex flex-column pt-5" style="max-width: 1175px">
          <div class="ps-6">
            <div class="mt-7 d-lg-none d-block mb-8 mx-auto" style="width: 253px; height: 189px">
              <img src="../assets/images/logo/logo.png" alt="" />
            </div>
          </div>
          <div class="mt-7 d-none d-lg-block mx-auto" style="width: 680px; height: 236.03px">
            <img src="../assets/images/logo/logo_text.png" alt="" />
          </div>
          <h1
            class="bg-highlight px-8 py-2 px-lg-20 py-lg-4 text-white text-center mb-10 mb-lg-24 mx-auto rounded-5"
            style="width: fit-content"
          >
            互動式網頁設計
          </h1>
          <ul ref="section1List"
            class="d-flex flex-column flex-lg-row list-unstyled justify-content-around align-items-center mb-20 mb-lg-0"
          >
            <li class="mb-8">
              <h5 class="text-primary text-center mb-4">前端工程師</h5>
              <div
                class="d-flex align-items-center bg-primary justify-content-center rounded-5 ps-8 pe-12"
              >
                <UsersSvgComponent />
                <p class="text-white fs-12">920</p>
              </div>
            </li>
            <li class="mb-8">
              <h5 class="text-primary text-center mb-4">UI設計師</h5>
              <div
                class="d-flex align-items-center bg-primary justify-content-center rounded-5 ps-8 pe-12"
              >
                <UsersSvgComponent />
                <p class="text-white fs-12">110</p>
              </div>
            </li>
            <li class="mb-8">
              <h5 class="text-primary text-center mb-4">團體組</h5>
              <div
                class="d-flex align-items-center bg-primary justify-content-center rounded-5 ps-8 pe-12"
              >
                <UsersSvgComponent />
                <p class="text-white fs-12">41</p>
              </div>
            </li>
          </ul>
          <div class="flex-grow-1" style="max-width: 1175px; visibility: hidden">
            <img src="../assets/images/main/road.png" class="z-6" alt="road" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section style="height: 100vh"></section>
  <CharacterComponent />
  <TrafficLightComponent />
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
import CharacterComponent from '../components/CharacterComponent.vue'
import TrafficLightComponent from '../components/TrafficLightComponent.vue'
import GSAPanimationStore from '../stores/GSAPanimationStore.js'
import { mapActions } from 'pinia'

export default {
  components: {
    LoginComponent,
    JoinButtonComponent,
    MapComponent,
    CharacterComponent,
    UsersSvgComponent,
    TrafficLightComponent
  },
  methods: {
    ...mapActions(GSAPanimationStore, ['getElement', 'animation'])
  },
  mounted() {
      this.getElement(1, this.$refs)
      this.animation()
  }
}
</script>

<style lang="scss" scoped>
.cloud__left {
  width: 113px;
  height: 73px;
  left: -5%;
  top: 45%;
  @media (min-width: 992px) {
    width: 430px;
    height: 280px;
    left: -5%;
    top: 45%;
  }
}

.cloud__right {
  width: 127px;
  height: 67px;
  right: -5%;
  top: 45%;
  @media (min-width: 992px) {
    width: 485px;
    height: 255px;
    right: -10%;
    top: 45%;
  }
}
</style>
