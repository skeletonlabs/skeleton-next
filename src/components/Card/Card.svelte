<script lang="ts">
  import type { Snippet } from "svelte";

  // NOTE: consider `./types.ts`
  interface CardProps {
    href: string;
    // Root
    base?: string;
    bg?: string;
    spaceY?: string;
    classes?: string;
    // Title
    titleBase?: string;
    titleClasses?: string;
    // Article
    articleBase?: string;
    articleClasses?: string;
    // Footer
    footerBase?: string;
    footerClasses?: string;
    // Snippets
    title?: Snippet;
    article?: Snippet;
    footer?: Snippet;
  }

  let {
    href,
    // Root
    base = "card",
    bg = "bg-slate-800",
    spaceY = 'space-y-2',
    classes = "",
    // Title
    titleBase = "h2",
    titleClasses = "",
    // Article
    articleBase = "",
    articleClasses = "",
    // Footer
    footerBase = "border-t border-white/10 pt-2",
    footerClasses = "",
    // Snippets
    title,
    article,
    footer
  } = $props<CardProps>();
</script>

<!-- @component A simple card component. -->

<a {href} class="{base} {bg} {spaceY} {classes}">
  <!-- Title -->
  {#if title}
    <header>
      <h2 class="{titleBase} {titleClasses}">{@render title()}</h2>
    </header>
  {/if}
  <!-- Article -->
  {#if article}
    <article class="{articleBase} {articleClasses}">{@render article()}</article>
  {/if}
  <!-- Footer -->
  {#if footer}
    <footer class="{footerBase} {footerClasses}">{@render footer()}</footer>
  {/if}
</a>
