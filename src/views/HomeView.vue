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
          src="/images/main/start.png"
          alt="startLine"
          class="z--6"
          style="object-fit: contain"
        />
      </div>
      <div class="position-absolute cloud__left z--12" ref="cloudLeft" data-sectionNum="1">
        <img src="/images/bg/bg_decorate_01.png" alt="cloud" />
      </div>
      <div class="position-absolute cloud__right z--12" ref="cloudRight" data-sectionNum="1">
        <img src="/images/bg/bg_decorate_05.png" alt="cloud" />
      </div>
      <div class="d-flex justify-content-center" ref="sectionTextArea" data-sectionNum="1">
        <div class="d-flex flex-column pt-5" style="max-width: 1175px">
          <div class="ps-6">
            <div class="mt-7 d-lg-none d-block mb-8 mx-auto" style="width: 253px; height: 189px">
              <img src="/images/logo/logo.png" alt="TheF2eLogo" />
            </div>
          </div>
          <div class="mt-7 d-none d-lg-block mx-auto" style="width: 680px; height: 236.03px">
            <img src="/images/logo/logo_text.png" alt="TheF2eLogo-text" />
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
            <img src="/images/main/road.png" class="z-6" alt="road" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section ref="section2Box" data-sectionNum="2" style="overflow: hidden">
    <sectionTitleComponent :title="'你是否也有以下困擾？'" :section-Num="2"></sectionTitleComponent>
    <div class="container">
      <div class="pt-20">
        <ul
          class="d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-highlight"
        >
          <li class="me-10" ref="question1" data-sectionNum="2">
            <H4 class="mb-2">羨慕別人的酷酷網頁動畫？</H4>
            <img
              src="/images/main/question_1.png"
              alt="question1"
              class="d-none d-lg-block"
            />
            <img
              src="/images/main/question_1_m.png"
              alt="question1"
              class="d-block d-lg-none"
              style="max-width: 335px; height: 262px"
            />
          </li>
          <li class="me-10" ref="question2" data-sectionNum="2">
            <H4 class="mb-2">滿足不了同事的許願？</H4>
            <img
              class="d-none d-lg-block"
              src="/images/main/question_2.png"
              alt="question2"
            />
            <img
              class="d-block d-lg-none"
              src="/images/main/question_2.png"
              alt="question2"
              style="max-width: 335px; height: 262px"
            />
          </li>
          <li ref="question3" data-sectionNum="2">
            <H4 class="mb-2">動畫技能樹太雜無從下手？</H4>
            <img
              src="/images/main/question_3.png"
              alt="question3"
              class="d-none d-lg-block"
            />
            <img
              src="/images/main/question_3_m.png"
              alt="question3"
              class="d-block d-lg-none"
              style="max-width: 335px; height: 262px"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section ref="section3Box" data-sectionNum="3" style="overflow: hidden" class="pb-20">
    <div class="pt-20">
      <sectionTitleComponent
        :title="'本屆主題：互動式網頁設計'"
        :subtitle="'以下兩個角色進行攜手合作'"
        :section-Num="3"
      ></sectionTitleComponent>
    </div>
    <div class="container">
      <ul class="row offset-lg-1" ref="section3List" data-sectionNum="3">
        <li
          class="col-lg-3 ms-lg-12 me-lg-30 d-flex justify-content-center d-lg-block"
          ref="item1"
          data-sectionNum="3"
        >
          <JoinButtonComponent
            :link="'https://2022.thef2e.com/signup'"
            :finger="false"
            :textH4="'前端工程師'"
          ></JoinButtonComponent>
          <div class="d-block d-lg-none" style="max-width: 157px; max-height: 270px">
            <img src="/images/character/character_f2e.png" alt="character_f2e" />
          </div>
        </li>
        <li
          class="col-lg-3 me-lg-30 d-flex justify-content-center d-lg-block"
          ref="item2"
          data-sectionNum="3"
        >
          <div class="d-block d-lg-none" style="max-width: 157px; max-height: 255px">
            <img src="/images/character/character_ui.png" alt="character_ui" />
          </div>
          <JoinButtonComponent
            :link="'https://2022.thef2e.com/signup'"
            :finger="false"
            :textH4="'UI設計師'"
          ></JoinButtonComponent>
        </li>
        <li
          class="col-lg-3 d-flex justify-content-center d-lg-block"
          ref="item3"
          data-sectionNum="3"
        >
          <JoinButtonComponent
            :link="'https://2022.thef2e.com/signup'"
            :finger="false"
            :textH4="'團體組(UI+前端)'"
          ></JoinButtonComponent>
          <div class="d-block d-lg-none" style="max-width: 158px; max-height: 238px">
            <img src="/images/character/character_team.png" alt="character_team" />
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section ref="section4Box" data-sectionNum="4">
    <sectionTitleComponent
      :title="'年度最強合作，三大主題來襲'"
      :subtitle="'各路廠商強強聯手'"
      :subtitle2="'共同設計出接地氣的網頁互動挑戰關卡'"
      :section-Num="4"
    ></sectionTitleComponent>
    <div class="container">
      <ul class="mb-30 mb-lg-0">
        <li class="d-block d-lg-flex mb-20 mb-lg-0" ref="week1Item" data-sectionNum="4">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <img
              src="/images/main/week_1.png"
              alt="dateLineWeek1"
              class="section4Img me-0 me-lg-20"
            />
            <div class="d-flex d-lg-block flex-column align-items-center">
              <h2 class="text-highlight">WEEK 1</h2>
              <h3 class="text-primary mb-6">The F2E 活動網站設計</h3>
              <div class="d-flex flex-column align-items-center flex-lg-row mb-6">
                <p
                  class="text-secondary--dark px-5 py-1 rounded-5 border-2 border border-secondary--dark me-0 me-lg-5 mb-8 mb-lg-0"
                >
                  Parallax Scrolling
                </p>
                <p
                  class="text-secondary--dark px-5 py-1 rounded-5 border-2 border border-secondary--dark mb-2 mb-lg-0"
                >
                  #版塊設計
                </p>
              </div>
              <a
                href="https://2022.thef2e.com/news/week1"
                target="_blank"
                class="text-white bg-secondary--dark px-6 py-2 rounded-5 fw-normal fw-normal"
                >查看關卡細節</a
              >
            </div>
          </div>
        </li>
        <li
          class="d-block d-lg-flex justify-content-end mb-20 mb-lg-0"
          ref="week2Item"
          data-sectionNum="4"
        >
          <div class="d-flex flex-column flex-lg-row-reverse align-items-center">
            <img src="/images/main/week_2.png" alt="dateLineWeek2" class="section4Img" />
            <div>
              <h2 class="text-highlight text-center text-lg-end">WEEK 2</h2>
              <h3 class="text-primary mb-6">今晚，我想來點點簽</h3>
              <div
                class="d-flex flex-column align-items-center flex-lg-row justify-content-end mb-6"
              >
                <p
                  class="text-secondary--dark px-5 py-1 rounded-5 border-2 border border-secondary--dark me-0 me-lg-5 mb-8 mb-lg-0"
                >
                  Canvas
                </p>
                <p
                  class="text-secondary--dark px-5 py-1 rounded-5 border-2 border border-secondary--dark mb-2 mb-lg-0"
                >
                  #凱鈿行動科技
                </p>
              </div>
              <div class="d-flex justify-content-center justify-content-lg-end">
                <a
                  href="https://2022.thef2e.com/news/week2"
                  target="_blank"
                  class="text-white bg-secondary--dark px-6 py-2 rounded-5 fw-normal fw-normal"
                  >查看關卡細節</a
                >
              </div>
            </div>
          </div>
        </li>
        <li class="d-block d-lg-flex" ref="week3Item" data-sectionNum="4">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <img
              src="/images/main/week_3.png"
              alt="dateLineWeek3"
              class="section4Img me-0 me-lg-20"
            />
            <div class="d-flex d-lg-block flex-column align-items-center">
              <h2 class="text-highlight">WEEK 3</h2>
              <h3 class="text-primary mb-6">Scrum 新手村</h3>
              <div class="d-flex flex-column align-items-center flex-lg-row mb-6">
                <p
                  class="text-secondary--dark px-5 py-1 rounded-5 border-2 border border-secondary--dark me-0 me-lg-5 mb-8 mb-lg-0"
                >
                  JS draggable
                </p>
                <p
                  class="text-secondary--dark px-5 py-1 rounded-5 border-2 border border-secondary--dark mb-2 mb-lg-0"
                >
                  #鈦坦科技
                </p>
              </div>
              <a
                href="https://2022.thef2e.com/news/week3"
                target="_blank"
                class="text-white bg-secondary--dark px-6 py-2 rounded-5 fw-normal fw-normal"
                >查看關卡細節</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section
    class="pt-lg-30"
    ref="section5Box"
    data-sectionNum="5"
    style="overflow: hidden; z-index: -12"
  >
    <sectionTitleComponent
      :title="'重要時程'"
      :section-Num="5"
      :mobileActive="'d-block d-lg-none'"
    ></sectionTitleComponent>
    <div class="container mt-lg-5 pt-lg-5">
      <ul
        class="d-flex flex-column align-items-center align-items-lg-start flex-lg-row justify-content-around mb-15"
      >
        <li class="bg-secondary z-6 pb-10" ref="dateInfo1" data-sectionNum="5">
          <JoinButtonComponent
            :link="'https://2022.thef2e.com/signup'"
            class="mb-7"
            :finger="true"
            :mobileHidden="false"
          ></JoinButtonComponent>
          <h2 class="text-highlight mb-6 text-center">SIGN UP</h2>
          <h4 class="bg-primary text-white rounded-5 text-center mb-7 py-4 px-14">10/13 - 11/6</h4>
          <p class="text-secondary--dark text-center">截止前可修改報名組別</p>
        </li>
        <li class="pt-20 bg-secondary z-6" ref="dateInfo2" data-sectionNum="5">
          <img
            src="/images/main/date_start.png"
            class="mb-7 mx-auto d-block"
            alt="date_start"
            style="width: 140px; height: 108px"
          />
          <h2 class="text-highlight mb-6 text-center">START</h2>
          <h4 class="bg-primary text-white rounded-5 text-center mb-7 py-4 px-14">10/31 - 11/28</h4>
          <p class="text-secondary--dark text-center mb-3">10/31(一) UI、團體組開賽</p>
          <p class="text-secondary--dark text-center">11/7(一) 前端組開賽</p>
        </li>
        <li class="pt-20 bg-secondary z-6" ref="dateInfo3" data-sectionNum="5">
          <img
            src="/images/main/date_upload.png"
            class="mb-7 mx-auto d-block"
            alt="date_upload"
            style="width: 140px; height: 108px"
          />
          <h2 class="text-highlight mb-6 text-center">UPLOAD</h2>
          <h4 class="bg-primary text-white rounded-5 text-center mb-7 py-4 px-14">10/31 - 11/28</h4>
          <p class="text-secondary--dark text-center mb-3">依賽程登錄作品</p>
          <p class="text-highlight text-center">額外競賽： 主題豐厚獎金等著你</p>
        </li>
      </ul>
      <div class="d-none d-lg-block" ref="dateLineBox" data-sectionNum="5">
        <div class="d-flex justify-content-around position-relative" style="height: 1px">
          <img
            class="position-absolute"
            src="/images/main/date_weekLine.png"
            alt="date_weekLine"
            style="max-width: 32px; max-height: 140px; top: -80px; left: 15%"
            ref="weekLine1"
            data-sectionNum="5"
          />
          <img
            class="position-absolute"
            src="/images/main/date_weekLine.png"
            alt="date_weekLine"
            style="max-width: 32px; max-height: 140px; top: -120px"
            ref="weekLine2"
            data-sectionNum="5"
          />
          <img
            class="position-absolute"
            src="/images/main/date_weekLine.png"
            alt="date_weekLine"
            style="max-width: 32px; max-height: 140px; top: -80px; right: 15%"
            ref="weekLine3"
            data-sectionNum="5"
          />
        </div>
        <div style="max-width: 1440px" ref="dateLine" data-sectionNum="5" class="position-relative">
          <div
            class="position-absolute h-100 w-100 bg-secondary z-6"
            ref="dateLineShadow"
            data-sectionNum="5"
          ></div>
          <img src="/images/main/date_line.png" alt="date_line" />
        </div>
      </div>
    </div>
  </section>
  <section ref="section6Box" data-sectionNum="6" style="overflow: hidden">
    <div class="container pt-30">
      <div class="pt-30 position-relative">
        <img
          src="/images/bg/bg_decorate_03.png"
          alt="Cloud"
          class="position-absolute d-none d-lg-block"
          style="width: 368px; height: 178px; left: -50%; top: 140%"
          ref="leftCloud"
          data-sectionNum="6"
        />

        <h2 class="text-highlight text-center pt-20" ref="title" data-sectionNum="6">
          區區修煉已經無法滿足了嗎？
        </h2>
        <img
          src="/images/bg/bg_decorate_07.png"
          alt="Cloud"
          class="position-absolute d-none d-lg-block"
          style="width: 450px; height: 333px; right: -50%"
          ref="rightCloud"
          data-sectionNum="6"
        />
      </div>
    </div>
  </section>
  <section ref="section7Box" data-sectionNum="7" style="overflow: hidden" class="pt-5 pb-20">
    <sectionTitleComponent :title="'還有比賽等著你！'" :section-Num="7"></sectionTitleComponent>
    <div class="container">
      <div
        class="d-flex flex-column flex-lg-row align-items-center"
        ref="infoBox"
        data-sectionNum="7"
      >
        <div
          class="me-lg-30 position-relative mb-12 mb-lg-0"
          style="max-width: 375px; height: 375px"
        >
          <img src="/images/main/award.png" alt="award" />
          <img
            src="/images/main/award_light.png"
            alt="award_light"
            class="position-absolute"
            style="left: 0; z-index: -6"
            ref="light"
            data-sectionNum="7"
          />
        </div>
        <ul>
          <li class="mb-12">
            <h4 class="text-highlight mb-12">評審機制</h4>
            <ul class="text-primary fw-normal">
              <li>初選： 將由六角學院前端、UI 評審進行第一波篩選。</li>
              <li>
                決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                由評審進行直播公布名單！
              </li>
            </ul>
          </li>
          <li>
            <h4 class="text-highlight mb-12">獎項</h4>
            <ul class="text-primary fw-normal">
              <li>1. 初選佳作 共六十位 數位獎狀</li>
              <li>
                2. 個人企業獎 共六位 <span class="text-highlight fw-bold">NTD 3,000 /位</span>
              </li>
              <li>
                3. 團體企業獎 共三組 <span class="text-highlight fw-bold">NTD 10,000 /組</span>
              </li>
              <li>4. 以上皆提供完賽數位獎狀</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section ref="section8Box" data-sectionNum="8" style="overflow: hidden" class="pt-5">
    <sectionTitleComponent :title="'贊助單位'" :section-Num="8"></sectionTitleComponent>
    <div class="container">
      <ul
        class="d-flex flex-column flex-lg-row justify-content-between align-items-center mx-auto"
        style="max-width: 1157px"
        ref="sponsorList"
        data-sectionNum="8"
      >
        <li class="mb-20" ref="sponsor1" data-sectionNum="8">
          <SponsorButtonComponent
            :sponsor="'#版塊設計'"
            :sponsorLinkUrl="'https://blockstudio.tw/'"
            :sponsorImgUrl="'/images/main/logo_blockstudio.png'"
          ></SponsorButtonComponent>
        </li>
        <li class="mb-20" ref="sponsor2" data-sectionNum="8">
          <SponsorButtonComponent
            :sponsor="'#鈦坦科技'"
            :sponsorLinkUrl="'https://titansoft.com/tw'"
            :sponsorImgUrl="'/images/main/logo_titansoft.png'"
          ></SponsorButtonComponent>
        </li>
        <li class="mb-20" ref="sponsor3" data-sectionNum="8">
          <SponsorButtonComponent
            :sponsor="'#凱鈿科技'"
            :sponsorLinkUrl="'https://www.kdanmobile.com/zh-tw'"
            :sponsorImgUrl="'/images/main/logo_kdanmobile.png'"
          ></SponsorButtonComponent>
        </li>
      </ul>
    </div>
  </section>
  <section ref="section9Box" data-sectionNum="9" style="overflow: hidden" class="d-none d-lg-block">
    <div class="position-relative z-18">
      <div class="container" data-sectionNum="9">
        <div class="position-relative">
          <img
            src="/images/bg/bg_decorate_01.png"
            alt="cloud"
            class="position-absolute cloud__left__end d-none d-lg-block"
            ref="cloudLeftEnd"
            data-sectionNum="9"
          />
          <div>
            <img
              src="/images/main/finish.png"
              alt="finishLine"
              ref="finish"
              data-sectionNum="9"
              style="opacity: 0; transform: scale(2)"
            />
          </div>
          <img
            src="/images/bg/bg_decorate_05.png"
            alt="cloud"
            class="position-absolute cloud__right__end d-none d-lg-block"
            ref="cloudRightEnd"
            data-sectionNum="9"
          />
        </div>
      </div>
      <div class="position-absolute finishLineBox d-flex z-18">
        <div>
          <img
            src="/images/main/finishLine_l.png"
            ref="finishLineLeft"
            data-sectionNum="9"
          />
        </div>
        <div>
          <img
            src="/images/main/finishLine_r.png"
            ref="finishLineRight"
            data-sectionNum="9"
          />
        </div>
      </div>
    </div>
  </section>
  <section ref="section10Box" data-sectionNum="10" class="vh-100">
    <div class="container h-100">
      <div class="d-flex h-100 align-items-center justify-content-center">
        <div ref="endBlock" data-sectionNum="10">
          <img src="/images/logo/logo.png" alt="logo" class="endLogo mb-5" />
          <JoinButtonComponent
            :finger="true"
            :size1="true"
            :textH2="'立即報名'"
            :mobileHidden="false"
            :link="'https://2022.thef2e.com/signup'"
          ></JoinButtonComponent>
        </div>
      </div>
    </div>
  </section>
  <CharacterComponent class="fixed-bottom"></CharacterComponent>
  <TrafficLightComponent />
  <div ref="buttonEndHidden" data-sectionNum="10">
    <JoinButtonComponent
      :link="'https://2022.thef2e.com/signup'"
      :textP="'JOIN'"
      :size2="true"
      :finger="true"
      :mobileHidden="false"
      class="position-fixed z-6"
      style="bottom: 20px; right: 20px"
    ></JoinButtonComponent>
  </div>
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
import SponsorButtonComponent from '../components/SponsorButtonComponent.vue'

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
    sectionTitleComponent,
    SponsorButtonComponent
  },
  data() {
    return {
      windowWidth: 0
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

  &__end {
    @media (min-width: 992px) {
      width: 430px;
      height: 280px;
      left: -55%;
      top: 55%;
    }
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

  &__end {
    @media (min-width: 992px) {
      width: 485px;
      height: 255px;
      right: -55%;
      top: 55%;
    }
  }
}

.section4Img {
  width: 200px;
  height: 135px;

  @media (min-width: 992px) {
    width: 280px;
    height: 190px;
  }
}

.finishLineBox {
  top: 66%;
}

.endLogo {
  width: 226px;
  height: 169px;

  @media (min-width: 992px) {
    width: 520px;
    height: 387.15px;
  }
}
</style>
