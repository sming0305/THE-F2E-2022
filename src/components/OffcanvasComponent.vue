<template>
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling"
    aria-controls="offcanvasScrolling"
  >
    Enable body scrolling
  </button>

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
            >
              <img src="../assets/images/ic/ic_menu_info.png" alt="" class="icon icon1" />
              <p class="text-secondary">關卡資訊</p>
            </a>
          </li>
          <li>
            <a
              href="https://2022.thef2e.com/works"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
            >
              <img src="../assets/images/ic/ic_menu_list.png" alt="" class="icon icon2" />
              <p class="text-secondary">作品列表</p>
            </a>
          </li>
          <li>
            <a
              href="https://hackmd.io/ofJD4K7iSI65V19"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
            >
              <img src="../assets/images/ic/ic_menu_strategy.png" alt="" class="icon icon3" />
              <p class="text-secondary">攻略資源</p>
            </a>
          </li>
          <li>
            <a
              href="https://2022.thef2e.com/jobs"
              class="mb-20 d-flex flex-column align-items-center"
              target="_blank"
            >
              <img src="../assets/images/ic/ic_menu_job.png" alt="" class="icon icon4" />
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
    </div>
  </div>
</template>

<script>
export default {}
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
  &.icon1:hover {
    background-image: url(../assets/images/ic/ic_menu_info_h.png);
  }
  &.icon2:hover {
    background-image: url(../assets/images/ic/ic_menu_list_h.png);
  }
  &.icon3:hover {
    background-image: url(../assets/images/ic/ic_menu_strategy_h.png);
  }
  &.icon4:hover {
    background-image: url(../assets/images/ic/ic_menu_job_h.png);
  }
}
</style>
