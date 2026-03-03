<script lang="ts">
	import FeaturedArticle from '$lib/components/articles/FeaturedArticle.svelte';
	import CategoryFilter from '$lib/components/articles/CategoryFilter.svelte';
	import ArticleGrid from '$lib/components/articles/ArticleGrid.svelte';
	import SEO from '$lib/components/shared/SEO.svelte';

	let { data } = $props();
</script>

<SEO
	title="Articles"
	description="Browse articles about software engineering, women in STEM, ADHD, and career growth."
/>

<!-- Featured Article - full width -->
{#if data.featured}
	<section class="mb-16">
		<FeaturedArticle post={data.featured} />
	</section>
{/if}

<div class="mx-auto max-w-6xl px-6 py-12">
	<!-- Category Filter -->
	<section class="mb-10">
		<h2 class="mb-4 font-heading text-xl font-semibold text-gray-900 dark:text-gray-100">
			Browse by Category
		</h2>
		<CategoryFilter categories={data.categories} active={data.activeCategory} />
	</section>

	<!-- Article Grid -->
	<section>
		<ArticleGrid posts={data.posts} />
	</section>
</div>
