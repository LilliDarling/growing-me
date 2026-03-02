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
			? 'bg-blue-300 text-black'
			: 'bg-sage-200 text-sage-700 hover:bg-sage-400'}"
	>
		All
	</a>
	{#each categories as category}
		<a
			href="/articles?category={encodeURIComponent(category)}"
			class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors {active === category
				? 'bg-blue-300 text-black'
				: 'bg-sage-200 text-sage-700 hover:bg-sage-400'}"
		>
			{category}
		</a>
	{/each}
</div>
