<script lang="ts">
    import CardSvelte from "@components/Card/Card.svelte";
</script>

<CardSvelte href="https://svelte.dev/" bg="bg-orange-500">
  {#snippet title()}Svelte Card Component{/snippet}
  {#snippet article()}<p>The Svelte component article.</p>{/snippet}
  {#snippet footer()}The Svelte component footer.{/snippet}
</CardSvelte>
