import { defineStore } from 'pinia'

export default defineStore('homeStore', {
  state: () => ({
    mapFinish: false
  }),
  actions: {
    switchImage(entry, number, e) {
      const target = e.target
      console.log(target.children[number].src)
      entry === 'entry'
        ? (target.children[number].src = target.children[number].src.replace('.png', '_h.png'))
        : (target.children[number].src = target.children[number].src.replace('_h.png', '.png'))
    },
    changMapUrl() {
      this.mapFinish = !this.mapFinish
    },
  },
  getters: {
    mapUrl: ({ mapFinish }) => {
      return mapFinish === true
        ? '/images/main/map_finish.svg'
        : '/images/main/map.svg'
    }
  }
})
