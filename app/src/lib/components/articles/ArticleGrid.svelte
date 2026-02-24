<script lang="ts">
	import type { PostMeta } from '../../utils/posts';
	import ArticleCard from './ArticleCard.svelte';

	let { posts }: { posts: PostMeta[] } = $props();
</script>

{#if posts.length === 0}
	<div class="py-12 text-center">
		<p class="text-gray-500 dark:text-gray-400">No articles found.</p>
	</div>
{:else}
	<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<ArticleCard {post} />
		{/each}
	</div>
{/if}
