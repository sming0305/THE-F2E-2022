<template>
  <LoginComponent />
  <section class="overflow-hidden" style="width: 100%" ref="section1Box" data-sectionNum="1">
    <div class="container position-relative vh-100 pt-20 pt-lg-0">
      <div
        class="position-absolute d-none d-lg-flex align-items-end h-100"
        ref="startLine"
        data-sectionNum="1"
      >
        <img
          src="../assets/images/main/start.png"
          alt=""
          class="z--6"
          style="object-fit: contain"
        />
      </div>
      <div class="position-absolute cloud__left z--12" ref="cloudLeft" data-sectionNum="1">
        <img src="../assets/images/bg/bg_decorate_01.png" alt="" />
      </div>
      <div class="position-absolute cloud__right z--12" ref="cloudRight" data-sectionNum="1">
        <img src="../assets/images/bg/bg_decorate_05.png" alt="" />
      </div>
      <div class="d-flex justify-content-center" ref="sectionTextArea" data-sectionNum="1">
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
          <ul
            ref="section1List"
            data-sectionNum="1"
            class="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-20 mb-lg-0"
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
  <section ref="section2Box" data-sectionNum="2">
    <sectionTitleComponent :title="'你是否也有以下困擾？'" :section-Num="2"></sectionTitleComponent>
    <div class="container">
      <div class="pt-20">
        <ul class="d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-highlight">
          <li class="me-10" ref="question1" data-sectionNum="2">
            <H4 class="mb-2">羨慕別人的酷酷網頁動畫？</H4>
            <img src="../assets/images/main/question_1.png" alt="" class="d-none d-lg-block" />
            <img
              src="../assets/images/main/question_1_m.png"
              alt=""
              class="d-block d-lg-none"
              style="max-width: 335px; height: 262px"
            />
          </li>
          <li class="me-10" ref="question2" data-sectionNum="2">
            <H4 class="mb-2">滿足不了同事的許願？</H4>
            <img class="d-none d-lg-block" src="../assets/images/main/question_2.png" alt="" />
            <img
              class="d-block d-lg-none"
              src="../assets/images/main/question_2.png"
              alt=""
              style="max-width: 335px; height: 262px"
            />
          </li>
          <li ref="question3" data-sectionNum="2">
            <H4 class="mb-2">動畫技能樹太雜無從下手？</H4>
            <img src="../assets/images/main/question_3.png" alt="" class="d-none d-lg-block" />
            <img
              src="../assets/images/main/question_3_m.png"
              alt=""
              class="d-block d-lg-none"
              style="max-width: 335px; height: 262px"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="vh-100" ref="section3Box" data-sectionNum="3">
    <div class="pt-20">
      <sectionTitleComponent
        :title="'本屆主題：互動式網頁設計'"
        :subtitle="'以下兩個角色進行攜手合作'"
        :section-Num="3"
      ></sectionTitleComponent>
    </div>
    <div class="container">
      <ul class="row offset-lg-1" ref="section3List" data-sectionNum="3">
        <li class="col-lg-3 ms-lg-12 me-lg-30 d-flex justify-content-center d-lg-block">
          <JoinButtonComponent :finger="false" :textH4="'前端工程師'"></JoinButtonComponent>
          <div class="d-block d-lg-none" style="max-width: 157px; max-height: 270px">
            <img src="../assets/images/character/character_f2e.png" alt="" />
          </div>
        </li>
        <li class="col-lg-3 me-lg-30 d-flex justify-content-center d-lg-block">
          <div class="d-block d-lg-none" style="max-width: 157px; max-height: 255px">
            <img src="../assets/images/character/character_ui.png" alt="" />
          </div>
          <JoinButtonComponent :finger="false" :textH4="'UI設計師'"></JoinButtonComponent>
        </li>
        <li class="col-lg-3 d-flex justify-content-center d-lg-block">
          <JoinButtonComponent :finger="false" :textH4="'團體組(UI+前端)'"></JoinButtonComponent>
          <div class="d-block d-lg-none" style="max-width: 158px; max-height: 238px">
            <img src="../assets/images/character/character_team.png" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </section>
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
import CharacterComponent from '@/components/CharacterComponent.vue'
import TrafficLightComponent from '@/components/TrafficLightComponent.vue'
import sectionTitleComponent from '@/components/SectionTitleComponent.vue'

import GSAPanimationStore from '@/stores/GSAPanimationStore.js'
import { mapActions } from 'pinia'

export default {
  components: {
    LoginComponent,
    JoinButtonComponent,
    MapComponent,
    CharacterComponent,
    UsersSvgComponent,
    TrafficLightComponent,
    sectionTitleComponent
  },
  data() {
    return {
      windowWidth: 0,
      hasReloaded: false
    }
  },
  methods: {
    ...mapActions(GSAPanimationStore, [
      'getElement',
      'animation',
      'getWindowWidth',
      'killTimeline'
    ]),
    resizeHandler() {
      if (this.windowWidth > 992) {
        if (window.innerWidth <= 992) {
          location.reload()
        }
      } else if (this.windowWidth <= 992) {
        if (window.innerWidth >= 992) {
          location.reload()
        }
      }
    }
  },
  mounted() {
    this.getWindowWidth(window.innerWidth)
    this.getElement(this.$refs)
    this.animation()
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.resizeHandler)
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
