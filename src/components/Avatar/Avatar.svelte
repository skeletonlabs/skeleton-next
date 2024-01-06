<script lang="ts">
    import type { Action } from "svelte/action";
    
    // Note: consider `./types.ts`
    interface AvatarProps {
        // initials
        initials?: string;
        initialsFill?: string;
        initialsFontSize?: number;
        initialsBase?: string;
        initialsRest?: string;

        // image
        imageBase?:string;
        imageSrc?: string;
        imageAlt?: string;
        imageFallback?: string;
        imageAction?: Action<HTMLElement, string>;
        imageActionParams?: string;
        imageRest?: string;

        // figure
        figureBase?: string;
        figureBackground?: string;
        figureWidth?: string;
        figureBorder?: string;
        figureRounded?: string;
        figureShadow?: string;
        figureCursor?: string;
        figureRest?: string;
    }

    let {
        // initials
        initials = "AB",
        initialsFill = "fill-token",
        initialsFontSize = 150,
        initialsBase = "w-full h-full",
        initialsRest = "",

        //image
        imageBase = "w-full object-cover",
        imageSrc = "",
        imageAlt = "",
        imageFallback = "",
        imageAction = () => {},
        imageActionParams = "",
        imageRest = "",

        // figure
        figureBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",
        figureBackground = "bg-surface-400-500-token",
        figureWidth = "w-16",
        figureBorder = "",
        figureRounded = "rounded-full",
        figureShadow = "",
        figureCursor = "",
        figureRest = "",
    } = $props<AvatarProps>();
</script>

<figure class="{figureBase} {figureBackground} {figureWidth} {figureBorder} {figureRounded} {figureShadow} {figureCursor} {figureRest}">
    {#if imageSrc}
        <img 
            class="{imageBase} {imageRest}" 
            src={imageSrc} 
            alt={imageAlt}
            use:imageAction={imageActionParams} 
            onerror={() => imageSrc = imageFallback}
        />
    {:else}
        <svg class="{initialsBase} {initialsRest}" viewBox="0 0 512 512">
            <text
                x="50%"
                y="50%"
                dominant-baseline="central"
				text-anchor="middle"
				font-weight="bold"
                font-size={initialsFontSize}
                class="{initialsFill}">
                {String(initials).substring(0, 2).toUpperCase()}
            </text>
        </svg>
    {/if}
</figure>