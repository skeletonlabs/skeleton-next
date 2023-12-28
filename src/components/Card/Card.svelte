<script lang="ts">
  import type { Snippet } from "svelte";

  // NOTE: consider `./types.ts`
  interface Props {
    href: string;
    // Root
    rootBase?: string;
    rootBg?: string;
    rootSpaceY?: string;
    rootRest?: string;
    // Title
    titleBase?: string;
    titleRest?: string;
    // Article
    articleBase?: string;
    articleRest?: string;
    // Footer
    footerBase?: string;
    footerRest?: string;
    // Snippets
    title?: Snippet;
    article?: Snippet;
    footer?: Snippet;
  }

  let {
    href,
    // Root
    rootBase = "card",
    rootBg = "bg-slate-800",
    rootSpaceY = 'space-y-2',
    rootRest = "",
    // Title
    titleBase = "h2",
    titleRest = "",
    // Article
    articleBase = "",
    articleRest = "",
    // Footer
    footerBase = "border-t border-white/10 pt-2",
    footerRest = "",
    // Snippets
    title,
    article,
    footer
  } = $props<Props>();
</script>

<!-- @component A simple card component. -->

<a {href} class="{rootBase} {rootBg} {rootSpaceY} {rootRest}">
  <!-- Title -->
  {#if title}
    <header>
      <h2 class="{titleBase} {titleRest}">{@render title()}</h2>
    </header>
  {/if}
  <!-- Article -->
  {#if article}
    <article class="{articleBase} {articleRest}">{@render article()}</article>
  {/if}
  <!-- Footer -->
  {#if footer}
    <footer class="{footerBase} {footerRest}">{@render footer()}</footer>
  {/if}
</a>
