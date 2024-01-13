<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { Action } from 'svelte/action';

    interface AvatarProps {
        href?: string;
        action?: Action<HTMLElement, string>;
        actionParams?: string;

        // Root (figure)
        base?: string;
        background?: string;
        text?: string;
        fontWeight?: string;
        width?: string;
        border?: string;
        rounded?: string;
        shadow?: string;
        classes?: string;

        // Image
        imageSrc?: string;
        imageAlt?: string;
        imageBase?: string;
        imageRest?: string;

        // Snippets
        children?: Snippet;
    }

    let {
        href = "",
        action = () => {},
        actionParams = "",

        // Root (figure)
        base = "overflow-hidden isolate",
        background = "bg-surface-400-500-token",
        width = "w-16",
        border = "",
        rounded = "rounded-full",
        shadow = "",
        classes = "",

        // Image
        imageBase = "w-full object-cover",
        imageSrc = "",
        imageAlt = "",
        imageRest = "",

        // Snippets
        children,
    } = $props<AvatarProps>();
</script>

{#snippet figure()}
    <figure class="{base} {background} {width} {border} {rounded} {shadow} {classes}">
        {#if children}
        <!-- TODO: when Snippet types are implemented in svelte-5 check for type and if string provide an SVG with the text/initials -->
            {@render children()}
            <!-- TODO: investigate a better approach using Tailwind. -->
            <!-- <svg class="{initialsBase} {initialsRest}" viewBox="0 0 512 512">
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
            </svg> -->
        {:else}
            <!-- TODO: test moving actions to figure. -->
            <img
                class="{imageBase} {imageRest}" 
                src={imageSrc} 
                alt={imageAlt}
                use:action={actionParams}
            />
        {/if}
    </figure>
{/snippet}

{#if href}
    <a {href} class="{rounded}">
        {@render figure()}
    </a>
{:else}
    {@render figure()}
{/if}