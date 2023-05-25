<template>
  <div class="position-fixed d-none d-xl-block" style="left: 30px; bottom: 20px">
    <div class="position-relative">
      <img src="../assets/images/main/map.svg" alt="" class="map" />
      <img
        src="../assets/images/main/map_now.gif"
        alt=""
        class="tag position-absolute"
        ref="mapTag"
        data-sectionNum="2"
      />
    </div>
  </div>
</template>

<script>
import GSAPanimationStore from '../stores/GSAPanimationStore.js'
import { mapActions } from 'pinia'

export default {
  methods: {
    ...mapActions(GSAPanimationStore, ['getElement'])
  },
  mounted() {
    this.getElement(this.$refs)
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 260px;
  height: 170px;
}

.tag {
  left: 2px;
  top: 53.6px;
}
</style>
