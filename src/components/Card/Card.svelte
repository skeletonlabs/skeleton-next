<script lang="ts">
  interface CardProps {
    href?: string;
    title?: string;
    body?: string;
    elemBase: string;
    elemHeading: string;
    restBase: string;
    restHeading: string;
    background: string;
  }

  let {
    href,
    title,
    body,
    elemBase = "card",
    elemHeading = "h2",
    restBase,
    restHeading,
    background = "bg-slate-800",
  } = $props<CardProps>();
</script>

<a {href} class="{elemBase} {background} {restBase}">
  <h2 class="{elemHeading} {restHeading}">{@html title}</h2>
  <p>{@html body}</p>
</a>
