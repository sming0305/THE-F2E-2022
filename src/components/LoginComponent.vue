<template>
  <nav class="nav d-flex justify-content-end fixed-top">
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
      ><img src="../assets/images/btn/btn_user.png" alt="login" class="login__btn"
    /></a>
  </nav>
</template>

<script>
import { mapActions } from 'pinia'
import homeStore from '../stores/homeStore.js'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(homeStore, ['switchImage'])
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
</style>
