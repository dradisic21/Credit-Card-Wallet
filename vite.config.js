import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

export default defineConfig({
  plugins: [
    react(),
    {
      apply: 'build',
      generateBundle(_, bundle) {
        for (const key in bundle) {
          const chunk = bundle[key]
          if (chunk.type === 'scss') {
            chunk.code = sass.renderSync({
              data: chunk.code
            }).css
          }
        }
      }
    }
  ]
})
