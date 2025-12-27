import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, copyFileSync } from 'fs'
import { join } from 'path'

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
    // Plugin to copy index.html to 404.html for GitHub Pages SPA routing
    {
      name: 'copy-404-for-spa',
      closeBundle() {
        if (mode === 'production') {
          const distPath = join(process.cwd(), 'dist')
          const indexPath = join(distPath, 'index.html')
          const notFoundPath = join(distPath, '404.html')
          try {
            copyFileSync(indexPath, notFoundPath)
            console.log('✅ Copied index.html to 404.html for SPA routing')
          } catch (error) {
            console.warn('⚠️  Could not copy index.html to 404.html:', error.message)
          }
        }
      },
    },
  ],
  base: '/',
}))

