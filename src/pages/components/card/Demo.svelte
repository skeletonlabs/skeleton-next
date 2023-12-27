<script lang="ts">
    import CardSvelte from "@components/Card/Card.svelte";
</script>

<CardSvelte
  href="https://svelte.dev/"
  rootBg="bg-orange-500"
>
  {#snippet title()}Svelte Card Component{/snippet}
  {#snippet article()}<p>This is a Svelte snippet.</p>{/snippet}
  {#snippet footer()}The footer goes here.{/snippet}
</CardSvelte>
