<script lang="ts">
	import type { PostMeta } from '../../utils/posts';
	import ArticleCard from '../articles/ArticleCard.svelte';
	import SectionHeading from '../shared/SectionHeading.svelte';

	let { posts }: { posts: PostMeta[] } = $props();
</script>

<section class="bg-surface-light-alt dark:bg-surface-dark pt-5 overflow-hidden">
	<div class="relative w-full">
		<svg
			viewBox="0 0 500 200"
			preserveAspectRatio="none"
			class="absolute inset-0 w-full h-full z-0"
		>
			<path
				d="M0,60 C150,160 350,-40 500,60 L500,170 C350,70 150,250 0,170 Z"
				class="fill-sage-300"
			></path>
		</svg>
		<div class="mx-auto max-w-6xl px-6 py-15 relative z-10">
			<SectionHeading title="Featured Posts" />
			<div class="my-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each posts.slice(0, 3) as post}
					<ArticleCard {post} />
				{/each}
			</div>
		</div>
	</div>
</section>
