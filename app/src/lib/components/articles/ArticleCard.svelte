<script lang="ts">
	import type { PostMeta } from '../../utils/posts';
	import { formatDate } from '../../utils/format-date';

	let { post }: { post: PostMeta } = $props();
</script>

<a
	href="/articles/{post.slug}"
	class="group block overflow-hidden rounded-xl bg-blue-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
>
	<!-- Image -->
	<div class="aspect-[16/10] overflow-hidden bg-sage-100 dark:bg-sage-800">
		{#if post.image}
			<img
				src={post.image}
				alt={post.title}
				loading="lazy"
				decoding="async"
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		{:else}
			<div class="flex h-full w-full items-center justify-center text-sage-400 dark:text-sage-600">
				<span class="text-sm">No image</span>
			</div>
		{/if}
	</div>

	<!-- Content -->
	<div class="p-5">
		{#if post.category}
			<span
				class="inline-block rounded-full bg-sage-100 px-3 py-0.5 text-xs font-medium text-sage-700"
			>
				{post.category}
			</span>
		{/if}
		<h3
			class="mt-2 line-clamp-2 font-heading text-lg font-semibold text-gray-900"
		>
			{post.title}
		</h3>
		<p class="mt-2 text-sm text-gray-500">
			{post.author} &bull; {formatDate(post.date)}
		</p>
	</div>
</a>
