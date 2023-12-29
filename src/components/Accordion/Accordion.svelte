<script lang="ts">
    import { setContext, type Snippet } from "svelte";
	import { State } from "../state.svelte.js";

    interface AccordionProps {
        multiple?: boolean;
        // Root
        rootBase?: string;
        rootPadding?: string;
        rootSpacingY?: string;
        rootRounded?: string;
        rootWidth?: string;
        rootRest?: string;
        // Snippets
        children: Snippet;
        iconOpen?: Snippet;
        iconClosed?: Snippet;
    }

    let {
        multiple = false,
        // Root
        rootBase = '',
        rootPadding = '',
        rootSpacingY = 'space-y-1',
        rootRounded = 'rounded',
        rootWidth = 'w-full',
        rootRest = '',
        // Snippets
        children,
        iconOpen,
        iconClosed
    } = $props<AccordionProps>();
   
    // Context
    setContext('selected', new State<string[]>([]));
    setContext('multiple', multiple);
    setContext('iconOpen', iconOpen);
    setContext('iconClosed', iconClosed);
</script>

<!-- @component The Accordion parent element. -->

<div class="{rootBase} {rootPadding} {rootSpacingY} {rootRounded} {rootWidth} {rootRest}" data-testid="accordion">
    {@render children()}
</div>
