import { defineStore } from 'pinia'

export default defineStore('homeStore', {
  state: () => ({}),
  actions: {
    switchImage(entry, number, e) {
      const target = e.target
      entry === 'entry'
        ? (target.children[number].src = target.children[number].src.replace('.png', '_h.png'))
        : (target.children[number].src = target.children[number].src.replace('_h.png', '.png'))
    }
  },
  gutter: {}
})
