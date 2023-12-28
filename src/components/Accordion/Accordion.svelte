<script lang="ts">
    import { setContext, type Snippet } from "svelte";
    import { writable } from "svelte/store";

    interface Props {
        multiple?: boolean;
        // Root
        rootBase?: string;
        rootPadding?: string;
        rootSpacingY?: string;
        rootRounded?: string;
        rootWidth?: string;
        rootRest?: string;
        // Snippets
        children?: Snippet;
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
    } = $props<Props>();

    // Local
    let selected = writable<string[]>([]);

    // Context
    setContext('selected', selected);
    setContext('multiple', multiple);
    setContext('iconOpen', iconOpen);
    setContext('iconClosed', iconClosed);
</script>

<!-- @component The Accordion parent element. -->

<div class="{rootBase} {rootPadding} {rootSpacingY} {rootRounded} {rootWidth} {rootRest}" data-testid="accordion">
    {#if children}{@render children()}{/if}
</div>
