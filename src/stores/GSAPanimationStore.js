import { defineStore } from 'pinia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default defineStore('GSAPanimationStore', {
  state: () => ({
    windowWidth: 0,
    animationElement: {
      section1: {},
      section2: {},
      section3: {}
    }
  }),
  actions: {
    // 取得動畫元素,是一個 refsObject
    getElement(refsObject) {
      // 先取出所有的動畫元素名稱 elementName
      Object.keys(refsObject).forEach((elementName) => {
        // 利用動畫元素名稱 elementName 上的 dataset 取得不同 section 號碼
        // 將元素 refsObject[elementName] 分類到對應的 section 物件內儲存
        this.animationElement[`section${refsObject[elementName].dataset.sectionnum}`][elementName] =
          refsObject[elementName]
      })
    },
    getWindowWidth(value) {
      this.windowWidth = value
    },
    animation() {
      // 動畫區塊
      const section1 = this.animationElement.section1
      const section2 = this.animationElement.section2

      // PC版動畫
      if (this.windowWidth > 992) {
        // .set 設定元素初始值，不撰寫在style內，避免影響RWD
        console.log(section2.section2Title)
        gsap.set(section2.section2Title, { opacity: 0 })
        gsap.set(section2.section2Box, { overflow: 'hidden', height: '100vh' })
        gsap.set(section2.question1, { x: '-=150', opacity: 0 })
        gsap.set(section2.question2, { opacity: 0})
        gsap.set(section2.question3, { x: '+=150', opacity: 0 })

        // 各區塊時間線設定
        const section1Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section1.section1Box,// 目標區塊
            scrub: 2, // 動畫交給滾輪控制，並且設定滾輪滾動速度
            pin: section1.section1Box, // 滾輪滾動到該區塊時，該區塊會固定在畫面上
            start: 'bottom 99.99%', // 當區塊底部 與 視窗口往下99.99% ，兩點交錯時，觸發動畫
            end: '200% -10%', //  動畫結束點 區塊點頂部往下2倍距離，視窗口點底部往上10%距離，兩點交錯時，動畫結束，中間為動畫可運行空間。
            markers: true
          }
        })

        const section2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section2.section2Box,
            scrub: 2,
            pin: section2.section2Box,
            start: 'bottom 99.99%',
            end: '200% 1%',
            markers: true
          }
        })

        // 各區塊動畫
        section1Tl
          .to(section1.ready, { display: 'none' })
          .to(section1.trafficLightGreen, { opacity: 0 }, '<')
          .to(section1.trafficLightYellow, { opacity: 0 }, '<')
          .to(section1.cloudLeft, { scale: 0.6, x: '+=200' }, '<')
          .to(section1.cloudRight, { scale: 0.6, x: '-=200' }, '<')
          .to(section1.trafficLightRed, { opacity: 0 }, '<0.5')
          .to(section1.trafficLightYellow, { opacity: 1 }, '<')
          .to(section1.cloudLeft, { scale: 0.4, x: '+=100', y: '-=80' }, '<')
          .to(section1.cloudRight, { scale: 0.4, x: '-=100', y: '-=80' }, '<')
          .to(section1.cloudLeft, { opacity: 0 }, '<0.5')
          .to(section1.cloudRight, { opacity: 0 }, '<')
          .to(section1.go, { display: 'block' })
          .to(section1.trafficLightYellow, { opacity: 0 }, '<')
          .to(section1.trafficLightGreen, { opacity: 1 }, '<')
          .to(section1.trafficBox, { opacity: 0 }, '<1.5')
          .to(section1.section1List, { opacity: 0 }, '<')
          .to(section1.sectionTextArea, { opacity: 0 }, '<1.5')
          .to(section1.startLine, { opacity: 0 }, '<')
          .to(section1.navPcLogo, { visibility: 'visible' })

        section2Tl
          .to(section2.mapTag, { x: '+=42', y: '-=50' })
          .to(section2.characterBox, { scale: 0.6, y: '+=120' }, '<')
          .to(section2.graceLeft, { visibility: 'visible', y: '-=200' }, '<')
          .to(section2.graceRight, { visibility: 'visible', y: '-=200' }, '<')
          .to(section2.section2Title, { opacity: 1 }, '<')
          .to(section2.question1, { opacity: 1, x: '+=150' })
          .to(section2.question2, { opacity: 1 })
          .to(section2.graceLeft, { x: '+=80', y: '-=40' }, '<')
          .to(section2.graceRight, { x: '-=80', y: '-=40' }, '<')
          .to(section2.question3, { opacity: 1, x: '-=150' })
          .to(section2.graceLeft, { x: '+=80', y: '-=40' }, '<')
          .to(section2.graceRight, { x: '-=80', y: '-=40' }, '<')
          .to(section2.graceLeft, { opacity: 0 })
          .to(section2.graceRight, { opacity: 0 })
          .to(section2.section2Box, { opacity: 0 })
          .to(section2.characterBox, { scale: 1, y: '-=120' }, '<')
          .to(section2.mapTag, { x: '+=72', y: '+=10' }, '<')
      }
    }
  },
  gutter: {}
})
