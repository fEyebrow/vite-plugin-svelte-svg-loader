<script lang="ts">
  import SvelteSvg from './assets/svelte.svg?component'
  import SvelteUrl from './assets/svelte.svg?url'
  import SvelteData from './assets/svelte.svg?raw'

  console.log(SvelteUrl, SvelteData)
</script>

<main>
  <SvelteSvg width={100} height={150} />
  <p>
    {SvelteUrl}
  </p>
  <p>
    {SvelteData}
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
