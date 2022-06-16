import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore: it is ok
import svgLoader from '../src/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), svgLoader()],
})
