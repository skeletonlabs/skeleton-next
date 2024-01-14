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
        font?: string;
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
        font = "",
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
    <figure class="{base} {background} {width} {font} {border} {rounded} {shadow} {classes}" use:action={actionParams}>
        {#if imageSrc}
            <img
                class="{imageBase} {imageRest}" 
                src={imageSrc} 
                alt={imageAlt}
            />
        {:else if children}
            {@render children()}
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