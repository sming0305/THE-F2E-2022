import { defineStore } from 'pinia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default defineStore('GSAPanimationStore', {
  state: () => ({
    element: []
  }),
  actions: {
    getElement(element) {
      this.element.push(element)
    },
    handleScroll(event) {
      console.log(event)
      this.animateClouds()
    },
    animateClouds() {
    }
  },
  gutter: {}
})
