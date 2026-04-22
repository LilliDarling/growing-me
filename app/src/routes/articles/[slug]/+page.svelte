<script lang="ts">
	import { formatDate } from '$lib/utils/format-date.js';
	import SEO from '$lib/components/shared/SEO.svelte';
	import CommentSection from '$lib/components/articles/CommentSection.svelte';
	import CognitiveLoadWorksheet from '$lib/components/shared/CognitiveLoadWorksheet.svelte';

	let { data } = $props();
	let post = $derived(data.post);
	let slug = $derived(data.slug);
</script>

<SEO
	title={post.title}
	description={post.description || `${post.title} by ${post.author}`}
	image={post.image || '/selfie1.jpg'}
	type="article"
	article={{ author: post.author, date: post.date, category: post.category }}
/>

<article class="md:grid md:grid-cols-[1.5fr_4fr]">
	<!-- Left column: sticky metadata -->
	<div class="px-6 py-12 md:sticky md:top-30 md:h-fit md:py-20">
		<a
			href="/articles"
			class="text-sm font-medium text-brand transition-colors hover:text-brand-light dark:text-sage-300 dark:hover:text-sage-200"
		>
			&larr; Back to Articles
		</a>

		{#if post.category}
			<span
				class="mt-3 block w-fit rounded-full bg-sage-300 px-3 py-1 text-xs font-medium text-sage-800"
			>
				{post.category}
			</span>
		{/if}

		<h1 class="mt-4 font-heading text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
			{post.title}
		</h1>

		<p class="mt-4 text-gray-500 dark:text-gray-500">
			{post.author} &bull; {formatDate(post.date)}
		</p>
	</div>

	<!-- Right column: scrollable content -->
	<div class="px-6 py-2 md:px-10 md:py-16 md:border-l md:border-sage-200 dark:md:border-sage-700">
		<!-- Hero image -->
		{#if post.image}
			<div class="mb-10 aspect-[14/7] shadow-xl/40 overflow-hidden rounded-4xl bg-sage-100 dark:bg-sage-800">
				<img src={post.image} alt={post.title} decoding="async" class="h-full w-full object-cover" />
			</div>
		{/if}

		<!-- Markdown content -->
		<div
			class="prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:font-heading prose-headings:text-gray-900 prose-a:text-brand prose-blockquote:border-brand prose-blockquote:text-gray-600 dark:prose-headings:text-gray-100 dark:prose-a:text-sage-300 dark:prose-blockquote:border-sage-500 dark:prose-blockquote:text-gray-400"
		>
			{@html post.content}
		</div>

		{#if slug === 'seasons-of-silence'}
			<CognitiveLoadWorksheet />
		{/if}

		<!-- Comments -->
		<CommentSection {slug} />

		<!-- Back link -->
		<div class="mt-12 border-t border-sage-200 py-4 dark:border-sage-700">
			<a
				href="/articles"
				class="text-sm font-medium text-brand transition-colors hover:text-brand-light dark:text-sage-300 dark:hover:text-sage-200"
			>
				&larr; Back to Articles
			</a>
		</div>
	</div>
</article>
