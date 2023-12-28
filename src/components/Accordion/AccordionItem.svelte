<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import type { Writable } from "svelte/store";
    import { slide } from "svelte/transition";

    interface ToggleEvent { event: Event, id: string, open: boolean }

    interface Props {
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
        ontoggle?: ({ event, open, id}: ToggleEvent) => {};
        // Snippets
        control: Snippet;
        controlLead?: Snippet;
        panel?: Snippet;
    }

    let {
        id = String(Math.random()),
        open = false,
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
        ontoggle,
        // Snippets
        control,
        controlLead,
        panel,
    } = $props<Props>();

    // Context
    let selected: Writable<string[]> = getContext('selected');
    const multiple: boolean = getContext('multiple');
    const iconOpen: Snippet = getContext('iconOpen');
    const iconClosed: Snippet = getContext('iconClosed');

    // Init
    if (open) setOpen();

    function onclick(event: Event): void {
        $selected.includes(id) ? setClosed() : setOpen()
        // Trigge event handler
        if (ontoggle) ontoggle({event, open: $selected.includes(id), id})
    }

    function setOpen(): void {
        if (!multiple) $selected = [];
        $selected = [...$selected, id];
    }

    function setClosed(): void {
        $selected = $selected.filter(itemId => itemId !== id);
    }
</script>

<!-- @component An Accordion child element. -->

<div class="{rootBase} {rootSpacingY} {rootRest}" data-testid="accordion-item">
    <!-- Control -->
    <button
        type="button"
        class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlRest}"
        aria-expanded={$selected.includes(id)}
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
            {#if $selected.includes(id)}
                {#if iconOpen}{@render iconOpen()}{:else}&minus;{/if}
            {:else}
                {#if iconClosed}{@render iconClosed()}{:else}&plus;{/if}
            {/if}
        </div>
    </button>
    <!-- Panel -->
    {#if panel && $selected.includes(id)}
        <div
            class="{panelBase} {panelPadding} {panelRounded} {panelRest}"
            transition:slide={{ duration: panelAnimDuration }}
            id="accordion-panel-{id}"
            role="region"
			aria-hidden={$selected.includes(id)}
			aria-labelledby={id}
        >
            {@render panel()}
        </div>
    {/if}
</div>