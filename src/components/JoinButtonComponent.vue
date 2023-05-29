<template>
  <a
    :href="link"
    target="_blank"
    class="d-flex flex-column align-items-center"
    :class="hidden"
    @mouseenter="
      (e) => {
        switchImage('entry', 2, e)
        switchFinger(e)
      }
    "
    @mouseleave="
      (e) => {
        switchImage('leave', 2, e)
        switchFinger(e)
      }
    "
  >
    <p class="fs-7 fs-lg-12 mb-2 text-primary">{{ textP }}</p>
    <img
      src="/images/btn/btn_joinHand.gif"
      alt="finger"
      class="join__finger mb-2"
      :class="fingerShow"
    />
    <img src="/images/btn/btn_join.png" alt="button" class="join__btn" />
    <h4 v-if="textH4" class="mt-8 fs-10 fs-sm-16 text-primary">{{ textH4 }}</h4>
    <h2 v-if="textH2" class="mt-10 fs-19 fs-sm-30 text-highlight">{{ textH2 }}</h2>
  </a>
</template>

<script>
import { mapActions } from 'pinia'
import homeStore from '../stores/homeStore.js'

export default {
  // 允許按鈕接收設定各種文字、是否顯示手指、是否設定特殊尺寸、是否在手機版隱藏、連結
  props: ['textP', 'textH2', 'textH4', 'finger', 'size1', 'size2', 'mobileHidden', 'link'],
  methods: {
    // switchImage 可用來切換圖片造成動畫效果
    ...mapActions(homeStore, ['switchImage']),
    // hover款按鈕，則在滑鼠移入時顯示手指，滑鼠移出時隱藏手指
    switchFinger(e) {
      if (this.textH4 !== undefined) {
        e.target.children[1].classList.toggle('hidden-image')
      }
    }
  },
  computed: {
    // 決定手指是否顯示
    fingerShow() {
      return this.finger === true ? '' : 'hidden-image'
    },
    // 決定手機版是否隱藏
    hidden() {
      return this.mobileHidden === true ? 'd-none d-lg-flex' : ''
    }
  },
  mounted() {
    // 設定特殊尺寸
    this.size1 === true ? this.$el.classList.add('size1') : ''
    this.size2 === true ? this.$el.classList.add('size2') : ''
  }
}
</script>

<style lang="scss" scoped>
.hidden-image {
  visibility: hidden;
}
.join__finger {
  width: 57px;
  height: 71px;
}
.join__btn {
  width: 103px;
  height: 60px;
}
.size1 {
  & .join__finger {
    width: 46.49px;
    height: 57.9px;
    @media (min-width: 992px) {
      width: 88.54px;
      height: 110.29px;
    }
  }
  & .join__btn {
    width: 84px;
    height: 48.93px;
    @media (min-width: 992px) {
      width: 160px;
      height: 93.2px;
    }
  }
}
.size2 {
  bottom: 5px !important;

  & .join__finger {
    width: 20px;
    height: 31px;
    @media (min-width: 992px) {
      width: 57px;
      height: 71px;
    }
  }
  & .join__btn {
    width: 55px;
    height: 30px;
    @media (min-width: 992px) {
      width: 103px;
      height: 60px;
    }
  }
}
</style>
