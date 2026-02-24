<script lang="ts">
	import { formatDate } from '$lib/utils/format-date.js';

	let { data } = $props();
	let post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} - Growing Me</title>
	<meta name="description" content="{post.title} by {post.author}" />
</svelte:head>

<article class="mx-auto max-w-3xl px-6 py-12">
	<!-- Header -->
	<header class="mb-10">
		{#if post.category}
			<span
				class="inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-700 dark:bg-sage-800 dark:text-sage-300"
			>
				{post.category}
			</span>
		{/if}
		<h1 class="mt-3 font-heading text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-100">
			{post.title}
		</h1>
		<p class="mt-4 text-gray-500 dark:text-gray-500">
			{post.author} &bull; {formatDate(post.date)}
		</p>
	</header>

	<!-- Hero image -->
	{#if post.image}
		<div class="mb-10 aspect-[16/9] overflow-hidden rounded-xl bg-sage-100 dark:bg-sage-800">
			<img src={post.image} alt={post.title} class="h-full w-full object-cover" />
		</div>
	{/if}

	<!-- Markdown content -->
	<div
		class="prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-gray-900 prose-a:text-brand prose-blockquote:border-brand prose-blockquote:text-gray-600 dark:prose-headings:text-gray-100 dark:prose-a:text-sage-300 dark:prose-blockquote:border-sage-500 dark:prose-blockquote:text-gray-400"
	>
		{@html post.content}
	</div>

	<!-- Back link -->
	<div class="mt-12 border-t border-sage-200 pt-8 dark:border-sage-700">
		<a
			href="/articles"
			class="text-sm font-medium text-brand transition-colors hover:text-brand-light dark:text-sage-300 dark:hover:text-sage-200"
		>
			&larr; Back to Articles
		</a>
	</div>
</article>
