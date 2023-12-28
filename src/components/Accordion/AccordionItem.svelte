<script lang="ts">
    import { getContext, type Snippet } from "svelte";
    import type { Writable } from "svelte/store";
    import { slide } from "svelte/transition";

    interface Props {
        open?: boolean
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
        // Snippets
        control: Snippet;
        controlLead?: Snippet;
        panel?: Snippet;
    }

    let {
        open = false,
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
        // Snippets
        control,
        controlLead,
        panel,
    } = $props<Props>();

    // Context
    let selected: Writable<string | null> = getContext('selected');
    const multiple: boolean = getContext('multiple');
    const iconOpen: Snippet = getContext('iconOpen');
    const iconClosed: Snippet = getContext('iconClosed');

    // Local
    let id = $state(String(Math.random()));

    function onclick(): void {
        if (multiple) {
            // Toggle
            open = !open;
        } else {
            // Updated selected ID
            selected.set(id)
        }
    }
</script>

<!-- @component An Accordion child element. -->

<div class="{rootBase} {rootSpacingY} {rootRest}" data-testid="accordion-item">
    <!-- Control -->
    <button
        type="button"
        class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlRest}"
        {onclick}
    >
        <!-- Lead -->
        {#if controlLead}<div>{@render controlLead()}</div>{/if}
        <!-- Content -->
        <div class="flex-1">{@render control()}</div>
        <!-- State Indicator -->
        <div>
            {#if open}
                {#if iconOpen}{@render iconOpen()}{:else}&minus;{/if}
            {:else}
                {#if iconClosed}{@render iconClosed()}{:else}&plus;{/if}
            {/if}
        </div>
    </button>
    <!-- Panel -->
    {#if panel && (multiple ? open : $selected === id)}
        <div
            class="{panelBase} {panelPadding} {panelRounded} {panelRest}"
            transition:slide={{ duration: panelAnimDuration }}
        >
            {@render panel()}
        </div>
    {/if}
</div>