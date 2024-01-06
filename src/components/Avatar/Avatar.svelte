<script lang="ts">
    import type { Action } from 'svelte/action';

    interface AvatarProps {
        href?: string;
        action?: Action<HTMLElement, string>;
        actionParams?: string;

        // Root (figure)
        rootBase?: string;
        rootBg?: string;
        rootText?: string;
        rootFontWeight?: string;
        rootWidth?: string;
        rootBorder?: string;
        rootRounded?: string;
        rootShadow?: string;
        rootRest?: string;

        // Image
        imageSrc?: string;
        imageAlt?: string;
        imageBase?: string;
        imageRest?: string;

        // Initials
        initialsText?: string;
        initialsBase?: string;
        initialsFill?: string;
        initialsFontSize?: number;
        initialsRest?: string;
    }

    let {
        href = "",
        action = () => {},
        actionParams = "",

        // Root (figure)
        rootBase = "overflow-hidden isolate",
        rootBg = "bg-surface-400-500-token",
        rootWidth = "w-16",
        rootBorder = "",
        rootRounded = "rounded-full",
        rootShadow = "",
        rootRest = "",

        // Image
        imageBase = "w-full object-cover",
        imageSrc = "",
        imageAlt = "",
        imageRest = "",

        // Initials
        initialsText = "AB",
        initialsBase = "w-full h-full",
        initialsFill = "fill-token",
        initialsFontSize = 150,
        initialsRest = "",
    } = $props<AvatarProps>();
</script>

{#snippet figure()}
    <figure class="{rootBase} {rootBg} {rootWidth} {rootBorder} {rootRounded} {rootShadow} {rootRest}">
        {#if imageSrc}
            <!-- TODO: test moving actions to figure. -->
            <img
                class="{imageBase} {imageRest}" 
                src={imageSrc} 
                alt={imageAlt}
                use:action={actionParams}
            />
        {:else}
            <!-- TODO: investigate a better approach using Tailwind. -->
            <svg class="{initialsBase} {initialsRest}" viewBox="0 0 512 512">
                <text
                    x="50%"
                    y="50%"
                    dominant-baseline="central"
                    text-anchor="middle"
                    font-weight="bold"
                    font-size={initialsFontSize}
                    class="{initialsFill}">
                    {String(initialsText).substring(0, 2).toUpperCase()}
                </text>
            </svg>
        {/if}
    </figure>
{/snippet}

{#if href}
    <a {href} class="{rootRounded}">
        {@render figure()}
    </a>
{:else}
    {@render figure()}
{/if}