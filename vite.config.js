import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 用以告訴 Vite 如何處理字型檔案，配置了 assetsDir 選項，將構建生成的檔案放置在名為「assets」的目錄下。
  build: {
    assetsDir: 'assets'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
