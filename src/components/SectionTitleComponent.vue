<template>
  <div
    class="mx-auto position-relative sectionTitleBox pb-5"
    :class="mobileActive"
    :ref="`section${sectionNum}Title`"
    :data-sectionNum="sectionNum"
  >
    <h2 class="text-primary text-center py-8 pb-15 px-lg-30 pt-lg-15 pb-20">{{ title }}</h2>
  </div>
  <h5
    class="text-center mb-15 text-secondary--dark"
    :ref="`section${sectionNum}Subtitle`"
    :data-sectionNum="sectionNum"
  >
    {{ subtitle }} <br />
    {{ subtitle2 }}
  </h5>
</template>

<script>
import GSAPanimationStore from '@/stores/GSAPanimationStore.js'
import { mapActions } from 'pinia'

export default {
  props: ['title', 'subtitle', 'sectionNum', 'subtitle2', 'mobileActive'],
  methods: {
    ...mapActions(GSAPanimationStore, ['getElement'])
  },
  mounted() {
    this.getElement(this.$refs)
  }
}
</script>

<style lang="scss" scoped>
.sectionTitleBox {
  background-image: url('src/assets/images/bg/bg_talking_c.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  @media (min-width: 992px) {
    background-image: url('src/assets/images/bg/bg_talking.png');
    width: fit-content;
  }
}
</style>
