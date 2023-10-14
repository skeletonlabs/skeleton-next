<script lang="ts">
  // Props (settings)
  export let href: string;
  export let title: string;
  export let body: string;

  // Props (styles)
  export let elemBase = "";
  export let elemHeading = "";
  export let elemParagraph = "";
</script>

<a {href} class={elemBase}>
  <h2 class={elemHeading}>{@html title}</h2>
  <p class={elemParagraph}>{@html body}</p>
</a>
