<template>
  <div class="position-fixed traffic__Box" ref="trafficBox">
    <p class="text-highlight fs-16 text-center me-10" ref="ready">READY?</p>
    <p class="text-highlight fs-16 text-center me-10" ref="go" style="display: none">GO!!</p>
    <div class="position-relative">
      <img src="../assets/images/main/ready_frame.png" alt="" class="z-6 position: inherit;" />
      <img
        src="../assets/images/main/ready_1.png"
        alt=""
        class="position-absolute traffic__Box__ready1"
        ref="trafficLightGreen"
      />
      <img
        src="../assets/images/main/ready_2.png"
        alt=""
        class="position-absolute traffic__Box__ready2"
        ref="trafficLightYellow"
      />
      <img
        src="../assets/images/main/ready_3.png"
        alt=""
        class="position-absolute traffic__Box__ready3"
        ref="trafficLightRed"
      />
    </div>
  </div>
</template>

<script>
import GSAPanimationStore from '../stores/GSAPanimationStore.js'
import { mapActions } from 'pinia'
export default {
  methods: {
    ...mapActions(GSAPanimationStore, ['getElement', 'handleScroll'])
  },
  mounted() {
    this.getElement(1, this.$refs)
  }
}
</script>

<style lang="scss" scoped>
.traffic__Box {
  right: 0;
  top: 533px;
  width: 110px;
  height: 47.13px;
  @media (min-width: 1200px) {
    top: 503px;
    width: 275px;
    height: 108px;
  }

  &__ready1 {
    top: 13px;
    right: 25px;
    width: 19px;
    height: 19px;
    @media (min-width: 1200px) {
      top: 34px;
      right: 64px;
      width: 46px;
      height: 46px;
    }
  }
  &__ready2 {
    top: 12px;
    right: 51px;
    width: 19px;
    height: 19px;
    @media (min-width: 1200px) {
      top: 32px;
      right: 128px;
      width: 46px;
      height: 46px;
    }
  }
  &__ready3 {
    top: 13px;
    right: 77px;
    width: 19px;
    height: 19px;
    @media (min-width: 1200px) {
      top: 31px;
      right: 194px;
      width: 46px;
      height: 46px;
    }
  }
}
</style>
