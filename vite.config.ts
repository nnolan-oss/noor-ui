import {defineConfig} from 'vite'
import {dirname, resolve} from "node:path";
import {fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import dtsPlugin from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    dtsPlugin({
      tsconfigPath: './tsconfig.build.json',
      outDir: './dist',
      include: ['lib/**/*'],
      exclude: ['src', '**/*.test.*', '**/*.spec.*']
    })],
  server: {
    port: 7777
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "noor-ui",
      fileName: "noor-ui"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  }
})
