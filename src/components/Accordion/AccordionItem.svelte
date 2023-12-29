<script lang="ts">
    import { getContext, untrack, type Snippet } from "svelte";
    import { slide } from "svelte/transition";
	import type { State } from "../state.svelte.js";

    type ToggleEvent = CustomEvent<{  id: string, open: boolean }>;

    interface AccordionItemProps {
        id?: string;
        open?: boolean;
        disabled?: boolean;
        // Root
        rootBase?: string;
        rootSpacingY?: string;
        rootRest?: string;
        // Control
        controlBase?: string;
        controlHover?: string;
        controlPadding?: string;
        controlRounded?: string;
        controlRest?: string;
        // Panel
        panelBase?: string;
        panelPadding?: string;
        panelRounded?: string;
        panelRest?: string;
        panelAnimDuration?: number;
        // Events
        ontoggle?: (toggleEvent: ToggleEvent) => void;
        // Snippets
        control: Snippet;
        controlLead?: Snippet;
        panel?: Snippet;
    }

    let {
        id = String(Math.random()), // <-- FIXME: for the prototype only
        open,
        disabled = false,
        // Root
        rootBase = '',
        rootSpacingY = "",
        rootRest = '',
        // Control
        controlBase = "flex text-start items-center space-x-4 w-full",
        controlHover = "hover:bg-white/5",
        controlPadding = 'py-2 px-4',
        controlRounded = 'rounded',
        controlRest = '',
        // Panel
        panelBase = '',
        panelPadding = 'py-2 px-4',
        panelRounded = '',
        panelRest = '',
        panelAnimDuration = 200,
        // Events
        ontoggle = () => {},
        // Snippets
        control,
        controlLead,
        panel,
    } = $props<AccordionItemProps>();

    // Context
    const selected = getContext<State<string[]>>('selected');
    const multiple = getContext<boolean>('multiple');
    const iconOpen = getContext<Snippet>('iconOpen');
    const iconClosed = getContext<Snippet>('iconClosed');

    // Derived State
    const isOpen = $derived(selected.value.includes(id))

    // Controlled State
    $effect(() => {
        open ? untrack(setOpen) : untrack(setClosed)
    });

    // Syncing Controlled State
    $effect(() => {
        open = isOpen;
    });

    function onclick() {
        isOpen ? setClosed() : setOpen();
        // Trigger the toggle event
        ontoggle(new CustomEvent('toggle', { detail: { id, open: isOpen }}))
    }

    function setOpen() {
        if (!multiple) selected.value = [];
        selected.value.push(id);
    }

    function setClosed() {
        selected.value = selected.value.filter(itemId => itemId !== id);
    }
</script>

<!-- @component An Accordion child element. -->

<div class="{rootBase} {rootSpacingY} {rootRest}" data-testid="accordion-item">
    <!-- Control -->
    <button
        type="button"
        class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlRest}"
        aria-expanded={isOpen}
		aria-controls="accordion-panel-{id}"
        {onclick}
        {disabled}
    >
        <!-- Lead -->
        {#if controlLead}<div>{@render controlLead()}</div>{/if}
        <!-- Content -->
        <div class="flex-1">{@render control()}</div>
        <!-- State Indicator -->
        <div>
            {#if isOpen}
                {#if iconOpen}{@render iconOpen()}{:else}&minus;{/if}
            {:else}
                {#if iconClosed}{@render iconClosed()}{:else}&plus;{/if}
            {/if}
        </div>
    </button>
    <!-- Panel -->
    {#if panel && isOpen}
        <div
            class="{panelBase} {panelPadding} {panelRounded} {panelRest}"
            transition:slide={{ duration: panelAnimDuration }}
            id="accordion-panel-{id}"
            role="region"
			aria-hidden={isOpen}
			aria-labelledby={id}
        >
            {@render panel()}
        </div>
    {/if}
</div>