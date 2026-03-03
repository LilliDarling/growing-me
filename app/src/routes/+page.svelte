<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import AboutSnippet from '$lib/components/home/AboutSnippet.svelte';
	import FeaturedPosts from '$lib/components/home/FeaturedPosts.svelte';
	import QuoteSection from '$lib/components/home/QuoteSection.svelte';
	import GallerySection from '$lib/components/home/GallerySection.svelte';
	import SEO from '$lib/components/shared/SEO.svelte';

	let { data } = $props();
</script>

<SEO
	title="Growing Me"
	description="Cultivating the existence I only ever dreamed of having in my career. Articles about software engineering, women in STEM, ADHD, and career growth."
/>

<Hero />
<FeaturedPosts posts={data.featuredPosts} />
<QuoteSection />
<AboutSnippet />
<GallerySection />
