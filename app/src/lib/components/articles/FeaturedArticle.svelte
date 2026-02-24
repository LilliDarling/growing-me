<script lang="ts">
	import type { PostMeta } from '../../utils/posts';
	import { formatDate } from '../../utils/format-date';
	import Button from '../shared/Button.svelte';

	let { post }: { post: PostMeta } = $props();
</script>

<div class="grid gap-8 md:grid-cols-2 md:items-center">
	<!-- Image -->
	<div class="aspect-[4/3] overflow-hidden rounded-xl bg-sage-100 dark:bg-sage-800">
		{#if post.image}
			<img
				src={post.image}
				alt={post.title}
				class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
			/>
		{:else}
			<div class="flex h-full w-full items-center justify-center text-sage-400">Featured</div>
		{/if}
	</div>

	<!-- Content -->
	<div>
		{#if post.category}
			<span
				class="inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-700 dark:bg-sage-800 dark:text-sage-300"
			>
				{post.category}
			</span>
		{/if}
		<h2 class="mt-3 font-heading text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
			{post.title}
		</h2>
		<p class="mt-3 text-sm text-gray-500 dark:text-gray-500">
			{post.author} &bull; {formatDate(post.date)}
		</p>
		<div class="mt-6">
			<Button href="/articles/{post.slug}" variant="secondary">Read Full Article</Button>
		</div>
	</div>
</div>
