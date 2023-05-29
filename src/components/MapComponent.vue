<template>
  <div class="position-fixed d-none d-xl-block z-18" style="left: 30px; bottom: 20px" ref="mapBox" data-sectionNum="10">
    <div class="position-relative z-6">
      <img :src="mapUrl" alt="" class="map" />
      <img
        src="/images/main/map_now.gif"
        alt="mapTag"
        class="tag position-absolute"
        ref="mapTag"
        data-sectionNum="2"
      />
    </div>
  </div>
</template>

<script>
import GSAPanimationStore from '../stores/GSAPanimationStore.js'
import homeStore from '../stores/homeStore'
import { mapActions, mapState } from 'pinia'

export default {
  methods: {
    ...mapActions(GSAPanimationStore, ['getElement'])
  },
  computed: {
    ...mapState(homeStore, ['mapUrl'])
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
