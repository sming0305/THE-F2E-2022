<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      :backgroundColor="backgroundColor"
      :opacity="opacity"
      :lock-scroll="true"
    >
      <template #default>
        <div class="background">
          <div class="loading__box" style="opacity: 0">
            <div>
              <CharacterComponent
                class="z-18"
                style="max-width: 232px; max-height: 162px"
              ></CharacterComponent>
              <div
                class="loading__bar rounded-5 border border-2 border-primary position-relative bg-secondary"
                style="width: 335px; height: 16px"
              >
                <div class="progress__bar position-absolute h-100 rounded-5 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import CharacterComponent from './CharacterComponent.vue'
import { gsap } from 'gsap'

export default {
  props: ['loadingTime'],
  data() {
    return {
      isLoading: false,
      fullPage: true,
      backgroundColor: '#FFC37D',
      opacity: 1
    }
  },
  components: {
    Loading,
    CharacterComponent
  },
  methods: {
    loading() {
      this.isLoading = true

      const loadingTl = gsap.timeline({
        ease: 'power1.inOut',
        onComplete: () => {
            this.isLoading = false
        }
      })
      loadingTl
        .to('.loading__box', { opacity: 1, duration: 1.5 })
        .to('.progress__bar', { width: '100%', duration: this.loadingTime })
        .to('.loading__box', { opacity: 0 })
    }
  },
  mounted() {
    this.loading()
  }
}
</script>

