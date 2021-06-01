import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      com: resolve('src/components'),
      apis: resolve('src/apis'),
      views: resolve('src/views'),
      utils: resolve('src/utils'),
      routes: resolve('src/routes'),
      styles: resolve('src/styles')
    },
  },
  server: {
    host: '',
    port: 3008,
    strictPort: false,
    open: false,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }

  }
})
