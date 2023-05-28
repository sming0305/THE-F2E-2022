<template>
  <div class="container fixed-bottom z--6">
    <div class="d-flex justify-content-center">
      <div
        class="position-relative"
        style="max-width: 1175px"
        ref="characterBox"
        data-sectionNum="2"
      >
        <img
          src="../assets/images/bg/bg_decorate_04.png"
          alt="treeBackground"
          class="position-absolute tree tree__left z--6"
          ref="treeLeft"
          data-sectionNum="8"
          style="visibility: hidden"
        />
        <img
          src="../assets/images/bg/bg_decorate_09.png"
          alt="graceBackground"
          class="position-absolute grace grace__left z--6"
          style="visibility: hidden"
          ref="graceLeft"
          data-sectionNum="2"
        />
        <div class="d-flex justify-content-center align-items-end character">
          <div class="character--size1 z-12">
            <img
              src="../assets/images/character/character_f2e.gif"
              alt="characterF2e"
              ref="characterLeft"
              data-sectionNum="2"
            />
          </div>
          <div class="character--size2 z-12">
            <img
              src="../assets/images/character/character_ui.gif"
              alt="characterUi"
              ref="characterCenter"
              data-sectionNum="2"
            />
          </div>
          <div class="character--size3 z-12">
            <img
              src="../assets/images/character/character_team.gif"
              alt="characterTeam"
              ref="characterRight"
              data-sectionNum="2"
            />
          </div>
        </div>
        <img
          src="../assets/images/bg/bg_decorate_09.png"
          alt="graceBackground"
          class="position-absolute grace grace__right z--6"
          style="visibility: hidden"
          ref="graceRight"
          data-sectionNum="2"
        />
        <img
          src="../assets/images/bg/bg_decorate_08.png"
          alt="treeBackground"
          class="position-absolute tree tree__right z--6"
          ref="treeRight"
          data-sectionNum="8"
          style="visibility: hidden"
        />
          <img src="../assets/images/main/road.png" class="z-6 road" alt="road" />
      </div>
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

.grace {
  width: 230px;
  height: 214px;
  transform: translate(0, 200px);

  &__left {
    left: -8%;
    bottom: -10%;
    transform: scaleX(-1) translate(0, 200px);
  }

  &__right {
    right: -8%;
    bottom: -10%;
  }
}

.tree {
  width: 353px;
  height: 548px;

  &__left {
    height: 575px;
    left: -45%;
    bottom: -35%;
    transform: scale(2);
  }

  &__right {
    right: -45%;
    bottom: -15%;
    transform: scale(2);
  }
}
</style>
