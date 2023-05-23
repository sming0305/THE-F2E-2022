import { defineStore } from 'pinia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default defineStore('GSAPanimationStore', {
  state: () => ({
    animationElement: {
      section1: {}
    }
  }),
  actions: {
    getElement(sectionNumber, element) {
      this.animationElement[`section${sectionNumber}`] = Object.assign(
        this.animationElement[`section${sectionNumber}`],
        element
      )
      console.log(this.animationElement[`section${sectionNumber}`])
    },
    animation() {
      console.log(this.animationElement)
      const section1 = this.animationElement.section1

      const section1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: section1.section1Box,
          scrub: 1,
          pin: section1.section1Box,
          start: 'bottom 99.99%',
          end: '200% -10%',
          markers: true
          // pinSpacing: true,
        }
      })
      section1Tl
        .to(section1.ready, { opacity: 0 })
        .to(section1.trafficLightGreen, { opacity: 0 }, '<')
        .to(section1.trafficLightYellow, { opacity: 0 }, '<')
        .to(section1.cloudLeft, { scale: 0.6 }, '<')
        .to(section1.cloudRight, { scale: 0.6 }, '<')
        .to(section1.cloudLeft, { x: '+=200' }, '<')
        .to(section1.cloudRight, { x: '-=200' }, '<')
        .to(section1.trafficLightRed, { opacity: 0 })
        .to(section1.trafficLightYellow, { opacity: 1 }, '<')
        .to(section1.cloudLeft, { scale: 0.4 }, '<')
        .to(section1.cloudRight, { scale: 0.4 }, '<')
        .to(section1.cloudLeft, { x: '+=100', y: '-=80' }, '<')
        .to(section1.cloudRight, { x: '-=100', y: '-=80' }, '<')
        .to(section1.cloudLeft, { opacity: 0 })
        .to(section1.cloudRight, { opacity: 0 }, '<')
        .to(section1.go, { display: 'block' }, '<')
        .to(section1.trafficLightYellow, { opacity: 0 }, '<')
        .to(section1.trafficLightGreen, { opacity: 1 }, '<')
        .to(section1.trafficBox, { opacity: 0 })
        .to(section1.section1List, { opacity: 0 }, '<')
        .to(section1.sectionTextArea, { opacity: 0 }, '<')
        .to(section1.startLine, { opacity: 0 }, '<')
        .to(section1.navPcLogo, { visibility: 'visible' })
      console.log(section1.trafficBox)
    }
  },
  gutter: {}
})
