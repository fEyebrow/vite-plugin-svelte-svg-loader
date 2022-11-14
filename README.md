# vite-plugin-svelte-svg-loader

[![NPM version](https://img.shields.io/npm/v/vite-plugin-svelte-svg-loader?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-svelte-svg-loader)

vite 3.x plugin to load SVG files as Svelte Components

## Install
```
npm i -D vite-plugin-svelte-svg-loader
```

vite.config.ts
```
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svgLoader from 'vite-plugin-svelte-svg-loader'

export default defineConfig({
  plugins: [svelte(), svgLoader({
    // svgo?: boolean;
    // svgoConfig?: OptimizeOptions;
    // defaultImport?: 'url' | 'raw' | 'component';
  })],
})
```

types/index.d.ts
```
declare module '*.svg?component' {
  import Svelte from 'svelte'
  export default Svelte.SvelteComponent
}

declare module '*.svg?url' {
  const src: string
  export default src
}

declare module '*.svg?raw' {
  const src: string
  export default src
}
```

## Usage
```
import SvelteSvgCm from './assets/svelte.svg?component'
import SvelteSvgUrl from './assets/svelte.svg?url'
import SvelteSvgStr from './assets/svelte.svg?raw'
```

## License

[MIT](./LICENSE) License © 2022 [fEyebrow](https://github.com/fEyebrow)
