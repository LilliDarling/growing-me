<script lang="ts">
	import type { PostMeta } from '../../utils/posts';
	import ArticleCard from '../articles/ArticleCard.svelte';
	import SectionHeading from '../shared/SectionHeading.svelte';

	let { posts }: { posts: PostMeta[] } = $props();
</script>

<section class="bg-sage-300 dark:bg-surface-dark-alt">
	<div class="relative w-full">
		<svg 
			viewBox="0 0 500 150" 
			preserveAspectRatio="none" 
			class="absolute top-0 left-0 w-full h-[200px] z-0"
		>
			<path 
				d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" 
				class="fill-surface-light-alt"
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
		<svg 
			viewBox="0 0 500 150" 
			preserveAspectRatio="none" 
			class="absolute bottom-0 left-0 w-full h-[200px] z-0 rotate-180"
		>
			<path 
				d="M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z" 
				class="fill-surface-light-alt"
			></path>
		</svg>
	</div>
</section>
