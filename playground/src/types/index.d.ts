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
