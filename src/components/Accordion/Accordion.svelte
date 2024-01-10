<script lang="ts">
    import { setContext, type Snippet } from "svelte";
	import { State } from "./state.svelte.js";

    interface AccordionProps {
        multiple?: boolean;
        // Root
        base?: string;
        padding?: string;
        spaceY?: string;
        rounded?: string;
        width?: string;
        classes?: string;
        // Snippets
        children: Snippet;
        iconOpen?: Snippet;
        iconClosed?: Snippet;
    }

    let {
        multiple = false,
        // Root
        base = '',
        padding = '',
        spaceY = 'space-y-1',
        rounded = 'rounded',
        width = 'w-full',
        classes = '',
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

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" data-testid="accordion">
    {@render children()}
</div>
