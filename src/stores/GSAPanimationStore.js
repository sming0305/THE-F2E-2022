import { defineStore, mapActions } from 'pinia'
import homeStore from './homeStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default defineStore('GSAPanimationStore', {
  state: () => ({
    windowWidth: 0,
    loadingTime: 0,
    animationElement: {
      section1: {},
      section2: {},
      section3: {},
      section4: {},
      section5: {},
      section6: {},
      section7: {},
      section8: {},
      section9: {},
      section10: {}
    }
  }),
  actions: {
    ...mapActions(homeStore, ['changMapUrl']),
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
      // 區塊
      const section1 = this.animationElement.section1
      const section2 = this.animationElement.section2
      const section3 = this.animationElement.section3
      const section4 = this.animationElement.section4
      const section5 = this.animationElement.section5
      const section6 = this.animationElement.section6
      const section7 = this.animationElement.section7
      const section8 = this.animationElement.section8
      const section9 = this.animationElement.section9
      const section10 = this.animationElement.section10

      // .set 設定元素初始值，不撰寫在style內，方便尋找修改
      gsap.set(section2.section2Title, { opacity: 0 })
      gsap.set(section2.question1, { x: '-=150', opacity: 0 })
      gsap.set(section2.question2, { opacity: 0 })
      gsap.set(section2.question3, { x: '+=150', opacity: 0 })
      gsap.set(section3.section3Title, { opacity: 0 })
      gsap.set(section3.section3Subtitle, { opacity: 0 })
      gsap.set(section4.section4Title, { opacity: 0 })
      gsap.set(section4.section4Subtitle, { opacity: 0 })
      gsap.set(section4.week1Item, { y: '+=200', opacity: 0 })
      gsap.set(section4.week2Item, { y: '+=200', opacity: 0 })
      gsap.set(section4.week3Item, { y: '+=200', opacity: 0 })
      gsap.set(section5.dateInfo1, { opacity: 0, y: '+=100' })
      gsap.set(section5.dateInfo2, { opacity: 0, y: '+=100' })
      gsap.set(section5.dateInfo3, { opacity: 0, y: '+=100' })
      gsap.set(section6.section6Box, { height: '100vh' })
      gsap.set(section8.section8Title, { opacity: 0 })
      gsap.set(section8.sponsor1, { y: '+=100', visibility: 'hidden', opacity: 0 })
      gsap.set(section8.sponsor2, { y: '+=100', visibility: 'hidden', opacity: 0 })
      gsap.set(section8.sponsor3, { y: '+=100', visibility: 'hidden', opacity: 0 })
      gsap.set(section10.endBlock, { opacity: 0 })

      // PC版動畫
      if (this.windowWidth > 992) {
        // .set 設定元素初始值，不撰寫在style內，避免影響RWD (PC 專用)
        gsap.set(section2.section2Box, { overflow: 'hidden', height: '100vh' })
        gsap.set(section3.section3Box, { height: '100vh' })
        gsap.set(section3.section3List, { y: '+=100', opacity: 0 })
        gsap.set(section4.section4Box, { height: '100vh' })
        gsap.set(section5.section5Box, { height: '100vh' })
        gsap.set(section5.weekLine1, { opacity: 0 })
        gsap.set(section5.weekLine2, { opacity: 0 })
        gsap.set(section5.weekLine3, { opacity: 0 })
        gsap.set(section6.title, { opacity: 0, scale: 3 })
        gsap.set(section7.section7Box, { height: '100vh', opacity: 0 })
        gsap.set(section7.infoBox, { x: '-=100', opacity: 0 })
        gsap.set(section8.section8Box, { height: '100vh' })
        gsap.set(section9.section9Box, { height: '100vh' })
        gsap.set(section9.finishLineLeft, { opacity: 0, x: '+=22', scale: 2 })
        gsap.set(section9.finishLineRight, { opacity: 0, x: '-=10', scale: 2 })

        // 滑鼠移動時，角色跟著移動效果
        window.addEventListener('mousemove', (event) => {
          const mouseX = event.clientX // 滑鼠的 X 座標
          // 判斷滑鼠移動的方向使角色移動
          if (mouseX > window.innerWidth / 2) {

            gsap.to(section2.characterLeft, { x: '-30' })
            gsap.to(section2.characterCenter, { x: '+15' })
            gsap.to(section2.characterRight, { x: '-30' })
          } else {

            gsap.to(section2.characterLeft, { x: '+30' })
            gsap.to(section2.characterCenter, { x: '-15' })
            gsap.to(section2.characterRight, { x: '+30' })
          }
        })

        // 各區塊時間線設定
        const section1Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section1.section1Box, // 目標區塊
            scrub: 2, // 動畫交給滾輪控制，並且設定滾輪滾動速度
            pin: section1.section1Box, // 滾輪滾動到該區塊時，該區塊會固定在畫面上
            start: 'bottom 99.99%', // 當區塊底部 與 視窗口往下99.99% ，兩點交錯時，觸發動畫
            end: '200% -10%' //  動畫結束點 區塊點頂部往下2倍距離，視窗口點底部往上10%距離，兩點交錯時，動畫結束，中間為動畫可運行空間。
          }
        })

        const section2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section2.section2Box,
            scrub: 2,
            pin: section2.section2Box,
            start: 'bottom 99.99%',
            end: '200% 1%'
          }
        })

        const section3Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section3.section3Box,
            scrub: 2,
            pin: section3.section3Box,
            start: 'bottom 99.99%',
            end: '200% 1%'
          }
        })

        const section4Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section4.section4Box,
            scrub: 2,
            pin: section4.section4Box,
            start: 'bottom 99.99%',
            end: '200% 1%'
          }
        })

        const section5Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section5.section5Box,
            scrub: 2,
            pin: section5.section5Box,
            start: 'bottom 99.99%',
            end: '200% 1%'
          }
        })

        const section6Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section6.section6Box,
            scrub: 2,
            pin: section6.section6Box,
            start: '95% 99.99%',
            end: '200% 1%'
          }
        })

        const section7Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section7.section7Box,
            scrub: 2,
            pin: section7.section7Box,
            start: '100% 99.99%',
            end: '200% 1%'
          }
        })

        const section8Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section8.section8Box,
            scrub: 2,
            pin: section8.section8Box,
            start: '100% 99.99%',
            end: '200% 1%'
          }
        })

        const section9Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section9.section9Box,
            scrub: 2,
            pin: section9.section9Box,
            start: '100% 99.99%',
            end: '200% 1%'
          }
        })

        const section10Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section10.section10Box,
            scrub: 2,
            pin: section10.section10Box,
            start: '100% 99.99%',
            end: '200% 1%'
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
          .to(section1.cloudLeft, { opacity: 0 })
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
          .set(section2.mapTag, { x: 0, y: 0 })
          .to(section2.mapTag, { x: '+=42', y: '-=50' }, '<')
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

        section3Tl
          .to(section3.section3Title, { opacity: 1 })
          .to(section3.section3Subtitle, { opacity: 1 }, '<')
          .to(section3.section3List, { opacity: 1, y: '-=100' })
          .to(section3.section3Title, { opacity: 0 })
          .to(section3.section3Subtitle, { opacity: 0 }, '<')
          .to(section3.section3List, { opacity: 0, y: '+=100' })
          .to(section3.section3List, { visibility: 'hidden' })

        section4Tl
          .set(section2.mapTag, { x: 110 }, '<')
          .to(section2.mapTag, { x: '+=85' }, '<')
          .to(section2.characterBox, { scale: 0.45, y: '+=150' }, '<')
          .to(section4.section4Title, { opacity: 1 })
          .to(section4.section4Subtitle, { opacity: 1 }, '<')
          .to(section4.week1Item, { opacity: 1, y: '-=100' })
          .to(section4.week1Item, { opacity: 0.5, y: '-=100' })
          .to(section4.week2Item, { opacity: 1, y: '-=200' }, '<')
          .to(section4.week1Item, { opacity: 0.0, y: '-=500' })
          .to(section4.week2Item, { opacity: 0.5, y: '-=300' }, '<')
          .to(section4.week3Item, { opacity: 1, y: '-=500' }, '<')
          .to(section4.week2Item, { opacity: 0, y: '-=200' })
          .to(section4.week3Item, { opacity: 0.5, y: '-=300' }, '<')
          .to(section4.week3Item, { opacity: 0, y: '-=300' })
          .to(section4.section4Title, { opacity: 0 })
          .to(section4.section4Subtitle, { opacity: 0 }, '<')
          .to(section2.characterBox, { scale: 0.7, y: '-=70' }, '<')

        section5Tl
          .set(section2.characterBox, { scale: 0.7, y: '+=80' })
          .set(section2.mapTag, { x: 195, y: -40 })
          .to(section2.mapTag, { x: '-=10', y: '+=50' }, '<')
          .to(section5.dateLineShadow, { x: '110%' }, '<')
          .to(section5.dateInfo1, { y: '-=100', opacity: 1 })
          .to(section5.weekLine1, { opacity: 1 }, '<')
          .to(section5.dateInfo2, { y: '-=100', opacity: 1 })
          .to(section5.weekLine2, { opacity: 1 }, '<')
          .to(section5.dateInfo3, { y: '-=100', opacity: 1 })
          .to(section5.weekLine3, { opacity: 1 }, '<')
          .to(section5.dateInfo1, { y: '-=100', opacity: 0 })
          .to(section5.weekLine1, { y: '-=100', opacity: 0 }, '<')
          .to(section5.dateInfo2, { y: '-=100', opacity: 0 }, '<')
          .to(section5.weekLine2, { y: '-=100', opacity: 0 }, '<')
          .to(section5.dateInfo3, { y: '-=100', opacity: 0 }, '<')
          .to(section5.weekLine3, { y: '-=100', opacity: 0 }, '<')
          .to(section5.dateLine, { opacity: 0 }, '<')
          .to(section2.characterBox, { scale: 1, y: 0 }, '<')

        section6Tl
          .set(section2.characterBox, { scale: 1, y: 0 })
          .to(section6.leftCloud, { x: '+=450' })
          .to(section6.rightCloud, { x: '-=400' }, '<')
          .to(section6.title, { opacity: 1, scale: 1 })
          .set(section2.mapTag, { x: 188, y: 10 }, '<')
          .to(section2.mapTag, { x: '-=58', y: '+=25' }, '<')
          .to(section6.leftCloud, { x: '+=250', y: '-=50' }, '<')
          .to(section6.rightCloud, { x: '-=250', y: '-=50' }, '<')
          .to(section6.title, { opacity: 0 })
          .to(section6.leftCloud, { x: '+=150', scale: 0.5, opacity: 0 })
          .to(section6.rightCloud, { x: '-=150', scale: 0.5, opacity: 0 }, '<')
          .to(section2.characterBox, { scale: 0.65, y: '+=90' }, '<')

        section7Tl
          .set(section2.characterBox, { scale: 0.65, y: '+=90' })
          .to(section7.section7Box, { opacity: 1 })
          .to(section7.infoBox, { x: +100, opacity: 1 }, '<')
          .to(section7.light, { rotate: 360 }, '<')
          .to(section7.section7Box, { opacity: 0 }, '<+2')
          .to(section7.infoBox, { x: +200, opacity: 0 }, '<')
          .to(section7.light, { rotate: 0 }, '<')
          .to(section2.characterBox, { scale: 0.75, y: '-=20' }, '<')

        section8Tl
          .set(section2.characterBox, { scale: 0.75, y: '-=20' })
          .set(section2.mapTag, { x: 128, y: 38 })
          .to(section2.mapTag, { x: '-=45', y: '+=35' }, '<')
          .to(section8.section8Title, { opacity: 1 }, '<')
          .to(section8.treeLeft, { x: '+=200', y: '-=200', visibility: 'visible' }, '<')
          .to(section8.treeRight, { x: '-=200', y: '-=200', visibility: 'visible' }, '<')
          .to(section2.characterLeft, { x: '-=100', scale: 1.2 }, '<')
          .to(section2.characterCenter, { scale: 0.9 }, '<')
          .to(section2.characterRight, { y: '+=30', scale: 0.7 }, '<')
          .to(section8.sponsor1, { y: '-=100', visibility: 'visible', opacity: 1 })
          .to(section8.treeLeft, { x: '+=200', y: '+=100', scale: 1 }, '<')
          .to(section8.treeRight, { x: '-=200', y: '+=100', scale: 1 }, '<')
          .to(section8.sponsor2, { y: '-=100', visibility: 'visible', opacity: 1 }, '<+0.2')
          .to(section8.sponsor3, { y: '-=100', visibility: 'visible', opacity: 1 }, '<+0.3')
          .to(section8.section8Title, { opacity: 0 })
          .to(section8.sponsorList, { opacity: 0, y: '+=200' }, '<')
          .to(section8.sponsorList, { visibility: 'hidden' }, '<')
          .to(section8.sponsor1, { visibility: 'hidden' }, '<')
          .to(section8.sponsor2, { visibility: 'hidden' }, '<')
          .to(section8.sponsor3, { visibility: 'hidden' }, '<')
          .to(section8.treeLeft, { x: '+=150', y: '+=80', scale: 0.8, opacity: 0 }, '<')
          .to(section8.treeRight, { x: '-=150', y: '+=80', scale: 0.8, opacity: 0 }, '<')
          .to(section2.characterLeft, { x: '+=100', scale: 1 }, '<')
          .to(section2.characterCenter, { scale: 1 }, '<')
          .to(section2.characterRight, { y: '-=30', scale: 1 }, '<')

        section9Tl
          .to(section2.characterBox, { scale: 1, y: '-=70' })
          .to(section9.cloudLeftEnd, { x: '90%', y: '-=90' }, '<')
          .to(section9.cloudRightEnd, { x: '-70%', y: '-=90' }, '<')
          .to(section9.finish, { opacity: 1, scale: 1 })
          .to(section9.finishLineLeft, { opacity: 1, scale: 1 }, '<')
          .to(section9.finishLineRight, { opacity: 1, scale: 1 }, '<')
          .set(section2.mapTag, { x: 83, y: 73 }, '<')
          .to(section2.mapTag, { x: '-=54', y: '-=18' }, '<')
          .add(this.changMapUrl, '<')
          .to(section2.characterBox, { scale: 1.1 })
          .to(section2.characterBox, { scale: 1.2 })
          .to(section9.finishLineLeft, { rotate: -8, x: '-=25' }, '<')
          .to(section9.finishLineRight, { rotate: 8, x: '+=25' }, '<')
          .to(section9.cloudLeftEnd, { x: '+=450', y: '-=180', scale: 0.5 }, '<')
          .to(section9.cloudRightEnd, { x: '-=450', y: '-=180', scale: 0.5 }, '<')
          .to(section2.characterLeft, { scale: 1.2 })
          .to(section2.characterCenter, { scale: 1.2 }, '<')
          .to(section2.characterRight, { scale: 1.2 }, '<')
          .to(section9.finishLineLeft, { opacity: 0 }, '<')
          .to(section9.finishLineRight, { opacity: 0 }, '<')
          .to(section2.characterLeft, { scale: 2.5, x: '-=600', opacity: 0 })
          .to(section2.characterCenter, { scale: 2.5, opacity: 0 }, '<')
          .to(section2.characterRight, { scale: 2.5, x: '+=600', opacity: 0 }, '<')
          .to(section9.cloudLeftEnd, { scale: 0.1, opacity: 0 })
          .to(section9.cloudRightEnd, { scale: 0.1, opacity: 0 }, '<')
          .to(section9.finish, { opacity: 0 })

        section10Tl
          .set(section2.characterBox, { scale: 1, y: '-=70' })
          .set(section2.mapTag, { x: 0, y: 0 }, '<')
          .to(section10.endBlock, { opacity: 1 })
          .to(section10.mapBox, { opacity: 0 }, '<')
          .to(section1.navPcLogo, { opacity: 0 }, '<')
          .to(section10.buttonEndHidden, { opacity: 0 }, '<')
          .to(section10.buttonEndHidden, { visibility: 'hidden' })
      } // 992px 以下版動畫
      else if (this.windowWidth < 992) {
        gsap.set(section10.buttonEndHidden, { visibility: 'hidden', opacity: 0 })
        gsap.set(section3.item1, { opacity: 0, x: '+=100' })
        gsap.set(section3.item2, { opacity: 0, x: '-=100' })
        gsap.set(section3.item3, { opacity: 0, x: '+=200' })
        gsap.set(section5.section5Title, { opacity: 0 })
        gsap.set(section6.title, { opacity: 0, scale: 1.5, y: '+=200' })
        gsap.set(section7.section7Box, { opacity: 0 })
        gsap.set(section7.infoBox, { opacity: 0 })

        const section1Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section1.section1Box,
            scrub: 2,
            start: 'bottom 99.99%',
            end: 'bottom 80%'
          }
        })

        const section2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section2.section2Box,
            scrub: 2,
            start: '-20% 50%',
            end: '50% 1%'
          }
        })

        const section3Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section3.section3Box,
            scrub: 2,
            start: '-20% 50%',
            end: '50% 1%'
          }
        })

        const section4Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section4.section4Box,
            scrub: 2,
            start: '-20% 50%',
            end: '50% 1%'
          }
        })

        const section5Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section5.section5Box,
            scrub: 2,
            start: '-20% 50%',
            end: '50% 1%'
          }
        })

        const section6Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section6.section6Box,
            scrub: 2,
            start: '-20% 50%',
            end: '50% 1%'
          }
        })

        const section7Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section7.section7Box,
            scrub: 2,
            start: '-20% 50%',
            end: '40% 1%'
          }
        })

        const section8Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section8.section8Box,
            scrub: 2,
            start: '-20% 50%',
            end: '40% 1%'
          }
        })

        const section10Tl = gsap.timeline({
          scrollTrigger: {
            trigger: section10.section10Box,
            scrub: 2,
            start: '-20% 50%',
            end: '40% 1%'
          }
        })

        section1Tl
          .to(section1.trafficBox, { opacity: 0 })
          .to(section2.characterBox, { scale: 0.5, y: '+=50' }, '<')
          .to(section10.buttonEndHidden, { visibility: 'visible', opacity: 1 }, '<')

        section2Tl
          .to(section2.section2Title, { opacity: 1 })
          .to(section2.question1, { opacity: 1, x: '+=150' })
          .to(section2.question2, { opacity: 1 })
          .to(section2.question3, { opacity: 1, x: '-=150' })

        section3Tl
          .to(section3.section3Title, { opacity: 1 })
          .to(section3.item1, { opacity: 1, x: '-=100' })
          .to(section3.item2, { opacity: 1, x: '+=100' })
          .to(section3.item3, { opacity: 1, x: '-=200' })

        section4Tl
          .to(section4.section4Title, { opacity: 1 })
          .to(section4.section4Subtitle, { opacity: 1 }, '<')
          .to(section4.week1Item, { opacity: 1, y: '-=200' })
          .to(section4.week2Item, { opacity: 1, y: '-=200' })
          .to(section4.week3Item, { opacity: 1, y: '-=200' })

        section5Tl
          .to(section5.section5Title, { opacity: 1 })
          .to(section5.dateInfo1, { opacity: 1, y: '-=100' })
          .to(section5.dateInfo2, { opacity: 1, y: '-=100' })
          .to(section5.dateInfo3, { opacity: 1, y: '-=100' })

        section6Tl.to(section6.title, { opacity: 1, scale: 1 })

        section7Tl
          .to(section7.section7Box, { opacity: 1 })
          .to(section7.infoBox, { opacity: 1 }, '<')
          .to(section7.light, { rotate: 360 }, '<')

        section8Tl
          .to(section8.section8Title, { opacity: 1 })
          .to(section8.sponsor1, { y: '-=100', visibility: 'visible', opacity: 1 })
          .to(section8.sponsor2, { y: '-=100', visibility: 'visible', opacity: 1 })
          .to(section8.sponsor3, { y: '-=100', visibility: 'visible', opacity: 1 })

        section10Tl
          .to(section10.endBlock, { opacity: 1 })
          .to(section10.buttonEndHidden, { visibility: 'hidden', opacity: 0 }, '<')
          .to(section2.characterBox, { scale: 1, y: '-=60' })
      }
    }
  },
  getters: {}
})
