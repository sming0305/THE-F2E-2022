<template>
  <div class="position-fixed d-none d-xl-block" style="left: 30px; bottom: 20px">
    <div class="position-relative">
      <img src="../assets/images/main/map.svg" alt="" class="map" />
      <img src="../assets/images/main/map_now.gif" alt="" class="tag position-absolute"/>
    </div>
  </div>
</template>

<script>
export default {}
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
