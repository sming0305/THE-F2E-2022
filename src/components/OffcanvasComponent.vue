<template>
  <div
    class="offcanvas offcanvas-start bg-primary"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="position-relative vh-100">
      <div class="offcanvas-body pt-20 ps-20 pe-10">
        <ul class="list-unstyled">
          <li>
            <a
              href="https://2022.thef2e.com/news"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
              @mouseenter="
                (e) => {
                  switchImage('entry', 0, e)
                }
              "
              @mouseleave="
                (e) => {
                  switchImage('leave', 0, e)
                }
              "
            >
              <img src="/images/ic/ic_menu_info.png" alt="info" class="icon" />
              <p class="text-secondary">關卡資訊</p>
            </a>
          </li>
          <li>
            <a
              href="https://2022.thef2e.com/works"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
              @mouseenter="
                (e) => {
                  switchImage('entry', 0, e)
                }
              "
              @mouseleave="
                (e) => {
                  switchImage('leave', 0, e)
                }
              "
            >
              <img src="/images/ic/ic_menu_list.png" alt="workList" class="icon" />
              <p class="text-secondary">作品列表</p>
            </a>
          </li>
          <li>
            <a
              href="https://hackmd.io/@hexschool/rJ17ulEQj"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
              @mouseenter="
                (e) => {
                  switchImage('entry', 0, e)
                }
              "
              @mouseleave="
                (e) => {
                  switchImage('leave', 0, e)
                }
              "
            >
              <img src="/images/ic/ic_menu_strategy.png" alt="resource" class="icon" />
              <p class="text-secondary">攻略資源</p>
            </a>
          </li>
          <li>
            <a
              href="https://2022.thef2e.com/jobs"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
              @mouseenter="
                (e) => {
                  switchImage('entry', 0, e)
                }
              "
              @mouseleave="
                (e) => {
                  switchImage('leave', 0, e)
                }
              "
            >
              <img src="/images/ic/ic_menu_job.png" alt="job" class="icon" />
              <p class="text-secondary">求職專區</p>
            </a>
          </li>
        </ul>
      </div>
      <img
        src="/images/bg/bg_menuSide.png"
        alt="bg_menuSide"
        class="position-absolute vh-100 top-0 end-z-20"
        style="width: 20px"
      />
      <div
        class="controlBtn position-absolute"
        @mouseenter="
          (e) => {
            switchImage('entry', 0, e)
          }
        "
        @mouseleave="
          (e) => {
            switchImage('leave', 0, e)
          }
        "
      >
        <img
          src="/images/btn/btn_burger_open.png"
          alt="btn"
          class="w-100"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
          @click="
            (e) => {
              changeImage(e)
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import homeStore from '../stores/homeStore'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      offcanvasState: false
    }
  },
  methods: {
    ...mapActions(homeStore, ['switchImage']),
    changeImage(e) {
      const target = e.target

      // 手指觸控時沒有mouseenter和mouseleave事件，設定一個正規表達式確保PC & 手機都能正常切換圖片
      const regexOpen = /open(_h)?(\.png)$/
      const regexClose = /close(_h)?(\.png)$/
      // 判斷offcanvas的連結開關按鈕換圖片
      this.offcanvasState = !this.offcanvasState
      this.offcanvasState === true
        ? (target.src = target.src.replace(regexOpen, 'close.png'))
        : (target.src = target.src.replace(regexClose, 'open.png'))
    }
  }
}
</script>

<style lang="scss" scoped>
.offcanvas,
.offcanvas-xxl,
.offcanvas-xl,
.offcanvas-lg,
.offcanvas-md,
.offcanvas-sm {
  --bs-offcanvas-width: 135px;
}
.icon {
  width: 60px;
  height: 60px;
  margin-bottom: 2px;
}
.controlBtn {
  width: 40px;
  height: 44.44px;
  right: -60px;
  top: 12px;

  @media (min-width: 992px) {
    width: 60px;
    height: 66.67px;
    right: -80px;
    top: 53.7%;
  }
}
.offcanvas {
  visibility: visible;
}

.offcanvas.offcanvas-start {
  @media (max-width: 992px) {
    transform: translateX(-155px);
  }
}
</style>
