<script>
  import Accordion from "@components/Accordion/Accordion.svelte";
  import AccordionItem from "@components/Accordion/AccordionItem.svelte";

  const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
  const controlHover = 'hover:bg-orange-500';
  const ontoggle = (e) => console.log(e);
</script>

<Accordion rootPadding="p-4" rootRest="bg-orange-500/5">
    <!-- Icons -->
    <!-- {#snippet iconOpen()}&uarr;{/snippet} -->
    <!-- {#snippet iconClosed()}&darr;{/snippet} -->
    <!-- Children -->
    {#snippet children()}
        <AccordionItem id="svelteItem1" {controlHover} {ontoggle} open>
            <!-- Control -->
            {#snippet controlLead()}💀{/snippet}
            {#snippet control()}<h4 class="h4">Svelte Control 1</h4>{/snippet}
            <!-- Panel -->
            {#snippet panel()}Svelte Panel 1 - {lorem}{/snippet}
        </AccordionItem>
        <hr class="hr" />
        <AccordionItem id="svelteItem2" {controlHover} {ontoggle}>
            {#snippet control()}<h4 class="h4">Svelte Control 2</h4>{/snippet}
            {#snippet panel()}Svelte Panel 2 - {lorem}{/snippet}
        </AccordionItem>
        <hr class="hr" />
        <AccordionItem id="svelteItem3" {controlHover} {ontoggle} disabled>
            {#snippet control()}<h4 class="h4">Svelte Control 3 (disabled)</h4>{/snippet}
            {#snippet panel()}Svelte Panel 3 - {lorem}{/snippet}
        </AccordionItem>
        <hr class="hr" />
        <AccordionItem id="svelteItem4" {controlHover} {ontoggle} >
            {#snippet control()}<h4 class="h4">Svelte Control 4</h4>{/snippet}
            {#snippet panel()}Svelte Panel 4 - {lorem}{/snippet}
        </AccordionItem>
    {/snippet}
</Accordion>
