<template>
  <nav class="nav d-flex justify-content-between align-items-start fixed-top">
    <img
      src="/images/logo/logo.png"
      alt="logo"
      class="ms-20 mt-15 nav__pc__logo"
      style="height: 148px; width: 200px; visibility: hidden;"
      ref="navPcLogo" data-sectionNum="1"
    />
    <div class="d-block d-lg-none me-5"></div>
    <img
      src="/images/logo/logo_text.png"
      alt="logo"
      class="d-block d-lg-none ms-30"
      style="height: 46px; width: 133px"
    />
    <a
      class="nav-link pt-6 pe-4 pt-lg-15 pe-lg-10"
      aria-current="page"
      href="#"
      @mouseenter="
        (e) => {
          switchImage('entry', 0, e)
        }
      "
      @mouseleave="
        (e) => {
          this.switchImage('leave', 0, e)
        }
      "
      ><img src="/images/btn/btn_user.png" alt="login" class="login__btn"
    /></a>
  </nav>
</template>

<script>
import { mapActions } from 'pinia'
import homeStore from '../stores/homeStore.js'
import GSAPanimationStore from '../stores/GSAPanimationStore.js'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(homeStore, ['switchImage']),
    ...mapActions(GSAPanimationStore, ['getElement'])
  },
  mounted() {
    this.getElement(this.$refs)
  }
}
</script>

<style lang="scss" scoped>
.login__btn {
  width: 40px;
  height: 40px;
  @media (min-width: 992px) {
    width: 60px;
    height: 60px;
  }
}

.nav__pc__logo {
  @media (max-width: 992px) {
    display: none;
  }
}
</style>
