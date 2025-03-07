import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "webComponents",
      fileName: (format) => `webComponents.${format}.js`,
    },
    target: "esnext",
  },
  define: {
    'process.env': {}
  }
})
