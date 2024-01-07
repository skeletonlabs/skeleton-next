<script lang="ts">
	import type { Snippet } from "svelte";

	interface AppBarProps {
		/* Accessibility */
		label?: string;
		labelledby?: string;

		/* Snippets */
		rowHeadline?: Snippet;
		lead?: Snippet;
		children?: Snippet;
		trail?: Snippet;

		/* Styling */
		rootBackground?: string;
		rootBorder?: string;
		rootPadding?: string;
		rootShadow?: string;
		rootSpacing?: string;
		rootGridColumns?: string;
		rootGap?: string;
		regionRowMain?: string;
		rowHeadlineRest?: string;
		leadRest?: string;
		defaultRest?: string;
		trailRest?: string;
	}

	let {
		rootBackground = "bg-surface-100-800-token",
		rootBorder = '',
		rootPadding = 'p-4',
		rootShadow = '',
		rootSpacing = "space-y-4",
		rootGridColumns = "grid-cols-[auto_1fr_auto]",
		rootGap = "gap-4",
		regionRowMain = '',
		rowHeadlineRest = '',
		leadRest = '',
		defaultRest = '',
		trailRest = '',
		rowHeadline,
		lead,
		children,
		trail,
		label = '',
		labelledby = '',
	} = $props<AppBarProps>();

	const rootBase = "flex flex-col";
	const rowMainBase = "grid items-center";
	const leadBase = "flex-none flex justify-between items-center";
	const defaultBase = "flex-auto";
	const trailBase = "flex-none flex items-center space-x-4";

</script>

<div class="{rootBase} {rootBackground} {rootBorder} {rootSpacing} {rootPadding} {rootShadow}" data-testid="app-bar" role="toolbar" aria-label={label} aria-labelledby={labelledby}>
	<!-- Row: Main -->
	<div class="{rowMainBase} {rootGridColumns} {rootGap} {regionRowMain}">
		<!-- Slot: lead -->
		{#if lead}
			<div class="{leadBase} {leadRest}">
				{@render lead()}
			</div>
		{/if}
		<!-- Slot: default -->
    {#if children}
      <div class="{defaultBase} {defaultRest}">
        {@render children()}
      </div>
    {/if}
		<!-- Slot: trail -->
    {#if trail}
      <div class="{trailBase} {trailRest}">
        {@render trail()}
      </div>
    {/if}
	</div>
	<!-- Row: Headline -->
	{#if rowHeadline}
		<div class="{rowHeadlineRest}">
			{@render rowHeadline()}
		</div>
	{/if}
</div>
