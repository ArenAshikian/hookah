// Build config for an informational event-services website. No ecommerce or payment functionality.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hookah/',
})
