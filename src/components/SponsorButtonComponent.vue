<template>
  <a
    :href="sponsorLinkUrl"
    class="position-relative d-block sponsorBox d-flex justify-content-center align-items-center mb-6"
    target="_blank"
    @mouseenter="
      (e) => {
        switchImage('entry', 1, e)
      }
    "
    @mouseleave="
      (e) => {
        switchImage('leave', 1, e)
      }
    "
  >
    <img :src="sponsorUrl" alt="sponsor" class="sponsorImg me-4" />
    <img
      src="/images/btn/btn_sponsor.png"
      alt="sponsorButton"
      class="position-absolute sponsorButton z--6"
    />
  </a>
  <p
    class="text-secondary--dark fs-12 px-8 py-1 border border-2 border-secondary--dark rounded-5 text-center mx-auto"
    style="width: fit-content"
  >
    {{ sponsor }}
  </p>
</template>

<script>
/* global process */
import homeStore from '@/stores/homeStore.js'
import { mapActions } from 'pinia'

export default {
  props: ['sponsorImgUrl', 'sponsorLinkUrl', 'sponsor'],
  methods: {
    ...mapActions(homeStore, ['switchImage'])
  },
  computed:{
    sponsorUrl(){
      const basePath = process.env.NODE_ENV === 'production' ? '/THE-F2E-2022/' : './';
      return `${basePath}${this.sponsorImgUrl}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.sponsorBox {
  width: 252px;
  height: 252px;
  @media (min-width: 992px) {
    width: 315px;
    height: 315px;
  }
}

.sponsorButton {
  left: 0;
  top: 0;
  width: 252px;
  height: 252px;
  @media (min-width: 992px) {
    width: 315px;
    height: 315px;
  }
}
.sponsorImg {
  width: 200px;
  height: 200px;
  @media (min-width: 992px) {
    width: 250px;
    height: 250px;
  }
}
</style>
