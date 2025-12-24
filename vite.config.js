import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: 'print-pages-base',
      configResolved(config) {
        // Shows up in build logs
        console.log('[vite] mode=', mode, ' base=', config.base)
      },
    },
  ],
  base: '/',
}))

