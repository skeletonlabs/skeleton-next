<script lang="ts">
  // Props (settings)
  export let href: string;
  export let title: string;
  export let body: string;

  // Props (styles)
  export let elemBase = "card";
  export let elemHeading = "h2";
  // Styles: Rest
  export let restBase = "";
  export let restHeading = "";
  // Styles: Shared
  export let background = "bg-slate-800";
</script>

<a {href} class="{elemBase} {background} {restBase}">
  <h2 class="{elemHeading} {restHeading}">{@html title}</h2>
  <p>{@html body}</p>
</a>
