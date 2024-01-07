<script lang="ts">
    import AppBarSvelte from '@components/AppBar/AppBar.svelte';
</script>

<AppBarSvelte rootBorder="border border-orange-500">
  {#snippet lead()}Lead{/snippet}
  Default
  {#snippet trail()}Trail  {/snippet}
</AppBarSvelte>
