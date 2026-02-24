<script lang="ts">
	let {
		categories,
		active = ''
	}: {
		categories: string[];
		active?: string;
	} = $props();
</script>

<div class="flex flex-wrap gap-2">
	<a
		href="/articles"
		class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors {!active
			? 'bg-brand text-white'
			: 'bg-sage-100 text-sage-700 hover:bg-sage-200 dark:bg-sage-800 dark:text-sage-300 dark:hover:bg-sage-700'}"
	>
		All
	</a>
	{#each categories as category}
		<a
			href="/articles?category={encodeURIComponent(category)}"
			class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors {active === category
				? 'bg-brand text-white'
				: 'bg-sage-100 text-sage-700 hover:bg-sage-200 dark:bg-sage-800 dark:text-sage-300 dark:hover:bg-sage-700'}"
		>
			{category}
		</a>
	{/each}
</div>
