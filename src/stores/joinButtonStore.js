import { defineStore } from 'pinia'

export default defineStore('homeStore', {
  state: () => ({
    buttonText: {
      p: '',
      h4: '',
      h2: ''
    }
  }),
  actions: {
    textContent(p = '', h4 = '', h2 = '') {
      this.buttonText.p = p
      this.buttonText.h4 = h4
      this.buttonText.h2 = h2
    }
  },
  gutter: {}
})
