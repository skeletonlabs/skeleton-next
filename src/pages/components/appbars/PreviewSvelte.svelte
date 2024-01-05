<script lang="ts">
    import AppBarSvelte from '@components/AppBar/AppBar.svelte';
</script>

<AppBarSvelte rootBorder="border border-orange-500">
  {#snippet leadSnippet()}Lead{/snippet}
  Default
  {#snippet trailSnippet()}Trail  {/snippet}
</AppBarSvelte>
