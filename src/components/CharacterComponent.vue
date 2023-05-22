<template>
  <div class="container fixed-bottom">
    <div class="d-flex justify-content-center">
      <div style="max-width: 1175px">
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.character {
  margin-bottom: -10%;

  &--size1 {
    max-width: 302px;
    max-height: 500px;
  }

  &--size2 {
    max-width: 319px;
    max-height: 517px;
  }

  &--size3 {
    max-width: 302px;
    max-height: 454px;
  }
}
</style>
