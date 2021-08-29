import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(__dirname, './src/assets')],
      symbolId: '[name]'
    })
  ],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components')
      }
    ]
  }
})
