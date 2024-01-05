<script lang="ts">
	import type { Snippet } from "svelte";

	interface AppBarProps {
		/* Styling */
		rootBackground?: string;
		rootBorder?: string;
		rootPadding?: string;
		rootShadow?: string;
		rootSpacing?: string;
		rootGridColumns?: string;
		rootGap?: string;
		regionRowMain?: string;
		regionRowHeadline?: string;
		leadSnippetClasses?: string;
		defaultSnippetClasses?: string;
		trailSnippetClasses?: string;

		/* Snippets */
		regionRowHeadlineSnippet?: Snippet;
		leadSnippet?: Snippet;
		children?: Snippet;
		trailSnippet?: Snippet;

		/* Accessibility */
		label?: string;
		labelledby?: string;

		/* Rest */
		class?: string;
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
		regionRowHeadline= '',
		leadSnippetClasses= '',
		defaultSnippetClasses= '',
		trailSnippetClasses= '',
		regionRowHeadlineSnippet,
		leadSnippet,
		children: defaultSnippet,
		trailSnippet,
		label = '',
		labelledby = '',
		/* Unsure what to alias this as "class" is reserved in js, alternatives: className, restClass, restClassName, clazz */
		class: className = ''
	} = $props<AppBarProps>();

	const joined = (...items: string[]) => items.join(" ");
	const cBase = "flex flex-col";
	const cRowMain = "grid items-center";
	const cLeadSnippet = "flex-none flex justify-between items-center";
	const cDefaultSnippet = "flex-auto";
	const cTrailSnippet = "flex-none flex items-center space-x-4";

	const classesBase = $derived(joined(cBase, rootBackground, rootBorder, rootSpacing, rootPadding, rootShadow, className));
	const classesRowMain = $derived(joined(cRowMain, rootGridColumns, rootGap, regionRowMain));
	const classesRowHeadline = $derived(joined(regionRowHeadline));
	const classesLeadSnippet = $derived(joined(cLeadSnippet, leadSnippetClasses));
	const classesDefaultSnippet = $derived(joined(cDefaultSnippet, defaultSnippetClasses));
	const classesTrailSnippet = $derived(joined(cTrailSnippet, trailSnippetClasses));
</script>

<div class="app-bar {classesBase}" data-testid="app-bar" role="toolbar" aria-label={label} aria-labelledby={labelledby}>
	<!-- Row: Main -->
	<div class="app-bar-row-main {classesRowMain}">
		<!-- Slot: lead -->
		{#if leadSnippet}
			<div class="app-bar-slot-lead {classesLeadSnippet}">
        {@render leadSnippet()}
      </div>
		{/if}
		<!-- Slot: default -->
    {#if defaultSnippet}
      <div class="app-bar-slot-default {classesDefaultSnippet}">
        {@render defaultSnippet()}
      </div>
    {/if}
		<!-- Slot: trail -->
    {#if trailSnippet}
      <div class="app-bar-slot-trail {classesTrailSnippet}">
        {@render trailSnippet()}
      </div>
    {/if}
	</div>
	<!-- Row: Headline -->
	{#if regionRowHeadlineSnippet}
		<div class="app-bar-row-headline {classesRowHeadline}">
      {@render regionRowHeadlineSnippet()}
    </div>
	{/if}
</div>
