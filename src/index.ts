import { promises as fs } from 'fs'
import type { Plugin, ResolvedConfig } from 'vite'
import type { OptimizeOptions, OptimizedSvg } from 'svgo'
import { optimize } from 'svgo'
import { compile } from 'svelte/compiler'

interface Options {
  svgo?: boolean
  svgoConfig?: OptimizeOptions
  defaultImport?: 'url' | 'raw' | 'component'
}

export default function (options: Options = {}): Plugin {
  const { svgoConfig, svgo, defaultImport } = options
  let viteConfig: ResolvedConfig | null = null
  const svgRegex = /\.svg(\?(raw|component))?$/

  return {
    name: 'vite-plugin-svelte-svg-loader',
    enforce: 'pre',
    configResolved(config) {
      viteConfig = config
    },
    async load(id) {
      const isRootRef = viteConfig!.command === 'build' && !id.startsWith(viteConfig!.root)
      if (!id.match(svgRegex) || isRootRef)
        return

      const [path, query] = id.split('?', 2)

      const importType = query || defaultImport

      let svg = await fs.readFile(path, 'utf8')

      if (importType === 'raw')
        return `export default ${JSON.stringify(svg)}`

      if (svgo === true) {
        try {
          const result = optimize(svg, svgoConfig) as OptimizedSvg
          svg = result.data
        }
        catch {
          return
        }
      }

      const svgPartsRegex = /(<svg.*?)(\/?>.*)/
      const svgParts = svg.match(svgPartsRegex)
      if (svgParts === null) {
        console.error('[vite-plugin-svelte-svg-loader] failed to parse:', path)
        return
      }
      else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, head, body] = svgParts
        svg = `${head} {...$$props}${body}`
      }

      const { js: code } = compile(svg, {
        dev: process.env.NODE_ENV === 'development',
      })

      return code
    },
  }
}
