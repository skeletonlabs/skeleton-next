<script lang="ts">
  // Props (settings)
  export let href: string;
  export let title: string;
  export let body: string;

  // Props (styles)
  export let elemBase = "card";
  export let elemHeading = "h2";
  // Styles: Regions
  export let regionBase = "";
  export let regionHeading = "";
  // Styles: Shared
  export let background = "bg-slate-800";
</script>

<a {href} class="{elemBase} {background} {regionBase}">
  <h2 class="{elemHeading} {regionHeading}">{@html title}</h2>
  <p>{@html body}</p>
</a>
