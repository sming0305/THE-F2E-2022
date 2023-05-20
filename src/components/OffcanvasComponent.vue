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
                  image('entry', 0, e)
                }
              "
              @mouseleave="
                (e) => {
                  image('leave', 0, e)
                }
              "
            >
              <img src="../assets/images/ic/ic_menu_info.png" alt="" class="icon" />
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
                  image('entry', 1, e)
                }
              "
              @mouseleave="
                (e) => {
                  image('leave', 1, e)
                }
              "
            >
              <img src="../assets/images/ic/ic_menu_list.png" alt="" class="icon" />
              <p class="text-secondary">作品列表</p>
            </a>
          </li>
          <li>
            <a
              href="https://hackmd.io/ofJD4K7iSI65V19"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
              @mouseenter="
                (e) => {
                  image('entry', 2, e)
                }
              "
              @mouseleave="
                (e) => {
                  image('leave', 2, e)
                }
              "
            >
              <img src="../assets/images/ic/ic_menu_strategy.png" alt="" class="icon" />
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
                  image('entry', 3, e)
                }
              "
              @mouseleave="
                (e) => {
                  image('leave', 3, e)
                }
              "
            >
              <img src="../assets/images/ic/ic_menu_job.png" alt="" class="icon" />
              <p class="text-secondary">求職專區</p>
            </a>
          </li>
        </ul>
      </div>
      <img
        src="../assets/images/bg/bg_menuSide.png"
        alt="bg_menuSide"
        class="position-absolute vh-100 top-0 end-z-20"
        style="width: 20px"
      />
      <img
        src="../assets/images/btn/btn_burger_open.png"
        alt="btn"
        class="controlBtn position-absolute"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        @mouseenter="
          (e) => {
            image('offcanvasEntry', 4, e)
          }
        "
        @mouseleave="
          (e) => {
            image('offcanvasLeave', 4, e)
          }
        "
        @click="
          (e) => {
            image('toggle', 4, e)
          }
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offcanvasState: false,
      images: [
        'src/assets/images/ic/ic_menu_info.png',
        'src/assets/images/ic/ic_menu_list.png',
        'src/assets/images/ic/ic_menu_strategy.png',
        'src/assets/images/ic/ic_menu_job.png',
        'src/assets/images/btn/btn_burger_open.png',
        'src/assets/images/btn/btn_burger_close.png'
      ]
    }
  },
  methods: {
    image(entry, number, e) {
      const target = e.target
      let imageUrl = this.images[number]

      // 按照點擊的目標以及狀態，判斷offcanvas的連結和開關按鈕要使用哪張圖片
      switch (entry) {
        case 'entry':
          target.children[0].src = imageUrl.replace('.png', '_h.png')
          break
        case 'leave':
          target.children[0].src = imageUrl
          break
        case 'toggle':
          this.offcanvasState = !this.offcanvasState
          this.offcanvasState === true
            ? (target.src = this.images[number + 1])
            : (target.src = this.images[number])
          break
        case 'offcanvasEntry':
          this.offcanvasState === true
            ? (target.src = this.images[number + 1].replace('.png', '_h.png'))
            : (target.src = imageUrl.replace('.png', '_h.png'))
          break
        case 'offcanvasLeave':
          this.offcanvasState === true
            ? (target.src = this.images[number + 1])
            : (target.src = imageUrl)
          break
      }
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
</style>
