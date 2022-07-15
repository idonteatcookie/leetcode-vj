import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import WindiCSS from 'vite-plugin-windicss'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    solidPlugin(),
    WindiCSS(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    })
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  },
  resolve: {
    alias: {
      src: './src'
    }
  }
})
